var myApp = new Framework7({
  statusbarOverlay: false,
  template7Pages: true,
  swipeBackPage: false,
});

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});


$$(document).on('backbutton', function() {
  var view = myApp.getCurrentView();
  view.router.back();
});

$$(document).on('deviceready', function() {
  console.log("Device is ready!");
  var applaunchCount = window.localStorage.getItem('launchCount');

  if (!applaunchCount) {
    window.localStorage.setItem('launchCount', 1);
  } else {
    console.log("App has launched " + ++localStorage.launchCount + " times.")
  };

  // Setup beacon detection
  beacon_util.init_beacon_detection();

  mainView.hideNavbar(false);
});


myApp.onPageInit('home', function(page) {
  mainView.hideNavbar(false);

  let i = 0;
  for (const planet of planets) {
    var $$img = $$('<img class="planet" src="./img/pavilion_logo/' + planet.name + '.png">');
    $$img.css({ 'top': planet.img.top, 'left': planet.img.left, 'max-width': planet.img.width, 'max-height': planet.img.height });
    $$('.home').append($$img);
    var $$a = $$('<a href="#" class="planet_button" id="site' + (i++) + '"></a>');
    $$a.css({ 'top': planet.clickArea.top, 'left': planet.clickArea.left, 'width': planet.clickArea.width, 'height': planet.clickArea.height });
    $$('.home').append($$a);
  }

  var applaunchCount = window.localStorage.getItem('launchCount');

  if (applaunchCount > 1) {
    $$('.intro_bg').show();
    setTimeout(function() {
      $$('.ai_speech').show();
    }, 700);

    $$(window).once('click', (event) => {
      $$('.man_speech').show();
      $$(window).once('click', (event) => {
        $$('.intro_bg').hide();
        $$('.ai_speech').hide();
        $$('.man_speech').hide();
        setTimeout(function() {
          $$('.ai_speech2').show();
        }, 500);
        $$(window).once('click', (event) => {
          $$('.ai_speech2').hide();
        });
      });
    });
  }

  $$('.planet_button').on('click', function() {
    $$('#siteImg').attr('src', `img/ftd/${this.id}.png`);
    $$('#site-modal').css('display', 'block');

    $$('#challengeImg').attr('src', `img/challenge-board/${this.id}-challenge.png`);
    $$('#item0').attr('src', `img/collections/${this.id}-item0.png`);
    $$('#item1').attr('src', `img/collections/${this.id}-item1.png`);
  });

  $$('#close-btn').on('click', () => {
    $$('#site-modal').css('display', 'none');
  })

  $$('#close-challenge-btn').on('click', () => {
    $$('#challenge-modal').css('display', 'none');
  })

  $$('#siteImg').on('click', function(e) {
    const pHeight = $('#siteImg').height();
    const pWidth = $('#siteImg').width();
    const pOffset = $('#siteImg').offset();
    const y = e.pageY - pOffset.top;
    const x = e.pageX - pOffset.left;

    if (y > pHeight * 0.743) {
      if (x > pWidth * 0.5) { //  challenge
        $$('#site-modal').css('display', 'none');
        $$('#challenge-modal').css('display', 'block');

      } else { //  information
        const sitePosition = this.src.indexOf('site');
        const siteNum = parseInt(this.src.charAt(sitePosition + 4));
        mainView.router.load({
          url: 'information.html',
          context: {
            introduction: ftd[siteNum].introduction,
            navigation: navigationInfo,
            traffic: ftd[siteNum].traffic,
            parking: ftd[siteNum].parking,
          },
        });
      }
    }
  });

  $$('.items').on('click', function() {
    const sitePosition = this.src.indexOf('site');
    const siteNum = parseInt(this.src.charAt(sitePosition + 4));
    const itemNum = parseInt(this.id.charAt(4));

    if ($$('.picker-modal.modal-in').length > 0) {
      myApp.closeModal('.picker-modal.modal-in');
    } else {
      if (itemNum == 0) {
        myApp.pickerModal(
          `<div class="picker-modal" style="height: auto;">
            <div class="picker-modal-inner">
              <div class="content-block" style="margin: 15px 0;">
                <h2>${ftd[siteNum].items[itemNum].title}</h2>
                <p>需要答對此關卡共2題答案</p>
                <p><span style="color: red;">0</span> / 2題</p>
              </div>
            </div>
          </div>`)
      } else {
        myApp.pickerModal(
          `<div class="picker-modal" style="height: auto;">
           <div class="picker-modal-inner">
             <div class="content-block" style="margin: 15px 0;">
               <h2>${ftd[siteNum].items[itemNum].title}</h2>
               <p><span style="color: red;">開啟藍芽並到此展場附近便可以獲得</p>
             </div>
           </div>
         </div>`)
      }
    }
  });

  $$(window).on('click', (event) => {
    if (!$(event.target).closest('.picker-modal').length && !$(event.target).closest('.items').length && $$('.picker-modal.modal-in').length > 0) {
      myApp.closeModal('.picker-modal.modal-in');
    }
  });

  $$('#challengeImg').on('click', (e) => {
    const pHeight = $('#challengeImg').height();
    const pOffset = $('#challengeImg').offset();
    const y2 = e.pageY - pOffset.top;

    if (y2 > pHeight * 0.855) {
      mainView.router.load({
        url: 'challenge.html',
      });
    }
  });

  /**
   * Starts Beacon Scan
   * Use beacon_util.stopScanForBeacons() 
   * when you want to disable detection in some pages
   * i.e. challenge page
   */
  beacon_util.startScanForBeacons();
});

myApp.onPageInit('collection', function(page) {
  mainView.hideNavbar(false);
  for (const planet of planets) {
    for (var i = 1; i < 3; i++) {
      var $$div = $$('<div></div>');
      $$('.collections').append($$div);
      $$div.append('<img src="./img/collection/' + planet.name + '_' + i + '.png">');
    }
  }
  $$('.back').on('click', () => {
    mainView.hideNavbar(false);
  });
});



myApp.onPageInit('information', function(page) {
  mainView.showNavbar(false);
  $$('.navbar').css('background-image', "url('img/device-background/information-background.png')");
  $$('.navbar').css('background-size', 'cover');

  $$('.left').on('click', () => {
    $$('.navbar').css('background-image', 'none');
    $$('.navbar').css('background-size', 'none');
  });

  $$('.back').on('click', () => {
    mainView.hideNavbar(false);
  });
})

myApp.onPageInit('challenge', function(page) {
  mainView.showNavbar(false);

  //  navbar background, opacity 0
  $$('.navbar').css('background-image', 'none');
  $$('.navbar').css('background-size', 'none');
  $$('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');

  if (($(window).height() / $(window).width()) > 1.73) { // device too long
    $$('.question').css({
      'top': '1vh',
      'height': 'calc(29vh - 44px)',
      'margin': '3vh',
    });
    $$('.options').css({
      'top': '1vh',
      'height': 'calc(100vh - 36vh)',
    });
    $$('.options > .button').css('line-height', 'calc((100vh - 36vh) / 4);');
    $$('.answer > svg').css('margin-top', 'calc((100vh - 36vh) / 12)');
  }

  /*  home button
  $$('.left').on('click' , () => {
    $$('.navbar').css('background-image' ,'none');
    $$('.navbar').css('background-size' ,'none');
  });
  */

  //  loading page
  setTimeout(() => {
    $$('#gameStart-modal').css('display', 'none');
  }, 6600);

  setTimeout(() => {
    $$('.loading').html('第一題');
  }, 3000);

  let number = 0;

  const question = ['請問「主題館」的前身是成大的何種建築?', '請問「主題館」的設計概念下列何者為非?'];
  const options = [
    ['博物館', '圖書館', '資訊系館', '體育館'],
    ['紡織技術', '循環經濟', '國際外交', '雲端智能']
  ];
  const answer = ['answer2', 'answer3'];
  let result = ['pass', 'pass'];

  $$('#questionTextArea').html(question[number]);
  $$('#question-number').html(`Q${number+1}:`);
  for (let i = 0; i < 4; i += 1) {
    $$(`#answer${i+1}`).html(options[number][i]);
  }

  $$('.answer').on('click', function answerClicked() {
    $$('.loading').html(' ');
    $$('.answer').off('click', answerClicked); // lock the button
    if (this.id === answer[number]) {
      $$(`#${this.id}`).attr('style', 'background-image: url("img/btn-background/correct-btn.png") !important');
      $$(`#${this.id}`).append(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle class="path circle" fill="none" stroke="white" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        <polyline class="path check" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
      </svg>`);
      result[number] = 'PASS';
    } else {
      $$(`#${this.id}`).attr('style', 'background-image: url("img/btn-background/wrong-btn.png") !important');
      $$(`#${this.id}`).append(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle class="path circle" fill="none" stroke="white" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        <line class="path line" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
        <line class="path line" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
      </svg>`);
      result[number] = 'Fail';
    }

    // wait for answer correct/wrong animate
    setTimeout(() => {
      if (number >= 1) { //  end, jump to result board
        $$('#gameStart-modal').css('display', 'block');
        $$('.custom-start-modal').css({
          'animation': 'fadeOut 0.6s ease-in-out',
          'text-align': 'none',
        });
        $$('.custom-start-modal-content').css('top', 'calc((100vh - 90vw) / 2)');
        $$('.custom-start-modal-content').html(`<img style="width: 100%;" id="finish-board" src="img/result.png">
          <img src="img/${result[0]}.png" style="position: absolute; width: 40%; top:calc(90vw * 0.185 - 2.5vw); left: 40%;">
          <img src="img/${result[1]}.png" style="position: absolute; width: 40%; top:calc(90vw * 0.5 - 2.5vw); left: 40%;">
          <img id="ok-btn" src="img/btn-background/ok-btn.png" style="position: absolute; width: 45%; top:calc(90vw * 0.75); left: 27.5%;">
        `);

        $$('#ok-btn').on('click', () => {
          mainView.router.load({
            url: 'home.html',
          });
        });
      } else {
        $$('#start-text').css('animation', 'head-half 1.5s 1s');
        $$('.custom-start-modal').css('animation', 'fadeInFromNone 0.6s 3.5s ease-in-out, fadeOut 0.6s ease-in-out')
        $$('#gameStart-modal').css('display', 'block');
        setTimeout(() => {
          $$('.loading').html('第二題');
          $$(`#${this.id}`).attr('style', 'background-image: url("img/btn-background/normal-btn.png") !important');
        }, 1200);
        setTimeout(() => {
          $$('#gameStart-modal').css('display', 'none');
        }, 4100);

        //  next question
        setTimeout(() => {
          number++;

          $$('#questionTextArea').html(question[number]);
          $$('#question-number').html(`Q${number+1}:`);
          for (let i = 0; i < 4; i += 1) {
            $$(`#answer${i+1}`).html(options[number][i]);
          }
          $$('.answer').on('click', answerClicked); // unlock the button
        }, 2500);
      }
    }, 2500);
  });
});