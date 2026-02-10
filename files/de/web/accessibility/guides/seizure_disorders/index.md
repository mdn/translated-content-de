---
title: Barrierefreiheit im Web bei Anfällen und körperlichen Reaktionen
short-title: Anfälle und körperliche Reaktionen verhindern
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: b56ef42f1aac2481bfe42bfcf6c235ceb22624c4
---

Dieser Artikel führt in Konzepte ein, wie Webinhalte für Menschen mit vestibulären Störungen zugänglich gemacht werden können und wie man Inhalte misst und verhindert, die zu Anfällen und/oder anderen körperlichen Reaktionen führen.

## Überblick

### Anfälle

Anfälle, die durch Licht verursacht werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können die photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere schwächende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch ohne Animation körperliche Reaktionen auslösen. Photosensitive Epilepsie ist tatsächlich eine Art von "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei photosensitiver Epilepsie werden die Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können auch Epilepsie auslösen.

Die Tatsache, dass auch statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgestellt wird, "_Bestimmte visuelle Bilder, selbst in Abwesenheit von Bewegung oder Flackern, können Anfälle bei Patienten mit photosensitiver Epilepsie auslösen_". Die Epilepsie-Stiftung erwähnt in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), dass statische Bilder und Muster ähnliche Effekte wie blinkende Lichter haben können, da sie wechselnd helle und dunkle Bereiche darstellen. Die Arbeitsgruppe der Epilepsiestiftung von Amerika kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, mehr als fünf Hell-Dunkel-Paare von Streifen in jeder Orientierung_". Zusätzlich zu Streifen sind auch karierte Muster bekannt dafür, photosensitive Anfälle auszulösen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom umfassenden Epilepsieprogramm der USF merkt an: _"Der einzige wirklich dokumentierte Auslöser sind blinkende Lichter, die Anfälle bei Patienten mit photosensitiver Epilepsie auslösen können. Nur wenige Arten von Epilepsien sind photosensitiv, und die überwiegende Mehrheit der Epilepsien ist dies nicht."_ Neben den durch Photosensitivität ausgelösten Anfällen kann auch das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen weitaus seltener vorkommt. Eine großartige Einführung in das Thema der musikogenen Anfälle finden Sie auf der Webseite der Epilepsie Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsie-Stiftung fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende, nicht provozierte Anfälle beinhaltet_" ist. Laut der Seite der Epilepsie-Stiftung ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _"der unerwartete plötzliche Tod bei Epilepsie (SUDEP) vermutlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich des Risikos bewusst sein"_.

Der Punkt ist, dass Anfälle definitiv tödlich sein können, und Entwickler und Designer sind unglaublich wichtig, um das Web sicherer zu machen für diejenigen mit Sensitivitäten gegenüber photosensitiven oder musikogenen Auslösern.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" schwächend sind, können so schwer sein, dass der Nutzer handlungsunfähig ist. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Nutzer nicht funktionsfähig ist. Der Artikel der Epilepsie-Stiftung, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), listet Auslöser auf, die bei photosensitiven Menschen Anfälle verursachen können; ein Auszug aus dieser Liste:

- Fernseher oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliche Lichteinflüsse, wie Sonnenlicht, besonders wenn es glitzert über Wasser, durch Bäume oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Im gleichen Artikel wird fortgeführt, dass viele Faktoren kombiniert werden müssen, um die photosensitive Reaktion auszulösen. Dabei ist unter anderem die Wellenlänge des Lichts ein möglicher Faktor; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird im Allgemeinen festgestellt: _"Individuen mit photosensitiven Anfallsstörungen können durch Inhalte, die mit bestimmten Frequenzen für mehr als einige Blitze blitzen, einen Anfall auslösen"_ und geht sehr spezifisch darauf ein, dass: "_Menschen sind empfindlicher gegenüber Rotblitzen als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes Rotblitzen bereitgestellt_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}} Element, das so eingestellt ist, dass es die Farbe und Helligkeit mit hoher Frequenz ändert, was leicht über JavaScript gemacht werden kann, kann realen Schaden verursachen. Und Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig angezeigt werden, während Seiten geladen werden, beim Drehen leicht "flackern".

Zusätzliche Bedenken bestehen für Menschen mit motorischen Problemen. Zum Beispiel stellt die Seite des Trace Research & Development Center für das [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"Photosensitive Anfälle durch bestimmte Arten von Flackern im Web oder in Computerinhalten provoziert werden können, einschließlich Mouse-Overs, die große Bereiche des Bildschirms schnell ein- und ausschalten"_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen möglichen Krankheiten verbunden sind und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen zu sehen ist). Anfälle sind jedoch nicht die einzige mögliche negative körperliche Reaktion auf Blinken, Flimmern, Blinken und andere derartige Reize. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so stark, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Folgen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flimmern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut der W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet flimmernde Effekte mit einer Frequenz von mehr als 3 Hz (Flimmern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsie-Stiftung ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) erklärt, dass _"Allgemein sind blitzende Lichter mit Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am ehesten geeignet, Anfälle auszulösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Individuen nicht blitzenden Lichtern ausgesetzt werden sollten, die mehr als drei Blitze pro Sekunde umfassen."_ Für einige Menschen können jedoch Blitzen/Blinken auch Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht alles Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge sein können, um Aufmerksamkeit zu erregen — wie es für Warnschaltflächen notwendig ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Schaltflächen auch davor, dass sie sparsam und mit Sorgfalt eingesetzt werden müssen. Was das Webdesign betrifft, müssen Systeme, die Mitarbeiter eines Unternehmens vor Gefahr warnen, indem sie den Bildschirm "kapern" und ein blinkendes Notfallwarnsignal bereitstellen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, wenn diese Warnungen aufgeblinkt werden.

### Blitzen und Flimmern – Wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist _"Ein Blitz eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, in einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradianten (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die zum Zeitpunkt des Schreibens als typischer Betrachtungsabstand betrachtet wurde, war "_Die Fläche kann als anwendbar auf eine Fläche von >25% der Fläche eines Fernsehbildschirms angesehen werden, bei einer Standard-Betrachtungsabstand von ≥2 m (∼9 feet)"_. Seitdem hat sich viel geändert und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…die Komplexität der Gehirndynamik durch bestimmte Farbkombinationen stärker moduliert werden kann als durch andere, beispielsweise verursacht ein rot-blau flimmernder Reiz größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen und rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und rote Blitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird definiert als ein Paar gegensätzlicher Änderungen in [relativer Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0.80 liegt und wo "ein Paar gegensätzlicher Änderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** wird als ein beliebiges Paar gegensätzlicher Übergänge bezeichnet, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 hat die Epilepsie-Stiftung von Amerika einen Workshop einberufen, um einen Konsens zu photosensitiven Anfällen zu entwickeln, in dem festgestellt wurde, dass _"Ein Blitz eine potenzielle Gefahr darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sehwinkel von mindestens 0.006 Steradianten (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es hängt davon ab

"Sowohl die relative" Größe als auch der Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) _"besetzt das kombinierte Flächenmaß der gleichzeitig auftretenden Blitze insgesamt nicht mehr als ein Viertel eines 341 x 256 Pixel großen Rechtecks irgendwo im angezeigten Bildschirmbereich, wenn der Inhalt mit 1024 bei 768 Pixeln betrachtet wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, taucht im Artikel auf, der sich mit WCAG 2.3.1 befasst: "_Die 1024 x 768 Bildschirmauflösung wird als Referenzbildschirmauflösung zur Bewertung verwendet. Der 341 x 256 Pixel Block repräsentiert ein 10 Grad Sichtfeld bei einem typischen Betrachtungsabstand. (Das 10 Grad Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sichtbereich des Auges, wo Menschen am empfindlichsten auf visuelle Reize reagieren.)_"

Dieses Pixel-Bereichsverhältnis berechnet die relative Größe, aber der Abstand spielt ebenfalls eine Rolle.

Entfernung spielt eine Rolle, weil sie das gesamte Sichtfeld beeinflusst. Wenn Betrachter oculare Masken für das Spielen tragen, ist das Sichtfeld höchstwahrscheinlich vollständig vom Bildschirm umgeben. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, was auf dem Handy, Computer oder mit Headset erlebt werden kann. Die Sorge um Blitzeffekte in einer ocularen Maske wächst, da die Maske den Augen sehr nahe ist.

Forschungen legen im Allgemeinen nahe, dass die Nutzung von VR sicherer sein könnte als der normale Bildschirmkonsum, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, _"Die begrenzten bisher verfügbaren Daten zeigen keine besonderen Besorgnisse in Bezug auf Anfälle bei VR-Technologie, obwohl sich diese Meinung mit zunehmender Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokante Muster oder Farbänderungen, würden voraussichtlich ebenso wie in der realen Welt Anfälle provozieren."_

(Beachten Sie, dass einige Benutzer die blinkenden Cursor nicht sehen können und möglicherweise unter Migräne, Reisekrankheit und Desorientierung leiden, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxen

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Schachbrettmuster sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsie-Stiftung von Amerika listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Anfälle provozieren und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind maximal acht Linien erlaubt, aber wenn es sich wellt, dürfen nicht mehr als fünf Linien sein.

Parallaxeneffekte können Desorientierung verursachen. Verwenden Sie Parallaxeneffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Möglichkeit hat, sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in jeder Orientierung nummerieren. Wenn die Hell-Dunkel-Streifen eines beliebigen Musters kollektiv am Auge beim minimal erwarteten Betrachtungsabstand einen soliden Winkel von über 0.006 Steradianten umfassen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> ist und das Muster für ≥0.5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen enthalten, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder umgekehrt werden; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, beim Wechsel von einem kleineren zu einem größeren Bereich, sowie bei zunehmendem Kontrast und bei der Erhöhung der räumlichen Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl der Grund dafür nicht verstanden wird, dass der Übergang von einfachen Orientierungen (zum Beispiel, Streifen) zu einer Mehrfachausrichtung (zum Beispiel, das karierte Muster, das entsteht, wenn man ein Streifenmuster auf ein anderes legt, das senkrecht dazu steht,) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Barrierefreiheit. Siehe [Verstehen von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Barrierefreiheit im Web und Barrierefreiheit im Allgemeinen.

Wie sich die Farbe im Verhältnis zu ihrem Hintergrund verhält — normalerweise in Bezug auf Kontrast beschrieben — und wie drastisch sich die Farbe von Bild zu Bild in Animationen ändert, ist wichtig. Weitere Informationen hierzu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Das menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Seine Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Rot-Entsättigungstests:** Das menschliche Auge ist so sensibel gegenüber Rot, dass Augenärzte einen Test mit dieser Farbe durchgeführt haben. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen dazu, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für Menschen, die unter einem Schädel-Hirn-Trauma leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Beeinflussung der kognitiven Funktion von Menschen mit Schädel-Hirn-Trauma durch eine rote Umgebung scheint das rote Farbspektrum spezielle Bedenken und besondere Tests zu erfordern. Dr. Gregg Vanderheiden bemerkte bei Tests mit dem Photosensitive Epilepsy Analysis Tool, dass die Anfallsraten viel höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes Rotblitzen reagieren. (Sehen Sie sich das Video [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/) an.)

#### Websichere Farben sind nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" gilt. Das bedeutet _nicht_, dass sie "sicher vor Anfällen" ist, sondern nur, dass die Farbe "sicher" von der Technologie, die Farben auf Bildschirmen erzeugt, reproduziert werden kann.

## Messen, um Schaden zu verhindern

Den potenziellen Schaden zu messen ist ein guter Ausgangspunkt. Faktoren, die in Tests berücksichtigt werden, sind Farbe, Leuchtdichte, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Richtlinien für die Bewertung von Inhalten.

Im August 2004 hat die Epilepsie-Stiftung von Amerika einen Workshop einberufen, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Die folgende, fachkundige und autoritative Information stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz stellt eine potenzielle Gefahr dar, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, bei einer Frequenz von ≥3 Hz auftritt, und einen soliden Sehwinkel von ≥0.006 Steradianten (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster, das das Potenzial hat, Anfälle zu provozieren, enthält klar erkennbare Streifen, deren Anzahl mehr als fünf Hell-Dunkel-Paare von Streifen in jeder Orientierung beträgt. Wenn die Hell-Dunkel-Streifen eines beliebigen Musters am Auge vom minimal erwarteten Betrachtungsabstand einen soliden Winkel von über 0.006 Steradianten umfassen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0.5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen enthalten, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden im Fall von festen Medien, z.B. eine aufgezeichnete TV-Show, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also für den Webentwickler, wie hängt das mit Messungen für Farbe, Leuchtdichte und Sättigung zusammen?

Das Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedias Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) stellt es in Bezug auf das, was uns als Entwickler vertraut ist, dar: auf einem Anzeigegerät und im RGB-Raum. Das ist hilfreich, weil es einen spezifischen Standard gibt, von dem angenommen wird, dass er auf Monitoren, Druckern und im Internet verwendet wird, und es ist das **sRGB** (standard Red Green Blue).

> Als Maß für das Licht, das pro Flächeneinheit ausgestrahlt wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>. Kalibrierte Monitore sollten typischerweise eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop-Liquid-Crystal-Displays haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-definition televisions](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Erkenntnis ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht vom allgemein verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten bemühen sich, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Trotzdem darf nicht vergessen werden, dass Farbe ebenso eine menschliche Wahrnehmung im Gehirn betrifft wie die Messung des Lichts, das von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es wird Variationen und Nuancen geben, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel stellt Tom Jewett, emeritierter Dozent für Informatik an der Cal State University Long Beach, folgendes fest in Bezug auf [Lichtstärke in der HSL-Farbskala](https://colortutorial.design/hsb.html): _"…Die Unterscheidung zwischen Helligkeitsstufen ist tatsächlich nicht linear, wie es die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und dessen Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Untersuchungen und Diskussionen darüber, wie die Maschinenmessung von Licht, das von einem Computerbildschirm ausgeht, durch die Entfernung zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann im menschlichen Gehirn verarbeitet wird, zusammenhängt, sind im Gange.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsie-Stiftung ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) sind _"Kinder und Jugendliche anfälliger als Erwachsene, auf Lichtstimulation anormal zu reagieren, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"_ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle häufiger bei Jungen auftreten, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulationen."_

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand, dass eine für Anfälle anfällige Person Benutzertests durchläuft. Es ist gefährlich. In diesem Sinne ist eines der ethischsten Dinge, das Entwickler und Designer tun können, die von Experten auf diesem Gebiet entwickelten Tools zu verwenden, die in Zusammenarbeit mit Ärzten entwickelt wurden, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens stehen zwei allgemein verfügbare Tools zur Verfügung, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und sie haben darauf geachtet, es **_kostenlos_** zum Download bereitzustellen. PEAT kann Autoren helfen, festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Nutzungsbeschränkung: **_Der Einsatz von PEAT zur Bewertung von kommerziell produzierten Materialien für Fernsehsendungen, Filme, Home Entertainment oder die Spieleindustrie ist untersagt. Verwenden Sie den Harding-Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![Photosensitive Epilepsy Analysis Tool der University of Maryland College of Information Studies.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test auf [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden können, daher bietet die Gruppe auf [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten an.

![Harding Flash und Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung sicherzustellen, dass wir keinen Schaden verursachen, weder absichtlich noch unabsichtlich. Wenn wir etwas einfügen müssen, das potenziell schädlich ist, ist es wichtig, sicherzustellen, dass Benutzer nicht versehentlich auf die gefährlichen Inhalte stoßen und Möglichkeiten bieten, wie Benutzer Animationen verhindern und steuern können, um potenzielle Schäden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden zufügen

[WCAG Richtlinie 2.3 Anfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Entwerfen Sie Inhalte nicht so, dass sie Anfälle oder körperliche Reaktionen verursachen."_. Fügen Sie keine Animationen ein, die ein Benutzer nicht kontrollieren kann. Gestalten Sie keine Muster, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie ein GIF oder PNG mit Blitzen einfügen müssen, zeichnen Sie es stattdessen in einem Videoformat auf, damit dem Benutzer Steuerungsmöglichkeiten zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder es weniger schädlich zu machen.

#### Böswilligkeit verstehen

Als Entwickler oder Designer, fragen Sie sich, ob blinkende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie richtig gehandhabt werden, gibt es diejenigen, die verletzende Inhalte von Ihrer Website herunterladen und sie als Waffe einsetzen können. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um physischen Schaden durch Animation zu verursachen, am Samstag, den 22. März 2008 begann: Die Website der Epilepsie-Stiftung wurde gehackt durch Posts mit blinkenden Bildern und Links, die fälschlicherweise vorgaben, hilfreich zu sein. Benutzer mit vestibulären Störungen, die Hilfe auf der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes GIF geschickt wurde: das blinkende GIF enthielt die Botschaft, _"Sie verdienen einen Anfall für Ihre Posts"_.

#### Belichtung kontrollieren, Zugang kontrollieren

Die Kontrolle des Zugangs zur Seite ist der Schlüssel, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, ihr nicht versehentlich ausgesetzt wird. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, ein Bild oder eine Animation zu haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zunächst eine Warnung über den Inhalt anzeigen und ihn dann so platzieren, dass der Benutzer sich aktiv dafür entscheiden muss, darauf zuzugreifen, z.B. durch das Klicken auf einen Button oder das Sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Überlegen Sie, Crawl-Direktiven für Suchmaschinen festzulegen, um darauf hinzuweisen, dass sie potenziell gefährliche Ressourcen nicht in ihre Suchindizes aufnehmen sollten.
Sie können dies über Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` tun.
Indem Sie die Seite nicht indexieren (`noindex`) und die Links darauf nicht folgen (`nofollow`), wird die Wahrscheinlichkeit reduziert, dass Benutzer über Suchmaschinen darauf stoßen:

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

Für nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das npm-Paket [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht das Bestimmen von Animationen _so früh wie möglich_ in einem gegebenen HTTP-Anfrage.
- Zakirt liefert ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs, stellen Sie sicher, dass Animation inaktiv bleibt, bis der Benutzer sich dafür entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Button drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs, muss der Benutzer einen Button drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie z.B. das NICHT-Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als anfänglichen Zustand. Um ein kraftvolles Beispiel zu sehen, wie dies tatsächlich funktioniert, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

{{cssxref("animation-play-state")}} ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) können verwendet werden, um die Dauer für den Startstadium der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen sowohl stoppen als auch starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungsmöglichkeiten. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, welches steuert, ob Benutzeroberflächensteuerungen zur Wiedergabe des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Das gleiche Beispiel auf Audio anwenden:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt sich im {{HTMLElement('video')}}-Element befindet, anstatt im {{HTMLElement('audio')}}-Element. Dieses Beispiel stammt aus dem Abschnitt zur [Beschreibung des stummen Medienattributs](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) im HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Ton einzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen, um mit ihnen umzugehen, stark, und aus diesem Grund gibt es keine Einheitslösung für das Problem. Dies wird weiter dadurch erschwert, dass sogar die Klassifizierung von Dateien die Handhabung dieser kompliziert. Zum Beispiel wird das .gif-Format normalerweise als Bild verstanden, aber in einigen Kreisen auch als Videoformat angesehen aufgrund seiner Fähigkeit, animiert zu werden. Für eine umfassende Auflistung von Medientypen besuchen Sie bitte die [Seite der Medien-Typen von IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie zu erkennen, sind kein beiläufiges Unterfangen. Sie könnten daran interessiert sein, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu verfolgen. Praktisch jeder Bildtyp kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Kontrolle über die Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt zu [Grundlegenden Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundbestandteil in Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Feinheiten der Implementierung von `requestAnimationFrame` im Kontext der Bildschirmaktualisierung diskutiert werden.
- **GIFs (Raster)**: Schwer zu knacken, weil die Kontrolle für ihre Animation innerhalb der GIF-Dateien selbst liegt. Für Informationen zur Geschwindigkeitskontrolle von GIFs siehe W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Artikel auf Stack Overflow zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Gilt als Variante, Video-Version von GIF. Das Format ist nicht standardisiert und muss eine "echte" Video-Datei (z.B. eine .webm-Datei) referenzieren, die an anderer Stelle existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vector)**: Die MDN-Dokumentation ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ein textbasiertes Web-Standard-Format ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Web-Standards zusammenzuarbeiten, wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) ."_ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Das bedeutet, dass das Aussehen und die Animation von SVGs durch CSS-Keyframes und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Drei-dimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Auch Text kann animiert werden

Transformationen und Übergänge können Text in einem div animieren und Schaden verursachen. Bewegender Text kann aus den gleichen Gründen, aus denen sich bewegende Bilder dies tun, Anfälle hervorrufen, daher sollten Sie vermeiden, Ihren Text zu animieren. Es ist generell eine gute Idee, sich bewegenden Text zu vermeiden, da viele Screenreader bewegenden Text nicht lesen können, und es ist eine schlechte Benutzererfahrung, selbst für diejenigen ohne Seh- oder vestibuläre Probleme.

### CSS für Animation

Im Stylesheet oder im {{HTMLElement('style')}}-Element können viele Optionen zusammenkommen, um dem Benutzer ein kraftvolles Erlebnis zu bieten. Wir haben bereits früher in diesem Dokument die `animation`-Eigenschaft erwähnt. Sie ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dieser kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation erfolgen soll.
- `animation-timing-function`

Die Animationseigenschaft ist von sich aus bereits mächtig, aber in Kombination mit anderen Eigenschaften und Abfragen, wie `prefers-reduced-motion`, kann ein kraftvolles Set von Optionen für den Benutzer eingerichtet werden. Das Setzen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer, anstatt sie auf `animation: none` und `transition: none` zu setzen, bietet eine Absicherung, um Probleme für den Fall zu vermeiden, dass eine Abhängigkeit besteht, dass die Animation laufen soll.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Die meisten JavaScript-Codes, die auf HTML-Videos angewendet werden, gelten auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergaberate sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist standardmäßig und gilt als normale Geschwindigkeit; ein Wert von 0.5 ist die halbe Geschwindigkeit, ein Wert von 2.0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Das Wiedergaberaten-Attribut kann so festgelegt werden: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite über [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet folgendes Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Einer der einfachsten Wege ist es, mit einem bereits existierenden Bild zu beginnen, es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen sind – und Größen – in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele dafür, unter Verwendung mehrerer Bildquellen für die Sonne, Erde und den Mond und indem verschiedene Canvas-Methoden verwendet werden, um die Geschwindigkeit und Animation der Erde, während sie um die Sonne kreist und des Mondes, während er um die Erde kreist, zu steuern. Verwenden Sie die verfügbare Codepen mit diesem Tutorial, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Anpassungen vorgenommen werden.

#### Wenn Sie unbedingt eine blinkende Animation verwenden müssen

Stellen Sie sicher, dass es eine Steuerung darauf gibt. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zum ersten Mal sieht, und dass ein Benutzer sich aktiv dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerungen für den Benutzer verfügbar hat, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb der GIF-Datei selbst kontrolliert. Das Konvertieren eines animierten GIFs in ein Video ermöglicht es, Steuerungen auf die Animation zu setzen und gibt dem Benutzer Mitsprache. Es gibt viele kostenlose Online-Konverter, die zum Einsatz kommen können, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Erwartungen der Benutzer setzen

Geben Sie den Benutzern eine Vorwarnung darüber, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.2 Erfolgs-Kriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt blinken müssen, halten Sie es klein. Generell sollte die Größe des Blitzes auf einen Bereich von etwa 341 x 256 Pixel oder weniger begrenzt werden. Diese Pixeldimensionen setzen voraus, dass ein Betrachter in typischem Abstand zum Bildschirm ist. Wie bereits erwähnt, könnte sich diese Größe als zu groß erweisen, wenn das Bild aus nächster Nähe betrachtet wird, etwa in einem VR-Headset. WebVR ist eine offene Spezifikation, die ein VR-Erlebnis im Browser ermöglicht. WebVR kann auf dem Handy, Computer oder Headset erlebt werden.

Wenn Sie ein Spiel oder eine VR entwickeln, die eine Augenmaske verwendet, **oder durch eine Augenmaske genutzt werden KANN**, wie im Fall von Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild den Augen eines Benutzers sehr nahe ist.

#### Reduzieren Sie den Kontrast

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund ist (technisch genannt _Luftherstellungsverhältnis_, laut W3.org's Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter ist es, solche Inhalte zu lesen. Nutzer mit Sehschwächen sind besonders dankbar für die Bemühungen, einen hohen Kontrast zwischen Text und Hintergrund sicherzustellen. Wenn es sich jedoch um animierte Inhalte handelt, ist **_reduzierender_** Kontrast tatsächlich eine Möglichkeit, die Möglichkeit zu verringern, dass die animierten Inhalte Anfälle verursachen. Reduzieren Sie den Kontrast, wenn Sie drei Blitze innerhalb einer Sekunde erkennen.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder im Web veröffentlicht wird. Für Videos und animierte GIFs bieten die Adobe Suite von Produkten eine hervorragende Ressource für traditionelle Bilder. Auch für Bilder ist ein Online-Tool auf pinetools.com verfügbar: [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie beispielsweise mit einem, das ein geringeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um Kontraste dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe in dem Beispiel im **RGB**-Farbraum beschrieben wird.

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

#### Vermeiden Sie vollständig gesättigte Rottöne für blinkende Inhalte

Wie bereits früher in diesem Dokument erwähnt, hat die Epilepsie-Stiftung von Amerika im August 2004 einen Workshop einberufen, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Einer ihrer Ergebnisse war die Erkenntnis, dass _"Ein Blitz eine potenzielle Gefahr darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2, bei einer Frequenz von wenigstens 3 Hz auftritt und einen soliden Sehwinkel von wenigstens 0.006 Steradianten (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot ist ebenfalls als Risiko zu betrachten."_ Sie stellen auch fest dasselbe im Konsens: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen."_

### Alternative CSS-Stile bereitstellen

Mit der Erkenntnis, dass viele Animationen und Blitze durch CSS-Methoden gesteuert werden können, ist es wichtig, Wege zu erkunden, um alternative Optionen für Benutzer verfügbar zu machen und die Kontrolle dieser Optionen bequem und sichtbar zu gestalten.

#### Alternative Stylesheets

Moderne Browser werden die alternativen CSS anzeige, die in alternativen Stylesheets verfügbar sind, wenn Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer durch das Ansicht-Menü gehen, in anderen Fällen werden sie in den Einstellungen manifestiert, manchmal beides. Nicht alle Benutzer wissen, dass sie diese Optionen über den Browser oder Einstellungen suchen sollen, daher lohnt es sich, die alte Methode zu verwenden, mit offensichtlichen Schaltflächen oder Links zum Ändern des Stils, damit Benutzer sie sehen können. Dies wird nicht mit der Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, oder der Fähigkeit des Benutzers, Präferenzen in den Einstellungen zu setzen, in Konflikt stehen oder sie überschreiben.

Es ist wichtig, zu wissen, dass bestimmte Benutzer, beispielsweise diejenigen, die auf Spracherkennungssysteme angewiesen sind, oft auf Legacy-Schaltflächen und -Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu verwenden oder Touch-Ereignisse auf mobilen Geräten zu nutzen.

Gängige Möglichkeiten, alternative Stylesheets in Ihre HTML-Dokumente einzubeziehen, verwenden das {{HTMLElement('link')}}-Element und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}} Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets einzubinden, aber es wird nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) bereiten Sie es so vor, dass Benutzer ihre Browser verwenden können, um alternative Stile zu auswählen.

### Dynamisches Style-Switching

Ein Problem bei der Abhängigkeit vom Browser zur Anzeige alternativer Stile ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder sie sind aufgrund ihrer Behinderung nicht in der Lage dazu. Schaltflächen oder Links machen es offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt viele Möglichkeiten, Toggle-Schaltflächen hinzuzufügen, um dem Benutzer das Umschalten zu den verschiedenen Stylesheets zu erlauben. Dabei sind jedoch nicht die alternativen Stylesheets die einzige Option. Eine andere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), \_"wo immer möglich, ist es wirklich am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) zu manipulieren, da das endgültige Erscheinungsbild aller Stilhaken in einem einzigen Stylesheet gesteuert werden kann." Ein hervorragendes Beispiel dafür, wie man das macht, ist die W3C-Seite, ["C29: Benutzen eines Style-Switchers um eine konforme Alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Alternative Nur-Text-Alternativen

Ein separates alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drastische Lösung; aber es ist eine, die manchmal notwendig ist für Lehrer und andere Beamte, die Menschen mit extremen Sensitivitäten bedienen müssen. Diese Beamte können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier sehen Sie, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Medienabfragen mit {{HTMLElement('style')}}

Beim Einrichten von Medienabfragen ermöglichen Sie Benutzern die Kontrolle; diese Steuerungen sind vom Browser oder im Betriebssystem aus zugänglich. Siehe das MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel zu sehen, wie man den Code `prefers-reduced-motion` verwendet, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), oder sehen Sie das Beispiel unten aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Die Unterstützung ist im Entstehen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Ein leistungsstarkes Tool steht Entwicklern über Window.matchMedia() zur Verfügung. Eine hervorragende Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medien-Update-Feature

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger flackert er. Die überwiegende Mehrheit der modernen Technologie aktualisiert mit einer Frequenz, die keine Probleme mit Photosensitivität verursacht. Nicht jeder ist jedoch wohlhabend genug, um sich die neueste Technologie leisten zu können: Ältere oder leistungsschwache Computer können niedrige Aktualisierungsraten haben. [AbilityNets Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), liefern interessante Punkte zu den Aktualisierungsraten in Hz:

- _"Dieser Effekt ist erkennbar und dokumentiert bis zu 70 Hz."_
- _"Diese Studien würden darauf hindeuten, dass man Aktualisierungsraten unter 70 Hz meiden und eine Rate verwenden sollte, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung des Update-Features, die in Kombination mit der Animationsdauer oder Übergangsdauer verwendet wird, um eine Rate zu erreichen, die dem menschlichen Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken kümmern sich um das Aktualisierungsraten-Problem. Der CSS unten ist von dem CSS-Tricks Artikel, [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/Reference/At-rules/@media/update) Medienfeature wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild des Inhalts nach dem Rendern zu ändern. Es hat die Werte "none", "slow" und "fast".

## Entwicklung & Experimentelle Funktionen

### Medien-Abfragen Level 5

EnvironmentMQ (Geplant in Medienabfragen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Ebenen in Bezug auf eine Messung in Lux zu definieren, da Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen erwähnen auch den Unterschied in der Technologie, wie e-Ink, die in hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die es nicht tun.
- `environment-blending`
  - : Aus dem W3C-Entwurfsdokument, Medien-Abfragen Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Eigenschaften der Anzeige des Benutzers abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen und/oder das Layout je nach Anzeigetechnologie anzupassen, um die Attraktivität oder Lesbarkeit zu erhöhen."_

#### Benutzerpräferenz-Medienfeatures (Geplant in Medienabfragen Level 5)

[Benutzerpräferenz-Medienfeatures](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um die Kontrolle der Benutzer über Medien zu ermöglichen. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzerpräferenz-Medienfeatures](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion gibt an, ob der Inhalt normal dargestellt wird oder ob Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf der Seite und überschreibt die vom Autor gewählten Farben. Aus dem W3C-Entwurfdokument, Medien-Abfragen Level 5 Abschnitt zu forced-colors: \_"Das forced-colors-Medienfeature wird verwendet, um zu erkennen, ob der Benutzeragent einen [erzwungenen Farbmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode enabled hat, bei dem eine vom Benutzer gewählte beschränkte Farbpalette auf der Seite erzwungen wird. Der Benutzer wird auf diese Fähigkeit aufmerksam gemacht werden müssen, und sie wird sich mit dem passenden Wert für die Abfrage prefer-color-scheme vertragen müssen.
- `light-level`
  - : Aus dem W3C-Entwurfdokument, Medien-Abfragen Level 5 Abschnitt zu light-level: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfeature wird verwendet, um Informationen über das Umgebungslichtniveau abzufragen, in dem das Gerät verwendet wird, damit der Autor den Stil des Dokuments entsprechend anpassen kann."_ Dies wird ein Segen für diejenigen sein, die Probleme mit den motorischen Fähigkeiten haben, oder für einige mit kognitiven Schwierigkeiten, die nicht den richtigen "Button" finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem W3C-Entwurfdokument, Medienabfragen Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): _"Das `prefers-contrast` Medienfeature wird verwendet, um zu erkennen, ob der User das System um eine Erhöhung oder Verringerung der Kontrastmenge zwischen benachbarten Farben angefordert hat. Viele Benutzer haben Schwierigkeiten, Text zu lesen, der nur einen kleinen Unterschied im Kontrast zum Texthintergrund aufweist und einen größeren Kontrast bevorzugen würde."_ Manchmal kann es tatsächlich ein solches Ding wie zu viel Kontrast geben; ein Halo-Effekt um Text kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verringern. Das Setzen der Kontrastmenge in die Benutzerkontrolle ist ein klares Geschenk für die Zugänglichkeit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 von den CSSWG.org Entwürfen integriert mit dem [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), definiert in HTML. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList) für weitere Informationen.

#### Personalisierung, Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft wird von [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation) übernommen.

**Anforderung:** Einige Benutzer können keinen nicht wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. verstehen. Die `literal` Eigenschaft soll Text oder Bilder als nicht-wörtliches kennzeichnen und ermöglicht es dem Autor, nicht-wörtlichen Text und Bildern den Benutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- {{cssxref("&lt;color&gt;")}}
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Tutorial: Beschreibung von Farben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/undeutliche Größenbestimmungen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen sind von Geburt an besonders empfindlich gegenüber flackerndem Licht oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettmustern. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallsartige Entladungen, wenn es dieser Art von visueller Stimulation ausgesetzt ist."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch flackerndes oder blinkendes Licht ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht- und musterinduzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Zugänglichkeit Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Ausrüstungen — Farbmaßnahme und -management — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Analysetool für photosensitive Epilepsie

Zusammen mit dem Harding-Tool wird allgemein anerkannt, dass es sich um einen der beiden "Goldstandards" zur Analyse von Lichtblitzen handelt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erläuterung](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder Niedrigere Schwelle Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis der WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Verweisen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder Niedrigere Schwelle Erfolgskriterium 2.3.1 verstehen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis der WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
