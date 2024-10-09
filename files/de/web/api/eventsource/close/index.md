---
title: "EventSource: close() Methode"
short-title: close()
slug: Web/API/EventSource/close
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Die **`close()`**-Methode des [`EventSource`](/de/docs/Web/API/EventSource)-Interfaces schließt die Verbindung, wenn eine besteht, und setzt das Attribut [`EventSource.readyState`](/de/docs/Web/API/EventSource/readyState) auf `2` (geschlossen).

> [!NOTE]
> Wenn die Verbindung bereits geschlossen ist, unternimmt die Methode nichts.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const button = document.querySelector("button");
const evtSource = new EventSource("sse.php");

button.onclick = () => {
  console.log("Connection closed");
  evtSource.close();
};
```

> [!NOTE]
> Ein vollständiges Beispiel finden Sie auf GitHub — siehe [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
