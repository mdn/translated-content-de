---
title: "`hyphenate-limit-chars` CSS property"
short-title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: 2f5d0e19eb706f36f837b84855f581f4bd087d15
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`hyphenate-limit-chars`** legt die Mindestlänge eines Wortes für die Silbentrennung sowie die Mindestanzahl von Zeichen vor und nach dem Trennstrich fest.

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

Die Eigenschaft `hyphenate-limit-chars` ermöglicht eine genaue Steuerung der Silbentrennung im Text. Damit können Sie ungünstige Worttrennungen vermeiden und die Silbentrennung an verschiedene Sprachen anpassen, was eine bessere Typografie ermöglicht.

Die Eigenschaft akzeptiert einen bis drei Werte, jeweils einen `<integer>` oder das Schlüsselwort `auto`. Sie geben in dieser Reihenfolge die Mindestlänge eines Wortes für die Silbentrennung, die Mindestanzahl von Zeichen vor dem Trennstrich und die Mindestanzahl von Zeichen nach dem Trennstrich an:

- Wird ein `<integer>` angegeben, legt er die Mindestlänge fest, die ein Wort haben muss, damit es getrennt werden kann. Die Mindestanzahl von Zeichen vor und nach dem Trennstrich wird auf `auto` gesetzt.
- Werden zwei Werte angegeben, legt der erste die Mindestlänge des Wortes und der zweite die Mindestanzahl von Zeichen sowohl vor als auch nach dem Trennstrich fest. Für den ausgelassenen dritten Wert gilt ebenfalls der zweite Wert.
- Werden drei Werte angegeben, legen sie jeweils die Mindestlänge des Wortes, die Mindestanzahl von Zeichen vor dem Trennstrich und die Mindestanzahl von Zeichen nach dem Trennstrich fest.

Bei `auto` wählt der User Agent einen geeigneten Wert für das aktuelle Layout. Sofern er keinen besseren Wert ermitteln kann, werden die folgenden Standardwerte verwendet:

- Mindestlänge eines Wortes für die Silbentrennung: 5
- Mindestanzahl von Zeichen vor dem Trennstrich: 2
- Mindestanzahl von Zeichen nach dem Trennstrich: 2

Beachten Sie, dass ein Wort nicht getrennt wird, wenn es zu kurz ist, um die angegebenen Bedingungen zu erfüllen. Bei einem Wert wie `hyphenate-limit-chars: auto 3 4` werden beispielsweise Wörter mit weniger als 7 Zeichen nie getrennt, da nicht gleichzeitig 3 Zeichen vor und 4 Zeichen nach dem Trennstrich stehen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grenzen für die Silbentrennung festlegen

In diesem Beispiel gibt es vier Boxen mit demselben Text. Zum Vergleich zeigt die erste Box die vom Browser standardmäßig angewendete Silbentrennung. Die nächsten drei Boxen zeigen, wie sich unterschiedliche Werte für `hyphenate-limit-chars` auf das Standardverhalten des Browsers auswirken.

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

In der ersten Box legen wir `hyphenate-limit-chars` nicht fest, sodass der Browser seinen Standardalgorithmus anwendet. Standardmäßig verwendet der Browser die Werte `5 2 2`, sofern er keine besseren Werte ermitteln kann.

In der zweiten Box verhindern wir, dass der Browser Wörter mit weniger als 14 Zeichen trennt, indem wir `hyphenate-limit-chars: 14` festlegen. Deshalb wird „juxtaposition“ in der zweiten Box nicht getrennt: Das Wort hat nur 13 Zeichen.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In der dritten Box legen wir mit `hyphenate-limit-chars: 5 9 2` fest, dass mindestens 9 Zeichen vor dem Trennstrich stehen müssen. Dadurch wird „acknowledgement“ als „acknowledge-ment“ getrennt und nicht wie in der ersten Box standardmäßig als „acknowl-edgement“.

Beachten Sie, dass der Browser nicht genau 9 Zeichen vor dem Trennstrich belassen muss: Solange die durch `hyphenate-limit-chars` festgelegten Bedingungen erfüllt sind, kann er das Wort an der Stelle trennen, die er für am besten geeignet hält. In diesem Fall wählt er beispielsweise „acknowledge-ment“ statt des schlechter lesbaren „acknowled-gement“.

<!-- cSpell:ignore juxtaposi tion -->

In der vierten Box legen wir mit `hyphenate-limit-chars: 5 2 7` fest, dass mindestens 7 Zeichen nach dem Trennstrich stehen müssen. Dadurch wird „juxtaposition“ als „juxta-position“ statt standardmäßig als „juxtaposi-tion“ getrennt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- {{cssxref("hyphenate-limit-lines")}}
- [CSS-Text-Modul](/de/docs/Web/CSS/Guides/Text)
