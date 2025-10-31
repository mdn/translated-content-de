---
title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`background-attachment`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob die Position eines Hintergrundbilds innerhalb des {{Glossary("viewport", "Viewports")}} festgelegt ist oder mit seinem enthaltenen Block scrollt.

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
background-attachment: local, scroll;
```

```css interactive-example-choice
background-attachment: scroll, local;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill. London. Michaelmas term
    lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall.
    Implacable November weather. As much mud in the streets as if the waters had
    but newly retired from the face of the earth, and it would not be wonderful
    to meet a Megalosaurus, forty feet long or so, waddling like an elephantine
    lizard up Holborn Hill.
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
  color: #ff5454;
  font-size: 1.5em;
  font-weight: bold;
  overflow: auto;
  padding: 20px;
  text-shadow:
    0 0 0.6rem black,
    0 0 0.6rem black;
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

Die `background-attachment`-Eigenschaft wird als eines der Schlüsselwortwerte aus der untenstehenden Liste angegeben.

### Werte

- `fixed`
  - : Der Hintergrund ist relativ zum Viewport fest. Selbst wenn ein Element einen Bildlaufmechanismus hat, bewegt sich der Hintergrund nicht mit dem Element.
- `local`
  - : Der Hintergrund ist relativ zu den Inhalten des Elements fest. Wenn das Element einen Bildlaufmechanismus hat, scrollt der Hintergrund mit den Inhalten des Elements, und der Hintergrunddarstellungsbereich und der Hintergrundpositionierungsbereich sind relativ zum scrollbaren Bereich des Elements und nicht zum Rahmen, der sie umgibt.
- `scroll`
  - : Der Hintergrund ist relativ zum Element selbst fest und scrollt nicht mit den Inhalten. (Er ist effektiv an den Rahmen des Elements angehängt.)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
</p>
```

#### CSS

```css
p {
  background-image: url("star-solid.gif");
  background-attachment: fixed;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

### Mehrere Hintergrundbilder

Diese Eigenschaft unterstützt mehrere Hintergrundbilder. Sie können für jedes Hintergrundbild ein anderes `<attachment>` angeben, getrennt durch Kommata. Jedes Bild wird mit dem entsprechenden `<attachment>`-Typ von zuerst angegeben bis zuletzt übereinstimmend.

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
</p>
```

#### CSS

```css
p {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple_background_images")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
