---
title: "Window: unhandledrejection-Ereignis"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`unhandledrejection`**-Ereignis wird an den globalen Gültigkeitsbereich eines Skripts gesendet, wenn ein JavaScript-{{jsxref("Promise")}} ohne Rejection-Handler abgelehnt wird. Üblicherweise ist dies [`window`](/de/docs/Web/API/Window), es kann aber auch ein [`Worker`](/de/docs/Web/API/Worker) sein.

Dies ist beim Debugging und für eine Fehlerbehandlung als Rückfallebene in unerwarteten Situationen nützlich.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("unhandledrejection", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onunhandledrejection = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Aliasse für Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onunhandledrejection` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Hinweise zur Verwendung

Wenn das `unhandledrejection`-Ereignis weitergegeben werden darf, wird schließlich eine Fehlermeldung in der Konsole ausgegeben. Sie können dies verhindern, indem Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) aufrufen. Ein Beispiel finden Sie unten unter [Standardbehandlung verhindern](#standardbehandlung_verhindern).

Da durch dieses Ereignis Daten preisgegeben werden können, lösen Ablehnungen von {{jsxref("Promise")}}-Objekten, die aus einem Cross-Origin-Skript stammen, dieses Ereignis nicht aus.

## Beispiele

### Einfache Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die unbehandelte Promise-Ablehnung in der Konsole.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können den Event-Listener auch über die Event-Handler-Eigenschaft `onunhandledrejection` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onunhandledrejection` hinzugefügte Event-Listener ersetzt werden:

```js
window.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Standardbehandlung verhindern

Viele Umgebungen (etwa {{Glossary("Node.js", "Node.js")}}) melden unbehandelte Promise-Ablehnungen standardmäßig in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection`-Ereignisse hinzufügen, der – zusätzlich zu anderen Aufgaben, die Sie ausführen möchten – [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft. Dadurch wird das Ereignis abgebrochen und nicht an den Protokollierungscode der Laufzeitumgebung weitergegeben. Dies funktioniert, weil `unhandledrejection` abgebrochen werden kann.

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

- [Ereignisse bei Promise-Ablehnungen](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis
- {{jsxref("Promise")}}
