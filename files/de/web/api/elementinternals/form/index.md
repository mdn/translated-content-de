---
title: "ElementInternals: form-Eigenschaft"
short-title: form
slug: Web/API/ElementInternals/form
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`form`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces gibt das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück, das mit diesem Element verknüpft ist.

## Wert

Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement).

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente innerhalb eines Formulars mit der ID `myForm`.
Das Ausdrucken von `form.length` in die Konsole gibt uns den Wert von [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length).

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <custom-label for="custom-checkbox">Join newsletter</custom-label>
</form>
```

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;
  #internals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  connectedCallback() {
    console.log(this.#internals.form.length);
  }
}

window.customElements.define("custom-checkbox", CustomCheckbox);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
