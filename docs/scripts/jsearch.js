$(document).ready(function () {
	var MYURL = 'https://lil-store.ru/';
	var countries = [{
			value: `<span style="display:none">Пабг Пубг пубг pubg PUBG Баттлеграундс</span>PlayerUnknown's Battlegrounds`,
			jurl: MYURL + 'game/pubg',
			jurlImage: MYURL + 'images/product/pubg.jpg',
			jZhanr: 'Steam',
			jprice: "159"
	},
		{
			value: `<span style="display:none">battlefield 5 бателфилд 5 баттелфиелд 5 батла 5</span>Battlefield 5`,
			jurl: MYURL + 'game/battlefield5',
			jurlImage: MYURL + 'images/product/bf5.jpg',
			jZhanr: 'Steam',
			jprice: "229"
	},
		{
			value: `<span style="display:none">сквад squad</span>Squad`,
			jurl: MYURL + 'game/squad',
			jurlImage: MYURL + 'images/product/sq.jpg',
			jZhanr: 'Steam',
			jprice: "229"
	},
		{
			value: `<span style="display:none">cyberpunk 2077 киберпанк 2077 кибер панк 2077</span>Cyberpunk 2077`,
			jurl: MYURL + 'game/cyberpunk-2077',
			jurlImage: MYURL + 'images/product/cp2077.jpg',
			jZhanr: 'Steam',
			jprice: "559"
	},
		{
			value: `<span style="display:none">детроид беком хуман detroit become human</span>Detroit: Become Human`,
			jurl: MYURL + 'game/detroit-become-human',
			jurlImage: MYURL + 'images/product/detr.jpg',
			jZhanr: 'Epic Games',
			jprice: "229"
	},
		{
			value: `<span style="display:none">far cry 5 фар край 5</span>Far Cry® 5`,
			jurl: MYURL + 'game/far-cry-5',
			jurlImage: MYURL + 'images/product/fr5.jpg',
			jZhanr: 'Steam',
			jprice: "179"
	},
		{
			value: `<span style="display:none">фар край нью давн фар край ню давн far cry new dawn</span>Far Cry New Dawn`,
			jurl: MYURL + 'game/far-cry-new-dawn',
			jurlImage: MYURL + 'images/product/frn.jpg',
			jZhanr: 'Steam',
			jprice: "229"
	},
		{
			value: `<span style="display:none">tom clancy s ghost recon breakpoint том клэнсис брейк поинт бреак поинт brek point break point</span>Tom Clancy’s Ghost Recon Breakpoint`,
			jurl: MYURL + 'game/tom-clancys-ghost-recon',
			jurlImage: MYURL + 'images/product/gost.jpg',
			jZhanr: 'Steam',
			jprice: "379"
	},
		{
			value: `<span style="display:none">among us амонг ус amoung us амоунг ус</span>Among Us`,
			jurl: MYURL + 'game/among-us',
			jurlImage: MYURL + 'images/product/us0.jpeg',
			jZhanr: 'Steam',
			jprice: "79"
	},
		{
			value: `<span style="display:none">rust раст</span>RUST`,
			jurl: MYURL + 'game/rust',
			jurlImage: MYURL + 'images/product/rust.jpg',
			jZhanr: 'Steam',
			jprice: "159"
	},
		{
			value: `<span style="display:none">Microsoft Fly simulator 2020 майкрософт флай симулятор 2020 флайсимулятор </span>Microsoft Fly Simulator 2020`,
			jurl: MYURL + 'game/microsoft-fly-simulator-2020',
			jurlImage: MYURL + 'images/product/fly2.jpg',
			jZhanr: 'Steam',
			jprice: "449"
	}, {
			value: `<span style="display:none">овервотч ow</span>Overwatch`,
			jurl: MYURL + 'game/ow',
			jurlImage: MYURL + 'images/product/ow.jpg',
			jZhanr: 'Battle.net',
			jprice: "149"
	},
		{
			value: `<span style="display:none">SEA OF THIEVES sea thieves ыуф ершумуы gbhfns ctf пираты сеа</span>Sea of Thieves`,
			jurl: MYURL + 'game/sea-of-thieves',
			jurlImage: MYURL + 'images/product/sea0.jpg',
			jZhanr: 'Steam',
			jprice: "229"
	}, {
			value: `<span style="display:none">gta гта gta 5 Гта</span>Grand Theft Auto V`,
			jurl: MYURL + 'game/gta5',
			jurlImage: MYURL + 'images/product/gta5.jpg',
			jZhanr: 'Steam',
			jprice: "149"
	}, {
			value: `<span style="display:none">dmc девил Дмк</span>Devil May Cry 5`,
			jurl: MYURL + 'game/dmc5',
			jurlImage: MYURL + 'images/product/dmc5.jpg',
			jZhanr: 'Steam',
			jprice: "149"
	}, {
			value: `<span style="display:none">ноу мен мэн скай менс nms нмс</span>No Man's Sky`,
			jurl: MYURL + 'game/nms',
			jurlImage: MYURL + 'images/product/nms.jpg',
			jZhanr: 'Steam',
			jprice: "129"
	}, {
			value: `<span style="display:none">монстер монстр хантер ворлд</span>Monster Hunter: World`,
			jurl: MYURL + 'game/mhw',
			jurlImage: MYURL + 'images/product/mhw.jpg',
			jZhanr: 'Steam',
			jprice: "179"
	}, {
			value: `<span style="display:none">мк11 мк мортал комбат 11</span>Mortal Kombat 11`,
			jurl: MYURL + 'game/mk11',
			jurlImage: MYURL + 'images/product/mk11.jpg',
			jZhanr: 'Steam',
			jprice: "169"
	}, {
			value: `<span style="display:none">резидент евил эвил</span>Resident Evil 2`,
			jurl: MYURL + 'game/re2',
			jurlImage: MYURL + 'images/product/re2.jpg',
			jZhanr: 'Steam',
			jprice: "169"
	}, {
			value: `<span style="display:none">резидент евил эвил</span>Resident Evil 3`,
			jurl: MYURL + 'game/re3',
			jurlImage: MYURL + 'images/product/re3.jpg',
			jZhanr: 'Steam',
			jprice: "189"
	}, {
			value: `<span style="display:none">диабло 3</span>Diablo III`,
			jurl: MYURL + 'game/db3',
			jurlImage: MYURL + 'images/product/db3.jpg',
			jZhanr: 'Battle.net',
			jprice: "139"
	}, {
			value: `<span style="display:none">рипер диабло оф соулс 3</span>Diablo III Reaper Of Souls`,
			jurl: MYURL + 'game/ros',
			jurlImage: MYURL + 'images/product/ros.jpg',
			jZhanr: 'Battle.net',
			jprice: "129"
	}, {
			value: `<span style="display:none">секиро шадоу шадов дай твайс шадоус шадовс</span>Sekiro Shadows Die Twice`,
			jurl: MYURL + 'game/ssdt',
			jurlImage: MYURL + 'images/product/ssdt.jpg',
			jZhanr: 'Steam',
			jprice: "179"
	}, {
			value: `<span style="display:none">астронеер астронер</span>Astroneer`,
			jurl: MYURL + 'game/ast',
			jurlImage: MYURL + 'images/product/ast.jpg',
			jZhanr: 'Steam',
			jprice: "119"
	}, {
			value: `<span style="display:none">дум етернал итернал доом</span>Doom Eternal`,
			jurl: MYURL + 'game/del',
			jurlImage: MYURL + 'images/product/del.jpg',
			jZhanr: 'Bethesda',
			jprice: "189"
	}, {
			value: `<span style="display:none">ксго кс го контер страйк csgo go прайм статус counter strike global offensive</span>CS:GO Prime Status`,
			jurl: MYURL + 'game/csgo',
			jurlImage: MYURL + 'images/product/csgo.jpg',
			jZhanr: 'Steam',
			jprice: "119"
	}, {
			value: `<span style="display:none">ремнант фром зе ашс ашес</span>Remnant From The Ashes`,
			jurl: MYURL + 'game/rfta',
			jurlImage: MYURL + 'images/product/rfta.jpg',
			jZhanr: 'Steam',
			jprice: "159"
	}, {
			value: `<span style="display:none">дед бай дейлайт дайлайт дад дэд бу дбд dbd</span>Dead By Daylight`,
			jurl: MYURL + 'game/dbd',
			jurlImage: MYURL + 'images/product/dbd.jpg',
			jZhanr: 'Steam',
			jprice: "119"
	}, {
			value: `<span style="display:none">эскейп фром тарков ескейп ефт</span>Escape From Tarkov`,
			jurl: MYURL + 'game/eft',
			jurlImage: MYURL + 'images/product/eft.jpg',
			jZhanr: 'Steam',
			jprice: "179"
	}, {
			value: `<span style="display:none">фрайдай фридей тринадцать пятница</span>Friday The 13th`,
			jurl: MYURL + 'game/ft13',
			jurlImage: MYURL + 'images/product/ft13.jpg',
			jZhanr: 'Steam',
			jprice: "139"
	}, {
			value: `<span style="display:none">рейдж рэйдж</span>Rage 2`,
			jurl: MYURL + 'game/ra2',
			jurlImage: MYURL + 'images/product/ra2.jpg',
			jZhanr: 'Steam',
			jprice: "169"
	}, {
			value: `<span style="display:none">дестени дестену дестайни дестани</span>Destiny 2`,
			jurl: MYURL + 'game/de2',
			jurlImage: MYURL + 'images/product/de2.jpg',
			jZhanr: 'Battle.net',
			jprice: "149"
	}, {
			value: `<span style="display:none">tom clancy s rainbow six siedge рейнбоу сикс сиейдж сейдж</span>Rainbow Six Siege`,
			jurl: MYURL + 'game/rss',
			jurlImage: MYURL + 'images/product/rss.jpg',
			jZhanr: 'Steam',
			jprice: "139"
	}, {
			value: `<span style="display:none">арма 3</span>Arma III`,
			jurl: MYURL + 'game/arm3',
			jurlImage: MYURL + 'images/product/arm3.jpg',
			jZhanr: 'Steam',
			jprice: "159"
	}, {
			value: `<span style="display:none">рафт</span>Raft`,
			jurl: MYURL + 'game/raft',
			jurlImage: MYURL + 'images/product/raft.jpg',
			jZhanr: 'Steam',
			jprice: "129"
	}, {
			value: `<span style="display:none">рокет лига леагуе</span>Rocket League`,
			jurl: MYURL + 'game/rl',
			jurlImage: MYURL + 'images/product/rl.jpg',
			jZhanr: 'Steam',
			jprice: "129"
	}, {
			value: `<span style="display:none">три королевства тотал вар три кингдом кингдомс</span>Total War: Three Kingdoms`,
			jurl: MYURL + 'game/twtk',
			jurlImage: MYURL + 'images/product/twtk.jpg',
			jZhanr: 'Steam',
			jprice: "169"
	}, {
			value: `<span style="display:none">ведьмак 3 дикая охота витчер</span>The Witcher III: Wild Hunt`,
			jurl: MYURL + 'game/w3',
			jurlImage: MYURL + 'images/product/w3.jpg',
			jZhanr: 'Steam',
			jprice: "149"
	}, {
			value: `<span style="display:none">форест зэ</span>The Forest`,
			jurl: MYURL + 'game/tf',
			jurlImage: MYURL + 'images/product/tf.jpg',
			jZhanr: 'Steam',
			jprice: "149"
	}, {
			value: `<span style="display:none">стар варс 2 батл фронт баттл батлфронт</span>Star Wars: Battlefront II`,
			jurl: MYURL + 'game/swb2',
			jurlImage: MYURL + 'images/product/swb2.jpg',
			jZhanr: 'Steam',
			jprice: "149"
	}, {
			value: `<span style="display:none">метал гир сурвайв геар сурвив</span>Metal Gear Survive`,
			jurl: MYURL + 'game/mgs',
			jurlImage: MYURL + 'images/product/mgs.jpg',
			jZhanr: 'Steam',
			jprice: "159"
	}, {
			value: `<span style="display:none">эйдж адж вондер вандер оф планет планетфол</span>Age Of Wonders Planetfall`,
			jurl: MYURL + 'game/aow',
			jurlImage: MYURL + 'images/product/aow.jpg',
			jZhanr: 'Steam',
			jprice: "129"
	}, {
			value: `<span style="display:none">одисея асасинс асасин ассасин ассассин асассин крид крит</span>Assassin's Creed Odyssey`,
			jurl: MYURL + 'game/aco',
			jurlImage: MYURL + 'images/product/aco.jpg',
			jZhanr: 'Steam',
			jprice: "159"
	}, {
			value: `<span style="display:none">ред дед редемптион рэд дэд</span>Red Dead Redemption 2`,
			jurl: MYURL + 'game/red',
			jurlImage: MYURL + 'images/product/red.jpg',
			jZhanr: 'Rockstar Games',
			jprice: "219"
	}, {
			value: `<span style="display:none">мордхау морт</span>Mordhau`,
			jurl: MYURL + 'game/mord',
			jurlImage: MYURL + 'images/product/mord.jpg',
			jZhanr: 'Steam',
			jprice: "119"
	}, {
			value: `<span style="display:none">хот лава</span>Hot Lava`,
			jurl: MYURL + 'game/hl',
			jurlImage: MYURL + 'images/product/hl.jpg',
			jZhanr: 'Steam',
			jprice: "119"
	}, {
			value: `<span style="display:none">стар варс ворс джеи джедай джеди джед фоллен фоллон фолен фолин ордер ордэр</span>Star Wars Jedi: Fallen Order`,
			jurl: MYURL + 'game/swj',
			jurlImage: MYURL + 'images/product/swj.jpg',
			jZhanr: 'Steam',
			jprice: "229"
	}, {
			value: `<span style="display:none">фоллаут 76 фолаут фалаут фаллаут</span>Fallout 76`,
			jurl: MYURL + 'game/f76',
			jurlImage: MYURL + 'images/product/f76.jpg',
			jZhanr: 'Bethesda',
			jprice: "139"
	}, {
			value: `<span style="display:none">коде вейн код вейн вэйн веин</span>Code Vein`,
			jurl: MYURL + 'game/cv',
			jurlImage: MYURL + 'images/product/cv.jpg',
			jZhanr: 'Steam',
			jprice: "179"
	}, {
			value: `<span style="display:none">гирс гиарс геарс 5</span>Gears 5`,
			jurl: MYURL + 'game/g5',
			jurlImage: MYURL + 'images/product/g5.jpg',
			jZhanr: 'Steam',
			jprice: "139"
	}, {
			value: `<span style="display:none">сурге сэдж сурдж судж</span>The Surge 2`,
			jurl: MYURL + 'game/su2',
			jurlImage: MYURL + 'images/product/su2.jpg',
			jZhanr: 'Steam',
			jprice: "159"
	}, {
			value: `<span style="display:none">хант хунт шоудаун</span>Hunt Showdown`,
			jurl: MYURL + 'game/hsd',
			jurlImage: MYURL + 'images/product/hsd.jpg',
			jZhanr: 'Steam',
			jprice: "139"
	}, {
			value: `<span style="display:none">антхем анхем афины</span>Anthem`,
			jurl: MYURL + 'game/ant',
			jurlImage: MYURL + 'images/product/ant.jpg',
			jZhanr: 'Origin',
			jprice: "179"
	}, {
			value: `<span style="display:none">скам скум</span>Scum`,
			jurl: MYURL + 'game/scum',
			jurlImage: MYURL + 'images/product/scum.jpg',
			jZhanr: 'Steam',
			jprice: "119"
	}, {
			value: `<span style="display:none">дейз дей дэй дейзет зет зэт</span>DayZ`,
			jurl: MYURL + 'game/dayz',
			jurlImage: MYURL + 'images/product/dayz.jpg',
			jZhanr: 'Steam',
			jprice: "179"
	}, ];
	$('.game-describe__content .game-describe__tab').attr('style', 'overflow-y: scroll;height: 260px;');
	$('.game-describe__content').attr('style', 'overflow-y: none;height: 260px;');
	$('#game-search-input').autocomplete({
		source: countries,
		select: function (event, ui) {
			$("#game-search-input").reset();
		},
		open: function (event, ui) {
			$("#ui-id-1").addClass("search-wr__loadout-wr js-live-search_loadout-wr _active");
			$("#ui-id-1").css("width", "970px");
			$("#ui-id-1").css("overflow-y", "hidden");
			$("#ui-id-1").css("overflow-x", "hidden");
		},
		position: {
			of: "#game-search-input"
		}
	}).data("ui-autocomplete")._renderItem = function (ul, item) {
		return $(`<li></li>`).append(`<a style="text-decoration:none;" href="` + item.jurl + `" class="search-prod">
    <div class="search-prod__img-wr" style="font-family: Play, sans-serif;">
        <div class="search-prod__img" style="background-image: url('` + item.jurlImage + `');">
        </div>
    </div>
 
    <div class="search-prod__main">
        <h4 class="search-prod__name">
           ` + item.value + `        </h4>

        <p class="search-prod__genre">
                                    ПЛАТФОРМА: <span>` + item.jZhanr + `</span>
                    </p>

        <span class="price price--ssm"><font class="currencyPrice" currency="` + item.jprice + `">` + item.jprice + `</font> <span class="rub"><font class="currencySymbol"><span class="rub">P</span></font></span></span>
    </div>
</a>`).appendTo(ul);
	};
});
