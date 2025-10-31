---
title: font-language-override
slug: Web/CSS/Reference/Properties/font-language-override
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-language-override`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von sprachspezifischen Glyphen in einem Schriftsatz.

Standardmäßig teilt das `lang`-Attribut von HTML den Browsern mit, dass sie speziell für diese Sprache entworfene Glyphen anzeigen sollen. Zum Beispiel haben viele Schriftarten ein spezielles Zeichen für das Digraph `fi`, das den Punkt auf dem „i“ mit dem „f“ verschmilzt. Wenn die Sprache jedoch auf Türkisch eingestellt ist, wird die Schriftart wahrscheinlich wissen, dass das verschmolzene Glyphe nicht verwendet werden soll; Türkisch hat zwei Versionen des "i," eine mit einem Punkt (`i`) und eine ohne (`ı`), und die Verwendung der Ligatur würde ein gepunktetes "i" fälschlicherweise in ein punktloses "i" umwandeln.

Die Eigenschaft `font-language-override` ermöglicht es Ihnen, das Verhalten der Schriftart für eine bestimmte Sprache zu überschreiben. Dies ist nützlich, wenn die verwendete Schriftart nicht ordnungsgemäß für die Sprache unterstützt wird. Wenn eine Schriftart beispielsweise keine ordnungsgemäßen Regeln für die aserbaidschanische Sprache hat, können Sie die Schrift zwingen, türkische Glyphen zu verwenden, die ähnlichen Regeln folgen.

## Syntax

```css
/* Keyword value */
font-language-override: normal;

/* <string> values */
font-language-override: "ENG"; /* Use English glyphs */
font-language-override: "TRK"; /* Use Turkish glyphs */

/* Global values */
font-language-override: inherit;
font-language-override: initial;
font-language-override: revert;
font-language-override: revert-layer;
font-language-override: unset;
```

Die `font-language-override`-Eigenschaft wird als Schlüsselwort `normal` oder als `<string>` angegeben.

### Werte

- `normal`
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die durch das `lang`-Attribut angegebene Sprache geeignet sind. Dies ist der Standardwert.
- {{cssxref("string")}}
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die durch den String angegebene Sprache geeignet sind. Der String muss einem Sprach-Tag entsprechen, das im [OpenType-Sprachsystem](https://learn.microsoft.com/en-us/typography/opentype/spec/languagetags) gefunden wird. Zum Beispiel ist "ENG" Englisch und "KOR" Koreanisch.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung dänischer Glyphen

#### HTML

```html
<p class="para1">Default language setting.</p>
<p class="para2">
  This is a string with the <code>font-language-override</code> set to Danish.
</p>
```

#### CSS

```css
p.para1 {
  font-language-override: normal;
}

p.para2 {
  font-language-override: "DAN";
}
```

#### Ergebnis

{{ EmbedLiveSample('Using Danish glyphs') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-kerning")}}.
