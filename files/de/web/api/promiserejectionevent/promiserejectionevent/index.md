---
title: "PromiseRejectionEvent: PromiseRejectionEvent() Konstruktor"
short-title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}

Der **`PromiseRejectionEvent()`** Konstruktor gibt ein neues [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)-Objekt zurück, das Ereignisse darstellt, die ausgelöst werden, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird.

Mit Promise-Ablehnungsereignissen wird es möglich, Promises zu erkennen und zu melden, die fehlschlagen und deren Fehler unbemerkt bleiben. Außerdem wird es einfacher, einen globalen Fehlerhandler zu schreiben.

Es gibt zwei Arten von `PromiseRejectionEvent`: [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) wird von der JavaScript-Laufzeit gesendet, wenn ein Promise abgelehnt wird, aber die Ablehnung unbehandelt bleibt. Ein [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis wird ausgelöst, wenn ein Promise abgelehnt wird, die Ablehnung jedoch von einem Ablehnungshandler aufgefangen wird.

## Syntax

```js-nolint
new PromiseRejectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `rejectionhandled` oder `unhandledrejection`.
- `options`
  - : Ein Objekt, das zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `promise`
      - : Der {{jsxref("Promise")}}, der abgelehnt wurde.
    - `reason`
      - : Jeder Wert oder {{jsxref("Object")}}, der den Grund darstellt, warum das Promise abgelehnt wurde. Dies kann alles sein, von einem numerischen Fehlercode bis hin zu einem Fehlerstring oder einem Objekt, das detaillierte Informationen über die Situation enthält, die zur Ablehnung des Promises führte.

### Rückgabewert

Ein neues `PromiseRejectionEvent`-Objekt, konfiguriert wie durch die Parameter spezifiziert.

## Beispiele

Dieses Beispiel erstellt ein neues [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis für das Promise `myPromise` mit dem Grund als der Zeichenkette "Mein Haus brennt". Der `reason` könnte genauso gut eine Zahl oder sogar ein Objekt mit detaillierten Informationen sein, einschließlich der Wohnadresse, wie ernst der Brand ist, und der Telefonnummer eines Notfallkontakts, der benachrichtigt werden sollte.

```js
let myRejectionEvent = new PromiseRejectionEvent("unhandledrejection", {
  promise: myPromise,
  reason: "My house is on fire",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
