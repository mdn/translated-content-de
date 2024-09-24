---
title: font-palette
slug: Web/CSS/font-palette
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`font-palette`**-[CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es, eine der vielen Paletten anzugeben, die in einer [Farbfont](https://www.colorfonts.wtf/) enthalten sind, die ein Benutzeragent für die Schriftart verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel verwenden.

> [!NOTE]
> Eine `font-palette` Palette hat Vorrang beim Färben einer Schriftart. Die {{cssxref("color")}} Eigenschaft wird eine Schriftartpalette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben ist.

## Syntax

```css
/* Verwendung einer schriftdefinierten Palette */
font-palette: normal;

/* Verwendung einer benutzerdefinierten Palette */
font-palette: --one;

/* Erstellung einer neuen Palette durch Mischung zweier anderer */
font-palette: palette-mix(in lch, --blue, --yellow);
```

### Werte

- `normal`
  - : Gibt die Standardfarbpalette oder die Standardglyphenfärbung an (vom Schriftmacher festgelegt), die für die Schriftart verwendet werden soll. Mit dieser Einstellung wird die Palette im Schriftartindex 0 gerendert.
- `light`
  - : Gibt an, dass die erste Palette in der Schriftart verwendet werden soll, die mit 'light' übereinstimmt. Einige Schriftarten enthalten Metadaten, die eine Palette als geeignet für einen hellen (nahezu weißen) Hintergrund identifizieren. Wenn eine Schriftart diese Metadaten nicht enthält, verhält sich der `light` Wert wie `normal`.
- `dark`
  - : Gibt an, dass die erste Palette in der Schriftart verwendet werden soll, die mit 'dark' übereinstimmt. Einige Schriftarten enthalten Metadaten, die eine Palette als geeignet für einen dunklen (nahezu schwarzen) Hintergrund identifizieren. Wenn eine Schriftart diese Metadaten nicht enthält, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, Ihre eigenen Werte für die Schriftartpalette mithilfe der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel anzugeben. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette` Wert durch Mischen zweier `font-palette` Werte mit angegebenen Prozentsätzen und Farbinterpolationsmethoden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Angabe einer dunklen Palette

Dieses Beispiel ermöglicht es, die erste Palette zu verwenden, die vom Schriftmacher als _dark_ markiert wurde (funktioniert am besten auf einem nahezu schwarzen Hintergrund).

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animation zwischen zwei Paletten

Dieses Beispiel veranschaulicht, wie man `font-palette` Wertänderungen animieren kann, um eine weiche Schriftanimation zu erzeugen.

#### HTML

Das HTML enthält einen einzigen Absatz Text zur Animation:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farbfont](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true), und definieren zwei benutzerdefinierte `font-palette` Werte mit der {{cssxref("@font-palette-values")}} At-Regel. Dann erstellen wir {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

@font-palette-values --blueNabla {
  font-family: Nabla;
  base-palette: 2; /* dies ist Nablas blaue Palette */
}

@font-palette-values --greyNabla {
  font-family: Nabla;
  base-palette: 3; /* dies ist Nablas graue Palette */
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
> Browser, die immer noch `diskrete` `font-palette` Animation implementieren, wechseln zwischen den beiden Paletten, anstatt sanft zu animieren.

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
