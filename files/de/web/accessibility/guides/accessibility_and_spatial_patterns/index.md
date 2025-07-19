---
title: Barrierefreiheit und räumliche Muster
short-title: Räumliche Muster
slug: Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

Dieses Dokument beschreibt visuelle Muster, die körperliche Symptome bei Menschen mit fotosensitiver Epilepsie, vestibulären Störungen oder anderen Wahrnehmungsproblemen hervorrufen können.

## Räumliche Lokalisierung

Die NASA führte Forschung zur Farbwahrnehmung durch und fand heraus, dass der Helligkeitskontrast von großer Bedeutung dafür ist, wie Farben wahrgenommen werden. Die beiden untenstehenden Bilder stammen aus der NASA-Forschung, speziell aus dem Artikel "[Designing With Blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php)".

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind in etwa gleichhell mit ihren Hintergründen. Die Fehlausrichtung und der Spalt zwischen den chromatischen Balken und schwarzen Balken ist physisch gleich für Gelb und Rot, aber viel weniger visuell offensichtlich bei Gelb.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind in etwa gleichhell mit ihren Hintergründen. Die Fehlausrichtung und der Spalt zwischen den chromatischen Balken und schwarzen Balken ist physisch gleich für Gelb und Rot, aber viel weniger visuell offensichtlich bei Gelb.](yellow_edge_4.gif)

> **Räumliche Lokalisierung.** Symbole, die die gleiche Helligkeit wie ihr Hintergrund haben, sind in Raum und Zeit wahrnehmbar weniger sicher lokalisiert als Symbole mit höherem Helligkeitskontrast. Sie neigen dazu, visuell zu "schweben" oder von angrenzenden Symbolen mit hohem Helligkeitskontrast "eingefangen" zu werden. Das Phänomen scheint besonders problematisch für Symbol/Hintergrund-Kombinationen zu sein, die sich nur im Blaukanal unterscheiden.

## Abstand zwischen Streifen

Fotosensitive Anfälle können durch statische Bilder ebenso wie durch Animation verursacht werden. Der Mechanismus hierfür ist schlecht verstanden, wird aber angenommen, mit "Gamma-Oszillationen" im Gehirn zusammenzuhängen. Diese Oszillationen im Gehirn sind eine andere Art von Reaktion als andere neurologische Reaktionen, die vermutlich fotosensitive Anfälle verursachen.

Streifen und Muster sind typisch für die Art von Bildern, die Probleme verursachen, und Streifen wurden am genauesten untersucht. Es besteht das Potenzial, Schaden zu verursachen, wenn es mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung gibt. Sie können parallel, radial, gekrümmt oder gerade sein und können durch Reihen sich wiederholender Elemente gebildet werden.

Im Jahr 2005 evaluierten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung von gemusterten Bildern, die Anfälle auslösen könnten. Sie überarbeiteten die Richtlinien zu ihrem grundlegenden Kern und entwickelten einen überraschend einfachen, aber wirkungsvollen [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x), den sie in dem Papier **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** veröffentlichten.

> [!NOTE]
> Die erforderlichen Schritte zur Bewertung des Materials reduzieren sich auf Folgendes:
>
> Sehen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Wenn ja, dauern sie länger als 0,5 s?
> - Wenn ja, übersteigt die Helligkeit den angegebenen Grenzwert?
> - Wenn ja, kategorisieren Sie die Bewegung des Musters.
> - Werden die Richtlinien verletzt?
>
> Wenn ja, reduzieren Sie die Helligkeit.

## Text und Padding

Die WCAG-Standards für die Kontrastwahrnehmung berücksichtigen nicht die Wirkung von Padding. Zum Beispiel ist blauer Text auf einem grauen Hintergrund leichter wahrnehmbar, wenn er lokal von Schwarz statt von Weiß umgeben ist. Es gibt eine "lokale" Anpassung an Farben. Die Quintessenz: Padding ist wichtig.

## Mathematik

Räumliches Denken beeinflusst das Mathematiklernen; folglich beeinflussen räumliche Beziehungen, wie Mathematik präsentiert wird, die Kognition. Webentwickler können etwas daran ändern, wie sie Mathematik darstellen. Animation spielt in diesem Bereich eine große Rolle. Beispielsweise macht es einen Unterschied, "wie" ein Objekt aussieht, wenn es gedreht wird, aus verschiedenen Winkeln, wie es geschnitten aussieht und wie sie sich räumlich zueinander verhalten, um Mathematik in räumlichen Begriffen zu verstehen.

## Braille

Moderne Technologie ermöglicht es Nicht-Experten, Braille zu drucken. Adobe Illustrator bietet beispielsweise die Möglichkeit, ADA Braille zum Ausdrucken zu setzen.

Die Fähigkeit, räumliche Muster für blinde Menschen präzise darzustellen, ist entscheidend für die Barrierefreiheit. Zum Beispiel reicht das Wissen über Braille nicht aus. Die Braille-Punkte müssen räumlich so weit voneinander entfernt sein, dass sie auf "menschliche" Weise lesbar sind. Die menschliche Berührung unterscheidet mit Leichtigkeit Braille-Punkte, die zu nah oder zu weit voneinander entfernt sind.

Der Raum muss das Braille-Zeichen umgeben. Ein Benutzer von Braille legt keinen Finger "auf" ein Braille-Zeichen, der Benutzer muss seinen Finger über das Zeichen bewegen, so wie ein sehender Mensch seine Augen über Text auf einer Seite bewegen muss.

Die Natur des Raumes kann sich je nach verwendetem MIME-Typ und dessen Version ändern. Zum Beispiel können sich Ränder auf SVG sowohl nach innen als auch nach außen von dessen Dimensionen ausdehnen, oder bei neueren Versionen von SVG, vollständig nach außen, wodurch der Raum um das SVG reduziert wird, um die Wahrnehmung zu ermöglichen.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Web-Barrierefreiheit bei Anfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Web-Barrierefreiheit: Farben und Helligkeit verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zum korrekten Setzen von ADA Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Mathematik

- [Räumliches Denken: Warum Mathematikgespräche mehr als nur Zahlen beinhalten](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Rollen der lokalen Anpassung und Referenzebenen](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Charakterisierung der gemusterten Bilder, die Anfälle auslösen, und Optimierung der Richtlinien zu ihrer Vermeidung](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett und Graham Harding
