---
title: "WorkerGlobalScope: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) in einem Worker verletzt wird.

Der Handler kann der `onsecuritypolicyviolation` Ereignis-Handler-Eigenschaft oder mithilfe der Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zugewiesen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignis-Handler-Funktion unter Verwendung der `onsecuritypolicyviolation` Ereignis-Handler-Eigenschaft hinzufügen oder die `addEventListener()` Methode aufrufen können.

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

- Das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event) Ereignis der [`Document`](/de/docs/Web/API/Document) Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/CSP)
