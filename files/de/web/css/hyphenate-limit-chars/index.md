---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{CSSRef}}

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestlänge eines Wortes fest, um die Trennung von Wörtern zu ermöglichen, sowie die Mindestanzahl von Zeichen vor und nach dem Trennzeichen.

Diese Eigenschaft bietet Ihnen eine detaillierte Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es Ihnen, ungeschickte Trennungen zu vermeiden und geeignete Trennungen für verschiedene Sprachen festzulegen, was wiederum für eine bessere Typografie sorgt.

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

Die `hyphenate-limit-chars` Eigenschaft kann 1–3 Werte annehmen, die numerisch oder `auto` sein können, wie unten erklärt.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die Mindestlänge des Wortes, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl der Zeichen vor dem Trennzeichen. Der dritte Wert ist die Mindestanzahl der Zeichen nach dem Trennzeichen.
- `<number> <number>`
  - : Der erste Wert ist die Mindestlänge des Wortes, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl der Zeichen vor dem Trennzeichen. Die Mindestanzahl der Zeichen nach dem Trennzeichen wird auf den zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die Mindestlänge des Wortes, bevor Wörter getrennt werden sollten. Die Mindestanzahl der Zeichen vor und nach dem Trennzeichen wird auf `auto` gesetzt.

Wenn `auto` für einen der Werte festgelegt ist, wählt der Benutzeragent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzeragent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Mindestlänge des Wortes, um die Trennung zu ermöglichen: 5
- Mindestanzahl der Zeichen vor dem Trennzeichen: 2
- Mindestanzahl der Zeichen nach dem Trennzeichen: 2

Beachten Sie, dass ein Wort nicht getrennt wird, wenn es zu kurz ist, um die angegebenen Einschränkungen zu erfüllen. Zum Beispiel werden bei einem Wert wie `hyphenate-limit-chars: auto 3 4` Wörter, die kürzer als 7 Zeichen sind, nie getrennt, da es unmöglich ist, vor dem Trennzeichen 3 Zeichen und nach dem Trennzeichen 4 Zeichen zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung von Trennungsgrenzen

In diesem Beispiel haben wir vier Boxen, die jeweils denselben Text enthalten. Zum Vergleich zeigt die erste Box die Standardtrennung, die vom Browser angewendet wird. Die nächsten drei Boxen demonstrieren das Ergebnis der Einschränkung des Standardverhaltens des Browsers mit unterschiedlichen `hyphenate-limit-chars` Werten.

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

In der ersten Box setzen wir `hyphenate-limit-chars` nicht fest, sodass der Browser seinen Standardalgorithmus anwenden kann. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, er kann bessere Werte finden.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Infolgedessen wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

In der dritten Box beschränken wir den Browser darauf, dass er mindestens 9 Zeichen vor dem Trennzeichen einfügt, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Die Wirkung ist, dass "acknowledgement" jetzt als "acknowledge-ment" getrennt wird, anstatt der Standardversion "acknowl-edgement", wie sie in der ersten Box gezeigt wird.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennzeichen einfügen muss: Solange die in `hyphenate-limit-chars` angegebenen Einschränkungen erfüllt werden, kann der Browser das Wort an der Stelle teilen, die er für am besten hält. So wählt er in diesem Fall beispielsweise "acknowledge-ment" statt das weniger lesbare "acknowled-gement".

In der vierten Box sorgen wir dafür, dass der Browser mindestens 7 Zeichen nach dem Trennzeichen einfügt, indem wir `hyphenate-limit-chars: 5 2 7` setzen. Die Wirkung ist, dass "juxtaposition" als "juxta-position" getrennt wird, anstatt als Standard "juxtaposi-tion".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
