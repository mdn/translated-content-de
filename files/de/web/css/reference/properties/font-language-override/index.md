---
title: "`font-language-override` CSS property"
short-title: font-language-override
slug: Web/CSS/Reference/Properties/font-language-override
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-language-override`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von sprachspezifischen Glyphen in einer Schriftart.

Standardmäßig weist das HTML-Attribut `lang` Browser an, Glyphen anzuzeigen, die speziell für diese Sprache entworfen wurden. Viele Schriftarten haben beispielsweise ein spezielles Zeichen für das Digraph `fi`, das den Punkt auf dem "i" mit dem "f" verbindet. Wenn jedoch die Sprache auf Türkisch eingestellt ist, wird die Schriftart wahrscheinlich wissen, diesen verknüpften Glyphe nicht zu verwenden; Türkisch hat zwei Versionen des "i", eine mit Punkt (`i`) und eine ohne (`ı`), und die Verwendung der Ligatur würde ein gepunktetes "i" fälschlicherweise in ein punktloses "i" verwandeln.

Die `font-language-override` Eigenschaft ermöglicht es Ihnen, das Verhalten der Schriftart für eine bestimmte Sprache zu überschreiben. Dies ist nützlich, wenn beispielsweise die von Ihnen verwendete Schriftart keine ordnungsgemäße Unterstützung für die Sprache bietet. Wenn eine Schriftart keine ordnungsgemäßen Regeln für die aserbaidschanische Sprache enthält, können Sie etwa die Schrift zwingen, türkische Glyphen zu verwenden, die ähnlichen Regeln folgen.

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

Die `font-language-override` Eigenschaft wird als das Schlüsselwort `normal` oder ein `<string>` angegeben.

### Werte

- `normal`
  - : Weist den Browser an, Schrift-Glyphen zu verwenden, die für die Sprache geeignet sind, die durch das `lang`-Attribut angegeben ist. Dies ist der Standardwert.
- {{cssxref("string")}}
  - : Weist den Browser an, Schrift-Glyphen zu verwenden, die für die Sprache geeignet sind, die durch den String angegeben wird. Der String muss einem Sprach-Tag im [OpenType language system](https://learn.microsoft.com/en-us/typography/opentype/spec/languagetags) entsprechen. Zum Beispiel steht "ENG" für Englisch und "KOR" für Koreanisch.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von dänischen Glyphen

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
