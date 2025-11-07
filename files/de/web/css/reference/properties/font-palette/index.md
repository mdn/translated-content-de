---
title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen Paletten, die in einer [Farbschrift](https://www.colorfonts.wtf/) enthalten sind, auszuwählen, die ein Benutzeragent für die Schrift verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette`-Palette hat Vorrang beim Färben einer Schrift. Die {{cssxref("color")}} Eigenschaft wird eine Schriftpalette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} spezifiziert ist.

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
  - : Gibt die Standardfarbpalette oder die Standardglyphenfärbung an (vom Font-Designer festgelegt), die für die Schrift verwendet werden soll. Mit dieser Einstellung wird die Palette im Font an Index 0 gerendert.
- `light`
  - : Gibt die erste Palette im Font an, die zu 'light' passt, um für die Schrift verwendet zu werden. Einige Schriften enthalten Metadaten, die eine Palette als anwendbar für einen hellen (nahezu weißen) Hintergrund identifizieren. Wenn ein Font diese Metadaten nicht hat, verhält sich der Wert `light` wie `normal`.
- `dark`
  - : Gibt die erste Palette im Font an, die zu 'dark' passt, um für die Schrift verwendet zu werden. Einige Schriften enthalten Metadaten, die eine Palette als anwendbar für einen dunklen (nahezu schwarzen) Hintergrund identifizieren. Wenn ein Font diese Metadaten nicht hat, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es, eigene Werte für die Schriftpalette über die [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel zu definieren. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte nach angegebenen Prozentsätzen und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette angeben

Dieses Beispiel ermöglicht es, die erste Palette zu verwenden, die als _dark_ (funktioniert am besten auf einem nahezu schwarzen Hintergrund) vom Schrift-Designer markiert wurde.

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel veranschaulicht, wie `font-palette` Wertänderungen animiert werden, um eine sanfte Schriftanimation zu erstellen.

#### HTML

Das HTML enthält einen einfachen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbschrift](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true), und definieren zwei benutzerdefinierte `font-palette` Werte mit der {{cssxref("@font-palette-values")}} At-Regel. Wir erstellen dann {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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
> Browser, die noch `discrete` `font-palette` Animation implementieren, wechseln zwischen den beiden Paletten, anstatt sie nahtlos zu animieren.

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
