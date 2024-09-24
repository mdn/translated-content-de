---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{CSSRef}}

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestwortlänge fest, um die Silbentrennung von Wörtern zu ermöglichen, sowie die minimale Anzahl von Zeichen vor und nach dem Trennstrich.

Diese Eigenschaft bietet Ihnen eine feinkörnige Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es Ihnen, unangemessene Silbentrennungen zu vermeiden und eine geeignete Silbentrennung für verschiedene Sprachen festzulegen, was wiederum eine bessere Typografie ermöglicht.

## Syntax

```css
/* Numerische Werte */
hyphenate-limit-chars: 10 4 4;
hyphenate-limit-chars: 10 4;
hyphenate-limit-chars: 10;

/* Schlüsselwortwerte */
hyphenate-limit-chars: auto auto auto;
hyphenate-limit-chars: auto auto;
hyphenate-limit-chars: auto;

/* Mischung aus numerischen und Schlüsselwortwerten */
hyphenate-limit-chars: 10 auto 4;
hyphenate-limit-chars: 10 auto;
hyphenate-limit-chars: auto 3;

/* Globale Werte */
hyphenate-limit-chars: inherit;
hyphenate-limit-chars: initial;
hyphenate-limit-chars: revert;
hyphenate-limit-chars: revert-layer;
hyphenate-limit-chars: unset;
```

Die `hyphenate-limit-chars`-Eigenschaft nimmt 1–3 Werte an, die numerisch oder `auto` sein können, wie unten erklärt.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Der dritte Wert ist die Mindestanzahl von Zeichen nach dem Trennstrich.
- `<number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Die Mindestanzahl von Zeichen nach dem Trennstrich wird gleich dem zweiten Wert festgelegt.
- `<number>`
  - : Der Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Die Mindestanzahl von Zeichen vor und nach dem Trennstrich wird auf `auto` gesetzt.

Wenn für einen der Werte `auto` festgelegt ist, wählt der Benutzeragent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzeragent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Mindestwortlänge, um Silbentrennung zu ermöglichen: 5
- Mindestanzahl von Zeichen vor dem Trennstrich: 2
- Mindestanzahl von Zeichen nach dem Trennstrich: 2

Beachten Sie, dass ein Wort, das zu kurz ist, um die gegebenen Einschränkungen zu erfüllen, nicht getrennt wird. Beispielsweise werden bei einem Wert wie `hyphenate-limit-chars: auto 3 4` Wörter, die kürzer als 7 Zeichen sind, niemals getrennt, da es unmöglich ist, 3 Zeichen vor dem und 4 Zeichen nach dem Trennstrich zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Trennungsbegrenzungen

In diesem Beispiel haben wir vier Boxen mit demselben Text. Zum Vergleich zeigt die erste Box die vom Browser angewandte Standardtrennung. Die nächsten drei Boxen zeigen das Ergebnis der Einschränkung des Standardverhaltens des Browsers mit verschiedenen `hyphenate-limit-chars`-Werten.

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

In der ersten Box setzen wir `hyphenate-limit-chars` nicht und erlauben dem Browser, seinen Standardalgorithmus anzuwenden. Standardmäßig nutzt der Browser die Werte `5 2 2`, es sei denn, er findet bessere Werte.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Infolgedessen wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

In der dritten Box zwingen wir den Browser, mindestens 9 Zeichen vor dem Trennstrich zu verwenden, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Dadurch wird "acknowledgement" als "acknowledge-ment" statt der Standardversion "acknowl-edgement", wie in der ersten Box gezeigt, getrennt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennstrich haben muss: Solange die in `hyphenate-limit-chars` gegebenen Einschränkungen erfüllt sind, kann der Browser das Wort an der Stelle trennen, die er für am besten hält. So wird in diesem Fall beispielsweise "acknowledge-ment" anstelle des weniger lesbaren "acknowled-gement" gewählt.

In der vierten Box zwingen wir den Browser, mindestens 7 Zeichen nach dem Trennstrich zu verwenden, indem wir
`hyphenate-limit-chars: 5 2 7` setzen. Dadurch wird "juxtaposition" als "juxta-position" statt des Standards "juxtaposi-tion" getrennt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
