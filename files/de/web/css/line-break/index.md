---
title: line-break
slug: Web/CSS/line-break
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`line-break`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Zeilen von chinesischem, japanischem oder koreanischem (CJK) Text bei der Arbeit mit Satzzeichen und Symbolen gebrochen werden.

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
  - : Bricht den Text mit der Standardregel für Zeilenumbrüche.
- `loose`
  - : Bricht den Text mit der am wenigsten restriktiven Zeilenumbruchregel. Wird typischerweise für kurze Zeilen verwendet, z.B. in Zeitungen.
- `normal`
  - : Bricht den Text mit der gebräuchlichsten Zeilenumbruchregel.
- `strict`
  - : Bricht den Text mit der strengsten Zeilenumbruchregel.
- `anywhere`
  - : Es gibt eine weiche Umbruchmöglichkeit um jede typografische Zeicheneinheit, einschließlich um jedes Satzzeichen oder erhaltene Leerzeichen oder mitten in Wörtern, ohne Rücksicht auf Verbote gegen Zeilenumbrüche, selbst solche, die von Zeichen mit der GL-, WJ- oder ZWJ-Zeichenklasse eingeführt oder durch die Eigenschaft {{cssxref("word-break")}} vorgeschrieben werden. Die unterschiedlichen Umbruchmöglichkeiten dürfen nicht priorisiert werden. Silbentrennung wird nicht angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Textumbruchs

Überprüfen Sie, ob der Text vor "々", "ぁ" und "。" umgebrochen wird.

#### HTML

```html
<div lang="ja">
  <p class="wrapbox auto">
    auto:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox loose">
    loose:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox normal">
    normal:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox strict">
    strict:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox anywhere">
    anywhere:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### CSS

```css
.wrapbox {
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
