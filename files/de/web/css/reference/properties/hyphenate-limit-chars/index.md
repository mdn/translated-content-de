---
title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Mindestlänge eines Wortes, um die Silbentrennung zuzulassen, sowie die Mindestanzahl von Zeichen vor und nach dem Bindestrich.

Diese Eigenschaft bietet Ihnen eine feinkörnige Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es Ihnen, ungeschickte Trennungen zu vermeiden und eine angemessene Silbentrennung für verschiedene Sprachen festzulegen, was wiederum zu einer besseren Typografie führt.

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

Die `hyphenate-limit-chars` Eigenschaft nimmt 1–3 Werte an, die numerisch oder `auto` sein können, wie unten erklärt.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Bindestrich. Der dritte Wert ist die Mindestanzahl von Zeichen nach dem Bindestrich.
- `<number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Bindestrich. Die Mindestanzahl von Zeichen nach dem Bindestrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Die Mindestanzahl von Zeichen vor und nach dem Bindestrich wird auf `auto` gesetzt.

Wenn `auto` für einen der Werte gesetzt ist, wählt der User-Agent einen geeigneten Wert für das aktuelle Layout. Sofern der User-Agent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Mindestwortlänge, um die Silbentrennung zuzulassen: 5
- Mindestanzahl von Zeichen vor dem Bindestrich: 2
- Mindestanzahl von Zeichen nach dem Bindestrich: 2

Beachten Sie, dass ein Wort nicht getrennt wird, wenn es zu kurz ist, um die gegebenen Einschränkungen zu erfüllen. Zum Beispiel werden bei einem Wert wie `hyphenate-limit-chars: auto 3 4` Wörter, die kürzer als 7 Zeichen sind, niemals getrennt, da es unmöglich ist, 3 Zeichen vor und 4 Zeichen nach dem Bindestrich zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Trennungsgrenzen

In diesem Beispiel haben wir vier Boxen, die jeweils denselben Text enthalten. Zum Vergleich zeigt die erste Box die standardmäßige Silbentrennung durch den Browser. Die nächsten drei Boxen zeigen das Ergebnis der Einschränkung des standardmäßigen Verhaltens des Browsers mit unterschiedlichen `hyphenate-limit-chars` Werten.

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

In der ersten Box setzen wir `hyphenate-limit-chars` nicht, sodass der Browser seinen Standardalgorithmus anwendet. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, es kann bessere Werte finden.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Infolgedessen wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In der dritten Box beschränken wir den Browser darauf, mindestens 9 Zeichen vor dem Bindestrich einzuschließen, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Der Effekt ist, dass "acknowledgement" jetzt als "acknowledge-ment" getrennt wird, anstelle der Standardversion "acknowl-edgement", wie in der ersten Box gezeigt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Bindestrich enthalten muss: Solange die in `hyphenate-limit-chars` angegebenen Beschränkungen erfüllt sind, kann der Browser das Wort an der Stelle teilen, die er für am besten hält. In diesem Fall wählt er zum Beispiel "acknowledge-ment" anstelle des weniger lesbaren "acknowled-gement".

<!-- cSpell:ignore juxtaposi tion -->

In der vierten Box stellen wir ein, dass der Browser mindestens 7 Zeichen nach dem Bindestrich enthält, indem wir
`hyphenate-limit-chars: 5 2 7` setzen. Der Effekt ist, dass "juxtaposition" als "juxta-position" getrennt wird, anstelle des Standards "juxtaposi-tion".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
