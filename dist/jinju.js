var JinJu = {
    data: [
        { "type": "1", "content": "每颗人间烟火，都不要错过。" },
        { "type": "1", "content": "做世界的水手，奔赴所有港口。" },
        { "type": "1", "content": "心之所向，素履以往。" },
        { "type": "1", "content": "保持热爱，奔赴山海。" },
        { "type": "1", "content": "世间美好，与你环环相扣。" },
        { "type": "1", "content": "希望是火，失望是烟，生活就是一边点火，一边冒烟。" },
        { "type": "1", "content": "记忆，就好像是神话里的筛子筛去了垃圾，保留了金沙。" },
        { "type": "1", "content": "命运写在掌纹里，掌纹写在自己手里。" },
        { "type": "1", "content": "我对你欣赏，你对我观望。" },
        { "type": "1", "content": "最美的不是下雨天，是曾与你躲过雨的屋檐。" },
        { "type": "1", "content": "岁月不饶人，我亦未曾饶过岁月。" },
        { "type": "1", "content": "谁，执我之手，消我半世孤独；谁，扶我之肩，驱我一世沉寂。" },
        { "type": "1", "content": "世界的模样，取决你凝视它的目光。" },
        { "type": "1", "content": "热闹是他们的，我什么都没有。" },
        { "type": "1", "content": "红尘万载，而我多眷恋。" },
        { "type": "1", "content": "最初不相识，最后不相认。" },
        { "type": "1", "content": "青山已碎，燕子空回。" },
        { "type": "1", "content": "山河远阔，人间烟火。无一是你，无一不是你。" },
        { "type": "1", "content": "山山而川，生生不息。" },
        { "type": "1", "content": "花看半开，酒饮微醺。" },
        { "type": "1", "content": "天地不仁，以万物为刍狗。" },
        { "type": "1", "content": "醉后不知天在水，满船清梦压星河。" },
        { "type": "1", "content": "山中何事？松花酿酒，春水煎茶。——张可久《人月圆·山中书事》" },
        { "type": "1", "content": "远远围墙，隐隐茅堂。飏青旗、流水桥旁。——秦观《行香子·树绕村庄》" },
        { "type": "1", "content": "两水夹明镜，双桥落彩虹。人烟寒橘柚，秋色老梧桐。——李白《秋登宣城谢眺北楼》" },
        { "type": "1", "content": "宇宙山河烂漫，生活点滴温暖。 ——唐温如《题龙阳县青草湖》" },

    ],
    start: function (id, timeout = 5000, type = null) {
        function set(filterData, id) {
            function randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * minNum + 1, 10);
                        break;
                    case 2:
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                        break;
                    default:
                        return 0;
                        break;
                }
            }

            var index = randomNum(0, filterData.length - 1);
            var item = filterData[index].content;
            var doc = document.getElementById(id);
            doc.innerHTML = item;
        }
        //init
        if (id == null || id.length == 0) {
            return;
        }
        var dist = [];
        if (type != null && type.length > 0) {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].type == type) {
                    dist.push(this.data[i]);
                }
            }
        }
        if (dist == null || dist.length == 0) {
            dist = this.data;
        }
        //init
        set(dist, id, type);
        if (timeout == null || timeout == undefined) {
            timeout = 3000;
        }
        //interval
        setInterval(function () {
            set(dist, id, type);
        }, timeout);
    }
}