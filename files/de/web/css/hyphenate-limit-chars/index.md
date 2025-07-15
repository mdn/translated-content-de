---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestlänge eines Wortes fest, um die Silbentrennung von Wörtern sowie die Mindestanzahl von Zeichen vor und nach dem Bindestrich zu erlauben.

Diese Eigenschaft bietet Ihnen eine feinkörnige Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es Ihnen, ungeschickte Silbentrennungen zu vermeiden und eine angemessene Silbentrennung für verschiedene Sprachen festzulegen, was wiederum eine bessere Typografie ermöglicht.

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

Die Eigenschaft `hyphenate-limit-chars` nimmt 1–3 Werte an, die numerisch oder `auto` sein können, wie unten erklärt.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die Mindestanzahl der Buchstaben eines Wortes, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Bindestrich. Der dritte Wert ist die Mindestanzahl von Zeichen nach dem Bindestrich.
- `<number> <number>`
  - : Der erste Wert ist die Mindestanzahl der Buchstaben eines Wortes, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Bindestrich. Die Mindestanzahl von Zeichen nach dem Bindestrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die Mindestanzahl der Buchstaben eines Wortes, bevor Wörter getrennt werden sollten. Die Mindestanzahl von Zeichen vor und nach dem Bindestrich wird auf `auto` gesetzt.

Wenn für einen der Werte `auto` festgelegt ist, wählt der Benutzeragent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzeragent keinen besseren Wert berechnen kann, werden folgende Standardwerte verwendet:

- Mindestanzahl der Buchstaben eines Wortes, um Silbentrennung zuzulassen: 5
- Mindestanzahl von Zeichen vor dem Bindestrich: 2
- Mindestanzahl von Zeichen nach dem Bindestrich: 2

Beachten Sie, dass, wenn ein Wort zu kurz ist, um die gegebenen Einschränkungen zu erfüllen, es nicht getrennt wird. Zum Beispiel, bei einem Wert wie `hyphenate-limit-chars: auto 3 4`, werden Wörter, die kürzer als 7 Zeichen sind, niemals getrennt, da es unmöglich ist, 3 Zeichen vor dem Bindestrich und 4 Zeichen danach zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Silbentrennungsgrenzen

In diesem Beispiel haben wir vier Boxen, die jeweils denselben Text enthalten. Zum Zweck des Vergleichs zeigt die erste Box die standardmäßige Silbentrennung durch den Browser. Die nächsten drei Boxen demonstrieren das Ergebnis der Einschränkung des standardmäßigen Verhaltens des Browsers mit verschiedenen `hyphenate-limit-chars` Werten.

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
  border: 2px dashed #999;
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

In der ersten Box setzen wir `hyphenate-limit-chars` nicht, sodass der Browser seinen Standardalgorithmus anwendet. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, es findet bessere Werte.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem `hyphenate-limit-chars: 14` gesetzt ist. Als Ergebnis wird „juxtaposition“ in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In der dritten Box zwingen wir den Browser, mindestens 9 Zeichen vor dem Bindestrich einzuschließen, indem `hyphenate-limit-chars: 5 9 2` gesetzt wird. Der Effekt ist, dass „acknowledgement“ nun als „acknowledge-ment“ getrennt wird anstelle der Standardversion „acknowl-edgement“, wie in der ersten Box gezeigt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Bindestrich einschließen muss: Solange die in `hyphenate-limit-chars` angegebenen Einschränkungen erfüllt sind, kann der Browser das Wort an der Stelle trennen, die er für am besten hält. So wird in diesem Fall zum Beispiel „acknowledge-ment“ gewählt, anstelle des weniger lesbaren „acknowled-gement“.

<!-- cSpell:ignore juxtaposi tion -->

In der vierten Box sorgen wir dafür, dass der Browser mindestens 7 Zeichen nach dem Bindestrich einschließt, indem `hyphenate-limit-chars: 5 2 7` gesetzt wird. Der Effekt ist, dass „juxtaposition“ als „juxta-position“ getrennt wird anstelle des Standards „juxtaposi-tion“.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
