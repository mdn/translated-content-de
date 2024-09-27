---
title: "Document: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.

Das Ereignis wird im Dokument ausgelöst, wenn eine Verletzung der CSP-Richtlinie des Dokuments vorliegt (und es kann auch von Elementen im Dokument bubblen).

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [komponiert](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis zu einem Objekt auf oberster Ebene hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl die Eigenschaft in HTML-Elementen existiert, können Sie erst dann einen Handler zuweisen, wenn die Elemente geladen sind, zu diesem Zeitpunkt wird dieses Ereignis jedoch bereits ausgelöst worden sein.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignishandlerfunktion mit der `onsecuritypolicyviolation`-Ereignishandlereigenschaft oder `addEventListener()` im `Document` hinzufügen können.

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
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/CSP)
