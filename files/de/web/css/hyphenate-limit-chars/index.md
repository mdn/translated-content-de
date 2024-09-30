---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{CSSRef}}

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die minimale Wortlänge fest, um die Trennung von Wörtern zu erlauben, sowie die Mindestanzahl von Zeichen vor und nach dem Trennstrich.

Diese Eigenschaft bietet Ihnen eine feinkörnige Kontrolle über die Worttrennung im Text. Diese Kontrolle ermöglicht es Ihnen, ungeschickte Trennungen zu vermeiden und eine geeignete Trennung für verschiedene Sprachen festzulegen, was wiederum eine bessere Typografie ermöglicht.

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

Die `hyphenate-limit-chars` Eigenschaft nimmt 1–3 Werte an, die numerisch oder `auto` sein können, wie unten erläutert.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die minimale Wortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Der dritte Wert ist die Mindestanzahl von Zeichen nach dem Trennstrich.
- `<number> <number>`
  - : Der erste Wert ist die minimale Wortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Die Mindestanzahl von Zeichen nach dem Trennstrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die minimale Wortlänge, bevor Wörter getrennt werden sollten. Die Mindestanzahl von Zeichen vor und nach dem Trennstrich wird auf `auto` gesetzt.

Wenn `auto` für einen der Werte gesetzt ist, wählt der Benutzeragent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzeragent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Minimale Wortlänge, um die Trennung zu erlauben: 5
- Mindestanzahl von Zeichen vor dem Trennstrich: 2
- Mindestanzahl von Zeichen nach dem Trennstrich: 2

Beachten Sie, dass ein Wort nicht getrennt wird, wenn es zu kurz ist, um die gegebenen Einschränkungen zu erfüllen. Beispielsweise werden bei einem Wert wie `hyphenate-limit-chars: auto 3 4` Wörter, die kürzer als 7 Zeichen sind, niemals getrennt, da es unmöglich ist, 3 Zeichen vor dem Trennstrich und 4 Zeichen danach zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Trennungsgrenzen

In diesem Beispiel haben wir vier Boxen, die jeweils denselben Text enthalten. Zum Vergleich zeigt die erste Box die Standardtrennung, die vom Browser angewendet wird. Die nächsten drei Boxen demonstrieren das Ergebnis des Einschränkens des Standardverhaltens des Browsers mit unterschiedlichen `hyphenate-limit-chars` Werten.

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

In der ersten Box setzen wir `hyphenate-limit-chars` nicht, sodass der Browser seinen Standardalgorithmus anwendet. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, er kann bessere Werte finden.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Folglich wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

In der dritten Box beschränken wir den Browser darauf, mindestens 9 Zeichen vor dem Trennstrich einzuschließen, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Der Effekt ist, dass "acknowledgement" jetzt als "acknowledge-ment" getrennt wird, anstatt die Standardversion "acknowl-edgement", wie in der ersten Box gezeigt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennstrich einfügen muss: Solange die in `hyphenate-limit-chars` angegebenen Einschränkungen erfüllt sind, kann der Browser das Wort an der Stelle brechen, die er für am besten hält. In diesem Fall wählt er beispielsweise "acknowledge-ment" anstelle des weniger lesbaren "acknowled-gement".

In der vierten Box lassen wir den Browser mindestens 7 Zeichen nach dem Trennstrich enthalten, indem wir `hyphenate-limit-chars: 5 2 7` setzen. Der Effekt ist, dass "juxtaposition" als "juxta-position" getrennt wird, anstatt wie in der Standardversion "juxtaposi-tion".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
