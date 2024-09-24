---
title: "WorkerGlobalScope: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) in einem Worker verletzt wird.

Der Handler kann mit der `onsecuritypolicyviolation` Ereignishandler-Eigenschaft oder mittels {{domxref("EventTarget.addEventListener()")}} zugewiesen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein {{domxref("SecurityPolicyViolationEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignis-Handler-Funktion mittels der `onsecuritypolicyviolation`-Ereignishandler-Eigenschaft hinzufügen oder die `addEventListener()`-Methode aufrufen könnten.

```js
self.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

self.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e hier
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}}-Ereignis der {{domxref("Document")}} Schnittstelle
- Das {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}}-Ereignis der {{domxref("Element")}} Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/CSP)
