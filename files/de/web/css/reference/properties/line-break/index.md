---
title: line-break
slug: Web/CSS/Reference/Properties/line-break
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`line-break`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Zeilen von chinesischem, japanischem oder koreanischem (CJK) Text bei der Arbeit mit Satzzeichen und Symbolen umbrochen werden.

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
  font-family: "Yu Gothic", "YuGothic", "Meiryo", "ＭＳ ゴシック", sans-serif;
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
  - : Bricht den Text mit der am wenigsten restriktiven Zeilenumbruchregel. Wird typischerweise für kurze Zeilen verwendet, wie in Zeitungen.
- `normal`
  - : Bricht den Text mit der am häufigsten verwendeten Zeilenumbruchregel.
- `strict`
  - : Bricht den Text mit der strengsten Zeilenumbruchregel.
- `anywhere`
  - : Es gibt eine weiche Umschlagmöglichkeit um jede typografische Zeicheneinheit, einschließlich um jedes Satzzeichen oder erhaltene Leerzeichen, oder in der Mitte von Wörtern, ohne Rücksicht auf ein Verbot von Zeilenumbrüchen, selbst solche, die durch Zeichen mit der GL-, WJ- oder ZWJ-Zeichenklasse eingeführt wurden oder durch die {{cssxref("word-break")}}-Eigenschaft vorgeschrieben sind. Die verschiedenen Umschlagmöglichkeiten dürfen nicht priorisiert werden. Silbentrennung wird nicht angewendet.

## Offizielle Definition

{{cssinfo}}

## Offizielles Syntax

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
