---
title: Barrierefreiheit und räumliche Muster
slug: Web/Accessibility/Accessibility_and_Spacial_Patterns
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{AccessibilitySidebar}}

## Räumliche Lokalisierung

Die NASA hat Untersuchungen zur Farbwahrnehmung durchgeführt und festgestellt, dass der Leuchtdichtekontrast großen Einfluss darauf hat, wie Farben wahrgenommen werden. Die beiden folgenden Bilder stammen aus der NASA-Forschung, insbesondere aus dem Artikel "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)"

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind ungefähr isoleuchtdicht mit ihren Hintergründen. Die Fehlanpassung und der Abstand zwischen den chromatischen Balken und den schwarzen Balken ist physikalisch gleich für Gelb und Rot, aber viel weniger visuell offensichtlich für Gelb.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb vs. Rot. Beide sind ungefähr isoleuchtdicht mit ihren Hintergründen. Die Fehlanpassung und der Abstand zwischen den chromatischen Balken und den schwarzen Balken ist physikalisch gleich für Gelb und Rot, aber viel weniger visuell offensichtlich für Gelb.](yellow_edge_4.gif)

"_**Räumliche Lokalisierung.** Symbole, die die gleiche Leuchtdichte wie ihr Hintergrund haben, sind wahrnehmungsmäßig weniger sicher in Raum und Zeit verortet als Symbole mit höherem Leuchtdichtekontrast. Sie neigen dazu, visuell zu "schweben" oder von angrenzenden Symbolen mit hohem Leuchtdichtekontrast "eingefangen" zu werden. Das Phänomen scheint besonders problematisch für Symbol-/Hintergrundkombinationen zu sein, die sich nur im B-Kanal (blauer Kanal) unterscheiden._"

## Abstand zwischen Streifen

Fotosensitive Anfälle können sowohl durch statische Bilder als auch durch Animationen ausgelöst werden. Der Mechanismus hierfür ist schlecht verstanden, wird aber angenommen, dass er mit "Gamma-Oszillationen" im Gehirn zusammenhängt. Diese Oszillationen im Gehirn sind eine andere Art von Reaktion als andere neurologische Antworten, die als Ursache für fotosensitive Anfälle angesehen werden.

Streifen und Muster sind typisch für die Art von Bildern, die Probleme verursachen, und Streifen wurden am genauesten untersucht. Es besteht das Potenzial für Schäden, wenn es mehr als fünf Hell-Dunkel-Paare von Streifen in irgendeiner Orientierung gibt. Sie können parallel, radial, gekrümmt oder gerade sein und können durch Reihen von sich wiederholenden Elementen gebildet werden.

Im Jahr 2005 bewerteten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung der Musterbilder, die Anfälle auslösen könnten. Sie überarbeiteten die Richtlinien auf ihren grundlegenden Kern und entwickelten einen überraschend einfachen, aber wirkungsvollen [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x), den sie in dem Artikel **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** veröffentlichten.

> [!NOTE]
> Die erforderlichen Schritte zur Bewertung von Material reduzieren sich auf Folgendes:
>
> Schauen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Wenn ja, dauern sie länger als 0,5 s?
> - Wenn ja, überschreitet die Helligkeit das angegebene Limit?
> - Wenn ja, kategorisieren Sie die Bewegung des Musters.
> - Werden die Richtlinien verletzt?
>
> Wenn ja, reduzieren Sie die Helligkeit.

## Text und Abstände

Die WCAG-Standards für Kontrastwahrnehmung berücksichtigen nicht die Wirkung von Abständen. Zum Beispiel ist blauer Text auf grauem Hintergrund leichter wahrzunehmen, wenn er "lokal" von Schwarz umgeben ist, als wenn er von Weiß umgeben ist. Es gibt so etwas wie "lokale" Anpassung an Farben. Die Quintessenz: Abstände sind wichtig.

## Mathematik

Räumliches Denken beeinflusst das Lernen von Mathematik; folglich beeinflussen räumliche Beziehungen, wie Mathematik dargestellt wird, die Kognition. Der Webentwickler kann dies durch die Art und Weise, wie Mathematik angezeigt wird, beeinflussen. Animation spielt in diesem Bereich eine wichtige Rolle. Zum Beispiel spielt es eine Rolle, "wie" ein Objekt aussieht, wenn es gedreht wird, aus verschiedenen Blickwinkeln, wie es zerschnitten aussieht und wie sie sich im Raum zueinander verhalten, um Mathematik in räumlichen Begriffen zu verstehen.

## Braille

Moderne Technologie ermöglicht es auch Laien, Braille zu drucken. Adobe Illustrator ermöglicht es beispielsweise, ADA-Braille für den Ausdruck zu setzen.

Die Fähigkeit, räumliche Muster genau für Blinde darzustellen, ist entscheidend für die Barrierefreiheit. Zum Beispiel reicht es nicht, Braille zu kennen. Die Braillepunkte müssen räumlich voneinander getrennt sein, um auf eine "menschliche" Weise lesbar zu sein. Der menschliche Tastsinn unterscheidet mit Leichtigkeit Braillepunkte, die zu nah beieinander oder zu weit voneinander entfernt sind.

Der Raum muss das Braille-Zeichen umgeben. Ein Nutzer von Braille legt keinen Finger "auf" ein Braille-Zeichen, der Nutzer muss ihren Finger über das Zeichen bewegen, so wie eine sehende Person ihre Augen über Text auf einer Seite bewegen muss.

Die Art des Raums kann sich ändern, abhängig vom verwendeten MIME-Typ und seiner Version. Zum Beispiel können Ränder auf SVG sowohl nach innen als auch nach außen von seinen Dimensionen reichen oder bei neueren Versionen von SVG vollständig von außen, wodurch der Raum um das SVG verringert wird, um die Wahrnehmung zu ermöglichen.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Nutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Barrierefreiheit im Web für Anfälle und körperliche Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Web-Barrierefreiheit: Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zur korrekten Formatierung von ADA-Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Regierungsinformationen

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Mathematik

- [Räumliches Denken: Warum Math-Talk mehr als nur Zahlen betrifft](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Rollen für lokale Anpassung und Bezugsniveaus](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und fotosensitive Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Charakterisierung der Musterbilder, die Anfälle auslösen, und Optimierung von Richtlinien zur Verhinderung derselben](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett und Graham Harding

#### Mitwirkende

Herzlicher Dank an Jim Allan vom [Diagram Center](http://diagramcenter.org/) für seine Diskussionen über alternative Bildungsansätze.
