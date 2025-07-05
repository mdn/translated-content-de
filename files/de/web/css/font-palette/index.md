---
title: font-palette
slug: Web/CSS/font-palette
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, eine der vielen Paletten anzugeben, die ein [Farbfont](https://www.colorfonts.wtf/) enthält und die ein Benutzeragent für den Font verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette`-Palette hat Vorrang beim Färben eines Fonts. Die {{cssxref("color")}} Eigenschaft wird eine Font-Palette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} spezifiziert wird.

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
  - : Gibt die Standardfarbpalette oder die vom Schriftdesigner festgelegte Standardglyphenfärbung an, die für den Font verwendet werden soll. Mit dieser Einstellung wird die Palette im Font am Index 0 gerendert.
- `light`
  - : Gibt die erste Palette im Font an, die mit 'light' übereinstimmt und für den Font verwendet werden soll. Einige Fonts enthalten Metadaten, die eine Palette als geeignet für einen hellen (nahezu weißen) Hintergrund identifizieren. Falls ein Font diese Metadaten nicht besitzt, verhält sich der `light` Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette im Font an, die mit 'dark' übereinstimmt und für den Font verwendet werden soll. Einige Fonts enthalten Metadaten, die eine Palette als geeignet für einen dunklen (nahezu schwarzen) Hintergrund identifizieren. Falls ein Font diese Metadaten nicht besitzt, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es, eigene Werte für die Font-Palette mithilfe der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel anzugeben. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte anhand angegebener Prozentsätze und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette angeben

Dieses Beispiel ermöglicht es Ihnen, die erste Palette zu verwenden, die vom Schriftenersteller als _dunkel_ markiert wurde (funktioniert am besten auf einem nahezu schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel veranschaulicht, wie Änderungen von `font-palette` Werten animiert werden können, um eine sanfte Schriftanimation zu erstellen.

#### HTML

Das HTML enthält einen einzelnen Absatz Text, der animiert werden soll:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir einen [Farbfont](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte mithilfe der {{cssxref("@font-palette-values")}} At-Regel. Wir erstellen dann {{cssxref("@keyframes")}}, die zwischen diesen zwei Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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
  font-family: "Nabla", fantasy;
  font-size: 5rem;
  margin: 0;
  text-align: center;
  animation: animate-palette 4s infinite alternate linear;
}
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus:

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> Browser, die noch `diskrete` `font-palette` Animationen implementieren, werden zwischen den zwei Paletten hin- und herspringen, anstatt sanft zu animieren.

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
