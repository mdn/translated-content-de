---
title: "Element: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Reporting API")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn es zu einer Verletzung der CSP-Richtlinie kommt.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) bis zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [composed](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis im Allgemeinen zu einem obersten Objekt hinzufügen (z.B. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Während HTML-Elemente technisch gesehen das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird dieses Ereignis in der Praxis nicht auf ihnen ausgelöst—zum Beispiel löst eine blockierte `<img>`-Quelle dieses Ereignis direkt auf `document` als Ziel aus, anstatt vom `<img>`-Element zu blubbern.

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

### Überwachung von securitypolicyviolation auf Window

Der folgende Code zeigt, wie Sie eine Ereignishandlerfunktion über die globale Ereignishandlereigenschaft `onsecuritypolicyviolation` oder `addEventListener()` auf dem obersten `Window` hinzufügen könnten (Sie könnten genau denselben Ansatz auf `Document` verwenden).

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

- Das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis der [`Document`](/de/docs/Web/API/Document)-Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)-Ereignis der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
