---
title: "HTMLOptionsCollection: length-Eigenschaft"
short-title: length
slug: Web/API/HTMLOptionsCollection/length
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("DOM")}}

Die **`length`**-Eigenschaft des [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)-Interfaces gibt die Anzahl der {{htmlelement("option")}}-Elemente in der Sammlung zurück. Die Eigenschaft kann die Größe der Sammlung abrufen oder festlegen.

Wenn `length` auf einen Wert kleiner als der aktuelle gesetzt wird, wird die Optionssammlung gekürzt; andernfalls werden neue leere `<option>`-Elemente am Ende des `<select>` angehängt.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in dieser `HTMLOptionsCollection` darstellt.

## Beispiel

```js
const optCollection = document.getElementById("fruits").options;
const origLength = optCollection.length;
optCollection.length += 50; // adds 50 blank options to the collection
optCollection.length = origLength; // truncates the list back to the original size
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOptionsCollection.add()`](/de/docs/Web/API/HTMLOptionsCollection/add)
- [`HTMLOptionsCollection.remove()`](/de/docs/Web/API/HTMLOptionsCollection/remove)
- [`HTMLOptionsCollection.selectedIndex`](/de/docs/Web/API/HTMLOptionsCollection/selectedIndex)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)
- [`HTMLCollection.length`](/de/docs/Web/API/HTMLCollection/length)
