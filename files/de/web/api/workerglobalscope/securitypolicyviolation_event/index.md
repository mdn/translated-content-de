---
title: "WorkerGlobalScope: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers("worker")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn in einem Worker gegen eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verstoßen wird.

Sie können einen Handler über die Ereignishandler-Eigenschaft `onsecuritypolicyviolation` zuweisen (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onsecuritypolicyviolation` hinzugefügte Ereignis-Listener ersetzt werden) oder [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })
```

Alternativ können Sie einen Handler der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsecuritypolicyviolation = (event) => { }
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignishandler-Funktion über die Ereignishandler-Eigenschaft `onsecuritypolicyviolation` hinzufügen (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onsecuritypolicyviolation` hinzugefügte Ereignis-Listener ersetzt werden) oder die Methode `addEventListener()` aufrufen können.

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

- Das Ereignis [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event) der Schnittstelle [`Document`](/de/docs/Web/API/Document)
- Das Ereignis [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) der Schnittstelle [`Element`](/de/docs/Web/API/Element)
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
