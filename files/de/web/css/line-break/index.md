---
title: line-break
slug: Web/CSS/line-break
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`line-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Zeilen in chinesischen, japanischen oder koreanischen (CJK) Texten bei der Arbeit mit Interpunktion und Symbolen gebrochen werden.

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
  border: 2px dashed #999999;
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
  - : Bricht den Text mit der Standard-Zeilenumbruchregel.
- `loose`
  - : Bricht den Text mit der am wenigsten restriktiven Zeilenumbruchregel. Typischerweise für kurze Zeilen wie in Zeitungen verwendet.
- `normal`
  - : Bricht den Text mit der häufigsten Zeilenumbruchregel.
- `strict`
  - : Bricht den Text mit der stringentesten Zeilenumbruchregel.
- `anywhere`
  - : Es gibt eine weiche Umbruchmöglichkeit um jede typografische Zeichenheit, einschließlich um jedes Interpunktionszeichen oder erhaltene Leerzeichen, oder in der Mitte von Wörtern, ohne Verbote gegen Zeilenumbrüche zu beachten, selbst solche, die durch Zeichen der GL-, WJ- oder ZWJ-Zeichenklasse eingeführt wurden oder durch die {{cssxref("word-break")}} Eigenschaft vorgeschrieben sind. Die verschiedenen Umbruchmöglichkeiten dürfen nicht priorisiert werden. Silbentrennung wird nicht angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Textumbruch einstellen

Überprüfen Sie, ob der Text vor "々", "ぁ" und "。" umgebrochen wird.

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

- [CSS and international text](https://www.w3.org/International/articles/css3-text/) auf W3C
