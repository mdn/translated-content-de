---
title: Barrierefreiheit im Web für Krampfanfälle und körperliche Reaktionen
short-title: Vorbeugung von Krampfanfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

Dieser Artikel führt in Konzepte ein, um Webinhalte für Personen mit vestibulären Störungen zugänglich zu machen und wie man Inhalte bewertet und vermeidet, die zu Krampfanfällen und/oder anderen körperlichen Reaktionen führen können.

## Überblick

### Krampfanfälle

Durch Licht verursachte Krampfanfälle sind als fotosensitive Epilepsie bekannt. Inhalte, die flackern, blinken oder blitzen, können eine fotosensitive Epilepsie auslösen. Webtechnologien, die Videos, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen nutzen, können Inhalte erzeugen, die Krampfanfälle oder andere lähmende körperliche Reaktionen auslösen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen hervorrufen, obwohl sie nicht animiert sind. Fotosensitive Epilepsie ist eigentlich eine Art "Reflexepilepsie" — Krampfanfälle, die als Reaktion auf einen Auslöser auftreten. Im Falle von fotosensitiver Epilepsie werden Krampfanfälle speziell durch blitzende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Dass statische Bilder Krampfanfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und fotosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt: "_Bestimmte visuelle Bilder, selbst ohne Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Krampfanfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster von erkennbaren hellen und dunklen Streifen haben den gleichen Effekt wie blitzende Lichter, weil sie abwechselnde dunkle und helle Bereiche enthalten._" Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem ein wenig "quantifizieren": "_Ein Muster mit dem Potenzial, Krampfanfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Ausrichtung aufweisen._" Neben Streifen sind laut Cedars-Sinai auch karierte Muster bekannt dafür, fotosensitive Krampfanfälle auszulösen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blitzende/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: "_Das einzige, was wirklich dokumentiert ist, sind blitzende Lichter, die bei Patienten mit fotosensitiver Epilepsie Krampfanfälle auslösen können. Nur wenige Arten von Epilepsien sind fotosensitiv, die überwiegende Mehrheit der Epilepsien ist es jedoch nicht._" Neben Krampfanfällen, die durch Fotosensitivität ausgelöst werden, kann das Hören bestimmter Musikstücke ebenfalls zu sogenannten musikogenen Krampfanfällen führen, obwohl diese Art von Krampfanfällen viel seltener zu sein scheint. Ein guter Einstieg in das Thema musikogene Krampfanfälle findet sich auf der Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Krampfanfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest: "_Ein Krampfanfall ist ein Ereignis und Epilepsie ist die Erkrankung, die wiederkehrende unprovozierte Krampfanfälle umfasst_." Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist "_der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbezogene Todesursache bei Epilepsie. Er ist nicht häufig, aber ein sehr reales Problem, und die Menschen müssen sich seines Risikos bewusst sein_".

Das bedeutet, dass Krampfanfälle tödlich sein können und Entwickler und Designer unglaublich wichtig dafür sind, das Web für Menschen mit Empfindlichkeiten gegenüber fotosensitiven oder musikogenen Auslösern sicherer zu machen.

Krampfanfälle können tödlich sein, aber selbst die, die "nur" schwächend sind, können so schwer sein, dass sie den Benutzer außer Gefecht setzen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktional ist. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), listet Auslöser auf, die bei fotosensitiven Menschen Krampfanfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund von Flackern oder rollenden Bildern.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitzbilder oder abwechselnde Muster unterschiedlicher Farben enthalten.
- Starke Stroboskoplichter wie visuelle Feuermelder.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume oder durch die Lamellen von Jalousien flackert.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastreicher Farben.

Der gleiche Artikel erklärt weiter, dass viele Faktoren zusammenkommen müssen, um die fotosensitive Reaktion auszulösen. Besonders bemerkenswert ist, dass auch die Wellenlänge des Lichts als möglicher Faktor einbezogen wird; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: "_Personen, die an einer fotosensitiven Krampfanfallserkrankung leiden, können durch Inhalte, die mit bestimmten Frequenzen länger als ein paar Mal blitzen, einen Anfall auslösen_" und bemerkt sehr spezifisch: "_Menschen sind sogar empfindlicher gegen rotes Blitzen als gegen andere Farben, deshalb gibt es einen speziellen Test für gesättigtes rotes Blitzen_".

Es ist nicht einmal nötig, ein Bild oder Video zu haben, um Schaden anzurichten. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Helligkeit mit hoher Frequenz ändert, was leicht über JavaScript durchgeführt werden kann, kann echten Schaden anrichten. Und das Flackern kann überall auftreten. Beispielsweise können "Spinners", die häufig zum Anzeigen verwendet werden, während Seiten geladen werden, leicht "flackern", während sie sich drehen.

Für Menschen mit motorischen Problemen bestehen zusätzliche Bedenken. Zum Beispiel bemerkt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/): "_Fotosensitive Krampfanfälle können durch bestimmte Arten von Flackern in Web- oder Computerinhalten ausgelöst werden, einschließlich Maus-Over, die große Bereiche des Bildschirms schnell ein- und ausschalten lassen._"

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Krampfanfälle hinweisen (außer vielleicht Desorientierung, die bei Krampfanfällen beobachtet wird). Krampfanfälle sind jedoch nicht die einzige mögliche negative körperliche Reaktion auf Blitzlicht, Flackern, Blinken und andere solche Reize. 1997 zeigte ein japanischer Cartoon eine animierte "Virenbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Krampfanfällen, andere mit Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie unfähig macht.

- Krampfanfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Flackern & Blitzen

Obwohl "Blinken" und "Blitzen" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) hebt hervor: "_Generell sind blitzende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten, Krampfanfälle auszulösen. Um sicher zu sein, empfiehlt der Konsens, dass fotosensitive Personen nicht Blitzen von mehr als drei pro Sekunde ausgesetzt werden sollten._" Für einige Menschen können jedoch Blitze/Blinken selbst bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blitzlichter schlecht sind. Die NASA stellt in ihrem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzlichter leistungsstarke Werkzeuge sein können, um Aufmerksamkeit zu erregen - wie es für Warnknöpfe notwendig ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer zutrifft). Für einige Benutzer warnen blinkende Knöpfe auch, dass sie sparsam und mit Sorgfalt verwendet werden müssen. In Bezug auf Webdesign müssen Systeme, die Unternehmensmitarbeiter auf Gefahren aufmerksam machen, indem sie den Bildschirm "kapern", um eine blinkende Notfallwarnung anzuzeigen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flackern - wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist "_ein Blitz eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0,006 Steradiant (etwa 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt._"

Wie weit ist ein typischer Betrachtungsabstand? Die zum Zeitpunkt des Schreibens in Betracht gezogene Empfehlung für einen typischen Betrachtungsabstand war "_der Bereich kann als anwendbar auf einen Bereich >25 % der Fläche eines Fernsehbildschirms angesehen werden, wobei ein Standardbetrachtungsabstand von ≥2 m (etwa 9 Fuß) angenommen wird_". Vieles hat sich seitdem verändert und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest: "_…die Komplexitäten, die den Dynamiken des Gehirns zugrunde liegen, könnten durch bestimmte Farbkombinationen mehr moduliert werden als durch andere, zum Beispiel führt ein Rot-Blau-Flackerreiz zu größerer kortikaler Erregung als ein Rot-Grün oder Blau-Grün Reiz._"

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und rote Blitzschwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeines Blitzen** ist definiert als ein Paar entgegengesetzter Änderungen in der [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt und "ein Paar entgegengesetzter Änderungen" eine Erhöhung gefolgt von einer Verringerung oder eine Verringerung gefolgt von einer Erhöhung ist;
- Ein **rotes Blitzen** ist definiert als ein Paar entgegengesetzter Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu fotosensitiven Krampfanfällen zu entwickeln, der besagt: "_Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradiant einnimmt (etwa 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen)._" Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Entfernung

#### Wie groß? Es kommt darauf an

"Sowohl relative" Größe als auch Entfernung sind relevant. Laut [PEAT](https://trace.umd.edu/peat/), "_Die kombinierte Fläche der gleichzeitig auftretenden Blitze beansprucht nicht mehr als insgesamt ein Viertel eines beliebigen 341 x 256 Pixel Rechtecks irgendwo auf der angezeigten Bildschirmfläche, wenn der Inhalt bei 1024 mal 768 Pixeln betrachtet wird._"

Der Punkt, dass das Blickfeld eine wichtige Überlegung ist, ergibt sich im Artikel, der sich mit WCAG 2.3.1 befasst: "_Der 1024 x 768 Bildschirm wird als Referenzauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block repräsentiert einen 10-Grad-Sichtbereich bei typischen Betrachtungsabständen. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am anfälligsten für fotostimuli sind.)_"

Dieses Pixel-Flächenverhältnis berechnet die relative Größe, aber auch die Entfernung zählt.

Die Entfernung spielt eine Rolle, weil sie das gesamte Sehfeld beeinflusst. Wenn Zuschauer Augenausrüstung für Spiele tragen, wird das Sehfeld wahrscheinlich in seiner Gesamtheit vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, die sowohl auf Handys, Computern als auch Headsets erlebt werden kann. Die Sorge um blinkende Bilder in einer Augenausrüstung wächst, da der Bildschirm so nahe an den Augen ist.

Untersuchungen deuten generell darauf hin, dass die Nutzung von VR möglicherweise sogar sicherer ist als der normale Konsum von Bildschirmen, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst: "_Die bisher verfügbaren begrenzten Daten lassen in Bezug auf VR-Technologie keine besonderen Bedenken hinsichtlich Krampfanfällen erkennen, obwohl sich diese Sichtweise mit mehr Erfahrung ändern kann. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbänderungen, würden voraussichtlich Krampfanfälle auslösen, genauso wie sie es in der realen Welt tun._"

(Beachten Sie, dass einige Benutzer bei blinkenden Cursorn nichts sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Kontrastierende dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsy Foundation of America listet auf, wie viele hell-dunkle Streifenpaare wahrscheinlich Krampfanfälle provozieren, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind acht Linien das maximal erlaubte, aber wenn es sich bewegt, sind nicht mehr als fünf Linien zulässig.

Parallax-Effekte können Desorientierung verursachen. Nutzen Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Krampfanfälle zu provozieren, enthält deutlich erkennbare Streifen, die in irgendeiner Ausrichtung mehr als fünf hell-dunkle Streifenpaare zählen. Wenn die hell-dunklen Streifen eines beliebigen Musters vom minimal erwarteten Betrachtungsabstand aus ein solides Winkelmaß von >0,006 Steradian am Auge einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare zeigen, wenn die Streifen ihre Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert ist oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst bei den oben genannten Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren Bereich zu einem größeren wechselt, ebenso wie bei erhöhtem Kontrast und erhöhter räumlicher Frequenz von einer niedrigen zu einer mittleren. Es ist auch bekannt, obwohl der Grund dafür nicht verstanden wird, dass der Wechsel von einfachen (z. B. Streifen) zu mehreren Orientierungen (z. B. dem Schachbrettmuster, das entsteht, wenn man ein Streifenmuster quer über das ursprüngliche legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für Barrierefreiheit. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf Web-Zugänglichkeit und Zugänglichkeit im Allgemeinen bezieht.

Wie die Farbe sich auf ihren Hintergrund bezieht — gewöhnlich in Bezug auf Kontrast formuliert — und wie drastisch sich die Farbe von Frame zu Frame in einer Animation ändert, ist wichtig. Weitere Informationen dazu finden Sie unter [Drei Blitze oder weniger Schwellenwert verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall von Rot

Es wurde gezeigt, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Fähigkeit, das Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Rote Desaturierungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte es als Test verwenden. Der Rote Desaturierungstest bewertet die Integrität des Sehnervs. Weitere Informationen zur Verwendung dieses Tests durch einen Augenarzt finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen mit traumatischer Hirnverletzung [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezifische Tests dafür. Neben der Beeinflussung der kognitiven Funktion von Personen mit traumatischen Hirnverletzungen erfordert die Farbe im roten Spektrum offensichtlich besondere Aufmerksamkeit und spezielle Tests. Dr. Gregg Vanderheiden, bei der Erprobung des Photosensitive Epilepsy Analysis Tool, stellte fest, dass die Anfallraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht sicher vor Krampfanfällen

Beachten Sie, dass die Farbe **#990000** als "**websicher**" angesehen wird. Das bedeutet _nicht_, dass sie "sicher ist, keine Anfälle zu verursachen"; es bedeutet lediglich, dass die Farbe von der Technologie, die verwendet wird, um Farbe auf Bildschirmen zu erzeugen, genau reproduziert werden kann.

## Messung zur Schadensvermeidung

Die Messung des potenziellen Schadens ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Helligkeit, Größe, Kontrast und, im Falle von Animationen, Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 hielt die Epilepsy Foundation of America einen Workshop ab, um einen Expertenkonsens zu fotosensitiven Krampfanfällen zu erarbeiten. Die folgenden, fachkundigen und autoritativen Informationen stammen aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0,006 Steradian (etwa 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Krampfanfälle auszulösen, enthält deutlich erkennbare Streifen, die in irgendeiner Ausrichtung mehr als fünf hell-dunkel Streifenpaare zählen. Wenn die hell-dunkel Streifen eines beliebigen Musters vom minimal erwarteten Betrachtungsabstand aus ein solides Winkelmaß von >0,006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf hell-dunkel Streifenpaare zeigen, wenn die Streifen ihre Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert ist oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden bei feststehenden Medien, zum Beispiel einer aufgezeichneten Fernsehsendung, die bildweise analysiert werden kann, im Vergleich zu interaktiven Medien.

Die "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also, für den Webentwickler, wie bezieht sich dieses auf Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) für Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Wikipedia's Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Begriffe, mit denen wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Farbraum. Das ist hilfreich, denn es gibt einen spezifischen Standard, der erwartet wird, auf Monitoren, Druckern und im Internet verwendet zu werden, und dieser ist der **sRGB** (standard Red Green Blue).

> Als Maßstab für das emittierte Licht pro Flächeneinheit wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegerätes zu spezifizieren. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Speziifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Normalerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop- [Liquid Crystal Displays](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-definition televisions](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Quintessenz ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, in größtmöglichem Umfang Arten von Webinhalten zu quantifizieren und zu messen, die als Auslöser für Krampfanfälle dienen können. Das gesagt, es darf nicht vergessen werden, dass Farbe ebenso viel mit menschlicher Wahrnehmung im Gehirn zu tun hat, wie mit der Messung von Licht, das von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Variablen gibt es auch physiologische Unterschiede unter uns. Es wird Variationen und Nuancen geben, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Dozent Emeritus für Informatik an der Cal State University Long Beach, Folgendes in Bezug auf [Lichtstärke im HSL-Farbraum](https://colortutorial.design/hsb.html): "_…Der Unterschied zwischen Stufen der Lichtstärke ist nicht tatsächlich linear, wie es die HSL-Skala andeuten würde; wir sind viel empfindlicher auf Veränderungen in helleren Werten als auf dunklere._"

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung nicht. Forschungs- und Diskussionsaktivitäten sind im Gange, wie man die maschinelle Lichtmessung in Zusammenhang mit der Entfernung zum menschlichen Auge, gefiltert durch das menschliche Sehen, und dann im menschlichen Gehirn manipuliert, setzen kann.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut der Epilepsy Foundation's Artikel, ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), "_Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichteinwirkung, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf._" Der Artikel folgt mit dieser Statistik: "_Mädchen (60 %) sind häufiger betroffen als Jungen (40 %), obwohl Anfälle bei Jungen häufiger sind, weil sie eher Videospiele spielen. Videospiele enthalten oft provokativ beleuchtete Lichtstimuli._"

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfällige Person einem Benutzertest unterziehen. Es ist gefährlich. In diesem Sinne ist eine der ethischsten Dinge, die Entwickler und Designer tun können, die Nutzung von Werkzeugen, die von Experten auf diesem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten zusammengearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) etabliert und betont, dass es **_kostenlos_** zum Download bereitgestellt wird. PEAT kann Autoren dabei helfen, festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Krampfanfälle verursachen. Bitte beachten Sie die Einschränkung seiner Verwendung: **_Verwendung von PEAT zur Bewertung kommerziell produzierten Materials für Fernsehsendungen, Filme, Home Entertainment oder Spieleindustrie ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehprogramme den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehprogramme in verschiedenen Ländern müssen diesen Test bestehen, bevor sie ausgestrahlt werden können, sodass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten bereitstellt.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheit-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, sicherzustellen, dass wir keine Schäden absichtlich oder unabsichtlich verursachen. Wenn wir etwas einschließen müssen, das potenziell schädlich sein könnte, ist es wichtig, dass Benutzer nicht versehentlich auf die schädlichen Inhalte stoßen und Wege zur Verfügung gestellt werden, durch die Benutzer Animationen verhindern und steuern können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Kein Unheil anrichten

[WCAG Leitfaden 2.3 Krampfanfälle und Körperreaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: "_Gestalten Sie keine Inhalte in einer Weise, die bekanntermaßen Krampfanfälle oder physische Reaktionen verursacht_". Keine Animation einzufügen, die ein Benutzer nicht kontrollieren kann. Verwenden Sie keine Muster, die bekanntermaßen Probleme verursachen. Wenn Sie ein GIF oder PNG mit Blitzen einfügen müssen, zeichnen Sie es stattdessen im Videoformat auf, damit dem Benutzer Steuerungsmöglichkeiten zur Verfügung stehen. Bieten Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Verstehen von Bosheit

Stellen Sie sich als Entwickler oder Designer die Frage, ob blitzende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es jene, die schädliche Inhalte von Ihrer Seite herunterladen und sie als Waffe verwenden könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu verwenden, um physischen Schaden über Animationen zu verursachen, am Samstag, den 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde gehackt, indem Beiträge mit blitzenden Bildern und Links, die fälschlicherweise als hilfreich ausgegeben wurden, eingefügt wurden. Benutzer mit vestibulären Störungen, die Hilfe auf der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes Gif gesendet wurde: das blitzende Gif trug die Nachricht, "_Sie verdienen einen Anfall für Ihre Beiträge_".

#### Exposition kontrollieren, Zugang kontrollieren

Die Kontrolle des Exposition zur Seite ist der Schlüssel, um sicherzustellen, dass jemand, der anfällig für Krampfanfälle ist, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie möglicherweise ein Bild oder eine Animation haben, die Krampfanfälle auslösen könnte, kontrollieren Sie den Zugang dazu, indem Sie zunächst eine Warnung über den Inhalt anzeigen und ihn dann in einer Position platzieren, wo der Benutzer sich bewusst dafür entscheiden muss, darauf zuzugreifen, z.B. durch Klicken eines Knopfes oder indem Sie sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung hat.

Erwägen Sie, Crawl-Direktiven für Suchmaschinen festzulegen, um anzudeuten, dass sie potenziell schädliche Ressourcen nicht in ihre Suchindizes aufnehmen sollten. Sie können dies tun, indem Sie Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Element mit restriktiven Regeln wie `noindex, nofollow` einschließen. Durch das Nichtindizieren der Seite (`noindex`) und das Nichtfolgen von Links auf der Seite (`nofollow`) wird die Wahrscheinlichkeit verringert, dass Benutzer über die Suche darauf stoßen:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Für nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Response-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besonderer Erwähnung wegen ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Möglichkeit, früher im Verlauf einer gegebenen HTTP-Anfrage zu bestimmen, ob ein Bild animiert ist.
- Zakirt bietet einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) an.

Stellen Sie bei animierten GIFs sicher, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, etwa indem das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut für `<video controls>` nicht hinzugefügt wird oder indem {{CSSxRef('animation-play-state')}} auf `paused` als Ausgangszustand gesetzt wird. Um ein mächtiges Beispiel zu sehen, wie dies tatsächlich funktionieren kann, sehen Sie sich den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm) an. Kirupa verwendet `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis zu schaffen, das der Benutzer kontrollieren kann.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf null für die Anfangsphase der Animation festzulegen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer auch Animationen stoppen kann, nicht nur starten

Ein {{HTMLElement('video')}}-Element mit keinen Attributen wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut dem Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls` HTML-Attribut wider, welches steuert, ob Benutzeroberflächensteuerungen zum Abspielen des Mediaelements angezeigt werden sollen.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Videos und Audio-Elementen hinzufügen.

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

Unter Anwendung dieses gleichen Beispiels auf Audio:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt sich innerhalb des {{HTMLElement('video')}}-Elements befindet und nicht des {{HTMLElement('audio')}}-Elements. Dieses Beispiel stammt aus dem Abschnitt über die Beschreibung des [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um das Audio freizuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Das scheint offensichtlich, aber aufgrund der zahlreichen MIME-Typen variieren die Mechanismen für ihre Handhabung stark, und aus diesem Grund gibt es keine allgemein gültige Lösung für das Problem. Dies wird weiter durch die Tatsache verkompliziert, dass sogar die Art und Weise, wie Dateien klassifiziert werden, erschwert, wie sie gehandhabt werden sollten. Zum Beispiel wird das .gif-Dateiformat gewöhnlich als Bild verstanden, wird aber in einigen Kreisen auch als Video-Dateiformat betrachtet, weil es animiert werden kann. Für eine umfassende Auflistung von Medientypen, besuchen Sie bitte die [IANA.org-Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden zum Aufspüren sind keine beiläufige Übung. Sie könnten daran interessiert sein, den [MIME-Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu verfolgen. Praktisch jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Kontrolle über die Animation.

#### Gewöhnlich animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas bietet einen großartigen Abschnitt zu [grundlegenden Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler im Bereich der Canvas-Animation, jedoch ist es auch interessant zu sehen, wie es mit Bildwiederholraten interagiert. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem die Mechanik der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildwiederholraten diskutiert werden.
- **GIFs (Raster)**: Schwierig zu knacken, da die Steuerung ihrer Animation sich innerhalb der GIF-Dateien selbst befindet. Für Informationen über die Steuerung der Geschwindigkeit von GIFs siehe W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Betrachten Sie es als eine Variante, die Video-Version von GIF. Das Format ist nicht standardisiert und muss eine "reale" Videodatei (z.B., eine .webm-Datei) referenzieren, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Mehrfach-Bild-Netzwerk-Grafiken ist ein Grafikdateiformat für animierte Bilder. Auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), stellt fest, dass "_SVG ist ein textbasiertes offenes Web-Standard. Es ist explizit darauf ausgelegt, mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten._" SVGs können als Bild verwendet werden wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Dies bedeutet, dass das Aussehen und die Animation von SVGs über CSS-Keyframes und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann ebenfalls animiert werden

Übersetzungen und Transformationen können Text in einem Div animieren und Schaden anrichten. Bewegter Text kann Krampfanfälle auslösen, aus den gleichen Gründen, aus denen bewegte Bilder dies tun können, also vermeiden Sie es, Ihren Text zu animieren. Es ist ohnehin eine gute Idee, auf die Verwendung von bewegtem Text zu verzichten, da viele Bildschirmlesegeräte keinen bewegten Text lesen können und es eine schlechte Benutzererfahrung ist, selbst für diejenigen ohne Seh- oder vestibuläre Probleme.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammen kombiniert werden, um dem Benutzer ein kraftvolles Erlebnis zu bieten. Wir haben das `animation`-Eigenschaft bereits früher in diesem Dokument erwähnt. Es ist in Wirklichkeit eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation erfolgen sollte.
- `animation-timing-function`

Die Animations-Eigenschaft ist allein schon mächtig, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein machtvolles Set von Optionen für den Benutzer eingerichtet werden. Die Einstellung `animation-duration` und `transition-duration`-Eigenschaften auf eine kurze Dauer, anstatt sie auf `animation: none` und `transition: none` zu setzen, stellt eine Sicherheitsmaßnahme dar, um Probleme in jedem Fall zu vermeiden, in dem eine Abhängigkeit davon besteht, dass die Animation ausgeführt wird.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der Großteil des JavaScript-Codes, der auf HTML-Videos angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Videos als auch für Audios zu implementieren. Ein Wert von 1.0 ist der Standard und gilt als normale Geschwindigkeit; ein Wert von 0.5 ist halb so schnell, ein Wert von 2.0 ist doppelt so schnell. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeiteigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document=getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet folgendes Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Eine der einfachsten Möglichkeiten besteht darin, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen und -größen in Ihrem Umfeld sind. SVGs werden oft nicht erlaubt, wegen Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet hervorragende Beispiele dafür, indem es mehrere Bildquellen für Sonne, Erde und Mond benutzt und mehrere Canvas-Methoden verwendet, um die Geschwindigkeit und Animation der Erde zu steuern, während sie sich um die Sonne dreht, und des Mondes, während er sich um die Erde dreht. Verwenden Sie das mit diesem Tutorial verfügbare Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, unbedingt eine blitzende Animation verwenden müssen…

Stellen Sie sicher, dass sie eine Steuerung darauf hat. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zuerst sieht, und dass der Benutzer die Option hat, sich bewusst dafür zu entscheiden, die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerungen für den Benutzer bereitstellt, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Durch das Umwandeln eines animierten gifs in Video kann Kontrolle über die Animation ausgeübt werden und dem Benutzer wird Entscheidungsfreiheit gegeben. Es gibt viele kostenlose Online-Konverter, die zur Verfügung stehen, wie [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Benutzern die Erwartungen setzen

Geben Sie Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut notwendig haben, damit es blitzt, halten Sie es klein. Im Allgemeinen begrenzen Sie die Größe des Blitzes auf einen Bereich von etwa 341 x 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Zuschauer in einem typischen Abstand zum Bildschirm ist. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in der Nähe angeschaut wird, zum Beispiel mit einer VR-Brille. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Handys, Computern oder Headsets erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augenmaske verwendet, **oder verwendet werden kann von einer Augenmaske**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, weil das Bild viel näher an den Augen eines Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund ist (technisch genannt _Luminositätskontrastverhältnis,_ laut W3.org's Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/)), desto leichter ist ein solcher Inhalt lesbar. Benutzer mit geringer Sehfähigkeit schätzen insbesondere Bemühungen, einen hohen Kontrast zwischen Text und Hintergrund zu sicherzustellen. Wenn der Inhalt jedoch animiert wird, ist das **_Reduzieren_** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Krampfanfälle verursacht. Verringern Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze erkennen.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Idealerweise sollte der Kontrast angepasst werden, bevor er hochgeladen oder im Web veröffentlicht wird. Für Videos und animierte GIFs sind die Adobe-Produktreihe ein phänomenales Mittel für traditionelle Bilder. Auch für Bilder ist ein Online-Tool verfügbar, nämlich pinetools.com's [Brightness and contrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu machen, beginnen Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um Kontraste dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt mit dem Titel, ["Beispiel: Die Hintergrundfarbe eines Paragraphen setzen"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Traversieren einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbwerte im Beispiel im **RGB**-Farbraum beschrieben werden.

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

#### Vermeiden von vollständig gesättigtem Rot für blitzende Inhalte

Wie bereits früher in diesem Dokument erwähnt, hielt die Epilepsy Foundation of America im August 2004 einen Workshop ab, um einen Expertenkonsens zu fotosensitiven Krampfanfällen zu entwickeln. Unter ihren Ergebnissen war die Erkenntnis, dass "_ein Blitz eine potenzielle Gefahr ist, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradian einnimmt (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet."_ Sie stellten auch fest, dass in demselben Konsens: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Alternative CSS-Stile bereitstellen

Mit dem Verständnis, dass viele Animationen und Blitze durch CSS-Methoden gesteuert werden können, ist es wichtig, Wege zu erkunden, um Benutzern alternative Optionen zur Verfügung zu stellen und die Kontrolle dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS-Optionen in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile im Ansichtsmenü offengelegt, in anderen Fällen manifestieren sie sich in den Einstellungven, manchmal beides. Nicht alle Benutzer wissen, dass sie diese Optionen über den Browser oder die Einstellungen suchen müssen, daher ist es erwägenswert, es auf die altmodische Weise zu tun, mit offensichtlichen Knöpfen oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Die Verwendung dieser Optionen steht nicht im Widerspruch zu oder überschreibt die Möglichkeit des Browsers, die alternativen Stylesheets zu lesen, oder die Möglichkeit des Benutzers, Präferenzen in den Einstellungen festzulegen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie solche, die auf sprachgesteuerte Systeme angewiesen sind, oft auf Legacy-Buttons und Links zurückgreifen, because they can't use a mouse because of their disability, or benefit from touch events on mobile tablets.

Gewöhnliche Wege, alternative Stylesheets in Ihre HTML-Dokumente einzubeziehen, sind die Nutzung des {{HTMLElement('link')}}-Elements und von {{CSSxRef('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen von `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Bereich des Webbrowsers.

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

**{{CSSxRef('@import')}}** ist auch eine Möglichkeit, Stylesheets einzufügen, wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, Titel hinzuzufügen) richten Sie es für Benutzer ein, ihre Browser zu verwenden, um alternative Stile auszuwählen.

### Dynamisches Stilschalten

Ein Problem dabei, sich darauf zu verlassen, dass der Browser alternative Stile offenlegt, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder sind aufgrund ihrer Behinderung nicht in der Lage dazu. Knöpfe oder Links machen es offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt viele Möglichkeiten, um Umschaltknöpfe hinzuzufügen, damit Benutzer zu verschiedenen Stylesheets wechseln können. Das gesagt, die Verwendung alternativer Stylesheets sind nicht die einzige Option. Eine weitere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwenden dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), "_wo es möglich ist, ist es wirklich am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das ultimative Erscheinungsbild aller Stil-Hooks in einem einzigen Stylesheet kontrolliert werden kann_." Eines der besten Beispiele, wie man dies umsetzen kann, ist von der W3C-Seite, ["C29: Die Verwendung eines Stil-Switchers, um eine konforme Alternative-Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drakonische Lösung, aber sie ist manchmal notwendig für Lehrer und andere öffentliche Bedienstete, die denen mit extremer Empfindlichkeit dienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu erstellen, das `display: none` verwendet. So wird dies über CSS gemacht:

```css
img {
  display: none;
}
```

#### Medienabfragen mit {{HTMLElement('style')}} nutzen

Wenn Sie Medienabfragen einrichten, aktivieren Sie die Steuerung durch den Benutzer; diese Steuerungen werden im Browser oder im Betriebssystem verfügbar gemacht. Weitere Einzelheiten, wie ein Benutzer auf die Steuerungen zugreifen kann, finden Sie im MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely).

#### `prefers-reduced-motion`

Das Wachstum der Unterstützung für `prefers-reduced-motion` in modernen Browsern ist steigend.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür, wie man den Code `prefers-reduced-motion` nutzt, zu sehen, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie das Beispiel unten aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Es gibt ein leistungsfähiges Werkzeug, das Entwicklern zur Verfügung steht und das Window.matchMedia() genannt wird. Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die große Mehrheit moderner Technologien aktualisiert sich mit einer Rate, die keine Probleme mit der Fotosensibilität verursacht. Dennoch ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: Ältere oder leistungsschwache Computer können niedrige Bildwiederholraten haben. Das [AbilityNet-Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20und%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Bildwiederholungsraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsie und CRT/LCD-Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Bildwiederholraten in Hz:

- "_Dieser Effekt ist spürbar und dokumentiert bis zu 70 Hz._"
- "_Diese Studien würden zu dem Schluss kommen, dass man Auffrischungsraten unter 70 Hz meiden und eine Rate verwenden sollte, die nicht durch 10 teilbar ist._"

Eric Bailey, von CSS-Tricks, fand eine innovative Verwendung der Aktualisierungsfunktion die, in Kombination mit animation-duration oder transition-duration verwendet wird, um eine Rate zu erzielen, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Bildwiederholungsraten. Das nachfolgende CSS stammt aus dem CSS-Tricks-Artikel ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/@media/update)-Medienmerkmal wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Aussehen von Inhalten zu ändern, nachdem sie gerendert wurden. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- und experimentelle Funktionen

### Medienabfragen Stufe 5

EnvironmentMQ (geplant bei Medienabfragen Stufe 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Ebenen tatsächlich in Form einer Messung von Lux zu definieren, weil Geräte mit einem Lichtsensor in der Regel die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen beachten auch die Unterschiede in der Technologie, wie E-Ink, die auch bei hellem Tageslicht lesbar bleibt, während Flüssigkristalle dies nicht tun.
- `environment-blending`
  - : Aus W3Cs Entwurfsdokument, Medienabfragen Stufe 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienmerkmal wird genutzt, um die Eigenschaften des Displays abzufragen, sodass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen und/oder das Layout der Seite abhängig von der Anzeigetechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienmerkmale (geplant in Medienabfragen Stufe 5)

[Benutzerpräferenz-Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C-Editor's-Entwurfsdokument Medienabfragen Stufe 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Benutzern Kontrolle über die Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzerpräferenz-Medienmerkmale](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienmerkmal kennzeichnet, ob die Inhalte normal angezeigt werden oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf der Seite und überschreibt die vom Autor gewählten Farben. Aus W3C's Entwurfsdokument, Medienabfragen Stufe 5 Abschnitt zu forced-colors: _"Das forced-colors-Medienmerkmal wird genutzt, um zu erkennen, ob der Benutzeragent einen [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine vom Benutzer ausgewählte begrenzte Farbpalette auf der Seite erzwingt." Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden und sie muss gut mit dem geeigneten Wert für die prefers-color-scheme-Medienabfrage harmonieren._
- `light-level`
  - : Aus W3C's Entwurfsdokument, Medienabfragen Stufe 5 Abschnitt zu light-level: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienmerkmal wird genutzt, um das Umgebungslichtniveau abzufragen, bei dem das Gerät verwendet wird, um dem Autor die Anpassung des Stils des Dokuments als Reaktion darauf zu ermöglichen."_ Dies wird für diejenigen von uns ein Segen sein, die motorische Probleme oder einige mit kognitiven Schwierigkeiten haben, die nicht den richtigen "Knopf" finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus W3C's Entwurfsdokument, Medienabfragen Stufe 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Das prefers-contrast-Medienmerkmal wird genutzt, um zu erkennen, ob der Benutzer das System dazu aufgefordert hat, die Menge an Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen geringen Kontrast zum Hintergrund aufweist und würden einen größeren Kontrast bevorzugen."_ Manchmal kann es so etwas wie zu viel Kontrast geben; ein Heiligeffekt um Text herum kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Den Kontrast in die Kontrolle des Benutzers zu geben, ist ein definitives Geschenk für die Barrierefreiheit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 der CSSWG.org-Entwürfe integriert sich mit der im [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) definierten Eventschleife in HTML. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Mehr Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierungshilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft stammt von [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation).

**Anforderung:** Einige Benutzer können keinen nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht wörtlich kennzeichnen und ermöglicht es dem Autor, nicht-wörtlichen Text und Bilder den Benutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: Beschreibung von Farbe](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Diskussionsforum von Stack Exchange
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Definition von Blitzen #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis von 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Individuen sind von Geburt an besonders empfindlich gegenüber flackernden Lichtern oder kontrastreichen visuellen Mustern, wie Streifen, Gittern und Schachbrettmustern. Aufgrund dieser Sensitivität erzeugt ihr Gehirn Anfalls-ähnliche Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt sind."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flimmern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch flackernde oder blitzende Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Photic-und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Tool wird allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Harding Flash- und Pattern-Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -verwaltung — Teil 2-2: Farbverwaltung — Erweiterter RGB-Farbraum — scRGB

### Photosensitive Epilepsie Analyse-Tool

Zusammen mit dem Harding-Tool wird allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Explainer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Module](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis der WCAG 2.0 (älter, aber enthält einige Erklärungen zu Referenzen der WCAG 2.1 Kriterien)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgs-Kriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis der WCAG 2.1
- [Verständnis der Erfolgs-Kriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Richtlinien für die Barrierefreiheit von Webinhalten (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte

## Mitwirkende

Ein herzlicher Dank an Teal; Wayne Dick von der [Low Vision Task Force of the W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory at USF and TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige, großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _allen_ zutiefst dankbar dem Trace Research & Development Center für die Bereitstellung ihres erstaunlichen Werkzeugs, dem [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos.
