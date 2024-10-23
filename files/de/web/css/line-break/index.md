---
title: line-break
slug: Web/CSS/line-break
l10n:
  sourceCommit: 42d7bb6c3ed8e7e51cd71aa17165c28b58f5c4e7
---

{{CSSRef}}

Die **`line-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Zeilen chinesischen, japanischen oder koreanischen (CJK) Textes beim Arbeiten mit Satzzeichen und Symbolen umbrochen werden.

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
  - : Bricht Text mit der Standardregel für Zeilenumbrüche um.
- `loose`
  - : Bricht Text mit der am wenigsten restriktiven Regel für Zeilenumbrüche um. Typischerweise verwendet für kurze Zeilen, wie z.B. in Zeitungen.
- `normal`
  - : Bricht Text mit der häufigsten Regel für Zeilenumbrüche um.
- `strict`
  - : Bricht Text mit der strengsten Regel für Zeilenumbrüche um.
- `anywhere`
  - : Es gibt eine weiche Umbruchmöglichkeit um jede typografische Zeicheneinheit, einschließlich um beliebige Satzzeichen oder erhaltene Leerzeichen, oder in der Mitte von Wörtern, ohne Beachtung von Verboten gegen Zeilenumbrüche, selbst solche, die durch Zeichen der GL-, WJ- oder ZWJ-Zeichenklasse eingeführt wurden oder durch die {{cssxref("word-break")}} Eigenschaft auferlegt sind. Die verschiedenen Umbruchmöglichkeiten dürfen nicht priorisiert werden. Silbentrennung wird nicht angewendet.

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

## Siehe auch

- [CSS und internationaler Text](https://www.w3.org/International/articles/css3-text/) auf W3C
