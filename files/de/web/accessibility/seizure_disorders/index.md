---
title: Web-Zugänglichkeit für Anfälle und physische Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Dieser Artikel führt in Konzepte ein, wie Webinhalte für Personen mit vestibulären Störungen zugänglich gemacht werden können und wie man Inhalte misst und verhindert, die zu Anfällen und/oder anderen physischen Reaktionen führen können.

## Überblick

### Anfälle

Anfälle, die durch Licht verursacht werden, sind als photosensitive Epilepsie bekannt. Inhalt, der flackert, blinkt oder blitzt, kann diese Art von Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte produzieren, die Anfälle oder andere lähmende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Die photosensitive Epilepsie ist tatsächlich eine Art von "Reflexepilepsie"—Anfälle, die in Reaktion auf einen Auslöser auftreten. Im Falle der photosensitiven Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt, "_Bestimmte visuelle Bilder, auch in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder bewegte Muster von wahrnehmbaren hellen und dunklen Streifen haben den gleichen Effekt wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group ist in der Lage, das Problem etwas zu "quantifizieren": _"Ein Muster, das potenziell Anfälle auslösen kann, enthält deutlich wahrnehmbare Streifen, die mehr als fünf helldunkle Streifenpaare in irgendeiner Orientierung zählen."_ Zusätzlich zu Streifen sind auch karierten Mustern bekannt, photosensitive Anfälle zu verursachen, so [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest, _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die Anfälle bei Patienten mit photosensitiver Epilepsie auslösen können. Nur wenige Arten von Epilepsien sind photosensitiv, und die große Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Photosensitivität verursacht werden, kann das Hören bestimmter Musikstücke auch so genannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen viel seltener zu sein scheint. Für eine großartige Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [Musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederkehrende unprovozierte Anfälle beinhaltet_." Laut der Webseite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei mit Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und die Menschen müssen sich des Risikos bewusst sein"_.

Es geht darum, dass Anfälle definitiv tödlich sein können und Entwickler und Designer unglaublich wichtig sind, um das Web für Menschen mit Empfindlichkeiten gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht in der Lage ist, zu funktionieren. Der Artikel der Epilepsy Foundation, ["Photosensitivität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder der rollenden Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen mit kontrastierenden Farben.

Der gleiche Artikel führt aus, dass viele Faktoren kombiniert werden müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass es die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt, dass: _"Individuen mit photosensitiven Anfallsstörungen können einen Anfall haben, der durch Inhalte ausgelöst wird, die bei bestimmten Frequenzen für mehr als ein paar Blitze blinken"_ und weiter sehr spezifisch darauf hingewiesen, "_Menschen sind besonders sensibel gegenüber rotem Blinken als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blinken bereitgestellt_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das eingestellt ist, die Farbe und Helligkeit mit hoher Frequenz zu ändern, leicht gemacht durch JavaScript, kann echten Schaden anrichten. Und Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig zum Anzeigen verwendet werden, während Seiten geladen werden, leicht beim Drehen "flackern".

Zusätzliche Bedenken bestehen bei Personen mit motorischen Beeinträchtigungen. Zum Beispiel stellt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"Photosensitive Anfälle durch bestimmte Arten von Blinken in Web- oder Computerinhalten provoziert werden können, einschließlich Mausbewegungen, die große Bereiche des Bildschirms dazu bringen, schnell wiederholt an- und auszublinken"_.

### Andere physische Reaktionen

Übelkeit, Schwindel (Vertigo) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu sehen ist). Anfälle sind jedoch nicht die einzigen negativen physischen Reaktionen, die durch Blinken, Flackern, Blitzen und andere solche Reize möglich sind. 1997 zeigte ein japanischer Zeichentrickfilm eine animierte "Virusbombe". Einige der Kinder, die den Zeichentrickfilm sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus eingeliefert werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Folgen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend ist.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Blitzen & Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flacker-Effekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) stellt fest, dass _"im Allgemeinen blinken Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu gehen, wird empfohlen, dass photosensitive Individuen nicht mehr als drei Blitzen pro Sekunde ausgesetzt sein sollten."_ Bei einigen Menschen können jedoch Blinken/Blitzen bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinken schlecht sind. Die NASA weist in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) darauf hin, dass Blinken und Blitzen mächtige Werkzeuge zum Lenken der Aufmerksamkeit sein können – wie es bei Warnknöpfen notwendig ist (dies geht davon aus, dass Benutzer den Bildschirm weiterhin sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch, dass sie sparsam und mit Vorsicht verwendet werden müssen. Wie es auf das Webdesign zutrifft, sollten Systeme, die Mitarbeiter durch "Entführung" des Bildschirms warnen, indem sie eine blinkende Warnung einer Notlage bereitstellen, die Rate, Größe und Leuchtkraftänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen angezeigt werden.

### Blitzen und Flackern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m² hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradiant (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die beim Schreiben berücksichtigt wurde, war "_der Bereich kann als auf einen Bereich >25% der Fläche eines Fernsehbildschirms bei Standard-Betrachtungsabständen von ≥2 m (∼9 Fuß) zutreffend angesehen werden._" Seitdem hat sich viel verändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Bestimmte Farben verursachen eher epileptische Anfälle, Forscher entdecken"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die das Gehirndynamikmodell beeinflussen, durch bestimmte Farbkombinationen mehr als durch andere moduliert werden können, zum Beispiel verursacht ein rot-blinkender Reiz eine größere Kortikalerregung als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und rote Blitzschwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird als ein Paar gegenteiliger Änderungen in der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit definiert, wobei die relative Helligkeit des dunkleren Bildes unter 0,80 liegt und "ein Paar gegenteiliger Änderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** wird als jedes Paar gegenteiliger Übergänge mit einem gesättigten Rot definiert.

Diese Standards basieren auf früheren Forschungsergebnissen. 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, der einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle entwickelte und feststellt, _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradiant (etwa 10% des zentralen Gesichtsfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko an sich dar: "_Unabhängig von der Leuchtdichte wird der Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Spezielle" Größe und Entfernung zählen beide. Laut [PEAT](https://trace.umd.edu/peat/), _"Der kombinierte Bereich der gleichzeitig auftretenden Blitze darf nicht mehr als ein Viertel eines beliebigen 341 x 256 Pixel Rechtecks irgendwo auf dem angezeigten Bildschirmbereich einnehmen, wenn die Inhalte bei einer Auflösung von 1024 x 768 Pixeln betrachtet werden."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, ergibt sich im Artikel, der sich mit WCAG 2.3.1 beschäftigt: "_Der Bildschirm von 1024 x 768 wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der Block von 341 x 256 Pixeln repräsentiert ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den Teil des zentralen Sehens des Auges, wo Menschen am anfälligsten für fotoreize sind.)_"

Dieses Pixel-Bereichsverhältnis berechnet die relative Größe, aber auch der Abstand zählt.

Der Abstand ist wichtig, weil er das gesamte Sichtfeld beeinträchtigt. Wenn Betrachter Spielmasken tragen, ist das Sichtfeld wahrscheinlich komplett vom Bildschirm eingeschlossen. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf dem Telefon, Computer oder Headset erlebt werden kann. Das Anliegen bezüglich blinkender Bilder in einer Augenmaske wächst, da die Maske so nah an den Augen ist.

[Die Epilepsy Society (UK)](https://epilepsysociety.org.uk/) stellte in ihrem Artikel ["3D-Filme und virtuelle Realität"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk) fest: _"Bei VR blinken die Bilder sehr schnell, und dies ist im Allgemeinen zu schnell, um einen Anfall bei Menschen mit photosensitiver Epilepsie auszulösen. Das Sichtfeld ist jedoch groß, sodass mehr des Auges stimuliert wird. Dies bedeutet, dass mehr des Gehirns betroffen sein kann, und dies kann einen photosensitiven Anfall auslösen."_

(Beachten Sie, dass einige Benutzer den blinkenden Cursor nicht sehen können, was Migräne, Reisekrankheit und Desorientierung verursachen kann, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind als Auslöser bekannt; Streifen und Karomuster sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkle Streifenpaare wahrscheinlich Anfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist die maximale Anzahl erlaubter Linien acht, aber wenn es unduliert, dürfen es nicht mehr als fünf Linien sein.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Steuerung hat, um sie auszuschalten.

"Ein Muster, das potenziell Anfälle auslöst, enthält deutlich wahrnehmbare Streifenpaare, mehr als fünf hell-dunkle Paare von Streifen in beliebiger Ausrichtung. Wenn die hell-dunklen Streifen eines Musters zusammen aus dem minimal zu erwartenden Betrachtungsabstand beim Auge einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m² beträgt und das Muster ≥0,5 s gezeigt wird, dann sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert bleibt oder glatt in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben genannten Messwerten spielen zusätzliche Faktoren eine Rolle. Beispielsweise erhöht das Wechseln von einem kleineren zu einem größeren Bereich die Wahrscheinlichkeit, dass das Gehirn reagiert, sowie die Erhöhung des Kontrasts und die Erhöhung der räumlichen Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass das Wechseln von einfachen Orientierungen (z.B. Streifen) zu einer mehreren (z.B. das Karo-Muster, das entsteht, wenn man ein Set Streifen auf ein anderes, aber senkrecht verlaufendes, legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farbe ist wichtig für die Barrierefreiheit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance), wie es sich auf Web-Zugänglichkeit und Barrierefreiheit im Allgemeinen bezieht.

Wie die Farbe zu ihrem Hintergrund steht – normalerweise im Zusammenhang mit Kontrast beschrieben – und wie drastisch sich die Farbe von Bild zu Bild in der Animation ändert, ist wichtig. Weitere Informationen dazu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall von Rot

Es wurde gezeigt, dass [einige Farben wahrscheinlicher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Fähigkeit, Verhalten zu beeinflussen, ist sogar bei Tieren bekannt.

- **Rot-Desaturations-Tests:** Das menschliche Auge ist so sensibel auf Rot abgestimmt, dass Augenärzte einen Test damit eingerichtet haben. Der Rot-Desaturations-Test bewertet die Integrität des Sehnervs. Für weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, siehe [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen, die an Schädel-Hirn-Trauma leiden, [die kognitive Funktion in einer roten Umgebung verringert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit Schädel-Hirn-Trauma beeinflusst, scheint Farbe im roten Spektrum Wellenlänge besondere Aufmerksamkeit und besondere Tests zu erfordern. Dr. Gregg Vanderheiden bemerkte beim Testen des Photosensitive Epilepsy Analysis Tool, dass die Anfallraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher gegenüber gesättigtem roten Blitzen sind. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" gilt. Das bedeutet _nicht_, dass sie "sicher ist, um keine Anfälle auszulösen", sondern nur, dass die Farbe möglicherweise "sicher" von der Technologie reproduziert werden kann, die zur Erzeugung von Farben auf Bildschirmen verwendet wird.

## Messen zur Schadensvermeidung

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. In den Tests berücksichtigte Faktoren sind Farbe, Helligkeit, Größe, Kontrast und bei Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 lud die Epilepsy Foundation of America zu einem Workshop ein, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Die folgende, fachkundige und maßgebliche Information stammt aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m² hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradiant (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster, das potenziell Anfälle auslösen kann, enthält deutlich wahrnehmbare Streifen, die mehr als fünf hell-dunkle Paare von Streifen in irgendeiner Orientierung zählen. Wenn die hell-dunklen Streifen eines Musters zusammen aus dem minimal zu erwartenden Betrachtungsabstand beim Auge einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster ≥0,5s präsentiert wird, dann sollte das Muster nicht mehr als fünf helldunkle Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blinken oder im Kontrast umkehren; wenn das Muster unverändert bleibt oder glatt in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter in der festen Medienanwendung anzuwenden, z.B. in einer voraufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m²" bezieht sich auf Candelas pro Quadratmeter. Also wie bezieht sich dies für den Webentwickler auf Messungen für Farbe, Helligkeit und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel zu ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Bezug auf das, was wir als Entwickler gewohnt sind: an einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, da ein spezieller Standard vermutet wird, der auf Monitoren, Druckern und dem Internet verwendet wird, und es ist der **sRGB** (Standard Red Green Blue).

> Als Maß für Licht, das pro Flächeinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegerätes anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m² ab.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) In der Regel sollten kalibrierte Monitore eine Helligkeit von 120 cd/m² haben. Die meisten Consumer-Desktop-[LCDs](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m².[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [HD-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m².

Das Fazit ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Prüfwerkzeugen und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code umgerechnet werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Art von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Dabei darf nicht vergessen werden, dass es bei Farben genauso um menschliche Wahrnehmung im Gehirn geht, wie um die Messung von Licht, das von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es wird Abweichungen und Nuancen geben, wie ein echter Mensch auf Farbe und Licht reagiert und sie wahrnimmt. Zum Beispiel stellt Tom Jewett, Dozent im Ruhestand für Informatik an der California State University Long Beach, im [Lichtheitsbereich in der HSL-Skala](https://colortutorial.design/hsb.html) fest: _"…Die Unterscheidung zwischen Lichtstufen ist nicht tatsächlich linear, wie es die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Änderungen bei helleren Werten als bei dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, menschliches Sehen und menschliche Wahrnehmung jedoch nicht. Die Untersuchung und Diskussion geht weiter wie man die Messung des Lichts durch Maschinen bezieht, während es von einem Computerbildschirm kommt, durch die Entfernung zum menschlichen Auge gefiltert wird, durch menschliches Sehen gefiltert wird und dann im menschlichen Gehirn manipuliert wird.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormal Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulation"._

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine person mit Anfälligkeit für Anfälle einem Benutzertest unterziehen. Es ist gefährlich. Dazu ist eine der ethischsten Dinge, die Entwickler und Designer tun können, die Verwendung von Werkzeugen, die von Experten auf diesem Gebiet entwickelt wurden, die mit Ärzten zusammengearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens dieses Artikels gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Film/Video entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben es als **_kostenlos_** zur Verfügung gestellt. PEAT kann den Autoren helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen können. Beachten Sie das Nutzungsbeschränkung: **_Die kommerzielle Nutzung von PEAT zur Bewertung von Material, das für die Fernsehübertragung, Film, Heimentertainment oder Gaming-Industrien produziert wurde, ist untersagt. Verwenden Sie den Harding-Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der Universität von Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Nutzung untersagt ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe von [HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Accessibility-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, keinen Schaden zu verursachen, weder absichtlich noch unabsichtlich. Wenn wir etwas einschließen müssen, das potenziell gefährlich ist, ist es entscheidend, zu verhindern, dass Benutzer unbeabsichtigt auf die schädlichen Inhalte stoßen, und Möglichkeiten bereitzustellen, wie Benutzer Animationen verhindern und steuern können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG Richtlinie 2.3 Anfälle und Physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder physische Reaktionen verursachen."_ Nehmen Sie keine Animationen auf, die ein Benutzer nicht kontrollieren kann. Entwerfen Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie unbedingt eine gif oder png mit Blitz ins setzen müssen, nehmen Sie es stattdessen in Videoformat auf, sodass Benutzersteuerungen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder es weniger schädlich zu machen.

#### Verständnis für Böswilligkeit

Als Entwickler oder Designer sollten Sie sich fragen, ob wirklich stroboskopische Inhalte auf Ihrer Webseite notwendig sind. Selbst wenn sie richtig gehandhabt werden, gibt es diejenigen, die beleidigende Inhalte von Ihrer Seite herunterladen und verwenden könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu verwenden, um physischen Schaden durch Animation zu verursachen, am Samstag, 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde durch Posts mit blinkenden Bildern und Links, die fälschlicherweise behaupteten, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die auf der Seite Hilfe suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen läuft derzeit, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitten hat, nachdem ihm im Dezember 2016 ein animiertes gif mit der Nachricht _"You deserve a seizure for your posts"_ zugeschickt wurde.

#### Belichtung steuern, Zugang kontrollieren

Die Kontrolle der Belichtung zur Seite ist der Schlüssel, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben könnten, die Anfälle verursachen könnte, kontrollieren Sie den Zugang dazu, indem Sie zunächst eine Warnung über den Inhalt anzeigen und dann an einem Ort platzieren, an dem der Benutzer sich dafür entscheiden muss, darauf zuzugreifen, wie z. B. durch Klicken auf eine Schaltfläche oder Sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht indizieren, nicht folgen

Indem Sie die Seite nicht indizieren, wird die Wahrscheinlichkeit reduziert, dass Benutzer darauf über eine Suche stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit eigentlich innerhalb des GIF-Dateiformats selbst kontrolliert wird.

#### Erkennen, ob ein GIF animiert ist

- [npms animierte-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht die Fähigkeit, Animation _so früh wie möglich_ in einer bestimmten HTTP-Anfrage zu bestimmen.
- Zakirt bietet einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Mit animierten GIFs sicherstellen, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Beispielsweise muss der Benutzer eine Schaltfläche drücken oder ein Feld ankreuzen, um die Animation zu starten.

**Ressourcen zum Erkennen und Steuern von animierten GIFs umfassen:**

- [RunKit animierter GIF-Detektor](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen dabei hilft, animierte GIFs auf Ihrer Webseite abzuspielen und zu stoppen

### Videos

Wie im Fall von animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Feld ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z.B. nicht das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut zu `<video controls>` hinzufügen, oder {{CSSxRef('animation-play-state')}} auf `paused` als Initialzustand einstellen. Um ein kraftvolles Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die erste Stufe der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen sowohl starten als auch stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video starten und stoppen kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das HTML-Attribut `controls` wider, welches steuert, ob Benutzeroberflächensteuerungen zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, die ein Benutzer aufrufen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Dieselbe Beispielanwendung auf Audio:

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

Hinweis, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt im {{HTMLElement('video')}}-Element anstelle des {{HTMLElement('audio')}}-Elements ist. Dieses Beispiel stammt aus dem Abschnitt über [stummgeschaltetens Medienelement-Attribut](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Ton aufzuheben.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Dies mag offensichtlich erscheinen, aber weil es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Handhabung stark, und aus diesem Grund gibt es keine einheitliche Lösung für das Problem. Dies wird weiter durch die Tatsache erschwert, dass sogar die Einstufung von Dateien ihre Handhabung kompliziert. Zum Beispiel wird das .gif-Dateiformat oft als Bild verstanden, es wird jedoch auch in einigen Kreisen als Video-Dateiformat angesehen, da es animiert werden kann. Für eine umfassende Liste von Medientypen besuchen Sie bitte [IANA.orgs Seite für Medien](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden zum Erschnüffeln von ihnen sind keine zufällige Übung. Sie sollten Interesse verfolgen den [MIME Sniffing](https://mimesniff.spec.whatwg.org/)-Standard bei whatwg.org. So gut wie jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Kontrolle über die Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundbestandteil in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Details zur Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung diskutiert werden.
- **GIFs (Raster)**: Schwierig zu kontrollieren, da die Steuerung für ihre Animation innerhalb der gif-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie unter W3Cs ["G152: Setzen sie animierte gif-Bilder nach n Zyklen zum Stoppen (innerhalb von 5 Sekunden)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist ["Können Sie GIF-Animationen mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als eine Variante, video Version von GIF angesehen. Das Format ist nicht standardisiert und muss auf eine "richtige" Videodatei (z.B. eine .webm-Datei) verweisen, die an einem anderen Ort vorhanden sein muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Es wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektoren)**: Das MDN-Dokument ["SVG: skalierbare Vektorgrafiken"](/de/docs/Web/SVG) stellt fest, dass _"SVG ist ein textbasiertes offenes Webstandards. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards zu arbeiten, wie z.B. [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)."_ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das eine SVG als Quelle verwendet">`. Das bedeutet, dass das Erscheinungsbild und die Animation von SVGs durch CSS-Keyframes und -Animationen kontrolliert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann ebenfalls animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden zufügen. Obwohl es sich um experimentelle Technologie handelt, wird [`CSSKeyframe.keyText`](/de/docs/Web/API/CSSKeyframeRule/keyText) entwickelt. Bewegter Text kann Anfälle aus demselben Grund hervorrufen wie bewegte Bilder, daher vermeiden Sie es, Ihren Text zu animieren. Es ist eine gute Idee, auf bewegten Text zu verzichten, da viele Bildschirmlesegeräte nicht in der Lage sind, bewegten Text zu lesen, und es ist eine schlechte Benutzererfahrung selbst für diejenigen ohne Seh- oder vestibuläre Probleme.

### CSS für Animation

Im Stilelement oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen miteinander kombiniert werden, um dem Benutzer ein kraftvolles Erlebnis zu bieten. Wir haben bereits früher in diesem Dokument die `animation`-Eigenschaft erwähnt. Sie ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu vervollständigen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die `animation`-Eigenschaft ist bereits an sich mächtig, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein mächtiges Set an Optionen für den Benutzer eingerichtet werden. Das Setzen der `animation-duration`- und `transition-duration`-Eigenschaften auf eine kurze Dauer statt `animation: none` und `transition: none` einzustellen, ermöglicht eine Absicherung, um Probleme zu vermeiden, falls es eine Abhängigkeit davon gibt, dass die Animation ausgeführt wird.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der größte Teil des JavaScript-Codes, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerelemente für die Wiedergaberate sowohl für Video als auch Audio zu implementieren. Ein Wert von 1.0 ist Standard und gilt als normale Geschwindigkeit; ein Wert von 0.5 ist die halbe Geschwindigkeit, ein Wert von 2.0 ist die doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts. Stellen Sie die Wiedergaberate-Eigenschaft ein: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet den folgenden Codeausschnitt, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Eine der einfachsten Möglichkeiten beginnt mit einem bereits vorhandenen Bild, das als Bildquelle verwendet und dann animiert wird. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen – und Größen – in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet hervorragende Beispiele hierfür, indem es mehrere Bildquellen für die Sonne, Erde und Mond verwendet und mehrere Canvas-Methoden nutzt, um die Geschwindigkeit und Animation der Erde, während sie um die Sonne kreist und der Mond um die Erde, zu kontrollieren. Verwenden Sie das im Tutorial verfügbare Codepen, um `ctx.rotate` im Code anzupassen und zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie auf jeden Fall eine blinkende Animation verwenden müssen…

Stellen Sie sicher, dass es eine Kontrolle darüber gibt. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zum ersten Mal sieht, und dass der Benutzer sich aktiv entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerungen zur Verfügung stellt, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Das Konvertieren eines animierten gifs in ein Video ermöglicht es, Steuerungen auf die Animation zu setzen und gibt dem Benutzer die Möglichkeit, zu handeln. Es gibt viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Erwartungen des Benutzers setzen

Geben Sie Benutzern einen Hinweis, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die nachfolgende Animation. Siehe [WCAG 2.1 Erfolgsindikator 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt Blitzlicht benötigen, halten Sie es klein. Generell sollten Sie die Größe des Blitzes auf einen Bereich von etwa 341 x 256 Pixel oder weniger beschränken. Diese Pixelgröße geht davon aus, dass ein Betrachter einen typischen Abstand vom Bildschirm hat. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in einem VR-Headset aus nächster Nähe betrachtet wird. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf dem Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet **oder DURCH eine Augenmaske verwendet werden KANN**, wie beispielsweise in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild dem Benutzer viel näher an den Augen ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache in Bezug auf Barrierefreiheit. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Luminositätskontrastverhältnis,_ laut W3.orgs Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/) bezeichnet, desto leichter ist dieser Inhalt zu lesen. Benutzer mit Sehbehinderungen schätzen Bemühungen sehr, um einen hohen Kontrast des Textes gegen seinen Hintergrund sicherzustellen. Wenn jedoch der Inhalt animiert ist, ist das **_Reduzieren_** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Senken Sie das Kontrastverhältnis ab, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Luminanz](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Luminanz](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren der Farben ist.

Es ist das Beste, wenn Sie den Kontrast anpassen, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs sind die Adobe Suite-Produkte eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein Online-Tool von pinetools.com [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image) verfügbar. Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie beispielsweise mit einem, der ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Code-Beispiel aus dem Abschnitt ["Beispiel: Hintergrundfarbe eines Absatzes setzen"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Durchqueren einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

Wie bereits früher in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Unter ihren Ergebnissen war das Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradiant (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet."_ Sie bemerken auch in diesem Konsens: _"Unabhängig von der Leuchtdichte wird der Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet."_

### Stellen Sie alternative CSS-Stile bereit

Da es wichtig ist zu verstehen, dass ein Großteil von Animationen und Blinken über CSS-Methoden kontrolliert werden kann, ist es wichtig, Möglichkeiten zu erkunden, um alternative Optionen für Benutzer verfügbar zu machen und die Kontrolle über diese Optionen bequem und sichtbar zu gestalten.

#### Alternative Style Sheets

Moderne Browser zeigen die alternativen CSS, die in alternativen Stylesheets verfügbar sind, an, wenn Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Styles angezeigt, wenn Benutzer durch das Ansichtsmenü gehen, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, nach diesen Optionen im Browser oder in den Einstellungen zu suchen, daher lohnt es sich, zu erwägen, den altmodischen Weg zu gehen, um offensichtliche Schaltflächen oder Links zum Ändern des Stils hinzuzufügen, damit Benutzer sie sehen können. Dadurch wird die Fähigkeit des Browsers nicht beeinträchtigt, die alternativen Stylesheettitel zu lesen, oder die Fähigkeit des Benutzers, in den Einstellungen Präferenzen einzustellen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die auf Spracherkennungssysteme angewiesen sind, oft auf Legacy-Schaltflächen und -Links angewiesen sind, weil ihre Behinderung es ihnen nicht erlaubt, eine Maus zu verwenden oder Touch-Ereignisse auf mobilen Tablets zu nutzen.

Häufige Möglichkeiten, die alternativen Stylesheets in Ihre HTML-Dokumente einzubinden, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit und parallel zu den Attributen von `rel="alternate stylesheet"` und für den Titel im {{HTMLElement('head')}}-Abschnitt der Webseite `title="…"`, um die Stylesheets aufzunehmen.

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

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) machen Sie es den Benutzern möglich, ihre Browser zu verwenden, um alternative Styles auszuwählen.

### Dynamisches Styleswitching

Ein Problem mit dem Vertrauen darauf, dass der Browser alternative Styles zeigt, ist, dass nicht alle Benutzer technisch versiert sind genug, um die alternativen Styles zu entdecken. Oder wegen ihrer Behinderung sind sie nicht in der Lage dazu. Schaltflächen oder Links machen es für viele dankbare Benutzer offensichtlich, dass Optionen verfügbar sind. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, um den Benutzer zu ermöglichen, die verschiedenen Stylesheets umzuschalten. Dabei sind alternative Stylesheets nicht die einzige Option. Eine andere Option besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), \_"Wo möglich, ist es wirklich beste Praxis, Klassen über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft dynamisch zu manipulieren, da das ultimative Aussehen aller Styling-Anker in einem einzigen Stylesheet kontrolliert werden kann." Eine der besten Beispiele dafür, wie man dies tut, kommt von der Seite der W3C über ["C29: Verwendung eines Style-Switchers, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Text-Only-Alternativen

Es ist einfach, ein separates, alternatives Stylesheet zu erstellen, das verhindert, dass Bilder angezeigt werden. Es ist eine drakonische Lösung; aber es ist eine, die manchmal für Schullehrer und andere öffentliche Bedienstete notwendig ist, die Personen mit extremer Empfindlichkeit dienen müssen. Diese öffentlichen Bediensteten können Ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Media-Queries mit {{HTMLElement('style')}}

Durch das Einrichten von Media-Queries ermöglichen Sie Kontrolle durch den Benutzer; diese Steuerungen stehen im Browser oder im Betriebssystem zur Verfügung. Siehe das MDN-Dokument [Accessibility: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely), um mehr Details zu erfahren, wie ein Benutzer die Steuerungen aktiviert.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern nimmt zu.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein hervorragendes Beispiel zu sehen, wie man den `prefers-reduced-motion`-Code verwendet, besuchen Sie das MDN-Dokument [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie das nachfolgende Beispiel aus dem Abschnitt [New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Ambient Light API nicht verfügbar ist. Die Unterstützung wächst.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein leistungsstarkes Werkzeug verfügbar für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medien-Aktualisierungs-Feature

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die überwältigende Mehrheit der modernen Technologie aktualisiert mit einer Rate, die wegen der Photosensitivität keine Probleme macht. Nicht jeder ist jedoch wohlhabend genug, um die modernste Technologie zu leisten, und ältere oder minderwertige Computer können niedrige Aktualisierungsraten haben. [AbilityNets Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu den Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsie und CRT/LCD-Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort über die Aktualisierungsraten in Hz:

- _"Dieser Effekt ist erkennbar, und dokumentiert, bis zu 70 Hz."_
- _"Diese Studien scheinen darauf hinzuweisen, dass Sie Aktualisierungsraten unter 70 Hz meiden sollten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand einen innovativen Einsatz für das Update-Feature, das, wenn kombiniert mit animation-duration oder transition-duration, eine Geschwindigkeit ermöglicht, die für das menschliche Auge unmerklich wird. Mit anderen Worten, Erics Techniken adressieren das Aktualisierungsrate-Problem. Das CSS unten stammt aus dem CSS-Tricks-Artikel ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.orgs Seite zu [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update`-Medien-Funktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten zu ändern, sobald sie gerendert wurde. Sie hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise vermeiden es die Spezifikationen, die drei Stufen in Bezug auf eine Lux-Messung zu definieren, da Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen weisen auch auf Unterschiede in der Technologie hin, wie z.B. E-Ink, das bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Von W3Cs Entwurfsdokument, Media Queries Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfunktion wird verwendet, um die Eigenschaften der Anzeige des Benutzers abzufragen, sodass der Autor das Layout des Dokuments anpassen kann. Ein Autor könnte wählen, die visuelle Darstellung und/oder das Layout der Seite je nach der Anzeigetechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzervorlieben-Medienfunktionen (Geplant in Media Queries Level 5)

[Benutzervorlieben-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Entwurf Medienabfragen Level 5](https://drafts.csswg.org/mediaqueries-5/) versprechen, die Kontrolle der Benutzer über Medien zu verbessern. Hier einige Highlights:

- `inverted-colors`
  - : Gemäß dem Abschnitt [Benutzervorlieben-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfunktion gibt an, ob die Inhalte normal angezeigt werden oder ob Farben invertiert wurden."
- [`force-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) setzt der Benutzer-Agent die vom Benutzer bevorzugte Farbpalette auf der Seite durch und überschreibt die vom Autor gewählten Farben. Von W3Cs Entwurfsdokument, Media Queries Level 5, Abschnitt zu `forced-colors`: _"Die forced-colors-Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer-Agent einen [Forced Colors Modus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem es durch den Benutzer gewählte eingeschränkte Farbpalette auf der Seite durchsetzt."_ Der Benutzer muss über diese Fähigkeit informiert werden, und es muss gut funktionieren mit dem passenden Wert für die prefers-color-scheme-Medienabfrage.
- `light-level`
  - : Von W3Cs Entwurfsdokument, Media Queries Level 5, Abschnitt zu `light-level`: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfunktion wird verwendet, um nach dem Umgebungslichtniveau zu fragen, in dem das Gerät eingesetzt wird, damit der Autor das Layout des Dokuments als Reaktion anpassen kann."_ Dies wird ein Segen für diejenigen sein, die Probleme mit den motorischen Fähigkeiten haben oder für einige mit kognitiven Schwierigkeiten, die keine Knöpfe finden, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Von W3Cs Entwurfsdokument, Media Queries Level 5, Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die prefers-contrast-Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer angefordert hat, dass das System die Menge an Kontrasten zwischen benachbarten Farben erhöht oder verringert. Viele Benutzer haben Schwierigkeiten, Texte zu lesen, die einen geringen Kontrast zum Hintergrund haben, und würden lieber einen größeren Kontrast wünschen."_ Manchmal kann es so etwas wie zu viel Kontrast geben; ein Halo-Effekt um den Text kann auftreten und tatsächlich die Lesbarkeit verringern. Die Kontrastmenge unter Benutzerkontrolle zu stellen ist ein echtes Geschenk für Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 aus den CSSWG.org-Entwurfsvorlagen integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Siehe das MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList) für weitere Informationen.

#### Personalisierungshilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft stammt aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/).

**Anforderung:** Einige Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die `literal`-Eigenschaft soll Texte oder Bilder als nicht-wörtlich identifizieren und erlaubt dem Autor, nicht-wörtlichen Text und Bilder den Benutzern zu erklären.

#### Übergänge (für CSS und SVG)

Das Folgende stammt aus dem [Webanimation Modell](https://www.w3.org/TR/web-animations-1/) CSSWG.org Entwürfen.

Das Webanimationsmodell soll die Funktionen bereitstellen, die für das Ausdrücken von [CSS-Übergängen](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) erforderlich sind.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farbe Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/ungenau definierte Abmessungen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) Epilepsy Foundation: _"Bestimmte Individuen sind von Geburt an besonders empfindlich gegenüber Blitzlichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettmustern. Aufgrund dieses Zustands produziert ihr Gehirn anfallartige Entladungen bei dieser Art von visueller Stimulation."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensible Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensible Anfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht- und Mustereinwirkung ausgelöste Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Neben dem PEAT-Tool gilt es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzlichtern.

- [Harding Flash- und Mustermuster-Analysetool](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmanagement und -messung — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Neben dem Harding-Tool gilt es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzlichtern.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Farbmodul Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierungs-Semantik Erklärdokument 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [Personalisierungstools 1.0](https://www.w3.org/TR/2019/WD-personalization-semantics-tools-1.0-20190711/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Referenzen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Initiative für Web-Barrierefreiheit (WAI)](https://www.w3.org/WAI/)
- [Web-Animationsmodell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Richtlinien für Webinhaltsbarrierefreiheit (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Richtlinien für Webinhaltsbarrierefreiheit (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlicher Dank geht an Teal; Wayne Dick von der [Low Vision Task Force der W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ in großem Maße dankbar gegenüber dem Trace Research & Development Center, dass es ihr erstaunliches Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung gestellt hat.
