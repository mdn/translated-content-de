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
    Er ist case-sensitive und Browser setzen ihn immer auf `fetch`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definiert sind_, die folgenden Eigenschaften aufweisen kann:
    - `request`
      - : Das [`Request`](/de/docs/Web/API/Request)-Objekt, das den Ereignishandler ausgelöst hätte.
    - `preloadResponse`
      - : Ein {{jsxref("Promise")}}, das eine zuvor geladene Antwort an den Client zurückgibt.
    - `clientId` {{optional_inline}}
      - : Der [`Client`](/de/docs/Web/API/Client), den der aktuelle Service Worker kontrolliert. Standardmäßig `""`.
    - `isReload` {{deprecated_inline}} {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, ob die Seite bei Auslösen des Ereignisses neu geladen wurde oder nicht. `true`, wenn ja, und `false`, wenn nicht. In der Regel ist das Drücken der Aktualisierungstaste im Browser ein Neustart, während das Klicken auf einen Link und das Drücken der Zurück-Taste kein Neustart ist. Wenn nicht vorhanden, ist der Standardwert `false`.
    - `replacesClientId` {{optional_inline}}
      - : Ein String, der den Client identifiziert, der durch `resultingClientId` ersetzt wird. Standardmäßig `""`.
    - `resultingClientId` {{optional_inline}}
      - : Ein String, der die neue `clientId` enthält, falls sich der Client als Ergebnis des Ladevorgangs der Seite ändert. Standardmäßig `""`.
    - `handled`
      - : Ein _ausstehendes_ Promise, das erfüllt wird, sobald das Ereignis bearbeitet wurde.

### Rückgabewert

Ein neues [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
