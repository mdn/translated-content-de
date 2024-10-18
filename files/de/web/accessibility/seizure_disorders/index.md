---
title: Barrierefreiheit im Web hinsichtlich Anfällen und körperlichen Reaktionen
slug: Web/Accessibility/Seizure_disorders
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{AccessibilitySidebar}}

Dieser Artikel führt in Konzepte ein, wie Webinhalte für Personen mit vestibulären Störungen zugänglich gemacht werden können und wie man Inhalte misst und vermeidet, die Anfälle und/oder andere körperliche Reaktionen auslösen.

## Überblick

### Anfälle

Anfälle, die durch Licht ausgelöst werden, sind als fotosensitive Epilepsie bekannt. Inhalte, die flackern, blitzen oder blinken, können diese Form der Epilepsie auslösen. Webtechnologien, die Video, animierte GIFs, animierte PNGs, animierte SVGs, Canvas sowie CSS- oder JavaScript-Animationen nutzen, können alle Inhalte erzeugen, die Anfälle oder andere lähmende körperliche Reaktionen hervorrufen. Bestimmte visuelle Muster, insbesondere Streifen, können ebenfalls körperliche Reaktionen hervorrufen, auch wenn sie nicht animiert sind. Fotosensitive Epilepsie ist eigentlich eine Art von "Reflexepilepsie" – Anfälle, die als Reaktion auf einen Auslöser auftreten. Bei der fotosensitiven Epilepsie werden Anfälle speziell durch blitzende Lichter ausgelöst, aber andere Arten von Reflexepilepsien können durch das Lesen oder durch Geräusche ausgelöst werden. Auch Muster und Bilder können Epilepsie auslösen.

Die Tatsache, dass statische Bilder Anfälle und andere Störungen verursachen können, ist in Artikeln wie ["Gamma Oscillations and photosensitive epilepsy"](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062) dokumentiert, wo es heißt: "_Bestimmte visuelle Bilder können, selbst in Abwesenheit von Bewegung oder Flackern, Anfälle bei Patienten mit fotosensitiver Epilepsie auslösen_". Die Epilepsy Foundation spricht in ihrem Artikel ["Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions"](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) über statische Bilder und Muster: "_Statische oder bewegende Muster aus erkennbaren hellen und dunklen Streifen haben die gleiche Wirkung wie blitzende Lichter aufgrund des Wechsels zwischen dunklen und hellen Bereichen._" Die Epilepsy Foundation of America Working Group kann das Problem ein wenig "quantifizieren": _"Ein Muster mit dem Potenzial, Anfälle zu provozieren, enthält klar erkennbare Streifen, die mehr als fünf helle-dunkle Paare in jeder Ausrichtung aufweisen."_ Neben Streifen sind auch karierte Muster bekannt dafür, fotosensitive Anfälle auszulösen, laut [Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Obwohl statische Bilder als Auslöser möglich sind, sind sie weniger konsistent. Der Auslöser, der gut etabliert und stark ist, sind blitzende/strobe Lichter. Dr. Selim Benbadis vom Comprehensive Epilepsy Program der USF bemerkt: _"Das Einzige, was wirklich dokumentiert ist, sind blitzende Lichter, die Anfälle bei Patienten mit fotosensitiver Epilepsie auslösen können. Nur wenige Epilepsietypen sind fotosensitiv, und die überwältigende Mehrheit der Epilepsien ist es nicht."_ Neben durch Fotosensitivität ausgelösten Anfällen kann das Hören bestimmter Musikstücke auch sogenannte musikogene Anfälle auslösen, obwohl diese Art von Anfällen weitaus seltener zu sein scheint. Für einen großartigen Einstieg in das Thema musikogene Anfälle besuchen Sie die Webseite von Epilepsy Ontario über [Musicogenic Seizures](https://epilepsyontario.org/musicogenic-seizures/).

Anfälle und Epilepsie sind nicht dasselbe. In ihrem Artikel ["A Revised Definition of Epilepsy"](https://www.epilepsy.com/stories/revised-definition-epilepsy) merkt die Epilepsy Foundation an: "_Ein Anfall ist ein Ereignis und Epilepsie ist die Krankheit, die wiederkehrende unprovozierte Anfälle beinhaltet_." Laut der Seite der Epilepsy Foundation ["How Serious Are Seizures?"](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures) ist "_Der plötzliche unerwartete Tod bei Epilepsie (SUDEP) wahrscheinlich die häufigste krankheitsbedingte Todesursache bei Epilepsie. Es ist nicht häufig, aber es ist ein sehr reales Problem und Menschen müssen sich seines Risikos bewusst sein_."

Der Punkt ist, Anfälle können und sind definitiv tödlich, und Entwickler und Designer sind unglaublich wichtig, um das Web für diejenigen sicherer zu machen, die empfindlich auf fotosensitive oder musikogene Auslöser reagieren.

Anfälle können tödlich sein, aber selbst die, die "nur" lähmend sind, können von solcher Schwere sein, dass sie den Benutzer arbeitsunfähig machen. Andere Störungen, wie Desorientierung, Übelkeit, Erbrechen und mehr, können ebenfalls so schwerwiegend sein, dass der Benutzer nicht mehr in der Lage ist, zu funktionieren. Der Artikel der Epilepsy Foundation, ["Photosensitivity and Seizures"](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity), listet Auslöser auf, die bei fotosensitiven Personen Anfälle verursachen können; hier ist ein Auszug aus dieser Liste:

- Fernsehbildschirme oder Computermonitore aufgrund des Flackerns oder rollender Bilder.
- Bestimmte Videospiele oder Fernsehsendungen, die schnelle Blitze oder wechselnde Muster in verschiedenen Farben enthalten.
- Intensive Strobelichter wie visuelle Feueralarme.
- Natürliches Licht, wie Sonnenlicht, besonders wenn es auf Wasser schimmert, durch Bäume oder durch die Lamellen von Jalousien flackert.
- Bestimmte visuelle Muster, besonders Streifen in kontrastierenden Farben.

Dieser Artikel geht weiter davon aus, dass viele Faktoren kombiniert werden müssen, um die fotosensitive Reaktion auszulösen. Bemerkenswert ist, dass die Wellenlänge des Lichts als möglicher Faktor einbezogen wird; Wellenlängen im roten Teil des Spektrums scheinen besonders problematisch zu sein. Im Artikel, ["Understanding WCAG 2.0 Three Flashes or Below Threshold"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html), heißt es allgemein: _"Individuen mit fotosensitiven Anfallsleiden können durch Inhalte, die mit bestimmten Frequenzen für mehr als ein paar Blitze blitzen, Anfälle auslösen"_ und geht sehr spezifisch weiter zu: "_Menschen sind empfindlicher auf rotes Blitzen als auf andere Farben, daher wird ein spezieller Test für gesättigtes rotes Blitzen bereitgestellt_".

Sie brauchen nicht einmal ein Bild oder Video, um Schaden zu verursachen. Ein {{HTMLElement('div')}}-Element, das eingestellt ist, um Farbe und Helligkeit mit hoher Frequenz zu ändern, was leicht mit JavaScript zu bewerkstelligen ist, kann echten Schaden verursachen. Und Flackern kann überall auftreten. Zum Beispiel können "Spinner", die häufig verwendet werden, um anzuzeigen, während Seiten geladen werden, leicht "flackern", während sie sich drehen.

Zusätzliche Bedenken bestehen für Einzelpersonen mit motorischen Problemen. Zum Beispiel weist die Seite für das Trace Research & Development Center's [Photosensitive Epilepsy Analysis Tool](https://trace.umd.edu/peat/) darauf hin, dass _"Fotosensitive Anfälle durch bestimmte Arten des Flackerns in Web- oder Computerinhalten ausgelöst werden können, einschließlich Mausbewegungen, die große Bereiche des Bildschirms schnell wiederholt ein- und ausschalten."_

## Epilepsie und Anfälle

- [Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions-0) Epilepsy Foundation: _"Gewisse Individuen werden mit einer besonderen Empfindlichkeit gegenüber flackernden Lichtern oder kontrastierenden visuellen Mustern, wie Streifen, Gitter und Schachbrettmuster, geboren. Aufgrund dieser Empfindlichkeit produziert ihr Gehirn anfallsartige Entladungen, wenn es dieser Art von visueller Stimulation ausgesetzt wird."_
- [Gamma oscillations and photosensitive epilepsy](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8. Mai 2017, Seiten R336-R338: _"Bestimmte [visuelle Bilder](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), auch in Abwesenheit von Bewegung oder Flackern, können bei Patienten mit fotosensitiver Epilepsie Anfälle auslösen."_
- [Photosensitive Seizures. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Fotosensitive Anfälle werden durch flackernde oder blinkende Lichter ausgelöst. Diese Anfälle können auch durch bestimmte Muster wie Streifen ausgelöst werden._"
- [Photic-and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### Harding

Neben dem PEAT-Tool gilt es allgemein als eines der beiden "Goldstandards" zur Analyse von Blitzen.

- [Harding Flash and Pattern Analyzer](https://www.hardingfpa.com/)

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia-Systeme und -Geräte — Farbmessung und Farbmanagement — Teil 2-2: Farbmanagement — Erweiterter RGB-Farbraum — scRGB

### Photosensitive Epilepsy Analysis Tool

Neben dem Harding-Tool wird es allgemein als eines der beiden "Goldstandards" zur Analyse von Blitzen anerkannt.

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Using PEAT To Create Seizureless Web Animations](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [Personalization Semantics Explainer 1.0](https://www.w3.org/TR/personalization-semantics-1.0/). Entwurfsdokument
- [Personalization Tools 1.0](https://www.w3.org/TR/2019/WD-personalization-semantics-tools-1.0-20190711/) Entwurfsdokument
- [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Verständnis von WCAG 2.0 (Älter, aber enthält einige Erklärungen zu den in den WCAG 2.1 Kriterien gemachten Verweisen)
- [Three Flashes or Below Threshold Understanding Success Criterion 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Verständnis von WCAG 2.1
- [Understanding Success Criteria 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Animations Model](https://www.w3.org/TR/web-animations-1/) W3C Entwurfsdokument
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef) Definition von relativer Leuchtdichte
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

## Mitwirkende

Ein herzliches Dankeschön an Teal; Wayne Dick von der [Low Vision Task Force of the W3C](https://www.w3.org/WAI/GL/task-forces/low-vision-a11y-tf/); Tom Jewett und Eric Eggert von [Knowbility](https://knowbility.org/); Jim Allan vom [Diagram Center](http://diagramcenter.org/); und Dr. Selim R. Benbadis, Direktor, [Comprehensive Epilepsy Program and Clinical Neurophysiology Laboratory at USF and TGH in Tampa, Florida](https://health.usf.edu/medicine/neurology/epilepsy) für ihre großartige Unterstützung und Diskussionen zu diesem Thema.

Wir sind _alle_ dem Trace Research & Development Center enorm dankbar dafür, dass sie ihr erstaunliches Tool, das [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) kostenlos zur Verfügung stellen.
