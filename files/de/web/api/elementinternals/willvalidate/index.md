---
title: "ElementInternals: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/ElementInternals/willValidate
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`willValidate`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle gibt `true` zurück, wenn das Element ein einreichbares Element ist, das für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) infrage kommt.

Elemente, die von der Möglichkeit zur Einschränkungsvalidierung ausgeschlossen sind, beinhalten solche mit den Attributen: `disabled`, `hidden` oder `readonly`, Eingabeelemente des Typs `type=button` oder `type=reset`, oder jedes Element, das ein {{htmlelement("datalist")}}-Element ist oder einen `<datalist>`-Elementvorfahren hat.

## Wert

`true`, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist, andernfalls `false`.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Kontrollkästchenkomponente mit `formAssociated` auf `true` gesetzt, der Wert von `willValidate` wird in der Konsole protokolliert.

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
