---
title: font-language-override
slug: Web/CSS/font-language-override
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`font-language-override`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert die Verwendung von sprachspezifischen Glyphen in einer Schriftart.

Standardmäßig weist das `lang`-Attribut von HTML den Browsern an, Glyphen anzuzeigen, die speziell für diese Sprache entworfen wurden. Viele Schriftarten haben zum Beispiel ein spezielles Zeichen für das Digraph `fi`, das den Punkt auf dem "i" mit dem "f" verbindet. Wenn jedoch die Sprache auf Türkisch eingestellt ist, wird die Schriftart wahrscheinlich wissen, dass das verbundene Zeichen nicht verwendet werden sollte; Türkisch hat zwei Versionen des "i", eine mit Punkt (`i`) und eine ohne (`ı`), und die Verwendung der Ligatur würde fälschlicherweise ein punktiertes "i" in ein punktloses "i" umwandeln.

Die `font-language-override`-Eigenschaft ermöglicht es Ihnen, das Verhalten einer Schriftart für eine bestimmte Sprache zu überschreiben. Dies ist nützlich, zum Beispiel wenn die verwendete Schriftart keine ausreichende Unterstützung für die Sprache bietet. Wenn eine Schriftart beispielsweise keine korrekten Regeln für die aserbaidschanische Sprache hat, können Sie die Schrift zwingen, türkische Glyphen zu verwenden, die ähnlichen Regeln folgen.

## Syntax

```css
/* Schlüsselwortwert */
font-language-override: normal;

/* <string> Werte */
font-language-override: "ENG"; /* Englische Glyphen verwenden */
font-language-override: "TRK"; /* Türkische Glyphen verwenden */

/* Globale Werte */
font-language-override: inherit;
font-language-override: initial;
font-language-override: revert;
font-language-override: revert-layer;
font-language-override: unset;
```

Die `font-language-override`-Eigenschaft wird als Schlüsselwort `normal` oder als `<string>` angegeben.

### Werte

- `normal`
  - : Weißen Sie den Browser an, diejenigen Schriftarten zu verwenden, die für die durch das `lang`-Attribut spezifizierte Sprache geeignet sind. Dies ist der Standardwert.
- {{cssxref("string")}}
  - : Weißen Sie den Browser an, solche Schriftarten zu verwenden, die für die durch den String spezifizierte Sprache geeignet sind. Der String muss einem Sprach-Tag entsprechen, das im [OpenType-Sprachsystem](https://learn.microsoft.com/en-us/typography/opentype/spec/languagetags) gefunden wird. Zum Beispiel steht "ENG" für Englisch und "KOR" für Koreanisch.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung dänischer Glyphen

#### HTML

```html
<p class="para1">Standardeinstellung der Sprache.</p>
<p class="para2">
  Dies ist ein String mit der <code>font-language-override</code>, die auf Dänisch gesetzt ist.
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
