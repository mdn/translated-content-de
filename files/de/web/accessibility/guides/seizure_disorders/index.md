---
title: Webzugänglichkeit für Anfälle und physische Reaktionen
short-title: Vermeidung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Dieser Artikel führt in die Konzepte ein, wie Webinhalte für Personen mit vestibulären Störungen zugänglich gemacht werden können und wie man Inhalte misst und verhindert, die Anfälle und/oder andere physische Reaktionen auslösen können.

## Überblick

### Anfälle

Anfälle, die durch Licht verursacht werden, werden als photosensitive Epilepsie bezeichnet. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Videos, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art von "Reflexepilepsie" - Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei photosensitiver Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen festgestellt wird, "_bestimmte visuelle Bilder können, selbst in Abwesenheit von Bewegung oder Flackern, bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster von erkennbaren hellen und dunklen Streifen haben denselben Effekt wie blinkende Lichter, weil sich dunkle und helle Bereiche abwechseln._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in irgendeiner Orientierung umfassen_". Zusätzlich zu Streifen können auch karierte Muster fotosensitive Anfälle verursachen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der wohl etablierte und starke Auslöser sind hingegen flackernde/stroboskopische Lichter. Dr. Selim Benbadis vom umfassenden Epilepsie-Programm der USF stellt fest: _"Das Einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind jedoch photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Photosensitivität hervorgerufen werden, kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen wohl viel seltener auftreten. Für eine großartige Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit mit wiederkehrenden unprovozierten Anfällen ist_". Laut der Epilepsy Foundation-Seite ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"plötzliches unerwartetes Todesfälle bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr echtes Problem und die Menschen müssen sich des Risikos bewusst sein"_.

Der Punkt ist, dass Anfälle definitiv tödlich sein können und sind, und Entwickler und Designer sind unglaublich wichtig, um das Web für Menschen mit Sensibilität gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst die, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle verursachen können; hier ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder abwechselnden Mustern in verschiedenen Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume oder durch die Lamellen von Jalousien flackert.
- Bestimmte visuelle Muster, insbesondere Streifen mit kontrastierenden Farben.

Der gleiche Artikel erklärt weiter, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion zu triggern. Er erwähnt, dass die Wellenlänge des Lichts ein möglicher Faktor ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. In dem Artikel, ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt: _"Personen mit Störungen der photosensitiven Anfälle können durch Inhalte, die mit bestimmten Frequenzen mehr als ein paar Blitze aufweisen, Anfälle auslösen"_ und fügt sehr spezifisch hinzu: "_Menschen sind sogar empfindlicher gegenüber rotem Blitzen als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Sie benötigen nicht einmal ein Bild oder ein Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das mit hoher Frequenz Farbe und Helligkeit ändert, was leicht mit JavaScript gemacht werden kann, kann realen Schaden anrichten. Und Flackern kann überall vorkommen. Beispielsweise können "Spinner", die häufig beim Laden von Seiten angezeigt werden, beim Drehen leicht "flackern".

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Beispielsweise stellt die Seite des Trace Research & Development Center über das [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"photosensitive Anfälle durch bestimmte Arten von Blitzen in Web- oder Computerinhalten provoziert werden können, einschließlich Mouse-Over, die große Bereiche des Bildschirms schnell ein- und ausschalten lassen"_.

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten verbunden sind und nicht besonders auf Anfälle hinweisen (mit Ausnahme von Desorientierung, die bei Anfällen vorkommt). Anfälle sind jedoch nicht die einzige negative physische Reaktion, die durch Blitzen, Flackern, Blinken und andere derartige Reize ausgelöst werden kann. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon schauten, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und blutigem Erbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Folgen: Jede dieser physischen Reaktionen kann so schwer sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "Blitzen" und "Blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen Inhalte betrifft, die mehr als dreimal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz größer als 3 Hz (Flackern pro Sekunde) und niedriger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"im Allgemeinen blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am ehesten Anfälle auslösen. Um sicher zu sein, wird empfohlen, dass photosensitive Personen keinem Blitzen mit mehr als drei Blitzfächer pro Sekunde ausgesetzt werden."_ Bei einigen Menschen können jedoch bereits Blitzen/Blinken bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht alles Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen leistungsstarke Werkzeuge zum Aufmerksamkeitslenken sein können - wie es bei Warnknöpfen erforderlich ist (unter der Annahme, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch, dass sie sparsam und sorgfältig verwendet werden müssen. In Bezug auf Webdesign müssen Systeme, die Firmenmitarbeiter auf Gefahren aufmerksam machen, indem sie den Bildschirm "übernehmen" und ein blinkendes Warnsignal für Notfälle ausgeben, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen angezeigt werden.

### Blitzen und Flackern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitz stellt ein potenzielles Risiko dar, wenn er eine Leuchtdichte von ≥20 cd/m² aufweist, mit einer Frequenz von ≥3 Hz auftritt, und einen soliden Sichtwinkel von ≥0.006 Steradian (ungefähr 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie groß ist ein typischer Betrachtungsabstand? Die Empfehlung für einen typischen Betrachtungsabstand zum Zeitpunkt der Erstellung war "_der Bereich kann als auf eine Fläche >25 % der Fläche eines Fernsehbildschirms angewendet gelten, unter der Annahme standardmäßiger Betrachtungsabstände von ≥2 m (∼9 Fuß)"_. Seitdem hat sich viel geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die der Dynamik des Gehirns zugrunde liegen, durch bestimmte Farbkombinationen stärker moduliert werden können als durch andere, beispielsweise verursacht ein rot-blau flackernder Stimulus eine größere kortikale Erregung als ein rot-grüner oder blau-grüner Stimulus."_

### Blitzen und rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und rote Blitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird als ein Paar entgegengesetzter Änderungen der [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtdichte definiert, wobei die relative Leuchtdichte des dunkleren Bildes unter 0.80 liegt, und wo ein "Paar entgegengesetzter Änderungen" eine Erhöhung gefolgt von einer Verringerung oder eine Verringerung gefolgt von einer Erhöhung ist;
- Ein **rotes Blitzen** wird als jedes Paar entgegengesetzter Übergänge definiert, das einen gesättigten Rotton beinhaltet.

Diese Standards basieren auf früheren Forschungen. 2004 organisierte die Epilepsy Foundation of America einen Workshop, um einen Konsens über photosensitive Anfälle zu entwickeln, der besagt, _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m² hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sichtwinkel von mindestens 0.006 Steradian (über 10 % des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von gesättigtem Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko angesehen._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Sichere" Größe und Entfernung, beides relevant. Laut [PEAT](https://trace.umd.edu/peat/), _"Die kombinierte Fläche der gleichzeitig auftretenden Blitze nimmt nicht mehr als ein Viertel der Fläche eines 341 x 256 Pixel großen Rechtecks irgendwo auf der angezeigten Bildschirmfläche ein, wenn der Inhalt bei 1024 mal 768 Pixeln betrachtet wird."_

Der Punkt, dass das Gesichtsfeld eine wichtige Überlegung darstellt, wird in einem Artikel zu WCAG 2.3.1 ausgeführt: "_Die 1024 x 768 Auflösung wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block stellt ein 10-Grad-Sichtfenster in typischem Betrachtungsabstand dar. (Das 10-Grad-Feld ist aus den ursprünglichen Spezifikationen entnommen und stellt den zentralen Sehbereich des Auges dar, in dem Menschen am anfälligsten für Lichtreize sind.)_"

Dieses Pixel-Flächenverhältnis berechnet sich für relative Größe, aber auch Entfernung spielt eine Rolle.

Entfernung ist wichtig, weil sie das gesamte Gesichtsfeld betrifft. Wenn Betrachter Spielbrillen tragen, ist das Gesichtsfeld wahrscheinlich vollkommen vom Bildschirm eingeschlossen. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, auf Telefon, Computer oder Headset. Die Sorge um flackernde Bilder in einer Spielbrille wächst, da die Maske so nah an den Augen ist.

Forschung zeigt allgemein, dass die Nutzung von VR sogar sicherer als der normale Bildschirmkonsum sein kann, dank höherer Bildwiederholfrequenzen. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, _"Die begrenzten bisher vorliegenden Daten lassen keine besonderen Bedenken hinsichtlich Anfällen in Bezug auf VR-Technologie erkennen, auch wenn sich diese Ansicht mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbwechsel, würden voraussichtlich Anfälle provozieren, ebenso wie sie es in der realen Welt tun."_

(Hinweis: Einige Benutzer werden mit blinkenden Cursor nicht sehen können und können Migräne, Reisekrankheit und Desorientierung bekommen, auch wenn blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Über das Wechselspiel von dunklen und hellen Mustern als Ursache besteht bereits Erkenntnis; Streifen und Karos sind bekannt. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkel Paare von Streifen Anfälle auslösen können und unter welchen Bedingungen. Wenn das Muster unverbogen und gerade ist, darf es maximal acht Linien umfassen, aber wenn es sich wellt, nicht mehr als fünf Linien.

Parallaxeffekte können Desorientierung verursachen. Verwenden Sie Parallaxeffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer die Kontrolle hat, um sie abzuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Orientierung aufweisen. Wenn die Licht-dunkel Streifen in irgendeinem Muster gemeinsam am Auge vom minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradian einnehmen, die Leuchtdichte des hellsten Streifen >50 cd/m² beträgt und das Muster für ≥0.5 s dargestellt wird, dann sollte das Muster nicht mehr als fünf Licht-dunkel Paare von Streifen aufweisen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder in ihrem Kontrast umkehren; wenn das Muster unverändert bleibt oder sanft in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, selbst mit den oben aufgeführten Metriken kommen noch weitere Faktoren ins Spiel. Beispielsweise erhöht das Wechseln von einer kleineren Fläche zu einer größeren die Wahrscheinlichkeit, dass das Gehirn darauf reagiert, sowie das Erhöhen des Kontrasts und das Erhöhen der räumlichen Frequenz von einer niedrigen zur mittleren. Es ist auch bekannt, auch wenn der Grund dahinter nicht verstanden wird, dass das Wechseln von einfachen Ausrichtungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel das Schachbrettmuster, das entsteht, wenn man einen Satz von Streifen über, aber senkrecht zum ursprünglichen Satz legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Zugänglichkeit. Siehe [Understanding Colors and Luminance](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf Webzugänglichkeit und in allgemeiner Zugänglichkeit bezieht.

Wie sich die Farbe auf ihren Hintergrund bezieht – normalerweise in Bezug auf den Kontrast gerahmt – und wie drastisch sich die Farbe Bild zu Bild in Animationen ändert, ist wichtig. Mehr dazu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall Rot

Es wurde nachgewiesen, dass [einige Farben Anfälle häufiger als andere auslösen](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden von der Farbe Rot im Allgemeinen beeinflusst. Seine Macht, das Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Rotentsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit eingerichtet haben. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen dazu, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die ein Schädel-Hirn-Trauma erlitten haben, [die kognitive Funktion in einer roten Umgebung verringert](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben einer roten Umgebung, die die kognitive Funktion von Personen mit Schädel-Hirn-Trauma beeinflusst, scheint die Farbe im roten Spektrum besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte beim Testen des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten deutlich höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Webbene bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" angesehen wird. Das bedeutet _nicht_, dass sie "sicher ist und keine Anfälle verursacht", sondern nur, dass die Farbe "sicher" von der zur Bildschirmdarstellung verwendeten Technologie reproduziert werden kann.

## Schaden verhüten durch Messen

Das Potenzial für Schaden zu messen, ist ein guter Ausgangspunkt. Bei Tests werden Faktoren wie Farbe, Helligkeit, Größe, Kontrast und im Falle von Animationen die Frequenz berücksichtigt. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop zur Entwicklung eines Expertenkonsenses über photosensitive Anfälle. Die folgende, autoritäre und maßgebliche Information stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> "Ein Blitz stellt ein potenzielles Risiko dar, wenn er eine Leuchtdichte von ≥20 cd/m² aufweist, mit einer Frequenz von ≥3 Hz auftritt, und einen soliden Sichtwinkel von ≥0.006 Steradian (ungefähr 10% des zentralen Sichtfeldes oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Orientierung umfassen. Wenn die Licht-dunkel-Streifen eines Musters gemeinsam am Auge vom minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradian einnehmen, die Leuchtdichte des hellsten Streifen >50 cd/m² beträgt, und das Muster für ≥0.5 s präsentiert wird, sollte das Muster nicht mehr als fünf Licht-dunkel-Paare von Streifen aufweisen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder in ihrem Kontrast umkehren; wenn das Muster unverändert bleibt oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind im Fall von starren Medien, beispielsweise einer voraufgezeichneten Fernsehsendung, die bildweise analysiert werden kann, einfacher anzuwenden als bei interaktiven Medien."

Die "cd/m²" bezieht sich auf Candela pro Quadratmeter. Nun, wie bezieht sich das auf den Webentwickler und die Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung des sichtbaren Lichts, wie es von Menschenaugen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug auf das, was wir Entwickler kennen: auf einem Anzeigegerät und im RGB-Bereich. Das ist hilfreich, da es einen spezifischen Standard gibt, der auf Monitoren, Druckern und im Internet verwendet wird, und es ist der **sRGB** (Standard Rot Grün Blau).

> "Als Maß für das emittierte Licht pro Flächeneinheit wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m² ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m² aufweisen. Die meisten Verbrauchermonitore (Flachbildschirm) haben Leuchtstärken von 200 bis 300 cd/m². [High-Definition-Fernsehgeräte](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m²."

Die Quintessenz ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er für gewöhnlich verwendete Hex-Codes einfach konvertierbar ist.

### Physiologie und Psychologie des Menschen als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die Anfälle auslösen können, größtmöglich zu quantifizieren und zu messen. Dennoch darf nicht vergessen werden, dass Farbe genauso sehr über menschliche Wahrnehmung im Gehirn geht wie über die Messung des Lichts, das von einem Computerbildschirm kommt.

Neben den psychologischen Variablen gibt es auch physiologische Unterschiede unter uns. Es wird Variationen und Nuancen geben, wie ein echter Mensch Farben und Licht wahrnimmt und darauf reagiert. Zum Beispiel stellt Tom Jewett, Emeritierter Dozent für Informatik an der Cal State University Long Beach, in Bezug auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) fest: _"…Die Unterscheidung zwischen Helligkeitsstufen ist nicht wirklich linear, wie die HSL-Skala implizieren würde; wir sind viel empfänglicher für Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung sind es nicht. Forschung und Diskussionen darüber, wie man die maschinelle Messung von Licht, wenn es vom Computerbildschirm durch die Distanz zum menschlichen Auge fällt, das durch menschliches Sehen gefiltert wird und dann durch das menschliche Gehirn manipuliert wird, in Einklang bringt, gehen weiter.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind eher als Erwachsene anfällig für eine abnormale Reaktion auf Lichtreizungen, und der erste durch Licht ausgelöste Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle häufiger bei Jungen auftreten, weil sie eher Videospiele spielen. Videospiele enthalten häufig potenziell provozierende Lichtreize."_

**Benutzer-Testing ist sehr problematisch**. Natürlich will niemand eine anfallgefährdete Person für Benutzer-Tests einsetzen. Es ist gefährlich. An diesem Punkt ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Verwendung von Tools, die von Experten auf dem Gebiet entwickelt wurden, die eng mit Ärzten zusammengearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei häufig verfügbare Tools, die für Filme / Videos auf ethische und professionelle Weise entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat mit dem [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) einen Goldstandard gesetzt, und sie haben darauf geachtet, es **_kostenlos_** zum Download bereitzustellen. PEAT kann Autoren dabei helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Beachten Sie die Einschränkung der Nutzung: **_Die Verwendung von PEAT zur Bewertung von Material, das kommerziell für Fernsehausstrahlungen, Filme, Heimunterhaltung oder Gaming-Industrien produziert wurde, ist verboten. Verwenden Sie für kommerzielle Zwecke den Harding-Test oder andere Tools._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der Universität Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![Universität von Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehanstalten den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden können, sodass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Videoinhalten bereitstellt.

![Harding Flash und Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen für Entwickler zur Barrierefreiheit

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung sicherzustellen, dass wir keinen Schaden verursachen, weder absichtlich noch unabsichtlich. Wenn wir etwas einfügen müssen, das potenziellen Schaden verursachen kann, ist es wichtig, zu verhindern, dass Benutzer versehentlich auf die schädlichen Inhalte stoßen, und Wege bereitzustellen, wie Benutzer Animationen verhindern und kontrollieren können, um potenziellen Schaden zu mildern.

### Was der Webentwickler tun kann

#### Keinen Schaden zufügen

[WCAG-Leitfaden 2.3 Anfälle und Physikalische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht auf eine Weise, die bekannt dafür ist, Anfälle oder physische Reaktionen hervorzurufen"_. Schließen Sie keine Animationen ein, die ein Benutzer nicht kontrollieren kann. Entwerfen Sie nicht mit bekannten Mustern, die Probleme verursachen. Wenn Sie ein GIF oder PNG mit Flackern einfügen müssen, zeichnen Sie es stattdessen im Videoformat auf, damit dem Benutzer Steuerelemente zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, sich davon fernzuhalten, es abzuschalten oder es weniger schädlich zu gestalten.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwickler oder Designer, ob Inhalte mit Stroboskoplicht wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß behandelt werden, gibt es Personen, die den betreffenden Inhalt von Ihrer Seite herunterladen und als Waffe einsetzen können. Man nimmt an, dass der erste dokumentierte Versuch, Computer zu nutzen, um physischen Schaden durch Animationen zu verursachen, am Samstag, den 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde gehackt, indem Beiträge mit blinkenden Bildern und Links, die fälschlicherweise als hilfreich angepriesen wurden, gepostet wurden. Benutzer mit vestibulären Störungen, die auf der Seite Hilfe suchten, wurden betroffen.

Eine Reihe von rechtlichen Erwägungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm ein animiertes GIF im Dezember 2016 geschickt wurde: das blinkende GIF trug die Botschaft, _"Sie verdienen einen Anfall für Ihre Beiträge"_.

#### Zugang kontrollieren, Zugang beschränken

Den Zugang zur Seite zu kontrollieren ist entscheidend dafür, sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht unabsichtlich darauf stößt. WCAG merkt an, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben könnten, die Anfälle verursachen könnte, kontrollieren Sie den Zugang dazu, indem Sie zuerst eine Warnung über den Inhalt anzeigen und diesen dann an einem Ort platzieren, an dem der Benutzer sich dafür entscheiden muss, darauf zuzugreifen, beispielsweise indem er einen Knopf drückt oder sicherstellt, dass der Link zur Seite eine eindeutige und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht Indexieren, Nicht Folgen

Indem Sie die Seite nicht indizieren, wird die Wahrscheinlichkeit verringert, dass Benutzer sie über die Suche stolpern.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung wegen ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, Animationen _so früh wie möglich_ in einer bestimmten HTTP-Anfrage zu erkennen.
- Zakirt bietet ein Skript für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) an.

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Beispielsweise muss der Benutzer einen Button drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Button drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie das NICHT-Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein starkes Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet die `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation ausgeführt oder pausiert wird.

```css
div {
  animation-play-state: paused;
}
```

[CSS transitions](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf null für die Anfangsstufe der Animation zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen nicht nur starten, sondern auch stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Video-Element hinzufügen, damit der Benutzer das Video stoppen und auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Stellen Sie programmatisch sicher, dass Steuerelemente verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das steuert, ob Benutzeroberflächensteuerelemente zur Wiedergabe des Medienelements angezeigt werden.

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

Dasselbe Beispiel auf Audio angewendet:

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

Beachten Sie, dass Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt im {{HTMLElement('video')}}-Element und nicht im {{HTMLElement('audio')}}-Element ist. Dieses Beispiel stammt aus dem Abschnitt über die [stummgeschalteten Medienattribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus der HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer die Lautstärke aktiviert.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit kontrollieren

Dies scheint offensichtlich zu sein, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Handhabung stark, und aus diesem Grund gibt es keine Einheitslösung für das Problem. Dies wird weiter erschwert durch die Tatsache, dass sogar die Art und Weise, wie Dateien klassifiziert werden, beeinflusst, wie sie gehandhabt werden sollten. Zum Beispiel wird das .gif-Dateiformat üblicherweise als Bild verstanden, aber in manchen Kreisen als Videoformat angesehen, weil es animiert werden kann. Für eine umfassende Liste von Medientypen besuchen Sie bitte die [IANA.org-Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden zu ihrer Erfassung sind keine gelegentliche Übung. Möglicherweise interessieren Sie sich für den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und deshalb variiert auch die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial über Canvas hat einen großartigen Abschnitt über [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist eine Hauptstütze in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es sich mit Bildschirmaktualisierungen verhält. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung besprochen werden.
- **GIFs (Raster)**: Schwer zu knacken, weil die Steuerung ihrer Animation innerhalb der GIF-Dateien selbst liegt. Weitere Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie in W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript).
- **GIFV (Raster)**: Wird als Variante, die Video-Version von GIF, betrachtet. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z. B. eine .webm-Datei) verweisen, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), stellt fest, dass _"SVG ein textbasierter offener Web-Standard ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."._ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein svg als Quelle verwendet">`. Dies bedeutet, dass das SVG-Aussehen und die Animationen durch CSS-Schlüsselbilder und Animationen gesteuert werden können. Für die Interaktion mit JavaScript sehen Sie die MDN-Dokumente zu den [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen eingesetzt, ebenso wie in medizinischer Bildgebung.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem `div` animieren und Schaden verursachen. Bewegender Text kann Anfälle verursachen, genauso wie bewegte Bilder, also vermeiden Sie es, Ihren Text zu animieren. Es ist eine gute Idee, bewegenden Text ohnehin zu vermeiden, da viele Bildschirmleser nicht in der Lage sind, bewegenden Text zu lesen, und es eine schlechte Benutzererfahrung ist, selbst für Personen ohne visuelle oder vestibuläre Probleme.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammen eine starke Erfahrung für den Benutzer schaffen. Wir haben bereits das `animation`-Attribut früher in diesem Dokument erwähnt. Es ist tatsächlich eine Kurzschrift für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Die Animationseigenschaft ist schon an sich mächtig, kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein mächtiges Optionsset für den Benutzer eingerichtet werden. Indem Sie `animation-duration` und `transition-duration` auf eine kurze Dauer setzen, anstatt sie auf `animation: none` und `transition: none` zu setzen, wird ein Schutzmechanismus ermöglicht, um Probleme zu verhindern, falls eine Abhängigkeit von der Animation besteht.

### JavaScript-Animationen

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Die meisten JavaScript-Codes, die auf HTML-Videos angewendet werden, gelten auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist standardmäßig und wird als normale Geschwindigkeit betrachtet; ein Wert von 0.5 ist die halbe Geschwindigkeit, ein Wert von 2.0 ist die doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie das Playback-Geschwindigkeitsattribut: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS Animations](/de/docs/Web/CSS/CSS_animations), [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) und [Web Animations](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Einer der einfachsten Wege ist es, mit einem Bild zu beginnen, das bereits existiert, es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen und -größen in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele dafür, indem es mehrere Bildquellen für die Sonne, Erde und den Mond verwendet und mehrere Canvas-Methoden verwendet, um die Geschwindigkeit und Animation der Erde zu steuern, wie sie sich um die Sonne bewegt, und des Mondes, wie er sich um die Erde bewegt. Verwenden Sie das mit diesem Tutorial verfügbare Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, positiv ein blinkende Animation verwenden müssen…

Stellen Sie sicher, dass es ein Kontroll-Element darauf hat. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zuerst sieht, und dass ein Benutzer sich anmelden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, bei dem keine Kontrollen für den Benutzer verfügbar sind, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Die Konvertierung einer animierten GIF-Datei in ein Video ermöglichst es, Kontrollen für die Animation zu schaffen und dem Benutzer Handlungsmöglichkeiten zu geben. Es gibt viele verfügbare Online-Konverter, wie [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Setzen Sie die Erwartungen des Benutzers

Geben Sie Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv blitzen müssen, halten Sie es klein. Allgemein gesagt, beschränken Sie die Größe des Blicks auf einen Bereich von etwa 341 x 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass der Betrachter sich in typischer Entfernung vom Bildschirm befindet. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus nächster Nähe betrachtet wird, z. B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es möglich macht, VR im Browser zu erleben. WebVR kann erlebt werden auf dem Telefon, Computer oder Headset.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Augemaske verwendet, **oder KANN mit einer Augemaske verwendet werden**, wie im Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks ​​viel kleiner als 341 x 256 Pixel ist, weil das Bild viel näher bei den Augen des Nutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je stärker der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Leuchtdichte-Kontrastverhältnis,_ laut W3.orgs Seite zu [Colors with Good Contrast](https://www.w3.org/WAI/perspective-videos/contrast/) definiert ist, desto einfacher ist solcher Inhalt zu lesen. Benutzer mit Sehbehinderungen schätzen besonders die Bemühungen sicherzustellen, dass hoher Kontrast zwischen Text und Hintergrund besteht. Wenn der Inhalt jedoch animiert ist, ist das **Herabsetzen** des Kontrasts eigentlich eine Möglichkeit, die Wahrscheinlichkeit zu reduzieren, dass die animierten Inhalte Anfälle verursachen. Reduzieren Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren der Farben ist.

Am besten ist es, wenn Sie den Kontrast einstellen, bevor er hochgeladen oder im Internet veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite of products eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein verfügbarer Online-Tool pinetools.com's [Brightness and contrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie darüber nachdenken, animierte GIFs zu machen, beginnen Sie beispielsweise mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu verringern. Hier ist ein Code-Beispiel aus dem Abschnitt ["Beispiel: Die Hintergrundfarbe eines Absatzes einstellen"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Durchlauf einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben ist.

**HTML-Inhalt [(link zur Ursprungsseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalt [(link zur Ursprungsseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

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

#### Vermeiden Sie gesättigtes Rot für blinkende Inhalte

Wie bereits in diesem Dokument erwähnt, organisierte die Epilepsy Foundation of America im August 2004 einen Workshop zur Entwicklung eines Expertenkonsenses über photosensitive Anfälle. Einer ihrer Ergebnisse war das Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, in einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradian (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen."_ Sie vermerkten auch in demselben Konsens: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko angesehen."_

### Alternative CSS-Stile anbieten

Mit dem Verständnis, dass vieles von Animationen und Blitzen durch CSS-Methoden gesteuert werden kann, ist es wichtig, Möglichkeiten zu untersuchen, um alternative Optionen für Benutzer bereitzustellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser werden die alternativen CSS-Stile in alternativen Stylesheets anzeigen, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn Benutzer das Menü "Ansicht" aufrufen, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer sind sich bewusst, nach diesen Optionen in Browser oder Einstellungen zu suchen, also lohnt es sich, zu überlegen, die Dinge auf die traditionelle Weise zu tun, mit auffälligen Buttons oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Dies wird die Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, oder die Fähigkeit des Benutzers, Präferenzen in den Einstellungen festzulegen, nicht stören oder überschreiben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die sich auf Sprachsteuerungssysteme verlassen, häufig auf legacy Buttons und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu benutzen oder Touch-Ereignisse auf mobilen Tablets zu nutzen.

Gängige Möglichkeiten, um alternative Stylesheets in Ihre HTML-Dokumente einzubinden, sind die Verwendung des {{HTMLElement('link')}} Elements und {{CSSxRef('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element, zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}} Abschnitt der Webseite.

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

**{{CSSxRef('@import')}}** ist auch eine Möglichkeit, Stylesheets zu integrieren, jedoch nicht so gut unterstützt wie das {{HTMLElement('link')}} Element.

```css
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) setzen Sie es auf, damit Benutzer ihre Browser verwenden können, um alternative Stile auszuwählen.

### Dynamisches Stil-Wechseln

Ein Problem, sich auf den Browser zu verlassen, um alternative Stile zu offenbaren, besteht darin, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder aufgrund ihrer Behinderung dazu nicht in der Lage sind. Buttons oder Links machen es für viele dankbare Benutzer offensichtlich, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Umschaltknöpfe hinzuzufügen, um dem Benutzer das Wechseln zu den unterschiedlichen Stylesheets zu ermöglichen. Gesagt sei auch, dass die alternative Stylesheets nicht die einzige Option sind. Eine andere Möglichkeit ist es, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo möglich, ist es wirklich am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet kontrolliert werden kann."._ Einer der besten Beispiele hierfür stammt von der W3C-Seite, ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach herzustellen. Es ist eine drakonische Lösung; aber sie ist manchmal notwendig für Lehrer und andere Öffentliche Servicemitarbeiter, die Personen mit extremen Empfindlichkeiten bedienen müssen. Diese Öffentlichen Servicemitarbeiter können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Media Queries mit {{HTMLElement('style')}}

Wenn Sie Media Queries einrichten, aktivieren Sie die Steuerungen durch den Benutzer; diese Steuerungen werden im Browser oder im Betriebssystem verfügbar gemacht. Sehen Sie sich das MDN-Dokument, [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Guides/Browsing_safely) an, um mehr Details darüber zu erfahren, wie ein Benutzer Zugriff auf die Steuerungen hat.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel zu sehen, wie man den Code `prefers-reduced-motion` verwendet, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie das Beispiel unten aus dem Abschnitt ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Unterstützung entsteht derzeit.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein leistungsstarkes Werkzeug verfügbar für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Feature

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge, desto weniger "flackert" er. Der große Teil der modernen Technologie aktualisiert mit einer Geschwindigkeit, die keine Probleme mit Photosensitivität verursacht. Allerdings kann sich nicht jeder die neueste Technologie leisten: ältere oder schwache Computer können niedrige Aktualisierungsraten haben. [AbilityNets Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu den Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Aktualisierungsraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz spürbar und dokumentiert."_
- _"Diese Studien scheinen darauf hinzudeuten, dass Sie Aktualisierungsraten unter 70 Hz meiden und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks hat eine innovative Verwendung des Update-Features gefunden, das in Verbindung mit der Animation-Dauer oder Übergangs-Dauer verwendet werden kann, um mit einer Geschwindigkeit zu enden, die für das menschliche Auge unmerklich ist. In anderen Worten spricht Eric's Techniken das Problem der Aktualisierungsrate an. Der folgende CSS-Code stammt aus dem CSS-Tricks-Artikel, [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/@media/update) Media-Feature wird verwendet, um die Fähigkeit des Ausgabegeräts zu ändern, das Erscheinungsbild von Inhalten zu ändern, nachdem sie gerendert wurden. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Features

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen in einer Lichtmaßeinheit zu definieren, weil Geräte mit Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen bemerken auch den Unterschied in der Technologie, wie z. B. E-Ink, das bei hellem Tageslicht lesbar bleibt, im Gegensatz zu flüssigen Kristallen, die es nicht sind.
- `environment-blending`
  - : Aus dem W3C Entwurfsdokument, Media Queries Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Media-Feature wird verwendet, um die Eigenschaften des Displays des Benutzers abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die Visuals und/oder das Layout der Seite je nach Display-Technologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Media-Features (Geplant in Media Queries Level 5)

[Benutzerpräferenz-Media-Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend darin, dem Benutzer die Kontrolle über Medien zu geben. Hier einige Highlights:

- `inverted-colors`
  - : Gemäß dem Abschnitt [Benutzerpräferenz-Media-Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Media-Feature gibt an, ob der Inhalt normalerweise angezeigt wird oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) zwingt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf der Seite und überschreibt die vom Autor gewählten Farben. Aus dem W3C Entwurfsdokument, Media Queries Level 5 Kapitel über forced-colors: _"Das forced-colors Media-Feature wird verwendet, um zu erkennen, ob der Benutzeragent einen [Modus mit erzwungenen Farben](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine benutzergewählte eingeschränkte Farbpalette auf der Seite lauf lässt."._ Der Benutzer muss über diese Fähigkeit informiert werden, und es muss mit dem richtigen Wert für die Media-Query "prefers-color-scheme" gut harmonieren.
- `light-level`
  - : Aus dem W3C Entwurfsdokument, Media Queries Level 5 Kapitel über light-level: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Media-Feature wird verwendet, um die Umgebungslichtstufe, auf die das Gerät verwendet wird, zu erfragen, um dem Autor die Anpassung des Stils des Dokuments an die Rahme zu ermöglichen."_ Dies wird insbesondere für die Barrierefreiheit von Nutzen sein. Menschen mit motorischen Problematiken oder einigen kognitiven Einschränkungen, die den richtigen "Knopf" nicht finden können, um ihre Bildsleinstellung zu ändern, werden dankbar sein.
- prefers-contrast
  - : Aus dem W3C Entwurfsdokument, Media Queries Level 5 Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Das prefers-contrast Media-Feature wird verwendet, um festzustellen, ob Benutzer das System gebeten haben, den Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern. Beispielweise haben viele Benutzer Schwierigkeiten, Text zu lesen, der nur einen geringen Unterschied im Kontrast zum Textbackground aufweist, und würden einen größeren Kontrast bevorzugen."._ Manchmal kann zu viel Kontrast einen "Halo"-Effekt um den Text erzeugen, der die Lesbarkeit tatsächlich verringern kann. Die Möglichkeit, das Maß an Kontrast unter Benutzerskonntrolle zu stellen, ist ein okayes Geschenk für die Barrierefreiheit.

#### `MediaQueryList` Schnittstelle

Das Kapitel 4.2 aus den CSSWG.org Entwürfen integriert sich in die [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert wurde. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das Objekt [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist). Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList) für mehr Informationen.

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für das `literal`-Property wird aus [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation) übernommen.

**Anforderung:** Einige Benutzer verstehen abstrakte Texte und Symbole wie Metaphern, Sprichwörter usw. nicht. Die `literal`-Eigenschaft ist dazu gedacht, Text oder Bilder als nicht-wörtlich zu kennzeichnen und dem Autor die Möglichkeit zu geben, nicht-wörtliche Texte und Bilder den Benutzern zu erklären.

#### Übergänge (für CSS und SVG)

Das folgende stammt aus dem [Web Animations-Modell](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfen.

Das Web Animations-Modell soll die erforderlichen Funktionen für das Ausdrücken bereithalten: [CSS Transitions](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS Animations](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11).

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
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

- [Farb-Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 - Verständnis von 2.3.1 - fehlende/vage Maßdefinitionsangaben #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Fotosensibilität werfen, eine der komplexesten Bedingungen von Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Individuen werden mit einer besonderen Empfindlichkeit gegenüber Blitzlichtern oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettern geboren. Aufgrund dieses Zustands erzeugt ihr Gehirn Anfall ähnliche Entladungen, wenn es dieser Art von visueller Stimulation ausgesetzt wird."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Band 27, Ausgabe 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht- und Muster ausgelöste Anfälle: Fachliches Konsenspapier der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 September, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheits-Hauptverzeichnis](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als einer der zwei "Goldstandards" zur Analyse von Blitzlicht anerkannt.

- [Harding Flash und Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Zusammen mit dem Harding-Tool wird es allgemein als einer der zwei "Goldstandards" zur Analyse von Blitzlicht anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallssicherer Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [WAI-Adapt Explainer](https://w3c.github.io/adapt/). Arbeitsentwurf
- [WAI-Adapt: Werkzeuge-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwelle Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Verweisen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder darunter Schwelle Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web-Animationsmodell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Richtlinien zur Barrierefreiheit von Webinhalten (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte

## Mitwirkende

Ein herzliches Dankeschön an Teal; Wayne Dick von der [Low Vision Task Force der W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory at USF and TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige, großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ dem Trace Research & Development Center für die Bereitstellung ihres erstaunlichen Tools, des [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/), kostenlos sehr dankbar.
