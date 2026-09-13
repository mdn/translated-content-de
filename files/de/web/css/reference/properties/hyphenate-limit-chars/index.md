---
title: "`hyphenate-limit-chars` CSS property"
short-title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Mindestwortlänge fest, um die Silbentrennung von Wörtern zu erlauben, sowie die Mindestanzahl von Zeichen vor und nach dem Trennstrich.

Diese Eigenschaft bietet eine feingliedrige Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es Ihnen, unpassende Trennungen zu vermeiden und eine geeignete Silbentrennung für verschiedene Sprachen festzulegen, was wiederum zu einer besseren Typografie führt.

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

### Werte

Diese Eigenschaft wird als ein bis drei numerische Werte oder `auto` festgelegt:

- `<number> <number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Der dritte Wert ist die Mindestanzahl von Zeichen nach dem Trennstrich.
- `<number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl von Zeichen vor dem Trennstrich. Die Mindestanzahl von Zeichen nach dem Trennstrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Die Mindestanzahl von Zeichen vor und nach dem Trennstrich wird auf `auto` gesetzt.

Wenn für einen der Werte `auto` festgelegt ist, wählt der Benutzeragent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzeragent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Mindestwortlänge, um die Silbentrennung zu erlauben: 5
- Mindestanzahl von Zeichen vor dem Trennstrich: 2
- Mindestanzahl von Zeichen nach dem Trennstrich: 2

Beachten Sie, dass ein Wort, das zu kurz ist, um die gegebenen Beschränkungen zu erfüllen, nicht getrennt wird. Zum Beispiel werden in einem Fall wie `hyphenate-limit-chars: auto 3 4` Wörter kürzer als 7 Zeichen niemals getrennt, da es unmöglich ist, 3 Zeichen vor dem Trennstrich und 4 Zeichen danach zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Silbentrennungsgrenzen

In diesem Beispiel haben wir vier Boxen, die denselben Text enthalten. Zum Vergleich zeigt die erste Box die vom Browser standardmäßig angewandte Silbentrennung. Die nächsten drei Boxen demonstrieren das Ergebnis der Einschränkung des Standardverhaltens des Browsers mit unterschiedlichen `hyphenate-limit-chars`-Werten.

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

In der ersten Box legen wir `hyphenate-limit-chars` nicht fest und ermöglichen es dem Browser, seinen Standardalgorithmus anzuwenden. Standardmäßig verwendet der Browser die Werte `5 2 2`, es sei denn, er kann bessere Werte finden.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Dadurch wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In der dritten Box beschränken wir den Browser darauf, mindestens 9 Zeichen vor dem Trennstrich einzuschließen, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Das Ergebnis ist, dass "acknowledgement" nun als "acknowledge-ment" getrennt wird, anstatt der Standardversion "acknowl-edgement", wie in der ersten Box gezeigt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennstrich enthalten muss: Solange die in `hyphenate-limit-chars` angegebenen Beschränkungen erfüllt sind, kann der Browser das Wort an der von ihm als am besten erachteten Stelle trennen. In diesem Fall wählt er beispielsweise "acknowledge-ment" anstatt des weniger lesbaren "acknowled-gement".

<!-- cSpell:ignore juxtaposi tion -->

In der vierten Box zwingen wir den Browser, mindestens 7 Zeichen nach dem Trennstrich einzuschließen, indem wir `hyphenate-limit-chars: 5 2 7` setzen. Das Ergebnis ist, dass "juxtaposition" als "juxta-position" getrennt wird, anstatt der Standardversion "juxtaposi-tion".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Textmodul](/de/docs/Web/CSS/Guides/Text)
