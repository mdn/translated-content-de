---
title: "Dokument: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Reporting API")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Dokument ausgelöst, wenn dessen CSP-Richtlinie verletzt wird. Es kann auch von Elementen im Dokument nach oben weitergegeben werden.

Dieses Ereignis wird per [Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) an das [`Window`](/de/docs/Web/API/Window)-Objekt weitergegeben und ist [composed](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis in der Regel einem übergeordneten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl HTML-Elemente technisch gesehen das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird es in der Praxis nicht auf ihnen ausgelöst. Beispielsweise löst eine blockierte `<img>`-Quelle das Ereignis direkt auf `document` als Ziel aus, statt es vom `<img>`-Element aus nach oben weiterzugeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsecuritypolicyviolation = (event) => { }
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Event-Handler-Funktion über die Event-Handler-Eigenschaft `onsecuritypolicyviolation` oder mit `addEventListener()` auf dem `Document` hinzufügen können. Beachten Sie, dass die Zuweisung an `onsecuritypolicyviolation` gegebenenfalls andere über diese Eigenschaft hinzugefügte Event-Listener ersetzt.

```js
document.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

document.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e here
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Ereignis [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) der Schnittstelle [`Element`](/de/docs/Web/API/Element)
- Das Ereignis [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
