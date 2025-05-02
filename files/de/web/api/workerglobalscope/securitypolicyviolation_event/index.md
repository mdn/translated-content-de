---
title: "WorkerGlobalScope: securitypolicyviolation Event"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) in einem Worker verletzt wird.

Der Handler kann mithilfe der `onsecuritypolicyviolation`-Ereignishandler-Eigenschaft oder mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zugewiesen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignishandler-Funktion mithilfe der `onsecuritypolicyviolation`-Ereignishandler-Eigenschaft hinzufügen oder die Methode `addEventListener()` aufrufen können.

```js
self.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

self.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e here
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis der [`Document`](/de/docs/Web/API/Document)-Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
