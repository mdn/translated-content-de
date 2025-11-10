---
title: "CustomEvent: CustomEvent() Konstruktor"
short-title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`CustomEvent()`** Konstruktor erstellt ein neues [`CustomEvent`](/de/docs/Web/API/CustomEvent) Objekt.

## Syntax

```js-nolint
new CustomEvent(type)
new CustomEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses angibt. Ereignisnamen sind case-sensitiv.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `detail` {{optional_inline}}
      - : Ein ereignisabhängiger Wert, der mit dem Ereignis verknüpft ist. Dieser Wert steht dann dem Handler über die [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) Eigenschaft zur Verfügung. Der Standardwert ist `null`.

### Rückgabewert

Ein neues [`CustomEvent`](/de/docs/Web/API/CustomEvent) Objekt.

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

Zusätzliche Beispiele finden Sie unter [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
