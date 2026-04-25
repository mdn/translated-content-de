---
title: "`hyphenate-limit-chars` CSS property"
short-title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die minimale Wortlänge fest, um die Silbentrennung von Wörtern zuzulassen, sowie die minimale Anzahl von Zeichen vor und nach dem Trennstrich.

Diese Eigenschaft bietet Ihnen eine fein abgestimmte Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es Ihnen, ungünstige Silbentrennungen zu vermeiden und eine angemessene Silbentrennung für verschiedene Sprachen festzulegen, was wiederum eine bessere Typografie ermöglicht.

## Syntax

```css
/* Numeric values */
hyphenate-limit-chars: 10 4 4;
hyphenate-limit-chars: 10 4;
hyphenate-limit-chars: 10;

/* Keyword values */
hyphenate-limit-chars: auto auto auto;
hyphenate-limit-chars: auto auto;
hyphenate-limit-chars: auto;

/* Mix of numeric and keyword values */
hyphenate-limit-chars: 10 auto 4;
hyphenate-limit-chars: 10 auto;
hyphenate-limit-chars: auto 3;

/* Global values */
hyphenate-limit-chars: inherit;
hyphenate-limit-chars: initial;
hyphenate-limit-chars: revert;
hyphenate-limit-chars: revert-layer;
hyphenate-limit-chars: unset;
```

Die `hyphenate-limit-chars`-Eigenschaft nimmt 1–3 Werte an, die numerisch oder `auto` sein können, wie unten erklärt wird.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die minimale Wortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die minimale Anzahl von Zeichen vor dem Trennstrich. Der dritte Wert ist die minimale Anzahl von Zeichen nach dem Trennstrich.
- `<number> <number>`
  - : Der erste Wert ist die minimale Wortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die minimale Anzahl von Zeichen vor dem Trennstrich. Die minimale Anzahl von Zeichen nach dem Trennstrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die minimale Wortlänge, bevor Wörter getrennt werden sollten. Die minimale Anzahl von Zeichen vor und nach dem Trennstrich wird auf `auto` gesetzt.

Wenn `auto` für einen der Werte gesetzt wird, wählt der Benutzer-Agent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzer-Agent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Minimale Wortlänge, um Silbentrennung zuzulassen: 5
- Minimale Anzahl von Zeichen vor dem Trennstrich: 2
- Minimale Anzahl von Zeichen nach dem Trennstrich: 2

Beachten Sie, dass ein Wort, das zu kurz ist, um die gegebenen Einschränkungen zu erfüllen, nicht getrennt wird. Beispielsweise werden bei einem Wert wie `hyphenate-limit-chars: auto 3 4` Wörter, die kürzer als 7 Zeichen sind, niemals getrennt, da es unmöglich ist, 3 Zeichen vor dem Trennstrich und 4 Zeichen danach zu haben.

## Formal Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Silbentrennungsgrenzen

In diesem Beispiel haben wir vier Boxen, die jeweils den gleichen Text enthalten. Zum Zweck des Vergleichs zeigt die erste Box die Standard-Silbentrennung, die der Browser anwendet. Die nächsten drei Boxen zeigen das Ergebnis, das aus der Einschränkung des Standardverhaltens des Browsers durch verschiedene `hyphenate-limit-chars`-Werte resultiert.

#### HTML

```html
<div class="container">
  <p id="ex1">juxtaposition and acknowledgement</p>
  <p id="ex2">juxtaposition and acknowledgement</p>
  <p id="ex3">juxtaposition and acknowledgement</p>
  <p id="ex4">juxtaposition and acknowledgement</p>
</div>
```

#### CSS

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

p {
  margin: 1rem;
  width: 120px;
  border: 2px dashed #999999;
  font-size: 1.5rem;
  hyphens: auto;
}

#ex2 {
  hyphenate-limit-chars: 14;
}

#ex3 {
  hyphenate-limit-chars: 5 9 2;
}

#ex4 {
  hyphenate-limit-chars: 5 2 7;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting hyphenation limits", "", 200)}}

In der ersten Box setzen wir `hyphenate-limit-chars` nicht und erlauben dem Browser, seinen Standardalgorithmus anzuwenden. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, er kann bessere Werte finden.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Daher wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In der dritten Box beschränken wir den Browser darauf, mindestens 9 Zeichen vor dem Trennstrich einzuschließen, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Die Wirkung besteht darin, dass "acknowledgement" nun als "acknowledge-ment" und nicht mehr in der Standardversion "acknowl-edgement", wie in der ersten Box gezeigt, getrennt wird.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennstrich einfügen muss: Solange die in `hyphenate-limit-chars` gegebenen Einschränkungen erfüllt sind, kann der Browser das Wort an der Stelle trennen, die er für am besten geeignet hält. In diesem Fall wählt er beispielsweise "acknowledge-ment" anstatt des weniger lesbaren "acknowled-gement".

<!-- cSpell:ignore juxtaposi tion -->

In der vierten Box lassen wir den Browser mindestens 7 Zeichen nach dem Trennstrich einfügen, indem wir
`hyphenate-limit-chars: 5 2 7` setzen. Die Wirkung besteht darin, dass "juxtaposition" als "juxta-position" und nicht als "juxtaposi-tion" getrennt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS-Textmodul](/de/docs/Web/CSS/Guides/Text)
