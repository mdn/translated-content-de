---
title: font-language-override
slug: Web/CSS/font-language-override
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-language-override`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von sprachspezifischen Glyphen in einer Schriftart.

Standardmäßig gibt das `lang` Attribut von HTML den Browsern an, Glyphen anzuzeigen, die speziell für diese Sprache entworfen wurden. Zum Beispiel haben viele Schriftarten ein spezielles Zeichen für das Buchstabenkombination `fi`, das den Punkt auf dem „i“ mit dem „f“ verbindet. Wenn die Sprache jedoch auf Türkisch eingestellt ist, wird die Schriftart wahrscheinlich wissen, dass sie die verbundene Glyphe nicht verwenden soll; Türkisch hat zwei Versionen des „i“, eines mit einem Punkt (`i`) und eines ohne (`ı`), und die Verwendung der Ligatur würde das gepunktete „i“ fälschlicherweise in ein punktloses „i“ umwandeln.

Die `font-language-override` Eigenschaft ermöglicht es Ihnen, das Verhalten der Schriftart für eine bestimmte Sprache zu überschreiben. Dies ist nützlich, wenn die verwendete Schriftart keine ordnungsgemäße Unterstützung für die Sprache bietet. Wenn eine Schriftart beispielsweise keine ordnungsgemäßen Regeln für die aserbaidschanische Sprache hat, können Sie die Schrift zwingen, türkische Glyphen zu verwenden, die ähnlichen Regeln folgen.

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

Die `font-language-override` Eigenschaft wird als das Schlüsselwort `normal` oder als ein `<string>` angegeben.

### Werte

- `normal`
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die Sprache geeignet sind, die durch das `lang` Attribut angegeben wird. Dies ist der Standardwert.
- {{cssxref("string")}}
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die Sprache geeignet sind, die durch den String angegeben wird. Der String muss einem Sprachcode entsprechen, der im [OpenType-Sprachsystem](https://learn.microsoft.com/en-us/typography/opentype/spec/languagetags) gefunden wird. Beispielsweise steht "ENG" für Englisch und "KOR" für Koreanisch.

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
