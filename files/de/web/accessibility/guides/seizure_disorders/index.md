---
title: Barrierefreiheit im Web für Anfälle und körperliche Reaktionen
short-title: Vermeidung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel führt in Konzepte ein, die hinter der Barrierefreiheit von Webinhalten für Menschen mit vestibulären Störungen stehen. Außerdem wird erläutert, wie man Inhalte misst und vermeidet, die Anfälle und/oder andere körperliche Reaktionen auslösen können.

## Übersicht

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind unter dem Namen photosensitive Epilepsie bekannt. Inhalte, die flimmern, blitzen oder blinken, können eine photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die möglicherweise Anfälle oder andere körperlich beeinträchtigende Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art von "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall der photosensitiven Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können auch durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen es heißt: "_Bestimmte visuelle Bilder können selbst in Abwesenheit von Bewegung oder Flimmern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen._" Die Epilepsy Foundation spricht in ihrem Artikel ["Ein Licht auf die Photosensitivität werfen, eine der komplexesten Erkrankungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegende Muster von wahrnehmbaren hellen und dunklen Streifen haben den gleichen Effekt wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Working Group der Epilepsy Foundation of America kann das Problem ein wenig "quantifizieren": "_Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung zählen._" Neben Streifen ist auch bekannt, dass Schachbrettmuster photosensitive Anfälle verursachen können, wie [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) berichtet.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konstant. Der bekannte und starke Auslöser sind blinkende/blitzende Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: "_Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Allerdings sind nur wenige Epilepsiearten photosensitiv, und der Großteil der Epilepsien ist es nicht._" Neben Anfällen, die durch Photosensibilität verursacht werden, kann das Hören bestimmter Musikstücke auch das Triggern sogenannter musikogener Anfälle verursachen, obwohl diese Art von Anfällen weitaus seltener zu sein scheint. Für eine gute Einführung in das Thema der musikogenen Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederkehrende, nicht provozierte Anfälle umfasst._" Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist "_der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Er ist nicht häufig, aber ein sehr reales Problem, und die Menschen sollten sich des Risikos bewusst sein._"

Der Punkt ist, dass Anfälle definitiv problematisch sein und tödlich sein können, und Entwickler und Designer tragen eine wichtige Verantwortung, das Web für diejenigen mit Empfindlichkeiten gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber auch die, die "nur" schwächend sind, können von solcher Schwere sein, dass der Benutzer handlungsunfähig wird. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation ["Photosensibilität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) enthält eine Liste von Auslösern, die bei photosensitiven Personen Anfälle auslösen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder der rollenden Bilder.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder alternierenden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie visuelle Feuermelder.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser glitzert, durch Bäume oder durch die Lamellen von Jalousien flimmert.
- Bestimmte visuelle Muster, insbesondere Streifen mit kontrastierenden Farben.

Der gleiche Artikel erläutert weiter, dass viele Faktoren kombiniert werden müssen, um die photosensitive Reaktion auszulösen. Besonders bemerkenswert ist, dass die Wellenlänge des Lichts als ein möglicher Faktor eingeschlossen ist; Wellenlängen im roten Spektrum scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) merkt allgemein an: "_Personen mit photosensitiven Anfallsstörungen können einen Anfall durch Inhalte erleben, die mit bestimmten Frequenzen mehr als ein paar Mal blinken_", und geht sehr spezifisch darauf ein, dass: "_Personen sind auf rotes Blinken noch empfindlicher als auf andere Farben, daher wird ein spezieller Test für gesättigtes rotes Blinken bereitgestellt_."

Es ist nicht einmal notwendig, ein Bild oder Video zu verwenden, um Schaden zu verursachen. Ein {{HTMLElement('div')}} Element, das auf eine Änderung der Farbe und Helligkeit mit hoher Frequenz eingestellt ist – leicht durch JavaScript umgesetzt – kann echten Schaden anrichten. Und Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig verwendet werden, um die Ladezeit von Seiten darzustellen, leicht "flackern", während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel weist die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) darauf hin, dass _"photosensitive Anfälle durch bestimmte Arten von Flackern in Web- oder Computerinhalten provoziert werden können, einschließlich Maus-Over, die große Bereiche des Bildschirms schnell und wiederholt ein- und ausschalten können"_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden können und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen auftritt). Anfälle sind jedoch nicht die einzige mögliche negative körperliche Reaktion auf Blinken, Flackern, Blinken und ähnliche Reize. Im Jahr 1997 zeigte ein japanischer Zeichentrickfilm eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere erlitten Übelkeit, zitterten und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die körperlichen Störungen, die unten aufgeführt sind, sind alles mögliche Folgen; jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend sind.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, Blitzen & Flackern

Obwohl "Blinken" und "Blitzen" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut dem W3C ist Blinken ein Problem der Ablenkung, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Abschnitt 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flacker-Effekte mit einer Frequenz von mehr als 3 Hz (Bilder pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Ein Licht auf Photosensitivität werfen, eine der kompliziertesten Zustände der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"im Allgemeinen blinkende Lichter zwischen den Frequenzen von fünf bis 30 Bilder pro Sekunde am ehesten Anfälle auslösen. Um sicher zu sein, wird empfohlen, dass photosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt sein sollten."_ Für einige Menschen können Blinken oder Blitzen Symptome auch bei weniger als 3 Hz auslösen.

Es ist wichtig zu beachten, dass nicht alle Blink- und Blitzeffekte schlecht sind. Die NASA merkt in ihrem Dokument ["Blinken, Blitzen und zeitliche Reaktion"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) an, dass Blinken und Blitzen mächtige Werkzeuge sein können, um Aufmerksamkeit zu erregen – wie es für Warnschaltflächen notwendig ist (vorausgesetzt, dass die Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Tasten auch, dass sie sparsam und mit Vorsicht eingesetzt werden müssen. In Bezug auf Webdesign sollten Systeme, die Firmenmitarbeiter auf Gefahren aufmerksam machen, indem sie den Bildschirm "kapern", um eine blinkende Warnung vor Notfällen anzuzeigen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flackern – wie wird Gefahr quantifiziert?

Laut dem Artikel ["Licht- und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x), _"Ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, bei einer Frequenz von ≥3 Hz auftritt und ein solides Sehfeld von ≥0,006 Steradian (ca. 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) bedeckt."_

Wie weit ist eine typische Betrachtungsentfernung? Die zum Zeitpunkt des Schreibens berücksichtigte Empfehlung für eine typische Betrachtungsentfernung war "_das Gebiet kann verwendet werden, um einen Bereich von >25% der Fläche eines Fernsehbildschirms anzuwenden, unter Berücksichtigung standardmäßiger Betrachtungsabstände von ≥2 m (ca. 9 Fuß)._". Vieles hat sich seit dieser Zeit geändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Bestimmte Farben eher epileptische Anfälle verursachend, Forscher finden"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"... Komplexitäten, die der Dynamik des Gehirns zugrunde liegen, durch bestimmte Farbkombinationen mehr als durch andere moduliert werden können, zum Beispiel verursacht ein rot-blaues Flackern eine größere kortikale Erregung als ein rot-grünes oder blau-grünes Reizmittel."_

### Blitzen & Rotes Blitzen

[WCAG 2.3.1 Allgemeine Blitz- und rote Blitzschwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) werden wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen der [relativen Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit, bei der die relative Helligkeit des dunkleren Bildes unter 0,80 liegt und bei der "ein Paar gegensätzlicher Änderungen" eine Zunahme gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Zunahme ist;
- Ein **roter Blitz** ist definiert als jedes Paar gegensätzlicher Übergänge, die ein gesättigtes Rot betreffen.

Diese Standards basieren auf früherer Forschung. Im Jahr 2004 fand die Epilepsy Foundation of America ein Workshop, das einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle entwickelt hat und feststellte, dass _"Ein Blitz eine potenzielle Gefahr darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup>, eine Frequenz von mindestens 3 Hz und einen soliden Sichtwinkel von mindestens 0,006 Steradian (ca. 10% des zentralen Sichtbereichs oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) aufweist."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein eigenes Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

Sowohl die "relative" Größe als auch der Abstand sind wichtig. Laut [PEAT](https://trace.umd.edu/peat/), _"Die kombinierte Fläche von Blitzen, die gleichzeitig auftreten, nimmt nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel Rechtecks ein, egal wo auf dem angezeigten Bildschirmbereich bei einer Anzeige mit 1024 mal 768 Pixeln betrachtet."_

Der Punkt, dass das Gesichtsfeld eine wichtige Überlegung ist, entsteht im Artikel zur WCAG 2.3.1 weiter: "_Der Bildschirm mit 1024 x 768 Pixeln wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block stellt eine 10-Grad-Ansicht bei typischen Betrachtungsabständen dar. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehbereich des Auges, in dem die Menschen am anfälligsten für Fotoreize sind.)_"

Dieses Pixelverhältnis berechnet die relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand ist wichtig, weil er das gesamte Sichtfeld beeinflusst. Wenn Zuschauer Augenmasken für Spiele tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm eingeschlossen. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf Handy, Computer oder Headset erlebt werden kann. Die Sorge um blinkende Bilder in einer Augenmaske nimmt zu, da die Maske so nah an den Augen ist.

Forschungen deuten allgemein darauf hin, dass die Verwendung von VR tatsächlich sicherer sein kann als der normale Konsum von Bildschirmen, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, _"Die bisher begrenzten Daten werfen keine besonderen Bedenken hinsichtlich Anfällen im Zusammenhang mit VR-Technologie auf, auch wenn sich diese Ansicht mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbwechsel, würden erwarten lassen, dass sie Anfälle auslösen, genau wie in der realen Welt."_

(Beachten Sie, dass einige Benutzer bei blinkenden Cursor nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung erfahren, obwohl blinkende Cursor einen viel kleineren Bildschirmbereich einnehmen.)

### Muster und Parallax

Kontrastreiche dunkle und helle geometrische Muster sind als Übeltäter bekannt; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paare von Streifen voraussichtlich Anfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind acht Linien das maximal Erlaubte, aber wenn es sich wellenförmig bewegt, nicht mehr als fünf Linien.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, sorgen Sie dafür, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung zählen. Wenn die Hell-Dunkel-Streifen eines Musters zusammen subtendieren am Auge aus der minimal erwarteten BetrachtungsENTfernung ein solider Winkel von >0.006 Steradian, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paaren von Streifen zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder ihren Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken kommen weitere Faktoren ins Spiel. Zum Beispiel erhöht das Wechseln von einem kleineren Bereich zu einem größeren automatisch die Wahrscheinlichkeit, dass das Gehirn reagiert, sowie das Erhöhen des Kontrasts und das Erhöhen der räumlichen Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass das Wechseln von grundlegenden Orientierungen (zum Beispiel Streifen) zu einer multiplen (zum Beispiel dem Schachbrettmuster, das entsteht, wenn man ein Streifenmuster auf das andere legt, aber senkrecht dazu) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farbe ist wichtig für die Barrierefreiheit. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf Web- und allgemeine Barrierefreiheit bezieht.

Wie sich die Farbe auf ihren Hintergrund bezieht – normalerweise in Bezug auf Kontrast – und wie drastisch die Farbe Bild für Bild in Animation geändert wird, ist wichtig. Für mehr Informationen siehe [Drei Blitze oder weniger Schwellenwert Verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall des Rots

Es wurde gezeigt, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden generell von der Farbe Rot beeinflusst. Ihre Fähigkeit, das Verhalten zu beeinflussen, wurde sogar bei Tieren festgestellt.

- **Rot Entsättigungstests:** Das menschliche Auge ist so empfindlich gegenüber Rot, dass Augenärzte einen Test damit erstellt haben. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Für mehr Informationen darüber, wie ein Augenarzt diesen Test verwendet, siehe [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass kognitive Funktionen bei einem roten Umfeld bei Menschen mit Traumatismus des Gehirns reduziert sind. [Siehe hierzu auch PubMed](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben der Wirkung einer roten Umgebung auf die kognitive Funktion von Menschen mit traumatischem Hirnschaden scheint die Farbe im Wellenlängenspektrum des roten Lichts spezielle Bedenken und Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei der Erprobung des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten viel höher als erwartet waren. Sie fanden heraus, dass wir auf gesättigtes rotes Blinken viel empfindlicher sind. (Siehe Video [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" gilt. Das bedeutet _nicht_, dass sie "sicher" ist, um keine Anfälle zu verursachen, sondern nur, dass die Farbe "sicher" durch die Technologie reproduziert werden kann, die zur Farberzeugung auf Bildschirmen verwendet wird.

## Messen zur Vermeidung von Schäden

Das Messen des Potenzials zur Schädigung ist ein guter Ausgangspunkt. Bei den Tests berücksichtigte Faktoren sind Farbe, Leuchtdichte, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Richtlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Die folgende Fach- und Autoritätsinformation stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Lichtstärke von ≥20 cd/m<sup>2</sup>, eine Frequenz von ≥3 Hz hat und einen soliden visuellen Winkel von ≥0.006 Steradian (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial für das Auslösen von Anfällen enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare an Streifen in einer beliebigen Ausrichtung zählen. Wenn die Hell-Dunkel-Streifen eines Musters zusammen subtendieren bei der minimal erwarteten Betrachtungsentfernung einen soliden Winkel von >0,006 Steradian, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare an Streifen zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert oder glatt in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien lassen sich leichter auf feststehende Medien anwenden, zum Beispiel auf eine aufgenommene Fernsehsendung, die Bild für Bild analysiert werden kann, als im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also, wie bezieht sich das auf Messungen für Farbe, Leuchtdichte und Sättigung für den Webentwickler?

Die Candela ist eine SI-Einheit (Internationales System der Einheiten) für Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Bezug, was wir als Entwickler kennen: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, weil es einen spezifischen Standard gibt, der auf Monitoren, Druckern und dem Internet verwendet werden soll, und das ist das **sRGB** (Standard Red Green Blue).

> Als Maß für das pro Flächeneinheit abgestrahlte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbrauchermonitoren mit [Flüssigkristallanzeigen](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-definition Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Wesentliche ist, dass der **sRGB** Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er leicht aus dem üblichen Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Das gesagt, es darf nicht vergessen werden, dass Farbe genauso viel mit menschlicher Wahrnehmung im Gehirn zu tun hat, wie es die Messungen des vom Computerbildschirm kommenden Lichts betrifft.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es gibt Unterschiede und Nuancen darin, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Emeritus Lecturer für Computerwissenschaften an der Cal State University Long Beach, betreffend Helligkeit in der HSL-Farbskala _"... Der Unterschied zwischen Helligkeitsstufen ist tatsächlich nicht linear, wie die HSL-Skala impliziert; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, jedoch menschliches Sehen und menschliche Wahrnehmung dies nicht sind. Forschung und Diskussion laufen in Richtung, wie man die Maschinenmessung des Lichts, wenn es vom Computerbildschirm ausgeht, durch den Abstand zum menschlichen Auge, gefiltert durch menschliches Sehen und dann im menschlichen Gehirn manipuliert wird, in Bezug setzt.

Sogar das Alter und das Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Ein Licht auf Photosensitivität werfen, eine der komplexesten Zustände der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulation."_

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfällige Person für Anfälle zu Benutzertests einladen. Es ist gefährlich. Bis zu diesem Punkt ist es eine der ethischsten Dinge, die Entwickler und Designer tun können, die Verwendung von Tools, die von Experten auf diesem Gebiet entwickelt wurden, die eng mit Ärzten zusammengearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei normalerweise verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben sich bemüht, es **_kostenlos_** herunterzuladen bereitzustellen. PEAT kann Autoren dabei helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung für deren Verwendung: **_Die Verwendung von PEAT zur Bewertung von Materialien, die kommerziell für Fernsehsendungen, Filme, Heimunterhaltung oder Spiele produziert werden, ist verboten. Verwenden Sie den Harding Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland herunterzuladen, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![Photosensitive Epilepsy Analysis Tool des College of Information Studies der University of Maryland.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehsender den Harding Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie ausgestrahlt werden können, und die Gruppe auf [HardingTest.com](https://hardingtest.com/) bietet sowohl Analyse als auch Zertifizierung von Videoinhalten an.

![Harding Flash und Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Accessibility-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Unsere Verantwortung als Designer und Entwickler besteht darin, sicherzustellen, dass wir keinen Schaden verursachen, weder absichtlich noch unbeabsichtigt. Wenn wir etwas einfügen müssen, das das Potenzial hat, Schaden zu verursachen, ist es entscheidend zu verhindern, dass Benutzer versehentlich den schädlichen Inhalt aufsuchen, und Wege zu bieten, die es den Benutzern ermöglichen, und Animationen zu kontrollieren, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG Leitlinie 2.3 Anfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Gestalten Sie Inhalte nicht in einer Weise, die Anfälle oder körperliche Reaktionen auslösen kann"_. Fügen Sie keine Animation ein, die ein Benutzer nicht steuern kann. Gestalten Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie unbedingt ein GIF oder PNG mit Blitzen einfügen müssen, nehmen Sie es stattdessen in einem Videoformat auf, damit dem Benutzer Steuerungsmöglichkeiten zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Verstehen Sie Böswilligkeit

Als Entwickler oder Designer fragen Sie sich, ob stroboskopische Inhalte wirklich auf Ihrer Webseite sein müssen. Auch wenn sie ordnungsgemäß behandelt werden, gibt es Menschen, die problematische Inhalte von Ihrer Website herunterladen und als Waffe einsetzen könnten. Man glaubt, dass der erste dokumentierte Versuch, Computer zu nutzen, um physischen Schaden durch Animationen zu verursachen, am Samstag, dem 22. März 2008 begann: Die Website der Epilepsy Foundation wurde über Beiträge mit blinkenden Bildern und Links, die fälschlicherweise behaupten, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, nach dem Erhalt eines animierten GIFs im Dezember 2016 einen Anfall erlitt: Das blinkende GIF trug die Nachricht "_Sie verdienen einen Anfall für Ihre Beiträge_".

#### Belichtung kontrollieren, Zugang steuern

Die Steuerung der Belichtung zur Seite ist der Schlüssel, um sicherzustellen, dass jemand, der anfällig für Anfälle ist, nicht versehentlich damit konfrontiert wird. WCAG merkt an, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die Anfälle verursachen könnten, steuern Sie den Zugang dazu, indem Sie zuerst eine Warnung über den Inhalt anzeigen und es dann an einem Ort platzieren, an dem der Benutzer sich dafür entscheiden muss, ihn zu sehen, wie durch das Klicken auf eine Schaltfläche, oder sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung hat.

Erwägen Sie das Setzen von Crawl-Richtlinien für Suchmaschinen, um zu verhindern, dass potenziell gefährliche Ressourcen in ihren Suchindizes aufgenommen werden.
Sie können dies durch Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` tun.
Indem Sie die Seite nicht indexieren (`noindex`) und Links auf der Seite nicht folgen (`nofollow`), wird die Wahrscheinlichkeit reduziert, dass Benutzer über die Suche darauf stoßen:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Für Nicht-HTML-Ressourcen können Sie Crawl-Richtlinien in einem {{httpheader("X-Robots-Tag")}} HTTP-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, aber animierte GIFs verdienen besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht es, so früh wie möglich in einer gegebenen HTTP-Anfrage, animiert zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie bei animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten dies zu tun, wie z.B. das `autoplay` Attribut nicht zum `<video controls>` hinzufügen oder {{CSSxRef('animation-play-state')}} für den Anfangszustand auf `paused` setzen. Für ein kraftvolles Beispiel, wie das tatsächlich funktionieren kann, siehe den Artikel von Kirupa ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet das `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/Reference/Properties/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf Null für die anfängliche Animationsstufe zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen nicht nur starten, sondern auch stoppen kann

Ein {{HTMLElement('video')}} Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungselemente. Stellen Sie sicher, dass Sie das `controls` Attribut zum Videoelement hinzufügen, damit der Benutzer das Video ebenso stoppen wie es starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerelemente verfügbar sind

Die `HTMLMediaElement.controls` Eigenschaft spiegelt das `controls` HTML-Attribut wider, das steuert, ob Benutzeroberflächenelemente zur Steuerung des Mediendienstes angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerelemente hat, auf die ein Benutzer zugreifen kann, fügen Sie "controls" zu HTML-Video- und -Audioelementen hinzu.

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

Beachten Sie, dass das Audio in Videos über das `muted` Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt im {{HTMLElement('video')}} Element anstelle des {{HTMLElement('audio')}} Elements enthalten ist. Dieses Beispiel stammt aus dem Abschnitt über die Beschreibung des [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer etwas unternimmt, um das Audio zu aktivieren.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Das scheint offensichtlich zu sein, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zum Umgang mit ihnen erheblich, und aus diesem Grund gibt es keine einheitlichen Lösungen für das Problem. Dies wird weiter kompliziert durch die Tatsache, dass selbst, wie Dateien klassifiziert werden, beeinflusst, wie damit umgegangen werden sollte. Zum Beispiel wird das .gif-Format normalerweise als Bild verstanden, wird aber aufgrund seiner Animationsfähigkeit auch in einigen Kreisen als Videoformat angesehen. Für eine umfassende Auflistung von Medientypen besuchen Sie bitte die [Seite der IANA.org für Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie zu erkennen, sind kein lässiges Unterfangen. Möglicherweise sind Sie daran interessiert, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu verfolgen. Praktisch jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und deshalb variiert auch die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial über Canvas hat einen tollen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein fester Bestandteil der Canvas-Animation, aber es ist auch interessant, zu sehen, wie es mit dem Bildschirm-Refresh interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) auf der Frage, in dem die Feinheiten der Implementierung von `requestAnimationFrame` vor dem Hintergrund des Bildschirm-Refresh diskutiert werden.
- **GIFs (Raster)**: Schwer zu knacken, weil die Steuerung ihrer Animation innerhalb der GIF-Dateien selbst liegt. Informationen über die Steuerung der Geschwindigkeit von GIFs finden Sie im W3C-Dokument ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow Artikel zu diesem Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Als Video-Variante von GIF betrachtet. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm Datei) verweisen, die an einem anderen Ort vorhanden sein muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von manchen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), merkt an, dass _"SVG ein textbasiertes offenes Web-Standard ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein SVG als Quelle verwendet">`. Dies bedeutet, dass das Aussehen und die Animation von SVGs über CSS-Keyframes und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen und in der medizinischen Bildgebung verwendet.

#### Text kann ebenfalls animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Beweglicher Text kann aus den gleichen Gründen wie bewegte Bilder Anfälle auslösen, daher sollten Sie vermeiden, Ihren Text zu animieren. Es ist eine gute Idee, auf die Verwendung von beweglichem Text zu verzichten, da viele Bildschirmleseprogramme keinen beweglichen Text lesen können, und es ist schlechtes Benutzererlebnis sogar für diejenigen ohne Seh- oder Gleichgewichtsprobleme.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}} Elements können viele Optionen zusammenarbeiten, um dem Benutzer ein kraftvolles Erlebnis zu bieten. Wir haben bereits das `animation`-Eigenschaft früher in diesem Dokument erwähnt. Tatsächlich ist es eine Kurzform für alle Animationseigenschaften, inklusive:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu beenden. Dies kann in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` bedeutet, dass keine Animation erfolgen soll.
- `animation-timing-function`

Die Animationseigenschaft ist bereits kraftvoll für sich, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann ein kraftvolles Set von Optionen für den Benutzer eingerichtet werden. Durch das Setzen der `animation-duration` und `transition-duration` Eigenschaften auf eine kurze Dauer anstelle von `animation: none` und `transition: none`, wird eine Sicherheitsmaßnahme getroffen, um Probleme im Fall einer Abhängigkeit von der Animation zu verhindern.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}} Elemente und SVGs zu steuern. Der größte Teil des JavaScript-Codes, der auf HTML-Videos angewandt wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerelemente für die Abspielgeschwindigkeit für sowohl Video als auch Audio zu implementieren. Ein Wert von 1,0 ist standardmäßig und wird als normale Geschwindigkeit angesehen; ein Wert von 0,5 ist die halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Ein negativer Wert spielt das Video oder Audio rückwärts ab. Setzen Sie die Abspielgeschwindigkeitseigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet das folgende Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten ist es, mit einem Bild zu starten, das bereits vorhanden ist, es als Bildquelle verwenden und dann animieren. Denken Sie daran, dass Sie hier GIFs, JPGs, PNGs, SVGs und andere Dateitypen als Bildquelle verwenden können, solange es erlaubte Dateitypen – und -größen – in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument ["Grundlegende Animationen"](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele hierfür, indem mehrere Bildquellen für die Sonne, die Erde und den Mond verwendet werden und verschiedene Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde eingesetzt werden, während sie um die Sonne kreist, und des Mondes, während er um die Erde kreist. Verwenden Sie das Codepen mit diesem Tutorial, um `ctx.rotate` im Code anzupassen, um zu sehen, wie die Animation betroffen ist, wenn Änderungen vorgenommen werden.

#### Wenn Sie unbedingt, unbedingt eine blinkende Animation verwenden müssen

Stellen Sie sicher, dass es eine Steuerung dafür gibt. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zuerst sieht, und der Benutzer muss sich dafür entscheiden, an der Animation teilzunehmen.

Ein Beispiel für ein Format, bei dem dem Benutzer keine Steuerungsoptionen zur Verfügung stehen, ist eine gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des gif-Bildes selbst gesteuert. Durch das Konvertieren eines animierten gifs in Videos können Steuerungen auf die Animation gesetzt und dem Benutzer Beteiligungsoptionen gegeben werden. Es gibt viele kostenlose Online-Konverter, die zur Verfügung stehen, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Erwartungen der Benutzer setzen

Geben Sie den Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die darauf folgende Animation. Siehe [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv blinken müssen, halten Sie es klein. Generell begrenzen Sie die Größe des Blitzes auf ein Gebiet von etwa 341 x 256 Pixel oder weniger. Diese Pixelgröße setzt voraus, dass ein Betrachter sich in typischer Entfernung vom Bildschirm befindet. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus nächster Nähe betrachtet wird, wie bei einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf dem Handy, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR-Design einen Winkel verwenden, der eine Okularmaske enthält, **oder KANN mit einer Okularmaske verwendet werden**, wie im Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks wesentlich kleiner als 341 x 256 Pixel ist, da das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache im Hinblick auf Barrierefreiheit. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Luminosität Kontrastverhältnis_ bezeichnet, laut W3.org's Seite über [Kontrastreiche Farben](https://www.w3.org/WAI/perspective-videos/contrast/)), desto leichter ist der entsprechende Inhalt zu lesen. Benutzer mit geringem Sehvermögen sind besonders dankbar für Bemühungen, einen hohen Kontrast von Texten gegen ihren Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist **_reduzierung_** von Kontrast tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Erhöhen Sie den Kontrast nicht, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0,05) / (L2 + 0,05), wobei
    - L1 die [relative Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farbe ist und
    - L2 die [relative Helligkeit](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farbe ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder ins Web veröffentlicht wird. In Bezug auf Videos und animierte GIFs ist die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Ebenfalls für Bilder ist ein Online-Tool verfügbar, ist das Helligkeit- und Kontrast-Online-Tool von pinetools.com [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs herzustellen, beginnen Sie beispielsweise mit einem, das einen niedrigen Kontrast hat.

JavaScript ist ebenfalls eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel in **RGB** Farbraum beschrieben ist.

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

##### Vermeiden Sie vollständig gesättigte Rot-Töne für blinkNinhnhalt

Wie bereits in diesem Dokument erwähnt, organisierte die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens zu Entwickeln, der auf photosensitive Anfälle abzielt. Eines ihrer Ergebnisse war das Verständnis, dass _"Ein Blitz eine potenzielle Gefahr darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2, bei einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sichtwinkel von mindestens 0,006 Steradian (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) aufweist. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen."_ Sie bemerkten in diesem Konsens auch weiterhin: "_Unabhängig von der Leuchtdichte, wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko angesehen._"

### Stellen Sie alternative CSS-Styles zur Verfügung

Mit dem Verständnis, dass viel Animation und Blitzen über CSS-Methoden gesteuert werden können, ist es wichtig, Möglichkeiten zur Verfügung zu stellen, um alternative Optionen für Benutzer anzubieten, und die Kontrolle über diese Optionen bequem und sichtbar zu machen.

#### Alternative Stilblätter

Moderne Browser zeigen die alternativen CSS-Optionen in alternativen Stilen an, wenn die Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer durch das Menü „Ansicht“ gehen, in anderen Fällen werden sie in den Einstellungen angezeigt, manchmal beides. Aber viele Benutzer wissen nicht, dass sie in den Bestandsschutz von grundlegenden Methoden, mit offensichtlichen Tasten oder Links zur Änderung des Aussehens darauf hinweisen sollten, dass Benutzer sie sehen können. Auf diese Weise wird nicht mit oder mit der Fähigkeit des Browsers zur Wahl drumgerungen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die sich auf Spracherkennungsartikel verlassen, oft von alten Knöpfen und Links abhängig sind, weil ihre Beeinträchtigung sie daran hindert, eine Maus zu verwenden oder von Berührungseingaben auf mobilen Tablets profitieren kann.

Gängige Möglichkeiten zur Einbindung der alternativen Stylesheets in Ihre HTML-Dokumente sind das Verwenden der {{HTMLElement('link')}} Elementen und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element, neben und zusammen mit den Attributen von `rel="alternate stylesheet"` und für Titel, `title="..."` im {{HTMLElement('head')}} Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets zu integrieren, wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}} Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Indem Sie alternative Stylesheets verwenden (denken Sie daran, die Titel hinzuzufügen), bieten Sie den Benutzern die Möglichkeit, alternative Stile auszuwählen.

### Dynamisches Styleswitching

Ein Problem bei der Abhängigkeit vom Browser, um alternative Stile sichtbar zu machen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Tasten oder Links machen offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt viele Möglichkeiten, Umschalttasten hinzuzufügen, um dem Benutzer zu ermöglichen, zwischen verschiedenen Stylesheets zu wechseln. Das gesagt sind nicht alternative Stylesheets die einzigen Optionen. Eine andere Option besteht darin, das Erscheinungsbild der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung dynamischer Stilinformations](https://www.w3.org/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling-information), _"wo immer möglich, ist es wirklich beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da die endgültige Erscheinung aller Styling-Häkchen in einem einzigen Stylesheet gesteuert werden kann."_ Werfen Sie auch einmal einen Blick [in diesem Beitrag bei W3C's Seite,]("https://www.w3.org/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling-information") auf einige herzerfrischende Beispiele, um auf Nebenschaltflächen zuzugreifen und Anbändel-Optionen mit Buttons zu versehen.

### Extremfälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drakonische Lösung; aber es ist eine, die manchmal für Schullehrer und andere öffentliche Bedienstete notwendig ist, die Menschen mit extremer Empfindlichkeit bedienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, eine spezielle alternative Stylesheet zu entwickeln, die `display: none` verwendet. So geht es durch CSS:

```css
img {
  display: none;
}
```

#### Nutzen Sie die Möglichkeit von Medienabfragen mit {{HTMLElement('style')}}

Indem Sie Medienabfragen einrichten, ermöglichen Sie, dass Steuerungen durch den Benutzer, die in Browser oder im Betriebssystem verfügbar sind, kontrolliert werden. Siehe das MDN-Dokument, [Barrierefreiheit: was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein tolles Beispiel zu sehen, wie der `prefers-reduced-motion` Code eingebaut werden kann, besuchen Sie das MDN-Dokument darüber [Abmaecation on reduced motion](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie sich das Beispiel unten aus dem Abschnitt über ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Ein mächtiges Tool steht Entwicklern zur Verfügung über Window.matchMedia(). Eine großartige Ressource ist MDNs Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Funktion

Je häufiger der Bildschirm aufgefrischt wird, desto stabiler erscheint er dem menschlichen Auge, und desto weniger „flimmert“ er. Die überwiegende Mehrheit der modernen Technologie aktualisiert sich mit einer Rate, die keine Probleme mit Fotosensibilität verursacht. Jedoch aber nicht jeder hat das Einkommen, um sich die aktuellen Technologien leisten zu können: ältere oder unterdimensionierte Computer können geringe Aktualisierungsraten haben. [AbilityNet's Faktenblatt (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt weitere Details zu Aktualisierungsraten.

Ein sehr alter Artikel, " ["Epilepsie und CRT/LCD-Bildschirm-Flackern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort zur Aktualisierungsrate in Hz:

- _"Dieser Effekt ist noch bis 70 Hz wahrnehmbar und dokumentiert."_
- _"Diese Studien scheinen darauf hinzuweisen, dass Sie sich vor Aktualisierungsraten unter 70 Hz hüten sollten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung der Aktualisierungsfunktion, die in Kombination mit der Animation-Dauer oder der Übergangsdauer genutzt wird, um in einer für das menschliche Auge unmerklichen Geschwindigkeit zum Abschluss zu kommen. Mit anderen Worten, Eric's Technik spricht das Aktualisierungsratenproblem an. Das CSS unten stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Die [`update`](/de/docs/Web/CSS/@media/update) Medienfunktion wird verwendet, um die Fähigkeit des Ausgabe-Geräts abzufragen und so auf das Erscheinungsbild des Inhalts einzuwirken, nachdem es gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Funktionen

### Medienanfragen Stufe 5

EnvironmentMQ (geplant in Medienanfragen Stufe 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und gewaschen. Interessanterweise verzichtet die Spezifikation darauf die drei Stufen in Bezug auf eine Lumeneinheit zu definieren, da Geräte mit einem Lichtsensor in der Regel automatisch die Helligkeit des Bildschirms anpassen. Die Spezifikationen bemerken auch den Unterschied in Technologie, wie eink, das lesbar bei hellem Tageslicht bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht sind.
- `environment-blending`
  - : Aus dem W3C-Dokument Media Queries Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Eigenschaften der Anzeige des Benutzers abzufragen, sodass der Autor das Erscheinungsbild des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen Elemente und/oder das Layout der Seite je nach Display-Technologie zu ändern, um die Attraktivität oder Lesbarkeit zu optimieren."_

#### Benutzerpräferenz Medienfunktionen (geplant in Medienanfragen Stufe 5)

[Benutzerpräferenz Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editors Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend in der Bereitstellung der Benutzerkontrolle über Medien. Hier einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [Benutzerpräferenz Medienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion zeigt an, ob der Inhalt normal angezeigt wird oder ob Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) zwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf die Seite und überschreibt die vom Autor ausgewählten Farben. Vom W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt Forced Colors: "\_Die Forced Colors Medienfunktion wird verwendet, um zu ermitteln, ob der Benutzeragent einen [forcierten Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, in dem er eine vom Benutzer gewählte eingeschränkte Farbpalette auf die Seite erzwingt." Der Benutzer muss über diese Fähigkeit informiert werden und diese muss mit dem entsprechenden Wert für die `prefers-color-scheme` Anfragenmedienübereinstimmung haben.
- `light-level`
  - : Von W3C's Entwurfsdokument, Media Queries Level 5 Abschnitt Aktionen Stufen: "_Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfunktion ist verwendet, um das Umgebungslichtniveau, in dem das Gerät verwendet wird, abzufragen, um es dem Autor zu ermöglichen, das Design des Dokuments in Reaktion auf Benutzer abfragt."_ Dies wird ein Segen für diejenigen sein, die motorische Schwierigkeiten haben oder für einige, die geistige Herausforderungen haben und die passende "Taste" nicht finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Vom Ausdrucksmodal, Media Queries Level 5 Abschnitt [`laut Kontrast- größere Querverbindungen`](/de/docs/Web/CSS/@media/prefers-contrast): "_Die `prefers-contrast`-Schnittstelle wird verwendet, um festzustellen, ob der Benutzer hat das System gebeten, die Differenz zwischen angrenzenden Farben zu erhöhen oder zu verringern. Zum Beispiel viele Benutzer haben Schwierigkeiten, Text zu lesen, der einen kleinen Helligkeitsunterschied zum Hintergrund aufweist und einen größeren Unterschied bevorzugen würde."_ Manchmal kann es sogar auch einen solchen geben als zu viel Kontrast; ein Halo-Effekt um den Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Den Benutzern die Freiheit zu geben, die sich gemachten Kontraste zu reformieren ist definitiv ein Vorteil für die Barrierefreiheit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 vom CSSWG.org Entwürfe integriert mit in die [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) in HTML. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für die [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Sehen Sie sich das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList) für mehr Informationen an.

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft wird entnommen aus [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation).

**Anforderung:** Einige Benutzer können keinen nicht-wörtlichen Text und Symbole wie Metaphern, Idiome usw. verstehen und können den `literal`-Eigenschaft verwenden, um Text oder Bilder als nicht wortwörtlich zu kennzeichnen, wodurch der Autor die Möglichkeit hat, nicht wortwörtlichen Text und Bilder den Benutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu browsen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farben und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafik für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsthread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Flash-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Fotosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Einige Personen werden mit besonderer Empfindlichkeit gegenüber Blitzlichtern oder kontrastreichen visuellen Mustern wie Streifen, Gittern und Schachbrettmustern geboren. Aufgrund dieser Bedingung wird ihr Gehirn anfallsähnliche Entladungen erzeugen, wenn sie dieser Art von visueller Stimulation ausgesetzt sind."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flimmern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blitzende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster induzierte Anfälle: Expertenkonsens der Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheits-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -geräte — Farbmesstechnik und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Fotosensitive Epilepsie-Analyse-Tool

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärung](https://w3c.github.io/adapt/)
- [WAI-Adapt: Werkzeuge Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert SC 2.3.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Verweisen, die in den WCAG 2.1-Kriterien gemacht wurden)
- [Drei Blitze oder darunter Schwellenwert Erfolgskriterium 2.3.1 verstehen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition von relativer Helligkeit
