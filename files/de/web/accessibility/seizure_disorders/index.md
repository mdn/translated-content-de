---
title: Webzugänglichkeit für Anfälle und körperliche Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: e68b95f668daee70657afa03ce490cea9bd0cb08
---

{{AccessibilitySidebar}}

Dieser Artikel stellt Konzepte vor, um Webinhalte für Personen mit vestibulären Störungen zugänglich zu machen und wie man Inhalte misst und verhindert, die Anfälle und/oder andere körperliche Reaktionen auslösen können.

## Überblick

### Anfälle

Durch Licht verursachte Anfälle sind als fotosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können fotosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, PNGs, SVGs, {{Glossary("Canvas", "Canvas")}} sowie CSS oder JavaScript-Animationen verwenden, können ebenfalls Inhalte erzeugen, die Anfälle oder andere schwere körperliche Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen auslösen, auch wenn sie nicht animiert sind.

Fotosensitive Epilepsie ist tatsächlich eine Form von "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei fotosensitiver Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Muster und Bilder können ebenfalls Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie [„Gamma-Oszillationen und fotosensitive Epilepsie“](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo bemerkt wird: "_Bestimmte visuelle Bilder können selbst in Abwesenheit von Bewegung oder Flackern bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel [„Licht ins Dunkel bringen über Fotosensitivität, eine der komplexesten Bedingungen der Epilepsie“](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder bewegte Muster von erkennbaren Hell-Dunkel-Streifen haben die gleiche Wirkung wie blinkende Lichter wegen des Wechsels von dunklen und hellen Flächen._" Das Epilepsy Foundation of America Working Group kann das Problem ein wenig „quantifizieren“: _„Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare in beliebiger Ausrichtung zählen._" Laut Cedars-Sinai sind auch karierte Muster dafür bekannt, fotosensitive Anfälle zu verursachen.

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der gut etablierte und starke Auslöser sind blinkende/stroboskopische Lichter. Dr. Selim Benbadis vom USF Comprehensive Epilepsy Program merkt an: _„Das Einzige, das wirklich dokumentiert ist, sind blinkende Lichter, die bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen können. Nur wenige Arten von Epilepsien sind fotosensitiv, und die überwiegende Mehrheit der Epilepsien sind es nicht."_ Neben durch Fotosensitivität verursachten Anfällen können das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Arten von Anfällen seltener zu sein scheinen. Für eine hervorragende Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel [„Eine überarbeitete Definition von Epilepsie“](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass „_ein Anfall ein Ereignis ist und Epilepsie die Krankheit ist, die wiederkehrende unprovozierte Anfälle beinhaltet_“. Laut der Seite der Epilepsy Foundation [„Wie ernst sind Anfälle?“](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) _„Der plötzliche unerwartete Tod bei Epilepsie (SUDEP) ist wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und Menschen müssen sich seiner Gefahr bewusst sein“_.

Das Wichtigste ist, dass Anfälle definitiv tödlich sein können, und Entwickler sowie Designer sind unglaublich wichtig, um das Internet für Menschen mit Empfindlichkeiten gegenüber fotosensitiven oder musikogenen Auslösern sicherer zu machen.

Anfälle können tödlich sein, aber selbst die, die „nur“ beeinträchtigend sind, können so schwerwiegend sein, dass der Benutzer arbeitsunfähig wird. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr funktionsfähig ist. Der Artikel der Epilepsy Foundation [„Fotosensitivität und Anfälle“](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) bietet eine Liste von Auslösern, die bei fotosensitiven Menschen Anfälle auslösen können; hier ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flimmerns oder rollender Bilder.
- Bestimmte Videospiele oder TV-Sendungen, die schnelle Blitze oder wechselnde Muster unterschiedlicher Farben enthalten.
- Intensive Stroboskoplichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel fährt fort, dass viele Faktoren zusammenkommen müssen, um die fotosensitive Reaktion zu provozieren. Von Bedeutung ist, dass er die Wellenlänge des Lichts als möglichen Faktor einbezieht; Wellenlängen im roten Bereich des Spektrums scheinen besonders problematisch zu sein. Im Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) heißt es allgemein: „_Einzelpersonen, die an fotosensitiven Anfallsleiden leiden, können einen Anfall durch Inhalte ausgelöst bekommen, die mit bestimmten Frequenzen für mehr als ein paar Blitze blitzen_“ und geht speziell darauf ein, dass: „_Menschen sind empfindlicher gegenüber roten Blitzen als gegenüber anderen Farben, daher wird ein spezieller Test für gesättigte rote Blitze bereitgestellt_“.

Sie benötigen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das auf hohe Frequenz die Farbe und Helligkeit ändert, was leicht über JavaScript geschehen kann, kann echten Schaden anrichten. Und, Flackern kann überall vorkommen. Zum Beispiel können „Spinner“, die häufig angezeigt werden, während sich Seiten laden, leicht „flackern“, während sie sich drehen.

Zusätzliche Bedenken bestehen für Personen mit motorischen Problemen. Zum Beispiel stellt die Seite des Trace Research & Development Centers für das [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) fest, dass „_Fotosensitive Anfälle durch bestimmte Arten des Flackerns in Web- oder Computerinhalten ausgelöst werden können, einschließlich Mausüberlagerungen, die große Bereiche des Bildschirms schnell und wiederholt aufblitzen lassen_“.

### Andere körperliche Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung stehen und nicht besonders auf Anfälle hindeuten (außer vielleicht Desorientierung, die bei Anfällen auftritt). Anfälle sind jedoch nicht die einzige mögliche negative physikalische Reaktion auf Flackern, Flimmern, Blinken und andere ähnliche Reize. Im Jahr 1997 zeigte ein japanischer Cartoon eine animierte „Virusbombe“. Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere litten unter Übelkeit, Zittern und blutigem Erbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Konsequenzen: Jede dieser körperlichen Reaktionen kann so schwerwiegend sein, dass sie lähmend wirkt.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken, & Flackern

Obwohl „Blitzen“ und „Blinken“ manchmal synonym verwendet werden, sind sie nicht dasselbe. Laut W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als dreimal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flacker-Effekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und unter 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) merkt an, dass „_im Allgemeinen blinkende Lichter zwischen den Frequenzen von fünf bis 30 Blitzen pro Sekunde (Hertz) am ehesten Anfälle auslösen. Um sicher zu sein, empfehlen Konsens, dass fotosensitive Personen nicht mehr als drei Blitze pro Sekunde ausgesetzt werden._“ Bei einigen Menschen können jedoch durch Blinken/Blitzen Symptome sogar bei weniger als 3 Hz ausgelöst werden.

Es ist wichtig zu beachten, dass nicht alle Blitze und Blinzeln schlecht sind. Die NASA stellt in ihrem Dokument mit dem Titel ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php) fest, dass Blinken und Blitzen leistungsstarke Werkzeuge zur Aufmerksamkeitslenkung sein können – wie es für Warnknöpfe notwendig ist (dies setzt voraus, dass Benutzer den Bildschirm noch sehen können, während Elemente blinken, was nicht immer der Fall ist). Bei einigen Benutzern warnen blinkende Knöpfe jedoch auch davor, dass sie sparsam und sorgfältig verwendet werden müssen. Was das Webdesign betrifft, sollten Systeme, die Unternehmensmitarbeiter durch Übernahme des Bildschirms über eine blinkende Warnung auf Notfälle aufmerksam machen, die Geschwindigkeit, Größe und Helligkeitsänderungen auf dem Bildschirm bei den Warnhinweisen berücksichtigen, die angezeigt werden.

### Blitzen und Flackern – wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x) „_ist ein Blitz eine potenzielle Gefahr, wenn er eine Leuchtdichte von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen solid visual angle von ≥0.006 Steradianten (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt._“

Wie weit ist ein typischer Betrachtungsabstand? Die Empfehlung für einen typischen Betrachtungsabstand zum Zeitpunkt des Schreibens lautete „_der Bereich kann als auf einen Bereich >25% der Fläche eines Fernsehbildschirms bezogen verstanden werden, unter der Annahme des Standardsichtabstands von ≥2m (∼9 Fuß)_“. Seit dieser Zeit hat sich viel geändert, und wir sind jetzt viel näher an unseren Bildschirmen.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls wichtig. ["Forschungen haben ergeben, dass bestimmte Farben Epilepsieanfälle eher auslösen"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) bemerkt, dass „_…die Komplexität, die der Dynamik des Gehirns zugrunde liegt, durch bestimmte Farbkombinationen mehr als durch andere moduliert werden könnte, beispielsweise verursacht ein rot-blaues flackerndes Stimulus eine größere Kortex-Aktivierung als ein rot-grünes oder blau-grünes Stimulus._“

### Blitzen & Rotes Blitzen

[WCAG 2.3.1 allgemeine Blitz- und rote Blitzschwellen](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** wird als ein Paar entgegengesetzter Änderungen in der [relativen Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit definiert, wobei die relative Helligkeit des dunkleren Bildes unter 0,80 liegt und wo ein „Paar entgegen gesetzter Änderungen“ ein Anstieg gefolgt von einem Abfall oder ein Abfall gefolgt von einem Anstieg ist;
- Ein **rotes Blitz** wird als ein beliebiges Paar entgegengesetzter Übergänge unter Einbeziehung eines gesättigten Rot definiert.

Diese Standards basieren auf früheren Forschungen. Im Jahr 2004 rief das Epilepsy Foundation of America eine Workshop ins Leben, um einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) zur fotosensitiven Anfälligkeit zu entwickeln, in dem festgestellt wurde, „_ein Blitz ist eine potenzielle Gefahr, wenn er eine Leuchtdichte von mindestens 20 cd/m<sup>2</sup> hat, mit einer Frequenz von mindestens 3 Hz auftritt und einen solid visual angle von mindestens 0,006 Steradianten (etwa 10% des zentralen Sichtfelds oder 25% des Bildschirmbereichs bei typischen Betrachtungsabständen) einnimmt._“ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein Risiko für sich dar: „_Unabhängig von der Helligkeit wird ein Übergang zu oder von einem gesättigten Rot ebenfalls als Risiko betrachtet._“

### Größe und Abstand

#### Wie groß? Es hängt davon ab

"Sowohl „relative“ Größe als auch Abstand spielen eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/), „_Die kombinierte Fläche der gleichzeitig auftretenden Blitze beträgt nicht mehr als ein Viertel von 341 x 256 Pixel-Rechtecken irgendwo auf der dargestellten Bildschirmfläche, wenn die Inhalte mit 1024 x 768 Bildpunkten betrachtet werden._“

Der Punkt, dass das Sichtfeld eine wichtige Überlegung ist, ergibt sich in einem Artikel zur WCAG 2.3.1 weiter: „_Der 1024 x 768 Pixel-Bildschirm wird als Referenz-Auflösung für die Bewertung verwendet. Der 341 x 256 Pixel-Block stellt ein 10°-Sichtfenster beim typischen Betrachtungsabstand dar. (Das 10°-Sichtfeld wird aus den ursprünglichen Spezifikationen entlehnt und repräsentiert den zentralen Sehteil des Auges, wo Menschen am anfälligsten für Fotostimuli sind.)_“

Dieses Pixel-Flächenverhältnis berechnet die relative Größe, aber auch der Abstand spielt eine Rolle.

Der Abstand ist wichtig, weil er das gesamte Sichtfeld beeinflusst. Wenn Betrachter eine Brille zum Spielen tragen, wird das Sichtfeld wahrscheinlich vollständig vom Bildschirm eingenommen. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. Es kann auf dem Telefon, Computer oder Headset erlebt werden. Das Bedenken über blinkende Bilder in einer Brille wächst, da die Brille der Augen sehr nahe ist.

[Die Epilepsy Society (UK)](https://epilepsysociety.org.uk/), in ihrem Artikel ["3D-Filme und Virtual Reality"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk) bemerkt: „_Bei VR blitzen die Bilder sehr schnell, und normalerweise ist das zu schnell, um bei Menschen mit fotosensitiver Epilepsie einen Anfall auszulösen. Allerdings ist dasSichtfeld groß und somit wird mehr des Auges stimuliert. Das bedeutet, dass mehr des Gehirns vielleicht betroffen ist und das könnte einen fotosensitiven Anfall auslösen._“

(Beachten Sie, dass einige Benutzer nicht mit blinkenden Cursor sehen können, und Migräne, Reiseübelkeit und Desorientierung bekommen können, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms einnehmen.)

### Muster und Parallaxen-Effekte

Kontrastreichte dunkle und helle geometrische Muster sind ein bekannter Schuldiger; Streifen und Karos sind die bekanntesten Beispiele. Die Epilepsy Foundation of America Working Group listet auf, wie viele Hell-Dunkel-Paare von Streifen wahrscheinlich Anfälle auslösen und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, ist die maximale Anzahl acht Linien, aber wenn es sich bewegt, sind nicht mehr als fünf Linien zulässig.

Parallaxen-Effekte können Desorientierung verursachen. Verwenden Sie Parallaxen-Effekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Möglichkeit hat, sie abzuschalten.

„Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare in irgendeiner Ausrichtung aufweisen. Wenn die Hell-Dunkel-Streifen eines Musters kollektiv aus erwarteten minimalen Betrachtungsabstand einen soliden Winkel von >0,006 Steradianten bilden, die Leuchtdichte des hellsten Streifens >50 cd/m<sup>2</sup> ist, und das Muster für ≥0,5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen aufweisen, wenn sich die Streifenrichtung ändert, oszilliert, blitzt oder der Kontrast umkehrt; wenn das Muster unverändert bleibt oder in eine Richtung gleichmäßig driftet, nicht mehr acht Streifen.“

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken spielen weitere Faktoren eine Rolle. Zum Beispiel erhöht sich die Wahrscheinlichkeit, dass das Gehirn reagiert, beim Wechsel von einem kleineren zu einem größeren Bereich, das Kontrasten erhöht, und beim Wechsel von einer niedrigen zu mittleren räumlichen Frequenz. Es ist auch bekannt, obwohl der Grund dafür nicht verstanden wird, dass der Übergang von einfacheren Orientierungen (zum Beispiel Streifen) zu einem mehrfachen (zum Beispiel das Karo-Muster, das entsteht, wenn man eine Reihe von Streifen über die ursprüngliche Reihe legt, aber senkrecht zu ihr) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für die Barrierefreiheit. Siehe [Verstehen von Farben und Helligkeit](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) in Bezug auf Web-Zugänglichkeit und Zugänglichkeit im Allgemeinen.

Wie die Farbe sich zum Hintergrund verhält – normalerweise in Form von Kontrast beschrieben – und wie drastisch sich die Farbe frame zu frame in der Animation ändert, ist wichtig. Weitere Informationen finden Sie unter [Drei Blitze oder unterhalb Schwelle – Verständnis von SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der Sonderfall Rot

Es wurde nachgewiesen, dass [bestimmte Farben epileptische Anfälle eher auslösen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden im Allgemeinen von der Farbe Rot betroffen. Es wurde sogar in Tieren bemerkt, dass Rot das Verhalten beeinflusst.

- **Test auf Rotentsättigung:** Das menschliche Auge ist so empfindlich auf Rot abgestimmt, dass Augenärzte einen Test damit eingerichtet haben. Der Rotentsättigungstest beurteilt die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass [in einer roten Umgebung die kognitive Funktion von Menschen mit traumatischen Hirnverletzungen reduziert wird](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Gekättigtes Rot](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich zur Beeinträchtigung der kognitiven Funktion von Menschen mit traumatischen Hirnverletzungen durch eine rote Umgebung erfordert die Farbe im Rot-Spektrum besondere Besorgnis und Tests. Dr. Gregg Vanderheiden bemerkte, dass die Epilepsie-Raten viel höher als erwartet waren, als er das Photosensitive Epilepsy Analysis Tool testete. Dabei fand man heraus, dass wir viel empfindlicher gegenüber gesättigtem Roten Blitzen sind. (Sehen Sie das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als "**websafe**" gilt. Das bedeutet _nicht_, dass sie „sicher gegen Anfälle“ ist, es bedeutet nur, dass die Farbe „sicher“ von der Technologie, die Farben auf Bildschirmen erzeugt, genau reproduziert werden kann.

## Messen, um Schaden zu verhindern

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. Faktoren, die in den Tests berücksichtigt werden, sind Farbe, Helligkeit, Größe, Kontrast und im Fall von Animationen die Frequenz. WCAG 2.1 bietet Leitlinien für die Bewertung von Inhalten.

Im August 2004 versammelte die Epilepsy Foundation of America einen Workshop, um einen Expertenkonsens zu fotosensitiven Anfällen zu entwickeln. Die folgende Experten- und Autoritätsinformation stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Helligkeit von ≥20 cd/m<sup>2</sup> hat, mit einer Frequenz von ≥3 Hz auftritt und einen festen visuellen Winkel von ≥0.006 Steradianten (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen) einnimmt. Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare in beliebiger Ausrichtung zählen. Wenn die Hell-Dunkel-Streifen eines Musters aus erwarteten minimalen Betrachtungsabstand einen soliden Winkel von >0,006 Steradianten bilden, die Leuchtdichte des hellsten Streifens >50 cd/m2 ist, und das Muster für ≥0,5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen aufweisen, wenn sich die Streifenrichtung ändert, oszilliert, blitzt oder der Kontrast umkehrt; wenn das Muster unverändert bleibt oder in eine Richtung gleichmäßig driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anwendbar im Fall von festen Medien, z. B. einer voraufgezeichneten Fernsehsendung, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das „cd/m<sup>2</sup>“ bezieht sich auf Candela pro Quadratmeter. Wie bezieht sich das also für Webentwickler auf Messungen für Farbe, Helligkeit und Sättigung?

Die Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein photometrischer Begriff und Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel zu ["Candela pro Quadratmeter"](https://en.wikipedia.org/wiki/Candela_per_square_metre) erklärt es in den Begriffen, die uns als Entwickler vertraut sind: auf einem Anzeigegerät und in den RGB-Raum. Dies ist hilfreich, weil es einen spezifischen Standard gibt, von dem angenommen wird, dass er auf Monitoren, Druckern und dem Internet verwendet wird, und es ist der **sRGB** (standard Red Green Blue).

> Als Maß für Lichte, die pro Flächeneinheit emittiert wird, wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB) Spezifikation für Monitore zielt auf 80 cd/m<sup>2</sup>.[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Normalerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m<sup>2</sup> haben. Die meisten Verbraucher-Desktop-[Flachbildschirme](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Helligkeiten von 200 bis 300 cd/m<sup>2</sup>.[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [High-Definition-Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m<sup>2</sup>.

Das Fazit ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er sich leicht vom gebräuchlichen Hex-Code konvertiert.

### Menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, und messen größtmöglich den Grad der Webinhalte zu quantifizieren, die als Auslöser für Anfälle dienen können. Das gesagt, es darf nicht vergessen werden, dass Farbe genauso über die Wahrnehmung im menschlichen Gehirn wie über die Messung des Lichts handelt, das vom Computerbildschirm ausgeht.

Zusätzlich zu den psychologischen Variationen gibt es auch physiologische Unterschiede unter uns. Es wird Unterschiede und Nuancen geben, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. Beispielsweise bemerkt Tom Jewett, Lecturer Emeritus für Informatik an der Cal State University Long Beach, folgendes in Bezug auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html): „…Die Unterscheidung zwischen Helligkeitsstufen ist nicht tatsächlich linear, wie die HSL-Skala vermuten lässt; wir sind viel empfindlicher gegenüber Änderungen zwischerer Helligkeitswerte als dunkleren Werten.“

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Untersuchungen und Diskussionen darüber, wie die Maschinenmessung des Lichts, während es von einem Computerbildschirm hindurchgeht über die Entfernung zur menschlichen Auge, gefiltert vom menschlichen Sehen, und dann im menschlichen Gehirn manipuliert wird, in Beziehung gesetzt werden können.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut einem Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) „_Kinder und Jugendliche sind anfälliger als Erwachsene für eine abnormale Reaktion auf Lichtstimulation, und der erste durch Licht ausgelöste Anfall tritt fast immer vor dem 20. Lebensjahr auf._“ Der Artikel folgt mit dieser Statistik: „_Mädchen (60 Prozent) sind häufiger betroffen als Jungen (40 Prozent), obwohl Anfälle bei Jungen häufiger auftreten, weil sie eher dazu neigen, Videospiele zu spielen. Videospiele enthalten oft potenziell provokative Lichtstimuli._“

**Benutzertests sind sehr problematisch**. Natürlich möchte niemand eine anfallanfällige Person den Benutzertests aussetzen. Es ist gefährlich. In diesem Sinne können Entwickler und Designer am ethischsten Instrumente verwenden, die von Experten auf dem Gebiet entwickelt wurden, die Hand in Hand mit Ärzten gearbeitet haben, um das Tool zu entwickeln. Zum Zeitpunkt dieses Schreibens gibt es zwei allgemein verfügbare Tools, die ethisch und professionell von Forschern und Ärzten für Film/Videos entwickelt wurden: **PEAT** und der **Harding Test**.

### Fotosensitive Epilepsie-Analysen Werkzeug (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) gesetzt, und sie haben sich bemüht, es **_kostenlos_** zum Download anzubieten. PEAT kann Autoren helfen festzustellen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Beachten Sie die Einschränkung seiner Nutzung: **_Die Verwendung von PEAT zur Bewertung kommerziell erstellter Inhalte für Fernsehsendungen, Filme, Heimunterhaltung oder Gaming-Industrien ist untersagt. Verwenden Sie den Harding Test oder andere Tools für kommerzielle Zwecke._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool von der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding Test

Da die Verwendung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehtprogrammierer den Harding Test auf [HardingTest.com](https://hardingtest.com/) verwenden. Der Harding Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, sodass die Gruppe bei [HardingTest.com](https://hardingtest.com/) sowohl Analyse als auch Zertifizierung von Videoinhalten bietet.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Lösungen zur Barrierefreiheit für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin sicherzustellen, dass wir keinen Schaden verursachen, weder absichtlich noch unabsichtlich. Wenn wir etwas einfügen müssen, das potenziell schädlich sein könnte, ist es entscheidend, Benutzer vor unbeabsichtigtem Kontakt mit den gefährlichen Inhalten zu schützen und Methoden bereitzustellen, die es den Benutzern ermöglichen, Animationen zu verhindern und zu steuern, um potenziellen Schaden abzuschwächen.

### Was der Webentwickler tun kann

#### Keinen Schaden zufügen

[WCAG-Richtlinie 2.3 Anfälle und körperliche Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: „_Designen Sie keine Inhalte, die bekanntermaßen Anfälle oder körperliche Reaktionen verursachen._“ Schließen Sie keine Animationen ein, die ein Benutzer nicht steuern kann. Entwerfen Sie nicht mit Mustern, die dafür bekannt sind, Probleme zu verursachen. Wenn Sie ein GIF oder PNG mit Blink-Effekt einfügen müssen, zeichnen Sie es stattdessen in einem Videoformat auf, damit Steuerungen für den Benutzer verfügbar sind. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, auszuschalten oder weniger schädlich zu machen.

#### Böswilligkeit verstehen

Fragen Sie sich als Entwickler oder Designer, ob blinkende Inhalte wirklich auf Ihrer Webseite vorhanden sein müssen. Selbst wenn sie korrekt gehandhabt werden, gibt es diejenigen, die beleidigende Inhalte von Ihrer Seite herunterladen und sie als Waffe benutzen könnten. Es wird angenommen, dass der erste dokumentierte Versuch, Computer dazu zu verwenden, physische Schäden durch Animationen zu verursachen, am Samstag, den 22. März 2008 begann: Die Website der Epilepsy Foundation wurde durch Posts mit blinkenden Bildern und Links, die fälschlicherweise behaupten, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die auf der Website Hilfe suchten, waren betroffen.

Es laufen mehrere rechtliche Erwägungen, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, im Dezember 2016 einen Anfall erlitt, nachdem ihm ein animierter GIF zugesandt wurde: Das blinkende GIF trug die Nachricht, „_Sie verdienen einen Anfall für Ihre Posts_“.

#### Exposition kontrollieren, Zugang kontrollieren

Die Kontrolle der Exposition zur Seite ist der Schlüssel dafür, dass eine anfallanfällige Person nicht versehentlich darauf stößt. WCAG merkt an, dass ein einziges Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben könnten, die Anfälle auslöst, kontrollieren Sie den Zugang dazu, indem Sie zuerst eine Warnung über den Inhalt anzeigen, und es dann an einem Ort platzieren, an dem der Benutzer sich dafür entscheiden muss, ihn zu sehen, zum Beispiel durch Klicken auf einen Knopf, oder sicherstellen, dass der Link zur Seite eine deutliche und offensichtliche Warnung enthält.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht indizieren, nicht folgen

Indem Sie die Seite nicht indizieren, verringern Sie die Wahrscheinlichkeit, dass Benutzer über die Suche darauf stoßen werden.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, animierte GIFs verdienen jedoch besondere Erwähnung aufgrund ihrer Allgegenwart und der Tatsache, dass die Animation tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- [npms animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) bietet die Möglichkeit, Animation _so früh wie möglich_ in einem gegebenen HTTP-Request zu bestimmen.
- Zakirt bietet ein Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Im Falle von animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer sich entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen markieren, um die Animation zu starten.

**Ressourcen zum Erkennen und Steuern von animierten GIFs umfassen:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen beim Abspielen und Stoppen von animierten GIFs auf Ihrer Webseite hilft

### Videos

Wie im Fall von animierten GIFs muss der Benutzer einen Knopf drücken oder ein Kästchen markieren, um die Animation zu starten. Es gibt viele Möglichkeiten, dies zu tun, zum Beispiel nicht das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut zu `<video controls>` hinzuzufügen oder {{CSSxRef('animation-play-state')}} auf `paused` als Anfangszustand einzustellen. Um ein kraftvolles Beispiel dafür zu sehen, wie das tatsächlich funktioniert, sehen Sie sich den Artikel von Kirupa an, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Kombination mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

Mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) können Sie einstellen, dass die Dauer der ersten Animationsstufe auf null gesetzt wird.

```css
div {
  transition-duration: 0s;
}
```

### Stellen Sie sicher, dass der Benutzer ebenso Animationen stoppen und starten können wie auch vorab

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerungen. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video sowohl stoppen als auch starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmgesteuert sicherstellen, dass Steuerungen verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft spiegelt das `controls` HTML-Attribut wider, das steuert, ob Benutzeroberflächensteuerungen zum Abspielen des Medienobjekts angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerungen besitzt, die dem Benutzer zugänglich sind, fügen Sie das Wort "controls" zu HTML-Video- und Audio-Elementen hinzu.

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

##### Audio als Bestandteil von Video

Beachten Sie, dass der Ton in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, auch wenn der Inhalt innerhalb des {{HTMLElement('video')}}-Elements statt des {{HTMLElement('audio')}}-Elements ist. Dieses Beispiel stammt aus dem Abschnitt über die Beschreibung des [Muted-Media-Attributs](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) im HTML Living Standard. Es erklärt, dass das Video leise im Hintergrund automatisch abgespielt wird, bis der Benutzer Maßnahmen ergreift, um den Ton freizuschalten.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Geschwindigkeit steuern

Das scheint offensichtlich, aber weil es so viele MIME-Typen gibt, variieren die Mechanismen, mit denen sie gehandhabt werden, enorm, und aus diesem Grund gibt es keine Einheitslösung für das Problem. Dies wird weiter dadurch verkompliziert, dass selbst die Dateiklassifizierung die Frage, wie sie gehandhabt werden soll, verkompliziert. Beispielsweise wird das .gif-Format normalerweise als Bild verstanden, aber auch als Video-Dateiformat in einigen Kreisen wegen seiner Fähigkeit zur Animation angesehen. Für eine umfassende Liste von Medientypen, besuchen Sie bitte [IANA.org's Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Die Methoden, um sie herauszuschnüffeln, sind keine beiläufige Übung. Möglicherweise sind Sie daran interessiert, dem [MIME-Sniffing](https://mimesniff.spec.whatwg.org/)-Standard auf whatwg.org zu folgen. Fast jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und entsprechend variiert auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt zu [Basisanimationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein Grundpfeiler der Canvas-Animation, es ist jedoch interessant zu sehen, wie es mit dem Bildschirm-Refresh interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem sie die Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund des Bildschirm-Refreshs diskutieren.
- **GIFs (Raster)**: Schwierig zu knacken, weil die Kontrolle ihrer Animation innerhalb der GIF-Dateien selbst erfolgt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden Sie auf W3C's Seite ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist: ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Wird als Variante, Video-Version von GIF betrachtet. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z. B. eine .webm-Datei) verweisen, die andernorts existiert.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektor)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) notiert, dass „SVG ein textbasiertes offenes Web-Standard ist. Es ist ausdrücklich dazu ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) zu arbeiten.“ SVGs können als Bild verwendet werden, wie in diesem Beispiel: `<img src="example.svg" alt="This is an image using a svg as a source">`. Das bedeutet, dass das Erscheinungsbild von SVG und seine Animation durch CSS-Keyframes und -Animationen gesteuert werden können. Für die Interaktion mit JavaScript sehen Sie die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxels](https://en.wikipedia.org/wiki/Voxel) Rastergrafiken werden in Videospielen genauso wie in der medizinischen Bildgebung verwendet.

#### Text kann ebenfalls animiert werden

Translationen und Transformationen können Text in einem div animieren und Schaden anrichten. Bewegter Text kann aus den gleichen Gründen Anfälle verursachen wie bewegte Bilder, also vermeiden Sie es, Ihren Text zu animieren. Es ist ohnehin eine gute Idee, bewegten Text zu vermeiden, da viele Bildschirmleser keinen bewegten Text lesen können und dies selbst für Personen ohne Seh- oder vestibuläre Probleme ein schlechtes Benutzererlebnis ist.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen zusammen kombiniert werden, um ein kraftvolles Erlebnis für den Benutzer zu schaffen. Wir haben bereits früher in diesem Dokument die `animation`-Eigenschaft erwähnt. Sie ist eigentlich eine Abkürzung für alle Animations-Eigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Länge, die eine Animation benötigt, um einen Zyklus zu vollenden. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation erfolgen soll.
- `animation-timing-function`

Die Animations-Eigenschaft ist bereits mächtig für sich allein, aber in Kombination mit anderen Eigenschaften und Abfragen wie `prefers-reduced-motion`, können Sie eine kraftvolle Optionsmenge für den Benutzer einstellen. Indem Sie `animation-duration` und `transition-duration` Eigenschaften auf eine kurze Dauer einstellen, anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglichen Sie eine Sicherheitsvorkehrung, um Probleme in jedem Fall zu verhindern, in dem eine Abhängigkeit besteht die Animation abläuft.

### JavaScript-Animation

JavaScript wird oft verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Der meiste JavaScript-Code, der auf HTML-Video angewendet wird, wird auch auf Audio angewendet. `HTMLMediaElement.playbackRate` ist eine Implementierung, um Benutzereinstellungen für die Wiedergabegeschwindigkeit sowohl für Video als auch Audio zu setzen. Ein Wert von 1.0 ist Standard, und gilt als normale Geschwindigkeit; ein Wert von 0.5 ist halbe Geschwindigkeit, ein Wert von 2.0 ist doppelte Geschwindigkeit. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Setzen Sie die Playbacks-Geschwindigkeit-Eigenschaft: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und schließt [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API) ein. Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet folgendes Codebeispiel, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamen kann:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Eine der einfachsten Arten, zu beginnen, ist mit einem bereits vorhandenen Bild, das als Bildquelle verwendet wird, zu starten und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange sie zugelassene Dateitypen – und Größen – in Ihrer Umgebung sind. SVGs werden oft nicht erlaubt, aufgrund von Sicherheitsbedenken. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet herausragende Beispiele dafür, mit mehreren Bildquellen für die Sonne, Erde und Mond, und unter Verwendung mehrerer Canvas-Methoden zur Steuerung der Geschwindigkeit und Animation der Erde, während sie um die Sonne läuft, und des Mondes, während er um die Erde läuft. Verwenden Sie das Codepen, das mit diesem Tutorial verfügbar ist, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation ändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, nachdrücklich eine blitzende Animation verwenden müssen…

Stellen Sie sicher, dass es eine Steuerung darauf gibt. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zuerst sieht, und dass ein Benutzer sich dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerung bietet, ist eine GIF-Datei. Die Animationsgeschwindigkeit wird innerhalb des GIF-Bilds selbst gesteuert. Das Konvertieren eines animierten GIF in ein Video ermöglicht es, Steuerungen auf die Animation anzuwenden und gibt dem Benutzer Entscheidungskraft. Es gibt viele kostenlose Online-Konverter, die zur Verfügung stehen, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Benutzererwartungen setzen

Geben Sie Benutzern vorab Informationen darüber, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die darauf folgende Animation. Siehe [WCAG 2.1 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut positiv Blitzen haben müssen, halten Sie es klein. Im Allgemeinen beschränken Sie die Größe des Blitzes auf ein Gebiet von etwa 341 x 256 Pixel oder weniger. Diese Pixelgröße geht davon aus, dass ein Betrachter einen typischen Abstand zum Bildschirm einnimmt. Wie bereits erwähnt, kann diese Größe zu groß sein, wenn das Bild in engem Bereich betrachtet wird, wie in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. WebVR kann auf Telefonen, Computern oder Headsets erlebt werden.

Wenn Sie ein Spiel oder VR entwerfen, das ein Augenmaske verwendet **oder VON einer Augenmaske verwendet werden kann**, wie in Firefox Reality (ein Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 x 256 Pixel ist, weil das Bild näher an die Augen des Benutzers ist.

#### Reduzieren Sie den Kontrast

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast der Textfarbe zum Hintergrund ist (technisch als _Leuchtstärke-Kontrastratio_ bezeichnet, siehe W3.org's Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/)), desto einfacher lässt sich solch ein Inhalt lesen. Benutzer mit schlechtem Sehen schätzen Anstrengungen besonders, um Text im Hintergrund hochkontrastiert darzustellen. Wenn der Inhalt jedoch animiert ist, dann ist das **_Reduzieren_** des Kontrasts tatsächlich eine Möglichkeit, die Wahrscheinlichkeit zu verringern, dass der animierte Inhalt Anfälle verursacht. Senken Sie die Kontrastratio, wenn drei Blitze innerhalb einer Sekunde entdeckt werden.

Die Kontrastratio wird in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastratio_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren Farbe ist, und
    - L2 die [relative Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren Farbe.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder ins Netz veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite von Produkten eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein Online-Tool verfügbar: pinetools.com bietet [Helligkeit und Kontrast online](https://pinetools.com/brightness-contrast-image). Wenn Sie dazu beabsichtigen, animierte GIFs zu erstellen, nehmen Sie zum Beispiel eines mit einer geringeren Kontrastrate.

JavaScript ist auch eine Option, um den Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Example: Setting the background color of a paragraph"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Traversing an HTML table with JavaScript and DOM Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

**HTML Content [(link to source page)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#html_2)**

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

**JavaScript Content [(link to source page)](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#javascript_2)**

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

#### Vermeiden Sie vollständig gesättigte rote Farben für blinkende Inhalte

Wie bereits in diesem Dokument erwähnt, rief die Epilepsy Foundation of America im August 2004 einen Workshop ins Leben, um einen Expertenkonsens zu fotosensitiven Anfällen zu entwickeln. Zu ihren Ergebnissen gehörte das Verständnis, dass „_Ein Blitz eine potenzielle Gefahr darstellt, wenn er eine Leuchtdichte von mindestens 20 cd/m2, mit einer Frequenz von mindestens 3 Hz auftritt und einen soliden visuellen Winkel von mindestens 0,006 Steradianten einnimmt (etwa 10% des zentralen Sichtfelds oder 25% der Bildschirmfläche bei typischen Betrachtungsabständen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet."_ Sie bemerken auch in demselben Konsens: „_Unabhängig von der Leuchtdichte wird ein Übergang zu oder von einem gesättAigten Rot ebenfalls als Risiko betrachtet._“

### Alternativen CSS-Stile anbieten

Mit dem Verständnis, dass viel Animation und Blitzen über CSS-Methoden gesteuert werden kann, ist es wichtig, Alternativ-Optionen für Benutzer zu erkunden und die Kontrolle über diese Optionen bequem und sichtbar zu machen.

#### Alternative Style Sheets

Moderne Browser werden die alternativen CSS-Styles anzeigen, wenn die Benutzer wissen, wo sie suchen sollen. In einigen Fällen werden die alternativen Styles offenbart, wenn die Benutzer das Menü "Ansicht" durchlaufen, in anderen Fällen werden sie in den Einstellungen manifestiert, manchmal beides. Nicht alle Benutzer wissen, dass sie nach diesen Optionen über den Browser oder die Einstellungen suchen sollen, daher lohnt es sich erwägen es auf die altmodische Art und Weise zu tun, mit offensichtlichen Knöpfen oder Links, um den Stil zu ändern, damit Benutzer sie sehen können. Dies wird nicht mit dem Browser in Konflikt stehen, der in der Lage ist, die alternativen Style Sheets zu lesen, oder der Fähigkeit des Benutzers, Präferenzen in den Einstellungen zu setzen.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie die sich auf Sprachstererkennungssysteme verlassen müssen, oft von älteren Diagrammen und Links abhängig sind, weil ihre Behinderung sie daran hindert, einen Maus zu bedienen oder die Fähigkeit zu genießen mit Touch-Events auf mobilen Tablets.

Gängige Methoden um alternative Stylesheets in Ihre HTML-Dokumente einzubeziehen, ist die Verwendung des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit den Attributen des `rel="alternate stylesheet"` und für den Titel `title="…"`, und zwar im {{HTMLElement('head')}}-Bereich der Webseite.

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

**{{CSSxref('@import')}}** ist ebenfalls eine Möglichkeit, Stylesheets zu integrieren, aber sie wird nicht so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Indem Sie alternative Stylesheets verwenden (denkt daran, Titel hinzuzufügen), bereiten Sie es für die Benutzer vor, in der Lage zu sein von ihren Browsern alternative Styles zu wählen.

### Dynamischer Stilwechsel

Ein Problem mit dem Verlassen auf den Browser um alternative Styles zu enthüllen, ist das nicht alle Benutzer technisch versiert genug sind, um die alternativen Styles entdecken. Oder, weil ihre Behinderung sie daran hindert. Knöpfe oder Links machen offensichtlich, dass Optionen für viele dankbare Benutzer verfügbar sind. Es gibt eine Vielzahl von Möglichkeiten, um Toggle-Schaltflächen hinzuzufügen, um dem Benutzer zu ermöglichen, zwischen den verschiedenen Stylesheets zu wechseln. Das gesagt, der Einsatz von alternativen Stylesheets sind nicht die einzige Option. Eine andere Option ist es, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Nutzung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), „_wenn möglich, ist es wirklich gute Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das letztendliche Erscheinungsbild aller Styling-Hooks in einem einzelnen Stylesheet kontrolliert werden kann._“ Ein der besten Beispiele, wie man das tut, ist auf der W3C-Seite zu finden ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Text-Only-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist einfach zu erstellen. Es ist eine drastische Lösung; es ist jedoch eine, die manchmal für Lehrer und andere öffentliche Bedienstete notwendig ist, die denjenigen mit extremen Empfindlichkeiten dienen müssen. Diese öffentlichen Bediensteten können ihre Entwickler bitten, ein spezielles alternatives Stylesheet mit `display: none` zu entwickeln. Hier ist wie Sie es via CSS tun:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medieneabfragen im {{HTMLElement('style')}}

Indem Sie’Medienqueries einrichten, aktivieren Sie Steuerungsmöglichkeiten durch den Benutzer; diese Steuerungen werden im Browser oder im Betriebssystem verfügbar gemacht. Finden Sie das MDN-Dokument [Accessibility: What users can do to browse more safely](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely), um die Details zu sehen, wie ein Benutzer auf diese Steuerungen zugreifen kann.

#### `prefers-reduced-motion`

Die Unterstützung für `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein großartiges Beispiel zu sehen, wie man den Code `prefers-reduced-motion` verwenden kann, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen Sie das Beispiel unten aus dem Abschnitt ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Dies kann nützlich sein, wenn die Ambient-Light-API nicht verfügbar ist. Die Unterstützung entsteht.

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

Es gibt ein mächtiges Werkzeug für Entwickler über Window.matchMedia(). Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienupdate-Funktion

Je häufiger der Bildschirm aktualisiert wird, desto stabiler erscheint er für das menschliche Auge und desto weniger „flimmert" er. Die überwiegende Mehrheit moderner Technologie aktualisiert mit einer Geschwindigkeit, die keine Probleme mit Fotosensitivität verursacht. Jedoch ist nicht jeder wohlhabend genug, um sich die modernste Technologie leisten zu können: ältere oder leistungsschwächere Computer können niedrige Aktualisierungsraten haben. [AbilityNet's Factsheet (November 2015) Computer und Epilepsie](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republic's ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort hinsichtlich der Aktualisierungsraten in Hz:

- „_Dieser Effekt ist bemerkbar und nachgewiesen, bis zu 70 Hz._“
- „_Diese Studien scheinen darauf hinzudeuten, dass Sie sich von Aktualisierungsraten unter 70 Hz fernhalten und eine Rate verwenden sollten, die nicht durch 10 teilbar ist._“

Eric Bailey, von CSS-Tricks, fand eine innovative Nutzung des Updates, die bei Kombination mit einer Endungsgeschwindigkeit von Animation oder Übergang, auf eine Rate, die dem menschlichen Auge nicht sichtbar ist, zu beenden. Mit anderen Worten, Eric's Techniken adressieren das Aktualisierungsrate-Problem. Der nachfolgende CSS-Code stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von der W3.org's Seite zu [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update` Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegeräts abzufragen, das Aussehen des Inhalts nach dem Rendern zu ändern. Es hat die Werte „none“, „slow“ und „fast“.

## Entwicklungs- und Experimentelle Funktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in den Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise vermeidet die Spezifikation es, die drei Ebenen in Bezug auf eine Lux-Messung zu definieren, da Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen vermerken auch den Unterschied in der Technologie, wie e-ink, welches bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die es nicht tun.
- `environment-blending`
  - : Aus dem W3C-Dokumententwurf, Media Queries Level 5: „_Die [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) Medienfunktion wird verwendet, um die Eigenschaften des Nutzerdisplays zu laden, sodass der Autor das Stil des Dokuments anpassen kann. Ein Autor könnte es bevorzugen, die Bilder/Visa und/oder das Layout der Seite je nach Display-Technologie zu ändern, um die Attraktivität zu erhöhen oder die Lesbarkeit zu verbessern._“

#### Benutzerpräferenz-Medienfunktionen (Geplant in Media Queries Level 5)

[User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in den [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um die Benutzerkontrolle über Medien zu ermöglichen. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt in [User Preference Media Features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), „_Die [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) Medienfunktion gibt an, ob die Inhalte normal angezeigt werden oder ob Farben invertiert wurden._“
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : Im [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), setzt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf der Seite durch und überschreibt die vom Ersteller gewählten Farben. Aus dem W3C-Dokumententwurf, Media Queries Level 5 Abschnitt zu Forced Colors: „_Die forced-colors Medienfunktion wird verwendet, um zu erkennen, ob der Benutzeragent aktiviert hat einen [erzwungenen Farbmodus aktiviert](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), bei dem er eine vom Benutzer gewählte eingeschränkte Farbpalette auf die Seite anwendet._“ Der Benutzer muss sich dieser Fähigkeit bewusst gemacht werden und es muss gut mit dem angemessenen Wert für die Medienabfrage „prefers-color-scheme“ spielen.
- `light-level`
  - : Aus dem W3C-Dokumententwurf, Media Queries Level 5 Abschnitt zu Light-Level: „_Die [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) Medienfunktion wird verwendet, um die Umgebungslichtpegel, in dem das Gerät verwendet wird, abzufragen, um den Autor zu ermöglichen, einen Stil des Dokuments in Beantwortung anzupassen._“ Dies wird ein Segen für diejenigen sein, die motorische Fähigkeitenprobleme haben, oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind die richtigen „Button“ zu finden, ihre Bildschirmeinstellungen zu wechseln.
- `prefers-contrast`
  - : Aus dem W3C-Dokumententwurf, Media Queries Level 5 Abschnitt zu [„prefers-contrast“](/de/docs/Web/CSS/@media/prefers-contrast): „_Die prefers-contrast Medienfunktion wird verwendet, um zu erkennen, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Viele Benutzer haben Schwierigkeiten, Text zu lesen, der nur eine geringe Kontraständerung zum Hintergrund hat und würden einen größeren Kontrast bevorzugen._“ Manchmal kann es zu viel Kontrast geben; ein Haloeffekt um Text kann in solchen Situationen auftreten und die Lesbarkeit tatsächlich verringern. Der Benutzerkontrolle über die Menge des Kontrastes zu geben, ist ein definitives Geschenk für die Barrierefreiheit.

#### `MediaQueryList` Interface

Sektion 4.2 von den CSSWG.org Entwürfen integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) definiert in HTML. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) Objekt. Siehe das MDN-Dokument [MediaQueryList](/de/docs/Web/API/MediaQueryList) für weitere Informationen.

#### Personalisierungs-Hilfe und -Unterstützung

Die Anforderung für die `literal`-Eigenschaft ist aus [Sektion 23 Non-literal Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) übernommen.

**Anforderung:** Einige Benutzer können wörtlichen Text und Symbole nicht verstehen, wie Metaphern, Idiome usw. Die `literal`-Eigenschaft soll Text oder Bilder als nicht wörtlich identifizieren und erlaubt dem Autor, nicht wörtlichen Text und Bilder den Benutzern zu erklären.

#### Übergänge (für CSS und SVG)

Das Folgende ist dem [Web Animations Model](https://www.w3.org/TR/web-animations-1/) aus CSSWG.org Entwürfen

Das Webanimationsmodell soll die notwendigen Funktionen bereitstellen, um Dinge, die erforderlich, um [CSS-Übergänge](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11) auszudrücken.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Barrierefreiheit: Verstehen von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas-Tutorial)
- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D und 3D Grafik für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farbe](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussionsfaden
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der WCAG 2.0-Definition für Blitze #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verständnis 2.3.1 - fehlende/unklare Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Licht auf Photosensibilität werfen, eine der komplexesten Bedingungen der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) Epilepsy Foundation: _"Bestimmte Personen sind von Geburt an besonders empfindlich gegenüber flackernden Lichtern oder kontrastreichen visuellen Mustern, wie Streifen, Raster und Schachbrettmuster. Aufgrund dieser Bedingung wird ihr Gehirn bei derartigen visuellen Reizen anfallähnliche Entladungen produzieren."_
- [Gamma-Schwingungen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), selbst ohne Bewegung oder Flackern, können bei Patienten mit photosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch flackernde Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Photisch- und Muster-induzierte Anfälle: Fachkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia September 2005, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Tool wird es allgemein als eines der beiden "Goldstandards" angesehen, um Blitze zu analysieren.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Ausstattung — Farbmessung und -verwaltung — Teil 2-2: Farbverwaltung — Erweiterter RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Zusammen mit dem Harding-Tool wird es allgemein als eines der beiden "Goldstandards" angesehen, um Blitze zu analysieren.

- [Trace Forschungs- und Entwicklungszentrum](https://trace.umd.edu/peat/)
- [Verwendung von PEAT zur Erstellung blitzfreier Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalization Semantics Explainer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [Personalisierungswerkzeuge 1.0](https://www.w3.org/TR/2019/WD-personalization-semantics-tools-1.0-20190711/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständniskriterium SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält jedoch einige Erklärungen zu Referenzen in den WCAG 2.1-Kriterien)
- [Drei Blitze oder darunter Schwellenwert Verständniskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis der Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animations Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition von relativer Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlicher Dank an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre große, große Hilfe und Diskussionen zu diesem Thema.

Wir sind _alle_ in großem Dank gegenüber dem Trace Research & Development Center, das ihr erstaunliches Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/), kostenlos zur Verfügung stellt.
