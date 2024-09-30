---
title: "Element: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.

Das Ereignis wird am Element ausgelöst, wenn es zu einer Verletzung der CSP-Richtlinie kommt.

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).
Es wird normalerweise von einem Ereignishandler am [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)-Objekt verarbeitet.

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis zu einem obersten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Während die Eigenschaft in HTML-Elementen existiert, können Sie der Eigenschaft keinen Handler zuweisen, bis die Elemente geladen sind, zu welchem Zeitpunkt dieses Ereignis bereits ausgelöst wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignishandler-Funktion mit der globalen `onsecuritypolicyviolation`-Ereignis-Handler-Eigenschaft oder `addEventListener()` auf dem obersten `Window` hinzufügen könnten (Sie könnten denselben Ansatz auch auf `Document` verwenden).

> [!NOTE]
> Das Beispiel weist den Handler nicht direkt einem Element zu, da, wie oben erwähnt, bei in HTML definierten Elementen das Ereignis ausgelöst würde, bevor dieser Code ausgeführt werden könnte.
> Sie könnten jedoch den Ereignis-Listener direkt einem Element hinzufügen, das dynamisch erstellt wird!

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
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/CSP)
