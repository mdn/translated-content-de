---
title: "Window: unhandledrejection Ereignis"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("HTML DOM")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Bereich eines Skripts gesendet, wenn ein JavaScript-{{jsxref("Promise")}}, das keinen Ablehnungs-Handler hat, abgelehnt wird; typischerweise ist dies das [`window`](/de/docs/Web/API/Window), kann aber auch ein [`Worker`](/de/docs/Web/API/Worker) sein.

Dies ist nützlich für das Debugging und zur Bereitstellung einer Fallback-Fehlerbehandlung für unerwartete Situationen.

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
  - : Ein Wert oder ein {{jsxref("Object")}}, das angibt, warum das Versprechen abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onunhandledrejection` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Nutzungshinweise

Das Zulassen, dass das `unhandledrejection` Ereignis weiterblubbert, führt letztendlich dazu, dass eine Fehlermeldung in die Konsole ausgegeben wird. Sie können dies verhindern, indem Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) aufrufen; siehe [Verhinderung der Standardbehandlung](#verhinderung_der_standardbehandlung) unten für ein Beispiel.

Da dieses Ereignis Daten leaken kann, lösen {{jsxref("Promise")}}-Ablehnungen, die von einem Cross-Origin-Skript stammen, dieses Ereignis nicht aus.

## Beispiele

### Grundlegende Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die nicht behandelte Promise-Ablehnung in der Konsole.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection` Ereignis-Handler-Eigenschaft verwenden, um den Ereignis-Listener einzurichten:

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Verhinderung der Standardbehandlung

Viele Umgebungen (wie [Node.js](/de/docs/Glossary/Node.js)) melden nicht behandelte Promise-Ablehnungen standardmäßig in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection` Ereignisse hinzufügen, der—neben anderen Aufgaben, die Sie ausführen möchten—[`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis zu stornieren und so zu verhindern, dass es nach oben durchgereicht wird, um von der Protokollierungslogik der Laufzeit bearbeitet zu werden. Dies funktioniert, weil `unhandledrejection` stornierbar ist.

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

- [Promise-Ablehnungs-Ereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) Ereignis
- {{jsxref("Promise")}}
