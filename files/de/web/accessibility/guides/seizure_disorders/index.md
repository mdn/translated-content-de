---
title: Barrierefreiheit im Web für Anfälle und physische Reaktionen
short-title: Verhinderung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Dieser Artikel führt in Konzepte ein, die darauf abzielen, Webinhalte für Menschen mit Vestibulärstörungen zugänglich zu machen, und wie man Inhalte misst und verhindert, die Anfälle und/oder andere physische Reaktionen auslösen können.

## Übersicht

### Anfälle

Anfälle, die durch Licht verursacht werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen nutzen, können Inhalte erzeugen, die möglicherweise Anfälle oder andere körperlich beeinträchtigende Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art "Reflex-Epilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von photosensitiver Epilepsie werden die Anfälle speziell durch blitzende Lichter ausgelöst, aber andere Arten von Reflex-Epilepsien können durch den Akt des Lesens oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen festgestellt wird: "_Bestimmte visuelle Bilder können, auch ohne Bewegung oder Flackern, Anfälle bei Patienten mit photosensitiver Epilepsie auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder sich bewegende Muster von erkennbaren Licht- und Dunkelstreifen haben die gleiche Wirkung wie blitzende Lichter, da sie durch die Wechselwirkung von dunklen und hellen Bereichen entstehen._" Die Epilepsy Foundation of America Working Group ist in der Lage, das Problem etwas zu "quantifizieren": _"Ein Muster, das das Potenzial hat, Anfälle hervorzurufen, enthält deutlich erkennbare Streifen, die mehr als fünf Helldunkel-Paarstreifen in irgendeiner Ausrichtung umfassen_". Neben Streifen sind auch karierte Muster dafür bekannt, photosensitive Anfälle zu verursachen, wie laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der wohl etablierte und starke Auslöser sind blitzende/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest, _"Das Einzige, das wirklich dokumentiert ist, sind blitzende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Allerdings sind nur wenige Arten von Epilepsien photosensitiv, und die überwiegende Mehrheit der Epilepsien ist dies nicht."_ Neben durch Photosensitivität hervorgerufenen Anfällen kann auch das Hören bestimmter Musikstücke sogenannte musicogene Anfälle auslösen, auch wenn diese Arten von Anfällen anscheinend weitaus seltener vorkommen. Für eine gute Einführung in das Thema musicogene Anfälle besuchen Sie bitte die Webseite von Epilepsy Ontario über [musicogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) merkt die Epilepsy Foundation an, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende, unprovozierte Anfälle umfasst._" Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _"Der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Es kommt nicht häufig vor, aber es ist ein sehr reales Problem und die Menschen müssen sich des Risikos bewusst sein"_.

Der Punkt ist, dass Anfälle definitiv tödlich sein können und es auch sind, und Entwickler und Designer sind äußerst wichtig, um das Web für diejenigen sicherer zu machen, die empfindlich auf photosensitive oder musicogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst Anfälle, die "nur" schwächend wirken, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht in der Lage ist, normal zu funktionieren. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder der rollenden Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie visuelle Feuermelder.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass auch die Wellenlänge des Lichts als möglicher Faktor enthalten ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt: _"Individuen mit photosensitiven Anfallsstörungen können durch Inhalte, die mit bestimmten Frequenzen blinken, für mehr als ein paar Blitze einen Anfall ausgelöst bekommen"_ und es wird sehr spezifisch darauf hingewiesen, dass: _"Menschen sind empfindlicher gegenüber rot blinkendem Licht als bei anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blinken bereitgestellt."_

Es ist nicht einmal ein Bild oder Video erforderlich, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es mit hoher Frequenz die Farbe und Helligkeit ändert, was leicht über JavaScript ausgeführt werden kann, kann echten Schaden anrichten. Und Flackern kann überall auftreten. Zum Beispiel können die häufig verwendeten "Spinners" beim Laden von Seiten leicht "flackern", während sie sich drehen.

Zudem bestehen zusätzliche Bedenken für Menschen mit motorischen Problemen. Zum Beispiel weist die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) darauf hin, dass _"photosensitive Anfälle durch bestimmte Arten von Flackern in Web- oder Computerinhalten hervorgerufen werden können, einschließlich Mouse-Over-Effekten, die große Bereiche des Bildschirms schnell wiederholt aufleuchten lassen"._

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen gesehen wird). Anfälle sind jedoch nicht die einzige schädliche physische Reaktion, die durch Blinken, Flackern, Blitzen und andere solche Reize möglich ist. 1997 zeigte ein japanischer Zeichentrickfilm eine animierte "Virus-Bombe". Einige der Kinder, die die Zeichentrickserie ansahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und Bluterbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind allesamt mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend ist.

- Anfälle
- Vestibulärstörungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut der W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die häufiger als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Abschnitt 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flacker pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) weist darauf hin, dass _"Im Allgemeinen sind Blitzlichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten, Anfälle auszulösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollten."_ Für einige Menschen können Blitzen/Blinken jedoch bereits bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig darauf hinzuweisen, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA merkt in ihrem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) an, dass Blinken und Blitzen leistungsstarke Werkzeuge sein können, um Aufmerksamkeit zu erregen – wie es für Warnschaltflächen notwendig ist (das setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für einige Benutzer sind blinkende Schaltflächen ebenfalls Hinweise darauf, dass sie sparsam und mit Vorsicht verwendet werden müssen. In Bezug auf das Webdesign müssen Systeme, die Unternehmensmitarbeiter auf Gefahren aufmerksam machen, indem sie den Bildschirm "entführen", um eine blinkende Notfallwarnung bereitzustellen, die Rate, die Größe und die Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen geblitzt werden.

### Blitzen und Flackern – wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"ist ein Blitz eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> erreicht, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die empfohlene Annahme für einen typischen Betrachtungsabstand beim Schreiben war "_die Fläche kann als auf einen Bereich anwendbar betrachtet werden, der >25% der Fläche eines Fernsehbildschirms beträgt, unter der Annahme standardisierter Betrachtungsabstände von ≥2 m (ca. 9 Fuß)"_. Seitdem hat sich viel geändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die den Dynamiken des Gehirns zugrunde liegen, von bestimmten Farbkombinationen stärker als von anderen moduliert werden könnten, beispielsweise verursacht ein rot-blauer flackernder Reiz eine stärkere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_.

### Blitzen & rotes Blitzen

[WCAG 2.3.1 General Flash and Red Flash Thresholds](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeines Blitzen** ist definiert als ein Paar gegensätzlicher Änderungen der [relativen Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit, bei der die relative Helligkeit des dunkleren Bildes unter 0,80 liegt und bei der ein "Paar gegensätzlicher Änderungen" ein Anstieg, gefolgt von einem Rückgang oder ein Rückgang, gefolgt von einem Anstieg ist.
- Ein **rotes Blitzen** ist definiert als jedes Paar gegensätzlicher Übergänge, das einen gesättigten Rotton umfasst.

Diese Standards beruhen auf früheren Forschungsergebnissen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop zur Entwicklung eines [Konsensus](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu photosensitiven Anfällen mit der Feststellung _"Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> erreicht, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradiant (ca. 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt." Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Relative" Größe und Abstand sind beide relevant. Laut [PEAT](https://trace.umd.edu/peat/) _"nimmt der kombinierte Bereich von Blitzen, die gleichzeitig auftreten, insgesamt nicht mehr als ein Viertel eines 341 x 256 Pixel Rechtecks irgendwo auf der angezeigten Bildschirmfläche in Anspruch, wenn die Inhalte in 1024 x 768 Pixel betrachtet werden."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, taucht im Artikel zur WCAG 2.3.1 auf: "_Der 1024 x 768-Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block repräsentiert ein 10 Grad Sichtfeld bei einem typischen Betrachtungsabstand. (Das 10 Grad-Feld wird aus den ursprünglichen Spezifikationen übernommen und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am empfänglichsten für Fotostimuli sind.)_"

Dieses Pixelverhältnis berechnet die relative Größe, aber auch der Abstand ist wichtig.

Der Abstand ist wichtig, weil er das gesamte Sichtfeld beeinflusst. Wenn Zuschauer Bildschirme für Spiele verwenden, ist das Sichtfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf Ihrem Telefon, Computer oder in einem Headset erlebbar ist. Die Sorge um blitzende Bilder in einem VR-Headset nimmt zu, da das Headset so nah an den Augen angebracht ist.

Untersuchungen deuten allgemein darauf hin, dass die Nutzung von VR möglicherweise sicherer ist als der normale Bildschirmkonsum, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen: _"Die begrenzten bisher verfügbaren Daten lassen keine besonderen Anfallssorgen in Bezug auf VR-Technologie erkennen, obwohl sich diese Ansicht mit mehr Erfahrungen ändern kann. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokanter Muster oder Farbänderungen, würden voraussichtlich Anfälle auslösen, ebenso wie in der realen Welt."_

(Beachten Sie, dass einige Benutzer das Blinken des Cursors nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor ein sehr kleiner Bereich des Bildschirms sind.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind als Übeltäter bekannt; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Streifenpaare zu Anfällen führen können, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, beträgt das zulässige Maximum acht Linien, aber wenn es sich bewegt, dürfen es nicht mehr als fünf Linien sein.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Steuerungsmöglichkeit hat, um sie auszuschalten.

"Ein Muster, das potenziell Anfälle auslösen kann, enthält deutlich erkennbare Streifen, die mehr als fünf Licht-Dunkel-Paare von Streifen in irgendeiner Ausrichtung umfassen. Wenn die Licht-Dunkel-Streifen eines Musters gemeinsam mit einem minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradianen auf das Auge treffen, ist die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup>, und das Muster wird für ≥0,5 s angezeigt, dann sollte das Muster nicht mehr als fünf Licht-Dunkel-Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, schwingen, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alle Details sind bekannt, und selbst mit den oben aufgeführten Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren zu einem größeren Bereich wechselt, ebenso wie der Kontrast erhöht wird und die räumliche Frequenz von niedrig nach mittel ansteigt. Es ist auch bekannt, obwohl das dahinterliegende Maßverständnis unklar ist, dass ein Wechsel von grundlegenden (etwa Streifen) zu mehreren Orientierungen (zum Beispiel das karierte Muster, das entsteht, wenn ein Satz von Streifen über, aber senkrecht zu, dem Originals Satz gelegt wird) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Barrierefreiheit. Sehen Sie unter [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) nach, wie es sich auf die Web-Barrierefreiheit und Barrierefreiheit im Allgemeinen bezieht.

Wie sich die Farbe auf ihren Hintergrund bezieht – oft in Bezug auf den Kontrast dargestellt – und wie drastisch sich die Farbe Bild für Bild in der Animation ändert, ist wichtig. Mehr dazu finden Sie in [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall Rot

Es wurde bewiesen, dass [einige Farben epileptische Anfälle eher auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen durch die Farbe Rot beeinflusst. Ihre Wirkung auf das Verhalten wurde sogar bei Tieren beobachtet.

- **Rot-Entsättigungstests:** Das menschliche Auge ist so empfindlich für Rot, dass Augenärzte einen Test damit entwickeln. Der Rot-Entsättigungstest bewertet die Integrität des Sehnervs. Für weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, siehe [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für Menschen, die unter traumatischer Hirnschädigung leiden, [kognitive Funktionen in einer roten Umgebung reduziert](https://pubmed.ncbi.nlm.nih.gov/20649469/) werden.

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben einer roten Umgebung, die die kognitive Funktion von Traumapatienten beeinflusst, scheinen Farben im roten Spektralwellenlängenbereich besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei der Prüfung des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten viel höher als erwartet waren. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rot blinkendes Licht reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "websafe" angesehen wird. Das bedeutet _nicht_, dass sie für die Auslösung von Anfällen "sicher" ist, sondern nur, dass die Farbe "sicher" reproduziert werden kann, basierend auf der Technologie, die zur Erzeugung der Farbe auf Bildschirmen verwendet wird.

## Messungen zur Vermeidung von Schaden

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Helligkeit, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Anleitungen zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Die folgende, fachkundig und autoritative Information stammt aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> erreicht, eine Frequenz von ≥3 Hz aufweist und einen soliden visuellen Winkel von ≥0.006 Steradianen (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster, das das Potenzial zur Auslösung von Anfällen aufweist, enthält deutlich erkennbare Streifen, die mehr als fünf Hell-Dunkel-Streifenpaare in irgendeiner Ausrichtung umfassen. Wenn die Hell-Dunkel-Streifen jedes Musters gemeinsam mit einem minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradianen auf das Auge treffen, beträgt die Leuchtdichte des hellsten Streifens >50 cd/m², und das Muster wird für ≥0,5 Sekunden angezeigt, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Streifenpaare anzeigen, wenn die Streifen die Richtung ändern, schwingen, blitzen oder den Kontrast umkehren; wenn das Muster unverändert ist oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter auf Fälle mit fixierten Medien anzuwenden, z.B. eine voraufgezeichnete Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich dies also auf Messungen für Farbe, Helligkeit und Sättigung für Webentwickler?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtintensität. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedias Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug darauf, was uns als Entwickler vertraut ist: auf einem Anzeigegerät und im RGB-Farbraum. Dies ist hilfreich, da es einen spezifischen Standard gibt, von dem angenommen wird, dass er auf Monitoren, Druckern und im Internet verwendet wird, und das ist der **sRGB** (standard Red Green Blue).

> Als Maß für Licht, das pro Flächeneinheit abgegeben wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spek für Monitore zielt auf 80 cd/m<sup>2</sup>. In der Regel sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Consumer-Desktop-[Flüssigkristalldisplays](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Der Erkenntniswert daraus ist, dass der **sRGB**-Farbraum ein gemeinsamer Bezugspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht vom häufig verwendeten Hex-Code konvertiert werden kann.

### Physiologie und Psychologie des Menschen als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, weitgehend zu quantifizieren und zu messen. Das gesagt, darf nicht vergessen werden, dass Farbe ebenso sehr über die Wahrnehmung des Menschen im Gehirn wie über die Messung des von einem Computerbildschirm kommenden Lichts geht.

Neben den psychologischen Schwankungen gibt es auch physiologische Unterschiede unter uns. Es wird Variationen und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel nennt Tom Jewett, Dozent Emeritus der Informatik an der Cal State University Long Beach, Folgendes in Bezug auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html): _"…Die Unterscheidung zwischen den Helligkeitsstufen ist tatsächlich nicht linear, wie wir es von der HSL-Skala erwarten würden; wir sind viel empfindlicher gegenüber Änderungen im helleren Bereich als im dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Maße linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht auf einen Computerbildschirm, durch die Distanz zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert wird, ist im Gange.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut Artikel der Epilepsy Foundation ['Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene, eine abnormale Reaktion auf Lichtstimulation zu haben, und der erste lichtinduzierte Anfall tritt fast immer vor dem Alter von 20 Jahren auf"_. Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle häufiger bei Jungen vorkommen, da sie mit höherer Wahrscheinlichkeit Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulationen"._

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfallsneigende Person zu Benutzertests veranlassen. Es ist gefährlich. Zu diesem Punkt ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Nutzung von von Experten entwickelten Werkzeugen, die zusammen mit Ärzten entwickelt wurden, um sie zu entwickeln. Zum Zeitpunkt dieser Veröffentlichung gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell für Filme und Videos von Forschern und Arzt erstellt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben Wert darauf gelegt, es zum **_kostenlosen_** Download verfügbar zu machen. PEAT kann Autoren helfen, zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle auslösen. Bitte beachten Sie die Beschränkung für dessen Verwendung: **_Die Nutzung von PEAT zur Bewertung von Material, das kommerziell für Fernsehübertragungen, Filme, Home-Entertainment oder die Spieleindustrie produziert wurde, ist verboten. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie bitte das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Werkzeugs für die kommerzielle Nutzung untersagt ist, können Fernsehmacher den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehmacher in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen zur Barrierefreiheit für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung sicherzustellen, dass wir keinen Schaden verursachen, entweder absichtlich oder unabsichtlich. Wenn wir etwas einfügen müssen, das potenziell Schaden verursachen kann, ist es wichtig, Benutzer daran zu hindern, die schädlichen Inhalte zufällig zu begegnen, und Wege bereitzustellen, damit Benutzer Animationen verhindern und kontrollieren können, um potenzielle Schäden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden anrichten

[WCAG Richtlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Erstellen Sie keine Inhalte, die bekanntermaßen Anfälle oder physische Reaktionen auslösen können"_. Bauen Sie keine Animation ein, die ein Benutzer nicht steuern kann. Gestalten Sie keine Muster, die bekannte Probleme verursachen. Wenn Sie unbedingt ein GIF oder PNG mit Blitzen einfügen müssen, nehmen Sie es stattdessen in einem Videoformat auf, damit Benutzerkontrollen für den Benutzer verfügbar sind. Geben Sie dem Benutzer die Möglichkeit, es zu umgehen, abzuschalten oder so zu gestalten, dass es weniger schädlich ist.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwickler oder Designer, ob blitzende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß behandelt werden, gibt es Menschen, die möglicherweise unerwünschte Inhalte von Ihrer Seite herunterladen und sie missbrauchen. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um physischen Schaden durch Animation zu bewirken, am Samstag, den 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde über Posts mit blitzenden Bildern und Links gehackt, die fälschlicherweise als hilfreich bezeichnet wurden. Benutzer mit Vestibulärstörungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes GIF gesendet wurde: Das blinkende GIF trug die Nachricht, _"Sie verdienen einen Anfall für Ihre Beiträge"_.

#### Exposition kontrollieren, Zugriff kontrollieren

Die Kontrolle der Exposition zur Seite ist entscheidend, um sicherzustellen, dass eine empfindliche Person nicht versehentlich darauf zugreift. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, ein Bild oder eine Animation zu haben, die Anfälle auslösen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen, und es dann an einem Ort platzieren, an dem der Benutzer sich dafür entscheiden muss, darauf zuzugreifen, indem er beispielsweise auf eine Schaltfläche klickt oder sicherstellt, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie das Setzen von Crawlanweisungen für Suchmaschinen, um anzudeuten, dass sie potenziell schädliche Ressourcen nicht in ihre Suchindizes aufnehmen sollen.
Sie können dies mit Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Element mit restriktiven Regeln wie `noindex, nofollow` tun.
Indem Sie die Seite nicht indizieren (`noindex`) und die Links auf der Seite nicht folgen (`nofollow`), wird die Wahrscheinlichkeit verringert, dass Benutzer sie über die Suche zufällig finden:

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

Für nicht-HTML-Ressourcen können Sie Crawlanweisungen in einem {{httpheader("X-Robots-Tag")}} HTTP-Response-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, aber animierte GIFs verdienen besondere Erwähnung aufgrund ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Bestimmung von Animation _frühzeitig_ in einer gegebenen HTTP-Anfrage.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) an.

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sie aktivieren möchte. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie bei animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie zum Beispiel das NICHT Hinzufügen des `autoplay`-Attributs zu `<video controls>`, oder das Festlegen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein leistungsstarkes Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

{{cssxref("animation-play-state")}} ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS transitions](/de/docs/Web/CSS/Guides/Transitions) können verwendet werden, um die Dauer für die Anfangsstufe der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen sowohl beenden als auch starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und verfügt auch über keine Steuerungsmöglichkeiten. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das steuert, ob Benutzeroberflächenelemente für das Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Steuerungen verfügt, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" den HTML-Video- und Audio-Elementen hinzufügen.

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

Übernehmen Sie dieses Beispiel auf Audio:

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

Beachten Sie, dass der Ton in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt innerhalb des {{HTMLElement('video')}}-Elements statt im {{HTMLElement('audio')}}-Element enthalten ist. Dieses Beispiel stammt aus dem Abschnitt zur Beschreibung des [muted-Media-Attributes](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Ton zu entfernen.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Das scheint offensichtlich, aber aufgrund der Vielzahl an Mimetypen variieren die Mechanismen für ihre Handhabung erheblich, und aus diesem Grund gibt es keine Einheitslösung für das Problem. Das wird weiter kompliziert durch die Tatsache, dass selbst, wie Dateien klassifiziert werden, ihre Handhabung gestaltet. Zum Beispiel wird das .gif-Dateiformat im Allgemeinen als Bild verstanden, jedoch in manchen Kreisen auch als Videoformat betrachtet, aufgrund seiner Fähigkeit, animiert zu werden. Für eine umfassende Liste von Medientypen besuchen Sie bitte die [IANA.org-Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, sie auszuschnüffeln, sind keine beiläufige Übung. Sie könnten interessiert daran sein, den [MIME-Sniffing](https://mimesniff.spec.whatwg.org/) Standard auf whatwg.org zu verfolgen. Fast jede Art von Bild kann animiert werden; die Art und Weise, wie sie animiert werden, variiert, und deshalb variiert auch die Kontrollmöglichkeit der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie die Details zur Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung diskutieren.
- **GIFs (Raster)**: Schwer zu knacken, weil die Steuerung ihrer Animation innerhalb der GIF-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs entnehmen Sie bitte W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Artikel zu diesem Thema auf Stack Overflow ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, Video-Version von GIF betrachtet. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm-Datei) verweisen, die woanders existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple Image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Ebenfalls von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ein textbasiertes, offenes Webstandard ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zusammenzuarbeiten."_ SVGs können als Bild verwendet werden, wie in diesem Beispiel gezeigt: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Dies bedeutet, dass SVGs gerade durch CSS-Keyframes und Animationen in Bezug auf ihr Erscheinungsbild und ihre Animation gesteuert werden können. Für die Interaktion mit JavaScript beachten Sie die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Auch Text kann animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann aus denselben Gründen Anfälle auslösen wie bewegte Bilder, vermeiden Sie daher die Animation Ihres Textes. Es ist eine gute Idee, bewegten Text ganz zu vermeiden, da viele Bildschirmleser bewegten Text nicht lesen können und es eine schlechte Benutzererfahrung ist, auch für diejenigen ohne Seh- oder Vestibularprobleme.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um ein kraftvolles Erlebnis für den Benutzer zu schaffen. Wir haben bereits die 'animation'-Eigenschaft früher in diesem Dokument erwähnt. Es handelt sich tatsächlich um eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Der Standardwert `0s` bedeutet, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Die Animationseigenschaft ist alleine schon sehr leistungsstark, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein leistungsstarker Satz von Optionen für den Benutzer eingerichtet werden. Die Einstellung der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstatt auf `animation: none` und `transition: none` zu setzen, bietet eine Absicherung, um Probleme zu verhindern, falls es eine Abhängigkeit von der Animation gibt.

### JavaScript-Animation

JavaScript wird häufig zur Steuerung von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der meiste JavaScript-Code, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird zur Implementierung von Benutzersteuerungen für die Wiedergaberate sowohl für Video als auch für Audio verwendet. Ein Wert von 1,0 ist der Standard und als normale Geschwindigkeit angesehen; ein Wert von 0,5 entspricht der halben Geschwindigkeit, ein Wert von 2,0 der doppelten Geschwindigkeit. Eine negative Zahl spielt das Video oder den Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeits-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) stellt das folgende Codebeispiel zur Verfügung, wie alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt werden:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Einer der einfachsten Wege ist, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu nutzen und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, vorausgesetzt, sie sind im Ihrem Umfeld zugelassenen Dateitypen – und Größen. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele dafür, wobei mehrere Bildquellen für Sonne, Erde und Mond verwendet werden, und mehrere Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde um die Sonne sowie des Mondes um die Erde. Verwenden Sie das mit diesem Tutorial verfügbare Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie unbedingt eine blitzende Animation verwenden müssen

Stellen Sie sicher, dass sie eine Steuerung hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zuerst sieht, und dass ein Benutzer opt-in muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerung bietet, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Die Konvertierung einer animierten GIF in ein Video ermöglicht das Anfügen von Steuerungen an die Animation und gibt dem Benutzer Handlungsfähigkeit. Es gibt viele kostenlose Online-Konverter zur Nutzung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Nutzererwartungen setzen

Geben Sie Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderungen auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt blitzen müssen, halten Sie es klein. Im Allgemeinen ist die Blitzgröße auf einen Bereich von ca. 341 x 256 Pixel oder weniger zu begrenzen. Diese Pixelgröße geht davon aus, dass der Betrachter einen üblichen Abstand zum Bildschirm hat. Diese Größe kann, wenn das Bild in Nahaufnahme betrachtet wird, wie in einem VR-Headset, zu groß sein. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Ihrem Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das ein VR-Headset verwendet oder verwendet werden kann, wie im Firefox-Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Helligkeitskontrastverhältnis_ bezeichnet, gemäß W3.org-Seite auf [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/)), desto leichter lässt sich dieser Text lesen. Menschen mit Sehschwäche schätzen die Bemühungen, um sicherzustellen, dass der Text einen hohen Kontrast zu seinem Hintergrund hat. Bei animierten Inhalten ist jedoch die **_Reduzierung_** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass die animierten Inhalte Anfälle auslösen. Senken Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0,05) / (L2 + 0,05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Eine online verfügbare Ressource für Bilder ist das PineTools.com "Helligkeit und Kontrast Online" [Helligkeit und Kontrast Bild](https://pinetools.com/brightness-contrast-image). Wenn Sie vorhaben, animierte GIFs zu erstellen, beginnen Sie beispielsweise mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Möglichkeit, den Kontrast dynamisch zu reduzieren. Hier ist ein Code-Beispiel aus dem Abschnitt mit dem Titel ["Beispiel: Setzen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

#### Vermeiden Sie gesättigte rote Farben für blinkende Inhalte

Wie zuvor in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop zur Entwicklung eines Expertenkonsensus zu photosensitiven Anfällen. Zu ihren Ergebnissen gehörte das Verständnis, dass _"Ein Blitz eine potenzielle Gefahr darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradiant (ca. 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen."_ Sie stellten auch in demselben Konsensus fest: _"Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von gesättigtem Rot als Risiko angesehen."_

### Alternative CSS-Stile bereitstellen

Im Wissen, dass viele Animationen und Blitzen durch CSS-Methoden gesteuert werden können, ist es wichtig, Wege zu erkunden, um alternative Optionen für Benutzer bereitzustellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS-Optionen in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer das Menü "Ansicht" durchlaufen, in anderen Fällen manifestieren sie sich in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen über den Browser oder die Einstellungen suchen müssen, daher lohnt es sich, in Betracht zu ziehen, Dinge auf die altmodische Art zu tun, mit offensichtlichen Schaltflächen oder Links zum Ändern des Styles, sodass Benutzer sie sehen können. Auf diese Weise wird es nicht mit der Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, oder der Fähigkeit des Benutzers, Präferenzen in den Einstellungen festzulegen, in Konflikt geraten oder diese ersetzen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die auf Spracherkennungssysteme angewiesen sind, oft auf alte Schaltflächen und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu verwenden oder von Touch-Ereignissen auf mobilen Tablets zu profitieren.

Häufige Möglichkeiten, die alternativen Stylesheets in Ihrem HTML-Dokument zu verwenden, bestehen darin, das {{HTMLElement('link')}}-Element und {{CSSxref('@import')}} zu verwenden.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Bereich der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets einzubinden, wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Durch die Verwendung von alternativen Stylesheets (denken Sie daran, die Titel hinzuzufügen) richten Sie sie so ein, dass Benutzer in der Lage sind, über ihre Browser zwischen ihnen zu wählen.

### Dynamisches Style-Switching

Ein Problem, das sich darauf verlässt, dass der Browser alternative Stile offenbart, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder aufgrund ihrer Behinderung sind sie dazu nicht in der Lage. Schaltflächen oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, um Umschaltbuttons hinzuzufügen, damit der Benutzer zu den verschiedenen Stylesheets wechseln kann. Das gesagt, die Nutzung von alternativen Stylesheets ist nicht die einzige Option. Eine andere Möglichkeit besteht darin, den Style der Seite selbst zu manipulieren. Gemäß dem MDN-Dokument [Verwendung dynamischer Stilinformations](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), "_wo immer möglich, ist es wirklich am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stil-Hooks in einem einzigen Stylesheet gesteuert werden kann"._ Eine der besten Beispiele, wie man dies tun kann, ist auf der W3C-Seite ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das das Anzeigen von Bildern verhindert, ist einfach zu erstellen. Es ist eine harsche Lösung; jedoch ist es eine Lösung, die manchmal für Lehrer und andere öffentliche Dienstleister notwendig ist, die Personen mit extremen Empfindlichkeiten bedienen müssen. Diese öffentlichen Dienstleister können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu erstellen, das `display: none` verwendet. So geht's via CSS:

```css
img {
  display: none;
}
```

#### Medienabfragen mit {{HTMLElement('style')}} nutzen

Durch das Einrichten von Medienabfragen aktivieren Sie Steuerungen für den Benutzer; diese Steuerungen werden im Browser oder im Betriebssystem bereitgestellt. Siehe das MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um weitere Details darüber zu erfahren, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein tolles Beispiel dafür zu sehen, wie man den Code `prefers-reduced-motion` verwendet, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder sehen Sie sich das Beispiel unten aus dem Abschnitt ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Es gibt ein mächtiges Werkzeug für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die überwiegende Mehrheit der modernen Technologie aktualisiert mit einer Rate, die keine Probleme mit Photosensitivität verursacht. Nicht jeder ist jedoch wohlhabend genug, um sich die neueste Technologie leisten zu können: Ältere oder unterversorgte Computer können niedrige Bildwiederholraten haben. [AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort zur Bildwiederholrate in Hz:

- _"Diese Wirkung ist bis zu 70 Hz spürbar und dokumentiert"._
- _"Diese Studien würden darauf hindeuten, dass man sich von Bildwiederholraten unter 70 Hz fernhalten sollte und eine Rate verwenden sollte, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand einen innovativen Einsatz für die Aktualisierungsfunktion, die in Kombination mit `animation-duration` oder `transition-duration` verwendet wird, um mit einer Rate abzuschließen, die für das menschliche Auge nicht wahrnehmbar ist. Anders gesagt, Erics Techniken adressieren das Problem der Bildwiederholrate. Das unten stehende CSS stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/Reference/At-rules/@media/update)-Medienmerkmal wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten zu ändern, nachdem sie gerendert wurde. Es hat die Werte "none","slow" und "fast".

## Entwicklungs- und experimentelle Funktionen

### Medienabfragen Level 5

EnvironmentMQ (Geplant in Medienabfragen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Pegel in Bezug auf eine Lux-Messung zu definieren, da Geräte mit einem Lichtsensor häufig die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen merken auch den Unterschied in der Technologie an, etwa e-ink, das im hellen Tageslicht lesbar bleibt, versus Flüssigkristalle, die dies nicht tun.
- `environment-blending`
  - : Aus W3Cs Entwurfsdokument Medienabfragen Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienmerkmal wird verwendet, um die Merkmale des Bildschirms des Benutzers abzufragen, sodass der Autor den Stil des Dokuments anpassen kann. Ein Autor kann sich entscheiden, die Grafiken und/oder das Layout der Seite abhängig von der Displaytechnology anzupassen, um die Attraktivität oder Lesbarkeit zu erhöhen."_

#### Benutzerpräferenz-Medienmerkmale (Geplant in Medienabfragen Level 5)

[Benutzerpräferenz-Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Medienabfragen Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um Benutzerkontrolle über Medien bereitzustellen. Einige Highlights:

- `inverted-colors`
  - : Gemäß dem Abschnitt [Benutzerpräferenz-Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienmerkmal gibt an, ob die Inhalte normal angezeigt oder Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers für die Seite und überschreibt die vom Autor gewählten Farben. Aus W3Cs Entwurfsdokument Medienabfragen Level 5, Abschnitt forced-colors: _"Das forced-colors-Medienmerkmal wird verwendet, um zu erkennen, ob der Benutzeragent einen [erzwungenen Farbmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine benutzergewählte begrenzte Farbpalette auf die Seite anwendet"._ Der Benutzer wird auf diese Fähigkeit aufmerksam gemacht werden müssen, und es wird mit dem passenden Wert für `prefers-color-scheme` Medienabfrage auskommen müssen.
- `light-level`
  - : Aus W3Cs Entwurfsdokument, Medienabfragen Level 5 Abschnitt zur `light-level`: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienmerkmal wird verwendet, um das Umgebungslichtlevel abzufragen, in dem das Gerät verwendet wird, um es dem Autor zu ermöglichen, den Stil des Dokuments entsprechend zu anzupassen."_ Dies wird ein Segen für Menschen mit motorischen Problemen oder für einige mit kognitiven Schwierigkeiten sein, die den richtigen "Button" nicht finden können, um ihre Bildschirmeinstellungen zu ändern.
- `prefers-contrast`
  - : Aus W3Cs Entwurfsdokument Medienabfragen Level 5 Abschnitt zur [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): _"Das `prefers-contrast`-Medienmerkmal wird verwendet, um zu erkennen, ob der Benutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Viele Benutzer haben Schwierigkeiten, Texte zu lesen, die nur einen geringen Unterschied im Kontrast zu ihrem Hintergrund aufweisen, und würden einen größeren Kontrast bevorzugen."_ Manchmal gibt es so etwas wie zu viel Kontrast; ein Haloeffekt um den Text herum kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Es dem Benutzer zu ermöglichen, die Menge an Kontrast zu steuern, ist definitiv ein Geschenk für die Barrierefreiheit.

#### MediaQueryList-Schnittstelle

Abschnitt 4.2 aus den CSSWG.org-Drafts integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die im HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Siehe das MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList) für weitere Informationen.

#### Personalisierungshilfe und Unterstützung

Die Anforderung für das `literal`-Eigentum wird aus [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation) entnommen.

**Anforderung:** Einige Benutzer können nicht-literalen Text und Symbole wie Metaphern, Idiome usw. nicht verstehen. Das `literal`-Eigentum soll es dem Autor ermöglichen, nicht-literalen Text und Bilder dem Benutzer zu erläutern.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
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
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der Flash-Definition von WCAG 2.0 #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/mehrdeutige Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Krampfanfälle

- [Licht ins Dunkel der Photosensibilität bringen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber blitzenden Lichtern oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettmustern geboren. Aufgrund dieser Kondition produziert ihr Gehirn bei dieser Art der visuellen Stimulation krampfartige Entladungen."_
- [Gamma-Oszillationen und fotosensible Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flimmern, können bei Patienten mit fotosensibler Epilepsie Krampfanfälle auslösen."_
- [Fotosensible Krampfanfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensible Krampfanfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht- und Musterinduzierte Anfälle: Expertenkonsens der Epilepsie-Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Epilepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Redakteur

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Ausrüstung — Farbvermessung und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Analyse-Tool für fotosensible Epilepsie

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzlichtern anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung krampfanfälliger Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärung](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Referenzen, die in den WCAG 2.1-Kriterien gemacht werden)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition von relativer Leuchtdichte
