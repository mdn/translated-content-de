---
title: font-palette
slug: Web/CSS/font-palette
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`font-palette`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es, eine der vielen Paletten anzugeben, die in einer [Farbfont](https://www.colorfonts.wtf/) enthalten sind, die ein Benutzeragent für die Schriftart verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette`-Palette hat Vorrang, wenn eine Schriftart eingefärbt wird. Die {{cssxref("color")}}-Eigenschaft wird eine Schriftartenpalette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} festgelegt wird.

## Syntax

```css
/* Using a font-defined palette */
font-palette: normal;

/* Using a user-defined palette */
font-palette: --one;

/* Creating a new palette by blending two others */
font-palette: palette-mix(in lch, --blue, --yellow);
```

### Werte

- `normal`
  - : Gibt an, dass die Standardfarbpalette oder die standardmäßige Glyphenfärbung (vom Schriftartenhersteller festgelegt) für die Schriftart verwendet werden soll. Mit dieser Einstellung wird die Palette im Font an Index 0 gerendert.
- `light`
  - : Gibt an, dass die erste Palette im Font, die als 'light' gekennzeichnet ist, für die Schriftart verwendet werden soll. Einige Fonts enthalten Metadaten, die eine Palette als geeignet für einen hellen (fast weißen) Hintergrund identifizieren. Wenn ein Font diese Metadaten nicht hat, verhält sich der Wert `light` wie `normal`.
- `dark`
  - : Gibt an, dass die erste Palette im Font, die als 'dark' gekennzeichnet ist, für die Schriftart verwendet werden soll. Einige Fonts enthalten Metadaten, die eine Palette als geeignet für einen dunklen (fast schwarzen) Hintergrund identifizieren. Wenn ein Font diese Metadaten nicht hat, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es, eigene Werte für die Schriftpalette anzugeben, indem die [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwendet wird. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette`-Wert, indem zwei `font-palette`-Werte durch festgelegte Prozentsätze und Farbeninterpolationsmethoden miteinander vermischt werden.

## Formelle Definition

{{CSSInfo}}

## Formelle Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette spezifizieren

Dieses Beispiel ermöglicht es, die erste vom Schriftartenhersteller als _dark_ markierte Palette zu verwenden (funktioniert am besten auf einem fast schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animieren zwischen zwei Paletten

Dieses Beispiel veranschaulicht, wie `font-palette`-Wertänderungen animiert werden können, um eine flüssige Schriftanimation zu erstellen.

#### HTML

Das HTML enthält einen einzelnen Absatz von Text, der animiert werden soll:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbfont](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette`-Werte mit der {{cssxref("@font-palette-values")}} At-Regel. Dann erstellen wir {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

```css
@import "https://fonts.googleapis.com/css2?family=Nabla&display=swap";

@font-palette-values --blue-nabla {
  font-family: Nabla;
  base-palette: 2; /* this is Nabla's blue palette */
}

@font-palette-values --grey-nabla {
  font-family: Nabla;
  base-palette: 3; /* this is Nabla's grey palette */
}

@keyframes animate-palette {
  from {
    font-palette: --grey-nabla;
  }

  to {
    font-palette: --blue-nabla;
  }
}

p {
  font-family: "Nabla", fantasy;
  font-size: 5rem;
  margin: 0;
  text-align: center;
  animation: animate-palette 4s infinite alternate linear;
}
```

#### Ergebnis

Die Ausgabe sieht so aus:

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> Browser, die noch `discrete` `font-palette`-Animation implementieren, werden zwischen den beiden Paletten umschalten, anstatt flüssig zu animieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette/palette-mix","palette-mix()")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Deskriptor
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
