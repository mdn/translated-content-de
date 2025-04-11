---
title: "Dokument: securitypolicyviolation Ereignis"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: 5a599ba73d10daf8899b1baf07bcebd3e6d14ae4
---

{{APIRef}}

Das **`securitypolicyviolation`** Ereignis wird ausgelöst, wenn eine [Content-Sicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

Das Ereignis wird im Dokument ausgelöst, wenn eine Verletzung der CSP-Richtlinie des Dokuments vorliegt (und kann auch vom Elemente im Dokument aufsteigen).

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum [`Window`](/de/docs/Web/API/Window) Objekt und ist [composed](/de/docs/Web/API/Event/composed).

> [!NOTE]
> Sie sollten den Handler für dieses Ereignis generell zu einem oberen Objektniveau hinzufügen (z.B. [`Window`](/de/docs/Web/API/Window) oder [`Document`](/de/docs/Web/API/Document)).
> Obwohl HTML-Elemente technisch das Ziel des `securitypolicyviolation` Ereignisses sein können, wird dieses Ereignis in der Praxis nicht an ihnen ausgelöst — zum Beispiel löst eine blockierte `<img>`-Quelle dieses Ereignis direkt auf `document` als Ziel aus, statt vom `<img>`-Element aus zu bubbeln.

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

Der folgende Code zeigt, wie Sie eine Ereignishandlerfunktion mit der `onsecuritypolicyviolation`-Eigenschaft des Ereignishandlers oder `addEventListener()` im `Document` hinzufügen können.

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

- Das [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) Ereignis der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle
- [HTTP > Content-Sicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP)
