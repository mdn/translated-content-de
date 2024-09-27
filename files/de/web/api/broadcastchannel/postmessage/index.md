---
title: "BroadcastChannel: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode des [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Interfaces sendet eine Nachricht,
die von irgendeiner Art von {{jsxref("Object")}} sein kann,
an jeden Listener in jedem [Browsing-Kontext](/de/docs/Glossary/browsing_context) mit demselben [Origin](/de/docs/Glossary/origin).
Die Nachricht wird als [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis
gesendet, das auf jedes an den Kanal gebundene [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) abzielt.

## Syntax

```js-nolint
postMessage(message)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert.
    Dies bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.

### Rückgabewert

Keiner.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) bereits geschlossen wurde.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil der Eingabedaten nicht serialisierbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), das Interface, zu dem es gehört.
