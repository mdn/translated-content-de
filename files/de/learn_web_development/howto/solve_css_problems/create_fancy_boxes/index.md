---
title: Erstellen Sie schicke Boxen
slug: Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

CSS-Boxen sind die Bausteine jeder Webseite, die mit CSS gestaltet ist. Sie ansprechend aussehen zu lassen, ist sowohl spaßig als auch eine Herausforderung. Es macht Spaß, weil es darum geht, eine Designidee in funktionierenden Code umzusetzen; es ist eine Herausforderung wegen der Einschränkungen von CSS. Lassen Sie uns einige schicke Boxen erstellen.

Bevor wir praktisch werden, stellen Sie sicher, dass Sie mit [dem CSS Box Model](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) vertraut sind. Es ist auch ratsam, sich mit einigen [CSS Layout-Grundlagen](/de/docs/Learn_web_development/Core/CSS_layout/Introduction) vertraut zu machen, obwohl dies keine Voraussetzung ist.

Technisch gesehen geht es beim Erstellen schicker Boxen darum, CSS-Rand- und Hintergrund-Eigenschaften zu beherrschen und sie auf eine bestimmte Box anzuwenden. Aber abgesehen von den Techniken geht es auch darum, Ihre Kreativität zu entfesseln. Es wird nicht an einem Tag erledigt, und einige Webentwickler verbringen ihr ganzes Leben damit, Spaß daran zu haben.

Wir werden viele Beispiele sehen, aber wir werden immer an dem einfachsten Stück HTML arbeiten, das möglich ist, ein einfaches Element:

```html
<div class="fancy">Hi! I want to be fancy.</div>
```

Okay, das ist ein sehr kleines Stück HTML, was können wir an diesem Element verändern? Alles Folgende:

- Seine Box-Model-Eigenschaften: {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("border")}} usw.
- Seine Hintergrund-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-position")}}, {{cssxref("background-size")}} usw.
- Seine Pseudo-Elemente: {{cssxref("::before")}} und {{cssxref("::after")}}
- und einige zusätzliche Eigenschaften wie: {{cssxref("box-shadow")}}, {{cssxref("rotate")}}, {{cssxref("outline")}} usw.

Wir haben also einen sehr großen Spielplatz. Lassen Sie den Spaß beginnen.

## Box-Model-Anpassung

Das Box-Model allein ermöglicht es uns, einige grundlegende Dinge zu tun, wie einfache Ränder hinzufügen, Quadrate erstellen usw. Es wird interessant, wenn Sie die Eigenschaften an ihre Grenzen bringen, indem Sie negatives `padding` und/oder `margin` verwenden oder indem Sie `border-radius` größer als die tatsächliche Größe der Box machen.

### Kreise erstellen

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Dies ist etwas, das sowohl sehr einfach als auch sehr spaßig ist. Die Eigenschaft {{cssxref("border-radius")}} ist dafür gemacht, abgerundete Ecken auf Boxen anzuwenden, aber was passiert, wenn die Radiusgröße gleich oder größer ist als die tatsächliche Breite der Box?

```css
.fancy {
  /* Within a circle, centered text looks prettier. */
  text-align: center;

  /* Let's avoid our text touching the border. As
     our text will still flow in a square, it looks
     nicer that way, giving the feeling that it's a "real"
     circle. */
  padding: 1em;

  /* The border will make the circle visible.
     You could also use a background, as
     backgrounds are clipped by border radius */
  border: 0.5em solid black;

  /* Let's make sure we have a square.
     If it's not a square, we'll get an
     ellipsis rather than a circle */
  width: 4em;
  height: 4em;

  /* and let's turn the square into a circle */
  border-radius: 100%;
}
```

Ja, wir erhalten einen Kreis:

{{ EmbedLiveSample('Making_circles', '100%', '120') }}

## Hintergründe

Wenn wir über eine schicke Box sprechen, sind die Kerneigenschaften, die dies handhaben, [background-\* Eigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders). Wenn Sie anfangen, mit Hintergründen zu experimentieren, wird Ihr CSS-Element zu einer leeren Leinwand, die Sie füllen.

Bevor wir zu praktischen Beispielen springen, lassen Sie uns einen Moment zurückblicken, da es zwei Dinge gibt, die Sie über Hintergründe wissen sollten.

- Es ist möglich, [mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) auf einer einzigen Box einzustellen. Sie werden wie Schichten übereinander gestapelt.
- Hintergründe können entweder einfarbig oder Bilder sein: Einfarbige Hintergründe füllen immer die gesamte Oberfläche, aber Bilder können skaliert und positioniert werden.

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Okay, lassen Sie uns mit Hintergründen Spaß haben:

```css
.fancy {
  padding: 1em;
  width: 100%;
  height: 200px;
  box-sizing: border-box;

  /* At the bottom of our background stack,
     let's have a misty grey solid color */
  background-color: #e4e4d9;

  /* We stack linear gradients on top of each
     other to create our color strip effect.
     As you will notice, color gradients are
     considered to be images and can be
     manipulated as such */
  background-image:
    linear-gradient(175deg, transparent 95%, #8da389 95%),
    linear-gradient(85deg, transparent 95%, #8da389 95%),
    linear-gradient(175deg, transparent 90%, #b4b07f 90%),
    linear-gradient(85deg, transparent 92%, #b4b07f 92%),
    linear-gradient(175deg, transparent 85%, #c5a68e 85%),
    linear-gradient(85deg, transparent 89%, #c5a68e 89%),
    linear-gradient(175deg, transparent 80%, #ba9499 80%),
    linear-gradient(85deg, transparent 86%, #ba9499 86%),
    linear-gradient(175deg, transparent 75%, #9f8fa4 75%),
    linear-gradient(85deg, transparent 83%, #9f8fa4 83%),
    linear-gradient(175deg, transparent 70%, #74a6ae 70%),
    linear-gradient(85deg, transparent 80%, #74a6ae 80%);
}
```

{{ EmbedLiveSample('Backgrounds', '100%', '200') }}

> [!NOTE]
> Verläufe können auf sehr kreative Weise verwendet werden. Wenn Sie einige kreative Beispiele sehen möchten, werfen Sie einen Blick auf [Lea Verou's CSS-Muster](https://projects.verou.me/css3patterns/). Wenn Sie mehr über Verläufe erfahren möchten, schauen Sie sich gerne [unseren speziellen Artikel](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) dazu an.

## Pseudo-Elemente

Beim Styling einer einzelnen Box könnten Sie sich eingeschränkt fühlen und sich wünschen, mehr Boxen zu haben, um noch beeindruckendere Stile zu kreieren. Meistens führt das dazu, dass der DOM übermäßig mit zusätzlichen HTML-Elementen gefüllt wird, die nur zu Stilzwecken dienen. Auch wenn dies notwendig ist, wird es als schlechte Praxis angesehen. Eine Lösung, um solche Fallstricke zu vermeiden, ist die Verwendung von [CSS-Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

### Eine Wolke

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Lassen Sie uns ein Beispiel geben, indem wir unsere Box in eine Wolke verwandeln:

```css
.fancy {
  text-align: center;

  /* Same trick as previously used to make circles */
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  padding: 80px 1em 0 1em;

  /* We make room for the "ears" of our cloud */
  margin: 0 100px;

  position: relative;

  background-color: #a4c9cf;

  /* Well, actually we are not making a full circle
     as we want the bottom of our cloud to be flat.
     Feel free to tweak this example to make a cloud
     that isn't flat at the bottom ;) */
  border-radius: 100% 100% 0 0;
}

/* Those are common style that apply to both our ::before
   and ::after pseudo elements. */
.fancy::before,
.fancy::after {
  /* This is required to be allowed to display the
     pseudo-elements, event if the value is an empty
     string */
  content: "";

  /* We position our pseudo-elements on the left and
     right sides of the box, but always at the bottom */
  position: absolute;
  bottom: 0;

  /* This makes sure our pseudo-elements will be below
     the box content whatever happens. */
  z-index: -1;

  background-color: #a4c9cf;
  border-radius: 100%;
}

.fancy::before {
  /* This is the size of the clouds left ear */
  width: 125px;
  height: 125px;

  /* We slightly move it to the left */
  left: -80px;

  /* To make sure that the bottom of the cloud
     remains flat, we must make the bottom right
     corner of the left ear square. */
  border-bottom-right-radius: 0;
}

.fancy::after {
  /* This is the size of the clouds left ear */
  width: 100px;
  height: 100px;

  /* We slightly move it to the right */
  right: -60px;

  /* To make sure that the bottom of the cloud
     remains flat, we must make the bottom left
     corner of the right ear square. */
  border-bottom-left-radius: 0;
}
```

{{ EmbedLiveSample('A_cloud', '100%', '160') }}

### Blockquote

Ein praktischeres Beispiel für die Verwendung von Pseudo-Elementen ist der Aufbau eines schönen Formats für HTML-{{HTMLElement('blockquote')}}-Elemente. Lassen Sie uns also ein Beispiel mit einem leicht anderen HTML-Schnipsel sehen (was uns eine Gelegenheit bietet, auch die Designlokalisierung zu behandeln):

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

So kommt unser Stil:

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
    6rem/100% "Georgia",
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

Es ist möglich, einen wunderbaren Effekt zu erzeugen, wenn wir all dies zusammenmischen. Irgendwann, um eine solche Verzierung der Box zu erreichen, ist es eine Frage der Kreativität, sowohl im Design als auch im technischen Einsatz von CSS-Eigenschaften. Indem wir dies tun, ist es möglich, optische Täuschungen zu erzeugen, die Ihre Boxen lebendig erscheinen lassen, wie in diesem Beispiel:

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Lassen Sie uns einige partielle Schlagschatteneffekte erstellen. Die Eigenschaft {{cssxref("box-shadow")}} ermöglicht es uns, inneres Licht und einen flachen Schlagschatteneffekt zu erzeugen, aber mit etwas zusätzlicher Arbeit wird es möglich, eine natürlichere Geometrie zu schaffen, indem ein Pseudo-Element und die Eigenschaft {{cssxref("rotate")}} verwendet werden, eine der drei individuellen {{cssxref("transform")}} Eigenschaften.

```css
.fancy {
  position: relative;
  background-color: #ffffcc;
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
