---
title: "ShadowRoot: host-Eigenschaft"
short-title: host
slug: Web/API/ShadowRoot/host
l10n:
  sourceCommit: 584e1d86cc4d770f43b32ec62613a4840d2821db
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`host`**-Eigenschaft des {{domxref("ShadowRoot")}} gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.

## Wert

Ein DOM {{domxref('Element')}}.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// gibt das ursprüngliche Host-Element später zurück
let hostElem = shadow.host;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Global_attributes#part) und [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts) HTML-Attribute
- {{HTMLelement("template")}} und {{HTMLElement("slot")}} HTML-Elemente
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
