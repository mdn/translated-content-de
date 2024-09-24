---
title: "PromiseRejectionEvent: PromiseRejectionEvent()-Konstruktor"
short-title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}

Der **`PromiseRejectionEvent()`**-Konstruktor gibt ein neues {{domxref("PromiseRejectionEvent")}}-Objekt zurück, das Ereignisse darstellt, die ausgelöst werden, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird.

Mit Promise-Zurückweisungsevents wird es möglich, unerfüllte oder unbemerkte Promise-Fehler zu erkennen und zu melden. Es wird auch einfacher, einen globalen Fehlerbehandler zu schreiben.

Es gibt zwei Arten von `PromiseRejectionEvent`:
{{domxref("Window.unhandledrejection_event", "unhandledrejection")}} wird von der JavaScript-Laufzeitumgebung gesendet, wenn ein Promise abgelehnt wird, die Ablehnung jedoch unbehandelt bleibt. Ein {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}-Ereignis wird ausgelöst, wenn ein Promise abgelehnt wird, die Ablehnung jedoch von einem Ablehnungsbehandler erfasst wird.

## Syntax

```js-nolint
new PromiseRejectionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Groß- und Kleinschreibung wird beachtet, und Browser setzen es auf `rejectionhandled` oder `unhandledrejection`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `promise`
      - : Das abgelehnte {{jsxref("Promise")}}.
    - `reason`
      - : Beliebiger Wert oder {{jsxref("Object")}}, der den Grund für die Zurückweisung des Promise darstellt. Dies kann alles sein, von einem numerischen Fehlercode über einen Fehlerstring bis zu einem Objekt, das detaillierte Informationen beschreibt, die zur Ablehnung des Promises geführt haben.

### Rückgabewert

Ein neues `PromiseRejectionEvent`-Objekt, konfiguriert gemäß den angegebenen Parametern.

## Beispiele

Dieses Beispiel erstellt ein neues {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}-Ereignis für das Promise `myPromise`, wobei der Grund der String "My house is on fire" ist. Der `reason` könnte ebenso gut eine Zahl oder sogar ein Objekt mit detaillierten Informationen sein, einschließlich der Hausadresse, wie ernst das Feuer ist und der Telefonnummer eines Notfallkontakts, der benachrichtigt werden soll.

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
- {{domxref("PromiseRejectionEvent")}}
