<template>
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
            <template v-slot:activator="{ on }">
              <v-text-field single-line v-model="date1" readonly v-on="on" flat outlined />
            </template>
            <v-date-picker
              locale="ko-kr"
              v-model="date1"
              @input="menu1 = false"
              :min="new Date([2020, 3, 1]).toISOString().substr(0, 10)"
              :max="new Date().toISOString().substr(0, 10)"
            />
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
            <template v-slot:activator="{ on }">
              <v-text-field single-line v-model="date2" readonly v-on="on" flat outlined />
            </template>
            <v-date-picker
              locale="ko-kr"
              v-model="date2"
              @input="menu2 = false"
              :min="date1"
              :max="new Date().toISOString().substr(0, 10)"
            />
          </v-menu>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data: () => ({
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu1: false,
    menu2: false,
  }),
  watch: {
    date1(newValue, oldValue) {
      this.$emit('update', { start: newValue, end: this.date2 });
    },
    date2(newValue, oldValue) {
      this.$emit('update', { start: this.date1, end: newValue });
    },
  },
};
</script>
