---
title: "`hyphenate-limit-chars` CSS property"
short-title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: 367f942b096f97d4c3063e31a0dc5002736db81b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`hyphenate-limit-chars`** legt fest, wie lang ein Wort mindestens sein muss, damit es getrennt werden darf, und wie viele Zeichen mindestens vor und nach dem Trennstrich stehen müssen.

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

Für diese Eigenschaft können ein bis drei Werte aus der folgenden Liste angegeben werden:

- {{cssxref("integer")}}
  - : Gibt entweder die Mindestlänge eines Wortes für die Silbentrennung, die Mindestanzahl von Zeichen vor dem Trennstrich oder die Mindestanzahl von Zeichen nach dem Trennstrich an.

- `auto`

  - : Legt fest, dass der User Agent geeignete Werte für das aktuelle Layout auswählt. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `hyphenate-limit-chars` ermöglicht eine präzise Steuerung der Silbentrennung in Texten. So können Sie ungünstige Trennungen vermeiden und die Silbentrennung an verschiedene Sprachen anpassen, was zu einer besseren Typografie beiträgt.

Die Eigenschaft akzeptiert einen bis drei Werte, jeweils ein `<integer>` oder das Schlüsselwort `auto`. Sie geben in dieser Reihenfolge die Mindestlänge eines Wortes für die Silbentrennung, die Mindestanzahl von Zeichen vor dem Trennstrich und die Mindestanzahl von Zeichen nach dem Trennstrich an:

- Wenn ein `<integer>` angegeben wird, legt er die Mindestanzahl von Zeichen fest, die ein Wort haben muss, damit es getrennt werden kann. Die Mindestanzahl von Zeichen vor und nach dem Trennstrich wird auf `auto` gesetzt.
- Wenn zwei Werte angegeben werden, legt der erste die Mindestlänge des Wortes fest und der zweite die Mindestanzahl von Zeichen sowohl vor als auch nach dem Trennstrich. Für den nicht angegebenen dritten Wert gilt der zweite Wert.
- Wenn drei Werte angegeben werden, legen sie jeweils die Mindestlänge des Wortes, die Mindestanzahl von Zeichen vor dem Trennstrich und die Mindestanzahl von Zeichen nach dem Trennstrich fest.

Bei `auto` wählt der User Agent einen geeigneten Wert für das aktuelle Layout. Sofern der User Agent keinen besseren Wert berechnen kann, werden die folgenden Standardwerte verwendet:

- Mindestlänge eines Wortes für die Silbentrennung: 5
- Mindestanzahl von Zeichen vor dem Trennstrich: 2
- Mindestanzahl von Zeichen nach dem Trennstrich: 2

Beachten Sie, dass ein Wort nicht getrennt wird, wenn es zu kurz ist, um die angegebenen Bedingungen zu erfüllen. Beim Wert `hyphenate-limit-chars: auto 3 4` werden beispielsweise Wörter mit weniger als 7 Zeichen nie getrennt, da nicht zugleich 3 Zeichen vor und 4 Zeichen nach dem Trennstrich stehen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grenzen für die Silbentrennung festlegen

In diesem Beispiel enthalten vier Textfelder denselben Text. Zum Vergleich zeigt das erste Textfeld die vom Browser standardmäßig angewendete Silbentrennung. Die nächsten drei Textfelder zeigen, wie sich unterschiedliche Werte für `hyphenate-limit-chars` auf das Standardverhalten des Browsers auswirken.

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

Im ersten Textfeld legen wir `hyphenate-limit-chars` nicht fest, sodass der Browser seinen Standardalgorithmus anwendet. Standardmäßig verwendet der Browser die Werte `5 2 2`, sofern er keine besseren Werte ermitteln kann.

Im zweiten Textfeld verhindern wir durch `hyphenate-limit-chars: 14`, dass der Browser Wörter mit weniger als 14 Zeichen trennt. Deshalb wird „juxtaposition“ im zweiten Textfeld nicht getrennt, da das Wort nur 13 Zeichen hat.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

Im dritten Textfeld legen wir mit `hyphenate-limit-chars: 5 9 2` fest, dass mindestens 9 Zeichen vor dem Trennstrich stehen müssen. Dadurch wird „acknowledgement“ als „acknowledge-ment“ statt wie im ersten Textfeld standardmäßig als „acknowl-edgement“ getrennt.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennstrich setzen muss: Solange die mit `hyphenate-limit-chars` festgelegten Bedingungen erfüllt sind, kann der Browser das Wort an der Stelle trennen, die er für am besten geeignet hält. In diesem Fall wählt er beispielsweise „acknowledge-ment“ statt des schlechter lesbaren „acknowled-gement“.

<!-- cSpell:ignore juxtaposi tion -->

Im vierten Textfeld legen wir mit `hyphenate-limit-chars: 5 2 7` fest, dass mindestens 7 Zeichen nach dem Trennstrich stehen müssen. Dadurch wird „juxtaposition“ als „juxta-position“ statt standardmäßig als „juxtaposi-tion“ getrennt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- [CSS-Text-Modul](/de/docs/Web/CSS/Guides/Text)
