---
title: "MathMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/MathMLElement/dataset
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("MathML")}}

Die **`dataset`** schreibgeschützte Eigenschaft der [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle bietet Lese- und Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/MathML/Reference/Global_attributes/data-*) (`data-*`) auf Elementen. Sie stellt eine Abbildung von Strings ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) bereit, mit einem Eintrag für jedes `data-*`-Attribut.

Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt beschrieben werden. Stattdessen müssen alle Schreibvorgänge an die einzelnen Eigenschaften innerhalb des `dataset` erfolgen, die ihrerseits die Datenattribute repräsentieren.

## Wert

Eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap).

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
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
