
var titulosBR = [
"Ursa explorada por 19 anos em circo ucraniano é resgatada",
 "Cadela presa em sacada na Colômbia é salva",
 "Cadela soterrada por 18 horas é resgatada" ,
 "Cão em estado crítido salvo na Índia" ,
 "Cão amordaçado com fita elétrica é salvo" ,
 "Cavalo preso em palheiro é salvo em um resgate impressionante" ,
 "Gata presa em poço por 5 dias resgatada" ,
 "Henry, o macaco Alouatta é solto do cativeiro" ,
 "Dois Cães em Escola Americana Resgatados" ,
 "Comitê de conservação ajuda com a sobrevivencia de macacos Alouatta" ,
 "Cão na Escócia salvo de buraco com o uso de sensores cardíacos" ,
 "Porco-Espinho tingido de rosa salvo por um casal canadense" ,
 "Cão perdido no mar caribenho é resgatado" ,
 "Cavalo de corrida rejeitado desvia sua morte" ,
 "Cadelinha deixada em carro escaldante é salva" ,
 "Cachorrinhos presos em alcatrão são salvos" ,
 "Cão de rua confundido por lobo selvagem é salvo" ,
 "Cadela presa em poço em vilarejo remoto na Índia por 5 dias é salva" ,
 "Como adotar um animal de estimação" ,
 "Cão de rua preso em rede de futebol é salvo"
 
 ];
var linksBR = [
"bearCircus_BR.html",
"dogBalcony_BR.html",
"dogBuried_BR.html",
"dogSkin_BR.html",
"dogTape_BR.html",
"horseApples_BR.html",
"kittywell_BR.html",
"monkeyRelease_BR.html",
"yoginboo_BR.html",
"zapMonkeys_BR.html",
"caveDog_BR.html",
"pinkSonic_BR.html",
"dogSea_BR.html",
"raceHorse_BR.html",
"dogCar_BR.html",
"tarPuppies_BR.html",
"wolfDog_BR.html",
"wellDog_BR.html",
"adopt_BR.html",
"netDog_BR.html"
 ];
var titulosUS = [
"Bear exploited for 19 years rescued",
 "Dog stuck in balcony in Colombia is saved",
 "Dog stuck in debris rescued after 18 hours", 
 "Dog in critical state saved in India", 
 "Duct taped dog rescued", 
 "Horse stuck in hayloft rescued", 
 "Cat stuck in well for 5 days rescued", 
 "Henry, the howler monkey is released back wild", 
 "Two dogs found in school", 
 "Conservation comitee helps with the survival of Howler Monkeys", 
 "Scottish dog saved from rabbit warren with heartbeat sensors", 
 "Dyed hedgehog saved by Canadian couple",
 "Dog lost in caribbean sea rescued", 
 "Rejected race horse avoids his death", 
 "Puppy left in scalding hot car is saved", 
 "Puppies stuck in tar are saved", 
 "Street dog confused with wild wolf is saved", 
 "Dog stuck inside well in a remote Indian village for 5 days is saved", 
 "How to a Adopt a Pet",
 "Street dog stuck in soccer net is saved",
 "FAQ (Frequently Asked Questions)"
];
var linksUS = [
"bearCircus_US.html",
"dogBalcony_US.html",
"dogBuried_US.html",
"dogSkin_US.html",
"dogTape_US.html",
"horseApples_US.html",
"kittywell_US.html",
"monkeyRelease_US.html",
"yoginboo_US.html",
"zapMonkeys_US.html",
"caveDog_US.html",
"pinkSonic_US.html",
"dogSea_US.html",
"raceHorse_US.html",
"dogCar_US.html",
"tarPuppies_US.html",
"wolfDog_US.html",
"wellDog_US.html",
"adopt_US.html",
"netDog_US.html",
"faq_US.html"
 ];
function coisa(){
var coisa;
var i = 0;
var stuff = 0;
var fileName = window.location.pathname;
if(fileName.includes("_US") | fileName.includes("_us")){
	document.getElementById("search").innerHTML = '<p class="SubtitleContent">Results</p>';
	while(i <= (titulosUS.length - 1)){
		if(titulosUS[i].toLowerCase().includes(document.getElementById("yeetos").value.toLowerCase())){
			
			document.getElementById("search").innerHTML += '<br> <a href="' + linksUS[i] + '">' + titulosUS[i] + '</a>' ;
			stuff++;
		} 
		i++;
	}

	if(stuff == 0){
		document.getElementById("search").innerHTML += '<br><br> No ocurrences found for the term "' + sanitize(document.getElementById("yeetos").value) + '".';
	}
	else{
		document.getElementById("search").innerHTML += '<br><br>'+ stuff + ' ocurrence(s) found for the search term "' + sanitize(document.getElementById("yeetos").value) + '".';
	}
	}
else{
	document.getElementById("search").innerHTML = '<p class="SubtitleContent">Resultados</p>';
	while(i <= (titulosBR.length - 1)){
		if(titulosBR[i].toLowerCase().includes(document.getElementById("yeetos").value.toLowerCase())){
			document.getElementById("search").innerHTML += '<br> <a href="' + linksBR[i] + '">' + titulosBR[i] + '</a>' ;
			stuff++;
		} 
		i++;
	}

	if(stuff == 0){
		document.getElementById("search").innerHTML += '<br> Nenhuma ocorrência encontrada para o termo "' + sanitize(document.getElementById("yeetos").value) + '".';
	}
	else{
		document.getElementById("search").innerHTML += '<br> Encontrada(s) '+ stuff + ' ocorrências para o termo "' + sanitize(document.getElementById("yeetos").value)+'".';
		
}
	
	
}
}
function sanitize(string s){s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); return s;} 
