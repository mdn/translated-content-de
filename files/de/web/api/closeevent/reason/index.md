---
title: "CloseEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/CloseEvent/reason
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Websockets API")}}

Die schreibgeschützte **`reason`**-Eigenschaft der {{domxref("CloseEvent")}}-Schnittstelle gibt den [WebSocket-Verbindungs-Schließungsgrund](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) zurück, den der Server zum Schließen der Verbindung angegeben hat; also eine kurze, für Menschen lesbare Erklärung für die Schließung.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel gibt den Wert von `reason` in der Konsole aus.

```js
WebSocket.onclose = (event) => {
  console.log(event.reason);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die Spezifikation des WebSocket-Protokolls)
