---
title: background-attachment
slug: Web/CSS/background-attachment
l10n:
  sourceCommit: add5f40955f467bf1a06415238bc6a32d22c5785
---

{{CSSRef}}

Die **`background-attachment`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob die Position eines Hintergrundbildes innerhalb des [Ansichtsfensters](/de/docs/Glossary/viewport) fest ist oder mit seinem umgebenden Block scrollt.

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

Die `background-attachment`-Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben.

### Werte

- `fixed`
  - : Der Hintergrund ist relativ zum Ansichtsfenster fixiert. Selbst wenn ein Element über einen Scrollmechanismus verfügt, bewegt sich der Hintergrund nicht mit dem Element.
- `local`
  - : Der Hintergrund ist relativ zum Inhalt des Elements fixiert. Wenn das Element einen Scrollmechanismus hat, scrollt der Hintergrund mit dem Inhalt des Elements. Der Bereich für die Hintergrundmalerei und der Hintergrundpositionierungsbereich sind relativ zum scrollbaren Bereich des Elements und nicht zur den Rahmen umgebenden Grenze.
- `scroll`
  - : Der Hintergrund ist relativ zu dem Element selbst fixiert und scrollt nicht mit dem Inhalt. (Er ist effektiv an den Rahmen des Elements angeheftet.)

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
  background-image: url("starsolid.gif");
  background-attachment: fixed;
}
```

#### Ergebnis

{{EmbedLiveSample("Simple_example")}}

### Mehrere Hintergrundbilder

Diese Eigenschaft unterstützt mehrere Hintergrundbilder. Sie können für jeden Hintergrund ein anderes `<attachment>` angeben, getrennt durch Kommata. Jedes Bild wird mit dem entsprechenden `<attachment>`-Typ von der zuerst angegebenen bis zur zuletzt angegebenen verknüpft.

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
  background-image: url("starsolid.gif"), url("startransparent.gif");
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
