---
title: Webzugänglichkeit für Anfälle und physische Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{AccessibilitySidebar}}

Dieser Artikel führt in Konzepte ein, die darauf abzielen, Webinhalte für Menschen mit vestibulären Störungen zugänglich zu machen, sowie in Methoden zur Messung und Vermeidung von Inhalten, die zu Anfällen und/oder anderen physischen Reaktionen führen können.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind bekannt als photosensitive Epilepsie. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, Canvas und CSS oder JavaScript-Animationen verwenden, sind alle in der Lage, Inhalte zu erzeugen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen auslösen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art "reflexartige Epilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall der photosensitiven Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von reflexartigen Epilepsien können durch den Akt des Lesens oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt: "_Bestimmte visuelle Bilder, selbst in Abwesenheit von Bewegung oder Flimmern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Licht ins Dunkel bringen: Photosensitivität, eine der komplexesten Epilepsiebedingung"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder bewegte Muster aus erkennbaren hellen und dunklen Streifen haben denselben Effekt wie blinkende Lichter, da sich dunkle und helle Bereiche abwechseln._" Die Epilepsy Foundation of America Working Group ist in der Lage, das Problem ein wenig zu "quantifizieren": "_Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf Paare aus hell-dunklen Streifen in jeder Ausrichtung aufweisen_". Neben Streifen können auch karierte Muster laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) photosensitive Anfälle auslösen.

Obwohl statische Bilder potenzielle Auslöser sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der Universität von Südflorida bemerkt: "_Nur blinkende Lichter sind wirklich dokumentiert, die Anfälle bei Patienten mit photosensitiver Epilepsie auslösen können. Nur wenige Arten von Epilepsien sind photosensitiv, und die große Mehrheit der Epilepsien ist es nicht._" Zusätzlich zu Anfällen, die durch Photosensitivität verursacht werden, kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen wesentlich seltener zu sein scheint. Für eine gute Einführung zum Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) merkt die Epilepsy Foundation an, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit, die wiederkehrende, nicht provozierte Anfälle umfasst_." Auf der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) heißt es: "_Sudden unexpected death in epilepsy (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich des Risikos bewusst sein_."

Der Punkt ist, dass Anfälle definitiv tödlich sein können, und Entwickler sowie Designer tragen eine enorme Verantwortung, das Web für Menschen mit Empfindlichkeiten gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" beeinträchtigend sind, können so schwer sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwer sein, dass der Benutzer nicht in der Lage ist zu funktionieren. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die Anfälle bei photosensitiven Personen verursachen können; hier ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund von Flimmern oder rollenden Bildern.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskope wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume blinkt oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

In demselben Artikel wird weiter erläutert, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Erwähnenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor eingeschlossen ist; Wellenlängen im roten Spektralbereich scheinen besonders problematisch zu sein. In dem Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt, dass: "_Einzelpersonen mit photosensiblen Anfallsleiden können durch Inhalte, die mit bestimmten Frequenzen mehr als einige Male blinken, einen Anfall erleiden_", und es wird sehr spezifisch darauf hingewiesen, dass "_Menschen sogar empfindlicher auf rotes Blinken reagieren als auf andere Farben, daher wird ein spezieller Test für gesättigtes rotes Blinken bereitgestellt_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es seine Farbe und Helligkeit mit hoher Frequenz ändert, leicht gemacht über JavaScript, kann realen Schaden verursachen. Und Flimmern kann überall auftreten. Beispielsweise können "Spinner", die häufig verwendet werden, um das Laden von Seiten anzuzeigen, leicht "blinken", während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel bemerkt die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), dass "_photosensitive Anfälle durch bestimmte Arten des Flimmerns in Web- oder Computerinhalten provozieren werden können, einschließlich Mauszeiger, die große Bereiche des Bildschirms dazu bringen, schnell ein- und auszuschalten_".

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Vertigo) und Desorientierung sind sehr unspezifische Symptome, die mit allerlei Krankheiten assoziiert werden und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen gesehen wird). Anfälle sind jedoch nicht die einzige negative physische Reaktion, die durch Blinken, Flimmern, Blitzen und andere derartige Reize verursacht werden kann. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten an Übelkeit, Zittern und spuckten Blut. Die Reaktionen der Kinder waren so heftig, dass sie ins Krankenhaus gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie handlungsunfähig macht.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Flimmern & Blitzen

Obwohl "blinken" und "flimmern" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut der W3C stellt Blinken ein Ablenkungsproblem dar, während Flimmern sich auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flimmereffekte mit einer Frequenz über 3 Hz (Flicker pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) stellt fest, "_generell sind blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) höchstwahrscheinlich Auslöser für Anfälle. Um sicher zu sein, wird empfohlen, dass photosensitive Einzelpersonen nicht Blitzen ausgesetzt werden, die mehr als dreimal pro Sekunde auftreten._" Bei manchen Menschen jedoch können Blinken/Flimmern Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinklichter schlecht sind. Die NASA sagt in ihrem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php), dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitssteuerung sein können—wie etwa für notwendige Warnknöpfe (vorausgesetzt, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch davor, dass sie sparsam und mit Bedacht eingesetzt werden müssen. In Bezug auf das Webdesign müssen Systeme, die Unternehmen auf Gefahren aufmerksam machen und den Bildschirm entführen, um mit einem blinkenden Warnhinweis auf eine Notlage aufmerksam zu machen, die Rate, Größe und Helligkeitsveränderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blinken und Flimmern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) gilt ein Blitz als potenziell gefährlich, "_wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradian (etwa 10% des zentralen Sehfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) belegt."_
