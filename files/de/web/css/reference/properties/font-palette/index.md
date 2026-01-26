---
title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen Paletten anzugeben, die in einer [Farbfont](https://www.colorfonts.wtf/) enthalten sind, die ein Benutzeragent für die Schriftart verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die {{cssxref("@font-palette-values")}} at-Regel verwenden.

> [!NOTE]
> Eine `font-palette` Palette hat Vorrang bei der Färbung einer Schriftart. Die {{cssxref("color")}} Eigenschaft wird eine Schriftartenpalette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben wird.

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
  - : Gibt die Standard-Farbpalette oder die Standard-Glyphenfärbung an (vom Schriftartenhersteller festgelegt), die für die Schriftart verwendet werden soll. Mit dieser Einstellung wird die Palette im Schriftfont an Index 0 gerendert.
- `light`
  - : Gibt die erste Palette im Schriftart an, die 'light' entspricht und für die Schriftart verwendet werden soll. Einige Schriftarten enthalten Metadaten, die eine Palette als geeignet für einen hellen (nahezu weißen) Hintergrund identifizieren. Wenn eine Schriftart nicht über diese Metadaten verfügt, verhält sich der `light` Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette im Schriftart an, die 'dark' entspricht und für die Schriftart verwendet werden soll. Einige Schriftarten enthalten Metadaten, die eine Palette als geeignet für einen dunklen (nahezu schwarzen) Hintergrund identifizieren. Wenn eine Schriftart nicht über diese Metadaten verfügt, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, eigene Werte für die Schriftartenpalette zu definieren, indem Sie die [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) at-Regel verwenden. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte mit angegebenen Prozentsätzen und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette spezifizieren

Dieses Beispiel ermöglicht Ihnen die Verwendung der ersten Palette, die vom Schriftartenhersteller als _dunkel_ markiert wurde (funktioniert am besten auf einem nahezu schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Zwischen zwei Paletten animieren

Dieses Beispiel zeigt, wie `font-palette` Wertänderungen animiert werden können, um eine sanfte Schriftart Animation zu erzeugen.

#### HTML

Das HTML enthält einen einzelnen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbfont](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte unter Verwendung der {{cssxref("@font-palette-values")}} at-Regel. Dann erstellen wir {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> Browser, die weiterhin `diskrete` `font-palette` Animation implementieren, wechseln zwischen den beiden Paletten, anstatt sanft zu animieren.

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
