---
title: line-break
slug: Web/CSS/line-break
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`line-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Zeilen von chinesischem, japanischem oder koreanischem (CJK) Text beim Arbeiten mit Satzzeichen und Symbolen umbrochen werden.

{{InteractiveExample("CSS Demo: line-break")}}

```css interactive-example-choice
line-break: auto;
```

```css interactive-example-choice
line-break: anywhere;
```

```css interactive-example-choice
line-break: normal;
```

```css interactive-example-choice
line-break: loose;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    この喫茶店は、いつでもコーヒーの香りを漂わせています。<br />彼女はこの喫茶店で働いて、着々と実力をつけていきました。<br />今では知る人ぞ知る、名人です。
  </p>
</section>
```

```css interactive-example
#example-element {
  font-family: "Yu Gothic", YuGothic, Meiryo, "ＭＳ ゴシック", sans-serif;
  border: 2px dashed #999;
  text-align: left;
  width: 240px;
  font-size: 16px;
}
```

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
  - : Der Text wird mit der standardmäßigen Zeilenumbruchregel umgebrochen.
- `loose`
  - : Der Text wird mit der am wenigsten restriktiven Zeilenumbruchregel umgebrochen. Typischerweise für kurze Zeilen wie in Zeitungen verwendet.
- `normal`
  - : Der Text wird mit der am häufigsten verwendeten Zeilenumbruchregel umgebrochen.
- `strict`
  - : Der Text wird mit der strengsten Zeilenumbruchregel umgebrochen.
- `anywhere`
  - : Es gibt eine weiche Umbruchmöglichkeit um jede typografische Zeicheneinheit, einschließlich um jedes Satzzeichen oder beibehaltene Leerzeichen, oder innerhalb von Wörtern, unabhängig von jedem Verbot gegen Zeilenumbrüche. Auch Verbote, die durch Zeichen der GL-, WJ- oder ZWJ-Zeichenklasse eingeführt wurden oder vom {{cssxref("word-break")}}-Eigenschaft vorgeschrieben sind, werden ignoriert. Die verschiedenen Umbruchmöglichkeiten dürfen nicht priorisiert werden. Silbentrennung wird nicht angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Zeilenumbruchs

Sehen Sie, ob der Text vor „々“, „ぁ“ und „。“ umgebrochen wird.

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
