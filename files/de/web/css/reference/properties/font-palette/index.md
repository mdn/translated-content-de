---
title: "`font-palette` CSS property"
short-title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen Paletten aus einer [Farbschriftart](https://www.colorfonts.wtf/) anzugeben, die ein Benutzeragent für die Schriftart verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die {{cssxref("@font-palette-values")}}-Regel verwenden.

> [!NOTE]
> Eine `font-palette`-Palette hat Vorrang, wenn es darum geht, eine Schrift zu färben. Die {{cssxref("color")}} Eigenschaft wird eine Schriftart-Palette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben ist.

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
  - : Gibt die Standardfarbpalette oder die standardmäßige Glyphenfärbung (festgelegt durch den Schriftgestalter) an, die für die Schriftart verwendet werden soll. Mit dieser Einstellung wird die Palette im Font bei Index 0 gerendert.
- `light`
  - : Gibt die erste Palette in der Schrift an, die mit 'light' übereinstimmt und für die Schrift verwendet werden soll. Einige Schriftarten enthalten Metadaten, die eine Palette als anwendbar für einen hellen (nahe weiß) Hintergrund identifizieren. Wenn eine Schriftart diese Metadaten nicht enthält, verhält sich der `light`-Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette in der Schrift an, die mit 'dark' übereinstimmt und für die Schrift verwendet werden soll. Einige Schriftarten enthalten Metadaten, die eine Palette als anwendbar für einen dunklen (nahe schwarz) Hintergrund identifizieren. Wenn eine Schriftart diese Metadaten nicht enthält, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht das Angeben eigener Werte für die Schriftart-Palette unter Verwendung der [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) Regel. Dieser Wert wird im Format [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident) angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte durch angegebene Prozentsätze und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette angeben

Dieses Beispiel ermöglicht es Ihnen, die erste Palette zu verwenden, die vom Schriftgestalter als _dark_ (funktioniert am besten auf einem nahezu schwarzen Hintergrund) markiert wurde.

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Zwischen zwei Paletten animieren

Dieses Beispiel zeigt, wie `font-palette` Wertänderungen animiert werden, um eine weiche Schriftanimation zu erstellen.

#### HTML

Der HTML-Code enthält einen einzelnen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbschriftart](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte, indem wir die {{cssxref("@font-palette-values")}} Regel verwenden. Dann erstellen wir {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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

Die Ausgabe sieht so aus:

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> Browser, die noch eine `diskrete` `font-palette` Animation implementieren, werden zwischen den beiden Paletten umschalten, anstatt sanft zu animieren.

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
