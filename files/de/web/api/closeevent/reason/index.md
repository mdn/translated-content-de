---
title: "CloseEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/CloseEvent/reason
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die **`reason`** schreibgeschützte Eigenschaft des [`CloseEvent`](/de/docs/Web/API/CloseEvent) Interfaces gibt den vom Server angegebenen [Beendigungsgrund der WebSocket-Verbindung](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) zurück; das heißt, eine prägnante, für Menschen verständliche Erklärung für die Schließung.

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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
