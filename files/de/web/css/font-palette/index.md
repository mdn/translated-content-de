---
title: font-palette
slug: Web/CSS/font-palette
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Die **`font-palette`** [CSS](/de/docs/Web/CSS)-Eigenschaft erlaubt die Spezifikation einer der vielen Paletten, die in einer [Farb-Schriftart](https://www.colorfonts.wtf/) enthalten sind, die ein User-Agent für die Schriftart verwenden kann. Benutzer können auch die Werte in einer Palette überschreiben oder eine neue Palette erstellen, indem sie die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) Regel verwenden.

> [!NOTE]
> Eine `font-palette`-Palette hat Vorrang bei der Farbgebung einer Schriftart. Die {{cssxref("color")}}-Eigenschaft wird eine Schriftarten-Palette nicht überschreiben, selbst wenn sie mit {{cssxref("important", "!important")}} angegeben wird.

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
  - : Gibt die Standardfarbpalette oder die Standardglyphenfärbung an (vom Schriftart-Hersteller festgelegt), die für die Schriftart verwendet werden soll. Mit dieser Einstellung wird die Palette in der Schriftart an Index 0 gerendert.
- `light`
  - : Gibt die erste Palette in der Schriftart an, die als 'light' gekennzeichnet ist und für die Schriftart verwendet werden soll. Einige Schriften enthalten Metadaten, die eine Palette als anwendbar für einen hellen (nahezu weißen) Hintergrund identifizieren. Wenn eine Schrift nicht über diese Metadaten verfügt, verhält sich der `light`-Wert wie `normal`.
- `dark`
  - : Gibt die erste Palette in der Schriftart an, die als 'dark' gekennzeichnet ist und für die Schriftart verwendet werden soll. Einige Schriften enthalten Metadaten, die eine Palette als anwendbar für einen dunklen (nahezu schwarzen) Hintergrund identifizieren. Wenn eine Schrift nicht über diese Metadaten verfügt, verhält sich der Wert wie `normal`.
- `<palette-identifier>`
  - : Ermöglicht es Ihnen, eigene Werte für die Schriftarten-Palette zu spezifizieren, indem Sie die [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) Regel verwenden. Dieser Wert wird im [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)-Format angegeben.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Erstellt einen neuen `font-palette`-Wert, indem zwei `font-palette`-Werte durch festgelegte Prozentsätze und Farbinterpolationsmethoden gemischt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine dunkle Palette spezifizieren

Dieses Beispiel erlaubt Ihnen, die erste Palette zu verwenden, die vom Schriftarten-Ersteller als _dark_ (am besten auf einem fast schwarzen Hintergrund) markiert wurde.

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Zwischen zwei Paletten animieren

Dieses Beispiel zeigt, wie man `font-palette`-Wertänderungen animiert, um eine sanfte Schriftanimation zu erstellen.

#### HTML

Das HTML enthält einen einzelnen Absatz von animiertem Text:

```html
<p>color-palette<br />animation</p>
```

#### CSS

Im CSS importieren wir eine [Farb-Schriftart](https://www.colorfonts.wtf/) namens [Nabla](https://nabla.typearture.com/) von [Google Fonts](https://fonts.google.com/?coloronly=true) und definieren zwei benutzerdefinierte `font-palette`-Werte unter Verwendung der {{cssxref("@font-palette-values")}}-Regel. Wir erstellen dann {{cssxref("@keyframes")}}, die zwischen diesen beiden Paletten animieren, und wenden diese Animation auf unseren Absatz an.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> Browser, die weiterhin `diskrete` `font-palette`-Animationen implementieren, werden zwischen den beiden Paletten wechseln, anstatt sanft zu animieren.

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
