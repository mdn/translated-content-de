---
title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen Paletten auszuwählen, die in einer [Farb-Schriftart](https://www.colorfonts.wtf/) enthalten sind. Diese kann von einem Benutzeragenten für die Schriftart verwendet werden. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette` hat Vorrang, wenn es darum geht, eine Schriftart einzufärben. Die {{cssxref("color")}} Eigenschaft wird eine Schriftartenpalette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} spezifiziert wurde.

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
  - : Gibt die Standardfarbpalette oder die Standardglyphfarbgebung an (vom Schriftartenhersteller festgelegt), die für die Schriftart verwendet werden soll. Mit dieser Einstellung wird die Palette in der Schrift an Index 0 gerendert.
- `light`
  - : Gibt die erste Palette in der Schrift an, die 'light' übereinstimmt und für die Schrift verwendet werden soll. Einige Schriftarten enthalten Metadaten, die eine Palette als anwendbar für einen hellen (nahezu weißen) Hintergrund identifizieren. Wenn eine Schriftart diese Metadaten nicht hat, verhält sich der `light`-Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette in der Schrift an, die 'dark' übereinstimmt und für die Schrift verwendet werden soll. Einige Schriftarten enthalten Metadaten, die eine Palette als anwendbar für einen dunklen (nahezu schwarzen) Hintergrund identifizieren. Wenn eine Schriftart diese Metadaten nicht hat, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, eigene Werte für die Schriftartenpalette zu spezifizieren, indem Sie die [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel verwenden. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident) Format spezifiziert.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette`-Wert, indem zwei `font-palette`-Werte durch angegebene Prozentsätze und Farbmischmethoden kombiniert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette angeben

Dieses Beispiel ermöglicht es Ihnen, die erste Palette zu verwenden, die vom Schriftartenhersteller als _dark_ (funktioniert am besten auf einem fast schwarzen Hintergrund) markiert wurde.

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel zeigt, wie `font-palette`-Wertänderungen animiert werden können, um eine sanfte Schriftanimation zu erstellen.

#### HTML

Das HTML enthält einen einzigen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farb-Schriftart](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette`-Werte mit der {{cssxref("@font-palette-values")}} At-Regel. Wir erstellen dann {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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
> Browser, die immer noch `diskrete` `font-palette` Animationen implementieren, werden zwischen den beiden Paletten umschalten, anstatt sie sanft zu animieren.

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
