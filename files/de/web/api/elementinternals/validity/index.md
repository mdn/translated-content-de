---
title: "ElementInternals: validity-Eigenschaft"
short-title: validity
slug: Web/API/ElementInternals/validity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`validity`** des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die verschiedenen Gültigkeitszustände des Elements im Hinblick auf die Einschränkungsvalidierung darstellt.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht seine `formAssociated`-Eigenschaft auf `true` gesetzt hat.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit `formAssociated` auf `true` gesetzt; der Wert von `validity.valid` wird in die Konsole protokolliert.

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
