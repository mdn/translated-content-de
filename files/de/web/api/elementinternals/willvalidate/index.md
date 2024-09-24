---
title: "ElementInternals: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/ElementInternals/willValidate
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`willValidate`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle gibt `true` zurück, wenn das Element ein übermittelbares Element ist, das für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) in Frage kommt.

Elemente, die nicht für die Einschränkungsvalidierung in Frage kommen, sind solche, die die Attribute `disabled`, `hidden` oder `readonly` haben, Eingabeelemente vom Typ `type=button` oder `type=reset`, oder ein beliebiges Element, das ein {{htmlelement("datalist")}}-Element ist oder einen `<datalist>`-Elementvorfahren hat.

## Wert

`true`, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist, andernfalls `false`.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit `formAssociated` auf `true`, der Wert von `willValidate` wird in die Konsole protokolliert.

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
console.log(element.internals_.willValidate); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
