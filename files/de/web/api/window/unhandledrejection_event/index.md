---
title: "Fenster: unhandledrejection Ereignis"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("HTML DOM")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Bereich eines Skripts gesendet, wenn ein JavaScript-{{jsxref("Promise")}}, das keinen Ablehnungshandler hat, abgelehnt wird; typischerweise ist dies das {{domxref("window")}}, kann aber auch ein {{domxref("Worker")}} sein.

Dies ist nützlich zum Debuggen und um eine Rückfall-Fehlerbehandlung für unerwartete Situationen bereitzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("unhandledrejection", (event) => {});
onunhandledrejection = (event) => {};
```

## Ereignistyp

Ein {{domxref("PromiseRejectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : Das abgelehnte JavaScript-{{jsxref("Promise")}}.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie an {{jsxref("Promise.reject()")}} übergeben.

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onunhandledrejection` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Verwendungshinweise

Wenn das `unhandledrejection` Ereignis weitergeleitet wird, resultiert das schließlich in einer Fehlermeldung, die an die Konsole ausgegeben wird. Sie können dies verhindern, indem Sie {{domxref("Event.preventDefault", "preventDefault()")}} auf das {{domxref("PromiseRejectionEvent")}} aufrufen; siehe [Verhindern der Standardbehandlung](#verhindern_der_standardbehandlung) unten für ein Beispiel.

Da dieses Ereignis Daten leaken kann, lösen {{jsxref("Promise")}}-Ablehnungen, die von einem skriptübergreifenden Ursprung stammen, dieses Ereignis nicht aus.

## Beispiele

### Grundlegende Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die unbehandelte Promise-Ablehnung in die Konsole.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection` Ereignishandler-Eigenschaft verwenden, um den Ereignislistener einzurichten:

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Verhindern der Standardbehandlung

Viele Umgebungen (wie {{Glossary("Node.js")}}) berichten standardmäßig unbehandelte Promise-Ablehnungen an die Konsole. Sie können das verhindern, indem Sie einen Handler für `unhandledrejection`-Ereignisse hinzufügen, der—in Ergänzung zu allen anderen Aufgaben, die Sie ausführen möchten—{{domxref("Event.preventDefault()", "preventDefault()")}} aufruft, um das Ereignis abzubrechen und zu verhindern, dass es an den Logcode der Laufzeit weitergeleitet wird. Dies funktioniert, weil `unhandledrejection` abbrechbar ist.

```js
window.addEventListener("unhandledrejection", (event) => {
  // Code zur Behandlung der unbehandelten Ablehnung
  // …

  // Verhindern der Standardbehandlung (wie das
  // Ausgeben des Fehlers an die Konsole)

  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}} Ereignis
- {{jsxref("Promise")}}
