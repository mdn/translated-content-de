---
title: Barrierefreiheit im Web für Krampfanfälle und körperliche Reaktionen
short-title: Krampfanfälle und körperliche Reaktionen verhindern
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

Dieser Artikel stellt Konzepte vor, die der barrierefreien Gestaltung von Webinhalten für Menschen mit vestibulären Störungen zugrunde liegen, sowie Methoden zum Messen und Verhindern von Inhalten, die zu Krampfanfällen und/oder anderen körperlichen Reaktionen führen.

## Überblick

### Krampfanfälle

Durch Licht verursachte Krampfanfälle werden als photosensitive Epilepsie bezeichnet. Flackernde, aufblitzende oder blinkende Inhalte können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Krampfanfälle oder andere beeinträchtigende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen auslösen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von „Reflexepilepsie“ – Krampfanfälle, die als Reaktion auf einen Auslöser auftreten. Bei photosensitiver Epilepsie werden Krampfanfälle speziell durch blinkende Lichter ausgelöst, andere Arten von Reflexepilepsien können jedoch durch Lesen oder Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Krampfanfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert. Dort wird festgestellt: „_Bestimmte visuelle Bilder können selbst ohne Bewegung oder Flackern bei Patienten mit photosensitiver Epilepsie Krampfanfälle auslösen._“ Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: „_Statische oder bewegte Muster mit erkennbaren hellen und dunklen Streifen haben aufgrund des Wechsels zwischen dunklen und hellen Bereichen dieselbe Wirkung wie blinkende Lichter._“ Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem etwas „quantifizieren“: _„Ein Muster mit dem Potenzial, Krampfanfälle hervorzurufen, enthält klar erkennbare Streifen mit mehr als fünf Hell-Dunkel-Streifenpaaren in beliebiger Ausrichtung.“_ Neben Streifen können laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch Schachbrettmuster photosensitive Krampfanfälle verursachen.

Obwohl statische Bilder mögliche Auslöser sind, treten sie weniger konsistent auf. Der gut etablierte und starke Auslöser sind blinkende/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: _„Das Einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Krampfanfälle auslösen können. Allerdings sind nur wenige Arten von Epilepsien photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht.“_ Zusätzlich zu durch Photosensitivität ausgelösten Krampfanfällen kann das Hören bestimmter Musikstücke sogenannte musikogene Krampfanfälle auslösen, obwohl diese Art von Krampfanfällen deutlich seltener zu sein scheint. Eine gute Einführung in das Thema musikogener Krampfanfälle bietet die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Krampfanfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) weist die Epilepsy Foundation darauf hin, dass _„ein Krampfanfall ein Ereignis ist und Epilepsie die Erkrankung, die wiederkehrende, nicht provozierte Krampfanfälle umfasst“_. Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _„der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Er ist nicht häufig, aber ein sehr reales Problem, und Menschen müssen sich seines Risikos bewusst sein.“_

Der entscheidende Punkt ist: Krampfanfälle können definitiv tödlich sein und sind es auch. Entwicklerinnen, Entwickler, Designerinnen und Designer sind äußerst wichtig, um das Web für Menschen mit Empfindlichkeiten gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Krampfanfälle können tödlich sein, aber selbst jene, die „nur“ beeinträchtigend sind, können so schwerwiegend sein, dass sie Benutzerinnen und Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und weitere können ebenfalls so schwerwiegend sein, dass die betroffene Person nicht mehr funktionsfähig ist. Der Artikel der Epilepsy Foundation ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) enthält eine Liste von Auslösern, die bei photosensitiven Menschen Krampfanfälle verursachen können. Hier ein Auszug daraus:

- Fernsehbildschirme oder Computermonitore aufgrund von Flimmern oder durchlaufenden Bildern.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter, etwa visuelle Feueralarme.
- Natürliches Licht wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien fällt.
- Bestimmte visuelle Muster, insbesondere Streifen in kontrastierenden Farben.

Derselbe Artikel führt weiter aus, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor genannt wird; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: _„Bei Personen mit photosensitiven Anfallserkrankungen können Inhalte, die bei bestimmten Frequenzen mehr als einige Male blitzen, einen Krampfanfall auslösen“_, und führt dann sehr spezifisch aus: _„Menschen sind gegenüber rotem Blinken sogar empfindlicher als gegenüber anderen Farben, daher gibt es einen speziellen Test für gesättigtes rotes Blinken.“_

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Leuchtdichte mit hoher Frequenz ändert – einfach mit JavaScript umsetzbar –, kann echten Schaden anrichten. Außerdem kann Flimmern überall auftreten. Beispielsweise können „Spinner“, die üblicherweise beim Laden von Seiten angezeigt werden, während ihrer Drehung leicht „flimmern“.

Für Personen mit Problemen der Motorik bestehen zusätzliche Bedenken. Beispielsweise weist die Seite zum [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) des Trace Research & Development Center darauf hin, dass _„photosensitive Krampfanfälle durch bestimmte Arten des Blinkens in Web- oder Computerinhalten hervorgerufen werden können, einschließlich Mouseover-Effekten, durch die große Bereiche des Bildschirms wiederholt schnell ein- und ausgeblendet werden“_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit vielen Arten von Erkrankungen verbunden sind und nicht besonders auf Krampfanfälle hindeuten – mit Ausnahme vielleicht von Desorientierung, die bei Krampfanfällen vorkommt. Krampfanfälle sind jedoch nicht die einzige mögliche nachteilige körperliche Reaktion auf Blitzen, Flimmern, Blinken und ähnliche Reize. 1997 zeigte eine japanische Zeichentrickserie eine animierte „Virusbombe“. Einige der Kinder, die den Zeichentrickfilm sahen, reagierten mit Krampfanfällen, andere litten unter Übelkeit, Zittern und Bluterbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind allesamt mögliche Folgen; jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie handlungsunfähig macht.

- Krampfanfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken und Flimmern

Obwohl „Blitzen“ und „Blinken“ manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen Inhalte bezeichnet, die mehr als dreimal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz von mehr als 3 Hz (Flimmern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest: _„Im Allgemeinen lösen blinkende Lichter mit Frequenzen zwischen fünf und 30 Blitzen pro Sekunde (Hertz) am ehesten Krampfanfälle aus. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Personen nicht mehr als drei Blitzen pro Sekunde ausgesetzt werden sollten.“_ Bei manchen Menschen können Blitzen oder Blinken jedoch bereits bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. NASA weist in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) darauf hin, dass Blinken und Blitzen wirkungsvolle Mittel sein können, um Aufmerksamkeit zu erregen – wie es beispielsweise für Warnschaltflächen erforderlich ist. Dies setzt voraus, dass Benutzerinnen und Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist. Für manche Benutzerinnen und Benutzer weisen blinkende Schaltflächen auch darauf hin, dass sie sparsam und sorgfältig eingesetzt werden müssen. Bei Webdesign müssen Systeme, die Mitarbeitende eines Unternehmens vor Gefahren warnen, indem sie den Bildschirm „übernehmen“, um eine blinkende Notfallwarnung anzuzeigen, die Frequenz, Größe und Änderungen der Leuchtdichte auf dem Bildschirm berücksichtigen.

### Blitzen und Flimmern – wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _„ist ein Blitz eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> besitzt, mit einer Frequenz von ≥3 Hz auftritt und einen Raumwinkel von ≥0,006 Steradiant einnimmt (ungefähr 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen).“_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung für einen typischen Betrachtungsabstand zum Zeitpunkt der Erstellung lautete: _„Der Bereich kann als auf einen Bereich von >25 % der Fläche eines Fernsehbildschirms zutreffend angesehen werden, unter Annahme von Standard-Betrachtungsabständen von ≥2 m (∼9 Fuß).“_ Seitdem hat sich vieles verändert, und wir befinden uns heute wesentlich näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls relevant. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest: _„… die Komplexität der Hirndynamik könnte durch bestimmte Farbkombinationen stärker moduliert werden als durch andere; beispielsweise verursacht ein rot-blauer Flimmerreiz eine stärkere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz.“_

### Blitzen und rotes Blitzen

Die [allgemeinen Blitz- und Rotblitz-Schwellenwerte von WCAG 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist als ein Paar gegensätzlicher Änderungen der [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von mindestens 10 % der maximalen relativen Leuchtdichte definiert, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt und „ein Paar gegensätzlicher Änderungen“ eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist.
- Ein **roter Blitz** ist als jedes Paar gegensätzlicher Übergänge definiert, das ein gesättigtes Rot umfasst.

Diese Standards basieren auf früherer Forschung. 2004 veranstaltete die Epilepsy Foundation of America einen Workshop und entwickelte einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Krampfanfälle. Darin heißt es: _„Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> besitzt, mit einer Frequenz von mindestens 3 Hz auftritt und einen Raumwinkel von mindestens 0,006 Steradiant einnimmt (etwa 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen).“_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt für sich allein ein Risiko dar: _„Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko betrachtet.“_

### Größe und Abstand

#### Wie groß? Das kommt darauf an

Sowohl „relative“ Größe als auch Abstand sind wichtig. Laut [PEAT](https://trace.umd.edu/peat/) _„nimmt die kombinierte Fläche gleichzeitig auftretender Blitze insgesamt nicht mehr als ein Viertel eines beliebigen Rechtecks von 341 × 256 Pixeln an beliebiger Stelle der angezeigten Bildschirmfläche ein, wenn der Inhalt bei 1024 × 768 Pixeln betrachtet wird.“_

Die Bedeutung des Gesichtsfelds wird in dem Artikel zu WCAG 2.3.1 weiter ausgeführt: _„Der Bildschirm mit 1024 × 768 Pixeln wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der Block von 341 × 256 Pixeln repräsentiert einen Sichtbereich von 10 Grad bei einem typischen Betrachtungsabstand. Das Gesichtsfeld von 10 Grad stammt aus den ursprünglichen Spezifikationen und repräsentiert den Bereich des zentralen Sehens des Auges, in dem Menschen für photische Reize am anfälligsten sind.“_

Dieses Pixel-Flächenverhältnis berechnet die relative Größe, aber auch der Abstand ist wichtig.

Der Abstand ist wichtig, weil er das gesamte Gesichtsfeld beeinflusst. Wenn Betrachtende beim Spielen Augenmasken tragen, wird das Gesichtsfeld wahrscheinlich vollständig vom Bildschirm ausgefüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die VR-Erlebnisse im Browser ermöglicht, etwa auf Telefon, Computer oder Headset. Die Sorge über blinkende Bilder in einer Augenmaske wächst, da sich die Maske so nah an den Augen befindet.

Forschungen deuten im Allgemeinen darauf hin, dass die Nutzung von VR aufgrund höherer Bildwiederholraten tatsächlich sicherer sein kann als die normale Nutzung von Bildschirmen. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen: _„Die bisher verfügbaren begrenzten Daten werfen keine besonderen Bedenken hinsichtlich Krampfanfällen bei VR-Technologie auf, obwohl sich diese Ansicht mit zunehmender Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provozierender Muster oder Farbänderungen, würden erwartungsgemäß Krampfanfälle auslösen, ebenso wie in der realen Welt.“_

(Beachten Sie, dass manche Benutzerinnen und Benutzer blinkende Cursor nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Auslöser; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsy Foundation of America gibt an, wie viele Hell-Dunkel-Streifenpaare unter welchen Bedingungen wahrscheinlich Krampfanfälle hervorrufen. Wenn ein Muster unverändert und gerade ist, sind acht Linien das zulässige Maximum; wenn es sich wellenförmig bewegt, dürfen es nicht mehr als fünf Linien sein.

Parallaxeneffekte können Desorientierung verursachen. Verwenden Sie Parallaxeneffekte mit Vorsicht. Wenn Sie sie verwenden müssen, stellen Sie sicher, dass die Benutzerin oder der Benutzer sie deaktivieren kann.

„Ein Muster mit dem Potenzial, Krampfanfälle hervorzurufen, enthält klar erkennbare Streifen mit mehr als fünf Hell-Dunkel-Streifenpaaren in beliebiger Ausrichtung. Wenn die Hell-Dunkel-Streifen eines Musters zusammen aus dem erwarteten minimalen Betrachtungsabstand am Auge einen Raumwinkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Streifenpaare zeigen, wenn die Streifen ihre Richtung ändern, oszillieren, blitzen oder ihren Kontrast umkehren; wenn das Muster unverändert bleibt oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen.“

Nicht alles ist bekannt, und selbst bei den oben genannten Metriken spielen zusätzliche Faktoren eine Rolle. Beispielsweise erhöht der Übergang von einer kleineren zu einer größeren Fläche die Wahrscheinlichkeit einer Reaktion des Gehirns, ebenso wie ein höherer Kontrast und die Erhöhung der räumlichen Frequenz von niedrig auf mittel. Es ist außerdem bekannt – obwohl die Gründe dafür nicht verstanden sind –, dass der Übergang von grundlegenden Ausrichtungen, etwa Streifen, zu mehreren Ausrichtungen, etwa dem Schachbrettmuster, das entsteht, wenn ein Satz Streifen über, aber senkrecht zum ursprünglichen Satz gelegt wird, das Gehirn beeinflusst.

### Farben

Das Verständnis von Farbe ist für die Barrierefreiheit wichtig. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) im Zusammenhang mit Barrierefreiheit im Web und Barrierefreiheit allgemein.

Wichtig ist, wie sich die Farbe auf ihren Hintergrund bezieht – üblicherweise als Kontrast beschrieben – und wie drastisch sich die Farbe bei Animationen von Bild zu Bild ändert. Weitere Informationen finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde gezeigt, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Tests zur Rotentsättigung:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärztinnen und Augenärzte einen darauf basierenden Test verwenden. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen dazu, wie dieser Test in der Augenheilkunde eingesetzt wird, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischen Hirnverletzungen die [kognitive Funktion in einer roten Umgebung eingeschränkt ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, für den spezielle Tests existieren. Neben den Auswirkungen einer roten Umgebung auf die kognitive Funktion von Menschen mit traumatischen Hirnverletzungen scheint die Farbe im roten Wellenlängenbereich besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte beim Testen des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten wesentlich höher waren als erwartet. Dabei wurde festgestellt, dass wir wesentlich empfindlicher auf gesättigtes rotes Blinken reagieren. Siehe das Video [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als „**websafe**“ gilt. Das bedeutet _nicht_, dass sie „sicher ist, weil sie keine Krampfanfälle verursacht“; es bedeutet lediglich, dass die Farbe von der Technologie zur Farbdarstellung auf Bildschirmen möglicherweise „sicher“ und genau reproduziert werden kann.

## Messen, um Schaden zu verhindern

Die Messung des potenziellen Schadens ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Leuchtdichte, Größe, Kontrast und bei Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 berief die Epilepsy Foundation of America einen Workshop ein, um einen Expertenkonsens über photosensitive Krampfanfälle zu entwickeln. Die folgenden fachlichen und maßgeblichen Informationen stammen aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> besitzt, mit einer Frequenz von ≥3 Hz auftritt und einen Raumwinkel von ≥0,006 Steradiant einnimmt (ungefähr 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Krampfanfälle hervorzurufen, enthält klar erkennbare Streifen mit mehr als fünf Hell-Dunkel-Streifenpaaren in beliebiger Ausrichtung. Wenn die Hell-Dunkel-Streifen eines Musters zusammen aus dem erwarteten minimalen Betrachtungsabstand am Auge einen Raumwinkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Streifenpaare zeigen, wenn die Streifen ihre Richtung ändern, oszillieren, blitzen oder ihren Kontrast umkehren; wenn das Muster unverändert bleibt oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Grundsätze lassen sich bei festen Medien, beispielsweise einer vorab aufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, leichter anwenden als bei interaktiven Medien.

„cd/m<sup>2</sup>“ steht für Candela pro Quadratmeter. Wie beziehen sich diese Angaben für Webentwicklerinnen und Webentwickler auf Messungen von Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit des Internationalen Einheitensystems für Lichtstärke. Sie ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung sichtbaren Lichts, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel zu ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) beschreibt dies in Begriffen, mit denen Entwicklerinnen und Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Das ist hilfreich, weil es einen bestimmten Standard gibt, der für Monitore, Drucker und das Internet vorausgesetzt wird: **sRGB** (standard Red Green Blue).

> Als Maß für das pro Flächeneinheit abgestrahlte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Desktop-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) für Verbraucher haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [Hochauflösende Fernseher](https://en.wikipedia.org/wiki/High-definition_television) liegen zwischen 450 und etwa 1500 cd/m<sup>2</sup>.

Die wichtigste Erkenntnis ist, dass der **sRGB**-Farbraum ein gemeinsamer Bezugspunkt zwischen Forschung, Bewertungswerkzeugen sowie Entwicklerinnen und Entwicklern ist, da er sich einfach aus dem häufig verwendeten Hex-Code umrechnen lässt.

### Menschliche Physiologie und Psychologie als Aspekte

Viele Expertinnen und Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Krampfanfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Dennoch darf nicht vergessen werden, dass es bei Farbe ebenso sehr um die menschliche Wahrnehmung im Gehirn geht wie um die Messung des von einem Computerbildschirm ausgehenden Lichts.

Zusätzlich zu psychologischen Variationen gibt es auch physiologische Unterschiede zwischen Menschen. Es wird Unterschiede und Nuancen darin geben, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. Tom Jewett, emeritierter Dozent für Informatik an der Cal State University Long Beach, merkt beispielsweise Folgendes zu [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) an: _„… Der Unterschied zwischen Helligkeitsstufen ist tatsächlich nicht linear, wie es die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Änderungen hellerer Werte als dunklerer.“_

Es ist wichtig zu verstehen, dass Licht und seine Messwerte linear sind, menschliches Sehen und menschliche Wahrnehmung jedoch nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht – auf seinem Weg von einem Computerbildschirm über die Entfernung zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn verarbeitet – in Beziehung gesetzt werden kann, ist noch nicht abgeschlossen.

Auch Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) _„haben Kinder und Jugendliche eher als Erwachsene eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Krampfanfall tritt fast immer vor dem Alter von 20 Jahren auf“_. Der Artikel nennt anschließend folgende Statistik: _„Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Krampfanfälle bei Jungen häufiger auftreten, weil sie mit größerer Wahrscheinlichkeit Videospiele spielen. Videospiele enthalten häufig potenziell auslösende Lichtstimulationen.“_

**Nutzertests sind sehr problematisch.** Natürlich möchte niemand eine für Krampfanfälle anfällige Person Nutzertests aussetzen. Das ist gefährlich. Deshalb ist eine der ethischsten Maßnahmen, die Entwicklerinnen, Entwickler, Designerinnen und Designer ergreifen können, die Verwendung von Werkzeugen, die von Fachleuten auf diesem Gebiet in enger Zusammenarbeit mit Ärztinnen und Ärzten entwickelt wurden. Zum Zeitpunkt der Erstellung dieses Artikels gibt es zwei allgemein verfügbare Werkzeuge, die von Forschenden und medizinischen Fachkräften ethisch und professionell für Film/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat mit einem [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) einen Goldstandard geschaffen und ausdrücklich darauf Wert gelegt, es **_kostenlos_** zum Download anzubieten. PEAT kann Autorinnen und Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Krampfanfälle verursachen. Beachten Sie bitte die Einschränkung der Nutzung: **_Die Verwendung von PEAT zur Bewertung von Material, das kommerziell für Fernsehausstrahlungen, Film-, Heimunterhaltungs- oder Spieleindustrien produziert wurde, ist untersagt. Verwenden Sie für kommerzielle Zwecke den Harding Test oder andere Werkzeuge._**

Eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland erhalten Sie beim [Trace Research & Development Center](https://trace.umd.edu/).

![Photosensitive Epilepsy Analysis Tool des College of Information Studies der University of Maryland.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Werkzeugs für kommerzielle Zwecke untersagt ist, können Fernsehprogrammverantwortliche den Harding Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Goldstandard. Fernsehprogrammverantwortliche in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen. Daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analysen als auch Zertifizierungen von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen für Barrierefreiheit für Entwicklerinnen und Entwickler

Alle Animationen sind potenziell gefährlich. Als Designerinnen, Designer, Entwicklerinnen und Entwickler tragen wir die Verantwortung, keinen Schaden anzurichten – weder absichtlich noch unbeabsichtigt. Wenn wir etwas einbinden müssen, das Schaden verursachen könnte, ist es entscheidend, Benutzerinnen und Benutzer davor zu schützen, den schädlichen Inhalt versehentlich anzutreffen, und Möglichkeiten bereitzustellen, mit denen sie Animationen verhindern und steuern können, um potenziellen Schaden zu mindern.

### Was Webentwicklerinnen und Webentwickler tun können

#### Keinen Schaden anrichten

[WCAG-Leitlinie 2.3 Krampfanfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _„Gestalten Sie Inhalte nicht auf eine Weise, von der bekannt ist, dass sie Krampfanfälle oder körperliche Reaktionen verursacht.“_ Fügen Sie keine Animation ein, die eine Benutzerin oder ein Benutzer nicht steuern kann. Entwerfen Sie nicht mit Mustern, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie ein GIF oder PNG mit Blinken einbinden müssen, zeichnen Sie es stattdessen in einem Videoformat auf, damit der Benutzerin oder dem Benutzer Steuerungsmöglichkeiten zur Verfügung stehen. Geben Sie ihr oder ihm die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich darzustellen.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwicklerin, Entwickler, Designerin oder Designer, ob stroboskopische Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie korrekt behandelt werden, könnten andere anstößige Inhalte von Ihrer Website herunterladen und als Waffe einsetzen. Es wird angenommen, dass der erste dokumentierte Versuch, mithilfe von Computern durch Animation körperlichen Schaden zu verursachen, am Samstag, dem 22. März 2008, begann: Die Website der Epilepsy Foundation wurde durch Beiträge mit blinkenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Benutzerinnen und Benutzer mit vestibulären Störungen, die auf der Website Hilfe suchten, waren betroffen.

Nach einem Vorfall im Dezember 2016, bei dem der Journalist Kurt Eichenwald, der bekanntermaßen an Epilepsie leidet, nach dem Empfang eines animierten GIF einen Krampfanfall erlitt, sind rechtliche Verfahren eingeleitet worden: Das blinkende GIF enthielt die Nachricht _„You deserve a seizure for your posts“_.

#### Exposition und Zugriff steuern

Die Kontrolle der Exposition gegenüber der Seite ist entscheidend, um sicherzustellen, dass Personen, die für Krampfanfälle anfällig sind, ihr nicht versehentlich ausgesetzt werden. WCAG weist darauf hin, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, dass ein Bild oder eine Animation Krampfanfälle verursachen könnte, steuern Sie den Zugriff darauf, indem Sie zunächst eine Warnung über den Inhalt anzeigen und ihn dann an einem Ort platzieren, für den die Benutzerin oder der Benutzer sich aktiv entscheiden muss, etwa durch Klicken auf eine Schaltfläche. Alternativ stellen Sie sicher, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie, Crawling-Direktiven für Suchmaschinen festzulegen, um darauf hinzuweisen, dass sie potenziell schädliche Ressourcen nicht in ihre Suchindizes aufnehmen sollten.
Dies ist mithilfe von Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Element mit restriktiven Regeln wie `noindex, nofollow` möglich.
Indem die Seite nicht indexiert (`noindex`) und Links auf der Seite nicht verfolgt (`nofollow`) werden, verringert sich die Wahrscheinlichkeit, dass Benutzerinnen und Benutzer sie über eine Suche zufällig finden:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <body>
    …
  </body>
</html>
```

Für Nicht-HTML-Ressourcen können Sie Crawling-Direktiven in einem {{httpheader("X-Robots-Tag")}}-HTTP-Antwort-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich. Animierte GIFs verdienen jedoch besondere Erwähnung, da sie weit verbreitet sind und die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das npm-Paket [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht es, eine Animation in einer gegebenen HTTP-Anfrage _so früh wie möglich_ zu erkennen.
- Zakirt stellt einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) bereit.

Stellen Sie bei animierten GIFs sicher, dass die Animation inaktiv ist, bis die Benutzerin oder der Benutzer sie aktiviert. Beispielsweise muss die Benutzerin oder der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie bei animierten GIFs muss die Benutzerin oder der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten dafür, etwa das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut nicht zu `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} als Anfangszustand auf `paused` zu setzen. Ein anschauliches Beispiel dafür finden Sie im Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um ein sehr barrierefreies Erlebnis unter Kontrolle der Benutzerin oder des Benutzers zu schaffen.

{{cssxref("animation-play-state")}} ist eine CSS-Eigenschaft, die festlegt, ob eine Animation ausgeführt oder pausiert wird.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) können verwendet werden, um die Dauer für die Anfangsphase einer Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass Benutzerinnen und Benutzer Animationen sowohl stoppen als auch starten können

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und verfügt auch über keine Steuerelemente. Stellen Sie sicher, dass Sie dem Videoelement das Attribut `controls` hinzufügen, damit Benutzerinnen und Benutzer das Video sowohl stoppen als auch starten können.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerelemente verfügbar sind

Die Eigenschaft `HTMLMediaElement.controls` spiegelt das HTML-Attribut `controls` wider, das steuert, ob Benutzeroberflächen-Steuerelemente zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über zugängliche Steuerelemente verfügt, fügen Sie das Wort „controls“ zu HTML-Video- und Audioelementen hinzu.

`<video controls>`

```html
<video controls>
  <source src="myVideo.mp4" type="video/mp4" />
  <source src="myVideo.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="myVideo.mp4">link to the video</a> instead.
  </p>
</video>
```

##### Audio

Wenden Sie dasselbe Beispiel auf Audio an:

`<audio controls>`

```html
<audio controls>
  <source src="myAudio.ogg" type="audio/ogg" />
  <source src="myAudio.mp3" type="audio/mpeg" />
  <p>
    Your browser does not support the audio element. Here is a
    <a href="myAudio.mp3">link to the audio</a> instead.
  </p>
</audio>
```

##### Audio als Teil eines Videos

Beachten Sie, dass Audio in Videos durch das Inhaltsattribut `muted` gesteuert werden kann, obwohl sich der Inhalt im {{HTMLElement('video')}}-Element und nicht im {{HTMLElement('audio')}}-Element befindet. Dieses Beispiel stammt aus der Beschreibung des Abschnitts [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) des HTML Living Standard. Es erläutert, dass das Video im Hintergrund leise automatisch abgespielt wird, bis die Benutzerin oder der Benutzer aktiv wird, um die Audioausgabe einzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Das erscheint offensichtlich, aber da es so viele MIME-Typen gibt, unterscheiden sich die Mechanismen für ihre Behandlung stark. Daher gibt es keine Universallösung für das Problem. Zusätzlich wird dies dadurch erschwert, dass bereits die Klassifizierung von Dateien beeinflusst, wie sie behandelt werden sollten. Beispielsweise wird das Dateiformat `.gif` üblicherweise als Bild verstanden, aber aufgrund seiner Animierbarkeit in manchen Kreisen auch als Video-Dateiformat betrachtet. Eine umfassende Liste der Medientypen finden Sie auf der Seite [Media Types von IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml).

Das Erkennen dieser Typen ist keine triviale Aufgabe. Möglicherweise möchten Sie dem Standard [MIME Sniffing](https://mimesniff.spec.whatwg.org/) auf whatwg.org folgen. Fast jede Bildart kann animiert werden; wie sie animiert wird, unterscheidet sich und damit auch die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas enthält einen hervorragenden Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein fester Bestandteil von Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Grundlagen der Implementierung von `requestAnimationFrame` im Zusammenhang mit der Bildschirmaktualisierung besprochen werden.
- **GIFs (Raster)**: Schwer zu kontrollieren, da die Steuerung ihrer Animation in den GIF-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie unter ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html) des W3C. Ein guter Stack-Overflow-Artikel zu diesem Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript).
- **GIFV (Raster)**: Gilt als Variante, als Videoversion von GIF. Das Format ist nicht standardisiert und muss auf eine „echte“ Videodatei verweisen, beispielsweise eine `.webm`-Datei, die an anderer Stelle vorhanden sein muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Es wird von einigen auch als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert sein.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest: _„SVG ist ein textbasierter offener Webstandard. Es wurde ausdrücklich dafür entwickelt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zusammenzuarbeiten.“_ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using an svg as a source">`. Das bedeutet, dass das Erscheinungsbild und die Animation von SVG über CSS-Keyframes und Animationen gesteuert werden können. Informationen zur Interaktion mit JavaScript finden Sie in den MDN-Dokumenten zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Auch Text kann animiert werden

Verschiebungen und Transformationen können Text in einem div animieren und Schaden verursachen. Bewegter Text kann aus denselben Gründen Krampfanfälle auslösen wie bewegte Bilder. Vermeiden Sie daher, Ihren Text zu animieren. Es ist ohnehin empfehlenswert, bewegten Text zu vermeiden, da viele Screenreader bewegten Text nicht lesen können und dies selbst für Personen ohne Seh- oder vestibuläre Beeinträchtigungen eine schlechte Benutzererfahrung darstellt.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um eine leistungsfähige Erfahrung für Benutzerinnen und Benutzer zu schaffen. Die Eigenschaft `animation` wurde bereits weiter oben in diesem Dokument erwähnt. Sie ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert vom Typ `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Sie kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die Eigenschaft `animation` ist bereits für sich genommen leistungsfähig. In Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann Benutzerinnen und Benutzern jedoch ein leistungsfähiger Satz an Optionen bereitgestellt werden. Das Setzen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer, anstatt sie auf `animation: none` und `transition: none` zu setzen, schafft eine Absicherung für den Fall, dass eine Abhängigkeit von der Ausführung der Animation besteht.

### JavaScript-Animation

JavaScript wird häufig zur Steuerung von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der Großteil des JavaScript-Codes, der für HTML-Video gilt, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit von Video und Audio umzusetzen. Ein Wert von 1.0 ist der Standardwert und gilt als normale Geschwindigkeit; ein Wert von 0.5 entspricht der halben Geschwindigkeit, ein Wert von 2.0 der doppelten Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Legen Sie die Eigenschaft für die Wiedergabegeschwindigkeit fest: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web Animations](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) enthält das folgende Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Eine der einfachsten Möglichkeiten besteht darin, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und anschließend zu animieren. Denken Sie daran: Sie können GIFs, JPGs, PNGs, SVGs und andere Dateitypen als Bildquelle verwenden, solange sie in Ihrer Umgebung zulässige Dateitypen und -größen sind. SVGs sind aufgrund von Sicherheitsbedenken häufig nicht erlaubt. Das MDN-Dokument [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet hierfür hervorragende Beispiele. Es verwendet mehrere Bildquellen für Sonne, Erde und Mond sowie verschiedene Canvas-Methoden, um Geschwindigkeit und Animation der Erde bei ihrem Umlauf um die Sonne und des Mondes bei seinem Umlauf um die Erde zu steuern. Verwenden Sie den mit diesem Tutorial verfügbaren CodePen, um `ctx.rotate` im Code anzupassen und zu sehen, wie sich Änderungen auf die Animation auswirken.

#### Wenn Sie unbedingt eine blinkende Animation verwenden müssen …

Stellen Sie sicher, dass sie über eine Steuerung verfügt. Stellen Sie sicher, dass sie deaktiviert ist, wenn Betrachtende ihr erstmals begegnen, und dass Benutzerinnen und Benutzer sich aktiv dafür entscheiden müssen, die Animation zu sehen.

Ein Beispiel für ein Format ohne verfügbare Benutzersteuerungen ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Durch das Konvertieren eines animierten GIF in Video können Steuerelemente für die Animation bereitgestellt werden, und Benutzerinnen und Benutzer erhalten Handlungsspielraum. Es gibt viele kostenlose Online-Konverter, etwa [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Erwartungen der Benutzerinnen und Benutzer festlegen

Informieren Sie Benutzerinnen und Benutzer im Voraus darüber, was geschieht, bevor sie auf diesen Link klicken. Beschreiben Sie die folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Klein halten

Wenn Sie unbedingt Blinken verwenden müssen, halten Sie es klein. Begrenzen Sie die Größe des Blitzes im Allgemeinen auf einen Bereich von ungefähr 341 × 256 Pixeln oder weniger. Diese Pixelgröße setzt voraus, dass sich die betrachtende Person in einem typischen Abstand vom Bildschirm befindet. Wie zuvor erwähnt, kann diese Größe zu groß sein, wenn das Bild aus kurzer Entfernung betrachtet wird, etwa in einem VR-Headset. WebVR ist eine offene Spezifikation, die VR-Erlebnisse im Browser ermöglicht. WebVR kann auf Telefon, Computer oder Headset verwendet werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet, **oder von einer Augenmaske verwendet werden KANN**, wie etwa Firefox Reality – einem Browser für virtuelle Realität –, stellen Sie sicher, dass die Größe des Rechtecks deutlich kleiner als 341 × 256 Pixel ist, weil sich das Bild viel näher an den Augen der Benutzerin oder des Benutzers befindet.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast im Hinblick auf Barrierefreiheit vorteilhaft. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund ist – technisch als _Leuchtdichte-Kontrastverhältnis_ bezeichnet, gemäß der W3.org-Seite [Colors with Good Contrast](https://www.w3.org/WAI/perspective-videos/contrast/) –, desto leichter lässt sich solcher Inhalt lesen. Insbesondere Benutzerinnen und Benutzer mit Sehbehinderungen profitieren von Bemühungen um einen hohen Kontrast zwischen Text und Hintergrund. Wenn der Inhalt jedoch animiert ist, kann das **_Verringern_** des Kontrasts die Wahrscheinlichkeit reduzieren, dass der animierte Inhalt Krampfanfälle verursacht. Verringern Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Am besten passen Sie den Kontrast an, bevor der Inhalt ins Web hochgeladen oder dort veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe-Produktsuite eine hervorragende Ressource für traditionelle Bilder. Ebenfalls für Bilder verfügbar ist das Online-Werkzeug [Brightness and contrast online](https://pinetools.com/brightness-contrast-image) von pinetools.com. Wenn Sie beispielsweise animierte GIFs erstellen möchten, beginnen Sie mit einem GIF, das ein niedrigeres Kontrastverhältnis besitzt.

JavaScript ist ebenfalls eine Option, um Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Example: Setting the background color of a paragraph"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

**HTML-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#javascript_2)**

```js
function setBackground() {
  // now, get all the p elements in the document
  const paragraphs = document.getElementsByTagName("p");

  // get the second paragraph from the list
  const secondParagraph = paragraphs[1];

  // set the inline style
  secondParagraph.style.background = "red";
}

document.querySelector("input").addEventListener("click", setBackground);
```

#### Vermeiden Sie vollständig gesättigtes Rot für blinkende Inhalte

Wie bereits weiter oben in diesem Dokument erwähnt, berief die Epilepsy Foundation of America im August 2004 einen Workshop ein, um einen Expertenkonsens über photosensitive Krampfanfälle zu entwickeln. Zu den Ergebnissen gehörte die Erkenntnis: _„Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von mindestens 20 cd/m2 besitzt, mit einer Frequenz von mindestens 3 Hz auftritt und einen Raumwinkel von mindestens 0,006 Steradiant einnimmt (etwa 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet.“_ Im selben Konsens wird außerdem festgehalten: _„Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von gesättigtem Rot als Risiko betrachtet.“_

### Alternative CSS-Stile bereitstellen

Da ein großer Teil von Animation und Blinken mithilfe von CSS-Methoden gesteuert werden kann, ist es wichtig, Wege zu erkunden, Benutzerinnen und Benutzern alternative Optionen bereitzustellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die in alternativen Stylesheets verfügbaren alternativen CSS-Stile an, wenn Benutzerinnen und Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Stile im Menü „Ansicht“ angezeigt, in anderen Fällen in den Einstellungen, manchmal an beiden Orten. Nicht alle Benutzerinnen und Benutzer wissen, dass sie über den Browser oder die Einstellungen nach diesen Optionen suchen können. Daher lohnt es sich, die Dinge auf herkömmliche Weise zu erledigen, mit offensichtlichen Schaltflächen oder Links zum Ändern des Stils, damit Benutzerinnen und Benutzer sie sehen können. Dies steht weder im Konflikt mit noch überschreibt es die Fähigkeit des Browsers, alternative Stylesheets zu lesen, oder die Fähigkeit der Benutzerin oder des Benutzers, Präferenzen in den Einstellungen festzulegen.

Es ist wichtig zu wissen, dass bestimmte Benutzerinnen und Benutzer, etwa Menschen, die auf Spracherkennungssysteme angewiesen sind, oft auf herkömmliche Schaltflächen und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu verwenden oder Touch-Ereignisse auf mobilen Tablets zu nutzen.

Übliche Möglichkeiten, alternative Stylesheets in HTML-Dokumente einzubinden, sind das {{HTMLElement('link')}}-Element und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

```html
<head>
  <title>Home Page</title>
  <link href="main.css" rel="stylesheet" title="Default Style" />
  <link
    href="alternate1.css"
    rel="alternate stylesheet"
    title="Alternate One" />
  <link
    href="alternate2.css"
    rel="alternate stylesheet"
    title="Alternate Two" />
</head>
```

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets einzubinden, wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Durch die Verwendung alternativer Stylesheets – denken Sie daran, Titel hinzuzufügen – ermöglichen Sie Benutzerinnen und Benutzern, mit ihren Browsern alternative Stile auszuwählen.

### Dynamisches Umschalten von Stilen

Ein Problem dabei, sich darauf zu verlassen, dass der Browser alternative Stile sichtbar macht, besteht darin, dass nicht alle Benutzerinnen und Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder sie sind aufgrund ihrer Behinderung dazu nicht in der Lage. Schaltflächen oder Links machen vielen dankbaren Benutzerinnen und Benutzern deutlich, dass Optionen verfügbar sind. Es gibt zahlreiche Möglichkeiten, Umschalt-Schaltflächen hinzuzufügen, mit denen Benutzerinnen und Benutzer zwischen verschiedenen Stylesheets wechseln können. Die Verwendung alternativer Stylesheets ist jedoch nicht die einzige Option. Eine andere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) _„ist es, wo möglich, tatsächlich die beste Praxis, Klassen dynamisch über die Eigenschaft [`className`](/de/docs/Web/API/Element/className) zu manipulieren, da das endgültige Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet gesteuert werden kann“_. Eines der besten Beispiele dafür stammt von der W3C-Seite ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extremfälle: reine Textalternativen

Ein separates alternatives Stylesheet, das die Anzeige von Bildern verhindert, ist leicht zu erstellen. Es ist eine drastische Lösung, aber manchmal für Lehrkräfte und andere öffentliche Bedienstete notwendig, die Menschen mit extremer Empfindlichkeit betreuen müssen. Diese öffentlichen Bediensteten können ihre Entwicklerinnen und Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. So geht es mit CSS:

```css
img {
  display: none;
}
```

#### Media Queries mit {{HTMLElement('style')}} nutzen

Durch das Einrichten von Media Queries ermöglichen Sie Benutzersteuerungen; diese Steuerelemente werden im Browser oder Betriebssystem bereitgestellt. Weitere Details darüber, wie Benutzerinnen und Benutzer auf die Steuerungen zugreifen, finden Sie im MDN-Dokument [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Guides/Browsing_safely).

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern nimmt zu.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Ein gutes Beispiel für die Verwendung von `prefers-reduced-motion` finden Sie im MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder im folgenden Beispiel aus dem Abschnitt ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

```css
button {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  button {
    animation: none;
  }
}
```

#### `prefers-color-scheme`

Dies kann nützlich sein, wenn die Ambient-Light-API nicht verfügbar ist. Die Unterstützung entwickelt sich weiter.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Über Window.matchMedia() steht Entwicklerinnen und Entwicklern ein leistungsfähiges Werkzeug zur Verfügung. Eine gute Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Media-Feature `update`

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger „flimmert“ er. Die überwiegende Mehrheit moderner Technologien aktualisiert mit einer Frequenz, die keine Probleme mit Photosensitivität verursacht. Allerdings kann sich nicht jeder die neueste Technologie leisten: Ältere oder leistungsschwache Computer können niedrige Bildwiederholraten haben. Das [Faktenblatt (November 2015) Computers and Epilepsy von AbilityNet](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt weitere Details zu Bildwiederholraten.

Ein sehr alter Artikel von Tech Republic, ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), enthielt eine interessante Antwort zu Bildwiederholraten in Hz:

- _„Dieser Effekt ist bis zu 70 Hz bemerkbar und dokumentiert.“_
- _„Diese Studien scheinen darauf hinzuweisen, dass Sie Bildwiederholraten unter 70 Hz vermeiden und eine Rate verwenden sollten, die nicht durch 10 teilbar ist.“_

Eric Bailey von CSS-Tricks fand eine innovative Verwendung des `update`-Features, das in Kombination mit `animation-duration` oder `transition-duration` verwendet wird, um mit einer für das menschliche Auge nicht wahrnehmbaren Rate abzuschließen. Mit anderen Worten: Erics Techniken behandeln das Problem der Bildwiederholrate. Das folgende CSS stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das Media-Feature [`update`](/de/docs/Web/CSS/Reference/At-rules/@media/update) wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten nach deren Darstellung zu ändern. Es hat die Werte „none“, „slow“ und „fast“.

## Funktionen in Entwicklung und experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen anhand einer Lux-Messung zu definieren, da Geräte mit einem Lichtsensor die Bildschirmhelligkeit normalerweise automatisch anpassen. Die Spezifikationen weisen außerdem auf technologische Unterschiede hin, etwa zwischen E-Ink, das bei hellem Tageslicht lesbar bleibt, und Flüssigkristallen, bei denen das nicht der Fall ist.
- `environment-blending`
  - : Aus dem W3C-Entwurfsdokument Media Queries Level 5: _„Das Media-Feature [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) wird verwendet, um die Eigenschaften des Displays der Benutzerin oder des Benutzers abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor kann die visuellen Aspekte und/oder das Layout der Seite abhängig von der Displaytechnologie anpassen, um die Attraktivität zu steigern oder die Lesbarkeit zu verbessern.“_

#### Media-Features für Benutzereinstellungen (geplant in Media Queries Level 5)

[Media-Features für Benutzereinstellungen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um Benutzerinnen und Benutzern Kontrolle über Medien zu geben. Hier sind einige Höhepunkte:

- `inverted-colors`
  - : Laut dem Abschnitt [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) „gibt das Media-Feature [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) an, ob Inhalte normal angezeigt werden oder ob Farben invertiert wurden.“
- [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der User-Agent die bevorzugte Farbpalette der Benutzerin oder des Benutzers auf der Seite und überschreibt die vom Autor gewählten Farben. Aus dem W3C-Entwurfsdokument Media Queries Level 5 im Abschnitt zu `forced-colors`: _„Das Media-Feature `forced-colors` wird verwendet, um zu erkennen, ob der User-Agent einen [Modus erzwungener Farben](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine von der Benutzerin oder dem Benutzer gewählte begrenzte Farbpalette auf der Seite erzwingt.“_ Benutzerinnen und Benutzer müssen auf diese Möglichkeit hingewiesen werden, und sie muss mit dem passenden Wert für die Media Query `prefers-color-scheme` gut zusammenspielen.
- `light-level`
  - : Aus dem W3C-Entwurfsdokument Media Queries Level 5 im Abschnitt zu `light-level`: _„Das Media-Feature [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) wird verwendet, um die Umgebungslichtstärke abzufragen, in der das Gerät verwendet wird, damit der Autor den Stil des Dokuments entsprechend anpassen kann.“_ Dies wird ein großer Gewinn für Menschen mit motorischen Problemen oder für manche Menschen mit kognitiven Schwierigkeiten sein, die nicht die richtige „Schaltfläche“ finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem W3C-Entwurfsdokument Media Queries Level 5 im Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): _„Das Media-Feature `prefers-contrast` wird verwendet, um zu erkennen, ob die Benutzerin oder der Benutzer vom System verlangt hat, den Kontrastumfang zwischen benachbarten Farben zu erhöhen oder zu verringern. Viele Benutzerinnen und Benutzer haben beispielsweise Schwierigkeiten, Text mit geringem Kontrastunterschied zum Texthintergrund zu lesen, und bevorzugen einen größeren Kontrast.“_ Manchmal kann es zu viel Kontrast geben; in solchen Situationen kann ein Halo-Effekt um Text auftreten und die Lesbarkeit tatsächlich verringern. Den Kontrastumfang unter die Kontrolle der Benutzerin oder des Benutzers zu stellen, ist ein eindeutiger Gewinn für die Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 der CSSWG.org-Entwürfe integriert sich in die in HTML definierte [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop). [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Hilfe und Unterstützung bei Personalisierung

Die Anforderung für die Eigenschaft `literal` stammt aus [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation).

**Anforderung:** Einige Benutzerinnen und Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die Eigenschaft `literal` soll Text oder Bilder als nicht wörtlich kennzeichnen und ermöglicht dem Autor, nicht-wörtlichen Text und Bilder für Benutzerinnen und Benutzer zu erklären.

## Siehe auch

### MDN

- [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Accessibility: Understanding color and luminance](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Applying SVG effects to HTML Content](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Basic Animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- {{cssxref("&lt;color&gt;")}}
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit einer RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack-Exchange-Diskussionsbeitrag
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American, Susana Martinez-Conde und Stephen L. Macknik, 1. November 2014

### Diskussionen

- [Problems with WCAG 2.0 Flash Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Understanding 2.3.1 - missing/vague dimension definitions #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Krampfanfälle

- [Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _„Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber blinkenden Lichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettern geboren. Aufgrund dieses Zustands erzeugt ihr Gehirn anfallsähnliche Entladungen, wenn sie dieser Art visueller Stimulation ausgesetzt werden.“_
- [Gamma oscillations and photosensitive epilepsy](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology, [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336–R338: _„Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image) können selbst ohne Bewegung oder Flackern bei Patienten mit photosensitiver Epilepsie Krampfanfälle auslösen.“_
- [Photosensitive Seizures. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) „_Photosensitive Krampfanfälle werden durch blinkende oder flimmernde Lichter ausgelöst. Diese Krampfanfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._“
- [Photic-and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia, September 2005, 46(9):1423-5, PubMed.gov NCBI, [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D., Herausgeber

### ISO

<!-- cSpell:ignore colour -->

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und Farbmanagement — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Wird zusammen mit dem Harding-Tool allgemein als einer der beiden „Goldstandards“ für die Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Using PEAT To Create Seizureless Web Animations](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Explainer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Module](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Understanding WCAG 2.0 (älter, enthält jedoch einige Erläuterungen zu Verweisen in den WCAG-2.1-Kriterien)
- [Three Flashes or Below Threshold Understanding Success Criterion 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Understanding WCAG 2.1
- [Understanding Success Criteria 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
