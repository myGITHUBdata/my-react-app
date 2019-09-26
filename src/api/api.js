import Server from './server';

class API extends Server {
    // 公告
    async getNotice(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/notice/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商品
    async getGoods(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/goods/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商家主页
    async getShop(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商家状态
    async getShopStatusApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/baseDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商场主页
    async getMarket(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/market/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 关注商场
    async followMarket(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/shop/follow', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商场主页 - 基本信息
    async getMarketBase(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/market/baseDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 论坛话题
    async getTopic(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/forum/topic/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 论坛留言板
    async getBoard(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/bbs/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    async getBoardList(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/bbs/msg/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 论坛留言板 - 留言删除
    async postBoardBBSDel(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/bbs/msg/del', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 论坛留言板 - 留言点赞
    async postBoardBBSZan(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/bbs/msg/zan', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机场详情
    async getAirport(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/airport/detail/rich', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 校友圈报到
    async getAlumniReport(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/school/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 航空公司
    async getAirline(params = {}) {
        try {
            let result = await this.axios('get', '/h5/json/airline.json', {
                baseURL: null,
                ...params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 写字楼、小区报到
    async getBuildingReport(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/building/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 获取社区信息列表
    async getBuildingArticleList(params = {}) {
        try {
            let result = await this.axios('post', '/circle/v1/building/article/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 活动
    async getCoupon(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/use/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    async checkCoupon(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/use/check', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    async getSpreadCoupon(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/receive/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    async couponReceive(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/receive', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    async couponHBReceive(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/hb/receive', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 推广活动 - 活动详情
    async getSpread(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/tg/info', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 推广活动 - 手机号参与
    async getSpreadPhone(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/tg/fill', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 推广活动 - 礼品列表
    async getGift(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/gift/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 推广活动 - 礼品选择
    async giftChoose(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/gift/choose', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 推广活动 - 地址保存
    async addressAdd(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/coupon/new/address/add', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 秀客 - 视频播放
    async showerVideo(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/showke/video/info', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 抽奖 - 主页详情
    async getLottery(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/tg/info', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 抽奖 - 手机号填写
    async getLotteryPhone(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/tg/fill', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 抽奖 - 轮盘详情
    async getLotteryDraw(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 抽奖 - 轮盘抽奖
    async getLotteryDrawing(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/draw', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 抽奖 - 短信验证
    async getLotterySMSCheck(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/sms/check', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 抽奖 - 重发短信
    async getLotterySMSSend(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/sms/send', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 抽奖 - 短信链接页
    async getLotterySMS(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/sms/chain', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影社区活动 - 活动详情
    async getMovie(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/fashion/detail2', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影社区活动 - 抽奖
    async getMovieDraw(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/draw2', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 时装周活动 - 活动详情
    async getFashion(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/fashion/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 时装周活动 - 获取验证码
    async getFashionPhone(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/v1/cj/fashion/fill', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 时装周活动 - 微信授权openid获取
    async getWXOpenId(params = {}) {
        try {
            let result = await this.axios('get', 'circle2/wx/openid', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    async getProduction(params = {}) {
        try {
            let result = await this.axios('get', '/shopro/data/products', params);
            if (result && (result.data instanceof Object)) {
                return result.data.data
            } else {
                let err = {
                    tip: '获取商品数据识失败',
                    response: result,
                    data: params
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }
    //欢乐旅途核销系统
    async getWriteOffData(params = {}) {
        try {
            let result = await this.axios('get', 'promotion/v1/play/countConsumeNo', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // fans地带
    // 我的call值
    async getMyCall(params = {}) {
        try {
            let result = await this.axios('get', 'circle4/v1/call/personal', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //粉丝贡献榜
    async getFansContribution(params = {}) {
        try {
            let result = await this.axios('get', 'circle4/v1/call/dedicate/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //公众圈call榜
    async getFansPopularity(params = {}) {
        try {
            let result = await this.axios('get', 'circle4/v1/call/rank/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带主页活动列表
    async getFansActivityList(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带活动详情
    async getFansActivityDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带活动详情
    async getFansActivityNotice(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/notice', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带活动留言列表
    async getFansActivityLeavemsgList(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/leavemsg/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带活动参与
    async getFansActivityJoin(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/join', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带活动留言回复
    async getFansActivityLeavemsg(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/leavemsg', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带活动留言回复
    async getFansActivityMemberList(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/member/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带活动留言删除
    async getFansActivityLeavemsgDel(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/fans/activity/leavemsg/delete', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带签到详情
    async getFansSignInDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/call/signin/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带签到
    async getFansSignIn(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/call/signin', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带今日任务
    async getFansTaskDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/call/task/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带今日任务
    async getFansTaskScoreReceive(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/call/score/receive', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // fans地带今日任务功能校验
    async getFansTaskFuncCheck(params = {}) {
        try {
            let result = await this.axios('get', '/circle4/v1/call/func/check', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 金色世纪活动详情
    async getActivityGolden(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/golden/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 金色世纪活动手机号填写
    async getActivityGoldenFill(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/golden/fill', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 金色世纪活动抽奖
    async getActivityGoldenDraw(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/golden/draw', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 金色世纪活动详情（铛铛内）
    async getActivityGoldenDD(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/golden/detail2', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 金色世纪活动抽奖（铛铛内）
    async getActivityGoldenDrawDD(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/golden/draw2', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 金色世纪vip - 详情
    async getActivityGoldenVIP(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/golden/np', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }


    // 金色世纪vip - vip卡领取
    async getActivityGoldenVIPRec(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/golden/apply', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }


    // 月刊 - 详情
    async getActivityMothly(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/monthly/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 月刊 - 抽奖
    async getActivityMothlyDraw(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/cj/monthly/draw', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 城市公共信息
    async getCityBase(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/city/baseCity', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    async getCityDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/city/cityField', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 组局 - 组局活动详情
    async getGroupDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/comb/zjDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 组局 - 组局活动参与详情
    async getGroupPartakeDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //组局 -我的组局列表
    async getMyGroupList(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //组局 -移除组局成员
    async removeGrouper(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/removeMember', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 卡包 - 券简介
    async getCardsTicketIntro(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/prizeDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 卡包 - 券详情 - 饿了吗订单详情
    async elmOrderDetail(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/elm/elmOrderDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 卡包 - 券详情
    async getCardsTicketDetail(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/queryCouponDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 卡包 - 券详情 - 提交申请返现
    async submitConsumeApplyApi(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/consumeApply/submit', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 卡包 - 券详情 - 获取抽奖码
    async getLotteryCouponApi(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/coupon/lotteryCoupon', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 卡包 - 订单详情
    async getCardsTicketOrder(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/queryPrePay', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 卡包 - 中越彩票兑换
    async useCouponCode(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/useCouponCode', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 优惠卷-商品整合优惠券
    async guideCoverListApi(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/coupon/guideCoverList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //保存邮寄地址
    async savePayInfo(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/savePayInfo', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 卡包 - 兑换券
    async getCardsTicketExchange(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/consumeCoupon', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }


    // lucky - 抽奖详情
    async getLuckyDetail(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/lottery/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // lucky - 抽奖
    async getLucky(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/lottery/lotteryPrize', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 现金券 领取页
    async lotteryPrizeApply(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/play/applyPlayCoupon', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 现金券 领取操作
    async applyCoupon(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/applyCouponByCouponId', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 电影票购买 - 城市信息
    async initArea(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/area/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影票购买 - 影院主页
    async postMovieMain(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/movie/main', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 电影票购买 - 热门影片
    async getHotFilms(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/movie/getHotFilms', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影票购买 - 影院主页
    async getMovieCinema(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/movie/cinema', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影票购买 - 影院主页
    async getMovieSeat(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/movie/seat', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影票购买 - 确认订单
    async getMovieBuyPrePayOrder(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/movie/order/prePayOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影票购买 - 我的订单列表
    async getMovieBuyOrderList(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/movie/order/orderList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影票购买 - 订单详情
    async getMovieBuyOrderDetail(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/movie/order/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 电影票购买 - 热映列表
    async getMovieBuyHotFilms(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/movie/getHotFilms', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 论坛相册 - 详情页面
    async getForumPhotoDetailApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/album2/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 论坛相册 - 详情页面 - 分页接口 
    async getForumPhotoPagingApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/album2/img/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    async getShowMain(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/show/showMain', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    async postShowTicketTime(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/show/submitTicketTime', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 知道--获取问题详情内容
    async getProblemContentDetailAPI(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/ques/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 知道--获取回答详情内容
    async getAnswerDetailAPI(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/answer/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 知道--获取回答列表
    async getAnswerListAPI(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/answer/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    /**
     * 购物接口
     * 
     */

    // 主页
    async shopMain(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/shop/main', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商品详情页
    async getShopGoodsDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/goods/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商品关注
    async getShopGoodsFollow(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/follow', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商品关注
    async shopTrack(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/express/track', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    async shopConfirm(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/confirm', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商品评论
    async getShopGoodsComment(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/goods/comment', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 商品组团成员列表
    async getShopGoodsGroupMember(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/goods/group/member', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 地址列表
    async addr_list(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/addr/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 订单列表 
    async getShopOrderListApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 地址新增
    async addr_add(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/addr/add', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 评价详情
    async getShopOrderCdetailApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/comment/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 获取评价页面订单数据
    async getShopOrderCommentListApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/comment/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 地址删除
    async addr_del(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/addr/del', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 地址编辑
    async addr_edit(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/addr/edit', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 关注商品列表
    async getShopGoodsFollowListApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/goods/followList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 提交订单
    async shop_order_pre(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/pre', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 我的订单列表
    async shop_sum(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/sum', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 订单详情页
    async shop_orderDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 修改订单状态
    async modifyShopOrderStatusApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ecom/order/do', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 确认订单详情（老商家）
    async orderWrite(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/shop/order/buyer/orderWrite', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 确认订单下单（老商家）
    async createOrder(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/shop/order/buyer/createOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    /**
     * 购物接口结束
     */

    //运动猜猜猜
    async guessMain(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/liveguess/guessMain', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    /**
     * 组局集福活动
     */

    //  集福活动详情
    async getGroupBlessDetail(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/fu/adetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 抽福字
    async getGroupBlessLucky(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/lucky', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 领福袋编号
    async getGroupBlessCr(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/cr', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 输入编码获取福字
    async getGroupCodFontApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/cc', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 饿了吗
    async elmUse(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/elm/elmUse', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 活动-选择领取奖品
    async getCardActivityGiftApi(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/gift/giftPlayDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 活动-兑换码兑换奖品
    async getCardActivityRedeemCodeApi(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/exchange/queryExchangeDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 旧商家-获取优惠卷详情
    async getTemplateDetailApi(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/template/templateDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-获取优惠卷列表
    async getTemplateListApi(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/template/templateList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-领取优惠卷
    async getSendShopCouponApi(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/shop/coupon/sendShopCoupon', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-获取优惠卷使用状态
    async getShopCouponDetailApi(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/shopCouponDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-买家订单状态列表
    async getMallOrderListApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/buyer/orderList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-卖家订单状态列表
    async getMallSellerOrderListApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/seller/orderList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-订单详情
    async getMallOrderDetailApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/orderDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-确认收货
    async getMallConfirmOrderApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/buyer/confirmOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-删除订单
    async getMallDeleteOrderApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/buyer/deleteOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-取消订单(买家)
    async getMallBuyerCloseOrderApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/buyer/closeOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-取消订单（卖家）
    async getMallSellerCloseOrderApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/seller/closeOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-我的订单（用户）
    async getMallBuyerOrderCountApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/buyer/orderCount', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 旧商家-我的订单（卖家）
    async getMallSellerOrderCountApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/order/seller/orderCount', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 社区公告详情
    async notice_detail(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/building/notice/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 现场公告详情
    async scene_notice_detail(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/scene/notice/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 现场评论列表
    async sceneDiscussListApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/function/comment/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    /********************************活动礼品领取-API*****************************************/

    //礼包领取
    async giftApply(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/gift/giftApply', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //礼包领取 (外部 手机 验证码)
    async getCode(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/play/sendCode', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }


    // 券码验证
    async giftExecutecheck(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/exchange/check', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 券码兑换
    async giftExecute(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/exchange/execute', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //外部奖券去使用统计
    async outUseCoupon(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/outUseCoupon', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //外部奖券详情
    async outCouponDetail(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/outCouponDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //外部奖券 密码核销
    async pwdConsume(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/pwdConsume', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //商业服务评论列表
    async shopCommentList(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/shop/comment/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    /********************************飞机票接口-API*****************************************/

    // 机票搜索列
    async flightSearchList(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ato/flight/search', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //低价日期   
    async dailyLowestPriceList(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ato/daily/price', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-乘机人-列表
    async planePassengerListApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/passenger/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-乘机人-新增
    async planePassengerAddApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/passenger/add', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-乘机人-更新
    async planePassengerEditApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/passenger/edit', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-乘机人-删除
    async planePassengerDelApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/passenger/del', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-退改签政策数据
    async planeStipulateApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ato/modifyAndRefund/stipulate', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-获取儿童票价
    async planeChildrenPriceApi(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/ato/children/price', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-创建订单
    async planeCreateOrderApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/ato/createOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-订单列表
    async planeOrderListApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/ato/orderList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 机票-订单详情
    async planeOrderDetailApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/ato/orderDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }


    /********************************组局（微信）新增接口-API*****************************************/

    //组局（外部）关闭
    async zjclose(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/close', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //组局（外部）加入
    async zjjoin(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/join', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //组局（外部）发送验证码
    async zjsend(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/code/sms/send', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //组局（外部）完成
    async zjcomplete(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/complete', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //组局（外部）验证验证码
    async zjcheck(params = {}) {
        try {
            let result = await this.axios('get', '/circle/v1/code/sms/check', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //组局（外部）创建
    async zjcreate(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/create', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //组局（外部）校验创建
    async zjcheckCreate(params = {}) {
        try {
            let result = await this.axios('get', '/circle2/v1/zj/checkCreate', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //外部抽奖活动验证手机号
    async authCode(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/lottery/authCode', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //火车票查询
    async queryTrainList(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/train/queryTrainList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //寻宝验证手机号
    async authCodeBox(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/baby/authCode', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 火车票-创建订单
    async trainCreateOrderApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/train/createOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //寻宝活动详情
    async seekBabyDetail(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/baby/seekBabyDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 火车票-我的订单列表
    async trainOrderListApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/train/orderList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 火车票-订单详情
    async trainOrderDetailApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/train/orderDetail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 火车票-时刻表查询
    async trainStationApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/train/trainStation', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 火车票-退票
    async trainRefundTicketApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v2/train/refundTicket', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //电视奖券-提交信息
    async tvTickets(params = {}) {
        try {
            let result = await this.axios('get', '/promotion/v1/coupon/addAuditInfo', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 捐赠-详情
    async getDonateDetailApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/donate/detail', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 捐赠-捐赠记录列表
    async getDonateLoveListApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/donate/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 捐赠-我的捐赠列表
    async getMyDonateListApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/donate/orderList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 捐赠- 评论列表
    async getCommentListApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/function/comment/list', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    // 核销登陆验证
    async playConsumeLogin(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/playConsume/login', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //核销总览列表
    async getOverviewList(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/playConsume/consumeCount', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 欢乐路途-详情查询
    async getPlayConsumeConsumeQueryApi(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/playConsume/consumeQuery', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 埋点统计 
    async playStat(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/play/stat', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 埋点统计 (新)
    async playLog(params = {}) {
        try {
            let result = await this.axios('post', '/sundry/v1/log', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    // 寻宝中奖分享页面数据
    async playCoupon(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/coupon/playCoupon', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //通用奖券兑换 
    async exchangeCoupon(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/coupon/exchangeCoupon', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //通用奖券兑换 
    async queryRelationApp(params = {}) {
        try {
            let result = await this.axios('post', '/circle/v1/circle/queryRelationApp', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }

    //卡包使用优惠卷提交申请信息接口 
    async couponApplyUseAPI(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/coupon/applyUse', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //卡包使用优惠卷提交申请选项字段列表及已提交过的信息列表
    async getApplyUseSubmitList(params = {}) {
        try {
            let result = await this.axios('post', '/promotion/v1/coupon/applyUseSubmitList', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
    //卖家-确认旅游订单
    async confirmedOrderApi(params = {}) {
        try {
            let result = await this.axios('post', '/circle2/v1/shop/order/seller/confirmOrder', {
                params
            });
            if (result)
                return result
        } catch (err) {
            throw err
        }
    }
}

export default new API()