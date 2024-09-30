---
title: "PromiseRejectionEvent: PromiseRejectionEvent()-Konstruktor"
short-title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}

Der **`PromiseRejectionEvent()`**-Konstruktor gibt ein neues [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)-Objekt zurück, das Ereignisse darstellt, die ausgelöst werden, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird.

Mit Ereignissen der Promise-Ablehnung ist es möglich, fehlgeschlagene Promises zu erkennen und zu melden, deren Fehlschläge unbemerkt bleiben. Es wird auch einfacher, einen globalen Fehlerbehandler zu schreiben.

Es gibt zwei Arten von `PromiseRejectionEvent`: [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) wird von der JavaScript-Laufzeit gesendet, wenn ein Promise abgelehnt wird, aber die Ablehnung unbehandelt bleibt. Ein [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis wird ausgelöst, wenn ein Promise abgelehnt wird, aber die Ablehnung von einem Ablehnungs-Handler abgefangen wird.

## Syntax

```js-nolint
new PromiseRejectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein string mit dem Namen des Ereignisses. Er ist case-sensitiv, und Browser setzen ihn auf `rejectionhandled` oder `unhandledrejection`.
- `options`
  - : Ein Objekt, das zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften folgende Eigenschaften haben kann:
    - `promise`
      - : Das {{jsxref("Promise")}}, das abgelehnt wurde.
    - `reason`
      - : Ein beliebiger Wert oder ein {{jsxref("Object")}}, das den Grund für die Ablehnung des Promises darstellt. Dies kann alles sein, von einem numerischen Fehlercode bis hin zu einem Fehlerstring oder einem Objekt, das detaillierte Informationen enthält, die die Situation beschreiben, die zur Ablehnung des Promises geführt hat.

### Rückgabewert

Ein neues `PromiseRejectionEvent`-Objekt, das gemäß den angegebenen Parametern konfiguriert ist.

## Beispiele

Dieses Beispiel erstellt ein neues [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis für das Promise `myPromise` mit dem Grund "My house is on fire". Der `reason` könnte genauso gut eine Zahl oder ein Objekt mit detaillierten Informationen sein, einschließlich der Wohnadresse, wie ernst der Brand ist, und der Telefonnummer eines Notfallkontakts, der benachrichtigt werden sollte.

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
