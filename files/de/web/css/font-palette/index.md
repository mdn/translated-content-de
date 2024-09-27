---
title: font-palette
slug: Web/CSS/font-palette
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-palette`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Angabe einer der vielen Paletten, die in einer [Farbenschrift](https://www.colorfonts.wtf/) enthalten sind und die ein Benutzeragent für die Schriftart verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette` Palette hat Vorrang beim Einfärben einer Schriftart. Die {{cssxref("color")}}-Eigenschaft wird eine Schriftpaletteneinstellung nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben wird.

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
  - : Gibt die Standardfarbpalette oder die vom Schriftartdesigner festgelegte Standardglypheneinfärbung an, die für die Schriftart verwendet werden soll. Mit dieser Einstellung wird die Palette im Font an Index 0 gerendert.
- `light`
  - : Gibt die erste Palette im Font an, die 'light' entspricht, um sie für die Schriftart zu verwenden. Einige Schriftarten enthalten Metadaten, die eine Palette als geeignet für einen hellen (nahezu weißen) Hintergrund kennzeichnen. Wenn ein Font diese Metadaten nicht enthält, verhält sich der Wert `light` wie `normal`.
- `dark`
  - : Gibt die erste Palette im Font an, die 'dark' entspricht, um sie für die Schriftart zu verwenden. Einige Schriftarten enthalten Metadaten, die eine Palette als geeignet für einen dunklen (nahezu schwarzen) Hintergrund kennzeichnen. Wenn ein Font diese Metadaten nicht enthält, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, Ihre eigenen Werte für die Schriftpalette zu definieren, indem Sie die [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert, indem zwei `font-palette` Werte durch angegebene Prozentsätze und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Angabe einer dunklen Palette

Dieses Beispiel ermöglicht es, die vom Schriftartdesigner als _dark_ markierte erste Palette (funktioniert am besten auf einem fast schwarzen Hintergrund) zu verwenden.

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel zeigt, wie man `font-palette` Wertänderungen animiert, um eine weiche Schriftanimation zu erstellen.

#### HTML

Das HTML enthält einen einzelnen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbenschrift](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette` Werte mit der {{cssxref("@font-palette-values")}} At-Regel. Dann erstellen wir {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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

Die Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> Browser, die noch `discrete` `font-palette` Animation implementieren, wechseln zwischen den beiden Paletten hin und her, anstatt sie sanft zu animieren.

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
