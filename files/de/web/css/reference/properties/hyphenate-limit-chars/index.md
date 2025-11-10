---
title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Mindestwortlänge an, die zur Silbentrennung von Wörtern sowie die Mindestanzahl von Zeichen vor und nach dem Bindestrich erforderlich ist.

Diese Eigenschaft bietet Ihnen eine feingranulare Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es Ihnen, ungeschickte Silbentrennungen zu vermeiden und geeignete Silbentrennung für verschiedene Sprachen festzulegen, was wiederum eine bessere Typografie ermöglicht.

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

Die `hyphenate-limit-chars`-Eigenschaft nimmt 1–3 Werte an, die numerisch oder `auto` sein können, wie unten beschrieben.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Bindestrich. Der dritte Wert ist die Mindestanzahl von Zeichen nach dem Bindestrich.
- `<number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Bindestrich. Die Mindestanzahl von Zeichen nach dem Bindestrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Die Mindestanzahl von Zeichen vor und nach dem Bindestrich wird auf `auto` gesetzt.

Wenn `auto` für einen der Werte gesetzt ist, wählt der Benutzeragent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzeragent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Mindestwortlänge, um eine Silbentrennung zuzulassen: 5
- Mindestanzahl von Zeichen vor dem Bindestrich: 2
- Mindestanzahl von Zeichen nach dem Bindestrich: 2

Beachten Sie, dass ein Wort, das zu kurz ist, um die gegebenen Einschränkungen zu erfüllen, nicht getrennt wird. Wenn beispielsweise ein Wert wie `hyphenate-limit-chars: auto 3 4` angegeben ist, werden Wörter, die kürzer als 7 Zeichen sind, nie getrennt, da es unmöglich ist, 3 Zeichen vor dem Bindestrich und 4 Zeichen danach zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Silbentrennungsgrenzen

In diesem Beispiel haben wir vier Kästchen, die jeweils denselben Text enthalten. Zum Vergleich zeigt das erste Kästchen die Standard-Silbentrennung, die vom Browser angewendet wird. Die nächsten drei Kästchen zeigen das Ergebnis der Einschränkung des Standardverhaltens des Browsers mit unterschiedlichen `hyphenate-limit-chars`-Werten.

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

Im ersten Kästchen setzen wir `hyphenate-limit-chars` nicht, sodass der Browser seinen Standardalgorithmus anwenden kann. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, er findet bessere Werte.

Im zweiten Kästchen verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Infolgedessen wird "juxtaposition" im zweiten Kästchen nicht getrennt, da es nur 13 Zeichen lang ist.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

Im dritten Kästchen schränken wir den Browser ein, mindestens 9 Zeichen vor dem Bindestrich zu haben, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Die Wirkung ist, dass "acknowledgement" nun als "acknowledge-ment" getrennt wird, anstatt wie in der Standardversion "acknowl-edgement", wie im ersten Kästchen gezeigt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Bindestrich haben muss: Solange die in `hyphenate-limit-chars` angegebenen Einschränkungen erfüllt sind, kann der Browser das Wort an der Stelle trennen, die er für am besten hält. In diesem Fall wählt er zum Beispiel "acknowledge-ment" statt das weniger lesbare "acknowled-gement".

<!-- cSpell:ignore juxtaposi tion -->

Im vierten Kästchen lassen wir den Browser mindestens 7 Zeichen nach dem Bindestrich setzen, indem wir `hyphenate-limit-chars: 5 2 7` setzen. Dadurch wird "juxtaposition" als "juxta-position" getrennt, anstatt wie in der Standardversion "juxtaposi-tion".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS-Textmodul](/de/docs/Web/CSS/Guides/Text)
