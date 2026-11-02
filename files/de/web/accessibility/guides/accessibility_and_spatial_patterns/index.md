---
title: Barrierefreiheit und räumliche Muster
short-title: Räumliche Muster
slug: Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns
l10n:
  sourceCommit: 19533e5be1416cc8f68f61810a74de5f4c665697
---

Dieses Dokument beschreibt visuelle Muster, die bei Menschen mit photosensitiver Epilepsie, vestibulären Störungen oder anderen Wahrnehmungsproblemen körperliche Symptome auslösen können.

## Räumliche Lokalisierung

Die NASA untersuchte die Farbwahrnehmung und stellte fest, dass der Leuchtdichtekontrast einen großen Einfluss darauf hat, wie Farben wahrgenommen werden. Die beiden folgenden Bilder stammen aus der NASA-Forschung, genauer aus dem Artikel „[Designing With Blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)“. Sie vergleichen, wie stabil Gelb und Rot räumlich lokalisiert werden.

![Gelbe und schwarze vertikale Balken auf weißem Hintergrund.](yellow_edge_3.gif) ![Rote und schwarze vertikale Balken auf grauem Hintergrund.](yellow_edge_4.gif)

Beide Farben haben ungefähr die gleiche Leuchtdichte wie ihr jeweiliger Hintergrund. Der Versatz und der Abstand zwischen den farbigen und den schwarzen Balken sind bei Gelb und Rot tatsächlich gleich, bei Gelb aber visuell deutlich weniger auffällig. Wie es in dem Artikel heißt:

> Symbole, die die gleiche Leuchtdichte wie ihr Hintergrund haben, lassen sich räumlich und zeitlich weniger sicher lokalisieren als Symbole mit höherem Leuchtdichtekontrast. Sie scheinen visuell zu „schweben“ oder von benachbarten Symbolen mit hohem Leuchtdichtekontrast „angezogen“ zu werden. Dieses Phänomen scheint besonders bei Kombinationen aus Symbol und Hintergrund problematisch zu sein, die sich nur im Blaukanal unterscheiden.

## Abstand zwischen Streifen

Photosensitive Anfälle können sowohl durch statische Bilder als auch durch Animationen ausgelöst werden. Der zugrunde liegende Mechanismus ist kaum verstanden, steht aber vermutlich mit „Gamma-Oszillationen“ in Verbindung, die im Gehirn entstehen. Diese Oszillationen sind eine andere Art von Reaktion als die übrigen neurologischen Reaktionen, die als Auslöser photosensitiver Anfälle gelten.

Streifen und Muster gehören zu den typischen problematischen Bildern; Streifen wurden dabei am gründlichsten untersucht. Ein potenzielles Risiko besteht, wenn ein Bild mehr als fünf Hell-Dunkel-Streifenpaare in beliebiger Ausrichtung enthält. Die Streifen können parallel, radial, gekrümmt oder gerade sein und auch durch Reihen sich wiederholender Elemente entstehen.

Im Jahr 2005 untersuchten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Beurteilung gemusterter Bilder, die Anfälle auslösen können. Sie reduzierten die Richtlinien auf ihre wesentlichen Kriterien und entwickelten einen überraschend einfachen, aber aussagekräftigen [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x). Diesen veröffentlichten sie in der Arbeit **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)**.

> [!NOTE]
> Die zur Beurteilung des Materials erforderlichen Schritte lassen sich auf Folgendes reduzieren:
>
> Betrachten Sie den Bildschirm:
>
> - Sind mehr als fünf Streifen zu sehen?
> - Falls ja: Sind sie länger als 0,5 Sekunden zu sehen?
> - Falls ja: Überschreitet die Helligkeit den angegebenen Grenzwert?
> - Falls ja: Ordnen Sie die Bewegung des Musters ein.
> - Werden die Richtlinien verletzt?
>
> Falls ja, verringern Sie die Helligkeit.

## Text und Innenabstand

Die WCAG-Standards zur Kontrastwahrnehmung berücksichtigen den Einfluss des Innenabstands nicht. Beispielsweise ist blauer Text auf grauem Hintergrund leichter wahrzunehmen, wenn er unmittelbar von Schwarz statt von Weiß umgeben ist. Farben können auch „lokal“ adaptiert wahrgenommen werden. Die Schlussfolgerung: Der Innenabstand ist wichtig.

## Mathematik

Räumliches Denken beeinflusst das Erlernen von Mathematik. Folglich wirken sich die räumlichen Beziehungen in der Darstellung mathematischer Inhalte auf das Verständnis aus. Webentwickler können durch die Art der Darstellung Einfluss darauf nehmen. Animationen spielen dabei eine wichtige Rolle. Für das räumliche Verständnis mathematischer Inhalte ist beispielsweise entscheidend, wie ein Objekt aus verschiedenen Blickwinkeln aussieht, wenn es gedreht wird, wie Objekte im Querschnitt aussehen und wie sie räumlich zueinander angeordnet sind.

## Braille

Moderne Technologien ermöglichen es auch Menschen ohne Fachkenntnisse, Brailleschrift zu drucken. Mit Adobe Illustrator lässt sich beispielsweise ADA-Brailleschrift für den Druck setzen.

Räumliche Muster für blinde Menschen korrekt darzustellen, ist für die Barrierefreiheit entscheidend. Brailleschrift zu beherrschen, reicht beispielsweise nicht aus: Die Braillepunkte müssen so weit voneinander entfernt sein, dass Menschen sie ertasten und lesen können. Der menschliche Tastsinn kann Braillepunkte, die zu dicht beieinander oder zu weit auseinanderliegen, nicht ohne Weiteres unterscheiden.

Auch um jedes Braillezeichen herum muss genügend Platz sein. Wer Brailleschrift liest, legt einen Finger nicht einfach „auf“ ein Zeichen, sondern bewegt ihn darüber – ähnlich wie eine sehende Person ihre Augen über den Text auf einer Seite bewegt.

Wie viel Platz zur Verfügung steht, kann vom verwendeten MIME-Typ und dessen Version abhängen. Beispielsweise können sich Rahmen bei SVG sowohl nach innen als auch nach außen über die angegebenen Abmessungen erstrecken. Bei neueren SVG-Versionen können sie vollständig nach außen verlaufen und so den Platz um das SVG verringern, der für dessen Wahrnehmung wichtig ist.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer für sichereres Surfen tun können](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Barrierefreiheit im Web bei Anfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Barrierefreiheit im Web: Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)

### Braille

- [Teil 3: Schritt-für-Schritt-Leitfaden zum korrekten Setzen von ADA-Brailleschrift in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Mathematik

- [Räumliches Denken: Warum Gespräche über Mathematik mehr als Zahlen betreffen](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Die Rolle lokaler Adaptation und von Referenzniveaus](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Charakterisierung anfallsauslösender Musterbilder und Optimierung von Richtlinien zu ihrer Vermeidung](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett und Graham Harding
