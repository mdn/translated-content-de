---
title: "Element: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: 5a599ba73d10daf8899b1baf07bcebd3e6d14ae4
---

{{APIRef}}

Das **`securitypolicyviolation`** Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn die CSP-Richtlinie verletzt wird.

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [komponiert](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis im Allgemeinen an einem übergeordneten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl HTML-Elemente technisch das Ziel des `securitypolicyviolation` Ereignisses sein können, wird dieses Ereignis in der Realität nicht auf ihnen ausgelöst—zum Beispiel löst eine gesperrte `<img>`-Quelle dieses Ereignis direkt auf `document` als Ziel aus, anstatt es vom `<img>`-Element heraufzububbeln.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

### Lauschen auf securitypolicyviolation auf Window

Der folgende Code zeigt, wie Sie eine Ereignishandler-Funktion mithilfe der `onsecuritypolicyviolation` globalen Ereignishandler-Eigenschaft oder `addEventListener()` auf dem obersten `Window` hinzufügen können (Sie könnten den gleichen Ansatz auf `Document` verwenden).

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

- Das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event) Ereignis der [`Document`](/de/docs/Web/API/Document) Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) Ereignis der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
