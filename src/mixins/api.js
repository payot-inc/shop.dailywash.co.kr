import ProfileMixins from './profile';

export default {
  mixins: [ProfileMixins],
  methods: {
    // 로그인
    async login(email, password) {
      console.log(email, password);
    },
    // 수거배달원 총 이용내역 불러오기
    async getInputCoinList(page = 1) {
      const { id } = this;
      console.log(id);
    },

    async getCalcList(page = 1) {
      const { id } = this;
      const url = `/`;
      const list = await this.$axios.get();
    },
  },
};
