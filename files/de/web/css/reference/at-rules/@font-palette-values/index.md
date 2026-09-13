---
title: "`@font-palette-values` CSS at-rule"
short-title: "@font-palette-values"
slug: Web/CSS/Reference/At-rules/@font-palette-values
l10n:
  sourceCommit: d571e753a6e1aa3f37c775f0308690bc738cdbe6
---

Die **CSS-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) `@font-palette-values`** ermöglicht es Ihnen, die Standardwerte von [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) anzupassen, die vom Schrifthersteller erstellt wurden.

## Syntax

```css
@font-palette-values --identifier {
  font-family: "Bixa";
}
.my-class {
  font-palette: --identifier;
}
```

Das [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident) ist ein benutzerdefinierter Bezeichner, der zwar wie eine [CSS-Custom-Property](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) aussieht, sich jedoch anders verhält und nicht in eine [CSS-`var()`-Funktion](/de/docs/Web/CSS/Reference/Values/var) eingeschlossen wird.

### Deskriptoren

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
  - : Gibt den Namen oder Index der vom Schrifthersteller erstellten Basispalette an, die verwendet werden soll.
- {{cssxref("@font-palette-values/font-family", "font-family")}}
  - : Gibt den Namen der Schriftfamilie an, auf die diese Palette angewendet werden kann. Ein `font-family`-Name ist erforderlich, damit die Regel `@font-palette-values` gültig ist.
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
  - : Gibt die Farben in der Basispalette an, die überschrieben werden sollen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben in einer vorhandenen Palette überschreiben

Dieses Beispiel zeigt, wie Sie einige oder alle Farben in einer Farbschrift ändern können.

#### HTML

```html
<p>default colors</p>
<p class="alternate">alternate colors</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Bungee+Spice";
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

Beim Überschreiben von Farben der normalen oder Basispalette mit Index 0 müssen Sie nicht angeben, welche Basispalette verwendet werden soll. Dies sollte nur erfolgen, wenn eine andere Basispalette überschrieben wird. Wenn Sie alle Farben überschreiben, müssen Sie ebenfalls nicht die zu verwendende Basispalette angeben.

{{EmbedLiveSample("Overriding colors in an existing palette")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaft {{cssxref("font-palette", "font-palette")}}
- Deskriptor {{cssxref("@font-palette-values/font-family", "font-family")}}
- Deskriptor {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- Deskriptor {{cssxref("@font-palette-values/override-colors", "override-colors")}}
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)
