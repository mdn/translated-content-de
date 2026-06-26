---
title: "CloseEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/CloseEvent/reason
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die **`reason`** Schreibgeschützte Eigenschaft des [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interfaces gibt den vom Server angegebenen [Grund für das Schließen der WebSocket-Verbindung](https://www.rfc-editor.org/info/rfc6455/#section-7.1.6) zurück; das heißt, eine prägnante, menschenlesbare Erklärung für die Schließung.

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

- [RFC 6455](https://www.rfc-editor.org/info/rfc6455/) (die WebSocket-Protokollspezifikation)
