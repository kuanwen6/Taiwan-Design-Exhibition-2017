const navigationInfo = `<h2>定時導覽</h2>
    
    <p>幸福設計168：1大主題區、6大衛星展區、8大展館，免費參觀。</p>
    
    <p>每日 10:30、11:30、14:30、15:30</p>
     
    <br>
    <h2>團體預約導覽</h2>
    
    <p>預約時間：即日起至10月10日止。</p>
    <span>導覽人數：10人(含)以上、30人以下。</span><br><span style="margin-left: 74px;" class="note">(10人以下建議參加現場定時導覽)</span>
    <br><br>
    <span>團體導覽時間：展期間之周一至周五，</span><br><span style="margin-left: 110px;">每日上午10點至下午5點</span>
    <p class="note">註：六、日及中秋(10/4)、國慶假日(10/9-10/10)，因參觀人數眾多，為維護參觀動線暢通，以及參觀與導覽品質，恕不提供團體預約導覽服務，採定時導覽，可現場報名參加。</p>
    <br>
    <h2>注意事項：</h2>
    <p class="note">欲申請團體導覽參觀之單位，將於9月中開放線上申請。屆時請於參觀日前3天填妥預約導覽表，並請務必來電確認本中心是否收到申請。</p>
    <p class="note">本展團體導覽採預約制，提交本表後僅代表已提出申請，我們將依申請預約之先後順序，以電子信件通知預約結果，再請留意您的電子信箱。(每日接受預約團體數有限，額滿為止)</p>
    <p class="note">導覽時間約60分鐘，若因故無法準時抵達請事先來電，預約時間僅保留10分鐘，逾時將視同放棄團體預約導覽，請自行參觀。</p>`

//  主題館 ftd[0]
const ftd = [{
        introduction: `<h1 style="text-align: center;">主題館</h1>
    <p>幸福的 ( )－由你來定義幸福的樣貌。來自不同領域的25位藝術家、舞團總監、建築師、設計師、創業家…等，在此分享屬於他們的幸福 (物件) 與 (故事)。</p>
    
    <p>此外，還要透過企業與設計師的觀點，邀你一同探究設計可以為我們創造什麼樣的幸福生活。看看臺灣引以為傲的紡織技術、雲端智能、循環經濟、綠能科技，如何為我們的生活與環境帶來更多令人覺得幸福的遠景！發現更多幸福的可能。</p>
    <br>
    <p>策展單位：天晴設計有限公司</p>`,

        traffic: `<h2>地點：成功大學舊圖書館</h2>
    <h2>地址：臺南市東區大學路1號 (成大勝利校區、成大會館旁)</h2><br>
    <h2>大眾交通:<h2>
    <h3>2017台灣設計展接駁專車：</h3><p>至「主題館／南風館」站下車，沿勝利路、大學路步行（約2分鐘）即可抵達。</p>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，步行或轉乘公車即可抵達。</p>
    <h3>火車：</h3><p>臺南車站下車後，由後站出站，沿大學路直行 (約8分鐘) 即可抵達。</p>
    <h3>公車(搭乘大臺南公車)：</h3>
    <p>市區公車6號，至「成大會館」站下車，沿大學路直行 (約2分鐘) 即可抵達。</p>
    <p>市區公車0左、0右，至「成大自強校區」站下車，沿長榮路、大學路直行 (約5分鐘) 即可抵達。</p>
    <p>市區公車77號，至「成大光復校區」或「成大自強校區」站下車，皆可抵達。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路右轉中華東路，左轉東寧路→長榮路→大學路即可抵達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經中正北路─中正南路─中華路右轉小東路 (180市道) →長榮路→大學路即可抵達。</p>`,

        parking: `<h2>路邊停車：</h2><p>大學路、勝利路、長榮路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>嘟嘟房成大勝利站停車場<span style="color: red;">（收費）</span>：臺南市東區大學路2號 ，成大會館地下室</p>
    <p>大遠百停車場<span style="color: red;">（收費）</span>：臺南市東區前鋒路210號</p>
    <p>國立成功大學大學路地下停車場<span style="color: red;">（收費）</span>：臺南市東區大學路1號</p>
    <p>國立成功大學光復校區計時收費停車場<span style="color: red;">（收費）</span>：臺南市東區大學路1號</p>
    <p>大學路社E2停車場<span style="color: red;">（收費）</span>：臺南市東區大學路與育樂街66巷交叉路口</p>`,
        items: [{
            title: '古代書籍',
        }, {
            title: '老舊的尺規',
        }],
    },

    //  南風館 ftd[1]
    {
        introduction: `<h1 style="text-align: center;">南風館</h1>
    <p>臺南一直以文化古都聞名全臺，擁有獨特的城市景觀、人文物產、建築空間等等，吸引眾多跨領域的創意工作者進駐，運用這些得天獨厚的資源對外發聲，孕育出各自的品牌意象與商業模式。</p>
    
    <p>2017台灣設計展南風館以『透』為主題，在溫暖濕熱南風吹拂之中，帶領民眾進入臺南七種不同類型的場域空間，從產品與服務雙重脈絡切入，探討經典體驗經濟與雋永手作行業，如何在這個電子商務、數位生活的時代洪流，堅持於多重場域裡近距離的真實接觸，開創出無法被虛擬服務取代情感交流。</p>
    
    <p>期待民眾漫步展場之中，同時可觀察透視臺南多元展業趨勢，無論是青年創業到銀髮樂齡，或是在地自主到國際串聯等，讓我們共同發現臺南的真實幸福感受。</p>
    
    <h2>城市漫遊美食風景</h2>
    <p>日期：2017/9/8-2018/2/28 10:00-17:00</p>
    <p>地點：台南老爺行旅7F</p><br>
    <p>策展單位：唐草設計有限公司</p>`,

        traffic: `<h2>地點：成功大學舊圖書館</h2>
    <h2>地址：臺南市東區大學路1號 (成大勝利校區、成大會館旁)</h2><br>
    <h2>大眾交通:<h2>
    <h3>2017台灣設計展接駁專車：</h3><p>至「主題館／南風館」站下車，沿勝利路、大學路步行（約2分鐘）即可抵達。</p>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，步行或轉乘公車即可抵達。</p>
    <h3>火車：</h3><p>臺南車站下車後，由後站出站，沿大學路直行 (約8分鐘) 即可抵達。</p>
    <h3>公車(搭乘大臺南公車)：</h3>
    <p>市區公車6號，至「成大會館」站下車，沿大學路直行 (約2分鐘) 即可抵達。</p>
    <p>市區公車0左、0右，至「成大自強校區」站下車，沿長榮路、大學路直行 (約5分鐘) 即可抵達。</p>
    <p>市區公車77號，至「成大光復校區」或「成大自強校區」站下車，皆可抵達。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路右轉中華東路，左轉東寧路→長榮路→大學路即可抵達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經中正北路─中正南路─中華路右轉小東路 (180市道) →長榮路→大學路即可抵達。</p>`,

        parking: `<h2>路邊停車：</h2><p>大學路、勝利路、長榮路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>嘟嘟房成大勝利站停車場<span style="color: red;">（收費）</span>：臺南市東區大學路2號 ，成大會館地下室</p>
    <p>大遠百停車場<span style="color: red;">（收費）</span>：臺南市東區前鋒路210號</p>
    <p>國立成功大學大學路地下停車場<span style="color: red;">（收費）</span>：臺南市東區大學路1號</p>
    <p>國立成功大學光復校區計時收費停車場<span style="color: red;">（收費）</span>：臺南市東區大學路1號</p>
    <p>大學路社E2停車場<span style="color: red;">（收費）</span>：臺南市東區大學路與育樂街66巷交叉路口</p>`,
        items: [{
            title: '南風',
        }, {
            title: '毛筆',
        }],
    },

    //  工藝館 ftd[2]
    {
        introduction: `<h1 style="text-align: center;">工藝館</h1>
    <p>2017台灣設計展在臺南，工藝中心在臺南吳園藝文中心策劃工藝主題館「秘密的連結」。運用多種工作營方式，希望能多和臺南對生活有想法的夥伴們，一起對話，一起探尋。</p>
    
    <p>工藝中心，近年來透過各種計畫，滲透工藝的營養液到臺南的土壤中，有竹，有木，有漆，有纖維。期待在這塊文化的沃土上，長出各種美好的生活樣貌。再成為臺灣時尚生活文化的領頭者。</p>
    
    <p>主題館展覽將以「工藝傳家寶 — 國際研創營：老衣物新生活」、「設計在地工藝時尚」、「體驗人文風尚生活 — 工藝X茶席」、「台南工藝好新鮮」等四大主題呈現。這次的展覽，希望找回人與工藝的連結，而不只是工藝產品，以此開始啟動城市自我的工藝重生，創造新的幸福生活。</p>
    <br>
    <p>策展單位：國立臺灣工藝研究發展中心</p>
    <p>協同策展：觸感私塾生活提案工作室、佐佐目藝文工作室、西屹設計有限公司</p>`,

        traffic: `<h2>地點：吳園藝文中心</h2>
    <h2>地址：臺南市中西區民權路二段30號</h2><br>
    <h2>大眾交通:<h2>
    <h3>2017台灣設計展接駁專車：</h3><p>至「工藝館」站下車即可抵達。</p>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，轉乘公車即可抵達。</p>
    <h3>火車：</h3><p>臺南車站下車後，由前站出站，轉乘公車即可抵達。</p>
    <h3>公車：</h3>
    <p>搭乘大臺南公車─市區公車14號，至「吳園」站下車即可抵達。</p>
    <p>搭乘觀光公車99號，至「吳園」站下車即可抵達。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路轉民權路即可抵達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經小北路─西門路左轉民權路即可抵達。</p>`,

        parking: `<h2>路邊停車：</h2><p>民權路、中山路、民族路、公園路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>娛樂城停車場<span style="color: red;">（收費）</span>：臺南市中西區公園路60號</p>
    <p>衛生福利部臺南醫院收費停車場<span style="color: red;">（收費）</span>：臺南市中西區中山路125號</p>
    <p>民族停車場<span style="color: red;">（收費）</span>：臺南市中西區民族路二段81號</p>
    <p>台灣聯通臺南忠義場<span style="color: red;">（收費）</span>：臺南市中西區忠義路二段177號旁</p>`,
        items: [{
            title: '貪婪之壺',
        }, {
            title: '祕法指環',
        }],
    },

    //  新銳館 ftd[3]
    {
        introduction: `<h1 style="text-align: center;">新銳館</h1>
    <p>「2017台灣設計展」於臺南藍晒圖文創園區規劃「新銳館」，廣邀臺灣各地37位新銳設計師/設計品牌前往展出。「新銳館」的策展主軸為「青出於藍」，不僅呼應藍晒圖文創園區，更是指青色從蓼藍裡提煉出來，象徵新銳設計師在業界嶄露頭角。</p>
    
    <p>此次展覽，強調呈現設計師的思考邏輯及設計準則，不僅在造型用途上，選用材料時也透過微觀的方式研發出許多令人驚豔的材質，抑或是從傳統工藝中汲取養分，以新的思維與突破刻板印象，賦予傳統文化新的生命。青出於藍代表的便是新世代的能量源源不絕，為整個產業灌注向前的動力。</p>
    <br>
    <p>策展單位：都市藝術工作室</p>
    <p>協同策展：藍晒圖文創園區</p>`,

        traffic: `<h2>地點：藍晒圖文創園區</h2>
    <h2>地址：臺南市南區西門路一段689巷</h2><br>
    <h2>大眾交通:<h2>
    <h3>2017台灣設計展接駁專車：</h3><p>至「新銳館」站下車即可抵達。</p>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，轉乘公車即可抵達。</p>
    <p>高鐵臺南站下車後轉乘高鐵接駁車，至「永華」站下車後可由園區北側路口到達園區。</p>
    <h3>火車：</h3><p>臺南車站下車後，由前站出站，轉乘公車即可抵達。</p>
    <h3>公車：</h3>
    <p>搭乘大臺南公車─市區公車1號、2號、5號、11號、18號、紅幹線、綠17、藍24，至「新光三越新天地」站下車步行約100公尺即可抵達。</p>
    <p>搭乘大臺南公車─市區公車10號、19號、藍幹線、藍23，至「永華」站下車後可由園區北側路口到達園區。</p>
    <p>高鐵接駁車H31，至「永華」站下車後可由園區北側路口到達園區。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路─府前路左轉西門路即可到達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經小北路─西門路即可到達。</p>`,

        parking: `<h2>路邊停車：</h2><p>樹林街、國華街、夏林路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>TIMES台南樹林街停車場<span style="color: red;">（收費）</span>：樹林街二段及大德街口</p>
    <p>嘟嘟房台南置地廣場站<span style="color: red;">（收費）</span>：和意路1號</p>
    <p>大億麗緻酒店停車場<span style="color: red;">（收費）</span>：西門路一段660號</p>
    <p>新光三越新天地停車場<span style="color: red;">（收費）</span>：西門路一段658號</p>
    <p>新光三越新天地二館停車場<span style="color: red;">（收費）</span>：永福路一段189號</p>
    <p>客家文化會館路外停車場<span style="color: red;">（收費）</span>：夏林路客家文化會館旁</p>`,
        items: [{
            title: '藍色染料',
        }, {
            title: '藍晒杯墊',
        }],
    },

    //  國際館 ftd[4]
    {
        introduction: `<h1 style="text-align: center;">國際館</h1>
    <p>此次台灣設計展國際展館的主題Betwin Ocean具有雙重涵意。首先在發音上與Between「在此之間」同音，意指因海洋形成彼此之間的空間關連性；而源自Between創造的詞彙Betwin＝Be+twin，則進一步標示出類似兄弟姊妹的「合作夥伴關係」。</p>
    
    <p>此次展覽一方面以400年前的國際貿易與文化歷史為背景，邀請荷蘭設計師進駐臺南，探討當年荷蘭人在印度與臺灣的活動以及臺灣的宗教信仰與祭祀，並與臺南的工藝家與傳統匠師共同創作。</p>
    
    <p>另一方面以循環經濟趨勢下的設計發展為題旨，邀集臺灣產業界及設計界的先驅者展出代表性作品，搭配來自荷蘭、印尼、泰國、日本等國設計師的創作，分為「材料創新」、「產品設計創新」、「製程與系統創新」、「廢棄物回收處理」、「研發與品牌」等五個項目，呈現當前臺灣與國際、產業與設計連結合作的多重面向。因此整體展場除了靜態的物件展示之外，也意圖展出動態的產業系統與設計製作的過程。</p>
    <br>
    <p>策展單位：C-Hub成大創意基地</p>
    <p>合作單位：中華紙漿股份有限公司、元太科技工業股份有限公司、文龍藝術基金會、可成科技股份有限公司、永豐餘工業用紙股份有限公司、宏遠興業股份有限公司、和明紡織股份有限公司</p>`,

        traffic: `<h2>地點：C-Hub成大創意基地</h2>
    <h2>地址：臺南市東區大學路1號 (成大光復校區，前鋒路小東路口)</h2><br>
    <h2>大眾交通:<h2>
    <h3>2017台灣設計展接駁專車：</h3><p>至「國際館」站下車即可抵達。</p>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，步行或轉乘公車即可抵達。</p>
    <h3>火車：</h3><p>臺南車站下車後，由後站出站，左轉沿前鋒路直行至小東路右轉 (約7分鐘) 即可到達。</p>
    <h3>公車：</h3>
    <p>搭乘大臺南公車─市區公車2、5、6、19號，至「小東路」站下車即可抵達。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路右轉中華東路，左轉小東路 (180市道) 即可抵達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經中正北路─中正南路─中華路右轉小東路 (180市道) 即可抵達。</p>`,

        parking: `<h2>路邊停車：</h2><p>小東路、前鋒路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>成功大學醫學中心附屬停車場<span style="color: red;">（收費）</span>：臺南市北區勝利路138號</p>
    <p>成大醫院汽機車停車場<span style="color: red;">（收費）</span>：臺南市北區小東路35號</p>`,
        items: [{
            title: '瓶中信',
        }, {
            title: '核廢料',
        }],
    },

    //  藝陣館 ftd[5]
    {
        introduction: `<h1 style="text-align: center;">藝陣館</h1>
    <p>臺南有著「藝陣之鄉」的美名，承繼著傳統與時代的發展，為重新思考藝陣與當代社會的關係，建立人與文化的美好連結，透過藝陣創意特展，期許發掘不同的凝視角度，提出獨特的敘事觀點，從藝陣傳統文化內涵出發，開啟設計轉型的無限可能。</p>
    
    <p>展覽以藝陣為主題，從魔幻裝置的創意基調，呈現藝陣與藝術、設計的融合、混搭，呼應臺南「藝陣之鄉」的寶貴價值，深刻感受藝陣的過去、現在、與未來。</p>
    <br>
    <p>策展單位：西屹設計有限公司</p>`,

        traffic: `<h2>地點：文創PLUS ─ 臺南創意中心</h2>
    <h2>地址：臺南市中西區府前路一段197號</h2><br>
    <h2>大眾交通:<h2>
    <h3>2017台灣設計展接駁專車：</h3><p>至「藝陣館」站下車即可抵達。</p>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，轉乘公車即可抵達。</p>
    <p>高鐵臺南站下車後轉乘高鐵接駁車，至「建興國中 (孔廟) 」站下車即可抵達。</p>
    <h3>火車：</h3><p>臺南火車站下車後，由前站出站，轉乘公車即可抵達。</p>
    <h3>公車：</h3>
    <p>搭乘大臺南公車─市區公車6號，至「建興國中 (府前路) 」站下車即可抵達。</p>
    <p>高鐵接駁車H31，至「建興國中 (孔廟) 」站下車即可抵達。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路─府前路即可抵達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經小北路─西門路左轉府前路即可抵達。</p>`,

        parking: `<h2>路邊停車：</h2><p>府前路、南門路、忠義路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>竑穗興業有限公司建業停車場<span style="color: red;">（收費）</span>：臺南市中西區建業街58號</p>
    <p>延平郡王祠大埔街口路外停車場<span style="color: red;">（收費）</span>：臺南市中西區開山路與大埔街路口西側</p>
    <p>Times臺南忠義府前停車場<span style="color: red;">（收費）</span>：臺南市中西區忠義路一段96號旁空地</p>`,
        items: [{
            title: '劍獅雕像',
        }, {
            title: '破舊的嗩吶',
        }],
    },

    //  生活館 ftd[6]
    {
        introduction: `<h1 style="text-align: center;">生活館</h1>
    <p>設計與藝術的界線有辦法界定嗎？</p>
    
    <p>本館展覽主題以設計與藝術的過渡為主要策展理念，扣合「生活」發想主題，以「度」字串聯，詮釋各領域藝術與設計之間的無限與有限。</p>
    
    <p>展出內容包括「台南人劇團」的劇場文學及劇場空間設計、「版條線，花園」的版畫繪本、「三坪半工作室」的生活載具及藝術裝置、「蔚龍藝術」匯集各種立體書設計、「麥薾藝術」匯集當代藝術攝影作品等。此外又加上「2017宜蘭椅設計大賞」入圍作品展出，期待透過本展陪伴觀眾體驗生活中的各種可能性。</p>
    <br>
    <p>策展單位：蔚龍藝術有限公司、台南人劇團、三坪半工作室、版條線，花園、麥薾藝術有限公司</p>`,

        traffic: `<h2>地點：321巷藝術聚落</h2>
    <h2>地址：臺南市北區公園路321巷</h2><br>
    <h2>大眾交通:<h2>
    <h3>2017台灣設計展接駁專車：</h3><p>至「生活館」站下車，沿公園路、公園路321巷步行（約5分鐘）即可抵達。</p>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，轉乘公車即可抵達。</p>
    <h3>火車：</h3><p>臺南車站下車後，由前站出站，轉乘公車即可抵達。</p>
    <h3>公車：</h3>
    <p>搭乘大臺南公車─市區公車0左、0右、9、18、21號、藍幹線，至「公園北路口」站下車，步行約200公尺即可抵達。</p>
    <p>搭乘大臺南公車─市區公車0左、0右、9、18、21號、藍幹線、綠幹線、橘3、橘11、橘12、紅1、紅2、紅3、紅4，至「臺南公園 (公園路) 」站下車，步行約5分鐘即可抵達。</p>
    <p>搭乘大臺南公車─市區公車0左、0右、21號、橘3、橘11，至「公園北路」站下車，步行約1分鐘即可抵達。</p>
    <p>搭乘觀光公車88、99號，至「臺南公園 (公園路) 」站下車，步行約5分鐘即可抵達。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路，右轉北門路─公園南路─公園路即可抵達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經中正北路─中正南路─中華路右轉中山南路─開元路─公園北路─公園路即可抵達。</p>`,

        parking: `<h2>路邊停車：</h2><p>公園路、公園北路、公園南路、北門路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>市立圖書館廣場停車場<span style="color: red;">（收費）</span>：臺南市北區公園北路3號</p>
    <p>公園路兵配場臨時路外公有停車場<span style="color: red;">（收費）</span>：臺南市北區公園路</p>`,
        items: [{
            title: '神秘的布幕',
        }, {
            title: '底片相機',
        }],
    },

    //  體驗館 ftd[7]
    {
        introduction: `<h1 style="text-align: center;">體驗館</h1>
    <p>本館分為「觀光工廠 — 自在遊」及「時尚靜態展」展示</p>
    
    <p>觀光工廠：規劃五大主題「文創設計主題區、跨域輔導與整合設計美學展、DIY 創作體驗營、觀光工廠文創市集及千人幸福體驗」，以多元化的展覽方式及體驗活動，帶領民眾從多種角度體會設計，並更深入瞭解觀光工廠。</p>
    
    <p>流行時尚靜態展：以「dear」為主題，邀集臺南在地紡織、成衣、刺繡、袋包等15家業者，展現各品牌獨到特色。</p>
    <br>
    <p>策展單位：財團法人工業技術研究院、伊林娛樂股份有限公司</p>
    <p>合作單位：同心圓設計有限公司</p>`,

        traffic: `<h2>地點：臺南文化創意產業園區</h2>
    <h2>地址：臺南市東區北門路二段16號</h2><br>
    <h2>大眾交通:<h2>
    <h3>高鐵：</h3><p>高鐵臺南站下車後轉乘臺鐵沙崙線，至臺南車站下車，右轉沿北門路直行 (約2分鐘) 即可抵達。</p>
    <h3>火車：</h3><p>臺南車站下車後，由前站出站，右轉沿北門路直行 (約2分鐘) 即可抵達。</p>
    <h3>公車：</h3>
    <p>搭乘大臺南公車─市區公車0左、0右、2、3、5、6、10、11、18、19、紅幹線、紅1、紅2、紅3、紅4、綠幹線、綠17、藍幹線、橘3、橘11、橘12，至「臺南火車站 (北站) 」站下車，步行約3分鐘即可抵達。</p>
    <p>搭乘大臺南公車─市區公車0左、0右、1、2、3、5、6、7、9、10、11、14、18、19、21、紅幹線、紅1、紅2、紅3、紅4、綠幹線、綠17、藍幹線、橘3、橘11、橘12，至「臺南火車站 (南站) 」站下車，步行約3分鐘即可抵達。</p>
    <p>搭乘大臺南公車─市區公車0左、0右、2、5、6、19、綠幹線、綠17、橘3、橘11、橘12，至「臺南公園 (北門路) 」站下車，步行約2分鐘即可抵達。</p>
    <p>搭乘觀光公車88號，至「臺南火車站 (北站) 」或「臺南火車站 (南站) 」站下車，步行約3分鐘即可抵達。</p>
    <p>搭乘觀光公車99號，至「臺南火車站 (北站) 」或「臺南火車站 (南站) 」或「臺南公園 (北門路) 」站下車，步行約3分鐘即可抵達。</p>
    <br>
    <h2>自行開車:</h2>
    <p>北上：國道1號於「仁德交流道」下，沿182市道往臺南市區方向，經中山路─東門路，右轉北門路即可到達。</p>
    <p>南下：國道1號於「永康交流道」下，沿臺1線往臺南市區方向，經中正北路─中正南路─中華路右轉中山南路─開元路─北門路即可抵達。</p>`,

        parking: `<h2>路邊停車：</h2><p>北門路可路邊停車。</p>
    <br>
    <h2>停車場：</h2>
    <p>國賓停車場<span style="color: red;">（收費）</span>：臺南市北區成功路2號地下3樓</p>
    <p>臺南俥亭成功停車場<span style="color: red;">（收費）</span>：臺南市北區成功路22巷3號</p>
    <p>文創停車場<span style="color: red;">（收費）</span>：臺南市東區北門路二段22號</p>`,
        items: [{
            title: '針線球',
        }, {
            title: '木槌',
        }],
    }
];