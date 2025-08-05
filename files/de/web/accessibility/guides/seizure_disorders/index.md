---
title: Web-Accessibility für Anfälle und körperliche Reaktionen
short-title: Verhinderung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Dieser Artikel führt in Konzepte ein, die hinter der Zugänglichkeit von Webinhalten für Menschen mit vestibulären Störungen stehen, und wie man Inhalte misst und verhindert, die Anfälle und/oder andere körperliche Reaktionen auslösen können.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flimmern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS oder JavaScript-Animationen verwenden, können alle Inhalte erzeugen, die Anfälle oder andere lähmende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art "Reflex-Epilepsie"—Anfälle, die in Reaktion auf einen Auslöser auftreten. Im Fall von photosensitiver Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflex-Epilepsien können durch den Leseakt oder Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt: "_Bestimmte visuelle Bilder, selbst in Abwesenheit von Bewegung oder Flimmern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster aus erkennbaren Licht- und Dunkelstreifen haben den gleichen Effekt wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen."_ Laut dem [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) sind neben Streifen auch karierte Muster bekannt dafür, photosensitive Anfälle auszulösen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/Stroboskoplichteffekte. Dr. Selim Benbadis von USFs Comprehensive Epilepsy Program merkt an: _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind jedoch photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben durch Photosensitivität verursachten Anfällen kann auch das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Arten von Anfällen weitaus seltener zu sein scheinen. Für eine umfassende Einführung zum Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Erkrankung, die mit wiederkehrenden unprovozierten Anfällen einhergeht_." Laut der Webseite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Sudden unexpected death in epilepsy (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber ein sehr reales Problem, und Menschen müssen sich seines Risikos bewusst sein"_.

Die Tatsache ist, dass Anfälle definitiv sein können und tatsächlich tödlich sind, und Entwickler sowie Designer sind unglaublich wichtig, um das Web für Menschen mit Empfindlichkeit gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionieren kann. Im Artikel der Epilepsy Foundation ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) finden Sie eine Liste von Auslösern, die bei photosensitiven Personen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume flimmert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

In dem gleichen Artikel wird darauf hingewiesen, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor eingeschlossen ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel, ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt: _"Personen mit photosensitiven Anfallsstörungen können einen Anfall haben, der durch Inhalte ausgelöst wird, die mit bestimmten Frequenzen für mehr als ein paar Blitze blitzen"_ und sehr spezifisch weiterbenannt: "_Menschen sind noch empfindlicher gegenüber roten Blitzen als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das auf hohe Frequenz programmiert ist, um Farbe und Helligkeit zu ändern, was leicht mit JavaScript umgesetzt werden kann, kann echten Schaden anrichten. Und, Flimmern kann überall auftreten. Zum Beispiel können "Spinner", die häufig verwendet werden, um darauf hinzuweisen, dass eine Seite geladen wird, leicht während des Drehens "flimmern".

Zusätzliche Bedenken bestehen für Personen mit Motorikproblemen. Beispielsweise stellt die Seite für das Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"photosensitive Anfälle durch bestimmte Arten von Flimmern in Web- oder Computerinhalten ausgelöst werden können, einschließlich Mouse-Over-Effekte, die große Bereiche des Bildschirms dazu veranlassen, wiederholt schnell an- und auszublinken."_

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen möglichen Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen auftritt). Anfälle sind jedoch nicht die einzigen möglichen negativen physikalischen Reaktionen, die durch Flimmern, Blitzen, Blinken und andere derartige Reize auftreten können. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, erlitten Anfälle, andere litten an Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus eingeliefert werden mussten. Die unten aufgeführten körperlichen Erkrankungen sind alle mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flimmern

Obwohl "Blitzen" und "Blinken" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut dem W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz von über 3 Hz (Flimmern pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"Allgemein Blitze zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Personen keiner Frequenz von Blitzern von mehr als drei pro Sekunde ausgesetzt werden sollten."_ Für einige Menschen kann jedoch sogar bei weniger als 3 Hz Blitze/Blinken Symptome hervorrufen.

Es ist wichtig zu beachten, dass nicht alle Blitze und das Blinken schlecht sind. Die NASA bemerkt in ihrem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php), dass Blinken und Blitzen starke Mittel sein können, um Aufmerksamkeit zu erregen—was für Warnknöpfe notwendig ist (vorausgesetzt, Benutzer können den Bildschirm noch sehen, während Elemente blinken, was nicht immer der Fall ist). Bei Benutzern, für die blinkende Buttons gewarnt sind, dass sie sparsam und vorsichtig eingesetzt werden müssen. Für Webdesign gelten, dass Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "kapern", um bei Notfällen eine blinkende Warnung auszugeben, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen müssen, während diese Warnungen geblitzt werden.

### Blitzen und Flimmern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitz ist eine potenzielle Gefahr, wenn er eine Helligkeit von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen festen Blickwinkel von ≥0,006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die als typischer Betrachtungsabstand zum Zeitpunkt des Schreibens betrachtet wurde, war "_Der Bereich kann als auf einen Bereich von mehr als 25% der Fläche eines Fernsehbildschirms zutreffend betrachtet werden, unter der Annahme von Standard-Betrachtungsabständen von ≥2 m (~9 Fuß)"_. Vieles hat sich seitdem verändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die der Dynamik des Gehirns zugrunde liegen, durch bestimmte Farbkombinationen stärker als durch andere moduliert werden können, beispielsweise ruft ein rot-blauer Flackerreiz eine größere kortikale Erregung hervor als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen & Rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und Rotblitzschwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in der [relativen Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit, wenn die relative Helligkeit des dunkleren Bildes unter 0,80 liegt, und wo "ein Paar gegensätzlicher Änderungen" eine Erhöhung gefolgt von einer Verringerung oder eine Verringerung gefolgt von einer Erhöhung ist;
- Ein **roter Blitz** ist definiert als jedes Paar gegensätzlicher Übergänge, bei denen ein gesättigtes Rot beteiligt ist.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle zu entwickeln, wobei festgestellt wurde: _"Ein Blitz ist eine potenzielle Gefahr, wenn er eine Helligkeit von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Blickwinkel von mindestens 0,006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko dar: "_Unabhängig von der Helligkeit wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Entfernung

#### Wie groß? Es hängt davon ab

"Sowohl die relative" Größe als auch die Entfernung spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) _"Die kombinierte Fläche der gleichzeitig auftretenden Blitze nimmt insgesamt nicht mehr als ein Viertel eines beliebigen 341 x 256 Pixel Rechtecks irgendwo auf dem angezeigten Bildschirmbereich ein, wenn der Inhalt bei 1024 mal 768 Pixel betrachtet wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, kommt in dem Artikel zur Sprache, der WCAG 2.3.1 behandelt: "_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block stellt einen 10-Grad-Betrachtungsabstand bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Sichtfeld stammt aus den ursprünglichen Spezifikationen und repräsentiert den Teil der zentralen Sicht des Auges, in dem Menschen am anfälligsten für Fotoreize sind.)_"

Dieses Pixel-Flächen-Verhältnis berechnet die relative Größe, aber auch die Entfernung spielt eine Rolle.

Die Entfernung ist wichtig, weil sie das gesamte Sichtfeld beeinflusst. Wenn Zuschauer visiere Masken zum Spielen tragen, ist das Sichtfeld wahrscheinlich vollständig von dem Bildschirm umschlossen. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf Telefon, Computer oder Headset erlebt werden kann. Das Bedenken über blinkende Bilder in einer visieren Maske wächst, da die Maske so nah an den Augen ist.

Die Forschung zeigt generell, dass die Nutzung von VR eigentlich sicherer sein kann als der normale Bildschirmkonsum aufgrund höherer Bildraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen, _"Die bisher verfügbaren begrenzten Daten lassen keine speziellen Anfallssorgen im Hinblick auf VR-Technologie vermuten, obwohl sich diese Sichtweise mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokanter Muster oder Farbänderungen, würden voraussichtlich Anfälle hervorrufen, genau wie sie es in der realen Welt tun."_

(Beachten Sie, dass einige Benutzer nicht mit blinkenden Cursorn sehen können und möglicherweise Migräne, Bewegungskrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bildschirmbereich einnehmen.)

### Muster und Parallax

Kontrastreichen dunklen und hellen geometrischen Mustern sind bekanntermaßen schuld; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Licht-Dunkel-Paare von Streifen wahrscheinlich Anfälle hervorrufen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist die maximale Anzahl an Linien acht, aber wenn es sich bewegt, sind nicht mehr als fünf Linien erlaubt.

Parallax-Effekte können Desorientierung hervorrufen. Verwenden Sie Parallax-Effekte vorsichtig; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie zu deaktivieren.

"Ein Muster mit dem Potenzial, Anfälle hervorzurufen, enthält eindeutig erkennbare Streifen, die mehr als fünf Licht-Dunkel-Paare von Streifen in jeder Orientierung umfassen. Wenn die hell-dunklen Streifen eines Musters sich vom Auge aus dem minimal erwarteten Betrachtungsabstand einem festen Blickwinkel von >0,006 Steradiant unterstellen, die Helligkeit des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen zeigen, wenn die Streifen Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder reibungslos in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst bei den oben genannten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren Bereich zu einem größeren wechselt, den Kontrast erhöht und die räumliche Frequenz von niedrig zu mittel ansteigt. Es ist auch bekannt, obwohl der Grund dafür nicht verstanden wird, dass der Übergang von grundlegenden Orientierungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel das karierte Muster, das entsteht, wenn man ein Streifenmuster auf ein anderes legt, aber senkrecht dazu) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Zugänglichkeit. Siehe [Understanding Colors and Luminance](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Web-Zugänglichkeit und Zugänglichkeit im Allgemeinen bezieht.

Wie sich die Farbe auf ihren Hintergrund bezieht—gewöhnlich in Bezug auf den Kontrast formuliert—and wie drastisch sich die Farbe von Bild zu Bild in der Animation ändert, ist wichtig. Für mehr dazu siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle hervorrufen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Seine Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren bemerkt.

- **Rot-Desaturierungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit einrichten. Der Rot-Desaturierungstest bewertet die Integrität des Sehnervs. Für weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, siehe [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit Schädel-Hirn-Trauma die [kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Saturated Red](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall und es gibt spezielle Tests dafür. Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Personen mit Schädel-Hirn-Trauma beeinflusst, scheint Farbe im Wellenlängenspektrum des Rot besondere Sorge und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei Tests des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten viel höher als erwartet waren. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes Rotblitzen reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" gilt. Das bedeutet _nicht_, dass sie "sicher ist, um keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe "sicher" genau von der Technologie reproduziert werden kann, die verwendet wird, um Farbe auf Bildschirmen zu erzeugen.

## Messen zur Verhinderung von Schaden

Das Potenzial für Schaden zu messen, ist ein guter Ausgangspunkt. Faktoren, die bei Tests berücksichtigt werden, sind Farbe, Helligkeit, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Anleitung zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Die folgenden, grundlegenden und autoritativen Informationen stammen aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Helligkeit von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen festen Blickwinkel von ≥0,006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle hervorzurufen, enthält eindeutig erkennbare Streifen, die mehr als fünf Licht-Dunkel-Paare von Streifen in jeder Orientierung umfassen. Wenn die hell-dunklen Streifen eines Musters sich vom Auge aus dem minimal erwarteten Betrachtungsabstand einem festen Blickwinkel von >0,006 Steradiant unterstellen, die Helligkeit des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen zeigen, wenn die Streifen Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder reibungslos in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter auf feststehende Medien anzuwenden, beispielsweise eine aufgenommene Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also, wie bezieht sich das für Webentwickler auf Messungen für Farbe, Helligkeit und Sättigung?

Das Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff und Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedias Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) stellt es in Bezug auf das, was wir als Entwickler kennen: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, weil ein bestimmter Standard angenommen wird, der für Monitore, Drucker und das Internet verwendet wird, und es ist das **sRGB** (standard Red Green Blue).

> Als Maßstab für das von einer Einheit Fläche ausgestrahlte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. In der Regel sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Desktop-LCD-Bildschirme für Verbraucher haben eine Helligkeit von 200 bis 300 cd/m<sup>2</sup>. [High-definition televisions](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Der Vorteil ist, dass der **sRGB**-Farbraum ein gemeinsamer Ansatzpunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code umgewandelt werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, zu quantifizieren und zu messen, in welchem Umfang Webinhalte als Auslöser für Anfälle dienen können. Das gesagt, kann nicht vergessen werden, dass Farbe ebenso sehr mit menschlicher Wahrnehmung im Gehirn zu tun hat, wie mit der Messung des Lichts, das von einem Computermonitor kommt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Abweichungen und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Lecturer Emeritus of Computer Sciences an der Cal State University Long Beach, folgendes hinsichtlich der [Helligkeit im HSL-Farbraum](https://colortutorial.design/hsb.html): _"…Der Unterschied zwischen den Helligkeitsstufen ist tatsächlich nicht linear, wie es die HSL-Skala andeuten würde; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung sind es nicht. Untersuchungen und Diskussionen darüber, wie die maschinelle Messung von Licht, das von einem Computermonitor zu einem menschlichen Auge und dann durch das menschliche Gehirn gefiltert wird, in Beziehung gesetzt werden kann, sind im Gange.

Auch Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), sind _"Kinder und Jugendliche empfindlicher als Erwachsene auf eine abnormale Reaktion auf Lichtstimulation, und der erste durch Licht verursachte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulation"_.

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine Person, die zu Anfällen neigt, einem Benutzertest unterziehen. Es ist gefährlich. Dazu kommt, dass eine der ethischsten Dinge, die Entwickler und Designer tun können, darin besteht, Werkzeuge zu verwenden, die von Experten auf diesem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten entwickelt wurden. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben sich bemüht, es **_kostenlos_** zum Download bereitzustellen. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle auslösen. Bitte beachten Sie die Einschränkung für die Verwendung: **_Die Verwendung von PEAT zur Bewertung von kommerziell produzierten Fernsehübertragungen, Filmen, Heimunterhaltung oder Gaming-Branchen ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge zu kommerziellen Zwecken._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![Photosensitive Epilepsy Analysis Tool der University of Maryland College of Information Studies.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden können, daher bietet die Gruppe von [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten an.

![Harding Blitz- und Muster-Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen zur Barrierefreiheit für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung sicherzustellen, dass wir weder absichtlich noch unabsichtlich Schaden zufügen. Wenn wir etwas einbeziehen müssen, das das Potenzial hat, Schaden zu verursachen, ist es wichtig zu verhindern, dass Benutzer versehentlich auf den schädlichen Inhalt stoßen, und Möglichkeiten bereitzustellen, dass Benutzer Animationen verhindern und steuern, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Kein Schaden zufügen

[WCAG-Leitfaden 2.3 Anfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht so, dass sie bekannte Anfälle oder körperliche Reaktionen verursachen."_ Fügen Sie keine Animation ein, die ein Benutzer nicht steuern kann. Verwenden Sie keine Muster, die bekannt dafür sind, Probleme zu verursachen. Wenn Sie ein GIF oder PNG mit Blitzen enthalten müssen, zeichnen Sie es stattdessen im Videoformat auf, damit der Benutzer Zugriff auf Steuerungen hat. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, zu deaktivieren oder weniger schädlich zu machen.

#### Böswilligkeit verstehen

Als Entwickler oder Designer fragen Sie sich, ob blinkende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es Personen, die anstößige Inhalte von Ihrer Seite herunterladen und sie als Waffe einsetzen könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um durch Animationen physischen Schaden zu verursachen, am Samstag, dem 22. März 2008 stattfand: Die Webseite der Epilepsy Foundation wurde durch Posts mit blinkenden Bildern und Links, die fälschlicherweise als hilfreich angegeben wurden, gehackt. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Erwägungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, im Dezember 2016 einen Anfall erlitt, nachdem ihm ein animiertes GIF geschickt wurde: das blinkende GIF trug die Botschaft, _"Sie verdienen einen Anfall für Ihre Posts"_.

#### Exposition kontrollieren, Zugang kontrollieren

Die Kontrolle der Exposition gegenüber der Seite ist entscheidend, um sicherzustellen, dass jemand, der zu Anfällen neigt, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben könnten, die Anfälle verursachen kann, kontrollieren Sie den Zugang, indem Sie zuerst eine Warnung über den Inhalt anzeigen und dann an einem Ort platzieren, an dem der Benutzer sich für den Zugriff entscheiden muss, z. B. durch Klicken auf eine Schaltfläche oder indem Sie sicherstellen, dass der Link zur Seite eine eindeutige und offensichtliche Warnung hat.

Erwägen Sie, Suchmaschinen-Robots anzuweisen, eventuell schädliche Ressourcen nicht in ihre Suchindizes aufzunehmen. Sie können dies mithilfe von Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Element mit restriktiven Regeln wie `noindex, nofollow` tun. Indem Sie die Seite nicht indexieren (`noindex`) und keinen Links auf der Seite folgen (`nofollow`), wird die Wahrscheinlichkeit verringert, dass Benutzer über die Suche darauf stoßen:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Für Nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}}-HTTP-Antwortheader einstellen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector)-npm-Paket ermöglicht die Bestimmung animierter Inhalte _so früh wie möglich_ in einer gegebenen HTTP-Anfrage.
- Zakirt bietet eine Vorlage für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z.B. durch das NICHT Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein mächtiges Beispiel zu sehen, wie das tatsächlich funktioniert, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet das `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die Anfangsstufe der Animation auf Null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer auch die Animationen stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuerte Sicherstellung von Steuerungen

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das steuert, ob Benutzeroberflächenelemente zur Wiedergabe des Mediainhalts angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Steuerungen verfügt, auf die ein Benutzer zugreifen kann, fügen Sie das Wort "controls" zu HTML-Video- und Audiodateien hinzu.

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

Nehmen Sie das gleiche Beispiel und wenden Sie es auf Audio an:

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

Beachten Sie, dass die Audiodaten in Videos durch das `muted`-Inhaltsattribut gesteuert werden können, auch wenn der Inhalt sich im {{HTMLElement('video')}}-Element und nicht im {{HTMLElement('audio')}}-Element befindet. Dieses Beispiel stammt aus dem Abschnitt zur Beschreibung des [stummgeschalteten Medienelements](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) im HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer eine Maßnahme ergreift, um den Ton einzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Das scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen, um mit ihnen umzugehen stark, und aus diesem Grund gibt es keine Universallösung für das Problem. Dies wird weiter erschwert durch die Tatsache, dass selbst wie Dateien klassifiziert werden, kompliziert ist, wie sie gehandhabt werden sollen. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, aber in einigen Kreisen auch als Videoformat angesehen, weil es animiert werden kann. Für eine umfassende Auflistung von Medientypen besuchen Sie [IANA.org's Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie ausfindig zu machen, sind nicht nebensächlich. Sie könnten daran interessiert sein, dem [MIME-Sniffing](https://mimesniff.spec.whatwg.org/)-Standard bei whatwg.org zu folgen. Nahezu jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt zu [grundlegenden Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist eine tragende Säule in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit Bildschirmaktualisierungen interagiert. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem die Details zur Implementierung von `requestAnimationFrame` gegen die Kulisse des Bildschirmneustarts diskutiert werden.
- **GIFs (Raster)**: Schwer zu knacken, da die Kontrolle für ihre Animation in den gif-Dateien selbst liegt. Für Informationen zur Steuerung der Geschwindigkeit von GIFs siehe W3C's ["G152: Setting animated gif images to stop blinking after n cycles (innerhalb von 5 Sekunden)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Artikel auf Stack Overflow zu diesem Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Betrachtet als Variante, Videoversion von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei verweisen (z. B. eine .webm-Datei), die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ist ein textbasiertes offenes Webstandard. Es ist ausdrücklich so konzipiert, dass es mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) funktioniert."_ SVGs können als Bild wie in diesem Beispiel verwendet werden: `<img src="example.svg" alt="Dies ist ein Bild unter Verwendung eines SVG als Quelle">`. Das bedeutet, dass das Aussehen und die Animation von SVGs durch CSS-Schlüsselbilder und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann aus den gleichen Gründen Anfälle hervorrufen, die auch bewegte Bilder tun, also vermeiden Sie es, Ihren Text zu animieren. Es ist ohnehin eine gute Idee, sich von bewegtem Text fernzuhalten, da viele Bildschirmlesegeräte keinen sich bewegenden Text lesen können und es ein schlechtes Benutzererlebnis ist, selbst für diejenigen ohne Seh- oder Gleichgewichtsstörungen.

### CSS für Animation

Im Stylesheet oder im {{HTMLElement('style')}}-Element können viele Optionen kombiniert werden, um eine starke Erfahrung für den Benutzer zu schaffen. Wir haben die Eigenschaft `animation` bereits früher in diesem Dokument erwähnt. Tatsächlich ist es eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat den Wert `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu durchlaufen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation stattfinden wird.
- `animation-timing-function`

Die Animationseigenschaft ist an sich schon mächtig, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein mächtiges Set von Optionen für den Benutzer eingerichtet werden. Das Festlegen der `animation-duration` und `transition-duration`-Eigenschaften auf eine kurze Dauer anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht eine Sicherung, um Probleme in jedem Fall, in dem eine Abhängigkeit zur Animation besteht, zu verhindern.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der größte Teil der JavaScript-Codes, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Steuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist der Standard und gilt als normale Geschwindigkeit; ein Wert von 0.5 ist halb so schnell, ein Wert von 2.0 ist zweimal so schnell. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten ist es, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen—und Größen— in Ihrer Umgebung sind. SVGs werden oft nicht erlaubt aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), liefert herausragende Beispiele dafür, indem es mehrere Bildquellen für Sonne, Erde und Mond verwendet und mehrere Canvas-Methoden einsetzt, um die Geschwindigkeit und Animation der Erde zu steuern, während sie um die Sonne kreist, und des Mondes, während er um die Erde kreist. Verwenden Sie den verfügbaren Codepen mit diesem Tutorial, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut und unbedingt eine blinkende Animation verwenden müssen

Stellen Sie sicher, dass es eine Steuerung darauf gibt. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zum ersten Mal sieht, und dass ein Benutzer sich entscheiden muss, die Animation zu sehen.

Ein Format, das keine Steuerungen für den Benutzer bietet, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb der gif-Datei selbst gesteuert. Durch die Umwandlung eines animierten gifs in einen Videoclip können Steuerungen auf die Animation gesetzt werden, und dem Benutzer wird Handlungsspielraum gegeben. Es gibt viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Erwartungen der Benutzer setzen

Geben Sie den Benutzern eine Vorwarnung, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn es unbedingt notwenig ist, Blitzen zu haben, halten Sie es klein. Im Allgemeinen sollten Sie die Fläche des Blitzens auf ein Gebiet von etwa 341 mal 256 Pixel oder weniger beschränken. Diese Pixelgröße nimmt an, dass der Benutzer sich in einem typischen Abstand zum Bildschirm befindet. Wie bereits gesagt, kann diese Größe jedoch zu groß sein, wenn das Bild aus nächster Nähe betrachtet wird, z. B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie ein Spiel oder VR gestalten, das eine okulare Maske verwendet **oder von einer okulären Maske verwendet werden kann**, wie in Firefox Reality (ein Browser für Virtual Reality), stellen Sie sicher, dass die Größe des Rechtecks deutlich kleiner als 341 mal 256 Pixel ist, da sich das Bild viel näher zu den Augen des Benutzers befindet.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je höher der Kontrast einer Textfarbe zum Hintergrund (technisch als _Leuchtstärke-Kontrastverhältnis_ bekannt, laut W3.org's Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter wird solch ein Inhalt gelesen. Benutzer mit eingeschränkter Sehkraft sind besonders dankbar für Bemühungen, einen hohen Kontrast zwischen Text und Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, dann ist das **Reduzieren des** Kontrasts tatsächlich eine Methode, um die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Senken Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze erfasst werden.

Das Kontrastverhältnis ist in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0,05) / (L2 + 0,05), wobei
    - L1 die [relative Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren der Farben darstellt, und
    - L2 die [relative Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren der Farben darstellt.

Am besten passen Sie den Kontrast an, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Produkt-Suite eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder steht ein Online-Tool zur Verfügung, pinetools.com's [Brightness and Contrast Online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs herzustellen, starten Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Abschnitts"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Durchstreifen einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben ist.

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

#### Vermeiden Sie vollständig gesättigtes Rot für blinkende Inhalte

Wie bereits erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Unter ihren Ergebnissen war das Verständnis, dass _"ein Blitz eine potenzielle Gefahr ist, wenn er eine Helligkeit von mindestens 20 cd/m2 aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Blickwinkel von mindestens 0,006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird auch als Risiko betrachtet."_ Sie stellen auch in demselben Konsens fest: _"Unabhängig von der Helligkeit wird ein Übergang zu oder von einem gesättigtem Rot ebenfalls als Risiko betrachtet."_

### Alternative CSS-Stile anbieten

Mit der Erkenntnis, dass viele Animationen und Blitzeffekte mithilfe von CSS-Methoden gesteuert werden können, ist es wichtig, Wege zu erkunden, um alternative Optionen für Benutzer anzubieten, und die Kontrolle über diese Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser werden die alternative CSS-Anzeigen, die in alternativen Stylesheets verfügbar sind, wenn die Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Stile enthüllt, wenn die Benutzer durch das Anzeigemenü navigieren, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen im Browser oder in den Einstellungen suchen müssen, daher lohnt es sich zu erwägen, es auf die altmodische Weise zu machen, mit offensichtlichen Schaltflächen oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Das wird nicht im Konflikt stehen noch die Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, oder die Fähigkeit der Benutzer, Einstellungen zu setzen, überschreiben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die auf sprachgesteuerte Systeme angewiesen sind, oft auf herkömmliche Schaltflächen und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu benutzen oder von Berührungsereignissen auf mobilen Tablets zu profitieren.

Gängige Methoden, um alternative Stylesheets in Ihre HTML-Dokumente einzubinden, sind das Verwenden des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets zu integrieren, wird jedoch nicht so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Durch das Verwenden alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) bereiten Sie es so vor, dass die Benutzer in der Lage sind, ihre Browser zu verwenden, um alternative Stile zu wählen.

### Dynamische Stilumschaltung

Ein Problem bei der Verlassen auf den Browser, um alternative Styles anzuzeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Styles zu entdecken. Oder, aufgrund ihrer Behinderung, nicht in der Lage sind. Schaltflächen oder Links machen deutlich, dass Optionen für viele dankbare Benutzer zur Verfügung stehen. Es gibt eine Vielzahl von Möglichkeiten, um Toggle-Schaltflächen hinzuzufügen, die es dem Benutzer ermöglichen, zwischen den verschiedenen Stylesheets zu wechseln. Das gesagt, das Verwenden alternativer Stylesheets ist nicht die einzige Option. Eine andere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwenden dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo immer möglich, ist es wirklich die beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet gesteuert werden kann."._ Eines der besten Beispiele, wie das zu tun ist, ist von der W3C-Seite, ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Reine Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drastische Lösung; aber es ist eine, die manchmal für Lehrer und andere öffentliche Bedienstete notwendig ist, die Menschen mit extremen Empfindlichkeiten dienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Durch das Einrichten von Medienabfragen ermöglichen Sie Steuerungen durch den Benutzer; diese Steuerungen werden im Browser oder im Betriebssystem verfügbar gemacht. Siehe das MDN-Dokument, [Zugänglichkeit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet wird, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen Sie sich das Beispiel unten aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Dies kann nützlich sein, wenn die lichtempfindliche API nicht verfügbar ist. Unterstützung entwickelt sich.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Werkzeug für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medien-Update-Funktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flimmert" er. Die überwiegende Mehrheit der modernen Technologie aktualisiert sich mit einer Rate, die keine Probleme mit Photosensitivität verursacht. Dennoch ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder leistungsschwächere Computer können niedrige Aktualisierungsraten haben. [AbilityNet's Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsie und CRT/LCD-Bildschirmflimmern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Reaktion zu den Aktualisierungsraten in Hz:

- „Dieser Effekt ist bis zu 70 Hz spürbar und dokumentiert.“
- „Diese Studien würden darauf hindeuten, dass man von Aktualisierungsraten unter 70 Hz Abstand nehmen sollte und eine Rate verwenden sollte, die nicht durch 10 teilbar ist.“

Eric Bailey von CSS-Tricks fand eine innovative Verwendung der Update-Funktion, die in Kombination mit animation-duration oder transition-duration, zu einem Ergebnis führt, das für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken lösen das Problem der Aktualisierungsrate. Das unten stehende CSS stammt aus dem CSS-Tricks-Artikel ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/@media/update)-Medienmerkmal wird verwendet, um die Fähigkeit des Ausgabegeräts zu überprüfen, um Aussehen von Inhalten zu ändern, nachdem es gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Funktionen

### Medienabfragen Stufe 5

EnvironmentMQ (Geplant in Medien-Abfragen Stufe 5)

- `Lichtlevel`
  - : [`lichtlevel`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise vermeidet es die Spezifikation, die drei Levels in Bezug auf eine Lux-Messung zu definieren, da Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen bemerken auch den Unterschied in der Technologie, wie E-Ink, die bei hellem Tageslicht lesbar bleibt, vs. Flüssigkristalle, die es nicht tun.
- `Umgebungsvermischung`
  - : Aus dem W3C-Dokumententwurf Medien-Abfragen Stufe 5: _"Die [`Umgebungsvermischung`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienmerkmal wird verwendet, um die Eigenschaften des Displays des Benutzers zu überprüfen, damit der Autor das Design des Dokuments anpassen kann. Ein Autor könnte die Visuals und/oder das Layout der Seite anpassen, abhängig von der Display-Technologie, um die Attraktivität oder Lesbarkeit zu erhöhen."_

#### Medienmerkmale für Nutzerpräferenzen (Geplant im Medien-Abfragen Stufe 5)

[Nutzerpräferenzen Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Medien-Abfragen Stufe 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend hinsichtlich der Bereitstellung von Benutzerkontrollen über Medien. Hier einige Highlights:

- `invertierte Farben`
  - : Laut dem Abschnitt, [Nutzerpräferenzen Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`invertierte Farben`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienmerkmal zeigt an, ob die Inhalte normalerweise angezeigt werden oder ob die Farben invertiert wurden."
- [`erzwungene Farben`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`erzwungenem Farbmodus`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent auf der Seite die bevorzugte Farbpalette des Benutzers und überschreibt die gewählten Farben des Autors. Aus dem W3C-Dokumententwurf, Medien-Abfragen Stufe 5 Abschnitt zu erzwungenen Farben: _"Das erzwungene Farben Medienmerkmale wird verwendet, um zu überprüfen, ob der Benutzeragent einen [erzwungenen Farbmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem die benutzerdefinierte limitierte Farbpalette auf der Seite auferlegt wird."_ Der Benutzer muss sich dieser Fähigkeit bewusst werden, und dies muss harmonisch mit dem entsprechenden Wert für den prefers-color-scheme Medienabfrage funktionieren.
- `Lichtlevel`
  - : Aus dem W3C-Dokumententwurf Medien-Abfragen Stufe 5 Abschnitt zu Lichtlevel: _"Das [`lichtlevel`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienmerkmal wird verwendet, um sich über das Umgebungslichtlevel, in dem das Gerät verwendet wird, zu informieren, um dem Autor die Möglichkeit zu geben, den Stil des Dokuments anzupassen."_ Dies wird eine große Erleichterung sein für diejenigen, die Bewegungsprobleme haben, oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind, die richtige "Taste" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- `bevorzugt Kontrast`
  - : Aus dem W3C-Dokumententwurf Medien-Abfragen Stufe 5 Abschnitt zu [`bevorzugt Kontrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Das `bevorzugt Kontrast` Medienmerkmale wird verwendet, um zu testen, ob der Benutzer das System gebeten hat, die Menge des Kontrasts zwischen angrenzenden Farben zu erhöhen oder zu verringern. Beispielsweise haben viele Benutzer Schwierigkeiten beim Lesen von Texten, die einen kleinen Unterschied im Kontrast zum Texthintergrund aufweisen und insbesondere ein größerer Kontrast bevorzugen."_ Manchmal kann es so etwas wie zu viel Kontrast geben; ein Halo-Effekt um den Text herum kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit beeinträchtigen. Den Betrag des Kontrasts in die Kontrolle des Benutzers zu legen, ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 von der CSSWG.org Entwürfe integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die im HTML definierte ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft ist aus [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation) abgeleitet.

**Anforderung:** Einige Benutzer können nicht wörtlichen Text und Symbole wie Metaphern, Idiome usw. nicht verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht wörtlich identifizieren und erlaubt dem Autor, nicht wörtlichen Text und Bilder den Benutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung von dynamischen Stilinformationsdaten](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR-API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Leitfaden: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit einer RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsfaden
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verstehen 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Einblick in die Photosensibilität, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen sind von Geburt an besonders empfindlich gegenüber blinkenden Lichtern oder kontrastierenden visuellen Mustern, wie Streifen, Gittern und Karomustern. Aufgrund dieser Bedingung produziert ihr Gehirn anfallartige Entladungen, wenn es diesem visuellen Stimulus ausgesetzt ist."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flimmern, können Anfälle bei Patienten mit photosensitiver Epilepsie auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch blinkende oder flimmernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht-und musterinduzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Master Liste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool gilt es allgemein als einer der zwei "Goldstandards" für die Analyse von Blitzlichtern.

- [Harding Flash und Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Zusammen mit dem Harding-Tool gilt es allgemein als einer der zwei "Goldstandards" für die Analyse von Blitzlichtern.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallfreier Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verstehen von WCAG 2.0 (Älter, enthält jedoch einige Erklärungen zu den in den WCAG 2.1-Kriterien gemachten Referenzen)
- [Drei Blitze oder darunter Schwellenwert Verstehen Erfolgs Kriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verstehen von WCAG 2.1
- [Verstehen von Erfolgs Kriterium 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition von relativer Leuchtdichte
