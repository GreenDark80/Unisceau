// overlay histoire
var btnHistoire = document.getElementById('btnHistoire');
var overlay = document.getElementById('overlay');
var btnclose = document.getElementById('btnclose');

btnHistoire.addEventListener('click',openHistory);
overlay.addEventListener('click',closeOverlay);

function openHistory(){
    overlay.style.display = 'block';
}
function closeOverlay(){
    overlay.style.display = 'none';
}
// fin overlay histoire

// Livre histoire
function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};
function Pageprecedente(nb) {
    document.getElementById("page1").innerHTML = content_page1[(nb - 1)];
    document.getElementById("page2").innerHTML = content_page2[(nb - 1)];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
content_page1 =  [`<p class="historytell">
                    <span class="titlehistory">Présentation du sceau</span>
                    L'Unisceau est un sceau de connexion indissoluble entre deux personnes, les liant 
                    de manière intime. Grâce à ce lien, ils partagent leurs émotions, leurs pensées, mais 
                    également leurs douleurs et leurs souffrances. Si l'un est blessé, l'autre ressent la douleur 
                    avec la même intensité.Le Sceau Unisceau, alimenté par le chakra des propriétaires, fusionne les âmes 
                    et les esprits des participants, créant une connexion chakratique inextricable. 
                </p>
                <img class="imgsceau" src="./assets/sceau">`]

content_page2 = [`<p class="historytell">
                    <span class="titlehistory">Origines du sceau</span>
                    Le Sceau Unisceau, imprégné d'une signification profonde et de l'histoire des jumeaux 
                    Mio et Arasa, est invoqué par eux pour renforcer leur proximité exceptionnelle.
                    Cette invocation va bien au-delà d'une simple marque physique, car elle rappelle leur passé en tant 
                    qu'anciens jumeaux siamois dont les âmes et les chakras étaient intimement mêlés pendant les trois 
                    premières années de leur vie.
                </p>
                <img class="imgsceau" src="./assets/sceau">`]
// Fin livre histoire


// overlay buff
var btnbuff = document.getElementById("btnbuff");
var overlaybuff = document.getElementById('overlaybuff');


btnbuff.addEventListener('click',openbuff);
overlaybuff.addEventListener('click',closeOverlayBuff);

function closeOverlayBuff(){
    overlaybuff.style.display = 'none';
}

function openbuff(){
    overlaybuff.style.display = 'block';
}
// fin overlay buff

// Livre buff
function PageSuivantebuff(nb) {
    document.getElementById("page1buff").innerHTML = content_page1buff[nb - 1];
    document.getElementById("page2buff").innerHTML = content_page2buff[nb - 1];
};
function Pageprecedentebuff(nb) {
    document.getElementById("page1buff").innerHTML = content_page1buff[(nb - 1)];
    document.getElementById("page2buff").innerHTML = content_page2buff[(nb - 1)];
};

setTimeout(function() {
    PageSuivantebuff(1);
}, 10);
content_page1buff =  [`<p class="historytell">
                        <span class="titlehistory">Fonctions</span>
                        <span class="titleparty">Partage de pensées :</span> 
                        les deux personnes peuvent partager leurs pensées et leurs émotions instantanément. 
                        Cela renforce leur compréhension mutuelle, accélère la communication et permet d'anticiper 
                        les intentions de l'autre en combat ou en situation de danger.
                        <br>
                        <span class="titleparty">Localisation Instinctive :</span> 
                        les deux personnes développent un instinct presque surnaturel pour se retrouver mutuellement. 
                        Quelle que soit la distance qui les sépare, ils peuvent ressentir la direction générale où se 
                        trouve l'autre. Cela peut être utile pour éviter les embuscades, se regrouper rapidement ou même 
                        les guider l'un vers l'autre dans des situations dangereuses.

                        <span class="titleparty">Partage de Chakra Médical :</span> 
                        Le partage de chakra prend une importance particulière pour des ninjas formés en médecine. 
                        Si l'un d'entre eux est blessé, l'autre peut envoyer son chakra pour accélérer la guérison. 
                    </p>`]

content_page2buff = [`<p class="historytell">
                        Cela permet également à l'un d'entre eux de fournir une assistance médicale à distance, 
                        comme stabiliser un blessé ou arrêter une hémorragie, même si l'autre est loin.
                        <br>
                        <br>
                        <span class="titleparty">Autosoin en Combat :</span>  
                        <span class="titleparty">Regen 3, Speed 2 et Resi 1 pour l’un, slowness V et Blindness 3 pour l’autre</span>  
                        Si l'un des jumeaux est dans un combat et a besoin de chakra pour se soigner ou pour 
                        augmenter ses capacités, l'autre peut fournir son chakra pour renforcer ses efforts. 
                        Cependant, cela demande une concentration intense de la part de celui qui donne le chakra, 
                        limitant ses propres mouvements et actions.
                        <br>
                        <br>
                        <span class="titleparty">Soutien en opérations médicales : +10% en opération</span> 
                        Les jumeaux peuvent unir leurs chakras pour accroître leur puissance médicale lors 
                        d'opérations chirurgicales ou de guérison. En canalisant leurs chakras combinés, 
                        ils peuvent accélérer la régénération des tissus, stabiliser des patients en danger et 
                        même guider leurs mains pour des procédures précises.
                    </p>`]
// Fin livre buff


// overlay debuff
var btndebuff = document.getElementById("btndebuff");
var overlaydebuff = document.getElementById('overlaydebuff');


btndebuff.addEventListener('click',opendebuff);
overlaydebuff.addEventListener('click',closeOverlaydebuff);

function closeOverlaydebuff(){
    overlaydebuff.style.display = 'none';
}

function opendebuff(){
    overlaydebuff.style.display = 'block';
}
// fin overlay debuff

// Livre debuff
function PageSuivantedebuff(nb) {
    document.getElementById("page1debuff").innerHTML = content_page1debuff[nb - 1];
    document.getElementById("page2debuff").innerHTML = content_page2debuff[nb - 1];
};
function Pageprecedentedebuff(nb) {
    document.getElementById("page1debuff").innerHTML = content_page1debuff[(nb - 1)];
    document.getElementById("page2debuff").innerHTML = content_page2debuff[(nb - 1)];
};

setTimeout(function() {
    PageSuivantedebuff(1);
}, 10);
content_page1debuff =  [`<p class="historytell">
                            <span class="titlehistory">Points négatifs</span> 
                            <span class="titleparty">Partage des Blessures et des Handicaps :</span> 
                            Une des conséquences majeures du Sceau Unisceau réside dans le fait que les blessures 
                            et les handicaps subis par l'un des jumeaux se reflètent immédiatement sur l'autre. 
                            Si l'un perd l'usage d'un bras, l'autre se verra lui aussi paralysé dans cette même partie du corps. 
                            Cette connexion profonde crée une vulnérabilité significative, car les blessures ou les handicaps 
                            peuvent rapidement affaiblir les deux jumeaux, limitant ainsi leurs capacités et leur efficacité 
                            lors des combats et des situations délicates.

                            <span class="titleparty">Contraintes de Mouvement :</span> 
                            Lorsqu'un jumeau fournit du chakra pour soutenir l'autre, cela exige une concentration intense. 
                            Cette focalisation limite leur mobilité et leur participation active dans un combat. Une telle 
                            contrainte pourrait être exploitable par leurs adversaires pour perturber leur dynamique pendant 
                            les affrontements.

                        </p>`]

content_page2debuff = [`<p class="historytell">
                        <span class="titleparty">Difficulté d'Autonomie :</span> 
                        L'Unisceau engendre une interdépendance entre Mio et Arasa. 
                        Ils ne peuvent pas agir de manière totalement autonome, ce qui peut se révéler contraignant et 
                        limitant. Les décisions nécessitent d'être prises en concertation, et l'un des jumeaux peut avoir du 
                        mal à entreprendre une action individuelle.
                        <br>
                        <br>
                        <span class="titleparty">Charge émotionnelle :</span> 
                        Le partage émotionnel peut engendrer une charge émotionnelle intense. 
                        Les émotions négatives ressenties par l'un des jumeaux peuvent avoir un impact significatif 
                        sur l'autre, générant ainsi des conflits internes et des difficultés pour gérer leurs émotions.
                    </p>`]
// Fin livre debuff