---
title: Erstellen von hübschen Boxen
slug: Learn/CSS/Howto/Create_fancy_boxes
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

CSS-Boxen sind die Bausteine jeder mit CSS gestalteten Webseite. Sie schön aussehen zu lassen, ist sowohl unterhaltsam als auch herausfordernd. Es ist unterhaltsam, weil es darum geht, eine Designidee in funktionierenden Code zu verwandeln; es ist herausfordernd aufgrund der Einschränkungen von CSS. Lassen Sie uns einige hübsche Boxen erstellen.

Bevor wir zur praktischen Seite kommen, sollten Sie sicherstellen, dass Sie mit [dem CSS-Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) vertraut sind. Es ist auch sinnvoll, aber nicht notwendig, einige [Grundlagen des CSS-Layouts](/de/docs/Learn/CSS/CSS_layout/Introduction) zu kennen.

Auf der technischen Seite geht es bei der Erstellung von hübschen Boxen darum, die CSS-Eigenschaften für Rahmen und Hintergrund zu beherrschen und wie man sie auf eine bestimmte Box anwendet. Aber über die Techniken hinaus geht es auch darum, Ihre Kreativität zu entfesseln. Es wird nicht an einem Tag erledigt sein, und einige Webentwickler verbringen ihr ganzes Leben damit, Spaß daran zu haben.

Wir werden viele Beispiele sehen, aber wir werden immer mit dem einfachsten HTML-Element arbeiten, das möglich ist:

```html
<div class="fancy">Hi! I want to be fancy.</div>
```

Okay, das ist ein sehr kleines Stück HTML. Was können wir an diesem Element anpassen? All das Folgende:

- Seine Boxmodelleigenschaften: {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("border")}} usw.
- Seine Hintergrundeigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-position")}}, {{cssxref("background-size")}} usw.
- Seine Pseudo-Elemente: {{cssxref("::before")}} und {{cssxref("::after")}}
- und einige zusätzliche Eigenschaften wie: {{cssxref("box-shadow")}}, {{cssxref("rotate")}}, {{cssxref("outline")}} usw.

Wir haben also einen sehr großen Spielplatz. Lassen Sie den Spaß beginnen.

## Anpassung des Boxmodells

Das Boxmodell allein erlaubt uns, einige grundlegende Dinge zu tun, wie das Hinzufügen einfacher Rahmen, das Erstellen von Quadraten usw. Es wird interessant, wenn Sie die Eigenschaften auf die Spitze treiben, indem Sie negative `padding` und/oder `margin` haben oder `border-radius` größer ist als die tatsächliche Größe der Box.

### Kreise erstellen

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Das ist etwas, das sowohl sehr einfach als auch sehr unterhaltsam ist. Die Eigenschaft {{cssxref("border-radius")}} ist dafür gemacht, abgerundete Ecken auf Boxen anzuwenden, aber was passiert, wenn die Radiusgröße gleich oder größer als die tatsächliche Breite der Box ist?

```css
.fancy {
  /* In einem Kreis wirkt zentrierter Text hübscher. */
  text-align: center;

  /* Vermeiden wir, dass unser Text den Rand berührt. 
     Da unser Text weiterhin in einem Quadrat fließt, sieht
     es auf diese Weise schöner aus, was das Gefühl vermittelt,
     dass es ein "echter" Kreis ist. */
  padding: 1em;

  /* Der Rahmen macht den Kreis sichtbar.
     Sie könnten auch einen Hintergrund verwenden, da
     Hintergründe durch den Rahmenradius beschnitten werden. */
  border: 0.5em solid black;

  /* Lassen Sie uns sicherstellen, dass wir ein Quadrat haben.
     Wenn es kein Quadrat ist, bekommen wir eine
     Ellipse statt eines Kreises. */
  width: 4em;
  height: 4em;

  /* Und verwandeln wir das Quadrat in einen Kreis */
  border-radius: 100%;
}
```

Ja, wir bekommen einen Kreis:

{{ EmbedLiveSample('Making_circles', '100%', '120') }}

## Hintergründe

Wenn wir über eine hübsche Box sprechen, sind die Kerneigenschaften, die dafür zu handhaben sind, [background-* Eigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders). Wenn Sie anfangen, mit Hintergründen zu experimentieren, fühlt sich Ihre CSS-Box an wie eine leere Leinwand, die Sie füllen werden.

Bevor wir zu einigen praktischen Beispielen kommen, sollten wir einen Schritt zurückgehen, da es zwei Dinge gibt, die Sie über Hintergründe wissen sollten.

- Es ist möglich, [mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) auf einer einzigen Box zu setzen. Sie sind wie Schichten übereinander gestapelt.
- Hintergründe können entweder Volltonfarben oder Bilder sein: Volltonfarbe füllt immer die gesamte Fläche aus, aber Bilder können skaliert und positioniert werden.

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Okay, lassen Sie uns mit Hintergründen Spaß haben:

```css-nolint
.fancy {
  padding: 1em;
  width: 100%;
  height: 200px;
  box-sizing: border-box;

  /* Am unteren Ende unseres Hintergrundstapels
     haben wir eine nebelgraue Volltonfarbe */
  background-color: #e4e4d9;

  /* Wir stapeln lineare Verläufe übereinander,
     um unseren Farbeffektestreifen zu erzeugen.
     Wie Sie bemerken werden, werden Farbverläufe
     als Bilder betrachtet und können
     entsprechend manipuliert werden */
  background-image: linear-gradient(175deg, rgb(0 0 0 / 0%) 95%, #8da389 95%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 95%, #8da389 95%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 90%, #b4b07f 90%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 92%, #b4b07f 92%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 85%, #c5a68e 85%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 89%, #c5a68e 89%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 80%, #ba9499 80%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 86%, #ba9499 86%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 75%, #9f8fa4 75%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 83%, #9f8fa4 83%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 70%, #74a6ae 70%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 80%, #74a6ae 80%);
}
```

{{ EmbedLiveSample('Backgrounds', '100%', '200') }}

> [!NOTE]
> Verläufe können auf sehr kreative Arten verwendet werden. Wenn Sie einige kreative Beispiele sehen möchten, werfen Sie einen Blick auf [Lea Verou's CSS Musterbeispiele](https://projects.verou.me/css3patterns/). Wenn Sie mehr über Verläufe erfahren möchten, lesen Sie gerne [unseren Artikel darüber](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients).

## Pseudo-Elemente

Beim Styling einer einzelnen Box könnten Sie feststellen, dass Sie eingeschränkt sind, und könnten sich wünschen, mehr Boxen zu haben, um noch erstaunlichere Stile zu erstellen. Meistens führt das dazu, den DOM durch das Hinzufügen zusätzlicher HTML-Elemente für den einzigen Zweck des Stylings zu verschmutzen. Auch wenn es notwendig ist, wird es als schlechte Praktik betrachtet. Eine Lösung, um solche Fallen zu vermeiden, ist die Verwendung von [CSS Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements).

### Eine Wolke

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Lassen Sie uns ein Beispiel sehen, indem wir unsere Box in eine Wolke verwandeln:

```css
.fancy {
  text-align: center;

  /* Der gleiche Trick wie zuvor, um Kreise zu machen */
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  padding: 80px 1em 0 1em;

  /* Wir schaffen Platz für die "Ohren" unserer Wolke */
  margin: 0 100px;

  position: relative;

  background-color: #a4c9cf;

  /* Nun, eigentlich machen wir nicht einen vollen Kreis,
     da wir möchten, dass der Boden unserer Wolke flach ist.
     Zögern Sie nicht, dieses Beispiel anzupassen, um eine Wolke
     zu erzeugen, die am Boden nicht flach ist ;) */
  border-radius: 100% 100% 0 0;
}

/* Dies sind gemeinsame Stile, die sowohl auf unser ::before- als auch
   auf unser ::after-Pseudoelement angewendet werden. */
.fancy::before,
.fancy::after {
  /* Dies ist erforderlich, um die Anzeige der
     Pseudoelemente zu ermöglichen, auch wenn der Wert ein leerer
     String ist */
  content: "";

  /* Wir positionieren unsere Pseudoelemente auf den linken und
     rechten Seiten der Box, aber immer am unteren Rand */
  position: absolute;
  bottom: 0;

  /* Dies stellt sicher, dass unsere Pseudoelemente immer unterhalb
     des Boxinhalts stehen, was auch immer passiert. */
  z-index: -1;

  background-color: #a4c9cf;
  border-radius: 100%;
}

.fancy::before {
  /* Dies ist die Größe des linken Ohrs der Wolke */
  width: 125px;
  height: 125px;

  /* Wir bewegen es leicht nach links */
  left: -80px;

  /* Um sicherzustellen, dass der Boden der Wolke
     flach bleibt, müssen wir die untere rechte Ecke des
     linken Ohrs quadratisch machen. */
  border-bottom-right-radius: 0;
}

.fancy::after {
  /* Dies ist die Größe des linken Ohrs der Wolke */
  width: 100px;
  height: 100px;

  /* Wir bewegen es leicht nach rechts */
  right: -60px;

  /* Um sicherzustellen, dass der Boden der Wolke
     flach bleibt, müssen wir die untere linke Ecke des rechten
     Ohrs quadratisch machen. */
  border-bottom-left-radius: 0;
}
```

{{ EmbedLiveSample('A_cloud', '100%', '160') }}

### Blockquote

Ein praktischeres Beispiel für die Verwendung von Pseudo-Elementen ist die Gestaltung einer schönen Formatierung für HTML-{{HTMLElement('blockquote')}}-Elemente. Sehen wir uns also ein Beispiel mit einem leicht anderen HTML-Ausschnitt an (was uns die Gelegenheit bietet zu sehen, wie man auch Designlokalisierung handhabt):

```html
<blockquote>
  People who think they know everything are a great annoyance to those of us who
  do. <i>Isaac Asimov</i>
</blockquote>
<blockquote lang="fr">
  L'intelligence, c'est comme les parachutes, quand on n'en a pas, on s'écrase.
  <i>Pierre Desproges</i>
</blockquote>
```

Hier kommt unser Stil:

```css
blockquote {
  min-height: 5em;
  padding: 1em 4em;
  font: 1em/150% sans-serif;
  position: relative;
  background-color: lightgoldenrodyellow;
}

blockquote::before,
blockquote::after {
  position: absolute;
  height: 3rem;
  font:
    6rem/100% Georgia,
    "Times New Roman",
    Times,
    serif;
}

blockquote::before {
  content: "“";
  top: 0.3rem;
  left: 0.9rem;
}

blockquote::after {
  content: "”";
  bottom: 0.3rem;
  right: 0.8rem;
}

blockquote:lang(fr)::before {
  content: "«";
  top: -1.5rem;
  left: 0.5rem;
}

blockquote:lang(fr)::after {
  content: "»";
  bottom: 2.6rem;
  right: 0.5rem;
}

blockquote i {
  display: block;
  font-size: 0.8em;
  margin-top: 1rem;
  text-align: right;
}
```

{{ EmbedLiveSample('Blockquote', '100%', '300') }}

## Alles zusammen und mehr

Es ist also möglich, einen wunderbaren Effekt zu erzielen, wenn wir all dies zusammen mischen. Irgendwann wird solch eine Verschönerung von Boxen eine Frage der Kreativität, sowohl im Design als auch in der technischen Nutzung von CSS-Eigenschaften. Indem Sie dies tun, ist es möglich, optische Täuschungen zu erzeugen, die Ihre Boxen zum Leben erwecken können, wie in diesem Beispiel:

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Lassen Sie uns einige partielle Drop-Shadow-Effekte erstellen. Die Eigenschaft {{cssxref("box-shadow")}} ermöglicht es uns, inneres Licht und einen flachen Drop-Shadow-Effekt zu erzeugen, aber mit etwas zusätzlicher Arbeit wird es möglich, eine natürlichere Geometrie zu schaffen, indem ein Pseudo-Element und die Eigenschaft {{cssxref("rotate")}} verwendet wird, eine der drei individuellen {{cssxref("transform")}}-Eigenschaften.

```css
.fancy {
  position: relative;
  background-color: #ffc;
  padding: 2rem;
  text-align: center;
  max-width: 200px;
}

.fancy::before {
  content: "";

  position: absolute;
  z-index: -1;
  bottom: 15px;
  right: 5px;
  width: 50%;
  top: 80%;
  max-width: 200px;

  box-shadow: 0px 13px 10px black;
  rotate: 4deg;
}
```

{{ EmbedLiveSample('All_together_and_more', '100%', '120') }}
