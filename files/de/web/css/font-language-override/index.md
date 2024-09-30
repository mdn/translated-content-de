---
title: font-language-override
slug: Web/CSS/font-language-override
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-language-override`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von sprachspezifischen Glyphen in einem Schriftsatz.

Standardmäßig gibt das `lang`-Attribut von HTML an, dass Browser Glyphen anzeigen, die speziell für diese Sprache entworfen wurden. Zum Beispiel haben viele Schriften ein spezielles Zeichen für das Digraph `fi`, das den Punkt auf dem "i" mit dem "f" verbindet. Wenn die Sprache jedoch auf Türkisch eingestellt ist, wird die Schriftart wahrscheinlich wissen, dass das verbundene Glyph nicht verwendet werden sollte; Türkisch hat zwei Versionen des "i", eine mit Punkt (`i`) und eine ohne (`ı`), und die Verwendung der Ligatur würde ein gepunktetes "i" fälschlicherweise in ein punktloses "i" umwandeln.

Die Eigenschaft `font-language-override` erlaubt es Ihnen, das Verhalten des Schriftsatzes für eine bestimmte Sprache zu überschreiben. Dies ist nützlich, wenn der verwendete Schriftsatz keine ordnungsgemäße Unterstützung für die Sprache bietet. Zum Beispiel, wenn ein Schriftsatz keine ordnungsgemäßen Regeln für die aserbaidschanische Sprache hat, können Sie die Schrift zwingen, türkische Glyphen zu verwenden, die ähnliche Regeln befolgen.

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
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die durch das `lang`-Attribut angegebene Sprache geeignet sind. Dies ist der Standardwert.
- {{cssxref("string")}}
  - : Weist den Browser an, Schriftglyphen zu verwenden, die für die durch den String angegebene Sprache geeignet sind. Der String muss mit einem Sprach-Tag im [OpenType-Sprachsystem](https://learn.microsoft.com/en-us/typography/opentype/spec/languagetags) übereinstimmen. Zum Beispiel steht "ENG" für Englisch und "KOR" für Koreanisch.

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
