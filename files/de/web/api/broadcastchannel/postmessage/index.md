---
title: "BroadcastChannel: Methode postMessage()"
short-title: postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`postMessage()`**-Methode des [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Interfaces sendet eine Nachricht,
die jede Art von {{jsxref("Object")}} sein kann,
an jeden Listener in jedem {{Glossary("browsing_context", "Browsing-Kontext")}} mit dem gleichen {{Glossary("origin", "Ursprung")}}.
Die Nachricht wird als [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis
an jedes mit dem Kanal verbundene [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) gesendet.

## Syntax

```js-nolint
postMessage(message)
```

### Parameter

- `message`
  - : Daten, die an das andere Fenster gesendet werden sollen. Die Daten werden mit dem [strukturierter Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert.
    Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher an das Ziel-Fenster übergeben können, ohne sie selbst serialisieren zu müssen.

    > [!NOTE]
    > Ausführungskontexte, die miteinander kommunizieren können, befinden sich möglicherweise nicht im selben [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) und können daher keinen Speicher teilen. {{jsxref("SharedArrayBuffer")}}-Objekte oder darauf basierende Pufferansichten können nicht über Agent-Cluster hinweg gesendet werden. Der Versuch, dies zu tun, erzeugt ein [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event)-Ereignis, das einen `DataCloneError`-[`DOMException`](/de/docs/Web/API/DOMException) am empfangenden Ende enthält.

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

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), das Interface, zu dem es gehört.
