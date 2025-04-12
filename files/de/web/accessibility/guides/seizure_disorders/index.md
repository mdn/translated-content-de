---
title: Barrierefreiheit im Web für Anfälle und physische Reaktionen
short-title: Verhinderung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

Dieser Artikel stellt Konzepte vor, wie webbasierte Inhalte für Menschen mit vestibulären Störungen zugänglich gemacht werden können, und wie man Inhalte misst und vermeidet, die Anfälle und/oder andere physische Reaktionen auslösen können.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS- oder JavaScript-Animationen verwenden, können alle Inhalte erzeugen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei der photosensitiven Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch Lesen oder Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen auslösen können, wird in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in dem vermerkt wird: "_Bestimmte visuelle Bilder, auch in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: "_Statische oder bewegte Muster von erkennbaren hellen und dunklen Streifen haben die gleiche Wirkung wie blinkende Lichter aufgrund des Wechsels von dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem etwas "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paarungen in jeder Ausrichtung umfassen_". Neben Streifen sind auch karierte Muster dafür bekannt, photosensitive Anfälle auszulösen, gemäß [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom umfassenden Epilepsieprogramm der USF stellt fest: _"Das einzige, was wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind jedoch photosensitiv, und die überwiegende Mehrheit der Epilepsien ist es nicht."_ Neben Anfällen, die durch Photosensitivität verursacht werden, kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Arten von Anfällen weitaus seltener zu sein scheinen. Für eine großartige Einführung in das Thema musikogener Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [musikogene Anfälle](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy), weist die Epilepsy Foundation darauf hin, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit darstellt, die wiederkehrende unprovozierte Anfälle beinhaltet_." Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), _"plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbezogene Todesursache bei Menschen mit Epilepsie. Er ist nicht häufig, aber es ist ein sehr reales Problem und die Menschen müssen sich seines Risikos bewusst sein."_

Der Punkt ist, dass Anfälle definitiv tödlich sein können und sind, und Entwickler und Designer sind unglaublich wichtig, um das Web zu einem sichereren Ort für diejenigen zu machen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber auch die, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Personen Anfälle auslösen können; hier ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder bewegender Bilder.
- Bestimmte Videospiele oder Fernsehübertragungen mit schnellen Blitzen oder wechselnden Mustern verschiedener Farben.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es von Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor umfasst; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt, dass: "_Personen, die fotosensitive Anfallsleiden haben, können einen Anfall bekommen, der durch Inhalte ausgelöst wird, die mit bestimmten Frequenzen blinken, wenn sie mehr als ein paar Mal blinken_" und geht weiter darauf ein, sehr spezifisch anzumerken, dass: "_Personen auf rotes Blinken noch empfindlicher reagieren als auf andere Farben, so dass ein spezieller Test für gesättigtes rotes Blinken bereitgestellt wird_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das darauf eingestellt ist, Farbe und Helligkeit mit hoher Frequenz zu ändern, was mit JavaScript leicht machbar ist, kann echten Schaden anrichten. Und Flackern kann überall auftreten. Zum Beispiel können "Spinners", die häufig verwendet werden, um Seitenladungen anzuzeigen, beim Drehen leicht "flackern".

Weitere Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel weist die Seite des Trace Research & Development Centers [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) darauf hin, dass _"photosensitive Anfälle durch bestimmte Arten des Flackerns in Web- oder Computerinhalten ausgelöst werden können, einschließlich Mauszeigern, die große Bereiche des Bildschirms zum schnellen Ein- und Ausschalten bringen."_

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen beobachtet wird). Anfälle sind jedoch nicht die einzige negative physische Reaktion, die durch Blitzen, Flackern, Blinken und andere ähnliche Reize möglich ist. 1997 enthielt ein japanischer Cartoon eine animierte "Virenbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwerwiegend, dass sie ins Krankenhaus gebracht werden mussten. Die unten aufgeführten körperlichen Störungen können mögliche Folgen sein: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie die Person handlungsunfähig macht.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl "blitzen" und "blinken" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz über 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass _"im Allgemeinen blinkende Lichter bei Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, wird empfohlen, dass Personen mit Photosensitivität nicht mehr als drei Blitze pro Sekunde ausgesetzt werden."_ Für einige Menschen können jedoch Blitzen/Blinken Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht alles Blitzen und Blinken schlecht ist. In seinem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) stellt die NASA fest, dass Blinken und Blitzen mächtige Werkzeuge sind, um Aufmerksamkeit zu erregen – wie es bei Warnschaltflächen erforderlich ist (dies nimmt an, dass Benutzer den Bildschirm sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Schaltflächen auch, dass sie sparsam und mit Vorsicht verwendet werden müssen. Wie es sich auf das Webdesign bezieht, müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "kapern", um eine blinkende Warnung vor einem Notfall anzuzeigen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flackern – wie wird Gefahr quantifiziert?

Gemäß dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist _"ein Blitz ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0,006 steradiant (etwa 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_

Wie weit ist ein typischer Betrachtungsabstand? Die zum Zeitpunkt der Erstellung in Betracht gezogene Empfehlung war: "\_Der Bereich kann als für eine Fläche von mehr als 25 % der Fläche eines Fernsehbildschirms geltend genommen werden, wobei davon ausgegangen wird, dass Standard-Betrachtungsabstände von ≥2 m (ca. 9 Fuß) angenommen werden." Vieles hat sich seitdem geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen zählen ebenfalls. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass _"…Komplexitäten, die der Dynamik des Gehirns zugrunde liegen, durch bestimmte Farbkombinationen mehr als andere moduliert werden können, beispielsweise rot-blau flimmernde Reize verursachen größere kortikale Erregung als rot-grüne oder blau-grüne Reize."_

### Blitzen & rotes Blitzen

[WCAG 2.3.1 general flash and red flash thresholds](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in der [relativen Leuchtdichte](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Leuchtdichte, bei der die relative Leuchtdichte des dunkleren Bildes unter 0,80 liegt und bei der "ein Paar gegensätzlicher Änderungen" eine Steigerung gefolgt von einer Verringerung oder eine Verringerung gefolgt von einer Steigerung ist;
- Ein **roter Blitz** ist definiert als jedes Paar gegensätzlicher Übergänge, die ein gesättigtes Rot beinhalten.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu photosensitiven Anfällen zu entwickeln, in dem festgestellt wurde, _"Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen Sehwinkel von mindestens 0,006 steradiant (etwa 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt."_ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein eigenes Risiko dar: "_Unabhängig von der Leuchtdichte wird auch ein Übergang zu oder von einem gesättigten Rot als Risiko betrachtet._"

### Größe und Entfernung

#### Wie groß? Es kommt darauf an

"Sowohl die relative" Größe als auch die Entfernung sind wichtig. Laut [PEAT](https://trace.umd.edu/peat/), _"nimmt der kombinierte Bereich von Blitzen, die gleichzeitig auftreten, nicht mehr als insgesamt ein Viertel eines 341 x 256 Pixel Rechtecks irgendwo auf dem angezeigten Bildschirmbereich ein, wenn der Inhalt bei 1024 x 768 Pixeln betrachtet wird."_

Der Punkt, dass das Blickfeld eine wichtige Überlegung ist, kommt im Artikel zur WCAG 2.3.1 auf: "_Die 1024 x 768 Bildschirmauflösung wird als Referenzbildschirmauflösung für die Bewertung verwendet. Der 341 x 256 Pixel große Block stellt einen 10-Grad-View-Port bei einem typischen Betrachtungsabstand dar. (Der 10-Grad-Bereich ist aus den ursprünglichen Spezifikationen entnommen und stellt den zentralen Sehbereich des Auges dar, wo Menschen am empfindlichsten auf Fotoreize sind.)_"

Dieses Pixelverhältniskalkulation berücksichtigt die relative Größe, aber auch die Entfernung spielt eine Rolle.

Entfernung ist wichtig, weil sie das gesamte Gesichtsfeld beeinflusst. Wenn Zuschauer okulare Masken für Spiele tragen, wird das Gesichtsfeld wahrscheinlich in seiner Gesamtheit vom Bildschirm umgeben sein. [WebXR](/de/docs/Web/API/WebXR_Device_API) ist eine offene Spezifikation, die es möglich macht, VR in Ihrem Browser zu erleben, und kann auf dem Telefon, Computer oder Headset erlebt werden. Das Anliegen über blinkende Bilder in einer okularen Maske wird zu einem wachsenden Thema, da die Maske so nahe an den Augen ist.

Allgemeine Forschungsergebnisse deuten darauf hin, dass die Verwendung von VR möglicherweise sicherer ist als der normale Bildschirmkonsum aufgrund höherer Bildwiederholraten. Wie [Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) zusammenfasst, _"Die begrenzten bisher verfügbaren Daten erheben keine besonderen Bedenken bei VR-Technologie in Bezug auf Anfälle, obwohl sich diese Ansicht mit mehr Erfahrung ändern könnte. Bestimmte Arten von VR-Inhalten, die helle Blitze, provokative Muster oder Farbwechsel umfassen, werden Erwartungen zufolge Anfälle provozieren, ebenso wie sie es in der realen Welt tun."_

(Beachten Sie, dass einige Benutzer den blinkenden Cursor nicht sehen können und möglicherweise Migräne, Bewegungskrankheit und Desorientierung erleben, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxe

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paarungen von Streifen wahrscheinlich Anfälle provozieren und unter welchen Bedingungen. Wenn ein Muster unverändert und geradlinig bleibt, ist die maximale Anzahl an Linien acht, aber wenn es sich wellt, nicht mehr als fünf Linien.

Parallaxeffekte können Desorientierung hervorrufen. Verwenden Sie Parallaxeffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Kontrolle hat, um sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält deutlich erkennbare Streifen von mehr als fünf Hell-Dunkel-Paarungen in jeder Ausrichtung. Wenn die hell-dunklen Streifen eines jeden Musters vom minimal erwarteten Betrachtungsabstand aus einen soliden Winkel von >0.006 steradiant am Auge untereinander einschließen, der Lichtstreifen die Luminanz von >50 cd/m<sup>2</sup> aufweist, und das Muster für ≥0.5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paarungen von Streifen zeigen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder die Polarität umkehren. Wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen."

Es ist nicht alles bekannt, und selbst mit den oben genannten Metriken spielen zusätzliche Faktoren eine Rolle. Zum Beispiel erhöht das Wechseln von einem kleineren zu einem größeren Bereich die Wahrscheinlichkeit, dass das Gehirn reagiert, ebenso wie das Erhöhen des Kontrasts und das Erhöhen der räumlichen Frequenz von niedrig nach mittel. Es ist auch bekannt, obwohl die Begründung dahinter nicht verstanden wird, dass das Wechseln von einfachen Orientierungen (zum Beispiel Streifen) zu einer mehrfachen (zum Beispiel das Schachbrettmuster, das entsteht, wenn man ein Set von Streifen auf das ursprüngliche Set legt, aber senkrecht dazu) das Gehirn beeinflusst.

### Farben

Das Verstehen von Farben ist wichtig für die Barrierefreiheit. Siehe [Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Webbarrierefreiheit und Barrierefreiheit im Allgemeinen.

Wie sich die Farbe auf ihren Hintergrund bezieht – normalerweise in Bezug auf Kontrast – und wie drastisch die Farbe sich Bild zu Bild in einer Animation ändert, ist wichtig. Für mehr dazu siehe [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde nachgewiesen, dass [bestimmte Farben wahrscheinlicher Anfälle auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot beeinflusst. Ihre Macht, das Verhalten zu beeinflussen, wurde sogar bei Tieren bemerkt.

- **Tests zur Entsättigung von Rot:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte es als Test eingerichtet haben. Der Test zur Entsättigung von Rot bewertet die Integrität des Sehnervs. Für weitere Informationen, wie ein Augenarzt diesen Test verwendet, siehe [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass bei Menschen mit traumatischen Hirnverletzungen [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein gefährlicher Sonderfall und es gibt spezielle Tests dafür. Neben einer roten Umgebung, die die kognitive Funktion von Menschen mit Schädel-Hirn-Trauma beeinflusst, scheint Farbe im Wellenlängenspektrum des Rot besondere Bedenken und spezielle Tests erfordert. Dr. Gregg Vanderheiden stellte bei der Testung des Photosensitive Epilepsy Analysis Tools fest, dass die Anfallsraten viel höher waren, als ursprünglich erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken reagieren. (Sehen Sie sich das Video an, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallsicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das bedeutet _nicht_, dass sie "sicher ist, um keine Anfälle auszulösen", es bedeutet nur, dass die Farbe "sicher" von der Technologie reproduziert werden kann, die zur Erzeugung von Farbe auf Bildschirmen verwendet wird.

## Messen, um Schaden zu verhindern

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. In Tests berücksichtigte Faktoren sind Farbe, Leuchtkraft, Größe, Kontrast und im Falle von Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 rief die Epilepsy Foundation of America einen Workshop ein, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Die folgende Information von Experten und Autoritäten stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist ein potenzielles Risiko, wenn er eine Leuchtdichte ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen Sehwinkel von ≥0.006 steradiant (etwa 10 % des zentralen Gesichtsfelds oder 25 % der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paarungen in jeder Ausrichtung haben. Wenn die hell-dunklen Streifen eines Musters vom minimal-zu erwartenden Betrachtungsabstand das Auge einen festen Winkel von >0.006 steradiant umfassen, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> ist, und das Muster für ≥0.5 s präsentiert wird, sollte das Muster nicht mehr als fünf Hell-Dunkel-Paarungen von Streifen aufweisen, wenn die Streifen die Richtung wechseln, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder gleichmäßig in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter in Medien mit fester Aufzeichnung, z.B. einer voraufgezeichneten Fernsehsendung, anzuwenden, die bildweise analysiert werden kann, im Vergleich zu interaktiven Medien.

Die "cd/m<sup>2</sup>" beziehen sich auf Candela pro Quadratmeter. Für den Webentwickler: Wie bezieht sich das auf Messungen für Farbe, Leuchtdichte und Sättigung?

Candela ist eine SI-Einheit (Internationales Einheitensystem) für Lichtstärke. Es ist ein fotometrischer Begriff, und die Fotometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in dem, was wir als Entwickler vertraut sind, in Bezug: auf ein Anzeigegerät und im RGB-Bereich. Das ist hilfreich, weil es einen spezifischen Standard gibt, von dem ausgegangen wird, dass er auf Monitoren, Druckern und im Internet verwendet wird, und das ist das **sRGB** (standard Red Green Blue).

> Als eine Maß für Licht, das pro Flächeneinheit ausgestrahlt wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>. Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Consumer-Desktop-[Flüssigkristall-Displays](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtdichten von 200 bis 300 cd/m<sup>2</sup>. [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) haben Helligkeitsbereiche von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Erkenntnis ist, dass der **sRGB** Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungstools und Entwicklern ist, da es leicht in den häufig verwendeten Hexcode umgewandelt werden kann.

### Menschliche Physiologie und Psychologie als Berücksichtigung

Viele Experten arbeiten daran, die Arten von Webinhalten, die Auslöser für Anfälle sein können, so weit wie möglich zu quantifizieren und zu messen. Es kann jedoch nicht vergessen werden, dass Farbe ebenso sehr von der menschlichen Wahrnehmung im Gehirn abhängt wie von der Messung des Lichts, das von einem Computerbildschirm ausgeht.

Zusätzlich zu den psychologischen Variationen gibt es auch physiologische Unterschiede zwischen uns. Es wird Variationen und Nuancen geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel stellt Tom Jewett, Lecturer Emeritus of Computer Sciences an der California State University Long Beach, in Bezug auf [Lichtheit in der HSL-Farbskala](https://colortutorial.design/hsb.html) fest: _"…Die Unterscheidung zwischen Helligkeitsstufen ist eigentlich nicht linear wie die HSL-Skala implizieren würde; wir sind bei Veränderungen heller Werte viel empfindlicher als bei dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, jedoch menschliches Sehen und menschliche Wahrnehmung nicht. Untersuchung und Diskussion ist im Gange, wie die maschinelle Messung von Licht, wie sie von einem Computermonitor ausgeht, durch die Entfernung zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert, in Beziehung gesetzt werden kann.

Selbst Alter und Geschlecht können eine Rolle spielen. Gemäß dem Artikel der Epilepsy Foundation, ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), _"Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste lichtinduzierte Anfall tritt fast immer vor dem 20. Lebensjahr auf."_ Der Artikel folgt mit dieser Statistik: _"Mädchen (60 Prozent) sind öfter betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger sind, weil sie mit größerer Wahrscheinlichkeit Videospiele spielen. Videospiele enthalten oft möglicherweise provokante Lichtstimulation."_

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine Person, die anfällig für Anfälle ist, einem Benutzertest unterziehen. Es ist gefährlich. Zu diesem Punkt hin gehört es zu den ethischsten Dingen, die Entwickler und Designer tun können, von Experten auf dem Gebiet entwickelte Tools zu verwenden, die in enger Zusammenarbeit mit Ärzten entwickelt wurden. Zum Zeitpunkt des Schreibens gibt es zwei häufig verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) setzt einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/), und sie haben sich besonders bemüht, es **_kostenlos_** zum Download zur Verfügung zu stellen. PEAT kann Autoren helfen, festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Bitte beachten Sie die Nutzungsbeschränkung: **_Die Nutzung von PEAT zur Beurteilung von Materialien, die kommerziell für Fernsehen, Film, Heimunterhaltung oder Spieleindustrie produziert werden, ist untersagt. Verwenden Sie den Harding-Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Tools für den kommerziellen Gebrauch untersagt ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, also bietet die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse- als auch Zertifizierungsdienste für Videoinhalte an.

![Harding Blitz- und Musteranalysator.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheit-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler ist es unsere Verantwortung zu gewährleisten, dass wir keinen Schaden weder absichtlich noch unabsichtlich verursachen. Wenn wir etwas einbeziehen müssen, das potenziell Schaden verursachen kann, ist es entscheidend, Benutzer daran zu hindern, auf das schädliche Material versehentlich zu stoßen, und Wege anzubieten, um Benutzern zu helfen, Animationen zu verhindern und zu kontrollieren, die potenziellen Schaden mindern.

### Was der Webentwickler tun kann

#### Kein Schaden anrichten

[WCAG Guideline 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Entwerfen Sie Inhalte nicht in einer Weise, die bekanntermaßen Anfälle oder physische Reaktionen verursacht"_. Fügen Sie keine Animationen ein, die ein Benutzer nicht steuern kann. Entwerfen Sie keine Muster, die bekanntermaßen Probleme verursachen. Wenn Sie ein GIF oder PNG mit darin enthaltenem Blitzen einfügen müssen, nehmen Sie es stattdessen im Videoformat auf, damit dem Benutzer Kontrollmöglichkeiten zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Boshaftigkeit verstehen

Als Entwickler oder Designer fragen Sie sich, ob stroboskopierende Inhalte wirklich auf Ihre Webseite müssen. Selbst wenn sie ordnungsgemäß gehandhabt werden, gibt es jene, die möglicherweise beleidigenden Inhalten von Ihrer Seite herunterladen und sie als Waffe einsetzen. Man glaubt, dass der erste dokumentierte Versuch, Computer zu verwenden, um körperlichen Schaden durch Animation zu verursachen, am Samstag, dem 22. März 2008 begann: Die Webseite der Epilepsy Foundation wurde durch Beiträge mit blinkenden Bildern gehackt und Links, die fälschlicherweise vorgaben, hilfreich zu sein. Benutzer mit vestibulären Störungen, die Hilfe von der Seite suchten, wurden betroffen.

Nach eine Reihe von rechtlichen Überlegungen nachdem Journalist Kurt Eichenwald, ein bekannter Epileptiker, nach dem Senden eines animierten GIFs im Dezember 2016 einen Anfall erlitt: Das blinkende GIF trug die Nachricht, _"Sie verdienen einen Anfall für Ihre Posts"_.

#### Kontrolle der Exposition, Kontrolle des Zugriffs

Die Kontrolle der Exposition gegenüber der Seite ist der Schlüssel, um sicherzustellen, dass jemand, der Anfällen ausgesetzt ist, nicht versehentlich davon betroffen ist. WCAG bemerkt, dass ein einzelnes Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie möglicherweise ein Bild oder eine Animation haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und dann an einer Stelle, an dem der Benutzer dafür opt-in muss, wie durch Klicken auf eine Schaltfläche oder Sicherstellung, dass der Link zur Seite eine eindeutige und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, sodass die Seite nicht von Suchmaschinen indexiert wird.

#### Nicht indizieren, nicht folgen

Indem Sie die Seite nicht indexieren, wird die Wahrscheinlichkeit verringert, dass Benutzer über die Suche darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, jedoch verdienen animierte GIFs besondere Beachtung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst kontrolliert wird.

#### Erkennen, ob ein GIF animiert ist

- Das npm Paket [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) ermöglicht die Bestimmung der Animation _so früh wie möglich_ in einer gegebenen HTTP-Anfrage.
- Zakirt bietet ein gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285).

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bevor der Benutzer entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

### Videos

Wie im Fall von animierten GIFs muss der Benutzer eine Schaltfläche drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, wie NICHT das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut zu `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Initialzustand zu setzen. Um ein leistungsstarkes Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet das `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) zur Schaffung eines sehr zugänglichen Erlebnisses, das unter der Kontrolle des Benutzers steht.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die setzt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS transitions](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer auf null für die Anfangsphase der Animation zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer Animationen stoppen sowie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut dem Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuerte Sicherstellung, dass Steuerungen verfügbar sind

Die Eigenschaft `HTMLMediaElement.controls` spiegelt das `controls` HTML-Attribut wider, das kontrolliert, ob Benutzeroberflächensteuerelemente zum Abspielen des Medienelements angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerelemente enthält, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie "controls" zu den HTML-Video- und Audioelementen hinzufügen.

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

Anwendung auf Audio:

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

Beachten Sie, dass der Ton in Videos durch das `muted` Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt innerhalb des {{HTMLElement('video')}}-Elements anstelle des {{HTMLElement('audio')}}-Elements enthalten ist. Dieses Beispiel stammt aus dem Abschnitt über [ermudete Medienattribute](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) Beschreibung aus dem HTML Living Standard. Es erklärt, dass das Video ruhig im Hintergrund abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Ton einzugreinen.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zum Umgang mit ihnen erheblich, und aus diesem Grund gibt es keine Einheitslösung. Dies wird weiter erschwert durch die Tatsache, dass auch die Kategorisierung der Dateien betont, wie sie gehandhabt werden sollten. Beispielsweise wird das .gif-Dateiformat im Allgemeinen als Bildmotiv verstanden, wird jedoch auch in einigen Kreisen als Videoformat betrachtet, da es animiert sein kann. Eine umfassende Liste von Medientypen finden Sie auf der [IANA.org-Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie zu erkennen, sind keine beiläufige Übung. Vielleicht interessieren Sie sich für das [MIME Sniffing](https://mimesniff.spec.whatwg.org/)-Standard bei whatwg.org. So ziemlich jeder Bildtyp kann animiert werden; wie sie animiert werden, variiert, und daher variiert die Steuerung der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: MDNs Tutorial über Canvas hat einen großartigen Abschnitt über [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Hauptbestandteil der Canvas-Animation, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Sehen Sie den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie die Details der Implementierung von `requestAnimationFrame` im Zusammenhang mit Bildschirmwiederholungen diskutieren.
- **GIFs (Raster)**: Schwer zu knacken, da die Steuerung ihrer Animation innerhalb der GIF-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie in W3Cs ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow Artikel über das Thema ist ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante betrachtet, die Video-Version von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei verweisen (z.B. eine .webm Datei), die an anderer Stelle vorhanden sein muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-Image-Network-Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat betrachtet.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass _"SVG ein textbasiertes offenes Webstandard ist. Es ist ausdrücklich darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu arbeiten."_ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Dies bedeutet, dass das Erscheinungsbild und die Animation von SVGs durch CSS-Keyframes und Animationen gesteuert werden können. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG-Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Anwendung von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden sowohl in Videospielen als auch in der medizinischen Bildgebung verwendet.

#### Text kann ebenfalls animiert werden

Übersetzungen und Transformationen können Text in einem Div animieren und Schaden anrichten. Bewegter Text kann aus den gleichen Gründen wie bewegtes Bildmaterial Anfälle auslösen, daher vermeiden Sie es, Ihren Text zu animieren. Es ist eine gute Idee, beweglichen Text sowieso zu vermeiden, da viele Screenreader keinen beweglichen Text lesen können und es eine schlechte Benutzererfahrung ist, selbst für diejenigen ohne Seh- oder vestibuläre Störungen.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammenarbeiten, um dem Benutzer eine starke Erfahrung zu bieten. Wir haben die `animation`-Eigenschaft bereits früher in diesem Dokument erwähnt. Sie ist eigentlich eine Abkürzung für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Diese kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Die Animationseigenschaft ist auf sich allein gestellt bereits mächtig, kombiniert mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, kann ein leistungsfähiges Set von Optionen für den Benutzer eingerichtet werden. Durch Einstellen der `animation-duration` und `transition-duration`-Eigenschaften auf eine kurze Dauer anstatt sie auf `animation: none` und `transition: none` zu setzen, wird ein Sicherheitsnetz aktiviert, um Probleme zu vermeiden, falls es Abhängigkeiten von der Animation gibt.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Die meisten JavaScript-Befehle, die für HTML-Video gelten, gelten auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen für die Wiedergaberate sowohl für Video als auch für Audio zu implementieren. Ein Wert von 1.0 ist der Standard und wird als normale Geschwindigkeit betrachtet; ein Wert von 0.5 ist die halbe Geschwindigkeit, ein Wert von 2.0 ist die doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Stellen Sie die Wiedergabegeschwindigkeitseigenschaft ein: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) stellt das folgende Codebeispiel bereit, wie man alle Animationen auf einer Seite auf die halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Methoden ist, mit einem bereits vorhandenen Bild zu beginnen, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Bildtypen hier als Bildquelle verwenden können, solange sie erlaubte Bildtypen – und -größen – in Ihrer Umgebung sind. SVGs sind oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet ausgezeichnete Beispiele dafür, indem mehrere Bildquellen für die Sonne, die Erde und den Mond verwendet werden und mehrere Canvas-Methoden verwendet werden, um die Geschwindigkeit und Animation der Erde, die um die Sonne kreist, und den Mond, der um die Erde kreist, zu steuern. Verwenden Sie den Codepen, der mit diesem Tutorial verfügbar ist, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, unvermeidbar ein blinkendes Animation verwenden müssen

Stellen Sie sicher, dass es eine Steuerung darauf gibt. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zuerst entdeckt und dass ein Benutzer sich aktiv entscheiden muss, um die Animation zu sehen.

Ein Beispiel für ein Format, das keine Steuerungen für den Benutzer verfügbar hat, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bildes selbst gesteuert. Durch das Umwandeln eines animierten GIFs in ein Video können Steuerungen auf die Animation gesetzt werden, und dem Benutzer wird Autonomie gegeben. Es gibt viele kostenlose Online-Konverter, die zur Verfügung stehen, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie den Benutzern im Voraus zurück, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.1 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut, unvermeidbar Blitzen haben müssen, halten Sie es klein. Generell begrenzen Sie die Größe des Blitzes auf einen Bereich von etwa 341 mal 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter einen typischen Abstand zum Bildschirm hat. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in Nahdistanz betrachtet werden soll, wie in einer VR-Brille. WebVR ist eine offene Spezifikation, die es ermöglicht, VR in Ihrem Browser zu erleben. WebVR kann auf dem Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwerfen, das eine okulare Maske verwendet, **oder eine okulare Maske verwenden kann**, wie in Firefox Reality (einem Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner ist als 341 mal 256 Pixel, weil das Bild viel näher an den Augen des Benutzers ist.

#### Kontrast reduzieren

Normalerweise ist ein höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast von Textfarbe zu ihrem Hintergrund (technisch als _Lichtkontraste Verhältnis,_ gemäß W3.orgs Seite über [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/) bekannt, desto einfacher ist dieser Inhalt zu lesen. Benutzer mit geringer Sicht sind besonders dankbar für Anstrengungen, einen hohen Kontrast von Text gegenüber seinem Hintergrund sicherzustellen. Wenn der Inhalt animiert ist, kann jedoch das **_Reduzieren_** des Kontrasts tatsächlich ein Weg sein, um die Wahrscheinlichkeit zu reduzieren, dass der animierte Inhalt Anfälle verursacht. Verringern Sie das Kontrastverhältnis, wenn innerhalb einer Sekunde drei Blitze erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Luminanz](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren Farben ist, und
    - L2 die [relative Luminanz](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren Farben ist.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder auf das Web publiziert wird. Für Videos und animierte GIFs sind die Adobe-Produkt-Suites eine phänomenale Ressource für traditionelle Bilder. Ebenfalls für Bilder ist ein Online-Tool verfügbar: pinetools.coms [Helligkeits- und Kontrast-Onlinebild](https://pinetools.com/brightness-contrast-image). Wenn Sie vorhaben, animierte GIFs zu erstellen, beginnen Sie beispielsweise mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist auch eine Option, um Kontraste dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Hintergrundfarbe eines Absatzes festlegen"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) des MDN-Dokuments [Durchlaufen einer HTML-Tabelle mit JavaScript- und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben ist.

**HTML-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

```html
<body>
  <input
    type="button"
    value="Set paragraph background color"
    onclick="set_background()" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript-Inhalt [(Link zur Quellseite)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

```js
function set_background() {
  // get a list of all the body elements (there will only be one),
  // and then select the zeroth (or first) such element
  myBody = document.getElementsByTagName("body")[0];

  // now, get all the p elements that are descendants of the body
  myBodyElements = myBody.getElementsByTagName("p");

  // get the second item of the list of p elements
  myP = myBodyElements[1];
  myP.style.background = "rgb(255 0 0)";
}
```

#### Vermeiden Sie voll gesättigtes Rot für blitzende Inhalte

Wie bereits erwähnt, hielt die Epilepsy Foundation of America im August 2004 einen Workshop ab, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Unter ihren Ergebnissen war das Verständnis, dass _"Ein Blitz ein potenzielles Risiko ist, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden Sehwinkel von mindestens 0.006 steradiant (etwa 10 % des zentralen Gesichtsfelds oder 25 % Bildschirmflächengröße bei typischen Betrachtungsabständen) bedeckt. Ein Übergang zu oder von gesättigtem Rot wird auch als Risiko betrachtet."_ Sie stellen auch in demselben Konsens fest: _"Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko angesehen."_

### Alternative CSS-Stile bereitstellen

Mit dem Verständnis, dass ein Großteil von Animationen und Blitzen durch CSS-Methoden gesteuert werden kann, ist es wichtig, Wege zu erkunden, um alternative Optionen für Benutzer verfügbar zu machen und die Steuerung dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS-Optionen an, die in alternativen Stylesheets verfügbar sind, wenn die Benutzer wissen, wo sie danach suchen müssen. In einigen Fällen werden die alternativen Styles im Ansichtsmenü der Benutzer offenbart, in anderen Fällen werden sie in den Einstellungen manifestiert, manchmal beides. Nicht alle Benutzer wissen, dass sie im Browser oder in den Einstellungen nach diesen Optionen suchen können, daher lohnt es sich, zu erwägen, die Dinge auf altmodische Weise zu tun und offensichtliche Schaltflächen oder Links zur Änderung des Stils bereitzustellen, damit Benutzer sie sehen können. Dies wird nicht mit oder gegen die Fähigkeit des Browsers verstoßen, die alternativen Stylesheets zu lesen, oder der Fähigkeit des Benutzers zur Präferenzsetzung in den Einstellungen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie Benutzer, die sich auf Sprachsteuerungssysteme verlassen, oft von älteren Schaltflächen und Links abhängen, da ihre Behinderung sie daran hindert, eine Maus zu verwenden oder die Möglichkeit für Touch-Ereignisse auf mobilen Tablets zu ermöglichen.

Häufige Methoden, die alternativen Stylesheets in Ihre HTML-Dokumente zu integrieren, ist die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element, zusammen mit und mit den Attributen `rel="alternate stylesheet"` und für den Titel `title="…"` im {{HTMLElement('head')}}-Bereich der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets zu integrieren. Es wird jedoch nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Indem Sie alternative Stylesheets verwenden (denken Sie daran, die Titel hinzuzufügen), richten Sie es so ein, dass Benutzer ihre Browser verwenden können, um alternative Styles auszuwählen.

### Dynamischer Stilwechsel

Ein Problem bei der Abhängigkeit davon, dass der Browser alternative Stile erfasst, ist, dass nicht alle Benutzer technisch geschickt genug sind, um die alternativen Styles zu entdecken. Oder aufgrund ihrer Behinderung sind nicht in der Lage. Schaltflächen oder Links machen es vielen dankbaren Benutzern offensichtlich, dass Optionen verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, Umschaltknöpfe hinzuzufügen, um dem Benutzer das Umschalten zwischen den verschiedenen Stylesheets zu ermöglichen. Das gesagt, die Verwendung von alternativen Stylesheets ist nicht die einzige Option. Eine andere Option besteht darin, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) ist _"es im Allgemeinen eigentlich die beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stylinghaken in einem einzigen Stylesheet kontrolliert werden kann"._ Eines der besten Beispiele dafür ist von der W3Cs-Seite, ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Ausschließlich Text-Alternativen

Ein separates, alternatives Stylesheet, das anzeigt, dass Bilder nicht angezeigt werden, ist leicht zu erstellen. Es ist eine drakonische Lösung, aber sie ist eine, die manchmal für Lehrer und andere öffentliche Dienstleister notwendig ist, die denen mit extremer Empfindlichkeit dienen müssen. Diese öffentlichen Dienstleister können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` entwickeln zu lassen. So wird es über CSS gemacht:

```css
img {
  display: none;
}
```

#### Nutzung von Media Queries mit {{HTMLElement('style')}}

Indem Sie Media Queries einrichten, ermöglichen Sie Benutzern die Steuerungen; diese werden im Browser oder im Betriebssystem verfügbar gemacht. Sehen Sie das MDN-Dokument [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Guides/Browsing_safely), um weitere Details darüber zu erfahren, wie ein Benutzer auf die Steuerungen zugreift.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel für die Verwendung des Codes `prefers-reduced-motion` zu sehen, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), oder sehen Sie das folgende Beispiel aus dem Abschnitt ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Ambient Light API nicht verfügbar ist. Die Unterstützung ist im Entstehen begriffen.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Entwicklern steht über Window.matchMedia() ein leistungsfähiges Tool zur Verfügung. Ein großartiger Ressourcenpunkt ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfeature

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge, und desto weniger flackert er. Die überwiegende Mehrheit der modernen Technologie aktualisiert sich mit einer Frequenz, die keine Probleme mit Photosensitivität verursacht. Allerdings kann sich nicht jeder die neueste Technologie leisten: Ältere oder leistungsschwache Computer können niedrige Bildwiederholraten aufweisen. [AbilityNets Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr über die Details zu Bildwiederholraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort bezüglich der Bildwiederholrate in Hz:

- _"Dieser Effekt ist bis zu 70 Hz spürbar und dokumentiert."_
- _"Diese Studien würden darauf hinweisen, dass Sie sich von Bildwiederholraten unter 70 Hz fernhalten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist."_

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung des Updatefeatures, die, in Kombination mit Animation-Dauer oder Transition-Dauer, es geschafft hat, mit einer Geschwindigkeit abzuschließen, die dem menschlichen Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken beziehen sich auf das Problem der Bildwiederholrate. Der folgende CSS-Code stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.orgs Seite über [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Das `update` Medienfeature wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten zu ändern, nachdem es gerendert wurde. Es hat die Werte "none", "slow" und "fast".

## Entwicklungs- & Experimentelle Features

### Media Queries Level 5

EnvironmentMQ (geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim (dunkel), normal und washed (verblasst). Interessanterweise enthält die Spezifikation keine tatsächliche Definition für die drei Stufen im Hinblick auf eine Lux-Messung, da Geräte mit einem Lichtsensor normalerweise die Helligkeit des Bildschirms automatisch anpassen. Die Spezifikationen bemerken auch den Unterschied in der Technologie, wie e-Ink, das im hellen Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die das nicht tun.
- `environment-blending`
  - : Aus dem W3C Entwurfs-Dokument, Media Queries Level 5: _"Das [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfeature wird verwendet, um die Eigenschaften des Displays des Benutzers abzufragen, sodass der Autor den Stil des Dokuments anpassen kann. Ein Autor könnte sich entscheiden, die visuellen und/oder das Layout der Seite je nach Display-Technologie anzupassen, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern."_

#### Benutzerpräferenzen-Medienfeatures (geplant in Media Queries Level 5)

[Benutzerpräferenzen-Medienfeatures](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um Benutzern die Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Gemäß dem Abschnitt, [Benutzerpräferenzen-Medienfeatures](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), "Das [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfeature gibt an, ob die Inhalte normal angezeigt werden oder ob die Farben invertiert wurden."
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf der Seite und überschreibt die vom Autor gewählten Farben. Aus dem W3C Entwurfs-Dokument, Media Queries Level 5 Abschnitt über erzwungene Farben: _"Das forced-colors Medienfeature wird verwendet, um festzustellen, ob der Benutzeragent einen [erzwungenen Farbenmodus](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) aktiviert hat, bei dem eine vom Benutzer gewählte begrenzte Farbpalette auf der Seite durchgesetzt wird."_ Der Benutzer muss über diese Fähigkeit informiert werden, und es muss sich mit dem geeigneten Wert für die Media Query `prefers-color-scheme` abstimmen.
- `light-level`
  - : Aus dem Entwurfsdokument des W3C, Medienabfragen Level 5 Abschnitt über Lichtebene: _"Das [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfeature wird verwendet, um nach dem Umgebungslithpegel zu fragen, in dem das Gerät verwendet wird, um dem Autor zu erlauben, den Stil des Dokuments entsprechend zu ändern."_ Dies wird für jene segensreich sein, die motorische Fähigkeitsprobleme haben oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind, den richtigen "Knopf" zu finden, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus dem Entwurfsdokument des W3C, Medienabfragen Level 5 Abschnitt über [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): _"Das prefers-contrast-Medienfeature wird verwendet, um festzustellen, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Zum Beispiel haben viele Benutzer Schwierigkeiten, Text zu lesen, der einen geringen Unterschied im Kontrast zum Text-Hintergrund aufweist, und bevorzugen größeren Kontrast."_ Manchmal kann es jedoch auch einen zu großen Kontrast geben; ein Halo-Effekt rund um den Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Die Menge an Kontrast in die Kontrolle des Benutzers zu legen, ist ein definitives Geschenk für Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Abschnitt 4.2 der CSSWG.org-Entwürfe integriert sich mit der [ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Für weitere Informationen siehe das MDN-Dokument, [MediaQueryList](/de/docs/Web/API/MediaQueryList).

#### Personalisierung Hilfe und Unterstützung

Die Anforderung für die `literal`-Eigenschaft ist aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) entnommen.

**Anforderung:** Einige Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Redewendungen usw. nicht verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht wörtlich kennzeichnen und es dem Autor ermöglichen, nicht wörtlichen Text und Bilder für Benutzer zu erklären.

#### Übergänge (für CSS und SVG)

Folgendes ist aus dem [Webanimatierungsmodell](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfen entnommen.

Das Webanimierungsmodell soll die erforderlichen Funktionen bereitstellen, um [CSS-Übergänge](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) auszudrücken.

## Siehe auch

### MDN

- [Accessibility: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Accessibility: Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Tutorial)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung von dynamischen Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsthread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde und Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0-Flash-Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensibilität werfen, eines der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Individuen werden mit einer besonderen Sensibilität für blinkende Lichter oder kontrastreiche visuelle Muster, wie Streifen, Gitter und Schachbrettmuster, geboren. Aufgrund dieser Bedingung erzeugt ihr Gehirn anfallartige Entladungen, wenn es dieser Art von visueller Stimulation ausgesetzt ist."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch blinkende oder flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht- und Muster ausgelöste Anfälle: Expertenkonsens der Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Epilepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und -management — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Photosensitive Epilepsie-Analysetool

Zusammen mit dem Harding-Tool wird es allgemein als einer der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung anfallsfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalization Semantics Explainer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [WAI-Adapt: Tools Module](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder unterhalb der Schwelle Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis für WCAG 2.0 (Älter, enthält aber einige Erklärungen zu Verweisen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder unterhalb der Schwelle Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis für WCAG 2.1
- [Verständnis des Erfolgskriteriums 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web-Animationsmodell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Luminanz
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Ein herzliches Dankeschön an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor des [Comprehensive Epilepsy Program und Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _allen_ in großer Dankbarkeit gegenüber dem Trace Research & Development Center, dass sie ihr großartiges Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/), kostenlos zur Verfügung stellen.
