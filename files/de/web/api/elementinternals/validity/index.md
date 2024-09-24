---
title: "ElementInternals: Gültigkeits-Eigenschaft"
short-title: Gültigkeit
slug: Web/API/ElementInternals/validity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die **`validity`** read-only Eigenschaft der {{domxref("ElementInternals")}} Schnittstelle gibt ein {{domxref("ValidityState")}} Objekt zurück, das die verschiedenen Gültigkeitszustände darstellt, in denen sich das Element hinsichtlich der Einschränkungsvalidierung befinden kann.

## Wert

Ein {{domxref("ValidityState")}} Objekt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element nicht seine `formAssociated` Eigenschaft auf `true` gesetzt hat.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit `formAssociated` auf `true` gesetzt; der Wert von `validity.valid` wird in der Konsole protokolliert.

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

let element = document.getElementById("custom-checkbox");
console.log(element.internals_.validity.valid);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
