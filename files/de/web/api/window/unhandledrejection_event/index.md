---
title: "Window: unhandledrejection event"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`unhandledrejection`**-Ereignis wird an den globalen Bereich eines Skripts gesendet, wenn ein JavaScript-{{jsxref("Promise")}}, das keinen Ablehnungs-Handler hat, abgelehnt wird; typischerweise ist dies das [`window`](/de/docs/Web/API/Window), kann aber auch ein [`Worker`](/de/docs/Web/API/Worker) sein.

Dies ist nützlich zum Debuggen und für die Bereitstellung einer Fallback-Fehlerbehandlung für unerwartete Situationen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("unhandledrejection", (event) => { })

onunhandledrejection = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie bei {{jsxref("Promise.reject()")}} übergeben.

## Ereignis-Handler-Alias

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onunhandledrejection` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Verwendungshinweise

Wenn das `unhandledrejection`-Ereignis zugelassen wird zu "bubblen", wird letztendlich eine Fehlermeldung an die Konsole ausgegeben. Sie können dies verhindern, indem Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) aufrufen; siehe [Verhinderung der Standardbehandlung](#verhinderung_der_standardbehandlung) unten für ein Beispiel.

Da dieses Ereignis Daten leakt, werden {{jsxref("Promise")}}-Ablehnungen, die von einem Skript aus einer anderen Herkunft stammen, dieses Ereignis nicht auslösen.

## Beispiele

### Einfaches Fehlerprotokollieren

Dieses Beispiel protokolliert Informationen über die nicht behandelte Promise-Zurückweisung in der Konsole.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die Ereignis-Handler-Eigenschaft `onunhandledrejection` verwenden, um den Ereignis-Listener einzurichten:

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Verhinderung der Standardbehandlung

Viele Umgebungen (wie {{Glossary("Node.js", "Node.js")}}) melden nicht behandelte Promise-Zurückweisungen standardmäßig an die Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection`-Ereignisse hinzufügen, der—in Ergänzung zu anderen Aufgaben, die Sie ausführen möchten—[`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis zu stornieren, und zu verhindern, dass es nach oben "bubbelt" und durch den Logging-Code der Laufzeit behandelt wird. Dies funktioniert, weil `unhandledrejection` abbrechbar ist.

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

- [Promise-Zurückweisungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis
- {{jsxref("Promise")}}
