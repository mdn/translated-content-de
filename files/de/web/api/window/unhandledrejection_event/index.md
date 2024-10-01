---
title: "Window: unhandledrejection-Ereignis"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("HTML DOM")}}

Das **`unhandledrejection`**-Ereignis wird an den globalen Geltungsbereich eines Scripts gesendet, wenn ein JavaScript-{{jsxref("Promise")}}, das keinen Ablehnungs-Handler hat, abgelehnt wird; typischerweise ist dies das [`window`](/de/docs/Web/API/Window), es kann aber auch ein [`Worker`](/de/docs/Web/API/Worker) sein.

Dies ist nützlich zum Debuggen und um eine Notfall-Fehlerbehandlung für unerwartete Situationen bereitzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("unhandledrejection", (event) => {});
onunhandledrejection = (event) => {};
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Ereignishandler-Aliase

Neben der `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onunhandledrejection` auch bei den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Verwendungshinweise

Wenn das `unhandledrejection`-Ereignis weitergegeben wird, führt das letztendlich dazu, dass eine Fehlermeldung in der Konsole ausgegeben wird. Sie können dies verhindern, indem Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) aufrufen; siehe [Verhindern der Standardbehandlung](#verhindern_der_standardbehandlung) unten für ein Beispiel.

Da dieses Ereignis Daten leaken kann, werden {{jsxref("Promise")}}-Ablehnungen, die von einem Cross-Origin-Skript stammen, dieses Ereignis nicht auslösen.

## Beispiele

### Grundlegende Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die unbehandelte Promise-Ablehnung in der Konsole.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection`-Ereignis-Handler-Eigenschaft verwenden, um den Ereignis-Listener einzurichten:

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Verhindern der Standardbehandlung

Viele Umgebungen (wie {{Glossary("Node.js", "Node.js")}}) melden unbehandelte Promise-Ablehnungen standardmäßig in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection`-Ereignisse hinzufügen, der—in Ergänzung zu allen anderen Aufgaben, die Sie ausführen möchten—[`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen und zu verhindern, dass es zur Protokollierungsroutine der Laufzeit aufsteigt. Dies funktioniert, weil `unhandledrejection` abbrechbar ist.

```js
window.addEventListener("unhandledrejection", (event) => {
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

- [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis
- {{jsxref("Promise")}}
