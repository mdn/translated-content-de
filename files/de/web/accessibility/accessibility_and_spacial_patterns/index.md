---
title: Barrierefreiheit und räumliche Muster
slug: Web/Accessibility/Accessibility_and_Spacial_Patterns
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Räumliche Lokalisierung

Die NASA führte Forschungen über die Wahrnehmung von Farbe durch und stellte fest, dass der Leuchtkraftkontrast erheblich die Farbwahrnehmung beeinflusst. Die beiden unten stehenden Bilder stammen aus NASA-Forschung, konkret aus dem Artikel "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)"

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind mit ihren Hintergründen ungefähr gleich leuchtdicht. Die Fehlausrichtung und der Spalt zwischen den chromatischen Balken und den schwarzen Balken sind physikalisch gleich für Gelb und Rot, aber beim Gelb weniger visuell auffällig.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind mit ihren Hintergründen ungefähr gleich leuchtdicht. Die Fehlausrichtung und der Spalt zwischen den chromatischen Balken und den schwarzen Balken sind physikalisch gleich für Gelb und Rot, aber beim Gelb weniger visuell auffällig.](yellow_edge_4.gif)

"_**Räumliche Lokalisierung.** Symbole, die die gleiche Leuchtdichte wie ihr Hintergrund haben, sind wahrnehmbar weniger sicher in Raum und Zeit verortet als Symbole mit höherem Leuchtkraftkontrast. Sie neigen dazu, visuell zu "schweben" oder von benachbarten Symbolen mit hohem Leuchtkraftkontrast "eingefangen" zu werden. Das Phänomen scheint besonders problematisch für Symbol-/Hintergrundkombinationen zu sein, die sich nur im Blaukanal unterscheiden._"

## Abstand zwischen Streifen

Photosensitive Anfälle können sowohl durch statische Bilder als auch durch Animationen ausgelöst werden. Der Mechanismus hierfür ist wenig verstanden, wird jedoch mit im Gehirn erzeugten "Gamma-Oszillationen" in Verbindung gebracht. Diese Oszillationen im Gehirn sind eine andere Art von Reaktion als andere neurologische Reaktionen, die als Ursache von photosensitiven Anfällen gelten.

Streifen und Muster sind typisch für die Art von Bildern, die Probleme verursachen, und Streifen wurden am intensivsten untersucht. Es besteht das Potenzial, Schaden zu verursachen, wenn es mehr als fünf hell-dunkel Paare von Streifen in irgendeiner Ausrichtung gibt. Sie können parallel, radial, gebogen oder gerade sein und durch Reihen sich wiederholender Elemente gebildet werden.

Im Jahr 2005 bewerteten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung von Mustern, die Anfälle auslösen könnten. Sie überarbeiteten die Richtlinien zu ihrem wesentlichen Kern und entwickelten einen überraschend einfachen, aber wirkungsvollen [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x), den sie im Artikel **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** veröffentlichten.

> [!NOTE]
> Die Schritte zur Bewertung von Material reduzieren sich auf Folgendes:
>
> Schauen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Wenn ja, dauern sie länger als 0,5 s?
> - Wenn ja, überschreitet die Helligkeit das angegebene Limit?
> - Wenn ja, kategorisieren Sie die Bewegung des Musters.
> - Werden die Richtlinien verletzt?
>
> Falls ja, Helligkeit reduzieren.

## Text und Abstand

WCAG-Standards für Kontrastwahrnehmung berücksichtigen nicht die Wirkung von Abstand. Zum Beispiel ist blauer Text auf grauem Hintergrund leichter wahrzunehmen, wenn er "lokal" von Schwarz umgeben ist anstatt von Weiß. Es gibt so etwas wie eine "lokale" Anpassung an Farben. Fazit: Abstand ist wichtig.

## Mathematik

Räumliches Denken beeinflusst das Lernen von Mathematik; folglich beeinflussen räumliche Beziehungen, wie Mathematik präsentiert wird, die Kognition. Der Webentwickler kann dies beeinflussen, indem er die Darstellung von Mathematik anpasst. Animation spielt in diesem Bereich eine starke Rolle. Zum Beispiel macht es einen Unterschied in der Fähigkeit, Mathematik in räumlichen Begriffen zu verstehen, "wie" ein Objekt aussieht, wenn es gedreht wird, aus verschiedenen Blickwinkeln, wie sie geschnitten aussehen und wie sie sich im Raum zueinander verhalten.

## Braille

Moderne Technologie ermöglicht es Nicht-Experten, Braille zu drucken. Adobe Illustrator ermöglicht es beispielsweise, ADA Braille für den Ausdruck zu setzen.

Die Fähigkeit, räumliche Muster für Blinde genau darzustellen, ist entscheidend für Barrierefreiheit. Zum Beispiel reicht es nicht aus, Braille zu kennen. Die Braillepunkte müssen räumlich voneinander getrennt sein, um in einer "menschlichen" Weise lesbar zu sein. Der menschliche Tastsinn unterscheidet mit Leichtigkeit Braillepunkte, die zu nah oder zu weit voneinander entfernt sind.

Der Raum muss das Braille-Zeichen umgeben. Ein Braille-Benutzer legt nicht einen Finger "auf" ein Braille-Zeichen, sondern muss den Finger über das Zeichen bewegen, so wie ein sehender Mensch die Augen über Text auf einer Seite bewegen muss.

Die Beschaffenheit des Raums kann sich je nach MIME-Typ und dessen Version ändern. Zum Beispiel können Rahmen bei SVG sowohl nach innen als auch nach außen von seinen Dimensionen ausgeweitet werden, oder bei neueren Versionen von SVG vollständig nach außen, wodurch der Raum um das SVG verringert wird, um die Wahrnehmung zu ermöglichen.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Web-Barrierefreiheit für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Web-Barrierefreiheit: Verstehen von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zum korrekten Setzen von ADA-Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Regierungsliteratur

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Mathematik

- [Räumliches Denken: Warum Mathematik-Gespräche mehr sind als nur Zahlen](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Rollen von lokaler Anpassung und Bezugsniveaus](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und photosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Charakterisierung der Muster, die Anfälle hervorrufen, und Optimierung der Richtlinien zu deren Vermeidung](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett, und Graham Harding

#### Mitwirkende

Ein herzliches Dankeschön an Jim Allan vom [Diagram Center](http://diagramcenter.org/) für seine Diskussionen über alternative Bildungsformen.
