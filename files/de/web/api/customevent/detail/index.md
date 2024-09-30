---
title: "CustomEvent: detail-Eigenschaft"
short-title: detail
slug: Web/API/CustomEvent/detail
l10n:
  sourceCommit: 14aec55e57117d0dc4a916112e23d310908e9937
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`detail`**-Eigenschaft der [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Schnittstelle gibt alle Daten zurück, die bei der Initialisierung des Ereignisses übergeben wurden.

## Wert

Welche Daten auch immer das Ereignis initialisiert wurden.

## Beispiel

```js
// create custom events
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

const element = document.createElement("div"); // create a <div> element

// add an appropriate event listener
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

// "cat" and "dog" logged in the console
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
