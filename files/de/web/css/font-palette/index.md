---
title: font-palette
slug: Web/CSS/font-palette
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Angabe einer der vielen Paletten, die in einer [Farbschrift](https://www.colorfonts.wtf/) enthalten sind und die ein Benutzeragent für die Schriftart verwenden kann. Benutzende können die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) Regel verwenden.

> [!NOTE]
> Eine `font-palette` Palette hat Vorrang beim Einfärben einer Schriftart. Die {{cssxref("color")}} Eigenschaft überschreibt keine Schriftartenpalette, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben ist.

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
  - : Gibt die Standardfarbpalette oder die Standardglyphenfarbgestaltung an (vom Schriftart-Ersteller festgelegt), die für die Schrift zu verwenden ist. Mit dieser Einstellung wird die Palette in der Schriftart an Index 0 angezeigt.
- `light`
  - : Gibt die erste Palette in der Schriftart an, die mit 'light' übereinstimmt, um sie für die Schrift zu verwenden. Einige Schriftarten enthalten Metadaten, die eine Palette als anwendbar für einen hellen (nahezu weißen) Hintergrund identifizieren. Hat eine Schriftart diese Metadaten nicht, verhält sich der Wert `light` wie `normal`.
- `dark`
  - : Gibt die erste Palette in der Schrift an, die mit 'dark' übereinstimmt, um sie für die Schrift zu verwenden. Einige Schriftarten enthalten Metadaten, die eine Palette als anwendbar für einen dunklen (nahezu schwarzen) Hintergrund identifizieren. Hat eine Schriftart diese Metadaten nicht, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, Ihre eigenen Werte für die Schriftartenpalette mithilfe der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) Regel zu spezifizieren. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte durch festgelegte Prozentsätze und Farbinterpolationsmethoden miteinander vermischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette spezifizieren

Dieses Beispiel ermöglicht es Ihnen, die erste vom Schriftart-Ersteller als _dark_ markierte Palette zu verwenden (funktioniert am besten auf einem fast schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel zeigt, wie Änderungen des `font-palette` Wertes animiert werden können, um eine flüssige Schriftanimation zu erzeugen.

#### HTML

Das HTML enthält einen einzigen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbschrift](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte mit der {{cssxref("@font-palette-values")}} Regel. Wir erstellen dann {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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

Die Ausgabe sieht so aus:

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> Browser, die weiterhin `discrete` `font-palette` Animation implementieren, wechseln zwischen den beiden Paletten, anstatt reibungslos zu animieren.

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
