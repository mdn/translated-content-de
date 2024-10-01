---
title: "BroadcastChannel: postMessage() Methode"
short-title: postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle sendet eine Nachricht,
die jeglicher Art von {{jsxref("Object")}} sein kann,
an jeden Listener in jedem {{Glossary("browsing_context", "Browsing-Kontext")}} mit dem gleichen {{Glossary("origin", "Origin")}}.
Die Nachricht wird als [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis
an jeden mit dem Kanal verbundenen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) gesendet.

## Syntax

```js-nolint
postMessage(message)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert.
    Das bedeutet, dass Sie eine große Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.

### Rückgabewert

Keiner.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) bereits geschlossen wurde.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil der Eingabedaten nicht serialisierbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die Schnittstelle, zu der sie gehört.
