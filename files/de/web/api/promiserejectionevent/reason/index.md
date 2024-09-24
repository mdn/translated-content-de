---
title: "PromiseRejectionEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/PromiseRejectionEvent/reason
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`reason`** des {{domxref("PromiseRejectionEvent")}} ist ein beliebiger JavaScript-Wert oder ein {{jsxref("Object")}}, der den Grund angibt, der in {{jsxref("Promise.reject()")}} übergeben wurde. Dies soll theoretisch Informationen darüber liefern, warum das Promise abgelehnt wurde.

## Wert

Ein Wert oder Objekt, das Informationen bereitstellt, um zu verstehen, warum das Promise abgelehnt wurde. Dies kann alles sein, von einem Fehlercode bis hin zu einem Objekt mit Text, Links und allem anderen, was Sie möglicherweise einschließen möchten.

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
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}
