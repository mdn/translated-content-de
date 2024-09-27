---
title: "CloseEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/CloseEvent/reason
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die **`reason`**-Schreibgeschützte Eigenschaft des [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interfaces gibt den [WebSocket-Verbindungsbeendigungsgrund](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) zurück, den der Server für das Schließen der Verbindung angegeben hat, das heißt, eine prägnante, für Menschen lesbare Erklärung des Grundes für das Schließen.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel druckt den Wert von `reason` in die Konsole.

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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
