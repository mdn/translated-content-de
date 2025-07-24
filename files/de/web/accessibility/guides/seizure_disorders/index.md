---
title: Webzugänglichkeit bei Anfällen und körperlichen Reaktionen
short-title: Vermeidung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

Dieser Artikel führt in Konzepte ein, die darauf abzielen, Webinhalte für Menschen mit vestibulären Störungen zugänglicher zu machen, und zeigt auf, wie man Inhalte messen und verhindern kann, die Anfälle und/oder andere körperliche Reaktionen auslösen.

## Überblick

### Anfälle

Durch Licht ausgelöste Anfälle sind als fotosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können fotosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können alle Inhalte erzeugen, die Anfälle oder andere lähmende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch ohne Animation körperliche Reaktionen hervorrufen. Fotosensitive Epilepsie ist eine Art "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei fotosensitiver Epilepsie werden Anfälle speziell durch Blitze ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma-Oszillationen und fotosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgestellt wird: "_Bestimmte visuelle Bilder können selbst in Abwesenheit von Bewegung oder Flackern Anfälle bei Patienten mit fotosensitiver Epilepsie auslösen_". Die Epilepsy Foundation beschreibt in ihrem Artikel, ["Licht auf Photosensitivität werfen, eine der komplexesten Bedingungen der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), dass statische oder bewegte Muster von erkennbaren hellen und dunklen Streifen denselben Effekt wie blinkende Lichter haben, da sich die dunklen und hellen Bereiche abwechseln. Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen mit mehr als fünf hell-dunkel Paaren in irgendeiner Ausrichtung_". Neben Streifen sind auch karierten Muster bekannt, fotosensitive Anfälle zu verursachen, wie [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) berichtet.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die Anfälle bei Patienten mit fotosensitiver Epilepsie auslösen können. Nur einige Arten von Epilepsien sind fotosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Zusätzlich zu fotosensitiv ausgelösten Anfällen kann auch das Hören bestimmter Musikstücke musikenogene Anfälle auslösen, obwohl diese Anfallsarten scheinbar viel seltener sind. Eine gute Einführung in das Thema musikenogene Anfälle finden Sie auf der Webseite von Epilepsy Ontario über [Musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) bemerkt die Epilepsy Foundation, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die durch wiederkehrende unprovozierte Anfälle gekennzeichnet ist_". Laut der Seite der Epilepsy Foundation, ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"Plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbezogene Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich seines Risikos bewusst sein."_

Der Punkt ist, dass Anfälle definitiv tödlich sein können, und Entwickler und Designer sind unglaublich wichtig, um das Web für Menschen mit Empfindlichkeiten gegenüber fotosensitiven oder musikenogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst diejenigen, die "nur" schwächend sind, können so schwer sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensitivität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die Anfälle bei fotosensitiven Menschen verursachen können; hier ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund von Flimmer- oder rollenden Bildern.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder abwechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flickert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die fotosensitive Reaktion auszulösen. Von besonderem Interesse ist, dass es die Wellenlänge des Lichts als möglichen Faktor einschließt; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Verstehen von WCAG 2.0 Drei Blitze oder darunter Schwelle"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: "_Einzelpersonen mit fotosensiblen Anfallsstörungen können einen Anfall durch Inhalte erleiden, die mit bestimmten Frequenzen für mehr als ein paar Blitze blinken_" und stellt fest, sehr spezifisch, dass: "_Menschen sind empfindlicher auf rotes Blinken als auf andere Farben, so dass ein spezieller Test für gesättigtes rotes Blinken bereitgestellt wird_".

Man braucht nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es Farbe und Leuchtkraft mit hoher Frequenz ändert, was leicht mit JavaScript erreicht werden kann, kann echten Schaden anrichten. Und Flackern kann überall auftreten. Zum Beispiel können "Spinners", die häufig verwendet werden, während Seiten laden, leicht "flackern", während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel stellt die Seite des Trace Research & Development Centers [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"photosensitive Anfälle durch bestimmte Arten von Flackern in Web- oder Computerinhalten, einschließlich Mausbewegungen, die große Bereiche des Bildschirms schnell ein- und ausschalten lassen, provoziert werden können"_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit vielen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen zu sehen ist). Anfälle sind jedoch nicht die einzige mögliche negative körperliche Reaktion auf Blitzen, Flackern, Blinken und andere derartige Reize. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten an Übelkeit, Zittern und blutigem Erbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "Blitzen" und "Blinken" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine von Epilepsys komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"Im Allgemeinen sind blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten, Anfälle auszulösen. Um sicher zu sein, wird empfohlen, dass fotosensitive Personen nicht Blitzen über drei pro Sekunde ausgesetzt werden."_ Für einige Menschen können jedoch Blitz/Blink-Symptome auch bei weniger als 3 Hz auftreten.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA stellt in ihrem Dokument ["Blinken, Blitzen und zeitliche Reaktion"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen starke Werkzeuge zum Aufmerksammachen sein können – wie notwendig für Warnknöpfe (dies setzt voraus, dass Benutzer den Bildschirm immer noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Bei einigen Benutzern wird auch darauf hingewiesen, dass sie sparsam und mit Vorsicht verwendet werden müssen. Wie es sich auf das Webdesign bezieht, müssen Systeme, die Unternehmensmitarbeiter auf Gefahr aufmerksam machen, indem sie den Bildschirm "kapern", um eine blinkende Warnung einer Notwendigkeit auszustrahlen, die Rate, Größe und die Leuchtkraftveränderungen auf dem Bildschirm berücksichtigen, während diese Warnungen ausgeblitzt werden.

### Blitzen und Flackern—Wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist _"Ein Blitz ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> aufweist, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradian umfasst (ungefähr 10% des zentralen Gesichtsfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)."_

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die zur Zeit der Erstellung dieses Dokuments betrachtet wurde, war "_der Bereich kann als auf einen Bereich von >25% der Fläche eines Fernsehbildschirms bezogen betrachtet werden, vorausgesetzt Standardbetrachtungsabstände von ≥2 m (∼9 Fuß)"_. Viel hat sich seitdem geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Bestimmte Farben sind eher für epileptische Anfälle verantwortlich, Forscher finden heraus"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die die Dynamik des Gehirns beeinflussen, könnten durch bestimmte Farbkombinationen mehr als andere moduliert werden, z. B. ein rot-blau flackernder Reiz verursacht größere kortikale Erregung als ein rot-grüner oder blau-grüner Reiz."_

### Blitzen & Rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und rotes Blitz-Grenzwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeines Blitzlicht** ist definiert als ein Paar gegensätzlicher Änderungen der [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und dabei ein "Paar gegensätzlicher Änderungen" eine Erhöhung gefolgt von einer Verringerung, oder eine Verringerung gefolgt von einer Erhöhung ist;
- Ein **rote Blitzlicht** ist definiert als jedes Paar gegensätzlicher Übergänge, bei denen ein gesättigter Rotton beteiligt ist.

Diese Standards stützen sich auf frühere Forschungen. 2004 organisierte die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über fotosensitive Anfälle zu erzielen, dabei wurde festgestellt: _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0.006 Steradian einnimmt (ungefähr 10% des zentralen Gesichtsfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)." Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko dar: "\_Ungeachtet der Leuchtdichte stellt ein Übergang zu oder von einem gesättigten Rot ebenfalls ein Risiko dar._"

### Größe und Entfernung

#### Wie groß? Es hängt davon ab

Sowohl die "relativen" Größe als auch die Entfernung spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/) _"nimmt das kombinierte Flächenmaß der gleichzeitig auftretenden Blitze nicht mehr als insgesamt ein Viertel eines jeden 341 x 256 Pixel Rechtecks irgendwo auf dem angezeigten Bildschirm ein, wenn der Inhalt bei 1024 x 768 Pixel betrachtet wird."_

Der Punkt, dass das Gesichtsfeld eine wichtige Überlegung ist, kommt im Artikel zur Sprache, der WCAG 2.3.1 thematisiert und weitergeht: "_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block stellt ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Feld stammt aus den ursprünglichen Spezifikationen und repräsentiert den zentralen Sehanteil des Auges, wobei Menschen am empfindlichsten für Foto-Reize sind.)"_

Dieses Pixel-Flächenverhältnis berechnet die relative Größe, aber auch die Entfernung spielt eine Rolle.

Die Entfernung ist wichtig, weil sie das gesamte Gesichtsfeld beeinflusst. Wenn Betrachter Okular-Masken zum Spielen tragen, ist das Gesichtsfeld wahrscheinlich vollständig vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, die auf Telefon, Computer oder Headset erlebt werden kann. Das Problem mit blinkenden Bildern in einer Okularmaske wird zunehmend wichtig, da die Maske so nah an den Augen ist.

Forschungen deuten insgesamt darauf hin, dass die Nutzung von VR tatsächlich sicherer sein könnte als der normale Bildschirmkonsum, aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen: _"Die bisher verfügbaren begrenzten Daten wecken keine besonderen Anfallbedenken in Bezug auf VR-Technologie, obwohl sich diese Sichtweise mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokativer Muster oder Farbwechsel, würden erwartetsein Anfälle auslösen, genau wie sie es in der realen Welt tun."_

(Beachten Sie, dass einige Benutzer mit blinkenden Cursor nicht sehen können und Migräne, Reisekrankheit und Desorientierung auftreten können, obwohl blinkende Cursor nur einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxeneffekte

Kontrastierende dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsy Foundation of America listet auf, wie viele hell-dunkel Paare von Streifen wahrscheinlich Anfälle provozieren und in welchen Bedingungen. Wenn ein Muster gleichmäßig und gerade ist, sind acht Linien die maximal zulässigen, aber wenn es sich wölbt, sind nicht mehr als fünf Linien erlaubt.

Parallaxeneffekte können Desorientierung auslösen. Verwenden Sie Parallaxeneffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie abzuschalten.

"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen mit mehr als fünf hell-dunkel Paaren in irgendeiner Ausrichtung. Wenn die hell-dunkel Streifen eines Musters zusammen am Auge aus dem minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0.5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkel Paare umfassen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst mit den oben aufgeführten Messwerten kommen zusätzliche Faktoren ins Spiel. Beispielsweise erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, wenn Sie von einem kleineren Bereich zu einem größeren wechseln, ebenso wie bei Erhöhung des Kontrasts und Erhöhung der räumlichen Häufigkeit von einer niedrigen zu mittleren. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass der Übergang von einfachen Ausrichtungen (z. B. Streifen) zu einer mehrfachen (z. B. das kariert

e Muster, das entsteht, wenn man ein Satz von Streifen auf einen anderen, aber senkrecht dazu, legt) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Barrierefreiheit. Lesen Sie [Verstehen von Farben und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance), wie es sich auf die Web-Zugänglichkeit und die Barrierefreiheit im Allgemeinen bezieht.

Wie sich die Farbe zu ihrem Hintergrund verhält – normalerweise in Bezug auf Kontrast formuliert – und wie drastisch sich die Farbe von Bild zu Bild in einer Animation ändert, ist wichtig. Für mehr dazu siehe [Drei Blitze oder darunter Schwellenwert Verstehen SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde gezeigt, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Ihre Wirkung auf das Verhalten wurde sogar bei Tieren beobachtet.

- **Rotentsättigungstests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte dies zu einem Test gemacht haben. Der Rotentsättigungstest bewertet die Integrität des Sehnervs. Für weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, siehe [Rotentsättigung](https://www.smartoptometry.app/red-desaturation/).
- **Umgebung in Rot:** Studien haben gezeigt, dass bei Menschen, die unter Hirnverletzungen leiden, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit Hirnverletzungen beeinflusst, scheint Farbe im roten Spektrumsbereich besondere Sorge und besondere Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei der Testung des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Sehen Sie sich das Video an, [Das Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das heißt _nicht_, dass es "sicher ist, keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe "sicher" von der Technologie, die Farbe auf Bildschirmen erzeugt, genau reproduziert werden kann.

## Messen zur Schadenvermeidung

Die Messung des Potenzials für Schäden ist ein guter Ausgangspunkt. Die in Tests berücksichtigten Faktoren umfassen Farbe, Leuchtkraft, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Richtlinien zur Bewertung von Inhalten.

Im August 2004 organisierte die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu fotosensitiven Anfällen zu entwickeln. Die folgende, fachliche und maßgebliche Information stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen visuellen Winkel von ≥0.006 Steradian einnimmt (ungefähr 10% des zentralen Gesichtsfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot gilt ebenfalls als Risiko. Ein Muster, das das Potenzial hat, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare in irgendeiner Ausrichtung aufweisen. Wenn die hell-dunkel Streifen eines Musters zusammen am Auge aus dem minimal erwarteten Betrachtungsabstand einen festen Winkel von >0.006 Steradian einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt, und das Muster für ≥0.5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkel Paare umfassen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Grundsätze sind einfacher anzuwenden im Falle von festem Medium, zum Beispiel eine voraufgezeichnete TV-Show, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf "Candela pro Quadratmeter". Also wie bezieht sich das für den Webentwickler auf Messungen für Farbe, Leuchtkraft und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von den menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) setzt es in Bezug zu dem, was wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Farbraum. Das ist hilfreich, weil es einen bestimmten Standard gibt, der auf Monitoren, Druckern und im Internet angenommen wird, und das ist das **sRGB** (standard Red Green Blue).

> Als Maß für Licht, das pro Flächeneinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten gängigen Desktop-[LCDs](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [HDTVs](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Quintessenz ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht vom häufig verwendeten Hex-Code umgewandelt werden kann.

### Berücksichtigung der menschlichen Physiologie und Psychologie

Viele Experten arbeiten daran, die Art von Webinhalten, die Anfälle auslösen können, so weit wie möglich zu quantifizieren und zu messen. Das gesagt, darf nicht vergessen werden, dass Farbe genauso viel über menschliche Wahrnehmung im Gehirn ist wie die Messung des Lichts, das von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es wird Variationen und Nuancierungen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel bemerkt Tom Jewett, Dozent Emeritus der Informatik an der Cal State University Long Beach, folgendes zur [Helligkeit in der HSL-Farbschale](https://colortutorial.design/hsb.html): _"…Die Unterscheidung zwischen Helligkeitsstufen ist nicht wirklich linear, wie die HSL-Skala es nahelegt; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliche Sicht und menschliche Wahrnehmung nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht in Relation gebracht wird, sobald es von einem Computerbildschirm durch die Entfernung zum menschlichen Auge hindurchgeht, von der menschlichen Wahrnehmung gefiltert wird und dann im menschlichen Gehirn manipuliert wird, läuft fort.

Sogar das Alter und das Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation, ["Licht auf Photosensitivität werfen, eine von Epilepsys komplexesten Bedingungen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimuli, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf."_ Der Artikel führt weiter mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimuli."_

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand einen anfallgefährdeten Menschen Benutzertests aussetzen. Das ist gefährlich. Zu diesem Punkt ist eines der ethischsten Dinge, die Entwickler und Designer tun können, die Nutzung von Werkzeugen, die von Experten auf dem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Werkzeug zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Werkzeuge, die ethisch und professionell für die Bewertung von Filmen/Videos entwickelt wurden: **PEAT**, und der **Harding Test**.

### Werkzeug zur Analyse von Fotosensitiver Epilepsie (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Maßstab für das [Werkzeug zur Analyse von Fotosensitiver Epilepsie](https://trace.umd.edu/peat/) gesetzt und sichergestellt, dass es **_kostenlos_** heruntergeladen werden kann. PEAT kann Autoren helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Verwendungseinschränkung: **_Die Nutzung von PEAT zur Bewertung kommerziell produzierter Materialien für Fernsehübertragungen, Film, Home-Entertainment oder Gaming-Branchen ist untersagt. Verwenden Sie den Harding-Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Werkzeugs für kommerzielle Zwecke untersagt ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Maßstab. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie ausgestrahlt werden dürfen, so bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten an.

![Harding Flash und Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen zur Barrierefreiheit für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, sicherzustellen, dass wir keinen Schaden anrichten, weder absichtlich noch unabsichtlich. Wenn wir etwas einbeziehen müssen, das das Potenzial hat, Schaden zu verursachen, ist es entscheidend, zu verhindern, dass Benutzer unbeabsichtigt auf schädliche Inhalte stoßen, und den Benutzern Möglichkeiten zu bieten, Animationen zu verhindern und zu steuern, um potenziellen Schaden zu mildern.

### Was der Webentwickler tun kann

#### Keinen Schaden anrichten

[WCAG Richtlinie 2.3 Anfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Entwerfen Sie Inhalte nicht in einer Weise, die bekanntermaßen Anfälle oder körperliche Reaktionen auslöst"_. Geben Sie keine Animationen ein, die ein Benutzer nicht steuern kann. Entwerfen Sie nicht mit Mustern, von denen bekannt ist, dass sie Probleme verursachen. Wenn Sie ein gif oder png mit Blitzen einbeziehen müssen, zeichnen Sie es anstelle dessen in einem Videoformat auf, damit dem Benutzer Steuerelemente zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, zu deaktivieren oder es weniger schädlich zu machen.

#### Verstehen Sie Bosheit

Als Entwickler oder Designer fragen Sie sich, ob Inhalte mit Stroboskoplicht wirklich auf Ihrer Webseite notwendig sind. Selbst wenn sie richtig gehandhabt werden, gibt es diejenigen, die möglicherweise anstößige Inhalte von Ihrer Seite herunterladen und sie als Waffe verwenden. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu verwenden, um durch Animationen physischen Schaden zuzufügen, am Samstag, dem 22. März 2008, begann: Die Seite der Epilepsy Foundation wurde gehackt durch Beiträge mit blinkenden Bildern und Links, die fälschlicherweise als hilfreich behauptet wurden. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe rechtlicher Überlegungen läuft, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem er im Dezember 2016 ein animiertes GIF geschickt bekam: das blinkende GIF trug die Nachricht, _"Sie verdienen einen Anfall für Ihre Beiträge"_.

#### Kontrolle von Exposition und Zugriff

Die Kontrolle der Exposition gegenüber der Seite ist der Schlüssel, um sicherzustellen, dass eine Person, die möglicherweise Anfälle hat, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, ein Bild oder eine Animation zu haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und es dann an einem Ort platzieren, an dem der Benutzer ihm zustimmen muss, z. B. durch Klicken auf eine Schaltfläche, oder sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie das Festlegen von Crawl-Direktiven für Suchmaschinen, um darauf hinzuweisen, dass sie potenziell schädliche Ressourcen nicht in ihren Suchindizes aufnehmen sollten.
Sie können dies mit Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Element mit restriktiven Regeln wie `noindex, nofollow` tun. Indem Sie die Seite nicht indizieren (`noindex`) und Links auf der Seite nicht folgen (`nofollow`), wird die Wahrscheinlichkeit verringert, dass Benutzer sie über die Suche entdecken:

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Für nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Antwortheader festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Möglichkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage zu erkennen.
- Zakirt stellt einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) bereit.

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sie selbst aktiviert. Beispielsweise muss der Benutzer eine Schaltfläche drücken oder ein Kästchen aktivieren, um die Animation zu starten.

### Videos

Genau wie bei animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kästchen aktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie z. B. das NICHT-Setzen des [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attributs auf `<video controls>`, oder das Festlegen von {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand. Um ein eindrucksvolles Beispiel dafür zu sehen, wie das tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` zusammen mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die Anfangsphase der Animation auf Null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer Animationen sowohl stoppen als auch starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut dem Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerelemente verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, das steuert, ob für das Abspielen des Medienobjekts Benutzeroberflächen-Steuerelemente angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Steuerelemente verfügt, die ein Benutzer aufrufen kann, stellen Sie sicher, dass Sie das Wort "controls" zu HTML-Video- und Audioelementen hinzufügen.

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

Ein Beispiel für die Anwendung auf Audio:

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

Beachten Sie, dass der Ton in Videos über das `muted`-Inhaltsattribut gesteuert werden kann, selbst wenn der Inhalt im {{HTMLElement('video')}}-Element anstelle des {{HTMLElement('audio')}}-Elements enthalten ist. Dieses Beispiel stammt aus dem Abschnitt über [stummgeschaltetes Medienattribut](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) der HTML Living Standard. Es erklärt, dass das Video still im Hintergrund automatisch abgespielt wird, bis der Benutzer eine Aktion zum Entstummen des Tons durchführt.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zum Umgang mit ihnen erheblich, und aus diesem Grund gibt es keine universelle Lösung für das Problem. Dies wird weiter dadurch kompliziert, dass selbst die Klassifizierung von Dateien die Art und Weise, wie sie behandelt werden sollten, kompliziert macht. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, aber in einigen Kreisen auch als Video-Dateiformat betrachtet, da es die Fähigkeit hat, animiert zu werden. Für eine umfassende Auflistung von Medientypen besuchen Sie bitte die [Seite für Medientypen von IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie zu erkennen, sind keine beiläufige Übung. Möglicherweise sind an den Standards für [MIME Sniffing](https://mimesniff.spec.whatwg.org/) bei whatwg.org interessiert. Praktisch jeder Bildtyp kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Kontrolle der Animationen.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial zu Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler in der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel, ["Steuern von fps mit requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie die Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung diskutieren.
- **GIFs (Raster)**: Schwer zu knacken, weil die Kontrolle für ihre Animation innerhalb der GIF-Dateien selbst liegt. Für Informationen zur Kontrolle der Geschwindigkeit von GIFs siehe W3Cs ["G152: Einstellen von animierten GIF-Bildern, um nach n Zyklen (innerhalb von 5 Sekunden) zu blinken"] (https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Artikel zu diesem Thema auf Stack Overflow ist, ["Kann man GIF-Animation mit JavaScript steuern?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante betrachtet, Videoversion von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z. B. eine .webm-Datei) verweisen, die an einem anderen Ort existiert.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Skalierbare Vektorgrafiken"](/de/docs/Web/SVG), stellt fest, dass _"SVG ein textbasiertes offenes Webstandard ist. Es wurde ausdrücklich entwickelt, um mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)" zu arbeiten. _ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="Dies ist ein Bild, das ein svg als Quelle verwendet">`. Das bedeutet, dass das Aussehen und die Animation von SVGs durch CSS-Animationen und -Schlüsselbilder gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente über [SVG Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann Anfälle aus denselben Gründen auslösen, wie bewegte Bilder es tun, also vermeiden Sie das Animieren Ihres Textes. Es ist ohnehin eine gute Idee, bewegten Text zu vermeiden, da viele Bildschirmleser keinen bewegten Text lesen können und dies eine schlechte Benutzererfahrung darstellt, selbst für diejenigen ohne Sehprobleme oder vestibuläre Probleme.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammenkommen, um dem Benutzer ein kraftvolles Erlebnis zu bieten. Wir haben bereits früher in diesem Dokument die `animation`-Eigenschaft erwähnt. Sie ist tatsächlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation dauert, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die Animationseigenschaft ist allein schon mächtig, aber kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein kraftvolles Set von Optionen für den Benutzer eingerichtet werden. Standardwerte anzugeben, bietet Schutz, um zu verhindern, dass es zu Problemen kommt, wenn es eine Abhängigkeit gibt, dass die Animation läuft.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der meiste JavaScript-Code, der für HTML-Video gilt, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzer steuermöglichkeiten für die Wiedergaberate sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1,0 ist Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0,5 ist halbe Geschwindigkeit, ein Wert von 2,0 ist doppelte Geschwindigkeit. Eine negative Zahl lässt das Video oder Audio rückwärts abspielen. Setzen Sie die Eigenschaft der Wiedergaberate: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) stellt das folgende Codebeispiel zur Verfügung, wie man alle Animationen auf einer Seite auf halber Geschwindigkeit läuft:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Möglichkeiten besteht darin, mit einem Bild zu beginnen, das bereits existiert, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie erlaubte Dateitypen – und -größen – in Ihrer Umgebung sind. SVGs sind häufig nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet hervorragende Beispiele für diese Vorgehensweise, indem mehrere Bildquellen für Sonne, Erde und Mond verwendet werden und mehrere Canvas-Methoden genutzt werden, um die Geschwindigkeit und Animation der Erde zu steuern, während sie sich um die Sonne dreht und der Mond sich um die Erde dreht. Verwenden Sie den verfügbaren Codepen mit diesem Tutorial, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, unbedingt eine blitzende Animation verwenden müssen

Stellen您 sicher, dass es eine Kontrolle dafür gibt. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zum ersten Mal sieht, und dass ein Benutzer zustimmen muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerelemente bietet, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Durch die Umwandlung eines animierten GIFs in ein Video wird es möglich, Steuerelemente auf die Animation zu setzen und dem Benutzer Handlungsfreiheit zu geben. Es gibt viele kostenlose Online-Konverter für den Einsatz, wie [EZGif](https://ezgif.com/) und [GIF zu MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie den Benutzern einen Hinweis, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Lesen Sie [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn您 unbedingt blitzen müssen, halten Sie es klein. Im Allgemeinen beschränken Sie die Größe des Blitzes auf einen Bereich von etwa 341 x 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter in einem typischen Abstand von ihrem Bildschirm entfernt ist. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild aus nächster Nähe betrachtet werden soll, z.B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn您 für ein Spiel oder VR entwerfen, das ein Okular-Maske verwendet, **oder verwendet werden kann**, z.B. in Firefox Reality (einem Browser für Virtual Reality), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild den Augen des Nutzers viel näher ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast in Bezug auf Zugänglichkeit eine gute Sache. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund ist (technisch genannt _Luminanzkontrastverhältnis,_ laut W3.orgs Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter lassen sich solche Inhalte lesen. Benutzer mit Sehbehinderungen schätzen besonders die Bemühungen, einen hohen Kontrast zwischen Text und dem Hintergrund zu gewährleisten. Wenn der Inhalt jedoch animiert ist, ist das **Reduzieren** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Verringern Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis wird in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren Farben ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren Farben ist.

Am besten ist es, wenn Sie den Kontrast anpassen, bevor er hochgeladen oder im Web veröffentlicht wird. Für Videos und animierte GIFs sind die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Ebenso steht für Bilder ein Online-Tool zur Verfügung, pinetools.com's [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, zum Beispiel, beginnen Sie mit einem, der ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option zur dynamischen Reduzierung des Kontrasts. Hier ein Codebeispiel aus dem Abschnitt, ["Beispiel: Einstellen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum angegeben ist.

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

#### Vermeiden Sie gesättigtes Rot für blinkende Inhalte

Wie bereits früher in diesem Dokument erwähnt, organisierte die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über fotosensitive Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m2 aufweist, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen visuellen Winkel von mindestens 0.006 Steradian einnimmt (ungefähr 10% des zentralen Gesichtsfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot gilt ebenfalls als Risiko."_ In dem gleichen Konsens stellen sie auch fest: _"Unabhängig von der Leuchtdichte gilt ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko."_

### Bieten Sie alternative CSS-Stiles

In dem Wissen, dass viele Animationen und das Blitzen über CSS-Methoden gesteuert werden können, ist es wichtig, Wege zu erforschen, um alternative Optionen den Benutzern zur Verfügung zu stellen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Style Sheets

Moderne Browser zeigen die verfügbaren alternativen CSS-Styles in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die bestätigten alternativen Stile angezeigt, wenn Benutzer das Menü Ansicht durchlaufen, in anderen Fällen werden sie in den Einstellungen manifestiert, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen suchen müssen, entweder über den Browser oder die Einstellungen. Es ist vielleicht einen Versuch wert, die Dinge auf die altbewährte Art und Weise mit offensichtlichen Schaltflächen oder Links zu machen, die den Stil ändern, so dass die Benutzer sie sehen können. Dies steht nicht im Konflikt, noch hebt es die Fähigkeit des Browsers auf, die alternativen Stylesheets zu lesen, oder die Fähigkeit der Benutzer, Präferenzen in den Einstellungen anzugeben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie solche, die auf Spracherkennungssysteme angewiesen sind, oft auf Standard-Schaltflächen und -Links angewiesen sind, weil ihre Behinderung verhindert, dass sie eine Maus verwenden oder von Berührung auf mobilen Tablets profitieren.

Gängige Möglichkeiten, die alternativen Stylesheets in Ihre HTML-Dokumente einzubeziehen, bestehen darin, das {{HTMLElement('link')}}-Element und {{CSSxref('@import')}} zu verwenden.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit und gemeinsam mit den Attributen von `rel="alternate stylesheet"` und für Titel, `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets einzubeziehen, aber es wird nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import url(alternate1.css);
@import url(alternate2.css);
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) richten Sie es so ein, dass Benutzer in der Lage sind, ihre Browser zu benutzen, um alternative Stile auszuwählen.

### Dynamisches Stil-Umschalten

Ein Problem bei der Verlassen auf den Browser, um alternative Stiles zu zeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stiles zu entdecken. Oder aufgrund ihrer Behinderung sind sie nicht in der Lage. Schaltflächen oder Links machen es offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Umschaltschaltflächen hinzuzufügen, damit der Benutzer in der Lage ist, zu den verschiedenen Stylesheets zu wechseln. Das gesagt, das Verwenden von alternativen Stylesheets sind nicht die einzige Option. Eine andere Möglichkeit besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo möglich, ist es wirklich beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stilehaken in einem einzigen Stylesheet kontrolliert werden kann"._ Eine der besten Beispiele dafür, wie man dies macht, stammt von der W3C-Seite, ["C29: Verwendung eines Stil-Umschalters, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Text-Only-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drakonische Lösung; aber es ist eine, die manchmal für Lehrer und andere öffentliche Dienstleister notwendig ist, die diejenigen bedienen müssen, die extrem empfindlich sind. Diese öffentlichen Mitarbeiter können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu entwickeln, das `display: none` verwendet. Hier erfahren Sie, wie es mit CSS gemacht wird:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Durch das Einrichten von Medienabfragen ermöglichen Sie Benutzern Kontrollen; diese Kontrollen sind im Browser oder im Betriebssystem verfügbar. Siehe das MDN-Dokument, [Zugänglichkeit: Was Benutzer tun können, um sicherer zu browsen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf Kontrollen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet wird, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder

sehen Sie sich das folgende Beispiel aus dem Abschnitt über ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/) an.

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Die Unterstützung nimmt zu.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Entwicklern steht ein leistungsstarkes Werkzeug über Window.matchMedia() zur Verfügung. Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Funktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge, und desto weniger "flackert" er. Die überwiegende Mehrheit der modernen Technologie aktualisiert mit einer Geschwindigkeit, die keine Probleme mit Fotosensitivität verursacht. Es hat jedoch nicht jeder genug Wohlstand, um sich die neueste Technologie leisten zu können: Ältere oder leistungsschwache Computer können niedrige Aktualisierungsraten aufweisen. [AbilityNet's Faktenblatt (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr über die Details von Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsie und CRT/LCD-Bildschirmflacker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Aktualisierungsraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz spürbar und dokumentiert."_
- _"Diese Studien scheinen zu zeigen, dass Sie sich von Aktualisierungsraten unter 70 Hz fernhalten sollten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand eine innovative Verwendung der Aktualisierungsfunktion, die in Kombination mit "animation-duration" oder "transition-duration" verwendet werden kann, um mit einer Rate zu enden, die für das menschliche Auge nicht wahrnehmbar ist.
Mit anderen Worten, Erics Techniken beheben das Problem der Aktualisierungsrate. Das unten stehende CSS stammt aus dem CSS-Tricks-Artikel, ["Wiederbesuch von prefers-reduced-motion, die Abfrage für reduzierte Bewegung"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Die [`update`](/de/docs/Web/CSS/@media/update) Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten zu ändern, nachdem sie gerendert wurden. Sie hat die Werte "none", "slow" und "fast".

## Entwicklungs- und experimentelle Features

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation darauf, die drei Ebenen in Bezug auf Messungen von Lux zu definieren, weil Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen beginnen ebenfalls auf Unterschiede in der Technologie, z.B. E-Ink, die auch bei hellem Tageslicht lesbar bleibt, während Flüssigkristalle dies nicht sind.
- `environment-blending`
  - : Aus dem W3C-Entwurfsdokument, Media Queries Level 5: _"Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Eigenschaften des Benutzerdarstellers abzufragen, damit der Autor das Erscheinungsbild der Dokumentation anpassen kann. Ein Autor könnte sich entscheiden, die visuelle Gestaltung und/oder das Layout der Seite abhängig von der Displaytechnologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Media-Funktionen (Geplant in Media Queries Level 5)

[Benutzerpräferenz-Media-Funktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend in der Bereitstellung von Benutzerkontrollen über Medien. Hier einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [Benutzerpräferenz-Media-Funktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion zeigt an, ob der Inhalt normal angezeigt oder ob Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf der Seite, indem er die Farben des Autors überschreibt. Aus dem W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zur Zwangsfarbe: _"Die Medienfunktion forced-colors wird verwendet, um den erzwungenen Farbmodus des Benutzeragenten zu erkennen, bei dem es eine vom Benutzer gewählte, beschränkte Farbpalette verwendet."._
    Der Benutzer wird über diese Fähigkeit informiert werden müssen, und es wird darüber diskutiert werden müssen, wo und wie die Einstellung in erster Linie gesteuert werden kann.
- `light-level`
  - : Aus dem W3C-Entwurfsdokument zum Abschnitt des light-level: _"Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfunktion wird verwendet, um über das Umgebungslicht-Level abzufragen, in dem das Gerät verwendet wird, um dem Autor die Möglichkeit zu geben, das Erscheinungsbild der Dokumentation anzupassen."_ Dies wird eine größere Zugänglichkeit für diejenigen, die Probleme mit der Feinmotorik haben oder für einige mit kognitiven Schwierigkeiten, darstellen, die den richtigen "Knopf" nicht finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zur [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Die `prefers-contrast` Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer das System so konfiguriert hat, dass es den Kontrast zwischen aneinandergrenzenden Farben erhöht oder verringert. Zum Beispiel haben viele Benutzer Schwierigkeiten beim Lesen von Text, wenn es einen geringen Unterscheid im Kontrast zu seinem Hintergrund gibt und bevorzugen einen größeren Kontrast."_ Manchmal kann es auch zu viel Kontrast geben; in solch einem Fall kann ein Halo-Effekt um den Text eintreten, der seine Lesbarkeit tatsächlich verringert. Die Kontrolle dem Benutzer zu überlassen, ist definitiv ein Gewinn für die Barrierefreiheit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 aus den CSSWG.org-Entwürfen integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert wird. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList) für mehr Informationen.

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft wird aus [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation) entnommen.

**Anforderung:** Einige Benutzer können keinen nicht-wörtlichen Text und Symbole verstehen, wie Metaphern oder Redewendungen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht wörtlich identifizieren und es dem Autor ermöglichen, nicht wörtlichen Text und Bilder für Benutzer zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlagen der Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
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

- [Probleme mit der Flash-Definition von WCAG 2.0 #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionierungsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Lichtempfindlichkeit - eine der komplexesten Zustände der Epilepsie beleuchten](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen sind empfindlich gegenüber flackerndem Licht oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettern. Aufgrund dieser Empfindlichkeit produziert ihr Gehirn anfallsartige Entladungen, wenn es dieser Art der visuellen Stimulation ausgesetzt wird."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), auch ohne Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch flackerndes Licht ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Photic-und musterinduzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool allgemein als eines der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimediasysteme und -geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiterten RGB-Farbraum — scRGB

### Analysewerkzeug für fotosensitive Epilepsie

Zusammen mit dem Harding-Werkzeug allgemein als eines der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Referenzen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
