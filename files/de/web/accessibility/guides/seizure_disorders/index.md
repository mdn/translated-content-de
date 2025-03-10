---
title: Web-Accessibility für Anfälle und physische Reaktionen
short-title: Vermeidung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

Dieser Artikel führt in Konzepte ein, um Webinhalte für Menschen mit vestibulären Störungen zugänglich zu machen, und wie man Inhalte, die zu Anfällen und/oder anderen physischen Reaktionen führen, messen und verhindern kann.

## Überblick

### Anfälle

Anfälle, die durch Licht verursacht werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flimmern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen nutzen, können Inhalte erzeugen, die Anfälle oder andere schwerwiegende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von photosensitiver Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgehalten wird: "_Bestimmte visuelle Bilder können selbst in Abwesenheit von Bewegung oder Flimmern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen._" Die Epilepsy Foundation beschreibt in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0), dass statische oder bewegte Muster von erkennbaren hellen und dunklen Streifen denselben Effekt wie blinkende Lichter haben können. Auch karierte Muster können photosensitive Anfälle auslösen, wie [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) berichtet.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF merkt an, _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur ein paar Epilepsie-Typen sind jedoch fotosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Lichtempfindlichkeit verursacht werden, kann das Hören bestimmter Musikstücke ebenfalls musikanalytische Anfälle auslösen, obwohl diese Art von Anfällen weit seltener zu sein scheint. Eine gute Einführung in das Thema musikanalytische Anfälle finden Sie auf der Webseite von Epilepsy Ontario über [Musikogenische Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist, und Epilepsie die Krankheit ist, die wiederkehrende unprovozierte Anfälle beinhaltet_." Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist der "plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich seines Risikos bewusst sein."

Das Wesentliche ist, dass Anfälle definitiv tödlich sein können, und Entwickler und Designer eine enorm wichtige Rolle dabei spielen, das Web für diejenigen sicherer zu machen, die empfindlich auf fotosensitive oder musikanalytische Auslöser reagieren.

Anfälle können tödlich sein, und selbst die, die "nur" lähmend sind, können so stark sein, dass sie den Benutzer unfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und andere können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionsfähig ist. Der Artikel der Epilepsy Foundation ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei fotosensitiven Personen Anfälle auslösen können; hier ein Ausschnitt aus dieser Liste:

- Fernsehbildschirme oder Computerbildschirme aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder abwechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, besonders Streifen kontrastierender Farben.

In demselben Artikel wird fortgesetzt, dass viele Faktoren zusammenkommen müssen, um die fotosensitive Reaktion auszulösen. Besonders bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor aufgeführt ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: _"Individuen mit photosensitiven Anfallsleiden können durch Inhalte, die mit bestimmten Frequenzen mehr als ein paar Mal blitzen, einen Anfall erleiden"_ und geht sehr speziell darauf ein, dass: "_Menschen auf rote Blitze empfindlicher reagieren als auf andere Farben, sodass ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt wird_".

Man benötigt nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Leuchtkraft mit hoher Frequenz ändert, was leicht über JavaScript erreicht werden kann, kann echten Schaden verursachen. Und Flimmern kann überall auftreten. Zum Beispiel, "Spinners", die häufig verwendet werden, um anzuzeigen, dass Seiten geladen werden, können beim Drehen leicht "flimmern".

Darüber hinaus gibt es Bedenken für Personen mit motorischen Problemen. Zum Beispiel vermerkt die Seite des Trace Research & Development Center [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass _"Photosensitive Anfälle durch bestimmte Arten von Blitzen in Web- oder Computerinhalten hervorgerufen werden können, einschließlich Maus-Over-Effekten, die große Bereiche des Bildschirms schnell wiederholt ein- und ausblenden lassen"_.

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen vorkommt). Anfälle sind jedoch nicht die einzige mögliche negative physische Reaktion auf Blitze, Flimmern, Blinken und andere derartige Reize. Im Jahr 1997 zeigte ein japanischer Cartoon eine animierte „Virusbombe“. Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere mit Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alles mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwer sein, dass sie unfähig macht.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken, & Flimmern

Obwohl "Blitzen" und "Blinken" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut W3C handelt es sich bei Blinken um ein Ablenkungsproblem, während sich Blitzen auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmer-Effekte mit einer Frequenz von mehr als 3 Hz (Flimmern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) stellt fest, dass _"generell blinkende Lichter mit Frequenzen zwischen fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass fotosensitive Individuen nicht mehr als drei Blitzen pro Sekunde ausgesetzt werden sollen."_ Bei einigen Menschen können jedoch Blitzen/Blinken bereits bei weniger als 3 Hz Symptome hervorrufen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinken schlecht sind. Die NASA vermerkt in ihrem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php), dass Blinken und Blitzen mächtige Werkzeuge sein können, um Aufmerksamkeit zu erregen – wie es für Warnknöpfe erforderlich ist (unter der Annahme, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer erfordert das Blinken von Knöpfen auch, dass sie sparsam und mit Vorsicht eingesetzt werden. Im Hinblick auf Webdesign müssen Systeme, die Unternehmensmitarbeiter durch "Entführung" des Bildschirms vor Gefahren warnen, um ein blinkendes Warnsignal bei Notfällen bereitzustellen, die Rate, Größe und Leuchtkraftänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen geblitzt werden.

### Blitzen und Flimmern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitz ist potenziell gefährlich, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradian (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung für einen typischen Betrachtungsabstand zur Zeit der Erstellung bestand darin, "_das Gebiet kann als auf ein Gebiet >25% der Fläche eines Fernsehbildschirms angewendet angenommen werden, unter der Annahme eines Standard-Betrachtungsabstands von ≥2 m (ca. 9 Fuß)"_. Seitdem hat sich viel verändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"...Komplexitäten, die das Gehirn beeinflussen, könnten durch bestimmte Farbkombinationen mehr als andere moduliert werden, zum Beispiel verursacht ein rot-blaues Flimmern eine größere kortikale Erregung als ein rot-grünes oder blau-grünes Flimmern."_

### Blitzen & Blitzen von Rot

[WCAG 2.3.1 allgemeine Blitz- und Rot-Blitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wo „ein Paar gegensätzlicher Änderungen“ eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** ist definiert als jedes Paar gegensätzlicher Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 hielt die Epilepsy Foundation of America einen Workshop ab, um einen [Konsensus](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu photosensitiven Anfällen zu entwickeln, der besagt: _"Ein Blitz ist potenziell gefährlich, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradian (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Soweit von Bedeutung" sind sowohl relative Größe als auch Abstand. Laut [PEAT](https://trace.umd.edu/peat/), _"Der kombinierte Bereich der gleichzeitig auftretenden Blitze nimmt nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel großen Rechtecks ein, das sich irgendwo auf dem Bildschirm befindet, wenn die Inhalte bei 1024 x 768 Pixeln betrachtet werden."_

Die Erkenntnis, dass das Blickfeld eine wichtige Überlegung ist, ergibt sich aus dem Artikel der WCAG 2.3.1: "_Der 1024 x 768-Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel-Block stellt ein 10-Grad-Blickfeld bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sichtabschnitt des Auges, wo Menschen am anfälligsten für photobiologische Reize sind.)_"

Dieses Pixelbereichsverhältnis berechnet für relative Größe, aber der Abstand spielt ebenfalls eine Rolle.

Der Abstand spielt eine Rolle, weil er das gesamte Sichtfeld beeinflusst. Wenn Betrachter beim Spielen Augenmasken tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm eingenommen. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was sowohl auf Telefonen, Computern als auch auf Headsets erlebt werden kann. Die Besorgnis über blinkende Bilder in einer Augenmaske nimmt zu, da die Maske so nahe an den Augen ist.

[Die Epilepsie-Gesellschaft (UK)](https://epilepsysociety.org.uk/) bemerkte in ihrem Artikel ["3d Films and Virtual Reality"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk): _"Mit VR blinken die Bilder sehr schnell und in der Regel ist dies zu schnell, um bei Menschen mit photosensitiver Epilepsie einen Anfall auszulösen. Das Sichtfeld ist jedoch groß, sodass mehr vom Auge stimuliert wird. Dies bedeutet, dass mehr vom Gehirn betroffen sein könnte, und dies könnte einen photosensitiven Anfall auslösen."_

(Es ist zu beachten, dass einige Benutzer mit blinkenden Cursor nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Kontrastreiche dunkle und helle geometrische Muster sind berüchtigt; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsy Foundation of America listet auf, wie viele hell-dunkle Streifenpaare Anfälle provozieren könnten und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, liegt das Maximum bei acht Linien, aber wenn es sich bewegt, dürfen es nicht mehr als fünf Linien sein.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in beliebiger Ausrichtung umfassen. Wenn die hell-dunklen Streifen eines Musters in ihrer Gesamtheit aus der minimal erwarteten Betrachtungsentfernung einen soliden Winkel von >0,006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 Sekunden angezeigt wird, dann darf das Muster nicht mehr als fünf hell-dunkle Streifenpaare aufweisen, wenn die Streifen ihre Richtung ändern, oszillieren, blinken oder ihren Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, dürfen es nicht mehr als acht Streifen sein."

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken kommen zusätzliche Faktoren ins Spiel. Beispielsweise erhöht sich die Wahrscheinlichkeit einer Gehirnreaktion, wenn von einem kleineren zu einem größeren Bereich gewechselt wird, ebenso wie der Kontrast und die räumliche Frequenz von niedrig auf mittel erhöht wird. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass der Übergang von einfachen Ausrichtungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel das karierte Muster, das entsteht, wenn ein Satz von Streifen auf den ursprünglichen Satz auf dieselbe Weise geschichtet wird, aber senkrecht dazu) das Gehirn beeinflusst.

### Farben

Für Barrierefreiheit ist das Verständnis von Farben wichtig. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) im Kontext von Web- und allgemeiner Barrierefreiheit.

Wie die Farbe in Bezug zu ihrem Hintergrund steht—normalerweise in Bezug auf den Kontrast formuliert—und wie drastisch sich die Farbe von Bild zu Bild in Animationen ändert, ist wichtig. Weitere Informationen dazu finden Sie unter [Drei Blitze oder Unter Schwellenwert - SC 2.3.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden generell von der Farbe Rot beeinflusst. Ihre Fähigkeit, das Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Tests zur Rot-Entsättigung:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit eingerichtet haben. Der Test zur Rot-Entsättigung bewertet die Integrität des Sehnervs. Weitere Informationen zur Anwendung dieses Tests durch einen Augenarzt finden Sie unter [Rot-Entsättigung](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für Personen mit traumatischer Hirnverletzung [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Beeinflussung der kognitiven Funktion von Menschen mit Traumatischen Hirnverletzungen durch eine rote Umgebung scheint die Farbe im roten Spektralbereich besondere Vorsicht und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden bemerkte beim Testen des Photosensitive Epilepsy Analysis Tool, dass die Anfallsraten viel höher waren, als erwartet. Sie stellten fest, dass wir auf gesättigtes rotes Blinken viel empfindlicher reagieren. (Siehe das Video [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das bedeutet _nicht_, dass sie "sicher für das Nicht-Auslösen von Anfällen" ist, es bedeutet nur, dass die Farbe "sicher" von der auf Bildschirmen verwendeten Technologie reproduziert werden kann.

## Messung zur Vermeidung von Schaden

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Leuchtdichte, Größe, Kontrast und bei Animationen die Frequenz. WCAG 2.1 gibt Leitlinien für die Bewertung von Inhalten.

Im August 2004 hielt die Epilepsy Foundation of America einen Workshop ab, um einen Expertenkonsensus zu fotosensitiven Anfällen zu entwickeln. Die folgende, fachkundige und autoritative Information stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist potenziell gefährlich, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradian (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in beliebiger Richtung aufweisen. Wenn die hell-dunklen Streifen eines Musters in ihrer Gesamtheit vom minimal erwarteten Betrachtungsabstand aus einen soliden Winkel von >0,006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 Sekunden angezeigt wird, dann sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare zeigen, wenn sich die Streifenrichtung ändert, oszilliert, blinkt oder ihren Kontrast umkehrt; wenn das Muster unverändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind im Fall von fixen Medien leichter anzuwenden, zum Beispiel bei einer voraufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, verglichen mit interaktiven Medien.

Die "cd/m<sup>2</sup>" beziehen sich auf Candela pro Quadratmeter. Also, für den Webentwickler, wie bezieht sich dies auf Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es handelt sich um einen photometrischen Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Wikipedias Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Bezug auf das, womit wir als Entwickler vertraut sind: auf einem Anzeigegerät, und im RGB-Raum. Das ist hilfreich, weil ein spezifischer Standard angenommen wird, der auf Monitoren, Druckern und im Internet verwendet wird, und es ist das **sRGB** (Standard Rot Grün Blau).

> Als Maß für das von einem Flächeninhalt emittierte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Das [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikationsziel für Monitore beträgt 80 cd/m<sup>2</sup>.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Consumer-Desktop-LCDs haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [High-definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Erkenntnis dabei ist, dass der **sRGB**-Farbraum ein gemeinsamer Anknüpfungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er einfach vom häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, den größten möglichen Umfang von Arten von Webinhalten zu quantifizieren und zu messen, die als Auslöser für Anfälle dienen können. Das gesagt, kann nicht vergessen werden, dass Farbe so sehr mit menschlicher Wahrnehmung im Gehirn zu tun hat, wie es mit der Messung von Licht von einem Computerbildschirm zu tun hat.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Unterschiede und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkte Tom Jewett, Lecturer Emeritus für Informatik an der Cal State University Long Beach, im Hinblick auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html), dass _"... die Unterscheidung zwischen Helligkeitsstufen nicht tatsächlich linear ist, wie die HSL-Skala vermuten lassen würde; wir sind viel empfindlicher gegenüber Veränderungen bei helleren Werten als bei dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber die menschliche Sicht und Wahrnehmung nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht, das von einem Computerbildschirm ausgeht, durch die Distanz zum menschlichen Auge, gefiltert vom menschlichen Sehen, und dann durch das menschliche Gehirn manipuliert, bezogen wird.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) sind _"Kinder und Jugendliche anfälliger als Erwachsene für eine anormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf."_. Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind öfter betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger vorkommen, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulationen."_

**Benutzertests sind sehr problematisch**. Natürlich will niemand eine anfällige Person einem Benutzertest unterziehen. Es ist gefährlich. In diesem Zusammenhang gehört es zu den ethischsten Dingen, die Entwickler und Designer tun können, Tools zu verwenden, die von Experten auf diesem Gebiet entwickelt wurden, die mit Ärzten zusammengearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und sie haben sich bemüht, es **_kostenlos_** zum Download anzubieten. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Beachten Sie bitte die Einschränkung Ihrer Verwendung: **_Die Verwendung von PEAT zur Bewertung von kommerziell für Fernsehen, Film, Home Entertainment oder Spieleindustrie produzierten Materialien ist verboten. Verwenden Sie den Harding-Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da der Einsatz des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehsender den Harding Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Goldstandard. Fernsehprogramme in verschiedenen Ländern müssen diesen Test bestehen, bevor sie ausgestrahlt werden dürfen, sodass die Gruppe von [HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Videoinhalten anbietet.

![Harding Flash und Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung, sicherzustellen, dass wir weder absichtlich noch unabsichtlich Schaden anrichten. Wenn wir etwas einfügen müssen, das Schaden verursachen könnte, ist es von entscheidender Bedeutung, zu verhindern, dass Benutzer versehentlich auf den schädlichen Inhalt stoßen, und Möglichkeiten bereitzustellen, wie Benutzer Animationen steuern und deren potenziellen Schaden mindern können.

### Was der Webentwickler tun kann

#### Vermeiden Sie Schaden

[WCAG Leitlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Entwerfen Sie keine Inhalte auf eine Art und Weise, die bekanntermaßen Anfälle oder physische Reaktionen verursacht"_. Schließen Sie keine Animation ein, die ein Benutzer nicht steuern kann. Verwenden Sie keine Muster, die bekanntermaßen Probleme verursachen. Wenn Sie ein GIF oder PNG mit Flimmern darin enthalten müssen, nehmen Sie es stattdessen im Videoformat auf, damit Steuerungen für den Benutzer verfügbar sind. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, abzuschalten oder weniger schädlich zu machen.

#### Verstehen Sie Bosheit

Fragen Sie sich als Entwickler oder Designer, ob blitzende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie richtig gehandhabt werden, gibt es Leute, die angreifende Inhalte von Ihrer Seite herunterladen und sie in Waffen umwandeln könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um durch Animation physischen Schaden zu verursachen, am Samstag, den 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde durch Posts mit Blinkbildern und Links, die fälschlicherweise behaupten, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die auf der Suche nach Hilfe von der Seite waren, waren betroffen.

Eine Reihe von rechtlichen Überlegungen laufen, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes GIF gesendet wurde: das blinkende GIF trug die Nachricht: _"Sie verdienen einen Anfall für Ihre Beiträge"_.

#### Kontrolle von Zugang und Exposition

Die Kontrolle der Belichtung zur Seite ist entscheidend, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die Anfälle verursachen könnte, steuern Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und ihn dann an einem Ort platzieren, an dem der Benutzer ihm zustimmen muss, indem er zum Beispiel einen Knopf drückt oder sicherstellt, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Berücksichtigen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Keine Indizierung, Kein Folgen

Durch das Nicht-Indexieren der Seite wird die Wahrscheinlichkeit verringert, dass Benutzer über Suchvorgänge darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, dennoch verdienen animierte GIFs besondere Erwähnung wegen ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) an

Stellen Sie sicher, dass Animation bei animierten GIFs inaktiv bleibt, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

**Ressourcen zum Erkennen und Steuern animierter GIFs umfassen:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen hilft, animierte GIFs auf Ihrer Webseite abzuspielen und zu stoppen

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z. B. das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut nicht zum `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand zu setzen. Um ein mächtiges Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung zu schaffen, die unter der Kontrolle des Benutzers bleibt.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die Anfangsstufe der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer auch sicher stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerung. Stellen Sie sicher, dass Sie das Attribut `controls` zum Videoelement hinzufügen, damit der Benutzer das Video genauso stoppen wie starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Zugriff auf Steuerungen programmatisch sicherstellen

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das steuert, ob Benutzeroberflächensteuerungen zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, auf die ein Benutzer zugreifen kann, fügen Sie den Begriff "controls" zu HTML-Video- und Audioelementen hinzu.

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

Angenommen, dasselbe Beispiel wird auf Audio angewendet:

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

Beachten Sie, dass der Ton in Videos über das `muted` Inhaltsattribut gesteuert werden kann, obwohl der Inhalt im {{HTMLElement('video')}}-Element anstelle des {{HTMLElement('audio')}}-Elements liegt. Dieses Beispiel stammt aus dem Abschnitt zur Beschreibung des [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Ton zu deaktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Kontrolle der Geschwindigkeit

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen für ihren Umgang erheblich, und aus diesem Grund gibt es keine einheitliche Lösung für das Problem. Dies wird weiter dadurch verkompliziert, wie Dateien klassifiziert werden, wodurch sich die Art und Weise, wie sie behandelt werden sollten, verkompliziert. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild betrachtet, wird jedoch in einigen Kreisen aufgrund seiner Animationsfähigkeit auch als Video-Dateiformat angesehen. Eine umfassende Liste von Medientypen finden Sie auf der [Seite zu Medientypen von IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden zu deren Erkennung sind keine beiläufige Übung. Sie könnten daran interessiert sein, dem [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard auf der Webseite von whatwg zu folgen. So gut wie jeder Bildtyp kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt zu [grundlegenden Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundelement in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Lesen Sie den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie die Grundlagen der Implementierung von `requestAnimationFrame` gegenüber dem Hintergrund der Bildschirmaktualisierung diskutieren.
- **GIFs (Raster)**: Schwer zu knacken, da die Steuerung ihrer Animation in den gif-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie auf der Seite der W3C ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Artikel dazu ist bei Stack Overflow ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, Videoversion von GIF angesehen. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z. B. eine .webm-Datei) verweisen, die woanders existiert.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ein textbasiertes, offenes Web-Standard ist. Es ist explizit so konzipiert, dass es mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) funktioniert."_ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Dies bedeutet, dass das Erscheinungsbild und die Animation von SVGs durch CSS-Keyframes und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rasterschaltbilder werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Ersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann Anfälle auslösen, bevor dieselben Gründe bewegte Bilder tun, daher vermeiden Sie es, Ihren Text zu animieren. Es ist ohnehin eine gute Idee, bewegten Text zu vermeiden, da viele Screenreader bewegten Text nicht lesen können und es eine schlechte Benutzererfahrung ist, selbst für solche ohne Seh- oder vestibuläre Probleme.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammenzugefügt werden, um ein starkes Erlebnis für den Benutzer zu schaffen. Wir haben früher im Dokument bereits die `animation`-Eigenschaft erwähnt. Sie ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation erfolgen soll.
- `animation-timing-function`

Die animation-Eigenschaft ist auf eigene Faust schon mächtig, sie sichert eine Menge Optionen beim Kombinieren mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` für den Benutzer. Die `animation-duration` und `transition-duration`-Eigenschaften auf eine kurze Dauer einzustellen, anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht eine Sicherung, um Probleme zu verhindern, falls die Animation laufen muss.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Die meisten JavaScript-Codes, die auf HTML-Video angewendet werden, gelten auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1,0 ist Standard und gilt als normale Geschwindigkeit; ein Wert von 0,5 ist halb so schnell, ein Wert von 2,0 ist doppelt so schnell. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Eigenschaft der Wiedergabegeschwindigkeit: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie, die [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API) umfasst. Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) liefert den folgenden Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Einer der einfachsten Wege ist es, mit einem Bild zu beginnen, das bereits existiert und es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie in Ihrer Umgebung zugelassene Dateitypen und -größen sind. SVGs sind aufgrund von Sicherheitsbedenken oft nicht erlaubt. Das MDN-Dokument [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele dafür an, wie die Sonne, die Erde und der Mond als Bildquellen und durch Nutzung verschiedener Canvas-Methoden gesteuert werden können, um die Geschwindigkeit und Animation der Erde beim Umlauf um die Sonne und des Mondes beim Umlauf um die Erde zu animieren. Verwenden Sie den Codepen, der mit diesem Tutorial verfügbar ist, um `ctx.rotate` im Code anzupassen und zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, definitiv eine blinkende Animation verwenden müssen

Stellen Sie sicher, dass eine Steuerung darauf verfügbar ist. Stellen Sie sicher, dass es beim ersten Mal, wenn der Betrachter auf den Inhalt trifft, ausgeschaltet ist und dass der Benutzer sich anmelden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerungen für den Benutzer verfügbar hat, ist eine Gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des Gif-Bildes selbst gesteuert. Das Umwandeln eines animierten Gif in ein Video ermöglicht Steuerungen, die auf die Animation gesetzt werden, und gibt dem Benutzer Autorität. Es gibt viele kostenlose Online-Konverter, die verwendet werden können, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Setzen Sie Benutzerewartungen

Geben Sie Benutzern im Voraus Bescheid, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen soll. Siehe [WCAG 2.1 Erfolgsmaßnahme 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut, definitiv blitzen müssen, halten Sie es klein. Im Allgemeinen sollten Sie die Größe des Blitzes auf einen Bereich von ungefähr 341 x 256 Pixeln oder weniger beschränken. Diese Pixellänge nimmt an, dass ein Betrachter einen typischen Abstand vom Bildschirm hat. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild auf kurzen Entfernung betrachtet wird, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Phone, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR, das einen Augenmask verwendet, **oder verwendet werden kann, entwickelt**, wie in Firefox Reality (ein Browser für Virtual Reality), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, weil das Bild viel näher an die Augen eines Benutzers heran bewegt wird.

#### Reduzieren Sie den Kontrast

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je größer der Kontrast der Textfarbe zu ihrem Hintergrund (technisch Luminanzkontrastverhältnis genannt, gemäß W3.orgs Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter ist ein solcher Inhalt zu lesen. Nutzer mit Seheinschränkungen wissen die Bemühungen besonders zu schätzen, um den hohen Kontrast von Text zu seinem Hintergrund zu gewährleisten. Wenn jedoch der Inhalt animiert ist, ist das **_Reduzieren_** des Kontrasts tatsächlich ein Weg, um die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Verringern Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Luminanz](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Luminanz](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor es hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe-Produktreihe eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein online verfügbares Tool pinetools.com [Brightness and contrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, sollten Sie z.B. mit einem beginnen, das ein niedriges Kontrastverhältnis aufweist.

JavaScript ist auch eine Möglichkeit zur dynamischen Reduzierung des Kontrasts. Hier ist ein Codesnippet aus dem Abschnitt ["Beispiel: Festlegung der Hintergrundfarben eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) des MDN-Dokuments [Durchlauf eines HTML-Tisches mit JavaScript und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

**HTML-Inhalte [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

```html
<body>
  <input
    type="button"
    value="Set paragraph background color"
    onclick="set_background()" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalte [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

```js
function set_background() {
  // get a list of all the body elements (there will only be one),
  // and then select the zeroth (or first) such element
  myBody = document.getElementsByTagName("body")[0];

  // now, get all the p elements that are descendants of the body
  myBodyElements = myBody.getElementsByTagName("p");

  // get the second item of the list of p elements
  myP = myBodyElements[1];
  myP.style.background = "rgb(255 0 0)";
}
```

#### Vermeiden Sie voll gesättigtes Rot für blitzende Inhalte

Wie bereits in diesem Dokument erwähnt, hielt die Epilepsy Foundation of America im August 2004 eine Konferenz ab, um einen Expertenkonsens zu fotosensiblen Anfällen zu entwickeln. Eines ihrer Erkenntnisse war, dass _"Ein Blitz potenziell gefährlich ist, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradian (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet."_ In demselben Konsens wird außerdem festgestellt: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet."_

### Bieten Sie alternative CSS-Stile an

Mit dem Verständnis, dass ein Großteil von Animationen und Blitzen über CSS-Methoden gesteuert werden kann, ist es wichtig, Wege zu erkunden, um alternative Optionen für Benutzer anzubieten und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Modern Browser werden die alternativen CSS-Stile in alternativen Stylesheets anzeigen, wenn die Benutzer wissen, wo sie sie finden. In einigen Fällen werden die alternativen Stile sichtbar, wenn Benutzer das Menü "Ansicht" verwenden, in anderen Fällen werden sie in den Einstellungen manifestiert, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen im Browser oder in den Einstellungen suchen müssen, daher lohnt es sich in Erwägung zu ziehen, es so zu machen, wie es früher gemacht wurde, indem offensichtliche Knöpfe oder Links verwendet werden, um den Stil zu ändern, damit Benutzer sie sehen können. Dies wird weder mit noch den Möglichkeiten des Browsers zur Lesung der alternativen Stylesheets oder der Fähigkeit der Benutzer zurückgesetzt, Präferenzen in den Einstellungen zu setzen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die von Spracherkennungssystemen abhängen, oft auf ältere Knöpfe und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus oder die Nutzung von Berührungsereignissen auf mobilen Tablets zu nutzen.

Übliche Wege, um alternative Stylesheets in Ihre HTML-Dokumente aufzunehmen, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit und zu den Attributen von `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets zu integrieren, jedoch wird es nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Indem Sie alternative Stylesheets verwenden (denken Sie daran, die Titel hinzuzufügen), stellen Sie es den Benutzern zur Verfügung, die Browser verwenden zu können, um alternative Stile zu wählen.

### Dynamisches Style-Switching

Ein Problem mit dem Verlassen auf den Browser, um alternative Stile zu offenbaren, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder aufgrund ihrer Behinderung sind sie dazu nicht in der Lage. Knöpfe oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen zur Verfügung stehen. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, um dem Benutzer das Wechseln der verschiedenen Stylesheets zu ermöglichen. Eine Problemstellung der Verwendung alternativer Stylesheets sind nicht die einzigen Optionen. Eine andere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo immer möglich, ist es tatsächlich am besten, dynamisch Klassen über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das ultimative Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet gesteuert werden kann"._ Eines der besten Beispiele für, wie man das machen kann, finden sich auf der Seite der W3C ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drastische Lösung; aber es ist eine, die manchmal für Lehrer und andere öffentliche Diener erforderlich ist, die denjenigen mit extremen Empfindlichkeiten dienen müssen. Diese öffentlichen Diener können ihre Entwickler bitten, ein spezielles Alternativ-Stylesheet mit `display: none` zu entwickeln. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen von Media Queries mit {{HTMLElement('style')}}

Indem Sie Media Queries einrichten, ermöglichen Sie Steuerungen durch den Benutzer; diese Steuerungen sind im Browser oder im Betriebssystem verfügbar. Weitere Details, wie der Benutzer auf die Steuerungen zugreift, finden Sie im MDN-Dokument [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely).

#### `prefers-reduced-motion`

Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Ein großartiges Beispiel dafür, wie man den Code `prefers-reduced-motion` verwenden kann, finden Sie im MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie sich das folgende Beispiel aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Dies kann nützlich sein, wenn die Ambient Light API nicht verfügbar ist. Unterstützung entsteht.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Tool, das Entwicklern über Window.matchMedia() zur Verfügung steht. Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Feature

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flimmert" er. Die überwiegende Mehrheit der modernen Technik aktualisiert sich in einer Rate, die keine Probleme mit der Fotosensitivität verursacht. Nicht jeder jedoch kann sich die neuste Technologie leisten: ältere oder unterversorgte Computer können niedrige Aktualisierungsraten haben. Die [AbilityNet-Faktensammlung (November 2015) Computernutzung und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zur Aktualisierungsrate.

Ein sehr alter Artikel, Tech Republics ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/) hatte eine interessante Antwort bezüglich der Aktualisierungsraten in Hz:

- _"Dieser Effekt ist bemerkbar und dokumentiert, bis zu 70 Hz."_
- _"Diese Studien würden darauf hinweisen, dass Sie Aktualisierungsraten unter 70 Hz vermeiden sollten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand eine innovative Möglichkeit zur Verwendung der Update-Funktion, die, in Kombination mit der Animation-Dauer oder der Übergangsdauer, auf eine Rate, die für das menschliche Auge nicht wahrnehmbar ist, abzuschließen ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Aktualisierungsrate. Das untenstehende CSS stammt aus dem Artikel von CSS-Tricks, ["Neu betrachten der prefers-reduced-motion, der Media Query für eingeschränkte Bewegung"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von der Seite von W3.org zu [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Das `update` Medienmerkmal wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten zu ändern, nachdem sie gerendert wurden. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Features

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation auf eine genaue Definition der drei Level in Bezug auf eine Lichtstärke-Messung, weil Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen beachten auch den Unterschied in der Technologie, wie e-Ink, die bei hellem Tageslicht lesbar bleibt, im Vergleich zu Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Aus dem W3C-Entwurfsdokument, Media Queries Level 5: "_Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienmerkmal wird verwendet, um die Eigenschaften des Benutzerausgabegeräts abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Entwickler könnte sich entscheiden, die visuellen Aspekte und/oder das Layout der Seite je nach Displaytechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern._"

#### Benutzerpräferenz-Medienmerkmale (Geplant in Media Queries Level 5)

[Benutzerpräferenz-Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C-Entwurfsdokument Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Benutzer eine Kontrolle über ihre Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzerpräferenz-Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienmerkmal zeigt an, ob die Inhalte normal dargestellt werden, oder ob Farben umgekehrt worden sind."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) zwingt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf die Seite und überschreibt die vom Autor gewählten Farben. Aus dem W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zu erzwungene Farben: "_Das erzwungene Farben-Medienmerkmal wird verwendet, um zu erkennen, ob der Benutzeragent einen [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem es eine vom Benutzer gewählte eingeschränkte Farbpalette auf der Seite durchsetzt._" Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden und es muss sich mit dem entsprechenden Wert für die Medienanfrage nach dem bevorzugten Farbschema vertraut machen.
- `light-level`
  - : Aus dem W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zu light-level: "_Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienmerkmal wird verwendet, um nach der Umgebungslichtstärke zu fragen, bei der das Gerät verwendet wird, um es dem Autor zu ermöglichen, den Stil des Dokuments als Reaktion anzupassen._" Dies wird für diejenigen, die motorische Probleme oder einige kognitive Probleme haben, die nicht den richtigen "Knopf" finden können, um ihre Bildschirmeinstellungen zu ändern, ein Segen sein.
- prefers-contrast
  - : Aus dem W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): "_Das `prefers-contrast` Medienmerkmal wird verwendet, um festzustellen, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen geringen Unterschied im Kontrast zum Text-Hintergrund aufweist, und würden einen höheren Kontrast bevorzugen._" Manchmal kann es so etwas wie zu viel Kontrast geben; ein Halo-Effekt um den Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Das Setzen der Menge an Kontrast unter der Kontrolle des Benutzers ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList` Interface

Abschnitt 4.2 von den CSSWG.org-Entwürfen integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die im HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Weitere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierungshilfe und Unterstützung

Die Anforderung für das `literal`-Eigenschaft wird aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) entnommen.

**Anforderung:** Einige Benutzer können keine nicht-wörtlichen Texte und Symbole wie Metaphern, Redewendungen etc. verstehen. Die `literal`-Eigenschaft ist darauf ausgelegt, um Text oder Bilder als nicht-wörtlich zu identifizieren und dem Autor die Möglichkeit bieten, nicht-wörtlichen Text und Bilder zu erklären.

#### Übergänge (für CSS und SVG)

Folgendes ist dem [Webanimationsmodell](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfen entnommen

Das Webanimationsmodell soll die Funktionen bereitstellen, die für das Ausdruck von [CSS-Übergängen](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) notwendig sind.

## Siehe auch

### MDN

- [Zugänglichkeit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Zugänglichkeit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit einer RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensitivität werfen, eine der komplexesten Erkrankungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) Epilepsy Foundation: _"Bestimmte Individuen werden mit einer besonderen Empfindlichkeit gegenüber flackerndem Licht oder kontrastierenden visuellen Mustern, wie Streifen, Gittern und Schachbrettmustern, geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallartige Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt werden."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flimmern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster ausgelöste Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool wird allgemein als einer der "Goldstandards" zur Analyse von Flimmern anerkannt.

- [Harding Flash und Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Analysesoftware für photosensitive Epilepsie

Zusammen mit dem Harding-Tool wird allgemein als einer der "Goldstandards" zur Analyse von Flimmern anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalization Semantics Explainer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/) Arbeitsentwurf
- [WAI-Adapt: Werkzeuge-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder unterhalb der Schwelle Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (älter, enthält aber einige Erklärungen zu den in den WCAG 2.1 Kriterien genannten Referenzen)
- [Drei Blitze oder unterhalb der Schwelle Verständnis Erfolgs-Kriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgs-Kriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animationen Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition von relativer Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Ein herzliches Dankeschön an Teal; Wayne Dick von der [Low Vision Task Force der W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory at USF and TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ in großem Maße dankbar dem Trace Research & Development Center für die Bereitstellung ihres erstaunlichen Tools, des [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/), kostenlos.
