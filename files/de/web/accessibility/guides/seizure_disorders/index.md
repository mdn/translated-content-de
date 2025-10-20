---
title: Webzugänglichkeit bei Anfällen und physischen Reaktionen
short-title: Vermeidung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

Dieser Artikel führt in Konzepte ein, die hinter der Erstellung von Webinhalten stehen, die für Personen mit vestibulären Störungen zugänglich sind, sowie in die Messung und Vermeidung von Inhalten, die Anfälle und/oder andere physische Reaktionen hervorrufen könnten.

## Überblick

### Anfälle

Durch Licht ausgelöste Anfälle sind als lichtempfindliche Epilepsie bekannt. Inhalte, die flimmern, blitzen oder blinken, können lichtempfindliche Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere schwerwiegende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Lichtempfindliche Epilepsie ist tatsächlich eine Art von "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von lichtempfindlicher Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können auch Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Leiden verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und lichtempfindliche Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt: "_Bestimmte visuelle Bilder, selbst in Abwesenheit von Bewegung oder Flimmern, können bei Patienten mit lichtempfindlicher Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Aufklärung über Photosensibilität, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegliche Muster mit erkennbaren Licht- und Dunkelstreifen haben die gleiche Wirkung wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Arbeitsgruppe der Epilepsie-Stiftung der USA kann das Problem ein wenig "quantifizieren": _"Ein Muster, das potenziell Anfälle auslöst, enthält klar erkennbare Streifen, die mehr als fünf Paar hell-dunkle Streifen in irgendeiner Ausrichtung aufweisen._" Neben Streifen sind laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch karierte Muster dafür bekannt, lichtempfindliche Anfälle auszulösen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blitzende/Stroboskoplichter. Dr. Selim Benbadis vom umfassenden Epilepsieprogramm der USF bemerkt: _"Das Einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit lichtempfindlicher Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind lichtempfindlich, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Lichtempfindlichkeit hervorgerufen werden, kann das Hören bestimmter Musikstücke auch musikerogene Anfälle auslösen, obwohl diese Art von Anfällen scheinbar viel seltener vorkommt. Für eine großartige Einführung zum Thema musikerogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [musikerogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, bei der es zu wiederkehrenden nicht provozierten Anfällen kommt_." Laut der Seite der Epilepsy Foundation ["Wie schwerwiegend sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _"der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich des Risikos bewusst sein."_

Der Punkt ist, dass Anfälle definitiv tödlich sein können, und Entwickler und Designer sind unglaublich wichtig, um das Internet für Menschen mit einer Sensibilität gegenüber lichtempfindlichen oder musikerogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" schwächend sind, können so schwerwiegend sein, dass sie den Nutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen usw. können ebenfalls so schwerwiegend sein, dass der Nutzer nicht in der Lage ist zu funktionieren. Der Artikel der Epilepsy Foundation ["Photosensitivity und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei lichtempfindlichen Menschen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Bildschirm flimmern von TV oder Computer aufgrund des Flimmers oder drehender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder wechselnde Muster in verschiedenen Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert oder durch Bäume oder die Lamellen von Jalousien flackert.
- Bestimmte visuelle Muster, insbesondere Streifen in Kontrastfarben.

Der gleiche Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die lichtempfindliche Reaktion auszulösen. Von besonderer Bedeutung ist, dass es die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. In dem Artikel ["Verständnis von WCAG 2.0 Drei Blitze oder weniger Schwellenwert"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt: _"Individuen, die an lichtempfindlichen Anfallsleiden leiden, können einen Anfall durch Inhalte ausgelöst bekommen, die mit bestimmten Frequenzen mehr als ein paar Mal blitzen"_ und es wird sehr spezifisch darauf hingewiesen: "_Menschen sind sogar empfindlicher gegenüber roten Blitzlichtern als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigte rote Blitze bereitgestellt._"

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das mit hoher Frequenz seine Farbe und Helligkeit ändert, was leicht über JavaScript erfolgen kann, kann ernsthaften Schaden verursachen. Und Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig angezeigt werden, während Seiten geladen werden, beim Drehen leicht "flackern".

Weitere Bedenken bestehen bei Personen mit Motorik-Problemen. Zum Beispiel stellt die Seite des Trace Research & Development Centers für das [Werkzeug zur Analyse des lichtempfindlichen Epilepsie](https://trace.umd.edu/peat/) fest, dass _"lichtepileptische Anfälle durch bestimmte Arten von Flackern in Webinhalten oder Computerinhalten ausgelöst werden können, einschließlich Mouse-overs, die große Bereiche des Bildschirms wiederholt schnell ein- und ausschalten."_

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allerlei Krankheiten in Verbindung gebracht werden können und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu beobachten ist). Anfälle sind jedoch nicht die einzige negative physische Reaktion, die durch Blitze, Flackern, Blinken und andere solche Stimuli möglich ist. 1997 zeigte ein japanischer Zeichentrickfilm eine animierte "Virusbombe". Einige der Kinder, die den Zeichentrickfilm sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgelisteten physischen Störungen sind alle mögliche Folgen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Blitzen und Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut der W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die hinreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz über 3 Hz (Flackern pro Sekunde) und geringer als 55 Hz. Der Artikel der Epilepsy Foundation ["Aufklärung über Photosensibilität, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) weist darauf hin, _"dass blitzende Lichter mit Frequenzen zwischen fünf und 30 Mal pro Sekunde (Hertz) am ehesten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass Personen mit Lichtempfindlichkeit nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollten."_ Für einige Menschen können Blitzen/Blinken jedoch Symptome bei weniger als 3 Hz hervorrufen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinken, Blitzen und zeitliche Reaktion"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen leistungsstarke Werkzeuge sind, um Aufmerksamkeit zu erregen—wie es bei Warnknöpfen notwendig ist (vorausgesetzt, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für einige Benutzer erwärmen blinkende Knöpfe auch Warnungen, dass sie sparsam eingesetzt werden müssen und mit Bedacht. In Bezug auf Webdesign müssen Systeme, die Unternehmensmitarbeiter durch das "Hijacking" des Bildschirms auf eine Gefährdung hinweisen, um eine blinkende Notfallwarnung zu bieten, die Rate, Größe und Luminositätsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blitzen.

### Blitzen und Flackern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic und patterninduzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"ist ein Blitz ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradian (ungefähr 10% des zentralen Blickfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die zum Zeitpunkt des Schreibens betrachtet wurde, war "_das Gebiet kann als eines betrachtet werden, das sich auf ein Gebiet >25% des Bereichs eines Fernsehbildschirms bezieht, bei Standard-Betrachtungsabständen ≥2 m (∼9 Fuß)"_. Seit dieser Zeit hat sich viel geändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbenkombinationen spielen ebenfalls eine Rolle. ["Bestimmte Farben verursachen wahrscheinlich epileptische Anfälle, finden Forscher"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"Komplexitäten, die die Dynamik des Gehirns beeinflussen, durch bestimmte Farbkombinationen stärker moduliert werden als durch andere, zum Beispiel verursacht rotes-blaues Flimmern eine höhere kortikale Erregung als rotes-grünes oder blau-grünes Flimmern."_

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allgemeine Blitze und rote Blitzschwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in der [relativen Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit, wobei die relative Helligkeit des dunkleren Bildes unter 0,80 liegt, und wo "ein Paar gegensätzlicher Änderungen" eine Zunahme gefolgt von einer Abnahme, oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **rotes Blitz** ist definiert als jedes Paar gegensätzlicher Übergänge, die ein gesättigtes Rot umfassen.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, in dem ein [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu lichtempfindlichen Anfällen entwickelt wurde, in dem festgestellt wird, dass "_ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradian einnimmt (ungefähr 10% des zentralen visuellem Blickfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)._" Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko dar: "_Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Sowohl die relative Größe als auch der Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) _"belegt die kombinierte Fläche von gleichzeitig auftretenden Blitzen nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel-Rechtecks irgendwo auf der Anzeige der Bildschirmfläche, wenn die Inhalte bei 1024 x 768 Pixeln betrachtet werden."_

Der Punkt, dass das Blickfeld eine wichtige Überlegung darstellt, entsteht in dem Artikel über WCAG 2.3.1 weiter: "_Der Bildschirm mit der Auflösung von 1024 x 768 dient als Referenzbildschirmauflösung für die Bewertung. Der Block mit 341 x 256 Pixeln stellt ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am anfälligsten für fotostimuli sind.)_"

Dieses Pixelverhältnis berechnet die relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand spielt eine Rolle, weil er das gesamte Blickfeld beeinflusst. Wenn Zuschauer beim Spielen eine Augenmaske tragen, wird das Blickfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, was auf Handy, Computer oder Headset erlebt werden kann. Die Sorge um blinkende Bilder in einer Augenmaske wächst, da die Maske so nahe am Auge ist.

Die Forschung zeigt im Allgemeinen, dass die Nutzung von VR tatsächlich sicherer sein kann als der normale Bildschirmkonsum, aufgrund höherer Aktualisierungsraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen, _"Die begrenzten Daten, die bisher verfügbar sind, lassen keine besonderen Bedenken hinsichtlich Anfällen im Zusammenhang mit VR-Technologie erkennen, obwohl sich diese Ansicht mit mehr Erfahrungen ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokative Muster oder Farbwechsel, würden erwartet, Anfälle auszulösen, ebenso wie sie es in der realen Welt tun."_

(Beachten Sie, dass einige Benutzer mit blinkenden Cursor nicht sehen können und möglicherweise Migräne, Bewegungskrankheit und Desorientierung erleben, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Kontrastreiche dunkel- und hellgeometrische Muster sind ein bekannter Schuldiger; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group führt auf, wie viele hell-dunkel Paare von Streifen wahrscheinlich Anfälle provozieren, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist die maximale Anzahl von Linien acht, aber wenn es wellenförmig ist, nicht mehr als fünf Linien.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Orientierung aufweisen. Wenn die hell-dunkel Streifen irgendeines Musters gemeinsam am Auge vom minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradian umfassen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0.5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen anzeigen, wenn die Streifen die Richtung wechseln, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren Bereich zu einem größeren geht, sowie der Kontrast erhöht wird und die räumliche Frequenz von niedrig zu mittel erhöht wird. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass das Wechseln von grundlegenden Ausrichtungen (zum Beispiel Streifen) zu einer mehr multiplizierten (zum Beispiel das Schachbrettmuster, das entsteht, wenn man ein Streifenmuster auf das, aber im 90-Grad-Winkel orientierte, ursprüngliche legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farbe ist wichtig für die Zugänglichkeit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Barrierefreiheit im Web und im Allgemeinen bezieht.

Wie sich die Farbe auf ihren Hintergrund bezieht - normalerweise in Bezug auf Kontrast gerahmt - und wie drastisch die Farbe von Bild zu Bild in einer Animation ändert, ist wichtig. Für weitere Informationen darüber lesen Sie [Drei Blitze oder Schwellenwert Unterschreitung Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall von Rot

Es wurde nachgewiesen, dass [einige Farben wahrscheinlicher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Menschliche Physiologie und Psychologie werden durch die Farbe Rot im Allgemeinen beeinflusst. Ihre Macht, Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Rot-Entsättigungstests:** Das menschliche Auge ist so fein auf Rot abgestimmt, dass Augenärzte einen Test mit ihm aufgestellt haben. Der Test zur Rotentsättigung bewertet die Integrität des Sehnervs. Für weitere Informationen, wie ein Augenarzt diesen Test verwendet, siehe [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die unter einer traumatischen Hirnverletzung leiden, [kognitive Funktionen in einer roten Umgebung reduziert werden](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Beeinträchtigung der kognitiven Funktionen bei Menschen mit einer traumatischen Hirnverletzung scheint Farbe im roten Wellenlängenspektrum besondere Vorsicht und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei Tests des Werkzeugs zur Analyse der lichtempfindlichen Epilepsie fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Sehen Sie sich das Video [Das Werkzeug zur Analyse der lichtempfindlichen Epilepsie](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/) an.)

#### Websicher bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" angesehen wird. Das bedeutet _nicht_, dass sie "sicher ist, um keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe "sicher" genau durch die zur Farberzeugung auf Bildschirmen verwendete Technologie reproduziert werden kann.

## Messung zur Vermeidung von Schäden

Die Messung des Potenzials für Schäden ist ein guter Ausgangspunkt. Innerhalb von Tests berücksichtigte Faktoren sind Farbe, Leuchtdichte, Größe, Kontrast und im Fall von Animation, Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um mit der Entwicklung eines Expertenkonsenses zu lichtempfindlichen Anfällen zu beginnen. Die folgende, von Experten anerkannt, und autoritative Information stammt aus: [Photic- und patterninduzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt, und einen soliden visuellen Winkel von ≥0.006 Steradian (ungefähr 10% des zentralen Blickfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird auch als Risiko angesehen. Ein Muster mit dem Potenzial Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Orientierung aufweisen. Wenn die hell-dunkel Streifen irgendeines Musters kollektiv am Auge vom minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradian umfassen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0.5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen anzeigen, wenn die Streifen die Richtung wechseln, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden im Fall von festen Medien, zum Beispiel eine vorab aufgezeichnete Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also für den Webentwickler, wie bezieht sich das auf Messungen für Farbe, Helligkeit und Sättigung?

Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie beschäftigt sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Wikipedias Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Bezug auf das, was wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Das ist hilfreich, weil es einen spezifischen Standard gibt, der für Monitore, Drucker und das Internet angenommen wird, und es ist das **sRGB** (Standard Rot Grün Blau).

> Als Maß für das Licht, das pro Flächeneinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts zu spezifizieren. Die Spezifikation [sRGB](https://en.wikipedia.org/wiki/SRGB) für Monitore zielt auf 80 cd/m<sup>2</sup>. Typischerweise sollten Monitore, die kalibriert werden, eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Verbraucher-Desktop-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Erkenntnis ist, dass der **sRGB** Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Das gesagt, darf nicht vergessen werden, dass Farbe ebenso sehr über menschliche Wahrnehmung im Gehirn handelt, wie über die Messung von Licht, das von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Unterschiede und Nuancen geben, wie ein wirklicher Mensch Farbe und Licht wahrnimmt und darauf reagiert. Beispielsweise bemerkt Tom Jewett, emeritierter Dozent für Computer Sciences an der Cal State University Long Beach, folgendes zur Helligkeit auf der HSL Farbskala: _"… Die Unterscheidung zwischen Helligkeitsstufen ist nicht tatsächlich linear, wie die HSL Skala es implizieren würde; wir sind viel empfindlicher gegenüber Änderungen bei helleren Werten als bei dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliche Sicht und menschliche Wahrnehmung sind es nicht. Forschung und Diskussion darüber, wie die Maschinenmessung des Lichts, während es von einem Computerbildschirm durch die Distanz zum menschlichen Auge geht, durch die menschliche Sicht gefiltert und dann durch das menschliche Gehirn manipuliert wird, ist im Gange.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Aufklärung über Photosensibilität, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"sind Kinder und Jugendliche anfälliger als Erwachsene, um auf Lichteinwirkung abnormal zu reagieren, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichteinwirkungen"._

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine von Anfällen gefährdete Person gefährden, indem er sie Benutzertests unterzieht. Es ist gefährlich. In diesem Sinne ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Nutzung von Werkzeugen, die von Experten auf dem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt dieses Schreibens, gibt es zwei üblicherweise verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und **der Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat mit seinem [Werkzeug zur Analyse lichtempfindlicher Epilepsie](https://trace.umd.edu/peat/) einen Goldstandard gesetzt und sie haben Wert darauf gelegt, es _**kostenlos**_ zum Download zur Verfügung zu stellen. PEAT kann Autoren dabei helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten eher Anfälle auslösen. Beachten Sie bitte die Einschränkung der Nutzung: **_Der Einsatz von PEAT zur Bewertung von kommerziell produzierten Materialien für Fernsehsendungen, Film, Heimunterhaltung oder Gaming-Industrien ist nicht gestattet. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Werkzeugs zur Analyse der lichtempfindlichen Epilepsie der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Werkzeugs für kommerzielle Zwecke verboten ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Videoinhalten an.

![Harding Flash und Pattern-Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Zugänglichkeitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, keinen Schaden zuzufügen, weder absichtlich noch unabsichtlich. Wenn wir etwas einfügen müssen, das das Potenzial hat, Schaden zu verursachen, ist es entscheidend, die Benutzer daran zu hindern, zufällig auf die schädlichen Inhalte zu stoßen, und ihnen Möglichkeiten zu bieten, Animationen zu verhindern und zu steuern, um mögliche Schäden zu verringern.

### Was der Webentwickler tun kann

#### Keinen Schaden anrichten

[WCAG Leitlinie 2.3 Anfälle und physikalische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) gibt einen Überblick: _"Entwerfen Sie keine Inhalte in einer Weise, die nachweislich Anfälle oder physikalische Reaktionen verursacht"_. Fügen Sie keine Animation ein, die ein Benutzer nicht steuern kann. Entwerfen Sie nicht mit Mustern, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie ein GIF oder PNG mit Blinkeffekten einfügen müssen, nehmen Sie es stattdessen in einem Videoformat auf, damit dem Benutzer Steuerungen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit zu vermeiden, es auszuschalten oder es weniger schädlich zu machen.

#### Verstehen Sie Bosheit

Als Entwickler oder Designer fragen Sie sich, ob blitzende Inhalte wirklich auf Ihrer Webseite erscheinen müssen. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es noch diejenigen, die beleidigende Inhalte von Ihrer Seite herunterladen und als Waffe einsetzen könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um über eine Animation physischen Schaden zuzufügen, am Samstag, dem 22. März 2008, begann: Die Webseite der Epilepsy Foundation wurde durch Beiträge mit blinkenden Bildern und Links, die fälschlich behaupteten, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchen, waren betroffen.

Eine Reihe von rechtlichen Überlegungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitten hat, nachdem ihm im Dezember 2016 eine animierte Gif-Datei mit der Nachricht gesandt wurde: _"Du verdienst einen Anfall für deine Beiträge"_.

#### Kontrolle der Exposition, Kontrolle des Zugangs

Die Kontrolle der Exposition gegenüber der Seite ist der Schlüssel, um sicherzustellen, dass jemand, der für Anfälle anfällig ist, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie möglicherweise ein Bild oder eine Animation haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugang dazu, indem Sie zunächst eine Warnung über den Inhalt anzeigen und sie dann an einem Ort platzieren, an dem der Benutzer bewusst darauf zugreifen muss, z. B. durch Klicken eines Knopfdrucks oder durch Sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung hat.

Erwägen Sie, Crawle-Direktiven für Suchmaschinen festzulegen, um darauf hinzuweisen, dass sie potenziell schädliche Ressourcen nicht in ihren Suchindizes aufnehmen sollten.
Sie können dies mithilfe von Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` tun.
Durch das Nichtindizieren der Seite (`noindex`) und das Nichtfolgen von Links auf der Seite (`nofollow`) wird die Wahrscheinlichkeit verringert, dass Nutzer über die Suche darauf stoßen:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Für nicht-HTML-Ressourcen können Sie Crawle-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Antwortheader festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, animierte GIFs verdienen jedoch besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei kontrolliert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, Animate _so früh wie möglich_ in einer gegebenen HTTP-Anfrage festzustellen.
- Zakirt bietet einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer beschließt, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z. B. indem Sie das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut nicht zum `<video controls>` hinzufügen, oder {{CSSxRef('animation-play-state')}} als Anfangszustand auf `paused` setzen. Um ein mächtiges Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Animationen Ein- und Ausschalten"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für das Anfangsstadium der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer die Animation beenden sowie starten kann

Ein {{HTMLElement('video')}} Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls` Attribut zum Videoelement hinzufügen, damit der Benutzer das Video genauso gut stoppen wie starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls` Eigenschaft spiegelt das `controls` HTML Attribut wider, das steuert, ob Benutzerschnittstellensteuerungen zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Wenn Sie dasselbe Beispiel auf Audio anwenden möchten:

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

Beachten Sie, dass das Audio in Videos durch das `muted` Inhaltsattribut gesteuert werden kann, obwohl der Inhalt innerhalb des {{HTMLElement('video')}} Elements anstelle des {{HTMLElement('audio')}} Elements liegt. Dieses Beispiel stammt aus dem Abschnitt zur [Beschreibung des stummgeschalteten Medienattributs](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer die Aktion durchführt, das Audio einzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Steuerung der Geschwindigkeit

Dies mag offensichtlich erscheinen, aber da es so viele MIME-Typen gibt, variiert der Umgang mit ihnen erheblich, und aus diesem Grund gibt es keine Einheitslösung für das Problem. Dies wird weiter kompliziert durch die Tatsache, dass selbst die Art der Datei-Klassifizierung den Umgang mit ihnen beeinflusst. Zum Beispiel wird das .gif Dateiformat normalerweise als Bild verstanden, wird jedoch in einigen Kreisen auch als Video-Dateiformat betrachtet, da es animiert werden kann. Für eine umfassende Liste von Medientypen besuchen Sie bitte die [IANA.org Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie ausfindig zu machen, sind keine beiläufige Übung. Sie könnten daran interessiert sein, dem [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard auf whatwg.org zu folgen. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert auch die Kontrolle über die Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt über [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Hauptbestandteil in Canvas-Animationen, es ist jedoch auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Sehen Sie den Artikel ["FPS mit requestAnimationFrame kontrollieren?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Details der Umsetzung des `requestAnimationFrame` im Zusammenhang mit der Bildschirmaktualisierung diskutiert werden.
- **GIFs (Raster)**: Schwer zu knacken, da die Steuerung ihrer Animation in den Gif-Dateien selbst enthalten ist. Für Informationen zur Steuerung der Geschwindigkeit von GIFs siehe W3Cs ["G152: Das Setzen von animierten Gif-Bildern, um nach n Zyklen (innerhalb von 5 Sekunden) aufzuhören zu blinken"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Kann man die GIF-Animation mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, Video-Version von GIFs betrachtet. Das Format ist nicht standardisiert und muss eine "echte" Videodatei (zum Beispiel eine .webm-Datei) referenzieren, die an einem anderen Ort existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-Image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ein textbasierter offener Webstandard ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Dies bedeutet, dass SVG-Erscheinung und -Animation über CSS-Schlüsselbilder und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann aufgrund derselben Gründe wie bewegte Bilder Anfälle auslösen; vermeiden Sie also, Ihren Text zu animieren. Es ist eine gute Idee, bewegten Text ganz zu vermeiden, da viele Bildschirmleseprogramme bewegten Text nicht lesen können und er eine schlechte Benutzererfahrung darstellt, selbst für diejenigen ohne Seh- oder vestibuläre Probleme.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}} Elements können sich viele Optionen miteinander verbinden, um dem Benutzer ein leistungsstarkes Erlebnis zu bieten. Wir haben die Eigenschaften `animation` bereits früher in diesem Dokument erwähnt. Es ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Sie kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die Animationseigenschaft ist bereits von alleine leistungsstark, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein leistungsstarkes Set von Optionen für den Benutzer eingerichtet werden. Das Setzen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstelle des Setzens auf `animation: none` und `transition: none` bietet eine Sicherheitsvorkehrung, um Probleme zu verhindern, falls eine Abhängigkeit von der Animation besteht.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}} Elemente und SVGs zu steuern. Die meiste JavaScript-Code, die für HTML-Video gilt, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit für sowohl Video als auch Audio zu implementieren. Ein Wert von 1.0 ist der Standardwert und wird als normale Geschwindigkeit betrachtet; ein Wert von 0.5 ist die halbe Geschwindigkeit, ein Wert von 2.0 doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts. Setzen Sie die Wiedergabegeschwindigkeits-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Code-Beispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Animierte Bildquellen

Eine der einfachsten Möglichkeiten besteht darin, mit einem bereits bestehenden Bild zu starten, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie hier GIFs, JPGs, PNGs, SVGs und andere Dateitypen als Bildquelle verwenden können, solange sie erlaubte Dateitypen—und Größen—in Ihrer Umgebung sind. SVGs werden oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele hierfür, unter Verwendung mehrerer Bildquellen für die Sonne, Erde und den Mond, und Verwendung mehrerer Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde während sie um die Sonne, und des Mondes während er um die Erde kreist. Verwenden Sie den verfügbaren CodePen mit diesem Tutorial, um `ctx.rotate` im Code zu justieren, um zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, unbedingt eine blitzende Animation verwenden müssen…

Stellen Sie sicher, dass es eine Steuerung darauf gibt. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zum ersten Mal sieht, und dass der Benutzer sich dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerung für den Benutzer hat, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Das Konvertieren eines animierten gifs in ein Video ermöglicht es, Steuerungen auf die Animation zu legen, und gibt dem Benutzer Eigenständigkeit. Es gibt viele kostenlose Online-Konverter zur Verwendung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Nutzerserwartungen setzen

Geben Sie den Nutzern einen Hinweis, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Veränderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut, unbedingt Blitze haben müssen, halten Sie sie klein. Im Allgemeinen beschränken Sie die Größe der Blitze auf ein Gebiet von ungefähr 341 mal 256 Pixeln oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter eine typische Entfernung vom Bildschirm hat. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in naher Entfernung betrachtet werden soll, wie z. B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es möglich macht, VR im Browser zu erleben. WebVR kann auf Handy, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet, **oder KANN mit einer Augenmaske verwendet werden**, wie in Firefox Reality (einem Browser für Virtual Reality), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, da das Bild viel näher an den Augen eines Nutzers ist.

#### Reduzieren Sie den Kontrast

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch genannt _Helligkeitskontrastverhältnis,_ gemäß W3.orgs Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist es, solche Inhalte zu lesen. Benutzer mit Sehbehinderungen sind besonders dankbar für Anstrengungen, den hohen Kontrast von Text gegenüber seinem Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist das **_Reduzieren_** des Kontrasts tatsächlich eine Möglichkeit, das Risiko, dass der animierte Inhalt Anfälle verursacht, zu verringern. Verringern Sie das Kontrastverhältnis, wenn innerhalb von einer Sekunde drei Blitze erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen, bevor es hochgeladen oder ins Web gestellt wird. Für Videos und animierte GIFs sind die Adobe-Produkt-Suite eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder steht online das Tool pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image) zur Verfügung. Wenn Sie animierte GIFs erstellen möchten, beginnen Sie beispielsweise mit einem niedrigeren Kontrastverhältnis.

JavaScript ist auch eine Option zur dynamischen Reduzierung des Kontrasts. Hier ist ein Codebespiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB** Farbraum beschrieben wird.

**HTML Inhalt [(Verlinkung zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript Inhalt [(Verlinkung zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#javascript_2)**

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

#### Vermeiden Sie voll gesättigtes Rot für blitzenden Inhalt

Wie bereits in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über lichtempfindliche Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass "_ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2 aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradian einnimmt (etwa 10% des zentralen Blickfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird auch als Risiko angesehen." Sie stellen in demselben Konsens auch fest: "\_Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von gesättigtem Rot als Risiko angesehen."_

### Bereitstellung alternativer CSS-Stile

Mit dem Verständnis, dass ein großer Teil der Animation und des Blitzens über CSS-Methoden gesteuert werden kann, ist es wichtig, Möglichkeiten zu erkunden, um Benutzern alternative Optionen zur Verfügung zu stellen und die Steuerung dieser Optionen bequem und sichtbar zu gestalten.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS, die in alternativen Stylesheets vorhanden sind, an, wenn die Benutzer wissen, wo sie suchen sollen. In einigen Fällen werden die alternativen Stile enthüllt, wenn die Benutzer durch das Menü Ansicht gehen, in anderen Fällen werden sie in den Einstellungen manifestiert, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen über den Browser oder in den Einstellungen suchen müssen, es lohnt sich also zu überlegen, es auf die altmodische Weise zu tun, mit offensichtlichen Buttons oder Links, um den Stil zu wechseln, damit die Benutzer sie sehen können. Auf diese Weise wird die Fähigkeit des Browsers, alternative Stylesheets zu lesen, oder die Möglichkeit des Benutzers, Einstellungen in den Einstellungen vorzunehmen, nicht beeinträchtigt oder überschrieben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie solche, die sich auf Sprachsteuerungssysteme verlassen, häufig auf herkömmliche Buttons und Links angewiesen sind, da ihre Behinderung sie daran hindert, eine Maus zu verwenden oder von Touch-Events auf mobilen Tablets zu profitieren.

Gängige Möglichkeiten, alternative Stylesheets in Ihre HTML-Dokumente einzufügen, bestehen im Einsatz von {{HTMLElement('link')}} Elementen und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element zusammen mit den Attributen `rel="alternate stylesheet"` und für Titel `title="…"` im {{HTMLElement('head')}} Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets einzubinden, aber es wird nicht ganz so gut unterstützt wie das {{HTMLElement('link')}} Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Indem Sie alternative Stylesheets verwenden (denken Sie daran, die Titel beizufügen), stellen Sie sicher, dass Benutzer in der Lage sind, ihre Browser zu verwenden, um alternative Styles auszuwählen.

### Dynamisches Style-Switching

Ein Problem bei der Abhängigkeit vom Browser, um alternative Styles zu enthüllen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Styles zu entdecken. Oder sie sind aufgrund ihrer Behinderung nicht in der Lage. Buttons oder Links machen vielen dankbaren Benutzern sichtbar, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Umschaltknöpfe einzufügen, damit der Benutzer zu den verschiedenen Stylesheets wechseln kann. Das gesagt, der Einsatz alternativer Stylesheets ist nicht die einzige Option. Eine weitere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwendung dynamischer Stylinginformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo möglich, ist das dynamische Manipulieren von Klassen über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft wirklich best practice, da das endgültige Aussehen aller Style-Hooks in einem einzigen Stylesheet kontrolliert werden kann"._ Eines der besten Beispiele um dies zu tun, findet sich auf der W3C-Seite ["C29: Verwendung eines Style-Switchers, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates alternatives Stylesheet, das das Anzeigen von Bildern verhindert, einfach zu erstellen. Es ist eine drakonische Lösung, aber sie ist manchmal notwendig für Lehrer und andere öffentliche Dienste, die Menschen mit extremen Empfindlichkeiten dienen müssen. Diese öffentlichen Dienste können ihre Entwickler beauftragen, ein spezielles alternatives Stylesheet zu entwickeln, das `display: none` verwendet. Hier ist, wie es über CSS gemacht werden kann:

```css
img {
  display: none;
}
```

#### Nutzung von Media-Queries mit {{HTMLElement('style')}}

Indem Media-Queries eingerichtet werden, ermöglichen Sie Kontrollen durch den Benutzer; diese Kontrollen werden im Browser oder im Betriebssystem zugänglich. Siehe das MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details zu sehen, wie ein Benutzer auf die Kontrollen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein hervorragendes Beispiel dafür zu sehen, wie man das `prefers-reduced-motion`-Code nutzt, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie das Beispiel unten aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Die Unterstützung entsteht.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein leistungsstarkes Werkzeug für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Media-Update-Feature

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die überwiegende Mehrheit der modernen Technologie aktualisiert mit einer Rate, die keine Probleme mit Photosensibilität verursacht. Allerdings ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder leistungsschwache Computer können niedrige Aktualisierungsraten haben. [AbilityNet's Faktenblatt (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsie und CRT/LCD-Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort bezüglich der Aktualisierungsraten in Hz:

- _"Dieser Effekt ist bemerkbar und dokumentiert bis zu 70 Hz."_
- _"Diese Studien scheinen zu belegen, dass man Aktualisierungsraten unter 70 Hz meiden sollte, und eine Rate verwenden sollte, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand eine innovative Anwendung des Aktualisierungsfeatures, das in Kombination mit der animation-duration oder transition-duration verwendet werden kann, um mit einer Rate zu enden, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Aktualisierungsrate. Das folgende CSS stammt aus dem CSS-Tricks-Artikel ["Besuch des prefers-reduced-motion, die reduzierte Bewegungs-Media-Query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/@media/update) Media-Feature wird verwendet, um die Fähigkeit des Ausgabegeräts zum Ändern des Erscheinens von Inhalten, nachdem sie dargestellt wurden, abzufragen. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplante in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal, und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Werte in Bezug auf eine Lux-Messung zu definieren, da Geräte mit einem Lichtsensor in der Regel die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen notieren auch den Unterschied in der Technologie, wie z. B. E-Ink, die bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die nicht lesbar sind.
- `environment-blending`
  - : Vom W3C-Dokumententwurf, Media Queries Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Media-Feature wird verwendet, um die Eigenschaften der Anzeige des Benutzers abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die Darstellung und/oder das Layout der Seite anzupassen, je nach Anzeigetechnologie, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Medienbenutzerpräferenzfunktionen (Geplant in Media Queries Level 5)

[User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um Benutzern die Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Media-Feature zeigt an, ob der Inhalt normal angezeigt wird oder ob die Farben umgekehrt wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`erzwungener Farbenmodus`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf der Seite und überschreibt die vom Autor gewählten Farben. Vom W3C-Dokument-Entwurf Media Queries Level 5 Abschnitt zu erzwungenen Farben: "_Das Medienmerkmal erzwungene Farben wird verwendet, um zu erkennen, ob der Benutzeragent einen [Farbenmodus zum Erzwingen](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem es eine Benutzerausgewählte eingeschränkte Farbpalette auf der Seite erzwingt"._ Der Benutzer muss sich dieser Fähigkeit bewusst sein, und es muss im Einklang mit dem passenden Wert für die prefers-color-scheme Medienabfrage arbeiten.
- `light-level`
  - : Vom W3C-Dokument-Entwurf Media Queries Level 5 Abschnitt zum light-level: "\_Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienmerkmal wird verwendet, um nach dem Umgebungslichtlevel zu fragen, in dem das Gerät verwendet wird, um es dem Autor zu ermöglichen, den Stil des Dokuments in Reaktion darauf anzupassen." Dies wird ein Segen für diejenigen sein, die Motorikprobleme haben oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind, den richtigen "Button" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- `prefers-contrast`
  - : Vom W3C-Dokument-Entwurf Media Queries Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): "_Das prefers-contrast Medienmerkmal wird verwendet, um zu erkennen, ob der Benutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen geringen Kontrast zum Text Hintergrund hat, und würden einen größeren Kontrast wünschen."_ Manchmal kann es zu so etwas wie zu viel Kontrast kommen; ein Halo-Effekt um den Text kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verringern. Den Benutzer die Menge an Kontrast steuern zu lassen ist ein definitives Geschenk für Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 von den CSSWG.org-Entwürfen integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList) für mehr Informationen.

#### Personalisierungshilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft wird aus dem [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation) entnommen.

**Anforderung:** Einige Benutzer können nicht-verbalen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht-verbal identifizieren und es dem Autor ermöglichen, nicht-verbalen Text und Bilder den Benutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Dynamische Stilinformationen verwenden](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: Beschreibung von Farbe](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsfaden
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitzdefinition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis von 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Ein Licht auf die Fotosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber Blitzlicht oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettmuster geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallsartige Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt sind."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheits-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiteter RGB-Farbraum — scRGB

### Werkzeug zur Analyse fotosensitiver Epilepsie

Zusammen mit dem Harding-Tool wird allgemein anerkannt, dass dies eine der beiden „Goldstandards“ für die Analyse von Blitzen ist.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Mit PEAT epilepsiefreie Web-Animationen erstellen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis von SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, aber enthält einige Erklärungen zu Referenzen, die in den WCAG 2.1 Kriterien gemacht wurden)
- [Verständnis des Erfolgskriteriums zu drei Blitzen oder darunter Schwellenwert 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Richtlinien zur Barrierefreiheit von Webinhalten (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
