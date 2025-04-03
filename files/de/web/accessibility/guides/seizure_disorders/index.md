---
title: Barrierefreie Web-Inhalte für Anfälle und physische Reaktionen
short-title: Vorbeugung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel führt in Konzepte ein, die darauf abzielen, Webinhalte für Menschen mit vestibulären Störungen zugänglich zu machen, und zeigt, wie man Inhalte misst und verhindert, die Anfälle und/oder andere physische Reaktionen auslösen können.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blinken oder blitzen, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können alle Inhalte erzeugen, die Anfälle oder andere behindernde physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei photosensitiver Epilepsie werden die Anfälle speziell durch blitzende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch Handlungen wie das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen festgestellt wird, "_Bestimmte visuelle Bilder können auch ohne Bewegung oder Flackern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster aus erkennbaren hellen und dunklen Streifen haben die gleiche Wirkung wie blitzende Lichter wegen des Wechsels von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle hervorzurufen, enthält klar erkennbare Streifen, mehr als fünf hell-dunkle Paarungen von Streifen in jeder Ausrichtung."_ Neben Streifen sind auch Karomuster dafür bekannt, photosensitive Anfälle zu verursachen, wie auf [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) berichtet wird.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der bekanntermaßen starke Auslöser sind blitzende/stroboskopische Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest, _"Das einzige, was wirklich dokumentiert ist, sind blitzende Lichter, die Anfälle bei Patienten mit photosensitiver Epilepsie auslösen können. Nur wenige Arten von Epilepsien sind allerdings photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Photosensitivität verursacht werden, kann auch das Hören bestimmter Musikstücke sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen deutlich seltener zu sein scheinen. Eine gute Einführung in das Thema der musikogenen Anfälle bietet die Webseite von Epilepsy Ontario zu [Musikogenen Anfällen](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In seinem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) bemerkt die Epilepsy Foundation, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende nicht provozierte Anfälle umfasst_." Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Der plötzliche unerwartete Tod in der Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Er ist nicht häufig, aber er stellt ein sehr reales Problem dar, und die Menschen müssen sich seiner Gefahren bewusst sein."_

Der Punkt ist, dass Anfälle definitiv tödlich sein können und es auch sind, und Entwickler und Designer sind unglaublich wichtig, um das Web für diejenigen, die ein Empfindlichkeit gegenüber photosensitiven oder musikogenen Auslösern haben, sicherer zu machen.

Anfälle können tödlich sein, aber selbst "nur" lähmende Anfälle können so schwerwiegend sein, dass sie den Benutzer funktionsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionieren kann. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), enthält eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder abwechselnde Muster verschiedener Farben enthalten.
- Intense Stroboskoplichter wie visuelle Feuermelder.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere kontrastreiche Streifen.

Der gleiche Artikel stellt fest, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Besonders zu beachten ist, dass es die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: _"Personen mit photosensitiven Anfallsstörungen können durch Inhalte, die mit bestimmten Frequenzen blitzen, mehr als ein paar Blitze haben, einen Anfall auslösen"_ und stellt sehr spezifisch fest: "_Menschen sind gegenüber rotem Blitzen viel empfindlicher als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden anzurichten. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es seine Farbe und Leuchtkraft mit hoher Frequenz ändert, was leicht über JavaScript erledigt werden kann, kann echten Schaden anrichten. Und das Flackern kann überall auftreten. Beispielsweise können "Spinner", die häufig angezeigt werden, während Seiten geladen werden, leicht "flackern", während sie sich drehen.

Zusätzliche Bedenken gibt es für Personen mit motorischen Problemen. Zum Beispiel stellt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat) fest, dass _"photosensitive Anfälle durch bestimmte Arten des Flackerns in Web- oder Computerinhalten, einschließlich Mausbewegungen, die große Bereiche des Bildschirms schnell ein- und ausschalten lassen, ausgelöst werden können"_.

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen möglichen Krankheiten verbunden sind und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu beobachten ist). Allerdings sind Anfälle nicht die einzigen negativen physischen Reaktionen, die durch Blitzen, Flackern, Blinken und andere solche Reize möglich sind. Im Jahr 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die nachfolgend aufgeführten physischen Störungen sind allesamt mögliche Folgen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz größer als 3 Hz (Flackern pro Sekunde) und niedriger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) bemerkt, dass "_im Allgemeinen blitzende Lichter mit Frequenzen von fünf bis 30 Blitzen pro Sekunde (Herz) am ehesten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass photosensitive Individuen nicht mehr als drei Blitze pro Sekunde ausgesetzt sein sollten."_ Für einige Menschen können jedoch Blitzen/Blinken auch bei Frequenzen unter 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinken schlecht sind. Die NASA bemerkt in ihrem Dokument, ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php), dass Blinken und Blitzen mächtige Werkzeuge sind, um Aufmerksamkeit zu erregen, wie es für Warnknöpfe notwendig ist (vorausgesetzt, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für einige Benutzer bieten blinkende Knöpfe auch die Möglichkeit, sparsam und mit Bedacht verwendet zu werden. Bezieht es sich auf Webdesign, müssen Systeme, die Unternehmensmitarbeiter auf Gefahr hinweisen, indem sie den Bildschirm "entführen", um eine blinkende Notfallwarnung zu liefern, die Rate, die Größe und die Änderungen der Leuchtkraft auf dem Bildschirm berücksichtigen, wenn diese Warnungen blitzen.

### Blitzen und Flackern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"ist ein Blitz potenziell gefährlich, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0.006 Steradian einnimmt (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)."_

Wie weit ist ein typischer Betrachtungsabstand? Die zum Zeitpunkt des Schreibens berücksichtigte Empfehlung war "_der Bereich kann als auf einen Bereich der Größe >25% der Fläche eines Fernsehbildschirms bezogen betrachtet werden, was standardmäßige Betrachtungsabstände von ≥2 m (∼9 Fuß) annimmt"._ Seit dieser Zeit hat sich viel geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…die Komplexitäten der Gehirndynamik durch bestimmte Farbkombinationen stärker moduliert werden könnten als durch andere, zum Beispiel verursacht ein rot-blauer Flackernreiz größere kortikale Erregung als ein rot-grüner oder ein blau-grüner Reiz."_

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und rote Blitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt und wobei "ein Paar gegensätzlicher Änderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist.
- Ein **roter Blitz** ist definiert als jedes Paar von gegensätzlichen Übergängen, die einen gesättigten Rotton beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 hielt die Epilepsy Foundation of America einen Workshop ab, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle zu entwickeln, wobei festgestellt wurde, dass _"ein Blitz potenziell gefährlich ist, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0.006 Steradian einnimmt (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein eigenes Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Entfernung

#### Wie groß? Es kommt darauf an

"Sowohl relative" Größe als auch Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/), _"die kombinierte Fläche von gleichzeitig auftretenden Blitzen beansprucht nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel großen Rechtecks überall auf der dargestellten Bildschirmfläche, wenn die Inhalte bei einer Auflösung von 1024 mal 768 Pixeln angezeigt werden."_

Der Punkt, dass das Gesichtsfeld eine wichtige Überlegung ist, ergibt sich im Artikel zur WCAG 2.3.1: "_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block stellt einen 10-Grad-Sichtbereich bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Feld basiert auf den ursprünglichen Spezifikationen und repräsentiert den zentralen Sichtteil des Auges, wo Menschen am empfindlichsten auf fotostimuli reagieren.)_"

Dieses Pixel-Flächenverhältnis berechnet die relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand ist wichtig, weil er das gesamte Gesichtsfeld beeinflusst. Wenn Betrachter für Spiele ein Augenmaskentragen, ist das Gesichtsfeld wahrscheinlich vollständig vom Bildschirm umschlossen. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, und kann auf Mobiltelefonen, Computern oder Headsets erlebt werden. Die Bedenken hinsichtlich blitzender Bilder in einer Augenmaske steigen, da die Maske so nah an den Augen ist.

Allgemein deutet Forschung darauf hin, dass die Nutzung von VR möglicherweise sicherer ist als der normale Bildschirmkonsum aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, _"Die begrenzten Daten, die bisher verfügbar sind, zeigen keine besonderen Probleme mit Anfällen im Kontext der VR-Technologie, obwohl sich diese Ansicht mit mehr Erfahrungen ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbwechsel würden jedoch voraussichtlich Anfälle auslösen, genauso wie sie es in der realen Welt tun."_

(Bedenken Sie, dass einige Benutzer bei blinkenden Cursor nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms beanspruchen.)

### Muster und Parallax

Im Kontrast stehende dunkle und helle geometrische Muster sind ein bekannter Auslöser; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkle Streifenpaare wahrscheinlich Anfälle hervorrufen, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, beträgt die maximale erlaubte Anzahl acht Linien, bei einem schwingenden Muster nicht mehr als fünf Linien.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen mit mehr als fünf hell-dunkle Streifenpaaren in irgendeiner Ausrichtung. Wenn die hell-dunklen Streifen eines Musters kollektiv vom minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0,006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m² beträgt und das Muster für ≥0,5 s dargestellt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Streifenpaare anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder in Kontrast umkehren; wenn das Muster unverändert bleibt oder sich in eine Richtung gleichmäßig bewegt, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken spielen noch weitere Faktoren eine Rolle. Zum Beispiel erhöht das Wechseln von einem kleineren Bereich zu einem größeren die Wahrscheinlichkeit, dass das Gehirn reagiert, ebenso wie das Erhöhen des Kontrasts und das Erhöhen der räumlichen Frequenz von einer niedrigen zu einer mittleren. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass das Wechseln von einfachen Orien

tierungen (z. B. Streifen) zu einer mehrschichtigen (z. B. das Karomuster, das entsteht, wenn man einen Streifensatz über einen anderen, aber senkrecht legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Barrierefreiheit. Siehe [Farben und Leuchtkraft verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Webzugänglichkeit und Barrierefreiheit im Allgemeinen.

Wie sich die Farbe im Verhältnis zum Hintergrund verhält — normalerweise in Bezug auf Kontrast — und wie drastisch sich die Farbe von Bild zu Bild in einer Animation ändert, ist wichtig. Für mehr dazu siehe [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall von Rot

Es wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden allgemein von der Farbe Rot beeinflusst. Ihr Einfluss auf das Verhalten wurde sogar bei Tieren festgestellt.

- **Rotentsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit entwickelt haben. Der Rotentsättigungstest beurteilt die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen mit traumatischen Hirnverletzungen [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich zur Beeinflussung der kognitiven Funktion von Personen mit traumatischen Hirnverletzungen durch eine rote Umgebung scheint die Farbe im roten Spektralwellenlängenbereich besondere Beachtung und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte beim Testen des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsrate viel höher war als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blitzen sind. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicherheit bedeutet nicht anfallsicherheit

Beachten Sie, dass die Farbe **#990000** als "**websicher**" gilt. Das bedeutet _nicht_, dass sie "sicher gegenüber dem Auslösen von Anfällen" ist, es bedeutet nur, dass die Farbe "sicher" reproduziert werden kann, mit der Technologie, die verwendet wird, um Farben auf Bildschirmen zu erzeugen.

## Messen zur Schadensvermeidung

Das Potenzial für Schaden zu messen, ist ein guter Ausgangspunkt. Faktoren, die bei Tests berücksichtigt werden, umfassen Farbe, Leuchtdichte, Größe, Kontrast und im Fall von Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 hielt die Epilepsy Foundation of America einen Workshop ab, um mit der Entwicklung eines Expertenkonsenses zu photosensitiven Anfällen zu beginnen. Die folgende, fachkundige und maßgebliche Information stammt aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist potenziell gefährlich, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0.006 Steradian einnimmt (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, nummeriert mehr als fünf Hell-Dunkel-Paarungen von Streifen in irgendeiner Ausrichtung. Wenn die Hell-Dunkel-Streifen eines Musters kollektiv vom minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt, und das Muster für ≥0,5 s dargestellt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Streifenpaare anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder in Kontrast umkehren; wenn das Muster unverändert bleibt oder sich in eine Richtung gleichmäßig bewegt, nicht mehr als acht Streifen. Diese Prinzipien sind im Fall von festgelegten Medien einfacher anzuwenden, z.B. bei einer vorab aufgenommenen TV-Sendung, die frame-by-frame analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Wie steht das also in Bezug auf Messungen für Farbe, Leuchtkraft und Sättigung für den Webentwickler?

Das Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug auf das, was wir als Entwickler gewohnt sind: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, da es einen spezifischen Standard annimmt, der auf Monitoren, Druckern und im Internet verwendet wird, und dies ist das **sRGB** (standard Rot Grün Blau).

> Als Maß für die Lichtemission pro Flächeneinheit wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts zu spezifizieren. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Gewöhnlich sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Desktop-LCD-Bildschirme für den Verbraucher haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. Hochauflösende Fernseher reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Quintessenz ist, dass der **sRGB** Farbraum eine gemeinsame Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er sich leicht vom häufig verwendeten Hex-Code konvertieren lässt.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Art von Webinhalten, die als Auslöser für Anfälle dienen können, so genau wie möglich zu quantifizieren und zu messen. Es darf jedoch nicht vergessen werden, dass Farbe genauso viel mit der menschlichen Wahrnehmung im Gehirn zu tun hat wie mit der Messung des Lichts, das von einem Computerbildschirm ausgeht.

Zusätzlich zu den psychologischen Variablen gibt es auch physische Unterschiede unter uns. Es wird Variationen und Nuancen geben, wie eine echte menschliche Person Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, emeritierter Dozent für Informatik an der Cal State University Long Beach, in Bezug auf [Helligkeit in der HSL-Farben-Skala](https://colortutorial.design/hsb.html) _"…Der Unterschied zwischen Helligkeitsstufen ist nicht wirklich linear, wie es die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung sind es nicht. Die Untersuchung und Diskussion darüber, wie man die maschinelle Messung des Lichts, wenn es von einem Computerbildschirm über die Entfernung zum menschlichen Auge weitergeleitet, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert wird, in Beziehung setzt, ist im Gange.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation, ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"sind Kinder und Jugendliche anfälliger als Erwachsene für eine anomale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger auftreten, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulationen."_

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfallanfällige Person den Benutzer testen lassen. Es ist gefährlich. Daher ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Verwendung von Werkzeugen, die von Experten auf diesem Gebiet mitentwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und darauf geachtet, es **_kostenlos_** zum Herunterladen anzubieten. PEAT kann Autoren helfen, festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung für seine Nutzung: **_Die Verwendung von PEAT zur Beurteilung von kommerziell produzierten Materialien für Fernsehübertragungen, Filme, Heimunterhaltung oder Spieleindustrien ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. In verschiedenen Ländern müssen Fernsehsender diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analysen als auch Zertifizierungen von Videoinhalten.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Zugängliche Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung, keinen Schaden zuzufügen, weder absichtlich noch unbeabsichtigt. Wenn wir etwas einschließen müssen, das potenziell Schaden verursachen kann, ist es wichtig, zu verhindern, dass Benutzer unbeabsichtigt in Kontakt mit dem schädlichen Inhalt kommen, und Wege bereitzustellen, mit denen Benutzer Animationen verhindern und kontrollieren können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden anrichten

[WCAG Leitlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht auf eine Weise, die dafür bekannt ist, Anfälle oder physische Reaktionen zu verursachen"_. Schließen Sie keine Animation ein, die ein Benutzer nicht kontrollieren kann. Entwerfen Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie unbedingt ein gif oder png mit Blitzlicht darin enthalten müssen, zeichnen Sie es stattdessen im Videoformat auf, damit dem Benutzer Steuerelemente zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Verständnis für Boshaftigkeit

Fragen Sie sich als Entwickler oder Designer, ob blinkende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie korrekt behandelt werden, gibt es solche, die anstößige Inhalte von Ihrer Website herunterladen und sie zu Schaden verwenden könnten. Es wird angenommen, dass am Samstag, den 22. März 2008 der erste dokumentierte Versuch, Computer zu verwenden, um physischen Schaden durch Animation zu bewirken, begann: Die Website der Epilepsy Foundation wurde durch Beiträge mit blitzenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Benutzer mit vestibulären Störungen, die Hilfe von der Website suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, im Dezember 2016 einen Anfall erlitt, nachdem ihm ein animiertes gif zugesandt wurde, mit der Nachricht _"Du verdienst einen Anfall für deine Beiträge"_.

#### Exposition und Zugriff steuern

Die Kontrolle der Exposition gegenüber der Seite ist entscheidend, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich darauf stößt. Die WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, ein Bild oder eine Animation zu haben, die Anfälle auslösen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und ihn dann an einem Ort platzieren, an dem der Benutzer zustimmen muss, um darauf zuzugreifen, wie durch Anklicken eines Schalters oder indem Sie sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Verwenden Sie Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht indizieren, nicht folgen

Indem die Seite nicht indiziert wird, wird die Wahrscheinlichkeit verringert, dass Benutzer über die Suche darauf stoßen.

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

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Möglichkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anforderung zu bestimmen.
- Zakirt stellt ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) bereit.

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sie aktivieren möchte. Zum Beispiel muss der Benutzer einen Knopf drücken oder eine Box ankreuzen, um die Animation zu starten.

### Videos

Wie im Falle animierter GIFs muss der Benutzer einen Knopf drücken oder eine Box abkreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, zum Beispiel indem Sie das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut für `<video controls>` nicht hinzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand einstellen. Um ein kraftvolles Beispiel zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die Anfangsphase der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen auch stoppen sowie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerelemente verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls` HTML-Attribut wider, welches steuert, ob Benutzeroberflächen-Steuerelemente zur Wiedergabe des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Bedienelemente verfügt, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Wenden Sie das gleiche Beispiel auf Audio an:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt im {{HTMLElement('video')}}-Element statt im {{HTMLElement('audio')}}-Element enthalten ist. Dieses Beispiel stammt aus dem Abschnitt zum [Stummschaltattribut von Medien](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erläutert, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer eine Aktion zum Entstummen des Audios durchführt.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Das scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Handhabung erheblich, und aus diesem Grund gibt es keine einheitliche Lösung für das Problem. Das wird weiter dadurch kompliziert, dass selbst die Art und Weise, wie Dateien klassifiziert werden, die Art und Weise, wie mit ihnen umgegangen werden soll, kompliziert. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, aber in einigen Kreisen aufgrund seiner Fähigkeit zur Animation auch als Videoformat betrachtet. Für eine umfassende Auflistung von Medientypen, besuchen Sie bitte die [IANA.org-Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie ausfindig zu machen, sind keine beiläufige Übung. Sie könnten daran interessiert sein, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/)-Standard auf whatwg.org zu verfolgen. Praktisch jeder Art von Bild kann animiert werden; wie sie animiert werden, variiert, und dementsprechend variiert die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt zu [Grundlagen von Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein fester Bestandteil in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit dem Bildschirmrefresh interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund des Bildschirm-Refreshs diskutiert werden.
- **GIFs (Raster)**: Schwer zu knacken, da die Kontrolle über ihre Animation innerhalb der GIF-Dateien selbst liegt. Weitere Informationen zur Kontrolle der Geschwindigkeit von GIFs finden Sie in W3Cs ["G152: Einstellung animierter gif-Bilder für Stopp nach n Zyklen (innerhalb von 5 Sekunden)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu dem Thema ist ["Kann man die GIF-Animation mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, die Video-Version von GIF betrachtet. Das Format ist nicht standardisiert und muss sich auf eine "echte" Videodatei (z.B. eine .webm-Datei) beziehen, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. In manchen Fällen wird es auch als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ein textbasiertes offenes Webstandard ist. Es ist ausdrücklich dazu entworfen, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_ SVGs können wie in diesem Beispiel als Bild verwendet werden: `<img src="example.svg" alt="Dies ist ein Bild mit einer svg als Quelle">`. Dies bedeutet, dass das Erscheinungsbild und die Animation von SVGs durch CSS-Keyframes und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie bei der medizinischen Bildgebung verwendet.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann Anfälle aus den gleichen Gründen wie bewegte Bilder auslösen, vermeiden Sie daher die Animation Ihres Textes. Es ist ohnehin eine gute Idee, bewegten Text zu vermeiden, da viele Bildschirmlesegeräte keinen bewegten Text lesen können und es ein schlechtes Benutzererlebnis ist, selbst für diejenigen ohne Seh- oder vestibuläre Probleme.

### CSS für Animation

Im Stylesheet oder im {{HTMLElement('style')}}-Element können viele Optionen zusammen ein mächtiges Erlebnis für den Benutzer schaffen. Wir haben die `animation`-Eigenschaft bereits früher in diesem Dokument erwähnt. Sie ist eigentlich eine Abkürzung für alle Animationseigenschaften, darunter:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Diese kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Die Animationseigenschaft ist bereits allein mächtig, aber kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein mächtiges Set von Optionen für den Benutzer erstellt werden. Das Setzen der `animation-duration` und `transition-duration`-Eigenschaften auf eine kurze Dauer, anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht eine Absicherung, um Probleme zu verhindern, falls es eine Abhängigkeit von der Animation gibt, die ausgeführt wird.

### JavaScript-Animation

JavaScript wird häufig zur Steuerung von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der größte Teil des JavaScript-Codes, der sich auf HTML-Video bezieht, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl von Video als auch von Audio zu implementieren. Ein Wert von 1,0 ist Standard und gilt als normale Geschwindigkeit; ein Wert von 0,5 ist halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergaberaten-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) liefert den folgenden Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Methoden besteht darin, mit einem Bild zu beginnen, das bereits vorhanden ist, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen — und Größen — in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Grundlagen von Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet hervorragende Beispiele dafür, wobei mehrere Bildquellen für Sonne, Erde und Mond verwendet werden und verschiedene Canvas-Methoden verwendet werden, um die Geschwindigkeit und Animation der Erde zu steuern, während sie sich um die Sonne dreht, und des Mondes, während er sich um die Erde dreht. Nutzen Sie den verfügbarkeitstest mit diesem Tutorial, um `ctx.rotate` im Code anzupassen und zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut unbedingt eine blitzende Animation verwenden müssen

Stellen Sie sicher, dass sie eine Kontrolle hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zum ersten Mal sieht, und dass der Benutzer sich dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerelemente für den Benutzer bietet, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Durch das Konvertieren einer animierten gif in ein Video können Steuerelemente auf die Animation gelegt werden und dem Benutzer Entscheidungsspielraum gegeben werden. Es gibt viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Setzen Sie Benutzererwartungen

Geben Sie Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.1 Erfolgs-Kriterium 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut unbedingt blitzende Inhalte haben müssen, halten Sie sie klein. Allgemein gesagt, beschränken Sie die Größe des Blitzes auf einen Bereich von ungefähr 341 mal 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter in einer typischen Entfernung vom Bildschirm ist. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in unmittelbarer Nähe betrachtet werden soll, z.B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. WebVR kann auf dem Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet, **oder durch eine Augenmaske verwendet werden KANN**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, da das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist bei Barrierefreiheit ein höherer Kontrast eine gute Sache. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Luminositätskontrastverhältnis_ bezeichnet), laut W3.org's Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist solch ein Inhalt zu lesen. Insbesondere Benutzer mit eingeschränktem Sehen schätzen deutlich mehr Anstrengungen, um den hohen Kontrast von Text gegen seinen Hintergrund zu gewährleisten. Wenn der Inhalt jedoch animiert ist, ist **das Reduzieren** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit, dass der animierte Inhalt Anfälle verursacht, zu reduzieren. Senken Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0,05) / (L2 + 0,05), wobei

    - L1 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs sind die Adobe Suite-Produkte eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder steht ein Online-Tool zur Verfügung: pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist ebenfalls eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Durchqueren einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

#### Verwenden Sie keine vollständig gesättigten Rot-Töne für blitzende Inhalte

Wie früher in diesem Dokument erwähnt, hielt die Epilepsy Foundation of America im August 2004 einen Workshop ab, um mit der Entwicklung eines Expertenkonsenses zu photosensitiven Anfällen zu beginnen. Unter ihren Ergebnissen war die Erkenntnis, dass _"ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m² hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradian (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot stellt ebenfalls ein Risiko dar."_ Sie stellen auch in demselben Konsens fest: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von gesättigtem Rot ebenfalls als ein Risiko betrachtet."_

### Bieten Sie alternative CSS-Stile an

Mit dem Verständnis, dass viel Anime und Blitz durchs CSS-Methoden gelenkt werden kann, ist es wichtig, Wege zu prüfen, um alternative Optionen für Benutzer bereitzustellen und die Kontrolle dieser Optionen bequem und sichtbar zu machen.

#### Alternative Style Sheets

Moderne Browser zeigen die alternativen CSS, das in alternativen Stylesheets vorhanden ist, an, wenn die Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Stile sichtbar, wenn Benutzer durch das Menü Ansicht gehen, in anderen Fällen werden sie in den Einstellungen angezeigt, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen über den Browser oder die Einstellungen suchen müssen, daher ist es einen Blick wert, die Dinge auf altmodische Weise mit sichtbaren Tasten oder Links zum Ändern des Stils zu tun, damit Benutzer sie sehen können. Dies wird nicht in Konflikt mit oder die Fähigkeit des Browsers zum Lesen der alternativen Stylesheets oder der Möglichkeit des Benutzers, Präferenzen in den Einstellungen festzulegen, überschreiben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die auf Sprachregelsysteme angewiesen sind, sich oft auf alte Tasten und Links verlassen, weil ihre Behinderung es ihnen nicht erlaubt, eine Maus zu verwenden oder die Fähigkeit zur Nutzung von Touch-Ereignissen auf mobilen Tablets zu haben.

Gemeinsame Methoden, um die alternativen Stylesheets in Ihre HTML-Dokumente einzubeziehen, bestehen darin, das {{HTMLElement('link')}}-Element und {{CSSxref('@import')}} zu verwenden.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit und zusammen mit den Attributen von `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Style Sheets einzubinden, jedoch ist sie nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Durch die Verwendung von alternativen Stylesheets (denken Sie daran, die Titel hinzuzufügen), stellen Sie es für Benutzer bereit, die in der Lage sind, ihre Browser zu verwenden, um alternative Stile auszuwählen.

### Dynamisches Style-Switching

Ein Problem beim Verlassen auf den Browser, um alternative Stile offenzulegen, besteht darin, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder, aufgrund ihrer Behinderung, nicht in der Lage. Buttons oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen verfügbar sind. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, um dem Benutzer zu ermöglichen, zu den verschiedenen Stylesheets zu wechseln. Das gesagt, die Verwendung von alternativen Stylesheets ist nicht die einzige Option. Eine andere Möglichkeit ist, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung von dynamischen Stilinformations](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) ist es _"wo möglich, wirklich best practice, Klassen dynamisch über die `className`-Eigenschaft zu manipulieren, da das letztendliche Aussehen aller Stylinghaken in einem einzelnen Stylesheet festgelegt werden kann."_. Ein hervorragendes Beispiel, wie man dies tatsächlich macht, ist von der Seite des W3C ["C29: Verwendung eines Stilumschalters zur Bereitstellung einer konformen alternativen Version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Text-Only-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drakonische Lösung; aber es ist eine, die manchmal für Lehrer und andere öffentliche Bedienstete notwendig ist, die diejenigen bedienen müssen, die extreme Empfindlichkeiten haben. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu erstellen. Hier ist, wie man es über CSS tut:

```css
img {
  display: none;
}
```

#### Nutzen Sie media queries mit {{HTMLElement('style')}}

Beim Einrichten von media queries ermöglichen Sie Steuerelemente durch den Benutzer; diese Steuerelemente werden im Browser oder im Betriebssystem verfügbar gemacht. Siehe das MDN-Dokument [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um weitere Details darüber zu erfahren, wie ein Benutzer auf die Steuerelemente zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel zu sehen, wie Sie `prefers-reduced-motion` verwenden, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen Sie sich das Beispiel unten aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Für Entwickler steht ein mächtiges Tool zur Verfügung: Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Mediale Aktualisierungsfunktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die überwiegende Mehrheit der modernen Technologie aktualisiert mit einer Geschwindigkeit, die keine Probleme mit Photosensibilität verursacht. Allerdings ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder leistungsschwache Computer können niedrige Bildwiederholraten haben. [AbilityNet's Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsie und CRT/LCD-Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Bildwiederholraten in Hz:

- _"Dieser Effekt ist spürbar und dokumentiert bis zu 70 Hz."_
- _"Diese Studien würden nahelegen, dass Sie von Bildwiederholraten unter 70 Hz fernbleiben sollten und eine Rate verwenden, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks hat eine innovative Verwendung der Aktualisierungsfunktion gefunden, die zusammen mit `animation-duration` oder `transition-duration` verwendet wird, um mit einer Geschwindigkeit zu enden, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Bildwiederholrate. Das CSS unten stammt aus dem CSS-Tricks-Artikel ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.org's Seite zu [Medienabfragen 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update`-Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzurufen, das Erscheinungsbild von Inhalten nach der Darstellung zu ändern. Sie hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Funktionen

### Medienabfragen Level 5

EnvironmentMQ (Geplant in Medienabfragen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen tatsächlich in einer Lux-Messung zu definieren, da Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen merken auch den Unterschied in der Technologie an, wie E-Ink, das in hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht tun.
- `environment-blending`
  - : Aus dem Entwurfsdokument des W3C, Medienabfragen Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfunktion wird verwendet, um die Eigenschaften der Anzeige des Benutzers abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen und/oder Layout des Dokuments abhängig von der Anzeigetechnik anzupassen, um die Attraktivität zu steigern oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienfunktionen (Geplant in Medienabfragen Level 5)

[Benutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Medienabfragen Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um dem Benutzer die Kontrolle über Medien zu geben. Hier einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [Benutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfunktion gibt an, ob der Inhalt normal angezeigt wird oder ob die Farben umgekehrt wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`Zwangsfarbenmodus`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf der Seite und überschreibt die vom Autor gewählten Farben. Aus dem Entwurfsdokument des W3C, Medienabfragen Level 5 Abschnitt zu Zwangsfarben: _"Die forced-colors-Medienfunktion wird verwendet, um zu erkennen, ob der Benutzeragent einen [Zwangsfarbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine vom Benutzer gewählte eingeschränkte Farbpalette auf der Seite durchsetzt."_ Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden, und es muss mit dem geeigneten Wert für die prefers-color-scheme-Medienabfrage harmonisieren.
- `light-level`
  - : Aus dem Entwurfsdokument des W3C, Medienabfragen Level 5 Abschnitt zu Lichtstufe: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfunktion wird verwendet, um über die Umgebungslichtstufe abzufragen, in der das Gerät verwendet wird, um dem Autor zu ermöglichen, den Stil des Dokuments entsprechend anzupassen."_ Dies wird ein Segen für diejenigen sein, die Probleme mit motorischen Fähigkeiten haben, oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind, den richtigen "Knopf" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- `prefers-contrast`
  - : Aus dem Entwurfsdokument des W3C, Medienabfragen Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die `prefers-contrast`-Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen geringen Kontrast zum Text Hintergrund hat und würden einen größeren Kontrast bevorzugen."_ Manchmal kann es auch so etwas wie einen zu großen Kontrast geben; ein Halo-Effekt um den Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Die Kontrolle über den Kontrast dem Benutzer zu überlassen, ist ein definitives Geschenk für die Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 aus den CSSWG.org-Entwürfen wird in die [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) integriert, die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList).

##### Unterstützung und Unterstützungspersonal

Das Anforderung für die `literal`-Eigenschaft basiert auf [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/).

**Anforderung:** Einige Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die `literal`-Eigenschaft ist dazu gedacht, Text oder Bilder als nicht wörtlich zu kennzeichnen und dem Autor zu ermöglichen, nicht wörtlichen Text und Bilder für Benutzer zu erklären.

#### Übergänge (für CSS und SVG)

Das folgende stammt aus dem [Web-Animationsmodell](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfe

Das Web-Animationsmodell soll die Features bereitstellen, die notwendig sind, um [CSS-Übergänge](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) auszudrücken.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Anleitung)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit einer RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Diskussionsthread auf Stack Exchange
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0-Definition von Flash #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/vage Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Die Lichtempfindlichkeit beleuchten, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen haben eine besondere Empfindlichkeit gegenüber blinkenden Lichtern oder kontrastierenden visuellen Mustern, wie Streifen, Gittern und Schachbrettmustern. Aufgrund dieses Zustands produziert ihr Gehirn anfallsähnliche Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt werden."_
- [Gamma-Schwingungen und lichtempfindliche Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), können auch ohne Bewegung oder Flimmern Anfälle bei Patienten mit lichtempfindlicher Epilepsie auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch blinkende oder flimmernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster, wie Streifen, ausgelöst werden._"
- [Licht- und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmesstechnik und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Photosensitive Epilepsie-Analysetool

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Using PEAT To Create Seizureless Web Animations](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierung Semantik Erklärer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/) Arbeitsentwurf
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnisses SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält aber einige Erklärungen zu den in den WCAG 2.1-Kriterien genannten Referenzen)
- [Drei Blitze oder darunter Schwellenwert Verständnisses Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animations Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlichen Dank an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program und Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ in großem Dank an das Trace Research & Development Center für die Bereitstellung ihres erstaunlichen Tools, dem [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos.
