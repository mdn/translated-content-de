---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`hyphenate-limit-chars`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die minimale Wortlänge fest, um die Silbentrennung von Wörtern zu erlauben, sowie die Mindestanzahl an Zeichen vor und nach dem Bindestrich.

Diese Eigenschaft bietet Ihnen eine detaillierte Kontrolle über die Silbentrennung im Text. Diese Kontrolle ermöglicht es, ungeschickte Trennungen zu vermeiden und geeignete Silbentrennungen für verschiedene Sprachen zu setzen, was wiederum zu einer besseren Typografie führt.

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

Die `hyphenate-limit-chars`-Eigenschaft akzeptiert 1–3 Werte, die numerisch oder `auto` sein können, wie unten erläutert.

### Werte

- `<number> <number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl an Zeichen vor dem Bindestrich. Der dritte Wert ist die Mindestanzahl an Zeichen nach dem Bindestrich.
- `<number> <number>`
  - : Der erste Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Der zweite Wert ist die Mindestanzahl an Zeichen vor dem Bindestrich. Die Mindestanzahl an Zeichen nach dem Bindestrich wird gleich dem zweiten Wert gesetzt.
- `<number>`
  - : Der Wert ist die Mindestwortlänge, bevor Wörter getrennt werden sollten. Die Mindestanzahl an Zeichen vor und nach dem Bindestrich wird auf `auto` gesetzt.

Wenn `auto` für einen der Werte festgelegt ist, wählt der Benutzeragent einen geeigneten Wert für das aktuelle Layout. Sofern der Benutzeragent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Minimale Wortlänge für die Silbentrennung: 5
- Mindestanzahl an Zeichen vor dem Bindestrich: 2
- Mindestanzahl an Zeichen nach dem Bindestrich: 2

Beachten Sie, dass ein Wort nicht getrennt wird, wenn es zu kurz ist, um die angegebenen Einschränkungen zu erfüllen. Zum Beispiel werden Wörter, die kürzer als 7 Zeichen sind, niemals getrennt, wenn ein Wert wie `hyphenate-limit-chars: auto 3 4` angegeben ist, da es unmöglich ist, 3 Zeichen vor und 4 Zeichen nach dem Bindestrich zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Trennungsgrenzen

In diesem Beispiel haben wir vier Boxen, die jeweils denselben Text enthalten. Zum Vergleich zeigt die erste Box die standardmäßige Silbentrennung des Browsers. Die nächsten drei Boxen demonstrieren das Ergebnis der Einschränkung des Standardverhaltens des Browsers mit unterschiedlichen `hyphenate-limit-chars`-Werten.

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

In der ersten Box setzen wir `hyphenate-limit-chars` nicht, sodass der Browser seinen Standardalgorithmus anwendet. Standardmäßig verwendet der Browser die Werte `5 2 2`, sofern er keine besseren Werte findet.

In der zweiten Box verhindern wir, dass der Browser Wörter trennt, es sei denn, sie sind mindestens 14 Zeichen lang, indem wir `hyphenate-limit-chars: 14` setzen. Folglich wird "juxtaposition" in der zweiten Box nicht getrennt, da es nur 13 Zeichen lang ist.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In der dritten Box beschränken wir den Browser darauf, mindestens 9 Zeichen vor dem Bindestrich zu haben, indem wir `hyphenate-limit-chars: 5 9 2` setzen. Dadurch wird "acknowledgement" jetzt als "acknowledge-ment" anstatt der Standardversion "acknowl-edgement" getrennt, wie in der ersten Box gezeigt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Bindestrich einfügen muss: Solange die in `hyphenate-limit-chars` angegebenen Einschränkungen erfüllt sind, kann der Browser das Wort an der Stelle trennen, die er für am besten hält. In diesem Fall wählt er zum Beispiel "acknowledge-ment" anstelle des weniger lesbaren "acknowled-gement".

<!-- cSpell:ignore juxtaposi tion -->

In der vierten Box stellen wir sicher, dass der Browser mindestens 7 Zeichen nach dem Bindestrich enthält, indem wir `hyphenate-limit-chars: 5 2 7` setzen. Dadurch wird "juxtaposition" als "juxta-position" anstelle des Standards "juxtaposi-tion" getrennt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS Text module](/de/docs/Web/CSS/CSS_text)
