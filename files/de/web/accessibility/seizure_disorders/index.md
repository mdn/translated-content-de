---
title: Web-Barrierefreiheit für Anfälle und physische Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{AccessibilitySidebar}}

Dieser Artikel führt Konzepte ein, um Webinhalte für Menschen mit vestibulären Störungen zugänglich zu machen und wie man Inhalte misst und verhindert, die zu Anfällen und/oder anderen physischen Reaktionen führen können.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blinken oder flimmern, können eine photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, Canvas und CSS- oder JavaScript-Animationen verwenden, können Inhalte bereitstellen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können auch physische Reaktionen hervorrufen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von "Reflexepilepsie"—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Fall der photosensitiven Epilepsie werden Anfälle speziell durch blitzende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können auch Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma-Oszillationen und photosensitive Epilepsie"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, in denen festgestellt wird, "_Bestimmte visuelle Bilder, auch in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Licht auf die Photosensitivität werfen, eine von Epilepsies komplexesten Zuständen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder sich bewegende Muster aus wahrnehmbaren hellen und dunklen Streifen haben denselben Effekt wie blitzende Lichter aufgrund des Wechselspiels zwischen dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group ist in der Lage, das Problem ein wenig zu "quantifizieren": "_Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Streifenpaare in beliebiger Ausrichtung zählen_". Zusätzlich zu Streifen sind auch karierte Muster dafür bekannt, photosensitive Anfälle zu verursachen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/Stroboskoplichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF stellt fest: "_Das einzige, was wirklich dokumentiert ist, sind blitzende Lichter, die bei Patienten mit photosensitiver Epilepsie Anfälle auslösen können. Nur wenige Epilepsiearten sind photosensitiv, und die überwiegende Mehrheit der Epilepsien ist nicht fotosensitiv._" Neben durch Photosensitivität bedingten Anfällen kann das Anhören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen viel seltener zu sein scheint. Für eine großartige Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite der Epilepsy Ontario über [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["Eine überarbeitete Definition von Epilepsie"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass "_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederkehrende, nicht provozierte Anfälle umfasst_". Laut der Seite der Epilepsy Foundation ["Wie ernst sind Anfälle?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist _"Plötzlicher unerwarteter Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und die Menschen müssen sich seines Risikos bewusst sein"_.

Der Punkt ist, dass Anfälle definitiv tödlich sein können und sind, und Entwickler und Designer sind von großer Bedeutung, um das Web für Menschen mit Empfindlichkeit gegenüber photosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst die, die "nur" lähmend sind, können so schwerwiegend sein, dass sie den Benutzer handlungsunfähig machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht in der Lage ist zu funktionieren. Der Artikel der Epilepsy Foundation, ["Photosensitivität und Anfälle"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), enthält eine Liste von Auslösern, die Anfälle bei fotosensitiven Menschen verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder abwechselnde Muster verschiedener Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flimmert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor enthalten ist; Wellenlängen im roten Spektralbereich scheinen besonders problematisch zu sein. Im Artikel ["Verständnis der WCAG 2.0-Drei-Blitzer-oder-weniger-Schwelle"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) wird allgemein festgestellt, dass: _"Personen mit photosensitiven Anfallstörungen können einen Anfall erleiden, der durch Inhalte ausgelöst wird, die mit bestimmten Frequenzen für mehr als ein paar Blitze blinken"_ und es wird sehr spezifisch darauf hingewiesen, dass: "_Menschen sind sogar empfindlicher gegenüber rotem Blinken als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigtes rotes Blinken bereitgestellt_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das so eingestellt ist, dass es seine Farbe und Helligkeit bei hoher Frequenz ändert, was leicht über JavaScript umgesetzt werden kann, kann echten Schaden anrichten. Und Flackern kann überall passieren. Beispiel: "Spinner", die häufig verwendet werden, um das Laden von Seiten anzuzeigen, können leicht beim Drehen "flackern".

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Beispiel: Die Seite des Trace Research & Development Centers für das [Tool zur Analyse von Photosensitiver Epilepsie](https://trace.umd.edu/peat/) stellt fest: "_Photosensitive Anfälle können durch bestimmte Arten von Blitzen in Web- oder Computerinhalten provoziert werden, einschließlich Mausbewegungen, die große Bereiche des Bildschirms schnell blinken lassen_".

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung stehen und nicht zwingend auf Anfälle hinweisen (außer vielleicht Desorientierung, die bei Anfällen auftritt). Anfälle sind jedoch nicht die einzigen negativen physikalischen Antworten auf Blinken, Flimmern, Blitzen und andere derartige Reize. 1997 zeigte ein japanisches Zeichentrickfilm eine animierte "Virusbombe". Einige der Kinder, die sich das Zeichentrickfilm ansahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und erbrachen Blut. Die Reaktionen der Kinder waren so schwer, dass sie schnell in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwer sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blinken, blitzen & flackern

Obwohl "Blinken" und "Blitzen" manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde blitzen und ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz über 3 Hz (Flackern pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Licht auf die Photosensibilität werfen, eine von Epilepsies komplexesten Zuständen"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) stellt fest, dass _"Allgemein Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am wahrscheinlichsten Anfälle auslösen. Um sicher zu sein, empfiehlt der Konsens, dass fotosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden sollten."_ Für einige Menschen können Blinken/Blitzen jedoch Symptome bei weniger als 3 Hz verursachen.

Es ist wichtig zu beachten, dass nicht jedes Blinken und Blitzen schlecht ist. Die NASA stellt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitslenkung sein können - wie nötig für Warnknöpfe (es wird angenommen, dass Benutzer den Bildschirm weiterhin sehen können, während Elemente blinken, was nicht immer der Fall ist). Für einige Benutzer warnen blinkende Knöpfe auch, dass sie sparsam und mit Vorsicht verwendet werden müssen. Bezogen auf Webdesign müssen Systeme, die Unternehmensmitarbeiter auf Gefahren hinweisen, indem sie den Bildschirm "übernehmen", um eine blinkende Warnung vor Notfällen zu geben, die Rate der Bildschirmblitze, die Größe und die Helligkeitsänderungen berücksichtigen, während diese Warnungen blinken.

### Blitzen und Flackern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic-and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) ist _"Ein Blitz eine potenzielle Gefahr, wenn er eine Helligkeit von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsdistanzen) einnimmt."_

Wie weit ist eine typische Betrachtungsdistanz? Die empfohlene Betrachtungsdistanz zum Zeitpunkt des Schreibens war "der Bereich kann als ein Bereich >25% der Fläche eines Fernsehbildschirmes angenommen werden, unter der Annahme standardmäßiger Betrachtungsdistanzen von ≥2 m (ungefähr 9 Fuß)". Seit dieser Zeit hat sich viel verändert und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest: _"…Die Komplexitäten, die den dynamischen Gehirnvorgängen zugrundeliegen, könnten durch bestimmte Farbkombinationen mehr als andere moduliert werden, zum Beispiel verursacht ein rot-blaues Flimmern größere kortikale Erregung als ein rot-grünes oder blau-grünes Flimmern."_

### Blitzen & Blitzen in Rot

[WCAG 2.3.1 allgemeine Blitzer- und rote Blitzer-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar gegensätzlicher Änderungen in der [relativen Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit, wobei die relative Helligkeit des dunkleren Bildes unter 0,80 liegt und wobei "ein Paar gegensätzlicher Änderungen" eine Erhöhung, gefolgt von einer Verringerung, oder eine Verringerung, gefolgt von einer Erhöhung ist;
- Ein **roter Blitz** ist definiert durch jedes Paar gegensätzlicher Übergänge, die ein gesättigtes Rot betreffen.

Diese Standards basieren auf früherer Forschung. 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, der einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zu photosensitiven Anfällen entwickelte und feststellte, dass "Ein Blitz eine potenzielle Gefahr ist, wenn er eine Helligkeit von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen festen visuellen Winkel von mindestens 0.006 Steradiant einnimmt (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsdistanzen)." Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: "_Unabhängig von der Helligkeit wird ein Übergang zu oder von einem gesättigten Rot auch als Risiko betrachtet._"

### Größe und Entfernung

#### Wie groß? Das hängt davon ab

"Sowohl relative" Größe als auch Entfernung sind wichtig. Laut [PEAT](https://trace.umd.edu/peat/): _"Die kombinierte Fläche von Blitzen, die gleichzeitig auftreten, umfasst nicht mehr als ein Viertel eines beliebigen 341 x 256 Pixel Rechtecks irgendwo auf dem angezeigten Bildschirm, wenn der Inhalt bei 1024 x 768 Pixeln betrachtet wird."_

Der Aspekt, dass das Sichtfeld eine wichtige Überlegung ist, ergibt sich aus dem Artikel, der sich mit WCAG 2.3.1 befasst: "_Der Bildschirm 1024 x 768 wird als Referenz-Bildschirmauflösung für die Bewertung verwendet. Der Block von 341 x 256 Bildpunkten stellt einen 10-Grad-Blickwinkel bei einer typischen Betrachtungsdistanz dar. (Das 10-Grad-Feld stammt von den ursprünglichen Spezifikationen und stellt den zentralen Sichtbereich des Auges dar, wo Menschen am empfänglichsten für Foto-Stimuli sind.)_"

Dieses Pixelverhältnisse berechnet sich für relative Größe, aber auch der Abstand spielt eine Rolle.

Abstand spielt eine Rolle, weil er das gesamte Sichtfeld beeinflusst. Wenn Zuschauer Okularmasken für Spiele tragen, wird das Sichtfeld wahrscheinlich in seiner Gesamtheit vom Bildschirm umhüllt. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, was auf Telefonen, Computern oder Headsets erlebt werden kann. Die Sorge über flimmernde Bilder in einer Okularmasken wächst, da die Maske den Augen so nahe ist.

[Die Epilepsy Society (UK)](https://epilepsysociety.org.uk/), in ihrem Artikel ["3d Films and Virtual Reality"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk), stellte fest: "_Mit VR blinken die Bilder sehr schnell und im Allgemeinen ist dies zu schnell, um bei Menschen mit photosensitiver Epilepsie Anfälle auszulösen. Das Sichtfeld ist jedoch groß und so wird mehr des Auges stimuliert. Dies bedeutet, dass mehr des Gehirns betroffen sein kann und dies möglicherweise einen photosensitiven Anfall auslösen kann."_

(Beachten Sie, dass einige Benutzer mit blinkenden Cursor nicht sehen können und Kopfschmerzen, Bewegungskrankheit und Desorientierung bekommen können, obwohl blinkende Cursor ein viel kleineres Bildschirmgebiet einnehmen.)

### Muster und Parallax

Kontrastreiche dunkle und helle geometrische Muster sind ein bekannter Übeltäter; Streifen und Karo-Muster sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele hell-dunkel-Paare von Streifen wahrscheinlich Anfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, beträgt die maximale Anzahl acht Linien, aber wenn es sich wellenförmig bewegt, nicht mehr als fünf Linien.

Parallaxeffekte können Desorientierung verursachen. Verwenden Sie Parallaxeffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer die Kontrolle hat, sie auszuschalten.

"Ein Muster mit dem Potenzial, Anfälle auszulösen, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkel-Paare von Streifen in beliebiger Ausrichtung zählen. Wenn die hell-dunkel-Streifen eines Musters in kollektiver Subtende beim Auge ab der minimal erwarteten Betrachtung ein solider Winkel von >0.006 Steradiant ist, die Helligkeit des hellsten Streifens mehr als 50 cd/m<sup>2</sup> beträgt und das Muster für ≥0.5 s dargestellt wird, dann sollte das Muster nicht mehr als fünf hell-dunkel-Paare von Streifen anzeigen, wenn sich die Streifenrichtung ändert, schwankt, blinkt oder den Kontrast umkehrt; wenn das Muster unverändert bleibt oder sich glatt in eine Richtung bewegt, nicht mehr als acht Streifen."

Nicht alles ist bekannt und selbst bei den oben aufgeführten Metriken spielen zusätzliche Faktoren eine Rolle. Beispielsweise erhöht das Wechseln von einem kleineren zu einem größeren Bereich die Wahrscheinlichkeit, dass das Gehirn reagiert, ebenso wie eine Erhöhung des Kontrasts und eine Erhöhung der räumlichen Frequenz von einer geringen auf eine mittlere. Es ist auch bekannt, obwohl die Begründung nicht verstanden wird, dass das Wechseln von einfachen Ausrichtungen (zum Beispiel, Streifen) zu einer mehrfachen (zum Beispiel das Schachbrettmuster, das entsteht, wenn man einen Satz von Streifen auf den Originalsatz legt, aber im rechten Winkel zum ursprünglichen Satz) das Gehirn beeinflusst.

### Farben

Das Verstehen von Farbe ist wichtig für die Barrierefreiheit. Siehe [das Verstehen von Farben und Leuchtkraft](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) in Bezug auf Web-Barrierefreiheit und Barrierefreiheit im Allgemeinen.

Wie sich die Farbe auf ihren Hintergrund bezieht – normalerweise im Kontrast formuliert – und wie drastisch sich die Farbe von Frame zu Frame in der Animation ändert, ist wichtig. Mehr dazu finden Sie unter [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde demonstriert, dass [einige Farben eher epileptische Anfälle verursachen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie wird im Allgemeinen von der Farbe Rot beeinflusst. Ihre Macht, Verhalten zu beeinflussen, wurde sogar bei Tieren beobachtet.

- **Tests zur Rotentsättigung:** Das menschliche Auge ist so fein auf Rot abgestimmt, dass Augenärzte einen Test damit erstellt haben. Der Rotentsättigungstest beurteilt die Unversehrtheit des Sehnervs. Mehr Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für Menschen, die eine traumatische Hirnverletzung erlitten haben, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gesättigtes Rot](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) ist ein spezieller, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich zur Beeinflussung der kognitiven Funktion von Personen mit traumatischen Hirnverletzungen durch eine rote Umgebung scheinen Farben im roten Spektralwellenlängenbereich besondere Aufmerksamkeit und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden stellte bei der Prüfung des Tools zur Analyse von Photosensitiver Epilepsie fest, dass die Anfallsraten viel höher waren als erwartet. Sie fanden heraus, dass wir viel empfindlicher auf gesättigtes rotes Blinken sind. (Siehe das Video, [Das Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websicher bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websicher**" gilt. Das bedeutet _nicht_, dass sie "sicher ist, um keine Anfälle zu verursachen", sondern nur, dass die Farbe durch die Technologie, die zur Erzeugung von Farbe auf Bildschirmen verwendet wird, genau "reproduziert" werden kann.

## Messung zur Vermeidung von Schäden

Die Messung des Potenzials zur Schädigung ist ein guter Ausgangspunkt. Zu den in Tests berücksichtigten Faktoren gehören Farbe, Leuchtkraft, Größe, Kontrast und bei Animationen die Frequenz. WCAG 2.1 bietet Leitlinien zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop, um mit der Entwicklung eines Expertenkonsenses zu photosensitiven Anfällen zu beginnen. Die folgenden, fachlichen und autoritativen Informationen stammen von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz stellt eine potenzielle Gefahr dar, wenn er eine Helligkeit von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0.006 Steradiant (ungefähr 10% des zentralen Sichtfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsdistanzen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko angesehen. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf hell-dunkle Paare von Streifen in beliebiger Ausrichtung zählen. Wenn die hell-dunklen Streifen eines Musters kollektiver Subtende beim Auge ab der minimal erwarteten Betrachtungsdistanz einen soliden Winkel von >0.006 Steradiant bilden, die Helligkeit des hellsten Streifens >50 cd/m2 beträgt und das Muster für ≥0.5 s präsentiert wird, dann sollte das Muster nicht mehr als fünf hell-dunkle Paare von Streifen anzeigen, wenn sich die Streifenrichtung ändert, oszilliert, blinkt oder den Kontrast umkehrt; wenn das Muster unverändert bleibt oder sich glatt in eine Richtung bewegt, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden im Fall von festgelegten Medien, z. B. einer aufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, verglichen mit interaktiven Medien.

Das "cd/m<sup>2</sup>" bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich dies für den Webentwickler auf Messungen für Farbe, Leuchtkraft und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Sie ist ein photometrischer Begriff, und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von den menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) beschreibt es in Begriffen, die wir als Entwickler vertraut sind: auf einem Anzeigegerät und im RGB-Raum. Dies ist hilfreich, da ein spezifischer Standard vorausgesetzt wird, der auf Monitoren, Druckern und im Internet verwendet wird, und es ist der **sRGB** (Standard Rot Grün Blau).

> Als Maß für die pro Flächeneinheit emittierte Lichtmenge wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Consumer-Desktop-[LCDs](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Leuchtstärken von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [Fernseher in High Definition](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Die Quintessenz ist, dass der **sRGB**-Farbraum ein gemeinsamer Anknüpfungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht aus dem häufig verwendeten Hex-Code konvertiert werden kann.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, den Umfang und die Maße, in denen Webinhalte als Auslöser für Anfälle dienen können, so weit wie möglich zu quantifizieren und zu messen. Dennoch darf nicht vergessen werden, dass Farbe genauso viel mit menschlicher Wahrnehmung im Gehirn zu tun hat, wie mit der Messung des Lichts, das von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Schwankungen gibt es auch physiologische Unterschiede unter uns. Es wird Abweichungen und Feinheiten geben, wie ein echter Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel stellt Tom Jewett, emeritierter Dozent für Informatik an der Cal State University Long Beach, folgendes über [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) fest: _"...Die Unterscheidung zwischen Helligkeitsstufen ist nicht linear, wie die HSL-Skala implizieren würde; wir sind viel empfindlicher gegenüber Änderungen in helleren Werten als in dunkleren."_

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht, wie es von einem Computerbildschirm durch die Entfernung zum menschlichen Auge, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert wird, in Beziehung gesetzt werden kann, ist im Gange.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation ["Licht auf Photosensitivität werfen, eine der komplexesten Zustände der Epilepsie"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0), "_Kinder und Jugendliche sind anfälliger als Erwachsene für eine anomale Reaktion auf Lichtstimulation und der erste lichtbedingte Anfall tritt fast immer vor dem Alter von 20 Jahren auf"._ Der Artikel fährt fort mit dieser Statistik: "_Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), auch wenn Anfälle bei Jungen häufiger vorkommen, weil sie eher Videospiele spielen. Videospiele enthalten oft potenziell provokative Lichtstimulation"._

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfallgefährdete Person Benutzertests unterziehen. Das ist gefährlich. In diesem Sinne ist eine der ethischsten Dinge, die Entwickler und Designer tun können, die Verwendung von Tools, die von Experten in diesem Bereich entwickelt wurden, die eng mit Ärzten zusammengearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt des Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Tool zur Analyse von Photosensitiver Epilepsie](https://trace.umd.edu/peat/) gesetzt und sie haben sich bemüht, es **_kostenlos_** zum Download verfügbar zu machen. PEAT kann Autoren helfen zu bestimmen, ob Animationen oder Videos in ihrem Inhalt wahrscheinlich Anfälle auslösen. Bitte beachten Sie die Einschränkung für seine Verwendung: **_Die Verwendung von PEAT zur Beurteilung von Materialien, die kommerziell für Fernsehsendung, Film, Heimunterhaltung oder die Spieleindustrie produziert wurden, ist verboten. Verwenden Sie den Harding Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Fotosensitiven Epilepsie-Analyse-Tools der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für den kommerziellen Gebrauch verboten ist, können Fernsehmacher den Harding-Test bei [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding-Test ist ein weiterer Goldstandard. Fernsehproduzenten in verschiedenen Ländern müssen diesen Test bestehen, bevor sie übertragen dürfen, daher bieten die [Leute bei HardingTest.com](https://hardingtest.com/) sowohl die Analyse als auch die Zertifizierung von Videoinhalten an.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Barrierefreiheit-Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt es in unserer Verantwortung sicherzustellen, dass wir keinen Schaden anrichten, weder absichtlich noch unabsichtlich. Wenn wir etwas enthalten müssen, das potenziell Schaden verursachen kann, ist es entscheidend, den Benutzern zu verhindern, dass sie den schädlichen Inhalt versehentlich sehen, und ihnen Möglichkeiten zu bieten, Animationen zu verhindern und zu steuern, um möglichen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden anrichten

[WCAG Leitfaden 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: _"Erstellen Sie keine Inhalte in einer Weise, die Anfälle oder physische Reaktionen auslöst"_. Fügen Sie keine Animation hinzu, die ein Benutzer nicht kontrollieren kann. Designen Sie nicht mit Mustern, die bekanntermaßen Probleme verursachen. Wenn Sie ein gif oder png mit Blitzen enthalten müssen, nehmen Sie es stattdessen in einem Videoformat auf, damit dem Benutzer Steuerungen zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, es auszuschalten oder es weniger schädlich zu machen.
