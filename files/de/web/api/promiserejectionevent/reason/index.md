---
title: "PromiseRejectionEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/PromiseRejectionEvent/reason
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`reason`**-Eigenschaft des [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) ist ein beliebiger JavaScript-Wert oder ein {{jsxref("Object")}}, das den Grund angibt, der in {{jsxref("Promise.reject()")}} übergeben wurde. Dies liefert theoretisch Informationen darüber, warum das Versprechen abgelehnt wurde.

## Wert

Ein Wert oder Objekt, das Informationen bereitstellt, die Sie zur Beurteilung verwenden können, warum das Versprechen abgelehnt wurde. Dies kann alles sein, von einem Fehlercode bis hin zu einem Objekt mit Text, Links und allem, was Sie sonst noch einfügen möchten.

## Beispiele

```js
window.onunhandledrejection = (e) => {
  console.log(e.reason);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
