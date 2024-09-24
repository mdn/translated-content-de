---
title: "MessageEvent: ports-Eigenschaft"
short-title: ports
slug: Web/API/MessageEvent/ports
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

Die **`ports`** schreibgeschützte Eigenschaft der {{domxref("MessageEvent")}}-Schnittstelle ist ein Array von {{domxref("MessagePort")}}-Objekten. Diese repräsentieren die Ports, die mit dem Kanal verknüpft sind, über den die Nachricht gesendet wird (wo zutreffend, beispielsweise bei der Kanalnachrichtenübermittlung oder beim Senden einer Nachricht an einen gemeinsam genutzten Worker).

## Wert

Ein Array von {{domxref("MessagePort")}}-Objekten.

## Beispiele

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Erforderlich bei der Verwendung von addEventListener. Andernfalls wird es implizit durch den onmessage-Setter aufgerufen.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ExtendableMessageEvent")}} — ähnlich dieser Schnittstelle, jedoch in Schnittstellen verwendet, die den Autoren mehr Flexibilität bieten müssen.
