---
title: Barrierefreiheit und räumliche Muster
short-title: Räumliche Muster
slug: Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieses Dokument beschreibt visuelle Muster, die physische Symptome bei Menschen hervorrufen können, die an photosensitiver Epilepsie, vestibulären Störungen oder anderen Wahrnehmungsproblemen leiden.

## Räumliche Lokalisierung

Die NASA führte Forschungen zur Farbwahrnehmung durch und stellte fest, dass der Kontrast der Helligkeit entscheidend ist, wie Farben wahrgenommen werden. Die beiden Bilder unten stammen aus der NASA-Forschung, insbesondere aus dem Artikel "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)"

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind in etwa isoluminant mit ihrem Hintergrund. Die Fehlanpassung und der Abstand zwischen den chromatischen Balken und schwarzen Balken sind physisch gleich bei Gelb und Rot, aber bei Gelb visuell viel weniger offensichtlich.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind in etwa isoluminant mit ihrem Hintergrund. Die Fehlanpassung und der Abstand zwischen den chromatischen Balken und schwarzen Balken sind physisch gleich bei Gelb und Rot, aber bei Gelb visuell viel weniger offensichtlich.](yellow_edge_4.gif)

"_**Räumliche Lokalisierung.** Symbole, die dieselbe Helligkeit wie ihr Hintergrund haben, sind in Raum und Zeit wahrnehmbar weniger sicher lokalisiert als Symbole mit höherem Helligkeitskontrast. Sie tendieren dazu, visuell zu „schweben“ oder von angrenzenden Symbolen mit hohem Helligkeitskontrast „eingefangen“ zu werden. Das Phänomen scheint besonders problematisch für Symbol/Hintergrund-Kombinationen zu sein, die sich nur im Blauton-Kanal unterscheiden._"

## Abstand zwischen Streifen

Photosensitive Anfälle können sowohl durch statische Bilder als auch durch Animationen verursacht werden. Der Mechanismus dafür ist wenig verstanden, wird aber angenommen, dass er mit im Gehirn entstehenden "Gamma-Oszillationen" zusammenhängt. Diese Oszillationen im Gehirn sind eine andere Art von Reaktion als andere neurologische Reaktionen, von denen angenommen wird, dass sie photosensitive Anfälle verursachen.

Streifen und Muster sind typisch für die Art von Bildern, die Probleme verursachen, und Streifen wurden am genauesten untersucht. Es besteht ein potenzielles Risiko für Schäden, wenn es mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Ausrichtung gibt. Sie können parallel, radial, gekrümmt oder gerade sein und können durch Reihen von sich wiederholenden Elementen gebildet werden.

Im Jahr 2005 bewerteten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung von Mustern, die Anfälle auslösen können. Sie überarbeiteten die Richtlinien in ihrem wesentlichen Kern und entwickelten einen überraschend einfachen, aber leistungsstarken [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x), den sie in dem Artikel **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** veröffentlichten.

> [!NOTE]
> Die notwendigen Schritte zur Bewertung von Material reduzieren sich auf Folgendes:
>
> Schauen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Wenn ja, dauern sie länger als 0,5 Sekunden?
> - Wenn ja, übersteigt die Helligkeit das angegebene Limit?
> - Wenn ja, kategorisieren Sie die Bewegung des Musters.
> - Werden die Richtlinien verletzt?
>
> Falls ja, reduzieren Sie die Helligkeit.

## Text und Abstand

Die WCAG-Standards für Kontrastwahrnehmung berücksichtigen nicht die Wirkung von Abständen. Zum Beispiel ist blauer Text auf grauem Hintergrund leichter wahrzunehmen, wenn er "lokal" von Schwarz und nicht von Weiß umgeben ist. Es gibt so etwas wie eine "lokale" Anpassung an Farben. Die Quintessenz: Abstände zählen.

## Mathematik

Räumliches Denken beeinflusst das Lernen in der Mathematik; folglich beeinflussen räumliche Beziehungen die kognitive Verarbeitung von Mathematik. Der Webentwickler kann dies bei der Darstellung von Mathematik berücksichtigen. Animationen spielen in diesem Bereich eine große Rolle. Zum Beispiel spielt es eine Rolle, "wie" ein Objekt aussieht, wenn es aus verschiedenen Blickwinkeln gedreht wird, wie es geschnitten aussieht und wie sie sich im Raum zueinander verhalten, um Mathematik in räumlichen Begriffen verstehen zu können.

## Braille

Moderne Technologie ermöglicht es auch Laien, Braille zu drucken. Adobe Illustrator zum Beispiel ermöglicht das Setzen von ADA Braille zum Ausdrucken.

Die Fähigkeit, räumliche Muster für Blinde korrekt darzustellen, ist entscheidend für die Barrierefreiheit. Zum Beispiel ist das Wissen um Braille nicht genug. Die Braille-Punkte müssen räumlich voneinander getrennt sein, um in einer "menschlichen" Weise lesbar zu sein. Der menschliche Tastsinn kann mit Leichtigkeit erkennen, ob Braille-Punkte zu nah oder zu weit voneinander entfernt sind.

Der Raum muss das Braille-Zeichen umgeben. Ein Braille-Nutzer legt den Finger nicht "auf" ein Braille-Zeichen, sondern bewegt den Finger über das Zeichen, so wie ein Sehender die Augen über Text auf einer Seite bewegt.

Die Natur des Raumes kann sich abhängig davon ändern, welcher MIME-Typ verwendet wird und welche Version. Zum Beispiel können bei SVG-Ränder sowohl nach innen als auch nach außen über ihre Dimensionen hinaus ausgedehnt werden oder bei neueren Versionen von SVG vollständig darüber hinaus, wodurch der Raum um das SVG reduziert wird, um eine Wahrnehmung zu ermöglichen.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Web-Barrierefreiheit bei Anfällen und physischen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Web-Barrierefreiheit: Farben und Helligkeit verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zum korrekten Setzen von ADA-Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Regierungsliteratur

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Mathematik

- [Räumliches Denken: Warum Mathe-Gespräche mehr als nur Zahlen sind](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Rollen für lokale Anpassung und Ebenen der Referenz](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett und Graham Harding

#### Mitwirkende

Herzlichen Dank an Jim Allan vom [Diagram Center](http://diagramcenter.org/) für seine Diskussionen zum Thema alternative Bildungsformen.
