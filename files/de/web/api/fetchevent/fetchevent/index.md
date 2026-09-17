---
title: "FetchEvent: FetchEvent() constructor"
short-title: FetchEvent()
slug: Web/API/FetchEvent/FetchEvent
l10n:
  sourceCommit: b19a19b1f3563c8f24fe7146c21cec2abdf68c9a
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Der Konstruktor **`FetchEvent()`** erstellt ein neues [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt.

## Syntax

```js-nolint
new FetchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er berücksichtigt Groß- und Kleinschreibung, und Browser setzen ihn immer auf `fetch`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `request`
      - : Das [`Request`](/de/docs/Web/API/Request)-Objekt, das den Event-Handler ausgelöst hätte.
    - `preloadResponse`
      - : Ein {{jsxref("Promise")}}, das eine zuvor geladene Antwort an den Client zurückgibt.
    - `clientId` {{optional_inline}}
      - : Der [`Client`](/de/docs/Web/API/Client), den der aktuelle Service Worker steuert. Der Standardwert ist `""`.
    - `isReload` {{deprecated_inline}} {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Seite beim Auslösen des Ereignisses neu geladen wurde oder nicht.
        `true`, falls ja, und `false`, falls nicht.
        Typischerweise ist das Drücken der Aktualisierungsschaltfläche in einem Browser ein Neuladen, während das Anklicken eines
        Links und das Drücken der Zurück-Schaltfläche dies nicht ist. Falls nicht vorhanden, ist der Standardwert
        `false`.
    - `resultingClientId` {{optional_inline}}
      - : Ein String, der die neue `clientId` enthält, wenn sich der Client infolge des Ladens der Seite ändert. Der Standardwert ist `""`
    - `handled`
      - : Ein _ausstehendes_ Promise, das erfüllt wird, sobald das Ereignis verarbeitet wurde.

### Rückgabewert

Ein neues [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
