---
title: "Document: Ereignis securitypolicyviolation"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

{{APIRef("Reporting API")}}

Das Ereignis **`securitypolicyviolation`** wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Dokument ausgelöst, wenn die CSP-Richtlinie des Dokuments verletzt wird (und kann auch von Elementen im Dokument nach oben weitergegeben werden).

Dieses Ereignis [wird nach oben weitergegeben](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) an das [`Window`](/de/docs/Web/API/Window)-Objekt und ist [composed](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis im Allgemeinen zu einem Objekt der obersten Ebene hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl HTML-Elemente technisch gesehen das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird dieses Ereignis in der Praxis nicht auf ihnen ausgelöst – beispielsweise löst eine blockierte `<img>`-Quelle dieses Ereignis direkt mit `document` als Ziel aus, anstatt vom `<img>`-Element nach oben weitergegeben zu werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignishandler-Funktion mithilfe der Ereignishandler-Eigenschaft `onsecuritypolicyviolation` oder `addEventListener()` auf dem `Document` hinzufügen können.

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
