---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die Mindestwortlänge, ab der Wörter getrennt werden dürfen, sowie die Mindestanzahl an Zeichen vor und nach dem Trennstrich.

Diese Eigenschaft bietet Ihnen eine fein abgestimmte Kontrolle über die Silbentrennung in Texten. Diese Kontrolle ermöglicht es Ihnen, unglückliche Trennungen zu vermeiden und eine passende Silbentrennung für verschiedene Sprachen festzulegen, was zu besserer Typografie führt.

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
  - : Der erste Wert ist die Mindestwortlänge, ab der Wörter getrennt werden sollen. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Der dritte Wert ist die Mindestanzahl von Zeichen nach dem Trennstrich.
- `<number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, ab der Wörter getrennt werden sollen. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Die Mindestanzahl von Zeichen nach dem Trennstrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die Mindestwortlänge, ab der Wörter getrennt werden sollen. Die Mindestanzahl von Zeichen vor und nach dem Trennstrich wird auf `auto` gesetzt.

Wenn `auto` für einen der Werte eingestellt ist, wählt der User-Agent einen geeigneten Wert für das aktuelle Layout. Sofern der User-Agent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Mindestwortlänge, um Silbentrennung zu ermöglichen: 5
- Mindestanzahl von Zeichen vor dem Trennstrich: 2
- Mindestanzahl von Zeichen nach dem Trennstrich: 2

Beachten Sie, dass ein Wort nicht getrennt wird, wenn es zu kurz ist, um die angegebenen Bedingungen zu erfüllen. Zum Beispiel, wenn ein Wert wie `hyphenate-limit-chars: auto 3 4` angegeben wurde, werden Wörter, die kürzer als 7 Zeichen sind, niemals getrennt, da es unmöglich ist, 3 Zeichen vor dem Trennstrich und 4 Zeichen danach zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Silbentrennungsgrenzen setzen

In diesem Beispiel haben wir vier Boxen, die jeweils denselben Text enthalten. Zum Vergleich zeigt die erste Box die standardmäßige Silbentrennung, die vom Browser angewendet wird. Die nächsten drei Boxen demonstrieren das Ergebnis der Einschränkung des Standardverhaltens des Browsers durch verschiedene `hyphenate-limit-chars`-Werte.

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

In der ersten Box setzen wir `hyphenate-limit-chars` nicht, sodass der Browser seinen Standardalgorithmus anwenden kann. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, er findet bessere Werte.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Daher wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In der dritten Box beschränken wir den Browser darauf, mindestens 9 Zeichen vor dem Trennstrich einzubeziehen, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Das Ergebnis ist, dass "acknowledgement" nun als "acknowledge-ment" getrennt wird, anstatt der Standardversion "acknowl-edgement", wie in der ersten Box gezeigt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennstrich einhalten muss: Solange die in `hyphenate-limit-chars` angegebenen Bedingungen erfüllt sind, kann der Browser das Wort an der Stelle trennen, die er für am besten hält. In diesem Fall wählt er beispielsweise "acknowledge-ment" anstatt dem weniger lesbaren "acknowled-gement".

<!-- cSpell:ignore juxtaposi tion -->

In der vierten Box bringen wir den Browser dazu, mindestens 7 Zeichen nach dem Trennstrich einzuschließen, indem wir `hyphenate-limit-chars: 5 2 7` setzen. Das Ergebnis ist, dass "juxtaposition" als "juxta-position" getrennt wird, anstatt dem Standard "juxtaposi-tion".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Text-Modul](/de/docs/Web/CSS/CSS_text)
