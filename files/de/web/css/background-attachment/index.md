---
title: background-attachment
slug: Web/CSS/background-attachment
l10n:
  sourceCommit: add5f40955f467bf1a06415238bc6a32d22c5785
---

{{CSSRef}}

Die **`background-attachment`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Position eines Hintergrundbildes innerhalb des {{glossary("viewport")}} fixiert ist oder mit seinem umgebenden Block scrollt.

{{EmbedInteractiveExample("pages/css/background-attachment.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Globale Werte */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: revert-layer;
background-attachment: unset;
```

Die `background-attachment` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `fixed`
  - : Der Hintergrund ist relativ zum Viewport fixiert. Selbst wenn ein Element einen Scroll-Mechanismus hat, bewegt sich der Hintergrund nicht mit dem Element.
- `local`
  - : Der Hintergrund ist relativ zu den Inhalten des Elements fixiert. Wenn das Element einen Scroll-Mechanismus hat, scrollt der Hintergrund mit den Inhalten des Elements, und der Hintergrundmalbereich und der Hintergrundpositionierungsbereich beziehen sich auf den scrollbaren Bereich des Elements anstatt auf den Rahmen, der sie umgibt.
- `scroll`
  - : Der Hintergrund ist relativ zum Element selbst fixiert und scrollt nicht mit seinen Inhalten. (Er ist effektiv am Rahmen des Elements befestigt.)

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

Diese Eigenschaft unterstützt mehrere Hintergrundbilder. Sie können für jeden Hintergrund einen anderen `<attachment>`-Wert angeben, getrennt durch Kommata. Jedes Bild wird mit dem entsprechenden `<attachment>`-Typ von zuerst bis zuletzt angegeben verglichen.

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

- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
