---
title: "FetchEvent: FetchEvent() Konstruktor"
short-title: FetchEvent()
slug: Web/API/FetchEvent/FetchEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Der **`FetchEvent()`** Konstruktor erstellt ein neues {{domxref("FetchEvent")}} Objekt.

## Syntax

```js-nolint
new FetchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es immer auf `fetch`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften_, folgende Eigenschaften besitzen kann:
    - `request`
      - : Das {{domxref("Request")}} Objekt, das den Ereignishandler ausgelöst hätte.
    - `preloadResponse`
      - : Ein {{jsxref("Promise")}}, der eine zuvor geladene Antwort an den Client zurückgibt.
    - `clientId` {{optional_inline}}
      - : Der {{domxref("Client")}}, den der aktuelle Service Worker kontrolliert. Standardmäßig `""`.
    - `isReload` {{deprecated_inline}} {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, ob die Seite neu geladen wurde, als
        das Ereignis ausgelöst wurde. `true` wenn ja, und `false` wenn nicht.
        In der Regel ist das Drücken der Aktualisierungstaste im Browser ein Neuladen, während das Klicken auf einen
        Link und das Drücken der Zurück-Taste kein Neuladen darstellt. Wenn nicht vorhanden, ist der Standardwert
        `false`.
    - `replacesClientId` {{optional_inline}}
      - : Ein String, der den Client identifiziert, der durch `resultingClientId` ersetzt wird. Standardmäßig `""`.
    - `resultingClientId` {{optional_inline}}
      - : Ein String, der die neue `clientId` enthält, wenn sich der Client durch das Laden der Seite ändert. Standardmäßig `""`.
    - `handled`
      - : Ein _anhängendes_ Versprechen, das erfüllt wird, sobald das Ereignis bearbeitet wurde.

### Rückgabewert

Ein neues {{domxref("FetchEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
