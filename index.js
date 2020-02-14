/***************************************************/
// after I do connect the projects to this portfolio,
// the next idea is to standardize the menu (I mean one section / not 5)
// The different would be the color and content
/***************************************************/
// consts:
const selIdHeader = document.getElementById('page-header');
const selIdPortrait = selIdHeader.querySelector("#portrait");
const selClassNavlink = selIdHeader.querySelectorAll(".nav-link");
const arSpanPortrait = ["Show portrait","Hide"];
const arIconPortrait = ["icon-picture","icon-cancel"];
const arBtnPortrait = ["btn-cap","btn-overlay","btn-awaiting"];
const classHide = "hide";
const classNavhide = "navhide";
const classNavshow = "navshow";
const idFoldoutNav = "foldout-nav";
const idFoldoutToggle = "foldout-toggle";
const arSpanFoldoutMenu = ["Open", "Close"];
const arIconFouldoutMenu = ["icon-down-open", "icon-up-open"];
const arIdSections = ["#s-welcome", "#s-web-projects", "#s-dev-projects", "#s-hobby", "#s-contact"];
const oProjects = {
  "web": [
    {
      "name": "Memory test",
      "desc": `Web game based on Miroslaw Zelent's URL{course.} It's almost a copy.
              <br><br>
              I've written JS from scratch to learn jQuery's fundamentals.
              <br><br>
              I've also added some fixes (i.e. now you can't double click the same card).`,
      "descLink": "https://www.youtube.com/watch?v=edNqTubHUU0",
      "url": "web-projects/memory-test/index.html"
    },
    {
      "name": "Hangman",
      "desc": "Web game based on Miroslaw Zelent's URL{course.}<br><br>I've added and updated some functionality (i.e now the password is randomly created from JSON file, which contains ~14.000 words with descriptions).<br><br>",
      "descLink": "https://www.youtube.com/watch?v=9FVtiJHFCSU",
      "url": "web-projects/hangman/index.html"
    },
    {
      "name": "1 out of 10",
      "desc": 'My own web game inspired by the polish TV program "Jeden z dziesięciu (1 z 10)."',
      "descLink": "",
      "url": "web-projects/one-out-of-ten/index.html"
    },
    {
      "name": "Survey form",
      "desc": "Based on the freeCodeCamp URL{example.}",
      "descLink": "https://codepen.io/freeCodeCamp/full/VPaoNP",
      "url": "web-projects/survey-form/index.html"
    },
    {
      "name": "Landing page",
      "desc": "Created for a customer needs.",
      "descLink": "",
      "url": "web-projects/landing-page/index.html"
    },
  ],

  "dev": [{
      "name": "Python &amp C++",
      "desc": "No projets made since my studies. Would love to go back to Python in the future if the opportunity arises.<br><br>The one part of my dream is to take a closer look into machine learning and/or neural network in the future. The second part is to understand at least one of them...<br><br>So maybe Python will come to me once again.",
      "descLink": "",
      "url": ""
    },{
      "name": "Falling ball",
      "desc": `Created the game together with my friend URL{Jarosław Szczepaniak} in Clickteam Fusion 2.5.
              <br><br>
              Versions available: .apk (android), .exe (windows)
              <br><br>
              Clickteam Fusion 2.5 is a game engine similar to the most famous "Unity" or "Unreal Engine".`,
      "descLink": "https://www.jaroslawszczepaniak.pl/",
      "url": ""
    },{
      "name": "Triandom",
      "desc": `My own game made in Clickteam Fusion 2.5. Soon will be availabe on the URL{Google Play} for all users. Alpha tests in progress.
              <br><br>
              Versions available: .apk (android), .exe (windows)
              <br><br>
              Clickteam Fusion 2.5 is a game engine similar to the most famous "Unity" or "Unreal Engine".`,
      // "descLink": "#", here should be a link to youtube channel msc.triandom
      "descLink": "https://play.google.com/apps/testing/com.maciejceluch.triandom",      
      "url": ""
    },{
      "name": "1024",
      "desc": `My very first finished game based on the classic URL{2048.}
      <br><br>
      Versions available: .apk (android), .exe (windows).      
      <br><br>
      Clickteam Fusion 2.5 is a game engine similar to the most famous "Unity" or "Unreal Engine".`,
      "descLink": "https://play2048.co/",
      "url": "" 
    },{
      "name": "ETL",
      "desc": `I've worked for one year as an ETL developer. My main responsibilities in a project were:
      <br><br>
      <ul> 
        <li>Data extraction out of external sources (mainly Oracle databases);</li>
        <li>Preparation of data versioning mechanism to properly detect data changes (updates, inserts, deletes);</li>
        <li>Creation and (re)designing of mappings through sessions and workflows in the Informatica PWC in all layers (i.e stage, core, data mart);</li>
        <li>Adding, linking, calculating new attributes for all layers;</li>
        <li>Metadata (XML and SQL) migration from one environment to another;</li>
        <li>Preparation of the views that read data from the Data Mart layer. For example the views should reflect the old logic from the previous (old) project.;</li>
        <li>Documentation preparation in JIRA, code documentation in SVN</li>
      </ul>
      <br><br>
      Technologies & tools: Informatica PowerCenter, Oracle Database, Oracle SQL developer, Tableau.
      <br><br>
      I've also had a contact with Microsoft SQL Server Integration Services (SSIS), and Tableau but no longer than 2 weeks.`,
      "descLink": "",
      "url": ""
    }
  ]
}
const arHobbies = [
  {
    "name": `Boardgames`,
    "desc": `I love abstract connection games. My favourite ones are URL{Hex} and URL{Twixt}, where I am one of the world's best players.
    <br><br>
    I use different nicknames: "nie_wiesz":
    <br>
    <ul>
      <li>URL{BGA - hex}</li>
      <li>URL{IGG - hex}</li>
      <li>URL{IGG - twixt},</li>
    </ul>
    <br>
    "nievviesz":
    <br>
    <ul>
      <li>URL{kurnik/playok - hex}</li>      
    </ul>
    <br>
    and "Maciej Celuch":
    <ul>
      <li>URL{LG - hex}</li>
      <li>URL{LG - hex19}</li>
      <li>URL{LG - twixt}.</li>
    </ul>`,
    "descArray": [
      `https://en.wikipedia.org/wiki/Hex_(board_game)`, //Hex
      `https://en.wikipedia.org/wiki/TwixT`, // Twixt
      `https://en.boardgamearena.com/playerstat?id=84273930&game=1007`, //bga player hex
      `https://www.iggamecenter.com/stats/game12.html`, //igg hex
      `https://www.iggamecenter.com/stats/game59.html`, //igg twixt
      `https://www.playok.com/en/stat.phtml?u=nie_wiesz&g=hx`, // kurni hex      
      `https://littlegolem.net/jsp/info/player_list.jsp?gtvar=hex_DEFAULT`, //lg hex
      `https://littlegolem.net/jsp/info/player_list.jsp?gtvar=hex19_DEFAULT`, //lg hex19      
      `https://littlegolem.net/jsp/info/player_list.jsp?gtvar=twixt_DEFAULT` //lg twixt      
      ]
  },
  {
    "name": `Riddles`,
    "desc": `I love logic riddles like hat riddles, math riddles, probability riddles etc. Has solved many of them in my life. Below is one of the probability riddles I like very much, variation of URL{Monty Hall problem}:
    <hr>
    Suppose you're on a game show, and you're given the choice of four doors:
    Behind two doors is a prize; behind the other two, nothing.
    <br><br>
    Step 1) You pick a door, say No. 1 - but you do not open it.
    <br><br>
    Step 2) Then the host, who knows what's behind the doors, gets you to open one of the remaining doors, say No. 2.
    <br><br>
    Step 3) Then the host opens another remaining door - he makes sure to reveal something
    different from you. For example if in Step 2) there was a prize, he opens a door with no prize and vice versa.
    <br><br>
    Step 4) Then you are asked: "Would you like to now open the original door, or do you want to swap?"
    <br><br>
    The question is: Should you stick with your chosen door or swap? Does what the host reveals have a bearing on your decision? Or maybe the odds are 50/50, regardless?`,
    "descArray": [`https://en.wikipedia.org/wiki/Monty_Hall_problem`]
  },
  {
    "name": `Books`,
    "desc": `I especially love fantasy & sci-fi (for example, a "Game of Thrones").`
  },
  {
    "name": `Mountains`,
    "desc": `What about going mountains for a trip? ... Yeah, I'll never get bored with them.`    
  }
];
const delay = 300;

// lets:
/* 
  lPortraitFlag values:
  0 - portrait is hidden                (off)
  1 - portrait is shown with overlay    (on)
  2 - portrait is shown without overlay (awaiting)
*/
let lPortraitFlag = 0;
let lCurrentPage = 0; // works with arIdSections only

// functions:
function portraitAwaitingState() { 
    lPortraitFlag = 1;
    selIdPortrait.classList.replace(arBtnPortrait[2],arBtnPortrait[1]);
};

function togglePortrait() {
    if(lPortraitFlag != 2) {

      lPortraitFlag = (lPortraitFlag +1) % 2;

      //toggle img class
      const IMG_HTML = selIdPortrait.querySelector(`img`);
      IMG_HTML.classList.toggle(classHide);

      //toggle icon Str_class
      const DIV_ICON_HTML = selIdPortrait.querySelector(`i`);
      DIV_ICON_HTML.className = arIconPortrait[lPortraitFlag];

      //Hide Show portrait
      const SPAN_HTML = selIdPortrait.querySelector("span");
      SPAN_HTML.innerHTML = arSpanPortrait[lPortraitFlag];

      //toggle main class
      if(lPortraitFlag === 0) {
        selIdPortrait.classList.replace(arBtnPortrait[1],arBtnPortrait[0]);
      } else {
        lPortraitFlag = 2;
        selIdPortrait.classList.replace(arBtnPortrait[0],arBtnPortrait[2]);
        window.setTimeout( () => {portraitAwaitingState()},delay);
      }
    }
};

function toggleMenu(forceInputCheck) {
    // toggle nav visibility  
    selIdHeader.classList.toggle(classNavhide);
    selIdHeader.classList.toggle(classNavshow);
    // set header child selections
    const SEL_ID_FOLDOUT_MENU = selIdHeader.querySelector(`#${idFoldoutNav}`);
    const SEL_INPUT = SEL_ID_FOLDOUT_MENU.querySelector(`input`);
    // if CTRL + M -> toggle checkbox
    if (forceInputCheck) {
      SEL_INPUT.checked = !SEL_INPUT.checked
    }  
    
    // toggle span & icon & shadow & hide portrait
    const V_TOGGLE = SEL_INPUT.checked ? 1 : 0;
    SEL_ID_FOLDOUT_MENU.querySelector(`span`).innerHTML = arSpanFoldoutMenu[V_TOGGLE];
    SEL_ID_FOLDOUT_MENU.querySelector(`i`).className = arIconFouldoutMenu[V_TOGGLE];
    switch (lPortraitFlag) {
      case 2: portraitAwaitingState(); // unset awaiting state (do not break here)
      case 1: togglePortrait(); // hide portrait                    
              break;
      default: 
    }    
};

function toggleSection(num) {
  //hide nav when foldoutnav is visible
  if (selIdHeader.className != classNavhide) toggleMenu(true);
  //toggle footer for contact and toggle section 
  if(lCurrentPage == 4) document.body.querySelector(`.page-footer`).classList.toggle(classHide);
  document.querySelector(arIdSections[lCurrentPage]).classList.toggle(classHide);
  lCurrentPage = num;
  if(lCurrentPage == 4) document.body.querySelector(`.page-footer`).classList.toggle(classHide);
  document.querySelector(arIdSections[lCurrentPage]).classList.toggle(classHide);  
}

function styleProjectTile (tile,id,projectsLength) {  
  if(tile.classList.length > 1) {
    tile.className = tile.classList[0];
  }
  const offset = id - (projectsLength - (projectsLength % 2))/2;
  const absOffset = -Math.abs(offset);      
  tile.classList.add(`tile-${id}`);  
  tile.style.transform = `translateZ(${absOffset*20}rem) translateX(${offset*20}rem)`;  
  tile.style.zIndex = `${absOffset+10}`;
  tile.style.opacity = `${1+0.4*absOffset}`;  
}

function moveProject (movedLeft = false) {
  //lCurrentPage 1:web 2:dev
  const key = Object.keys(oProjects)[lCurrentPage-1];
  const projectsLength = oProjects[key].length;
  const projectMidId = (projectsLength - (projectsLength % 2))/2;
  const tiles = document
            .querySelector(arIdSections[lCurrentPage])
            .querySelectorAll(".project-tile");
  console.log(tiles[0].classList);
  tiles.forEach((el,id) => {
    const newId = (parseInt(el.className.match(/\d+/g)[0])+(movedLeft ? projectsLength-1 : 1)) % projectsLength;
    styleProjectTile(el,newId,projectsLength);
    if (newId == projectMidId) updateProjectDesc(key,id);
  })     
}

function updateProjectDesc (projectKey,projectMidId) {   
  document.querySelector(arIdSections[projectKey == "web" ? 1 : 2])
    .querySelector(".section-desc")
    .querySelector(".section-inside-desc")
    .innerHTML = oProjects[projectKey][projectMidId].desc
      .replace(/URL{/g,`<a href="${oProjects[projectKey][projectMidId].descLink}" target = "_blank">`)
      .replace(/}/g,`</a>`);
}
const hashId = (id) => /^#/.test(id) ? id : `#${id}`;

const liNodesFromParentId = (parentId="#",listType="ul") => Array.from(document.body.querySelector(hashId(parentId)).querySelector(listType).querySelectorAll("li"));

function updateHobbyDesc(num) {
  const hobbyArrowIcons = liNodesFromParentId(`#s-hobby`).map(el => el.querySelector("i"));  
  hobbyArrowIcons.forEach((selIcon, id) => {    
    if(selIcon.classList.length != 0 && id != num) {
      selIcon.className = "";      
    } else if(id == num) {
      selIcon.classList.add("icon-right-big");
    }

  const hobbyDescSplit = arHobbies[num].desc.split(`URL{`);
  const hobbyDesc = `${hobbyDescSplit.shift()}${hobbyDescSplit.map((el,id) => el.replace(/^/,`<a href = "${arHobbies[num].descArray[id]}" target="_blank">`).replace(`}`,`</a>`)).join(``)}`;
  
  document.body.querySelector('#hobby-info').querySelector('.section-inside-desc').innerHTML = hobbyDesc;
  })
}

function onLoad() {
  //css hover contact item:
  Array.from(document.querySelectorAll(`.contact-item`)).forEach(contactItem => {
    contactItem.addEventListener("mouseover", () => {contactItem.style = 
      `transform: translateY(1rem); 
      -webkit-transform: translateY(1rem);
      -moz-transform: translateY(1rem);
      -o-transform: translateY(1rem);
      -ms-transform: translateY(1rem);`});    
    contactItem.addEventListener("mouseleave", () => contactItem.style = ``);
    contactItem.addEventListener("click", () => contactItem.style = ``);
  });
  //css hover header btns item:
  Array.from(selIdHeader.querySelectorAll(`.btn`)).forEach(el => {
    const elIcon = el.querySelector(`.icon`);
    elIcon.addEventListener("mouseover", () => {
      elIcon.style.opacity = `0.9`;
      elIcon.style.backgroundColor = `var(--blue-semi)`;
    });
    elIcon.addEventListener("mouseleave", () => elIcon.style = ``);      
    elIcon.addEventListener("click", () => elIcon.style = ``);
  });
  //onLoad: hide foldout menu
  selIdHeader.querySelector(`#${idFoldoutToggle}`).checked = false;

  //onLoad: show welcome page
  selClassNavlink.forEach( (el, id) => { el.checked = id == 0 ? true : false;});    
  console.log(`Let's work together!`);
  
  // init projects html:
  function onLoadProjects() {
    
    // init HTML element for each project tile (article)
    const topTile = document.createElement('div');
    topTile.classList.add("top-tile");
  
    const bottomTile = document.createElement('div');
    bottomTile.classList.add("bottom-tile");
  
    const projectArticle = document.createElement('article');
    projectArticle.classList.add("project-tile");
    projectArticle.appendChild(topTile);
    projectArticle.appendChild(bottomTile);
  
    // loop web & non-web projects
    for (key in oProjects) {
      const isWeb = (key == "web") ? true : false;
      const selProjects = document.getElementById(`s-${key}-projects`);
      const projectsLength = oProjects[key].length;
      const midTileId = (projectsLength - projectsLength % 2)/2;  
      
      // header
      selProjects.appendChild(document.createElement('header'))  
        .appendChild(document.createElement('h2'))
        .innerHTML = `My ${isWeb ? "" : "non-" }web projects`;
      
      // content
      const selProjectContent = selProjects.appendChild(document.createElement('div'));
      selProjectContent.classList.add(`section-content`);
      // content - left arrow
      selProjectContent.appendChild(document.createElement(`div`)).className += `project-move-left project-move`;
      
      const arrowColorSrc = `svg/left-${isWeb ? "blue" : "grey"}.svg`;
      const selLeftArrow = selProjectContent.querySelector(`.project-move-left`).appendChild(document.createElement(`button`));
      selLeftArrow.style=`border: 0 none !important`;
      selLeftArrow.style.background=`transparent`;
      
      const selLeftArrowImg = selLeftArrow.appendChild(document.createElement(`img`));
      
        selLeftArrowImg.src = arrowColorSrc;
        selLeftArrow.classList.add(`btn-angle`);
        selLeftArrow.title = `CTRL + leftArrow`;
        selLeftArrow.addEventListener("click",() => {        
          selLeftArrowImg.src = arrowColorSrc;
          moveProject(true);
        });
        selLeftArrow.addEventListener("mouseleave",() => {
          selLeftArrowImg.src = arrowColorSrc;
          selLeftArrowImg.style.filter = "";
        });
        selLeftArrow.addEventListener("mousedown",() => {
          selLeftArrowImg.src=`svg/left-white.svg`;          
        });
        selLeftArrow.addEventListener("mouseover",() => {
          selLeftArrowImg.style.filter =`drop-shadow(0 0 1rem var(--white))`;        
        });

      // content - group of tiles
      const selProjectGroup = selProjectContent.appendChild(document.createElement('div'));
      selProjectGroup.classList.add("project-group");   

      // group of tiles - each tile
      oProjects[key].forEach( (el,id,ar) => {        
        const projectTile = selProjectGroup
          .appendChild(projectArticle.cloneNode(true)); //deep clone
        projectTile.querySelector(".bottom-tile").innerHTML = `<h2>${el.name}</h2>`;
        projectTile.addEventListener("click",() => {
          if(projectTile.className.indexOf(`tile-${midTileId}`)!=-1){
            window.open(el.url)
          }
        });
        projectTile.addEventListener("mouseenter",() => {
          if(projectTile.className.indexOf(`tile-${midTileId}`)!=-1){
            projectTile.style.cursor = 'pointer';
            projectTile.title = 'show the project';
          }
        });
        projectTile.addEventListener("mouseleave",() => {
          if(projectTile.className.indexOf(`tile-${midTileId}`)!=-1){
            projectTile.style.cursor = 'auto';
            projectTile.removeAttribute(`title`);
          }
        });
        styleProjectTile(projectTile,id,ar.length);        
      });

      // content - right arrow
      selProjectContent.appendChild(document.createElement(`div`)).className += `project-move-right project-move`;
      const arrowRightColorSrc = `svg/right-${isWeb ? "blue" : "grey"}.svg`; 
      const selRightArrow = selProjectContent.querySelector(`.project-move-right`).appendChild(document.createElement(`button`));
      const selRightArrowImg = selRightArrow.appendChild(document.createElement(`img`));
      selRightArrowImg.src = arrowRightColorSrc;
      selRightArrow.style.background=`transparent`;
      selRightArrow.style.border=`none`;
      selRightArrow.title = `CTRL + rightArrow`;
      selRightArrow.classList.add(`btn-angle`);
      // content - right arrow - events
      selRightArrow.addEventListener("click",() => {        
        selRightArrowImg.src = arrowRightColorSrc;
        moveProject();
      });
      selRightArrow.addEventListener("mouseleave",() => {
        selRightArrowImg.src = arrowRightColorSrc;
        selRightArrowImg.style.filter = "";
      });
      selRightArrow.addEventListener("mousedown",() => {
        selRightArrowImg.src=`svg/right-white.svg`;
        
      });
      selRightArrow.addEventListener("mouseover",() => {
        selRightArrowImg.style.filter =`drop-shadow(0 0 1rem var(--white))`;        
      });

       // add project description
      const projectDesc = selProjects.appendChild(document.createElement('div'));
      projectDesc.className = "section-desc";      
      projectDesc.appendChild(document.createElement('div')).className = `section-inside-desc`;
      updateProjectDesc(key, midTileId);
    }
  }
  onLoadProjects();  

  // init hobby html:
  function onLoadHobbies() {
    const selHobbyList = document.body.querySelector(`#s-hobby`).querySelector("ul");    
        
    arHobbies.forEach( (el,id)  => {
      const elLi = document.createElement(`li`);      
      elLi.appendChild(document.createElement('i'));
      elLi.appendChild(document.createElement('h2')).innerHTML = el.name;
      elLi.addEventListener('click', () => updateHobbyDesc(id));
      selHobbyList.appendChild(elLi);
    });
  }
  onLoadHobbies();
  updateHobbyDesc(0);
}  
window.onload=onLoad;

// events:
// CTRL + ... events
document.addEventListener('keydown', (event) => {
  if (event.code == 'KeyQ' && (event.ctrlKey || event.metaKey)) {
    toggleMenu(true);
  }
  // move projects CTRL + left/right
  if (event.code == 'ArrowLeft' && (event.ctrlKey || event.metaKey) && 2 === lCurrentPage+lCurrentPage%2) {
    moveProject(true);
  }
  if (event.code == 'ArrowRight' && (event.ctrlKey || event.metaKey) && 2 === lCurrentPage+lCurrentPage%2) {
    moveProject();
  }
  // change hobby element CTRL + down or up
  if ((event.code == 'ArrowDown' || event.code == 'ArrowUp') && (event.ctrlKey || event.metaKey) && 3 === lCurrentPage) {
    // zrobic z tego funckje bo sie powtarza
    const menuItemListLength = liNodesFromParentId(`#s-hobby`).length;    
    const currentMenuItemIndex = liNodesFromParentId(`#s-hobby`).findIndex(el => 
      el.querySelector("i").classList.length != 0);
    const nextMenuItemIndex = (currentMenuItemIndex + (event.code == 'ArrowUp' ? menuItemListLength-1 : 1)) % (menuItemListLength);
    updateHobbyDesc(nextMenuItemIndex);
  }
});
// toggle portrait
selIdPortrait.addEventListener("click", () => {  
  togglePortrait();
});
// toggle section
selClassNavlink.forEach((el, id) => {
  el.addEventListener("click", () => {  
    toggleSection(id);
   });
});