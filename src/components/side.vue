<template>
  <div id="sideView">
    <v-list class="navigation">
      <v-list-item-group>
        <v-list-item class="naviBtn" active-class="active" @click="pageMove('/')">
          <v-icon>mdi-equalizer</v-icon>
          <span>매출정보</span>
        </v-list-item>
        <v-list-item class="naviBtn" active-class="active">
          <v-icon>mdi-calendar-text</v-icon>
          <span>주문정보</span>
        </v-list-item>
        <v-list-item class="naviBtn" active-class="active">
          <v-icon>mdi-washing-machine</v-icon>
          <span>장비사용정보</span>
        </v-list-item>
        <v-list-item class="naviBtn" active-class="active" @click="pageMove('Calculate')">
          <v-icon>mdi-file-document-outline</v-icon>
          <span>정산내역</span>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  methods: {
    pageMove(name) {
      this.$router.push(name);
    },
  },
};
</script>
