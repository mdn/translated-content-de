---
title: Web-Zugänglichkeit für Anfälle und physische Reaktionen
short-title: Vermeidung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

Dieser Artikel stellt Konzepte vor, wie Webinhalte für Menschen mit vestibulären Störungen zugänglich gemacht werden können, und wie man Inhalte, die zu Anfällen und/oder anderen physischen Reaktionen führen können, messen und verhindern kann.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als lichtempfindliche Epilepsie bekannt. Inhalte, die flimmern, blinken oder blitzen, können die lichtempfindliche Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie Animationen mit CSS oder JavaScript verwenden, können Inhalte erzeugen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen auslösen, auch wenn sie nicht animiert sind. Lichtempfindliche Epilepsie ist tatsächlich eine Art von "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei lichtempfindlicher Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Dass statische Bilder Anfälle und andere Störungen auslösen können, ist in Artikeln wie ["Gamma-Oszillationen und lichtempfindliche Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt: "_Bestimmte visuelle Bilder können, auch ohne Bewegung oder Flimmern, bei Patienten mit lichtempfindlicher Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Auseinandersetzung mit Photosensitivität, einer der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster aus deutlich unterscheidbaren hellen und dunklen Streifen haben die gleiche Wirkung wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle hervorzurufen, enthält klar unterscheidbare Streifen mit mehr als fünf hell-dunklen Streifenpaaren in beliebiger Ausrichtung_". Zusätzlich zu Streifen sind laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch schachbrettartige Muster bekannt, die lichtempfindliche Anfälle auslösen können.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis von USF's Comprehensive Epilepsy Program stellt fest, _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit lichtempfindlicher Epilepsie Anfälle auslösen können. Allerdings sind nur wenige Arten von Epilepsie lichtempfindlich und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Lichtempfindlichkeit verursacht werden, kann das Hören bestimmter Musikstücke auch sogenannte musikerzeugte Anfälle auslösen, obwohl diese Art von Anfällen viel seltener zu sein scheint. Eine großartige Einführung zum Thema musikerzeugte Anfälle finden Sie auf der Webseite von Epilepsy Ontario zu [Musikerzeugten Anfällen](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) merkt die Epilepsy Foundation an, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederkehrende unprovozierte Anfälle beinhaltet_." Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _"plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und die Menschen müssen sich seines Risikos bewusst sein"_.

Der Punkt ist, Anfälle können auf jeden Fall tödlich sein, und Entwickler und Designer sind entscheidend dafür, das Web für Menschen mit Empfindlichkeiten gegenüber lichtempfindlichen oder musikerzeugten Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst solche, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Nutzer handlungsunfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionsfähig ist. Der Artikel der Epilepsie-Stiftung, ["Photosensitivität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die Anfälle bei lichtempfindlichen Menschen verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder wechselnde Muster unterschiedlicher Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien fällt.
- Bestimmte visuelle Muster, insbesondere Streifen von kontrastierenden Farben.

Der gleiche Artikel führt fort, dass viele Faktoren zusammenkommen müssen, um die lichtempfindliche Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als ein möglicher Faktor einbezogen wird; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. In dem Artikel, ["Verstehen von WCAG 2.0 Dreifache Blitze oder darunter-Schwelle"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt, dass: _"Individuen mit lichtempfindlichen Anfallsstörungen können durch Inhalte gestoört werden, die mit bestimmten Frequenzen mehr als ein paar Mal blitzen"_ und geht sehr spezifisch darauf ein, dass: "_Menschen sind noch empfindlicher gegenüber roten Blitzen als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden anzurichten. Ein {{HTMLElement('div')}}-Element, das dazu eingestellt ist, seine Farbe und Helligkeit mit hoher Frequenz zu ändern, was einfach mit JavaScript gemacht werden kann, kann echten Schaden verursachen. Und Flackern kann überall vorkommen. Zum Beispiel können die allgemein verwendeten "Spinner", die während des Ladens von Seiten angezeigt werden, leicht "flackern", während sie sich drehen.

Es gibt zusätzliche Bedenken für Personen mit motorischen Problemen. Zum Beispiel merkt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) an, dass _"lichtempfindliche Anfälle durch bestimmte Arten von Blitzern in Web- oder Computerinhalten ausgelöst werden können, einschließlich Mouse-overs, die große Bereiche des Bildschirms dazu bringen, schnell und wiederholt ein- und auszublitzen"_.

### Andere physische Reaktionen

Übelkeit, Schwindel und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten verbunden sind und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen sichtbar wird). Anfälle sind jedoch nicht die einzige mögliche negative physische Reaktion auf Blitze, Flackern, Blinken und andere solche Stimuli. Im Jahr 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten an Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgelisteten physischen Störungen sind alle mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz von mehr als 3 Hz (Flimmern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) bemerkt, dass _"im Allgemeinen Blitzlichter zwischen Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am ehesten Anfälle auslösen. Um auf der sicheren Seite zu sein, empfiehlt der Konsens, dass lichtempfindliche Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollten."_ Für manche Menschen können jedoch Blitzen/Blinken Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitzen und Blinken schlecht sind. Die NASA bemerkt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php), dass Blinken und Blitzen leistungsstarke Werkzeuge sein können, um Aufmerksamkeit zu erregen - wie es für Warnknöpfe notwendig ist (dies setzt voraus, dass Nutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für manche Nutzer warnen blinkende Knöpfe zusätzlich, sie müssen sparsam und mit Vorsicht verwendet werden. In Bezug auf Webdesign müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "kapern", um eine blinkende Warnung vor einem Notfall bereitzustellen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flackern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- und pattern-induzierte Anfälle: ExpertKonsens der Arbeitsgruppe der Epilepsy Foundation of America",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sichtwinkel von ≥0.006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die zu einem typischen Betrachtungsabstand zum Zeitpunkt des Schreibens dieses Artikels in Betracht gezogen wurde, war "_das Gebiet kann als anwendbar auf ein Gebiet von >25% der Fläche eines Fernsehbildschirms genommen werden, unter der Annahme von Standard-Betrachtungsabständen von ≥2 m (∼9 Fuß)"_. Seitdem hat sich vieles geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) bemerkt, dass _"… die Komplexitäten der Gehirndynamik durch bestimmte Farbkombinationen mehr moduliert werden können als durch andere, zum Beispiel verursacht ein rot-blau-flackernder Reiz eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen & blitzen in Rot

[WCAG 2.3.1 allgemeine Blitz- und rote Blitz-Schwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird definiert als eine Paar von entgegengesetzten Veränderungen der [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wo "ein Paar von entgegengesetzten Veränderungen" ein Anstieg gefolgt von einem Rückgang ist, oder ein Rückgang gefolgt von einem Anstieg;
- Ein **roter Blitz** wird definiert als jedes Paar von Übergängen, bei denen ein gesättigtes Rot beteiligt ist.

Diese Standards basieren auf früherer Forschung. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, der einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu lichtempfindlichen Anfällen entwickelte, mit der Aussage _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt, und einen soliden Sichtwinkel von mindestens 0.006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

Sowohl die "relative" Größe als auch der Abstand sind wichtig. Laut [PEAT](https://trace.umd.edu/peat/) _"nimmt das kombinierte Gebiet von Blitzen, das zeitgleich auftritt, nicht mehr als ein Viertel eines 341 x 256 Pixel großen Rechtecks auf der angezeigten Bildschirmfläche ein, wenn der Inhalt bei 1024 mal 768 Pixeln betrachtet wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, ergibt sich im Artikel zur WCAG 2.3.1: "_Der Bildschirm 1024 x 768 wird als Referenzschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block stellt ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Sichtfeld stammt aus den ursprünglichen Spezifikationen und stellt den zentralen Sehbereich des Auges dar, wo Menschen am anfälligsten für Fotostimuli sind.)_"

Dieses Pixel-Flächen-Verhältnis berechnet sich für die relative Größe, aber der Abstand ist ebenfalls wichtig.

Der Abstand spielt eine Rolle, weil er das gesamte Sichtfeld beeinflusst. Wenn Betrachter okulare Masken für Spiele verwenden, ist das Sichtfeld wahrscheinlich in seiner Gesamtheit vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, und kann auf dem Telefon, Computer oder Headset erlebt werden. Die Besorgnis bezüglich blinkender Bilder in einer okulare Maske ist eine wachsende, da die Maske so nah an den Augen ist.

Forschungsergebnisse deuten allgemein darauf hin, dass die Verwendung von VR tatsächlich sicherer sein könnte als der normale Konsum von Bildschirmen, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen, _"Die begrenzten Daten, die bisher verfügbar sind, lassen keine besonderen Bedenken hinsichtlich Anfällen in Bezug auf VR-Technologie erkennen, obwohl sich diese Ansicht mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbwechsel, würden erwarten lassen, dass sie Anfälle auslösen, genauso wie sie es in der realen Welt tun."_

(Hinweis: Einige Benutzer werden mit blinkenden Cursoren nicht sehen können und könnten Migränen, Übelkeit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Kontrastierende dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkle Streifenpaare wahrscheinlich Anfälle hervorrufen, und unter welchen Bedingungen. Wenn ein Muster unverändert und geradlinig ist, ist die maximale Anzahl an erlaubten Linien acht, aber wenn es sich wellt, nicht mehr als fünf Linien.

Parallax-Effekte können zu Desorientierung führen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar unterscheidbare Streifen, die mehr als fünf hell-dunkle Paare von Streifen in einer beliebigen Ausrichtung zählen. Wenn die hell-dunklen Streifen eines Musterkollektivs am Auge vom minimal erwarteten Betrachtungsabstand ein solider Winkel von >0.006 Steradiant subtendieren, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> ist und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder sich in eine Richtung gleichmäßig bewegt, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn von einem kleineren Bereich zu einem größeren geht, sowie der Kontrast erhöht wird und die räumliche Frequenz von niedrig auf mittel ansteigt. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass von Grundorientierungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel dem schachbrettartigen Muster, das entsteht, wenn man ein Set von Streifen über, aber senkrecht zu, dem ursprünglichen Set legt) das Gehirn beeinflusst wird.

### Farben

Das Verständnis von Farbe ist wichtig für die Zugänglichkeit. Siehe [Verstehen von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Web-Zugänglichkeit und die Zugänglichkeit im Allgemeinen bezieht.

Wie die Farbe sich auf ihren Hintergrund bezieht—üblicherweise in Bezug auf den Kontrast gerahmt—und wie drastisch sich die Farbe von Rahmen zu Rahmen in einer Animation ändert, ist wichtig. Mehr dazu finden Sie unter [Verstehens SC 2.3.1 Drei Blitze oder weniger-Schwelle](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall von Rot

Es wurde gezeigt, dass [einige Farben wahrscheinlicher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Ihre Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Rotentsättigungstests:** Das menschliche Auge ist so empfindlich gegenüber Rot, dass Augenärzte einen Test mit ihm eingerichtet haben. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Für mehr Informationen darüber, wie ein Augenarzt diesen Test nutzt, siehe [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die an Hirnverletzungen durch Traumata leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Beeinflussung der kognitiven Funktion durch eine rote Umgebung bei Personen mit Gehirnverletzungen durch Trauma, scheint die Farbe im Wellenlängenbereich des roten Spektrums besondere Vorsicht und besondere Tests zu erfordern. Dr. Gregg Vanderheiden, als er das Photosensitive Epilepsy Analysis Tool testete, stellte fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Dies bedeutet nicht, dass es "sicher ist, um keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe möglicherweise "sicher" genau durch die Technologie reproduziert wird, die zur Farberzeugung auf Bildschirmen verwendet wird.

## Messen zur Vermeidung von Schäden

Das Messen des Potenzials für Schäden ist ein guter Ausgangspunkt. Zu den Faktoren, die in Tests berücksichtigt werden, gehören Farbe, Helligkeit, Größe, Kontrast und im Fall von Animationen die Frequenz. WCAG 2.1 bietet Leitlinien für die Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens über lichtempfindliche Anfälle zu erarbeiten. Die folgende, fachliche und autoritative Information stammt aus: [Photic- und pattern-induzierte Anfälle: Expertkonsens der Arbeitsgruppe der Epilepsy Foundation of America.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sichtwinkel von ≥0.006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot ist ebenfalls als Risiko zu betrachten. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar unterscheidbare Streifen, die mehr als fünf hell-dunkle Paare von Streifen in einer beliebigen Ausrichtung zählen. Wenn die hell-dunklen Streifen eines Musterkollektivs am Auge vom minimal erwarteten Betrachtungsabstand ein solider Winkel von >0.006 Steradiant subtendieren, die Leuchtdichte des hellsten Streifens >50 cd/m2 ist und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder sich in eine Richtung gleichmäßig bewegt, nicht mehr als acht Streifen. Diese Prinzipien sind einfacher in der Anwendung bei festen Medien, zum Beispiel bei einer voraufgezeichneten Fernsehsendung, die Frame für Frame analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also wie bezieht sich das für den Webentwickler auf Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedias Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Bezug, was wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, denn es gibt einen spezifischen Standard, der auf Monitoren, Druckern und im Internet verwendet wird, und es ist das **sRGB** (Standard Rot Grün Blau).

> Als Maß für das von einer Fläche emittierte Licht wird diese Einheit häufig zur Spezifikation der Helligkeit eines Anzeigegeräts verwendet. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Consumer-Desktop [Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtintensitäten von 200 bis 300 cd/m<sup>2</sup>. [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Wesentliche ist, dass der **sRGB** Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code umgewandelt werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Dennoch darf nicht vergessen werden, dass Farbe ebenso sehr mit menschlicher Wahrnehmung im Gehirn zu tun hat wie mit der Messung des Lichts, das von einem Computerbildschirm ausgeht.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es gibt Abweichungen und Nuancen, wie ein echter Mensch Farben und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Dozent Emeritus der Informatik an der Cal State University Long Beach, hinsichtlich der [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) _"…Die Unterscheidung zwischen Helligkeitsstufen ist tatsächlich nicht linear, wie die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung sind es nicht. Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht zu beziehen ist, wie es von einem Computerbildschirm, durch die Distanz bis zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert wird, ist fortlaufend.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem Alter von 20 Jahren auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle häufiger bei Jungen auftreten, da sie wahrscheinlich mehr Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulation"_.

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine Person mit einer Anfallsneigung Benutzertests unterziehen. Es ist gefährlich. Zu diesem Punkt ist es eine der ethischsten Dinge, die Entwickler und Designer tun können, Tools zu verwenden, die von Experten auf dem Gebiet entwickelt wurden, die Hand in Hand mit Medizinern gearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt dieses Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Medizinern für Film/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Analysis Tool für lichtempfindliche Epilepsie (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Analysis Tool für lichtempfindliche Epilepsie](https://trace.umd.edu/peat/) gesetzt und sie haben darauf geachtet, es **_kostenlos_** zum Download bereitzustellen. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung seiner Nutzung: **_Die Verwendung von PEAT zur Beurteilung kommerziell produzierter Materialien für Fernsehausstrahlung, Film, Heimunterhaltung oder Spieleindustrien ist verboten. Verwenden Sie den Harding Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des University of Maryland Photosensitive Epilepsy Analysis Tool zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehprogrammierer den Harding-Test unter [HardingTest.com](https://hardingtest.com/) nutzen. Der Harding Test ist ein weiterer Goldstandard. Fernsehprogrammierer in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, sodass die Gruppe auf [HardingTest.com](https://hardingtest.com/) sowohl Analysen als auch Zertifizierungen von Videoinhalten bietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Zugänglichkeitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, weder absichtlich noch unbeabsichtigt Schaden zuzufügen. Wenn wir etwas einschließen müssen, das potenziell Schaden verursachen kann, ist es entscheidend, zu verhindern, dass Nutzer versehentlich auf den schädlichen Inhalt stoßen, und Wege zu bieten, durch die die Nutzer Animationen vermeiden und kontrollieren können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Schaden vermeiden

[WCAG-Leitlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht so, dass sie Anfälle oder physische Reaktionen verursachen."_ Fügen Sie keine Animation ein, die ein Benutzer nicht kontrollieren kann. Gestalten Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie ein gif oder png mit Blitzen darin einschließen müssen, nehmen Sie es stattdessen im Videoformat auf, damit dem Benutzer Steuerelemente zur Verfügung stehen. Geben Sie dem Nutzer die Möglichkeit, es zu vermeiden, es auszuschalten oder es weniger schädlich zu machen.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwickler oder Designer, ob blitzende Inhalte wirklich auf Ihrer Webseite sein müssen. Auch wenn richtig gehandhabt, gibt es diejenigen, die anstößigen Inhalt von Ihrer Seite herunterladen und ihn waffenfähig machen könnten. Man glaubt, dass der erste dokumentierte Versuch, Computer zu verwenden, um über Animationen physischen Schaden zu verursachen, am Samstag, dem 22. März 2008 begann: Die Website der Epilepsy Foundation wurde über Beiträge mit blinkenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Nutzer mit vestibulären Störungen, die auf der Suche nach Hilfe von der Seite waren, waren betroffen.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem er im Dezember 2016 ein animiertes Gif erhalten hatte: das blinkende Gif trug die Botschaft, _"Sie verdienen einen Anfall für Ihre Beiträge"_.

#### Exposition kontrollieren, Zugang kontrollieren

Die Kontrolle der Seite ist entscheidend dafür, dass jemand, der zu Anfällen neigt, nicht versehentlich darauf stößt. WCAG merkt an, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, ein Bild oder eine Animation zu haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugang dazu, indem Sie zunächst vor dem Inhalt warnen und es dann an einem Ort platzieren, an dem der Nutzer sich dafür entscheiden muss, ihn zu sehen, zum Beispiel durch das Klicken eines Knopfes, oder sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung hat.

Erwägen Sie, Crawl-Direktiven für Suchmaschinen einzustellen, um darauf hinzuweisen, dass potenziell schädliche Ressourcen nicht in ihre Suchindizes aufgenommen werden sollten. Sie können dies mithilfe von Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` tun. Indem Sie die Seite nicht indexieren (`noindex`) und keine Links auf der Seite folgen (`nofollow`), wird die Wahrscheinlichkeit reduziert, dass Nutzer sie über die Suche finden:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Für nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Antwort-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, doch animierte GIFs verdienen besondere Erwähnung aufgrund ihrer Omnipräsenz und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Prüfen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit zu bestimmen, ob es sich _so früh wie möglich_ in einer gegebenen HTTP-Anfrage animiert.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen markieren, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen markieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z.B. indem das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut zu `<video controls>` nicht hinzugefügt wird oder {{CSSxRef('animation-play-state')}} auf `paused` als Ausgangszustand gesetzt wird. Um ein eindrucksvolles Beispiel zu sehen, wie dies tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Ein- und Ausschalten von Animationen"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Benutzererfahrung bereitzustellen, die unter der Kontrolle des Nutzers liegt.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder ein Pause hat.

```css
div {
  animation-play-state: paused;
}
```

[CSS transitions](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf null für die Anfangsphase der Animation zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen nicht nur starten, sondern auch stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut dem Videoelement hinzufügen, damit der Benutzer das Video nicht nur starten, sondern auch stoppen kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerelemente verfügbar sind

Die Eigenschaft `HTMLMediaElement.controls` spiegelt das HTML-Attribut `controls` wider, wodurch gesteuert wird, ob Benutzeroberflächen-Steuerelemente zum Abspielen des Mediumelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Steuerelemente verfügt, auf die ein Benutzer zugreifen kann, fügen Sie sicher das Wort "controls" den HTML-Video- und Audioelementen hinzu.

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

Denselben Ansatz auf Audio angewendet:

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

Beachten Sie, dass der Ton in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt sich im {{HTMLElement('video')}}-Element und nicht im {{HTMLElement('audio')}}-Element befindet. Dieses Beispiel stammt aus dem Abschnitt zur Beschreibung des [stummgeschalteten Mediattributs](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) des HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Audio zu aktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Handhabung erheblich, und daher gibt es keine Lösung, die alles in einem abdeckt. Das wird weiter durch die Tatsache erschwert, dass selbst wie Dateien klassifiziert sind, wie sie gehandhabt werden sollten, erschwert wird. Zum Beispiel wird das .gif-Dateiformat gewöhnlich als Bild verstanden, aber auch in manchen Kreisen als Video-Dateiformat betrachtet, weil es animiert werden kann. Für eine umfassende Liste von Medientypen besuchen Sie bitte die [Seite für Medientypen von IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml).

Der Ansatz, sie auszuschnüffeln, ist keine lockere Angelegenheit. Sie könnten daran interessiert sein, dem Standard [MIME Sniffing](https://mimesniff.spec.whatwg.org/) bei whatwg.org zu folgen. Praktisch jeder Bildtyp kann animiert werden; wie sie animiert werden, variiert, und damit auch die Kontrolle über die Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt über [Basisanimationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit dem Bildschirmaktualisierungszyklus interagiert. Siehe den Artikel, ["FPS mit requestAnimationFrame steuern?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem über die Grundlagen der Implementierung von `requestAnimationFrame` im Hintergrund des Bildschirmaktualisierungszyklus diskutiert wird.
- **GIFs (Raster)**: Schwer zu knacken, da deren Animation in den gif-Dateien selbst gesteuert wird. Für Informationen zur Geschwindigkeitskontrolle von GIFs siehe W3Cs ["G152: Einstellen animierter GIF-Bilder, um das Blinken nach n Zyklen (innerhalb von 5 Sekunden) zu stoppen"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Können Sie die Gif-Animation mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Gilt als ein Video-Format, das auf GIF basiert. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm-Datei) verweisen, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch wird es von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) merkt an, dass "_SVG ein textbasiertes offenes Web-Standard ist. Es ist ausdrücklich dazu konzipiert, mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten_." SVGs können wie in diesem Beispiel als Bild verwendet werden: `<img src="example.svg" alt="Dies ist ein Bild, das ein svg als Quelle verwendet">`. Das bedeutet, dass SVG-Erscheinung und Animation durch CSS-Keyframes und Animationen kontrolliert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente über [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden verursachen. Bewegter Text kann aus denselben Gründen Anfälle auslösen wie bewegte Bilder, daher sollten Sie darauf verzichten, Ihren Text zu animieren. Es ist generell eine gute Idee, die Verwendung von bewegtem Text zu vermeiden, da viele Screenreader bewegten Text nicht lesen können und es eine schlechte Benutzererfahrung selbst für diejenigen ohne Seh- oder vestibuläre Probleme darstellt.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um dem Benutzer eine beeindruckende Erfahrung zu bieten. Wir haben bereits die `animation`-Eigenschaft früher in diesem Dokument erwähnt. Sie ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Zeitdauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Die Animationseigenschaft ist bereits mächtig für sich, aber kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein leistungsstarkes Set an Optionen für den Benutzer eingerichtet werden. Die Festlegung der `animation-duration`- und `transition-duration`-Eigenschaften auf eine kurze Dauer, anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht eine Absicherung, um Probleme zu vermeiden, falls es eine Abhängigkeit von der Animation gibt, die ausgeführt werden muss.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Die meisten JavaScript-Codes, die auf HTML-Videos angewendet werden, gelten auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerelemente für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1,0 ist Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0,5 ist halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamen kann:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Einer der einfachsten Wege ist, mit einem Bild zu beginnen, das bereits existiert und es als Bildquelle zu verwenden, und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen und -größen in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Basisanimationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele dafür, indem es mehrere Bildquellen für die Sonne, die Erde und den Mond verwendet und verschiedene Canvas-Methoden nutzt, um die Geschwindigkeit und Animation der Erde beim Orbit um die Sonne und des Mondes beim Orbit um die Erde zu kontrollieren. Verwenden Sie den Codepen, der im Rahmen dieses Tutorials verfügbar ist, um `ctx.rotate` im Code zu adjustieren und zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie unbedingt, absolut sicher eine blitzende Animation verwenden müssen…

Stellen Sie sicher, dass sie eine Kontrolle darüber hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie erstmals betrachtet, und dass ein Benutzer sich bewusst dagegen entscheiden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerelemente für den Benutzer zur Verfügung hat, ist eine gif-Datei. Die Animationsgeschwindigkeit wird in der gif-Bilddatei selbst gesteuert. Die Umwandlung eines animierten gifs in ein Video ermöglicht die Bereitstellung von Steuerelementen auf der Animation und gibt dem Benutzer Eigenverantwortung. Es gibt viele kostenlose Online-Konverter, die zur Verfügung stehen, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen einstellen

Geben Sie den Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt, absolut ein Blinken benötigen, halten Sie es klein. Allgemein gesprochen, beschränken Sie die Größe des Blitzes auf ein Gebiet von etwa 341 mal 256 Pixeln oder weniger. Diese Pixelgröße setzt voraus, dass ein Betrachter in einem typischen Abstand zum Bildschirm ist. Wie bereits erwähnt, könnte diese Größe zu groß sein, wenn das Bild in der Nähe, wie in einem VR-Headset, betrachtet wird. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine okulare Maske verwendet **oder von einer okulare Maske verwendet werden kann**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner ist als 341 mal 256 Pixel, weil das Bild viel näher an den Augen eines Nutzers ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je größer der Kontrast der Textfarbe zum Hintergrund ist (technisch als _Luminositäts-Kontrastverhältnis_ bezeichnet, laut W3.orgs Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist solcher Inhalt zu lesen. Nutzer mit Sehbehinderungen sind besonders dankbar für Bemühungen, um einen hohen Kontrast von Text gegen seinen Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist `das _Reduzieren_` des Kontrastes tatsächlich eine Möglichkeit, die Wahrscheinlichkeit verringern, dass der animierte Inhalt Anfälle verursacht. Senken Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance)e der helleren der Farben ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance)e der dunkleren der Farben ist.

Es ist am besten, wenn Sie den Kontrast vor dem Hochladen oder Veröffentlichen im Web anpassen. Für Videos und animierte GIFs ist die Adobe-Produktreihe eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein Online-Tool verfügbar: Pinetools.coms [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Setzen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Traversieren einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

**HTML-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

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

Wie bereits in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über lichtempfindliche Anfälle zu entwickeln. Zu ihren Ergebnissen zählte das Verständnis, dass _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sichtwinkel von mindestens 0.006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot ist ebenfalls als Risiko zu betrachten."_ Sie merken auch in diesem Konsens an: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko betrachtet."_

### Bereitstellung alternativer CSS-Stile

Mit dem Verständnis, dass ein Großteil der Animationen und Blitzen über CSS-Methoden gesteuert werden kann, ist es wichtig, Wege zu erkunden, um alternative Optionen für Benutzer bereitzustellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die verfügbaren alternativen CSS in alternativen Stylesheets an, wenn Benutzer wissen, wo sie suchen müssen. In einigen Fällen erscheinen die alternativen Stile, wenn Benutzer das Ansichtsmenü durchlaufen, in anderen Fällen erscheinen sie in den Einstellungen, manchmal in beiden. Nicht alle Benutzer wissen, dass sie nach diesen Optionen über den Browser oder in den Einstellungen suchen müssen, daher lohnt es sich, in Betracht zu ziehen, es auf die altmodische Weise mit offensichtlichen Schaltflächen oder Links zu tun, damit die Benutzer sie sehen können. Dies wird mit der Fähigkeit des Browsers, alternative Stylesheets zu lesen oder mit der Fähigkeit des Benutzers, Präferenzen in den Einstellungen festzulegen, nicht in Konflikt geraten oder sie überschreiben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie z.B. diejenigen, die sich auf Sprachsteuerungssysteme verlassen, oft auf Legacy-Schaltflächen und -Links angewiesen sind, weil ihre Behinderung es ihnen nicht erlaubt, eine Maus zu verwenden oder Touch-Events auf mobilen Tablets zu verwenden.

Übliche Wege, um die alternativen Stylesheets in Ihre HTML-Dokumente zu integrieren, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit und zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen), stellen Sie ein, dass Benutzer in der Lage sind, ihre Browser zu verwenden, um alternative Stile auszuwählen.

### Dynamisches Stilumschalten

Ein Problem bei der Abhängigkeit von Browsern, um alternative Stile anzuzeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder aufgrund ihrer Behinderung sind sie dazu nicht in der Lage. Schaltflächen oder Links machen es offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, damit der Benutzer zwischen den verschiedenen Stylesheets wechseln kann. Dabei sind alternative Stylesheets nicht die einzige Option. Eine weitere Option ist es, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"soweit möglich, ist es wirklich am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da die endgültige Erscheinung aller Style-Hooks in einem einzigen Stylesheet gesteuert werden kann"._ Eines der besten Beispiele überhaupt, wie dies zu tun ist, finden Sie auf der W3C-Seite ["C29: Verwendung eines Stilwechslers, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drakonische Lösung, aber es ist eine, die manchmal für Lehrer und andere Beamte notwendig ist, die diejenigen mit extremer Empfindlichkeit bedienen müssen. Diese Beamten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Durch die Einrichtung von Medienabfragen ermöglichen Sie Steuerungen durch den Benutzer; diese Steuerungen sind im Browser oder im Betriebssystem verfügbar. Siehe das MDN-Dokument [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` wächst in modernen Browsern.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel zu sehen, wie man den Code `prefers-reduced-motion` verwendet, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen Sie das Beispiel unten aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Unterstützung ist im Entstehen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein leistungsstarkes Werkzeug, das Entwicklern über Window.matchMedia() zur Verfügung steht. Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Funktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flimmert" er. Die überwiegende Mehrheit moderner Technologie aktualisiert mit einer Rate, die keine Probleme mit Lichtempfindlichkeit verursacht. Allerdings kann sich nicht jeder die neueste Technologie leisten: Fortgesetzte Nutzung älterer oder unterversorgter Computer kann zu niedrigen Aktualisierungsraten führen. [AbilityNets Factsheet (November 2015) Computing und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt weitere Details zu den Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsie und CRT/LCD-Bildschirmflimmern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort hinsichtlich der Aktualisierungsraten in Hz:

- _"Dieser Effekt ist spürbar und bis zu 70 Hz dokumentiert."_
- _"Diese Studien würden darauf hindeuten, dass Sie sich von Aktualisierungsraten unter 70 Hz fernhalten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand eine innovative Nutzung des Update-Features, die in Kombination mit der `animation-duration` oder `transition-duration`-Schlüssel, um eine Rate zu beenden, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Aktualisierungsrate. Das CSS unten stammt aus dem Artikel von CSS-Tricks ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das Medienmerkmal [`update`](/de/docs/Web/CSS/@media/update) wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild des Inhalts zu ändern, sobald er gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Funktionen

### Medienabfragen Level 5

EnvironmentMQ (Geplant in Medienabfragen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal, und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Level in Bezug auf eine Lux-Messung tatsächlich zu definieren, da Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen bemerken auch den Unterschied in der Technologie, wie e-ink, die bei hellstem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Aus dem W3C-Entwurf, Medienabfragen Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medien-Feature wird verwendet, um die Eigenschaften des Displays des Benutzers abzufragen, damit der Autor das Layout der Seite anpassen kann. Ein Autor könnte sich entscheiden, das visuelle oder das Layout der Seite je nach Displaytechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienfunktionen (Geplant in Medienabfragen Level 5)

[Benutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editors Entwurf Medienabfragen Level 5](https://drafts.csswg.org/mediaqueries-5/) machen besonders vielversprechende Fortschritte bei der Bereitstellung von Benutzerkontrolle über Medien. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medien-Feature gibt an, ob der Inhalt normal angezeigt wird oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent das vom Benutzer bevorzugte Farbenpalette auf der Seite und überschreibt dabei die vom Autor gewählten Farben. Aus dem Entwurfsdokument der W3C, Medienabfragen Level 5 Abschnitt zu forced-colors: _"Das Medien-Feature 'forced-colors' wird verwendet, um zu erkennen, ob der Benutzeragent einen [forcierten Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine vom Benutzer gewählte limitierte Farbenpalette auf der Seite erzwingt."_. Der Benutzer muss sich dieser Fähigkeit bewusst gemacht werden, und es muss sich mit dem passenden Wert für die `prefers-color-scheme` medialen Abfrage gut ergänzen.
- `light-level`
  - : Aus dem Entwurfsdokument der W3C, Medienabfragen Level 5 Abschnitt zu light-level: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medien-Feature wird verwendet, um über den Umgebungslichtlevel abzufragen, in dem das Gerät genutzt wird, um es dem Autor zu ermöglichen, den Stil der Seite als Reaktion darauf anzupassen."_. Dies wird ein Segen für jene sein, die motorische Probleme haben oder für einige mit kognitiven Schwierigkeiten, die nicht den richtigen "Knopf" finden können, um ihre Bildschirm-Einstellungen zu ändern.
- prefers-contrast
  - : Aus dem Entwurfsdokument der W3C, Medienabfragen Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Das 'prefers-contrast' Medien-Feature wird verwendet, um zu erkennen, ob der Benutzer das System aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel, viele Benutzer haben Schwierigkeiten, Text zu lesen, der einen geringen Unterschied zum Text-Hintergrund aufweist und würden einen größeren Kontrast bevorzugen."_ Manchmal kann es sogar zu einem Zuviel an Kontrast kommen; ein Halo-Effekt um Text kann in solcher Situationen auftreten und tatsächlich die Lesbarkeit reduzieren. Dem Benutzer die Kontrolle über den Kontrast zu geben, ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 aus den Entwurfsdokumenten auf CSSWG.org integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) wie im HTML definiert. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für die `literal` Eigenschaft ist aus der [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation) genommen.

**Anforderung:** Einige Benutzer können nichtliteralen Text und Symbole wie Metaphern, Idiome etc. nicht verstehen. Die `literal`-Eigenschaft ist dazu vorgesehen, Text oder Bilder als nichtliteral zu markieren und dem Autor zu ermöglichen, den Nutzern nichtliteralen Text und nichtliteralen Bilder zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu browsen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwenden dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsfaden
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitz-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/vage Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Individuen werden mit einer besonderen Empfindlichkeit gegenüber blinkenden Lichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettern geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallsartige Entladungen, wenn es diesem visuellen Reiz ausgesetzt wird."_
- [Gamma-Oszillationen und photosensible Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können Anfälle bei Patienten mit photosensitiver Epilepsie auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht- und Musterinduktion ausgelöste Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als eines der beiden "Goldstandards" für die Analyse von Blitzen angesehen.

- [Harding Blitz- und Mustermuster-Analysator](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmesstechnik und -Management — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Photosensitive Epilepsie Analysetool

Zusammen mit dem Harding-Tool wird es allgemein als eines der beiden "Goldstandards" für die Analyse von Blitzen angesehen.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, aber enthält einige Erklärungen zu Verweisen, die in den WCAG 2.1 Kriterien gemacht werden)
- [Drei Blitze oder darunter Schwellenwert Verstehen Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verstehen der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Richtlinien zur Barrierefreiheit von Webinhalten (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
