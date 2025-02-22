---
title: Web-Barrierefreiheit für Anfälle und physische Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: 940b352725f7e803b194af619702071630f3d6a6
---

{{AccessibilitySidebar}}

Dieser Artikel stellt Konzepte vor, wie Webinhalte für Personen mit vestibulären Störungen zugänglich gemacht werden können und wie man misst und verhindert, dass Inhalte Anfälle und/oder andere physische Reaktionen auslösen.

## Übersicht

### Anfälle

Die durch Licht ausgelösten Anfälle werden als fotosensitive Epilepsie bezeichnet. Inhalte, die flackern, blitzen oder blinken, können fotosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere schwerwiegende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Fotosensitive Epilepsie ist eigentlich eine Art "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Falle der fotosensitiven Epilepsie werden Anfälle spezifisch durch Blitzlichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen hervorrufen können, wird in Artikeln wie ["Gamma-Oszillationen und fotosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo darauf hingewiesen wird: "_Bestimmte visuelle Bilder können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen, selbst in Abwesenheit von Bewegung oder Flackern._". Die Epilepsy Foundation spricht in ihrem Artikel ["Photosensibilität beleuchten, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder sich bewegende Muster von erkennbaren hellen und dunklen Streifen haben den gleichen Effekt wie blitzende Lichter aufgrund des Wechsels zwischen dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig „quantifizieren“: \_„Ein Muster mit dem Potenzial, Anfälle hervorzurufen, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Paarungen von Streifen in jeder Ausrichtung zählen". Zusätzlich zu Streifen ist bekannt, dass auch Karomuster fotosensitive Anfälle verursachen können, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Auch wenn statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind blitzende/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: _"Das Einzige, das wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen können. Allerdings sind nur wenige Epilepsiearten fotosensitiv, und die Mehrheit der Epilepsien ist es nicht."_ Neben den durch Fotosensibilität verursachten Anfällen kann auch das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen viel seltener zu sein scheint. Für eine tolle Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende unprovozierte Anfälle umfasst_." Gemäß der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Sudden unexpected death in epilepsy (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist zwar nicht häufig, aber ein sehr reales Problem, und Menschen müssen sich seines Risikos bewusst sein"_.

Der Punkt ist, dass Anfälle definitiv tödlich sein können, und Entwickler und Designer sind unglaublich wichtig, um das Web für diejenigen mit Empfindlichkeiten gegenüber Fotosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer außer Gefecht setzten. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensibilität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei fotosensiblen Menschen Anfälle hervorrufen können; hier ein Auszug aus der Liste:

- Fernsehbildschirme oder Computermonitore aufgrund von Flackern oder rollenden Bildern.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, beispielsweise Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Dieser Artikel führt weiter aus, dass viele Faktoren zusammenkommen müssen, um die fotosensible Reaktion auszulösen. Hervorzuheben ist, dass er die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Spektralbereich scheinen besonders problematisch zu sein. Im Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein angemerkt: _"Personen mit fotosensitiven Anfallsstörungen können durch Inhalte, die mit bestimmten Frequenzen für mehr als ein paar Blitze blitzen, einen Anfall erleiden"_ und es wird sehr spezifisch angemerkt, dass: "_Menschen sind sogar empfindlicher gegenüber roten Blitzen als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigte rote Blitze bereitgestellt_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das auf hohe Frequenz eingestellt ist, um Farbe und Helligkeit zu ändern, kann leicht über JavaScript echten Schaden verursachen. Und, Flackern kann überall auftreten. Zum Beispiel können "Spinners", die oft verwendet werden, um anzuzeigen, dass Seiten geladen werden, leicht "flackern", während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel stellt die Seite für das Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"Fotosensitive Anfälle durch bestimmte Arten von Blinken in Web- oder Computerinhalten hervorgerufen werden können, einschließlich Mouse-overs, die große Bereiche des Bildschirms schnell wiederholt ein- und ausschalten"_.

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden, und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen auftritt). Allerdings sind Anfälle nicht die einzigen möglichen negativen physische Reaktionen, die durch Blinken, Flackern, Blitzen und andere solche Reize ausgelöst werden können. Im Jahr 1997 brachte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten an Übelkeit, Zittern und blutigem Erbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus eingeliefert werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Konsequenzen: jede dieser physischen Reaktionen kann so schwer sein, dass sie unfähig macht.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "blitzen" und "blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flacker-Effekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Photosensibilität beleuchten, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) merkt an, dass _"im Allgemeinen blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am ehesten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass fotosensiblen Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollen."_ Für einige Menschen kann jedoch Blitzen/Blinken Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinklichter schlecht sind. Die NASA stellt in ihrem Dokument titelt, ["Blinken, Blitzen und Temporale Reaktion"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitslenkung sein können—was notwendig ist für Warnknöpfe (dies geht davon aus, dass Benutzer den Bildschirm weiterhin sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch; sie müssen sparsam und sorgfältig eingesetzt werden. In Bezug auf Webdesign müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm kapern, um ein blinkendes Notfallwarnsignal anzuzeigen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, wenn diese Warnungen angezeigt werden.

### Blitzen und Flackern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x), _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Helligkeit von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen festen Betrachtungswinkel von ≥0,006 Steradiant (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischer Betrachtungsentfernung) belegt."_

Wie groß ist eine typische Betrachtungsdistanz? Die zu berücksichtigende Empfehlung für eine typische Betrachtungsdistanz zum Zeitpunkt des Schreibens war: "_Der Bereich kann als auf einen Bereich von >25% der Fläche eines Fernsehbildschirms bei Standardbetrachtungsabständen von ≥2 m (∼9 Fuß) gelten."_ Seitdem hat sich viel geändert, und wir sind unseren Bildschirmen heutzutage viel näher.

Auch bestimmte Farben und/oder Farbkombinationen spielen eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die den Gehirndynamiken zugrunde liegen, durch bestimmte Farbkombinationen mehr als andere moduliert werden könnten, beispielsweise verursacht ein rot-blau flackernder Reiz eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen & blitzendes Rot

[WCAG 2.3.1 allgemeine Blitz- und Rotblitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) werden wie folgt definiert:

- Ein **allgemeiner Blitz** wird als ein Paar entgegengesetzter Veränderungen in der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte definiert, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und ein "Paar entgegengesetzter Veränderungen" ein Anstieg, gefolgt von einem Rückgang oder ein Rückgang, gefolgt von einem Anstieg ist;
- Ein **roter Blitz** wird als jedes Paar von Übergängen mit einer gesättigten roten Farbe definiert.

Diese Standards basieren auf früherer Forschung. Im Jahr 2004 entwickelte eine von der Epilepsy Foundation of America einberufene Arbeitsgruppe einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über fotosensitive Anfälle: _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Helligkeit von mindestens 20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Betrachtungswinkel von mindestens 0,006 Steradiant (etwa 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einer gesättigten roten Farbe ist wichtig und stellt alleine ein Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es hängt davon ab

"Relative" Größe und Entfernung sind beide wichtig. Laut [PEAT](https://trace.umd.edu/peat/): _"Der kombinierte Bereich von Blitzen, die gleichzeitig auftreten, belegt nicht mehr als ein Viertel einer beliebigen 341 x 256 Pixel großen Rechteckfläche irgendwo auf dem angezeigten Bildschirmbereich, wenn der Inhalt bei einer Auflösung von 1024 mal 768 Pixel angezeigt wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, ergibt sich im Artikel über WCAG 2.3.1: "_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block repräsentiert einen 10-Grad-Sichtbereich bei einer typischen Betrachtungsdistanz. (Das 10-Grad-Sichtfeld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehteil des Auges, wo Menschen am anfälligsten für Fotostimuli sind.)_"

Dieses Pixelgrößenverhältnis berechnet sich für relative Größen, aber auch die Entfernung spielt eine Rolle.

Entfernung ist wichtig, weil sie das gesamte Sichtfeld beeinflusst. Wenn Betrachter Augenmasken für das Spielen tragen, kann das Sichtfeld vollständig vom Bildschirm umhüllt sein. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf dem Telefon, Computer oder Headset erfahren werden kann. Die Besorgnis über blinkende Bilder in einer Augenmaske nimmt zu, da die Maske so nah an den Augen ist.

[Die Epilepsy Society (UK)](https://epilepsysociety.org.uk/) stellte in ihrem Artikel ["3D-Filme und Virtuelle Realität"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk) fest: _"Bei VR blitzen die Bilder sehr schnell auf und im Allgemeinen ist dies zu schnell, um bei Menschen mit fotosensitiver Epilepsie einen Anfall auszulösen. Das Sichtfeld ist jedoch groß und so wird mehr Auge stimuliert. Dies bedeutet, dass mehr Gehirn betroffen sein kann und dies möglicherweise einen fotosensitiven Anfall auslösen kann."_

(Hinweis: Einige Benutzer können mit blinkenden Cursor nicht sehen und können Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxeneffekte

Kontrastreiche dunkle und helle geometrische Muster sind bekannte Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkle Paare von Streifen Anfälle provozieren können und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist acht Linien das maximal erlaubte, aber wenn es sich bewegt, sind nicht mehr als fünf Linien erlaubt.

Parallaxeneffekte können Desorientierung verursachen. Verwenden Sie Parallaxeneffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Paarungen von Streifen in jeder Ausrichtung zählen. Wenn die hell-dunklen Streifen eines Musters zusammen am Auge aus der minimal erwarteten Betrachtungsdistanz einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkle Paarungen von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung zieht, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst bei den oben aufgeführten Metriken kommen zusätzliche Faktoren ins Spiel. Beispielsweise erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren Bereich zu einem größeren übergeht, ebenso wie bei zunehmendem Kontrast und Erhöhung der räumlichen Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass sich vom einfacheren Orientierungen (zum Beispiel Streifen) zu einem komplexeren (zum Beispiel das Karomuster, das entsteht, wenn man ein Set von Streifen über, aber senkrecht zu, dem ursprünglichen Set legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farbe ist wichtig für Barrierefreiheit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance), wie sie sich auf Webzugänglichkeit und Zugänglichkeit im Allgemeinen beziehen.

Wie sich die Farbe zu ihrem Hintergrund verhält—normalerweise im Hinblick auf den Kontrast ausgedrückt—und wie drastisch sich die Farbe von Frame zu Frame in der Animation ändert, ist wichtig. Mehr dazu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde nachgewiesen, dass [einige Farben epileptische Anfälle wahrscheinlicher auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Die Macht, das Verhalten zu beeinflussen, wurde sogar bei Tieren beobachtet.

- **Rotentsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot eingestellt, dass Augenärzte einen Test damit aufsetzten. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test anwendet, finden Sie unter: [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die an einer traumatischen Hirnverletzung leiden, [die kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion bei Menschen mit traumatischen Hirnverletzungen beeinflusst, scheint die Farbe im roten Spektralbereich besondere Sorge und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei Tests des Photosensitive Epilepsy Analysis Tools fest, dass die Häufigkeit von Anfällen viel höher war als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video: [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" angesehen wird. Das bedeutet nicht, dass sie "sicher fürs Auslösen von Anfällen" ist, sondern nur, dass die Farbe von der Technologie, die zum Erzeugen von Farbe auf Bildschirmen verwendet wird, genau reproduziert werden kann.

## Messen zur Schadensvermeidung

Das Potenzial für Schaden zu messen, ist ein guter Ausgangspunkt. Zu den in Tests betrachteten Faktoren gehören Farbe, Leuchtdichte, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 berief die Epilepsy Foundation of America einen Workshop ein, um einen Expertenkonsens über fotosensitive Anfälle zu entwickeln. Die folgenden, kompetenten und maßgeblichen Informationen stammen aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Helligkeit von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen festen Betrachtungswinkel von ≥0,006 Steradiant (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischer Betrachtungsentfernung) belegt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Paarungen von Streifen in jeder Ausrichtung zählen. Wenn die hell-dunklen Streifen eines Musters zusammen am Auge aus der minimal erwarteten Betrachtungsdistanz einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkle Paarungen von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung zieht, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden, wenn es sich um feste Medien handelt, zum Beispiel um eine vorab aufgenommene Fernsehsendung, die Frame für Frame analysiert werden kann, im Vergleich zu interaktiven Medien.

Die "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich dies für den Webentwickler auf Messungen für Farbe, Leuchtdichte und Sättigung?

Candela ist eine SI-Einheit (Internationales Einheitensystem) für Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung von sichtbarem Licht, so wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt dies in Bezug auf das, womit wir als Entwickler vertraut sind: ein Anzeigegerät und im RGB-Raum. Dies ist hilfreich, weil es einen spezifischen Standard gibt, der angenommen wird, dass er auf Monitoren, Druckern und dem Internet verwendet wird, und das ist der **sRGB** (standard Red Green Blue).

> Als Maß für das von einem Flächenabschnitt emittierte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Displaygeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) In der Regel sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Verbraucherdesktop-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [High-definition televisions](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Fazit ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungsinstrumenten und Entwicklern ist, da er leicht vom häufig verwendeten Hex-Code umgerechnet werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, Art und Umfang zu quantifizieren und messen, und die Art von Webinhalten zu überprüfen, die als Auslöser für Anfälle dienen können. Trotzdem sollte nicht vergessen werden, dass Farbe ebenso sehr mit menschlicher Wahrnehmung im Gehirn zu tun hat, wie mit der Messung des vom Computerbildschirm kommenden Lichts.

Zusätzlich zu den psychologischen Variabilitäten gibt es auch physiologische Unterschiede unter uns. Es werden Variabilitäten und Nuancen darin bestehen, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. So weist Tom Jewett, Lehrbeauftragter für Informatik im Ruhestand an der Cal State University Long Beach, auf Folgendes zur Helligkeit in der HSL-Farbskala hin [lightness in the HSL color scale](https://colortutorial.design/hsb.html): _"...Die Unterscheidung zwischen Helligkeitsstufen ist tatsächlich nicht linear, wie die HSL-Skala implizieren würde; wir sind viel empfindlicher für Veränderungen bei helleren Werten als bei dunkleren."_.

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Die Erkundung und Diskussion darüber, wie die maschinelle Messung des Lichts, so wie es von einem Computerbildschirm ausgeht, durch die Distanz zum menschlichen Auge gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert wird, steht in vollem Gang.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierten Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger vorkommen, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulation"_.

**Benutzer-Tests sind sehr problematisch**. Natürlich möchte niemand eine anfällige Person in einen Benutzertest einbeziehen. Es ist gefährlich. Dazu gehört, dass eine der ethischsten Dinge, die Entwickler und Designer tun können, ist, Werkzeuge zu verwenden, die von Experten auf diesem Gebiet, die Hand in Hand mit Ärzten zusammengearbeitet haben, entwickelt wurden. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT**, und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) festgelegt, und sie haben sich bemüht, es **_kostenlos_** zum Download bereitzustellen. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung seiner Nutzung: **_Die Verwendung von PEAT zur Beurteilung von Material, das kommerziell für Fernsehübertragungen, Filme, Heimunterhaltung oder die Spieleindustrie produziert wurde, ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test auf [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe von [HardingTest.com](https://hardingtest.com/) sowohl Analysen als auch Zertifizierungen von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheit-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung sicherzustellen, dass wir keinen Schaden verursachen – weder absichtlich noch unbeabsichtigt. Falls wir etwas enthalten müssen, das potenziell schädlich ist, ist es wichtig, dass Benutzer nicht zufällig auf den schädlichen Inhalt stoßen, und ihnen Möglichkeiten zu bieten, diese Animationen zu verhindern und zu kontrollieren, um möglichen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Kein Schaden zufügen

[WCAG Richtlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie keine Inhalte so, dass sie bekanntermaßen Anfälle oder physische Reaktionen verursachen"_. Binden Sie keine Animationen ein, die ein Benutzer nicht steuern kann. Verwenden Sie keine Muster, die dafür bekannt sind, Probleme zu verursachen. Wenn Sie ein GIF oder PNG mit Blitzen enthalten müssen, zeichnen Sie es stattdessen im Videoformat auf, damit der Benutzer die Möglichkeit hat, es zu steuern. Stellen Sie dem Benutzer die Möglichkeit zur Verfügung, es zu vermeiden, auszuschalten oder es weniger schädlich zu machen.

#### Verstehen Sie Böswilligkeit

Fragen Sie sich als Entwickler oder Designer, ob unbedingt flackernde Inhalte auf Ihrer Webseite sein müssen. Selbst wenn es richtig gehandhabt wird, gibt es jene, die störende Inhalte von Ihrer Seite herunterladen und sie als Waffe verwenden könnten. Es wird angenommen, dass der erste dokumentierte Versuch von Computern, physischen Schaden durch Animation zu verursachen, am Samstag, dem 22. März 2008 begann: Die Website der Epilepsy Foundation wurde durch Posts mit blitzenden Bildern und Links, die fälschlich beanspruchen, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die Hilfe auf der Website suchten, waren betroffen.

Eine Reihe rechtlicher Überlegungen sind im Gange, nachdem Journalist Kurt Eichenwald, ein bekannter Epileptiker, im Dezember 2016 einen Anfall erlitt, nachdem ihm ein animiertes Gif geschickt wurde: das blitzende Gif trug die Nachricht, _"Sie verdienen einen Anfall wegen Ihrer Posts"_.

#### Kontrolle der Exposition, Kontrolle des Zugriffs

Die Kontrolle der Exposition zur Seite ist der Schlüssel zur Sicherstellung, dass jemand, der für Anfälle anfällig ist, nicht aus Versehen darauf stößt. Die WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, ein Bild oder eine Animation zu haben, die Anfälle hervorrufen kann, kontrollieren Sie den Zugriff darauf, indem Sie zunächst vor dem Inhalt warnen und es dann an einem Ort platzieren, an dem der Benutzer opts-in, beispielsweise durch Klicken auf einen Button oder durch Sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung aufweist.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht indizieren, nicht folgen

Indem Sie die Seite nicht indizieren lassen, verringern Sie die Wahrscheinlichkeit, dass Benutzer darüber stolpern, wenn sie nach etwas suchen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich; jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Möglichkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage zu bestimmen.
- Zakirt bietet einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Stellen Sie bei animierten GIFs sicher, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen aktivieren, um die Animation zu starten.

**Ressourcen zum Erkennen und Steuern von animierten GIFs beinhalten:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen hilft, animierte GIFs auf Ihrer Website zu spielen und zu stoppen

### Videos

Wie bei animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie z.B. das Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) nicht zu `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand zu setzen. Um ein leistungsfähiges Beispiel zu sehen, wie dies tatsächlich funktioniert, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet das `animation-play-state` in Zusammenarbeit mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert wird.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf Null für die Anfangsstufe der Animation zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen ebenso stoppen wie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Video-Element hinzufügen, damit der Benutzer das Video sowohl starten als auch stoppen kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Stellen Sie programmgesteuert sicher, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls` HTML-Attribut wider, das steuert, ob Benutzeroberflächensteuerungen für das Abspielen des Medienobjekts angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, auf die ein Benutzer zugreifen kann, fügen Sie sicherheitshalber das Wort "controls" zu HTML-Video- und Audioelementen hinzu.

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

Denselben Anwendungsfall auf Audio angewendet:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt nicht im {{HTMLElement('audio')}} selbst enthalten ist. Dieses Beispiel stammt aus dem Abschnitt über [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) Beschreibung vom HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer sich entscheidet, das Audio zu aktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Kontrolle der Geschwindigkeit

Dies scheint offensichtlich, aber weil es so viele unterschiedliche MIME-Typen gibt, variieren die Mechanismen für deren Handhabung erheblich, und es gibt daher keine einheitliche Lösung für das Problem. Dies wird weiter erschwert durch die Tatsache, dass sogar die Kategorisierung von Dateien die Handhabung beeinflusst. Beispielsweise wird das .gif-Dateiformat in der Regel als Bild verstanden, aber in einigen Kreisen aufgrund seiner Animationsfähigkeit auch als Video-Dateiformat angesehen. Für eine umfassende Auflistung der Medientypen besuchen Sie bitte [die Seite von IANA.org für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, sie auszuschnüffeln, sind keine beiläufige Übung. Möglicherweise möchten Sie den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org verfolgen. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und dementsprechend die Kontrolle der Animation variiert.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial über Canvas bietet einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` bleibt ein Grundpfeiler in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Lesen Sie den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem die Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung diskutiert werden.
- **GIFs (Raster)**: Schwer zu knacken, weil die Steuerung für ihre Animation innerhalb der gif-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie unter W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Betrachtet als Variante, videoartige Version eines GIFs. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei verweisen (z.B. eine .webm-Datei), die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikformat für animierte Bilder. Ebenfalls von einigen weiterhin als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), stellt fest, dass \_"SVG ein textbasiertes offenes Webstandard ist. Er ist ausdrücklich dafür ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) zu arbeiten." \_SVGs können als Bild wie in diesem Beispiel verwendet werden: `<img src="example.svg" alt="This is an image using a svg as a source">`. Dies bedeutet, dass SVG-Darstellungen und -Animationen durch CSS-Keyframes und Animationen gesteuert werden können. Zur Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Transformationen können den Text in einem Div animieren und Schaden zufügen. Bewegender Text kann Anfälle genauso induzieren wie bewegliche Bilder, also vermeiden Sie es, ihren Text zu animieren. Es ist auch aus anderen Gründen eine gute Idee, auf bewegten Text zu verzichten, da viele Bildschirmleser bewegten Text nicht lesen können und es auch für diejenigen ohne Seh- oder vestibuläre Probleme schlechte Benutzererfahrung darstellt.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammen kommen, um ein leistungsfähiges Erlebnis für den Benutzer zu schaffen. Wir haben bereits früher in diesem Dokument die Eigenschaft `animation` erwähnt. Sie ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann in entweder Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation auftreten soll.
- `animation-timing-function`

Die Animations-Eigenschaft ist schon allein mächtig, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein leistungsfähiges Set von Optionen für den Benutzer bereitgestellt werden. Durch das Setzen der `animation-duration`- und `transition-duration`-Eigenschaften auf eine kurze Dauer anstatt `animation: none` und `transition: none` zu setzen, wird ein Sicherheitsnetz bereitgestellt, um Problemen im Fall einer Abhängigkeit von der notwendigen Animation vorzubeugen.

### JavaScript-Animation

JavaScript wird oft genutzt, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der meiste JavaScript-Code, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerelemente für die Abspielgeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und gilt als normale Geschwindigkeit; ein Wert von 0,5 ist die Hälfte der Geschwindigkeit, ein Wert von 2.0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Abspielgeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und beinhaltet [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite über [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel dafür, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten ist es, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen und -größen in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, wegen Sicherheitsbedenken. Das MDN-Dokument, [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele dafür, indem es mehrere Bildquellen für die Sonne, die Erde und den Mond verwendet und verschiedene Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde, während sie um die Sonne, und des Mondes, während er um die Erde kreist, verwendet. Verwenden Sie das Codepen, das mit diesem Tutorial verfügbar ist, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation verändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie unbedingt eine blitzende Animation verwenden müssen

Stellen Sie sicher, dass sie eine Steuerung hat. Stellen Sie sicher, dass sie beim ersten Betrachten ausgeschaltet ist, und dass der Benutzer einwilligen muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerungen bietet, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Das Konvertieren eines animierten Gifs in ein Video ermöglicht es, Steuerungen auf die Animation zu setzen, und gibt dem Benutzer Handlungsfähigkeit. Es gibt viele kostenlose Online-Konverter zur Verwendung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie Benutzern einen Vorabhinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.1 Success Criterion 3.2.5 Change on Request](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt blitzen müssen, halten Sie es klein. Im Allgemeinen, begrenzen Sie die Größe des Blitzes auf einen Bereich von etwa 341 mal 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter eine typische Entfernung zum Bildschirm hat. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus nächster Nähe betrachtet wird, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf dem Telefon, Computer oder Headset erfahren werden.

Wenn Sie für ein Spiel oder VR, das eine Augenmaske verwendet, designen — **oder KANN durch eine Augenmaske verwendet werden**, beispielsweise in Firefox Reality (einem Browser für virtuelle Realität) —sicherstellen, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, weil das Bild viel näher an den Augen des Benutzers liegt.

#### Reduzieren Sie den Kontrast

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast zwischen Textfarbe und Hintergrundfarbe (technisch als _Leuchtdichtkontrastverhältnis_ bezeichnet, laut W3.orgs Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter ist solch ein Inhalt zu lesen. Benutzer mit eingeschränktem Sehvermögen schätzen es besonders, wenn Anstrengungen unternommen werden, um einen hohen Kontrast des Textes zum Hintergrund zu gewährleisten. Wenn der Inhalt jedoch animiert wird, ist es tatsächlich ein Weg, die Wahrscheinlichkeit zu reduzieren, dass der animierte Inhalt Anfälle verursacht, indem man den Kontrast **_senkt_**. Senken Sie den Kontrast, wenn drei Blitz innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0,05) / (L2 + 0,05), wobei

    - L1 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren der Farben ist und
    - L2 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren der Farben ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder auf dem Web veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkte eine phänomenale Ressource für traditionelle Bilder. Ebenfalls für Bilder steht ein Online-Tool zur Verfügung: pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie vorhaben, animierte GIFs zu erstellen, starten Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist ebenfalls eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Den Hintergrundfarbe eines Absatzes setzen"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Traversieren einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

**HTML-Inhalte [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

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

**JavaScript-Inhalte [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

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

#### Vermeiden Sie voll gesättigtes Rot für blitzende Inhalte

Wie bereits in diesem Dokument erwähnt, berief die Epilepsy Foundation of America im August 2004 einen Workshop ein, um einen Expertenkonsens über fotosensitive Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Betrachtungswinkel von mindestens 0,006 Steradiant (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischer Betrachtungsentfernung) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet."_ Sie stellen auch in demselben Konsens fest: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko betrachtet."_

### Stellen Sie alternative CSS-Stile bereit

Mit dem Verständnis, dass ein Großteil der Animation und des Blitzens über CSS-Methoden gesteuert werden kann, ist es wichtig, Wege zu erforschen, um den Benutzern alternative Optionen zur Verfügung zu stellen und deren Steuerung bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die verfügbaren alternativen CSS in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie danach suchen. In einigen Fällen werden die alternativen Styles enthüllt, wenn die Benutzer das "Ansichts"-Menü durchlaufen, in anderen Fällen werden sie in den Einstellungen ersichtlich, manchmal beides. Nicht alle Benutzer wissen jedoch, dass sie diese Optionen über den Browser oder die Einstellungen suchen können, daher lohnt es sich, zu bedenken, dies auf die altmodische Weise mit offensichtlichen Buttons oder Links zu tun, um den Stil zu ändern, damit Benutzer sie einfach sehen können. Dies widerspricht nicht, noch überschreibt es die Fähigkeit des Browsers, die alternativen Stylesheets zu lesen oder die Fähigkeit des Benutzers, in den Einstellungen Präferenzen festzulegen.

Es ist wichtig zu wissen, dass bestimmte Benutzer – wie diejenigen, die auf Sprachsteuerungssysteme angewiesen sind – oft auf Legacy-Buttons und -Links angewiesen sind, da ihr Handicap es ihnen unmöglich macht, eine Maus zu nutzen oder von Touch-Ereignissen auf mobilen Tablets Gebrauch zu machen.

Gemeinsame Möglichkeiten, alternative Stylesheets in Ihre HTML-Dokumente einzubinden, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen `rel="alternate stylesheet"` und für Titel, `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets zu integrieren, wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) erleichtern Sie den Benutzern, über ihren Browser die Auswahl alternativer Styles zu treffen.

### Dynamisches Stilwechseln

Ein Problem beim Vertrauen auf den Browser, alternative Styles sichtbar zu machen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Styles zu entdecken. Oder durch ihre Behinderung nicht dazu in der Lage sind. Buttons oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Schaltflächen zum Umschalten hinzuzufügen, damit der Benutzer zu verschiedenen Stylesheets wechseln kann. Das gesagt, die Verwendung von alternativen Stylesheets sind nicht die einzige Option. Eine weitere Option ist, das Styling der Seite an sich zu manipulieren. Laut dem MDN-Dokument [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information): _"wo möglich, ist es wirklich Best Practice, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Style-Hooks in einem einzigen Stylesheet gesteuert werden kann."_ Eines der besten Beispiele, dies zu tun, kommt von der W3C-Seite ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extremfälle: Text-Only-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine extreme Lösung; versteht sich aber manchmal als notwendig für Lehrer und andere öffentliche Diener, die Personen mit extremen Sensitivitäten gegenüberstehen. Diese öffentlichen Diener können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu erstellen. So geht das mit CSS:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Durch das Einrichten von Medienabfragen ermöglichen Sie Kontrollen durch den Benutzer; diese Steuerungen sind im Browser oder im Betriebssystem verfügbar. Siehe das MDN-Dokument [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely), um weitere Details zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein gutes Beispiel dafür zu sehen, wie man das `prefers-reduced-motion`-Code-Snippet verwendet, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder siehe das folgende Beispiel aus dem Abschnitt über ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Es gibt ein leistungsstarkes Werkzeug, das Entwicklern über `Window.matchMedia()` zur Verfügung steht. Eine hervorragende Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge, und desto weniger "flackert" er. Die vast Mehrheit der modernen Technologie aktualisiert mit einer Frequenz, die keine Probleme mit fotosensitiven Auslösern verursacht. Doch nicht jeder ist wohlhabend genug, um die neueste Technologie zu besitzen: Ältere oder unterdimensionierte Computersysteme können niedrige Aktualisierungsraten aufweisen. [AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details über Aktualisierungsraten.

Ein sehr alter Artikel von Tech Republic ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/) hatte eine interessante Antwort bezüglich der Aktualisierungsraten in Hz:

- _"Dieser Effekt ist bemerkbar und dokumentiert, bis zu 70 Hz."_
- _"Diese Studien würden darauf hindeuten, dass Sie sich von Aktualisierungsraten unter 70 Hz fernhalten sollten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung der Aktualisierungsfunktion, die, in Kombination mit `animation-duration` oder `transition-duration`, zu einem Tempo hinführt, das für das menschliche Auge imperzeptibel ist. Mit anderen Worten: Die Techniken von Eric adressieren das Problem der Aktualisierungsrate. Der unten stehende CSS-Code stammt aus dem CSS-Tricks Artikel ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von der W3.org-Seite zu [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update`-Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild des Inhalts zu ändern, sobald er gerendert wurde. Sie hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und gewaschen. Interessanterweise verzichtet die Spezifikation darauf, die drei Ebenen in Bezug auf eine Messung von Lux zu definieren, weil Geräte mit einem Lichtsensor die Helligkeit des Bildschirms in der Regel automatisch anpassen. Die Spezifikationen notieren auch den Unterschied in der Technologie, wie zum Beispiel E-Ink, das auch bei hellem Tageslicht noch lesbar bleibt, im Gegensatz zu Flüssigkristallen, die es nicht tun.
- `environment-blending`
  - : Aus dem W3C-Draft-Dokument, Media Queries Level 5: "_Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfunktion wird verwendet, um die Eigenschaften des Displays des Benutzers zu erfragen, damit der Autor das Styling des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die Darstellung und/oder das Layout der Seite entsprechend der Displaytechnologie anzupassen, um die Ansprache oder Lesbarkeit zu verbessern."_.

#### Benutzerpräferenzmedienfunktionen (Geplant in Media Queries Level 5)

[User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend bei der Bereitstellung von Benutzersteuerung über Medien. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfunktion gibt an, ob der Inhalt normal angezeigt wird oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), erzwingt der Benutzeranzug die vom Benutzer bevorzugte Farbpallette auf der Seite, indem die gewählten Farben des Autors überschrieben werden. Aus W3Cs Entwurfdokument zu Media Queries Level 5 im Abschnitt zu erzwungenen Farben: "\_Die forced-colors-Medienfunktion wird verwendet, um zu erkennen, ob der Browser-Client eine [erzwungene Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem eine benutzerdefinierte eingeschränkte Farbpalette auf der Seite erzwungen wird." Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden, und sie wird in Kombination mit stehen müssen mit dem passenden Wert für die Medienabfrage `prefers-color-scheme`.
- `light-level`
  - : Aus dem W3C-Draft-Dokument, Media Queries Level 5 im Abschnitt zum `light-level`: "_Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfunktion wird verwendet, um nach dem Umgebungslichtpegel, unter dem das Gerät verwendet wird, zu fragen, damit der Autor das Styling des Dokuments anpassen kann._" Dies wird eine Wohltat für diejenigen sein, die motorische Probleme haben, oder für einige mit kognitiven Schwierigkeiten, die den richtigen "Button" nicht finden können, um die Bildschirmeinstellungen zu ändern.
- `prefers-contrast`
  - : Aus dem W3C-Draft-Dokument, Media Queries Level 5 im Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): "_Die prefers-contrast-Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer angefordert hat, dass das System den Kontrast zwischen anliegenden Farben erhöht oder verringert. Beispielsweise haben viele Benutzer Probleme, Text zu lesen, der wenig Kontrast zum Hintergrund hat, und bevorzugen einen größeren Kontrast._" Manchmal kann es auch zu viel Kontrast geben; ein Halo-Effekt um Text kann in solchen Konstellationen auftreten und tatsächlich die Lesbarkeit verringern. Die Kontrolle der Kontrastmenge in den Händen des Benutzers ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 der CSSWG.org-Entwürfe integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) aus HTML. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierungshilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft wird aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) entnommen.

**Anforderung:** Einige Benutzer können nicht-wörtlichen Text und Symbole nicht verstehen, wie Metaphern, Redewendungen usw. Die `literal`-Eigenschaft ist dazu gedacht, Text oder Bilder als nicht-wörtlich zu kennzeichnen und dem Autor die Möglichkeit zu geben, Benutzern nicht-wörtlichen Text und Bilder zu erklären.

#### Übergänge (für CSS und SVG)

Das Folgende stammt aus dem [Webanimmationsmodell](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfen

Das Webanimationsmodell soll die für das Ausdrücken notwendigen Features bereitstellen [CSS Transitions](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS Animations](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11).

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafik für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Tutorial: Farben beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit einer RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsfaden
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit WCAG 2.0 Blitz Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/vage Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Fotosensibilität werfen, eine der komplexesten Bedingungen bei Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) Epilepsy Foundation: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber blinkenden Lichtern oder kontrastierenden visuellen Mustern, wie Streifen, Gitter und Schachbrettmuster, geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallsähnliche Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt sind."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster induzierte Anfälle: Fachkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Liste zur Barrierefreiheit] (https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Tool allgemein anerkannt als einer der beiden "Goldstandards" zur Analyse von Blitzen.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -verwaltung — Teil 2-2: Farbverwaltung — Erweiterter RGB-Farbraum — scRGB

### Werkzeug zur Analyse von fotosensitiver Epilepsie

Zusammen mit dem Harding-Tool allgemein anerkannt als einer der beiden "Goldstandards" zur Analyse von Blitzen.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierungs-Semantik-Erklärer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder unterhalb des Schwellenwerts Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Referenzen, die in den WCAG 2.1-Kriterien gemacht wurden)
- [Drei Blitze oder unterhalb des Schwellenwerts Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animations Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlicher Dank an Teal; Wayne Dick von der [Low Vision Task Force der W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program und Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ in großer Dankbarkeit gegenüber dem Trace Research & Development Center für die Bereitstellung ihres erstaunlichen Werkzeugs, dem [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/), kostenlos.
