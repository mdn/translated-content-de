---
title: "EventSource: close() Methode"
short-title: close()
slug: Web/API/EventSource/close
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef('WebSockets API')}}

Die **`close()`**-Methode des {{domxref("EventSource")}}-Interfaces schließt die Verbindung, falls eine besteht, und setzt das Attribut {{domxref("EventSource.readyState")}} auf `2` (geschlossen).

> [!NOTE]
> Wenn die Verbindung bereits geschlossen ist, macht die Methode nichts.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
> Sie können ein vollständiges Beispiel auf GitHub finden — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("EventSource")}}
