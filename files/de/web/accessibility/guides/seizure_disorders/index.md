---
title: Barrierefreiheit im Web bei Krampfanfällen und körperlichen Reaktionen
short-title: Krampfanfälle und körperliche Reaktionen verhindern
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Dieser Artikel stellt die Konzepte vor, die der barrierefreien Gestaltung von Webinhalten für Menschen mit vestibulären Störungen zugrunde liegen, sowie Möglichkeiten, Inhalte zu messen und zu verhindern, die zu Krampfanfällen und/oder anderen körperlichen Reaktionen führen.

## Überblick

### Krampfanfälle

Durch Licht verursachte Krampfanfälle werden als photosensitive Epilepsie bezeichnet. Inhalte, die flackern, aufblitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Krampfanfälle oder andere beeinträchtigende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen verursachen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von „Reflexepilepsie“ – Krampfanfälle, die als Reaktion auf einen Auslöser auftreten. Bei photosensitiver Epilepsie werden Krampfanfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch Lesen oder Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Dass statische Bilder Krampfanfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in dem darauf hingewiesen wird: „_Certain visual images, even in the absence of motion or flicker, can trigger seizures in patients with photosensitive epilepsy_“. Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: „_Static or moving patterns of discernible light and dark stripes have the same effect as flashing lights because of the alternation of dark and bright areas._“ Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem etwas „quantifizieren“: _„A pattern with the potential for provoking seizures contains clearly discernible stripes, numbering more than five light-dark pairs of stripes in any orientation.“_ Zusätzlich zu Streifen ist laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch bekannt, dass Schachbrettmuster photosensitive Krampfanfälle verursachen können.

Obwohl statische Bilder mögliche Auslöser sind, sind sie weniger zuverlässig. Der gut etablierte und starke Auslöser sind blinkende Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF merkt an: _„The only thing that is really documented is flashing lights, which can trigger seizures in patients with photosensitive epilepsy. Only a few types of epilepsies are photosensitive though, and the vast majority of epilepsies are not.“_ Zusätzlich zu durch Photosensitivität ausgelösten Krampfanfällen kann das Anhören bestimmter Musikstücke auch sogenannte musikogene Krampfanfälle auslösen, obwohl diese Arten von Krampfanfällen offenbar deutlich seltener sind. Eine hervorragende Einführung in das Thema musikogener Krampfanfälle bietet die Webseite von Epilepsy Ontario über [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Krampfanfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest: „_a seizure is an event and epilepsy is the disease involving recurrent unprovoked seizures_.“ Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _„Sudden unexpected death in epilepsy (SUDEP) … likely the most common disease-related cause of death in people with epilepsy. It is not frequent but it is a very real problem and people need to be aware of its risk“_.

Der Punkt ist: Krampfanfälle können definitiv tödlich sein und sind es auch. Entwicklerinnen, Entwickler, Designerinnen und Designer sind außerordentlich wichtig, um das Web für Menschen mit Empfindlichkeiten gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Krampfanfälle können tödlich sein, aber auch diejenigen, die „nur“ beeinträchtigend sind, können so schwerwiegend sein, dass sie Nutzende handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und weitere können ebenfalls so schwerwiegend sein, dass Nutzende nicht mehr handlungsfähig sind. Der Artikel der Epilepsy Foundation ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) enthält eine Liste von Auslösern, die bei photosensitiven Menschen Krampfanfälle verursachen können. Hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund von Flimmern oder durchlaufenden Bildern.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht wie Sonnenlicht, insbesondere wenn es auf Wasser glitzert, durch Bäume flimmert oder durch die Lamellen von Jalousien scheint.
- Bestimmte visuelle Muster, insbesondere Streifen in kontrastierenden Farben.

Derselbe Artikel führt weiter aus, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor genannt wird; Wellenlängen im roten Bereich des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: _„Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes“_, und führt sehr spezifisch aus: _„People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing“_.

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Leuchtdichte mit hoher Frequenz verändert – was einfach über JavaScript möglich ist –, kann echten Schaden verursachen. Außerdem kann Flimmern überall auftreten. Beispielsweise können „Spinner“, die üblicherweise während des Ladens von Seiten angezeigt werden, beim Drehen leicht „flimmern“.

Für Personen mit Problemen bei motorischen Fähigkeiten bestehen zusätzliche Bedenken. Beispielsweise heißt es auf der Seite des Trace Research & Development Center zum [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass _„Photosensitive seizures can be provoked by certain types of flashing in web or computer content, including mouse-overs that cause large areas of the screen to rapidly flash on and off repeatedly“_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Erkrankungen verbunden sind und nicht besonders auf Krampfanfälle hindeuten – mit Ausnahme möglicherweise der Desorientierung, die bei Krampfanfällen auftritt. Krampfanfälle sind jedoch nicht die einzige mögliche nachteilige körperliche Reaktion auf Blitzen, Flimmern, Blinken und ähnliche Reize. 1997 zeigte ein japanischer Zeichentrickfilm eine animierte „Virusbombe“. Einige der Kinder, die den Film sahen, reagierten mit Krampfanfällen, andere mit Übelkeit, Zittern und Bluterbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die folgenden körperlichen Störungen sind alles mögliche Folgen; jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie handlungsunfähig macht.

- Krampfanfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken und Flimmern

Obwohl „Blitzen“ und „Blinken“ manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während sich Blitzen auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz von mehr als 3 Hz (Flimmern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest: _„Generally, flashing lights between the frequencies of five to 30 flashes per second (Hertz) are most likely to trigger seizures. In order to be safe, the consensus recommends that photosensitive individuals should not be exposed to flashes greater than three per second.“_ Bei einigen Menschen können Blitzen oder Blinken jedoch bereits bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA weist in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) darauf hin, dass Blinken und Blitzen wirkungsvolle Mittel sein können, um Aufmerksamkeit zu erregen – wie es bei Warnschaltflächen erforderlich ist. Dies setzt voraus, dass Nutzende den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist. Für einige Nutzende verdeutlichen blinkende Schaltflächen auch, dass sie sparsam und mit Vorsicht eingesetzt werden müssen. Bei der Anwendung auf Webdesign müssen Systeme, die Beschäftigte eines Unternehmens durch eine Bildschirmübernahme mit einer blinkenden Notfallwarnung auf Gefahr hinweisen, die Frequenz, Größe und Leuchtdichteänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flimmern – wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist _„A flash is a potential hazard if it has luminance ≥20 cd/m<sup>2</sup>, occurs at a frequency of ≥3 Hz, and occupies a solid visual angle of ≥0.006 steradians (approximately 10% of the central visual field or 25% of screen area at typical viewing distances).“_

Wie weit ist eine typische Betrachtungsdistanz? Die Empfehlung für eine typische Betrachtungsdistanz zum Zeitpunkt der Erstellung lautete: _„the area can be taken as applying to an area >25% of the area of a television screen, assuming standard viewing distances of ≥2 m (∼9 feet)“_. Seitdem hat sich viel verändert, und heute sitzen wir deutlich näher an unseren Bildschirmen.

Auch bestimmte Farben und/oder Farbkombinationen sind relevant. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest: _„…complexities underlying brain dynamics could be modulated by certain color combinations more than the others, for example, red-blue flickering stimulus causes larger cortical excitation than red-green or blue-green stimulus.“_

### Blitzen und rotes Blitzen

Die allgemeinen Schwellenwerte für Blitzen und rotes Blitzen gemäß [WCAG 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) werden wie folgt definiert:

- Ein **allgemeines Blitzen** wird als ein Paar entgegengesetzter Änderungen der [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtdichte definiert, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt und wobei ein „Paar entgegengesetzter Änderungen“ eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist.
- Ein **rotes Blitzen** wird als jedes Paar entgegengesetzter Übergänge definiert, an dem ein gesättigtes Rot beteiligt ist.

Diese Standards basieren auf früheren Forschungsergebnissen. Im Jahr 2004 berief die Epilepsy Foundation of America einen Workshop ein und entwickelte einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Krampfanfälle. Darin heißt es: _„A flash is a potential hazard if it has luminance at least 20 cd/m<sup>2</sup>, occurs at a frequency of least 3 Hz, and occupies a solid visual angle of at least 0.006 steradians (about 10% of the central visual field or 25% of screen area at typical viewing distances).“_ Der Übergang zu oder von gesättigtem Rot ist wichtig und stellt für sich ein Risiko dar: _„Irrespective of luminance, a transition to or from a saturated red is also considered a risk.“_

### Größe und Abstand

#### Wie groß? Es kommt darauf an

Sowohl die „relative“ Größe als auch der Abstand sind wichtig. Laut [PEAT](https://trace.umd.edu/peat/) gilt: _„The combined area of flashes occurring concurrently occupies no more than a total of one quarter of any 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 by 768 pixels.“_

Dass das Sichtfeld eine wichtige Überlegung ist, wird im Artikel zu WCAG 2.3.1 weiter ausgeführt: _„The 1024 x 768 screen is used as the reference screen resolution for the evaluation. The 341 x 256 pixel block represents a 10 degree viewport at a typical viewing distance. (The 10 degree field is taken from the original specifications and represents the central vision portion of the eye, where people are most susceptible to photo stimuli.)“_

Dieses Verhältnis der Pixelbereiche berechnet die relative Größe, aber auch der Abstand ist relevant.

Der Abstand ist wichtig, weil er das gesamte Sichtfeld beeinflusst. Wenn Betrachtende beim Spielen Augenmasken tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm ausgefüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben – auf einem Smartphone, Computer oder Headset. Die Sorge über blinkende Bilder in einer Augenmaske wächst, da die Maske so nah an den Augen ist.

Forschungsergebnisse deuten im Allgemeinen darauf hin, dass die Nutzung von VR aufgrund höherer Bildwiederholraten tatsächlich sicherer sein kann als der normale Bildschirmkonsum. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst: _„The limited data so far available raise no special seizure concerns in terms of VR technology, although this view may change with more experience. Certain types of VR content, including bright flashes, provocative patterns, or color changes would be expected to provoke seizures, just as they do in the real world.“_

(Beachten Sie, dass einige Nutzende blinkende Cursor möglicherweise nicht sehen können und Migräne, Bewegungskrankheit oder Desorientierung bekommen können, obwohl blinkende Cursor einen deutlich kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Auslöser; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsy Foundation of America führt auf, wie viele Hell-Dunkel-Streifenpaare unter welchen Bedingungen wahrscheinlich Krampfanfälle auslösen. Ist ein Muster unverändert und gerade, sind acht Linien das maximal Zulässige; wellt es sich, dürfen es nicht mehr als fünf Linien sein.

Parallaxeneffekte können Desorientierung verursachen. Verwenden Sie Parallaxeneffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass Nutzende über ein Bedienelement verfügen, um sie auszuschalten.

„A pattern with the potential for provoking seizures contains clearly discernible stripes, numbering more than five light-dark pairs of stripes in any orientation. When the light-dark stripes of any pattern collectively subtend at the eye from the minimal-expected viewing distance a solid angle of >0.006 steradians, the luminance of the lightest stripe is >50 cd/m<sup>2</sup>, and the pattern is presented for ≥0.5 s, then the pattern should display no more than five light-dark pairs of stripes, if the stripes change direction, oscillate, flash, or reverse in contrast; if the pattern is unchanging or smoothly drifting in one direction, no more than eight stripes.“

Nicht alles ist bekannt, und selbst bei den oben aufgeführten Messwerten spielen zusätzliche Faktoren eine Rolle. Beispielsweise erhöht der Übergang von einem kleineren zu einem größeren Bereich die Wahrscheinlichkeit einer Reaktion des Gehirns, ebenso wie ein erhöhter Kontrast und eine Erhöhung der räumlichen Frequenz von niedrig auf mittel. Außerdem ist bekannt, obwohl der Grund dafür nicht verstanden wird, dass der Wechsel von grundlegenden Ausrichtungen – beispielsweise Streifen – zu mehreren Ausrichtungen – beispielsweise dem Schachbrettmuster, das entsteht, wenn ein Satz Streifen über dem ursprünglichen, aber senkrecht dazu, angeordnet wird – das Gehirn beeinflusst.

### Farben

Das Verständnis von Farbe ist für Barrierefreiheit wichtig. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) im Zusammenhang mit Barrierefreiheit im Web und Barrierefreiheit im Allgemeinen.

Wie eine Farbe zu ihrem Hintergrund steht – üblicherweise als Kontrast beschrieben – und wie stark sich die Farbe in einer Animation von Bild zu Bild verändert, ist wichtig. Weitere Informationen hierzu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde nachgewiesen, dass [einige Farben mit größerer Wahrscheinlichkeit epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird allgemein durch die Farbe Rot beeinflusst. Ihr Einfluss auf das Verhalten wurde sogar bei Tieren festgestellt.

- **Tests zur Rotentsättigung:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärztinnen und Augenärzte einen Test damit durchführen. Der Test zur Rotentsättigung beurteilt die Unversehrtheit des Sehnervs. Weitere Informationen dazu, wie Augenärztinnen und Augenärzte diesen Test verwenden, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischer Hirnverletzung die [kognitive Funktion in einer roten Umgebung eingeschränkt ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, für den spezielle Tests existieren. Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinträchtigt, scheinen Farben im Wellenlängenbereich des roten Spektrums besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte beim Testen des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten deutlich höher als erwartet waren. Es zeigte sich, dass wir wesentlich empfindlicher auf gesättigtes rotes Blitzen reagieren. Siehe dazu das Video [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als „**websafe**“ gilt. Das bedeutet _nicht_, dass sie „sicher ist, keine Krampfanfälle zu verursachen“, sondern lediglich, dass die Farbe mit der zum Erzeugen von Bildschirmfarben verwendeten Technologie möglicherweise zuverlässig und genau reproduziert werden kann.

## Messen, um Schaden zu verhindern

Die Messung des Schadenspotenzials ist ein guter Ausgangspunkt. Zu den bei Tests berücksichtigten Faktoren gehören Farbe, Leuchtdichte, Größe, Kontrast und bei Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 berief die Epilepsy Foundation of America einen Workshop ein, um einen Expertenkonsens über photosensitive Krampfanfälle zu entwickeln. Die folgenden fachlichen und maßgeblichen Informationen stammen aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitzen stellt eine potenzielle Gefahr dar, wenn es eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz erfolgt und einen Raumwinkel von ≥0,006 Steradiant einnimmt, was ungefähr 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen entspricht. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial, Krampfanfälle hervorzurufen, enthält klar erkennbare Streifen mit mehr als fünf Hell-Dunkel-Streifenpaaren in beliebiger Ausrichtung. Wenn die Hell-Dunkel-Streifen eines Musters aus der minimal erwarteten Betrachtungsdistanz am Auge zusammen einen Raumwinkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Streifenpaare anzeigen, sofern die Streifen ihre Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren. Ist das Muster unverändert oder bewegt sich gleichmäßig in eine Richtung, sollte es nicht mehr als acht Streifen enthalten. Diese Prinzipien lassen sich bei festen Medien, beispielsweise einer zuvor aufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, leichter anwenden als bei interaktiven Medien.

Das „cd/m<sup>2</sup>“ steht für Candela pro Quadratmeter. Doch wie hängt dies für Webentwicklerinnen und Webentwickler mit Messungen von Farbe, Leuchtdichte und Sättigung zusammen?

Die Candela ist eine SI-Einheit des Internationalen Einheitensystems für Lichtstärke. Sie ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) erläutert dies anhand dessen, womit wir als Entwickelnde vertraut sind: einem Anzeigegerät und dem RGB-Raum. Das ist hilfreich, weil für Monitore, Drucker und das Internet ein bestimmter Standard vorausgesetzt wird: **sRGB** (standard Red Green Blue).

> Als Maß für die pro Flächeneinheit abgestrahlte Lichtmenge wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Desktop-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) für Endverbraucher haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [Hochauflösende Fernsehgeräte](https://en.wikipedia.org/wiki/High-definition_television) liegen im Bereich von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die zentrale Erkenntnis ist, dass der **sRGB**-Farbraum ein gemeinsamer Bezugspunkt zwischen Forschung, Bewertungswerkzeugen und Entwickelnden ist, da er sich leicht aus dem häufig verwendeten Hex-Code umrechnen lässt.

### Menschliche Physiologie und Psychologie als Betrachtungsfaktor

Viele Fachleute arbeiten daran, Arten von Webinhalten, die als Auslöser für Krampfanfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Dabei darf jedoch nicht vergessen werden, dass Farbe ebenso mit menschlicher Wahrnehmung im Gehirn zu tun hat wie mit der Messung des Lichts, das von einem Computerbildschirm ausgeht.

Neben psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen Menschen. Es gibt Variationen und Nuancen darin, wie ein tatsächlicher Mensch Farbe und Licht wahrnimmt und darauf reagiert. Tom Jewett, Lecturer Emeritus für Computer Sciences an der Cal State University Long Beach, merkt beispielsweise Folgendes zur [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) an: _„…The distinction between levels of lightness is not actually linear as the HSL scale would imply; we are much more sensitive to changes in lighter values than to darker ones.“_

Es ist wichtig zu verstehen, dass Licht und seine Messwerte linear sind, menschliches Sehen und menschliche Wahrnehmung jedoch nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht, das von einem Computerbildschirm über die Distanz zum menschlichen Auge gelangt, durch das menschliche Sehvermögen gefiltert und anschließend vom menschlichen Gehirn verarbeitet wird, in Beziehung gesetzt werden kann, dauert an.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) gilt: _„Children and adolescents are more prone than adults to have an abnormal response to light stimulation, and the first light-induced seizure almost always occurs before age 20.“_ Der Artikel führt folgende Statistik an: _„Girls (60 percent) are more often affected than boys (40 percent), although seizures are more frequent in boys because they are more likely to be playing video games. Video games often contain potentially provocative light stimulation.“_

**Nutzertests sind sehr problematisch**. Natürlich möchte niemand eine zu Krampfanfällen neigende Person einem Nutzertest aussetzen. Das ist gefährlich. Daher gehört es zu den ethischsten Maßnahmen, die Entwickelnde und Gestaltende ergreifen können, Werkzeuge zu verwenden, die von Fachleuten auf diesem Gebiet entwickelt wurden, welche eng mit Ärztinnen und Ärzten zusammengearbeitet haben. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei allgemein verfügbare Werkzeuge, die von Forschenden und Ärztinnen bzw. Ärzten ethisch und professionell für Filme und Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat mit einem [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) einen Goldstandard gesetzt und darauf geachtet, es **_kostenlos_** zum Download bereitzustellen. PEAT kann Autorinnen und Autoren helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Krampfanfälle verursachen. Beachten Sie die Nutzungseinschränkung: **_Use of PEAT to assess material commercially produced for television broadcast, film, home entertainment, or gaming industries is prohibited. Use the Harding Test or other tools for commercial purposes._**

Eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland erhalten Sie beim [Trace Research & Development Center](https://trace.umd.edu/).

![Photosensitive Epilepsy Analysis Tool des College of Information Studies der University of Maryland.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Werkzeugs für kommerzielle Zwecke verboten ist, können Fernsehveranstalter den Harding Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Goldstandard. Fernsehveranstalter in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen. Daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analysen als auch Zertifizierungen von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen für Barrierefreiheit für Entwickelnde

Alle Animationen sind potenziell gefährlich. Als Designerinnen, Designer, Entwicklerinnen und Entwickler tragen wir die Verantwortung, keinen Schaden zu verursachen – weder absichtlich noch unbeabsichtigt. Wenn wir etwas einbinden müssen, das Schaden verursachen kann, ist es entscheidend, zu verhindern, dass Nutzende den schädlichen Inhalt versehentlich antreffen, und ihnen Möglichkeiten bereitzustellen, Animationen zu verhindern und zu steuern, um potenzielle Schäden zu mindern.

### Was Webentwickelnde tun können

#### Keinen Schaden verursachen

[WCAG-Leitlinie 2.3 Krampfanfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet eine Übersicht: _„Do not design content in a way that is known to cause seizures or physical reactions.“_ Binden Sie keine Animation ein, die Nutzende nicht steuern können. Gestalten Sie nicht mit Mustern, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie ein GIF oder PNG mit Blitzeffekten einbinden müssen, zeichnen Sie es stattdessen in einem Videoformat auf, damit Nutzenden Bedienelemente zur Verfügung stehen. Geben Sie Nutzenden die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich darzustellen.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwickelnde oder Gestaltende, ob stroboskopartige Inhalte wirklich auf Ihrer Webseite erforderlich sind. Selbst wenn sie korrekt umgesetzt sind, gibt es Personen, die problematische Inhalte von Ihrer Website herunterladen und als Waffe einsetzen könnten. Der erste dokumentierte Versuch, mithilfe von Animationen über Computer körperlichen Schaden zu verursachen, soll am Samstag, dem 22. März 2008, erfolgt sein: Die Website der Epilepsy Foundation wurde durch Beiträge mit blinkenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Nutzende mit vestibulären Störungen, die auf der Website Hilfe suchten, waren betroffen.

Nachdem der Journalist Kurt Eichenwald, der bekanntermaßen Epilepsie hat, im Dezember 2016 durch ein zugesandtes animiertes GIF einen Krampfanfall erlitt, wurden eine Reihe rechtlicher Schritte eingeleitet. Das blinkende GIF enthielt die Nachricht: _„You deserve a seizure for your posts“_.

#### Exposition und Zugriff kontrollieren

Die Kontrolle darüber, ob eine Seite angezeigt wird, ist entscheidend, um sicherzustellen, dass eine für Krampfanfälle anfällige Person ihr nicht versehentlich ausgesetzt wird. WCAG weist darauf hin, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, dass ein Bild oder eine Animation Krampfanfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zunächst eine Warnung über den Inhalt anzeigen und ihn dann an einer Stelle platzieren, an der Nutzende ihn ausdrücklich aktivieren müssen, beispielsweise durch Klicken auf eine Schaltfläche. Alternativ sollten Sie sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie, Crawl-Direktiven für Suchmaschinen festzulegen, um darauf hinzuweisen, dass potenziell schädliche Ressourcen nicht in Suchindizes aufgenommen werden sollten.
Dies kann mithilfe von Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Element mit einschränkenden Regeln wie `noindex, nofollow` erfolgen.
Wenn die Seite nicht indexiert (`noindex`) und Links auf der Seite nicht verfolgt werden (`nofollow`), ist es weniger wahrscheinlich, dass Nutzende über eine Suche darauf stoßen:

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

Für Nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}}-HTTP-Antwort-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich. Animierte GIFs verdienen jedoch besondere Erwähnung, da sie weit verbreitet sind und die Animationsgeschwindigkeit innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das npm-Paket [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht es, eine Animation _so früh wie möglich_ in einer bestimmten HTTP-Anfrage zu bestimmen.
- Zakirt stellt ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) bereit.

Stellen Sie bei animierten GIFs sicher, dass die Animation inaktiv ist, bis Nutzende sie aktivieren möchten. Beispielsweise müssen Nutzende eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie bei animierten GIFs müssen Nutzende eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Dafür gibt es viele Möglichkeiten, etwa das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut nicht zu `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} als Anfangszustand auf `paused` zu setzen. Ein eindrucksvolles Beispiel dafür, wie dies tatsächlich funktionieren kann, finden Sie im Artikel von Kirupa ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um eine sehr barrierefreie, von Nutzenden steuerbare Erfahrung zu schaffen.

{{cssxref("animation-play-state")}} ist eine CSS-Eigenschaft, die festlegt, ob eine Animation ausgeführt oder angehalten wird.

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

### Sicherstellen, dass Nutzende Animationen stoppen und starten können

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch wiedergegeben und hat auch keine Bedienelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit Nutzende das Video sowohl anhalten als auch starten können.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Bedienelemente verfügbar sind

Die Eigenschaft `HTMLMediaElement.controls` spiegelt das HTML-Attribut `controls` wider, das steuert, ob Bedienelemente der Benutzeroberfläche zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über für Nutzende zugängliche Bedienelemente verfügt, fügen Sie das Wort „controls“ zu HTML-Video- und Audioelementen hinzu.

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

Dasselbe Beispiel auf Audio angewendet:

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

Beachten Sie, dass das Audio in Videos durch das Inhaltsattribut `muted` gesteuert werden kann, obwohl sich der Inhalt im {{HTMLElement('video')}}-Element und nicht im {{HTMLElement('audio')}}-Element befindet. Dieses Beispiel stammt aus der Beschreibung des Abschnitts zum Attribut [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) im HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch wiedergegeben wird, bis Nutzende aktiv werden und die Stummschaltung des Audios aufheben.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, unterscheiden sich die Mechanismen zu ihrer Behandlung stark. Deshalb gibt es keine Universallösung für dieses Problem. Dies wird zusätzlich dadurch erschwert, dass bereits die Klassifizierung von Dateien ihre Behandlung kompliziert. Beispielsweise wird das Dateiformat `.gif` üblicherweise als Bild verstanden, gilt aber in manchen Kreisen aufgrund seiner Animierbarkeit auch als Videoformat. Eine umfassende Liste von Medientypen finden Sie auf der Seite [Media Types](https://www.iana.org/assignments/media-types) von IANA.org.

Die Methoden zu ihrer Erkennung sind keine einfache Aufgabe. Möglicherweise möchten Sie den Standard [MIME Sniffing](https://mimesniff.spec.whatwg.org/) auf whatwg.org beachten. Fast jede Bildart kann animiert werden; die Art der Animation unterscheidet sich jedoch und damit auch die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas enthält einen ausgezeichneten Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein fester Bestandteil von Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Grundlagen der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung erläutert werden.
- **GIFs (Raster)**: Schwer zu kontrollieren, da die Steuerung ihrer Animation in den GIF-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie in W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein hervorragender Stack-Overflow-Artikel zu diesem Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript).
- **GIFV (Raster)**: Gilt als Variante und Videoversion von GIF. Das Format ist nicht standardisiert und muss auf eine „echte“ Videodatei verweisen, beispielsweise eine `.webm`-Datei, die an anderer Stelle existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Von einigen ebenfalls als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert sein.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest: _„SVG is a text-based open Web standard. It is explicitly designed to work with other web standards such as [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), and [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL).“_ SVGs können wie in diesem Beispiel als Bild verwendet werden: `<img src="example.svg" alt="This is an image using an svg as a source">`. Das bedeutet, dass Aussehen und Animation von SVGs durch CSS-Keyframes und Animationen gesteuert werden können. Informationen zur Interaktion mit JavaScript finden Sie in den MDN-Dokumenten über [SVG-Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann ebenfalls animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden verursachen. Bewegter Text kann aus denselben Gründen wie bewegte Bilder Krampfanfälle auslösen. Vermeiden Sie daher, Ihren Text zu animieren. Bewegter Text sollte ohnehin vermieden werden, da viele Screenreader ihn nicht lesen können und er selbst für Personen ohne Seh- oder vestibuläre Beeinträchtigungen eine schlechte Benutzererfahrung darstellt.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um eine leistungsfähige Erfahrung für Nutzende zu schaffen. Die Eigenschaft `animation` wurde bereits weiter oben in diesem Dokument erwähnt. Sie ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Sie kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die Eigenschaft `animation` ist bereits für sich genommen leistungsfähig. In Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann jedoch ein leistungsfähiger Satz an Optionen für Nutzende eingerichtet werden. Das Festlegen kurzer Zeitdauern für die Eigenschaften `animation-duration` und `transition-duration`, statt sie auf `animation: none` und `transition: none` zu setzen, bietet eine Schutzmaßnahme, um Probleme zu vermeiden, falls eine Abhängigkeit davon besteht, dass die Animation ausgeführt wird.

### JavaScript-Animation

JavaScript wird häufig zur Steuerung von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der Großteil des JavaScript-Codes, der für HTML-Video gilt, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Bedienelemente für die Wiedergaberate sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist der Standardwert und gilt als normale Geschwindigkeit; ein Wert von 0.5 entspricht der halben Geschwindigkeit, ein Wert von 2.0 der doppelten Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Legen Sie die Eigenschaft für die Wiedergaberate fest: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web Animations](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite über [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) enthält das folgende Codebeispiel dafür, wie alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt werden können:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Eine der einfachsten Methoden besteht darin, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und anschließend zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen als Bildquelle verwenden können, sofern diese in Ihrer Umgebung zulässige Dateitypen – und Größen – sind. SVGs sind aufgrund von Sicherheitsbedenken häufig nicht zulässig. Das MDN-Dokument [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet hervorragende Beispiele hierfür. Es verwendet mehrere Bildquellen für Sonne, Erde und Mond sowie verschiedene Canvas-Methoden, um Geschwindigkeit und Animation der Erde auf ihrer Umlaufbahn um die Sonne und des Mondes auf seiner Umlaufbahn um die Erde zu steuern. Verwenden Sie den mit diesem Tutorial verfügbaren CodePen, um `ctx.rotate` im Code anzupassen und zu sehen, wie sich die Animation durch Änderungen verändert.

#### Wenn Sie unbedingt eine blinkende Animation verwenden müssen …

Stellen Sie sicher, dass sie über ein Bedienelement verfügt. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn Betrachtende ihr erstmals begegnen, und dass Nutzende die Animation ausdrücklich aktivieren müssen.

Ein Beispiel für ein Format ohne für Nutzende verfügbare Bedienelemente ist eine GIF-Datei. Die Animationsgeschwindigkeit wird im GIF-Bild selbst gesteuert. Durch das Konvertieren eines animierten GIFs in Video können Bedienelemente für die Animation bereitgestellt werden und Nutzende erhalten Handlungshoheit. Viele kostenlose Online-Konverter sind verfügbar, beispielsweise [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Erwartungen der Nutzenden festlegen

Informieren Sie Nutzende vor dem Klicken auf einen Link darüber, was passieren wird. Beschreiben Sie die folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Change on Request](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Klein halten

Wenn Sie unbedingt Blitzeffekte benötigen, halten Sie sie klein. Begrenzen Sie die Größe des Blitzens im Allgemeinen auf einen Bereich von ungefähr 341 mal 256 Pixeln oder weniger. Diese Pixelgröße geht davon aus, dass Betrachtende einen typischen Abstand zum Bildschirm haben. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus kurzer Distanz betrachtet wird, etwa in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. WebVR kann auf einem Smartphone, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet, **oder von einer Augenmaske verwendet werden KANN**, etwa Firefox Reality – einem Browser für virtuelle Realität –, stellen Sie sicher, dass die Größe des Rechtecks deutlich kleiner als 341 mal 256 Pixel ist, da das Bild viel näher an den Augen der Nutzenden liegt.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast für die Barrierefreiheit vorteilhaft. Je höher der Kontrast einer Textfarbe zu ihrem Hintergrund ist – technisch als _Leuchtdichtekontrastverhältnis_ bezeichnet, laut der W3.org-Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/) –, desto leichter sind solche Inhalte zu lesen. Insbesondere Nutzende mit Sehschwäche profitieren von Bemühungen, einen hohen Kontrast zwischen Text und Hintergrund sicherzustellen. Wenn Inhalte animiert sind, ist das **_Reduzieren_** des Kontrasts jedoch tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass die animierten Inhalte Krampfanfälle verursachen. Verringern Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Am besten passen Sie den Kontrast an, bevor er ins Web hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe-Produktsuite eine hervorragende Ressource für herkömmliche Bilder. Ebenfalls für Bilder verfügbar ist das Online-Werkzeug [Brightness and contrast online](https://pinetools.com/brightness-contrast-image) von pinetools.com. Wenn Sie beispielsweise animierte GIFs erstellen möchten, beginnen Sie mit einem GIF mit einem niedrigeren Kontrastverhältnis.

JavaScript ist ebenfalls eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Example: Setting the background color of a paragraph"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

#### Vollständig gesättigte Rottöne für blinkende Inhalte vermeiden

Wie bereits weiter oben in diesem Dokument erwähnt, berief die Epilepsy Foundation of America im August 2004 einen Workshop ein, um einen Expertenkonsens über photosensitive Krampfanfälle zu entwickeln. Zu den Ergebnissen gehörte die Erkenntnis: _„A flash is a potential hazard if it has luminance at least 20 cd/m2, occurs at a frequency of least 3 Hz, and occupies a solid visual angle of at least 0.006 steradians (about 10% of the central visual field or 25% of screen area at typical viewing distances). A transition to or from saturated red also is considered a risk.“_ Im selben Konsens wird auch festgestellt: _„Irrespective of luminance, a transition to or from a saturated red is also considered a risk.“_

### Alternative CSS-Stile bereitstellen

Da viele Animationen und Blitzeffekte über CSS-Methoden gesteuert werden können, ist es wichtig, Möglichkeiten zu untersuchen, alternative Optionen für Nutzende verfügbar zu machen und die Steuerung dieser Optionen bequem und sichtbar zu gestalten.

#### Alternative Stylesheets

Moderne Browser zeigen das in alternativen Stylesheets verfügbare alternative CSS an, wenn Nutzende wissen, wo sie danach suchen müssen. In manchen Fällen werden alternative Stile angezeigt, wenn Nutzende das Menü „Ansicht“ verwenden, in anderen Fällen erscheinen sie in den Einstellungen, manchmal in beiden Bereichen. Nicht alle Nutzenden wissen, dass sie über den Browser oder die Einstellungen nach diesen Optionen suchen können. Daher sollte erwogen werden, dies auf herkömmliche Weise mit offensichtlichen Schaltflächen oder Links zum Ändern des Stils umzusetzen, damit Nutzende sie sehen können. Dies beeinträchtigt weder die Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, noch die Fähigkeit von Nutzenden, Einstellungen in den Browseroptionen festzulegen.

Es ist wichtig zu wissen, dass bestimmte Nutzende, etwa Personen, die auf Spracherkennungssysteme angewiesen sind, oft von herkömmlichen Schaltflächen und Links abhängen, weil ihre Behinderung sie daran hindert, eine Maus zu benutzen oder Touch-Ereignisse auf mobilen Tablets zu nutzen.

Übliche Methoden zum Einbinden alternativer Stylesheets in HTML-Dokumente sind die Verwendung des {{HTMLElement('link')}}-Elements und von {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im Bereich {{HTMLElement('head')}} der Webseite.

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

Durch die Verwendung alternativer Stylesheets – denken Sie daran, Titel hinzuzufügen – ermöglichen Sie Nutzenden, über ihren Browser alternative Stile auszuwählen.

### Dynamisches Wechseln von Stilen

Ein Problem beim Verlassen auf den Browser zur Anzeige alternativer Stile besteht darin, dass nicht alle Nutzenden technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder sie können dies aufgrund ihrer Behinderung nicht tun. Schaltflächen oder Links machen vielen dankbaren Nutzenden deutlich, dass Optionen verfügbar sind. Es gibt zahlreiche Möglichkeiten, Umschaltflächen hinzuzufügen, über die Nutzende zu verschiedenen Stylesheets wechseln können. Alternative Stylesheets sind jedoch nicht die einzige Option. Eine weitere Möglichkeit besteht darin, den Stil der Seite selbst zu verändern. Laut dem MDN-Dokument [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) gilt: _„where possible, it really is best practice to dynamically manipulate classes via the [`className`](/de/docs/Web/API/Element/className) property since the ultimate appearance of all of the styling hooks can be controlled in a single stylesheet“._ Eines der besten Beispiele dafür bietet die W3C-Seite ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extremfälle: Nur-Text-Alternativen

Ein separates alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, lässt sich einfach erstellen. Es ist eine radikale Lösung, die jedoch manchmal für Lehrkräfte und andere Beschäftigte des öffentlichen Dienstes notwendig ist, die Menschen mit extremen Empfindlichkeiten unterstützen müssen. Diese Personen können ihre Entwickelnden bitten, ein spezielles alternatives Stylesheet mit `display: none` zu erstellen. So geht das mit CSS:

```css
img {
  display: none;
}
```

#### Media Queries mit {{HTMLElement('style')}} nutzen

Durch das Einrichten von Media Queries ermöglichen Sie die Steuerung durch Nutzende; diese Bedienelemente stehen im Browser oder Betriebssystem zur Verfügung. Weitere Details dazu, wie Nutzende auf diese Bedienelemente zugreifen, finden Sie im MDN-Dokument [Barrierefreiheit: Was Nutzende tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely).

#### `prefers-reduced-motion`

Die Unterstützung von `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Ein großartiges Beispiel dafür, wie der Code `prefers-reduced-motion` verwendet wird, finden Sie im MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder im folgenden Beispiel aus dem Abschnitt ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Ambient-Light-API nicht verfügbar ist. Die Unterstützung entsteht derzeit.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Über Window.matchMedia() steht Entwickelnden ein leistungsfähiges Werkzeug zur Verfügung. Eine hervorragende Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Media-Feature `update`

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger „flimmert“ er. Die überwiegende Mehrheit moderner Technologien aktualisiert sich mit einer Frequenz, die keine Probleme bei Photosensitivität verursacht. Allerdings kann sich nicht jede Person die neueste Technologie leisten: Ältere oder leistungsschwache Computer können niedrige Aktualisierungsraten haben. Das [Factsheet von AbilityNet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt weitere Details zu Aktualisierungsraten.

Ein sehr alter Artikel von Tech Republic, ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), enthielt eine interessante Antwort zu Aktualisierungsraten in Hz:

- _„This effect is noticeable, and documented, up to 70 Hz.“_
- _„These studies would seem to indicate that you should stay away from refresh rates under 70 Hz, and use a rate not divisible by 10.“_

Eric Bailey von CSS-Tricks fand eine innovative Verwendung des Features `update`, um in Kombination mit `animation-duration` oder `transition-duration` mit einer für das menschliche Auge nicht wahrnehmbaren Rate abzuschließen. Mit anderen Worten: Erics Techniken behandeln das Problem der Aktualisierungsrate. Das folgende CSS stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das Media-Feature [`update`](/de/docs/Web/CSS/Reference/At-rules/@media/update) wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten nach deren Darstellung zu ändern. Es besitzt die Werte „none“, „slow“ und „fast“.

## Entwicklungs- und experimentelle Features

### Media Queries Level 5

EnvironmentMQ (geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen anhand einer Lux-Messung zu definieren, weil Geräte mit einem Lichtsensor üblicherweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen weisen außerdem auf technologische Unterschiede hin, etwa zwischen E-Ink, das bei hellem Tageslicht lesbar bleibt, und Flüssigkristallen, für die dies nicht gilt.
- `environment-blending`
  - : Aus dem W3C-Entwurfsdokument Media Queries Level 5: _„The [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) media feature is used to query the characteristics of the user's display so the author can adjust the style of the document. An author might choose to adjust the visuals and/or layout of the page depending on the display technology to increase the appeal or improve legibility.“_

#### Media-Features für Nutzendenpräferenzen (geplant in Media Queries Level 5)

[Media-Features für Nutzendenpräferenzen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um Nutzenden Kontrolle über Medien zu geben. Hier sind einige wichtige Punkte:

- `inverted-colors`
  - : Laut dem Abschnitt [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) gibt das Media-Feature [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) an, ob Inhalte normal angezeigt werden oder ob Farben invertiert wurden.
- [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der User Agent die bevorzugte Farbpalette der Nutzenden auf der Seite und überschreibt die von Autorinnen und Autoren ausgewählten Farben. Aus dem W3C-Entwurfsdokument, Abschnitt zu forced-colors in Media Queries Level 5: _„The forced-colors media feature is used to detect if the user agent has enabled a [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) where it enforces a user-chosen limited color palette on the page.“_ Nutzende müssen auf diese Möglichkeit hingewiesen werden, und sie muss mit dem passenden Wert für die Media Query `prefers-color-scheme` gut zusammenspielen.
- `light-level`
  - : Aus dem W3C-Entwurfsdokument, Abschnitt zu light-level in Media Queries Level 5: _„The [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) media feature is used to query about the ambient light-level in which the device is used, to allow the author to adjust style of the document in response.“_ Dies wird für Menschen mit Problemen bei motorischen Fähigkeiten oder für einige Menschen mit kognitiven Schwierigkeiten, die nicht die richtige „Schaltfläche“ zum Ändern ihrer Bildschirmeinstellungen finden können, sehr hilfreich sein.
- prefers-contrast
  - : Aus dem W3C-Entwurfsdokument, Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) in Media Queries Level 5: _„The `prefers-contrast` media feature is used to detect if the user has requested the system increase or decrease the amount of contrast between adjacent colors. For example, many users have difficulty reading text that has a small difference in contrast to the text background and would prefer a larger contrast.“_ Manchmal kann es zu viel Kontrast geben; in solchen Situationen kann ein Halo-Effekt um Text auftreten und die Lesbarkeit tatsächlich verringern. Die Kontrastmenge unter die Kontrolle der Nutzenden zu stellen, ist ein großer Gewinn für die Barrierefreiheit.

#### Schnittstelle `MediaQueryList`

Abschnitt 4.2 der CSSWG.org-Entwürfe integriert sich in die in HTML definierte [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop). [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das Objekt [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist). Weitere Informationen finden Sie im MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung: Hilfe und Unterstützung

Die Anforderung für die Eigenschaft `literal` stammt aus [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation).

**Anforderung:** Einige Nutzende können nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die Eigenschaft `literal` soll Text oder Bilder als nicht wörtlich kennzeichnen und Autorinnen und Autoren ermöglichen, nicht-wörtlichen Text und Bilder für Nutzende zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzende tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Farbe und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- {{cssxref("&lt;color&gt;")}}
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Dynamische Styling-Informationen verwenden](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit einer RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Diskussionsthread auf Stack Exchange
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde und Stephen L. Macknik, 1. November 2014

### Diskussionen

- [Problems with WCAG 2.0 Flash Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Understanding 2.3.1 - missing/vague dimension definitions #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Krampfanfälle

- [Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _„Certain individuals are born with special sensitivity to flashing lights or contrasting visual patterns, such as stripes, grids and checkerboards. Because of this condition, their brain will produce seizure-like discharges when exposed to this type of visual stimulation.“_
- [Gamma oscillations and photosensitive epilepsy](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336–R338: _„Certain [visual images](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), even in the absence of motion or flicker, can trigger seizures in patients with photosensitive epilepsy.“_
- [Photosensitive Seizures. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) „_Photosensitive seizures are triggered by flashing or flickering lights. These seizures can also be triggered by certain patterns such as stripes._“
- [Photic-and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia, September 2005, 46(9):1423-5, PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden, Ph.D., Herausgeber

### ISO

<!-- cSpell:ignore colour -->

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und Farbmanagement — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Wird neben dem Harding Tool allgemein als einer der beiden „Goldstandards“ für die Analyse von Blitzeffekten anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [PEAT zur Erstellung anfallsfreier Webanimationen verwenden](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Explainer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Module](https://www.w3.org/TR/adapt-tools/) Working Draft
- [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Understanding WCAG 2.0 (älter, enthält jedoch einige Erläuterungen zu Verweisen in den WCAG-2.1-Kriterien)
- [Three Flashes or Below Threshold Understanding Success Criterion 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Understanding WCAG 2.1
- [Understanding Success Criteria 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
