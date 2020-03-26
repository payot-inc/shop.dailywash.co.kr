<template>
  <div class="inner">
    <div class="contentsHead">
      <v-icon>mdi-equalizer</v-icon>
      <h3>정산내역</h3>
    </div>

    <div class="sales section_wrap">
      <div class="calculate section">
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in data" :key="i">
            <v-expansion-panel-header>
              <div class="complate_date">
                <strong>정산완료</strong>
                <span
                  >(
                  {{ item.start | moment('YYYY.MM.DD') }}
                  ~
                  {{ item.end | moment('YYYY.MM.DD') }}
                  )</span
                >
              </div>
              <div class="price">
                <span>{{ item.payAmount | numeral('0,0') }}원</span>
              </div>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <ul>
                <li>
                  <p>
                    <span>정산처리일</span>
                    <strong>{{ item.createdAt | moment('YYYY.MM.DD') }}</strong>
                  </p>
                  <p>
                    <span>정산내용</span>
                    <strong>{{ item.reason }}</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <span>장비이용횟수</span>
                    <strong>{{ item.count | numeral('0,0') }}회</strong>
                  </p>
                  <p>
                    <span>총 사용금액</span>
                    <strong>{{ item.amount | numeral('0,0') }}원</strong>
                  </p>
                  <p>
                    <span>결제 수수료</span>
                    <strong>(3.6%) {{ (item.amount * 0.036) | numeral('0,0') }}원</strong>
                  </p>
                  <p>
                    <span>총 지급액</span>
                    <strong>{{ item.payAmount | numeral('0,0') }}원</strong>
                  </p>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-pagination v-model="page" :langth="Math.ceil(totalCount / 10)" @input="getList($event)" />
    </div>
    <!-- section_wrap -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Sales',
  data: () => ({
    page: 1,
    totalCount: 10,
    data: [],
  }),
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions(['getPayList']),

    async getList(page = 1) {
      const result = await this.getPayList({ page, limit: 10 });
      this.totalCount = result.count;
      this.data = result.rows;
      console.log(result);
    },
  },
};
</script>
