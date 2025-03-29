---
title: Barrierefreiheit im Web für Anfälle und körperliche Reaktionen
short-title: Vermeidung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

Dieser Artikel führt in Konzepte ein, wie Webinhalte zugänglich gemacht werden können für Menschen mit vestibulären Störungen und wie man Inhalte misst und vermeidet, die zu Anfällen und/oder anderen körperlichen Reaktionen führen können.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flimmern, blinken oder flackern, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können alle Inhalte erzeugen, die zu Anfällen oder anderen lähmenden körperlichen Reaktionen führen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall der photosensitiven Epilepsie werden Anfälle spezifisch durch Blitzlichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert. Dort wird festgestellt, "_Bestimmte visuelle Bilder können auch in Abwesenheit von Bewegung oder Flimmern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel, ["Lichtempfindlichkeit: Eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), über statische Bilder und Muster: "_Statische oder bewegte Muster von unterscheidbaren Licht- und Dunkelstreifen haben denselben Effekt wie blinkende Lichter, da die dunklen und hellen Bereiche alternieren._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar unterscheidbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung gezählt._" Neben Streifen sind auch karierte Muster bekannt, photosensitive Anfälle zu verursachen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind blinkende/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest, _"Das einzige, das wirklich dokumentiert ist, sind Blitzlichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Allerdings sind nur einige wenige Arten von Epilepsien photosensitiv, die überwiegende Mehrheit der Epilepsien ist das nicht."_ Neben Anfällen, die durch Photosensitivität hervorgerufen werden, kann auch das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Arten von Anfällen viel seltener zu sein scheinen. Einen guten Einstieg in das Thema musikogene Anfälle finden Sie auf der Webseite von Epilepsy Ontario über [Musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende, nicht provozierte Anfälle umfasst_." Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und die Menschen müssen sich des Risikos bewusst sein."_

Der Punkt ist, Anfälle können definitiv tödlich sein, und Entwickler und Designer sind unglaublich wichtig, um das Web für diejenigen sicherer zu machen, die auf photosensitive oder musikogene Auslöser empfindlich reagieren.

Anfälle können tödlich sein, aber selbst die, die "nur" schwächend sind, können so schwerwiegend sein, dass sie den Benutzer lahmlegen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und andere können ebenfalls so schwerwiegend sein, dass der Benutzer nicht in der Lage ist, zu funktionieren. Der Artikel der Epilepsy Foundation ["Lichtempfindlichkeit und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder TV-Sendungen, die schnelle Blitze oder abwechselnde Muster unterschiedlicher Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Brandmelder.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser glitzert, durch Bäume oder durch die Lamellen einer Jalousie flackert.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass dazu die Wellenlänge des Lichts als möglicher Faktor gehört; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) besagt allgemein: _"Personen mit photosensitiven Anfällen können durch Inhalte ausgelöst werden, die mit bestimmten Frequenzen mehr als ein paar Mal blitzen"_ und stellt sehr spezifisch fest: "_Menschen sind sogar empfindlicher gegenüber rotem Blitzen als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das Farbe und Leuchtkraft mit hoher Frequenz ändert, was leicht über JavaScript gemacht werden kann, kann ernsthaften Schaden verursachen. Und Flimmern kann überall auftreten. Beispielsweise können "Spinner", die häufig angezeigt werden, während Seiten geladen werden, leicht "flimmern", während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Beispielsweise merkt die Seite des Trace Research & Development Center [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) an, dass _"durch Photosensitive Anfälle bestimmte Arten von Blitzen in Web- oder Computerinhalten hervorgerufen werden können, einschließlich Mausbewegungen, die große Teile des Bildschirms dazu bringen, schnell ein- und auszublinken."_

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allerlei Krankheiten assoziiert sind und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen auftritt). Allerdings sind Anfälle nicht die einzige mögliche negative körperliche Reaktion auf Blitzen, Flimmern, Blinken und ähnlichen Stimuli. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der zuschauenden Kinder reagierten mit Anfällen, andere erlitten Übelkeit, Zittern und spuckten Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus eingeliefert werden mussten. Die unten aufgeführten körperlichen Störungen sind allesamt mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend ist.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Flackern, Blinken & Flimmern

Obwohl "Flackern" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Flackern sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz von über 3 Hz (Flimmern pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Lichtempfindlichkeit: Eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"Im Allgemeinen sind Blitzlichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am ehesten in der Lage, Anfälle auszulösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensible Personen nicht mehr als drei Mal pro Sekunde blinken sollen._" Für manche Menschen können jedoch Blitzen/Blinken Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinker schädlich sind. Die NASA bemerkt in ihrem Dokument, ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php), dass Blitzen und Blinken mächtige Werkzeuge sind, um Aufmerksamkeit zu erregen – wie es für Warnknöpfe notwendig ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Schaltflächen auch, dass sie sparsam und mit Vorsicht verwendet werden müssen. Was das Webdesign betrifft, müssen Systeme, die Firmenmitarbeiter vor Gefahr warnen, indem sie den Bildschirm "hijacken", um eine blinkende Notfallwarnung zu bieten, die Rate, Größe und Leuchtkraftveränderungen auf dem Bildschirm berücksichtigen, während diese Warnungen angezeigt werden.

### Blitzen und Flackern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitzen stellt dann ein potenzielles Risiko dar, wenn es eine Leuchtdichte von \(\geq 20 \ \text{cd/m}<sup>2</sup>\) besitzt, mit einer Frequenz von \(\geq 3 \ \text{Hz}\) auftritt, und einen soliden Sehwinkel von \(\geq 0.006 \ \text{steradians}\) abdeckt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)."_

Wie groß ist ein typischer Betrachtungsabstand? Die Empfehlung, die für einen typischen Betrachtungsabstand zum Zeitpunkt des Schreibens bedacht wurde, war "_der Bereich kann auf einen Bereich von >25 % der Fläche eines Fernsehbildschirms angewendet werden, wobei Standardbetrachtungsabstände von \(\geq 2 \ m \ (\sim 9 \ \text{feet})\) angenommen werden."_ Seitdem hat sich viel geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen auch eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die die Gehirndynamik beeinflussen, modulierbar sind durch bestimmte Farbkombinationen mehr als durch andere, z.B. verursacht ein rot-blaues Flimmer-Reiz größere kortikale Erregung als ein rot-grünes oder blau-grünes Reiz."_

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allgemeine Schwellenwerte für Blitzen und rotes Blitzen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeines Blitzen** ist definiert als ein Paar entgegengesetzter Änderungen in [relativer Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtkraft, wobei die relative Leuchtkraft des dunkleren Bildes unter 0,80 liegt, und wo "ein Paar entgegengesetzter Änderungen" ein Anstieg gefolgt von einem Rückgang oder ein Rückgang gefolgt von einem Anstieg ist;
- Ein **rotes Blitzen** ist definiert als jedes Paar entgegengesetzter Übergänge, die ein gesättigtes Rot betreffen.

Diese Standards basieren auf früheren Untersuchungen. 2004 veranstaltete die Epilepsy Foundation of America einen Workshop und entwickelte einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle, in dem festgestellt wurde, dass "_ein Blitzen ein potenzielles Risiko darstellt, wenn es eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sehwinkel von mindestens 0,006 Steradianes (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt._ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt auf eigene Weise ein Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Relative" Größe und Abstand spielen beide eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/), _"Der kombinierte Bereich von gleichzeitig auftretenden Blitzeffekten besetzt nicht mehr als ein Viertel eines 341 x 256 Pixel großen Rechtecks irgendwo auf dem angezeigten Bildschirmbereich, wenn der Inhalt bei 1024 mal 768 Pixel angesehen wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, ergibt sich im Artikel, der WCAG 2.3.1 behandelt: "_Der Bildschirm von 1024 x 768 Pixeln wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der Block mit 341 x 256 Pixeln stellt ein 10-Grad-Betrachtungsfenster bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Sichtfeld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am anfälligsten für Fotostimuli sind.)_"

Dieses Pixelverhältnis kalkuliert die relative Größe ein, aber auch der Abstand ist wichtig.

Der Abstand ist wichtig, weil er das gesamte Sichtfeld beeinflusst. Wenn Betrachter eine Augenmaske für Spiele tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, was auf dem Telefon, Computer oder Headset erlebt werden kann. Die Besorgnis über blinkende Bilder in einer Augenmaske wächst, da die Maske so nah an den Augen ist.

Forschungsergebnisse deuten im Allgemeinen darauf hin, dass die Verwendung von VR tatsächlich sicherer sein kann als der normale Bildschirmkonsum aufgrund höherer Aktualisierungsraten. Wie in [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammengefasst, _"Die begrenzten bisher verfügbaren Daten erheben keine besonderen Bedenken hinsichtlich der Anfälligkeit von VR-Technologie für Anfälle, obwohl sich diese Ansicht mit mehr Erfahrung ändern kann. Bestimmte Arten von VR-Inhalten, einschließlich greller Blitze, provokativer Muster oder Farbveränderungen, sollten Anfälle hervorrufen, so wie sie es in der realen Welt tun."_

(Beachten Sie, dass einige Benutzer mit blinkenden Cursoren nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung entwickeln, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die am besten bekannten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Anfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind acht Linien das maximal zulässige, aber wenn es wellenförmig ist, dürfen nicht mehr als fünf Linien sein.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung haben. Wenn die Hell-Dunkel-Streifen eines Musters zusammen aus dem minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0,006 Steradianes unter einem Auge einnehmen, die Leuchtkraft des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen darstellen, wenn die Streifen ihre Richtung ändern, oszillieren, blinken oder im Kontrast umkehren; wenn das Muster unverändert bleibt oder sanft in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht das Vergrößern von einem kleineren Bereich auf einen größeren die Wahrscheinlichkeit einer Gehirnreaktion sowie das Erhöhen des Kontrasts und der spatialen Frequenz von niedrig bis mittel. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass das Übergang von grundlegenden Orientierungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel das Schachbrettmuster, das entsteht, wenn man ein Set von Streifen auf das ursprüngliche, aber orthogonal dazu, legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farbe ist wichtig für die Barrierefreiheit. Siehe [das Verständnis von Farben und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Barrierefreiheit im Web und im Allgemeinen bezieht.

Wie die Farbe zu ihrem Hintergrund steht – normalerweise in Bezug auf Kontrast – und wie drastisch sich die Farbe Bild für Bild in einer Animation ändert, ist wichtig. Für weitere Informationen siehe [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall von Rot

Es wurde nachgewiesen, dass [einige Farben wahrscheinlicher sind, epileptische Anfälle auszulösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden generell von der Farbe Rot beeinflusst. Ihr Einfluss auf das Verhalten wurde sogar bei Tieren beobachtet.

- **Rote Desaturations-Tests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte dafür einen Test entwickelt haben. Der Rote Desaturation-Test überprüft die Integrität des Sehnervs. Für weitere Informationen, wie ein Augenarzt diesen Test durchführt, siehe [Rote Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit Schädel-Hirn-Trauma [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Tatsache, dass eine rote Umgebung die kognitive Funktion bei Menschen mit Schädel-Hirn-Trauma beeinflusst, scheint Farbe im roten Spektrumsbereich besondere Sorgen und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei der Erprobung des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsraten viel höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Siehe das Video, [Das Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das bedeutet _nicht_, dass sie "sicher ist, um keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe "sicher" durch die Technik, die zur Farbdarstellung auf Bildschirmen verwendet wird, genau wiedergegeben werden kann.

## Messen zur Schadensvermeidung

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. Faktoren, die in Tests berücksichtigt werden, sind Farbe, Leuchtkraft, Größe, Kontrast und im Fall von Animation die Frequenz. WCAG 2.1 gibt Anleitungen zur Auswertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Die folgende, fachkundige und autoritative Information stammt von: [Photic- und pattern-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitzen ist ein potenzielles Risiko, wenn es eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz erfolgt und einen soliden visuellen Winkel von ≥0.006 Steradianes einnimmt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung aufweisen. Wenn die Hell-Dunkel-Streifen eines Musters zusammen aus dem minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradianes einnehmen und die Leuchtkraft des hellsten Streifens >50 cd/m2 beträgt, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen darstellen, wenn die Streifen ihre Richtung ändern, oszillieren, blinken oder im Kontrast umkehren; wenn das Muster unveränderlich oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind einfacher bei der Anwendung auf fixe Medien, zum Beispiel eine aufgezeichnete TV-Show, die Bild-für-Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Die "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also wie hängt dies für den Webentwickler mit den Messungen für Farbe, Leuchtkraft und Sättigung zusammen?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) legt dies in Bezug auf das dar, womit wir als Entwickler vertraut sind: auf einem Anzeigegerät, und im RGB-Farbraum. Dies ist hilfreich, da es einen speziellen Standard gibt, der auf Bildschirmen, Druckern und im Internet angenommen wird, und es handelt sich um den **sRGB**-Standard (standardisierter Rot-Grün-Blau).

> Als Maß für Licht, das pro Flächeneinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts zu spezifizieren. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>. [<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) In der Regel sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten gängigen Desktop-[Flüssigkristalldisplays](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Der Punkt ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht von den häufig verwendeten Hex-Codes konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die Auslöser für Anfälle sein können, so gut wie möglich zu quantifizieren und zu messen. Dennoch darf nicht vergessen werden, dass Farbe genauso viel mit menschlicher Wahrnehmung im Gehirn zu tun hat wie die Messung des von einem Computerbildschirm kommenden Lichts.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es wird Unterschiede und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und auf sie reagiert. Zum Beispiel bemerkt Tom Jewett, Lehrbeauftragter Emeritus für Informatik an der Cal State University Long Beach, Folgendes in Bezug auf [Helligkeit im HSL-Farbraum](https://colortutorial.design/hsb.html) _"...Der Unterschied zwischen Helligkeitsstufen ist nicht wirklich linear, wie die HSL-Skala suggeriert; wir sind viel empfindlicher gegenüber Helligkeitsänderungen bei helleren Werten als bei dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung sind es nicht. Untersuchungen und Diskussionen sind im Gange, wie die maschinelle Messung von Licht, die durch einen Computerbildschirm läuft, durch den Abstand zum menschlichen Auge gefiltert wird, von der menschlichen Vision gefiltert und dann im menschlichen Gehirn manipuliert wird, in Beziehung gesetzt werden kann.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Lichtempfindlichkeit: Eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind eher als Erwachsene anfällig für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf."_ Der Artikel fährt mit dieser Statistik fort: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, weil sie eher Videospiele spielen. Diese Spiele enthalten oft potenziell provokative Lichtstimulation."_

**Benutzertests sind sehr problematisch.** Natürlich möchte niemand eine anfallanfällige Person Benutzertests unterziehen. Es ist gefährlich. Zu diesem Punkt ist eine der ethischsten Dinge, die Entwickler und Designer tun können, Werkzeuge zu verwenden, die von Experten im Feld entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell für Filme/Videos von Forschern und Ärzten entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) festgelegt, und sie haben sich die Mühe gemacht, es **_kostenlos_** zum Herunterladen anzubieten. PEAT kann Autoren dabei helfen festzustellen, ob Animationen oder Videos in Ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung bei der Verwendung: **_Die Verwendung von PEAT zur Bewertung von kommerziell für den Fernseh-, Film-, Home-Entertainment- oder Gaming-Bereich produzierten Materialien ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) nutzen. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, sodass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten bietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung sicherzustellen, dass wir keinen Schaden verursachen, weder absichtlich noch unabsichtlich. Wenn wir etwas einfügen müssen, das potenziellen Schaden verursachen kann, ist es entscheidend, Benutzer daran zu hindern, versehentlich auf den schädlichen Inhalt zu stoßen, und Wege zu bieten, dass Benutzer Animationen verhindern und kontrollieren, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Kein Schaden verursachen

[WCAG-Richtlinie 2.3 Anfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder körperliche Reaktionen verursachen"_. Inkludieren Sie kein Animation, die ein Benutzer nicht kontrollieren kann. Gestalten Sie keine Muster, die bekanntlich Probleme verursachen. Wenn Sie unbedingt ein gif oder png mit Blitzen enthalten müssen, nehmen Sie es stattdessen in ein Videoformat auf, damit dem Benutzer Steuerungsmöglichkeiten zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu rendern.

#### Verstehen Sie Böswilligkeit

Fragen Sie sich als Entwickler oder Designer, ob stroboskopisch blinkender Inhalt wirklich auf Ihrer Webseite sein muss. Auch wenn er richtig behandelt wird, gibt es diejenigen, die schädlichen Inhalt von Ihrer Seite herunterladen und zur Waffe machen könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um physikalischen Schaden durch Animation zuzufügen, am Samstag, den 22. März 2008, begann: Die Webseite der Epilepsy Foundation wurde gehackt durch Posts mit blinkenden Bildern und Links, die fälschlicherweise vorgaben, hilfreich zu sein. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem er im Dezember 2016 ein animiertes gif mit der Nachricht erhielt, _"You deserve a seizure for your posts"_.

#### Steuerung der Exposition, Zugangskontrolle

Die Kontrolle der Belichtung zur Seite ist der Schlüssel, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich darauf stößt. WCAG merkt an, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie möglicherweise ein Bild oder eine Animation haben, die Anfälle auslösen könnte, kontrollieren Sie den Zugang dazu, indem Sie zuerst eine Warnung über den Inhalt anzeigen und sie dann an einem Ort platzieren, an dem der Benutzer sich dafür entscheiden muss, es zu sehen, z.B. durch Klicken auf eine Schaltfläche oder sicherstellen, dass der Link zur Seite eine eindeutige und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indexiert wird.

#### Nicht Indizieren, Nicht Folgen

Durch Nicht-Indizieren der Seite wird die Wahrscheinlichkeit verringert, dass Benutzer durch Suche darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht es, dies zu bestimmen, sobald wie möglich bei einem bestimmten HTTP-Request.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Stellen Sie bei animierten GIFs sicher, dass die Animation inaktiv bleibt, bis der Benutzer sich dazu entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie das NICHT Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als Initialzustand. Um ein kraftvolles Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa nutzt den `animation-play-state` im Konzert mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die anfängliche Phase der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen auch stoppen sowie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut dem Video-Element hinzufügen, damit der Benutzer das Video stoppen und starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das steuert, ob Benutzersteuerungselemente für das Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Steuerungen verfügt, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Das gleiche Beispiel auf Audio angewendet:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Content-Attribut gesteuert werden kann, obwohl der Inhalt sich im {{HTMLElement('video')}}-Element befindet statt im {{HTMLElement('audio')}}-Element. Dieses Beispiel stammt aus dem Abschnitt zur [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted)-Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um das Audio stummzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies mag offensichtlich erscheinen, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Handhabung erheblich, und aus diesem Grund gibt es keine einheitliche Lösung für das Problem. Dies wird weiter dadurch erschwert, dass selbst wie Dateien klassifiziert sind, beeinflusst, wie sie behandelt werden sollten. Zum Beispiel wird das .gif-Dateiformat üblicherweise als Bild verstanden, wird jedoch in einigen Kreisen auch als Videoformat angesehen, da es animiert sein kann. Für eine umfassende Auflistung von Medientypen, besuchen Sie bitte [IANA.org's Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie auszuräuchern, sind kein beiläufiges Unterfangen. Sie könnten daran interessiert sein, den [MIME-Sniffing](https://mimesniff.spec.whatwg.org/)-Standard auf whatwg.org zu verfolgen. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und daher variiert die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem die Feinheiten der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung diskutiert werden.
- **GIFs (Raster)**: Schwer zu kontrollieren, da die Steuerung ihrer Animation innerhalb der gif-Dateien selbst liegt. Weitere Informationen zur Kontrolle der Geschwindigkeit von GIFs finden Sie auf W3Cs Seite, ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, Video-Version von GIF betrachtet. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm-Datei) verweisen, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), bemerkt, dass \_"SVG ist ein textbasiertes offenes Webstandard. Es ist explizit dafür konzipiert, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten." SVGs können wie in diesem Beispiel als Bild verwendet werden: `<img src="example.svg" alt="Dies ist ein Bild mit einer SVG als Quelle">`. Dies bedeutet, dass das Erscheinungsbild und die Animation von SVG durch CSS-Schlüsselbilder und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript, siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann ebenfalls animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden verursachen. Bewegter Text kann aus denselben Gründen Anfälle auslösen wie bewegte Bilder, daher ist es ratsam, auf die Animation von Text zu verzichten. Es ist ohnehin eine gute Idee, bewegten Text zu vermeiden, da viele Screenreader bewegten Text nicht lesen können und es eine schlechte Benutzererfahrung ist, auch für Personen ohne Seh- oder vestibuläre Probleme.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombinieren, um dem Benutzer ein kraftvolles Erlebnis zu bieten. Wir haben bereits früher in diesem Dokument die `animation`-Eigenschaft erwähnt. Sie ist eigentlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Die Animationseigenschaft ist bereits von alleine mächtig, aber kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein kraftvolles Set an Optionen für den Benutzer eingerichtet werden. Das Festlegen von `animation-duration`- und `transition-duration`-Eigenschaften auf eine kurze Dauer anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht eine Absicherung, um Probleme in Fällen zu verhindern, in denen eine Abhängigkeit von der Animation zum Laufen besteht.

### JavaScript-Animation

JavaScript wird oft eingesetzt, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der größte Teil des JavaScript-Codes, der für HTML-Videos gilt, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzerkontrollen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1,0 ist Standard und gilt als normale Geschwindigkeit; ein Wert von 0,5 ist halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Methoden besteht darin, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen sind – und Größen – in Ihrer Umgebung. SVGs werden oft nicht zugelassen, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet hervorragende Beispiele dafür, indem es mehrere Bildquellen für Sonne, Erde und Mond verwendet und mehrere Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde, während sie um die Sonne und der Mond, während er um die Erde kreist. Verwenden Sie das mit diesem Tutorial verfügbare Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation verändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, positiv eine blinkende Animation verwenden müssen…

Stellen Sie sicher, dass sie eine Steuerung darauf hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter ihr erstmals begegnet, und dass ein Benutzer sich dafür entscheiden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, für das dem Benutzer keine Steuerung zur Verfügung steht, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bilds selbst gesteuert. Durch die Umwandlung eines animierten gif in ein Video können Steuerungen auf die Animation angewendet werden und gibt dem Benutzer Handlungsfähigkeit. Es gibt viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen soll. Siehe [WCAG 2.1 Erfolgskriterium 3.2.5 Ändern auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv blinkende Inhalte haben müssen, halten Sie es klein. Generell begrenzen Sie die Größe des Aufblitzens auf eine Fläche von etwa 341 mal 256 Pixel oder weniger. Diese Pixelgröße nimmt an, dass ein Betrachter einen typischen Abstand zum Bildschirm hat. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus der Nähe, wie in einem VR-Headset, betrachtet wird. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet **oder mit einer Augenmaske verwendet werden kann**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, da das Bild viel näher an den Augen eines Nutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch genannt _Leuchtkraftkontrastverhältnis_, laut W3.org's Seite über [Farben mit hohem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/)), desto leichter ist solcher Inhalt zu lesen. Benutzer mit eingeschränkter Sehkraft wissen es besonders zu schätzen, wenn die Anstrengung unternommen wird, einen hohen Kontrast von Text gegenüber seinem Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist das **Verringern** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu reduzieren, dass der animierte Inhalt Anfälle auslöst. Senken Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Leuchtkraft](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren der Farben ist und
    - L2 die [relative Leuchtkraft](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren der Farben ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder im Web veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine fantastische Ressource für traditionelle Bilder. Auch für Bilder ist ein Online-Tool bei pinetools.com verfügbar: [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt "Beispiel: Festlegen der Hintergrundfarbe eines Absatzes" aus dem MDN-Dokument [Navigieren durch eine HTML-Tabelle mit JavaScript und DOM-Verknüpfungen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

#### Vermeiden Sie vollgesättigte Rottöne für blinkende Inhalte

Wie bereits in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte die Erkenntnis, dass _"Ein Blitzen ein potenzielles Risikodarstellt, wenn es eine Leuchtdichte von mindestens 20 cd/m2 hat, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradianes einnimmt (etwa 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird auch als Risiko betrachtet."_ Sie stellen auch in demselben Konsens fest: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen."_

### Alternative CSS-Stile bereitstellen

Mit dem Verständnis, dass viele Animationen und Blinken über CSS-Methoden gesteuert werden können, ist es wichtig, Möglichkeiten zu erkunden, alternative Optionen für Benutzer bereitzustellen und die Kontrolle dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS, die in alternativen Stylesheets verfügbar sind, an, wenn die Benutzer wissen, wo sie nachsehen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn der Benutzer das Ansichtsmenü durchläuft, in anderen Fällen zeigt dies die Einstellungen, manchmal beides. Nicht alle Benutzer wissen, nach diesen Optionen im Browser oder in den Einstellungen zu suchen, daher lohnt es sich, darüber nachzudenken, es auf die altmodische Weise zu tun, mit offensichtlichen Schaltflächen oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Dies wird nicht in Konflikt mit oder das Lesen der alternativen Stylesheets durch den Browser überschreiben, oder die Fähigkeit des Benutzers, Benutzereinstellungen in den Einstellungen festzulegen.

Es ist wichtig, zu wissen, dass bestimmte Benutzer, wie solche, die auf Sprachsteuerungssysteme angewiesen sind, oft auf alte Schaltflächen und Links angewiesen sind, da ihre Behinderung sie daran hindert, eine Maus zu benutzen oder Touch-Veranstaltungen auf mobilen Tablets nutzen zu können.

Gängige Möglichkeiten, die alternativen Stylesheets in Ihre HTML-Dokumente einzufügen, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit und zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Abschnitt auf der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets einzufügen, aber es wird nicht ganz so gut wie das {{HTMLElement('link')}}-Element unterstützt.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Durch die Verwendung alternativer Stylesheets (vergessen Sie nicht die Titel hinzuzufügen) bereiten Sie es für Benutzer vor, über ihre Browser alternative Styles auswählen zu können.

### Dynamische Stilumschaltung

Ein Problem damit, sich auf den Browser zu verlassen, um alternative Styles sichtbar zu machen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Styles zu entdecken. Oder aufgrund ihrer Behinderung nicht in der Lage sind. Schaltflächen oder Links machen es vielen dankbaren Benutzern deutlich, dass Optionen verfügbar sind. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, damit der Benutzer die Möglichkeit hat, zwischen den verschiedenen Stylesheets zu wechseln. Dies gesagt, die Verwendung alternativer Stylesheets sind nicht die einzige Option. Eine andere Option besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo immer möglich, ist es tatsächlich Best Practice, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stilmittel in einem einzigen Stylesheet gesteuert werden kann."_ Eines der besten Beispiele hierfür ist das W3C-Dokument, ["C29: Verwendung eines Stilumschalters, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das die Anzeige von Bildern verhindert, ist einfach zu erstellen. Es ist eine drakonische Lösung; aber es ist eine, die manchmal für Lehrer oder andere öffentlichen Dienstleister erforderlich ist, die diejenigen bedienen müssen, die extrem empfindlich sind. Diese öffentlichen Dienstleister können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist, wie Sie es über CSS machen können:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Bei der Einrichtung von Medienabfragen ermöglichen Sie mittels Benutzersteuerungen über den Browser oder das Betriebssystem zu steuern. Siehe das MDN-Dokument, [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely) um mehr Details zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie man `prefers-reduced-motion` verwendet, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder siehe das Beispiel unten aus dem Abschnitt über ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Unterstützung ist im Kommen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Werkzeug für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Funktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge, und desto weniger "flimmert" er. Die überwiegende Mehrheit der modernen Technologien aktualisiert mit einer Rate, die keine Probleme mit Photosensibilität verursacht. jedoch ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder schwache Computer können niedrige Aktualisierungsraten aufweisen. [AbilityNets Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu den Aktualisierungsraten.

Ein sehr alter Artikel von Tech Republic, ["Epilepsie und CRT/LCD-Bildschirmflimmern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Aktualisierungsraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz spürbar und dokumentiert."_
- _"Diese Studien scheinen darauf hinzuweisen, dass Sie sich von Aktualisierungsraten unter 70 Hz fernhalten sollten und eine Rate verwenden, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand einen innovativen Einsatz der Update-Funktion, die in Kombination mit animation-duration oder transition-duration auf eine Rate konvergiert, die für das menschliche Auge unmerklich ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Aktualisierungsrate. Das folgende CSS stammt aus dem CSS-Tricks-Artikel, ["Das Erneute Betrachten von prefers-reduced-motion, der reduzierten Bewegungsmedienabfrage"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.org's Seite über [Medienabfragen 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update` Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Aussehen von Inhalten zu ändern, nachdem es gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Funktionen

### Medienabfragen Stufe 5

EnvironmentMQ (geplant in Medienabfragen Stufe 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen in Bezug auf eine Lux-Messung tatsächlich zu definieren, weil Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen bemerken auch den Unterschied in der Technologie, wie E-Ink, die bei hellem Tageslicht lesbar bleibt, gegenüber Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Aus dem Entwurf der W3C-Dokumente, Level 5 der Medienabfragen: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Merkmale des Benutzerdisplays abzufragen, sodass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, das visuelle Erscheinungsbild und/oder Layout der Seite anzupassen, abhängig vom Display-Technologie, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz Medienmerkmale (geplant in Medienabfragen Stufe 5)

[Benutzerpräferenz Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C-Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend bei der Bereitstellung von Benutzerkontrolle über Medien. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [Benutzerpräferenz Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion gibt an, ob der Inhalt normal angezeigt wird oder ob Farben umgekehrt wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf der Seite, überschreibt die vom Autor gewählten Farben. Aus dem Entwurf W3Cs Dokumente, Level 5, Abschnitt über erzwungene Farben: _"Die Medienfunktion für erzwungene Farben wird verwendet, um festzustellen, ob der Benutzer-Agent einen [Modus für erzwungene Farben](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine vom Benutzer ausgewählte eingeschränkte Farbpalette auf der Seite erzwingt."_ Der Benutzer muss auf diese Fähigkeit hingewiesen werden und es wird sich mit dem geeigneten Wert für die `prefers-color-scheme`-Medienabfrage freundschaftlich verhalten müssen.
- `light-level`
  - : Aus dem Entwurf für Level 5 von W3Cs-Dokumente im Abschnitt über `light-level`: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfunktion wird verwendet, um über das Umgebungslicht-Level, in dem das Gerät verwendet wird, abzufragen, um dem Autor zu erlauben, den Stil des Dokuments anzupassen."_ Dies wird eine große Erleichterung für diejenigen sein, die motorische Probleme haben, oder bei einigen mit kognitiven Schwierigkeiten, die nicht in der Lage sind, den richtigen "Knopf" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem Entwurf W3Cs Dokumente, Level 5 Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die Medienfunktion `prefers-contrast` wird verwendet, um festzustellen, ob der Benutzer das System gebeten hat, die Menge des Kontrasts zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen geringen Kontrast zum Text-Hintergrund hat und einen größeren Kontrast bevorzugen würde."_ Manchmal kann es tatsächlich so etwas wie zu viel Kontrast geben; ein Halo-Effekt um den Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Die Menge des Kontrastes in die Kontrolle der Benutzer zu setzen, ist ein Geschenk für die Zugänglichkeit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 aus den Entwürfen von CSSWG.org integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) die im HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Weitere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung Hilfe und Unterstützung

Die Anforderungen für die `literal`-Eigenschaft stammen aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/).

**Anforderung:** Einige Benutzer können nicht wörtlichen Text und Symbole wie Metaphern, Idiome usw. nicht verstehen. Die `literal`-Eigenschaft ist dazu bestimmt, Text oder Bilder als nicht wörtlich zu identifizieren und erlaubt es dem Autor, nicht-wörtlichen Text und Bilder den Benutzern zu erläutern.

#### Übergänge (für CSS und SVG)

Das Folgende ist aus dem [Web Animations Modell](https://www.w3.org/TR/web-animations-1/) CSSWG.org Entwürfen

Das Web Animations Modell ist dazu gedacht, die Funktionen bereitzustellen, die notwendig für das Ausdrücken von [CSS-Übergängen](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) sind.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Basisanimationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Dynamische Stilinformationen nutzen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit einer RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitz-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Maßangaben #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Fotosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber flackernden Lichtern oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettmustern geboren. Aufgrund dieses Zustands wird ihr Gehirn anfallsähnliche Entladungen erzeugen, wenn es dieser Art von visueller Stimulation ausgesetzt ist."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), auch in Abwesenheit von Bewegung oder Flimmern, können Anfälle bei Patienten mit fotosensitiver Epilepsie auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch flackernde oder flimmernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht- und musterverursachte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Analysewerkzeug für Fotosensitive Epilepsie

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierungs-Semantik-Explainer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Verständnis für Drei-Blitze-oder-unter-Schwelle SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, aber enthält einige Erklärungen der in den WCAG 2.1-Kriterien gemachten Verweise)
- [Verständnis der Drei-Blitze-oder-unter-Schwelle Erfolgs-Kriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web-Animations-Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Ein herzlicher Dank an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan des [Diagram Centers](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Umfassendes Epilepsie-Programm und Klinisches Neurophysiologielabor an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ äußerst dankbar dem Trace Research & Development Center, dass sie ihr erstaunliches Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung gestellt haben.
