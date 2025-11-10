---
title: "XMLHttpRequest: timeout-Eigenschaft"
short-title: timeout
slug: Web/API/XMLHttpRequest/timeout
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.timeout`**-Eigenschaft ist ein `unsigned long`, der die Anzahl der Millisekunden repräsentiert, die eine Anfrage dauern kann, bevor sie automatisch beendet wird. Der Standardwert ist 0, was bedeutet, dass es keinen Timeout gibt. Timeout sollte nicht für synchrone XMLHttpRequest-Anfragen verwendet werden, die in einer {{Glossary("document_environment", "Dokumentumgebung")}} verwendet werden, da dies eine `InvalidAccessError`-Ausnahme auslösen würde. Wenn ein Timeout auftritt, wird ein [timeout](/de/docs/Web/API/XMLHttpRequestEventTarget/timeout_event)-Ereignis ausgelöst.

> [!NOTE]
> Sie dürfen keinen Timeout für synchrone Anfragen mit einem besitzenden Fenster verwenden.

[Verwendung eines Timeouts mit einer asynchronen Anfrage](/de/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests#example_using_a_timeout).

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
