---
title: "Element: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef}}

Das **`securitypolicyviolation`** Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.

Das Ereignis wird am Element ausgelöst, wenn es zu einem Verstoß gegen die CSP-Richtlinie kommt.

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).
Es wird normalerweise von einem Ereignis-Handler auf dem [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document) Objekt behandelt.

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis einem obersten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl die Eigenschaft in HTML-Elementen existiert, können Sie keinen Handler zuweisen, bis die Elemente geladen sind, zu welchem Zeitpunkt dieses Ereignis bereits abgefeuert worden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Ereignistyp

Ein [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Beispiele

Der folgende Code zeigt, wie Sie eine Ereignis-Handler-Funktion mit der `onsecuritypolicyviolation` globalen Ereignis-Handler-Eigenschaft oder `addEventListener()` auf dem obersten `Window` hinzufügen könnten (Sie könnten genau denselben Ansatz auf `Document` verwenden).

> [!NOTE]
> Das Beispiel weist den Handler nicht direkt einem Element zu, da, wie oben erwähnt, für in HTML definierte Elemente das Ereignis ausgelöst würde, bevor dieser Code ausgeführt werden könnte.
> Sie könnten jedoch den Ereignishörer direkt zu einem dynamisch konstruierten Element hinzufügen!

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
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/CSP)
