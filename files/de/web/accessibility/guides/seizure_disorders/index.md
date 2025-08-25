---
title: Web-Accessibility für Anfälle und körperliche Reaktionen
short-title: Vorbeugung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

Dieser Artikel führt in Konzepte ein, die Webinhalte für Menschen mit Gleichgewichtsstörungen zugänglich machen, und beschreibt, wie Inhalte vermieden oder gemessen werden können, die Anfälle und/oder andere körperliche Reaktionen hervorrufen können.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Web-Technologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können Inhalte erzeugen, die Anfälle oder andere lähmende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch körperliche Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist eigentlich eine Art von "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei photosensitiver Epilepsie werden die Anfälle speziell durch blinkendes Licht ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo erwähnt wird, "_bestimmte visuelle Bilder können selbst ohne Bewegung oder Flackern bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation beschreibt in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) statische Bilder und Muster: "_Statische oder bewegte Muster von wahrnehmbaren hellen und dunklen Streifen haben den gleichen Effekt wie blinkende Lichter wegen des Wechsels von dunklen und hellen Bereichen._" Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare in jeder Ausrichtung zählen_". Neben Streifen sind laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) auch karierte Muster dafür bekannt, photosensitive Anfälle zu verursachen.

Obwohl statische Bilder mögliche Auslöser sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest, _"Das Einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Epilepsiearten sind photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Zusätzlich zu Anfällen, die durch Photosensitivität verursacht werden, kann das Hören bestimmter Musikstücke auch musikerzeugte Anfälle auslösen, obwohl diese Arten von Anfällen viel seltener zu sein scheinen. Für eine umfassende Einführung in das Thema musikogene Anfälle, besuchen Sie die Webseite von Epilepsy Ontario über [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In seinem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) bemerkt die Epilepsy Foundation, dass "_ein Anfall ein Ereignis und Epilepsie die Krankheit ist, die wiederkehrende unprovozierte Anfälle umfasst_." Auf der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) heißt es, _"Plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und Menschen müssen sich dessen Risiko bewusst sein"_.

Der Punkt ist, dass Anfälle definitiv tödlich sein können und Entwickler und Designer extrem wichtig sind, um das Web für diejenigen sicherer zu machen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst die, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Verwirrung, Übelkeit, Erbrechen und mehr können ebenfalls so schwer sein, dass der Benutzer nicht in der Lage ist zu funktionieren. Der Artikel der Epilepsy Foundation ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei lichtempfindlichen Menschen Anfälle verursachen können; hier ein Auszug aus dieser Liste:

- Fernseher oder Computerbildschirme aufgrund von Flackern oder Rollbildern.
- Bestimmte Videospiele oder Fernsehsendungen mit schnellen Blitzen oder wechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie optische Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser glitzert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, besonders Streifen kontrastreicher Farben.

In demselben Artikel heißt es weiter, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Hervorzuheben ist, dass die Wellenlänge des Lichts als möglicher Faktor enthalten ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. In dem Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein angemerkt: _"Personen, die an Anfallsstörungen leiden, die durch Licht ausgelöst werden, können durch Inhalte, die mehr als wenige Male mit bestimmten Frequenzen blinken, einen Anfall bekommen"_ und weist sehr spezifisch darauf hin: "_Menschen sind für rotes Blinken empfindlicher als für andere Farben, so dass ein spezieller Test für gesättigtes rotes Blinken bereitgestellt wird_".

Sie benötigen nicht einmal ein Bild oder Video, um Schaden anzurichten. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es bei hoher Frequenz Farbe und Helligkeit ändert, was einfach über JavaScript möglich ist, kann echten Schaden verursachen. Und Flackern kann überall auftreten. Zum Beispiel können „Spinnereien“, die häufig verwendet werden, um beim Laden von Seiten angezeigt zu werden, leicht beim Drehen „flackern“.

Zusätzliche Bedenken bestehen für Personen mit motorischen Fähigkeiten. Zum Beispiel stellt die Seite des Trace Research & Development Center für [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"photosensitive Anfälle durch bestimmte Arten von Flackern in Web- oder Computerinhalten ausgelöst werden können, einschließlich übermäβiger "Mouse-Over", die große Bereiche des Bildschirms schnell blinken lassen"_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten verbunden sind und nicht besonders auf Anfälle hinweisen außer vielleicht Desorientierung, die bei Anfällen beobachtet wird. Anfälle sind jedoch nicht die einzige mögliche nachteilige physische Reaktion auf Blinken, Flimmern, Blinken und andere derartige Reize. Im Jahr 1997 zeigte ein japanischer Cartoon eine animierte "Virenbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und Blutbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Flackern, Blinken und Flimmern

Obwohl "Blitzen" und "Blinken" manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut der W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"im Allgemeinen sind blinkende Lichter mit einer Frequenz von fünf bis 30 Blitzen pro Sekunde (Hertz) wahrscheinlich am ehesten Anfälle auszulösen. Um sicher zu sein, wird allgemein empfohlen, dass photosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollten."_ Für einige Menschen kann jedoch Blinken/Blitz selbst bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig anzumerken, dass nicht alles Blinken und Blitzen schlecht ist. Die NASA stellt in ihrem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitserregung sein können, wie es zum Beispiel bei Warnschaltflächen erforderlich ist (dies setzt voraus, dass Benutzer den Bildschirm während des Blinkens von Elementen noch sehen können, was nicht immer zutrifft). Bei einigen Benutzern warnen blinkende Schaltflächen auch davor, dass sie sparsam und mit Vorsicht eingesetzt werden müssen. Im Hinblick auf Webdesign müssen Systeme, die Unternehmensmitarbeiter auf Gefahr hinweisen, indem sie den Bildschirm für eine blinkende Warnung vor einem Notfall "entführen", die Rate, Größe und die Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flimmern—wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group",](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradiant einnimmt (ungefähr 10 % des zentralen Sehfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen)._

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung, die zum Zeitpunkt der Erstellung des Dokuments berücksichtigt wurde, war "_die Fläche kann als für eine Fläche >25 % der eines Fernsehbildschirms geltend angenommen werden, unter der Annahme von standardisierten Betrachtungsabständen ≥2 m (ca. 9 Fuß)"_. Seit dieser Zeit hat sich viel geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"… die Komplexität der Gehirndynamik durch bestimmte Farbkombinationen mehr moduliert werden könnte als durch andere, zum Beispiel verursacht ein blinkender roten-blauer Reiz einen stärkeren Kortex-Erregung als ein rot-grüner oder blau-grüner Stimulus."_

### Blitzen und Blitzen von Rot

[WCAG 2.3.1 allgemeine Blitz- und rotes Blitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird als ein Paar gegensätzlicher Änderungen in der [relativen Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10 % oder mehr der maximalen relativen Leuchtdichte definiert, bei der die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und bei denen „ein Paar gegensätzlicher Änderungen“ eine Erhöhung gefolgt von einer Abnahme oder eine Abnahme gefolgt von einer Erhöhung ist;
- Ein **rotes Blitz** ist jedes Paar gegensätzlicher Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 organisierte die Epilepsy Foundation of America einen Workshop und entwickelte einen Konsens zu photosensitiven Anfällen, der besagte, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 Steradiant einnimmt (ungefähr 10 % des zentralen Sehfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen)."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt für sich genommen ein Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es kommt darauf an

„Relative“ Größe und Abstand sind beide wichtig. Nach Angaben von [PEAT](https://trace.umd.edu/peat/) _"nimmt der kombinierte Bereich von Blitzlampen, die gleichzeitig auftreten, zusammen nicht mehr als ein Viertel eines 341 x 256 Pixel großen Rechtecks auf irgendeinem Bereich des angezeigten Bildschirms ein, wenn der Inhalt bei 1024 x 768 Pixel betrachtet wird._

Der Artikel, der WCAG 2.3.1 behandelt, hebt hervor, dass das Sichtfeld eine wichtige Überlegung ist: "_Der 1024 x 768 Bildschirm wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel Block stellt ein 10-Grad-Sichtfeld bei einem typischen Betrachtungsabstand dar. (Das 10-Grad-Feld geht auf die ursprünglichen Spezifikationen zurück und stellt den Teil des zentralen Sehens des Auges dar, in dem Menschen am anfälligsten für Photomotive sind.)_"

Dieses Pixel-Bereichsverhältnis berechnet die relative Größe, aber auch die Entfernung spielt eine Rolle.

Die Entfernung ist wichtig, weil sie das gesamte Sichtfeld beeinflusst. Wenn die Benutzer des Spiels Brillen tragen, ist das Sichtfeld wahrscheinlich vollständig vom Bildschirm eingenommen. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben, was auf dem Telefon, Computer oder Headset erlebt werden kann. Die Bedenken hinsichtlich blinkender Bilder in einer Brille nehmen zu, da die Brille so nah an den Augen ist.

Forschungsergebnisse deuten im Allgemeinen darauf hin, dass die Verwendung von VR aufgrund höherer Bildwiederholraten sicherer sein könnte als der normale Konsum von Bildschirmen. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfassen, _"Die bisher verfügbaren begrenzten Daten werfen keine besonderen Anfallsprobleme im Hinblick auf die VR-Technologie auf, obwohl sich diese Ansicht mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, provokanter Muster oder Farbänderungen würden voraussichtlich Anfälle auslösen, ebenso wie in der realen Welt."_

(Beachten Sie, dass einige Benutzer den Cursor möglicherweise nicht blinken sehen können und möglicherweise unter Migräne, Bewegungskrankheit und Desorientierung leiden, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallax

Kontrastierende dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Schachbretter sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkle Streifenpaare wahrscheinlich Anfälle provozieren und unter welchen Bedingungen. Wenn ein Muster sich nicht verändert und gerade ist, beträgt die maximale Anzahl acht Linien, aber wenn es sich wellenförmig bewegt, dürfen es nicht mehr als fünf Linien sein.

Parallax-Effekte können Desorientierung verursachen. Verwenden Sie Parallax-Effekte mit Vorsicht; falls Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolloption hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare in irgendeiner Ausrichtung zählen. Wenn die hell-dunklen Streifen eines Musters gemeinsam in einem erwarteten minimalen Abstand vom Auge einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf hell-dunkel Streifenpaare enthalten, wenn die Streifen ihre Richtung ändern, oszillieren, blinken oder die Kontraste umkehren; wenn das Muster unverändert ist oder kontinuierlich in eine Richtung driftet, nicht mehr als acht Streifen.

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken spielen weitere Faktoren eine Rolle. Wenn man zum Beispiel von einem kleineren Bereich zu einem größeren übergeht, erhöht das die Wahrscheinlichkeit, dass das Gehirn reagiert, sowie den Kontrast und die räumliche Frequenz von niedrig bis mittel. Es ist auch bekannt, obwohl die Erklärung nicht verstanden wird, dass der Wechsel von grundlegenden Orientierungen (zum Beispiel Streifen) zu einer multiplen (zum Beispiel das Schachbrettmuster, das entsteht, wenn man ein Streifenset über das ursprüngliche Set legt, aber senkrecht dazu) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist für die Barrierefreiheit wichtig. Siehe [Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) im Zusammenhang mit Barrierefreiheit im Internet und allgemein.

Wie sich die Farbe auf ihren Hintergrund bezieht—normalerweise im Hinblick auf den Kontrast—und wie drastisch sich die Farbe während der Animation Bild für Bild ändert, ist wichtig. Weitere Informationen dazu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde gezeigt, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Ihre Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren beobachtet.

- **Red Desaturation Tests:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte es für einen Test verwenden. Der Montion Red desaturation test beurteilt die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Red Environment:** Studien haben gezeigt, dass für Menschen mit traumatischer Hirnverletzung [die kognitive Funktion in einer roten Umgebung reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Neben einer roten Umgebung, die die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinflusst, scheint Farbe im roten Spektrum besondere Bedenken erfordern und spezielle Tests benötigen. Dr. Gregg Vanderheiden stellte beim Testen des Photosensitive Epilepsy Analysis Tool fest, dass die Anfallsraten wesentlich höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher auf gesättigtes rotes Blinken sind. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfalls-sicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" betrachtet wird. Das bedeutet _nicht_, dass sie "sicher vor Anfällen" ist, sondern nur, dass die Farbe "sicher" reproduziert werden kann durch die zur Farberzeugung auf Bildschirmen verwendete Technologie.

## Messen zur Schadensvorbeugung

Das Messen des potenziellen Schadens ist ein guter Ausgangspunkt. In Tests berücksichtigte Faktoren umfassen Farbe, Helligkeit, Größe, Kontrast und bei Animationen Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 organisierte die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu photosensitiven Anfällen zu entwickeln. Die folgenden, expertengestützten Informationen stammen von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz stellt ein potenzielles Risiko dar, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 Steradiant einnimmt (ungefähr 10 % des zentralen Sehfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von einem gesättigten Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Ausrichtung zählen. Wenn die hell-dunkel Streifen eines Musters gemeinsam in einem erwarteten minimalen Betrachtungsabstand einen festen Winkel von >0,006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0,5 s angezeigt wird, sollte das Muster nicht mehr als fünf hell-dunkel Streifenpaare enthalten, wenn die Streifen die Richtung ändern, oszillieren, blinken oder den Kontrast umkehren; wenn das Muster unverändert bleibt oder sanft in eine Richtung schwebt, nicht mehr als acht Streifen. Diese Prinzipien sind einfacher anzuwenden bei festem Medium, zum Beispiel einer vorab aufgenommenen Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das „cd/m<sup>2</sup>“ bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich das für den Webentwickler auf Messungen für Farbe, Leuchtdichte und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) stellt es in Bezug auf das, was wir als Entwickler gewohnt sind, dar: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, da es einen spezifischen Standard gibt, der angenommen wird für Monitore, Drucker und das Internet, und es ist das **sRGB** (Standard Rot-Grün-Blau).

> Als Maß für das pro Einheit Fläche emittierte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup> ab. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbrauchertisch-LCD-Anzeigen haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Ergebnis ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code konvertiert werden kann.

### Berücksichtigung der menschlichen Physiologie und Psychologie

Viele Experten arbeiten daran, die Arten von Webinhalten zu quantifizieren und zu messen, die Anfälle auslösen können. Das gesagt, sollte nicht vergessen werden, dass Farbe genauso sehr über menschliche Wahrnehmung im Gehirn geht, wie es auch die Messung des von einem Computermonitor kommenden Lichts betrifft.

Neben den psychologischen Unterschieden gibt es auch physiologische Unterschiede zwischen uns. Es wird Unterschiede und Nuancen geben in der Art, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel stellt Tom Jewett, Lecturer Emeritus für Informatik an der Cal State University Long Beach, Folgendes zur Helligkeit auf der HSL-Farbskala fest: _"… Der Unterschied zwischen den Stufen der Helligkeit ist nicht wirklich linear, wie es die HSL-Skala vermuten lässt; wir sind viel empfindlicher für Änderungen in helleren Werten als für dunklere."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und Wahrnehmung es nicht sind. Erforschung und Diskussion zur Verbindung von maschinellen Messungen von Licht, wie es von einem Bildschirm ausgeht, durch den Abstand zum menschlichen Auge, gefiltert durch das menschliche Sehen, und dann manipuliert durch das menschliche Gehirn.

Sogar Alter und Geschlecht können eine Rolle spielen. Laut des Artikels der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"sind Kinder und Jugendliche anfälliger als Erwachsene, auf Lichtreize abnormal zu reagieren, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf"._ Der Artikel fügt diese Statistik hinzu: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger auftreten, da sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokante Lichtstimulationen"_.

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine zu Anfällen neigende Person Benutzertests unterziehen. Es ist gefährlich. In diesem Sinne ist es für Entwickler und Designer eine der ethischsten Dinge, Tools zu verwenden, die von Experten auf dem Feld entwickelt wurden, die eng mit Medizinern bei der Entwicklung des Tools zusammengearbeitet haben. Zum Zeitpunkt dieses Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell für Filme/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben darauf geachtet, dass es **_kostenlos_** heruntergeladen werden kann. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung der Nutzung: **_Die Nutzung von PEAT zur Beurteilung kommerziell für Fernsehausstrahlung, Film, Heimunterhaltung oder Spieleindustrie produzierte Materialien ist untersagt. Verwenden Sie den Harding Test oder andere Werkzeuge für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehsender den Harding-Test unter [HardingTest.com](https://hardingtest.com/) nutzen. Der Harding Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden können, daher bietet die Gruppe unter [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen zur Barrierefreiheit für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, weder absichtlich noch unbeabsichtigt Schaden zu verursachen. Wenn wir etwas einfügen müssen, das potenziellen Schaden verursacht, ist es wichtig, dass Nutzer die potenziell schädlichen Inhalte nicht versehentlich begegnen, und Möglichkeiten bereitzustellen, mit denen Nutzer Animationen verhindern und kontrollieren können, um potenzielle Schäden abzuschwächen.

### Was der Webentwickler tun kann

#### Kein Schaden anrichten

[WCAG Leitfaden 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Entwickeln Sie keine Inhalte in einer Weise, die bekanntermaßen Anfälle oder physische Reaktionen auslöst"_. Schließen Sie keine Animationen ein, die ein Benutzer nicht kontrollieren kann. Gestalten Sie keine Muster, die für Probleme bekannt sind. Wenn Sie unbedingt ein GIF oder PNG mit Blitzen einfügen müssen, zeichnen Sie es stattdessen in ein Videoformat auf, sodass dem Benutzer Steuerungen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich darzustellen.

#### Übel verstehen

Fragen Sie sich als Entwickler oder Designer, ob Stroboskopinhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es Personen, die schädliche Inhalte von Ihrer Website herunterladen und als Waffe verwenden könnten. Man glaubt, der erste dokumentierte Versuch, Computer zu nutzen, um physisch Schaden durch Animation zu verursachen, begann am Samstag, den 22. März 2008: Die Website der Epilepsy Foundation wurde über Beiträge gehackt, die blinkende Bilder und Links enthielten, die fälschlicherweise als hilfreich behauptet wurden. Nutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, waren betroffen.

Eine Reihe rechtlicher Überlegungen war im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, einen Anfall erlitt, nachdem ihm im Dezember 2016 ein animiertes GIF geschickt wurde: das blinkende GIF trug die Botschaft, _"You deserve a seizure for your posts"_.

#### Exposition kontrollieren, Zugriff kontrollieren

Die Kontrolle über die Exposition auf der Seite ist der Schlüssel, um sicherzustellen, dass jemand, der für Anfälle anfällig ist, nicht versehentlich darauf stößt. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben könnten, die Anfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und es dann an einem Ort unterbringen, an dem der Benutzer es aktivieren muss, wie z. B. durch Klicken eines Buttons oder sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Betrachten Sie es, Crawl-Direktiven für Suchmaschinen festzulegen, um darauf hinzuweisen, dass sie potenziell schädliche Ressourcen nicht in ihren Suchindizes aufnehmen sollten.
Sie können dies mittels Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` tun.
Indem Sie die Seite (`noindex`) nicht indizieren und keine Links auf der Seite (`nofollow`) verfolgen lassen, wird die Wahrscheinlichkeit verringert, dass Benutzer über die Suche darauf stoßen:

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

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung wegen ihrer Allgegenwart und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das npm-Paket [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht die Möglichkeit, Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs sollten Sie sicherstellen, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Button drücken oder ein Kontrollkästchen deaktivieren, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Button drücken oder ein Kontrollkästchen deaktivieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, indem Sie nicht das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut zu `<video controls>` hinzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Ausgangszustand setzen. Um ein Beispiel dafür zu sehen, wie das tatsächlich funktionieren kann, lesen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) um ein sehr zugängliches Erlebnis zu schaffen, das unter der Kontrolle des Nutzers steht.

[`animation-play-state`](/de/docs/Web/CSS/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation ausgeführt oder pausiert wird.

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

### Sicherstellen, dass der Benutzer Animationen sowohl starten als auch stoppen kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das Attribut `controls` zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerungen verfügbar sind

Die Eigenschaft `HTMLMediaElement.controls` spiegelt das HTML-Attribut `controls` wider, das steuert, ob Benutzeroberflächenelemente für das Abspielen des Medienelements angezeigt werden.

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

Wenden Sie dasselbe Beispiel auf Audio an:

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

Beachten Sie, dass das Audio in Videos durch das `muted` Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt sich innerhalb des {{HTMLElement('video')}} Elements statt des {{HTMLElement('audio')}} Elements befindet. Dieses Beispiel stammt aus dem Abschnitt zur Beschreibung des [muted media attribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund gestartet wird, bis der Benutzer eine Aktion ausführt, um das Audio stummzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber weil es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Verarbeitung stark, und deshalb gibt es keine universelle Lösung für das Problem. Dies wird weiter verkompliziert durch die Tatsache, dass selbst die Klassifizierung von Dateien beeinflusst, wie sie verarbeitet werden sollten. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, aber in einigen Kreisen auch als Videoformat betrachtet, weil es animiert werden kann. Für eine umfassende Auflistung von Medientypen besuchen Sie bitte [IANA.org's Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie zu identifizieren, sind keine beiläufige Übung. Sie sind möglicherweise interessiert, dem [MIME Sniffing](https://mimesniff.spec.whatwg.org/) Standard auf whatwg.org zu folgen. Nahezu jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und daher variiert auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial über Canvas enthält einen großartigen Abschnitt über [Grundlagen der Animation](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist eine Hauptstütze in der Canvas-Animation, aber es ist auch interessant zu sehen, wie sie mit Bildschirmaktualisierungen interagiert. Siehe den Artikel, ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) in dem sie die Mechanik der Implementierung von `requestAnimationFrame` vor dem Hintergrund von Bildschirmaktualisierungen diskutieren.
- **GIFs (Raster)**: Schwer zu knacken, da die Kontrolle ihrer Animation innerhalb der GIF-Dateien selbst verankert ist. Weitere Informationen darüber, wie die Geschwindigkeit von GIFs kontrolliert werden kann, finden Sie in W3C's ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel über das Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Gilt als eine Variante, Video-Version von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm-Datei) verweisen, die an anderer Stelle vorhanden sein muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multibild-Netzwerkgrafik ist ein Dateiformat für animierte Bilder. Wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument, ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), weist darauf hin, dass _"SVG ein textbasiertes offenes Web-Standard ist. Es ist explizit dazu entworfen, mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_ SVGs können als Bild verwendet werden wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Das bedeutet, dass das Erscheinungsbild und die Animation von SVGs durch CSS-Keyframes und -Animationen kontrolliert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente über [SVG-Schnittstellen](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel-](https://en.wikipedia.org/wiki/Voxel)Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem Div animieren und Schaden anrichten. Bewegender Text kann aus denselben Gründen Anfälle hervorrufen wie sich bewegende Bilder, vermeiden Sie also, Ihren Text zu animieren. Es ist eine gute Idee, sich bewegenden Text ohnehin zu vermeiden, da viele Bildschirmlesegeräte sich nicht bewegenden Text lesen können und es eine schlechte Benutzererfahrung ist, selbst für jene ohne Seh- oder Gleichgewichtsprobleme.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}} Elements können viele Optionen zusammenkommen, um den Benutzer zu einem eindrucksvollen Erlebnis zu führen. Wir haben das `animation`-Attribut bereits früher in diesem Dokument erwähnt. Es ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu vollenden. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Das Animationselement ist bereits mächtig für sich genommen, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein mächtiges Optionsset für den Benutzer eingerichtet werden. Das Setzen von `animation-duration` und `transition-duration` Eigenschaften auf eine kurze Dauer anstelle der Einstellung auf `animation: none` und `transition: none` bietet eine Sicherheitsmaßnahme, um Probleme in jedem Fall zu verhindern, in dem eine Abhängigkeit von der laufenden Animation besteht.

### JavaScript-Animation

Javascript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Das meiste JavaScript, das auf HTML-Video angewendet wird, gilt auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergabegeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und gilt als normale Geschwindigkeit; ein Wert von 0.5 ist halbe Geschwindigkeit, ein Wert von 2.0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeits-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite über [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet den folgenden Code, wie alle Animationen auf einer Seite zu halber Geschwindigkeit verlangsamt werden können:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Ein Weg ist, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange es sich um zugelassene Dateitypen - und -größen handelt in Ihrer Umgebung. SVGs sind aufgrund von Sicherheitsbedenken häufig nicht erlaubt. Das MDN-Dokument, [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele dafür, unter Verwendung mehrfacher Bildquellen für Sonne, Erde und Mond, und verwendet mehrere Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde, während sie sich um die Sonne dreht, und des Mondes, während er sich um die Erde dreht. Verwenden Sie das mit diesem Tutorial verfügbare Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Anpassungen vorgenommen werden.

#### Wenn Sie unbedingt eine blinkende Animation verwenden müssen…

Stellen Sie sicher, dass sie über eine Kontrolle verfügt. Stellen Sie sicher, dass sie ausgeschaltet ist, wenn der Betrachter ihr zuerst begegnet, und dass ein Benutzer sich aktiv entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, bei dem dem Benutzer keine Steuerungen zur Verfügung stehen, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Das Konvertieren eines animierten GIF in Video ermöglicht die Bereitstellung von Steuerungen auf der Animation und gibt dem Benutzer die Verwaltungshoheit. Es gibt viele kostenlose Online-Konverter zur Verfügung, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Erwartungen der Benutzer festlegen

Geben Sie den Benutzern einen Hinweis darüber, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die folgende Animation. Lesen Sie [WCAG 2.2 Erfolgs-Kriterium 3.2.5 Änderung auf Anforderung](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie unbedingt blinken müssen, dann halten Sie es klein. Im Allgemeinen sollte die Größe des Blitzes auf einen Bereich von etwa 341 mal 256 Pixel oder weniger begrenzt sein. Diese Pixelgröße geht davon aus, dass ein Betrachter einen typischen Abstand zum Bildschirm hat. Wie bereits erwähnt, mag diese Größe zu groß sein, wenn das Bild aus nächster Nähe betrachtet wird, z.B. in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf dem Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine Brille verwendet, **oder von einer Brille verwendet werden kann**, wie im Fall von Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, da das Bild viel näher an den Augen eines Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist Kontrast bei der Zugänglichkeit eine gute Sache. Je höher der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Luminositätskontrastverhältnis_ bezeichnet, laut W3.org's Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto leichter ist dieser Inhalt zu lesen. Nutzer mit eingeschränktem Sehvermögen schätzen es besonders, wenn Anstrengungen unternommen werden, um den hohen Kontrast von Text gegenüber seinem Hintergrund sicherzustellen. Wenn der Inhalt animiert wird, ist es jedoch tatsächlich eine Möglichkeit, das Risiko, dass der animierte Inhalt Anfälle auslöst, zu reduzieren, wenn der Kontrast abnimmt. Reduzieren Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde bemerkt werden.

Das Kontrastverhältnis ist in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastverhältnis_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren der Farben ist.

Am besten ist es, wenn Sie den Kontrast anpassen, bevor es hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite der Produkte eine hervorragende Ressource für traditionelle Bilder. Ebenfalls für Bilder ist ein Online-Tool verfügbar, pinetools.com's [Helligkeit und Kontrast Online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen, animierte GIFs zu erstellen, zum Beispiel, beginnen Sie mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option zur dynamischen Kontrastreduzierung. Hier ist ein Codebeispiel aus dem Abschnitt mit dem Titel, ["Beispiel: Einstellung der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument, [Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB** Farbraum beschrieben wird.

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

#### Vermeiden Sie vollständig gesättigte rote Inhalte bei blitzender Animation

Wie früher in diesem Dokument erwähnt, organisierte die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2 hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sichtwinkel von mindestens 0,006 Steradiant einnimmt (ungefähr 10 % des zentralen Sichtfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von einem gesättigten Rot ist ebenfalls als Risiko zu betrachten."_ Sie notierten auch in demselben Konsens: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet."_

### Bereitstellung alternativer CSS-Stile

Unter dem Verständnis, dass viele Animationen und Blitzer über CSS-Methoden gesteuert werden können, ist es wichtig, alternative Optionen für Benutzer zu erkunden und die Kontrolle dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen verfügbaren CSS in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Styles angezeigt, wenn die Benutzer das Ansichtsmenü durchgehen, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen durch Browser oder Einstellungen suchen können, deswegen könnte man erwägen, es auf die altmodische Methode zu tun, mit offensichtlichen Buttons oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Auf diese Weise wird nicht mit der Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, oder der Fähigkeit der Benutzer, Einstellungen in den Einstellungen vorzunehmen, in Konflikt geraten oder diese außer Kraft gesetzt.

Es ist wichtig, zu wissen, dass bestimmte Benutzer, wie diejenigen, die auf Sprachsteuerungssysteme angewiesen sind, oft auf ältere Buttons und Links angewiesen sind, weil ihre Behinderung sie daran hindert, eine Maus zu verwenden, oder um in der Lage zu sein, Berührungsereignisse auf mobilen Geräten zu nutzen.

Gängige Möglichkeiten, alternative Stylesheets in Ihre HTML-Dokumente einzufügen, sind die Verwendung des {{HTMLElement('link')}} Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}} Element

Verwenden Sie das {{HTMLElement('link')}} Element in Verbindung mit und zusammen mit den Attributen `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}} Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Methode, um Stylesheets einzufügen, aber es wird nicht ganz so gut unterstützt wie das {{HTMLElement('link')}} Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Mit der Verwendung von alternativen Stylesheets (denken Sie daran, die Titel hinzuzufügen) bereiten Sie es darauf vor, dass Benutzer in der Lage sind, ihre Browser zu nutzen, um alternative Stile zu wählen.

### Dynamisches Umstellen von Stilen

Ein Problem mit dem Verlassen auf den Browser, um alternative Stile offen zu legen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder wegen ihrer Behinderung dazu nicht in der Lage sind. Buttons oder Links machen es vielen dankbaren Benutzern deutlich, dass Optionen zur Verfügung stehen. Es gibt viele Möglichkeiten, Umschalt-Buttons hinzuzufügen, um dem Benutzer das Umschalten zu den verschiedenen Stylesheets zu ermöglichen. Mit den alternativen Stylesheets zu arbeiten, ist nicht die einzige Möglichkeit. Eine andere Möglichkeit ist, das Styling der Seite selbst zu manipulieren. Laut dem MDN-Dokument, [Verwendung dynamischer Stilinformations](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"wo möglich, ist es wirklich besser, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das Enderscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet kontrolliert werden kann"._ Einer der besten verfügbaren Beispiele dafür kommt von der W3C-Seite, ["C29: Verwendung eines Stilumschalters, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates Alternativ-Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine strenge Lösung; aber es ist eine, die manchmal notwendig ist für Lehrer und andere Beamte die gezwungen sind, diejenigen mit extremen Empfindlichkeiten zu bedienen. Diese Beamten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet zu entwickeln mit `display: none`. So können Sie es mit CSS tun:

```css
img {
  display: none;
}
```

#### Nutzen Sie Media Queries mit {{HTMLElement('style')}}

Durch das Einrichten von Media Queries werden Steuerungen durch den Benutzer ermöglicht, diese Steuerungen sind im Browser oder im Betriebssystem verfügbar. Lesen Sie das MDN-Dokument, [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr Details darüber zu sehen, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein tolles Beispiel dafür zu sehen, wie der Code `prefers-reduced-motion` verwendet wird, besuchen Sie das MDN-Dokument, [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie sich unten das Beispiel aus dem Abschnitt ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Umgebungslicht-API nicht verfügbar ist. Unterstützung taucht auf.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein leistungsstarkes Tool, das für Entwickler über Window.matchMedia() verfügbar ist. Eine großartige Ressource ist das MDN-Dokument über [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungs-Feature

Je häufiger der Bildschirm aufgefrischt wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger "flackert" er. Die überwiegende Mehrheit moderner Technologie wird mit einer Rate aktualisiert, die mit der Photosensitivität keine Probleme verursacht. Nicht jeder kann sich jedoch die neueste Technologie leisten: Ältere oder leistungsschwache Computer können niedrige Bildwiederholraten haben. Der AbilityNet Factsheet (November 2015) "Computers and Epilepsy"](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20und%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu den Bildwiederholraten.

Ein sehr alter Artikel von Tech Republic, ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort hinsichtlich der Bildwiederholraten in Hz:

- _"Dieser Effekt ist spürbar und bis zu 70 Hz dokumentiert."_
- _"Diese Studien deuten darauf hin, dass Sie Bildwiederholraten von unter 70 Hz vermeiden sollten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey von CSS-Tricks fand eine innovative Verwendung des Update-Features, welches, in Kombination mit `animation-duration` oder `transition-duration`, dabei hilft, mit einer Rate abzuschließen, die dem menschlichen Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Bildwiederholrate. Das CSS unten stammt aus dem CSS-Tricks Artikel, [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/@media/update) Medien-Feature wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, um das Erscheinungsbild des Inhalts zu ändern, sobald es gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- und experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise, unterlässt es die Spezifikation, die drei Stufen in Form einer Lux-Messung zu definieren, weil Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Auch die Unterschiede in der Technologie, wie etwa e-ink, die im hellen Tageslicht sichtbar bleibt, im Vergleich zu Flüssigkristallen, die es nicht tun, werden erwähnt.
- `environment-blending`
  - : Von W3C's Entwurfsdokument, Media Queries Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending)-Medienfeature wird verwendet, um die Eigenschaften des Displays des Benutzers abzufragen, damit der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte den visuellen und/oder das Layout der Seite anpassen wollen, je nach Display-Technologie, um die Attraktivität zu steigern oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenz-Medienfeatures (Geplant in Media Queries Level 5)

[Benutzerpräferenz-Medienfeatures](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend in Bezug auf die Bereitstellung von Benutzerkontrollen über Medien. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt "Benutzerpräferenz-Medienfeatures", "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors)-Medienfeature zeigt an, ob die Inhalte normal angezeigt werden oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) zwingt der Benutzeragent die bevorzugte Farbpalette des Benutzers auf die Seite und überschreibt die vom Autor gewählten Farben. Vom W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zu Forced Colors: \_"Das Forced-Colors-Mediafeature wird verwendet, um zu erkennen, ob der Benutzeragent einen [Forced-Colors-Modus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem er eine durch den Benutzer gewählte eingeschränkte Farbpalette auf die Seite erzwingt." Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden, und es wird mit einem passenen Wert für `prefers-color-scheme` Medienabfrage spielen.
- `light-level`
  - : Vom W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zu Light Level: \_"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level)-Medienfeature wird verwendet, um die Umgebungslichtstufe abzufragen, bei der das Gerät verwendet wird, damit der Autor den Stil des Dokuments entsprechend anpassen kann. Dies wird ein Segen für diejenigen sein, die motorische Probleme haben, oder für einige mit kognitiven Schwierigkeiten, die den richtigen "Button" nicht finden können, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Vom W3C-Entwurfsdokument, Media Queries Level 5 Abschnitt zu [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Das `prefers-contrast`-Medienfeature wird verwendet, um zu erkennen, ob der Benutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten beim Lesen von Text, der einen geringen Kontrast zum Text-Hintergrund hat und einen größeren Kontrast bevorzugen würde."_ Manchmal kann zu viel Kontrast ein Problem darstellen; eine Heiligenscheinwirkung um den Text kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verschlechtern. Den Kontrast in die Kontrolle des Benutzers zu geben, ist ein definitives Geschenk für die Barrierefreiheit.

#### `MediaQueryList` Schnittstelle

Abschnitt 4.2 von den CSSWG.org Entwürfen integriert sich mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), wie sie in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList), für weitere Informationen.

#### Personalisierungs-Hilfe und -Unterstützung

Die Anforderung für die `literal`-Eigenschaft ist von [WAI-Adapt: Hilfe und Unterstützung](https://w3c.github.io/adapt/help/#literal-explanation) entnommen.

**Anforderung:** Einige Benutzer können keinen nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht-wörtlich identifizieren und ermöglicht dem Autor, nicht-wörtlichen Text und Bilder für die Benutzer zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Anleitung)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR-API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color-Tutorial: Farbe beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Lichtblitz-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Maßdefinitionsangaben #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Fotosensibilität werfen, eine der komplexesten Zustände von Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen sind von Geburt an besonders empfindlich gegenüber blinkenden Lichtern oder kontrastreichen visuellen Mustern, wie Streifen, Gittern und Schachbrettern. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallartige Entladungen, wenn sie dieser Art von visueller Stimulation ausgesetzt sind."_
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Fotosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiterten RGB-Farbraum — scRGB

### Analysewerkzeug für fotosensitive Epilepsie

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden „Goldstandards“ zur Analyse von Lichtblitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung von anfallfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Werkzeuge-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei-Lichtblitze- oder unterhalb-Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält jedoch einige Erklärungen zu den in den WCAG 2.1 Kriterien gemachten Bezügen)
- [Drei-Lichtblitze- oder unterhalb-Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition von relativer Leuchtdichte
