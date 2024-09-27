---
title: "XMLHttpRequest: timeout Ereignis"
short-title: timeout
slug: Web/API/XMLHttpRequest/timeout_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`timeout`** Ereignis wird ausgelöst, wenn der Vorgang aufgrund des Ablaufs einer vorgegebenen Zeit beendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("timeout", (event) => {});

ontimeout = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die gesamte zu erledigende Arbeit und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-ganzzahliger Wert, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit angibt. Der Anteil der geleisteten Arbeit kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource mit HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Überhead-Kosten nicht mit ein.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-ganzzahliger Wert, der die Gesamtmenge der Arbeit angibt, die der zugrunde liegende Prozess derzeit leistet. Beim Herunterladen einer Ressource mit HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Überhead-Kosten nicht mit ein.

## Beispiele

```js
const client = new XMLHttpRequest();
client.open("GET", "http://www.example.org/example.txt");
client.ontimeout = () => {
  console.error("Timeout!!");
};

client.send();
```

Sie können den Ereignis-Handler auch mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten:

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

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
