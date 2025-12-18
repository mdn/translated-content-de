---
title: "ShadowRoot: host-Eigenschaft"
short-title: host
slug: Web/API/ShadowRoot/host
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Shadow DOM")}}

Die **`host`** schreibgeschützte Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gibt eine Referenz auf das DOM-Element zurück, mit dem das `ShadowRoot` verbunden ist.

## Wert

Ein DOM [`Element`](/de/docs/Web/API/Element).

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

- HTML-Attribute [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) und [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
- HTML-Elemente {{HTMLelement("template")}} und {{HTMLElement("slot")}}
- CSS-Pseudoklassen {{CSSXref(":host")}}, {{cssxref(":host()")}}, und {{cssxref(":host-context()")}}
- CSS-Pseudoelemente {{CSSXref("::part")}} und {{CSSXref("::slotted")}}
