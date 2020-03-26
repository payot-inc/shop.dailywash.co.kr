<template>
  <div class="inner">
    <div class="contentsHead">
      <v-icon>mdi-equalizer</v-icon>
      <h3>정산내역</h3>
    </div>

    <div class="sales section_wrap">
      <div class="dateSearch section">
        <dl>
          <dt>날짜검색</dt>
          <dd>
            <div class="date_select">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{on}">
                  <v-text-field
                    single-line
                    v-model="date1"
                    readonly
                    v-on="on"
                    flat
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date1" @input="menu1 = false"></v-date-picker>
              </v-menu>
            </div>
            <div class="date_select">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{on}">
                  <v-text-field
                    single-line
                    v-model="date2"
                    readonly
                    v-on="on"
                    flat
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </div>
          </dd>
        </dl>
      </div> <!-- date_section -->

      <div class="calculate section">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header>
              <div class="complate_date">
                <strong>정산예정</strong>
                <span>(2019.11.01~11.10)</span>
              </div>
              <div class="price">
                  <span>387,857원</span>
              </div>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <ul>
                <li>
                  <p>
                    <span>정산처리일</span>
                    <strong>2019.11.24</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <span>장비이용횟수</span>
                    <strong>321회</strong>
                  </p>
                  <p>
                    <span>총 사용금액</span>
                    <strong>345,400원</strong>
                  </p>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div> <!-- section_wrap -->

  </div>
</template>

<script>

export default {
  name: 'Sales',

  data: () => ({
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
  }),
};
</script>
