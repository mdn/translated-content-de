---
title: "@font-palette-values"
slug: Web/CSS/@font-palette-values
l10n:
  sourceCommit: 3ee9f29834b30a6865d75db0feff7c61af14e8dd
---

{{CSSRef}}

Die **`@font-palette-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, die Standardwerte von [font-palette](/de/docs/Web/CSS/font-palette) anzupassen, die vom Schriftartenhersteller erstellt wurden.

## Syntax

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

Das [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) ist ein benutzerdefinierter Bezeichner, der zwar wie eine [CSS-Custom-Property](/de/docs/Web/CSS/Using_CSS_custom_properties) aussieht, sich jedoch anders verhält und nicht in eine [CSS `var()` Funktion](/de/docs/Web/CSS/var) eingeschlossen ist.

### Deskriptoren

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
  - : Gibt den Namen oder Index der vom Schriftartenhersteller erstellten Basis-Palette an, die verwendet werden soll.
- {{cssxref("@font-palette-values/font-family", "font-family")}}
  - : Gibt den Namen der Schriftfamilie an, auf die diese Palette angewendet werden kann.
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
  - : Gibt die Farben in der Basis-Palette an, die überschrieben werden sollen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben in einer vorhandenen Palette überschreiben

Dieses Beispiel zeigt, wie Sie einige oder alle Farben in einer Farbenschriftart ändern können.

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

Beim Überschreiben der Farben der normalen oder Basis-Palette am Index 0 müssen Sie nicht deklarieren, welche Basis-Palette verwendet werden soll. Dies sollte nur erfolgen, wenn eine andere Basis-Palette überschrieben wird. Wenn Sie alle Farben überschreiben, besteht ebenfalls keine Notwendigkeit, die zu verwendende Basis-Palette anzugeben.

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
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)
