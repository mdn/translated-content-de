---
title: "ElementInternals: Gültigkeits-Eigenschaft"
short-title: validity
slug: Web/API/ElementInternals/validity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`validity`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände darstellt, in denen sich das Element im Hinblick auf die Validierung von Einschränkungen befinden kann.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht die `formAssociated`-Eigenschaft auf `true` gesetzt hat.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit `formAssociated` auf `true` gesetzt. Der Wert von `validity.valid` wird in der Konsole protokolliert.

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

## Browser-Kompatibilität

{{Compat}}
