---
title: "ShadowRoot: host-Eigenschaft"
short-title: host
slug: Web/API/ShadowRoot/host
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`host`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.

## Wert

Ein DOM-[`Element`](/de/docs/Web/API/Element).

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// return the original host element some time later
let hostElem = shadow.host;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) HTML-Attribute
- {{HTMLelement("template")}} und {{HTMLElement("slot")}} HTML-Elemente
- {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, und {{CSSXref(":host-context", ":host-context()")}} CSS-Pseudoklassen
- {{CSSXref("::part")}} und {{CSSXref("::slotted")}} CSS-Pseudoelemente
