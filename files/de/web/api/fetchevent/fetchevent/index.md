---
title: "FetchEvent: FetchEvent() Konstruktor"
short-title: FetchEvent()
slug: Web/API/FetchEvent/FetchEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Der **`FetchEvent()`**-Konstruktor erstellt ein neues [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt.

## Syntax

```js-nolint
new FetchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es immer auf `fetch`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `request`
      - : Das [`Request`](/de/docs/Web/API/Request)-Objekt, das den Ereignishandler ausgelöst hätte.
    - `preloadResponse`
      - : Ein {{jsxref("Promise")}}, das eine zuvor geladene Antwort an den Client zurückgibt.
    - `clientId` {{optional_inline}}
      - : Der [`Client`](/de/docs/Web/API/Client), den der aktuelle Service Worker steuert. Standardmäßig `""`.
    - `isReload` {{deprecated_inline}} {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Seite neu geladen wurde, als das Ereignis ausgelöst wurde. `true` wenn ja, und `false` wenn nicht. Normalerweise ist das Drücken der Aktualisierungsschaltfläche in einem Browser ein Neuladen, während das Klicken auf einen Link und das Drücken der Zurück-Schaltfläche kein Neuladen ist. Wenn nicht vorhanden, ist der Standardwert `false`.
    - `replacesClientId` {{optional_inline}}
      - : Ein String, der den Client identifiziert, der durch `resultingClientId` ersetzt wird. Standardmäßig `""`.
    - `resultingClientId` {{optional_inline}}
      - : Ein String, der die neue `clientId` enthält, wenn sich der Client aufgrund des Seitenladevorgangs ändert. Standardmäßig `""`.
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
