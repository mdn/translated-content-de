---
title: "XMLHttpRequest: timeout Ereignis"
short-title: timeout
slug: Web/API/XMLHttpRequest/timeout_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`timeout`** Ereignis wird ausgelöst, wenn der Fortschritt aufgrund des Ablaufs der voreingestellten Zeit beendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("timeout", (event) => {});

ontimeout = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften aus der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits erledigte Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert ohne Vorzeichen, der die Menge der bereits durch den zugrunde liegenden Prozess geleisteten Arbeit angibt. Der Fortschrittsanteil kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource mit HTTP wird nur der Hauptteil der HTTP-Nachricht gezählt, und Header und anderer Overhead werden nicht eingeschlossen.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer-Wert ohne Vorzeichen, der die gesamte Menge an Arbeit repräsentiert, die der zugrunde liegende Prozess derzeit durchführt. Beim Herunterladen einer Ressource mit HTTP entspricht dies der `Content-Length` (die Größe des Nachrichtentextes) und schließt keine Header und anderen Overhead ein.

## Beispiele

```js
const client = new XMLHttpRequest();
client.open("GET", "http://www.example.org/example.txt");
client.ontimeout = () => {
  console.error("Timeout!!");
};

client.send();
```

Sie könnten den Ereignis-Handler auch mit der {{domxref("EventTarget/addEventListener", "addEventListener()")}} Methode einrichten:

```js
client.addEventListener("timeout", () => {
  console.error("Timeout!!");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XMLHttpRequest")}}
