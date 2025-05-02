---
title: "Dokument: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Dokument ausgelöst, wenn es zu einer Verletzung der CSP-Richtlinie des Dokuments kommt (und kann auch von Elementen im Dokument nach oben steigen).

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis im Allgemeinen auf ein Objekt der obersten Ebene hinzufügen (z. B. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Während HTML-Elemente technisch gesehen das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird dieses Ereignis in der Realität nicht auf ihnen ausgelöst – beispielsweise löst eine blockierte `<img>`-Quelle dieses Ereignis direkt auf `document` als Ziel aus, anstatt von dem `<img>`-Element zu steigen.

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

Der folgende Code zeigt, wie Sie eine Ereignishandler-Funktion mithilfe der `onsecuritypolicyviolation`-Ereignishandler-Eigenschaft oder `addEventListener()` im `Document` hinzufügen könnten.

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

- Das [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)-Ereignis der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
