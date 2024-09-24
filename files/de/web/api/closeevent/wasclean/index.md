---
title: "CloseEvent: wasClean-Eigenschaft"
short-title: wasClean
slug: Web/API/CloseEvent/wasClean
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Websockets API")}}

Die schreibgeschützte Eigenschaft **`wasClean`** des {{domxref("CloseEvent")}}-Interfaces gibt `true` zurück, wenn die Verbindung sauber geschlossen wurde.

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
