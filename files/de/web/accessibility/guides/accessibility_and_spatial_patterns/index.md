---
title: Barrierefreiheit und räumliche Muster
short-title: Räumliche Muster
slug: Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

Dieses Dokument beschreibt visuelle Muster, die physische Symptome bei Menschen auslösen können, die an photosensitiver Epilepsie, vestibulären Störungen oder anderen Wahrnehmungsproblemen leiden.

## Räumliche Lokalisierung

Die NASA hat Untersuchungen zur Farbwahrnehmung durchgeführt und festgestellt, dass der Helligkeitskontrast entscheidend ist, wie Farben wahrgenommen werden. Die beiden unten abgebildeten Aufnahmen stammen aus einer NASA-Forschung, insbesondere aus dem Artikel, "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)"

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind in etwa isoluminant mit ihren Hintergründen. Die Fehlanpassung und der Abstand zwischen den chromatischen Streifen und schwarzen Streifen ist physisch für Gelb und Rot gleich, aber visuell weniger offensichtlich bei Gelb.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind in etwa isoluminant mit ihren Hintergründen. Die Fehlanpassung und der Abstand zwischen den chromatischen Streifen und schwarzen Streifen ist physisch für Gelb und Rot gleich, aber visuell weniger offensichtlich bei Gelb.](yellow_edge_4.gif)

"_**Räumliche Lokalisierung.** Symbole, die dieselbe Helligkeit wie ihr Hintergrund haben, werden räumlich und zeitlich weniger sicher wahrgenommen als Symbole mit höherem Helligkeitskontrast. Sie neigen dazu, visuell zu „schweben“ oder von angrenzenden Symbolen mit hohem Helligkeitskontrast „eingefangen“ zu werden. Dieses Phänomen scheint besonders problematisch bei Symbol-/Hintergrundkombinationen zu sein, die sich nur im Blaukanal unterscheiden._"

## Abstand zwischen Streifen

Photosensible Anfälle können durch statische Bilder sowie durch Animationen ausgelöst werden. Der Mechanismus hierfür ist schlecht verstanden, wird jedoch mit sogenannten "Gamma-Oszillationen" im Gehirn in Verbindung gebracht. Diese Oszillationen im Gehirn sind eine andere Art von Reaktion als andere neurologische Reaktionen, die mit dem Auslösen photosensitiver Anfälle in Zusammenhang gebracht werden.

Streifen und Muster sind typisch für die Arten von Bildern, die Probleme verursachen können, und Streifen wurden am intensivsten untersucht. Es besteht die Möglichkeit, Schaden zu verursachen, wenn mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Ausrichtung vorhanden sind. Sie können parallel, radial, gebogen oder gerade verlaufen und können aus Reihen wiederholter Elemente bestehen.

Im Jahr 2005 bewerteten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung von gemusterten Bildern, die Anfälle auslösen könnten. Sie überarbeiteten die Richtlinien auf ihren grundlegenden Kern und entwickelten einen überraschend einfachen, aber kraftvollen [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x), den sie in dem Artikel **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** veröffentlichten.

> [!NOTE]
> Die notwendigen Schritte zur Bewertung von Material reduzieren sich auf Folgendes:
>
> Schauen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Wenn ja, dauern sie länger als 0,5 s an?
> - Wenn ja, übersteigt die Helligkeit das angegebene Limit?
> - Wenn ja, kategorisieren Sie die Bewegung des Musters.
> - Werden die Richtlinien verletzt?
>
> Wenn ja, reduzieren Sie die Helligkeit.

## Text und Abstände

WCAG-Standards für Kontrastwahrnehmung berücksichtigen nicht die Wirkung von Abständen. Zum Beispiel ist blauer Text auf grauem Hintergrund leichter wahrzunehmen, wenn er lokal von Schwarz statt von Weiß umgeben ist. Es gibt eine sogenannte "lokale" Anpassung an Farben. Fazit: Abstände spielen eine Rolle.

## Mathematik

Räumliches Denken beeinflusst das Lernen von Mathematik; folglich beeinflussen räumliche Beziehungen, wie Mathematik präsentiert wird, die Kognition. Der Webentwickler kann in der Art und Weise, wie sie Mathematik darstellen, etwas dagegen tun. Animation spielt in diesem Bereich eine große Rolle. Zum Beispiel, "wie" ein Objekt aussieht, wenn es gedreht wird, aus verschiedenen Blickwinkeln, wie es aussieht, wenn es zerschnitten wird, und wie sie in Raumbeziehung zueinander stehen, macht einen Unterschied in der Fähigkeit, Mathematik in räumlichen Begriffen zu verstehen.

## Braille

Moderne Technologie ermöglicht es auch Laien, Braille zu drucken. Adobe Illustrator erlaubt es beispielsweise, ADA-Braille für den Druck zu setzen.

Die Fähigkeit, blinden Menschen räumliche Muster genau darzustellen, ist entscheidend für die Zugänglichkeit. Zum Beispiel ist es nicht genug, Braille zu kennen. Die Braille-Punkte müssen räumlich so voneinander getrennt sein, dass sie auf eine "menschliche" Weise lesbar sind. Der menschliche Tastsinn kann Braille-Punkte, die zu nah oder zu weit voneinander entfernt sind, problemlos unterscheiden.

Der Raum muss das Braille-Zeichen umgeben. Ein Braille-Nutzer legt seinen Finger nicht "auf" ein Braille-Zeichen, sondern muss seinen Finger über das Zeichen bewegen, so wie eine sehende Person ihre Augen über den Text auf einer Seite bewegen muss.

Die Natur des Raums kann je nach verwendeter MIME-Type und ihrer Version variieren. Beispielsweise können sich Ränder bei SVG sowohl nach innen als auch nach außen von ihren Abmessungen ausdehnen oder bei neueren SVG-Versionen vollständig nach außen, wodurch der Raum um das SVG herum reduziert wird, um die Wahrnehmung zu erleichtern.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Web-Barrierefreiheit bei Anfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Web-Barrierefreiheit: Farben und Helligkeit verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zum korrekten Setzen von ADA-Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Regierungsdokumentation

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Mathematik

- [Räumliches Denken: Warum Mathematikgespräche mehr umfassen als nur Zahlen](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Rollen für lokale Anpassung und Referenzniveaus](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Charakterisierung gemusterter Bilder, die Anfälle auslösen, und Optimierung von Richtlinien zu ihrer Vermeidung](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett und Graham Harding
