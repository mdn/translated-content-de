---
title: Web-Accessibility für Anfälle und körperliche Reaktionen
short-title: Vermeidung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

In diesem Artikel werden Konzepte vorgestellt, wie Webinhalte zugänglich gemacht werden können für Personen mit Vestibulärstörungen und wie man Inhalte misst und verhindert, die zu Anfällen und/oder anderen körperlichen Reaktionen führen können.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere behindernde körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art „Reflex-Epilepsie“—Anfälle, die als Reaktion auf einen Reiz auftreten. Im Fall der photosensitiven Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflex-Epilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma Oscillations und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo notiert wird, "_Bestimmte visuelle Bilder, selbst ohne Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder sich bewegende Muster aus erkennbaren hellen und dunklen Streifen haben denselben Effekt wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig „quantifizieren“: _"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen, die in jeder Ausrichtung mehr als fünf Hell-Dunkel-Paare von Streifen umfassen_". Zusätzlich zu Streifen sind auch karierte Muster bekannt dafür, photosensitive Anfälle auszulösen, wie Cedars-Sinai [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) berichtet.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konstant. Der etablierte und starke Auslöser ist das Blitzen/Stroboskop-Licht. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF bemerkt, _"Das Einzige, das wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Es gibt jedoch nur einige wenige Arten von Epilepsien, die photosensitiv sind, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben den durch Photosensitivität verursachten Anfällen kann auch das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen weitaus seltener zu sein scheint. Für eine hervorragende Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) weist die Epilepsy Foundation darauf hin, dass "_ein Anfall ein Ereignis ist und die Epilepsie die Krankheit, die wiederkehrende unprovozierte Anfälle beinhaltet_." Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _"Sudden unexpected death in epilepsy (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es tritt nicht häufig auf, aber es ist ein sehr reales Problem und die Menschen müssen sich des Risikos bewusst sein"_.

Der Punkt ist, Anfälle können definitiv tödlich sein, und Entwickler und Designer sind unglaublich wichtig, um das Web für Menschen mit Empfindlichkeiten gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst jene, die „nur“ schwächend sind, können so schwerwiegend sein, dass sie den Benutzer bewegungsunfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht in der Lage ist zu funktionieren. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder sich wechselnder Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder abwechselnde Muster unterschiedlicher Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume oder durch die Lamellen von Jalousien flackert.
- Bestimmte visuelle Muster, insbesondere Streifen mit kontrastreichen Farben.

Im selben Artikel wird fortgefahren, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Erwähnenswert ist, dass die Lichtwellenlänge als möglicher Faktor enthalten ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel [„Understanding WCAG 2.0 Three Flashes or Below Threshold“](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein darauf hingewiesen, dass: _"Individuen, die unter photosensiblen Anfallsleiden leiden, können durch Inhalte, die mit bestimmten Frequenzen blitzen, einen Anfall ausgelöst bekommen, wenn sie mehr als wenige Male blitzen"_ und es wird sehr spezifisch darauf hingewiesen, dass: "_Menschen noch empfindlicher auf rotes Blinken reagieren als auf andere Farben, deshalb gibt es einen speziellen Test für gesättigtes rotes Blinken_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das darauf eingestellt ist, Farbe und Helligkeit mit hoher Frequenz zu ändern, was leicht über JavaScript gemacht werden kann, kann echten Schaden verursachen. Und Flackern kann überall auftreten. Beispielsweise können „Spinner“, die üblicherweise angezeigt werden, während Seiten geladen werden, leicht „flackern“, während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel merkt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) an, dass _"photosensitive Anfälle durch bestimmte Arten des Blinkens in Web- oder Computerinhalten provoziert werden können, einschließlich Mouse-Over-Effekten, die große Bereiche des Bildschirms schnell ein- und ausschalten_lassen."_

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allerlei Krankheiten assoziiert sind und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen gesehen wird). Allerdings sind Anfälle nicht die einzige mögliche negative physische Reaktion auf Blitzlicht, Flackern, Blinken und andere solche Stimuli. 1997 zeigte ein japanischer Cartoon eine animierte „Virusbombe“. Einige der Kinder, die den Cartoon ansahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und Blut spucken. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Folgen: jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie bewegungsunfähig ist.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Blitzen & Flackern

Obwohl "blitzen" und "blinken" manchmal synonym verwendet werden, sind sie nicht gleich. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen Inhalte bezeichnet, die mehr als 3 Mal pro Sekunde und ausreichend groß und hell auftreten. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"im Allgemeinen blinkende Lichter im Frequenzbereich von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollten."_ Bei einigen Personen können jedoch selbst Blitze/Blinken bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitserregung sein können, wie es für Warnknöpfe notwendig ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer zutrifft). Für einige Benutzer warnt Blinken von Knöpfen auch, dass sie sparsam und mit Vorsicht eingesetzt werden müssen. Im Kontext des Webdesigns müssen Systeme, die Unternehmensangestellte auf Gefahren durch „Hijacking“ des Bildschirms warnen, indem eine blinkende Notfallwarnung angezeigt wird, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen eingeblendet werden.

### Blitzen und Flackern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x), _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradian einnimmt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)."_

Wie weit ist ein typischer Betrachtungsabstand? Zur Zeit der Erstellung wurde empfohlen: "_die Fläche kann als gültig für einen Bereich >25% der Fläche eines Fernsehbildschirms betrachtet werden, ausgehend von einem Standardbetrachtungsabstand von ≥2 m (~9 Fuß)". Vieles hat sich seitdem geändert, und wir sind jetzt viel näher an unseren Bildschirmen._

Bestimmte Farben und/oder Farbkombinationen spielen auch eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) bemerkt, dass _"…Komplexitäten, die die Dynamik des Gehirns beeinflussen, durch einige Farbkombinationen mehr als durch andere moduliert werden könnten, zum Beispiel verursacht ein rot-blinkender Stimulus stärkere kortikale Erregung als ein rot-grüner oder blau-grüner Stimulus."_

### Blitzen & blitzendes Rot

[WCAG 2.3.1 allgemeine Blitz- und Rotblitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in der [relativen Luminanz](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Luminanz, wo die relative Luminanz des dunkleren Bildes unter 0.80 liegt, und wo „ein Paar gegensätzlicher Änderungen“ eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** ist definiert als jedes Paar gegensätzlicher Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. 2004 hat die Epilepsy Foundation of America einen Workshop einberufen und einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle entwickelt, der aufzeigt, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sehwinkel von mindestens 0.006 Steradian einnimmt (ungefähr 10% des zentralen Sehwinkels oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) darstellt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt allein ein Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

„Relative“ Größe und Entfernung spielen beide eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) beträgt die _"Gesamtfläche von gleichzeitig stattfindenden Blitzen nicht mehr als ein Viertel eines 341 x 256 Pixel Rechtecks irgendwo auf der angezeigten Bildschirmfläche, wenn der Inhalt bei 1024 x 768 Pixeln betrachtet wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, wird im Artikel, der WCAG 2.3.1 behandelt, so erläutert: "_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block repräsentiert einen zehn Grad großen Bereich bei einem typischen Betrachtungsabstand. (Das zehn Grad Weitwinkelbereich ist aus den ursprünglichen Spezifikationen übernommen und repräsentiert den zentralen sichtbaren Teil des Auges, wo Menschen am anfälligsten für Fotostimuli sind.)_"

Dieses Pixelflächenverhältnis erlaubt die Berechnung der relativen Größe, aber die Entfernung spielt ebenfalls eine Rolle.

Die Entfernung ist wichtig, weil sie das gesamte Sichtfeld beeinflusst. Wenn Betrachter zum Spielen Okularmasken tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm eingenommen. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf Telefon, Computer oder Headset erlebt werden kann. Das Anliegen um blinkende Bilder in einer Okularmaske wächst, da die Maske den Augen sehr nahe ist.

Forschungen weisen im Allgemeinen darauf hin, dass die Nutzung von VR tatsächlich sicherer sein könnte als der normale Konsum von Bildschirm, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, _"Die bisher begrenzten verfügbaren Daten legen nahe, dass es hinsichtlich VR-Technologie keine besonderen Bedenken in Bezug auf Anfälle gibt, obwohl sich diese Ansicht mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbwechsel würden erwartet, Anfälle zu provozieren, so wie sie es in der realen Welt tun."_

(Beachten Sie, dass einige Benutzer wegen blinkender Cursor nicht sehen können, und Migräne, Übelkeit und Desorientierung bekommen können, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Anfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unverändert und geradlinig ist, sind acht Linien das maximal Erlaubte, aber wenn es sich bewegt, dürfen höchstens fünf Linien vorhanden sein.

Parallax-Effekte können Desorientierung verursachen. Nutzen Sie Parallax-Effekte mit Vorsicht; wenn sie sie benutzen müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie abzuschalten.

„Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen, die in jede Richtung über fünf Hell-Dunkel-Paare von Streifen umfassen. Wenn die Hell-Dunkel-Streifen eines jeden Musters sich vom minimal erwarteten Betrachtungsabstand aus am Auge mit einem soliden Blickwinkel von >0.006 Steradian zusammentreffen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt, und das Muster für ≥0,5 s präsentiert wird, dann zeigt das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen, wenn sich die Streifenrichtung ändert, oszilliert, flackert oder den Kontrast umkehrt; wenn das Muster unverändert bleibt oder gleichmäßig in eine Richtung driftet, dann nicht mehr als acht Streifen.“

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, indem man von einem kleineren Bereich zu einem größeren wechselt sowie indem der Kontrast verstärkt und die räumliche Frequenz von niedrig zu mittel erhöht wird. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass der Übergang von einfachen Ausrichtungen (zum Beispiel Streifen) zu einer mehrfache Ausrichtung (zum Beispiel das karierte Muster, das entsteht, wenn man eine Reihe von Streifen über die ursprüngliche Reihe legt, aber senkrecht dazu) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Zugänglichkeit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) im Zusammenhang mit Web-Accessibility und Accessibility im Allgemeinen.

Wie sich die Farbe auf ihren Hintergrund bezieht—normalerweise in Bezug auf den Kontrast erfasst—und wie drastisch die Farbe sich Rahmen für Rahmen in der Animation verändert, ist wichtig. Weitere Informationen finden Sie unter [Dreimalige Blitze oder unterhalb des Threshold Verständnisses SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall von Rot

Es wurde demonstriert, dass [einige Farben eher zu epileptischen Anfällen führen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Macht, das Verhalten zu beeinflussen, wurde sogar bei Tieren bemerkt.

- **Tests zur Rot-Entsättigung:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit aufgebaut haben. Der Rot-Entsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die ein Schädel-Hirn-Trauma erlitten haben, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesaättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich zu einer roten Umgebung, die bei Personen mit Schädel-Hirn-Trauma die kognitive Funktion beeinträchtigt, scheint Farbe im roten Spektralwellenlängenbereich besondere Vorsicht und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte beim Testen des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [Das Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht Anfalls-sicher

Beachten Sie, dass die Farbe **#990000** als „**Websafe**“ betrachtet wird. Das bedeutet _nicht_, dass sie „sicher für die Vermeidung von Anfällen“ ist, es bedeutet lediglich, dass die Farbe genau von der Technologie reproduziert werden kann, die zur Erzeugung von Farben auf Bildschirmen verwendet wird.

## Messen zur Vermeidung von Schäden

Das Messen des Schadenspotenzials ist ein guter Ausgangspunkt. Faktoren, die in Tests berücksichtigt werden, umfassen Farbe, Helligkeit, Größe, Kontrast und im Fall von Animation, Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 hat die Epilepsy Foundation of America einen Workshop veranstaltet, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Die folgenden, sachkundigen und autoritativen Informationen stammen aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradian einnimmt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen, die in jeder Ausrichtung mehr als fünf Hell-Dunkel-Paare von Streifen umfassen. Wenn die Hell-Dunkel-Streifen eines jeden Musters sich vom minimal erwarteten Betrachtungsabstand aus am Auge mit einem soliden Blickwinkel von >0.006 Steradian zusammentreffen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt, und das Muster für ≥0,5 s präsentiert wird, dann zeigt das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen, wenn sich die Streifenrichtung ändert, oszilliert, flackert oder den Kontrast umkehrt; wenn das Muster unverändert bleibt oder gleichmäßig in eine Richtung driftet, dann nicht mehr als acht Streifen. Diese Prinzipien lassen sich einfacher auf festgelegte Medien, z.B. eine vorab aufgezeichnete TV-Sendung anwenden, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

"cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Als Entwickler im Web, wie bezieht sich das auf die Messungen für Farbe, Leuchtdichte und Sättigung?

Das Candela ist eine SI-Einheit (Internationales Einheitensystem) für Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel zu ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug auf das, womit wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, weil ein bestimmter Standard angenommen wird, der auf Monitoren, Druckern und im Internet verwendet wird und es ist das **sRGB** (Standard Red Green Blue).

> Als Maß für Licht, das pro Flächeneinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-definition televisions](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1.500 cd/m<sup>2</sup>.

Die Quintessenz ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht vom häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, das Web-inhaltlich so weit wie möglich zu quantifizieren und zu messen, was als Auslöser für Anfälle dienen kann. Dennoch darf nicht vergessen werden, dass Farbe genauso viel über menschliche Wahrnehmung im Gehirn wie über die Messung von Licht, das von einem Computerbildschirm kommt, sagt.

Zusätzlich zu den psychologischen Variationen gibt es auch physiologische Unterschiede unter uns. Es wird Variationen und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, emeritierter Dozent für Computerwissenschaften an der Cal State University Long Beach, folgendes in Bezug auf die [Helligkeit auf der HSL-Farbskala](https://colortutorial.design/hsb.html): _"... Die Unterscheidung zwischen Helligkeitsstufen ist tatsächlich nicht linear, wie die HSL-Skala suggeriert; wir sind viel empfindlicher für Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Untersuchungen und Diskussionen laufen darüber, wie die maschinelle Messung von Licht, das von einem Computerbildschirm ausgeht, durch den Abstand zum menschlichen Auge, gefiltert durch menschliches Sehen und dann manipuliert durch das menschliche Gehirn, miteinander in Beziehung gesetzt werden kann.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) sind _"Kinder und Jugendliche anfälliger als Erwachsene für eine abnormale Antwort auf Lichtstimuli, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger auftreten, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulation"_.

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand einen anfallgefährdeten Benutzer Gefahr aussetzen. Es ist gefährlich. An diesem Punkt ist eines der ethischsten Dinge, das Entwickler und Designer tun können, die Verwendung von Werkzeugen, die von Experten auf dem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten zusammenarbeiteten, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Film/Video entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und sie haben darauf geachtet, es **_kostenlos_** zum Herunterladen zur Verfügung zu stellen. PEAT kann Autoren dabei helfen festzustellen, ob Animationen oder Videos in ihren Inhalten mit hoher Wahrscheinlichkeit Anfälle verursachen. Beachten Sie die Einschränkung für die Verwendung: **_Die Verwendung von PEAT zur Bewertung von kommerziell produzierten Materialien für Fernsehübertragungen, Film, Heimunterhaltung oder Gaming-Industrien ist verboten. Verwenden Sie den Harding Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehprogrammierer den Harding-Test auf [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehprogrammierer in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl eine Analyse als auch eine Zertifizierung von Videoinhalten.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Accessibility-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung, weder absichtlich noch unabsichtlich Schaden zu verursachen. Wenn wir etwas einfügen müssen, das potenziell Schaden verursachen könnte, ist es wichtig, zu verhindern, dass Benutzer versehentlich auf schädliche Inhalte stoßen, und Wege anzubieten, wie Benutzer, Animationen verhindern und kontrollieren können, um potenziellen Schaden abzumildern.

### Was der Webentwickler tun kann

#### Kein Schaden tun

[WCAG Guideline 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht auf eine Weise, die nachweislich Anfälle oder physische Reaktionen verursacht"_. Fügen Sie keine Animationen hinzu, die ein Benutzer nicht kontrollieren kann. Gestalten Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie ein Gif oder Png mit Blitzeffekten enthalten müssen, nehmen Sie es als Video auf, damit den Benutzer Steuerungen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwickler oder Designer, ob blitzende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie richtig handhabbar sind, gibt es diejenigen, die beleidigende Inhalte von Ihrer Seite herunterladen und sie als Waffe verwenden könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu verwenden, um physischen Schaden durch Animation zu verursachen, am Samstag, den 22. März 2008 begann: Die Website der Epilepsy Foundation wurde durch Beiträge mit blinkenden Bildern und Links gehackt, die fälschlicherweise als hilfreich bezeichnet wurden. Benutzer mit Vestibulärstörungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe rechtlicher Überlegungen sind nach dem Fall im Gange, in dem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes Gif gesendet wurde: das blitzende Gif trug die Nachricht, _"Du verdienst einen Anfall für deine Posts"_.

#### Exposition kontrollieren, Zugang kontrollieren

Die Kontrolle der Exposition gegenüber der Seite ist der Schlüssel, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, ihr nicht versehentlich ausgesetzt ist. WCAG merkt an, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, Sie könnten ein Bild oder eine Animation haben, die Anfälle auslösen kann, kontrollieren Sie den Zugang, indem Sie zunächst eine Warnung über den Inhalt anzeigen und diesen dann an einem Ort platzieren, an dem der Benutzer aktiv teilnehmen muss, z. B. durch Klicken auf eine Schaltfläche oder indem Sie sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht indizieren, nicht folgen

Indem Sie die Seite nicht indizieren, verringern Sie die Wahrscheinlichkeit, dass Benutzer über eine Suche darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Prüfen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit zur Bestimmung, ob ein GIF so früh wie möglich in einer gegebenen HTTP-Anfrage animiert ist.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285).

Bei animierten GIFs, stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer beschließt, sie zu aktivieren. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs, muss der Benutzer eine Schaltfläche oder ein Kästchen drücken, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z. B. das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut nicht zu einem `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand zu setzen. Um ein starkes Beispiel dafür zu sehen, wie das tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa nutzt den `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die angibt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die Anfangsphase einer Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen sowohl starten als auch stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und bietet auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut dem Videoelement hinzufügen, so dass der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das HTML-Attribut `controls` wider, welches steuert, ob die Benutzeroberflächensteuerungen zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungselemente hat, die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort „controls“ zu HTML-Video- und Audioelementen hinzufügen.

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

Nehmen Sie dasselbe Beispiel und wenden es auf Audio an:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, selbst wenn der Inhalt innerhalb des {{HTMLElement('video')}}-Elements anstatt des {{HTMLElement('audio')}}-Elements ist. Dieses Beispiel stammt aus dem Abschnitt [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted)-Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer eine Aktion ausführt, um das Audio zu deaktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber weil es so viele MIME-Typen gibt, variieren die Mechanismen zu deren Behandlung sehr stark, und daher gibt es keine universelle Lösung für das Problem. Dies wird weiter verkompliziert durch die Tatsache, dass selbst die Klassifizierung der Dateien ihre Behandlung komplizierter macht. Beispielsweise wird das .gif-Dateiformat üblicherweise als Bilddateiformat verstanden, wird aber in einigen Kreisen aufgrund seiner Fähigkeit zur Animation auch als Videodateiformat betrachtet. Für eine umfassende Liste von Medientypen besuchen Sie bitte die [Seite für Mediatypen von IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden zu ihrer Erkennung sind keine beiläufige Übung. Es könnte Sie interessieren, der [MIME Sniffing](https://mimesniff.spec.whatwg.org/)-Spezifikation bei whatwg.org zu folgen. Nahezu jede Art von Bild kann animiert werden; wie sie animiert werden unterscheidet sich jedoch und daher variiert auch die Kontrolle der Animationen.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein fester Bestandteil in Canvas Animation, aber es ist auch interessant zu sehen, wie es mit Bildschirmaktualisierungen interagiert. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem sie die Details der Implementierung von `requestAnimationFrame` im Hintergrund der Bildschirmaktualisierung besprechen.
- **GIFs (Raster)**: Schwer zu kontrollieren, da die Steuerung für ihre Animation innerhalb der gif-Dateien liegt. Um Informationen über die Kontrolle der Geschwindigkeit von GIFs zu erhalten, siehe W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 Sekunden)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Als Variante, video Version von GIF betrachtet. Das Format ist nicht standardisiert und muss eine "echte" Videodatei (z.B., eine .webm-Datei) referenzieren, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert sein.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), bemerkt _, dass SVG eine textbasierte offene Web-Standard. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_ SVGs können als Bild verwendet werden, beispielsweise in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild mit einer SVG als Quelle">`. Das bedeutet, dass Aussehen und Animation von SVGs durch CSS Keyframes und Animationen gesteuert werden können. Für Interaktionen mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel-Kopien (Rastergrafik)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann auch animiert werden

Transformationen und Translationen können Text in einem div animieren und Schaden verursachen. Bewegter Text kann aus denselben Gründen Anfälle auslösen, wie es bewegte Bilder tun. Vermeiden Sie es, Ihren Text zu animieren. Es ist eine gute Idee, bewegten Text zu vermeiden, da viele Bildschirmleser bewegten Text nicht lesen können und es eine schlechte Benutzererfahrung ist, selbst für diejenigen ohne Seh- oder Gleichgewichtsprobleme.

### CSS für Animation

Im Stilblatt oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um dem Benutzer eine starke Erfahrung zu bieten. Wir haben bereits das `animation`-Eigentum in diesem Dokument erwähnt. Es ist tatsächlich eine Kurzschreibweise für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation braucht, um einen Zyklus zu vollenden. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation stattfinden soll.
- `animation-timing-function`

Das Animationselement ist schon allein mächtig, jedoch kombiniert mit anderen Eigenschaften und Anfragen wie `prefers-reduced-motion`, kann eine starke Auswahl an Optionen für den Benutzer arrangiert werden. Das Setzen der `animation-duration` und `transition-duration` Eigenschaften auf eine kurze Dauer, anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht es, ein Sicherheitsnetz einzurichten, um Probleme in jedem Fall zu verhindern, dass es eine Abhängigkeit darauf gibt, dass die Animation läuft.

### JavaScript-Animation

JavaScript wird oft zur Kontrolle von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der meiste JavaScript-Code, der für HTML-Videos zutrifft, trifft auch auf Audio zu. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0.5 ist halbe Geschwindigkeit, ein Wert von 2.0 ist doppelt so schnell. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Das Wiedergaberaten-Eigenschaft festlegen: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und enthält [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet folgendes Codebeispiel, wie man alle Animationen auf einer Seite verlangsamen kann, um auf halbe Geschwindigkeit zu reduziert:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Einer der einfachsten Wege besteht darin, mit einem bereits existierenden Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie als Dateitypen in Ihrem Umfeld—und in der Größe—zulässig sind. SVGs sind oft nicht erlaubt, aus Sicherheitsgründen. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele dafür, indem es mehrere Bildquellen für Sonne, Erde und Mond verwendet und verschiedene Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde beim Umlaufen der Sonne und des Mondes beim Umlaufen der Erde verwendet. Verwenden Sie den im Tutorial verfügbaren Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation verändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, positiv eine Blitzanimation verwenden müssen…

Stellen Sie sicher, dass sie eine Kontrolle darüber hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zuerst auffindet und dass ein Benutzer sich dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerungen für den Benutzer verfügbar hat, sind GIF-Dateien. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Die Umwandlung eines animierten GIFs in ein Video ermöglicht es, Steuerungen auf die Animation zu legen und gibt dem Benutzer Handlungsspielraum. Es stehen viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie Benutzern eine Vorwarnung darüber, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.2 Erfolgs-Kriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv ein Blitzen benötigen, halten Sie es klein. Im Allgemeinen sollten Sie die Größe des Blitzes auf einen Bereich von ungefähr 341 x 256 Pixel oder weniger begrenzen. Diese Pixelgröße geht davon aus, dass ein Betrachter einen typischen Abstand zum Bildschirm hat. Wie bereits erwähnt, könnte diese Größe zu groß sein, wenn das Bild in naher Entfernung, wie in einem VR-Headset, angesehen wird. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie ein Spiel oder VR entwerfen, das eine Okularmaske verwendet **oder von einer Okularmaske verwendet werden kann**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, weil das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je größer der Kontrast zwischen Textfarbe und Hintergrund (technisch als _LeuchtKontrastverhältnis_ bezeichnet, laut W3.orgs Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist es, solche Inhalte zu lesen. Benutzer mit Sehbehinderung schätzen die Bemühungen, einen hohen Kontrast von Text zu seinem Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist tatsächlich das **_Reduzieren_** des Kontrasts eine Möglichkeit, um die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle auslöst. Reduzieren Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Luminanz](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Luminanz](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren der Farben ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor es hochgeladen oder im Web veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten ein phänomenales Werkzeug für traditionelle Bilder. Auch für Bilder steht ein Online-Tool zur Verfügung: pinetools.coms [Helligkeit und Kontrast Online](https://pinetools.com/brightness-contrast-image). Wenn Sie vorhaben, animierte GIFs zu erstellen, beginnen Sie beispielsweise mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Code-Beispiel aus dem Abschnitt ["Beispiel: Hintergrundfarbe eines Absatzes setzen"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) vom MDN-Dokument, [Durchqueren eine HTML Tabelle mit JavaScript und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben ist.

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

#### Vermeiden Sie voll gesättigte Rottöne für blitzenden Inhalt

Wie früher in diesem Dokument erwähnt, versammelte die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sehwinkel von mindestens 0.006 Steradian (ca. 10% des zentralen Sehfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von einem gesättigten Rot wird ebenfalls als Risiko betrachtet."_ Sie bemerkten auch in demselben Konsens: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet."_

### Alternative CSS-Stile bereitstellen

Mit dem Verständnis, dass ein Großteil von Animationen und Blitzen durch CSS-Methoden kontrolliert werden kann, ist es wichtig, Wege zu erkunden, um Benutzern alternative Optionen anzubieten und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser werden die alternativen CSS, die in alternativen Stylesheets verfügbar sind, anzeigen, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn Benutzer durch das Ansicht-Menü gehen, in anderen Fällen manifestieren sie sich in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen im Browser oder in den Einstellungen suchen müssen, daher ist es sinnvoll, es auf die herkömmliche Weise zu tun, mit offensichtlichen Schaltflächen oder Links, um den Stil zu wechseln, so dass Benutzer sie sehen können. Dies steht nicht im Widerspruch zu oder überschreibt die Fähigkeit des Browsers, die alternativen Stylesheets zu lesen oder die Fähigkeit des Benutzers, in den Einstellungen Präferenzen zu setzen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie jene, die auf Sprachsteuerungssysteme angewiesen sind, oft auf veraltete Schaltflächen und Links angewiesen sind, da ihre Behinderung sie daran hindert, eine Maus zu verwenden oder Berührungsereignisse auf mobilen Tablets auszuführen.

Häufige Möglichkeiten, um die alternativen Stylesheets in Ihre HTML-Dokumente einzufügen, sind die Verwendung des {{HTMLElement('link')}}-Elements sowie die Verwendung von {{CSSxref('@import')}}.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets zu integrieren, aber es wird nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Nutzung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) richten Sie es so ein, dass Benutzer ihre Browser nutzen können, um alternative Stile auszuwählen.

### Dynamisches Stilumschalten

Ein Problem beim Verlassen auf den Browser, um alternative Stile zu zeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder sind aufgrund ihrer Behinderung nicht dazu in der Lage. Schaltflächen oder Links machen es für viele dankbare Benutzer offensichtlich, dass Optionen verfügbar sind. Es gibt viele Möglichkeiten, Umschalttasten hinzuzufügen, damit Benutzer die verschiedenen Stylesheets umschalten können. Es sollte jedoch angemerkt werden, dass die Verwendung alternativer Stylesheets nicht die einzige Option ist. Eine andere Option besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo es möglich ist, ist es wirklich die beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Erscheinen aller Styling-Hooks in einem einzigen Stylesheet kontrolliert werden kann"._ Eines der besten Beispiele, wie man dies macht, ist von der W3C-Seite, ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Reine-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drastische Lösung; aber es ist eine, die manchmal für Lehrer und andere öffentliche Bedienstete notwendig ist, die denen mit extremer Sensibilität dienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet unter Verwendung von `display: none` zu entwickeln. Hier ist, wie man es mit CSS macht:

```css
img {
  display: none;
}
```

#### Von Media-Abfragen mit {{HTMLElement('style')}} profitieren

Durch das Einrichten von Media-Abfragen geben Sie dem Benutzer Kontrolle; diese Steuerungen sind im Browser oder im Betriebssystem verfügbar. Siehe das MDN-Dokument, [Accessibility: Was Benutzende tun können, um sicherer zu browsen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um weitere Details zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet wird, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie sich das folgende Beispiel aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Dies kann nützlich sein, wenn die Ambient Light API nicht verfügbar ist. Der Support entwickelt sich.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es steht Entwicklern ein leistungsstarkes Werkzeug durch Window.matchMedia() zur Verfügung. Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger „flackert“ er. Die Mehrheit der modernen Technologie aktualisiert sich mit einer Frequenz, die keine Probleme mit Photosensitivität verursacht. Allerdings ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder unterpowerte Computer können niedrige Bildwiederholraten haben. [AbilityNet's Factsheet (November 2015) computers and epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort bezüglich der Bildwiederholraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz bemerkbar und dokumentiert."_
- _"Diese Studien scheinen zu zeigen, dass Sie sich von Bildwiederholraten von unter 70 Hz fernhalten sollten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Verwendung der Aktualisierungsfunktion, die, verwendet in Kombination mit der Animation-Dauer oder Übergang-Dauer, zu einem Grad abschließt, der für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken befassen sich mit dem Problem der Bildwiederholrate. Das unten aufgeführte CSS stammt aus dem Artikel von CSS-Tricks, [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/@media/update) Medienmerkmal wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild des Inhalts zu ändern, nachdem er gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Funktionen

### Medienanfragen Level 5

EnvironmentMQ (in Medienanfragen Level 5 geplant)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, tatsächlich die drei Levels im Bezug auf eine Messung von Lux zu definieren, da Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen stellen auch Unterschiede in der Technologie fest, wie z.B. e-ink, das auch bei heller Sonnenstrahlung lesbar bleibt, im Gegensatz zu Flüssigkristallanzeigen, die dies nicht tun.
- `environment-blending`
  - : Aus W3Cs Entwurf Dokument, Medienanfragen Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienmerkmal wird verwendet, um die Eigenschaften des Displays des Benutzers abzufragen, so dass der Autor den Style des Dokuments anpassen kann. Ein Autor könnte sich dazu entscheiden, die Visuals und/oder das Layout der Seite je nach Displaytechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienmerkmale (in Medienanfragen Level 5 geplant)

[Benutzerpräferenz Mediaschnittstellen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Nutzern Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut Abschnitt [Benutzerpräferenz-Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), „thumbtack`[`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienmerkmal gibt an, ob die Inhalte normal angezeigt werden oder ob Farben umgekehrt wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), zwingt der Benutzeragent das vom Benutzer bevorzugte Farbschema auf der Seite, das die vom Autor gewählten Farben überschreibt. Aus W3C's Draft-Dokument, Medienanfragen Level 5 Abschnitt zu gezwungenen Farben: _"Das forced-colors Medienmerkmal wird verwendet, um zu erkennen, ob der Benutzeragent einen [erzwungenen Farbmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine vom Benutzer gewählte eingeschränkte Farbpalette auf die Seite erzwingt"._ Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden, und es muss gut mit dem passenden Wert für die Präferenzen Filizelle das Farbschema Medienanfrage spielen.
- `light-level`
  - : Aus W3C's Draft-Dokument, Medienanfragen Level 5 Abschnitt zu Licht-Ebene: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienmerkmal wird verwendet, um über das Umgebungslichtlevel, bei dem das Gerät verwendet wird, abzufragen, damit der Autor den Stil des Dokuments als Reaktion darauf anpassen kann."_ Dies wird für diejenigen eine große Hilfe sein, die motorische Probleme haben oder für jene mit kognitiven Schwierigkeiten, die nicht in der Lage sind, den richtigen „Knopf“ zu finden, um ihre Bildschirmeinstellungen zu ändern.
- Vorsichtiger-Kontrast
  - : Aus W3C's Entwurf Dokument, Medienanfragen Level 5-Strecke zu [`vroStock`](file)let: _"Das prefers-kontrast Medienmerkmal wird verwendet, um zu erkennen, ob der Benutzer das System gebeten hat, die Menge des Kontrasts zwischen benachbarten Farben zu erhöhen oder zu verringern. Viele Benutzer haben Schwierigkeiten, Texte zu lesen, bei denen ein kleiner Unterschied im Kontrast zu ihrem Hintergrund besteht, und würden einen stärkeren Kontrast bevorzugen."_ Manchmal kann es einen zu hohen Kontrast geben; ein halo-artiger Effekt um Texte herum kann unter solchen Umständen auftreten und tatsächlich die Lesbarkeit verringern. Dem Benutzer die Kontrolle über das Ausmaß des Kontrasts zu geben, ist sicherlich ein Geschenk für die Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 von den Entwürfen von CSSWG.org kündigt an, in den [Ereignis-Loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) zu integrieren, der in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList), für mehr Informationen.

#### Personalisierte Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft wird aus [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation) entnommen.

**Anforderung:** Einige Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht wörtlich kennzeichnen und dem Autor die Möglichkeit geben, nicht-wörtlichen Text und Bilder für Benutzer zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsfaden
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit WCAG 2.0 Flash Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/vage Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber blinkenden Lichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettern geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn bei dieser Art der visuellen Stimulation anfallartige Entladungen."_
- [Gamma-Oszillationen und photosensible Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flimmern, können Anfälle bei Patienten mit photosensibler Epilepsie auslösen."_
- [Photosensible Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensible Anfälle werden durch blinkende oder flimmernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht- und musterausgelöste Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheits-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Werkzeuge-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder unterhalb des Schwellenwerts Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält jedoch einige Erklärungen zu in den WCAG 2.1-Kriterien gemachten Referenzen)
- [Drei Blitze oder unterhalb des Schwellenwerts Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte

## Mitwirkende

Herzlichen Dank an Teal; Wayne Dick von der [Low Vision Task Force der W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagrammzentrum](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program und Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige, großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ zutiefst dankbar dem Trace Research & Development Center, dass sie ihr erstaunliches Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung stellen.
