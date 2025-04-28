---
title: "ShadowRoot: host-Eigenschaft"
short-title: host
slug: Web/API/ShadowRoot/host
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Shadow DOM")}}

Die **`host`**-Schreibgeschützte Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.

## Wert

Ein DOM-[`Element`](/de/docs/Web/API/Element).

## Beispiele

```js
const customElem = document.querySelector("my-shadow-dom-element");
const shadow = customElem.shadowRoot;

// …

// return the original host element some time later
const hostElem = shadow.host;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) HTML-Attribute
- {{HTMLelement("template")}} und {{HTMLElement("slot")}} HTML-Elemente
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}} und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
