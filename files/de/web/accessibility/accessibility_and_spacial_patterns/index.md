---
title: Barrierefreiheit und räumliche Muster
slug: Web/Accessibility/Accessibility_and_Spacial_Patterns
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Räumliche Lokalisierung

Die NASA führte Forschungen zur Farbwahrnehmung durch und fand heraus, dass der Luminanzkontrast großen Einfluss darauf hat, wie Farben wahrgenommen werden. Die beiden untenstehenden Bilder stammen aus der NASA-Forschung, insbesondere aus dem Artikel "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)"

![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb im Vergleich zu Rot. Beide sind in etwa isoluminant mit ihrem Hintergrund. Die Fehlanpassung und der Abstand zwischen den chromatischen Balken und den schwarzen Balken ist physisch gleich für Gelb und Rot, aber bei Gelb viel weniger visuell offensichtlich.](yellow_edge_3.gif) ![Vergleich der Stabilität der räumlichen Lokalisierung von Gelb im Vergleich zu Rot. Beide sind in etwa isoluminant mit ihrem Hintergrund. Die Fehlanpassung und der Abstand zwischen den chromatischen Balken und den schwarzen Balken ist physisch gleich für Gelb und Rot, aber bei Gelb viel weniger visuell offensichtlich.](yellow_edge_4.gif)

"_**Räumliche Lokalisierung.** Symbole, die die gleiche Luminanz wie ihr Hintergrund haben, sind perzeptuell weniger sicher im Raum und in der Zeit verortet als Symbole mit höherem Luminanzkontrast. Sie neigen dazu, visuell zu „schweben“ oder von benachbarten Symbolen mit hohem Luminanzkontrast „eingefangen“ zu werden. Das Phänomen scheint besonders problematisch bei Symbol/Hintergrund-Kombinationen zu sein, die sich nur im blauen Kanal unterscheiden._"

## Abstand zwischen Streifen

Photosensitive Anfälle können sowohl durch statische Bilder als auch durch Animationen ausgelöst werden. Der Mechanismus hierfür ist schlecht verstanden, wird jedoch mit "Gamma-Oszillationen" in Verbindung gebracht, die im Gehirn entstehen. Diese Oszillationen im Gehirn stellen eine andere Art der Reaktion dar als andere neurologische Reaktionen, die für photosensitive Anfälle verantwortlich gemacht werden.

Streifen und Muster sind typische Bildarten, die Probleme verursachen, und Streifen wurden am eingehendsten untersucht. Es besteht die Möglichkeit, Schaden zu verursachen, wenn mehr als fünf hell-dunkel Streifenpaare in irgendeiner Ausrichtung vorhanden sind. Sie können parallel, radial, gekrümmt oder gerade sein und aus Reihen von sich wiederholenden Elementen gebildet werden.

Im Jahr 2005 evaluierten Arnold Wilkins, John Emmett und Graham Harding die Richtlinien zur Charakterisierung von Mustern, die Anfälle auslösen könnten. Sie überarbeiteten die Richtlinien bis zu ihrem grundlegenden Kern und entwickelten einen überraschend einfachen, aber wirkungsvollen [Test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x), den sie in dem Artikel **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** veröffentlichten.

> [!NOTE]
> Die notwendigen Schritte zur Bewertung des Materials reduzieren sich auf Folgendes:
>
> Schauen Sie auf den Bildschirm:
>
> - Gibt es mehr als fünf Streifen?
> - Wenn ja, dauern diese länger als 0,5 s?
> - Wenn ja, übersteigt die Helligkeit den angegebenen Grenzwert?
> - Wenn ja, kategorisieren Sie die Bewegung des Musters.
> - Werden die Richtlinien verletzt?
>
> Wenn ja, reduzieren Sie die Helligkeit.

## Text und Abstände

WCAG-Standards für die Kontrastwahrnehmung berücksichtigen nicht die Wirkung von Abständen. Beispielsweise ist blauer Text auf einem grauen Hintergrund leichter wahrzunehmen, wenn er "local" von Schwarz und nicht von Weiß umgeben ist. Es gibt so etwas wie "lokale" Anpassung an Farben. Die Quintessenz: Abstände sind wichtig.

## Mathematik

Räumliches Denken beeinflusst das Mathematiklernen; folglich beeinflussen räumliche Beziehungen, wie Mathematik präsentiert wird, die Kognition. Der Webentwickler kann in der Art und Weise, wie er Mathematik darstellt, etwas dagegen tun. Animation spielt in diesem Bereich eine wichtige Rolle. Zum Beispiel, wie ein Objekt aussieht, wenn es aus verschiedenen Winkeln gedreht wird, wie es aussieht, wenn es geschnitten wird, und wie sie sich im Raum zueinander verhalten, wirkt sich auf die Fähigkeit aus, Mathematik in räumlichen Begriffen zu verstehen.

## Braille

Moderne Technologie ermöglicht es Nicht-Experten, Braille zu drucken. Adobe Illustrator ermöglicht es beispielsweise, ADA-Braille zum Ausdrucken zu setzen.

Die Fähigkeit, räumliche Muster für Sehbehinderte genau darzustellen, ist entscheidend für die Barrierefreiheit. Es reicht beispielsweise nicht aus, Braille zu kennen. Die Braille-Punkte müssen räumlich so auseinander liegen, dass sie auf eine "menschliche" Weise lesbar sind. Der menschliche Tastsinn unterscheidet problemlos Braille-Punkte, die zu nah oder zu weit voneinander entfernt sind.

Der Raum um das Braille-Zeichen muss vorhanden sein. Ein Braille-Nutzer legt nicht einen Finger "auf" ein Braille-Zeichen, der Nutzer muss seinen Finger über das Zeichen bewegen, ähnlich wie eine sehende Person ihre Augen über einen auf der Seite geschriebenen Text bewegen muss.

Die Natur des Raums kann sich je nach verwendetem MIME-Typ und dessen Version ändern. Beispielsweise können sich Ränder in SVG sowohl nach innen als auch nach außen von deren Abmessungen erstrecken oder bei neueren Versionen von SVG vollständig nach außen, wodurch der Raum um das SVG herum reduziert wird, um die Wahrnehmung zu ermöglichen.

## Siehe auch

### MDN

- [Barrierefreiheit: Was Benutzer tun können, um sicherer zu surfen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Web-Barrierefreiheit bei Anfällen und körperlichen Reaktionen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Web-Barrierefreiheit: Verständnis von Farben und Luminanz](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

### Braille

- [Teil 3: Eine Schritt-für-Schritt-Anleitung zum korrekten Setzen von ADA-Braille in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Räumliche Mathematik in BrailleBlaster (4 von 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Regierungsdokumente

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Mathematik

- [Räumliches Denken: Warum Mathematikgespräche mehr als nur Zahlen sind](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Wissenschaftliche Literatur

- [Farbkonstanz im Kontext: Rollen lokaler Anpassung und Bezugsniveaus](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma-Oszillationen und photosensible Epilepsie](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett, und Graham Harding

#### Mitwirkende

Ein herzlicher Dank an Jim Allan vom [Diagram Center](http://diagramcenter.org/) für seine Diskussionen über alternative Bildungswege.
