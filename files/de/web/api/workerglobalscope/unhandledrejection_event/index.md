---
title: "WorkerGlobalScope: unhandledrejection-Ereignis"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Das **`unhandledrejection`**-Ereignis wird an den globalen Gültigkeitsbereich eines Skripts (in der Regel [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)) gesendet, wenn ein {{jsxref("Promise")}} ohne Handler für eine Zurückweisung zurückgewiesen wird.

Dies ist nützlich für die Fehlersuche und für eine ersatzweise Fehlerbehandlung in unerwarteten Situationen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("unhandledrejection", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onunhandledrejection = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Beispiele

### Einfache Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die unbehandelte Zurückweisung des Promise in der Konsole.

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können den Event-Listener auch über die Event-Handler-Eigenschaft `onunhandledrejection` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Event-Listener ersetzt werden, die über `onunhandledrejection` hinzugefügt wurden:

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Standardverhalten verhindern

Viele Umgebungen (etwa {{Glossary("Node.js", "Node.js")}}) geben unbehandelte Zurückweisungen von Promises standardmäßig in der Konsole aus. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection`-Ereignisse hinzufügen, der – zusätzlich zu allen anderen gewünschten Aufgaben – [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft. Dadurch wird das Ereignis abgebrochen und nicht an den Protokollierungscode der Laufzeitumgebung weitergegeben. Dies funktioniert, weil `unhandledrejection` abgebrochen werden kann.

```js
self.addEventListener("unhandledrejection", (event) => {
  // code for handling the unhandled rejection
  // …

  // Prevent the default handling (such as outputting the
  // error to the console)

  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisse bei der Zurückweisung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)-Ereignis
