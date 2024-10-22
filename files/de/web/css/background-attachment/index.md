---
title: background-attachment
slug: Web/CSS/background-attachment
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Die **`background-attachment`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Position eines Hintergrundbildes innerhalb des {{Glossary("viewport", "Viewport")}} fixiert ist oder mit seinem umschließenden Block scrollt.

{{EmbedInteractiveExample("pages/css/background-attachment.html")}}

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

Die `background-attachment` Eigenschaft wird als eines der Schlüsselwortwerte aus der unten stehenden Liste angegeben.

### Werte

- `fixed`
  - : Der Hintergrund ist relativ zum Viewport fixiert. Selbst wenn ein Element einen Scrollmechanismus hat, bewegt sich der Hintergrund nicht mit dem Element.
- `local`
  - : Der Hintergrund ist relativ zum Inhalt des Elements fixiert. Wenn das Element einen Scrollmechanismus hat, scrollt der Hintergrund mit dem Inhalt des Elements, und der Hintergrundmalbereich und der Hintergrundpositionierungsbereich sind relativ zum scrollbaren Bereich des Elements und nicht zum Rahmen, der sie einrahmt.
- `scroll`
  - : Der Hintergrund ist relativ zum Element selbst fixiert und scrollt nicht mit seinem Inhalt. (Es ist im Wesentlichen am Rahmen des Elements befestigt.)

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

{{EmbedLiveSample("Simple_example")}}

### Mehrere Hintergrundbilder

Diese Eigenschaft unterstützt mehrere Hintergrundbilder. Sie können ein anderes `<attachment>` für jedes Hintergrundbild angeben, getrennt durch Kommas. Jedes Bild wird mit dem entsprechenden `<attachment>` Typ von zuerst angegeben bis zuletzt zusammengeführt.

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

- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
