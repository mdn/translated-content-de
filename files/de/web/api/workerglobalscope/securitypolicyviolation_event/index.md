---
title: "WorkerGlobalScope: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Reporting API")}}{{AvailableInWorkers("worker")}}

Das **`securitypolicyviolation`** Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) in einem Worker verletzt wird.

Der Handler kann mit der `onsecuritypolicyviolation` Ereignis-Handler-Eigenschaft oder mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zugewiesen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
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
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
