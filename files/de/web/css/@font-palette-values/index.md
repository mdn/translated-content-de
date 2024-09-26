---
title: "@font-palette-values"
slug: Web/CSS/@font-palette-values
l10n:
  sourceCommit: 81cab7a9c34e7bb3867f5d6d7e70fc73d0308087
---

{{CSSRef}}

Die **`@font-palette-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, die Standardwerte von [font-palette](/de/docs/Web/CSS/font-palette), die vom Schriftgestalter erstellt wurden, anzupassen.

## Syntax

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

Das [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) ist ein benutzerdefinierter Bezeichner, der zwar wie eine [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties) aussieht, sich jedoch anders verhält und nicht in eine [CSS var() Funktion](/de/docs/Web/CSS/var) eingebunden ist.

### Deskriptoren

- [font-family](/de/docs/Web/CSS/@font-palette-values/font-family)
  - : Gibt den Namen der Schriftfamilie an, auf die diese Palette angewendet werden kann.
- [base-palette](/de/docs/Web/CSS/@font-palette-values/base-palette)
  - : Gibt den Namen oder Index der vom Schriftgestalter erstellten Basis-Palette an, die verwendet werden soll.
- [override-colors](/de/docs/Web/CSS/@font-palette-values/override-colors)
  - : Gibt die Farben in der Basis-Palette an, die überschrieben werden sollen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Farben in einer vorhandenen Palette

Dieses Beispiel zeigt, wie Sie einige oder alle Farben in einer Farbschrift ändern können.

#### HTML

```html
<p>default colors</p>
<p class="alternate">alternate colors</p>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
p {
  font-family: "Bungee Spice";
  font-size: 2rem;
}
@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}
.alternate {
  font-palette: --Alternate;
}
```

#### Ergebnis

Beim Überschreiben von Farben der normalen oder Basis-Palette am Index 0 müssen Sie nicht angeben, welche Basis-Palette verwendet werden soll. Dies sollte nur erfolgen, wenn eine andere Basis-Palette überschrieben wird. Wenn Sie alle Farben überschreiben, ist es ebenfalls nicht notwendig, die zu verwendende Basis-Palette anzugeben.

{{EmbedLiveSample("Overriding colors in an existing palette")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette", "font-palette")}} Eigenschaft
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Deskriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- {{domxref("CSSFontPaletteValuesRule")}}