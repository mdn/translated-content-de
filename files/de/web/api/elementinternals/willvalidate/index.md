---
title: "ElementInternals: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/ElementInternals/willValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`willValidate`** der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle gibt `true` zurück, wenn das Element ein übermittelbares Element ist, das ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) ist.

Elemente, die keine Kandidaten für die Einschränkungsvalidierung sein können, sind solche, die die Attribute `disabled`, `hidden` oder `readonly` besitzen, Eingabeelemente vom `type=button` oder `type=reset`, oder jedes Element, das ein {{htmlelement("datalist")}}-Element ist oder einen `<datalist>`-Element-Vorfahren hat.

## Wert

`true`, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist, sonst `false`.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit `formAssociated` auf `true` gesetzt. Der Wert von `willValidate` wird in der Konsole protokolliert.

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
