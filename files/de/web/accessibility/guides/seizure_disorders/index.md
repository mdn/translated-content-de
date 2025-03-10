---
title: Barrierefreiheit im Web für Anfälle und physische Reaktionen
short-title: Vorbeugung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Dieser Artikel führt in die Konzepte zur Zugänglichkeit von Webinhalten für Menschen mit vestibulären Störungen ein und erklärt, wie man Inhalte misst und verhindert, die zu Anfällen und/oder anderen physischen Reaktionen führen können.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Videos, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere schwerwiegende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art "Reflex-Epilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von photosensitiver Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt: "_Bestimmte visuelle Bilder können selbst in Abwesenheit von Bewegung oder Flackern Anfälle bei Patienten mit photosensitiver Epilepsie auslösen_". Die Epilepsy Foundation erklärt in ihrem Artikel ["Lichtempfindlichkeit, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), warum statische Bilder und Muster ein Problem darstellen: "_Statische oder bewegte Muster mit erkennbaren hellen und dunklen Streifen haben die gleiche Wirkung wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Arbeitsgruppe kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in beliebiger Orientierung aufweisen_". Neben Streifen sind auch karierte Muster als Auslöser für photosensitive Anfälle bekannt, wie Cedars-Sinai berichtet.

Auch wenn statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, ist blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF bemerkt: _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die Anfälle bei Patienten mit photosensitiver Epilepsie auslösen können. Nur wenige Arten von Epilepsien sind photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen aufgrund von Photosensibilität kann auch das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen weitaus seltener zu sein scheint. Für eine großartige Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In seinem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) bemerkt die Epilepsy Foundation, dass "_ein Anfall ein Ereignis ist und Epilepsie die Erkrankung, die wiederkehrende unprovozierte Anfälle umfasst_." Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und Menschen müssen über das Risiko informiert sein"_.

Der Punkt ist, dass Anfälle definitiv und tatsächlich tödlich sein können, und Entwickler und Designer sind unglaublich wichtig, um das Web für Menschen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren, sicherer zu machen.

Anfälle können tödlich sein, aber selbst die, die "nur" beeinträchtigend sind, können so schwerwiegend sein, dass sie den Benutzer nicht mehr handlungsfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr fähig ist zu funktionieren. Der Artikel der Epilepsy Foundation, ["Photosensibilität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), liefert eine Liste von Auslösern, die bei photosensitiven Personen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf dem Wasser schimmert, durch Bäume oder Jalousien flackert.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel erklärt weiter, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass auch die Wellenlänge des Lichts ein möglicher Faktor ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel, ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html), stellt allgemein fest, dass: _"Individuen mit photosensitiven Anfallsstörungen können einen Anfall haben, der durch Inhalte ausgelöst wird, die mit bestimmten Frequenzen für mehr als einige Blitze blitzen"_ und ergänzt sehr spezifisch, dass: "_Menschen sind sogar mehr sensibel für rotes Blitzen als für andere Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Es braucht nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Leuchtkraft mit hoher Frequenz ändert, was leicht mit JavaScript erreicht werden kann, kann echten Schaden verursachen. Und Flackern kann überall auftreten. Zum Beispiel, "Spinners", die häufig angezeigt werden, während Seiten laden, können leicht "flackern", während sie sich drehen.

Es gibt zusätzliche Bedenken für Personen mit motorischen Problemen. Zum Beispiel erwähnt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass _"Photosensitive Anfälle durch bestimmte Arten von Flackern in Web- oder Computerinhalten ausgelöst werden können, einschließlich Maus-Over-Effekten, die große Bereiche des Bildschirms schnell flackern lassen"._

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Schwindelgefühl) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen auftritt). Anfälle sind jedoch nicht die einzige mögliche negative körperliche Reaktion auf Blinken, Flackern, Blitzen und ähnliche Reize. 1997 zeigte ein japanischer Zeichentrickfilm eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten an Übelkeit, Zuckungen und blutigem Erbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken und Flackern

Obwohl "Blitzen" und "Blinken" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flimmern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Lichtempfindlichkeit verstehen, eine von Epilepsies komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) bemerkt, dass "_In der Regel lösen blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am ehesten Anfälle aus. Um sicher zu sein, wird empfohlen, dass photosensitive Personen nicht Blitzen ausgesetzt werden, die über drei pro Sekunde hinausgehen._" Für einige Menschen kann Blitzen/Blinken jedoch bereits bei weniger als 3 Hz Symptome hervorrufen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge sein können, um Aufmerksamkeit zu erregen – wie es für Warnschilder notwendig ist (davon ausgehend, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für manche Benutzer warnen blinkende Schaltflächen auch davor, dass sie sparsam und sorgfältig eingesetzt werden müssen. In Bezug auf das Webdesign müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "kapern", um eine blinkende Warnung vor einem Notfall anzuzeigen, die Rate, die Größe und die Leuchtkraftänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen angezeigt werden.

### Blitzen und Flackern – wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x), _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m^2 aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Betrachtungswinkel von ≥0,006 Steradiant umfasst (etwa 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen)."_

Wie weit ist ein typischer Betrachtungsabstand? Zum Zeitpunkt des Verfassens galt als Empfehlung für einen typischen Betrachtungsabstand: "_Der Bereich kann als auf einen Bereich >25 % der Fläche eines Fernsehbildschirms mit standardmäßigen Betrachtungsabständen von ≥2 m (∼9 Fuß) angewendet gelten."_ Viel hat sich seit dieser Zeit geändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"...die Komplexitäten, die den dynamischen Gehirnprozessen zugrunde liegen, von bestimmten Farbkombinationen mehr als von anderen moduliert werden können, zum Beispiel verursacht ein rot-blaues Flackerstimulus eine größere Kortikalexzitation als ein rot-grünes oder blau-grünes Flackerstimulus."_

### Blitzen & Rotblitzen

Die [WCAG 2.3.1 allgemeine Blitz- und Rotblitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar entgegengesetzter Veränderungen der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wobei „ein Paar entgegengesetzter Veränderungen“ eine Erhöhung gefolgt von einer Verringerung oder eine Verringerung gefolgt von einer Erhöhung ist;
- Ein **Rotblitz** ist definiert als ein beliebiges Paar entgegengesetzter Übergänge, die ein gesättigtes Rot betreffen.

Diese Standards basieren auf früherer Forschung. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle zu entwickeln, und stellte fest: _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m^2 aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden Betrachtungswinkel von mindestens 0,006 Steradiant umfasst (etwa 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen)."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt für sich genommen ein Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen._"

### Größe und Entfernung

#### Wie groß? Es hängt davon ab

Sowohl „relative“ Größe als auch Entfernung spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) gilt: _"Der kombinierte Bereich von gleichzeitig auftretenden Blitzen umfasst nicht mehr als insgesamt ein Viertel eines beliebigen 341 x 256 Pixel großen Rechtecks irgendwo auf dem angezeigten Bildschirm, wenn der Inhalt bei 1024 x 768 Pixeln betrachtet wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, wird im Artikel zur WCAG 2.3.1 fortgesetzt: "_Der 1024 x 768 Bildschirmausschnitt wird als Referenz für die Bildauflösung zur Bewertung verwendet. Der 341 x 256 Pixel große Block repräsentiert einen 10-Grad-Sichtbereich bei einem typischen Betrachtungsabstand. (Das 10-Grad-Sichtfeld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sichtbereich des Auges, wo Menschen besonders empfindlich auf Fotostimulation reagieren.)_"

Dieses Pixel-Flächen-Verhältnis berechnet die relative Größe, aber auch die Entfernung spielt eine Rolle.

Die Entfernung spielt eine Rolle, da sie das gesamte Sichtfeld beeinflusst. Wenn Betrachter okulare Masken für Spiele tragen, ist das Sichtfeld wahrscheinlich vollständig von dem Bildschirm umgeben. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf Telefon, Computer oder Headset erlebt werden kann. Die Bedenken bezüglich blinkender Bilder in einer okularen Maske nehmen zu, da die Maske so nah an den Augen ist.

[The Epilepsy Society (UK)](https://epilepsysociety.org.uk/) beschreibt in ihrem Artikel ["3D-Filme und Virtuelle Realität"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk): _"Bei VR blitzen die Bilder sehr schnell, und im Allgemeinen ist dies zu schnell, um einen Anfall bei Menschen mit photosensitiver Epilepsie auszulösen. Das Sichtfeld ist jedoch groß, sodass mehr vom Auge stimuliert wird. Dies bedeutet, dass mehr vom Gehirn betroffen sein kann und möglicherweise ein photosensitiver Anfall ausgelöst wird."_

(Beachten Sie, dass einige Benutzer mit blinkenden Cursor nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen können, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Stark kontrastierende dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Arbeitsgruppe listet auf, wie viele Paarungen von hell-dunklen Streifen wahrscheinlich Anfälle provozieren, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind acht Linien das maximal Zulässige, wenn es sich jedoch wellt, dürfen nicht mehr als fünf Linien vorhanden sein.

Parallaxeeffekte können Desorientierung verursachen. Verwenden Sie Parallaxeeffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie abzuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Paar von hell-dunklen Streifen in beliebiger Ausrichtung aufweisen. Wenn die hell-dunklen Streifen eines beliebigen Musters zusammen aus der minimal erwarteten Sehentfernung am Auge einen soliden Winkel von >0,006 Steradian umfassen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster ≥0,5 s lang dargestellt wird, sollte das Muster nicht mehr als fünf Paar von hell-dunklen Streifen aufweisen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder sich gleichmäßig in eine Richtung bewegt, nicht mehr als acht Streifen."

Es ist nicht alles bekannt, und selbst bei den oben angegebenen Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn der Bereich von einem kleineren zu einem größeren wechselt, sowie das Erhöhen des Kontrasts und das Erhöhen der räumlichen Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden ist, dass der Übergang von einfachen Orientierungen (z.B. Streifen) zu einem mehrfachen (z.B. das karierte Muster, das entsteht, wenn man ein Set von Streifen auf das Originalset, aber senkrecht dazu, legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist für Barrierefreiheit wichtig. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Barrierefreiheit im Web und allgemein bezieht.

Wie sich die Farbe auf ihren Hintergrund bezieht – normalerweise in Bezug auf den Kontrast – und wie drastisch die Farbe von Bild zu Bild in Animationen verändert, ist wichtig. Weitere Informationen dazu finden Sie in [Drei Blitze oder darunter: Schwelle SC 2.3.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall von Rot

Es wurde gezeigt, dass [einige Farben wahrscheinlicher epileptische Anfälle verursachen](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) als andere. Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Sein Einfluss auf das Verhalten wurde sogar bei Tieren festgestellt.

- **Tests zur Rotentsättigung:** Das menschliche Auge ist so empfindlich auf Rot eingestellt, dass Augenärzte einen Test damit eingerichtet haben. Der Rotentsättigungstest beurteilt die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test einsetzt, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischer Hirnverletzung [die kognitive Funktion in einer roten Umgebung vermindert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Saturated Red](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben einer roten Umgebung, die die kognitive Funktion bei Menschen mit traumatischer Hirnverletzung beeinträchtigt, scheint die Farbe im roten Spektralbereich besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei der Prüfung des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfänglicher für gesättigtes rotes Blitzen sind. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das bedeutet _nicht_, dass sie "sicher für ke Fragen epileptische Anfälle" ist, sondern nur, dass die Farbe mit der Technologie, die auf Bildschirmen zur Farberzeugung verwendet wird, reproduziert werden kann.

## Messen, um Schaden zu vermeiden

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. Faktoren, die in Tests berücksichtigt werden, sind Farbe, Leuchtdichte, Größe, Kontrast und im Fall von Animation, Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Die folgende, expertenbasierte und autoritative Information stammt von: [Photic- und patterninduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Betrachtungswinkel von ≥0,006 Steradiant umfasst (etwa 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in beliebiger Orientierung aufweisen. Wenn die hell-dunklen Streifen eines beliebigen Musters zusammen aus der minimal erwarteten Betrachtungsabstand am Auge einen soliden Winkel von >0,006 Steradian umfassen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt, und das Muster ≥0,5 s dargestellt wird, sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare aufweisen, wenn die Streifen die Richtung ändern, oszillieren, blitzen, oder den Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien lassen sich leichter bei festen Medien anwenden, z.B. bei einer aufgezeichneten Fernsehsendung, die Bild-für-Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Der "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich das auf Messungen für Farbe, Leuchtdichte und Sättigung für den Webentwickler?

Das Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie beschäftigt sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedia's Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bespricht es in Bezug auf das, was wir als Entwickler gewohnt sind: auf einem Ausgabegerät, und im RGB-Raum. Dies ist hilfreich, weil es einen bestimmten Standard gibt, der angenommen wird, für Monitore, Drucker und das Internet verwendet zu werden, und dieser ist der **sRGB** (standard Red Green Blue).

> Als Maß für Licht, das pro Flächeneinheit ausgestrahlt wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Ausgabegeräts anzugeben. Der [sRGB](https://en.wikipedia.org/wiki/SRGB) Standard für Monitore zielt auf 80 cd/m<sup>2</sup>.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Verbraucher-Desktop [Flachbildschirme](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [High-definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Fazit ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht vom häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Web-Inhalten zu quantifizieren und zu messen, die als Auslöser für Anfälle dienen können. Das gesagt, darf nicht vergessen werden, dass Farbe genauso sehr über menschliche Wahrnehmung im Gehirn geht wie über die Messung von Licht, das von einem Computerbildschirm kommt.

Neben den psychologischen Varianzen gibt es auch physiologische Unterschiede zwischen uns. Es gibt Varianzen und Nuancen, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Dozent Emeritus für Informatik an der Cal State University Long Beach, in Bezug auf [Helligkeit auf der HSL-Farbskala](https://colortutorial.design/hsb.html), dass _"… die Unterscheidung zwischen Helligkeitsstufen tatsächlich nicht linear ist, wie die HSL-Skala nahelegen würde; wir sind viel empfindlicher gegenüber Veränderungen in helleren Werten als gegenüber dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung sind es nicht. Untersuchungen und Diskussionen laufen darüber, wie die maschinelle Messung von Licht, das von einem Computerbildschirm durch die Entfernung zum menschlichen Auge, gefiltert durch menschliches Sehen und dann durch das menschliche Gehirn manipuliert wird, in Beziehung gesetzt werden kann.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Lichtempfindlichkeit verstehen, eine von Epilepsies komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) sind _"Kinder und Jugendliche anfälliger als Erwachsene, anormale Reaktionen auf Lichtstimulation zu haben, und der erste lichtinduzierte Anfall tritt fast immer vor dem Alter von 20 Jahren auf"_ Der Artikel fährt fort mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger vorkommen, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulationen"_.

**Benutzertests sind sehr problematisch**. Natürlich will niemand eine anfallgefährdete Person einer Benutzerprüfung unterziehen. Es ist gefährlich. In diesem Sinne, das ethischste, was Entwickler und Designer tun können, ist die Verwendung von Tools, die von Experten in diesem Bereich entwickelt wurden, die Hand in Hand mit Ärzten zur Entwicklung des Tools gearbeitet haben. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und sie haben sich bemüht, es **_kostenlos_** zum Download anzubieten. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle auslösen. Bitte beachten Sie die Einschränkung bei der Nutzung: **_Die Nutzung von PEAT zur Bewertung kommerziell erstellter Materialien für Fernsehsendungen, Filme, Home-Entertainment oder die Spieleindustrie ist verboten. Verwenden Sie den Harding-Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehsendeanstalten den Harding-Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, so dass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten bietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung sicherzustellen, dass wir keinen Schaden absichtlich oder unabsichtlich anrichten. Wenn wir etwas einbauen müssen, das potenziell Schaden verursachen kann, ist es entscheidend, dass Benutzer nicht versehentlich auf den schädlichen Inhalt stoßen, und Wege bereitzustellen, wie Benutzer Animationen verhindern und steuern können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Schaden vermeiden

[WCAG Leitlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet eine Übersicht: _"Entwerfen Sie keine Inhalte in einer Weise, die bekanntermaßen Anfälle oder physische Reaktionen verursacht"_. Bauen Sie keine Animation ein, die ein Benutzer nicht steuern kann. Gestalten Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie unbedingt ein Gif oder Png mit Blitzen enthalten müssen, nehmen Sie es stattdessen in ein Videoformat auf, damit dem Benutzer Steuerungsmöglichkeiten zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Bosheit verstehen

Als Entwickler oder Designer fragen Sie sich, ob wirklich Inhalte mit Stroboskoplicht auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß behandelt werden, gibt es diejenigen, die den beleidigenden Inhalt von Ihrer Webseite herunterladen und als Waffe verwenden möchten. Es wird angenommen, dass der erste dokumentierte Versuch, über Computer physischen Schaden durch Animation zu bewirken, am Samstag, dem 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde durch Beiträge mit blinkenden Bildern und Links, die fälschlicherweise behaupteten hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, wurden betroffen.

Eine Reihe von rechtlichen Überlegungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm ein animiertes Gif im Dezember 2016 zugeschickt wurde: Das blinkende Gif trug die Botschaft, _"Sie verdienen einen Anfall für Ihre Beiträge"_.

#### Exposition kontrollieren, Zugriff kontrollieren

Die Kontrolle der Exposition gegenüber der Seite ist entscheidend, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich damit konfrontiert wird. WCAG stellt fest, dass ein einziges Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, möglicherweise ein Bild oder eine Animation zu haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und es dann an einem Ort platzieren, an dem der Benutzer sich dafür entscheiden muss, darauf zuzugreifen, beispielsweise durch Klicken eines Buttons oder Sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung trägt.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indexiert wird.

#### Nicht indexieren, nicht verfolgen

Durch das Nichtindexieren der Seite wird die Wahrscheinlichkeit, dass Benutzer sie über eine Suche finden, verringert.

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

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector)-NPM-Paket ermöglicht die Erkennung von Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs sicherstellen, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

**Ressourcen zum Erkennen und Steuern von animierten GIFs umfassen:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen hilft, animierte GIFs auf Ihrer Webseite abzuspielen und zu stoppen

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie das NICHT Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attributs zu `<video controls>`, oder das Einstellen von {{CSSxRef('animation-play-state')}} auf `paused` als Ausgangszustand. Um ein leistungsfähiges Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Benutzererfahrung zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation ausgeführt oder angehalten wird.

```css
div {
  animation-play-state: paused;
}
```

Mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) kann die Dauer für das Anfangsstadium der Animation auf null gesetzt werden.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen stoppen sowie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird sich nicht automatisch abspielen und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Video-Element hinzufügen, damit der Benutzer das Video sowohl starten als auch stoppen kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuertes Sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das festlegt, ob Benutzeroberflächensteuerungen für das Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Steuerungen verfügt, auf die ein Benutzer zugreifen kann, fügen Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzu.

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

Dieser Ansatz lässt sich auch auf Audio anwenden:

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

Beachten Sie, dass der Ton in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt sich innerhalb des {{HTMLElement('video')}}-Elements und nicht des {{HTMLElement('audio')}}-Elements befindet. Dieses Beispiel stammt aus dem Abschnitt auf der [Beschreibung des stummen Medienattributs](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) im HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer die Stummschaltung aufhebt.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Das scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu deren Handhabung erheblich, und aus diesem Grund gibt es keine universelle Lösung für das Problem. Dies wird zusätzlich verkompliziert durch die Tatsache, dass auch die Klassifizierung von Dateien die Art ihrer Behandlung kompliziert. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, aber auch als Video-Dateiformat in einigen Kreisen betrachtet, aufgrund seiner Fähigkeit zur Animation. Für eine umfassende Liste von Medientypen besuchen Sie bitte IANA.orgs Seite für [Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, sie "aufzuspüren", sind keine beiläufige Übung. Sie könnten daran interessiert sein dem [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu folgen. So ziemlich jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Die MDN-Anleitung zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit dem Bildschirm-Refresh interagiert. Lesen Sie den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie über die Feinheiten der Implementierung von `requestAnimationFrame` vor dem Hintergrund des Bildschirm-Refreshes diskutieren.
- **GIFs (Raster)**: Schwer zu cracken, da die Kontrolle über ihre Animation innerhalb der gif-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie auf der W3C-Page ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, videobasierte Version des GIFs betrachtet. Das Format ist nicht standardisiert und muss auf eine andere Datei (z.B. eine .webm-Datei), die anderswo bestehen muss, verweisen.
- **JPG (Raster)**
- **MNG (Raster)**: Multi-Bildnetzwerk-Grafiken ist ein Dateiformat für animierte Bilder. Wird auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und animierte Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument über ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), stellt fest, dass _"SVG ein textbasiertes offenes Web-Standard ist. Es ist ausdrücklich dazu konzipiert mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) zu arbeiten"._ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Das bedeutet, dass das Aussehen von SVGs ebenso wie Animationen über CSS-Keyframes und Animationen gesteuert werden kann. Für die Interaktion mit JavaScript, siehe die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen genauso wie in der medizinischen Bildgebung genutzt.

#### Auch Text kann animiert werden

Transformationen und Überlagerungen können Text in einem div-Element animieren und Schaden verursachen. Bewegter Text kann aus den gleichen Gründen Anfälle hervorrufen, wie bewegte Bilder, deshalb sollte animierter Text vermieden werden. Es ist ohnehin eine gute Idee, auf die Verwendung von bewegtem Text zu verzichten, da viele Bildschirmlesegeräte bewegten Text nicht lesen können und es auch für Personen ohne Seh- oder vestibuläre Probleme eine schlechte Benutzererfahrung darstellt.

### CSS für Animationen

Im Stilbogen oder innerhalb des {{HTMLElement('style')}}-Elements, können viele Optionen zusammenkommen, um eine kraftvolle Erfahrung für den Benutzer zu gestalten. Wir haben schon früher in diesem Dokument die `animation`-Eigenschaft erwähnt. Sie ist tatsächlich eine Kurzform für alle Animations-Eigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu vervollständigen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation ausgeführt werden soll.
- `animation-timing-function`

Die Animationseigenschaft ist alleine bereits sehr kraftvoll, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein kraftvoller Satz von Optionen für den Benutzer bereitgestellt werden. Indem `animation-duration` und `transition-duration`-Eigenschaften auf eine kurze Dauer gesetzt werden, anstatt sie auf `animation: none` und `transition: none` zu setzen, wird ein Schutz ermöglicht, um in jedem Fall Probleme zu verhindern, bei denen eine Abhängigkeit von der Animation besteht.

### JavaScript-Animation

JavaScript wird häufig zur Steuerung von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der meiste JavaScript-Code, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit von sowohl Video als auch Audio zu implementieren. Ein Wert von 1.0 ist Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0.5 ist halb so schnell, ein Wert von 2.0 ist doppelt so schnell. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Eigenschaft playback rate: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS Animationen](/de/docs/Web/CSS/CSS_animations), [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) liefert folgendes Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Eine der einfachsten Methoden ist, mit einem Bild zu beginnen, das bereits existiert, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange es sich um erlaubte Dateitypen - und Größen - in Ihrer Umgebung handelt. Häufig sind SVGs aufgrund von Sicherheitsproblemen nicht erlaubt. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet hervorragende Beispiele dafür, bei denen mehrere Bildquellen für die Sonne, die Erde und den Mond verwendet werden sowie verschiedene Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde, wenn sie um die Sonne kreist, und des Mondes, wenn er um die Erde kreist. Nutzen Sie das mit diesem Tutorial verfügbare Codepen, um `ctx.rotate` im Code anzupassen und zu sehen, wie die Animation bei Vornahme von Änderungen beeinflusst wird.

#### Wenn Sie absolut, positiv ein blinkendes Animation verwenden müssen

Stellen Sie sicher, dass es eine Kontrolle darüber gibt. Stellen Sie sicher, dass es deaktiviert ist, wenn der Betrachter es erstmals ansieht, und dass ein Benutzer sich aktiv dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerungen bietet, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Durch Konvertieren eines animierten gifs zu einem Video ermöglichen Sie es, Steuerungen auf die Animation anzuwenden und geben dem Benutzer Handlungsfreiheit. Es gibt viele kostenlose Online-Konverter, die zur Verfügung stehen, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie den Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgt. Siehe [WCAG 2.1 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt blinken möchten, halten Sie es klein. Im Allgemeinen beschränken Sie die Größe des Blitzes auf ein Gebiet von etwa 341 x 256 Pixel oder kleiner. Diese Pixelgröße geht von einem typischen Betrachtungsabstand zum Bildschirm aus. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in der Nähe betrachtet wird, z.B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie ein Spiel oder VR entwickeln, das eine okkuläre Maske verwendet **ODER durch eine okkuläre Maske verwendet werden KANN**, wie in Firefox Reality (einem Browser für virtuelle Realitäten), stellen Sie sicher, dass die Größe des Rechtecks wesentlich kleiner als 341 x 256 Pixel ist, da das Bild wesentlich näher an den Augen eines Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je höher der Kontrast der Textfarbe zu ihrem Hintergrund (technisch als _Leuchtdichtenkontrastverhältnis_ bezeichnet, laut W3.orgs Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/)), desto leichter ist es, solche Inhalte zu lesen. Benutzer mit Sehschwäche sind besonders dankbar für Bemühungen, hohen Kontrast des Textes zu seinem Hintergrund zu gewährleisten. Bei animierten Inhalten jedoch ist **_Verringern_** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu reduzieren, dass die animierten Inhalte Anfälle verursachen. Reduzieren Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze festgestellt werden.

Das Kontrastverhältnis ist in WCAG 2.1 wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren der Farben ist.

Es ist am besten, wenn Sie den Kontrast anpassen, bevor er hochgeladen oder ins Web veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine hervorragende Ressource für traditionelle Bilder. Auch für Bilder steht ein Online-Tool zur Verfügung: pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie planen, animierte GIFs zu erstellen, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist ebenfalls eine Option für die dynamische Reduzierung des Kontrasts. Hier ist ein Codebeispiel aus dem Abschnitt mit dem Titel: ["Example: Setting the background color of a paragraph"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Traversing an HTML table with JavaScript and DOM Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum angegeben ist.

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

#### Vermeiden Sie voll gesättigte rote Farben für blinkende Inhalte

Wie bereits in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Unter ihren Ergebnissen war das Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden Betrachtungswinkel von mindestens 0,006 Steradian umfasst (ungefähr 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet." Sie bemerken auch in dem gleichen Konsens: "Unabhängig von der Leuchtkraft wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko angesehen."_

### Bereitstellen alternativer CSS-Stile

Mit dem Verständnis, dass ein Großteil der Animationen und des Blitzens über CSS-Methoden gesteuert werden kann, ist es wichtig, Wege zu erkunden, um den Benutzern alternative Optionen anzubieten und die Steuerung dieser Optionen bequem und sichtbar zu gestalten.

#### Alternative Stylesheets

Moderne Browser werden die alternativen CSS in alternativen Stylesheets anzeigen, wenn die Benutzer wissen, wo sie sie suchen müssen. In manchen Fällen werden die alternativen Stile angezeigt, wenn Benutzer durch das Ansichtsmenü navigieren, in anderen Fällen werden sie in den Einstellungen angezeigt, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen im Browser oder in den Einstellungen suchen müssen, also ist es eine Überlegung wert, die Dinge auf die altmodische Weise zu tun, mit offensichtlichen Schaltflächen oder Links, um den Stil zu ändern, sodass Benutzer diese sehen können. Indem Sie dies tun, wird das Vermögen des Browsers, die alternativen Stylesheets zu lesen, oder die Möglichkeit des Benutzers, Präferenzen in den Einstellungen festzulegen, nicht beeinträchtigt oder überschrieben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie Personen, die auf sprachgestützte Systeme angewiesen sind, oft auf bestehende Schaltflächen und Links angewiesen sind, da ihre Behinderung sie daran hindert, eine Maus zu verwenden oder die Vorteile von Touch-Ereignissen auf mobilen Tablets zu nutzen.

Häufige Wege, die alternativen Stylesheets in Ihre HTML-Dokumente einzubauen, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets einzubauen, aber es ist nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Indem Sie alternative Stylesheets verwenden (denken Sie daran, die Titel hinzuzufügen), richten Sie es für Benutzer ein, die in der Lage sind, ihre Browser zu verwenden, um alternative Stile zu wählen.

### Dynamisches Style-Schalten

Ein Problem bei der Abhängigkeit vom Browser, um alternative Stile zu enthüllen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder aufgrund ihrer Behinderung nicht in der Lage sind. Schaltflächen oder Links machen es offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Schaltflächen hinzuzufügen, um es dem Benutzer zu ermöglichen, zu den verschiedenen Stylesheets zu wechseln. Das gesagt, sind die Verwendung von alternativen Stylesheets nicht die einzige Möglichkeit. Eine andere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), \_"wo es möglich ist, ist es wirklich am besten, dynamisch Klassen über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das ultimative Erscheinungsbild aller Style-Hooks in einem einzigen Stylesheet kontrolliert werden kann." Ein herausragendes Beispiel dafür, wie dies zu machen ist, stammt von der W3C-Seite ["C29: Verwendung eines Style-Wechslers, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine rigorose Lösung; aber es ist eine, die manchmal notwendig ist, um Lehrer oder andere öffentliche Bedienstete zu bedienen, die extrem empfindliche Personen bedienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein besonderes alternatives Stylesheet mit Hilfe von `display: none` zu entwickeln. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit dem {{HTMLElement('style')}}

Indem Sie Medienabfragen einrichten, ermöglichen Sie Steuerelemente durch den Benutzer; diese Steuerungen sind im Browser oder im Betriebssystem zugänglich. Siehe das MDN-Dokument [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet wird, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen Sie sich das Beispiel unten aus dem Abschnitt zu ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Unterstützung entsteht.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es steht Entwicklern ein leistungsfähiges Tool über Window.matchMedia() zur Verfügung. Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medien-Update-Funktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die überwiegende Mehrheit der modernen Technologie aktualisiert sich mit einer Rate, die keine Probleme mit photosensitiven Reaktionen verursacht. Allerdings ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder untermotorisierte Computer können niedrige Bildwiederholraten aufweisen. AbilityNets Faktenblatt (November 2015) [Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu den Bildwiederholraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsie und CRT/LCD Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Bildwiederholraten in Hz:

- _"Dieser Effekt ist spürbar, und dokumentiert, bis zu 70 Hz."_
- _"Diese Studien scheinen darauf hinzuweisen, dass Sie sich von Bildwiederholraten unter 70 Hz fernhalten sollten und eine Rate verwenden, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand eine innovative Verwendung der Aktualisierungsfunktion, die in Kombination mit der Animationsdauer oder Transition-Dauer, zu einer Geschwindigkeit führen, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Eric's Techniken adressieren das Bildwiederholratenproblem. Das folgende CSS stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

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

Die `update`-Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild des Inhalts nach seiner Darstellung zu verändern. Sie hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise unterlässt es die Spezifikation tatsächlich, die drei Level in Bezug auf eine Lux-Messung zu definieren, da Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen weisen auch auf den Unterschied in Technologie hin, wie E-Ink, das bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Von W3Cs Entwurfsdokument, Media Queries Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Eigenschaften des Benutzerdisplays abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen und/oder das Layout der Seite je nach displaytechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienfunktionen (Geplant in Media Queries Level 5)

[User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um Benutzerkontrolle über Medien zu bieten. Hier sind einige Highlights:

- `inverted-colors`
  - : Gemäß dem Abschnitt, [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion gibt an, ob der Inhalt normal angezeigt wird oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzer-Agent die bevorzugte Farbpalette des Benutzers auf der Seite und überschreibt die vom Autor gewählten Farben. Von W3Cs Entwurfsdokument, Media Queries Level 5 Abschnitt über forced-colors: _"Die forced-colors Medienfunktion wird verwendet, um zu überprüfen, ob der Benutzer-Agent einen [erzwungenen Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine vom Benutzer gewählte, begrenzte Farbpalette auf die Seite erzwingt"._ Der Benutzer muss sich dieser Fähigkeit bewusst gemacht werden und es wird benötigt, um gut mit dem entsprechenden Wert für die prefers-color-scheme-Wortabfragung zu harmonisieren.
- `light-level`
  - : Von W3Cs Entwurfsdokument, Media Queries Level 5 Abschnitt über light-level: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfunktion wird verwendet, um über das Umgebungslichtlevel abzufragen, in dem das Gerät verwendet wird, um dem Autor zu ermöglichen, den Stil des Dokuments als Reaktion darauf anzupassen."_ Dies wird ein Segen für diejenigen, die motorische Probleme haben, oder für einige mit kognitiven Schwierigkeiten sein, die nicht in der Lage sind, die richtige "Taste" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Von W3Cs Entwurfsdokument, Media Queries Level 5 Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die `prefers-contrast`-Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer das System aufgefordert hat, die Menge an Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der nur einen geringen Unterschied im Kontrast zum Text Hintergrund hat und würden einen größeren Kontrast bevorzugen."_ Manchmal kann es so etwas wie zu viel Kontrast geben; ein Halo-Effekt um Text kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verringern. Den Kontrast in die Hände des Benutzers zu legen, ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 von den CSSWG.org-Entwürfen integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList) für mehr Informationen.

#### Hilfe und Unterstützung zur Personalisierung

Die Anforderung für die `literal`-Eigenschaft wird aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) genommen.

**Anforderung:** Einige Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die `literal`-Eigenschaft soll dazu dienen, Text oder Bilder als nicht-wörtlich zu kennzeichnen und es dem Autor ermöglichen, nicht-wörtlichen Text und Bilder den Benutzern zu erklären.

#### Übergänge (für CSS und SVG)

Das folgende stammt aus dem [Webanimationen-Modell](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfen

Das Webanimationen-Modell ist dazu gedacht, die Funktionen bereitzustellen, die für die Darstellung von [CSS-Übergängen](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) erforderlich sind.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Discussion Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionen-Definitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Lichtempfindlichkeit erhellen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsie-Stiftung: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber blinkenden Lichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettern geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallsähnliche Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt sind."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Anfalls- und Musterinduzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsie-Stiftung Amerikas](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Arbeitsgruppe der Epilepsie-Stiftung Amerikas](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Masterliste zur Barrierefreiheit](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Harding Flash und Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Analysewerkzeug für fotosensitive Epilepsie

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallfreier Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS-Farbmodul Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierungs-Semantik-Erklärer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [WAI-Adapt: Werkzeugmodul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder niedrigere Schwelle Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, aber enthält einige Erklärungen zu Referenzen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder niedrigere Schwelle Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Initiative zur Web-Barrierefreiheit (WAI)](https://www.w3.org/WAI/)
- [Webanimations-Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Richtlinien für die Barrierefreiheit von Webinhalten (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Helligkeit
- [Richtlinien für die Barrierefreiheit von Webinhalten (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlicher Dank an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [umfassendes Epilepsieprogramm und klinisches Neurophysiologielabor in USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ sehr dankbar gegenüber dem Trace Forschungs- und Entwicklungszentrum, dass sie ihr erstaunliches Werkzeug, das [Analysewerkzeug für fotosensitive Epilepsie (PEAT)](https://trace.umd.edu/peat/), kostenlos zur Verfügung stellen.
