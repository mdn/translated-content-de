---
title: "XMLHttpRequest: timeout-Eigenschaft"
short-title: timeout
slug: Web/API/XMLHttpRequest/timeout
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.timeout`**-Eigenschaft ist ein `unsigned long`, das die Anzahl der Millisekunden darstellt, die ein Request dauern kann, bevor er automatisch beendet wird. Der Standardwert ist 0, was bedeutet, dass es kein Timeout gibt. Timeout sollte nicht für synchrone XMLHttpRequests verwendet werden, die in einer {{Glossary("document_environment", "document environment")}} verwendet werden, da sonst eine `InvalidAccessError`-Ausnahme ausgelöst wird. Wenn ein Timeout eintritt, wird ein [timeout](/de/docs/Web/API/XMLHttpRequest/timeout_event)-Ereignis ausgelöst.

> [!NOTE]
> Sie dürfen für synchronisierte Requests mit einem zugehörigen Fenster kein Timeout verwenden.

[Verwendung eines Timeouts bei einem asynchronen Request](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests#example_using_a_timeout).

## Beispiel

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // time in milliseconds

xhr.onload = () => {
  // Request finished. Do processing here.
};

xhr.ontimeout = (e) => {
  // XMLHttpRequest timed out. Do something here.
};

xhr.send(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
