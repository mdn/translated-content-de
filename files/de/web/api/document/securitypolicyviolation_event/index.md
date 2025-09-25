---
title: "Dokument: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Reporting API")}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Dokument ausgelöst, wenn es eine Verletzung der CSP-Richtlinie des Dokuments gibt (und kann auch von Elementen im Dokument aufsteigen).

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [komponiert](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis im Allgemeinen zu einem obersten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Auch wenn HTML-Elemente technisch das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird dieses Ereignis in der Praxis nicht auf ihnen ausgelöst — beispielsweise löst eine blockierte `<img>`-Quelle dieses Ereignis direkt auf `document` als Ziel aus, anstatt vom `<img>`-Element aufzusteigen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignis-Handler-Funktion über die `onsecuritypolicyviolation`-Ereignis-Handler-Eigenschaft oder `addEventListener()` auf dem `Document` hinzufügen können.

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
