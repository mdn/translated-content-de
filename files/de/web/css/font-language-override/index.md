---
title: font-language-override
slug: Web/CSS/font-language-override
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-language-override`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von sprachspezifischen Glyphen in einer Schriftart.

Standardmäßig gibt das `lang`-Attribut von HTML Browsern die Anweisung, speziell für diese Sprache gestaltete Glyphen anzuzeigen. Viele Schriftarten haben beispielsweise ein besonderes Zeichen für das Digraph `fi`, das den Punkt auf dem "i" mit dem "f" verbindet. Wenn die Sprache jedoch auf Türkisch eingestellt ist, weiß die Schriftart normalerweise, dass das zusammengeführte Zeichen nicht verwendet werden sollte; Türkisch hat zwei Versionen des "i", eines mit Punkt (`i`) und eines ohne Punkt (`ı`), und die Verwendung der Ligatur würde ein gepunktetes "i" fälschlicherweise in ein punkttloses "i" umwandeln.

Die `font-language-override` Eigenschaft ermöglicht es Ihnen, das Verhalten der Schriftart für eine bestimmte Sprache zu überschreiben. Dies ist nützlich, wenn die verwendete Schriftart keinen ordnungsgemäßen Support für die Sprache bietet. Beispielsweise, wenn eine Schriftart keine ordnungsgemäßen Regeln für die aserbaidschanische Sprache hat, können Sie die Schrift zwingen, türkische Glyphen zu verwenden, die ähnliche Regeln befolgen.

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
  - : Sagt dem Browser, Glyphen zu verwenden, die für die im `lang`-Attribut angegebene Sprache geeignet sind. Dies ist der Standardwert.
- {{cssxref("string")}}
  - : Sagt dem Browser, Glyphen zu verwenden, die für die durch den String spezifizierte Sprache geeignet sind. Der String muss ein Sprach-Tag enthalten, das im [OpenType language system](https://learn.microsoft.com/en-us/typography/opentype/spec/languagetags) zu finden ist. Beispielsweise ist "ENG" Englisch und "KOR" Koreanisch.

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
