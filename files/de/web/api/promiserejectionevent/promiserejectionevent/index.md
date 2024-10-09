---
title: "PromiseRejectionEvent: PromiseRejectionEvent() Konstruktor"
short-title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
l10n:
  sourceCommit: bcb3ff5a0fd5080c2ce109d0eb17831b6ef57a2d
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Der **`PromiseRejectionEvent()`** Konstruktor gibt ein neues [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)-Objekt zurück, das Ereignisse darstellt, die ausgelöst werden, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird.

Mit Promise-Ablehnungsereignissen wird es möglich, Promises zu erkennen und zu melden, die fehlschlagen und deren Fehler unbemerkt bleiben. Es wird auch einfacher, einen globalen Fehlerbehandler zu schreiben.

Es gibt zwei Arten von `PromiseRejectionEvent`: [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) wird von der JavaScript-Laufzeit gesendet, wenn ein Promise abgelehnt wird, die Ablehnung jedoch nicht behandelt wird. Ein [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis wird ausgegeben, wenn ein Promise abgelehnt wird, die Ablehnung jedoch von einem Ablehnungsbehandler erfasst wird.

## Syntax

```js-nolint
new PromiseRejectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `rejectionhandled` oder `unhandledrejection`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `promise`
      - : Das abgelehnte {{jsxref("Promise")}}.
    - `reason`
      - : Jeder Wert oder ein {{jsxref("Object")}}, der den Grund für die Ablehnung des Promises darstellt. Dies kann alles sein, von einem numerischen Fehlercode über eine Fehlerzeichenkette bis hin zu einem Objekt, das detaillierte Informationen über die Situation enthält, die zum Ablehnen des Promises geführt hat.

### Rückgabewert

Ein neues `PromiseRejectionEvent`-Objekt, konfiguriert gemäß den durch die Parameter spezifizierten Einstellungen.

## Beispiele

Dieses Beispiel erstellt ein neues [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis für das Promise `myPromise`, wobei der Grund der String "My house is on fire" ist. Der `reason` könnte genauso gut eine Zahl oder sogar ein Objekt mit detaillierten Informationen wie der Hausadresse, der Ernsthaftigkeit des Brandes und der Telefonnummer eines Notfallkontakts sein, der benachrichtigt werden sollte.

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
