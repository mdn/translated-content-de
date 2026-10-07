---
title: "`background-attachment` CSS property"
short-title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`background-attachment`** legt fest, ob die Position eines Hintergrundbilds innerhalb des {{Glossary("viewport", "Viewports")}} fixiert ist oder ob das Bild mit seinem umschließenden Block gescrollt wird.

{{InteractiveExample("CSS Demo: background-attachment")}}

```css interactive-example-choice
background-attachment: scroll;
```

```css interactive-example-choice
background-attachment: fixed;
```

```css interactive-example-choice
background-attachment: local;
```

```css interactive-example-choice
background-attachment: fixed, scroll;
```

```css interactive-example-choice
background-attachment: scroll, fixed;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      From there to here<br />
      from here to there,<br />
      Funny things<br />
      Are everywhere.
    </p>
    <p>--Dr. Seuss</p>
  </div>
</section>
```

```css interactive-example
body {
  overflow: scroll;
}

#default-example {
  height: 600px;
}

#example-element {
  max-width: 20rem;
  height: 100%;
  background:
    url("/shared-assets/images/examples/lizard.png") right 3rem top 1rem / 15rem
      no-repeat,
    url("/shared-assets/images/examples/moon.jpg") center / 10rem;
  font-size: 1.2rem;
  font-weight: bolder;
  overflow: auto;
  padding: 20px;
  color: red;
  text-shadow:
    0 0 0.5rem black,
    0 0 0.5rem black;
}
```

## Syntax

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: revert-layer;
background-attachment: unset;
```

### Werte

Diese Eigenschaft wird durch einen oder mehrere kommagetrennte Schlüsselwortwerte angegeben:

- `fixed`
  - : Der Hintergrund ist relativ zum Viewport fixiert. Selbst wenn ein Element gescrollt werden kann, bewegt sich der Hintergrund nicht mit dem Element. Ist dieser Wert gesetzt, wird die Eigenschaft {{cssxref("background-origin")}} ignoriert.
- `local`
  - : Der Hintergrund ist relativ zum Inhalt des Elements fixiert. Wenn das Element gescrollt werden kann, scrollt der Hintergrund mit seinem Inhalt. Der Bereich, in dem der Hintergrund gezeichnet und positioniert wird, bezieht sich dabei auf den scrollbaren Bereich des Elements statt auf den ihn umgebenden Rahmen.
- `scroll`
  - : Der Hintergrund ist relativ zum Element selbst fixiert und scrollt nicht mit dessen Inhalt. (Er ist damit praktisch am Rahmen des Elements befestigt.)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

Wir fügen eine ungeordnete Liste ({{htmlelement("ul")}}) mit einigen Listeneinträgen ({{htmlelement("li")}}) ein.

```html
<ul>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
</ul>
```

#### CSS

Wir definieren ein {{cssxref("background-image")}} und setzen `background-attachment` auf `fixed`. Außerdem legen wir {{cssxref("height")}}, {{cssxref("width")}} und {{cssxref("overflow")}} fest, damit das Element gescrollt werden kann.

```css
ul {
  background-image: url("star-solid.gif");
  background-attachment: fixed;

  width: 300px;
  height: 70px;
  overflow: scroll;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

Beachten Sie, dass der Hintergrund relativ zum Viewport der Liste fixiert bleibt, wenn Sie den überlaufenden Text ins Blickfeld scrollen.

### Mehrere Hintergrundbilder

Diese Eigenschaft unterstützt mehrere Hintergrundbilder. Sie können für jeden Hintergrund einen anderen `<attachment>`-Wert angeben, wobei die Werte durch Kommas getrennt werden. Jedem Bild wird der entsprechende `<attachment>`-Wert zugeordnet, von der ersten bis zur letzten Angabe.

#### HTML

Wir fügen das gesamte Gedicht von Dr. Seuss ein.

```html
<div>
  <ul>
    <li>One fish</li>
    <li>Two fish</li>
    <li>Red fish</li>
    <li>Blue fish</li>
    <li>Black fish</li>
    <li>Blue fish</li>
    <li>Old fish</li>
    <li>New fish.</li>
    <li>This one has a little star.</li>
    <li>This one has a little car.</li>
    <li>Say! What a lot</li>
    <li>Of fish there are.</li>
    <li>Yes. Some are red. And some are blue.</li>
    <li>Some are old. And some are new.</li>
    <li>Some are sad.</li>
    <li>And some are glad.</li>
    <li>And some are very, very bad.</li>
    <li>Why are they</li>
    <li>Sad and glad and bad?</li>
    <li>I do not know.</li>
    <li>Go ask your dad.</li>
    <li>Some are thin.</li>
    <li>And some are fat.</li>
    <li>The fat one has</li>
    <li>A yellow hat.</li>
    <li>From there to here, from here to there,</li>
    <li>Funny things</li>
    <li>Are everywhere.</li>
  </ul>
  <p>--Dr. Seuss</p>
</div>
```

#### CSS

Für das übergeordnete {{htmlelement("div")}} legen wir {{cssxref("height")}}, {{cssxref("width")}} und {{cssxref("overflow")}} fest, damit sein Inhalt gescrollt werden kann.

Wir definieren für die Liste zwei durch Kommas getrennte Hintergrundbilder und setzen `background-attachment` auf `fixed, scroll`. Das bedeutet, dass das erste Hintergrundbild `fixed` ist und das zweite `scroll` verwendet. Mit {{cssxref("background-repeat")}} sorgen wir dafür, dass sich beide Hintergrundbilder vertikal wiederholen; mithilfe der Eigenschaft {{cssxref("background-position")}} positionieren wir sie getrennt voneinander.

```css
div {
  width: 300px;
  height: 200px;
  overflow: scroll;
}
ul {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: repeat-y;
  background-position:
    0 0,
    100px 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple_background_images")}}

Beachten Sie, dass das erste Hintergrundbild relativ zum Viewport fixiert ist, während das zweite relativ zur Liste fixiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen CSS-Eigenschaften für {{cssxref("background")}}:
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
- [Mehrere Hintergründe verwenden](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Modul [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
