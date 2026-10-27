---
title: "Element: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Reporting API")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn ein Verstoß gegen die CSP-Richtlinie vorliegt.

Dieses Ereignis [steigt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) bis zum [`Window`](/de/docs/Web/API/Window)-Objekt auf und ist [composed](/de/docs/Web/API/Event/composed).

> [!NOTE]
> In der Regel sollten Sie den Handler für dieses Ereignis einem übergeordneten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl HTML-Elemente technisch gesehen das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird es tatsächlich nicht auf ihnen ausgelöst: Eine blockierte `<img>`-Quelle löst das Ereignis beispielsweise direkt mit `document` als Ziel aus, statt dass es vom `<img>`-Element aufsteigt.

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

### Auf securitypolicyviolation auf Window reagieren

Der folgende Code zeigt, wie Sie eine Event-Handler-Funktion über die globale Event-Handler-Eigenschaft `onsecuritypolicyviolation` hinzufügen können. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onsecuritypolicyviolation` hinzugefügte Event-Listener ersetzt werden. Alternativ können Sie `addEventListener()` auf dem übergeordneten `Window` verwenden (auf `Document` können Sie genauso vorgehen).

```js
window.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

window.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e here
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Ereignis [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event) der Schnittstelle [`Document`](/de/docs/Web/API/Document)
- Das Ereignis [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
