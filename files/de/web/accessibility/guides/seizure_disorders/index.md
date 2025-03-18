---
title: Barrierefreiheit im Web für Anfälle und physische Reaktionen
short-title: Vermeidung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Dieser Artikel führt in Konzepte ein, die Webinhalte für Menschen mit vestibulären Störungen zugänglicher machen, und zeigt auf, wie Inhalte, die zu Anfällen und/oder anderen physischen Reaktionen führen können, gemessen und vermieden werden können.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flimmern, blitzen oder blinken, können eine photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von photosensitiver Epilepsie werden Anfälle speziell durch blitzende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen festgestellt wird, "Bestimmte visuelle Bilder können auch in Abwesenheit von Bewegung oder Flimmern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "Statische oder sich bewegende Muster von erkennbaren hellen und dunklen Streifen haben denselben Effekt wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen." Die Epilepsy Foundation of America Working Group ist in der Lage, das Problem ein wenig zu "quantifizieren": "Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in jeder Ausrichtung aufweisen". Neben Streifen sind laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch Schachbrettmuster bekannt dafür, photosensible Anfälle auszulösen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blitzende oder Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest, "Das einzige, was wirklich dokumentiert ist, sind blitzende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind jedoch photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht." Neben Anfällen, die durch Photosensitivität verursacht werden, kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Anfallsarten viel seltener zu sein scheinen. Für eine gute Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, "Ein Anfall ist ein Ereignis und Epilepsie ist die Krankheit, die wiederkehrende nicht provozierte Anfälle umfasst." Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist "Der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und die Menschen müssen sich seines Risikos bewusst sein."

Der Punkt ist, dass Anfälle definitiv tödlich sein können und es auch sind, und Entwickler und Designer sind unglaublich wichtig dafür, das Web zu einem sichereren Ort für Menschen mit Sensitivitäten gegenüber photosensitiven oder musikogenen Auslösern zu machen.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" schwächend sind, können so schwerwiegend sein, dass der Benutzer unfähig ist zu funktionieren. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht in der Lage ist zu funktionieren. Der Artikel der Epilepsy Foundation ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei fotosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser glitzert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen mit kontrastreichen Farben.

Im selben Artikel wird weiter ausgeführt, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Hervorzuheben ist, dass auch die Wellenlänge des Lichts als möglicher Faktor genannt wird; Wellenlängen im roten Spektrumsbereich scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: "Einzelpersonen mit photosensitiven Anfallsstörungen können durch Inhalte, die mit bestimmten Frequenzen mehr als ein paar Blitze verursachen, einen Anfall erleiden" und fügt sehr spezifisch hinzu: "Menschen sind sogar empfindlicher gegenüber roten Blitzen als gegenüber anderen Farben, sodass ein spezieller Test für gesättigte rote Blitze bereitgestellt wird."

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Leuchtkraft mit hoher Frequenz ändert, was leicht über JavaScript realisiert werden kann, kann echten Schaden verursachen. Und Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig beim Laden von Seiten verwendet werden, leicht "flackern", während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel bemerkt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass "Photosensitive Anfälle durch bestimmte Arten von Blitzen in Web- oder Computerinhalten hervorgerufen werden können, einschließlich Mouseovers, die große Bildschirmbereiche dazu bringen, schnell ein- und auszublenden."

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu beobachten ist). Anfälle sind jedoch nicht die einzige mögliche negative physische Reaktion auf Blitze, Flimmern, Blinken und ähnliche Reize. 1997 enthielt ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Folgen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Gemäß W3C ist Blinken ein Ablenkungsproblem, während Blitzen Inhalte bezeichnet, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz von mehr als 3 Hz (Flimmer pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass "Allgemein gesagt, sind Lichtblitze mit Frequenzen zwischen fünf und 30 Blitzen pro Sekunde (Hertz) am ehesten geeignet, Anfälle zu provozieren. Um sicher zu sein, empfiehlt der Konsens, dass fotosensitive Personen nicht Blitzen von mehr als drei pro Sekunde ausgesetzt werden sollten." Für einige Menschen können jedoch Blitze/Blinken auch bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht alles Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitslenkung sein können—wie es bei Warnknöpfen nötig ist (dabei wird angenommen, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Blinke-Knöpfe können jedoch störend wirken, weshalb sie nur sparsam und mit Vorsicht eingesetzt werden sollten. Bei der Webgestaltung sollten Systeme, die Unternehmen über Gefahren benachrichtigen, indem sie den Bildschirm übernehmen und eine blinkende Warnung vor einem Notfall anzeigen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm in Betracht ziehen, während diese Warnungen aufblitzen.

### Blitzen und Flackern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist "Ein Blitz ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradian (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die zum Zeitpunkt des Schreibens in Betracht gezogen wurde, war "Die Fläche kann als anwendbar auf eine Fläche von >25% der Fläche eines Fernsehbildschirms angenommen werden, angenommen, dass Standardbetrachtungsabstände von ≥2 m (∼9 Fuß) eingehalten werden." Seitdem hat sich viel geändert, und wir befinden uns jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass "...Komplexitäten, die den Hirndynamiken zugrunde liegen, durch bestimmte Farbkombinationen eher moduliert werden können als durch andere, zum Beispiel verursacht der flimmernde Reiz von rot-blau größere kortikale Erregungen als der Reiz von rot-grün oder blau-grün."

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und roten Blitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar entgegengesetzter Änderungen in [relativer Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wo "ein Paar entgegengesetzter Änderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** ist definiert als jedes Paar entgegengesetzter Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle zu entwickeln, in dem erklärt wird: "Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sehwinkel von mindestens 0,006 Steradian einnimmt (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)." Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein eigenes Risiko dar: "Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko betrachtet."

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Sowohl die "relative" Größe als auch der Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) "besetzt die kombinierte Fläche der gleichzeitig stattfindenden Blitze nicht mehr als ein Viertel eines beliebigen 341 x 256 Pixel großen Rechtecks irgendwo auf der angezeigten Bildschirmfläche, wenn die Inhalte bei 1024 x 768 Pixeln betrachtet werden."

Der Punkt, dass das Sichtfeld eine wichtige Überlegung darstellt, wird im Artikel zu WCAG 2.3.1 fortgesetzt: "Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block stellt einen 10 Grad großen Sichtpunkt bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehteil des Auges, wo Menschen am anfälligsten für visuelle Reize sind.)"

Dieses Pixelbereichsverhältnis berechnet die relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand spielt eine Rolle, da er das gesamte Sichtfeld beeinflusst. Wenn Betrachter Augenmasken für Spiele tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, und die auf dem Telefon, Computer oder Headset erlebt werden kann. Die Bedenken hinsichtlich blinkender Bilder in einer Augenmaske sind zunehmend, da die Maske den Augen so nahe ist.

[The Epilepsy Society (UK)](https://epilepsysociety.org.uk/) stellt in ihrem Artikel, ["3d Films and Virtual Reality"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk), fest: "Bei VR blitzen die Bilder sehr schnell, und im Allgemeinen ist dies zu schnell, um bei Personen mit photosensitiver Epilepsie einen Anfall auszulösen. Das Sichtfeld ist jedoch groß, sodass mehr vom Auge stimuliert wird. Dies bedeutet, dass mehr vom Gehirn betroffen sein könnte, was einen fotosensiblen Anfall auslösen könnte."

(Beachten Sie, dass einige Benutzer mit blinkenden Cursorn nicht sehen können und möglicherweise Migräne, Übelkeit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Anfälle provozieren, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind maximal acht Linien erlaubt, aber wenn es sich wellt, nicht mehr als fünf Linien.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die in jeder Ausrichtung mehr als fünf Hell-Dunkel-Paare von Streifen aufweisen. Wenn die Hell-Dunkel-Streifen eines Musters insgesamt am Auge bei der minimal erwarteten Betrachtungsdistanz einen soliden Winkel von >0.006 Steradian einnehmen, beträgt die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup>, und das Muster wird für ≥0.5 s angezeigt, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder sanft in eine Richtung driftet, nicht mehr als acht Streifen."

Es ist noch nicht alles bekannt, und selbst mit den oben aufgeführten Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht ein Wechsel von einem kleineren zu einem größeren Bereich die Wahrscheinlichkeit, dass das Gehirn reagiert, sowie ein Erhöhen des Kontrasts und eine Erhöhung der räumlichen Frequenz von niedrig bis mittel. Es ist auch bekannt, dass, obwohl der Grund noch nicht verstanden wird, der Übergang von grundlegenden Orientierungen (z. B. Streifen) zu einer mehrfachen (z. B. dem Schachbrettmuster, das entsteht, wenn man ein Streifenset auf das andere setzt, aber senkrecht dazu) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für Barrierefreiheit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Zugänglichkeit im Web und Zugänglichkeit im Allgemeinen.

Wie sich die Farbe auf ihren Hintergrund bezieht—normalerweise in Bezug auf den Kontrast formuliert—und wie drastisch sich die Farbe von Bild zu Bild in der Animation verändert, ist wichtig. Mehr dazu erfahren Sie in [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Seine Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Rotentsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit eingerichtet haben. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die eine traumatische Hirnverletzung erlitten haben, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Tatsache, dass eine rote Umgebung die kognitive Funktion von Menschen mit traumatischen Hirnverletzungen beeinträchtigt, scheint Farbe im roten Spektrumsbereich besondere Besorgnis und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden, beim Testen des Photosensitive Epilepsy Analysis Tools, bemerkte, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Siehe das Video, [Das Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" betrachtet wird. Das bedeutet _nicht_, dass sie "sicher vor anfallsauslösenden Farben" ist, es bedeutet lediglich, dass die Farbe "sicher" von der Technologie, die auf Bildschirmen Farben erzeugt, genau reproduziert werden kann.

## Messung zur Vermeidung von Schäden

Das Messen des Potenzials für Schäden ist ein guter Ausgangspunkt. Faktoren, die in Tests berücksichtigt werden, sind Farbe, Leuchtkraft, Größe, Kontrast und im Fall von Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Die folgenden, expertisierten und autoritativen Informationen stammen von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradian (etwa 10% des zentralen Gesichtsfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die in jeder Ausrichtung mehr als fünf Hell-Dunkel-Paare von Streifen aufweisen. Wenn die Hell-Dunkel-Streifen eines Musters insgesamt am Auge bei der minimal erwarteten Betrachtungsdistanz einen soliden Winkel von >0.006 Steradian einnehmen, beträgt die Leuchtdichte des hellsten Streifens >50 cd/m2, und das Muster wird für ≥0.5 s angezeigt, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind einfacher anzuwenden im Fall von fixen Medien, zum Beispiel bei einer voraufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, im Gegensatz zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich das für den Webentwickler auf Messungen von Farbe, Leuchtkraft und Sättigung?

Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtintensität. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung des sichtbaren Lichts, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug auf das, was uns als Entwicklern vertraut ist: auf einem Anzeigegerät und im RGB-Raum. Das ist hilfreich, da es einen spezifischen Standard gibt, der auf Monitoren, Druckern und im Internet verwendet wird, und es ist der **sRGB** (standard Red Green Blue).

> Als Maß für das Licht, das pro Flächeneinheit abgegeben wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [High-definition Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Fazit lautet, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungs-Tools und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code umgerechnet werden kann.

### Humanphysiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, den Umfang und die Messung möglicher Webinhalte, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren. Es darf jedoch nicht vergessen werden, dass Farbe genauso viel über die menschliche Wahrnehmung im Gehirn wie über die Messung des Lichts vom Computerbildschirm handelt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Unterschiede und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Emeritierter Dozent der Informatik an der California State University Long Beach, in Bezug auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html), dass "...Die Unterscheidung zwischen Helligkeitsstufen tatsächlich nicht linear ist, wie die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Veränderungen in helleren Werten als in dunkleren."

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung sind es nicht. Untersuchungen und Diskussionen darüber, wie die Maschinenmessung von Licht in Bezug auf Entfernung zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert, im Einklang gebracht werden sollen, sind fortlaufend.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) sind "Kinder und Jugendliche anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem Alter von 20 Jahren auf." Der Artikel führt mit dieser Statistik fort: "Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger vorkommen, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulation."

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine person, die anfällig für Anfälle ist, Benutzertests aussetzen. Es ist gefährlich. In diesem Sinne ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Tools zu verwenden, die von Experten auf dem Gebiet entwickelt wurden, die eng mit Ärzten zusammengearbeitet haben. Zum Zeitpunkt dieses Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) geschaffen und macht es den Benutzern **_kostenlos_** verfügbar. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle hervorrufen würden. Beachten Sie die Einschränkung der Nutzung: **_Die Verwendung von PEAT zur Bewertung von materiell kommerziell produzierten Sendungen, Filmen, Heimunterhaltung oder Gaming-Industrien ist untersagt. Verwenden Sie für kommerzielle Zwecke den Harding-Test oder andere Tools._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) nutzen. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden können, sodass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten anbietet.

![Harding Flash und Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheit-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, weder absichtlich noch unabsichtlich Schaden zu verursachen. Wenn wir etwas einschließen müssen, das potenziell schädlich ist, ist es entscheidend, Benutzer daran zu hindern, versehentlich auf die schädlichen Inhalte zu stoßen, und Wege für Benutzer bereitzustellen, um Animationen zu verhindern und zu kontrollieren, um potenziellen Schaden abzumildern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG Guideline 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: "Entwerfen Sie keine Inhalte, die bekanntermaßen Anfälle oder physische Reaktionen verursachen." Fügen Sie keine Animation hinzu, die der Benutzer nicht kontrollieren kann. Gestalten Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie ein gif oder png mit Flimmern enthalten müssen, nehmen Sie es stattdessen in ein Videoformat auf, damit dem Benutzer Steuerungen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder es weniger schädlich zu gestalten.

#### Verständigen Sie das Gemeine

Fragen Sie sich als Entwickler oder Designer, ob blitzende Inhalte wirklich auf Ihrer Webseite angezeigt werden müssen. Selbst wenn sie richtig gehandhabt werden, gibt es diejenigen, die schädliche Inhalte von Ihrer Webseite herunterladen und sie als Waffe verwenden. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu verwenden, um physischen Schaden durch Animation zu verursachen, am Samstag, den 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde durch Posts mit blinkenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Benutzer mit vestibulären Störungen, die auf der Suche nach Hilfe auf die Seite gingen, wurden betroffen.

Eine Reihe von rechtlichen Überlegungen sind derzeit im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, im Dezember 2016 einen Anfall erlitt, nachdem ihm ein animiertes gif mit der Nachricht "Du verdienst einen Anfall für deine Posts" geschickt wurde.

#### Belichtung steuern, Zugang kontrollieren

Die Kontrolle der Belichtung zur Seite ist entscheidend, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich darauf ausgesetzt wird. WCAG stellt fest, dass ein einziges Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die Anfälle verursachen kann, steuern Sie den Zugang dazu, indem Sie zunächst eine Warnung über den Inhalt anzeigen und ihn dann an einem Ort platzieren, an dem der Benutzer aktiv zustimmen muss, indem er z. B. auf eine Schaltfläche klickt oder sichergestellt wird, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indexiert wird.

#### Nicht indexieren, nicht folgen

Wenn Sie verhindern, dass die Seite indexiert wird, verringert sich die Wahrscheinlichkeit, dass Benutzer über die Suche darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung wegen ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, Animation _so früh wie möglich_ in einer bestimmten HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) an.

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv bleibt, bis der Benutzer sie aktiviert. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kontrollkästchen ankreuzen, um die Animation zu starten.

**Ressourcen zur Erkennung und Steuerung animierter GIFs umfassen:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen hilft, animierte GIFs auf Ihrer Webseite abzuspielen und zu stoppen.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kontrollkästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z. B. das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut zu `<video controls>` nicht hinzuzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als anfänglichen Zustand zu setzen. Um ein beeindruckendes Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr barrierefreies Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS transitions](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die Anfangsphase der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer auch Animationen stoppen als auch starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und auch keine Steuerungsoptionen haben. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerungen verfügbar sind

Die Eigenschaft `HTMLMediaElement.controls` spiegelt das HTML-Attribut `controls` wider, das steuert, ob Benutzeroberflächenkontrollen zur Wiedergabe des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Denselben Ansatz verwenden und auf Audio anwenden:

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

##### Audio als Teil des Videos

Beachten Sie, dass der Ton in Videos vom `muted`-Inhaltsattribut gesteuert werden kann, obwohl der Inhalt im {{HTMLElement('video')}}-Element anstelle des {{HTMLElement('audio')}}-Elements enthalten ist. Dieses Beispiel stammt aus dem Abschnitt über die [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted)-Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund autoplay, bis der Benutzer Maßnahmen ergreift, um den Ton zu aktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Das scheint offensichtlich zu sein, aber da es so viele MIME-Typen gibt, variieren die Mechanismen, um sie zu handhaben, enorm, und aus diesem Grund gibt es keine einheitliche Lösung für das Problem. Dies wird weiter dadurch erschwert, dass sogar die Art und Weise, wie Dateien klassifiziert werden, die Art und Weise, wie sie gehandhabt werden sollten, verkompliziert. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bilddateiformat verstanden, wird jedoch auch von einigen als Video-Dateiformat betrachtet, da es animiert werden kann. Eine umfassende Liste der Medientypen finden Sie auf der [Seite von IANA.org über Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie auszukundschaften, sind keine einfache Übung. Möglicherweise möchten Sie den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org verfolgen. Fast jede Art von Bild kann animiert werden; die Art und Weise, wie sie animiert werden, variiert, und daher variiert auch die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Hauptbestandteil in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Details von `requestAnimationFrame` mit dem Hintergrund der Bildschirmaktualisierung diskutiert werden.
- **GIFs (Raster)**: Schwer zu knacken, da die Steuerung ihrer Animation in den GIF-Dateien selbst liegt. Weitere Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie in W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, Video-Version von GIF angesehen. Das Format ist nicht standardisiert und muss eine "echte" Videodatei (z. B. eine .webm-Datei) referenzieren, die an anderer Stelle existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass "SVG ein textbasiertes offenes Web-Standard ist. Es wurde ausdrücklich entwickelt, um mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zusammenzuarbeiten." SVGs können als Bild wie in diesem Beispiel verwendet werden: `<img src="example.svg" alt="Dies ist ein Bild mit einem svg als Quelle">`. Dies bedeutet, dass das Erscheinungsbild und die Animation von SVG über CSS-Keyframes und Animationen gesteuert werden können. Für die Interaktion mit Javascript, siehe die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem Div animieren und Schaden verursachen. Bewegter Text kann Anfälle auslösen, aus denselben Gründen, aus denen bewegte Bilder es tun, also vermeiden Sie es, Ihren Text zu animieren. Es ist ohnehin eine gute Idee, keinen bewegten Text zu verwenden, da viele Bildschirmleser bewegten Text nicht lesen können und es selbst für Personen, die keine Seh- oder vestibulären Probleme haben, ein schlechtes Benutzererlebnis ist.

### CSS für die Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um dem Benutzer ein beeindruckendes Erlebnis zu bieten. Wir haben die `animation`-Eigenschaft bereits früher in diesem Dokument erwähnt. Sie ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Die Animationseigenschaft ist bereits für sich genommen mächtig, aber kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann dem Benutzer eine leistungsstarke Auswahl an Optionen geboten werden. Das Festlegen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstelle von `animation: none` und `transition: none` bietet eine Sicherheitsmaßnahme, um Probleme zu verhindern, wenn es eine Abhängigkeit davon gibt, dass die Animation abläuft.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Das meiste JavaScript, das auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzerkontrollen für die Wiedergaberate sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0,5 ist halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Legen Sie die Eigenschaft der Wiedergaberate fest: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite über [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) liefert das folgende Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für die Animation

Eine der einfachsten Möglichkeiten ist, mit einem Bild zu beginnen, das bereits vorhanden ist, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie hier GIFs, JPGs, PNGs, SVGs und andere Dateitypen als Bildquelle verwenden können, solange sie erlaubte Dateitypen—und -größen—in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele dafür, indem mehrere Bildquellen für die Sonne, die Erde und den Mond verwendet werden und verschiedene Canvas-Methoden zur Steuerung der Geschwindigkeit und Bewegung der Erde beim Umlauf um die Sonne und des Mondes beim Umherkreisen um die Erde verwendet werden. Verwenden Sie den mit diesem Tutorial verfügbaren Codepen, um `ctx.rotate` im Code zu ändern, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie unbedingt eine blitzende Animation verwenden müssen…

Stellen Sie sicher, dass sie über eine Steuerung verfügt. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zuerst entdeckt, und dass der Benutzer aktiv einwilligen muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das für den Benutzer keine Steuerungsmöglichkeiten bietet, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Das Konvertieren eines animierten gifs in ein Video ermöglicht die Implementierung von Steuerungselementen zur Animation und gibt dem Benutzer Handlungsmöglichkeiten. Es gibt viele kostenlose Online-Konverter, die dafür verfügbar sind, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie den Benutzern im Voraus Bescheid, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die zu folgenden Animationen. Siehe [WCAG 2.1 Erfolgsregel 3.2.5 Änderung auf Anforderung](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv sicher sein müssen, Blitze zu haben, halten Sie sie klein. Allgemein gesagt, beschränken Sie die Größe des Blitzes auf einen Bereich von etwa 341 x 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter in einem typischen Abstand vom Bildschirm entfernt ist. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in Nahaufnahme betrachtet wird, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet **oder von einer Augenmaske verwendet werden kann**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, weil das Bild den Augen des Benutzers viel zu nah ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch genannt _Helligkeitskontrastverhältnis,_ laut W3.org's Seite über [Colors with Good Contrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist es, solche Inhalte zu lesen. Benutzer mit eingeschränktem Sehvermögen schätzen insbesondere Anstrengungen, um einen hohen Kontrast von Text gegenüber seinem Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert wird, ist **das Senken** des Kontrasts tatsächlich ein Weg, die Wahrscheinlichkeit zu verringern, dass diese animierten Inhalte Anfälle verursachen. Senken Sie das Kontrastverhältnis, wenn innerhalb einer einzigen Sekunde drei Blitze erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren Farbe ist, und
    - L2 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren Farbe ist.

Am besten wäre es, wenn Sie den Kontrast ändern, bevor er hochgeladen oder im Web veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine herausragende Ressource für herkömmliche Bilder. Auch für Bilder ist ein Online-Tool verfügbar: pinetools.com’s [Brightness and contrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie animierte GIFs herstellen möchten, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist ebenfalls eine Option, um Kontrast dynamisch zu senken. Hier ist ein Codebeispiel aus dem Abschnitt mit dem Titel, ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Durchsuchen einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben ist.

**HTML-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

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

**JavaScript-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

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

#### Vermeiden Sie vollständig gesättigte Rottöne für blinkende Inhalte

Wie bereits in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Unter ihren Ergebnissen war das Verständnis, dass "Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sehwinkel von mindestens 0.006 Steradian einnimmt (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet." Sie stellen auch in demselben Konsens fest, "Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko betrachtet."

### Stellen Sie alternative CSS-Stile bereit

Im Verständnis, dass viele Animationen und Blitze über CSS-Methoden gesteuert werden können, ist es wichtig, Möglichkeiten zu erkunden, um alternative Optionen für Benutzer bereitzustellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer durch das Ansichtsmenü gehen, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass diese Optionen über den Browser oder die Einstellungen verfügbar sind, daher lohnt es sich, zu überlegen, die alten Wege zu beschreiten, mit offensichtlichen Schaltflächen oder Links, um den Stil zu ändern, damit die Benutzer sie sehen können. Auf diese Weise wird weder die Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, noch die Fähigkeit des Benutzers, Präferenzen in den Einstellungen festzulegen, beeinträchtigt.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie z. B. diejenigen, die auf Sprachsteuerungssysteme angewiesen sind, häufig auf alte Schaltflächen und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu verwenden oder von Berührungsereignissen auf mobilen Tablets zu profitieren.

Gewöhnliche Möglichkeiten, alternative Stylesheets in Ihre HTML-Dokumente einzubinden, verwenden das {{HTMLElement('link')}}-Element und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit und zusammen mit den Attributen `rel="alternate stylesheet"` und für Titel `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch ein Weg, um Stylesheets zu integrieren, wird jedoch nicht so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) richten Sie es so ein, dass Benutzer ihre Browser verwenden können, um alternative Stile auszuwählen.

### Dynamisches Stilschalten

Ein Problem bei der Abhängigkeit vom Browser zur Offenlegung alternativer Stile ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder wegen ihrer Behinderung können sie nicht. Schaltflächen oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Umschalt-Schaltflächen hinzuzufügen, um dem Benutzer zu ermöglichen, zwischen den verschiedenen Stylesheets zu wechseln. Das gesagt, die Verwendung von alternativen Stylesheets sind nicht die einzige Option. Eine andere Option besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), gilt: "wo möglich, ist es wirklich bewährte Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stilelemente in einem einzigen Stylesheet kontrolliert werden kann." Eines der besten Beispiele dafür, wie man dies macht, ist von der W3Cs Seite ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drakonische Lösung; aber es ist eine, die manchmal notwendig ist für Lehrer und andere öffentliche Bedienstete, die diejenigen mit extremer Empfindlichkeit bedienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu entwickeln, in dem `display: none` verwendet wird. Hier erfahren Sie, wie Sie es über CSS machen:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Beim Einrichten von Medienabfragen ermöglichen Sie Benutzern, die Steuerung zu erhalten; diese Steuerungen werden im Browser oder im Betriebssystem verfügbar gemacht. Siehe das MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet werden kann, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen Sie das Beispiel unten aus dem Abschnitt über ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Ambient Light API nicht verfügbar ist. Die Unterstützung ist im Entstehen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein leistungsstarkes Tool für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die überwiegende Mehrheit der modernen Technologien aktualisiert mit einer Rate, die keine Probleme mit Photosensitivität verursacht. Jedoch ist nicht jeder wohlhabend genug, sich die neueste Technologie leisten zu können: Ältere oder leistungsschwache Computer können niedrige Aktualisierungsraten aufweisen. [AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Aktualisierungsraten in Hz:

- "Dieser Effekt ist bis zu 70 Hz bemerkbar und dokumentiert."
- "Diese Studien scheinen darauf hinzuweisen, dass Sie Aktualisierungsraten unter 70 Hz vermeiden und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."

Eric Bailey von CSS-Tricks fand eine innovative Möglichkeit, die Aktualisierungsfunktion zu nutzen, die in Kombination mit animation-duration oder transition-duration verwendet wird, um mit einer Rate zu enden, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Aktualisierungsrate. Der folgende CSS-Code stammt aus dem CSS-Tricks-Artikel ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.org's Seite über [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update` Media-Funktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten zu ändern, sobald sie gerendert wurden. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen in Bezug auf eine Lux-Messung zu definieren, da Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen bemerken auch den Unterschied in Technologien, wie E-Ink, das bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Aus dem Entwurf der W3C, Media Queries Level 5: "Die [`environment-blending`](https://drafts(csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfunktion wird verwendet, um die Eigenschaften des Benutzers anzeigen abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, das Erscheinungsbild und/oder Layout der Seite abhängig von der Display-Technologie anzupassen, um die Attraktivität zu steigern oder die Lesbarkeit zu verbessern."

#### Benutzerpräferenz-Medienfunktionen (Geplant in Media Queries Level 5)

[Benutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor’s Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um dem Benutzer die Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfunktion zeigt an, ob die Inhalte normal angezeigt werden oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die vom Benutzer bevorzugte Farbumgebung auf der Seite und überschreibt die vom Autor gewählten Farben. Aus dem Entwurf der W3C, Media Queries Level 5, Abschnitt über forced-colors: "Die forced-colors Medienfunktion wird verwendet, um festzustellen, ob der Benutzeragent einen [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine benutzergewählte begrenzte Farbpalette auf der Seite erzwingt." Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden, und sie müssen im Einklang mit den geeigneten Werten für die prefers-color-scheme-Medienabfrage verwendet werden.
- `light-level`
  - : Aus dem Entwurf der W3C, Medienanfragen Level 5, Abschnitt über light-level: "Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfunktion wird verwendet, um den Umgebungslichtpegel abzufragen, in dem das Gerät verwendet wird, um dem Autor zu ermöglichen, den Stil des Dokuments im Antwort darauf anzupassen." Dies wird ein Segen für diejenigen sein, die Probleme mit motorischen Fähigkeiten haben oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind, die richtige "Schaltfläche" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem Entwurf der W3C, Media Queries Level 5, Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): "Die `prefers-contrast` Medienfunktion wird verwendet, um festzustellen, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der nur einen geringen Unterschied im Kontrast zum Text Hintergrund hat und einen größeren Kontrast bevorzugen würde." Manchmal kann es um zu viel Kontrast gehen; ein Hoheffekt um den Text herum kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verringern. Den Kontrast in die Kontrolle des Benutzers zu legen, ist ein definitives Geschenk für Barrierefreiheit.

#### `MediaQueryList` Interface

Abschnitt 4.2 aus den Entwürfen von CSSWG.org integriert sich in die [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Siehe das MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList) für weitere Informationen.

#### Personalisierungshilfe und -unterstützung

Die Anforderung für die `literal` Eigenschaft ist aus [Abschnitt 23 Nich wörtlich Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) entnommen.

**Anforderung:** Einige Benutzer können nicht nicht wörtlichen Text und Symbole wie Metaphern, Idiome usw. verstehen. Die `literal` Eigenschaft soll Text oder Bilder als nicht wörtlich kennzeichnen und erlaubt, dass der Autor nicht wörtlichen Text und Bilder den Benutzern erklärt.

#### Übergänge (für CSS und SVG)

Das folgende stammt aus dem [Web Animations model](https://www.w3.org/TR(web-animations-1/) CSSWG.org-Entwürfe

Das Web Animations-Modell ist darauf ausgelegt, die Funktionen bereitzustellen, die erforderlich sind, um [CSS Transitions](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS Animations](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) auszudrücken.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR-API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitzdefinition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis von 2.3.1 - fehlende/vage Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf die Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _„Bestimmte Individuen werden mit einer besonderen Empfindlichkeit gegenüber flackerndem Licht oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettern geboren. Aufgrund dieses Zustands wird ihr Gehirn bei derartigen visuellen Stimulationen anfallsähnliche Entladungen produzieren.“_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _„Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flimmern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen.“_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) _„Photosensitive Anfälle werden durch flackerndes oder blinkendes Licht ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden.“_
- [Durch Licht- und Muster induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia Sept. 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Redakteur

### Harding

Zusammen mit dem PEAT-Tool wird allgemein als einer der beiden „Goldstandards“ für die Analyse von Blitzen angesehen.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Ausrüstung — Farbmessung und -verwaltung — Teil 2-2: Farbverwaltung — Erweitertes RGB-Farbraum — scRGB

### Werkzeug zur Analyse photosensitiver Epilepsie

Zusammen mit dem Harding-Tool wird allgemein als einer der beiden „Goldstandards“ für die Analyse von Blitzen angesehen.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT, um anfallsfreie Web-Animationen zu erstellen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierungs-Semantik Erläuterer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder unterhalb Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält aber einige Erklärungen von Verweisen, die in den WCAG 2.1-Kriterien gemacht wurden)
- [Drei Blitze oder unterhalb Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis von Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web-Animationsmodell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Richtlinien zur Barrierefreiheit von Webinhalten (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Richtlinien zur Barrierefreiheit von Webinhalten (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Ein herzliches Dankeschön an Teal; Wayne Dick der [Low Vision Task Force of the W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory at USF and TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ dem Trace Research & Development Center außerordentlich dankbar, dass sie ihr erstaunliches Werkzeug, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung stellen.
