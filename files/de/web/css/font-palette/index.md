---
title: font-palette
slug: Web/CSS/font-palette
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen Paletten zu spezifizieren, die in einer [Farbschrift](https://www.colorfonts.wtf/) enthalten sind, die ein Nutzeragent für die Schrift verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette` Palette hat Vorrang beim Färben einer Schrift. Die {{cssxref("color")}} Eigenschaft wird eine Schriftpalette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben wird.

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
  - : Gibt die Standardfarbpalette oder die Standardglyphenfarbgebung an (vom Schriftgestalter festgelegt), die für die Schrift verwendet werden soll. Mit dieser Einstellung wird die im Font an Index 0 befindliche Palette gerendert.
- `light`
  - : Gibt die erste Palette in der Schrift an, die 'light' entspricht und für die Schrift verwendet werden soll. Einige Schriften enthalten Metadaten, die eine Palette als anwendbar für einen hellen (fast weißen) Hintergrund identifizieren. Wenn eine Schrift diese Metadaten nicht hat, verhält sich der `light` Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette in der Schrift an, die 'dark' entspricht und für die Schrift verwendet werden soll. Einige Schriften enthalten Metadaten, die eine Palette als anwendbar für einen dunklen (fast schwarzen) Hintergrund identifizieren. Wenn eine Schrift diese Metadaten nicht hat, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, eigene Werte für die Schriftpalette mithilfe der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel anzugeben. Dieser Wert wird im Format [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte nach angegebenen Prozentsätzen und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Spezifizieren einer dunklen Palette

Dieses Beispiel erlaubt es Ihnen, die erste Palette zu verwenden, die vom Schriftgestalter als _dunkel_ markiert wurde (funktioniert am besten auf einem fast schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel zeigt, wie `font-palette` Wertänderungen animiert werden, um eine fließende Schriftanimation zu erstellen.

#### HTML

Das HTML enthält einen einzelnen Absatz mit Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbschrift](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte mithilfe der {{cssxref("@font-palette-values")}} At-Regel. Wir erstellen dann {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

@font-palette-values --blueNabla {
  font-family: Nabla;
  base-palette: 2; /* this is Nabla's blue palette */
}

@font-palette-values --greyNabla {
  font-family: Nabla;
  base-palette: 3; /* this is Nabla's grey palette */
}

@keyframes animate-palette {
  from {
    font-palette: --greyNabla;
  }

  to {
    font-palette: --blueNabla;
  }
}

p {
  font-family: "Nabla";
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
> Browser, die noch diskrete `font-palette` Animation implementieren, werden zwischen den beiden Paletten umschalten, anstatt sie fließend zu animieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette/palette-mix","palette-mix()")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Descriptor
- {{cssxref("@font-palette-values/font-family", "font-family")}} Descriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Descriptor
