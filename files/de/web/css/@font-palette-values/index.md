---
title: "@font-palette-values"
slug: Web/CSS/@font-palette-values
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Die **`@font-palette-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, die Standardwerte von [font-palette](/de/docs/Web/CSS/font-palette) anzupassen, die vom Schriftgestalter erstellt wurden.

## Syntax

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

Das [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) ist ein benutzerdefinierter Bezeichner, der zwar wie eine [CSS-Custom-Property](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) aussieht, sich jedoch anders verhält und nicht in eine [CSS var()-Funktion](/de/docs/Web/CSS/var) eingebunden wird.

### Deskriptoren

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
  - : Gibt den Namen oder Index der Basis-Palette an, die vom Schriftgestalter erstellt wurde und verwendet werden soll.
- {{cssxref("@font-palette-values/font-family", "font-family")}}
  - : Gibt den Namen der Schriftfamilie an, auf die diese Palette angewendet werden kann. Ein `font-family`-Name ist erforderlich, damit die `@font-palette-values`-Regel gültig ist.
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
  - : Gibt die Farben in der Basis-Palette an, die überschrieben werden sollen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Farben in einer bestehenden Palette

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
  font-family: "Bungee Spice", fantasy;
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

Wenn Sie Farben der normalen oder Basis-Palette am Index 0 überschreiben, müssen Sie nicht angeben, welche Basis-Palette verwendet werden soll. Dies sollte nur geschehen, wenn Sie eine andere Basis-Palette überschreiben. Wenn Sie alle Farben überschreiben, muss die zu verwendende Basis-Palette ebenfalls nicht angegeben werden.

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
