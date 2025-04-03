---
title: "Element: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn es zu einem Verstoß gegen die CSP-Richtlinie kommt.

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und ist [komponiert](/de/docs/Web/API/Event/composed).
Es wird normalerweise von einem Ereignishandler auf dem [`Window`](/de/docs/Web/API/Window)- oder [`Document`](/de/docs/Web/API/Document)-Objekt verarbeitet.

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis zu einem Top-Level-Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl die Eigenschaft in HTML-Elementen existiert, können Sie keinen Handler für die Eigenschaft zuweisen, bis die Elemente geladen sind, zu welchem Zeitpunkt dieses Ereignis bereits ausgelöst wurde.

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

Der folgende Code zeigt, wie Sie eine Ereignishandlerfunktion mithilfe der `onsecuritypolicyviolation` globalen Ereignishandlereigenschaft oder `addEventListener()` am Top-Level-`Window` hinzufügen könnten (Sie könnten denselben Ansatz beim `Document` verwenden).

> [!NOTE]
> Das Beispiel weist den Handler nicht direkt einem Element zu, da, wie oben erwähnt, bei in HTML definierten Elementen das Ereignis ausgelöst würde, bevor dieser Code ausgeführt werden könnte.
> Sie können jedoch den Ereignislisten direkt einem Element hinzufügen, das dynamisch konstruiert wird!

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
