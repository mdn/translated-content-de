---
title: "HTMLOptionsCollection: remove() Methode"
short-title: remove()
slug: Web/API/HTMLOptionsCollection/remove
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{ APIRef("HTML DOM") }}

Die **`remove()`**-Methode der [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)-Schnittstelle entfernt das {{HTMLelement("option")}}-Element, das durch den Index in dieser Sammlung angegeben wird.

## Syntax

```js-nolint
remove(index)
```

### Parameter

- `index`
  - : Ein nullbasierter Ganzzahlwert für den Index des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) in der [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection). Wenn der Index nicht gefunden wird, hat die Methode keine Auswirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const optionList = document.querySelector("select").options;
const listLength = optionList.length;
optionList.remove(listLength - 1); // removes the last item
optionList.remove(0); // removes the first item
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOptionsCollection.add`](/de/docs/Web/API/HTMLOptionsCollection/add)
- [`HTMLOptionsCollection.length`](/de/docs/Web/API/HTMLOptionsCollection/length)
- [`HTMLOptionsCollection.selectedIndex`](/de/docs/Web/API/HTMLOptionsCollection/selectedIndex)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`HTMLOptionsCollection.remove()`](/de/docs/Web/API/HTMLOptionsCollection/remove)
- [`Element.remove`](/de/docs/Web/API/Element/remove)
