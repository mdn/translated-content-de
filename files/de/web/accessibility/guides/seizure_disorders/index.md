---
title: Barrierefreiheit im Web für Anfälle und körperliche Reaktionen
short-title: Verhinderung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel führt Konzepte ein, wie Webinhalte für Personen mit vestibulären Störungen zugänglich gemacht werden können, und wie man Maßnahmen ergreifen kann, um Inhalte zu verhindern, die zu Anfällen und/oder anderen körperlichen Reaktionen führen könnten.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flimmern, blitzen oder blinken, können eine photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS oder JavaScript-Animationen verwenden, können alle Inhalte produzieren, die Anfälle oder andere lähmende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen verursachen, auch wenn sie nicht animiert sind. Die photosensitive Epilepsie ist tatsächlich eine Art der "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei der photosensitiven Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo bemerkt wird: "_Bestimmte visuelle Bilder können selbst in Abwesenheit von Bewegung oder Flimmern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Lichtempfindlichkeit bei Epilepsie, eine der komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster von erkennbar hellen und dunklen Streifen haben denselben Effekt wie blinkende Lichter, da die dunklen und hellen Bereiche abwechseln._" Die Epilepsy Foundation of America Working Group ist in der Lage, das Problem ein wenig zu "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf hell-dunkel-Paare von Streifen in irgendeiner Ausrichtung zählen."_ Zusätzlich zu Streifen sind laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch Schachbrettmuster dafür bekannt, photosensitive Anfälle zu verursachen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF bemerkt: _"Das Einzige, das wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Aber nur wenige Arten von Epilepsien sind photosensitiv, und die überwiegende Mehrheit der Epilepsien sind es nicht."_ Zusätzlich zu den durch Photosensitivität hervorgerufenen Anfällen kann das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen weitaus seltener zu sein scheint. Eine großartige Einführung über musikogene Anfälle finden Sie auf der Webseite von Epilepsy Ontario über [Musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) bemerkt die Epilepsy Foundation, dass "_ein Anfall ist ein Ereignis und Epilepsie ist die Krankheit, die wiederkehrende unprovozierte Anfälle umfasst_." Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Der plötzliche unerwartete Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Es kommt nicht häufig vor, aber es ist ein sehr reales Problem, und Menschen müssen sich seines Risikos bewusst sein."_

Der Punkt ist, Anfälle können definitiv tödlich sein und Entwickler und Designer sind unglaublich wichtig, um das Web zu einem sichereren Ort für diejenigen zu machen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst die, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht in der Lage ist, zu funktionieren. Der Artikel der Epilepsy Foundation, ["Lichtempfindlichkeit und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder der rollenden Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder wechselnde Muster verschiedener Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es über Wasser schimmert, durch Bäume flimmert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastreicher Farben.

Der gleiche Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass er die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Verständnis von WCAG 2.0 Drei Blitze oder darunter Schwelle"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein darauf hingewiesen: _"Personen mit photosensitiven Anfallsleiden können durch Inhalte mit Blitzeffekten bei bestimmten Frequenzen Anfälle erleiden, wenn diese mehr als ein paar Mal blitzen"_ und es wird sehr spezifisch darauf hingewiesen, dass: "_Menschen sind sogar empfindlicher gegenüber roten Blitzeffekten als gegenüber anderen Farben, weshalb ein spezieller Test für gesättigte rote Blitze bereitgestellt wird_".

Um Schäden zu verursachen, benötigen Sie nicht einmal ein Bild oder Video. Ein {{HTMLElement('div')}} Element, das mit hoher Frequenz Farbe und Leuchtkraft ändert, was einfach per JavaScript zu bewerkstelligen ist, kann echten Schaden anrichten. Und Flackern kann überall auftreten. Zum Beispiel können die üblicherweise verwendeten "Spinners" zum Anzeigen während des Ladens von Seiten leicht "flackern", während sie sich drehen.

Es gibt zusätzliche Bedenken für Personen mit motorischen Problemen. Zum Beispiel merkt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass _"photosensitive Anfälle durch bestimmte Arten von Blitzen in Web- oder Computerinhalten provoziert werden können, einschließlich Mausbewegungen, die dazu führen, dass große Bereiche des Bildschirms schnell aufblitzen und wiederholt ausgehen"_.

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen möglichen Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen zu beobachten ist). Anfälle sind jedoch nicht die einzige mögliche negative körperliche Reaktion auf Blitzen, Flackern, Blinken und andere derartige Stimuli. 1997 zeigte ein japanischer Cartoon eine animierte "Virenbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere erlitten Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alles mögliche Folgen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend ist.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "blitzen" und "blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Lichtempfindlichkeit bei Epilepsie, eine der komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"In der Regel sind Blitze in Frequenzen zwischen fünf und 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten, um Anfälle auszulösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Personen nicht Blitzen ausgesetzt werden sollten, die mehr als drei pro Sekunde betragen."_ Für einige Menschen können Blitzen/Blinken jedoch auch bei weniger als 3 Hz Symptome hervorrufen.

Es ist wichtig zu beachten, dass nicht alles Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinken, Blitzen und Zeitliche Reaktion"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge sein können, um Aufmerksamkeit zu erregen, wie es bei Warnknöpfen notwendig ist (vorausgesetzt, die Benutzer können den Bildschirm noch sehen, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch, dass diese sparsam und mit Bedacht verwendet werden müssen. Wie es auf das Webdesign zutrifft, müssen Systeme, die Unternehmensmitarbeiter auf Gefahren aufmerksam machen, indem sie den Bildschirm kapern, um ein blinkendes Notfallwarnsignal anzuzeigen, die Rate, Größe und Leuchtkraftänderungen auf dem Bildschirm berücksichtigen, wenn diese Warnungen blinken.

### Blitzen und Flackern—Wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photisch- und Muster-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"ist ein Blitz potenziell gefährlich, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradian (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung zur Berücksichtigung eines typischen Betrachtungsabstandes zum Zeitpunkt des Schreibens war "_das Gebiet kann als auf ein Gebiet >25% der Fläche eines Fernsehbildschirms angewendet werden, unter der Annahme standardmäßiger Betrachtungsabstände von ≥2 m (∼9 Fuß)"_. Seit dieser Zeit hat sich viel verändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Bestimmte Farben sind eher dazu geeignet, epileptische Anfälle auszulösen, finden Forscher heraus"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die den dynamischen Prozessen im Gehirn zugrunde liegen, durch bestimmte Farbkombinationen stärker als durch andere moduliert werden können, zum Beispiel verursacht ein rot-blauer flimmernder Stimulus stärkere kortikale Erregungen als ein rot-grüner oder blau-grüner Stimulus."_

### Blitzen & Rotes Blitzen

[WCAG 2.3.1 Allgemeine Blitz- und Rote Blitz-Schwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird definiert als ein Paar entgegengesetzter Änderungen in [relativer Leuchtkraft](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtkraft, wobei die relative Leuchtkraft des dunkleren Bildes unter 0,80 liegt und "ein Paar entgegengesetzter Änderungen" eine Zunahme gefolgt von einer Abnahme ist oder umgekehrt.
- Ein **roter Blitz** wird definiert als jedes Paar entgegengesetzter Übergänge, die einen gesättigten Rotton beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle zu entwickeln, und erklärte: _"Ein Blitz ist potenziell gefährlich, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradian (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Sowohl relative" Größe als auch Abstand sind wichtig. Laut [PEAT](https://trace.umd.edu/peat/), _"Die kombinierte Fläche der gleichzeitig auftretenden Blitze nimmt nicht mehr als ein Viertel eines jeden 341 x 256 Pixel Rechtecks irgendwo auf der dargestellten Bildschirmfläche ein, wenn die Inhalte mit 1024 mal 768 Pixeln betrachtet werden."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, wird in dem Artikel, der WCAG 2.3.1 behandelt, weiter ausgeführt: "_Der 1024 x 768 Bildschirm wird als die Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block repräsentiert ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand. (Das 10-Grad-Sichtfeld ist den ursprünglichen Spezifikationen entnommen und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am anfälligsten für Fotostimuli sind.)_"

Dieses Pixel-Flächenverhältnis berechnet die relative Größe, aber auch der Abstand ist wichtig.

Der Abstand ist wichtig, weil er das gesamte Sichtfeld beeinflusst. Wenn Betrachter Augenmasken für Spiele tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm eingenommen. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf dem Telefon, Computer oder mit einem Headset erlebt werden kann. Das Problem des flackernden Bildes in einer Augenmaske wird immer drängender, da die Maske so nah an den Augen ist.

Untersuchungen allgemein deuten darauf hin, dass die Nutzung von VR tatsächlich sicherer sein könnte als der normale Bildschirmkonsum, aufgrund höherer Bildwiederholraten. Wie aus [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) hervorgeht, _"Die bisher verfügbaren begrenzten Daten geben keine besonderen Bedenken hinsichtlich Anfällen in Bezug auf VR-Technologie auf, obwohl sich diese Einschätzung mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbänderungen, würden erwarten lassen, dass sie Anfälle auslösen, genauso wie in der realen Welt."_

(Beachten Sie, dass einige Benutzer nicht sehen können, wenn der Cursor blinkt, und möglicherweise Migräne, Bewegungskrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind als Übeltäter bekannt; Streifen und Quadrate sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkel-Paare von Streifen wahrscheinlich Anfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unveränderlich und gerade ist, ist die maximale zulässige Anzahl acht Linien, aber wenn es sich wellenförmig bewegt, dürfen es nicht mehr als fünf Linien sein.

Parallaxeeffekte können Desorientierung verursachen. Verwenden Sie Parallaxeeffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial zur Provokation von Anfällen enthält klar unterscheidbare Streifen, die mehr als fünf hell-dunkel-Paare von Streifen in irgendeiner Ausrichtung zählen. Wenn die hell-dunkel Streifen eines Musters zusammen am Auge vom minimal zu erwartenden Betrachtungsabstand einen soliden Winkel von >0.006 Steradianen aufweisen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkel Streifenpaare anzeigen, wenn sich die Streifenrichtung ändert, sie oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unveränderlich oder sanft in eine Richtung driftet, nicht mehr als acht Streifen."

Es ist noch nicht alles bekannt, und selbst mit den oben genannten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren Bereich zu einem größeren wechselt, sowie der Kontrast und die Raumfrequenz von niedrig zu mittel. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass das Gehirn beeinflusst wird, wenn man von grundlegenden Orientierungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel das Schachbrettmuster, das entsteht, wenn man einen Satz von Streifen auf, aber senkrecht zu, dem ursprünglichen Satz legt) wechselt.

### Farben

Das Verständnis von Farben ist wichtig für die Barrierefreiheit. Siehe [Verstehen von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Web-Barrierefreiheit und die Barrierefreiheit im Allgemeinen bezieht.

Wie sich die Farbe auf ihren Hintergrund bezieht—normalerweise in Bezug auf Kontrast formuliert—und wie drastisch sich die Farbe von Bild zu Bild in einer Animation ändert, ist wichtig. Für mehr dazu siehe [Verstehen der Schwelle von Drei Blitzen oder Weniger SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde gezeigt, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihr Einfluss auf das Verhalten wurde sogar bei Tieren beobachtet.

- **Rot-Desensibilisierungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte es zu einem Test gemacht haben. Der Red Desaturation Test bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die an einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gängiges Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich zu einer roten Umgebung, die die kognitive Funktion von Menschen mit traumatischen Hirnverletzungen beeinflusst, scheint die Farbe im roten Spektralwellenlängenbereich besondere Besorgnis und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden bemerkte bei der Testung des Photosensitive Epilepsy Analysis Tool, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht krampfsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" betrachtet wird. Das bedeutet _nicht_, dass sie "sicher vor Anfallsauslösung" ist, sondern nur, dass die Farbe möglicherweise "sicher" von der Technologie, die für die Farbdarstellung auf Bildschirmen verwendet wird, genau wiedergegeben wird.

## Messen zur Schadensvermeidung

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. In Tests berücksichtigte Faktoren sind Farbe, Leuchtdichte, Größe, Kontrast und im Fall von Animationen die Frequenz. WCAG 2.1 gibt Leitlinien für die Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Die folgende Information von Experten und Autoritäten stammt aus: [Photisch- und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist potenziell gefährlich, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, bei einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradian (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko gewertet. Ein Muster mit dem Potenzial zur Provokation von Anfällen enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Ausrichtung zählen. Wenn die hell-dunkel Streifen eines Musters zusammen am Auge einen soliden Winkel von >0.006 Steradianen vom minimal erwartbaren Betrachtungsabstand einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt, und das Muster ≥0,5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn sich das Muster nicht ändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind einfacher anzuwenden im Fall von fixen Medien, wie zum Beispiel bei einer aufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich das für den Webentwickler auf Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie beschäftigt sich mit der Messung des sichtbaren Lichts, wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel zu ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) stellt es in Bezug, was wir als Entwickler durch sRGB kennen: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, weil es einen spezifischen Standard gibt, der auf Monitoren, Druckern und im Internet angenommen wird, und es ist das **sRGB** (Standard Rot Grün Blau).

> Als Maß für das ausgestrahlte Licht pro Flächeneinheit wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop [Flachbildschirme](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [Hochauflösende Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Der wichtigste Punkt ist, dass der **sRGB** Farbraum eine gemeinsame Ausgangsbasis ist zwischen Forschung, Bewertungstools und Entwicklern, da er leicht vom häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Art von Webinhalten, die als Auslöser für Anfälle dienen können, soweit wie möglich zu quantifizieren und zu messen. Das gesagt, es darf nicht vergessen werden, dass Farbe genauso sehr über menschliche Wahrnehmung im Gehirn geht wie über die Messung des vom Computerbildschirm kommenden Lichts.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Varianzen und Nuancen darin geben, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, emeritierter Dozent der Informatik an der Cal State University Long Beach, das Folgende in Bezug auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) _"…Die Unterscheidung zwischen Helligkeitsstufen ist nicht tatsächlich linear, wie die HSL-Skala impliziert; wir sind viel empfindlicher gegenüber Veränderungen in helleren Werten als dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung sind es nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung des Lichts, das von einem Computerbildschirm durch die Entfernung zum menschlichen Auge tritt, gefiltert von der menschlichen Sicht, und dann im menschlichen Gehirn manipuliert wird, in Beziehung gesetzt werden kann, wird fortgesetzt.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation, ["Lichtempfindlichkeit bei Epilepsie, eine der komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnorme Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provozierende Lichtstimulationen."_

**Benutzertests sind sehr problematisch.** Natürlich möchte niemand eine anfallgefährdete Person einem Benutzertest unterziehen. Es ist gefährlich. In diesem Sinne ist eine der ethischsten Dinge, die Entwickler und Designer tun können, die Verwendung von Tools, die von Experten auf dem Gebiet entwickelt wurden, die Hand-in-Hand mit Ärzten zusammengearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben sich bemüht, es **_kostenlos_** herunterzuladen. PEAT kann Autoren dabei helfen, festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkungen bei der Nutzung: **_Die Verwendung von PEAT zur Bewertung von Materialien, die kommerziell für Fernsehausstrahlungen, Filme, Heimunterhaltung oder Spiele hergestellt werden, ist verboten. Verwenden Sie den Harding Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Nutzung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehmacher den Harding Test auf [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe auf [HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung sicherzustellen, dass wir keinen Schaden beabsichtigt oder unbeabsichtigt verursachen. Wenn wir etwas einfügen müssen, das Schaden verursachen könnte, ist es entscheidend, Benutzer daran zu hindern, den schädlichen Inhalt versehentlich zu begegnen, und Möglichkeiten zu bieten, wie Benutzer Animationen verhindern und steuern können, um potenzielle Gefahren zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG-Leitfaden 2.3 Anfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder körperliche Reaktionen verursachen."_ Fügen Sie keine Animation ein, die ein Benutzer nicht steuern kann. Entwerfen Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie ein GIF oder PNG mit darin enthaltenem Blitzen einfügen müssen, nehmen Sie es stattdessen im Videoformat auf, damit dem Benutzer Kontrollen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, es auszuschalten oder es weniger schädlich zu machen.

#### Verstehen von Boshaftigkeit

Fragen Sie sich als Entwickler oder Designer, ob stroboartige Inhalte wirklich auf Ihre Webseite gehören. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es diejenigen, die beleidigende Inhalte von Ihrer Seite herunterladen und als Waffe einsetzen könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um physischen Schaden durch Animationen zu verursachen, am Samstag, den 22. März 2008, begann: Die Website der Epilepsy Foundation wurde über Beiträge mit blinkenden Bildern und Links, die fälschlicherweise behaupteten, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die Hilfe auf der Seite suchten, waren betroffen.

Eine Serie rechtlicher Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, im Dezember 2016 einen Anfall erlitt, nachdem er ein animiertes GIF geschickt bekam: Das blinkende GIF trug die Nachricht, _"Du verdienst einen Anfall für deine Posts"_.

#### Exposition kontrollieren, Zugang kontrollieren

Die Kontrolle der Exposition zur Seite ist der Schlüssel, um sicherzustellen, dass jemand mit Anfälligkeit für Anfälle nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einziges Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben könnten, die Anfälle verursachen kann, kontrollieren Sie den Zugriff darauf, indem Sie zunächst eine Warnung über den Inhalt anzeigen, und ihn dann an einem Ort platzieren, an dem der Benutzer sich anmelden muss, um darauf zuzugreifen, wie zum Beispiel durch das Klicken eines Buttons oder das Sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung hat.

Erwägen Sie, Suchmaschinen-Richtlinien zu verwenden, um darauf hinzuweisen, dass sie möglicherweise schädliche Ressourcen nicht in ihren Suchindizes aufnehmen sollten. Dies kann durch Verwendung von Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` geschehen. Indem die Seite nicht indexiert wird (`noindex`) und Links auf der Seite nicht verfolgt werden (`nofollow`), wird die Wahrscheinlichkeit verringert, dass Nutzer über die Suche darauf stoßen:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Für nicht-HTML-Ressourcen können Sie die Crawling-Richtlinien in einem {{httpheader("X-Robots-Tag")}} HTTP-Antwortheader festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung wegen ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Beispiel für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass Animation inaktiv ist, bis der Benutzer beschließt, sie zu aktivieren. Beispielsweise muss der Benutzer einen Button drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs, muss der Benutzer einen Button drücken oder ein Kästchen anhaken, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie zum Beispiel das NICHT Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein gutes Beispiel dafür zu sehen, wie dies eigentlich funktioniert, siehe den Artikel von Kirupa, ["Das Umschalten von Animationen Ein und Aus"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa nutzt `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf null für die Anfangsphase der Animation festzulegen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer auch Animationen stoppen kann

Ein {{HTMLElement('video')}} Element ohne Attribute spielt nicht automatisch ab und hat auch keine Steuerung. Stellen Sie sicher, dass Sie das `controls` Attribut zu dem Video-Element hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls` Eigenschaft spiegelt das `controls` HTML-Attribut wider, das steuert, ob Benutzerschnittstellensteuerungen für das Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video und -Audio-Elementen hinzufügen.

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

Nehmen Sie dieses Beispiel und wenden es auf Audio an:

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

##### Audio als Teil von Video

Beachten Sie, dass das Audio in Videos durch das `muted` Inhaltsattribut kontrolliert werden kann, auch wenn der Inhalt innerhalb des {{HTMLElement('video')}} Elements statt des {{HTMLElement('audio')}} Elements ist. Dieses Beispiel stammt aus dem Abschnitt über [stummgeschaltetes Medienattribut](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video still im Hintergrund automatisch abgespielt wird, bis der Benutzer die Aktion ergreift, um das Audio stummzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Handhabung stark, und aus diesem Grund gibt es keine universelle Lösung für das Problem. Dies wird weiter dadurch verkompliziert, dass auch die Klassifizierung von Dateien die Art und Weise, wie sie gehandhabt werden sollen, verkompliziert. Zum Beispiel wird das .gif-Dateiformat in der Regel als Bild verstanden, wird jedoch auch in einigen Kreisen als Video-Dateiformat betrachtet, weil es animiert werden kann. Für eine ausführliche Liste von Medienarten besuchen Sie bitte [IANA.org-Seite für Medienarten](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, sie zu erkennen, sind keine leichte Aufgabe. Sie könnten daran interessiert sein, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard auf whatwg.org zu verfolgen. Nahezu jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Anleitung zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein wesentlicher Bestandteil der Canvas-Animation, es ist aber auch interessant zu sehen, wie es mit dem Bildschirm-Refresh interagiert. Siehe den Artikel, ["Steuern der FPS mit requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem darüber diskutiert wird, wie die Implementierung von `requestAnimationFrame` im Kontext des Bildschirm-Refreshs funktioniert.
- **GIFs (Raster)**: Schwierig zu steuern, da die Steuerung ihrer Animation innerhalb der GIF-Dateien selbst liegt. Für Informationen zur Steuerung der Geschwindigkeit von GIFs siehe W3Cs ["G152: Setzen von animierten gif Bildern so, dass sie Blinken nach n Zyklen stoppen (innerhalb von 5 Sekunden)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zum Thema ist, ["Kann man GIF-Animationen mit JavaScript kontrollieren?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, videoähnliche Version eines GIFs betrachtet. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm-Datei) verweisen, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), bemerkt, dass _"SVG ist ein textbasiertes offenes Webstandard. Es ist ausdrücklich dazu bestimmt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_. SVGs können als Bild wie in diesem Beispiel verwendet werden: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Dies bedeutet, dass SVG-Aussehen und -Animation durch CSS-Frames und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente über [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxels](https://en.wikipedia.org/wiki/Voxel) Rastergrafik wird in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann auch animiert werden

Translations und Transfomationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann Anfälle hervorrufen, aus den gleichen Gründen, aus denen auch bewegte Bilder Anfälle verursachen, vermeiden Sie daher die Animation Ihres Textes. Es ist ohnehin eine gute Idee, die Verwendung von bewegtem Text zu vermeiden, da viele Screenreader bewegten Text nicht lesen können und es sogar für Personen ohne Seh- oder Gleichgewichtsprobleme eine schlechte Benutzererfahrung ist.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}} Elements können viele Optionen zusammen kombiniert werden, um eine mächtige Erfahrung für den Benutzer zu schaffen. Wir haben die `animation` Eigenschaft bereits früher in diesem Dokument erwähnt. Es ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation braucht, um einen Zyklus zu vollenden. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation auftreten sollte.
- `animation-timing-function`

Die Animationseigenschaft ist bereits allein mächtig, aber kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann eine mächtige Menge von Optionen für den Benutzer eingerichtet werden. Die Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstatt `animation: none` und `transition: none` zu setzen, ermöglicht eine Sicherungsmaßnahme, um Probleme zu verhindern, falls es eine Abhängigkeit davon gibt, dass die Animation ausgeführt wird.

### JavaScript-Animation

JavaScript wird oft zur Kontrolle von {{HTMLElement('canvas')}} Elementen und SVGs verwendet. Der meiste JavaScript-Code, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Nutzerschnittstellen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1,0 ist der Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0,5 ist die halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Webanimations](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Code-Beispiel dafür, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten ist, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange es sich um erlaubte Dateiarten—und Größen—in Ihrer Umgebung handelt. SVGs sind oft nicht erlaubt, wegen Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet hervorragende Beispiele dafür, mit der Verwendung mehrerer Bildquellen für die Sonne, die Erde und den Mond und mehreren Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde, während sie um die Sonne, und des Mondes, während er um die Erde kreist. Benutzen Sie das in diesem Tutorial verfügbare CodePen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Falls Sie unbedingt eine blitzende Animation verwenden müssen…

Stellen Sie sicher, dass sie eine Kontrolle darauf hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie erstmals sieht und dass ein Benutzer sich anmelden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das keine Kontrollen bietet, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Durch die Konvertierung eines animierten gifs in ein Video können Kontrollen auf der Animation angebracht werden und dem Benutzer Handlungsspielraum gegeben werden. Es gibt viele kostenlose Online-Konverter, die genutzt werden können, wie [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Erwartung des Benutzers setzen

Geben Sie den Benutzern eine Vorwarnung darüber, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die darauf folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt blitzen müssen, halten Sie es klein. Im Allgemeinen sollten Sie die Größe des Blitzes auf ein Gebiet von etwa 341 mal 256 Pixel begrenzen oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter sich in typischer Entfernung zum Bildschirm befindet. Wie bereits erwähnt, mag diese Größe zu groß sein, wenn das Bild aus der Nähe betrachtet werden sollte, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR, das eine Augenmaske verwendet, entwerfen, **oder KANN mit einer Augenmaske verwendet werden**, wie es in Firefox Reality möglich ist (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, weil das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Leuchtdichten-Kontrastverhältnis_ bezeichnet, laut W3.org Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist es, solche Inhalte zu lesen. Benutzer mit Sehschwächen sind besonders dankbar für die Bemühungen, den hohen Kontrast von Text gegen seinen Hintergrund sicherzustellen. Wenn die Inhalte jedoch animiert sind, ist es tatsächlich ein Weg zur Reduzierung der Wahrscheinlichkeit von Anfällen, den Kontrast **_zu senken_**. Senken Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs sind die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein Online-Tool verfügbar, nämlich pinetools.com's [Helligkeits- und Kontrast-Online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie beispielsweise mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option zur dynamischen Reduzierung des Kontrasts. Hier ist ein Code-Beispiel aus dem Abschnitt mit dem Titel, ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Traversieren einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB** Farbraum beschrieben wird.

**HTML-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

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

#### Vermeiden Sie voll gesättigte Rottöne für blitzende Inhalte

Wie bereits früher in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2 besitzt, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen visuellen Winkel von mindestens 0.006 Steradian (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko gewertet."_

### Alternativen CSS-Stile bereitstellen

Mit dem Verständnis, dass viel von der Animation und dem Blitzen durch CSS-Methoden kontrolliert werden kann, ist es wichtig, Möglichkeiten zu erkunden, um alternative Optionen für Benutzer bereitzustellen und die Kontrolle dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS an, die in alternativen Stylesheets verfügbar sind, wenn die Benutzer wissen, wo sie nachsehen sollen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer das Menü Ansicht durchgehen, in anderen Fällen zeigen sie sich in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie über den Browser oder die Einstellungen nach diesen Optionen suchen sollten, daher lohnt es sich, darüber nachzudenken, es auf die altmodische Weise mit offensichtlichen Buttons oder Links zu tun, um den Stil zu ändern, sodass Benutzer diese sehen können. Auf diese Weise wird nicht mit der Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, interferiert, oder mit der Fähigkeit des Benutzers, Präferenzen in den Einstellungen zu setzen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die sich auf Spracherkennungssysteme verlassen, oft auf altmodische Buttons und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu benutzen, oder von den Berührungsereignissen auf mobilen Tablets profitieren zu können.

Gängige Wege, um die alternativen Stylesheets in Ihre HTML-Dokumente einzubinden, sind die Verwendung des {{HTMLElement('link')}} Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element, zusammen mit und gemeinsam mit den Attributen von `rel="alternate stylesheet"` und für Title, `title="…"` im {{HTMLElement('head')}} Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch ein Weg, um Stylesheets einzubinden, ist aber nicht ganz so gut unterstützt wie das {{HTMLElement('link')}} Element.

```css
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Verwendung alternativer Stylesheets (nicht vergessen, die Titel hinzuzufügen) stellen Sie sicher, dass Benutzer in der Lage sind, ihre Browser zu verwenden, um alternative Styles auszuwählen.

### Dynamisches Umschalten von Styles

Ein Problem mit der Abhängigkeit vom Browser, alternative Styles zu zeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Styles zu entdecken. Oder, aufgrund ihrer Behinderung, nicht in der Lage sind, das zu tun. Buttons oder Links machen es offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Umschalt-Buttons hinzuzufügen, um es dem Benutzer zu ermöglichen, zu den verschiedenen Stylesheets zu wechseln. Das gesagt, die Nutzung von alternativen Stylesheets sind nicht die einzige Option. Eine andere Option ist, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo möglich, ist es wirklich eine bewährte Vorgehensweise, Klassen über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft dynamisch zu manipulieren, da die endgültige Erscheinung aller Stilhaken in einem einzigen Stylesheet kontrolliert werden kann."_. Eines der besten Beispiele dafür, wie das zu tun ist, ist von der W3C-Seite, ["C29: Verwendung eines Style-Schalters, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Text-Only-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drastische Lösung; es ist aber eine, die manchmal für Lehrer oder andere öffentliche Bedienstete erforderlich ist, die diejenigen mit extremer Empfindlichkeit bedienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu entwickeln, das `display: none` verwendet. So geht das via CSS:

```css
img {
  display: none;
}
```

#### Nutzen Sie Media Queries mit {{HTMLElement('style')}}

Durch das Einrichten von Media Queries ermöglichen Sie dem Benutzer Kontrollen; diese Kontrollen werden im Browser oder im OS zur Verfügung gestellt. Sehen Sie sich das MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer zu stöbern](/de/docs/Web/Accessibility/Guides/Browsing_safely), an, um mehr Details darüber zu erfahren, wie ein Benutzer auf die Kontrollen zugreifen kann.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet werden kann, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie das untenstehende Beispiel aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Unterstützung entsteht.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Werkzeug, das Entwicklern über das Fenster.matchMedia() zur Verfügung steht. Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medien-Update-Funktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge, und desto weniger flackert er. Die überwiegende Mehrheit der modernen Technologie aktualisiert in einer Rate, die keine Probleme mit Photosensitivität verursacht. Allerdings kann sich nicht jeder die neueste Technologie leisten: Ältere oder unterdimensionierte Computer können niedrige Bildwiederholraten haben. [AbilityNets Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreiben mehr Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsie und CRT/LCD Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort auf Bildwiederholraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz spürbar und dokumentiert."_
- _"Diese Studien scheinen darauf hinzudeuten, dass Sie Bildwiederholraten unter 70 Hz vermeiden, und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung der Aktualisierungsfunktion, die in Kombination mit /animation-duration oder transition-duration verwendet wird, um in einer Rate zu enden, die dem menschlichen Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken befassen sich mit dem Problem der Bildwiederholrate. Das unten stehende CSS stammt aus dem CSS-Tricks Artikel, ["Neuer Besuch von prefers-reduced-motion, der abgedimmten Bewegungsabfrage"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Die [`update`](/de/docs/Web/CSS/@media/update) Medianfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts, das Erscheinungsbild des Inhalts zu ändern, sobald es gerendert wurde, abzufragen. Sie hat die Werte "none", "slow" und "fast".

## Entwicklungs- und experimentelle Funktionen

### Medienabfragen Stufe 5

EnvironmentMQ (Geplant in Medienabfragen Stufe 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen tatsächlich in Form eines Lux-Wertes zu definieren, da Geräte mit Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen merken auch die Technologiedifferenzen an, wie elektronische Tinte, die bleibt in hellem Tageslicht lesbar, im Gegensatz zu Flüssigkristallen, die nicht lesbar sind.
- `environment-blending`
  - : Aus der W3C-Entwurfsdokumentation, Medienabfragen Stufe 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medianfunktion wird verwendet, um die Eigenschaften des Displays des Benutzers abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte wählen, die visuellen Einstellungen und/oder das Layout der Seite angepasst an die Displaytechnologie zu gestalten, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzervorlieben Medienfunktion (Geplant in Medienabfragen Stufe 5)

[Benutzervorlieben Medienfunktion](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Medienabfragen Stufe 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Benutzern Kontrolle über Medien zu geben. Hier sind einige Höhepunkte:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzervorlieben Medienfunktion](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medianfunktion weist darauf hin, ob der Inhalt normal angezeigt wird oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf der Seite, indem er die vom Autor gewählten Farben überlagert. Aus der W3C-Entwurfsdokumentation, Medienabfragen Stufe 5 Abschnitt über forcierte Farben: _"Die forcierten Farben Medianfunktion wird verwendet, um festzustellen, ob der Benutzeragent einen [forcierten Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem eine vom Benutzer gewählte eingeschränkte Farbpalette auf der Seite erzwungen wird."_. Der Benutzer muss sich dieser Fähigkeit bewusst sein und es muss mit dem entsprechenden Wert für die Medienabfrage prefers-color-scheme gut zusammenarbeiten.
- `light-level`
  - : Aus der W3C-Entwurfsdokumentation, Medienabfragen Stufe 5 zu Licht-Level: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medianfunktion wird verwendet, um den Umgebungslicht-Level abzufragen, in dem das Gerät verwendet wird, um dem Autor die Möglichkeit zu geben, den Stil des Dokuments als Antwort anzupassen."_. Dies wird ein Segen für diejenigen mit motorischen Problemen oder für einige mit kognitiven Schwierigkeiten sein, die nicht den richtigen "Knopf" finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus der W3C-Entwurfsdokumentation, Medienabfragen Stufe 5 zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die `prefers-contrast` Medianfunktion wird verwendet, um zu erkennen, wenn der Benutzer das System gebeten hat, den Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text, der nur einen geringen Kontrast umgibt, zu lesen, und würden einen größeren Kontrast bevorzugen."_ Manchmal kann auch zu viel Kontrast sein; ein Halo-Effekt um Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit reduzieren. Das Ausmaß des Kontrastes in die Kontrolle des Benutzers zu bringen, ist ein definitives Geschenk für die Barrierefreiheit.

#### MediaQueryList-Schnittstelle

Abschnitt 4.2 von den CSSWG.org-Entwürfen integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Weitere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung Unterstützung und Hilfe

Die Anforderung für die `literal` Eigenschaft ist entnommen aus [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation).

**Anforderung:** Einige Benutzer können nicht wörtlichen Text und Symbole wie Metaphern, Idiome usw. nicht verstehen. Die `literal` Eigenschaft soll Text oder Bilder als nicht wörtlich identifizieren und ermöglicht dem Autor, nicht wörtlichen Text und Bilder Benutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verstehen von Farben und Luminanz](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farben

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsthread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0-Blitzdefinition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf die Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Menschen werden mit einer besonderen Empfindlichkeit gegenüber flackernden Lichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettmustern geboren. Aufgrund dieser Bedingung produziert ihr Gehirn anfallsartige Entladungen, wenn es diesem visuellen Reiz ausgesetzt ist."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht- und Muster-induzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Werkzeug wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und Management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Analysewerkzeug für photosensitive Epilepsie

Zusammen mit dem Harding-Werkzeug wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Module](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, aber enthält einige Erklärungen zu Referenzen in den WCAG 2.1 Kriterien)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition von relativer Luminanz

## Mitwirkende

Herzlichen Dank an Teal; Wayne Dick von der [Low Vision Task Force der W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory bei USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ äußerst dankbar gegenüber dem Trace Research & Development Center dafür, dass sie ihr großartiges Werkzeug, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung stellen.
