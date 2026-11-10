---
title: "MathMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/MathMLElement/dataset
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("MathML")}}

Die schreibgeschützte Eigenschaft **`dataset`** der Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) ermöglicht den Lese- und Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/MathML/Reference/Global_attributes/data-*) (`data-*`) von Elementen. Sie stellt eine Zuordnung von Zeichenfolgen ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) bereit, die für jedes `data-*`-Attribut einen Eintrag enthält.

Die Eigenschaft `dataset` selbst kann gelesen, aber nicht direkt beschrieben werden. Stattdessen müssen Schreibzugriffe auf die einzelnen Eigenschaften innerhalb von `dataset` erfolgen, die jeweils ein Datenattribut repräsentieren.

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

{{EmbedLiveSample("examples",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)
- [`data-*`](/de/docs/Web/MathML/Reference/Global_attributes/data-*)
- [Datenattribute verwenden](/de/docs/Web/HTML/How_to/Use_data_attributes)
