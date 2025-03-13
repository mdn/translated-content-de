---
title: Barrierefreiheit im Web für Anfälle und physische Reaktionen
short-title: Vermeidung von Anfällen und physischen Reaktionen
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Dieser Artikel führt in die Konzepte ein, die hinter der Erstellung von Webinhalten zur Barrierefreiheit für Personen mit vestibulären Störungen stehen, und wie man Inhalte misst und vermeidet, die Anfälle und/oder andere physische Reaktionen hervorrufen können.

## Überblick

### Anfälle

Anfälle, die durch Licht verursacht werden, sind als photosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können photosensitive Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, {{Glossary("Canvas", "Canvas")}} und CSS- oder JavaScript-Animationen nutzen, können alle Inhalte erzeugen, die Anfälle oder andere lähmende physische Reaktionen hervorrufen können. Bestimmte visuelle Muster, insbesondere Streifen, können auch physische Reaktionen auslösen, obwohl sie nicht animiert sind. Photosensitive Epilepsie ist tatsächlich eine Art von „Reflexepilepsie“—Anfälle, die als Reaktion auf einen Auslöser auftreten. Im Falle der photosensitiven Epilepsie werden Anfälle speziell durch blinkende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Dass statische Bilder Anfälle und andere Störungen verursachen können, wird in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo festgestellt wird, „_Certain visual images, even in the absence of motion or flicker, can trigger seizures in patients with photosensitive epilepsy_“. Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) über statische Bilder und Muster: „_Static or moving patterns of discernible light and dark stripes have the same effect as flashing lights because of the alternation of dark and bright areas._“ Die Arbeitsgruppe der Epilepsy Foundation of America kann das Problem ein wenig „quantifizieren“: „_A pattern with the potential for provoking seizures contains clearly discernible stripes, numbering more than five light-dark pairs of stripes in any orientation_“. Zusätzlich zu den Streifen sind auch karierte Muster bekannt, die photosensitive Anfälle auslösen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der etablierte und starke Auslöser sind blinkende oder Stroboskoplichter. Dr. Selim Benbadis vom USF's Comprehensive Epilepsy Program bemerkt: „_The only thing that is really documented is flashing lights, which can trigger seizures in patients with photosensitive epilepsy. Only a few types of epilepsies are photosensitive though, and the vast majority of epilepsies are not._“ Zusätzlich zu Anfällen, die durch Photosensitivität verursacht werden, kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen viel seltener zu sein scheint. Für eine großartige Einführung in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario zu [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) stellt die Epilepsy Foundation fest, dass „_a seizure is an event and epilepsy is the disease involving recurrent unprovoked seizures_“. Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), „_Sudden unexpected death in epilepsy (SUDEP) is likely the most common disease-related cause of death in with epilepsy. It is not frequent but it is a very real problem and people need to be aware of its risk_“.

Der Punkt ist, Anfälle können definitiv tödlich sein, und Entwickler und Designer sind immens wichtig, um das Web für diejenigen sicherer zu machen, die empfindlich auf photosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber auch diejenigen, die „nur“ lähmend sind, können so schwerwiegend sein, dass sie den Benutzer unbrauchbar machen. Andere Störungen wie Desorientierung, Übelkeit, Erbrechen und mehr können auch so schwerwiegend sein, dass der Benutzer nicht mehr funktionsfähig ist. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), bietet eine Liste von Auslösern, die bei photosensitiven Personen Anfälle verursachen können; hier ein Auszug aus dieser Liste:

- Fernseher oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder TV-Sendungen mit schnellen Blitzen oder wechselnden Mustern unterschiedlicher Farben.
- Intensive Stroboskoplichter wie visuelle Feuermelder.
- Natürliche Lichteffekte, beispielsweise Sonnenlicht, insbesondere wenn es auf Wasser schimmert, durch Bäume flackert oder durch die Lamellen von Jalousien.
- Bestimmte visuelle Muster, insbesondere Streifen kontrastierender Farben.

Der gleiche Artikel fährt fort, dass viele Faktoren kombiniert werden müssen, um die photosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor eingeschlossen ist; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Der Artikel ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) stellt allgemein fest: „_Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes_“ und fährt sehr spezifisch fort: „_People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing_“.

Es braucht nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das auf hohe Frequenz eingestellt ist, um Farbe und Helligkeit zu ändern, leicht mit JavaScript zu realisieren, kann echten Schaden verursachen. Und Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig verwendet werden, um beim Laden von Seiten angezeigt zu werden, leicht "flackern", während sie rotieren.

Zusätzliche Bedenken bestehen für Menschen mit motorischen Problemen. Zum Beispiel weist die Seite des Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) darauf hin, dass „_Photosensitive seizures can be provoked by certain types of flashing in web or computer content, including mouse-overs that cause large areas of the screen to rapidly flash on and off repeatedly_“.

### Andere physische Reaktionen

Übelkeit, Schwindel (oder Benommenheit) und Desorientierung sind sehr unspezifische Symptome, die mit allen Arten von Krankheiten in Verbindung gebracht werden und nicht besonders auf Anfälle hindeuten (ausgenommen vielleicht Desorientierung, die bei Anfällen beobachtet wird). Anfälle sind jedoch nicht die einzige nachteilige physische Reaktion, die durch Blitzen, Flackern, Blinken und andere solche Reize möglich ist. 1997 zeigte ein japanischer Zeichentrickfilm eine animierte "Virusbombe". Einige der Kinder, die den Cartoon sahen, reagierten mit Anfällen, andere erlitten Übelkeit, Zittern und blutiges Erbrechen. Die Reaktionen der Kinder waren so schwerwiegend, dass sie in die Notaufnahme gebracht werden mussten. Die unten aufgeführten physischen Störungen sind alle mögliche Konsequenzen: Jede dieser physischen Reaktionen kann so schwerwiegend sein, dass sie lähmend ist.

- Anfälle
- Vestibuläre Störungen
- Migräne
- Übelkeit
- Erbrechen

## Blitzen, Blinken & Flackern

Obwohl „Blitzen“ und „Blinken“ manchmal austauschbar verwendet werden, sind sie nicht dasselbe. Laut dem W3C ist Blinken ein Ablenkungsproblem, während Blitzen sich auf Inhalte bezieht, die mehr als 3 Mal pro Sekunde auftreten und die ausreichend groß und hell sind. [Section 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) verbietet Flackereffekte mit einer Frequenz von mehr als 3 Hz (Flackern pro Sekunde) und weniger als 55 Hz. Der Artikel der Epilepsy Foundation ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) stellt fest, dass „_Generally, flashing lights between the frequencies of five to 30 flashes per second (Hertz) are most likely to trigger seizures. In order to be safe, the consensus recommends that photosensitive individuals should not be exposed to flashes greater than three per second._“ Für manche Menschen können Blitzen/Blinken jedoch schon bei weniger als 3 Hz Symptome verursachen.

Es ist wichtig zu beachten, dass nicht jedes Blitzen und Blinken schlecht ist. Die NASA bemerkt in ihrem Dokument ["Blinking, Flashing, and Temporal Response"](https://colorusage.arc.nasa.gov/flashing.php), dass Blinken und Blitzen mächtige Werkzeuge zur Aufmerksamkeitslenkung sein können — wie es erforderlich ist für Warnknöpfe (vorausgesetzt, dass Benutzer den Bildschirm noch sehen können, während Elemente blitzen, was nicht immer der Fall ist). Für manche Benutzer, blinkende Knöpfe auch warnen, dass sie mit Vorsicht verwendet werden müssen. In Bezug auf Webdesign müssen Systeme, die Unternehmensmitarbeiter vor Gefahren warnen, indem sie den Bildschirm "übernehmen", um eine blinkende Warnung in Notfällen bereitzustellen, die Rate, Größe und Helligkeitsänderungen auf dem Bildschirm berücksichtigen, während diese Warnungen blitzen.

### Blitzen und Flackern—wie wird Gefahr quantifiziert?

Laut dem Artikel ["Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group"](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x), „_A flash is a potential hazard if it has luminance ≥20 cd/m², occurs at a frequency of ≥3 Hz, and occupies a solid visual angle of ≥0.006 steradians (approximately 10% of the central visual field or 25% of screen area at typical viewing distances)._“

Wie weit ist eine typische Betrachtungsdistanz? Die Empfehlung, die zum Zeitpunkt des Schreibens als typische Betrachtungsdistanz betrachtet wurde, war, „_the area can be taken as applying to an area >25% of the area of a television screen, assuming standard viewing distances of ≥2 m (∼9 feet)._“ Seit jener Zeit hat sich vieles geändert, und wir sind jetzt viel näher an unserem Bildschirm.

Bestimmte Farben und/oder Farbkombinationen sind ebenfalls von Bedeutung. ["Certain Colors More Likely To Cause Epileptic Fits, Researchers Find"](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) stellt fest, dass „_...complexities underlying brain dynamics could be modulated by certain color combinations more than the others, for example, red-blue flickering stimulus causes larger cortical excitation than red-green or blue-green stimulus._“

### Blitzen & rotes Blitzen

Die [WCAG 2.3.1 allgemeine Blitz- und rote Blitz-Schwellenwerte](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sind wie folgt definiert:

- Ein **allgemeiner Blitz** ist definiert als ein Paar von gegensätzlichen Änderungen in [relativer Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) von 10% oder mehr der maximalen relativen Helligkeit, wobei die relative Helligkeit des dunkleren Bildes unter 0,80 liegt, und wobei „ein Paar von gegensätzlichen Änderungen“ ein Anstieg gefolgt von einem Abfall oder ein Abfall gefolgt von einem Anstieg ist;
- Ein **rotes Blitzen** ist definiert als jedes Paar von gegensätzlichen Übergängen, das ein gesättigtes Rot enthält.

Diese Standards basieren auf früheren Forschungen. 2004 veranstaltete die Epilepsy Foundation of America einen Workshop und entwickelte einen [Konsens](https://pubmed.ncbi.nlm.nih.gov/16146438/) über photosensitive Anfälle, bei dem festgestellt wurde, dass „_A flash is a potential hazard if it has luminance at least 20 cd/m², occurs at a frequency of least 3 Hz, and occupies a solid visual angle of at least 0.006 steradians (about 10% of the central visual field or 25% of screen area at typical viewing distances)._“ Der Übergang zu oder von einem gesättigten Rot ist wichtig und stellt ein eigenes Risiko dar: „_Irrespective of luminance, a transition to or from a saturated red is also considered a risk._“

### Größe und Abstand

#### Wie groß? Es kommt darauf an

"Relative" Größe und Abstand spielen beide eine Rolle. Laut [PEAT](https://trace.umd.edu/peat/), „_The combined area of flashes occurring concurrently occupies no more than a total of one quarter of any 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 by 768 pixels._“

Der Punkt, dass das Gesichtsfeld eine wichtige Überlegung ist, ergibt sich im Artikel, der WCAG 2.3.1 behandelt: „_The 1024 x 768 screen is used as the reference screen resolution for the evaluation. The 341 x 256 pixel block represents a 10 degree viewport at a typical viewing distance. (The 10 degree field is taken from the original specifications and represents the central vision portion of the eye, where people are most susceptible to photo stimuli.)_“

Dieses Pixelverhältnis berechnet die relative Größe, aber Abstand spielt ebenfalls eine Rolle.

Der Abstand spielt eine Rolle, weil er das gesamte Gesichtsfeld beeinflusst. Wenn Zuschauer Brillen für Spiele tragen, wird das Gesichtsfeld wahrscheinlich vollständig vom Bildschirm umschlossen. [WebVR](https://webvr.info/) ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben, was auf einem Telefon, Computer oder Headset erlebt werden kann. Das Bedenken über blinkende Bilder in einer Brille ist ein wachsendes, da die Brille den Augen so nahe ist.

[Die Epilepsie-Gesellschaft (UK)](https://epilepsysociety.org.uk/), stellt in ihrem Artikel, ["3d Films and Virtual Reality"](https://epilepsysociety.org.uk/3d-films-and-virtual-reality#.XQlC5ohKiUk), fest: „_With VR the images flash very quickly and generally this is too quickly to trigger a seizure in people with photosensitive epilepsy. However, the field of view is large and so more of the eye is stimulated. This means that more of the brain may be affected and this may trigger a photosensitive seizure._“

(Hinweis: Einige Benutzer können mit blinkenden Cursorn nicht sehen und können Migräne, Bewegungskrankheit und Desorientierung bekommen, obwohl blinkende Cursor einen viel kleineren Bereich des Bildschirms belegen.)

### Muster und Parallaxe

Kontrastreichen dunklen und hellen geometrischen Mustern wird nachgesagt, dass sie Probleme verursachen können; Streifen und Karos sind die bekanntesten Beispiele. Die Arbeitsgruppe der Epilepsy Foundation of America führt auf, wie viele Hell-Dunkel-Paare von Streifen Anfälle auslösen können und unter welchen Bedingungen. Wenn ein Muster unverändert und gerade ist, sind acht Linien das maximal zulässige, aber wenn es sich schlängelt, nicht mehr als fünf Linien.

Parallaxeffekte können Desorientierung verursachen. Verwenden Sie Parallaxeffekte mit Vorsicht; wenn Sie sie verwenden müssen, stellen Sie sicher, dass der Benutzer eine Möglichkeit hat, sie zu deaktivieren.

„Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in beliebiger Orientierung aufweisen. Wenn die Hell-Dunkel-Streifen eines Musters kollektiv subtendieren am Auge aus der minimal erwarteten Betrachtungsdistanz einen vollen Winkel von >0,006 Steradiant, die Helligkeit des hellsten Streifens >50 cd/m² ist und das Muster für ≥0,5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen aufweisen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen.“

Nicht alles ist bekannt, und selbst mit den oben genannten Metriken kommen zusätzliche Faktoren ins Spiel. Zum Beispiel erhöht das Wechseln von einem kleineren zu einem größeren Bereich die Wahrscheinlichkeit, dass das Gehirn reagiert, sowie das Erhöhen des Kontrasts und das Erhöhen der räumlichen Frequenz von einer niedrigen zu einer mittleren. Es ist auch bekannt, obwohl der Grund dahinter nicht verstanden wird, dass das Wechseln von grundlegenden Orientierungen (zum Beispiel Streifen) zu einer multiplen (zum Beispiel das Karomuster, das entsteht, wenn man ein Streifenmuster auf ein anderes legt, aber im rechten Winkel dazu, das Originalmuster) das Gehirn beeinflusst.

### Farben

Das Verständnis von Farben ist wichtig für Barrierefreiheit. Siehe [Verständnis von Farben und Helligkeit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) in Bezug auf Barrierefreiheit im Web und allgemein.

Wie sich die Farbe in Bezug auf ihren Hintergrund verhält—normalerweise in Bezug auf Kontrast eingerahmt—und wie drastisch sich die Farbe in Animationen von Bild zu Bild ändert, ist wichtig. Weitere Informationen hierzu finden Sie unter [Understanding SC 2.3.1—Three Flashes or Below Threshold](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Der besondere Fall von Rot

Es wurde demonstriert, dass [einige Farben eher epileptische Anfälle hervorrufen als andere](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Die menschliche Physiologie und Psychologie werden generell von der Farbe Rot beeinflusst. Seine Fähigkeit, Verhalten zu beeinflussen, wurde sogar bei Tieren beobachtet.

- **Tests zur Desaturierung von Rot:** Das menschliche Auge ist so empfindlich auf Rot eingestellt, dass Augenärzte einen Test damit eingerichtet haben. Der Desaturierungstest von Rot bewertet die Integrität des Sehnervs. Weitere Informationen darüber, wie ein Augenarzt diesen Test verwendet, finden Sie unter [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Rote Umgebung:** Studien haben gezeigt, dass für diejenigen, die eine traumatische Hirnverletzung erlitten haben, [die kognitive Funktion in einer roten Umgebung reduziert ist](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Sattes Rot](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) ist ein besonderer, gefährlicher Fall, und es gibt spezielle Tests dafür. Zusätzlich dazu, dass eine rote Umgebung die kognitive Funktion von Menschen mit traumatischer Hirnverletzung beeinflusst, scheint die Farbe im roten Spektrum besondere Bedenken und spezielle Tests zu erfordern. Dr. Gregg Vanderheiden, als er das Photosensitive Epilepsy Analysis Tool testete, bemerkte, dass die Anfallsraten viel höher waren als erwartet. Sie stellten fest, dass wir viel empfindlicher gegenüber sattem rotem Blitzen sind. (Siehe das Video, [The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-ep ilepsy-analysis-tool-ep-429/)).

#### Websafe bedeutet nicht anfallssicher

Beachten Sie, dass die Farbe **#990000** als „**websicher**“ gilt. Das bedeutet _nicht_, dass sie „sicher gegen das Auslösen von Anfällen“ ist, sondern nur, dass die Farbe sicher von der Technik reproduziert werden kann, die zur Erstellung von Farbe auf Bildschirmen verwendet wird.

## Messung zur Vermeidung von Schäden

Das Messen des Potenzials für Schaden ist ein guter Ausgangspunkt. Faktoren, die in Tests berücksichtigt werden, umfassen Farbe, Helligkeit, Größe, Kontrast und im Fall von Animationen die Frequenz. WCAG 2.1 bietet Anleitung zur Bewertung von Inhalten.

Im August 2004 veranstaltete die Epilepsy Foundation of America einen Workshop zur Entwicklung eines Expertenkonsenses über photosensitive Anfälle. Die folgende, autoritative Information stammt von: [Photic- and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group.](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Ein Blitz ist eine potenzielle Gefahr, wenn er eine Helligkeit von ≥20 cd/m² hat, mit einer Frequenz von ≥3 Hz auftritt und einen soliden visuellen Winkel von ≥0,006 Steradiant einnimmt (ungefähr 10% des zentralen Gesichtsfeldes oder 25% der Bildschirmfläche bei typischen Betrachtungsdistanzen). Ein Übergang zu oder von gesättigtem Rot wird ebenfalls als Risiko betrachtet. Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält deutlich erkennbare Streifen, die mehr als fünf Hell-Dunkel-Paare von Streifen in beliebiger Orientierung aufweisen. Wenn die Hell-Dunkel-Streifen eines Musters kollektiv am Auge von der minimal erwarteten Betrachtungsdistanz eine Fläche von >0.006 Steradiant einnehmen, die Helligkeit des hellsten Streifens >50 cd/m² beträgt und das Muster für ≥0.5 s angezeigt wird, dann sollte das Muster nicht mehr als fünf Hell-Dunkel-Paare von Streifen aufweisen, wenn die Streifen die Richtung ändern, oszillieren, blitzen oder im Kontrast umkehren; wenn das Muster unverändert oder sanft in eine Richtung driftet, nicht mehr als acht Streifen. Diese Prinzipien sind leichter anzuwenden im Fall von festen Medien, beispielsweise einer vorab aufgezeichneten TV-Show, die Bild für Bild analysiert werden kann, im Vergleich zu interaktiven Medien.

Das "cd/m²" bezieht sich auf Candela pro Quadratmeter. Also für den Webentwickler, wie bezieht sich das auf Messungen für Farbe, Helligkeit und Sättigung?

Candela ist eine SI-Einheit (Internationales Einheitensystem) der Lichtstärke. Es ist ein fotometrischer Begriff und die Photometrie befasst sich mit der Messung von sichtbarem Licht, wie es von menschlichen Augen wahrgenommen wird. Der Wikipedia-Artikel über ["Candela per square metre"](https://en.wikipedia.org/wiki/Candela_per_square_metre) bringt es in Bezug auf das, was wir als Entwickler gewohnt sind: auf einem Anzeigegerät und im RGB-Bereich. Das ist hilfreich, da ein spezifischer Standard angenommen wird, der auf Monitoren, Druckern und im Internet verwendet wird, und es ist der **sRGB** (Standard Red Green Blue).

> Als Maß für das vom Gerät pro Flächeneinheit emittierte Licht wird diese Einheit häufig verwendet, um die Helligkeit eines Anzeigegeräts anzugeben. Die [sRGB](https://en.wikipedia.org/wiki/SRGB)-Spezifikation für Monitore zielt auf 80 cd/m².[<sup>\[3\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-3) Typischerweise sollten kalibrierte Monitore eine Helligkeit von 120 cd/m² aufweisen. Die meisten Verbraucher-Desktop[Flüssigkristalldisplays](https://en.wikipedia.org/wiki/Liquid_crystal_display) haben Helligkeiten von 200 bis 300 cd/m².[<sup>\[4\]</sup>](https://en.wikipedia.org/wiki/Candela_per_square_metre#cite_note-4) [H ochauflösende Fernseher](https://en.wikipedia.org/wiki/High-definition_television) reichen von 450 bis etwa 1500 cd/m².

Der Kerngedanke ist, dass der **sRGB**-Farbraum ein gemeinsamer Berührungspunkt zwischen Forschung, Bewertungswerkzeugen und Entwicklern ist, da er leicht von den häufig verwendeten Hex-Codes konvertiert werden kann.

### Die menschliche Physiologie und Psychologie als Überlegung

Viele Experten arbeiten daran, die Arten von Webinhalten, die Anfälle auslösen könnten, so weit wie möglich zu quantifizieren und zu messen. Dabei darf jedoch nicht vergessen werden, dass Farbe genauso sehr über menschliche Wahrnehmung im Gehirn geht wie über die Messung von Licht, das von einem Computerbildschirm kommt.

Zusätzlich zu den psychologischen Unterschieden gibt es auch physiologische Unterschiede unter uns. Es wird Variationen und Nuancen geben, wie ein realer Mensch Farbe und Licht wahrnimmt und darauf reagiert. Zum Beispiel stellt Tom Jewett, Emeritierter Dozent für Informatik an der Cal State University Long Beach, folgendes in Bezug auf [Helligkeit in der HSL-Farbskala](https://colortutorial.design/hsb.html) fest: „_...The distinction between levels of lightness is not actually linear as the HSL scale would imply; we are much more sensitive to changes in lighter values than to darker ones._“

Es ist wichtig zu verstehen, dass Licht und seine Messungen linear sind, aber menschliches Sehen und menschliche Wahrnehmung nicht. Die Untersuchung und Diskussion darüber, wie die maschinelle Messung von Licht, wie es von einem Computerbildschirm zum menschlichen Auge gelangt, gefiltert durch das menschliche Sehen und dann durch das menschliche Gehirn manipuliert wird, in Beziehung gesetzt werden kann, ist im Gange.

Selbst Alter und Geschlecht können eine Rolle spielen. Laut dem Artikel der Epilepsy Foundation, ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), „_Children and adolescents are more prone than adults to have an abnormal response to light stimulation, and the first light-induced seizure almost always occurs before age 20_“. Der Artikel folgt dieser Statistik: „_Girls (60 percent) are more often affected than boys (40 percent), although seizures are more frequent in boys because they are more likely to be playing video games. Video games often contain potentially provocative light stimulation_“.

**Benutzertests sind sehr problematisch**. Selbstverständlich möchte niemand eine anfallgefährdete Person Benutzertests unterziehen. Es ist gefährlich. In diesem Punkt ist eines der ethischsten Dinge, die Entwickler und Designer tun können, Werkzeuge zu verwenden, die von Experten auf dem Gebiet entwickelt wurden, die eng mit Ärzten bei der Entwicklung des Werkzeugs zusammengearbeitet haben. Zum Zeitpunkt des Schreibens gibt es zwei weithin verfügbare Werkzeuge, die ethisch und professionell von Forschern und Ärzten für Filme/Videos entwickelt wurden: **PEAT** und der **Harding-Test**.

### Photosensitive Epilepsy Analysis Tool (PEAT)

Das [Trace Research and Development Center](https://trace.umd.edu/) hat einen Goldstandard für ein [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) entwickelt und darauf bestanden, es **_kostenlos_** zum Download bereitzustellen. PEAT kann Autoren helfen zu bestimmen, ob Animationen oder Videos in ihren Inhalten wahrscheinlich Anfälle verursachen. Beachten Sie die Einschränkung seiner Nutzung: **_Die Verwendung von PEAT zur Bewertung von kommerziell produzierten Materialien für Fernsehübertragungen, Filme, Home-Entertainment oder die Spieleindustrie ist verboten. Verwenden Sie für kommerzielle Zwecke den Harding-Test oder andere Werkzeuge._**

Um eine kostenlose Kopie des Photosensitive Epilepsy Analysis Tool der University of Maryland zu erhalten, besuchen Sie das [Trace Research & Development Center](https://trace.umd.edu/).

![University of Maryland College of Information Studies Photosensitive Epilepsy Analysis Tool.](peatversion1pt6.png)

### Der Harding-Test

Da die Nutzung des PEAT-Tools für kommerzielle Zwecke verboten ist, können Fernsehsender den Harding-Test bei [HardingTest.com](https://hardingtest.com/) nutzen. Der Harding-Test ist ein weiterer Goldstandard. Fernsehsender in verschiedenen Ländern müssen diesen Test bestehen, bevor sie senden dürfen, und die Gruppe von [HardingTest.com](https://hardingtest.com/) bietet sowohl Analyse als auch Zertifizierung von Videoinhalten.

![Harding Flash and Pattern Analyzer.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Zugängliche Lösungen für Entwickler

Alle Animationen sind potenziell gefährlich. Als Designer und Entwickler liegt unsere Verantwortung darin, weder absichtlich noch unabsichtlich Schaden zu verursachen. Wenn wir etwas einfügen müssen, das potenziell Schaden verursachen könnte, ist es entscheidend, Benutzern zu verhindern, versehentlich auf schädliche Inhalte zu stoßen, und Wege bereitzustellen, wie Benutzer Animationen verhindern und kontrollieren können, um möglichen Schaden zu mindern.

### Was der Webentwickler tun kann

#### Keinen Schaden zufügen

[WCAG Leitlinie 2.3 Anfälle und physische Reaktionen](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) bietet einen Überblick: „_Do not design content in a way that is known to cause seizures or physical reactions_“. Fügen Sie keine Animation ein, die ein Benutzer nicht kontrollieren kann. Gestalten Sie nicht mit Mustern, die bekannt sind, Probleme zu verursachen. Wenn Sie einen GIF oder PNG mit Blitzen einfügen müssen, nehmen Sie es stattdessen als Videoformat auf, damit dem Benutzer Steuerelemente zur Verfügung stehen. Geben Sie dem Benutzer die Möglichkeit, es zu vermeiden, es auszuschalten oder es weniger schädlich zu gestalten.

#### Böswilligkeit verstehen

Als Entwickler oder Designer fragen Sie sich, ob blitzende Inhalte wirklich auf Ihrer Webseite sein müssen. Selbst wenn sie ordnungsgemäß behandelt werden, gibt es oft Menschen, die gegen den Inhalt verstoßen, der von Ihrer Website heruntergeladen wurde, und ihn als Waffe nutzen. Es wird angenommen, dass der erste dokumentierte Versuch, Computer zu nutzen, um physikalischen Schaden durch Animationen zu verursachen, am Samstag, den 22. März 2008, begann: Die Website der Epilepsy Foundation wurde durch Posts mit blinkenden Bildern und Links, die fälschlicherweise behaupteten, hilfreich zu sein, gehackt. Benutzer mit vestibulären Störungen, die auf der Website Hilfe suchten, waren betroffen.

Eine Reihe von rechtlichen Überlegungen ist im Gange, nachdem der Journalist Kurt Eichenwald, ein bekannter Epileptiker, nach dem Senden eines animierten GIFs im Dezember 2016: das blinkende GIF trug die Nachricht, „_You deserve a seizure for your posts_“, betroffen war.

#### Kontrolle über Belichtung und Zugriff

Die Kontrolle über die Belichtung der Seite ist der Schlüssel, um sicherzustellen, dass jemand, der für Anfälle anfällig ist, nicht versehentlich auf sie stößt. WCAG merkt an, dass ein einziges Objekt die gesamte Seite unbrauchbar machen kann.

Wenn Sie glauben, dass Sie ein Bild oder eine Animation haben, die Anfälle verursachen könnte, kontrollieren Sie den Zugriff darauf, indem Sie zuerst eine Warnung über den Inhalt anzeigen und dann an einem Ort setzen, wo der Benutzer sich entscheiden muss, ihn zu sehen, beispielsweise durch Klicken auf eine Schaltfläche oder durch das sicherstellen, dass der Link zur Seite eine klare und offensichtliche Warnung trägt.

Erwägen Sie die Verwendung von Metadaten wie `<meta name="robots" content="noindex, nofollow">`, damit die Seite nicht von Suchmaschinen indiziert wird.

#### Nicht indizieren, nicht folgen

Indem Sie die Seite nicht indizieren, wird die Wahrscheinlichkeit verringert, dass Benutzer durch eine Suche darauf stoßen.

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

### Animierte GIFs

Alle Bildtypen sind potenziell gefährlich, allerdings verdienen animierte GIFs eine besondere Erwähnung aufgrund ihrer Allgegenwärtigkeit und der Tatsache, dass die Animationsgeschwindigkeit tatsächlich innerhalb der GIF-Datei selbst gesteuert wird.

#### Erkennen, ob ein GIF animiert ist

- Das [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) npm-Paket ermöglicht die Erkennung von Animationen _so früh wie möglich_ in einer gegebenen HTTP-Anfrage.
- Zakirt bietet einen Gist für [animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Bei animierten GIFs stellen Sie sicher, dass die Animation inaktiv ist, bis der Benutzer entscheidet, sie zu aktivieren. Zum Beispiel muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten.

**Ressourcen für das Erkennen und Steuern animierter GIFs umfassen:**

- [RunKit Animated GIF Detector](https://npm.runkit.com/animated-gif-detector)
- [gifplayer](https://github.com/rubentd/gifplayer), ein jQuery-Plugin, das Ihnen hilft, animierte GIFs auf Ihrer Website abzuspielen und zu stoppen

### Videos

Wie im Fall von animierten GIFs, muss der Benutzer einen Knopf drücken oder ein Kästchen ankreuzen, um die Animation zu starten. Es gibt viele Wege, dies zu tun, z.B. indem man nicht das [`autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)-Attribut zu `<video controls>` hinzufügt oder {{CSSxRef('animation-play-state')}} auf „paused“ als Initialzustand setzt. Um ein mächtiges Beispiel dafür zu sehen, wie dies tatsächlich funktionieren kann, siehe den Artikel von Kirupa, ["Toggling Animations On and Off"](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa verwendet den `animation-play-state` in Verbindung mit {{CSSxRef('transition')}}, {{CSSxRef('transform')}} und [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine sehr zugängliche Erfahrung unter der Kontrolle des Benutzers zu schaffen.

[`animation-play-state`](https://www.w3.org/TR/css-animations-1/#animation-play-state) ist eine CSS-Eigenschaft, die festlegt, ob eine Animation läuft oder pausiert ist.

```css
div {
  animation-play-state: paused;
}
```

[CSS transitions](/de/docs/Web/CSS/CSS_transitions) können verwendet werden, um die Dauer für die Anfangsphase der Animation auf null zu setzen.

```css
div {
  transition-duration: 0s;
}
```

### Sicherstellen, dass der Benutzer auch Animationen stoppen kann, sowie sie starten kann

Ein {{HTMLElement('video')}}-Element ohne Attribute wird nicht automatisch abgespielt und hat auch keine Steuerelemente. Stellen Sie sicher, dass Sie das `controls`-Attribut zum Videoelement hinzufügen, damit der Benutzer das Video ebenso stoppen wie starten kann.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Programmatisch sicherstellen, dass Steuerelemente verfügbar sind

Die `HTMLMediaElement.controls`-Eigenschaft gibt das `controls` HTML-Attribut wieder, das steuert, ob die Benutzeroberflächensteuerungen zum Abspielen des Medienobjekts angezeigt werden.

##### Video

Um sicherzustellen, dass ein Video Steuerelemente hat, auf die ein Benutzer zugreifen kann, stellen Sie sicher, dass Sie das Wort "controls" zu den HTML-Video- und Audioelementen hinzufügen.

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

Denselben Ansatz auf Audio anwenden:

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

Beachten Sie, dass das Audio in Videos durch das `muted`-Inhaltsattribut gesteuert werden kann, obwohl der Inhalt im {{HTMLElement('video')}}-Element anstatt im {{HTMLElement('audio')}}-Element ist. Dieses Beispiel stammt aus dem Abschnitt über die [Stummschaltung von Medienattributen](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) aus dem HTML-Living-Standard. Es erklärt, dass das Video leise im Hintergrund abgespielt wird, bis der Benutzer die Aktion ausführt, um das Audio zu entstummen.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Steuerung der Geschwindigkeit

Dies scheint offensichtlich, aber da es so viele MIME-Typen gibt, variieren die Mechanismen zu ihrer Behandlung erheblich, und aus diesem Grund gibt es keine Einheitslösung für das Problem. Dies wird dadurch weiter kompliziert, dass selbst wie Dateien klassifiziert werden, kompliziert, wie sie gehandhabt werden sollten. Zum Beispiel wird das .gif-Dateiformat normalerweise als Bild verstanden, wird jedoch auch aufgrund seiner Fähigkeit zur Animation von einigen als Videoformat betrachtet. Eine umfassende Liste der Medientypen finden Sie auf der [IANA.org-Seite für Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

Das Erkennen dieser Formate ist keine beiläufige Übung. Möglicherweise sind Sie interessiert daran, den [MIME Sniffing](https://mimesniff.spec.whatwg.org/)-Standard bei whatwg.org zu verfolgen. Nahezu jede Art von Bild kann animiert werden; wie sie animiert werden, variiert und daher variiert auch die Kontrolle der Animation.

#### Häufig animierte Dateitypen

- **Bitmap**: Animation
- **Canvas**: Das MDN-Tutorial zu Canvas hat einen großartigen Abschnitt zu [grundlegenden Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` ist ein fester Bestandteil in Canvas-Animationen, aber es ist auch interessant zu sehen, wie es mit der Bildschirmaktualisierung interagiert. Siehe den Artikel ["Controlling fps with requestAnimationFrame?"](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe), in dem die Details der Implementierung von `requestAnimationFrame` vor dem Hintergrund der Bildschirmaktualisierungen diskutiert werden.
- **GIFs (Raster)**: Schwer zu handhaben, da die Steuerung ihrer Animation innerhalb der GIF-Dateien selbst liegt. Informationen zur Steuerung der Geschwindigkeit von GIFs finden sich unter W3C's ["G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)"](https://www.w3.org/TR/WCAG20-TECHS/G152.html). Ein großartiger Stack Overflow-Artikel zu diesem Thema ist, ["Can you control GIF animation with JavaScript?"](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**: Gilt als Variante, videobasierte Version von GIF. Das Format ist nicht standardisiert und muss auf eine "echte" Videodatei (z.B. eine .webm-Datei) verweisen, die an anderer Stelle existieren muss.
- **JPG (Raster)**
- **MNG (Raster)**: Multiple-image Network Graphics ist ein Grafikdateiformat für animierte Bilder. Wird auch von einigen als Videoformat angesehen.
- **PNG, APNG (Raster)**: Portable Network Graphics und Animated Portable Network Graphics können beide animiert werden.
- **SVGs (Vektorgrafik)**: Das MDN-Dokument ["SVG: Scalable Vector Graphics"](/de/docs/Web/SVG) stellt fest, dass „SVG ist ein textbasiertes offenes Webstandard. Es ist explizit darauf ausgelegt, mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) zu arbeiten.“ SVGs können wie in diesem Beispiel als Bild verwendet werden: `<img src="example.svg" alt="This is an image using a svg as a source">`. Das bedeutet, dass das Erscheinungsbild von SVGs und deren Animation mit CSS-Keyframes und Animationen gesteuert werden kann. Für die Interaktion mit JavaScript siehe die MDN-Dokumente zu [SVG Interfaces](/de/docs/Web/API/Document_Object_Model#svg_dom) und [Applying SVG effects to HTML content](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**: Dreidimensionale [Voxel](https://en.wikipedia.org/wiki/Voxel)-Rastergrafiken werden in Videospielen sowie in der medizinischen Bildgebung eingesetzt.

#### Text kann auch animiert werden

Übersetzungen und Transformationen können Text in einem div animieren und Schaden verursachen. Bewegender Text kann Anfälle auslösen, da er aus denselben Gründen, die auch bewegte Bilder betrifft, schädlich ist, daher vermeiden Sie es, Ihren Text zu animieren. Es ist ohnehin eine gute Idee, auf bewegten Text zu verzichten, da viele Bildschirmleser bewegten Text nicht lesen können und es eine schlechte Benutzererfahrung ist, selbst für Menschen ohne Seh- oder Gleichgewichtsstörungen.

### CSS für Animation

Im Stylesheet oder innerhalb des {{HTMLElement('style')}}-Elements können viele Optionen kombiniert werden, um dem Benutzer ein mächtiges Erlebnis zu bieten. Wir haben das `animation`-Eigentum bereits weiter oben in diesem Dokument erwähnt. Es ist tatsächlich eine Kurzform für alle Animationseigenschaften, einschließlich:

- `animation-play-state`
- `animation-duration` hat einen Wert von `<time>`; dies ist die Dauer, die eine Animation benötigt, um einen Zyklus zu vollenden. Dies kann entweder in Sekunden `(s)` oder Millisekunden `(ms)` angegeben werden. Ein Standardwert von `0s` zeigt an, dass keine Animation stattfinden sollte.
- `animation-timing-function`

Das Animationseigentum ist alleine schon mächtig, aber in Kombination mit anderen Eigenschaften und Abfragen, wie `prefers-reduced-motion`, kann ein leistungsstarkes Set an Optionen für den Benutzer eingerichtet werden. Das Festlegen der Eigenschaften `animation-duration` und `transition-duration` auf eine kurze Dauer anstatt sie auf `animation: none` und `transition: none` zu setzen, ermöglicht eine Sicherheitslösung, um Probleme zu vermeiden, falls es eine Abhängigkeit zu der Animation gibt, zu laufen.

### JavaScript-Animation

JavaScript wird häufig verwendet, um {{HTMLElement('canvas')}}-Elemente und SVGs zu steuern. Die meisten JavaScript-Codes, die auf HTML-Video angewendet werden, gelten auch für Audio. `HTMLMediaElement.playbackRate` wird verwendet, um Benutzersteuerungen zur Wiedergaberate für sowohl Videos als auch Audio zu implementieren. Ein Wert von 1.0 ist der Standard und als normale Geschwindigkeit angesehen; ein Wert von 0,5 ist die halbe Geschwindigkeit, ein Wert von 2,0 ist doppelt so schnell. Eine negative Zahl spielt das Video oder Audio rückwärts ab. Legen Sie die Wiedergaberateneigenschaft fest: `HTMLMediaElement.playbackRate = playbackSpeed`.

[document.getAnimations()](/de/docs/Web/API/Document/getAnimations) ist eine experimentelle Technologie und umfasst [CSS Animations](/de/docs/Web/CSS/CSS_animations), [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) und [Web Animations](/de/docs/Web/API/Web_Animations_API). Die MDN-Seite zu [Document.getAnimations()](/de/docs/Web/API/Document/getAnimations) bietet folgendes Codebeispiel dazu, wie man alle Animationen auf einer Seite auf halbe Geschwindigkeit verlangsamt:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Bildquellen für Animation

Einer der einfachsten Wege ist, mit einem Bild zu starten, das bereits existiert, es als Bildquelle zu verwenden und es dann zu animieren. Denken Sie daran, dass Sie GIFs, JPGs, PNGs, SVGs und andere Dateitypen hier als Bildquelle verwenden können, solange es sich um erlaubte Dateitypen und -größen in Ihrer Umgebung handelt. SVGs sind aufgrund von Sicherheitsbedenken oft nicht erlaubt. Das MDN-Dokument [Basic animations](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) bietet ausgezeichnete Beispiele hierfür, indem es mehrere Bildquellen für Sonne, Erde und Mond verwendet und mehrere Canvas-Methoden zur Kontrolle der Geschwindigkeit und Animation der Erde verwendet, während sie die Sonne umkreist und der Mond die Erde umkreist. Verwenden Sie den mit diesem Tutorial verfügbaren Codepen, um `ctx.rotate` im Code anzupassen, um zu sehen, wie sich die Animation verändert, wenn Änderungen vorgenommen werden.

#### Wenn Sie absolut, positiv ein blitzendes Animation verwenden müssen

Stellen Sie sicher, dass es eine Kontrolle darüber hat. Stellen Sie sicher, dass es ausgeschaltet ist, wenn der Betrachter es zum ersten Mal sieht, und dass ein Benutzer sich dafür entscheiden muss, die Animation zu sehen.

Ein Beispiel für ein Format, das dem Benutzer keine Steuerung bietet, ist eine gif-Datei. Animationsgeschwindigkeit wird innerhalb der gif-Bilder selbst gesteuert. Durch das Konvertieren eines animierten gifs zu einem Video können Steuerungen auf die Animation angewendet werden und gibt dem Benutzer Handlungsspielraum. Es gibt viele kostenlose Online-Konverter, die verwendet werden können, wie [EZGif](https://ezgif.com/) und [GIF to MP4](https://gif-2-mp4.com/).

#### Setzen Sie Benutz erwartungen

Geben Sie Benutzern einen Hinweis darauf, was passieren wird, bevor sie auf diesen Link klicken. Beschreiben Sie die Animation, die folgen wird. Siehe [WCAG 2.1 Erfolgskriterium 3.2.5 Änderung auf Anfrage](https://www.w3.org/TR/WCAG21/#change-on-request).

#### Halten Sie es klein

Wenn Sie absolut, positiv blitzendes haben müssen, halten Sie es klein. Generell sollten Sie die Größe des Blitzes auf einen Bereich von ungefähr 341 mal 256 Pixel oder kleiner beschränken. Diese Pixelgröße setzt voraus, dass ein Betrachter in typischer Entfernung vom Bildschirm entfernt ist. Wie bereits erwähnt, ist diese Größe möglicherweise zu groß, wenn das Bild aus nächster Nähe betrachtet wird, wie zum Beispiel in einem VR-Headset. WebVR ist eine offene Spezifikation, die es ermöglicht, VR im Browser zu erleben. WebVR kann auf Telefon, Computer oder Headset erlebt werden.

Wenn Sie für ein Spiel oder VR entwickelt, das eine Brille verwendet, **oder KANN von einer Brille verwendet werden**, wie im Firefox Reality (einem Browser für virtuelle Realität), stellen Sie sicher, dass die Größe des Rechtecks viel kleiner als 341 mal 256 Pixel ist, weil das Bild viel näher an den Augen eines Benutzers ist.

#### Reduzieren Sie den Kontrast

Normalerweise ist höherer Kontrast eine gute Sache, wenn es um Barrierefreiheit geht. Je größer der Kontrast einer Textfarbe zu ihrem Hintergrund (technisch als _Luminanz-Kontrastverhältnis_ bezeichnet, laut der W3.org-Seite zu [Farben mit gutem Kontrast](https://www.w3.org/WAI/perspective-videos/contrast/)), desto einfacher ist solch ein Inhalt zu lesen. Benutzer mit Sehbehinderungen sind besonders dankbar für Bemühungen, einen hohen Kontrast von Text zu seinem Hintergrund zu gewährleisten. Wenn der Inhalt animiert ist, jedoch, **_das Reduzieren_** des Kontrasts ist tatsächlich ein Weg, um die Wahrscheinlichkeit zu reduzieren, dass der animierte Inhalt Anfälle verursacht. Senken Sie das Kontrastverhältnis, wenn drei Blitze innerhalb einer Sekunde erkannt werden.

Das Kontrastverhältnis ist in [WCAG 2.1](https://www.w3.org/TR/WCAG21/) wie folgt definiert:

- _Kontrastverhältnis_

  - : (L1 + 0.05) / (L2 + 0.05), wobei

    - L1 die [relative Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der helleren der Farben ist, und
    - L2 die [relative Helligkeit](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) der dunkleren der Farben.

Es ist am besten, wenn Sie den Kontrast anpassen können, bevor er hochgeladen oder im Web veröffentlicht wird. Für Videos und animierte GIFs ist die Adobe Suite of Products eine phänomenale Ressource für traditionelle Bilder. Auch für Bilder ist ein Online-Tool verfügbar: pinetools.com's [Helligkeits- und Kontrast-Online](https://pinetools.com/brightness-contrast-image). Wenn Sie vorhaben, animierte GIFs zu erstellen, zum Beispiel, beginnen Sie mit einem, das ein niedrigeres Kontrastverhältnis hat.

JavaScript ist ebenfalls eine Option, um Kontrast dynamisch zu reduzieren. Hier ist ein Codebeispiel aus dem Abschnitt ["Beispiel: Festlegen der Hintergrundfarbe eines Absatzes"](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#setting_the_background_color_of_a_paragraph) aus dem MDN-Dokument [Traversing an HTML-Tabelle mit JavaScript und DOM-Interfaces](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). Beachten Sie, dass die Farbe im Beispiel im **RGB**-Farbraum beschrieben wird.

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

Wie bereits in diesem Dokument erwähnt, veranstaltete die Epilepsy Foundation of America im August 2004 einen Workshop, um einen Expertenkonsens über photosensitive Anfälle zu entwickeln. Zu ihren Erkenntnissen gehörte das Verständnis, dass „_A flash is a potential hazard if it has luminance at least 20 cd/m², occurs at a frequency of least 3 Hz, and occupies a solid visual angle of at least 0.006 steradians (about 10% of the central visual field or 25% of screen area at typical viewing distances). A transition to or from saturated red also is considered a risk._“ Sie stellen in demselben Konsens auch fest: „_Irrespective of luminance, a transition to or from a saturated red is also considered a risk._“

### Alternative CSS-Stiles zur Verfügung stellen

Mit dem Verständnis, dass viele Animationen und blitzende Inhalte über CSS-Methoden kontrolliert werden können, ist es wichtig, Alternativen für Benutzer zu erforschen und die Kontrolle dieser Optionen bequem und sichtbar zu machen.

#### Alternative Stylesheets

Moderne Browser zeigen die alternativen CSS-Stile in alternativen Stylesheets an, wenn die Benutzer wissen, wo sie suchen müssen. In einigen Fällen werden die alternativen Stile angezeigt, wenn die Benutzer durch das Ansichtsmenü gehen, in anderen Fällen erscheinen sie in den Einstellungen, manchmal beides. Nicht alle Benutzer wissen, dass diese Optionen über den Browser oder die Einstellungen verfügbar sind, daher lohnt es sich, es auf die altmodische Weise zu machen, mit offensichtlichen Knöpfen oder Links, um den Stil zu ändern, so dass Benutzer sie sehen können. Das tun wird nicht mit der Fähigkeit des Browsers, die alternativen Stylesheets zu lesen, oder der Fähigkeit des Benutzers, die Präferenzen in den Einstellungen zu setzen, in Konflikt geraten oder sie überschreiben.

Es ist wichtig zu wissen, dass bestimmte Benutzer, wie diejenigen, die sich auf Sprachsteuerungssysteme verlassen, häufig auf Legacy-Knöpfe und -Links angewiesen sind, da ihre Behinderung sie daran hindert, eine Maus zu verwenden oder auf Touch-Ereignisse auf mobilen Tablets zugreifen zu können.

Gängige Methoden, um alternative Stylesheets in Ihre HTML-Dokumente einzubinden, sind das Verwenden des {{HTMLElement('link')}}-Elements und {{CSSxref('@import')}}.

#### Das {{HTMLElement('link')}}-Element

Verwenden Sie das {{HTMLElement('link')}}-Element zusammen mit und gemeinsam mit den Attributen von `rel="alternate stylesheet"` und für den Titel, `title="…"` im {{HTMLElement('head')}}-Abschnitt der Webseite.

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

**{{CSSxref('@import')}}** ist auch eine Möglichkeit, Stylesheets einzufügen, aber es wird nicht ganz so gut unterstützt wie das {{HTMLElement('link')}}-Element.

```html
<style>
  @import url(alternate1.css);
  @import url(alternate2.css);
</style>
```

Indem Sie alternative Stylesheets verwenden (vergessen Sie nicht, die Titel hinzuzufügen), richten Sie es so ein, dass Benutzer in der Lage sind, ihre Browser zu verwenden, um alternative Stile zu wählen.

### Dynamisches Stilwechseln

Ein Problem mit dem Aufwand, dass sich auf den Browser verlassen wird, um alternative Stile anzuzeigen, ist, dass nicht alle Benutzer technisch versiert genug sind, um die alternativen Stile zu entdecken. Oder, aufgrund ihrer Behinderung, nicht dazu in der Lage sind. Knöpfe oder Links machen es vielen dankbaren Benutzern klar, dass Optionen verfügbar sind. Es gibt viele Möglichkeiten, Umschaltknöpfe hinzuzufügen, um dem Benutzer zu erlauben, zu den verschiedenen Stylesheets zu wechseln. Allerdings sind die Verwendung von alternativen Stylesheets nicht die einzige Option. Eine andere Option ist, den Stil der Seite selbst zu manipulieren. Laut dem MDN-Dokument [Verwenden von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), „_where possible, it really is best practice to dynamically manipulate classes via the [`className`](/de/docs/Web/API/Element/className) property since the ultimate appearance of all of the styling hooks can be controlled in a single stylesheet_.“ Eines der besten Beispiele dafür ist auf der W3C-Seite ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Extreme Fälle: Nur-Text-Alternativen

Ein separates, alternatives Stylesheet, das verhindert, dass Bilder angezeigt werden, ist leicht zu erstellen. Es ist eine drakonische Lösung; jedoch eine, die manchmal für Lehrer und andere öffentliche Dienstleister, die Menschen mit extremen Empfindlichkeiten dienen müssen, notwendig ist. Diese öffentliche Dienstleistungsmitarbeiter können ihre Entwickler darum bitten, ein spezielles alternatives Stylesheet zu entwickeln, das `display: none` verwendet. Hier ist, wie man es mit CSS macht:

```css
img {
  display: none;
}
```

#### Nutzen Sie Medienabfragen mit {{HTMLElement('style')}}

Indem Sie Medienabfragen einrichten, ermöglichen Sie Benutzern die Steuerung durch den Browser oder das Betriebssystem. Siehe das MDN-Dokument [Barrierefreiheit: Was Benutzer tun können, um sicherer zu browsen](/de/docs/Web/Accessibility/Guides/Browsing_safely), um mehr darüber zu erfahren, wie ein Benutzer Zugriff auf die Bedienelemente hat.

#### `prefers-reduced-motion`

Die Unterstützung von `prefers-reduced-motion` in modernen Browsern wächst.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Um ein tolles Beispiel für die Verwendung des Codes `prefers-reduced-motion` zu sehen, besuchen Sie das MDN-Dokument [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder sehen das folgende Beispiel aus dem Abschnitt ["New in Chrome 74"](https://developer.chrome.com/blog/new-in-chrome-74/).

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

Es gibt ein mächtiges Werkzeug, das Entwicklern über Window.matchMedia() zur Verfügung steht. Eine großartige Ressource ist das MDN-Dokument zu [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

#### Medienaktualisierungsfunktion

Je öfter der Bildschirm aktualisiert wird, desto stabiler erscheint er dem menschlichen Auge und desto weniger „flackert“ er. Die überwiegende Mehrheit der modernen Technologie aktualisiert mit einer Rate, die keine Probleme mit Photosensitivität verursacht. Allerdings ist nicht jeder wohlhabend genug, um sich die neueste Technologie leisten zu können: Ältere oder leistungsschwache Computer können niedrige Aktualisierungsraten haben. [AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) beschreibt mehr Details zu Aktualisierungsraten.

Ein sehr alter Artikel, Tech Republics ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), hatte eine interessante Antwort in Bezug auf die Aktualisierungsraten in Hz:

- „_This effect is noticeable, and documented, up to 70 Hz._“
- „_These studies would seem to indicate that you should stay away from refresh rates under 70 Hz, and use a rate not divisible by 10._“

Eric Bailey von CSS-Tricks fand eine innovative Verwendung der Update-Funktion, die in Kombination mit animation-duration oder transition-duration verwendet wird, um mit einer Geschwindigkeit zu enden, die für das menschliche Auge nicht wahrnehmbar ist. Mit anderen Worten, Erics Techniken adressieren das Problem der Aktualisierungsrate. Das untenstehende CSS stammt aus dem CSS-Tricks-Artikel [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

Von W3.org's Seite zu [Media Queries 4](https://www.w3.org/TR/mediaqueries-4/):

Die `update`-Medienfunktion wird verwendet, um die Fähigkeit des Ausgabegerätes zu ermitteln, das Erscheinungsbild von Inhalten zu ändern, sobald sie gerendert wurden. Sie hat die Werte „none“, „slow“ und „fast“.

## Entwicklungs- & Experimentierfunktionen

### Media Queries Level 5

EnvironmentMQ (Geplant in Media Queries Level 5)

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) hat drei gültige Werte: dim, normal und washed. Interessanterweise verzichtet die Spezifikation auf eine genaue Definition der drei Stufen in einer Lux-Messung, weil Geräte mit einem Lichtsensor normalerweise die Bildschirmhelligkeit automatisch anpassen. Die Spezifikationen weisen auch auf die Unterschiede in der Technologie hin, wie z.B. E-Ink, das auch bei hellem Tageslicht lesbar bleibt, im Gegensatz zu Flüssigkristallen, die dies nicht sind.
- `environment-blending`
  - : Aus dem W3C's Draft-Dokument Media Queries Level 5: „_The [`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) media feature is used to query the characteristics of the user's display so the author can adjust the style of the document. An author might choose to adjust the visuals and/or layout of the page depending on the display technology to increase the appeal or improve legibility._“

#### Benutzerpräferenzmedienfunktionen (Geplant in Media Queries Level 5)

[Benutzerpräferenzmedienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) im [W3C Editor's Draft Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) sind besonders vielversprechend, um den Benutzern Kontrolle über Medien zu geben. Hier sind einige Highlights:

- `inverted-colors`
  - : Laut dem Abschnitt [Benutzerpräferenzmedienfunktionen](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), „_The [`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) media feature indicates whether the content is displayed normally, or whether colors have been inverted._“
- [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)
  - : In [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) erzwingt der Benutzeragent die vom Benutzer bevorzugte Farbpalette auf der Seite und überschreibt die vom Autor ausgewählten Farben. Aus W3Cs Draft-Dokument Media Queries Level 5 Abschnitt über forced-colors: „_The forced-colors media feature is used to detect if the user agent has enabled a [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) where it enforces a user-chosen limited color palette on the page._“ Der Benutzer muss auf diese Fähigkeit aufmerksam gemacht werden, und es muss sichergestellt werden, dass es mit dem geeigneten Wert für die Medienabfrage `prefers-color-scheme` gut zusammenarbeitet.
- `light-level`
  - : Aus W3Cs Draft-Dokument Media Queries Level 5 Bereich über light-level: „_The [`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) media feature is used to query about the ambient light-level in which the device is used, to allow the author to adjust style of the document in response._“ Dies wird ein Segen sein für diejenigen, die Probleme mit den motorischen Fähigkeiten haben oder für einige mit kognitiven Schwierigkeiten, die nicht in der Lage sind, den richtigen „Knopf“ zu finden, um ihre Bildschirmeinstellungen zu ändern.
- prefers-contrast
  - : Aus W3Cs Draft-Dokument Media Queries Level 5 Abschnitt [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): „_The `prefers-contrast` media feature is used to detect if the user has requested the system increase or decrease the amount of contrast between adjacent colors. For example, many users have difficulty reading text that has a small difference in contrast to the text background and would prefer a larger contrast._“ Manchmal kann es ein Übermaß an Kontrast geben; ein Halo-Effekt um Text kann in solchen Situationen auftreten und tatsächlich die Lesbarkeit verringern. Die Kontrolle des Kontrasts in die Hände des Benutzers zu legen, ist ein definitives Geschenk für Barrierefreiheit.

#### `MediaQueryList`-Schnittstelle

Der Abschnitt 4.2 von den CSSWG.org-Entwürfen integriert mit der [Ereignisschleife](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), die in HTML definiert ist. [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) für das [`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist)-Objekt. Siehe das MDN-Dokument zu [MediaQueryList](/de/docs/Web/API/MediaQueryList) für mehr Informationen.

#### Hilfe und Unterstützung zur Personalisierung

Die Anforderung für die `literal`-Eigenschaft wird aus [Abschnitt 23 Nicht-wörtlicher Text und Bilder](https://www.w3.org/TR/personalization-semantics-help-1.0/) genommen.

**Anforderung:** Manche Benutzer können nicht-wörtlichen Text und Symbole wie Metaphern, Idiome usw. nicht verstehen. Die `literal`-Eigenschaft soll Text oder Bilder als nicht-wörtlich kennzeichnen und dem Autor ermöglichen, nicht-wörtlichen Text und Bilder für Benutzer zu erklären.

#### Übergänge (für CSS und SVG)

Folgendes stammt aus dem [Web Animations model](https://www.w3.org/TR/web-animations-1/) CSSWG.org-Entwürfen

Das Web-Animationsmodell umfasst die notwendigen Funktionen für den Ausdruck von [CSS-Übergängen](https://drafts.csswg.org/web-animations/#biblio-css-transitions-1), [CSS-Animationen](https://drafts.csswg.org/web-animations/#biblio-css-animations-1) und [SVG](https://drafts.csswg.org/web-animations/#biblio-svg11).

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit: Verständnis von Farbe und Luminanz](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Canvas Anleitung)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [\<color>](/de/docs/Web/CSS/color_value)
- [Document Object Model](/de/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/de/docs/Web/API/MediaQueryList)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: 2D- und 3D-Grafiken für das Web](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Farbe

- [Color Tutorial: Beschreibung von Farbe](https://colortutorial.design/) Tom Jewett
- [Formel zur Bestimmung der Helligkeit von RGB-Farben](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Diskussions-Thread
- [Wie die Farbe Rot unser Verhalten beeinflusst](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American von Susana Martinez-Conde, Stephen L. Macknik am 1. November 2014

### Diskussionen

- [Probleme mit der Blitzdefinition in WCAG 2.0 #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Verstehen 2.3.1 - fehlende/undeutliche Dimensionsdefinitionen #585](https://github.com/w3c/wcag/issues/585)

### Epilepsie und Anfälle

- [Erhellung der Photosensitivität, einer der komplexesten Zustände der Epilepsie](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Bestimmte Personen werden mit einer besonderen Empfindlichkeit gegenüber flackernden Lichtern oder kontrastreichen visuellen Mustern, wie Streifen, Gittern und Schachbrettmustern, geboren. Aufgrund dieses Zustands produziert ihr Gehirn anfallsartige Entladungen, wenn es dieser Art visueller Stimulation ausgesetzt wird."_
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image) können auch ohne Bewegung oder Flackern Anfälle bei Patienten mit photosensitiver Epilepsie auslösen."_
- [Photosensitive Anfälle. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive Anfälle werden durch flackernde oder blitzende Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Durch Licht und Muster induzierte Anfälle: Expertenkonsens der Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/16146438/) Epilepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Arbeitsgruppe](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Barrierefreiheit-Masterliste](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Herausgeber

### Harding

Zusammen mit dem PEAT-Tool wird allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Harding Flash und Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmanagement und -messung — Teil 2-2: Farbmanagement — Erweitertes RGB-Farbraum — scRGB

### Photosensitive Epilepsie Analyse-Tool

Zusammen mit dem Harding-Tool wird allgemein als einer der beiden "Goldstandards" für die Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Verwenden von PEAT zur Erstellung von anfallsfreien Web-Animationen](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Erläuterung zu Personalisierungs-Semantiken 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Arbeitsentwurf
- [WAI-Adapt: Tools-Modul](https://www.w3.org/TR/adapt-tools/) Arbeitsentwurf
- [Drei Blitze oder darunter Schwellenwert Verständnis SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, enthält aber einige Erklärungen zu in den WCAG 2.1-Kriterien gemachten Referenzen)
- [Drei Blitze oder darunter Schwellenwert Verständnis Erfolgskriterium 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Verständnis Erfolgskriterien 1.4.3: Kontrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web-Animations-Modell](https://www.w3.org/TR/web-animations-1/) W3C Arbeitsentwurf
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition der relativen Lichtstärke
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Herzlichster Dank an Teal; Wayne Dick von der [Low Vision Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program und Clinical Neurophysiology Laboratory an der USF und TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige, großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _allen_ äußerst dankbar gegenüber dem Trace Research & Development Center, dass sie ihr erstaunliches Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/), kostenlos zur Verfügung stellen.
