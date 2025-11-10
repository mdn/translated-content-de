---
title: "MathMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/MathMLElement/dataset
l10n:
  sourceCommit: 5f4ef6f614202ab1b748708d3e1d95e396f6ee63
---

{{APIRef("MathML")}}

Die **`dataset`**-Eigenschaft der [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die Lese- und Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/MathML/Reference/Global_attributes/data-*) (`data-*`) auf Elementen bietet. Sie stellt eine Zeichenfolgenzuordnung ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) dar, die einen Eintrag für jedes `data-*`-Attribut enthält.

Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt beschrieben werden. Stattdessen müssen alle Schreibvorgänge an die einzelnen Eigenschaften innerhalb des `dataset` erfolgen, die wiederum die Datenattribute darstellen.

## Wert

Eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap).

## Beispiele

```html
<div>
  <math>
    <msup id="equation" data-value="-1" data-equation="euler">
      <mi>e</mi>
      <mrow><mi>i</mi> <mi>π</mi></mrow>
    </msup>
    <mo>+</mo>
    <mn>1</mn>
    <mo>=</mo>
    <mn>0</mn>
  </math>
</div>
```

```js
const el = document.querySelector("#equation");

console.log(el.dataset.value); // "-1"
console.log(el.dataset.equation); // "euler"
```

### Ergebnis

{{EmbedLiveSample("dataset",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
