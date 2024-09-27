---
title: "Element: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef}}

Das **`securitypolicyviolation`** Ereignis wird ausgelöst, wenn eine [Content-Security-Policy](/de/docs/Web/HTTP/CSP) verletzt wird.

Das Ereignis wird auf dem Element ausgelöst, wenn es zu einem Verstoß gegen die CSP-Richtlinie kommt.

Dieses Ereignis [blubbert](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed). Es wird normalerweise von einem Ereignishandler auf dem [`Window`](/de/docs/Web/API/Window)- oder [`Document`](/de/docs/Web/API/Document)-Objekt behandelt.

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis zu einem übergeordneten Objekt hinzufügen (d.h. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl die Eigenschaft in HTML-Elementen existiert, kann der Handler der Eigenschaft nicht zugewiesen werden, bis die Elemente geladen sind, zu welchem Zeitpunkt dieses Ereignis bereits ausgelöst worden ist.

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

Der folgende Code zeigt, wie Sie möglicherweise eine Ereignishandlerfunktion mit der globalen Ereignishandler-Eigenschaft `onsecuritypolicyviolation` oder `addEventListener()` auf dem übergeordneten `Window` hinzufügen (Sie könnten denselben Ansatz auf `Document` verwenden).

> [!NOTE]
> Das Beispiel weist den Handler nicht direkt einem Element zu, da, wie oben erwähnt, bei in HTML definierten Elementen das Ereignis ausgelöst würde, bevor dieser Code ausgeführt werden könnte.
> Sie könnten jedoch den Ereignislistener direkt zu einem Element hinzufügen, das dynamisch konstruiert wird!

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
- [HTTP > Content-Security-Policy](/de/docs/Web/HTTP/CSP)
