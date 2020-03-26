<template>
  <div class="inner">
    <div class="contentsHead">
      <v-icon>mdi-equalizer</v-icon>
      <h3>매출정보</h3>
    </div>

    <div class="sales section_wrap">
      <DateQuery @update="updateDate" />

      <div class="data_section section">
        <v-data-table
          locale="ko-kr"
          :loading="loading"
          :headers="headers"
          :items="desserts"
          :items-per-page="10"
          :hide-default-footer="true"
        >
          <template v-slot:item.inputAmount="{ item }">
            {{ item.inputAmount | numeral('0,0') }}원
          </template>
          <template v-slot:item.amount="{ item }"> {{ item.amount | numeral('0,0') }}원 </template>
          <template v-slot:item.calcId="{ item }">
            {{ item.calcId ? '완료' : '대기' }}
          </template>
          <template v-slot:item.createdAt="{ item }">
            {{ item.createdAt | moment('YY-MM-DD A hh:mm') }}
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              이용내역이 없습니다
            </v-alert>
          </template>
        </v-data-table>
      </div>
      <v-pagination v-model="query.page" :length="Math.ceil(totalCount / 10)" @input="updatePage" />
    </div>
    <!-- section_wrap -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DateQuery from '@/components/DateQuery.vue';

export default {
  name: 'Sales',
  components: { DateQuery },
  data: () => ({
    loading: false,
    totalCount: 0,
    query: {
      page: 1,
      limit: 10,
      start: new Date([2020, 3, 1]).toISOString().substr(0, 10),
      end: new Date().toISOString().substr(0, 10),
    },
    headers: [
      {
        text: '장비명',
        align: 'center',
        sortable: false,
        value: 'machineName',
      },
      { text: '투입금액', sortable: false, align: 'right', value: 'inputAmount' },
      { text: '실지급액', sortable: false, align: 'right', value: 'amount' },
      { text: '투입일시', sortable: false, align: 'center', value: 'createdAt' },
      { text: '정산상태', sortable: false, align: 'center', value: 'calcId' },
    ],
    desserts: [],
  }),
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions(['getUseList']),
    async getList() {
      this.loading = true;
      const list = await this.getUseList(this.query);
      this.loading = false;
      this.totalCount = list.count;
      this.desserts = list.rows;
    },
    updatePage(page) {
      this.getList(false);
    },
    updateDate(params) {
      this.query.page = 1;
      this.query.start = params.start;
      this.query.end = params.end;
      this.getList(true);
    },
  },
};
</script>
