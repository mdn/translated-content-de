---
title: Barrierefreiheit und räumliche Muster
slug: Web/Accessibility/Accessibility_and_Spacial_Patterns
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Räumliche Lokalisierung

Die NASA hat Forschungen zur Farbwahrnehmung durchgeführt und festgestellt, dass der Helligkeitskontrast erheblich beeinflusst, wie Farben wahrgenommen werden. Die beiden untenstehenden Bilder stammen aus einer NASA-Studie, genauer gesagt aus dem Artikel "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)".

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb gegen Rot. Beide sind ungefähr gleich hell wie ihre Hintergründe. Die Fehlanpassung und der Spalt zwischen den chromatischen Balken und den schwarzen Balken sind physisch gleich für Gelb und Rot, aber visuell viel weniger offensichtlich für Gelb.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb gegen Rot. Beide sind ungefähr gleich hell wie ihre Hintergründe. Die Fehlanpassung und der Spalt zwischen den chromatischen Balken und den schwarzen Balken sind physisch gleich für Gelb und Rot, aber visuell viel weniger offensichtlich für Gelb.](yellow_edge_4.gif)

"_**Räumliche Lokalisierung.** Symbole, die die gleiche Helligkeit wie ihr Hintergrund haben, sind wahrnehmungsmäßig weniger sicher in Raum und Zeit verortet als Symbole mit höherem Helligkeitskontrast. Sie neigen dazu, visuell zu "schweben" oder von angrenzenden Symbolen mit hohem Helligkeitskontrast "eingefangen" zu werden. Das Phänomen scheint besonders problematisch für Symbol/Hintergrund-Kombinationen zu sein, die sich nur im blauen Kanal unterscheiden._"

## Abstand zwischen Streifen

Fotosensitive Anfälle können sowohl durch statische Bilder als auch durch Animationen verursacht werden. Der Mechanismus dafür ist wenig verstanden, man nimmt jedoch an, dass er mit im Gehirn aufgebauten "Gamma-Oszillationen" zusammenhängt. Diese Oszillationen im Gehirn sind eine andere Art von Reaktion als andere neurologische Reaktionen, von denen angenommen wird, dass sie fotosensitive Anfälle verursachen.

Streifen und Muster sind typisch für die Art von Bildern, die Probleme bereiten, und Streifen wurden am genauesten untersucht. Es besteht die Möglichkeit, Schaden zu verursachen, wenn es mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung gibt. Sie können parallel, radial, gekrümmt oder gerade sein und können durch Reihen wiederholter Elemente gebildet werden.

Im Jahr 2005 bewerteten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung gemusterter Bilder, die Anfälle hervorrufen könnten. Sie überarbeiteten die Richtlinien bis zu ihrem wesentlichen Kern und entwickelten einen überraschend einfachen, aber leistungsstarken [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x). den sie in dem Artikel veröffentlichten, **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)**

> [!NOTE]
> Die Schritte zur Bewertung von Material reduzieren sich auf Folgendes:
>
> Schauen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Wenn ja, dauern sie länger als 0,5 s?
> - Wenn ja, übersteigt die Helligkeit das angegebene Limit?
> - Wenn ja, kategorisieren Sie die Bewegung des Musters.
> - Werden die Richtlinien verletzt?
>
> Wenn ja, reduzieren Sie die Helligkeit.

## Text und Abstand

Die WCAG-Standards für Kontrastwahrnehmung berücksichtigen nicht die Wirkung von Abstand. Zum Beispiel lässt sich blauer Text auf grauem Hintergrund leichter erkennen, wenn er "lokal" von Schwarz statt von Weiß umgeben ist. Es gibt eine "lokale" Anpassung an Farben. Fazit: Abstand ist wichtig.

## Mathematik

Räumliches Denken beeinflusst das Lernen von Mathematik; folglich beeinflussen räumliche Beziehungen, wie Mathematik präsentiert wird, die Kognition. Der Webentwickler kann dies beeinflussen, indem er die Darstellung von Mathematik entsprechend gestaltet. Animation spielt in diesem Bereich eine wichtige Rolle. Zum Beispiel macht es einen Unterschied, "wie" ein Objekt aussieht, wenn es gedreht wird, aus verschiedenen Blickwinkeln, wie es geschnitten aussieht und wie sie sich im Raum zueinander verhalten, um Mathematik in räumlichen Begriffen verstehen zu können.

## Braille

Moderne Technologie ermöglicht es Laien, Braille zu drucken. Adobe Illustrator erlaubt es zum Beispiel, ADA Braille zu setzen, um es auszudrucken.

Die Fähigkeit, räumliche Muster für Blinde präzise darzustellen, ist entscheidend für die Barrierefreiheit. Zum Beispiel reicht es nicht aus, Blindenschrift zu kennen. Die Braille-Punkte müssen räumlich voneinander entfernt sein, um auf "menschliche" Weise lesbar zu sein. Der menschliche Tastsinn unterscheidet leicht Punkte, die zu nah oder zu weit auseinander liegen.

Der Raum muss das Braille-Zeichen umgeben. Ein Benutzer von Braille legt keinen Finger "auf" ein Braille-Zeichen, sondern muss den Finger über das Zeichen bewegen, so wie eine sehende Person ihre Augen über den auf einer Seite geschriebenen Text bewegen muss.

Die Natur des Raums kann sich je nach verwendetem MIME-Typ und dessen Version ändern. Zum Beispiel können sich die Ränder bei SVG sowohl nach innen als auch nach außen von den Dimensionen erstrecken, oder bei neueren Versionen von SVG vollständig nach außen, wodurch der Raum um das SVG reduziert wird, um die Wahrnehmung zu ermöglichen.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Barrierefreiheit im Web für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Web-Barrierefreiheit: Verständnis von Farben und Helligkeit](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zur korrekten Setzung von ADA Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Regierungsveröffentlichungen

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Mathematik

- [Räumliches Denken: Warum Mathesprechen mehr als nur Zahlen umfasst](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbbeständigkeit im Kontext: Rollen für lokale Anpassung und Referenzniveaus](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Charakterisierung der gemusterten Bilder, die Anfälle hervorrufen, und Optimierung der Richtlinien zu deren Vermeidung](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett und Graham Harding

#### Mitwirkende

Herzlichen Dank an Jim Allan vom [Diagram Center](http://diagramcenter.org/) für seine Diskussionen zum Thema alternative Bildung.
