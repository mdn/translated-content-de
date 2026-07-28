---
title: "Window: unhandledrejection-Event"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML DOM")}}

Das **`unhandledrejection`**-Ereignis wird an den globalen Bereich eines Skripts gesendet, wenn ein JavaScript-{{jsxref("Promise")}}, das keine Ablehnungsbehandlung hat, abgelehnt wird; typischerweise ist dies das [`window`](/de/docs/Web/API/Window), kann aber auch ein [`Worker`](/de/docs/Web/API/Worker) sein.

Dies ist nützlich zum Debuggen und für die Bereitstellung von Fallback-Fehlerbehandlungen in unerwarteten Situationen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("unhandledrejection", (event) => { })

onunhandledrejection = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Event-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onunhandledrejection` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Verwendungshinweise

Das Zulassen des `unhandledrejection`-Ereignisses zu blubbern, führt schließlich dazu, dass eine Fehlermeldung in die Konsole ausgegeben wird. Sie können dies verhindern, indem Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) aufrufen; siehe [Verhinderung der Standardbehandlung](#verhinderung_der_standardbehandlung) unten für ein Beispiel.

Da dieses Ereignis Daten durchsickern lassen kann, lösen {{jsxref("Promise")}}-Ablehnungen, die von einem Cross-Origin-Skript stammen, dieses Ereignis nicht aus.

## Beispiele

### Grundlegende Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die unbehandelte Promise-Ablehnung in der Konsole.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection`-Event-Handler-Eigenschaft verwenden, um den Ereignislistener einzurichten:

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Verhinderung der Standardbehandlung

Viele Umgebungen (wie {{Glossary("Node.js", "Node.js")}}) melden unbehandelte Promise-Ablehnungen standardmäßig in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection`-Ereignisse hinzufügen, der—in Ergänzung zu anderen Aufgaben, die Sie ausführen möchten—`[`preventDefault()`](/de/docs/Web/API/Event/preventDefault)` aufruft, um das Ereignis abzubrechen und zu verhindern, dass es zur Laufzeitprotokollierung aufsteigt. Dies funktioniert, da `unhandledrejection` abgebrochen werden kann.

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
