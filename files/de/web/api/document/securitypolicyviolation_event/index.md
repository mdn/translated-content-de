---
title: "Document: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.

Das Ereignis wird im Dokument ausgelöst, wenn eine Verletzung der CSP-Richtlinie des Dokuments auftritt (und kann auch von Elementen im Dokument aus "bubbeln").

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window)-Objekt und ist [komponiert](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis zu einem obersten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl die Eigenschaft in HTML-Elementen existiert, können Sie der Eigenschaft keinen Handler zuweisen, bis die Elemente geladen wurden. Zu diesem Zeitpunkt wurde dieses Ereignis jedoch bereits ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie möglicherweise eine Ereignishandlerfunktion mit der `onsecuritypolicyviolation` Ereignishandler-Eigenschaft oder `addEventListener()` im `Document` hinzufügen.

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
