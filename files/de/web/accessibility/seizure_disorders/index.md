---
title: Web-Zugänglichkeit für Anfälle und physische Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{AccessibilitySidebar}}

Dieser Artikel führt in Konzepte ein, die Webinhalte für Personen mit vestibulären Störungen zugänglich machen, und wie man misst und verhindert, dass Inhalte Anfälle und/oder andere physische Reaktionen hervorrufen.

## Übersicht

### Anfälle

Anfälle, die durch Licht verursacht werden, werden als fotosensitive Epilepsie bezeichnet. Inhalte, die flimmern, blitzen oder blinken, können fotosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, Canvas sowie CSS- oder JavaScript-Animationen verwenden, sind alle in der Lage, Inhalte zu erzeugen, die Anfälle oder andere körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch physische Reaktionen auslösen, obwohl sie nicht animiert sind. Fotosensitive Epilepsie ist eigentlich eine Form der "Reflex-Epilepsie" - Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei der fotosensitiven Epilepsie werden Anfälle durch Blitzlichter ausgelöst, aber auch andere Arten von Reflex-Epilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen hervorrufen können, ist in Artikeln wie ["Gamma-Oszillationen und fotosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo angemerkt wird: "_Bestimmte visuelle Bilder, selbst ohne Bewegung oder Flimmern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder bewegte Muster aus erkennbaren Licht- und Dunkelstreifen haben die gleiche Wirkung wie Blitzlichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem ein wenig quantifizieren: "_Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in beliebiger Ausrichtung enthalten_". Zusätzlich zu Streifen können laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch karierte Muster fotosensitive Anfälle auslösen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind Blitzlicht-/Stroboskoplampen. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: "_Der einzige wirklich dokumentierte Faktor sind Blitzlichter, die bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind jedoch fotosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht._" Neben Anfällen, die durch Fotosensitivität hervorgerufen werden, kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Arten von Anfällen viel seltener zu sein scheinen. Für einen großartigen Einstieg in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) hält die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende nicht provozierte Anfälle beinhaltet_." Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist "_plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und Menschen müssen über sein Risiko informiert sein_".

Der Punkt ist, Anfälle können definitiv und sind oft tödlich, und Entwickler und Designer sind unglaublich wichtig, um das Web für diejenigen sicherer zu machen, die empfindlich auf fotosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer außer Gefecht setzen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionsfähig ist. Der Artikel der Epilepsy Foundation ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei fotosensitiven Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computerbildschirme aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flimmert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Im selben Artikel heißt es weiter, dass viele Faktoren zusammenkommen müssen, um die fotosensitive Reaktion auszulösen. Zu beachten ist, dass darin die Wellenlänge des Lichts als möglicher Faktor genannt wird; Wellenlängen im roten Bereich des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest, dass: "_Individuen, die photosensitive Anfallsstörungen haben, können einen Anfall auslösen, indem sie Inhalte sehen, die in bestimmten Frequenzen für mehr als einige Blitze blitzen_" und geht spezifisch darauf ein, dass: "_Menschen sind sogar empfindlicher auf rotes Blitzen als auf andere Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das darauf eingestellt ist, seine Farbe und Helligkeit mit hoher Frequenz zu ändern, was leicht über JavaScript möglich ist, kann echten Schaden anrichten. Und, Flimmern kann überall auftreten. Zum Beispiel können "Spinner", die häufig verwendet werden, während Seiten geladen werden, beim Drehen leicht "flimmern".

Zusätzliche Bedenken bestehen für Personen mit motorischen Fähigkeiten. Beispielsweise stellt die Seite des Trace Research & Development Centers [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass "_fotosensitive Anfälle durch bestimmte Arten von Blitzlichtern in Web- oder Computerinhalten ausgelöst werden können, darunter Mouse-over, die große Bereiche des Bildschirms schnell und wiederholt aufblitzen lassen_".

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allerlei Krankheiten verbunden sind und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu sehen ist). Jedoch sind Anfälle nicht die einzige negative physische Reaktion, die durch Blitzen, Flimmern, Blinken und ähnliche Reize möglich ist. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten an Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Folgen: Jeder dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend ist.

- Anfälle
- Störungen des Vestibularsystems
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flimmern

Obwohl "Blitzen" und "Blinken" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Nach W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz über 3 Hz (Flimmern pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) stellt fest, dass "_im Allgemeinen Blitzlichter in Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass fotosensitive Personen nicht Blitzen von mehr als drei pro Sekunde ausgesetzt sein sollten._" Für manche Menschen können Blitzen/Blinken jedoch bereits unter 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht alles Blitzen und Blinken schlecht ist. NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen kraftvolle Werkzeuge zum Aufmerksamkeitslenken sein können – wie es für Warnknöpfe notwendig ist (unter der Voraussetzung, dass Benutzer den Bildschirm während des Blinkens der Elemente noch sehen können, was nicht immer der Fall ist). Bei einigen Benutzern warnen blinkende Schaltflächen auch, dass sie sparsam und mit Bedacht eingesetzt werden müssen. Was Webdesign betrifft, müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "kapern", um eine blinkende Notfallwarnung auszugeben, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flackern – wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist "_ein Blitz eine potenzielle Gefahr, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0,006 Steradiant (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) bedeckt._"

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die zum Zeitpunkt des Schreibens für einen typischen Betrachtungsabstand berücksichtigt wurde, war: "_Der Bereich kann als auf die Fläche von >25% der Fläche eines Fernsehbildschirms bezogen verstanden werden, wobei standardmäßige Betrachtungsabstände von ≥2 m (∼9 Fuß) angenommen werden._" Seit dieser Zeit hat sich vieles verändert und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass "_die Komplexitäten, die den Dynamiken des Gehirns zugrunde liegen, durch bestimmte Farbkombinationen mehr als durch andere moduliert werden könnten, zum Beispiel verursacht ein rot-blaues Flimmerstimulus größere kortikale Erregungen als ein rot-grünes oder blau-grünes Stimulus._"

### Blitzen & rotes Blitzen

[WCAG 2.3.1 general flash and red flash thresholds](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird als ein Paar gegensätzlicher Veränderungen in der [relativen Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit definiert, wo die relative Helligkeit des dunkleren Bildes unter 0,80 liegt und wo "ein Paar gegensätzlicher Veränderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** wird definiert als ein Paar gegensätzlicher Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 berief die Epilepsy Foundation of America einen Workshop ein, der einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über fotosensitive Anfälle entwickelte, wobei festgestellt wurde: "_Ein Blitz ist eine potenzielle Gefahr, wenn er eine Helligkeit von mindestens 20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradiant (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche beim typischen Betrachtungsabstand) abdeckt._" Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein eigenes Risiko dar: "_Unabhängig von der Helligkeit wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko betrachtet._"

### Größe und Entfernung

#### Wie groß? Es hängt davon ab

"Sogenannte" relative Größe und Entfernung spielen beide eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) "_nimmt die kombinierte Fläche der gleichzeitig auftretenden Blitze nicht mehr als ein Viertel von insgesamt 341 x 256 Pixeln irgendwo auf der angezeigten Bildschirmfläche ein, wenn der Inhalt bei 1024 x 768 Pixeln betrachtet werden kann._"

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, wird im Artikel zur WCAG 2.3.1 erwähnt: "_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung zur Bewertung verwendet. Der 341 x 256 Pixel Block repräsentiert ein Sichtfeld von 10 Grad beim typischen Betrachtungsabstand. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und stellt den zentralen Sehanteil des Auges dar, wo Menschen am empfindlichsten auf Lichtstimuli reagieren.)_"

Dieses Pixel-Flächenverhältnis berechnet relative Größe, aber auch die Entfernung spielt eine Rolle.

Entfernung spielt eine Rolle, weil sie das gesamte Sichtfeld beeinflusst. Wenn Zuschauer für Spiele optische Masken tragen, wird das Sichtfeld wahrscheinlich in seiner Gesamtheit vom Bildschirm umhüllt sein. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf Telefon, Computer oder Headset erlebt werden kann. Das Problem mit blinkenden Bildern in einer optischen Maske ist ein wachsendes, da die Maske so nah an den Augen ist.

[Die Epilepsy Society (UK)](https://epilepsysociety.org.uk/), in ihrem Artikel ["3d Films and Virtual Reality"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk), stellte fest: "_Mit VR blinken die Bilder sehr schnell und im Allgemeinen ist das zu schnell, um einen Anfall bei Menschen mit fotosensitiver Epilepsie auszulösen. Das Sichtfeld ist jedoch groß, sodass mehr vom Auge stimuliert wird. Das bedeutet, dass mehr vom Gehirn betroffen sein könnte und dies einen fotosensitiven Anfall auslösen kann._"

(Beachten Sie, dass einige Benutzer mit blinkenden Cursorn nicht sehen können und möglicherweise Migräne, Übelkeit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms ausfüllen.)

### Muster und Parallaxeneffekte

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsy Foundation of America listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Anfälle hervorrufen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist acht Linien die maximal zulässige Anzahl, aber wenn es sich wellt, dürfen es nicht mehr als fünf Linien sein.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in beliebiger Ausrichtung enthalten. Wenn die Hell-Dunkel-Streifen eines Musters vom minimal erwarteten Betrachtungsabstand am Auge einen soliden Winkel von >0,006 Steradian abdecken, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, darf das Muster nicht mehr als fünf Hell-Dunkel-Paare zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung treibt, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Messungen gibt es noch zusätzliche Faktoren zu beachten. Zum Beispiel erhöht der Übergang von einer kleineren zu einer größeren Fläche die Wahrscheinlichkeit, dass das Gehirn reagiert, ebenso wie die Erhöhung des Kontrasts und die Erhöhung der räumlichen Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass der Übergang von einfachen Ausrichtungen (z. B. Streifen) zu einer mehrfachen (z. B. dem karierte Muster, das entsteht, wenn ein Streifenset auf ein anderes, aber senkrecht dazu angezeigt wird) das Gehirn beeinflusst.

### Farben

Farben zu verstehen ist wichtig für die Barrierefreiheit. Siehe [Understanding Colors and Luminance](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance), wie es sich auf die Barrierefreiheit im Web und allgemein bezieht.

Wie die Farbe sich auf ihren Hintergrund bezieht – in der Regel im Hinblick auf den Kontrast formuliert – und wie drastisch sich die Farbe von Bild zu Bild in einer Animation ändert, ist wichtig. Weitere Informationen dazu finden Sie in [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall Rot

Es ist erwiesen, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Der Mensch wird allgemein von der Farbe Rot beeinflusst, was sogar bei Tieren bemerkt wurde.

- **Rot-Entsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit eingerichtet haben. Der Rot-Entsättigungstest beurteilt die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test anwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die unter einer traumatischen Hirnverletzung leiden, [kognitive Funktionen in einer roten Umgebung reduziert sind](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Beeinträchtigung der kognitiven Funktion derjenigen mit traumatischen Hirnverletzungen in einer roten Umgebung scheint die Farbe im roten Spektrum besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden bemerkte bei der Erprobung des Photosensitive Epilepsy Analysis Tool, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken sind. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websichere Farben bedeuten nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" gilt. Das bedeutet _nicht_, dass sie "sicher vor Anfällen" ist, es bedeutet nur, dass die Farbe sicher von der Technologie reproduziert werden kann, die die Farbe auf Bildschirmen erzeugt.

## Messen, um Schaden zu verhindern

Das Potenzial für Schaden zu messen, ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Helligkeit, Größe, Kontrast und im Fall von Animationen die Frequenz. WCAG 2.1 bietet Richtlinien zur Bewertung von Inhalten.

Im August 2004 berief die Epilepsy Foundation of America einen Workshop ein, um mit der Entwicklung eines Expertenkonsens über fotosensitive Anfälle zu beginnen. Die folgende, fachkundige und autoritative Information stammt aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0,006 Steradian (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) bedeckt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in beliebiger Ausrichtung enthalten. Wenn die Hell-Dunkel-Streifen eines Musters vom minimal erwarteten Betrachtungsabstand am Auge einen soliden Winkel von >0,006 Steradian abdecken, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s angezeigt wird, darf das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien lassen sich bei festen Medien einfacher anwenden, zum Beispiel bei einer vorab aufgenommenen Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Für den Webentwickler stellt sich daher die Frage, wie dies in Bezug auf Messungen für Farbe, Helligkeit und Sättigung relevant ist.

Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es handelt sich um einen photometrischen Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug zu dem, was wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, da ein spezifischer Standard angenommen wird, der auf Monitoren, Druckern und dem Internet verwendet wird, und es ist der **sRGB** (standard Red Green Blue).

> Als Maß für die pro Flächeneinheit emittierte Lichtmenge wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbrauchermonitore mit [Flüssigkristallanzeige](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Helligkeiten von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [HD-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Fazit ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er einfach vom häufig verwendeten Hex-Code umgewandelt werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten bemühen sich, die Art von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Das gesagt, darf nicht vergessen werden, dass Farbe ebenso sehr über die menschliche Wahrnehmung im Gehirn als über die Messung des vom Computerbildschirm kommenden Lichts handelt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Abweichungen und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Emeritus-Dozent für Informatik an der Cal State University Long Beach, folgendes bezüglich [Helligkeit im HSL-Farbraum](https://colortutorial.design/hsb.html) _"…Die Unterscheidung zwischen den Helligkeitsstufen ist nicht linear, wie der HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Veränderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, die menschliche Vision und die menschliche Wahrnehmung jedoch nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung des Lichts, während es von einem Computermonitor durch die Entfernung bis zum menschlichen Auge gelangt, durch die menschliche Sehkraft gefiltert wird und dann durch das menschliche Gehirn verarbeitet wird, fortgesetzt wird.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0), "Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Antwort auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf". Der Artikel folgt mit dieser Statistik: "Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger vorkommen, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulation".

**Die Benutzertests sind sehr problematisch.** Natürlich möchte niemand eine anfällige Person für Anfälle dem Testen durch Benutzer unterziehen. Es ist gefährlich. Daher ist es eine der ethischsten Dinge, die Entwickler und Designer tun können, Werkzeuge zu verwenden, die von Experten auf diesem Gebiet entwickelt wurden, die eng mit Ärzten zusammengearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und fachkundig von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Maßstab für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und sich bemüht, es **kostenlos** zum Download bereitzustellen. PEAT kann Autoren dabei helfen, festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle auslösen. Beachten Sie bitte die Einschränkung bei der Verwendung: **Die Verwendung von PEAT zur Bewertung von kommerziell produzierten Materialien für Fernsehausstrahlungen, Filme, Heimunterhaltung oder Gaming-Industrien ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke.**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehmacher den Harding-Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Maßstab. Fernsehmacher in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, sodass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten bietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung sicherzustellen, dass wir weder absichtlich noch unabsichtlich Schaden verursachen. Wenn wir etwas aufnehmen müssen, das potenziell gefährlich sein kann, ist es von entscheidender Bedeutung, Benutzer daran zu hindern, die schädlichen Inhalte zufällig zu treffen, und Möglichkeiten bereitzustellen, wie Benutzer Animationen verhindern und steuern können, um potenzielle Schäden zu verringern.

### Was der Webentwickler tun kann

#### Kein Schaden zufügen

[WCAG Guideline 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: "_Gestalten Sie keine Inhalte in einer Weise, die bekanntlich Anfälle oder physische Reaktionen verursacht_." Nehmen Sie keine Animation auf, die ein Benutzer nicht kontrollieren kann. Gestalten Sie nicht mit Mustern, die bekanntlich Probleme verursachen. Wenn Sie ein GIF oder PNG mit Blitzlichtern einfügen müssen, nehmen Sie es statt dessen in ein Videoformat auf, damit der Benutzer es mit den vorhandenen Steuerelementen kontrollieren kann. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Verstehen Sie Bösartigkeit

Als Entwickler oder Designer, fragen Sie sich, ob blinkende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie richtig behandelt werden, gibt es diejenigen, die schadensverursachende Inhalte von Ihrer Seite herunterladen und sie als Waffe benutzen können. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zur physischen Schädigung durch Animation zu verwenden, am Samstag, den 22. März 2008 begann: Die Website der Epilepsy Foundation wurde durch Beiträge mit blinkenden Bildern und Links, die fälschlicherweise als hilfreich angegeben wurden, gehackt. Benutzer mit vestibulären Störungen, die Hilfe von der Website suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen wird unternommen, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem er im Dezember 2016 ein animiertes GIF erhalten hatte: das blinkende GIF trug die Nachricht: "_You deserve a seizure for your posts_."

#### Belichtung kontrollieren, Zugriff kontrollieren

Die Steuerung der Belichtung auf der Seite ist entscheidend, um sicherzustellen, dass eine Person, die anfällig für Anfälle ist, nicht zufällig darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, Sie haben ein Bild oder eine Animation, die Anfälle hervorrufen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst einen Warnhinweis über den Inhalt anzeigen und ihn dann an einen Ort setzen, an dem der Benutzer sich dazu entscheiden muss, darauf zuzugreifen, z. B. durch das Klicken eines Knopfes oder sicherstellen, dass der Link zur Seite einen deutlichen und offensichtlichen Warnhinweis enthält.

Betrachten Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht Indexieren, Nicht Folgen

Indem die Seite nicht indiziert wird, wird die Wahrscheinlichkeit verringert, dass Benutzer zufällig über sie durch eine Suche stolpern.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Feststellen, ob ein GIF animiert ist

- [npm's animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht die Fähigkeit, Animation _so früh wie möglich_ in einer bestimmten HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs sollte die Animation inaktiv sein, bis der Benutzer sie aktiviert. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

**Ressourcen zur Erkennung und Steuerung von animierten GIFs umfassen:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [github.com/rubentd/gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen hilft, animierte GIFs auf Ihrer Webseite abzuspielen und zu stoppen

### Videos

Auch im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, indem Sie z.B. das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut für `<video controls>` nicht hinzufügen, oder setzen Sie {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein mächtiges Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet die Eigenschaft `animation-play-state` in Zusammenhang mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter Kontrolle des Benutzers zu schaffen.

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

### Sicherstellen, dass der Benutzer Animationen nicht nur starten, sondern auch stoppen kann

Ein {{HTMLElement('video')}} Element ohne Attribute wird nicht automatisch abspielen und hat auch keine Steuerelemente. Achten Sie darauf, das `controls` Attribut zum Videoelement hinzuzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmieren Sie sicher, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls` Eigenschaft spiegelt das `controls` HTML-Attribut wider, welches kontrolliert, ob Benutzeroberflächensteuerungen zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie dem HTML-Video- und Audioelement das Wort "controls" hinzufügen.

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

Nehmen Sie dasselbe Beispiel und wenden Sie es auf Audio an:

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

Beachten Sie, dass die Audioinhalte in Videos durch das `muted` Inhaltsattribut gesteuert werden können, auch wenn der Inhalt sich innerhalb des {{HTMLElement('video')}}-Elements anstatt des {{HTMLElement('audio')}}-Elements befindet. Dieses Beispiel stammt aus dem Abschnitt zur [Beschreibung des stummgeschalteten Medienattributs](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) vom HTML Living Standard. Es erklärt, dass das Video ruhig im Hintergrund läuft, bis der Benutzer Maßnahmen ergreift, um den Ton aufzuheben.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Das mag offensichtlich erscheinen, aber weil es so viele MIME-Typen gibt, variieren die Mechanismen, um sie zu handhaben, stark, und aus diesem Grund gibt es keine Einheitslösung für das Problem. Dies wird weiter dadurch erschwert, dass selbst die Klassifizierung von Dateien beeinflusst, wie sie gehandhabt werden sollten. Zum Beispiel wird das .gif-Dateiformat in der Regel als ein Bild verstanden, aber in einigen Kreisen auch als ein Video-Dateiformat angesehen, weil es animiert werden kann. Für eine umfassende Liste der Medientypen besuchen Sie bitte die Seite von [IANA.org für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, sie ausfindig zu machen, sind keine beiläufige Übung. Vielleicht möchten Sie den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard auf whatwg.org verfolgen. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und daher variiert die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt zu [grundlegenden Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Schlüsselbaustein in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit Bildschirmaktualisierung interagiert. Sehen Sie sich den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) an, in dem sie sich mit den Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung befassen.
- **GIFs (Raster)**: Schwer zu kontrollieren, da die Steuerung ihrer Animationen innerhalb der Gif-Dateien selbst liegt. Informationen darüber, wie die Geschwindigkeit von Gifs gesteuert werden kann, finden Sie auf der W3C-Seite ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow Artikel zum Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Gilt als Variante, Video-Version von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei verweisen (z.B. eine .webm Datei), die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Dateiformat für animierte Bilder. Auch in einigen Kreisen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), stellt fest, dass "_SVG ein textbasiertes offenes Web-Standard ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) zu arbeiten._" SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Das bedeutet, dass das Aussehen und die Animation von SVGs durch CSS-Keyframes und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente über [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG
