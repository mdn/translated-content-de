---
title: "`font-palette` CSS property"
short-title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen in einer [Farbschriftart](https://www.colorfonts.wtf/) enthaltenen Paletten anzugeben, die ein Benutzeragent für die Schrift verwenden kann. Benutzer können die Werte in einer Palette auch überschreiben oder eine neue Palette erstellen, indem sie die {{cssxref("@font-palette-values")}} At-Regel verwenden.

> [!NOTE]
> Eine `font-palette` Palette hat Vorrang beim Färben einer Schrift. Die {{cssxref("color")}} Eigenschaft wird eine Schriftpalette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} spezifiziert ist.

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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- `normal`
  - : Gibt die Standardfarbpalette oder die Standard-Glyphenfärbung (vom Schrifthersteller festgelegt) an, die für die Schrift verwendet werden soll. Mit dieser Einstellung wird die Palette in der Schriftart an Index 0 gerendert.
- `light`
  - : Gibt die erste Palette in der Schrift an, die 'light' entspricht und für die Schrift verwendet werden soll. Einige Schriften enthalten Metadaten, die eine Palette als geeignet für einen hellen (nahezu weißen) Hintergrund kennzeichnen. Wenn eine Schrift diese Metadaten nicht hat, verhält sich der `light` Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette in der Schrift an, die 'dark' entspricht und für die Schrift verwendet werden soll. Einige Schriften enthalten Metadaten, die eine Palette als geeignet für einen dunklen (nahezu schwarzen) Hintergrund kennzeichnen. Wenn eine Schrift diese Metadaten nicht hat, verhält sich der Wert wie `normal`.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ermöglicht es Ihnen, eigene Werte für die Schriftpalette anzugeben, indem Sie den `<palette-identifier>` einer [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel verwenden.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte durch angegebene Prozentsätze und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette angeben

Dieses Beispiel ermöglicht es Ihnen, die erste vom Schrifthersteller als _dark_ markierte Palette zu verwenden (funktioniert am besten auf einem nahezu schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Zwischen zwei Paletten animieren

Dieses Beispiel zeigt, wie die Werte von `font-palette` animiert werden, um eine fließende Schriftanimation zu erzeugen.

#### HTML

Das HTML enthält einen einzelnen Absatz von Text, der animiert werden soll:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbschriftart](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte mithilfe der {{cssxref("@font-palette-values")}} At-Regel. Dann erstellen wir {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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

{{EmbedLiveSample("Animieren zwischen zwei Paletten", "100%", 300)}}

> [!NOTE]
> Browser, die noch `diskrete` `font-palette` Animation implementieren, werden zwischen den beiden Paletten umschalten, anstatt fließend zu animieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Deskriptor
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
