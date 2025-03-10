---
title: Barrierefreiheit und räumliche Muster
short-title: Räumliche Muster
slug: Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

Dieses Dokument beschreibt visuelle Muster, die bei Menschen mit fotosensitiver Epilepsie, vestibulären Störungen oder anderen Wahrnehmungsproblemen physische Symptome hervorrufen können.

## Räumliche Lokalisierung

Die NASA führte Forschungen zur Farbwahrnehmung durch und stellte fest, dass der Leuchtkontrast entscheidend dafür ist, wie Farben wahrgenommen werden. Die beiden untenstehenden Bilder stammen aus NASA-Forschung, insbesondere aus dem Artikel "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)".

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide haben ungefähr die gleiche Leuchtdichte wie ihr Hintergrund. Die Fehlanpassung und die Lücke zwischen den chromatischen Balken und den schwarzen Balken ist physisch die gleiche für Gelb und Rot, aber für Gelb viel weniger visuell offensichtlich.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide haben ungefähr die gleiche Leuchtdichte wie ihr Hintergrund. Die Fehlanpassung und die Lücke zwischen den chromatischen Balken und den schwarzen Balken ist physisch die gleiche für Gelb und Rot, aber für Gelb viel weniger visuell offensichtlich.](yellow_edge_4.gif)

"_**Räumliche Lokalisierung.** Symbole, die die gleiche Leuchtdichte wie ihr Hintergrund haben, sind in Raum und Zeit wahrnehmbar weniger sicher positioniert als Symbole mit höherem Leuchtkontrast. Sie neigen dazu, visuell zu "schweben" oder von angrenzenden Symbolen mit hohem Leuchtkontrast "eingefangen" zu werden. Das Phänomen scheint insbesondere bei Symbol-/Hintergrundkombinationen problematisch zu sein, die sich nur im blauen Kanal unterscheiden._"

## Abstand zwischen Streifen

Fotosensitive Anfälle können sowohl durch statische Bilder als auch durch Animationen ausgelöst werden. Der Mechanismus hierfür ist schlecht verstanden, man vermutet jedoch, dass er mit "Gamma-Oszillationen" im Gehirn verbunden ist. Diese Oszillationen im Gehirn sind eine andere Art von Reaktion als andere neurologische Antworten, die mit fotosensitiven Anfällen in Verbindung gebracht werden.

Streifen und Muster sind typische Bildarten, die Probleme verursachen können, und Streifen wurden am intensivsten untersucht. Es besteht das Potenzial, Schaden zu verursachen, wenn es mehr als fünf Paare von hell-dunklen Streifen in irgendeiner Ausrichtung gibt. Sie können parallel, radial, gebogen oder gerade sein und können durch Reihen von sich wiederholenden Elementen gebildet werden.

Im Jahr 2005 bewerteten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung von mustergültigen Bildern, die Anfälle auslösen könnten. Sie überarbeiteten die Richtlinien auf ihren grundlegenden Kern und entwickelten einen überraschenden einfachen, aber leistungsfähigen [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x), den sie in der Arbeit **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** veröffentlichten.

> [!NOTE]
> Die notwendigen Schritte zur Bewertung von Material reduzieren sich auf Folgendes:
>
> Schauen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Falls ja, sind sie länger als 0,5 Sekunden sichtbar?
> - Falls ja, übersteigt die Helligkeit das angegebene Limit?
> - Falls ja, kategorisieren Sie die Bewegung des Musters.
> - Wurden die Richtlinien verletzt?
>
> Falls ja, reduzieren Sie die Helligkeit.

## Text und Abstände (Padding)

WCAG-Standards für Kontrastwahrnehmung berücksichtigen nicht den Effekt von Abständen. Zum Beispiel ist blauer Text auf grauem Hintergrund leichter zu erkennen, wenn er "lokal" von Schwarz statt von Weiß umgeben ist. Es gibt eine "lokale" Anpassung an Farben. Die Quintessenz: Abstände sind wichtig.

## Mathematik

Räumliches Denken beeinflusst das Mathematiklernen; folglich beeinflussen räumliche Beziehungen, wie Mathematik präsentiert wird, die Kognition. Der Webentwickler kann hierbei eine Rolle spielen, indem er die Mathematik in einer bestimmten Weise darstellt. Animation spielt in diesem Bereich eine wichtige Rolle. Beispielsweise macht es einen Unterschied für die Fähigkeit, Mathematik im räumlichen Sinne zu verstehen, "wie" ein Objekt aussieht, wenn es rotiert wird, aus verschiedenen Blickwinkeln, wie es geschnitten aussieht und wie es sich räumlich zueinander verhält.

## Braille

Moderne Technologie ermöglicht es Laien, Braille zu drucken. Adobe Illustrator erlaubt es beispielsweise, ADA Braille für den Druck zu setzen.

Die Fähigkeit, räumliche Muster genau für Blinde darzustellen, ist entscheidend für die Barrierefreiheit. Zum Beispiel reicht es nicht aus, Braille zu kennen. Die Braille-Punkte müssen räumlich voneinander entfernt sein, um in einer "menschlichen" Weise lesbar zu sein. Der menschliche Tastsinn unterscheidet mit Leichtigkeit Braille-Punkte, die zu nah oder zu weit voneinander entfernt sind.

Der Raum muss das Braille-Zeichen umgeben. Ein Nutzer von Braille legt nicht einen Finger "auf" ein Braille-Zeichen, der Nutzer muss seinen Finger über das Zeichen bewegen, so wie eine sehende Person mit den Augen Text auf einer Seite verfolgt.

Die Art des Raumes kann sich je nach verwendetem MIME-Typ und seiner Version ändern. Zum Beispiel können Grenzen auf SVG sowohl nach innen als auch nach außen von den Abmessungen ausdehnen oder für neuere Versionen von SVG vollständig nach außen, wodurch der Raum um das SVG verringert wird, um die Wahrnehmung zu ermöglichen.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Web-Barrierefreiheit: Farben und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zum korrekten Setzen von ADA Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Regierungsdokumente

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Mathematik

- [Räumliches Denken: Warum Mathematikgespräche mehr als nur Zahlen sind](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Rollen für lokale Anpassung und Referenzebenen](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Charakterisierung der Mustergültigen Bilder, die Anfälle hervorrufen, und Optimierung der Richtlinien Zu ihrer Vermeidung](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett und Graham Harding

#### Mitwirkende

Herzlichen Dank an Jim Allan vom [Diagram Center](http://diagramcenter.org/) für seine Diskussionen über das Thema alternative Bildungswege.
