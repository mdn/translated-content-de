---
title: "Element: securitypolicyviolation Event"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content-Security-Richtlinie](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn eine Verletzung der CSP-Richtlinie vorliegt.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [komponiert](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis im Allgemeinen zu einem Top-Level-Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Während HTML-Elemente technisch gesehen das Ziel des `securitypolicyviolation`-Ereignisses sein können, wird dieses Ereignis in der Praxis nicht auf ihnen ausgelöst – zum Beispiel löst eine blockierte `<img>`-Quelle dieses Ereignis direkt auf dem `document` als Ziel aus, anstatt vom `<img>`-Element zu bubbeln.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

### Abhören des securitypolicyviolation-Ereignisses auf Window

Der folgende Code zeigt, wie Sie eine Ereignishandlerfunktion mit der globalen Ereignishandlereigenschaft `onsecuritypolicyviolation` oder `addEventListener()` auf dem Top-Level `Window` hinzufügen könnten (Sie könnten denselben Ansatz beim `Document` verwenden).

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
