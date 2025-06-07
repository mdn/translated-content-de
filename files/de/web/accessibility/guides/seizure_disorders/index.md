---
title: Web-Accessibility für Krampfanfälle und physische Reaktionen
short-title: Vorbeugung von Krampfanfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Dieser Artikel führt in die Konzepte ein, wie Webinhalte für Menschen mit vestibulären Störungen zugänglich gemacht werden können, und wie man Inhalte misst und verhindert, die zu Krampfanfällen und/oder anderen physischen Reaktionen führen können.

## Überblick

### Krampfanfälle

Krampfanfälle, die durch Licht verursacht werden, sind bekannt als photosensible Epilepsie. Inhalte, die flackern, blinken oder blitzen, können photosensible Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die möglicherweise Krampfanfälle oder andere schwerwiegende physische Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen auslösen, selbst wenn sie nicht animiert sind. Photosensible Epilepsie ist tatsächlich eine Art von "Reflex-Epilepsie"—Krampfanfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall von photosensibler Epilepsie werden Krampfanfälle spezifisch durch blitzende Lichter ausgelöst, aber andere Arten von Reflex-Epilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Krampfanfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma Oscillations und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen festgestellt wird, "_Bestimmte visuelle Bilder, auch ohne Bewegung oder Flimmern, können bei Patienten mit photosensibler Epilepsie Krampfanfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel, ["Licht auf eine der komplexesten Bedingungen der Epilepsie werfen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster aus erkennbaren hellen und dunklen Streifen haben die gleiche Wirkung wie blitzende Lichter, da die dunklen und hellen Bereiche abwechseln._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Krampfanfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in jeglicher Orientierung zählen_". Neben Streifen sind auch karierten Muster bekannt, photosensible Krampfanfälle auszulösen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut bekannt und stark ist, sind blitzende/stroboskopartige Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest, _"Das Einzige, was wirklich dokumentiert ist, sind blitzende Lichter, die bei Patienten mit photosensibler Epilepsie Krampfanfälle auslösen können. Nur wenige Arten von Epilepsien sind jedoch photosensibel, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Krampfanfällen, die durch Photosensibilität verursacht werden, kann das Hören bestimmter Musikstücke ebenfalls sogenannte musikogene Krampfanfälle auslösen, obwohl diese Art von Krampfanfällen offenbar viel seltener sind. Für eine großartige Einführung in das Thema musikogene Krampfanfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musikogenen Krampfanfällen](https://epilepsyontario.org/musicogenic-seizures/).

Krampfanfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Krampfanfall ein Ereignis ist und Epilepsie die Erkrankung, die durch wiederkehrende unprovozierte Krampfanfälle gekennzeichnet ist_". Laut der Seite der Epilepsy Foundation ["Wie ernst sind Krampfanfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), "_ist der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste erkrankungsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich dessen Risiko bewusst sein_".

Der Punkt ist, dass Krampfanfälle definitiv tödlich sein können und es auch oft sind, und dass Entwickler und Designer eine unglaublich wichtige Rolle dabei spielen, das Web sicherer für Menschen mit Sensibilitäten gegenüber photosensiblen oder musikogenen Auslösern zu machen.

Krampfanfälle können tödlich sein, aber auch solche, die "nur" schwächend sind, können so schwerwiegend sein, dass sie den Benutzer arbeitsunfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation ["Photosensibilität und Krampfanfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei photosensiblen Personen Krampfanfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder der rollenden Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder alternierenden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplicht wie visuelle Feuermelder.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser glitzert, durch Bäume flackert oder durch die Lamellen von Jalousien fällt.
- Bestimmte visuelle Muster, insbesondere Streifen in kontrastierenden Farben.

In demselben Artikel wird fortgeführt, dass viele Faktoren zusammenkommen müssen, um die photosensible Reaktion auszulösen. Hervorzuheben ist, dass es die Wellenlänge des Lichts als möglichen Faktor betrachtet; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Verständnis der WCAG 2.0 Drei-Blitze-oder-unter-Schwelle"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein darauf hingewiesen: _"Individuen mit photosensiblen Krampfleiden können einen Krampfanfall durch Inhalte bekommen, die mit bestimmten Frequenzen für mehr als ein paar Blitze blitzen"_ und es wird sehr spezifisch bemerkt, dass: "_Menschen sind gegenüber rot blinkendem Licht empfindlicher als gegenüber anderen Farben, sodass ein spezieller Test für gesättigtes rotes Blinken bereitgestellt wird_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Helligkeit mit hoher Frequenz ändert, was leicht über JavaScript gemacht werden kann, kann echten Schaden verursachen. Und Flimmern kann überall auftreten. Zum Beispiel "Spinner", die häufig verwendet werden, um anzuzeigen, dass Seiten geladen werden, können leicht "flimmern", während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. So stellt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"Photosensitive Krampfanfälle durch bestimmte Arten von Flackern im Web- oder Computerinhalt hervorgerufen werden können, einschließlich Mouse-overs, die große Bereiche des Bildschirms wiederholt schnell an- und ausschalten"_.

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten verbunden sind und nicht besonders suggestiv für Krampfanfälle sind (außer vielleicht Desorientierung, die bei Krampfanfällen zu sehen ist). Krampfanfälle sind jedoch nicht die einzige negative physische Reaktion, die durch Flackern, Blinken, Blitzen und andere derartige Reize möglich ist. 1997 enthielt ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Krampfanfällen, andere litten an Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie handlungsunfähig machen.

- Krampfanfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz größer als 3 Hz (Flimmern pro Sekunde) und niedriger als 55 Hz. Der Artikel der Epilepsy Foundation ["Licht auf Photosensibilität, eine der komplexen Bedingungen der Epilepsie werfen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"Allgemein gesagt, blinken Lichter mit Frequenzen zwischen fünf und 30 Blitzen pro Sekunde (Hertz) höchstwahrscheinlich Krampfanfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass fotosensible Personen nicht mehr als dreimal pro Sekunde Blitzen ausgesetzt werden sollten."_ Für einige Menschen kann Blitzen/Blinken jedoch Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinken schlecht sind. NASA stellt in ihrem Dokument ["Blinken, Blitzen und zeitliche Reaktion"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge sein können, um Aufmerksamkeit zu erregen—wie es für Warntasten notwendig ist (das setzt voraus, dass Benutzer den Bildschirm sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Tasten auch, dass sie mit Vorsicht und sparsam eingesetzt werden müssen. Im Hinblick auf das Webdesign müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "entführen", um eine blinkende Notfallwarnung bereitzustellen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen angezeigt werden.

### Blitzen und Flackern—Wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- und pattern-induzierte Krampfanfälle: Expertenkonsens der Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x), "_Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtkraft von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradianen einnimmt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)._

Wie weit ist eine typische Betrachtungsentfernung? Die Empfehlung, die zum Zeitpunkt des Schreibens in Betracht gezogen wurde, war "_der Bereich kann als für einen Bereich >25% der Fläche eines Fernsehbildschirms angesehen werden, bei Annahme von Standard-Betrachtungsabständen von ≥2 m (∼9 Fuß)"_. Seitdem hat sich viel geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Bestimmte Farben lösen laut Forschern eher epileptische Anfälle aus"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"...die Komplexitäten, die der Hirndynamik zugrunde liegen, durch bestimmte Farbkombinationen stärker als durch andere moduliert werden können, zum Beispiel verursacht ein rot-blauer Flimmerreiz eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und Rotblitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird definiert als ein Paar gegensätzlicher Änderungen in der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wo ein "Paar gegensätzlicher Änderungen" eine Erhöhung gefolgt von einer Verringerung oder eine Verringerung gefolgt von einer Erhöhung ist;
- Ein **roter Blitz** wird definiert als jedes Paar gegensätzlicher Übergänge, die einen gesättigten Rotton betreffen.

Diese Standards basieren auf früheren Forschungen. 2004 organisierte die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu photosensiblen Krampfanfällen zu entwickeln und stellte fest: "_Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtkraft von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradianen einnimmt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)._ Der Übergang zu oder von gesättigtem Rot ist wichtig und stellt für sich genommen ein Risiko dar: "_Unabhängig von der Leuchtkraft wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Entfernung

#### Wie groß? Es kommt darauf an

"Relative" Größe und Entfernung spielen beide eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/), _"Die kombinierte Fläche von Blitzen, die gleichzeitig auftreten, nimmt nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel großen Rechtecks irgendwo auf der angezeigten Bildschirmfläche ein, wenn der Inhalt bei einer Auflösung von 1024 auf 768 Pixel betrachtet wird."_

Der Punkt, dass das Gesichtsfeld eine wichtige Überlegung ist, ergibt sich im Artikel zur WCAG 2.3.1 weiter: "_Der Bildschirm mit 1024 x 768 Pixeln wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block repräsentiert einen 10-Grad-Blickwinkel bei einer typischen Betrachtungsentfernung. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehbereich des Auges, wo Menschen am anfälligsten für fotografische Reize sind.)_"

Dieses Pixel-Flächenverhältnis berechnet die relative Größe, aber auch die Entfernung spielt eine Rolle.

Die Entfernung spielt eine Rolle, weil sie das gesamte Gesichtsfeld beeinflusst. Wenn Betrachter bei Spielen Augenmasken tragen, wird das Gesichtsfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die das Erleben von VR in Ihrem Browser ermöglicht und auf Telefon, Computer oder Headset erlebbar ist. Die Sorge um blinkende Bilder in einer Augenmaske wächst, da die Maske den Augen so nahe ist.

Die Forschung deutet allgemein darauf hin, dass die Nutzung von VR tatsächlich sicherer sein könnte als der normale Bildschirmkonsum, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, _"Die bisher begrenzt verfügbaren Daten wecken keine besonderen Bedenken hinsichtlich Krampfanfällen im Zusammenhang mit VR-Technologie, obwohl sich diese Ansicht mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbänderungen, würden voraussichtlich Krampfanfälle auslösen, genauso wie sie es in der realen Welt tun würden."_

(Hinweis: Einige Nutzer können den Bildschirm nicht mit blinkenden Cursor sehen und könnten Probleme wie Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bildschirmbereich einnehmen.)

### Muster und Parallaxeneffekte

Kontrastreiche dunkle und helle geometrische Muster sind als Auslöser bekannt; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Krampfanfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist die höchst zulässige Anzahl acht Linien. Wenn es sich jedoch wellenförmig bewegt, dürfen es nicht mehr als fünf Linien sein.

Parallaxeneffekte können Desorientierung verursachen. Verwenden Sie Parallaxeneffekte mit Vorsicht; wenn Sie sie verwenden müssen, geben Sie dem Benutzer eine Steuerung, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Krampfanfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in jeglicher Orientierung zählen. Wenn die Hell-Dunkel-Streifen eines Musters zusammen genommen aus der minimal erwarteten Betrachtungsentfernung der Muster aus der Augenperspektive einen soliden Winkel von >0.006 Steradianen einnehmen und die Leuchtkraft des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s dargestellt wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, flackern oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder sich in eine Richtung gleichmäßig bewegt, nicht mehr als acht Streifen.

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Kennzahlen kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren Bereich zu einem größeren wechselt, sowie das Erhöhen des Kontrasts und die Erhöhung der räumlichen Frequenz von niedrig auf mittel. Es ist auch bekannt, obwohl der Grund dafür nicht verstanden wird, dass der Wechsel von einfachen Ausrichtungen (z. B. Streifen) zu einer mehrfachen (z. B. das Karo-Muster, das entsteht, wenn man eine Reihe von Streifen auf die ursprüngliche Reihe legt, aber senkrecht dazu) das Gehirn beeinträchtigt.

### Farben

Das Verständnis von Farben ist wichtig für die Barrierefreiheit. Siehe [Verstehen von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf Web-Accessibility und Barrierefreiheit im Allgemeinen bezieht.

Wie die Farbe sich auf ihren Hintergrund bezieht—gewöhnlich im Hinblick auf den Kontrast eingerahmt—und wie drastisch sich die Farbe im Animationsbild von Rahmen zu Rahmen ändert, ist wichtig. Weitere Informationen hierzu finden Sie in [Drei Blitze oder unterhalb der Schwelle - verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde nachgewiesen, dass [einige Farben epileptische Anfälle eher verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Macht, das Verhalten zu beeinflussen, wurde sogar bei Tieren bemerkt.

- **Tests zur Rotentsättigung:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test dafür entwickelt haben. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rotes Umfeld:** Studien haben gezeigt, dass bei Personen, die ein Schädel-Hirn-Trauma erlitten haben, [die kognitive Funktion in einem roten Umfeld reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit Schädel-Hirn-Trauma beeinflusst, scheint die Farbgebung im roten Wellenbereich besondere Bedenken und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei Tests mit dem Photosensitive Epilepsy Analysis Tool fest, dass die Krampfanfälle viel höher waren als erwartet. Sie stellten fest, dass wir viel sensibler auf gesättigtes rot blinkendes Licht reagieren. (Sehen Sie sich das Video an, [Das Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### "Websafe" bedeutet nicht "krampfsicher"

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das bedeutet _nicht_, dass sie "sicher im Sinne von Nichtverursachung von Krampfanfällen" ist, sondern nur, dass die Farbe "sicher" von der Technologie reproduziert werden kann, die zur Erzeugung von Farben auf Bildschirmen verwendet wird.

## Messen, um Schäden zu verhindern

Das Messen des Potenzials für Schäden ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Leuchtdichte, Größe, Kontrast und bei Animationen die Frequenz. WCAG 2.1 bietet Orientierungshilfe zur Bewertung von Inhalten.

Im August 2004 organisierte die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu photosensiblen Krampfanfällen zu entwickeln. Die folgende, fachkundige und autoritative Information stammt von: [Photic- und pattern-induzierte Krampfanfälle: Expertenkonsens der Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtkraft von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0,006 Steradianen einnimmt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Krampfanfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in jeglicher Orientierung zählen. Wenn die Hell-Dunkel-Streifen eines Musters zusammen genommen aus der minimal erwarteten Betrachtungsentfernung einen soliden Winkel von >0.006 Steradianen ausmachen, die Leuchtkraft des hellsten Streifens >50 cd/m² beträgt, und das Muster für ≥0,5 s dargestellt wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, flackern oder den Kontrast umkehren; wenn das Muster unverändert oder glatt in eine Richtung driften, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden bei fixierten Medien, beispielsweise einer vorab aufgenommenen TV-Show, die Frame-für-Frame analysiert werden kann, im Vergleich zu interaktiven Medien.

Der "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also, für den Webentwickler, wie bezieht sich das auf Messungen für Farbe, Leuchtkraft und Sättigung?

Candela ist eine SI-Einheit (Internationales Einheitensystem) für Lichtstärke. Es handelt sich um einen photometrischen Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es vom menschlichen Auge wahrgenommen wird. Wikipedia's Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Bezug zu dem, was wir als Entwickler mit RGB bekannt. Dies ist hilfreich, weil auf Monitoren, Druckern und dem Internet ein spezifischer Standard vorausgesetzt wird, der **sRGB** (Standard Rot Grün Blau) ist.

> Als Maß für Licht, das pro Flächeneinheit ausgestrahlt wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Consumer-Desktop-[Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtkräfte von 200 bis 300 cd/m<sup>2</sup>. [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) liegen im Bereich von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Fazit ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungs-Tools und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code umgewandelt werden kann.

### Physiologie und Psychologie des Menschen als Überlegung

Viele Experten arbeiten daran, den Umfang und die Art von Webinhalten zu quantifizieren und zu messen, die Auslöser für Krampfanfälle sein können. Davon abgesehen, darf nicht vergessen werden, dass Farbe ebenso sehr um die menschliche Wahrnehmung im Gehirn geht, wie sie um die Messung von Licht geht, das von einem Computerbildschirm kommt.

Neben den psychologischen Variabilitäten gibt es auch physiologische Unterschiede unter uns. Es wird Variabilitäten und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Beispielweise hebt Tom Jewett, emeritierter Dozent für Informatik an der Cal State University Long Beach, folgendes zur [Beleuchtung im HSL-Farbschema](https://colortutorial.design/hsb.html) hervor: _"Die Unterscheidung zwischen Helligkeitsniveaus ist nicht tatsächlich linear, wie das HSL-Schema suggerieren würde; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber das menschliche Sehen und die menschliche Wahrnehmung nicht. Die Untersuchung und Diskussion darüber, wie man die maschinelle Messung des Lichts, wie es von einem Computerbildschirm durch den Abstand zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann im menschlichen Gehirn manipuliert, in Beziehung setzt, wird weiter fortgesetzt.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Licht auf eine der komplexesten Bedingungen der Epilepsie werfen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), "_sind Kinder und Jugendliche anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Krampfanfall tritt fast immer vor dem 20. Lebensjahr auf"_. Der Artikel folgt mit dieser Statistik: "_Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Krampfanfälle bei Jungen häufiger sind, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulationen."_

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfällig für Krampfanfälle vorhandene Person für Benutzertests gefährden. Es ist gefährlich. In diesem Sinne ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Verwendung von Tools, die von Fachleuten auf diesem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat mit dem [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) einen Goldstandard gesetzt und es bewusst **kostenlos** zum Download zur Verfügung gestellt. Mit PEAT können Autoren feststellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Krampfanfälle auslösen. Bitte beachten Sie die Einschränkung für die Verwendung: **Die Verwendung von PEAT zur Bewertung von Materialien, die kommerziell für das Fernsehen gesendet, Film, Unterhaltung zu Hause oder für die Glücksspielindustrie produziert wurden, ist untersagt. Für kommerzielle Zwecke verwenden Sie den Harding-Test oder andere Tools.**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Accessibility-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, sicherzustellen, dass wir keinen Schaden sowohl absichtlich als auch unabsichtlich verursachen. Wenn wir etwas einschließen müssen, das das Potenzial hat, Schaden zu verursachen, ist es entscheidend, Benutzer davor zu bewahren, die schädlichen Inhalte zufällig zu erleben, und Wege zur Verfügung zu stellen, wie Benutzer Animationen steuern und verhindern können, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG Leitfaden 2.3 Krämpfe und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie keine Inhalte so, dass sie bekanntermaßen Krämpfe oder physische Reaktionen hervorrufen"_. Schließen Sie keine Animation ein, die der Benutzer nicht steuern kann. Entwerfen Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie ein GIF oder PNG mit Flimmern einbinden müssen, nehmen Sie stattdessen eine Aufnahme im Videoformat vor, damit dem Benutzer Steuerungen zur Verfügung stehen. Ermöglichen Sie dem Benutzer die Möglichkeit, es zu umgehen, auszuschalten oder es weniger schädlich zu machen.

#### Verstehen von Böswilligkeit

Als Entwickler oder Designer fragen Sie sich selbst, ob blitzende Inhalte wirklich auf Ihrer Webseite sein müssen. Auch wenn sie richtig gehandhabt werden, gibt es Menschen, die störende Inhalte von Ihrer Seite herunterladen und bewffnen können. Man glaubt, dass der erste dokumentierte Versuch, Computer zur körperlichen Schädigung durch Animation einzusetzen, am Samstag, dem 22. März 2008 begann: Die Website der Epilepsy Foundation wurde über Beiträge mit blitzenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, wurden betroffen.

Eine Reihe rechtlicher Überlegungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Krampfanfall erlitt, nachdem er im Dezember 2016 ein animiertes Gif erhalten hatte: das blinkende GIF trug die Nachricht, _"Sie verdienen einen Krampfanfall für Ihre Beiträge"_.

#### Belichtung kontrollieren, Zugang kontrollieren

Das Steuern der Belichtung auf die Seite ist der Schlüssel, um sicherzustellen, dass jemand, der anfällig für Krampfanfälle ist, nicht versehentlich darauf stösst. WCAG stellt fest, dass ein einziges Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die Krämpfe verursachen könnte, steuern Sie den Zugang dazu, indem Sie zuerst eine Warnung über den Inhalt anzeigen und ihn dann an einem Ort platzieren, an dem der Benutzer darauf zugreifen muss, wie z.B. durch Klicken auf eine Schaltfläche oder durch Sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung hat.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indexiert wird.

#### Nicht Indizieren, Nicht Folgen

Indem Sie die Seite nicht indexieren, wird die Wahrscheinlichkeit verringert, dass Benutzer über die Suche darauf stossen.

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

- Das npm-Paket [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht die Bestimmung einer Animation _so früh wie möglich_ in einem bestimmten HTTP-Antrag.
- Zakirt bietet einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer eine Taste drücken oder ein Feld ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs, muss der Benutzer eine Taste drücken oder ein Feld ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, z.B. NICHT das Attribut [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) zu `<video controls>` hinzuzufügen, oder {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand zu setzen. Um ein mächtiges Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet das `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Benutzererfahrung zu schaffen, die der Benutzer kontrollieren kann.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für das anfängliche Stadium der Animation auf Null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen ebenso stoppen wie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Video-Element hinzufügen, damit der Benutzer das Video ebenso stoppen wie starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das steuert, ob Benutzeroberflächenelemente für die Wiedergabe des Medienartikels angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen hat, die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zum HTML-Video- und Audioset über den Elementen hinzufügen.

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

Das gleiche Beispiel auf Audio anwenden:

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

Beachten Sie, dass das Audio in Videos durch das `stumm` Inhaltsattribut gesteuert werden kann, obwohl der Content im {{HTMLElement('video')}}-Element und nicht im {{HTMLElement('audio')}}-Element ist. Dieses Beispiel stammt aus dem Abschnitt über [stummgeschaltetes Medienattribut](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer eine Aktion ausführt, um den Ton zu aktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Das scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zur Handhabung davon erheblich, und deshalb gibt es keine Einheitslösung für das Problem. Das wird weiter durch die Tatsache erschwert, dass selbst die Klassifizierung von Dateien verkompliziert, wie sie gehandhabt werden sollten. Beispiel: Das .gif-Dateiformat wird in der Regel als Bild verstanden, gilt in einigen Kreisen jedoch auch als Video-Dateiformat, da es animiert werden kann. Für eine umfassende Liste von Medientypen besuchen Sie bitte die Seite für Medientypen von [IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie zu erkennen, sind keine beiläufige Übung. Vielleicht sind Sie daran interessiert, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/)-Standard auf whatwg.org zu verfolgen. Praktisch jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und dementsprechend auch die Kontrolle über die Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt über [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Standbein in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit dem Bildschirmaktualisierungsintervall interagiert. Siehe den Artikel ["Steuerung der Bildrate mit requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie die technischen Optionen für die Implementierung von `requestAnimationFrame` im Gegensatz zum Bildschirmaktualisierungsintervall erörtern.
- **GIFs (Raster)**: Schwer zu cracken, da die Steuerung ihrer Animation innerhalb der gif-Dateien selbst liegt. Für Informationen zur Steuerung von GIF-Animationen siehe W3C's ["G152: Einstellen von animierten GIF-Bildern, um nach n Zyklen (innerhalb von 5 Sekunden) aufzuhören zu blinken"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Können Sie GIF-Animationen mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Gilt als Variante, Videoversion von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm-Datei) verweisen, die andernorts existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-Image Network Graphics ist ein Grafikformat für animierte Bilder. Gilt auch von einigen als Videoformat.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ist ein textbasiertes offenes Web-Standard. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)" zu arbeiten._ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Das bedeutet, dass das Erscheinungsbild von SVG und Animationen über CSS-Schlüsselbilder und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann gleiche Gründe wie bewegte Bilder Krampfanfälle auslösen, so dass die Animation Ihres Textes vermieden wird. Es ist eine gute Idee, bewegten Text zu vermeiden, da viele Bildschirmlesegeräte keinen bewegten Text lesen können und es selbst für Menschen ohne Sehprobleme oder vestibuläre Probleme eine schlechte Benutzererfahrung darstellt.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um dem Benutzer eine kraftvolle Erfahrung zu bieten. Wir haben die `animation`-Eigenschaft früher in diesem Dokument erwähnt. Sie ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die Animationseigenschaft ist bereits von alleine mächtig, aber in Kombination mit anderen Eigenschaften und Anfragen wie `prefers-reduced-motion`, kann für den Benutzer ein mächtiges Set von Optionen eingerichtet werden. Das Setzen von `animation-duration` und `transition-duration` auf einen kurzen Zeitraum anstelle von `animation: none` und `transition: none`, ermöglicht eine Schutzvorrichtung, um Probleme in jedem Fall zu vermeiden, bei dem die Abhängigkeit auf die Animation angewiesen ist.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der meiste JavaScript-Code, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Abspielgeschwindigkeit sowohl von Video als auch von Audio zu implementieren. Ein Wert von 1,0 gilt als Standard und wird als normale Geschwindigkeit angesehen; ein Wert von 0,5 ist die halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Stellen Sie die Abspielgeschwindigkeit ein: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite über [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet folgendes Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Eine der einfachsten Möglichkeiten besteht darin, mit einem Bild zu beginnen, das bereits existiert, es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie hier GIFs, JPGs, PNGs, SVGs und andere Dateiformate als Bildquelle verwenden können, solange diese zulässige Dateitypen—und Größen—in Ihrem Umfeld sind. SVGs werden häufig nicht zugelassen, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele dafür, indem mehrere Bildquellen für die Sonne, Erde und Mond verwendet werden und verschiedene Canvas-Methoden benutzt werden, um die Geschwindigkeit und Animation der Erde, während sie sich um die Sonne dreht, und des Mondes, während er sich um die Erde bewegt, zu steuern. Verwenden Sie das codepen, das mit diesem Tutorial verfügbar ist, um `ctx.rotate` im Code anzupassen, um zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut zwingend eine blitzende Animation verwenden müssen

Stellen Sie sicher, dass sie über eine Steuerung verfügt. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter ihr erstmals begegnet und dass der Benutzer einwilligen muss, um die Animation zu sehen.

Ein Beispiel für ein Format, bei dem dem Benutzer keine Steuerungen zur Verfügung stehen, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Das Konvertieren eines animierten gifs in ein Video ermöglicht es, Steuerungen auf die Animation zu setzen und gibt dem Benutzer Handlungsspielraum. Es gibt viele kostenlose Online-Konverter zur Verfügung wie [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen festlegen

Geben Sie den Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Sehen Sie [WCAG 2.1 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt blitzen müssen, halten Sie es klein. Im Allgemeinen begrenzen Sie die Größe des Blitzes auf einen Bereich von ca. 341 x 256 Pixeln oder weniger. Diese Pixelgröße setzt voraus, dass ein Betrachter in typischem Abstand zum Bildschirm ist. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus nächster Nähe betrachtet wird, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die das Erleben von VR in Ihrem Browser ermöglicht. WebVR kann auf Telefonen, Computern oder Headsets erlebt werden.

Wenn Sie für ein Spiel oder VR, das ein Augemasken verwendet, **oder von einem Augemaske verwendet KANN**, wie in Firefox Reality (einem Browser für virtuelle Realität), entwerfen, stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Leuchtkraftkontrastverhältnis_ laut W3.org's Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter ist es, solche Inhalte zu lesen. Benutzer mit geringer Sehkraft schätzen insbesondere Anstrengungen, um sicherzustellen, dass der Kontrast von Text zu seinem Hintergrund hoch ist. Wenn der Inhalt jedoch animiert ist, ist das **_Reduzieren_** von Kontrast tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Krampfanfälle verursacht. Reduzieren Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0,05) / (L2 + 0,05), wobei

    - L1 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen, bevor es hochgeladen oder im Internet veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe-Produktsuite eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein online Tool verfügbar ist pinetools.com's [Brightness and contrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, starten Sie zum Beispiel mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Einstellen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

#### Vermeiden Sie gesättigtes Rot für blitzende Inhalte

Wie bereits in diesem Dokument erwähnt, organisierte die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens zu Photosensitiven Krampfanfällen zu entwickeln. Unter ihren Ergebnissen war das Verständnis, dass _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtkraft von mindestens 20 cd/m² hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradianen einnimmt (ungefähr 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko betrachtet."_ In demselben Konsens wird auch darauf hingewiesen: "_Unabhängig von der Leuchtkraft wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko betrachtet."_

### Bieten Sie alternative CSS-Stile an

Mit dem Verständnis, dass ein Großteil von Animationen und Blitzen über CSS-Methoden gesteuert werden kann, ist es wichtig, Möglichkeiten zu erkunden, um alternative Optionen für Benutzer bereitzustellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser werden die alternativen CSS, die in alternativen Stylesheets verfügbar sind, anzeigen, wenn die Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Styles sichtbar, wenn die Benutzer das Menü 'Ansicht' durchgehen, in anderen Fällen sie sich in den Einstellungen manif13stieren, manchmal beides. Nicht alle Benutzer wissen, dass sie durch den Browser oder durch Einstellungen nach diesen Optionen suchen, so dass es sich lohnen könnte, auf die altmodische Art zu arbeiten, mit offensichtlichen Schaltflächen oder Links, um den Stil zu ändern, damit die Benutzer sie sehen können. Ein solches Vorgehen wird nicht mit der Fähigkeit des Browsers, die alternativen Stylesheets zu erkennen, oder der Fähigkeit des Benutzers, Präferenzen in den Einstellungen festzulegen, in Konflikt geraten oder sie überschreiben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die sich auf Sprachsteuerungssysteme verlassen, oft auf Legacy-Schaltflächen und -Links angewiesen sind, weil ihre Behinderung verhindert, dass sie eine Maus benutzen können oder in der Lage sind, Touch-Ereignisse auf mobilen Tablets zu nutzen.

Übliche Wege, um die alternativen Stylesheets in Ihre HTML-Dokumente einzubinden, bestehen darin, das {{HTMLElement('link')}}-Element zu verwenden sowie {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen von `rel="alternate stylesheet"`, und für den Titel `title="…"` im {{HTMLElement('head')}}-Bereich der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit Stylesheets einzubinden, wird jedoch nicht so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) richten Sie es so ein, dass Benutzer in der Lage sein werden, ihre Browser zu verwenden, um alternative Stile zu wählen.

### Dynamisches Style-Switching

Ein Problem mit der Abhängigkeit vom Browser zur Enthüllung alternativer Stile ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder, auf Grund ihrer Behinderung, nicht in der Lage sind. Schaltflächen oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Umschaltknöpfe hinzuzufügen, um Benutzern den Wechseln zu verschiedenen Stylesheets zu ermöglichen. Das gesagt, der Einsatz von alternativen Stylesheets sind nicht die einzige Option. Eine weitere Möglichkeit ist, den Stil der Seite selbst zu manipulieren. Laut dem Dokument von MDN, [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo möglich, ist es wirklich am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet gesteuert werden kann"._ Eines der besten Beispiele, wie dies zu tun ist, stammt von der W3C-Seite ["C29: Verwendung eines Stilswitchers, um eine konforme Alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drakonische Lösung; aber sie ist manchmal notwendig für Lehrer und andere öffentliche Bedienstete, die denjenigen dienen müssen, die extrem empfindlich sind. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Indem Sie Medienabfragen einrichten, ermöglichen Sie Steuerungen durch den Benutzer; diese Steuerungen werden im Browser oder im Betriebssystem verfügbar gemacht. Sehen Sie das MDN-Dokument [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Guides/Browsing_safely) für mehr Details darüber, wie ein Benutzer Zugriff auf die Steuerungen hat.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel für die Verwendung des Codes `prefers-reduced-motion` zu sehen, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen Sie sich das folgende Beispiel aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Dies kann nützlich sein, wenn die Ambient Light-API nicht verfügbar ist. Die Unterstützung ist im Entstehen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Tool für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Szene

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flimmert" er. Die überwiegende Mehrheit der modernen Technologien aktualisiert mit einer Rate, die keine Fotosensibilität verursacht. Doch nicht jeder ist wohlhabend genug, um sich die neueste Technologie leisten zu können: ältere oder leistungsschwächere Computer können niedrige Aktualisierungsraten haben. [AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu den Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsie- und CRT/LCD-Bildschirmflimmern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte einen interessanten Kommentar zu den Aktualisierungsraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz bemerkbar und dokumentiert"._
- _"Diese Studien scheinen darauf hinzudeuten, dass man sich von Aktualisierungsraten unter 70 Hz fernhalten und eine Rate verwenden sollte, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Verwendung des Update-Features, die in Kombination mit Animation-Duration oder Transition-Duration verwendet werden kann, um mit einer Geschwindigkeit abzuschließen, die dem menschlichen Auge nicht wahrnehmbar ist. Mit anderen Worten, Eric's Techniken adressieren das Problem der Aktualisierungsrate. Das untenstehende CSS stammt aus dem CSS-Tricks-Artikel ["Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/@media/update)-Medienfeature wird verwendet, um die Fähigkeit des Ausgabegeräts zu erfassen, das Erscheinungsbild von Inhalten zu verändern, nachdem es gerendert wurde. Es hat die Werte "none", "slow", und "fast".

## Entwicklungs- & Experimentelle Funktionen

### Medienabfragen Level 5

EnvironmentMQ (Geplant in Medienabfragen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Ebenen in einer Luxmessung festzulegen, da Geräte mit einem Lichtsensor die Helligkeit des Bildschirms normalerweise automatisch anpassen. Die Spezifikationen verweisen auch auf den Unterschied in der Technologie, wie etwa E-Ink, das bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die das nicht tun.
- `environment-blending`
  - : Aus dem Entwurf des W3C-Dokuments Medienabfragen Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfeature wird verwendet, um die Eigenschaften des Benutzerdisplays abzufragen, so dass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die Visuals und/oder das Layout der Seite anzupassen, je nachdem, welche Display-Technologie verwendet wird, um die Attraktivität zu steigern oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienfeatures (Geplant in Medienabfragen Level 5)

[Benutzerpräferenz-Medien-Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Benutzern die Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzerpräferenz-Medien-Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "zeigt das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfeature an, ob der Inhalt normal angezeigt wird oder ob Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) zwingt der Browser das vom Benutzer bevorzugte Farbpalette der Seite und überschreibt die vom Autor gewählten Farben. Aus dem Entwurf des W3C-Dokuments Medienabfragen Level 5 Abschnitt über Forced colors: _"Das forced-colors Medienfeature wird verwendet, um zu erkennen, ob der Browser einen [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem es ein vom Benutzer gewähltes, begrenztes Farbpalette auf die Seite angewendet wird."_
- `light-level`
  - : Aus dem Entwurf des W3C-Dokuments Medienabfragen Level 5 Abschnitt über Light-Level: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfeature wird verwendet, um die Umgebungsausleuchtung abzufragen, in der das Gerät verwendet wird, um es dem Autor zu ermöglichen, den Stil des Dokuments in Reaktion darauf anzupassen."_
- prefers-contrast
  - : Aus dem Entwurf des W3C-Dokuments Medienabfragen Level 5 Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Das prefers-contrast Medienfeature wird verwendet, um zu erkennen, ob der Benutzer das System dazu aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Beispiel: viele Benutzer haben Schwierigkeiten, Text zu lesen, der einen geringen Unterschied gegenüber dem Text-Hintergrund aufweist, und möchten einen größeren Kontrast."_

#### `MediaQueryList` Interface

Abschnitt 4.2 der CSSWG.org Entwürfe integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierungshilfe und Unterstützung

Die Anforderung zur `literal`-Eigenschaft wird von [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation) übernommen.

**Anforderung:** Einige Benutzer können nicht verstehen, nichtwörtlichen Text und Symbole wie Metaphern, Redewendungen usw. Die `literal`-Eigenschaft ist dazu gedacht, Text oder Bilder als nichtwörtlich zu kennzeichnen und dem Autor zu ermöglichen, nichtwörtlichen Text und Bilder den Benutzern zu erklären.

#### Übergänge (für CSS und SVG)

Das Folgende ist aus dem [Web Animations Modell](https://www.w3.org/TR/web-animations-1/) CSSWG.org Entwürfen

Das Web Animations Modell ist dazu gedacht, die Funktionen bereitzustellen, die zum Ausdrücken von [CSS Übergängen](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) benötigt werden.

## Siehe auch

### MDN

- [Zugänglichkeit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Zugänglichkeit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farbe Tutorial: Beschreibung von Farbe](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitz-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Ein Licht auf die Fotosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Einige Personen sind von Geburt an besonders empfindlich gegenüber flackerndem Licht oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettmustern. Aufgrund dieser Empfindlichkeit erzeugt ihr Gehirn anfallsartige Entladungen, wenn es solchen visuellem Reiz ausgesetzt wird."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), auch ohne Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch flackerndes oder blinkendes Licht ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht- und Muster verursachte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Zugänglichkeits-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Werkzeug allgemein als eines der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Harding Flash und Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Fotosensitive Epilepsie-Analyse-Tool

Zusammen mit dem Harding-Werkzeug allgemein als eines der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallsfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/). Arbeitsentwurf
- [WAI-Adapt: Werkzeuge Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert, Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält jedoch einige Erklärungen zu in den WCAG 2.1 Kriterien angeführten Referenzen)
- [Verständnis zu Erfolgskriterium 2.3.1: Drei Blitze oder darunter Schwellenwert](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis zu Erfolgskriterium 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web-Zugänglichkeits-Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animationen Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Richtlinien zur Zugänglichkeit von Web-Inhalten (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Richtlinien zur Zugänglichkeit von Web-Inhalten (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Ein herzlicher Dank geht an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program und Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy), für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ dem Trace Research & Development Center außerordentlich dankbar dafür, dass sie ihr erstaunliches Tool, das [Fotosensitive Epilepsie Analyse Tool (PEAT)](https://trace.umd.edu/peat/), kostenlos zur Verfügung stellen.
