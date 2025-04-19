---
title: "MathMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/MathMLElement/dataset
l10n:
  sourceCommit: 7ef48e3e54f5003f735eafd4bd3a0c2aedb21c27
---

{{APIRef("MathML")}}

Die **`dataset`**-Schreibgeschützte Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Interfaces bietet Lese-/Schreibzugriff auf [benutzerdefinierte Datensattribute](/de/docs/Web/MathML/Reference/Global_attributes/data-*) (`data-*`) auf Elementen. Sie stellt eine Zuordnung von Zeichenfolgen ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut bereit.

Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt beschrieben werden. Stattdessen müssen alle Schreibvorgänge auf die einzelnen Eigenschaften innerhalb des `dataset` erfolgen, die wiederum die Datenattribute darstellen.

## Wert

Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap).

## Beispiele

```html
<div>
  <math>
    <msup id="equation" data-value="-1" data-equation="euler">
      <mi>e</mi>
      <mi>iπ</mi>
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
- [Verwenden von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
