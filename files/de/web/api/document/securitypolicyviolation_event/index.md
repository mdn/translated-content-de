---
title: "Dokument: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef}}

Das **`securitypolicyviolation`** Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.

Das Ereignis wird im Dokument ausgelöst, wenn es eine Verletzung der CSP-Richtlinie des Dokuments gibt (und kann auch von Elementen im Dokument aufsteigen).

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) zum {{domxref("Window")}} Objekt und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis zu einem übergeordneten Objekt hinzufügen (z.B. {{domxref("Window")}} oder {{domxref("Document")}}).
> Auch wenn die Eigenschaft in HTML-Elementen existiert, können Sie keinen Handler zu der Eigenschaft hinzufügen, bis die Elemente geladen sind. Zu diesem Zeitpunkt wird dieses Ereignis jedoch bereits ausgelöst worden sein.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein {{domxref("SecurityPolicyViolationEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der untenstehende Code zeigt, wie Sie eine Ereignishandlerfunktion mit der `onsecuritypolicyviolation` Ereignishandler-Eigenschaft oder `addEventListener()` auf dem `Document` hinzufügen können.

```js
document.onsecuritypolicyviolation = (e) => {
  // Bearbeiten Sie hier SecurityPolicyViolationEvent e
};

document.addEventListener("securitypolicyviolation", (e) => {
  // Bearbeiten Sie hier SecurityPolicyViolationEvent e
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}} Ereignis der {{domxref("Element")}} Schnittstelle
- Das {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} Ereignis der {{domxref("WorkerGlobalScope")}} Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/CSP)
