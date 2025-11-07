---
title: Webzugänglichkeit bei Anfällen und körperlichen Reaktionen
short-title: Vermeidung von Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel führt in Konzepte ein, die dazu beitragen, Webinhalte für Personen mit Vestibularstörungen zugänglich zu machen, und zeigt auf, wie man Inhalte messen und verhindern kann, die zu Anfällen und/oder anderen körperlichen Reaktionen führen können.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen verwenden, können alle Inhalte produzieren, die Anfälle oder andere schwerwiegende körperliche Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch auslösen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei der photosensitiven Epilepsie werden Anfälle speziell durch Blitzlichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können auch Epilepsie auslösen.

Dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgestellt wird: "_Bestimmte visuelle Bilder können, auch ohne Bewegung oder Flackern, bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation schreibt in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster aus erkennbaren hellen und dunklen Streifen haben dieselbe Wirkung wie Blitzlichter, aufgrund des Wechsels zwischen dunklen und hellen Bereichen_." Die Epilepsy Foundation of America Working Group ist in der Lage, das Problem ein wenig zu "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in einer beliebigen Orientierung aufweisen_." Zusätzlich zu Streifen ist bekannt, dass auch karierte Muster photosensitive Anfälle hervorrufen können, so [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der wohl etablierte und starke Auslöser sind Blitz-/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF merkt an: _"Das einzige, was wirklich dokumentiert ist, sind Blitzlichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Photosensitivität verursacht werden, kann auch das Hören bestimmter Musikstücke so genannte musikogene Anfälle auslösen, auch wenn diese Art von Anfällen viel seltener zu sein scheint. Für eine gute Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musikogenen Anfällen](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederkehrende nicht provozierte Anfälle umfasst_". Laut der Epilepsy Foundation-Seite ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _"der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Menschen mit Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem, und die Menschen müssen sich des Risikos bewusst sein"_.

Der Punkt ist, Anfälle können definitiv und sind tödlich, und Entwickler und Designer sind unglaublich wichtig, um das Internet sicherer für diejenigen zu machen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst die, die "nur" schwächend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Personen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder wechselnde Muster in verschiedenen Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, besonders Streifen kontrastierender Farben.

Im selben Artikel wird darauf hingewiesen, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass dort die Wellenlänge des Lichts als möglicher Faktor aufgeführt ist; Wellenlängen im roten Spektrum scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: _"Individuen, die an photosensitiven Anfallsleiden leiden, können durch Inhalte, die mit bestimmten Frequenzen für mehr als ein paar Blitze flackern, einen Anfall ausgelöst bekommen"_ und merkt sehr spezifisch an: "_Menschen sind sogar gegenüber roten Blitzen sensibler als gegenüber anderen Farben, daher wird ein spezieller Test bereitgestellt, um gesättigtes rotes Blitzen zu testen_".

Sie benötigen noch nicht einmal ein Bild oder ein Video, um Schaden anzurichten. Ein {{HTMLElement('div')}}-Element, das über JavaScript auf hohe Frequenzen bei Farb- und Helligkeitsänderungen eingestellt wird, kann echten Schaden anrichten. Und Flackern kann überall auftreten. Zum Beispiel können "Spinners", die häufig zur Anzeige während des Ladezeiten von Seiten verwendet werden, leicht "flackern", während sie sich drehen.

Weitere Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel stellt die Seite des Trace Research & Development Center für das [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass _"photosensitive Anfälle durch bestimmte Arten von Blitzen in Web- oder Computerinhalten provoziert werden können, einschließlich Mausüberfahrten, die große Bereiche des Bildschirms schnell an- und ausblitzen lassen können"_.

### Andere körperliche Reaktionen

Übelkeit, Schwindel und Desorientierung sind sehr unspezifische Symptome, die mit allerlei Krankheiten in Verbindung stehen und in Verbindung mit Anfällen (vielleicht außer Desorientierung, die bei Anfällen auftritt) nicht besonders hinweisend sind. Es sind jedoch nicht nur Anfälle die einzige negative körperliche Reaktion, die durch Blitzen, Flackern, Blinken und ähnliche Reize ausgelöst werden kann. 1997 zeigte ein japanischer Cartoon eine animierte "Virusbombe". Einige der Kinder, die den Cartoon schauten, reagierten mit Anfällen, andere litten an Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten körperlichen Störungen sind alle mögliche Folgen: Jede dieser körperlichen Reaktionen kann so schwer sein, dass sie handlungsunfähig macht.

- Anfälle
- Vestibularstörungen
- Migräne
- Übelkeit
- Erbrechen

## Blinkendes, blitzendes und flackerndes Licht

Obwohl die Begriffe "blitzend" und "blinkend" manchmal synonym verwendet werden, sind sie nicht gleichbedeutend. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz größer als 3 Hz (Flackern pro Sekunde) und niedriger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) merkt an, dass _"normalerweise Blitzlichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicherzugehen, empfiehlt der Konsens, dass photosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt sein sollten."_ Bei manchen Menschen können Blitzen/Blinken jedoch Symptome bei weniger als 3 Hz auslösen.

Es ist wichtig zu beachten, dass nicht allem Blitzen und Blinken schädlich ist. NASA bemerkt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php), dass Blinken und Blitzen mächtige Werkzeuge sein können, um Aufmerksamkeit zu erregen, wie dies bei Warnknöpfen notwendig ist (dies geht davon aus, dass Benutzer den Bildschirm immer noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Für manche Benutzer bieten blinkende Knöpfe auch eine Warnung, dass sie sparsam und mit Vorsicht eingesetzt werden müssen. In Bezug auf Webdesign müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "übernehmen", um eine blinkende Notfallwarnung zu geben, die Rate, Größe und Helligkeitsänderungen des Bildschirms beim Warnen berücksichtigen.

### Blitzen und Flackern – Wie wird die Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"]" (https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x): _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0,006 Steradiant (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Was ist ein typischer Betrachtungsabstand? Die Empfehlung für einen typischen Betrachtungsabstand zum Zeitpunkt des Schreibens war "_der Bereich kann als auf ein Gebiet >25% eines Fernsehbildschirmes anwendbar angesehen werden, bei der Annahme standardmäßiger Betrachtungsabstände von ≥2 m (∼9 Fuß)_". Vieles hat sich seit jener Zeit geändert, und wir sind jetzt deutlich näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen spielen ebenfalls eine Rolle. ["Bestimmte Farben führen wahrscheinlicher zu epileptischen Anfällen, Forscher finden"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) merkt an, dass _"komplexe Hirndynamiken durch bestimmte Farbkombinationen stärker moduliert werden als durch andere, beispielsweise verursacht ein rot-blaues Flackerstimulus größere kortikale Erregung als ein rot-grünes oder blau-grünes Stimulus."_

### Blitzen & rotes Blitzen

[WCAG 2.3.1 Allgemeine Flash- und Rot-Flash-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar entgegengesetzter Änderungen in [relativer Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, wobei die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt, und wo "ein Paar entgegengesetzter Änderungen" ein Anstieg gefolgt von einem Rückgang oder ein Rückgang gefolgt von einem Anstieg ist;
- Ein **roter Blitz** wird definiert als jedes Paar entgegengesetzter Übergänge mit einem gesättigten Rot.

Diese Standards basieren auf früheren Forschungen. 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, in dem sie einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle entwickelten und feststellten: _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt, und einen soliden Sehwinkel von mindestens 0,006 Steradiant einnimmt (circa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen)._ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko dar: "_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von gesättigtem Rot ebenfalls als Risiko betrachtet._"

### Größe und Abstand

#### Wie groß? Es hängt davon ab

"Sowohl 'relative' Größe als auch Abstand sind wichtig." Laut [PEAT](https://trace.umd.edu/peat/), _"Die kombinierte Fläche von gleichzeitig auftretenden Blitzen nimmt nicht mehr als ein Viertel eines beliebigen 341 x 256 Pixel großen Rechtecks irgendwo auf der Anzeigefläche ein, wenn der Inhalt bei 1024 mal 768 Pixeln betrachtet wird."_

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, wird in dem Artikel angesprochen, der sich mit WCAG 2.3.1 befasst: "_Der 1024 x 768 Bildschirm wird als die Referenzbildschirmauflösung für die Auswertung verwendet. Der 341 x 256 Pixel große Block stellt bei einem typischen Betrachtungsabstand ein Zehn-Grad-Sichtfeld dar. (Das Zehn-Grad-Feld stammt aus den ursprünglichen Spezifikationen und stellt den zentralen Sehteil des Auges dar, wo Menschen am anfälligsten auf fotostimuli sind.)_"

Dieses Pixel-Verhältnis berechnet die relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand ist entscheidend, weil er das gesamte Sichtfeld beeinflusst. Wenn Betrachter Augenmasken für Spiele tragen, wird das Sichtfeld wahrscheinlich in seiner Gesamtheit vom Bildschirm umhüllt. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die das Erleben von VR in Ihrem Browser ermöglicht und auf Telefon, Computer oder Headset erlebt werden kann. Das Problem der blitzenden Bilder in einer Augenmaske ist ein wachsendes, da die Maske so nahe an den Augen ist.

Forschungsergebnisse legen allgemein nahe, dass die VR-Nutzung tatsächlich sicherer sein kann als der normale Bildschirmkonsum aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst: _"Die begrenzten Anzahl an Daten, die bisher verfügbar sind, weisen auf keine besonderen Bedenken bezüglich Anfällen in Bezug auf VR-Technologie hin, obwohl sich diese Ansicht mit mehr Erfahrungen ändern könnte. Bestimmte Arten von VR-Inhalten, einschließlich heller Blitze, aufreizender Muster oder Farbveränderungen, würden wahrscheinlich Anfälle auslösen, so wie sie es auch in der realen Welt tun würden."_

(Beachten Sie, dass manche Benutzer mit blinkenden Cursor nicht sehen können und möglicherweise Migräne, Reisekrankheit und Desorientierung bekommen, obwohl blinkende Cursor viel kleinere Bereiche des Bildschirms einnehmen.)

### Muster und Parallaxen

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkle Streifenpaare Anfälle auslösen können und unter welchen Bedingungen. Wenn ein Muster unveränderlich und gerade ist, sind acht Linien das maximal zulässige, aber wenn es sich wellenartig bewegt, sind nicht mehr als fünf Linien erlaubt.

Parallaxen-Effekte können Desorientierung hervorrufen. Verwenden Sie Parallax-Effekte mit Vorsicht; wenn Sie sie unbedingt verwenden müssen, stellen Sie sicher, dass der Benutzer eine Steuerung hat, um sie auszuschalten.

"Ein Muster mit Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in einer beliebigen Ausrichtung aufweisen. Wenn die hell-dunklen Streifen eines Musters zusammenbezogen auf den minimal erwarteten Betrachtungsabstand einen soliden Winkel von >0,006 Steradiant am Auge einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> beträgt, und das Muster ≥0,5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkle Streifenpaare enthalten, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert bleibt oder aus einer Richtung sanft driftet, nicht mehr als acht Streifen."

Nicht alles ist bekannt, und selbst bei den obigen Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit der Reaktion des Gehirns, wenn man von einem kleineren auf einen größeren Bereich wechselt, ebenso wie die Erhöhung des Kontrastes und die Erhöhung der räumlichen Frequenz von niedrig zu mittel. Es ist auch bekannt, obwohl nicht das zugrundeliegende Warum verstanden wird, dass ein Wechsel von einfachen Orientierungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel dem schachbrettartigen Muster, das entsteht, wenn man ein Set von Streifen auf eine andere Schicht legt, aber senkrecht zum Originalset) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Zugänglichkeit. Lesen Sie [Understanding colors and luminance](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) im Zusammenhang mit Webzugänglichkeit und Zugänglichkeit im Allgemeinen.

Wie sich die Farbe auf ihren Hintergrund bezieht—üblicherweise in Bezug auf Kontrast und wie drastisch sich die Farbe von Bild zu Bild in der Animation verändert—ist wichtig. Weitere Informationen hierzu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der spezielle Fall von Rot

Es wurde gezeigt, dass [einige Farben wahrscheinlicher epileptische Anfälle hervorrufen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Farbe Rot beeinflusst die menschliche Physiologie und Psychologie im Allgemeinen. Seine Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren bemerkt.

- **Roter Entsättigungstest:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Ophthalmologen einen Test mit ihm entwickelt haben. Der rote Entsättigungstest bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für Menschen mit traumatischen Hirnverletzungen [kognitive Funktionen in einer roten Umgebung verringert sind](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich zu einer roten Umgebung, die die kognitive Funktion von Menschen mit traumatischen Hirnverletzungen beeinträchtigt, scheinen Farben im Rot-Spektrum besondere Besorgnis und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte beim Testen des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Flackern sind. (Sehen Sie das Video [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/)).

#### Websicherheit bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" angesehen wird. Das bedeutet _nicht_, dass sie "sicher ist, keine Anfälle zu verursachen", es bedeutet nur, dass die Farbe "sicher" genau durch die Technik, die zur Farberzeugung auf Bildschirmen verwendet wird, reproduziert werden kann.

## Messung zur Schadensvermeidung

Die Messung des Potenzials für Schaden ist ein guter Anfang. Zu den Faktoren, die in Tests berücksichtigt werden, gehören Farbe, Helligkeit, Größe, Kontrast und, im Fall von Animationen, Häufigkeit. WCAG 2.1 gibt Anleitungen zur Bewertung von Inhalten.

Im August 2004 zog die Epilepsy Foundation of America Experten zu einem Workshop zusammen, um einen Konsens über photosensitive Anfälle zu entwickeln. Die folgenden, fundierten und autoritativen Informationen stammen von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden Sehwinkel von ≥0.006 Steradiant (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel Paare von Streifen in einer beliebigen Ausrichtung aufweisen. Wenn die hell-dunkel Streifen eines beliebigen Musters zusammen vom minimal-erwarteten Betrachtungsabstand einen soliden Winkel von >0.006 Steradiant einnehmen, die Leuchtdichte des hellsten Streifens >50 cd/m2 beträgt und das Muster >0.5 s präsentiert wird, sollte das Muster nicht mehr als fünf hell-dunkel Paare von Streifen anzeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert bleibt oder sanft in einer Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind bei feststehenden Medien einfacher anzuwenden, wie z.B. einer vorab aufgenommenen TV-Show, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Also, wie bezieht sich das für den Webentwickler auf Messungen für Farbe, Leuchtdichte und Sättigung?

Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtintensität. Es ist ein photometrischer Begriff, und Photometrie befasst sich mit der Messung des sichtbaren Lichts, wie es vom menschlichen Auge wahrgenommen wird. Wikipedias Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) stellt es in Bezug, was wir als Entwickler gewohnt sind: auf einem Anzeigegerät und im RGB-Raum. Dies ist nützlich, weil es einen spezifischen Standard gibt, der angenommen wird, dass er auf Monitoren, Druckern und dem Internet verwendet wird, und es ist der **sRGB** (Standard Red Green Blue).

> Als Maß für Licht, das pro Flächeneinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop-Liquid-Displays haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [Hochauflösende Fernseher](https://en.wikipedia.org/wiki/High-definition_television) liegen zwischen 450 und etwa 1500 cd/m<sup>2</sup>.

Das Fazit ist, dass der **sRGB** Farbraum ein gemeinsamer Touchpoint zwischen Forschung, Bewertungstools und Entwicklern ist, da er leicht vom gebräuchlich verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die als Auslöser für Anfälle dienen können, bis zum größtmöglichen Maß zu quantifizieren und zu messen. Das gesagt, darf nicht vergessen werden, dass Farbe genauso viel über menschliche Wahrnehmung im Gehirn handelt, wie es um die Messung des Lichts geht, das von einem Computerbildschirm ausgeht.

Neben den psychologischen Varianzen gibt es auch physiologische Unterschiede unter uns. Es wird sowohl Variationen als auch Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel merkt Tom Jewett, Lecturer Emeritus of Computer Sciences an der Cal State University Long Beach, über [Lightness in der HSL-Farben-Skala](https://colortutorial.design/hsb.html) an: _"Die Unterscheidung zwischen Helligkeitsstufen ist tatsächlich nicht linear, wie die HSL-Skala suggerieren würde; wir sind viel empfindlicher auf Änderungen in hellerem Werten als zu dunkleren."_ Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht, wie es von einem Computerbildschirm kommt, durch den Abstand zum menschlichen Auge, gefiltert vom menschlichen Sehvermögen und dann manipuliert durch das menschliche Gehirn durchläuft, andauert. Sogar Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation, ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtbedingte Anfall tritt fast immer vor dem 20. Lebensjahr auf." Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle häufiger bei Jungen auftreten, da sie eher dazu neigen, Computerspiele zu spielen. Videospiele enthalten oft potenziell provokative Lichtstimulation."\_

**Das Testen von Benutzern ist sehr problematisch**. Natürlich möchte niemand eine person mit Anfallsneigung dem Probandentesten unterziehen. Es ist gefährlich. Insofern ist es eines der ethisch?

Um die Werkzeuge zu nutzen, die von Experten auf diesem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Tools, die von Forschern und Ärzten für Filme/Videos ethisch und professionell entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt und es kostenlos zum Download zur Verfügung gestellt. PEAT kann Autoren helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Einschränkung seiner Nutzung: **_Die Verwendung von PEAT zur Bewertung von kommerziell produzierten Materialien für Fernsehen, Film, Home Entertainment oder Gaming-Industrien ist verboten. Verwenden Sie den Harding-Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehanstalten den Harding-Test unter [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehanstalten in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, daher bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse- als auch Zertifizierungsdienste für Videoinhalte an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Zugänglichkeitslösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung, entweder absichtlich oder unabsichtlich keinen Schaden zuzufügen. Wenn wir etwas einbeziehen müssen, das das Potenzial hat, Schaden zu verursachen, ist es wichtig, Benutzer davor zu bewahren, unbeabsichtigt auf die schädlichen Inhalte zu stoßen, und Möglichkeiten zu bieten, durch die Benutzer Animationen verhindern und steuern können, um potenzielle Schäden zu mildern.

### Was der Webentwickler tun kann

#### Keine Schäden verursachen

[WCAG-Richtlinie 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) gibt einen Überblick: _"Entwerfen Sie keine Inhalte, die bekanntermaßen Anfälle oder körperliche Reaktionen auslösen."_ Integrieren Sie keine Animation, die ein Benutzer nicht steuern kann. Entwerfen Sie keine Muster, die bekanntermaßen Probleme verursachen. Wenn Sie unbedingt ein GIF oder PNG mit Blitz in Ihrem Inhalt haben müssen, zeichnen Sie jetzt stattdessen in einem Videoformat auf, damit Benutzer über Steuerungen verfügen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder es weniger schädlich zu gestalten.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwickler oder Designer, ob blinkender Inhalt wirklich auf Ihrer Webseite sein muss. Selbst wenn es richtig behandelt wird, gibt es Personen, die beanstandeten Inhalt von Ihrer Seite herunterladen und zum Schaden machen können. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um physische Schäden durch Animation zu verursachen, am Samstag, den 22. März 2008 begann. Die Website der Epilepsy Foundation wurde mit blinkenden Bildern und Links gehackt, die fälschlicherweise behaupteten, hilfreich zu sein. Benutzer mit Vestibularstörungen, die auf der Suche nach Hilfe von der Website waren, waren betroffen.

Eine Reihe rechtlicher Überlegungen laufen nach dem Fall des Journalisten Kurt Eichenwald, ein bekannter Epileptiker, der nach dem Erhalt eines animierten GIFs im Dezember 2016 einen Anfall erlitt: das blinkende GIF trug die Nachricht: _"Sie verdienen einen Anfall für Ihre Beiträge."_.

#### Kontrolle der Exposition, Kontrolle des Zugangs

Die Kontrolle der Exposition gegenüber der Seite ist der Schlüssel, um sicherzustellen, dass jemand Anfälliges für Anfälle nicht versehentlich darauf ausgesetzt wird. WCAG stellt fest, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Belassen Sie den Zugriff auf den betroffenen Bereich auf die Benutzer, indem zuerst eine Warnung über den Inhalt angezeigt wird, und sortieren Sie ihn zuerst an einen Ort, an dem ein Benutzer frei zugriffen kann- wie durch Klicken auf eine Schaltfläche oder Sicherstellen, dass der Link zur Seite eine eindeutige und offensichtliche Warnung hat.

Berücksichtigen Sie, dass Indizierungsregeln für Ressourcen suchmaschinen manipulative Hinweise geben, damit sie keine potenziell schädlichen Ressourcen in ihren Suchindizes beinhalten.

Sie können dies tun, indem Sie Metadaten in einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Element mit restriktiven Regeln wie `noindex, nofollow` verwenden.

Indem Sie die Seite nicht indizieren (`noindex`) und Links auf der Seite nicht folgen (`nofollow`), wird die Wahrscheinlichkeit, dass Benutzer versehentlich durch eine Suche darauf stoßen, reduziert:

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

Für nicht-HTML-Ressourcen können Sie Crawl-Direktiven in einem {{httpheader("X-Robots-Tag")}} HTTP-Header festlegen:

```http
X-Robots-Tag: noindex
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Erwähnung wegen ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächliche innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Fähigkeit, das Animation frühzeitig in einer Anfrage zu erkennen.
- Zakirt bietet einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv bleibt, bis der Benutzer sich dafür entscheidet. Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kontrollkästchen aktivieren, um die Animation zu starten.

### Videos

Da gibt es wie bei animierten GIFs muss der Benutzer eine Taste drücken oder ein Kontrollkästchen markieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, beispielsweise kein [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay) Attribut zu einem `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} zu `paused` als Anfangszustand festzulegen. Um ein leistungsstarkes Beispiel dafür zu sehen, wie das tatsächlich funktioniert, sehen Sie den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet die `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}}, und [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) um eine sehr zugängliche Erfahrung zu schaffen, die unter der Kontrolle des Benutzers steht.

[`animation-play-state`](/de/docs/Web/CSS/Reference/Properties/animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder angehalten ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf Null für die Anfangsstufe der Animation einzustellen.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer auch Animationen stoppen kann sowie sie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und verfügt auch über keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Video-Element hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls`-HTML-Attribut wider, welches steuert, ob Benutzeroberflächenelemente zur Steuerung des Medienobjekts angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video über Steuerungen verfügt, die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu den HTML-Video- und -Audioelementen hinzufügen.

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

##### Audio als Teil von Video

Beachten Sie, dass die Audio in Video durch das `muted` Inhaltsattribut gesteuert werden kann, obwohl der Inhalt im {{HTMLElement('video')}}-Element statt im {{HTMLElement('audio')}}-Element ist. Dieses Beispiel stammt aus dem Abschnitt über die [stummgeschaltetes Medienattribut](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) Beschreibung des HTML-Living-Standards. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer eine Aktion ausführt, um das Audio aufzuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Kontrolle der Geschwindigkeit

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zur Handhabung derer erheblich, wobei daher keine einheitliche Lösung für das Problem besteht. Dies wird dadurch weiter erschwert, dass selbst die Art, wie Dateien klassifiziert werden, beeinflusst wie sie behandelt werden sollten. Zum Beispiel wird das .gif Dateiformat normalerweise als Bild verstanden, aber auch als Videoformat verstanden in einigen Kreisen, aufgrund ihrer Fähigkeit zur Animation. Für eine umfassende Liste der Medientypen besuchen Sie bitte die Seite von [IANA.org für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Der Weg, sie zu erkennen, ist keine leichte Übung. Mögliches Interesse besteht darin, den [MIME Detecting](https://mimesniff.spec.whatwg.org/) Standard bei whatwg.org zu verfolgen. Nahezu jede Art von Bild kann animiert werden; wie sie animiert werden variiert, und daher unterscheidet sich auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Einführung in Canvas enthält einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Hauptbestandteil bei der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Sehen Sie den Artikel ["Steuern von FPS mit RequestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) wo sie die Feinheiten der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierung diskutieren.
- **GIFs (Raster)**: Schwierig zu knacken, weil die Kontrolle für ihre Animation innerhalb der GIF-Dateien selbst liegt. Für Informationen über die Steuerung der Geschwindigkeit von GIFs sehen Sie W3Cs ["G152: Einstellen animierter GIF-Bilder um nach n Zyklen (innerhalb von 5 Sekunden) zu stoppen"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zum Thema ist, ["Kann GIF-Animation mit JavaScript gesteuert werden?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, Video-Version eines GIF angesehen, das Format ist nicht standardisiert und muss sich auf eine "echte" Videodatei (z.B. eine .webm-Datei) beziehen, die anderswo existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Auch von manchen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG), gibt an, dass \_"SVG ein textbasiertes offenes Webstandardsformat ist und explizit dafür vorgesehen ist, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten." SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Dies bedeutet, dass SVG-Erscheinungsbild und -Animation durch CSS-Schlüsselframes und -Animation gesteuert werden können. Für Interaktionen mit JavaScript sehen Sie die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel) Raster-Grafiken werden in Videospielen und ebenso in der medizinischen Bildgebung verwendet.

#### Text kann auch animiert werden

Transformationen und Übersetzungen können Text in einem Div animieren und Schaden zufügen. Bewegter Text kann Anfälle auslösen aus den gleichen Gründen, warum es bewegte Bilder tun, also vermeiden Sie es, Text zu animieren. Es ist ohnehin ratsam, keinen sich bewegenden Text zu verwenden, da viele Bildschirmlesegeräte sich bewegenden Text nicht lesen können und dies eine schlechte Benutzererfahrung selbst für Personen ohne Seh- oder Vestibularprobleme darstellt.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements gibt es viele Optionen, die zusammen eine mächtige Erfahrung für den Benutzer schaffen können. Wir haben die `animation`-Eigenschaft bereits früher in diesem Dokument erwähnt. Es handelt es sich tatsächlich um eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; das ist die Dauer, die eine Animation benötigt, um einen Zyklus zu vervollständigen. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` gibt an, dass keine Animation stattfinden soll.
- `animation-timing-function`

Die Animationseigenschaft ist schon mächtig an sich, aber kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein mächtiges Set von Optionen für den Benutzer bereitgestellt werden. Die Festlegung der Werteigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer statt auf `animation: none` und `transition: none` bietet eine Absicherung, die, falls vorhanden, ein Problem in der Abhängigkeit verhindern kann die Animation zu laufen.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}} Elemente und SVGs zu steuern. Die meisten JavaScript-Codes, die auf HTML-Video angewendet werden, gelten auch fpr Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Abspielgeschwindigkeit sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist Standard und wird als normale Geschwindigkeit angesehen; ein Wert von 0.5 ist halbe Geschwindigkeit, ein Wert von 2.0 ist die doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Wiedergabegeschwindigkeit-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und beinhaltet [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zur [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) gibt den folgenden Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für die Animation

Einer der einfachsten Möglichkeiten ist, mit einem bereits existierenden Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Erinnern Sie sich, Sie können hier GIFs, JPGs, PNGs, SVGs und andere Dateiformate als Bildquelle verwenden, solange es in Ihrer Umgebung zugelassene Dateiformate—und -größen—sind. SVGs sind oft nicht zugelassen, aufgrund von Sicherheitsbedenken. Das MDN-Dokument, [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations), bietet herausragende Beispiele dafür, unter Nutzung mehrerer Bildquellen für die Sonne, die Erde und den Mond, und durch Verwendung diverser Canvas-Methoden die Geschwindigkeit und Animation der Erde zu kontrollieren, wie sie um die Sonne und der Mond um die Erde kreist. Verwenden Sie das zum Tutorium verfügbare Codepen, um `ctx.rotate` im Code zu justieren, um zu sehen, wie die Animation beeinflusst wird, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut und unbestreitbar eine blitzende Animation benötigen

Stellen Sie sicher, dass es eine Kontrolle darauf gibt. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es erstmals betrachtet, und dass der Benutzer sich für die Ansicht der Animation anmelden muss.

Ein Beispiel eines Formats, das keinerlei Steuerungen für den Benutzer hat, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Die Konvertierung eines animierten GIFs in ein Video ermöglicht, Steuerungen an die Animation anzubringen, und verleiht dem Benutzer Macht. Es gibt viele kostenlose Online-Konverter, die daher verwendet werden können, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Setzen Sie Benutzererwartungen

Geben Sie den Benutzern einen Hinweis, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Lesen Sie [WCAG 2.2 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut und zweifellos blitzen müssen, halten Sie es klein. Allgemein gesprochen, begrenzen Sie die Größe des Blitzes auf einen Bereich von etwa 341 x 256 Pixeln oder kleiner. Diese Pixelgröße geht davon aus, dass ein Benutzer sich in einer typischen Entfernung zum Bildschirm befindet. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in Nahreichweite betrachtet werden soll, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die das Erlebnis von VR in Ihrem Browser ermöglicht. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR-Design, das eine Augenmaske verwendet **, oder verwendet werden kann von einer Augenmaske**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, da das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Zugänglichkeit geht. Je größer der Kontrast zwischen Textfarbe und Hintergrundfarben (technisch genannt, Leuchtkraft Kontrastrate, nach W3.orgs Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/), desto einfacher ist ein solcher Inhalt zu lesen. Benutzer mit eingeschränkter Sichtwürdigung schätze besonders Anstrengungen, den Text besonders kontrastreich gegenüber dem Hintergrund zu gestalten. Wenn der Inhalt animiert ist, ist eine reale **_Reduzierung _** des Kontrastes, eigentlich ein Weg, um die Wahrscheinlichkeit eines Anfalls durch die animierten Inhalte zu verringern. Senken Sie das Kontrastratium, wenn drei Blitze innerhalb einer Sekunde festgestellt werden.

Das Kontrastratium ist in [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) wie folgt definiert:

- _Kontrastratium_
  - : (L1 + 0.05) / (L2 + 0.05), wobei
    - L1 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Leuchtdichte](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) der dunkleren der Farben ist.

Im besten Fall können Sie den Kontrast anpassen, bevor er hochgeladen oder veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite der Produkte eine phänomenale Ressource für traditionelle Bilder. Für Bilder ist ein Online-Tool verfügbar, pinetools.coms [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie beabsichtigen animierte GIFs zu erstellen, beginnen Sie beispielsweise mit einem, das ein niedrigeres Kontrastratio hat.

JavaScript ist auch eine Option, um Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt unter dem Titel, ["Beispiel: Den Hintergrundfarbe eines Paragraphen festlegen"](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

#### Vermeiden Sie vollständig gesättigtes Rot für blitzende Inhalte

Wie zuvor in diesem Dokument erwähnt, zog die Epilepsy Foundation of America im August 2004 Experten zu einem Workshop zusammen, um ein Expertengemüse über photosensitive Anfälle zu entwickeln. Das führte zu dem Verständnis, dass _"Ein Blitz ein potenzielles Risiko darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen visuellen Winkel von mindestens 0,006 Steradians (etwa 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet."_ Sie beachten auch in diesem Konsens: _"Unabhängig der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet."_

### Alternative CSS-Stile bereitstellen

Indem Sie viel Animation und Blitzen durch CSS-Methoden kontrollieren können, ist es wichtig, Wege zu erforschen, um alternative Optionen für Benutzer zugänglich und diese Optionen kontrolliert und sichtbar festzulegen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen verfügbaren Stile im alternativ Stylesheets wenn Benutzer wissen, wo sie nachsehen. In manchen Fällen offenbaren sich die alternativen Stylesheet wenn Benutzer das View-Menü durchgehen, in anderen Manifestieren sich die in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen über den Browser oder in den Einstellungen suchen können, daher lohnt es sich zu berücksichtigen, die Dinge auf darauf traditionelle Weise durchzuarbeiten, mit offensichtlichen Schaltflächen oder Links zum Wechseln des Stils, damit Benutzer sie sehen können. Dies wird nicht mit der Fähigkeit des Browsers konfliktierten weiterhin alternative Stylesheets zu lesen, oder die Fähigkeit des Benutzers Präferenzen in den Einstellungen festzulegen.

Es ist wichtig zu wissen, dass gewisse Benutzer, wie die auf Sprachsysteme verlassen, oft auf Legasy-Schaltflächen und Links angewiesen sind, weil ihre Behinderung die Nutzung einer Maus oder die Fähigkeit von Touchgesten auf mobilen Tablets verhindert.

Gängige Wege für alternative Style Sheets zu Ihre HTML-Dokumente ein, sind Verwendung der {{HTMLElement('link')}} Element, und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit und gemeinsam mit den Attributen `rel="alternate stylesheet"` und für Titel, `title="..."` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stilblätter zu integrieren, aber es ist nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```css
@import "alternate1.css";
@import "alternate2.css";
```

Durch die Verwendung alternativer Stylesheets (denken Sie daran, die Titel hinzuzufügen) setzen Sie es für Benutzer ein, um ihre Browser zu verwenden, um alternative Stile zu wählen.

### Dynamisches Stylesheet-Wechseln

Ein Problem beim Verlassen auf den Browser zur Offenbarung alternativer Stile besteht darin, dass nicht alle Benutzer technisch versiert genug sind um die alternative Stile zu entdecken. Oder können es aufgrund ihrer Behinderung nicht. Schaltflächen oder Links machen es für viele aufmerksame Benutzer offensichtlich, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Toggleschaltflächen zu haben, die es dem Benutzer ermöglichen, auf die verschiedenen Stylesheets zu wechseln. Das gesagt, die Verwendung alternativer Stylesheets sind nicht die einzige Option. Eine andere Möglichkeit ist es, die Stylesession der Seite selbst zu manipulieren. Nach dem MDN-Dokument, [Using dynamic styling information](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _"Wo möglich, ist es beste Praxis, dynamisch Klassen über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu managen, da das endgültige Aussehen aller Styling-Hook in einem einzelnen Stylesheet konfiguriert werden kann"_ ein bestes Beispiel dafür, wie man dies tut, ist von der W3C-Seite, ["C29: Benutzen eines Style-Switcher, um eine konforme alternative Version bereitzustellen"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extremfälle: Text-Only Lösungen

Eine separate alternative Stylesession, die verhindert, dass Bilder gespielt werden, ist einfach zu erstellen. Es ist eine drakonische Lösung; aber es ist eine, die für Lehrer und andere öffentliche Diener manchmal notwendig ist, die ihre Leistungen für diejenigen mit extremen Empfindlichkeiten bereitstellen müssen. Diese öffentlichen Dienstleister können ihre Entwickler bitten eine spezielle alternative Stylesession mit `display: none` zu entwickeln. Hier ist wie es über CSS gemacht wird:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit dem {{HTMLElement('style')}}

Durch Einrichtung von Medienabfragen, ermöglichen Sie Kundensteuerung für den Benutzer, diese Steuerungen sind im Browser oder im OS verfügbar gemacht. Lesen Sie das MDN-Dokument, [Zugänglichkeit: Was Benutzer tun können, um sicherer zu browsen](/de/docs/Web/Accessibility/Guides/Browsing_safely) für detaillierte Informationen, wie ein Benutzer auf die Steuerungen zugreifen kann.

#### `prefers-reduced-motion`

Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein gutes Beispiel dafür zu sehen, wie man `prefers-reduced-motion` verwendet, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), oder das Beispiel unten aus dem Abschnitt zu ["Neu in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, falls die Umgebungslicht-API nicht verfügbar ist. Unterstützung ist im Entstehen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Werkzeug für Entwickler erhältlich über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medien-Update-Feature

Je häufiger der Bildschirm aktualisiert, desto stabiler erscheint es dem menschlichen Auge und desto weniger "flackert" es. Die große Mehrheit der modernen Technik refreshed mit einer Geschwindigkeit, die keine Probleme mit der Photosensitivität verursacht. Trotzdem kann sich nicht jeder die aktuellste Technik leisten: ältere oder untergewichtete Computer können niedrige Bildwiederholfrequenzen haben. [AbilityNets Faktenblatt (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr der Details zu den Bildwiederholraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsie und CRT/LCD-Bildschirmflimmern"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort bezüglich der Bildwiederholraten in Hz:

- _"Dieser Effekt ist bis zu 70 Hz bemerkbar und dokumentiert."_
- _"Diese Studien scheinen darauf hinzudeuten, dass man Abstand von Bildwiederholraten unter 70 Hz halten sollte, und eine Rate verwendet werden sollte, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand einen innovativen Nutzung des Update-Features, das in Verbindung mit der Animation-Dauer oder Transition-Dauer verwendet wird, um eine Ende mit einer Rate zu erreichen, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Eric Techniken adressieren das Problem der Bildwiederholrate. Der unten stehende CSS-Code stammt vom CSS-Tricks-Artikel, [" Präferenzen überarbeitetes reduziert-Bewegung, die reduzierte Bewegung Medienabfrage"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Das [`update`](/de/docs/Web/CSS/Reference/At-rules/@media/update) Medienfeature wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild eines Inhalts zu ändern, nachdem es gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentalmerkmale

### Medientypen Level 5

EnvironmentMQ (In der Planung in Medientypen Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal, und ausgewaschen. Interessanterweise vermeidet die Spezifikation es tatsächlich, die drei Stufen in Bezug auf eine Lux-Messung festzulegen, weil Geräte mit einem Lichtsensor normal die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen weisen ebenfalls auf den Unterschied in Technologien hin, wie e-ink, das bei hellem Tageslicht lesbar bleibt, versus Flüssigkristalle, die es nicht tun.
- `environment-blending`
  - : Aus dem W3C-Dokument, Medientypen-Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfeature wird verwendet, um die Eigenschaften der Benutzeranzeige abzufragen, sodass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte entscheiden, die visuellen und/oder das Layout der Seite abhängig von der Display-Technologie anzupassen, um die Anschaulichkeit oder die Lesbarkeit zu erhöhen."_

#### Benutzerpräferenz-Medientypen (In Planung in Medientypen Level 5)

[User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editors' Draft Medientypen-Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend bei der Bereitstellung von Benutzerkontrolle über Medien. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt, [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfeature zeigt an, ob die Inhalte normal angezeigt werden oder ob Farben umgekehrt wurden."
- [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die vom Benutzer bevorzugte Farbpallette auf der Seite, die die ausgewählten Farben des Autors überschreibt. Aus dem W3C-Draft-Dokument, Medientypen-Level 5 Abschnitt zu Forced-Colors: \_"Das Medienfeature Forced-Colors ermöglicht es, zu ermitteln, ob der Benutzeragent einen [Forced Colors-Modus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode)aktiviert hat, bei dem es eine vom Benutzer gewählte eingeschränkte Farbpalette auf der Seite erzwingt." Der Benutzer muss auf diese Fähigkeit hingewiesen werden und sie muss mit dem entsprechenden Wert des prefers-color-scheme Medienabfrage freundlich kommunizieren.
- `light-level`
  - : Aus dem W3C-Draft-Dokument, Medientypen-Level 5 Abschnitt zu Light-Level: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfeature wird verwendet, um den Umgebungslicht-Level abzufragen, indem das Gerät genutzt wird, um dem Autor den Stil des Dokuments in Reaktion anzupassen."_ Das wird ein Segen sein für alle, die mit motorischen Fähigkeiten kämpfen, oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind, den richtigen "Knopf" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem Abschnitt im W3C-Entwurfsdokument, Medientypen-Level 5 zu [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): _"Das Medienfeature prefers-contrast wird verwendet, um zu erkennen, ob der Benutzer angefordert hat, das System die Menge Kontrast zwischen benachbarten Farben zu erhöhen oder verringern. Viele Benutzer haben z.B. Schwierigkeiten, Text zu lesen, der einen kleinen Unterschied im Kontrast zu seinem Hintergrund hat, und würden einen größeren Kontrast bevorzugen."_ Manchmal kann es jedoch so sein, dass zu viel Kontrast; ein Heiligenschein um den Text führen kann und die Lesbarkeit tatsächlich verringert. Den Kontrast in die Kontrolle des Benutzers zu geben ist ein definitives Geschenk für die Zugänglichkeit.

#### `MediaQueryList`-Schnittstell?

Abschnitt 4.2 von den CSSWG.org Entwürfen integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) wie im HTML definiert. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Weitere Informationen siehe auf MDN, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung helfen und unterstützen

Die Anforderung an das `literal`-Eigenschaft wird von [WAI-Adapt: Help and Support](https://w3c.github.io/adapt/help/#literal-explanation) übernommen.

**Anforderung**: Einige Benutzer können keinen non-literal Text und Icons wie Metaphern, Redewendungen usw. verstehen. Die `literal`-Eigenschaft ist dafür gedacht, Text oder Bilder als non-literal zu identifizieren und ermöglicht es dem Autor, den non-literal Texten und Bildern Benutzern zu erklären.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/Reference/Values/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Farb-Tutorial: Farben beschreiben](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsbeitrag
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American Von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0 Blitzdefinition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Understanding 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Individuen sind von Geburt an besonders empfindlich gegenüber blitzenden Lichtern oder kontrastierenden visuellen Mustern wie Streifen, Gittern und Schachbrettmustern. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallsähnliche Entladungen, wenn sie diesen visuellen Reizen ausgesetzt sind."_
- [Gamma-Oszillationen und photosensible Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flimmern, können bei Patienten mit photosensibler Epilepsie Anfälle auslösen."_
- [Photosensible Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensible Anfälle werden durch blitzende oder flimmernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Photic- und pattern-induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Arbeitsgruppe der Epilepsy Foundation of America](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Liste der Barrierefreiheit-Master](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Analyse-Tool für photosensible Epilepsie

Zusammen mit dem Harding-Tool gilt es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Erklärung](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Moduls](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Referenzen in den WCAG 2.1 Kriterien)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Richtlinien für zugängliche Webinhalte (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) Definition der relativen Leuchtdichte
