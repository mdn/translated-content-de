---
title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

Die **`background-attachment`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob die Position eines Hintergrundbildes innerhalb des {{Glossary("viewport", "Ansichtsfensters")}} festgelegt ist oder mit seinem enthaltenden Block scrollt.

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

Die `background-attachment`-Eigenschaft wird als eines oder mehrere der Schlüsselwortwerte, getrennt durch Kommas, angegeben.

### Werte

- `fixed`
  - : Der Hintergrund ist relativ zum Ansichtsfenster fixiert. Selbst wenn ein Element einen Scrollmechanismus hat, bewegt sich der Hintergrund nicht mit dem Element. Falls festgelegt, wird die {{cssxref("background-origin")}}-Eigenschaft ignoriert.
- `local`
  - : Der Hintergrund ist relativ zum Inhalt des Elements fixiert. Wenn das Element einen Scrollmechanismus hat, scrollt der Hintergrund mit den Inhalten des Elements, und der Hintergrundmalbereich und der Hintergrundpositionierungsbereich sind relativ zum scrollbaren Bereich des Elements und nicht zu dem sie umrahmenden Rand.
- `scroll`
  - : Der Hintergrund ist relativ zum Element selbst fixiert und scrollt nicht mit dessen Inhalt. (Er ist praktisch am Rand des Elements befestigt.)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

Wir fügen eine ungeordnete Liste ({{htmlelement("ul")}}) mit einigen Listenelementen ({{htmlelement("li")}}) ein.

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

Wir definieren ein {{cssxref("background-image")}} und setzen `background-attachment` auf `fixed`. Wir fügen auch {{cssxref("height")}}, {{cssxref("width")}} und {{cssxref("overflow")}} hinzu, um sicherzustellen, dass das Element scrollt.

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

Beachten Sie, wie der Hintergrund relativ zum Ansichtsfenster der Liste fixiert bleibt, wenn Sie den überflüssigen Text in den sichtbaren Bereich scrollen.

### Mehrere Hintergrundbilder

Diese Eigenschaft unterstützt mehrere Hintergrundbilder. Sie können für jedes Hintergrundbild ein anderes `<attachment>` angeben, durch Kommas getrennt. Jedes Bild wird mit dem entsprechenden `<attachment>`-Typ von erstem zu letztem spezifizierten verknüpft.

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

Wir fügen eine {{cssxref("height")}}, {{cssxref("width")}} und {{cssxref("overflow")}} auf dem übergeordneten {{htmlelement("div")}} hinzu, um sicherzustellen, dass die Inhalte scrollen.

Wir definieren zwei durch Komma getrennte Hintergrundbilder auf der Liste und setzen `background-attachment` auf `fixed, scroll`, was bedeutet, dass das erste Hintergrundbild `fixiert` und das zweite `scrollt` wird. Wir setzen die {{cssxref("background-repeat")}}, um beide Hintergrundbilder vertikal zu wiederholen, und trennen sie mit der {{cssxref("background-position")}}-Eigenschaft.

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

Beachten Sie, wie das erste Hintergrundbild am Ansichtsfenster fixiert ist, während das zweite Hintergrundbild relativ zur Liste fixiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}} CSS Eigenschaften:
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
