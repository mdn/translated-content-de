---
title: "ElementInternals: shadowRoot-Eigenschaft"
short-title: shadowRoot
slug: Web/API/ElementInternals/shadowRoot
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`shadowRoot`** des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces gibt den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) für dieses Element zurück.

## Wert

Ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), wenn das Element einen Shadow Root hat, andernfalls `null`.

## Beispiele

Das folgende Beispiel gibt den Wert von `shadowRoot` in der Konsole aus, unmittelbar nachdem [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufgerufen wurde. Zu diesem Zeitpunkt ist der Wert `null`. Nach dem Aufrufen von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hat das Element einen Shadow Root, und `shadowRoot` gibt das Objekt zurück, das ihn repräsentiert.

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();

    console.log(this.internals_.shadowRoot); // null

    this.attachShadow({ mode: "open" });

    console.log(this.internals_.shadowRoot); // a ShadowRoot object
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
