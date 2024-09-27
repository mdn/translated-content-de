---
title: "CloseEvent: wasClean-Eigenschaft"
short-title: wasClean
slug: Web/API/CloseEvent/wasClean
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die **`wasClean`** schreibgeschützte Eigenschaft der [`CloseEvent`](/de/docs/Web/API/CloseEvent) Schnittstelle gibt `true` zurück, wenn die Verbindung sauber geschlossen wurde.

## Wert

Ein boolescher Wert. True, wenn die Verbindung sauber geschlossen wurde, andernfalls false.

## Beispiele

Das folgende Beispiel gibt den Wert von `wasClean` in der Konsole aus.

```js
WebSocket.onclose = (event) => {
  console.log(event.wasClean);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
