---
title: Web-Zugänglichkeit bei Anfällen und körperlichen Reaktionen
short-title: Vorbeugung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Dieser Artikel führt Konzepte ein, die darauf abzielen, Webinhalte für Personen mit vestibulären Störungen zugänglich zu machen und wie man Inhalte misst und verhindert, die Anfälle und/oder andere körperliche Reaktionen verursachen können.

## Überblick

### Anfälle

Anfälle, die durch Licht verursacht werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flimmern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere behindernde körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von „Reflex-Epilepsie“ — Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall der photosensitiven Epilepsie werden Anfälle speziell durch Blitzlichter ausgelöst, während andere Arten von Reflex-Epilepsien durch das Lesen oder Geräusche ausgelöst werden können. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie „Gamma Oscillations and photosensitive epilepsy“ [„Gamma Oscillations and photosensitive epilepsy“](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgestellt wird, „_Certain visual images, even in the absence of motion or flicker, can trigger seizures in patients with photosensitive epilepsy“_. Die Epilepsy Foundation spricht in ihrem Artikel „Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions“ [„Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions“](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: „_Static or moving patterns of discernible light and dark stripes have the same effect as flashing lights because of the alternation of dark and bright areas._“ Die Epilepsy Foundation of America Working Group kann das Problem ein wenig „quantifizieren“: _„A pattern with the potential for provoking seizures contains clearly discernible stripes, numbering more than five light-dark pairs of stripes in any orientation.“_ Neben Streifen ist bekannt, dass karierte Muster laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) ebenfalls photosensitive Anfälle auslösen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind Blitzlichter/Stroboskope. Dr. Selim Benbadis von USF's Comprehensive Epilepsy Program merkt an: „_The only thing that is really documented is flashing lights, which can trigger seizures in patients with photosensitive epilepsy. Only a few types of epilepsies are photosensitive though, and the vast majority of epilepsies are not._“ Neben Anfällen, die durch Photosensitivität hervorgerufen werden, kann auch das Hören bestimmter Musikstücke sogenannte musikerzeugte Anfälle auslösen, obwohl diese Anfallsarten weitaus seltener zu sein scheinen. Für eine großartige Einführung in das Thema musikerzeugter Anfälle besuchen Sie die Epilepsy Ontario-Webseite über [Musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel „A Revised Definition of Epilepsy“ [„A Revised Definition of Epilepsy“](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation klar, dass „_a seizure is an event and epilepsy is the disease involving recurrent unprovoked seizures._“ Laut der Epilepsy Foundation-Seite „How Serious Are Seizures?“ [„How Serious Are Seizures?“](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), „_Sudden unexpected death in epilepsy (SUDEP) is likely the most common disease-related cause of death in epilepsy. It is not frequent but it is a very real problem and people need to be aware of its risk_."

Der Punkt ist, dass Anfälle definitiv tödlich sein können und Entwickler und Designer unglaublich wichtig sind, um das Web für diejenigen, die empfindlich auf photosensitive oder musikerzeugte Auslöser reagieren, zu einem sichereren Ort zu machen.

Anfälle können tödlich sein, aber selbst die, die „nur“ lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation „Photosensitivity and Seizures“ [„Photosensitivity and Seizures“](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei photosensitiven Menschen Anfälle auslösen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund von Flimmern oder rollenden Bildern.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder alternierenden Mustern in verschiedenen Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, z.B. Sonnenlicht, insbesondere wenn es über Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel setzt fort, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Besonders zu beachten ist, dass es die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Bereich des Spektrums scheinen besonders problematisch zu sein. In dem Artikel „Understanding WCAG 2.0 Three Flashes or Below Threshold“ [„Understanding WCAG 2.0 Three Flashes or Below Threshold“](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein darauf hingewiesen: „_Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes“_ und geht sehr spezifisch darauf ein, dass: „_People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing.“_

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein `{{HTMLElement('div')}}`-Element, das so eingestellt ist, dass Farbe und Helligkeit mit hoher Frequenz geändert werden, was leicht über JavaScript gemacht werden kann, kann echten Schaden verursachen. Und, ein Flimmern kann überall auftreten. Zum Beispiel können „Spinner“, die häufig verwendet werden, um anzuzeigen, während Seiten geladen werden, leicht „flimmern“, während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit Problemen der motorischen Fähigkeiten. Zum Beispiel weist die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) darauf hin, dass „_Photosensitive seizures can be provoked by certain types of flashing in web or computer content, including mouse-overs that cause large areas of the screen to rapidly flash on and off repeatedly._“

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung stehen und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen zu sehen ist). Anfälle sind jedoch nicht die einzige negative körperliche Reaktion, die auf Blitzen, Flackern, Blinken und andere derartige Reize möglich ist. Im Jahr 1997 zeigte ein japanischer Zeichentrickfilm eine animierte „Virusbombe“. Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere erlitten Übelkeit, zitterten und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus eingeliefert werden mussten. Die unten aufgeführten körperlichen Störungen sind alles mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl „Blitzen“ und „Blinken“ manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flacker-Effekte mit einer Frequenz von mehr als 3 Hz und weniger als 55 Hz. Der Artikel der Epilepsy Foundation „Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions“ [„Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions“](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass „_Generally, flashing lights between the frequencies of five to 30 flashes per second (Hertz) are most likely to trigger seizures. In order to be safe, the consensus recommends that photosensitive individuals should not be exposed to flashes greater than three per second."_ Für einige Menschen können Blitzen/Blinken jedoch Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA weist in ihrem Dokument mit dem Titel „Blinking, Flashing, and Temporal Response“ [„Blinking, Flashing, and Temporal Response“](https://colorusage.arc.nasa.gov/flashing.php) darauf hin, dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitserregung sein können — was für Warnknöpfe notwendig ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Blinkende Knöpfe warnen auch, dass sie sparsam und mit Vorsicht eingesetzt werden müssen. Für Webdesign gilt: Systeme, die Unternehmensmitarbeiter durch „Hijacking“ des Bildschirms warnen, indem sie eine blinkende Warnung vor Notfällen bieten, müssen die Geschwindigkeit, Größe und Änderungen der Helligkeit auf dem Bildschirm berücksichtigen, während diese Warnungen angezeigt werden.

### Blitzen und Flackern — wie wird Gefahr quantifiziert?

Laut dem Artikel „Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group“ [„Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group“](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) „_A flash is a potential hazard if it has luminance ≥20 cd/m<sup>2</sup>, occurs at a frequency of ≥3 Hz, and occupies a solid visual angle of ≥0.006 steradians (approximately 10% of the central visual field or 25% of screen area at typical viewing distances)._“

Wie weit ist eine typische Betrachtungsdistanz? Die Empfehlung, die derzeit als typische Betrachtungsdistanz berücksichtigt wird, ist „_the area can be taken as applying to an area >25% of the area of a television screen, assuming standard viewing distances of ≥2 m (∼9 feet)._“ Seitdem hat sich viel geändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. Der Artikel „Certain Colors More Likely To Cause Epileptic Fits, Researchers Find“ [„Certain Colors More Likely To Cause Epileptic Fits, Researchers Find“](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass „_complexities underlying brain dynamics could be modulated by certain color combinations more than the others, for example, red-blue flickering stimulus causes larger cortical excitation than red-green or blue-green stimulus._“

### Blitzen & rotes Blitzen

[WCAG 2.3.1 allg. Flash und Rotes Flash Thresholds](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) werden wie folgt definiert:

- Ein **allgemeines Blitzen** wird definiert als ein Paar entgegengesetzter Änderungen in [relativer Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wo „ein Paar entgegengesetzter Änderungen“ eine Zunahme gefolgt von einer Abnahme ist oder umgekehrt;
- Ein **rotes Blitzen** wird definiert als ein Paar entgegengesetzter Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Untersuchungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop und entwickelte einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle, wobei festgehalten wurde: „_A flash is a potential hazard if it has luminance at least 20 cd/m<sup>2</sup>, occurs at a frequency of at least 3 Hz, and occupies a solid visual angle of at least 0.006 steradians (about 10% of the central visual field or 25% of screen area at typical viewing distances).“_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko dar: „_Irrespective of luminance, a transition to or from a saturated red is also considered a risk._“

### Größe und Entfernung

#### Wie groß? Es hängt ab

Sowohl die „relative“ Größe als auch die Entfernung spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) „_The combined area of flashes occurring concurrently occupies no more than a total of one quarter of any 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 by 768 pixels._“

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, wird im Artikel zur WCAG 2.3.1 fortgesetzt: „_The 1024 x 768 screen is used as the reference screen resolution for the evaluation. The 341 x 256 pixel block represents a 10 degree viewport at a typical viewing distance. (The 10 degree field is taken from the original specifications and represents the central vision portion of the eye, where people are most susceptible to photo stimuli.)_“

Dieses Pixelbereichsverhältnis berechnet die relative Größe, aber auch die Entfernung spielt eine Rolle.

Die Entfernung ist wichtig, weil sie das gesamte Sichtfeld beeinflusst. Wenn Betrachter für Spiele eine Augenmaske tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm umgeben. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, und kann auf Telefon, Computer oder Headset erlebt werden. Die Sorge um blinkende Bilder in einer Augenmaske wächst, da die Maske so nah an den Augen ist.

Forschungsergebnisse deuten im Allgemeinen darauf hin, dass die Nutzung von VR tatsächlich sicherer sein kann als der normale Bildschirmkonsum aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, „_The limited data so far available raise no special seizure concerns in terms of VR technology, although this view may change with more experience. Certain types of VR content, including bright flashes, provocative patterns, or color changes would be expected to provoke seizures, just as they do in the real world.”_

(Beachten Sie, dass einige Benutzer mit blinkenden Cursor nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax-Effekte

Kontrastreiche dunkle und helle geometrische Muster sind als Übeltäter bekannt; Streifen und Karos sind die am besten bekannten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkel Streifenpaare wahrscheinlich Anfälle provozieren und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind maximal acht Linien zulässig, aber wenn es wellt, nicht mehr als fünf Linien.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

„Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Streifenpaare in irgendeiner Ausrichtung umfassen. Wenn die hell-dunkel Streifen eines Musters kollektiv im Auge aus der erwarteten minimalen Betrachtungsentfernung einen soliden Winkel von >0,006 Steradian einnehmen, ist die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup>, und das Muster wird für ≥0,5 s präsentiert, dann sollte das Muster nicht mehr als fünf hell-dunkel Streifenpaare anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen.“

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn man von einem kleineren auf einen größeren Bereich wechselt, sowie den Kontrast erhöht und die räumliche Frequenz von niedrig auf mittel erhöht. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass das Gehirn beeinflusst wird, wenn man von grundlegenden Ausrichtungen (z.B. Streifen) zu einer mehrfachen (z.B. das Schachbrettmuster, das entsteht, wenn man ein Set von Streifen auf das Originalset, aber senkrecht dazu, legt) wechselt.

### Farben

Das Verstehen von Farben ist wichtig für die Zugänglichkeit. Siehe [Verstehen von Farben und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Web-Zugänglichkeit und Zugänglichkeit im Allgemeinen.

Wie sich die Farbe auf ihren Hintergrund bezieht — normalerweise in Bezug auf Kontrast formuliert — und wie drastisch sich die Farbe von Bild zu Bild in der Animation ändert, ist wichtig. Für mehr dazu siehe [Understanding Flashes or Below Threshold SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall von Rot

Es wurde nachgewiesen, dass [einige Farben eher epileptische Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird allgemein von der Farbe Rot beeinflusst. Ihre Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren beobachtet.

- **Rotentsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test mit ihm durchführen. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Für weitere Informationen darüber, wie ein Augenarzt diesen Test durchführt, siehe [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Personen mit traumatischer Hirnverletzung [die kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Sättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben dem Einfluss einer roten Umgebung auf die kognitive Funktion von Personen mit traumatischer Hirnverletzung scheint Farbe im roten Spektrum besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden bemerkte bei der Testung des Photosensitive Epilepsy Analysis Tool, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blitzen reagieren. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als „**websicher**“ gilt. Das bedeutet _nicht_, dass sie „sicher vor Anfällen“ ist, sondern nur, dass die Farbe „sicher“ von der zur Farberzeugung auf Bildschirmen verwendeten Technologie akkurat reproduziert werden kann.

## Messung zur Schadenprävention

Die Messung des Schadenspotentials ist ein guter Ausgangspunkt. Faktoren, die in Tests berücksichtigt werden, umfassen Farbe, Leuchtkraft, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Richtlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop zur Entwicklung eines Expertenkonsenses über photosensitive Anfälle. Die folgende Experten- und autoritative Information stammt aus: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, bei einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0.006 Steradian einnimmt (ungefähr 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Streifenpaare in irgendeiner Ausrichtung umfassen. Wenn die hell-dunkel Streifen eines Musters kollektiv im Auge aus der erwarteten minimalen Betrachtungsentfernung einen soliden Winkel von >0.006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 ist, und das Muster für ≥0,5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkel Streifenpaare anzeigen, wenn die Streifen die Richtung ändern, oszillieren, flackern oder den Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien lassen sich bei festen Medien, z.B. einer voraufgezeichneten Fernsehsendung, die Frame für Frame analysiert werden kann, einfacher anwenden als bei interaktiven Medien.

Das „cd/m<sup>2</sup>“ bezieht sich auf Candela pro Quadratmeter. Also wie bezieht sich dies für den Webentwickler auf Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung des von menschlichen Augen wahrgenommenen sichtbaren Lichts. Der Artikel von Wikipedia über „Candela pro Quadratmetre“ [„Candela per square metre“](https://en.wikipedia.org/wiki/Candela_per_square_metre) stellt es in Bezug auf das, was wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Das ist hilfreich, weil es einen spezifischen Standard gibt, der auf Monitoren, Druckern und im Internet angenommen wird, und dieser ist das **sRGB** (standard Red Green Blue).

> Als Maß für das pro Flächeneinheit emittierte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> aufweisen. Die meisten Verbraucher-Desktop-Liquid Crystal Displays (LCDs) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. High-Definition-Fernseher reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Erkenntnis ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungsinstrumenten und Entwicklern ist, da er leicht vom häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, in größtmöglichem Umfang die Art von Webinhalten zu quantifizieren und zu messen, die als Auslöser für Anfälle dienen können. Trotzdem darf nicht vergessen werden, dass Farbe genauso sehr eine Frage der menschlichen Wahrnehmung im Gehirn ist wie die Messung von Licht, das von einem Computerbildschirm kommt.

Neben den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Abweichungen und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Dozent Emeritus der Informatik an der Cal State University Long Beach, folgende Aussage zur „Helligkeit in der HSL-Farbskala“ [„lightness in the HSL color scale“](https://colortutorial.design/hsb.html), „…The distinction between levels of lightness is not actually linear as the HSL scale would imply; we are much more sensitive to changes in lighter values than to darker ones.“

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Forschung und Diskussionen laufen noch dazu, wie man die maschinelle Messung von Licht, das von einem Computerbildschirm zum menschlichen Auge geht, von der menschlichen Vision gefiltert und dann durch das menschliche Gehirn manipuliert wird, in Bezug setzen kann.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation „Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions“ [„Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions“](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), „_Children and adolescents are more prone than adults to have an abnormal response to light stimulation, and the first light-induced seizure almost always occurs before age 20“._ Der Artikel folgt mit dieser Statistik: „_Girls (60 percent) are more often affected than boys (40 percent), although seizures are more frequent in boys because they are more likely to be playing video games. Video games often contain potentially provocative light stimulation“._

**Benutzertests sind sehr problematisch.** Natürlich möchte niemand eine person, die zu Anfällen neigt, Benutzertests unterziehen. Es ist gefährlich. Dazu ist eines der ethischsten Dinge, die Entwickler und Designer tun können, Werkzeuge zu verwenden, die von Experten auf diesem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten zusammengearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare, ethisch und professionell von Forschern und Ärzten entwickelte Werkzeuge für Filme/Videos: **PEAT** und den **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat mit ihrem [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) einen Goldstandard gesetzt, und sie haben darauf geachtet, es **_kostenlos_** zum Download zur Verfügung zu stellen. PEAT kann Autoren helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Nutzungseinschränkung: **_Die Nutzung von PEAT zur Beurteilung kommerziell produzierter Materialien für Fernsehsendungen, Filme, Heimunterhaltung oder Spieleindustrie ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Verwendung des PEAT-Werkzeugs für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden können, daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen zur Zugänglichkeit für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, weder absichtlich noch unabsichtlich Schaden zuzufügen. Wenn wir unbedingt etwas einbeziehen müssen, das potenziell Schaden verursachen kann, ist es wichtig zu verhindern, dass Benutzer versehentlich auf die schädlichen Inhalte stoßen und ihnen Möglichkeiten zu bieten, Animationen zu verhindern und zu kontrollieren, um potenziellen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden verursachen

[WCAG Guideline 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: „_Do not design content in a way that is known to cause seizures or physical reactions“._ Kehren Sie davon ab, Animationen einzubeziehen, die ein Benutzer nicht kontrollieren kann. Entwickeln Sie keine Muster, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie unbedingt ein gif oder png mit Blinklicht einfügen müssen, zeichnen Sie es stattdessen im Videoformat auf, damit der Benutzer die Kontrolle darüber hat. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder es weniger schädlich zu machen.

#### Böswilligkeit verstehen

Stellen Sie sich als Entwickler oder Designer die Frage, ob stroboskopische Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß behandelt werden, gibt es diejenigen, die anstößige Inhalte von Ihrer Seite herunterladen und sie als Waffe verwenden können. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um über Animationen physischen Schaden zuzufügen, am Samstag, den 22. März 2008 begann: Die Epilepsy Foundation-Website wurde über Posts mit blinkenden Bildern und Links, die fälschlicherweise als hilfreich gekennzeichnet waren, gehackt. Benutzer mit vestibulären Störungen, die auf der Seite Hilfe suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen sind im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, nach dem Erhalt eines animierten gifs im Dezember 2016 einen Anfall erlitt: das blinkende gif trug die Botschaft „_You deserve a seizure for your posts“._

#### Zugang und Belichtung kontrollieren

Die Kontrolle der Belichtung der Seite ist der Schlüssel, um sicherzustellen, dass jemand, der zu Anfällen neigt, ihr nicht versehentlich ausgesetzt wird. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbenutzbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugang zu ihr, indem Sie zuerst eine Warnung über die Inhalte anzeigen und sie dann an einem Ort platzieren, an dem der Benutzer sich aktiv dafür entscheiden muss, sie zu sehen, wie durch Klicken auf eine Schaltfläche oder indem sichergestellt wird, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indexiert wird.

#### Nicht indexieren und nicht verfolgen

Durch das nicht Indexieren der Seite wird die Wahrscheinlichkeit reduziert, dass Benutzer sie über Suchvorgänge finden.

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

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, Animation _bereits früh_ in einer gegebenen HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285).

Mit animierten GIFs stellen Sie sicher, dass die Animation inaktiv bleibt, bis der Benutzer sich entscheidet, sie zu aktivieren. Beispielsweise muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu realisieren, z. B. das **Nicht**-Hinzufügen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attributs zu `<video controls>`, oder das Setzen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein mächtiges Beispiel zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, „[Toggling Animations On and Off](https://www.kirupa.com/html5/toggling_animations_on_off.htm)“. Kirupa verwendet den `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein sehr zugängliches Erlebnis unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS transitions](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für das Anfangsstadium der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen sowohl stoppen als auch starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Sicherstellen, dass Steuerelemente programmatisch verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das HTML-`controls` Attribut wider, welches steuert, ob Benutzeroberflächensteuerungen zur Wiedergabe des Medieninhalts angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerelemente hat, auf die ein Benutzer zugreifen kann, fügen Sie das Wort „controls“ zu HTML-Video- und Audioelementen hinzu.

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

Indem Sie dasselbe Beispiel auf Audio anwenden:

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

Beachten Sie, dass der Ton in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, obwohl die Inhalte sich innerhalb des {{HTMLElement('video')}}-Elements befinden, anstatt des {{HTMLElement('audio')}}-Elements. Dieses Beispiel stammt aus dem Abschnitt zur [muted media attribution](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Ton einzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Das scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen für ihre Handhabung stark, und aus diesem Grund gibt es keine universelle Lösung für das Problem. Dies wird weiter durch die Tatsache kompliziert, dass sogar wie Dateien klassifiziert werden, beeinflusst, wie sie behandelt werden sollten. Zum Beispiel versteht man das .gif-Dateiformat in der Regel als ein Bild, wird jedoch in einigen Kreisen auch als Videoformat angesehen, da es animiert sein kann. Eine umfassende Liste von Medientypen finden Sie auf der [IANA.org-Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie aufzuspüren, sind keine beiläufige Übung. Sie könnten daran interessiert sein, dem [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu folgen. So ziemlich jede Art von Bild kann animiert werden; wie sie animiert werden, variiert, und daher variiert auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDN's Tutorial über Canvas hat einen großartigen Abschnitt über [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Hauptbestandteil in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit Bildschirmaktualisierungen interagiert. Siehe den Artikel „[Controlling fps with requestAnimationFrame?](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe)“, in dem die Feinheiten der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung behandelt werden.
- **GIFs (Raster)**: Schwer zu knacken, weil die Kontrolle für deren Animation innerhalb der gif-Dateien selbst liegt. Informationen zur Kontrolle der Geschwindigkeit von GIFs finden Sie in W3C's G152: [Setting animated gif images to stop blinking after n cycles (within 5 seconds)](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante der Video-Version von GIF angesehen. Das Format ist nicht standardisiert und muss auf eine „echte“ Videodatei (z. B. eine .webm-Datei) verweisen, die an einem anderen Ort vorhanden sein muss.
- **JPG (Raster)**
- **MNG (Raster)**: Network Graphics mit Mehrfachbilder ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert sein.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), weist darauf hin, dass „SVG is a text-based open Web standard. It is explicitly designed to work with other web standards such as [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), and [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL).“ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Dies bedeutet, dass das Erscheinungsbild und die Animation von SVGs über CSS-Schlüsselbilder und Animationen gesteuert werden können. Um mit JavaScript zu interagieren, siehe die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung verwendet.

#### Text kann ebenfalls animiert werden

Übersetzungen und Transformationen können Text in einem Div animieren und Schaden verursachen. Bewegter Text kann aus den gleichen Gründen wie bewegte Bilder Anfälle auslösen, daher vermeiden Sie die Animation Ihres Textes. Es ist eine gute Idee, bewegten Text sowieso zu vermeiden, da viele Screenreader keinen bewegten Text lesen können und es eine schlechte Benutzererfahrung darstellt, auch für Menschen ohne Seh- oder vestibuläre Probleme.

### CSS für Animationen

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um dem Benutzer eine leistungsstarke Erfahrung zu bieten. Wir haben die `animation`-Eigenschaft bereits weiter oben in diesem Dokument erwähnt. Sie ist eigentlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden angegeben werden `(s)` oder Millisekunden `(ms)`. Ein Standardwert von `0s` gibt an, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die Animationseigenschaft ist bereits mächtig für sich allein, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion` kann eine mächtige Reihe von Optionen für den Benutzer eingerichtet werden. Das Setzen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstatt sie auf `animation: none` und `transition: none` zu setzen, bietet eine Sicherheitsmaßnahme, um Problemen vorzubeugen, in jedem Fall, dass eine Abhängigkeit von der Animation besteht.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der größte Teil des JavaScript-Codes, der auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Abspielrate sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und wird als normale Geschwindigkeit angesehen; ein Wert von 0.5 ist die halbe Geschwindigkeit, ein Wert von 2.0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Eigenschaft der Wiedergabegeschwindigkeit: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) liefert das folgende Codebeispiel, um alle Animationen auf einer Seite auf halbe Geschwindigkeit zu verlangsamen:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animationen

Eine der einfachsten Möglichkeiten ist, mit einem Bild zu beginnen, das bereits vorhanden ist, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie hier GIFs, JPGs, PNGs, SVGs und andere Dateitypen als Bildquelle verwenden können, solange es sich um zugelassene Dateitypen - und Größen - in Ihrer Umgebung handelt. SVGs sind oft nicht zugelassen, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet hervorragende Beispiele dafür, indem mehrere Bildquellen für die Sonne, Erde und den Mond verwendet werden und verschiedene Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde, die sich um die Sonne bewegt, und des Mondes, der sich um die Erde dreht, eingesetzt werden. Verwenden Sie den im Tutorial verfügbaren Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie unbedingt und zweifellos eine blinkende Animation verwenden müssen

Stellen Sie sicher, dass es eine Kontrollmöglichkeit dafür gibt. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter sie zuerst sieht, und dass ein Benutzer sich aktiv dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerelemente für den Benutzer verfügbar macht, ist eine Gif-Datei. Die Animationsgeschwindigkeit wird innerhalb des Gif-Bildes selbst gesteuert. Die Konvertierung eines animierten gifs zu einem Video ermöglicht es, Steuerelemente auf die Animation zu setzen, und gibt dem Benutzer Entscheidungsfreiheit. Es gibt viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Setzen Sie die Erwartungen der Benutzer

Geben Sie Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.1 Success Criterion 3.2.5 Change on Request](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt und zweifellos blinken müssen, halten Sie es klein. Allgemein gesagt, begrenzen Sie die Größe des Blitzes auf ein etwa 341 x 256 Pixel großes oder kleineres Gebiet. Diese Pixelgröße geht davon aus, dass sich ein Betrachter in einer typischen Entfernung vom Bildschirm befindet. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in Nahaufnahme betrachtet werden soll, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwickeln, das eine Augenmaske verwendet **oder genutzt werden kann**, wie in Firefox Reality (ein Browser für virtuelle Realität), sorgen Sie dafür, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je größer der Kontrast der Textfarbe zu ihrem Hintergrund (technisch als _Lichtstärke-Kontrastverhältnis,_ gemäß W3.org's Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter lässt sich solcher Inhalt lesen. Benutzer mit Sehschwächen schätzen besonders die Bemühungen, einen hohen Kontrast zwischen Text und Hintergrund sicherzustellen. Wenn der Inhalt jedoch animiert ist, ist das **_reduzieren_** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Reduzieren Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde festgestellt werden.

Das Kontrastverhältnis wird in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren der Farben ist.

Es ist am besten, wenn Sie den Kontrast anpassen, bevor er hochgeladen oder ins Web veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Ebenso gibt es für Bilder ein Online-Tool, verfügbar unter pinetools.com, [Brightness and contrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, beginnen Sie zum Beispiel mit einem mit einem niedrigeren Kontrastverhältnis.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt „Example: Setting the background color of a paragraph“ [„Example: Setting the background color of a paragraph“](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Durchqueren einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB** Farbraum beschrieben wird.

**HTML Inhalt [(link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

```html
<body>
  <input type="button" value="Set paragraph background color" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript Inhalt [(link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

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

#### Vermeiden Sie voll gesättigtes Rot für blinkende Inhalte

Wie früher in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass „_A flash is a potential hazard if it has luminance at least 20 cd/m2, occurs at a frequency of at least 3 Hz, and occupies a solid visual angle of at least 0.006 steradians (about 10% of the central visual field or 25% of screen area at typical viewing distances). A transition to or from saturated red also is considered a risk._“ Sie stellen auch fest, dass derselbe Konsens vertreten ist: „_Irrespective of luminance, a transition to or from a saturated red is also considered a risk._“

### Alternativoptionen für CSS-Stile bereitstellen

Unter Berücksichtigung der Tatsache, dass viel Animation und Blitzen über CSS-Methoden gesteuert werden kann, ist es wichtig, Möglichkeiten zu erkunden, um alternative Optionen für Benutzer verfügbar zu machen, und um die Kontrolle über diese Optionen bequem und sichtbar zu gestalten.

#### Alternative Stylesheets

Moderne Browser werden die alternativen CSS, die in alternativen Stylesheets verfügbar sind, anzeigen, wenn Benutzer wissen, wo sie sie suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn Benutzer durch das Menü Ansicht navigieren, in anderen Fälle erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie in den Browser- oder Eintstellungen nach diesen Optionen suchen sollen, sodass es sich lohnt, Dinge auf altmodische Weise zu tun, mit offensichtlichen Schaltflächen oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Dies wird nicht in Konflikt mit, oder die Fähigkeit des Browsers, die alternativen Stile auszulesen, oder die Fähigkeit des Benutzers, in den Einstellungen Präferenzen festzulegen, überschreiben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie solche, die sich auf Sprachsteuerungssysteme verlassen, oft auf Legacy-Buttons und -Links angewiesen sind, weil ihre Behinderung es ihnen nicht erlaubt, eine Maus zu verwenden oder von Touch-Events auf Tablets zu profitieren.

Gängige Möglichkeiten, die alternativen Stylesheets in Ihr HTML-Dokumente einzufügen, sind die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element, zusammen mit und gemeinsam mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Bereich der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets einzufügen, wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) richten Sie es so ein, dass Benutzer in der Lage sind, über ihre Browser, alternative Stile auszuwählen.

### Dynamisches Stilumschalten

Ein Problem bei der Abhängigkeit von dem Browser, alternative Styles zu zeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, die alternativen Styles zu entdecken. Oder wegen ihrer Behinderung sind nicht in der Lage, es zu tun. Schaltflächen oder Links machen es offensichtlich, dass viele dankbare Benutzer Optionen haben. Es gibt eine Vielzahl von Möglichkeiten, Umschaltknöpfe hinzuzufügen, um es den Benutzern zu ermöglichen, zu den verschiedenen Stylesheets zu wechseln. Davon abgesehen sind alternative Stylesheets nicht die einzige Option. Eine weitere Möglichkeit ist, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), „_where possible, it really is best practice to dynamically manipulate classes via the [`className`](/de/docs/Web/API/Element/className) property since the ultimate appearance of all of the styling hooks can be controlled in a single stylesheet_.” Eines der besten Beispiele dafür, wie man dies tut, ist auf der W3C-Seite „C29: [Using a style switcher to provide a conforming alternate version](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Text-Only-Alternativen

Ein separates, alternatives Stylesheet, welches verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drastische Lösung; aber es ist eine, die für Lehrer in Schulen und anderen öffentlichen Diensten manchmal notwendig ist, die diejenigen mit extremen Empfindlichkeiten dienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu entwickeln, das `display: none` verwendet. Hier ist, wie man es über CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Indem Sie Medienabfragen einrichten, ermöglichen Sie Benutzern Kontrollen; diese Kontrollen werden im Browser oder im Betriebssystem zur Verfügung gestellt. Siehe das MDN-Dokument, [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf die Kontrollen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel zu sehen, wie man den Code `prefers-reduced-motion` verwendet, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie das Beispiel unten aus dem Abschnitt „New in Chrome 74“ [„New in Chrome 74“](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Ambient Light API nicht verfügbar ist. Unterstützung entsteht gerade.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein leistungsstarkes Tool, das Entwicklern über Window.matchMedia() zur Verfügung steht. Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Funktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und umso weniger „flackert“ er. Die überwältigende Mehrheit moderner Technologie aktualisiert mit einer Geschwindigkeit, die keine Probleme mit Lichtempfindlichkeit verursacht. Allerdings kann es sich nicht jeder leisten, die neueste Technologie zu besitzen: Ältere oder leistungsschwächere Computer können niedrige Bildwiederholfrequenzen haben. [AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republic's „Epilepsy and CRT/LCD screen flicker“ [„Epilepsy and CRT/LCD screen flicker“](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), enthielt eine interessante Antwort zur Bildwiederholrate in Hz:

- _„Dieser Effekt ist bis zu 70 Hz merkbar und dokumentiert.“_
- _„Diese Studien scheinen anzugeben, dass man Bildwiederholraten unter 70 Hz vermeiden und eine Rate verwenden sollte, die nicht durch 10 teilbar ist.“_

Eric Bailey von CSS-Tricks fand eine innovative Verwendung der Update-Funktion, die in Kombination mit der Animation-Dauer oder Transition-Dauer verwendet wird, um mit einer für das menschliche Auge unmerklichen Rate abzuschließen. Mit anderen Worten, Erics Techniken adressieren das Problem der Bildwiederholungsrate. Der folgende CSS-Code stammt aus dem CSS-Tricks-Artikel [„Revisiting prefers-reduced-motion, the reduced motion media query“](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.orgs Seite über [Medienabfragen 4](https://www.w3.org/TR/mediaqueries-4/):

Das `update` Medien-Feature wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, nachträglich das Erscheinungsbild des Inhalts zu ändern, sobald er gerendert ist. Es hat die Werte „none“, „slow“ und „fast“.

## Entwicklungs- & experimentelle Features

### Medienabfragen Level 5

EnvironmentMQ (geplant in Medienabfragen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Stufen in Bezug auf eine Messung von Lux zu definieren, da Geräte mit einem Lichtsensor in der Regel die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen weisen auch auf die Unterschiede in der Technologie hin, wie z. B. e-ink, das bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht sind.
- `environment-blending`
  - : Aus dem W3C-Dokumentenentwurf, Medienabfragen Level 5: „_The [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) media feature is used to query the characteristics of the user's display so the author can adjust the style of the document. An author might choose to adjust the visuals and/or layout of the page depending on the display technology to increase the appeal or improve legibility.“_

#### Medien-Feature Benutzervorlieben (geplant in Medienabfragen Level 5)

[User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editors Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind vielversprechend, um Benutzern Kontrolle über Medien zu gewähren. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [Medieneinstellungen für Benutzerpräferenzen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), „The [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) media feature indicates whether the content is displayed normally, or whether colors have been inverted.“\_
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), the user agent enforces the user's preferred color palette on the page, overriding the author's chosen colors. Aus dem W3C-Dokumentenentwurf, Medienabfragen Level 5 Abschnitt über Forces-Farben: „_The forced-colors media feature is used to detect if the user agent has enabled a [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) where it enforces a user-chosen limited color palette on the page.“_ Dem Benutzer muss diese Eigenschaft mitgeteilt werden, und sie muss mit dem entsprechenden Wert für die prefers-color-scheme Medienabfrage zusammenarbeiten.
- `light-level`
  - : Aus dem W3C-Dokumentenentwurf, Medienabfragen Level 5 Abschnitt über Light-Level: „_The [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) media feature is used to query about the ambient light-level in which the device is used, to allow the author to adjust style of the document in response.“_ Dies wird für diejenigen, die motorische Probleme haben, oder für einige mit kognitiven Schwierigkeiten, die nicht die richtige „Schaltfläche“ finden können, um ihre Bildschirmeinstellungen zu ändern, ein Segen sein.
- bevorzugter Kontrast
  - : Aus dem W3C-Dokumentenentwurf, Medienabfragen Level 5 Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): „_The `prefers-contrast` media feature is used to detect if the user has requested the system increase or decrease the amount of contrast between adjacent colors. For example, many users have difficulty reading text that has a small difference in contrast to the text background and would prefer a larger contrast._“ Manchmal kann es tatsächlich zu viel Kontrast geben; ein Halo-Effekt um den Text kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verringern. Den Kontrast in die Kontrolle des Benutzers zu geben, ist ein deutliches Geschenk für die Barrierefreiheit.

#### `MediaQueryList` Interface

Abschnitt 4.2 aus den Entwürfen von CSSWG.org integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), wie sie in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Weitere Informationen finden Sie im MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft ist aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) entnommen.

**Anforderung:** Einige Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Redensarten usw. nicht verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht wörtlich identifizieren und ermöglicht es dem Autor, nicht-wörtlichen Text und Bilder Benutzern zu erklären.

#### Übergänge (für CSS und SVG)

Folgendes stammt aus dem [Web Animations model](https://www.w3.org/TR/web-animations-1/) CSSWG.org Entwürfen.

Das Web-Animationsmodell soll die notwendigen Funktionen zur Verfügung stellen, um [CSS-Übergänge](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) auszudrücken.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: Beschreibung der Farbe](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsfaden
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitzdefinition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/ungenaue Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensitivität werfen, eine der komplexesten Zustände der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Einige Personen sind von Geburt an besonders empfindlich gegenüber blinkenden Lichtern oder kontrastreichen visuellen Mustern, wie Streifen, Gittern und Schachbrettmuster. Aufgrund dieser Bedingung produziert ihr Gehirn anfallsähnliche Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt sind."_
- [Gamma-Oszillationen und lichtempfindliche Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst in Abwesenheit von Bewegung oder Flimmern, können Anfälle bei Patienten mit lichtempfindlicher Epilepsie auslösen."_
- [Lichtempfindliche Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Lichtempfindliche Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Epilepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheits-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Herausgeber: Gregg Vanderheiden Ph.D.

### Harding

Zusammen mit dem PEAT-Tool wird dies allgemein anerkannt als einer der beiden "Goldstandards" für die Analyse von Lichtblitzen.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiteter RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Zusammen mit dem Harding-Tool wird dies allgemein anerkannt als einer der beiden "Goldstandards" für die Analyse von Lichtblitzen.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Webanimationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalisierungssemantik-Explainer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitspapier
- [WAI-Adapt: Werkzeuge-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitspapier
- [Drei Blitze oder darunter Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Verweisen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder darunter Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animationen Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitspapier
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlichen Dank an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory at USF and TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige, großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ in enormer Dankbarkeit dem Trace Research & Development Center verpflichtet, dass sie ihr großartiges Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung stellen.
