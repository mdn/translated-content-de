---
title: "Element: securitypolicyviolation-Event"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef}}

Das **`securitypolicyviolation`**-Ereignis wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn es zu einer Verletzung der CSP-Richtlinie kommt.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).
Es wird normalerweise von einem Ereignishandler beim [`Window`](/de/docs/Web/API/Window)- oder [`Document`](/de/docs/Web/API/Document)-Objekt behandelt.

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis einem Top-Level-Objekt hinzufügen (d. h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl die Eigenschaft in HTML-Elementen vorhanden ist, können Sie keinen Handler der Eigenschaft zuweisen, bis die Elemente geladen sind, zu welchem Zeitpunkt dieses Ereignis bereits ausgelöst wurde.

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

Der untenstehende Code zeigt, wie Sie eine Ereignishandlerfunktion mit der globalen Ereignishandlereigenschaft `onsecuritypolicyviolation` oder `addEventListener()` auf dem Top-Level-`Window` hinzufügen könnten (Sie könnten genau denselben Ansatz auf dem `Document` verwenden).

> [!NOTE]
> Das Beispiel weist den Handler nicht direkt einem Element zu, da, wie oben erwähnt, für in HTML definierte Elemente das Ereignis ausgelöst würde, bevor dieser Code ausgeführt werden könnte.
> Sie könnten jedoch den Ereignis-Listener direkt einem Element hinzufügen, das dynamisch konstruiert wird!

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
