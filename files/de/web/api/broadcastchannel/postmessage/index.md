---
title: "BroadcastChannel: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode der {{domxref("BroadcastChannel")}}-Schnittstelle sendet eine Nachricht, die jegliche Art von {{jsxref("Object")}} sein kann, an jeden Listener in jedem {{glossary("browsing context")}} mit dem gleichen {{glossary("origin")}}. Die Nachricht wird als ein {{domxref("BroadcastChannel/message_event", "message")}}-Ereignis übermittelt, das an jedes an den Kanal gebundene {{domxref("BroadcastChannel")}} gerichtet ist.

## Syntax

```js-nolint
postMessage(message)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mithilfe des [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.

### Rückgabewert

Keiner.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref("BroadcastChannel")}} bereits geschlossen wurde.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Teil der Eingabedaten nicht serialisierbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BroadcastChannel")}}, die Schnittstelle, zu der sie gehört.
