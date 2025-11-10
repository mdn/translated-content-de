---
title: Barrierefreiheit im Web für Anfälle und physische Reaktionen
short-title: Anfälle und physische Reaktionen verhindern
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel führt in Konzepte ein, wie Webinhalte zugänglich für Personen mit vestibulären Störungen gemacht werden können, und wie man messen und verhindern kann, dass Inhalte Anfälle und/oder andere physische Reaktionen auslösen.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art von „Reflexepilepsie“ – Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von photosensitiver Epilepsie werden Anfälle speziell durch Blitzlichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo angemerkt wird: „_Bestimmte visuelle Bilder können selbst in Abwesenheit von Bewegung oder Flackern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen._“ Die Epilepsie-Stiftung spricht in ihrem Artikel ["Licht ins Dunkel über Photosensitivität, eine von Epilepsies komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: „_Statische oder sich bewegende Muster aus erkennbaren hellen und dunklen Streifen haben dieselbe Wirkung wie Blitzlichter aufgrund der Abwechslung von dunklen und hellen Bereichen._“ Die Arbeitsgruppe der Epilepsie-Stiftung von Amerika ist in der Lage, das Problem ein wenig "zu quantifizieren": _„Ein Muster mit dem Potenzial Anfälle auszulösen, enthält deutlich erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in irgendeiner Orientierung umfassen“_. Neben Streifen sind auch karierte Muster laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) bekannt dafür, photosensitive Anfälle zu verursachen.

Obwohl statische Bilder potenzielle Auslöser sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind Blitz/Blitzlichter. Dr. Selim Benbadis von USFs Comprehensive Epilepsy Program merkt an: „_Das Einzige, was wirklich dokumentiert ist, sind Blitzlichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Dennoch sind nur wenige Arten von Epilepsien photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht._“ Zusätzlich zu durch Photosensitivität verursachten Anfällen kann das Anhören bestimmter Musikstücke ebenfalls musikogene Anfälle auslösen, obwohl diese Art von Anfällen viel seltener zu sein scheinen. Für eine gute Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [Musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsie-Stiftung fest: „_Ein Anfall ist ein Ereignis und Epilepsie ist die Krankheit, die mit wiederkehrenden nicht provozierten Anfällen einhergeht._“ Laut der Seite der Epilepsie-Stiftung ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), ist „_Der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Er ist nicht häufig, aber es ist ein sehr reales Problem und die Menschen müssen sich seines Risikos bewusst sein._“

Der Punkt ist, dass Anfälle definitiv tödlich sein können und es auch sind, und Entwickler*innen und Designer*innen sind unglaublich wichtig, um das Web zu einem sichereren Ort für diejenigen zu machen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst diejenigen, die „nur“ lähmend sind, können so schwerwiegend sein, dass sie die Benutzer*innen arbeitsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass die Benutzer*innen nicht in der Lage sind, zu funktionieren. Der Artikel der Epilepsie-Stiftung, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle auslösen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund von Flackern oder rollenden Bildern.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder alternierenden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien strömt.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

In demselben Artikel wird fortgefahren, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass es die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt: „_Personen mit photosensitiven Krampfanfällen können durch Inhalte, die mit bestimmten Frequenzen mehr als einige Male blitzen, Anfälle ausgelöst werden."_ und fährt fort sehr spezifisch zu bemerken: „_Personen sind sogar empfindlicher auf rotes Blitzen als auf andere Farben, daher gibt es einen speziellen Test für gesättigtes rotes Blitzen._"

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es seine Farbe und Helligkeit mit hoher Frequenz ändert, was einfach mit JavaScript gemacht werden kann, kann echten Schaden anrichten. Und, Flackern kann überall auftreten. Zum Beispiel können „Spinner“, die häufig verwendet werden, um anzuzeigen, dass Seiten laden, leicht „flackern“, während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel merkt die Seite des Trace Research & Development Centers [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) an, dass „_Photosensitive Anfälle durch bestimmte Arten von Flackern in Web- oder Computerinhalten ausgelöst werden können, einschließlich Mouse-Over, bei denen große Bereiche des Bildschirms schnell ein- und ausblenden_."

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen möglichen Erkrankungen verbunden sind und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen auftritt). Anfälle sind jedoch nicht die einzige mögliche negative physische Reaktion auf Blitze, Flackern, Blinken und andere derartige Reize. Im Jahr 1997 zeigte ein japanischer Cartoon eine animierte „Virusbombe“. Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten an Übelkeit, Schüttelfrost und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgelisteten physischen Störungen sind alle mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl „Blitzen“ und „Blinken“ manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während sich „Blitzen“ auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsie-Stiftung ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) bemerkt, dass „_generell Blitzlichter zwischen Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, wird Konsens darüber empfohlen, dass photosensitive Personen nicht mehr als drei Blitzen pro Sekunde ausgesetzt werden sollten_“. Bei einigen Menschen jedoch können Blitze/Blinken Symptome bei weniger als 3 Hz hervorrufen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinkungen schlecht sind. NASA weist in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) darauf hin, dass Blinken und Blitzen starke Werkzeuge zur Aufmerksamkeitserzeugung sein können – wie es bei Warnknöpfen erforderlich ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Schaltflächen auch davor, dass sie sparsam und mit Vorsicht verwendet werden müssen. In Bezug auf Webdesign müssen Systeme, die Mitarbeiter eines Unternehmens vor Gefahren warnen, indem sie den Bildschirm „entführen“, um eine blinkende Warnung vor dem Notfall zu geben, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blitzen.

### Blitzen und Flackern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) „_ist ein Blitz ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradiant einnimmt (ca. 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen)_.“

Wie weit ist eine typische Betrachtungsentfernung? Die Empfehlung, die für eine typische Betrachtungsentfernung berücksichtigt wurde, war zur Zeit des Schreibens "_der Bereich kann als Anwendung auf einen Bereich von >25 % der Fläche eines Fernsehbildschirms betrachtet werden, wobei Standardbetrachtungsabstände von ≥2 m (ca. 9 Fuß) angenommen werden_"\_. Seit damals hat sich viel verändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) bemerkt, dass „_die Komplexitäten, die dem Gehirndynamik zugrunde liegen, durch bestimmte Farbkombinationen mehr moduliert werden könnten als andere; beispielsweise verursacht ein rot-blau flackernder Reiz eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz_“.

### Blitzen & rotes Blitzen

[WCAG 2.3.1 generelle Blitze und rote Blitz-Schwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) werden wie folgt definiert:

- Ein **generelles Blitzen** wird als ein Paar entgegengesetzter Änderungen in [relativer Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtdichte definiert, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt und wo „ein Paar entgegengesetzter Änderungen“ ein Anstieg gefolgt von einem Abfall oder ein Abfall gefolgt von einem Anstieg ist;
- Ein **rotes Blitzen** wird als jedes Paar entgegengesetzter Übergänge beschrieben, die einen gesättigten Rotton beinhalten.

Diese Standards basieren auf früherer Forschung. 2004 veranstaltete die Epilepsie-Stiftung von Amerika einen Workshop, der einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu photosensitiven Anfällen entwickelte und feststellte: „_Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradiant einnimmt (ca. 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen)._ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt allein ein Risiko dar: „_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko betrachtet._“

### Größe und Entfernung

#### Wie groß? Es kommt darauf an

„Relative“ Größe und Entfernung spielen beide eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) „_nimmt die kombinierte Fläche von Blitzen, die gleichzeitig auftreten, nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel großen Rechtecks überall auf dem angezeigten Bildschirm ein, wenn die Inhalte bei 1024 x 768 Pixeln betrachtet werden._“

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, wird im Artikel, der sich mit WCAG 2.3.1 befasst, weiter ausgeführt: „_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung zur Bewertung verwendet. Der 341 x 256 Pixel große Block stellt ein 10-Grad-Sichtfeld in typischer Betrachtungsentfernung dar. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am anfälligsten für visuelle Reize sind.)_“

Diese Pixel-Flächen-Verhältnisberechnung berücksichtigt die relative Größe, aber auch die Entfernung spielt eine Rolle.

Entfernung ist wichtig, weil sie das gesamte Sichtfeld beeinflusst. Wenn Betrachter eine Augenmaske beim Spielen tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf Telefon, Computer oder Headset erlebt werden kann. Die Sorge um blinkende Bilder in einer Augenmaske nimmt zu, da die Maske den Augen sehr nahe ist.

Forschungen deuten allgemein darauf hin, dass die Verwendung von VR tatsächlich sicherer sein kann als der normale Bildschirmkonsum aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen, „_Die bisher begrenzten verfügbaren Daten wecken keine besonderen Bedenken hinsichtlich Anfällen in Bezug auf VR-Technologie, obwohl sich diese Sichtweise mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich starker Blitze, provokativer Muster oder Farbänderungen, würden erwartet, Anfälle auszulösen, genau wie sie es in der realen Welt tun._“

(Beachten Sie, dass einige Benutzer mit blinkenden Cursors nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen können, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastierende dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsie-Stiftung von Amerika listet auf, wie viele hell-dunkel Streifenpaare wahrscheinlich Anfälle provozieren und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist acht Linien das maximal erlaubte, aber wenn es wellt, nicht mehr als fünf Linien.

Parallaxeneffekte können Desorientierung verursachen. Verwenden Sie Parallaxeneffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

„Ein Muster mit dem Potenzial Anfälle auszulösen enthält deutlich erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in jeder Orientierung enthalten. Wenn die hell-dunklen Streifen eines jeden Musters gemeinsam am Auge aus der minimal erwarteten Betrachtungsdistanz einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkel Streifenpaare enthalten, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung treibt, nicht mehr als acht Streifen.“

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren Bereich zu einem größeren wechselt, ebenso wie die Erhöhung des Kontrasts und das Erhöhen der räumlichen Frequenz von einer niedrigen zu einer mittleren. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass das Wechseln von grundlegenden Ausrichtungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel das Karo, das entsteht, wenn ein Satz Streifen auf, aber senkrecht zum ursprünglichen Satz gelegt wird) das Gehirn beeinflusst.

### Farben

Es ist wichtig, Farben zu verstehen, wenn es um Barrierefreiheit geht. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Barrierefreiheit im Web und Barrierefreiheit allgemein.

Wie sich die Farbe auf ihren Hintergrund bezieht – normalerweise in Bezug auf Kontrast – und wie drastisch sich die Farbe Bild zu Bild in der Animation ändert, ist wichtig. Weitere Informationen dazu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen durch die Farbe Rot beeinflusst. Es wurde sogar bei Tieren festgestellt, dass sie das Verhalten beeinflusst.

- **Test zur Desaturierung von Rot:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Ophthalmologen einen Test damit entwickelt haben. Der Rot-Desaturierungstest bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen, die an einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Saturiertes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Tatsache, dass eine rote Umgebung die kognitive Funktion von Personen mit traumatischer Hirnverletzung beeinflusst, scheint Farbe im roten Spektrum besondere Bedenken und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden bemerkte bei Tests des Photosensitive Epilepsy Analysis Tools, dass die Anfallraten viel höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blitzen sind. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht sicher vor Anfällen

Beachten Sie, dass die Farbe **#990000** als „websicher“ gilt. Das bedeutet _nicht_, dass sie „sicher vor der Auslösung von Anfällen“ ist; es bedeutet nur, dass die Farbe „sicher“ durch die verwendete Technologie auf Bildschirmen akkurat wiedergegeben werden kann.

## Messen zur Verhinderung von Schaden

Das Potential für Schaden zu messen ist ein guter Anfangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Helligkeit, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet eine Anleitung zur Bewertung von Inhalten.

Im August 2004 hielt die Epilepsie-Stiftung von Amerika einen Workshop ab, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Die folgende, fachkundige und autoritative Information stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradiant einnimmt (ca. 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Orientierung aufweisen. Wenn die hell-dunkel Streifen eines jeden Musters gemeinsam am Auge aus der minimal erwarteten Betrachtungsdistanz einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung treibt, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden im Fall von festem Medium, zum Beispiel einer vorab aufgezeichneten TV-Sendung, die Bild-für-Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das „cd/m<sup>2</sup>“ bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich dies für den Webentwickler auf Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedia's Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug auf das, was wir als Entwickler kennen: auf einem Anzeigegerät und im RGB-Bereich. Dies ist hilfreich, weil es einen spezifischen Standard gibt, der auf Monitoren, Druckern und im Internet zu verwenden ist, und es ist der **sRGB** (standard Red Green Blue).

> Als Maß für das ausgestrahlte Licht pro Einheit Fläche wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts zu spezifizieren. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop- [LCDs](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-definition televisions](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Erkenntnis ist, dass der **sRGB** Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er leicht vom häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Art von Webinhalten zu quantifizieren und zu messen, die als Auslöser für Anfälle dienen können. Das gesagt, kann nicht vergessen werden, dass Farbe genauso sehr über die menschliche Wahrnehmung im Gehirn handelt wie über die Messung von Licht, das von einem Computerbildschirm kommt.

Neben den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es wird Variationen und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel merkt Tom Jewett, Dozent Emeritus für Informatik an der Cal State University Long Beach, Folgendes an in Bezug auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) „_… Der Unterschied zwischen den Ebenen der Helligkeit ist nicht wirklich linear, wie es die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren._“

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliche Sehkraft und menschliche Wahrnehmung sind es nicht. Untersuchung und Diskussion laufen weiter, wie die maschinelle Messung von Licht, das von einem Computerbildschirm durch die Entfernung bis zum menschlichen Auge, gefiltert durch menschliches Sehen, und dann durch das menschliche Gehirn manipuliert, in Beziehung gesetzt werden kann.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsie-Stiftung, ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), „_sind Kinder und Jugendliche anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf.“ Der Artikel folgt mit dieser Statistik: „Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulation_“.

**Benutzertests sind sehr problematisch**. Niemand will natürlich eine anfällige Person einem Benutzertest unterziehen. Es ist gefährlich. Zu diesem Punkt ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Nutzung von Tools, die von Experten auf dem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten an der Entwicklung des Tools gearbeitet haben. Zum Zeitpunkt dieses Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) entwickelt und sie haben sich darum bemüht, es **_kostenlos_** zum Herunterladen verfügbar zu machen. PEAT kann Autoren dabei helfen, zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle auslösen. Bitte beachten Sie die Einschränkungen bei der Verwendung: **_Die Verwendung von PEAT zur Bewertung von Materialien, die kommerziell für Fernsehausstrahlungen, Filme, Home Entertainment oder Gaming-Industrien produziert wurden, ist verboten. Verwenden Sie für kommerzielle Zwecke den Harding-Test oder andere Tools._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehanbieter den Harding-Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehanstalten in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, sodass die Gruppe von [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten anbietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheit-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer*innen und Entwickler*innen besteht unsere Verantwortung darin, weder absichtlich noch unabsichtlich Schaden zuzufügen. Wenn wir etwas einbeziehen müssen, das potenziell Schaden verursachen kann, ist es entscheidend, zu verhindern, dass Benutzer das schädliche Material versehentlich begegnen, und Möglichkeiten bereitzustellen, wie Benutzer Animationen verhindern und steuern können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG Guideline 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: „_Gestalten Sie Inhalte nicht auf eine Weise, die Anfälle oder physische Reaktionen verursachen kann_“. Schließen Sie keine Animationen ein, die ein Benutzer nicht steuern kann. Entwerfen Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie ein Gif oder Png mit Blitzen einfügen müssen, nehmen Sie es stattdessen in ein Videoformat auf, damit den Benutzern Steuerungsmöglichkeiten zur Verfügung stehen. Geben Sie den Benutzern die Möglichkeit, es zu vermeiden, auszuschalten oder es weniger schädlich zu machen.

#### Verstehen Sie Böswilligkeit

Fragen Sie sich als Entwickler*in oder Designer*in, ob blitzende Inhalte wirklich auf Ihrer Webseite erforderlich sind. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es diejenigen, die möglicherweise schädliche Inhalte von Ihrer Seite herunterladen und sie als Waffe einsetzen. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu verwenden, um physischen Schaden durch Animationen zu verursachen, am Samstag, dem 22. März 2008, begann: Die Website der Epilepsie-Stiftung wurde durch Beiträge mit blinkenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Benutzer\*innen mit vestibulären Störungen, die Hilfe auf der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, im Dezember 2016 einen Anfall erlitt, nachdem ihm ein animiertes Gif gesendet worden war: Das blinkende Gif trug die Botschaft: „_Sie verdienen einen Anfall für Ihre Beiträge_“.

#### Kontrolle der Exposition, Kontrolle des Zugangs

Die Kontrolle der Exposition zur Seite ist der Schlüssel, um sicherzustellen, dass jemand anfällig für Anfälle nicht versehentlich darauf zugreifen kann. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die möglicherweise Anfälle auslöst, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und es dann an einem Ort platzieren, an dem der Benutzer aktivieren muss, z. B. durch Klicken auf eine Schaltfläche oder sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie, Crawl-Direktiven für Suchmaschinen festzulegen, um darauf hinzuweisen, dass sie potenziell schädliche Ressourcen nicht in ihren Suchindizes einschließen sollten. Sie können dies mit Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` tun. Indem die Seite nicht indexiert wird (`noindex`) und Links auf der Seite nicht verfolgt werden (`nofollow`), wird die Wahrscheinlichkeit reduziert, dass Benutzer versehentlich darauf stoßen:

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

Für nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Antwortheader festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich. Animierte GIFs verdienen jedoch besondere Erwähnung wegen ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sie zu aktivieren entscheidet. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z. B. das NICHT Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein leistungsstarkes Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa nutzt den `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/Reference/Properties/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) können verwendet werden, um die Dauer auf null für die Anfangsphase der Animation einzustellen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen sowohl stoppen als auch starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute spielt automatisch nicht ab und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut dem Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Stellen Sie programmgesteuert sicher, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls` Eigenschaft spiegelt das `controls` HTML-Attribut wider, das steuert, ob Benutzeroberflächenelemente zur Steuerung des Mediums angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, auf die der Benutzer zugreifen kann, fügen Sie sicher das Wort „controls“ zum HTML-Video- und Audioelement hinzu.

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

Anwendung dieses Beispiels auf Audio:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, obwohl der Inhalt innerhalb des {{HTMLElement('video')}}-Elements und nicht innerhalb des {{HTMLElement('audio')}}-Elements ist. Dieses Beispiel stammt aus dem Abschnitt zur Beschreibung des [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer es entsperrt.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Handhabung erheblich, und aus diesem Grund gibt es nicht eine universell einsetzbare Lösung für das Problem. Dies wird weiter kompliziert durch die Tatsache, dass selbst wie Dateien klassifiziert werden, dazu führt, wie sie gehandhabt werden sollten. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, aber auch in einigen Kreisen als Videoformat betrachtet, weil es animiert werden kann. Für eine umfassende Auflistung von Medientypen, besuchen Sie bitte [IANA.org's Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie zu entdecken, sind keine zufällige Übung. Sie könnten daran interessiert sein, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu verfolgen. Nahezu jede Art von Bild kann animiert sein; wie sie animiert werden, variiert, und daher variiert auch die Kontrollanimation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt zu [grundlegenden Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundbestandteil bei Canvas-Animationen, es ist jedoch auch interessant zu sehen, wie es mit Bildwiederholungsraten interagiert. Siehe den Artikel: ["Steuerung der fps mit requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie die Besonderheiten der Implementierung von `requestAnimationFrame` auf dem Hintergrund des Bildschirmrefresh diskutieren.
- **GIFs (Raster)**: Schwierig zu knacken, weil die Steuerung ihrer Animation sich innerhalb der Gif-Dateien selbst befindet. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie bei W3C's ["G152: Einstellung von animierten gif-Bildern, um nach n Zyklen (innerhalb von 5 Sekunden) zu blinken"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Artikel zu diesem Thema bei Stack Overflow lautet: ["Kann man GIF-Animationen mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante betrachtet, video-version von GIF. Das Format ist nicht standardisiert und muss auf eine „echte“ Videodatei (z. B. eine .webm-Datei) verweisen, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert sein.
- **SVGs (Vektor)**: Das MDN Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass „_SVG ein textbasiertes offenes Web-Standard ist. Es wurde ausdrücklich entwickelt, um mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten._“ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Dies bedeutet, dass das Erscheinungsbild und die Animation von SVGs durch CSS-Schlüsselbilder und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwendungen von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegender Text kann Anfälle auf dieselben Gründe heraus induzieren, die bewegte Bilder tun, also vermeiden Sie es, Ihren Text zu animieren. Es ist ohnehin eine gute Idee, bewegende Texte zu vermeiden, da viele Bildschirmleseplatten nicht in der Lage sind, sie zu lesen und es ist eine schlechte Benutzererfahrung auch für diejenigen ohne Sehprobleme oder vestibuläre Probleme.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammenkommen, um dem Benutzer ein kraftvolles Erlebnis zu bieten. Wir haben das `animation`-Attribut bereits früher in diesem Dokument erwähnt. Es ist eigentlich ein Shorthand für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; das ist die Dauer, die eine Animation benötigt, um einen Zyklus zu vervollständigen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Das Animationselement ist schon allein mächtig, kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann eine leistungsstarke Reihe von Optionen für den Benutzer eingerichtet werden. Die Einstellung der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer, anstatt sie auf `animation: none` und `transition: none` zu setzen, bietet eine Sicherheitsvorkehrung, um Probleme zu vermeiden, falls es eine Abhängigkeit von der Animation gibt, um gestartet zu werden.

### JavaScript Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der meiste JavaScript-Code, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzerkontrollen für die Abspielgeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und wird als normale Geschwindigkeit angesehen; ein Wert von 0.5 ist halbe Geschwindigkeit, ein Wert von 2.0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten ist es, mit einem bereits existierenden Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, Sie können GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden, solange sie in Ihrer Umgebung erlaubte Dateitypen – und -größen – sind. SVGs sind häufig nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet hervorragende Beispiele dafür, mit mehreren Bildquellen für die Sonne, die Erde und den Mond, und unter Verwendung mehrerer Canvas-Methoden, um die Geschwindigkeit und Animation der Erde zu steuern, während sie um die Sonne, und des Mondes, während er um die Erde kreist. Verwenden Sie den verfügbaren Codepen zu diesem Tutorial, um `ctx.rotate` im Code anzupassen, um zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, positiv eine blinkende Animation verwenden müssen…

Stellen Sie sicher, dass sie eine Steuerung darauf hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Zuschauer sie das erste Mal sieht und dass ein Benutzer sie aktivieren muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerungen für den Benutzer bereitstellt, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Durch die Umwandlung eines animierten gifs in ein Video werden Steuerungen auf die Animation gelegt und dem Benutzer wird Eigenbestimmung gegeben. Es gibt viele kostenlose Online-Konverter, die verfügbar sind, wie zum Beispiel [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Setzen Sie Benutzererwartungen

Geben Sie den Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.2 ErfolgsKriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut, positiv nicht umhin können, zu blitzen, halten Sie es klein. Allgemein gesprochen, begrenzen Sie die Größe des Blitzes auf ein Gebiet von annähernd 341 mal 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Zuschauer in typischer Entfernung vom Bildschirm ist. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus einer nahen Entfernung angesehen wird, wie z.B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR designen, das eine Augenmaske verwendet, **oder KANN mit einer Augenmaske verwendet werden**, wie zum Beispiel in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, da das Bild viel näher an den Augen eines Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund ist (technisch als _Lichttönigkeitskontrastverhältnis_ bezeichnet, laut W3.org's Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist es, solche Inhalte zu lesen. Benutzer\*innen mit Sehschwäche sind besonders dankbar für Bemühungen, den hohen Kontrast von Text zu ihrem Hintergrund zu gewährleisten. Wenn die Inhalte jedoch animiert sind, ist die tatsächliche **Reduzierung** des Kontrasts eine Möglichkeit, die Wahrscheinlichkeit zu reduzieren, dass die animierten Inhalte Anfälle verursachen. Reduzieren Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren der Farben ist.

Es ist am besten, wenn Sie den Kontrast anpassen, bevor es hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder, ein Online-Tool ist pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image) verfügbar. Wenn Sie animierte GIFs erstellen möchten, beginnen Sie beispielsweise mit einem, das ein geringeres Kontrastverhältnis aufweist.

JavaScript ist auch eine Option zur dynamischen Reduktion des Kontrasts. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

**HTML-Inhalt [(link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalt [(link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#javascript_2)**

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

Wie bereits früher in diesem Dokument erwähnt, veranstaltete die Epilepsie-Stiftung von Amerika im August 2004 einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Zu ihren Ergebnissen gehörte die Erkenntnis, dass „_Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Lichtstärke von mindestens 20 cd/m2, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradiant einnimmt (ca. 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen._“ Sie merken auch in diesem Konsens: „_Unabhängig von der Lichtstärke wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko betrachtet._“

### Bieten Sie alternative CSS-Stile an

Mit dem Verständnis, dass viel Animation und Blinken durch CSS-Methoden gesteuert werden können, ist es wichtig, Möglichkeiten zu erkunden, um alternative Optionen den Benutzern zur Verfügung zu stellen und um die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser werden die verfügbaren alternativen CSS in alternativen Stylesheets anzeigen, wenn die Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer durch das Ansichtsmenü navigieren, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, in den Browsern nach diesen Optionen zu suchen, deshalb lohnt es sich zu überlegen, ob man es auf die altmodische Weise macht, mit offensichtlichen Tasten oder Links, um den Stil zu ändern, so dass die Benutzer sie sehen können. Dies wird weder die Fähigkeit des Browsers beeinträchtigen, alternative Stylesheets zu lesen, noch die Fähigkeit des Benutzers, Präferenzen in den Einstellungen festzulegen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die auf Sprachsteuerungssysteme angewiesen sind, oft auf die traditionellen Schaltflächen und Links angewiesen sind, weil ihre Behinderung es ihnen nicht erlaubt, eine Maus zu verwenden, oder um von Touch-Events auf Tablets profitieren zu können.

Gängige Möglichkeiten, um alternative Stylesheets in Ihre HTML-Dokumente zu integrieren, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit und in Verbindung mit den Attributen „rel="alternate stylesheet“ und für Titel, „title="…“ im {{HTMLElement('head')}}-Abschnitt der Webseite.

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
@import "alternate1.css";
@import "alternate2.css";
```

Durch die Verwendung von alternativen Stylesheets (denken Sie daran, die Titel hinzuzufügen) richten Sie es für die Benutzer so ein, dass sie über ihren Browser alternative Stile auswählen können.

### Dynamisches Stilumschalten

Ein Problem dabei, sich auf den Browser zu verlassen, um alternative Stile darzustellen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder, aufgrund ihrer Behinderung sind sie nicht in der Lage dazu. Schaltflächen oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen verfügbar sind. Es gibt zahlreiche Möglichkeiten, Umschalt-Schaltflächen hinzuzufügen, um den Benutzer die Möglichkeit zu geben, zu den verschiedenen Stylesheets zu wechseln. Das gesagt, die Verwendung alternativer Stylesheets sind nicht die einzige Option. Eine andere Option ist, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), „_wo es möglich ist, ist es wirklich am besten, die Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Aussehen aller Stilelemente in einem einzigen Stylesheet gesteuert werden kann._“ Eines der besten Beispiele, wie dies zu tun ist, stammt von der W3C-Seite, ["C29: Verwendung eines Stil-Switchers, um eine konforme alternative Version zu bieten"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Text-Only-Alternativen

Ein separates alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drastische Lösung; es ist jedoch eine, die manchmal für Lehrer und andere öffentliche Bedienstete, die denen mit extremen Empfindlichkeiten dienen müssen, erforderlich ist. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. So geht es im CSS:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Mit der Einrichtung von Medienabfragen aktivieren Sie Steuerungen durch den Benutzer; diese Steuerungen sind im Browser oder im Betriebssystem verfügbar. Siehe das MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer im Internet zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr über die Details zu erfahren, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet wird, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), oder siehe das Beispiel unten aus dem Abschnitt über ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Die Unterstützung entwickelt sich.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Ein leistungsstarkes Tool für Entwickler ist Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge, und desto weniger „flackert“ er. Die Großteil der modernen Technologie aktualisiert mit einer Rate, die keine Probleme mit Photosensitivität verursacht. Allerdings sind nicht alle Menschen finanziell in der Lage, sich die neueste Technologie leisten zu können: ältere oder leistungsschwächere Computer können niedrige Bildwiederholraten haben. [AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort hinsichtlich der Bildwiederholraten in Hz:

- „_Dieser Effekt ist spürbar und dokumentiert, bis zu 70 Hz._“
- „_Diese Studien scheinen darauf hinzuweisen, dass Sie von Refresh-Raten unter 70 Hz fernbleiben und eine Rate verwenden sollten, die nicht durch 10 teilbar ist._"

Eric Bailey von CSS-Tricks fand eine innovative Nutzung der Update-Funktion, die in Kombination mit Animation-Dauer oder Transition-Dauer verwendet wird, um in einer Geschwindigkeit abzuschließen, die für das menschliche Auge unmerklich ist. Mit anderen Worten, Erics Techniken gehen das Problem der Bildwiederholraten an. Das untenstehende CSS stammt aus dem Artikel von CSS-Tricks: ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Die [update](/de/docs/Web/CSS/Reference/At-rules/@media/update) Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, den Anschein von Inhalten zu ändern, nachdem sie gerendert wurden. Sie hat die Werte "keine", "langsam" und "schnell".

## Entwicklungs- & Experimentelle Funktionen

### Medienabfragen Level 5

EnvironmentMQ (Geplant in Medienabfragen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal, und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Ebenen in Bezug auf eine Lux-Messung tatsächlich zu definieren, weil Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen beachten auch die Unterschiede in der Technologie, zum Beispiel E-Ink, die im hellen Tageslicht lesbar bleibt, gegenüber Flüssigkristallen, die es nicht tun.
- `environment-blending`
  - : Aus dem W3C-Entwurf Dokument, Medienabfragen Level 5: „_Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Eigenschaften der Benutzeranzeige zu abfragen, sodass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich dazu entscheiden, die Visualisierungen und/oder das Layout der Seite abhängig von der Displaytechnologie anzupassen, um die Anziehungskraft zu erhöhen oder die Lesbarkeit zu verbessern._“

#### Benutzerpräferenz-Medienfunktionen (Geplant in Medienabfragen Level 5)

[Benutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Benutzern diese Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), „_Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion zeigt an, ob der Inhalt normal angezeigt wird oder ob die Farben umgekehrt wurden._“
- [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent das vom Benutzer gewählte bevorzugte Farbpalette auf der Seite und überschreibt dabei die vom Autor gewählten Farben. Aus dem W3C-Entwurf des Dokuments, Medienabfragen Level 5 Abschnitt zu erzwungenen Farben: „_Die erzwungenen Farben Medienfunktion wird verwendet, um zu erkennen, ob der Benutzeragent einen [erzwungenen Farben-Modus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine vom Benutzer gewählte eingeschränkte Farbpalette auf der Seite erzwingt_“. Der Benutzer muss über diese Fähigkeit aufgeklärt werden, und es wird erforderlich sein, dass es eine ordentliche Zusammenarbeit mit dem geeigneten Wert für die Medienabfrage bevorzugtes Farbschema dabei gibt.
- `light-level`
  - : Aus dem W3C-Entwurf des Dokuments, Medienabfragen Level 5 Abschnitt zu Lichtpegel: „_Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfunktion wird verwendet, um den Umgebungslichtpegel, in dem das Gerät verwendet wird, abzufragen, um dem Autor zu ermöglichen, den Stil des Dokuments als Antwort darauf anzupassen_“. Dies wird ein Segen für diejenigen sein, die Probleme mit den motorischen Fähigkeiten haben oder für einige mit kognitiven Schwierigkeiten, die nicht den richtigen „Knopf“ finden können, um ihre Bildschirmeinstellungen zu ändern.
- `prefers-contrast`
  - : Aus dem W3C-Entwurf des Dokuments, Medienabfragen Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): „_Die `prefers-contrast` Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer das System dazu aufgefordert hat, das Ausmaß des Kontrasts zwischen angrenzenden Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten mit der Lesbarkeit von Text, der einen geringen Unterschied im Kontrast zum Text-Hintergrund aufweist und würden einen höheren Kontrast bevorzugen._“ Manchmal kann es tatsächlich auch zu viel Kontrast geben; ein Heiligenschein-Effekt über dem Text kann unter solchen Umständen auftreten und verringert die Lesbarkeit. Die Menge des Kontrasts in der Kontrolle des Benutzers zu legen, ist zweifellos ein Geschenk für die Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 aus den CSSWG.org Entwürfen integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Ausführlichere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung: Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft stammt aus [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation).

**Anforderung:** Einige Benutzer können nicht-figurativen Text und Symbole, wie Metaphern, Redewendungen usw. nicht verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht-figurativ identifizieren und dem Autor die Möglichkeit geben, nicht-figurative Texte und Bilder zu erläutern.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/Reference/Values/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Lernprogramm: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsthread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der Blitzdefinition in WCAG 2.0 #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Maßstabsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Erleuchtung der Fotosensitivität, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber flackernden Lichtern oder kontrastreichen visuellen Mustern, wie Streifen, Gittern und Schachbrettern, geboren. Aufgrund dieser Bedingung produziert ihr Gehirn anfallartige Entladungen, wenn es dieser Art visueller Reize ausgesetzt wird."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flimmern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht- und musterinduzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Redakteur

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und Ausrüstung — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiteter RGB-Farbraum — scRGB

### Analysetool für fotosensitive Epilepsie

Zusammen mit dem Harding-Tool wird es allgemein als eines der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (älter, enthält aber einige Erklärungen zu in den WCAG 2.1 Kriterien gemachten Verweisen)
- [Drei Blitze oder darunter Schwellenwert verstehen Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Initiative für Web-Barrierefreiheit (WAI)](https://www.w3.org/WAI/)
- [Richtlinien für die Barrierefreiheit von Web-Inhalten (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition von relativer Leuchtdichte
