---
title: Erstellen Sie schicke Boxen
slug: Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

CSS-Boxen sind die Bausteine jeder mit CSS gestalteten Webseite. Es macht Spaß und ist herausfordernd, sie ansprechend aussehen zu lassen. Es macht Spaß, weil es darum geht, eine Designidee in funktionierenden Code umzuwandeln; es ist herausfordernd wegen der Einschränkungen von CSS. Lassen Sie uns einige schicke Boxen erstellen.

Bevor wir uns der praktischen Seite zuwenden, stellen Sie sicher, dass Sie mit [dem CSS-Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) vertraut sind. Es ist auch eine gute Idee, aber keine Voraussetzung, mit einigen [CSS-Layout-Grundlagen](/de/docs/Learn_web_development/Core/CSS_layout/Introduction) vertraut zu sein.

Auf der technischen Seite geht es beim Erstellen schicker Boxen darum, die CSS-Eigenschaften **border** und **background** zu meistern und sie auf eine gegebene Box anzuwenden. Aber über die Techniken hinaus geht es auch darum, Ihre Kreativität freizusetzen. Dies wird nicht an einem einzigen Tag erledigt, und einige Webentwickler verbringen ihr ganzes Leben damit, Spaß daran zu haben.

Wir werden viele Beispiele sehen, aber wir werden immer mit dem einfachsten HTML-Element arbeiten, einem einfachen Element:

```html
<div class="fancy">Hi! I want to be fancy.</div>
```

Okay, das ist ein sehr kleines Stück HTML, was können wir an diesem Element ändern? Alles Folgende:

- Seine Boxmodell-Eigenschaften: {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("border")}}, etc.
- Seine Hintergrundeigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-position")}}, {{cssxref("background-size")}}, etc.
- Sein Pseudoelement: {{cssxref("::before")}} und {{cssxref("::after")}}
- und einige zusätzliche Eigenschaften wie: {{cssxref("box-shadow")}}, {{cssxref("rotate")}}, {{cssxref("outline")}}, etc.

Wir haben also einen sehr großen Spielplatz. Lassen Sie den Spaß beginnen.

## Anpassung des Boxmodells

Allein das Boxmodell ermöglicht es uns, einige grundlegende Dinge zu tun, wie einfache Ränder hinzuzufügen, Quadrate zu erstellen, etc. Es wird interessant, wenn Sie die Eigenschaften bis an die Grenze treiben, indem Sie negative `padding` und/oder `margin` verwenden oder einen `border-radius` haben, der größer ist als die tatsächliche Größe der Box.

### Erstellung von Kreisen

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Dies ist etwas, das sowohl sehr einfach als auch sehr unterhaltsam ist. Die Eigenschaft {{cssxref("border-radius")}} dient dazu, abgerundete Ecken auf Boxen anzuwenden, aber was passiert, wenn die Radiusgröße gleich oder größer ist als die tatsächliche Breite der Box?

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

Ja, wir bekommen einen Kreis:

{{ EmbedLiveSample('Making_circles', '100%', '120') }}

## Hintergründe

Wenn wir über eine schicke Box sprechen, sind die Kerneigenschaften dafür [background-\* Eigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders). Wenn Sie anfangen, mit Hintergründen zu spielen, wird Ihre CSS-Box wie eine leere Leinwand, die Sie füllen können.

Bevor wir zu einigen praktischen Beispielen übergehen, nehmen wir uns einen Moment, da es zwei Dinge gibt, die Sie über Hintergründe wissen sollten.

- Es ist möglich, [mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) auf einer einzigen Box zu setzen. Sie werden wie Schichten übereinander gestapelt.
- Hintergründe können entweder Volltonfarben oder Bilder sein: Eine Volltonfarbe füllt immer die gesamte Fläche, aber Bilder können skaliert und positioniert werden.

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Okay, lassen Sie uns Spaß mit Hintergründen haben:

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
> Verläufe können auf sehr kreative Weise verwendet werden. Wenn Sie einige kreative Beispiele sehen möchten, schauen Sie sich [Lea Verou's CSS-Muster](https://projects.verou.me/css3patterns/) an. Wenn Sie mehr über Verläufe erfahren möchten, schauen Sie sich [unseren speziellen Artikel](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) an.

## Pseudoelemente

Beim Stylen einer einzelnen Box können Sie sich eingeschränkt fühlen und wünschen, mehr Boxen zu haben, um noch erstaunlichere Stile zu erstellen. Meistens führt das dazu, das DOM zu verschmutzen, indem zusätzliche HTML-Elemente nur für den Zweck des Stils hinzugefügt werden. Selbst wenn dies notwendig ist, wird es als schlechte Praxis betrachtet. Eine Lösung, um solche Fallstricke zu vermeiden, besteht darin, [CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) zu verwenden.

### Eine Wolke

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Lassen Sie uns ein Beispiel machen, indem wir unsere Box in eine Wolke verwandeln:

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

Ein praktischeres Beispiel für die Verwendung von Pseudoelementen ist das Erstellen eines schönen Formats für HTML {{HTMLElement('blockquote')}}-Elemente. Schauen wir uns ein Beispiel mit einem etwas anderen HTML-Snippet an (das uns die Möglichkeit bietet, auch das Design zu lokalisieren):

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

Es ist also möglich, einen wunderbaren Effekt zu erzielen, wenn wir all dies zusammenbringen. Irgendwann ist es bei der Erreichung einer solchen Boxverschönerung eine Frage der Kreativität, sowohl im Design als auch in der technischen Nutzung von CSS-Eigenschaften. Durch solches Vorgehen ist es möglich, optische Täuschungen zu erzeugen, die Ihre Boxen lebendig werden lassen, wie in diesem Beispiel:

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Lassen Sie uns einige partielle Schatteneffekte erstellen. Die Eigenschaft {{cssxref("box-shadow")}} ermöglicht es uns, ein inneres Licht und einen flachen Schatteneffekt zu erzeugen, aber mit ein wenig zusätzlicher Arbeit wird es möglich, eine natürlichere Geometrie zu schaffen, indem ein Pseudoelement und die Eigenschaft {{cssxref("rotate")}}, eine der drei individuellen {{cssxref("transform")}}-Eigenschaften, verwendet wird.

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
