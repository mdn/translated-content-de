---
title: "PromiseRejectionEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/PromiseRejectionEvent/reason
l10n:
  sourceCommit: bcb3ff5a0fd5080c2ce109d0eb17831b6ef57a2d
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`reason`** des [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) ist ein beliebiger JavaScript-Wert oder ein {{jsxref("Object")}}, der den Grund angibt, der an {{jsxref("Promise.reject()")}} übergeben wurde. Dies liefert theoretisch Informationen darüber, warum das Promise abgelehnt wurde.

## Wert

Ein Wert oder Objekt, das Informationen liefert, die Sie verwenden können, um zu verstehen, warum das Promise abgelehnt wurde. Dies könnte alles sein, von einem Fehlercode bis hin zu einem Objekt mit Text, Links und allem, was Sie sonst noch einfügen möchten.

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
