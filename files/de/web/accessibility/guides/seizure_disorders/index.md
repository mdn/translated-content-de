---
title: Web-Zugänglichkeit für Anfälle und physische Reaktionen
short-title: Vermeidung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

Dieser Artikel führt in Konzepte ein, die hinter der Erstellung von barrierefreien Webinhalten für diejenigen mit vestibulären Störungen stehen, und wie man Inhalte messen und verhindern kann, die zu Anfällen und/oder anderen physischen Reaktionen führen.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blinken oder blitzen, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können alle Inhalte erzeugen, die Anfälle oder andere körperlich beeinträchtigende Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch physische Reaktionen auslösen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von photosensitiver Epilepsie werden Anfälle speziell durch flackernde Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder Geräusche ausgelöst werden. Muster und Bilder können auch Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen darauf hingewiesen wird, dass "_bestimmte visuelle Bilder, selbst in Abwesenheit von Bewegung oder Flackern, bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder sich bewegende Muster von erkennbarem Licht und dunklen Streifen haben die gleiche Wirkung wie flackernde Lichter wegen des Wechsels von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": "_Ein Muster mit dem Potenzial, Anfälle hervorzurufen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in einer beliebigen Ausrichtung zählen._" Zusätzlich zu Streifen sind auch Schachbrettmuster dafür bekannt, photosensitive Anfälle zu verursachen, so [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind flackernde/stroboskopartige Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF bemerkt: "_Das einzige, was wirklich dokumentiert ist, sind flackernde Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Epilepsiearten sind photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht._" Zusätzlich zu den durch Photosensibilität verursachten Anfällen kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen viel seltener sind. Eine großartige Einführung in das Thema musikogener Anfälle finden Sie auf der Webseite von Epilepsy Ontario über [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende unprovozierte Anfälle umfasst_." Laut der Seite der Epilepsy Foundation ["Wie schwerwiegend sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), "_ist der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbezogene Todesursache bei Epilepsie. Er ist nicht häufig, aber ein sehr reales Problem, und die Menschen müssen sich seines Risikos bewusst sein._"

Der Punkt ist, dass Anfälle durchaus tödlich sein können, und Entwickler und Designer spielen eine unglaublich wichtige Rolle dabei, das Internet für diejenigen sicherer zu machen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst solche, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer arbeitsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionieren kann. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder alternierenden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume oder durch die Lamellen von Jalousien flackert.
- Bestimmte visuelle Muster, insbesondere Streifen mit kontrastreichen Farben.

Derselbe Artikel führt weiter aus, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor aufgeführt wird; Wellenlängen im roten Bereich des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) bemerkt im Allgemeinen: "_Individuen mit photosensitiven Anfallsstörungen können durch Inhalte, die mit bestimmten Frequenzen für mehr als ein paar Blitze blinken, Anfälle ausgelöst bekommen_" und weist sehr spezifisch darauf hin: "_Menschen sind sogar empfindlicher auf rotes Blinken als auf andere Farben, daher wird ein spezieller Test für gesättigtes rotes Blinken bereitgestellt_".

Man benötigt noch nicht einmal Bild- oder Videomaterial, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das sich mit hoher Frequenz in Farbe und Helligkeit ändert, kann leicht über JavaScript realisiert werden und echten Schaden verursachen. Und, Flackern kann überall auftreten. Beispielsweise können sogenannte "Spinners", die häufig verwendet werden, um anzuzeigen, dass eine Seite lädt, beim Drehen leicht "flackern".

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Beispielsweise bemerkt die Seite des Trace Research & Development Center zur [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass "_photosensitive Anfälle durch bestimmte Arten von Flaschen in Web- oder Computerinhalten hervorgerufen werden können, einschließlich Mouse-Overs, die große Bereiche des Bildschirms schnell aufblinken lassen_".

### Weitere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten verbunden sind und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu beobachten ist). Anfälle sind jedoch nicht die einzige mögliche unerwünschte physische Reaktion auf Blinken, Flackern, Blitzen und andere solche Reize. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der zuschauenden Kinder reagierten mit Anfällen, andere erlitten Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind allesamt mögliche Konsequenzen: jeder dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Blitzen & Flackern

Obwohl "blinken" und "blitzen" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, wohingegen Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet flackernde Effekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) bemerkt, dass _"Allgemein sind flackernde Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten dafür, Anfälle auszulösen. Um sicher zu sein, empfiehlt die Konsensusmeinung, dass photosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt sein sollten."_ Für einige Menschen kann jedoch das Blitzen/Blinken schon bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA merkt in ihrem Dokument, ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) an, dass Blinken und Blitzen effektive Methoden sein können, um Aufmerksamkeit zu erregen—wie es für Warnknöpfe notwendig ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch, dass sie sparsam und mit Bedacht eingesetzt werden müssen. Beim Webdesign müssen Systeme, die Firmenmitarbeiter auf Gefahren aufmerksam machen, indem sie den Bildschirm "entführen", um eine blinkende Warnung vor einem Notfall zu zeigen, die Geschwindigkeit, Größe und die Helligkeitsänderungen auf dem Bildschirm berücksichtigen, wenn diese Warnungen blinken.

### Blitzen und Flackern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist "_ein Blitz potenziell gefährlich, wenn er eine Luminanz von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradiant (ca. 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt._"

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung bezieht sich auf einen typischen Betrachtungsabstand zum Zeitpunkt des Schreibens war "_das Gebiet kann als anwendbar auf ein Gebiet >25 % der Fläche eines Fernseherbildschirms angesehen werden, unter den Annahmen eines standardmäßigen Betrachtungsabstandes von ≥2 m (∼9 Fuß)_" Seitdem hat sich viel verändert, und wir sind unseren Bildschirmen jetzt viel näher.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) bemerkt, dass _"…die Komplexitäten, die den dynamischen Prozessen im Gehirn zugrunde liegen, eher durch bestimmte Farbkombinationen als durch andere moduliert werden könnten, zum Beispiel verursacht ein rot-blauer Flimmerreiz eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_

### Blinken & blinkendes Rot

[WCAG 2.3.1 allgemeine Blitz- und Rotblitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in [relativer Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und bei dem „ein Paar gegensätzlicher Änderungen“ eine Erhöhung gefolgt von einer Verringerung oder eine Verringerung gefolgt von einer Erhöhung ist.
- Ein **roter Blitz** ist definiert als ein beliebiges Paar von gegensätzlichen Übergängen, die ein gesättigtes Rot umfassen.

Diese Standards basieren auf früherer Forschung. 2004 kam die Epilepsy Foundation of America in einem Workshop zusammen, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu photosensitiven Anfällen zu entwickeln. Sie stellten fest, dass "_ein Blitz dann ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradianten (ca. 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt._“ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein eigenes Risiko dar: "_Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

Sowohl "relative" Größe als auch Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) "_die zusammenhängende Fläche von Blitzen, die gleichzeitig auftreten, beträgt insgesamt nicht mehr als ein Viertel jeder 341 x 256 Pixel großen Rechtecksfläche, die irgendwo auf dem angezeigten Bildschirm auftritt, wenn der Inhalt bei einer Auflösung von 1024 x 768 Pixeln betrachtet wird._"

Der Punkt, dass das Sichtfeld eine wichtige Überlegung darstellt, ergibt sich im Artikel, der sich mit WCAG 2.3.1 befasst: "_Der Bildschirm von 1024 x 768 wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der Block von 341 x 256 Pixeln repräsentiert ein 10-Grad-Blickfeld bei einem typischen Betrachtungsabstand. (Das 10-Grad-Feld wird aus den ursprünglichen Spezifikationen übernommen und repräsentiert den zentralen Sichtbereich des Auges, in dem Menschen am empfindlichsten auf foto Stimuli reagieren.)_"

Dieses Pixelareal-Verhältnis berechnet sich für relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand ist wichtig, da er das gesamte Sichtfeld beeinflusst. Wenn Betrachter Augengläser für Spiele tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, es kann auf Telefon, Computer oder Headset erlebt werden. Die Sorge über flackernde Bilder in einer Oculus-Maske wächst, da die Maske so nahe an den Augen ist.

Forschung zeigt allgemein, dass die Nutzung von VR tatsächlich sicherer sein kann als der normale Bildschrinnkonsum, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) resümieren, "_Die bisher verfügbaren begrenzten Daten erheben keine besonderen Anfallsbedenken in Bezug auf VR-Technologie, auch wenn sich diese Auffassung mit zunehmender Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provozierender Muster oder Farbwechsel, würden erwartet, Anfälle auszulösen, genau wie im echten Leben._"

(Beachten Sie, dass einige Benutzer nicht mit blinkenden Cursor lesen können und möglicherweise Migräne, Bewegungskrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Kontrastreiche dunkle und helle geometrische Muster sind ein bekanntes Problem; Streifen und Karos sind die bekanntesten Beispiele. Die Working Group der Epilepsy Foundation of America listet auf, wie viele hell-dunkel Paare von Streifen wahrscheinlich Anfälle provozieren, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist die maximal zulässige Anzahl acht Linien, aber wenn es sich bewegt, nicht mehr als fünf Linien.

Parallaxe-Effekte können Desorientierung verursachen. Verwenden Sie Parallaxeffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Nutzer die Möglichkeit hat, sie auszuschalten.

"Ein Muster, das das Potenzial hat, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in beliebiger Ausrichtung zählen. Wenn die hell-dunkel-Streifen irgendeines Musters in der kollektiven Wahrnehmung des Auges von der minimalerwarteten Betrachtungsdistanz einen festen Winkel von >0,006 Steradianten einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen anzeigen, wenn sich die Streifenrichtung ändert, oszilliert, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst bei den oben aufgelisteten Metriken kommen weitere Faktoren ins Spiel. Zum Beispiel erhöht das Wechseln von einer kleineren zu einer größeren Fläche die Wahrscheinlichkeit, dass das Gehirn reagiert, ebenso wie die Erhöhung des Kontrastes und die Erhöhung der räumlichen Frequenz von einem niedrigen zu einem mittleren. Es ist auch bekannt, obwohl der zugrunde liegende Grund nicht verstanden wird, dass das Wechseln von einfachen Ausrichtungen (z. B. Streifen) zu einem mehrfachen (z. B. das Schachbrettmuster, das entsteht, wenn man ein Set von Streifen auf ein anderes, aber senkrecht dazu liegendes Set legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Zugänglichkeit. Sehen Sie [Understanding colors and luminance](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Web-Zugänglichkeit und die Zugänglichkeit im Allgemeinen bezieht.

Wie sich die Farbe im Verhältnis zu ihrem Hintergrund verhält—normalerweise im Hinblick auf den Kontrast und wie drastisch sich die Farbe von Bild zu Bild in der Animation verändert, ist wichtig. Weitere Informationen hierzu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde demonstriert, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Macht, Verhalten zu beeinflussen, wurde sogar bei Tieren beobachtet.

- **Rot-Entsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit durchführen. Der Rotentsättigungstest beurteilt die Integrität des Sehnervs. Mehr Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen mit Schädel-Hirn-Trauma [kognitive Funktionen in einer roten Umgebung reduziert werden](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonders gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Tatsache, dass eine rote Umgebung die kognitiven Funktionen von Personen mit Schädel-Hirn-Trauma beeinträchtigen kann, scheint das rote Spektrum der Wellenlänge besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei Tests des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsraten viel höher waren als erwartet. Es wurde festgestellt, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "websafe" angesehen wird. Das bedeutet _nicht_, dass sie "sicher ist, um keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe "sicher" von der Technik, die zur Erzeugung von Farben auf Bildschirmen verwendet wird, genau reproduziert werden kann.

## Messen zur Vermeidung von Schaden

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. In Tests berücksichtigte Faktoren sind Farbe, Helligkeit, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Richtlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu fotosensitiven Anfällen zu entwickeln. Die folgende, fachmännische und autoritative Information stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist potenziell gefährlich, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradianten (ca. 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in beliebiger Ausrichtung zählen. Wenn die Hell-Dunkel-Streifen eines Musters in der kollektiven Wahrnehmung des Auges von der minimalerwarteten Betrachtungsdistanz einen festen Winkel von >0,006 Steradianten einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen anzeigen, wenn sich die Streifenrichtung ändert, oszilliert, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Grundsätze lassen sich leichter im Fall von festen Medien anwenden, zum Beispiel bei einer voraufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

"cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also, wie steht das für Webentwickler in Bezug auf Messungen für Farbe, Helligkeit und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedias Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) beschreibt es in Bezug auf das, was uns als Entwickler vertraut ist: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, weil ein bestimmter Standard auf Monitoren, Druckern und im Internet vorausgesetzt wird, und es ist der **sRGB** (Standard Rot Grün Blau).

> Als Maß für Licht, das pro Flächeneinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Kalibrierte Monitore sollten typischerweise eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Consumer-Desktop- [Flachbildschirme](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [Fernseher mit hoher Auflösung](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Quintessenz ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er sich leicht vom verbreiteten Hex-Code konvertieren lässt.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Das gesagt, es darf nicht vergessen werden, dass Farbe so viel über die menschliche Wahrnehmung im Gehirn ist, wie es die Messung des Lichts ist, das von einem Computerbildschirm kommt.

Neben den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Variationen und Nuancen geben, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Dozent Emeritus für Informatik an der Cal State University Long Beach, folgendes hinsichtlich der [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html): "_...Die Unterscheidung zwischen Helligkeitsstufen ist nicht wirklich linear, wie die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Veränderungen in helleren Werten als in dunkleren._"

Es ist wichtig zu verstehen, dass Licht und seine Messgrößen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung nicht. Diskussion und Untersuchung laufen weiter darüber, wie die maschinelle Messung von Licht, wenn es von einem Computerbildschirm durch die Entfernung zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert, in Beziehung gesetzt werden kann.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation, ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), "_sind Kinder und Jugendliche anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem Alter von 20 Jahren ein._" Der Artikel folgt mit dieser Statistik: "_Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger auftreten, weil sie wahrscheinlich mehr Videospiele spielen. Diese Videospiele enthalten oft potenziell provokante Lichtstimulation_".

**Benutzer-Tests sind sehr problematisch**. Natürlich möchte niemand eine anfallgefährdete Person Benutzer-Tests unterziehen. Es ist gefährlich. In diesem Punkt ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Nutzung von Werkzeugen, die von Experten auf diesem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt dieses Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT**, und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben es sich zur Aufgabe gemacht, es **_kostenlos_** zum Download anzubieten. PEAT kann Autoren helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung bei der Nutzung: **_Die Verwendung von PEAT zur Beurteilung von kommerziell produzierten Inhalten für Fernsehübertragungen, Filme, Heimunterhaltung oder Spiele ist verboten. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehanstalten den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehanstalten in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, sodass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Video-Inhalten bietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, sicherzustellen, dass wir keinen Schaden verursachen, weder absichtlich noch unabsichtlich. Wenn wir etwas einfügen müssen, das potenziell schädlich sein könnte, ist es entscheidend, zu verhindern, dass Benutzer unbeabsichtigt auf die schädlichen Inhalte stoßen und Wege zu schaffen, wie Benutzer Animationen verhindern und kontrollieren können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Kein Schaden verursachen

[WCAG-Leitfaden 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) gibt einen Überblick: "_Do not design content in a way that is known to cause seizures or physical reactions._" Fügen Sie keine Inhalte ein, die der Benutzer nicht kontrollieren kann. Verwenden Sie keine Muster, die bekanntermaßen Probleme verursachen. Wenn Sie ein GIF oder PNG mit Blinkeffekten einbinden müssen, setzen Sie es stattdessen in ein Videoformat, sodass der Nutzer über Kontrollmöglichkeiten verfügt. Geben Sie dem Nutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Verstehen Sie böswillige Absichten

Fragen Sie sich als Entwickler oder Designer, ob stroboskopierende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es diejenigen, die möglicherweise den beleidigenden Inhalt von Ihrer Seite herunterladen und ihn als Waffe einsetzen. Es wird vermutet, dass der erste dokumentierte Versuch, mit Computern physische Schäden zu verursachen, durch Animation am Samstag, dem 22. März 2008, begann: Die Website der Epilepsy Foundation wurde gehackt durch Posts mit blinkenden Bildern und falschen Links, die behaupteten, hilfreich zu sein. Nutzer mit vestibulären Störungen, die auf der Seite Hilfe suchten, waren betroffen.

Eine Reihe rechtlicher Überlegungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes GIF geschickt wurde: Das blinkende GIF trug die Botschaft: "_You deserve a seizure for your posts_".

#### Kontrolle von Zugang und Exposition

Die Kontrolle des Zugangs zur Seite ist der Schlüssel, um sicherzustellen, dass niemand, der empfindlich auf Anfälle reagiert, nicht versehentlich darauf stößt. WCAG weist darauf hin, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugang dazu, indem Sie zunächst eine Warnung über den Inhalt anzeigen und dann an einem Ort platzieren lassen, an dem der Benutzer opt-in sein muss, wie durch einen Knopf oder indem sichergestellt wird, dass der Link zur Seite eine deutliche und offensichtliche Warnung hat.

Es ist eine Überlegung wert, Crawl-Direktiven für Suchmaschinen zu setzen, um anzudeuten, dass potenziell gefährliche Ressourcen nicht in ihre Suchindizes aufgenommen werden sollen. Sie können dies mit Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Element mit restriktiven Regeln wie `noindex, nofollow` tun. Indem die Seite nicht indexiert wird (`noindex`) und Links auf der Seite nicht gefolgt werden (`nofollow`), wird die Wahrscheinlichkeit, dass Benutzer sie zufällig über die Suche finden, reduziert:

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

Für nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Antwortheader setzen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Möglichkeit, Animationen _so früh wie möglich_ in einer HTTP-Anfrage zu bestimmen.
- Zakirt stellt ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) bereit.

Stellen Sie sicher, dass bei animierten GIFs die Animation inaktiv ist, bis der Benutzer sie zu aktivieren wählt. Beispielsweise muss der Benutzer einen Knopf drücken oder ein Kästchen aktivieren, um die Animation zu starten.

### Videos

Wie bei den animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z. B. indem das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut zu `<video controls>` nicht hinzugefügt oder {{CSSxRef('animation-play-state')}} auf `paused` als Ausgangszustand gesetzt wird. Um ein mächtiges Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa benutzt das `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um eine sehr benutzerfreundliche Erfahrung zu schaffen.

{{cssxref("animation-play-state")}} ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

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

### Sicherstellen, dass der Benutzer Animationen sowohl starten als auch stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Bedienelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl starten als auch stoppen kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuertes Sicherstellen der Bedienelemente

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das HTML-Attribut `controls` wider, das steuert, ob Benutzeroberflächenelemente zum Abspielen des Medienobjekts angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Bedienelemente verfügt, die ein Benutzer zugreifen kann, fügen Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzu.

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

Anwendung desselben Beispiels auf Audio:

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

Beachten Sie, dass das Audio in Videos durch das Inhaltsattribut `muted` gesteuert werden kann, auch wenn der Inhalt im {{HTMLElement('video')}}-Element anstelle des {{HTMLElement('audio')}}-Elements enthalten ist. Dieses Beispiel stammt aus dem Abschnitt über die [Beschreibung des muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer Maßnahmen ergreift, um das Audio zu aktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Das scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen, um sie zu handhaben, stark, und deshalb gibt es keine Lösung, die für alle passt. Das wird weiter verkompliziert durch die Tatsache, dass auch die Art und Weise, wie Dateien klassifiziert werden, die Art ihrer Handhabung beeinflusst. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, aber auch als Video-Dateiformat in einigen Kreisen, da es animiert werden kann. Für eine umfassende Liste von Medientypen besuchen Sie bitte [IANA.org's Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, sie herauszuschnüffeln, sind keine leichte Übung. Möglicherweise sind Sie daran interessiert, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/)-Standard bei whatwg.org zu befolgen. Praktisch jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial über Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein fester Bestandteil der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung diskutiert werden.
- **GIFs (Raster)**: Schwer zu kontrollieren, da die Steuerung der Animation in den GIF-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie im W3C-Dokument ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Betrachtet als eine Variante, die Video-Version von GIF. Das Format ist nicht standardisiert und muss auf eine "reale" Videodatei (z.B. eine .webm-Datei) verweisen, die an anderer Stelle existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass "_SVG ein textbasiertes offenes Webstandard ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten._" SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild unter Verwendung eines svg als Quelle">`. Dies bedeutet, dass das Aussehen und die Animation von SVGs durch CSS-Keyframes und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente über [SVG-Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden sowohl in Videospielen als auch in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem Div animieren und Schaden verursachen. Bewegter Text kann aus denselben Gründen Anfälle auslösen wie bewegte Bilder. Es ist eine gute Idee, die Verwendung von bewegtem Text zu vermeiden, da viele Screenreader bewegten Text nicht lesen können und es eine schlechte Benutzererfahrung ist, selbst für Menschen ohne Seh- oder Vestibulärprobleme.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammenkommen, um dem Benutzer eine starke Erfahrung zu bieten. Wir haben die `animation`-Eigenschaft bereits früher in diesem Dokument erwähnt. Sie ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu beenden. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation erfolgen sollte.
- `animation-timing-function`

Die Animationseigenschaft ist bereits von sich aus leistungsstark, aber kombiniert mit anderen Eigenschaften und Anfragen, wie `prefers-reduced-motion`, kann ein leistungsstarkes Set von Optionen für den Benutzer eingerichtet werden. Das Setzen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstelle von `animation: none` und `transition: none` ermöglicht einen Schutz, um Probleme in Fällen zu vermeiden, in denen eine Abhängigkeit davon besteht, dass die Animation ausgeführt wird.

### JavaScript-Animation

JavaScript wird häufig zur Steuerung von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der größte Teil des JavaScript-Codes, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1,0 ist der Standardwert und wird als normale Geschwindigkeit betrachtet; ein Wert von 0,5 ist halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeits-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite über [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten ist, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen und Größen in Ihrer Umgebung sind. SVGs werden oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet hervorragende Beispiele hierfür, indem es mehrere Bildquellen für die Sonne, Erde und Mond verwendet und verschiedene Canvas-Methoden nutzt, um die Geschwindigkeit und Animation der Erde zu steuern, während sie um die Sonne kreist, und des Mondes, während er um die Erde kreist. Nutzen Sie den im Tutorial verfügbaren CodePen, um `ctx.rotate` im Code anzupassen und zu sehen, wie sich die Animation verändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, positiv ein blinkendes Animation verwenden müssen…

Stellen Sie sicher, dass es eine Steuerung darauf hat. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zuerst sieht, und dass ein Benutzer sich dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine verfügbaren Steuerungen bietet, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Das Konvertieren eines animierten GIFs in ein Video ermöglicht es, Steuerungen an der Animation anzubringen und dem Benutzer Handlungsfreiheit zu geben. Es gibt viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Stellen Sie die Benutzererwartungen ein

Geben Sie den Benutzern vorher Hinweise darauf, was geschehen wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.2 Erfolgsrichtlinie 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv Blitzen haben müssen, halten Sie es klein. Allgemein gesagt, begrenzen Sie die Größe des Blitzens auf ein Gebiet von ungefähr 341 x 256 Pixel oder weniger. Diese Pixelgröße setzt voraus, dass ein Betrachter sich in einem typischen Abstand vom Bildschirm entfernt befindet. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in einem geringen Abstand betrachtet wird, etwa in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Oculus-Maske verwendet **oder von einer Oculus-Maske verwendet werden KANN**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, weil das Bild viel näher an den Augen eines Nutzers ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Der größere Kontrast der Textfarbe zu ihrem Hintergrund (technisch als _Leuchtstärke-Kontrastverhältnis_ bezeichnet, laut W3.org's Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/)), desto einfacher ist ein solch gestalteter Inhalt zu lesen. Benutzer mit eingeschränktem Sehvermögen schätzen besonders die Bemühungen, den hohen Kontrast von Text gegenüber seinem Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist das **_Reduzieren_** des Kontrastes tatsächlich eine Methode, um die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Verringern Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder im Internet veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Auch ein Online-Tool, das verfügbar ist, ist pinetools.coms [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie vorhaben, animierte GIFs zu erstellen, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

Auch JavaScript ist eine Option zum dynamischen Reduzieren des Kontrasts. Hier ist ein Codebeispiel aus dem Abschnitt, ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2). Beachten Sie, dass die Farbe in dem Beispiel im **RGB**-Farbraum beschrieben ist.

**HTML-Inhalte [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalte [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#javascript_2)**

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

#### Vermeiden Sie vollständig gesättigte rote Blitze

Wie bereits früher in diesem Dokument erwähnt, versammelte die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Unter ihren Ergebnissen war das Verständnis, dass "_Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2, eine Frequenz von mindestens 3 Hz hat und einen festen Sichtwinkel von mindestens 0,006 Steradianten (ca. 10 % des zentralen Gesichtsfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird auch als Risiko angesehen._" Sie stellen in diesem gleichen Konsens ebenfalls fest: "_Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko angesehen._"

### Alternativen von CSS-Stilen bieten

Mit dem Verständnis, dass viele Animationen und Blinkeffekte durch CSS-Methoden gesteuert werden können, ist es wichtig, Wege zu erkunden, um Nutzern alternative Optionen zu bieten und die Kontrolle dieser Optionen bequem und sichtbar zu gestalten.

#### Alternative Style Sheets

Moderne Browser zeigen die verfügbaren alternativen CSS in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie nach ihnen suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer durch das View-Menü gehen, in anderen Fällen werden sie in den Einstellungen dargestellt, manchmal beides. Nicht alle Benutzer wissen, dass sie diese Optionen über den Browser oder die Einstellungen suchen müssen. Deshalb lohnt es sich darüber nachzudenken, es auf die altmodische Weise zu tun, mit offensichtlichen Schaltflächen oder Links zum Ändern des Stils, damit Benutzer sie sehen können. Dies steht nicht im Widerspruch dazu, dass der Browser die alternativen Stylesheets lesen kann, oder die Fähigkeit des Benutzers, Präferenzen in den Einstellungen festzulegen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die sich auf sprachgesteuerte Systeme verlassen, oft auf solche Schaltflächen und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu verwenden oder auf mobile Geräte bei Berührungsereignissen zugreifen zu können.

Gängige Möglichkeiten, die alternativen Stylesheets in Ihre HTML-Dokumente einzubinden, sind die {{HTMLElement('link')}}-Elemente und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}}-Abschnitt des Webdokuments.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets einzubinden, jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Indem Sie alternative Stylesheets verwenden (denken Sie daran, die Titel hinzuzufügen), ermöglichen Sie Nutzern, über ihre Browser alternative Stile zu wählen.

### Dynamisches Stilwechseln

Ein Problem beim Verlassen auf den Browser, um alternative Stile zu enthüllen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder, aufgrund ihrer Behinderung, nicht in der Lage dazu sind. Schaltflächen oder Links machen es offensichtlich, dass Optionen verfügbar sind, für viele dankbare Benutzer. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, um dem Benutzer zu ermöglichen, zwischen den verschiedenen Stylesheets zu wechseln. Das gesagt, die Nutzung alternativer Stylesheets ist nicht die einzige Option. Eine weitere Option besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Nutzung dynamischer Stilinformatio](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), "wo es möglich ist, bevorzugt es die Dynamik von Klassen mit der [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Aussehen aller Styling-Haken in einem einzigen Stylesheet gesteuert werden kann." Eines der besten verfügbaren Beispiele dazu, wie man dies tun kann, ist von der W3C-Seite ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drastische Lösung; aber es ist eine, die manchmal notwendig ist für Lehrer und andere öffentliche Bedienstete, die diejenigen mit extremen Empfindlichkeiten bedienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist, wie dies über CSS erreicht wird:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Beim Einrichten von Medienabfragen ermöglichen Sie Nutzern Steuerungen; diese Steuerungen werden im Browser oder im Betriebssystem verfügbar gemacht. Sehen Sie sich das MDN-Dokument [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely) an, um mehr Details darüber zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie Sie den Code `prefers-reduced-motion` verwenden, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder sehen sich das untenstehende Beispiel vom Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Es gibt ein mächtiges Werkzeug für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medien-Update-Funktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Der Großteil der modernen Technologie aktualisiert sich mit einer Geschwindigkeit, die keine Probleme mit Photosensibilität verursacht. Aber nicht jeder kann sich die neueste Technologie leisten: ältere oder weniger leistungsstarke Computer können niedrige Aktualisierungsraten haben. Das [AbilityNet-Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsie und CRT/LCD-Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf Flimmerfrequenzen in Hz:

- "_Dieser Effekt ist bis zu 70 Hz beobachtbar und dokumentiert._"
- "_Diese Studien scheinen darauf hinzuweisen, dass Sie Flimmerfrequenzen unter 70 Hz meiden sollten und eine Frequenz verwenden sollten, die nicht durch 10 teilbar ist._"

Eric Bailey von CSS-Tricks fand eine innovative Nutzung der Update-Funktion, die, in Kombination mit einer animierten Dauer oder einer dauerhaften Weitergabe, in einer Geschwindigkeit soll enden, die für das menschliche Auge nicht wahrnehmbar ist. In anderen Worten, Erics Techniken adressieren das Aktualisierungsraten-Problem. Der CSS unten stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Die [`update`](/de/docs/Web/CSS/Reference/At-rules/@media/update)-Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts zu berechnen, den Inhalt zu verändern, sobald er gerendet wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentierfunktionen

### Media Queries Stufe 5

EnvironmentMQ (Geplant in Media Queries Stufe 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Level in Bezug auf eine Lux-Messung zu definieren, weil Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen heben auch den Unterschied in der Technologie hervor, wie e-Ink, das auch im hellen Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die das nicht tun.
- `environment-blending`
  - : Aus dem W3C-Entwurfsdokument, Media Queries Stufe 5: "_Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfeature wird verwendet, um die Eigenschaften des Benutzeranzeigegeräts zu erfragen, sodass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen und/oder Layout des Dokuments zu ändern, je nach Displaytechnologie, um die Anziehungskraft zu erhöhen oder die Lesbarkeit zu verbessern._"

#### Nutzerpräferenz-Medienfunktionen (Geplant in Media Queries Stufe 5)

[Nutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Stufe 5](https://drafts.csswg.org/mediaqueries-5/) sind vielversprechend, da sie dem Benutzer Kontrolle über Medien bieten. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [Nutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "zeigt die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfunktion an, ob der Inhalt normal angezeigt wird oder ob Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) zwingt der Benutzeragent das vom Benutzer bevorzugte Farbpalette auf die Seite, indem er die vom Autor gewählten Farben überschreibt. Aus dem W3C-Entwurfs-Dokument, Media Queries Stufe 5 Abschnitt zu erzwungenen Farben: "_Das Medienfeature `forced-colors` wird verwendet, um zu erkennen, ob der Benutzeragent einen [erzwingten Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine vom Benutzer gewählte eingeschränkte Palette auf der Seite durchsetzt._" Der Benutzer muss auf diese Fähigkeit hingewiesen werden, und sie muss mit dem entsprechenden Wert für die prefers-color-scheme-Medienabfrage kompatibel sein.
- `light-level`
  - : Aus dem W3C-Entwurfsdokument, Media Queries Stufe 5 Abschnitt zu Licht-Level: "_Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfunktion wird verwendet, um Informationen über das Umgebungslicht abzufragen, in dem das Gerät verwendet wird, sodass der Autor den Stil des Dokuments in Reaktion darauf anpassen kann._" Dies wird ein Segen sein für diejenigen mit motorischen Problemen oder für einige mit kognitiven Schwierigkeiten, die den richtigen "Knopf" nicht finden können, um ihre Bildschirm-Einstellungen zu ändern.
- prefers-contrast
  - : Aus dem W3C-Entwurfsdokument, Media Queries Stufe 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): "_Die `prefers-contrast` Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer das System gebeten hat, den Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen kleinen Kontrastunterschied zum Text-Hintergrund hat und würden einen größeren Kontrast bevorzugen."_ Manchmal kann es zu viel Kontrast geben; ein Heiligenschein-Effekt um den Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Den Kontrast in die Nutzungskontrolle zu legen ist ein definitives Geschenk für die Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 von den Entwürfen von CSSWG.org integriert mit der im HTML definierten [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop). [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierungshilfe und Unterstützung

Die Anforderung für die Eigenschaft `literal` wird von [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-erläuterung) übernommen.

**Anforderung:** Einige Nutzer können keinen nicht-wörtlichen Text und keine Symbole wie Metaphern, Idiome usw. verstehen. Die `literal`-Eigenschaft ist dazu gedacht, Text oder Bilder als nicht wörtlich zu kennzeichnen, und ermöglicht es dem Autor, nicht-wörtlichen Texten und Bildern den Nutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [SVG-Effekte auf HTML-Inhalt anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- {{cssxref("&lt;color&gt;")}}
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsthread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash-Definition Nr. 553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/ungenaue Dimensionsdefinitionen Nr. 585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Photosensibilität, eine der komplexesten Bedingungen der Epilepsie beleuchten](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsie-Stiftung: _"Bestimmte Individuen werden mit einer besonderen Empfindlichkeit gegenüber blitzenden Lichtern oder kontrastierenden visuellen Mustern, wie Streifen, Gittern und Schachbrettern, geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallsartige Entladungen, wenn es dieser Art von visueller Stimulation ausgesetzt ist."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) _"Photosensitive Anfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden."_
- [Durch Licht- und Muster-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmetrik und Management — Teil 2-2: Farbmanagement — Erweiteter RGB-Farbraum — scRGB

### Analysewerkzeug für photosensitive Epilepsie

Mit dem Harding-Tool wird allgemein als einer der beiden „Goldstandards“ zur Analyse von Flashes angesehen.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Explainer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Module](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Verweisen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
