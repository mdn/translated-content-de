---
title: "Element: securitypolicyviolation-Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn es eine Verletzung der CSP-Richtlinie gibt.

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).
Es wird normalerweise von einem Ereignishandler auf dem {{domxref("Window")}}- oder {{domxref("Document")}}-Objekt behandelt.

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis zu einem obersten Objekt hinzufügen (d.h. {{domxref("Window")}} oder {{domxref("Document")}}).
> Obwohl die Eigenschaft in HTML-Elementen existiert, können Sie keinen Handler an die Eigenschaft zuweisen, bis die Elemente geladen sind, zu diesem Zeitpunkt wird dieses Ereignis bereits ausgelöst worden sein.

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

Der untenstehende Code zeigt, wie Sie eine Ereignishandlerfunktion mit der globalen Ereignishandler-Eigenschaft `onsecuritypolicyviolation` oder `addEventListener()` auf dem obersten `Window` hinzufügen könnten (Sie könnten genau denselben Ansatz auch auf `Document` verwenden).

> [!NOTE]
> Das Beispiel weist den Handler nicht direkt einem Element zu, da, wie oben erwähnt, für in HTML definierte Elemente das Ereignis ausgelöst würde, bevor dieser Code ausgeführt werden könnte.
> Sie könnten jedoch den Ereignis-Listener direkt einem dynamisch konstruierten Element hinzufügen!

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

- Das {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}}-Ereignis der {{domxref("Document")}}-Schnittstelle
- Das {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}}-Ereignis der {{domxref("WorkerGlobalScope")}}-Schnittstelle
- [HTTP > Content Security Policy](/de/docs/Web/HTTP/CSP)
