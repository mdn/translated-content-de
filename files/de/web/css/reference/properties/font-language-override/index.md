---
title: "`font-language-override` CSS property"
short-title: font-language-override
slug: Web/CSS/Reference/Properties/font-language-override
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`font-language-override`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert die Verwendung von sprachspezifischen Glyphen in einer Schriftart.

Standardmäßig weist das HTML-Attribut `lang` Browser an, Glyphen anzuzeigen, die speziell für diese Sprache gestaltet wurden. Zum Beispiel haben viele Schriftarten ein spezielles Zeichen für das Digraph `fi`, das den Punkt auf dem "i" mit dem "f" verschmilzt. Wenn jedoch die Sprache auf Türkisch eingestellt ist, wird die Schriftart wahrscheinlich wissen, dass sie das verschmolzene Zeichen nicht verwenden soll; Türkisch hat zwei Versionen des "i", eines mit Punkt (`i`) und eines ohne (`ı`), und die Verwendung der Ligatur würde fälschlicherweise ein gepunktetes "i" in ein punktloses "i" verwandeln.

Die `font-language-override`-Eigenschaft ermöglicht es Ihnen, das Verhalten der Schriftart für eine bestimmte Sprache zu überschreiben. Dies ist nützlich, wenn beispielsweise die verwendete Schriftart keine ordnungsgemäße Unterstützung für die Sprache bietet. Wenn eine Schriftart beispielsweise keine ordnungsgemäßen Regeln für die aserbaidschanische Sprache hat, können Sie die Schrift zwingen, türkische Glyphen zu verwenden, die ähnlichen Regeln folgen.

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

### Werte

Diese Eigenschaft wird als ein einzelner Wert aus der folgenden Liste angegeben:

- `normal`
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die im `lang`-Attribut angegebene Sprache geeignet sind. Dies ist der Standardwert.
- {{cssxref("string")}}
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die durch den String angegebene Sprache geeignet sind. Der String muss einem Sprach-Tag entsprechen, das im [OpenType Language System](https://learn.microsoft.com/en-us/typography/opentype/spec/languagetags) gefunden wird. Zum Beispiel steht "ENG" für Englisch und "KOR" für Koreanisch.

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
