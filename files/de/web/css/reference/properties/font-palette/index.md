---
title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen Paletten anzugeben, die in einer [Farbfont](https://www.colorfonts.wtf/) enthalten sind, die ein Benutzeragent für die Schrift verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette` Palette hat Vorrang bei der Farbgebung einer Schrift. Die {{cssxref("color")}} Eigenschaft wird eine Schriftpaletteneinstellung nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben ist.

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
  - : Gibt die Standardfarbpalette oder die Standardglyphenfärbung an (festgelegt vom Schriftgestalter), die für die Schrift verwendet werden soll. Mit dieser Einstellung wird die Palette im Font an Index 0 gerendert.
- `light`
  - : Gibt die erste Palette im Font an, die mit 'light' übereinstimmt und für die Schrift verwendet werden soll. Einige Fonts enthalten Metadaten, die eine Palette als anwendbar für einen hellen (nahezu weißen) Hintergrund kennzeichnen. Wenn ein Font diese Metadaten nicht hat, verhält sich der `light` Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette im Font an, die mit 'dark' übereinstimmt und für die Schrift verwendet werden soll. Einige Fonts enthalten Metadaten, die eine Palette als anwendbar für einen dunklen (nahezu schwarzen) Hintergrund kennzeichnen. Wenn ein Font diese Metadaten nicht hat, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, eigene Werte für die Schriftpalette festzulegen, indem Sie die [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte mit angegebenen Prozentsätzen und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette angeben

Dieses Beispiel ermöglicht es, die erste vom Schriftgestalter als _dark_ markierte Palette zu verwenden (funktioniert am besten auf einem nahezu schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel zeigt, wie man `font-palette` Wertänderungen animiert, um eine flüssige Schriftenanimation zu erstellen.

#### HTML

Das HTML enthält einen einzelnen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbfont](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte mithilfe der {{cssxref("@font-palette-values")}} At-Regel. Dann erstellen wir {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

```css
@import "https://fonts.googleapis.com/css2?family=Nabla&display=swap";

@font-palette-values --blue-nabla {
  font-family: "Nabla";
  base-palette: 2; /* this is Nabla's blue palette */
}

@font-palette-values --grey-nabla {
  font-family: "Nabla";
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

Die Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample("Animation zwischen zwei Paletten", "100%", 300)}}

> [!NOTE]
> Browser, die immer noch `discrete` `font-palette` Animation implementieren, werden zwischen den beiden Paletten umschalten, anstatt flüssig zu animieren.

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
