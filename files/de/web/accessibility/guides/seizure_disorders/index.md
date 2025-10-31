---
title: Webzugänglichkeit für Anfälle und physische Reaktionen
short-title: Verhinderung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

Dieser Artikel führt in die Konzepte ein, wie Webinhalte für Menschen mit Vestibulärstörungen zugänglich gemacht werden können und wie man Inhalte misst und verhindert, die Anfälle und/oder andere körperliche Reaktionen auslösen.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere lähmende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei der photosensitiven Epilepsie werden Anfälle spezifisch durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können auch Epilepsie auslösen.

Der Umstand, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgestellt wird, "_Bestimmte visuelle Bilder, selbst in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel, ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), über statische Bilder und Muster: "_Statische oder sich bewegende Muster von erkennbaren hell-dunkel-Streifen haben die gleiche Wirkung wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": "_Ein Muster, das das Potenzial hat, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel-Paare von Streifen in jeder Ausrichtung aufweisen_". Zusätzlich zu Streifen ist bekannt, dass auch karierte Muster photosensitive Anfälle verursachen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind blitzende/strobenartige Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF merkt an, _"Das Einzige, das wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Epilepsiearten sind jedoch photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Photosensitivität hervorgerufen werden, kann das Hören bestimmter Musikstücke auch sogenannte musikerzeugende Anfälle auslösen, obwohl diese Arten von Anfällen weitaus seltener zu sein scheinen. Für einen umfassenden Einstieg in das Thema der musikerzeugenden Anfälle besuchen Sie die Webpage von Epilepsy Ontario zu [Musikerzeugenden Anfällen](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) merkt die Epilepsy Foundation an, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederkehrende unprovozierte Anfälle beinhaltet_." Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) _"ist der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Dies ist nicht häufig, stellt jedoch ein sehr reales Problem dar, und Menschen müssen sich dessen Risiko bewusst sein."_

Der Punkt ist, dass Anfälle definitiv tödlich sein können, und Entwickler und Designer sind unglaublich wichtig, um das Internet zu einem sichereren Ort für diejenigen zu machen, die empfindlich auf photosensitive oder musikerzeugende Auslöser reagieren.

Anfälle können tödlich sein, aber auch diejenigen, die "nur" lähmend sind, können so schwer sein, dass sie den Benutzer handlungsunfähig machen. Andere Erkrankungen wie Orientierungslosigkeit, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensitivität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), listet Auslöser auf, die Anfälle bei photosensitiven Personen verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feuermelder.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es über Wasser glitzert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen mit kontrastierenden Farben.

Der gleiche Artikel führt weiter aus, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass darin die Wellenlänge des Lichts als möglicher Faktor enthalten ist; Wellenlängen im roten Spektrum scheinen besonders problematisch zu sein. Im Artikel ["Verständnis von WCAG 2.0 Drei-Blitze-oder-weniger-Schwellenwert"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt, dass: _"Individuen, die an photosensitiven Anfallsleiden leiden, können durch Inhalte, die mit bestimmten Frequenzen blitzen, Anfälle erleiden, wenn sie mehr als ein paar Blitze aufweisen"_ und sehr spezifisch darauf hingewiesen, dass:_ "Menschen sind noch empfindlicher auf rote Blitzlichter als auf andere Farben, daher wird ein spezieller Test für gesättigtes rotes Blinken bereitgestellt."_

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es die Farbe und Leuchtkraft mit hoher Frequenz ändert, was leicht per JavaScript durchgeführt werden kann, kann realen Schaden verursachen. Und das Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig verwendet werden, während Seiten laden, leicht beim Drehen "flackern".

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel stellt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"photosensitive Anfälle durch bestimmte Arten von Blinken in Web- oder Computerinhalten ausgelöst werden können, einschließlich Mouse-Overs, die große Bereiche des Bildschirms dazu bringen, schnell ein- und auszublinken"_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen möglichen Krankheiten verbunden sind und nicht speziell auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu sehen ist). Anfälle sind jedoch nicht die einzige mögliche negative körperliche Reaktion auf Blinken, Flackern, Blitzen und andere derartige Reize. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten, indem sie Anfälle bekamen, andere litten unter Übelkeit, Zittern und Erbrechen von Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Folgen: jede dieser körperlichen Reaktionen kann so stark sein, dass sie lähmend wirkt.

- Anfälle
- Vestibulärstörungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken und Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut dem W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"in der Regel blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, photosensitiven Individuen sollten Blitzen mit mehr als drei pro Sekunde nicht ausgesetzt werden."_ Für einige Menschen jedoch kann Blitzen/Blinken bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht alles Blitzen und Blinken schlecht ist. NASA stellt in ihrem Dokument mit dem Titel, ["Blinken, Blitzen und temporale Reaktion"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge zur Lenkung der Aufmerksamkeit sein können – wie es für Warnknöpfe notwendig ist (dies unter der Annahme, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für einige Benutzer, die ebenfalls darauf hinweisen, dass sie sparsam und mit Vorsicht eingesetzt werden müssen. Auf das Webdesign angewendet, müssen Systeme, die Unternehmensmitarbeiter vor Gefahr warnen, indem sie den Bildschirm "entführen", um eine blinkende Warnung vor Notfällen anzuzeigen, die Rate, Größe und Leuchtkraftänderungen auf dem Bildschirm berücksichtigen, wenn diese Warnungen angezeigt werden.

### Blitzen und Flackern – wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- und Muster-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"ist ein Blitz ein potenzielles Risiko, wenn er eine Leuchtkraft von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradian (ungefähr 10 % des zentralen Gesichtsfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die zu der Zeit der Niederschrift berücksichtigte Empfehlung besagt: "_die Fläche kann als auf eine Fläche von >25 % der Fläche eines Fernsehbildschirms bei Standard-Betrachtungsabständen von ≥2 m (∼9 Fuß) zutreffend angesehen werden_." Vieles hat sich seitdem geändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Bestimmte Farben sind wahrscheinlicher, epileptische Anfälle zu verursachen."](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"... die Komplexität der zugrunde liegenden Hirndynamik durch bestimmte Farbkombinationen stärker moduliert werden kann als durch andere, beispielsweise verursacht ein rot-blauer Flimmerreiz größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen und blitzendes Rot

[WCAG 2.3.1 allgemeine Blitz- und Rotblitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist als ein Paar entgegengesetzter Änderungen der [relativen Leuchtkraft](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtkraft definiert, wobei die relative Leuchtkraft des dunkleren Bildes unter 0,80 liegt, und wo ein "Paar entgegengesetzter Änderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** wird als jedes Paar entgegengesetzter Übergänge definiert, die ein gesättigtes Rot betreffen.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 versammelte die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle zu entwickeln, der besagt: _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtkraft von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradian (ungefähr 10 % des zentralen Gesichtsfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko an sich dar: "_Unabhängig von der Leuchtkraft wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Sowohl die relative" Größe als auch der Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) _"nimmt der kombinierte Bereich von Blitzen, die gleichzeitig auftreten, nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel großen Rechtecks irgendwo auf dem angezeigten Bildschirmbereich ein, wenn die Inhalte bei einer Auflösung von 1024 x 768 Pixeln betrachtet werden."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, ergibt sich aus dem Artikel, der sich mit WCAG 2.3.1 befasst: "_Der 1024 x 768-Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block stellt ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Sichtfeld wird aus den ursprünglichen Spezifikationen entnommen und repräsentiert den zentralen Sehbereich des Auges, in dem Menschen am anfälligsten für Fotoreize sind.)_"

Dieses Pixel-Flächen-Verhältnis berechnet die relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand spielt eine Rolle, weil er das gesamte Sichtfeld beeinflusst. Wenn Zuschauer Augenmasken für Spiele tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, was auf dem Handy, Computer oder Headset erlebt werden kann. Das Anliegen zu blitzenden Bildern in einer Augenmaske wächst, da die Maske den Augen so nahe ist.

Untersuchungen zeigen generell, dass die Nutzung von VR tatsächlich sicherer sein kann als der normale Bildschirmkonsum, dank höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst: _"Die bisher begrenzten verfügbaren Daten zeigen keine besonderen Besorgnisse über Anfälle im Zusammenhang mit VR-Technologie, obwohl sich dies mit mehr Erfahrungen ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbänderungen würden erwartet werden, Anfälle auszulösen, genau wie in der realen Welt."_

(Beachten Sie, dass einige Benutzer den blinkenden Cursor nicht sehen können und möglicherweise Migräne, Bewegungskrankheiten und Desorientierung erleiden, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxeneffekte

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Checks sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkel-Paare von Streifen wahrscheinlich Anfälle provozieren, und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist acht Linien das maximal zulässige, aber wenn es wellt, nicht mehr als fünf Linien.

Parallaxeneffekte können Desorientierung verursachen. Verwenden Sie Parallaxeneffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer die Kontrolle hat, um sie abzuschalten.

"Ein Muster, das das Potenzial hat, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel-Paare in einer beliebigen Orientierung aufweisen. Wenn die hellen und dunklen Streifen jedes Patterns zusammensetzend am Auge aus der minimal erwarteten Betrachtungsdistanz ein fester Winkel von >0,006 Steradianen darstellen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkel-Paare von Streifen zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren zu einem größeren Bereich übergeht, ebenso wie der Kontrast und die räumliche Frequenz von niedrig bis mittel. Es ist auch bekannt, obwohl der Grund dafür nicht verstanden wird, dass der Übergang von einfachen Orientierungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel dem karierten Muster, das entsteht, wenn man einen Satz von Streifen auf den ursprünglichen Satz legt, aber senkrecht zu ihm) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Zugänglichkeit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Webzugänglichkeit und allgemeine Zugänglichkeit.

Wie sich die Farbe in Bezug auf ihren Hintergrund verhält – meist in Bezug auf Kontrast – und wie stark sich die Farbe von Bild zu Bild in der Animation ändert, ist wichtig. Weitere Informationen dazu finden Sie unter [Drei-Blitze-oder-Weniger-Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde gezeigt, dass [einige Farben epileptische Anfälle wahrscheinlicher verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Macht, das Verhalten zu beeinflussen, wurde sogar bei Tieren beobachtet.

- **Tests zur Rotentsättigung:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit entwickelt haben. Der Test zur Rotentsättigung bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für Menschen, die an einer traumatischen Hirnverletzung leiden, [kognitive Funktionen in einer roten Umgebung reduziert sind](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Beeinträchtigung der kognitiven Funktion von Personen mit traumatischer Hirnverletzung in einer roten Umgebung scheint Farbe im roten Spektralbereich besondere Besorgnis und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei Tests mit dem Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Flackern reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/)).

#### Websafe bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das bedeutet _nicht_, dass sie "sicher vor der Auslösung von Anfällen" ist, es bedeutet nur, dass die Farbe "sicher" von der Technologie reproduziert werden kann, die zur Erzeugung von Farben auf Bildschirmen verwendet wird.

## Messen zur Vermeidung von Schäden

Das Messen des Potenzials für Schäden ist ein guter Ausgangspunkt. In Tests berücksichtigte Faktoren umfassen Farbe, Leuchtkraft, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Anleitungen zur Bewertung von Inhalten.

Im August 2004 hielt die Epilepsy Foundation of America einen Workshop ab, um einen Expertenkonsens zu Photosensitiven Anfällen zu entwickeln. Die folgende, fachkundige und autoritative Information stammt von: [Photic- und pattern-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz stellt ein potenzielles Risiko dar, wenn er eine Leuchtkraft von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradianen (ungefähr 10 % des zentralen Gesichtsfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Auch ein Übergang zu oder von gesättigtem Rot wird als Risiko angesehen. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel-Paare von Streifen in jeder Ausrichtung aufweisen. Wenn die hell-dunkel-Streifen eines Musters am Auge aus der minimal erwarteten Betrachtungsdistanz ein fester Winkel von >0,006 Steradianen einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkel-Paare von Streifen umfassen, falls die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Grundsätze sind leichter bei festen Medien anzuwenden, beispielsweise bei einer aufgezeichneten Fernsehsendung, die frameweise analysiert werden kann, als bei interaktiven Medien.

"cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Was bedeutet das für den Webentwickler in Bezug auf Messungen für Farbe, Leuchtkraft und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) stellt es in Bezug zu dem, was wir als Entwickler kennen: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, da ein spezifischer Standard vorausgesetzt wird, der auf Monitoren, Druckern und im Internet verwendet wird, nämlich das **sRGB** (Standard Rot Grün Blau).

> Als Maß für Licht, das pro Einheit Fläche abgegeben wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts zu spezifizieren. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore hat als Ziel 80 cd/m<sup>2</sup>. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Verbraucherschreibtisch-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Der Takeaway ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er leicht aus dem häufig verwendeten Hexcode konvertiert werden kann.

### Physiologie und Psychologie des Menschen als Überlegung

Viele Experten arbeiten daran, umfassend die Arten von Webinhalten zu quantifizieren und zu messen, die als Auslöser für Anfälle dienen können. Damit gesagt, darf nicht vergessen werden, dass Farbe genauso sehr die menschliche Wahrnehmung im Gehirn betrifft, wie es die Lichtmessung betrifft, die von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Variablen gibt es auch physiologische Unterschiede unter uns. Es wird Unterschiede und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, emeritierter Dozent für Informatik an der Cal State University Long Beach, folgendes zur [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html): _"…Die Unterscheidung zwischen Helligkeitsstufen ist nicht tatsächlich linear, wie die HSL-Skala nahelegt; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als gegenüber dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung nicht. Untersuchungen und Diskussionen sind im Gange, wie man die Maschinenmessung von Licht, sobald es von einem Computerbildschirm ausgeht, durch den Abstand zum menschlichen Auge hindurchgeht, gefiltert durch die menschliche Sicht, und dann durch das menschliche Gehirn manipuliert, in Beziehung setzt.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine anormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger vorkommen, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulation."_

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfallsanfällige Person Benutzerzeichnungen unterziehen. Es ist gefährlich. In diesem Sinne kann eine der ethischsten Dinge, die Entwickler und Designer tun können, darin bestehen, Werkzeuge zu verwenden, die von Experten auf dem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten zusammengearbeitet haben, um das Werkzeug zu entwickeln. Zu diesem Zeitpunkt gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und sie haben es sich zur Aufgabe gemacht, es **_kostenlos_** zum Herunterladen bereitzustellen. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung bei der Nutzung: **_Die Verwendung von PEAT zur Bewertung von kommerziell produzierten Materialien für den Fernsehgebrauch, Film, Home-Entertainment oder Gaming-Industrien ist verboten. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des University of Maryland's Photosensitive Epilepsy Analysis Tool zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden können, also bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Zugänglichkeitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung, sicherzustellen, dass wir absichtlich oder unabsichtlich keinen Schaden anrichten. Wenn wir etwas einfügen müssen, das das Potenzial zur Schädigung hat, ist es wichtig, Benutzer von einem unbeabsichtigten Aufeinandertreffen mit dem schädlichen Inhalt abzuhalten und Möglichkeiten bereitzustellen, damit Benutzer Animationen verhindern und kontrollieren können, um potenzielle Schäden zu mildern.

### Was der Webentwickler tun kann

#### Keinen Schaden anrichten

[WCAG-Leitfaden 2.3 Anfälle und Physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Erstellen Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder physische Reaktionen auslösen"_. Fügen Sie keine Animationen ein, die der Benutzer nicht kontrollieren kann. Gestalten Sie nicht mit Mustern, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie eine gif oder png mit Blitzen einfügen müssen, nehmen Sie sie stattdessen in ein Videoformat auf, damit dem Benutzer Steuerungsmöglichkeiten zur Verfügung stehen. Ermöglichen Sie dem Benutzer, es zu umgehen, auszuschalten oder es weniger schädlich zu machen.

#### Verstehen Sie den Missbrauch

Als Entwickler oder Designer fragen Sie sich, ob wirklich blinkende Inhalte auf Ihrer Webseite benötigt werden. Selbst wenn sie richtig behandelt werden, gibt es diejenigen, die möglicherweise anstößige Inhalte von Ihrer Seite herunterladen und sie als Waffe verwenden. Man glaubt, dass der erste dokumentierte Versuch, Computer zur physischen Schadenszufügung über Animationen zu verwenden, am Samstag, dem 22. März 2008 begann: Die Website der Epilepsy Foundation wurde gehackt, indem Posts mit blinkenden Bildern und falsch als hilfreich bezeichnenden Links eingefügt wurden. Benutzer mit Vestibulärstörungen, die auf der Suche nach Hilfe auf der Website waren, wurden beeinträchtigt.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes gif gesendet wurde: das blinkende gif trug die Botschaft, _"Sie verdienen einen Anfall für Ihre Posts"_.

#### Kontrolle der Exposition, Kontrolle des Zugangs

Es ist entscheidend, die Exposition gegenüber der Seite zu kontrollieren, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, dass Sie möglicherweise ein Bild oder eine Animation haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugang dazu, indem Sie zuerst eine Warnung über den Inhalt anzeigen und ihn dann an einer Stelle platzieren, an der der Benutzer sich dafür entscheiden muss, indem er zum Beispiel auf eine Schaltfläche klickt oder sicherstellt, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Berücksichtigen Sie das Setzen von Crawlanweisungen für Suchmaschinen, um anzudeuten, dass sie potenziell gefährliche Ressourcen nicht in ihre Suchindizes aufnehmen sollen.
Sie können dies mithilfe von Metadaten in einem `<meta name="robots">` Element mit restriktiven Regeln wie `noindex, nofollow` tun.
Durch das Nichtindizieren der Seite (`noindex`) und das Nichtverfolgen von Links auf der Seite (`nofollow`) wird die Wahrscheinlichkeit verringert, dass Benutzer über eine Suche darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <body>
    …
  </body>
</html>
```

Für nicht-HTML-Ressourcen können Sie in einem {{httpheader("X-Robots-Tag")}} HTTP-Antwortheader Crawlanweisungen festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich; jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich in der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket bietet die Möglichkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie bei animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z. B. das **NICHT** Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Ein starkes Beispiel dafür, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet das `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/Reference/Properties/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf null für die Anfangsstufe der Animation zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen sowohl stoppen als auch starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls` Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerelemente verfügbar sind

Die Eigenschaft `HTMLMediaElement.controls` spiegelt das HTML-Attribut `controls` wider, das steuert, ob Benutzeroberflächenelemente zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerelemente hat, die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Dasselbe Beispiel auf Audio anwenden:

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

Beachten Sie, dass das Audio in Videos durch das Attribut `muted` im Inhalt gesteuert werden kann, auch wenn der Inhalt im {{HTMLElement('video')}} Element und nicht im {{HTMLElement('audio')}} Element enthalten ist. Dieses Beispiel stammt aus dem Abschnitt über die [stummgeschaltete Medienattribut](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer eine Aktion zum Aufheben der Stummschaltung des Audios durchführt.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu deren Handhabung stark, und deshalb gibt es keine Einheitslösung für das Problem. Dies wird weiter dadurch erschwert, dass sogar die Art und Weise, wie Dateien klassifiziert werden, die Art und Weise, wie sie behandelt werden sollten, kompliziert. Beispielsweise wird das .gif-Dateiformat normalerweise als Bild verstanden, gilt jedoch in einigen Kreisen auch als Videoformat, da es animiert werden kann. Für eine umfassende Auflistung der Medientypen besuchen Sie IANA.org's Seite für Medientypen [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, sie herauszusuchen, sind keine lässige Übung. Sie möchten vielleicht dem [MIME-Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org folgen. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und daher variiert auch die Kontrolle über die Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt über [Grundlagen der Animation](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Standbein in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit dem Bildschirm-Refresh interagiert. Siehe den Artikel, ["Steuerung der fps mit requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Feinheiten der Implementierung von `requestAnimationFrame` vor dem Hintergrund des Bildschirm-Refresh besprochen werden.
- **GIFs (Raster)**: Schwierig zu handhaben, da die Kontrolle über ihre Animation in den gif-Dateien selbst liegt. Informationen zur Kontrolle der Geschwindigkeit von GIFs finden Sie auf der W3C-Seite ["G152: Einstellen animierter gif-Bilder auf Stop nach n Zyklen (innerhalb von 5 Sekunden)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Artikel zu diesem Thema ist, ["Kann man GIF-Animation mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Gilt als Variante, Video-Version von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z. B. eine .webm-Datei) verweisen, die an anderer Stelle existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird von einigen auch als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ist ein textbasiertes offenes Webstandard. Es ist ausdrücklich dafür gemacht, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_. SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Das ist ein Bild, das ein svg als Quelle verwendet">`. Das bedeutet, dass das Erscheinungsbild und die Animation von SVGs über CSS Keyframes und Animationen gesteuert werden können. Für die Interaktion mit JavaScript, siehe die MDN-Dokumente zu [SVG-Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie bei der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann aus denselben Gründen Anfälle auslösen, aus denen sich bewegende Bilder dies tun, meiden Sie daher die Animation Ihres Textes. Es ist eine gute Idee, keinen bewegten Text zu verwenden, da viele Bildschirmleseprogramme keinen bewegten Text lesen können und dies selbst für Menschen ohne Seh- oder Vestibulärprobleme eine schlechte Benutzererfahrung ist.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammen genutzt werden, um dem Benutzer ein leistungsstarkes Erlebnis zu bieten. Wir haben das `animation`-Attribut bereits früher in diesem Dokument erwähnt. Es ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat den Wert `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation stattfinden soll.
- `animation-timing-function`

Das Animationselement ist schon von allein leistungsstark, kann jedoch mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` ein mächtiges Set an Auswahlmöglichkeiten für den Benutzer darstellen. Das Setzen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstelle des Setzens auf `animation: none` und `transition: none` ermöglicht ein Sicherungsnetz, um Probleme zu verhindern, falls es eine Abhängigkeit gibt, dass die Animation läuft.

### JavaScript-Animation

JavaScript wird häufig zur Kontrolle von {{HTMLElement('canvas')}}-Elementen und SVGs verwendet. Der Großteil des JavaScript-Codes, der auf HTML-Videoelemente angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch Audio zu implementieren. Ein Wert von 1,0 ist Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0,5 ist die halbe Geschwindigkeit, ein Wert von 2,0 ist die doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und beinhaltet [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Code-Beispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Methoden ist, mit einem bereits existierenden Bild zu beginnen und es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen – und Größen – in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele dafür, indem mehrere Bildquellen für die Sonne, Erde und Mond verwendet werden, und mehrere Canvas-Methoden, um die Geschwindigkeit und Animation der Erde zu steuern, wie sie um die Sonne kreist und der Mond um die Erde kreist. Benutzen Sie die auf dieser Seite verfügbare Codepen, um `ctx.rotate` im Code zu ändern, um zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut und unbedingt eine blitzende Animation verwenden müssen…

Stellen Sie sicher, dass es eine Steuerung darauf gibt. Stellen Sie sicher, dass es beim ersten Aufruf für den Betrachter ausgeschaltet ist und der Benutzer sich anmelden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das keine dem Benutzer zugänglichen Steuerelemente hat, ist die gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gifs selbst gesteuert. Das Konvertieren eines animierten gifs in ein Video ermöglicht es, Steuerelemente auf die Animation zu legen und gibt dem Benutzer Handlungsmacht. Es gibt viele kostenlose Online-Konverter, z. B. [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Erwartungen der Benutzer festlegen

Geben Sie Benutzern ein Heads-up darüber, was passieren wird, bevor sie auf den Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt Blitzen benötigen, halten Sie es klein. Im Allgemeinen beschränken Sie die Größe des Blitzen auf ein Gebiet von ca. 341 x 256 Pixel oder weniger. Diese Pixelgröße nimmt an, dass sich ein Betrachter in einem typischen Abstand vom Bildschirm befindet. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus kurzer Entfernung, wie in einem VR-Headset, betrachtet wird. WebVR ist eine offene Spezifikation, die es möglich macht, VR im Browser zu erleben. WebVR kann auf dem Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR designen, das eine Augenmaske verwendet, **oder KANN von einer Augenmaske verwendet werden**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild dem Auge eines Benutzers viel näher ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je größer der Kontrast zwischen einer Textfarbe und ihrem Hintergrund (technisch als _Leuchtkraftkontrastverhältnis_ bezeichnet, gemäß W3.org's Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter ist solcher Inhalt zu lesen. Benutzer mit eingeschränkter Sicht schätzen besonders die Anstrengungen, den hohen Kontrast zwischen Text und Hintergrund zu gewährleisten. Wenn jedoch der Inhalt animiert ist, ist es tatsächlich eine Möglichkeit, das Risiko eines Anfalls durch die Animation zu reduzieren, **_den_** Kontrast zu verringern. Reduzieren Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine außergewöhnliche Ressource für traditionelle Bilder. Eine weitere Online-Option für Bilder ist die Webseite pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, starten Sie beispielsweise mit einem, das ein geringeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben ist.

**HTML-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#javascript_2)**

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

#### Vermeiden Sie vollständig gesättigtes Rot für blinkende Inhalte

Wie bereits in diesem Dokument erwähnt, hielt die Epilepsy Foundation of America im August 2004 einen Workshop ab, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Unter ihren Ergebnissen stand die Erkenntnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtkraft von mindestens 20 cd/m2 hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradianen (ungefähr 10 % des zentralen Gesichtsfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet."_ Sie stellen in diesem Konsens auch fest: _"Unabhängig von der Leuchtkraft wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko angesehen."_

### Stellen Sie alternative CSS-Stile bereit

Mit dem Verständnis, dass ein Großteil der Animation und des Blitzens über CSS-Methoden gesteuert werden kann, ist es wichtig, Wege zu erkunden, alternative Optionen den Benutzern zugänglich zu machen und die Steuerung dieser Optionen bequem und sichtbar zu gestalten.

#### Alternative Style Sheets

Moderne Browser zeigen die alternativen CSS in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile offenbart, wenn die Benutzer durch das Menü Ansicht gehen, in anderen werden sie in den Einstellungen angezeigt, manchmal beides. Nicht alle Benutzer wissen, dass sie diese Optionen über den Browser oder die Einstellungen finden können, deshalb ist es eine Überlegung wert, es auf die altmodische Weise zu tun, mit offensichtlichen Schaltflächen oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Dabei wird die Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, oder die Fähigkeit des Benutzers, Präferenzen in den Einstellungen vorzunehmen, nicht beeinträchtigt oder überschrieben.

Wichtig ist, dass bestimmte Benutzer, wie jene, die sich auf Sprachsteuerungssysteme verlassen, oft auf Legacy-Schaltflächen und Links angewiesen sind, da ihre Behinderung sie daran hindert, eine Maus zu benutzen oder von den Touch-Einstellungen auf mobilen Tablets zu profitieren.

Gängige Möglichkeiten, die alternativen Stylesheets in Ihre HTML-Dokumente einzufügen, sind das Verwenden des {{HTMLElement('link')}} Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element, zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}} Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets einzubeziehen, wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}} Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Indem Sie alternative Stylesheets verwenden (vergessen Sie nicht, die Titel hinzuzufügen), bereiten Sie es für Benutzer vor, die in der Lage sind, über ihre Browser alternative Stile zu wählen.

### Dynamisch Styles umschalten

Ein Problem beim Verlassen auf den Browser, um alternative Stile anzuzeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder aufgrund ihrer Behinderung sind nicht in der Lage dazu. Schaltflächen oder Links machen es vielen dankbaren Anwendern offensichtlich, dass Optionen zur Verfügung stehen. Es gibt eine Vielzahl von Möglichkeiten, Umschalt-Schaltflächen hinzuzufügen, um dem Benutzer den Wechsel zu den verschiedenen Stylesheets zu ermöglichen. Das Verwenden alternativer Stylesheets ist nicht die einzige Option. Eine weitere Option besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo möglich, ist es wirklich beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet kontrolliert werden kann"._ Eines der besten Beispiele überhaupt, wie man dies tut, ist auf der Seite von W3C, ["C29: Verwendung eines Style-Switchers, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das das Anzeigen von Bildern verhindert, ist einfach zu erstellen. Es ist eine drakonische Lösung, aber es ist eine, die manchmal für Lehrer und andere öffentliche Bedienstete notwendig ist, die diejenigen bedienen müssen, die extrem empfindlich sind. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu entwickeln, das `display: none` verwendet. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Medienabfragen mit {{HTMLElement('style')}}

Indem Sie Medienabfragen einrichten, ermöglichen Sie es den Benutzern, Steuerelemente über den Browser oder im OS verfügbar zu machen. Siehe das MDN-Dokument [Zugänglichkeit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details zu erfahren, wie ein Benutzer auf die Steuerelemente zugreifen kann.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

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

Dies kann nützlich sein, wenn die API für Umgebungslicht nicht verfügbar ist. Unterstützung ist im Entstehen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Werkzeug für Entwickler verfügbar über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger flackert er. Der Großteil moderner Technologie aktualisiert mit einer Rate, die keine Probleme mit Photosensitivität verursacht. Jedoch ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: Ältere oder schwach ausgestattete Computer können niedrige Bildwiederholraten haben. [AbilityNet's Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsie und CRT/LCD-Bildschirmflackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort zu den Bildwiederholraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz spürbar und dokumentiert."_
- _"Diese Studien würden darauf hindeuten, dass Sie Bildwiederholraten unter 70 Hz vermeiden sollten und eine Rate verwenden, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung der Aktualisierungsfunktion, die in Kombination mit der Animation-Dauer oder der Übergangs-Dauer zu einer Rate endet, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Bildwiederholungsproblem. Die untenstehende CSS ist aus dem CSS-Tricks-Artikel ["Erneute Betrachtung von prefers-reduced-motion, die reduzierte Bewegungsabfrage"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Die [`update`](/de/docs/Web/CSS/@media/update)-Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, den Inhalt verändern zu können, nachdem er gerendert wurde. Sie hat die Werte "none", "slow" und "fast".

## Entwicklungs- & experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Ebenen in Bezug auf eine Lichtstärkemessung zu definieren, weil Geräte mit Lichtsensor die Bildschirmhelligkeit normalerweise automatisch anpassen. Die Spezifikationen erwähnen auch den Unterschied in der Technologie, wie zum Beispiel E-Ink, das im hellen Tageslicht lesbar bleibt im Vergleich zu Flüssigkristallen, die nicht lesbar bleiben.
- `environment-blending`
  - : Aus dem W3C-Dokument im Entwurfsstadium, Media Queries Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfunktion wird verwendet, um die Charakteristiken des Benutzerdisplays abzufragen, so dass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen und/oder das Layout der Seite abhängig von der Displaytechnologie anzupassen, um die Anziehungskraft zu steigern oder die Lesbarkeit zu verbessern."_

#### Nutzerpräferenz-Medienfunktionen (Geplant in Media Queries Level 5)

[Nutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um Benutzern Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [Nutzerpräferenz-Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfunktion gibt an, ob der Inhalt normal angezeigt wird oder ob die Farben invertiert wurden."\_
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), erzwingt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf der Seite und überschreibt die vom Autor gewählten Farben. Aus dem W3C-Entwurfsdokument, Media Queries Level 5-Abschnitt über erzwungene Farben: _"Die erzwungenen Farben-Medienfunktion wird verwendet, um zu erkennen, ob der Benutzeragent einen [erzwungenen Farbmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine vom Benutzer gewählte eingeschränkte Palette auf der Seite erzwingt"._ Der Benutzer muss sich dieser Fähigkeit bewusst gemacht werden, und sie muss mit dem passenden Wert für die Abfrage `prefers-color-scheme` zusammenarbeiten.
- `light-level`
  - : Aus dem W3C-Entwurfsdokument, Media Queries Level 5-Abschnitt über das Lichtniveau: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfunktion wird verwendet, um das Umgebungslichtniveau abzufragen, in dem das Gerät betrieben wird, um dem Autor zu erlauben, den Stil des Dokuments als Reaktion anzupassen."_ Dies wird eine Wohltat sein für Menschen, die Probleme mit den motorischen Fähigkeiten haben, oder für einige mit kognitiven Schwierigkeiten, die den richtigen "Button" nicht finden können, um sie auf ihrem Bildschirm einzustellen.
- prefers-contrast
  - : Aus dem W3C-Entwurfsdokument, Media Queries Level 5-Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die Medienfunktion `prefers-contrast` wird verwendet, um zu ermitteln, ob der Benutzer das System gebeten hat, den Unterschied im Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Beispielsweise haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen geringen Kontrast zum Hintergrund aufweist, und würden einen stärkeren Kontrast bevorzugen."_ Manchmal kann es zu viel Kontrast geben; ein Halo-Effekt um Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Die Kontrolle über die Menge des Kontrasts in die Hände des Benutzers zu legen, ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 der CSSWG.org-Entwürfe integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Weitere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Anpassung Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft stammt von [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation).

**Anforderung:** Manche Benutzer können keinen nicht-wörtlichen Text und keine Symbole, wie Metaphern, Idiome usw., verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht-wörtlich kennzeichnen und dem Autor ermöglichen, Benutzern nicht-wörtlichen Text und Bilder zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung von dynamischen Stilinformationsanwendungen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit WCAG 2.0 Blitzdefinition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis von 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht in die Fotosensitivität bringen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Individuen sind mit einer besonderen Empfindlichkeit gegenüber blitzenden Lichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettern geboren. Aufgrund dieser Bedingung produziert ihr Gehirn anfallsähnliche Entladungen, wenn es dieser Art der visuellen Stimulation ausgesetzt ist."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flimmern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blitzende oder flimmernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster ausgelöste Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -verwaltung — Teil 2-2: Farbverwaltung — Erweiteter RGB-Farbraum — scRGB

### Analysewerkzeug für fotosensitive Epilepsie

Neben dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfällessicherer Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erläuterung](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, aber enthält einige Erklärungen von in den WCAG 2.1-Kriterien genannten Referenzen)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Richtlinien zur Barrierefreiheit von Web-Inhalten (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition von relativer Leuchtdichte
