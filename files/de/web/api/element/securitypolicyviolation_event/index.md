---
title: "Element: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

{{APIRef("Reporting API")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn gegen eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verstoßen wird.

Das Ereignis wird auf dem Element ausgelöst, wenn es einen Verstoß gegen die CSP-Richtlinie gibt.

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [composed](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis im Allgemeinen zu einem Objekt der obersten Ebene hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl HTML-Elemente technisch gesehen das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird dieses Ereignis in der Praxis nicht auf ihnen ausgelöst – beispielsweise löst eine blockierte `<img>`-Quelle dieses Ereignis direkt auf `document` als Ziel aus, anstatt vom `<img>`-Element zu bubblen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

### Auf securitypolicyviolation bei Window lauschen

Der folgende Code zeigt, wie Sie eine Event-Handler-Funktion mithilfe der globalen Event-Handler-Eigenschaft `onsecuritypolicyviolation` oder `addEventListener()` auf dem `Window` der obersten Ebene hinzufügen können (Sie könnten denselben Ansatz auch bei `Document` verwenden).

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
