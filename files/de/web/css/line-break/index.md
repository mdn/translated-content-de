---
title: line-break
slug: Web/CSS/line-break
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`line-break`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie Zeilen von chinesischen, japanischen oder koreanischen (CJK) Texten bei der Arbeit mit Satzzeichen und Symbolen umbrochen werden.

{{EmbedInteractiveExample("pages/css/line-break.html")}}

## Syntax

```css
/* Keyword values */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;

/* Global values */
line-break: inherit;
line-break: initial;
line-break: revert;
line-break: revert-layer;
line-break: unset;
```

### Werte

- `auto`
  - : Bricht den Text unter Verwendung der Standardzeilenumbruchregel.
- `loose`
  - : Bricht den Text unter Verwendung der am wenigsten restriktiven Zeilenumbruchregel. Wird typischerweise für kurze Zeilen verwendet, wie in Zeitungen.
- `normal`
  - : Bricht den Text unter Verwendung der häufigsten Zeilenumbruchregel.
- `strict`
  - : Bricht den Text unter Verwendung der strengsten Zeilenumbruchregel.
- `anywhere`
  - : Es gibt eine weiche Umbruchmöglichkeit um jede typografische Zeicheneinheit, einschließlich um jedes Satzzeichen oder erhaltene Leerzeichen oder in der Mitte von Wörtern, ohne Berücksichtigung eines Verbots gegen Zeilenumbrüche, sogar solche, die durch Zeichen mit der GL-, WJ- oder ZWJ-Zeichenklasse eingeführt wurden, oder wie durch die {{cssxref("word-break")}} Eigenschaft vorgeschrieben. Die verschiedenen Umbruchmöglichkeiten dürfen nicht priorisiert werden. Die Silbentrennung wird nicht angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Textumbruch einstellen

Sehen Sie, ob der Text vor "々", "ぁ" und "。" umbrochen wird.

#### HTML

```html
<div lang="ja">
  <p class="wrap-box auto">
    auto:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box loose">
    loose:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box normal">
    normal:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box strict">
    strict:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box anywhere">
    anywhere:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### CSS

```css
.wrap-box {
  width: 10em;
  margin: 0.5em;
  white-space: normal;
  vertical-align: top;
  display: inline-block;
}
.auto {
  line-break: auto;
}
.loose {
  line-break: loose;
}
.normal {
  line-break: normal;
}
.strict {
  line-break: strict;
}
.anywhere {
  line-break: anywhere;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_text_wrapping', 200, 400) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

- [CSS und internationaler Text](https://www.w3.org/International/articles/css3-text/)
