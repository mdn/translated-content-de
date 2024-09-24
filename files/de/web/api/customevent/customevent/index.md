---
title: "CustomEvent: CustomEvent() Konstruktor"
short-title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
l10n:
  sourceCommit: 14aec55e57117d0dc4a916112e23d310908e9937
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`CustomEvent()`** Konstruktor erstellt ein neues {{domxref("CustomEvent")}}-Objekt.

## Syntax

```js-nolint
new CustomEvent(type)
new CustomEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses angibt. Ereignisnamen sind groß- und kleinschreibungssensitiv.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `detail` {{optional_inline}}
      - : Ein ereignisabhängiger Wert, der mit dem Ereignis verbunden ist. Dieser Wert ist dann für den Handler über die {{domxref("CustomEvent.detail")}}-Eigenschaft verfügbar.
        Standardmäßig ist er `null`.

### Rückgabewert

Ein neues {{domxref("CustomEvent")}}-Objekt.

## Beispiel

```js
// Erstellen von benutzerdefinierten Ereignissen
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

const element = document.createElement("div"); // Erstellen eines <div>-Elements

// Hinzufügen eines entsprechenden Ereignis-Listeners
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// Ereignisse auslösen
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

// "cat" und "dog" werden in der Konsole protokolliert
```

Weitere Beispiele finden Sie unter [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CustomEvent")}}
- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
