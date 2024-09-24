---
title: "HTMLOptionsCollection: remove()-Methode"
short-title: remove()
slug: Web/API/HTMLOptionsCollection/remove
l10n:
  sourceCommit: 1c0dda60cb2b680a753264b538e2c46776ecd837
---

{{ APIRef("HTML DOM") }}

Die **`remove()`**-Methode der [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)-Schnittstelle entfernt das durch den Index angegebene {{HTMLelement("option")}}-Element aus dieser Sammlung.

## Syntax

```js-nolint
remove(index)
```

### Parameter

- `index`
  - : Ein nullbasierter Ganzzahlindex für das [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) in der [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection). Wenn der Index nicht gefunden wird, hat die Methode keine Wirkung.

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

- [`HTMLOptionsCollection.add()`](/de/docs/Web/API/HTMLOptionsCollection/add)
- [`HTMLOptionsCollection.length`](/de/docs/Web/API/HTMLOptionsCollection/length)
- [`HTMLOptionsCollection.selectedIndex`](/de/docs/Web/API/HTMLOptionsCollection/selectedIndex)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`Element.remove`](/de/docs/Web/API/Element/remove)
