---
title: Web-Zugänglichkeit für Anfälle und physische Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{AccessibilitySidebar}}

Dieser Artikel führt in die Konzepte ein, wie Web-Inhalte für Personen mit vestibulären Störungen zugänglich gemacht werden können, und wie man Inhalte messen und verhindern kann, die zu Anfällen und/oder anderen physischen Reaktionen führen.

## Übersicht

### Anfälle

Anfälle, die durch Licht verursacht werden, sind bekannt als photosensitive Epilepsie. Inhalte, die flimmern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können alle Inhalte erzeugen, die Anfälle oder andere schwerwiegende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können sogar ohne Animation physische Reaktionen verursachen. Photosensitive Epilepsie ist tatsächlich eine Art von "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei der Photosensitiven Epilepsie werden Anfälle spezifisch durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgestellt wird: "_Bestimmte visuelle Bilder, selbst ohne Bewegung oder Flimmern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation schreibt in ihrem Artikel ["Licht auf Photosensitivität werfen, eine der komplexesten Zustände der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder sich bewegende Muster aus erkennbaren hellen und dunklen Streifen haben die gleiche Wirkung wie blinkende Lichter, wegen der Abwechslung von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung haben."_ Zusätzlich zu Streifen sind auch karierte Muster bekannt dafür, photosensitive Anfälle auszulösen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopartige Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind jedoch photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Photosensibilität hervorgerufen werden, kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, auch wenn diese Arten von Anfällen seltener zu sein scheinen. Eine Einführung zum Thema musikogene Anfälle finden Sie auf der Webseite von Epilepsy Ontario zu [musikogenen Anfällen](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In seinem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) bemerkt die Epilepsy Foundation, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederholte unprovozierte Anfälle beinhaltet_." Laut der Seite ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) der Epilepsy Foundation, _"Der plötzliche unerwartete Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Er ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich seines Risikos bewusst sein."_

Der Punkt ist, Anfälle können definitiv tödlich sein, und Entwickler und Designer sind immens wichtig, um das Web für diejenigen sicherer zu gestalten, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber auch solche, die "nur" lähmend sind, können von solcher Schwere sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensitivität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), gibt eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder TV-Sendungen, die schnelle Blitze oder wechselnde Muster aus verschiedenen Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie z.B. Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel führt weiter aus, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Von Bedeutung ist, dass darin die Wellenlänge von Licht als möglicher Faktor eingeschlossen ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest, dass: _"Individuen mit photosensitiven Anfallsleiden können einen Anfall durch Inhalte ausgelöst bekommen, die in bestimmten Frequenzen für mehr als ein paar Blitze blitzen"_ und stellt sehr spezifisch fest, dass: "_Menschen sind sogar noch empfindlicher auf rote Blitze als auf andere Farben, daher wird ein spezieller Test für gesättigtes rot blinkende Lichter bereitgestellt_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es über JavaScript die Farbe und Leuchtkraft mit hoher Frequenz ändert, kann echten Schaden anrichten. Und das Flimmern kann überall auftreten. Zum Beispiel können die oft verwendeten "Spinners", die Seiten während des Ladevorgangs anzeigen, leicht beim Drehen "flackern".

Weitere Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel bemerkt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass _"Photosensitive Anfälle durch bestimmte Arten von Blitzen in Web- oder Computerinhalten provoziert werden können, einschließlich Mauszeigern, die große Bereiche des Bildschirms dazu bringen, schnell ein- und auszublinken."_

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten verbunden sind und nicht besonders suggestiv für Anfälle (außer vielleicht Desorientierung, die bei Anfällen zu sehen ist) sind. Anfälle sind jedoch nicht die einzige mögliche negative physische Reaktion auf Blinken, Flimmern, Blitzen und andere solche Reize. 1997 enthielt ein japanischer Cartoon eine animierte "Virenbombe". Einige der Kinder, die diesen Cartoon sahen, reagierten mit Anfällen, andere mit Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die nachfolgend aufgelisteten physischen Störungen sind alle mögliche Folgen: jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Blitzen & Flimmern

Obwohl "blinken" und "blitzen" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die öfter als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmer-Effekte mit einer Frequenz größer als 3 Hz (Flimmern pro Sekunde) und kleiner als 55 Hz. Der Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine der komplexesten Zustände der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) stellt fest, dass _"Allgemein sind blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitze pro Sekunde (Hertz) am wahrscheinlichsten, Anfälle auszulösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollten."_ Für einige Menschen können jedoch Blitzen/Blinken Symptome auch bei weniger als 3 Hz auslösen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinkzeichen schlecht sind. NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen leistungsstarke Werkzeuge zur Aufmerksamkeitslenkung sein können—wie es notwendig für Warnknöpfe ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch, dass sie sparsam und mit Sorgfalt verwendet werden müssen. Angewendet auf das Webdesign, müssen Systeme, die Mitarbeitende eines Unternehmens durch "Entführung" des Bildschirms auf eine Gefahrenwarnung aufmerksam machen, die Rate, Größe und Leuchtkraftänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen angezeigt werden.

### Blitzen und Flimmern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtkraft von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0,006 Steradiant (ungefähr 10% des zentralen Sehfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die empfohlene Berücksichtigung für einen typischen Betrachtungsabstand zur Zeit des Schreibens war "_der Bereich kann auf mehr als 25% der Fläche eines Fernsehbildschirms übertragen werden, bei Annahme eines standardmäßigen Betrachtungsabstands von ≥2 m (∼9 Fuß)"_. Seit dieser Zeit hat sich viel verändert, und wir sind nun viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die der Dynamik des Gehirns zugrunde liegen, durch bestimmte Farbkombinationen stärker moduliert werden können als durch andere, zum Beispiel verursacht ein rot-blauer blinkender Stimulus eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Stimulus."_

### Blitzen & Blitzen roter Farbe

Die [WCAG 2.3.1 Schwellenwerte für allgemeine Blitze und rote Blitze](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) werden wie folgt definiert:

- Ein **allgemeiner Blitz** wird definiert als ein Paar gegenläufiger Änderungen in der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wenn die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wo "ein Paar gegenläufiger Änderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** wird definiert als jedes Paar gegenläufiger Übergänge mit einer gesättigten roten Farbe.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, der einen [Konsens über photosensitive Anfälle](https://pubmed.ncbi.nlm.nih.gov/16146438/) entwickelte, wobei festgestellt wurde: _"Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0.006 Steradian (ungefähr 10% des zentralen Sehfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Übergänge zu oder von einem gesättigten Rot sind wichtig und stellen ein eigenes Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Sowohl die 'relative' Größe als auch der Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/), _"arbeitet das kombinierte Areal von gleichzeitig auftretenden Blitzen mit nicht mehr als insgesamt einem Viertel eines jeden 341 x 256 Pixel Rechtecks irgendwo auf dem angezeigten Bildschirm, wenn der Inhalt bei 1024 x 768 Pixeln betrachtet wird."_

Der Punkt, dass das Gesichtsfeld eine wichtige Überlegung ist, kommt in dem Artikel zur WCAG 2.3.1 zur Sprache: "_Der 1024 x 768-Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256-Pixel-Block repräsentiert ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand. (Das 10-Grad-Feld stammt aus den ursprünglichen Angaben und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am anfälligsten für Fotostimuli sind.)_"

Dieses Pixelbereichsverhältnis errechnet sich für relative Größe, aber auch der Abstand ist wichtig.

Der Abstand ist wichtig, weil er das gesamte Sehfeld beeinflusst. Wenn Betrachter Augenmasken für das Spielen tragen, wird das Sehfeld wahrscheinlich vollständig vom Bildschirm eingenommen. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, die sowohl auf Telefonen, Computern als auch Headsets erlebt werden kann. Die Besorgnis über blinkende Bilder in einer Augenmaske wächst, da die Maske so nah an den Augen ist.

[Die Epilepsie-Gesellschaft (UK)](https://epilepsysociety.org.uk/) hat in ihrem Artikel ["3d-Filme und virtuelle Realität"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk) bemerkt: _"Mit VR blitzen die Bilder sehr schnell und im Allgemeinen ist dies zu schnell, um einen Anfall bei Menschen mit photosensitiver Epilepsie auszulösen. Das Sehfeld ist jedoch groß und daher wird mehr vom Auge stimuliert. Dies bedeutet, dass mehr vom Gehirn betroffen sein könnte und ein fotosensitiver Anfall ausgelöst werden könnte."_

(Beachten Sie, dass einige Benutzer mit blinkenden Cursors nicht sehen können und möglicherweise Migräne, Bewegungskrankheit und Desorientierung bekommen, obwohl blinkende Cursors einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Schuldiger; Streifen und Schachbretter sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Anfälle hervorrufen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist die maximal zulässige Anzahl acht Linien, aber wenn es unduliert, sind nicht mehr als fünf Linien zulässig.

Parallaxe-Effekte können Desorientierung hervorrufen. Verwenden Sie Parallaxe-Effekte mit Vorsicht; wenn Sie sie nutzen müssen, sorgen Sie dafür, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung umfassen. Wenn die Hell-Dunkel-Streifen eines Musters zusammen aus dem minimal erwarteten Betrachtungsabstand ein Sehwinkel von >0,006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> ist und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder reibungslos in eine Richtung schwebt, dürfen nicht mehr als acht Streifen angezeigt werden."

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn von einem kleineren zu einem größeren Bereich übergegangen wird, ebenso wie der Kontrast und die räumliche Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass der Wechsel von einfachen Orientierungen (z.B. Streifen) zu einer multiplen (z.B. das Schachbrettmuster, das entsteht, wenn ein Satz von Streifen auf, aber senkrecht zum originalen Satz gelegt wird) das Gehirn beeinflusst.

### Farben

Die Bedeutung von Farben ist wichtig für die Zugänglichkeit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) in Bezug auf Web-Zugänglichkeit und allgemeine Zugänglichkeit.

Wie die Farbe im Verhältnis zu ihrem Hintergrund—normalerweise in Bezug auf Kontrast betrachtet—und wie drastisch sich die Farbe Bild für Bild in einer Animation ändert, ist wichtig. Weitere Informationen dazu finden Sie unter [Dreimalige Blitzschwelle oder weniger bei SC 2.3.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall von Rot

Es wurde demonstriert, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Seine Fähigkeit, Verhalten zu beeinflussen, wurde selbst bei Tieren bemerkt.

- **Tests zur Entsättigung von Rot:** Das menschliche Auge ist so fein auf Rot abgestimmt, dass Augenärzte einen Test mit ihm einrichten. Der Test zur Red Entsättigung bewertet die Integrität des Sehnervs. Weitere Informationen, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rot Umgebung:** Studien haben gezeigt, dass bei Personen, die an einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) ist ein spezieller, gefährlicher Fall und es gibt spezielle Tests dafür. Neben der Tatsache, dass eine rote Umgebung die kognitive Funktion bei Personen mit traumatischen Hirnverletzungen beeinflusst, scheint die Farbe im roten Spektrum eine besondere Beachtung und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei der Prüfung des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" betrachtet wird. Das bedeutet _nicht_, dass es "sicher ist, keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe "sicher" von der Technologie reproduziert werden kann, die zur Generierung von Farben auf Bildschirmen verwendet wird.

## Gefahr vermeiden

Die Messung des Potenzials für Schaden ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Leuchtstärke, Größe, Kontrast und bei Animationen die Frequenz. WCAG 2.1 bietet Richtlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu erarbeiten. Die folgende, expertenorientierte und autoritative Information stammt von: [Licht- und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtkraft von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen visuellen Winkel von ≥0,006 Steradian (ungefähr 10% des zentralen Sichtfelds oder 25% des Bildschirmbereichs bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung umfassen. Wenn die Hell-Dunkel-Streifen irgendeines Musters bei minimal erwarteten Betrachtungsabständen ein Sehwinkel von >0,006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> ist und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung driftet, dürfen höchstens acht Streifen angezeigt werden. Diese Prinzipien sind im Fall fester Medien einfacher anzuwenden, zum Beispiel einer voraufgezeichneten TV-Show, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also, für den Webentwickler, wie bezieht sich das auf Messungen für Farbe, Leuchtkraft und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) für die Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung des sichtbaren Lichts, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel zu ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) legt dies in Begriffen dar, mit denen wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, weil es einen spezifischen Standard gibt, der angenommen wird, auf Monitoren, Druckern und im Internet verwendet zu werden, und es ist das **sRGB** (standard Red Green Blue).

> Als Maß für das Licht, das pro Flächeneinheit emittiert wird, dieser Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Verbraucher-Desktops [Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [Fernseher mit hoher Auflösung](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Quintessenz ist, dass der **sRGB**-Farbraum ein gemeinsamer Bezugspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er problemlos von dem häufig verwendeten Hex-Code umgewandelt werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Dennoch darf nicht vergessen werden, dass Farbe so sehr über die menschliche Wahrnehmung im Gehirn geht, wie es um die Messung des Lichts geht, das von einem Computerbildschirm ausgeht.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es wird Variationen und Nuancen geben, wie ein echter Mensch Farben und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, emeritierter Dozent für Informatik an der Cal State University Long Beach, folgendes über [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) _"…Die Unterscheidung zwischen Helligkeitsstufen ist eigentlich nicht linear, wie die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Veränderungen bei helleren Werten als bei dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Untersuchung und Diskussion darüber, wie die Maschinenmessung des Lichts, wenn es von einem Computerbildschirm ausgeht, durch den Abstand bis zum menschlichen Auge gefiltert wird und dann durch das menschliche Gehirn manipuliert wird, fortgeführt wird.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine der komplexesten Zustände der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf."_ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger auftreten, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provocative Lichtstimulation"_.

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine Person, die anfällig für Anfälle ist, Benutzertests unterziehen. Es ist gefährlich. Zu diesem Punkt gehört, dass das Etischste, was Entwickler und Designer tun können, darin besteht, Tools zu verwenden, die von Experten auf diesem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt dieses Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben sich bemüht, es **_kostenlos_** zum Herunterladen anzubieten. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung ihrer Nutzung: **_Die Verwendung von PEAT zur Bewertung von Material, das kommerziell für Fernsehübertragungen, Filme, Heimunterhaltungen oder die Spielebranche produziert wurde, ist verboten. Verwenden Sie den Harding-Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Nutzung verboten ist, können Fernsehsender den Harding-Test auf [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, sodass die Gruppe von [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten bietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Zugangslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung, keinen Schaden zuzufügen, sei es absichtlich oder unabsichtlich. Wenn wir etwas einbinden müssen, das potenziell Schaden verursachen kann, ist es wichtig, dass Benutzer nicht zufällig auf den schädlichen Inhalt treffen, und Möglichkeiten bieten, dass Benutzer Animationen verhindern und kontrollieren, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG Leitlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) gibt einen Überblick: _"Gestalten Sie Inhalte nicht auf eine Weise, die bekanntermaßen Anfälle oder körperliche Reaktionen verursacht"_. Fügen Sie keine Animation ein, die ein Benutzer nicht kontrollieren kann. Gestalten Sie nicht mit Mustern, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie unbedingt ein GIF oder PNG mit Blinklicht einfügen müssen, nehmen Sie es stattdessen als Videoformat auf, damit dem Benutzer Steuerungen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, es auszuschalten oder es weniger schädlich zu machen.

#### Böswilligkeit verstehen

Als Entwickler oder Designer fragen Sie sich, ob blinkende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie richtig gehandhabt werden, gibt es diejenigen, die anstößige Inhalte von Ihrer Seite herunterladen und sie als Waffen einsetzen können. Man glaubt, dass der erste dokumentierte Versuch, Computer zu nutzen, um durch Animation physische Schäden zu verursachen, am Samstag, dem 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde durch Postings mit blinkenden Bildern und Links, die fälschlicherweise Behauptungen aufstellten, gehackt. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen wurde eingeleitet, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm ein animiertes GIF im Dezember 2016 gesendet wurde: das blinkende GIF trug die Nachricht, _"Sie verdienen einen Anfall für Ihre Beiträge"_.

#### Belichtung kontrollieren, Zugriff kontrollieren

Die Kontrolle über die Belichtung auf der Seite ist der Schlüssel, um sicherzustellen, dass jemand anfällig für Anfälle nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einziger Gegenstand die gesamte Seite unbrauchbar machen kann.

Wenn Sie denken, dass Sie ein Bild oder eine Animation haben könnten, das Anfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und ihn dann an einem Ort platzieren, an dem der Benutzer ihn aktivieren muss, z.B. durch Klicken auf einen Knopf oder indem sichergestellt wird, dass der Link zur Seite eine deutlich sichtbare Warnung hat.

Berücksichtigen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht indexieren, nicht folgen

Indem die Seite nicht indiziert wird, wird die Wahrscheinlichkeit reduziert, dass Benutzer versehentlich über die Suche darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung wegen ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich in der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- [npm's animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) bietet die Möglichkeit, Animationen _so früh wie möglich_ in einer bestimmten HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer wählt, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um mit der Animation zu beginnen.

**Ressourcen zur Erkennung und Kontrolle von animierten GIFs beinhalten:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen hilft, animierte GIFs auf Ihrer Website abzuspielen und zu stoppen

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um mit der Animation zu beginnen. Es gibt viele Möglichkeiten, dies zu tun, wie NICHT das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut auf `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand zu setzen. Um ein leistungsstarkes Beispiel zu sehen, wie das funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On und Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet das `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation abläuft oder pausiert wird.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die erste Phase der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen ebenso stoppen wie starten kann

Ein {{HTMLElement('video')}} mit keinen Attributen wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls` Attribut zum Videoelement hinzufügen, damit der Benutzer das Video ebenso stoppen wie starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls` HTML-Attribut wider, das steuert, ob Benutzeroberflächen-Steuerelemente für das Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu den HTML-Video- und Audioelementen hinzufügen.

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

##### Audio als Teil des Videos

Beachten Sie, dass das Audio in Videos durch das `muted` Inhaltsattribut gesteuert werden kann, obwohl der Inhalt sich im {{HTMLElement('video')}} Element statt im {{HTMLElement('audio')}} Element befindet. Dieses Beispiel stammt aus dem Abschnitt zur [stummgeschalteten Medienattribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted)Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um das Audio stummzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Das scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Bearbeitung erheblich, und deshalb gibt es keine universelle Lösung für das Problem. Dies wird dadurch weiter verkompliziert, dass selbst die Klassifizierung von Dateien beeinflusst, wie sie gehandhabt werden sollten. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, wird aber in einigen Kreisen auch als Videoformat angesehen, weil es animiert werden kann. Für eine umfassende Liste von Medientypen besuchen Sie bitte [IANA.org- Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Das Aufspüren von ihnen ist keine beiläufige Übung. Sie können daran interessiert sein, dem [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu folgen. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Kontrolle über die Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit dem Bildschirm Auffrischen interagiert. Sehen Sie den Artikel ["Fps mit requestAnimationFrame steuern?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationFrame) an, in dem die Feinheiten der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirm-Auffrischung diskutieren.
- **GIFs (Raster)**: Schwierig zu knacken, da die Kontrolle über die Animation in den GIFs selbst liegt. Für Informationen zur Steuerung der Geschwindigkeit von GIFs siehe W3C's ["G152: Setting animated gif images to stop blinking after n cycles ( внутри 5 sekunden)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Kann man GIF-Animationen mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Betrachtet als Variante, Video Version von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei verweisen (z.B. eine .webm-Datei), die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Mehrbildnetzwerk-Grafiken ist ein Grafikdateiformat für animierte Bilder. Wird von einigen auch als Videoformat angesehen.
- **PNG, APNG (Raster)**: Tragbare Netzwerkgrafiken und animierte tragbare Netzwerkgrafiken können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), stellt fest, dass _"SVG ein textbasiertes offenes Web standard ist. Es ist ausdrücklich zur Zusammenarbeit mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) konzipiert."_ SVGs können als Bild wie in diesem Beispiel verwendet werden: `<img src="example.svg" alt="Dieses ist ein Bild, das ein SVG als Quelle verwendet">`. Dies bedeutet, dass SVG-Erscheinungen und -Animationen durch CSS-Schlüsselbilder und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegender Text kann aus den gleichen Gründen Anfälle auslösen wie sich bewegende Bilder, daher sollten Sie vermeiden, Ihren Text zu animieren. Es ist sowieso eine gute Idee, kein bewegender Text zu verwenden, da viele Screenreader keinen bewegenden Text lesen können, und es ist eine schlechte Benutzererfahrung, selbst für diejenigen ohne Seh- oder vestibuläre Probleme.

### CSS für Animation

Im Stylesheet oder im {{HTMLElement('style')}}-Element können viele Optionen zusammenkommen, um eine leistungsstarke Benutzererfahrung zu bieten. Wir haben bereits früher in diesem Dokument die `animation`-Eigenschaft erwähnt. Es ist eigentlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu vervollständigen. Diese kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation durchgeführt werden sollte.
- `animation-timing-function`

Die Animation-Eigenschaft ist auf eigene Faust bereits leistungsstark, aber wenn sie kombiniert wird mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein mächtiges Set von Optionen für die Benutzer zusammengestellt werden. Das Setzen von `animation-duration` und `transition-duration` Eigenschaften auf eine kurze Dauer anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht es, eine Sicherheitsvorkehrung zu haben, um Problemen vorzubeugen, falls es eine Abhängigkeit gibt, dass die Animation laufen muss.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Die meisten JavaScript-Codes, die auf HTML-Video angewendet werden, gelten auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0.5 ist die halbe Geschwindigkeit, ein Wert von 2.0 ist die doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergaberaten-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS Animations](/de/docs/Web/CSS/CSS_animations), [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) und [Web Animations](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten besteht darin, mit einem Bild zu beginnen, das bereits existiert, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie hier GIFs, JPGs, PNGs, SVGs und andere Dateitypen als Bildquelle verwenden können, solange es sich um erlaubte Dateitypen—und Größen—innerhalb Ihrer Umgebung handelt. SVGs sind oft nicht zulässig, wegen Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele dafür, unter Verwendung mehrerer Bildquellen für Sonne, Erde und Mond sowie Verwendung mehrerer Leinwandmethoden, um die Geschwindigkeit und Animation der Erde zu steuern, während sie sich um die Sonne dreht, und des Mondes, während er um die Erde kreist. Nutzen Sie den verfügbaren Codepen, um `ctx.rotate` im Code zu ändern und zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, positiv eine blinkende Animation verwenden müssen…

Stellen Sie sicher, dass sie eine Kontrolle hat. Stellen Sie sicher, dass sie beim ersten Kontakt mit dem Betrachter ausgeschaltet ist und der Benutzer sich anmelden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerungen bietet, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Das Konvertieren eines animierten GIFs zu Video ermöglicht es, Steuerungen über die Animation zu setzen und gibt dem Benutzer Handlungsspielraum. Es gibt viele kostenlose Online-Konverter, die zur Verfügung stehen, wie [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie den Benutzern eine Vorwarnung, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.1 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv blinken müssen, halten Sie es klein. Allgemein gesprochen, begrenzen Sie die Größe des Blitzes auf einen Bereich, der ungefähr 341 mal 256 Pixel oder weniger ist. Diese Pixelgröße setzt voraus, dass ein Betrachter typischerweise in einem bestimmten Abstand vom Bildschirm entfernt ist. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in der Nähe angesehen werden soll, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefonen, Computern oder Headsets erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet, **oder verwenden kann**, beispielsweise in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, weil das Bild viel näher an den Augen eines Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je größer der Kontrast einer Textfarbe zu seinem Hintergrund (technisch als _Leuchtkraftkontrastverhältnis_ bezeichnet, laut W3.org's Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist solcher Inhalt zu lesen. Benutzer mit Sehschwäche sind besonders dankbar für Anstrengungen, einen hohen Text-Kontrast zu seinem Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist **_Reduzierung_** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Verringern Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren der Farben ist und
    - L2 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren der Farben.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder steht ein Online-Tool zur Verfügung, pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis aufweist.

JavaScript ist auch eine Option zum dynamischen Reduzieren von Kontrast. Hier ist ein Codebeispiel aus dem Abschnitt mit dem Titel ["Beispiel: Hintergrundfarbe eines Absatzes setzen"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Durchsuchen einer HTML-Tabelle mit JavaScript- und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB** Farbraum beschrieben ist.

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

#### Vermeiden Sie vollständig gesättigtes Rot bei blinkendem Inhalt

Wie bereits früher in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Ihnen fiel auf, dass _"Ein Blitz eine potenzielle Gefahr ist, wenn er eine Leuchtdichte von mindestens 20 cd/m2, mit einer Frequenz von mindestens 3 Hz hat und einen festen visuellen Winkel von mindestens 0.006 Steradian (ungefähr 10% des zentralen Sehfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen."_ Sie stellten auch fest in dem gleichen Konsens: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen."_

### Alternativen CSS-Stile bereitstellen

Mit dem Wissen, dass ein großer Teil der Animation und des Blinkens durch CSS-Methoden gesteuert werden kann, ist es wichtig, Möglichkeiten zu untersuchen, alternative Optionen für Benutzer bereitzustellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die im alternativen Stylesheet verfügbaren alternativen CSS-Stile an, wenn die Benutzer wissen, wo sie sie finden können. In einigen Fällen werden die alternativen Styles in den Menüanschictionen des Browsers offenbart, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie diese Optionen über den Browser oder die Einstellungen suchen können, deshalb ist es wertvoll, darüber nachzudenken, die alten Methoden mit offensichtlichen Buttons oder Links zur Änderung des Styles zu verwenden, damit Benutzer sie sehen können. Auf diese Weise wird die Möglichkeit des Browsers, die alternativen Stylesheets zu lesen, oder die Fähigkeit des Benutzers, seine Einstellungen in den Optionen einzustellen, nicht beeinträchtigt oder außer Kraft gesetzt.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie z.B. Benutzer, die sich auf Spracherskennungssysteme verlassen, oft auf altmodische Buttons und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu verwenden, oder die Möglichkeit nehmen, auf Touch-Ereignisse auf mobilen Tablets zuzugreifen.

Gemeinsame Möglichkeiten, um die alternativen Stylesheets in Ihre HTML-Dokumente einzubinden, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit und in Verbindung mit den Attributen `rel="alternate stylesheet"` und für title, `title="..."` im {{HTMLElement('head')}}-Bereich der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets einzubinden, wird jedoch nicht so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Indem Sie alternative Stylesheets verwenden (denken Sie daran, die Titel hinzuzufügen), richten Sie es für die Benutzer ein, dass sie ihre Browser verwenden können, um alternative Styles zu wählen.

### Dynamisches Stylen-Wechseln

Ein Problem mit der Abhängigkeit vom Browser, alternative Styles zu enthüllen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Styles zu entdecken. Oder, aufgrund ihrer Behinderung, nicht imstande sind. Buttons oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen zur Verfügung stehen. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, um den Benutzer zu ermöglichen, zu den verschiedenen Stylesheets zu wechseln. Das gesagt ist, dass die Verwendung alternativer Stylesheets nicht die einzige Option ist. Eine andere Möglichkeit ist die Manipulation des Styles der Seite selbst. Laut dem MDN-Dokument, [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo immer möglich, ist es wirklich die beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Aussehen aller Stil-Hooks in einem einzigen Stylesheet gesteuert werden kann"._ Eines der besten Beispiele, wie das zu tun ist, ist von der W3C-Seite, ["C29: Verwendung eines Style-Switchers, um eine konforme alternative Version anzubieten"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu machen. Es ist eine rigorose Lösung; es ist jedoch eine Lösung, die manchmal für Schulklassen und andere öffentliche Dienste notwendig ist, die diejenigen mit extremen Empfindlichkeiten bedienen müssen. Diese öffentlichen Dienste können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu entwickeln, das `display: none` verwendet. Hier's, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Beim Einrichten von Medienabfragen eröffnen Sie Steuerungen für den Benutzer, diese Steuerungen werden im Browser oder im Betriebssystem bereitgestellt. Siehe das MDN-Dokument, [Zugänglichkeit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely), um weitere Einzelheiten zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel für die Verwendung des Codes `prefers-reduced-motion` zu sehen, besuchen Sie das MDN-Dokument [(`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder siehe das Beispiel unten aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Es steht ein leistungsstarkes Tool für Entwickler zur Verfügung über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flimmert" er. Die überwiegende Mehrheit der modernen Technologie aktualisiert mit einer Rate, die keine Probleme mit Photosensibilität verursacht. Jedoch ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder unterleistete Computer können niedrige Bildwiederholraten haben. [AbilityNet's Factsheet (November 2015) Computers und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu Bildschirm-Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsie und CRT/LCD-Bildschirmflimmern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort zum Thema der Bildwiederholungsraten in Hz:

- _"Dieser Effekt ist bemerkbar und dokumentiert, bis zu 70 Hz."_
- \_"Diese Studien würden darauf hindeuten, dass man Bildwiederholungsraten unter 70 Hz

meiden und eine Rate verwenden sollte, die nicht durch 10 teilbar ist."\_

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung der Update-Funktion, die, in Kombination mit der Animation-Dauer oder der Übergangs-Dauer verwendet wird, um ab einer Rate zu enden, die dem menschlichen Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken sprechen das Problem der Bildwiederholungsrate an. Der unten stehende CSS-Code stammt aus dem CSS-Tricks-Artikel ["Erneutes Durchgehen von prefer-reduced-motion, der reduzierten Bewegungsmedienabfrage"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.org's Seite zu [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update` Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten zu modifizieren, nachdem sie gerendert wurden. Es hat die Werte von "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Levels in Bezug auf eine Beleuchtungsmessung zu definieren, da Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen erwähnen auch den Unterschied in der Technologie, wie eInk, die bei starkem Tageslicht lesbar bleibt, gegenüber Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Aus dem W3C-Entwurfs-Dokument Media Queries Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Eigenschaften des Anzeigegeräts des Benutzers abzufragen, damit der Autor das Aussehen des Dokuments anpassen kann. Ein Autor könnte wählen, die visuellen Effekte und/oder das Layout der Seite abhängig von der Anzeigetechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienfunktionen (Geplant in Media Queries Level 5)

[User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Benutzern Kontrolle über Medien zu bieten. Hier einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt zu [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion zeigt an, ob die Inhalte normal angezeigt werden oder ob Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf der Seite, indem die vom Autor gewählten Farben überschrieben werden. Aus dem W3C-Entwurfs-Dokument Media Queries Level 5 Abschnitt zu forced-colors: _"Die forced-colors Medienfunktion wird verwendet, um festzustellen, ob der Benutzeragent einen [erzwungenen Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine vom Benutzer gewählte begrenzte Farbpalette auf der Seite erzwingt"._ Der Benutzer wird über diese Möglichkeit informiert werden müssen, und es wird notwendig sein, dass es mit dem richtigen Wert für die prefers-color-scheme Medienabfrage gut funktioniert.
- `light-level`
  - : Aus dem W3C-Entwurfs-Dokument Media Queries Level 5 Abschnitt zu light-level: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfunktion wird verwendet, um das Umgebungslicht-Level, in dem das Gerät verwendet wird, abzufragen, um den Autor zu ermöglichen, den Dokumentstil entsprechend anzupassen."_ Dies wird ein Segen für diejenigen sein, die motorische Probleme haben oder für einige mit kognitiven Schwierigkeiten, die den richtigen "Knopf" nicht finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem W3C-Entwurfs-Dokument Media Queries Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die prefers-contrast Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer das System dazu aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Beispiel: Viele Benutzer haben Schwierigkeiten, Text zu lesen, der einen geringen Kontrast zum Text Hintergrund aufweist, und würden einen höheren Kontrast bevorzugen."_ Manchmal kann es einen solchen Effekt wie zu viel Kontrast geben; ein Lichteffekt um Text herum kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verringern. Den Grad des Kontrasts in die Kontrolle des Benutzers zu legen, ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 aus den CSSWG.org-Entwürfen integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList) für weitere Informationen.

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft stammt aus dem [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/).

**Anforderung:** Einige Benutzer können keine nicht-wörtlichen Texte und Symbole wie Metaphern, Idiome usw. verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht-wörtlich identifizieren und dem Autor ermöglich

en, nicht-wörtlichen Text und Bilder den Benutzern zu erklären.

#### Übergänge (für CSS und SVG)

Das folgende stammt aus dem [Modell Webanimierungen](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfen

Das Modell Webanimierungen ist dazu gedacht, die Funktionen bereitzustellen, die erforderlich sind für die Darstellung von [CSS-Übergängen](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11).

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Barrierefreiheit: Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR-API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Lehrgang: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitz-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verstehen 2.3.1 - fehlende/unklare Größenangaben #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Einblick in Photosensitivität, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) Epilepsy Foundation: _"Bei bestimmten Personen besteht eine besondere Empfindlichkeit gegenüber Blitzlichtern oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettmustern. Aufgrund dieser Bedingung wird ihr Gehirn anfallartige Entladungen erzeugen, wenn es diesem visuellen Reiz ausgesetzt wird."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flimmern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Licht- und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Umfassende Liste zur Barrierefreiheit](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Werkzeug gilt es allgemein als einer der zwei "Goldstandards" zur Analyse von Blitzen.

- [Harding Flash und Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -ausrüstung — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Photosensitive Epilepsie Analyse-Werkzeug

Zusammen mit dem Harding-Werkzeug gilt es allgemein als einer der zwei "Goldstandards" zur Analyse von Blitzen.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierungs-Semantik-Erklärer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [WAI-Adapt: Tools-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verstehen von WCAG 2.0 (Älter, aber enthält einige Erklärungen zu den in den WCAG 2.1-Kriterien gemachten Verweisen)
- [Drei Blitze oder darunter Schwellenwert Verstehen Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verstehen von WCAG 2.1
- [Verstehen der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animations Model](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlicher Dank an Teal; Wayne Dick von der [Low Vision Task Force of the W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor des [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory at USF and TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ enorm dankbar dem Trace Research & Development Center, dass sie ihr erstaunliches Werkzeug, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung stellen.
