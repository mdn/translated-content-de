---
title: "HTMLElement: attachInternals()-Methode"
short-title: attachInternals()
slug: Web/API/HTMLElement/attachInternals
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Web Components")}}

Die **`HTMLElement.attachInternals()`**-Methode gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück. Diese Methode ermöglicht es einem [benutzerdefinierten Element](/de/docs/Web/API/Web_components/Using_custom_elements), an HTML-Formularen teilzunehmen. Das `ElementInternals`-Interface bietet Hilfsmittel zum Arbeiten mit diesen Elementen in der gleichen Weise, wie Sie mit einem Standard-HTML-Formularelement arbeiten würden, und stellt auch das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) dem Element zur Verfügung.

## Syntax

```js-nolint
attachInternals()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das Element kein benutzerdefiniertes Element ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die "internals"-Funktion als Teil der Elementdefinition deaktiviert wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn diese Methode zweimal auf demselben Element aufgerufen wird.

## Beispiele

Das folgende Beispiel demonstriert, wie man ein benutzerdefiniertes, formularassoziiertes Element mit `HTMLElement.attachInternals` erstellt. Die [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form)-Eigenschaft wird dann in die Konsole ausgegeben, um zu zeigen, dass wir ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt haben.

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
console.log(element.internals_.form);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fähigere Formularsteuerungen](https://web.dev/articles/more-capable-form-controls)
- [Erstellen von benutzerdefinierten Formularsteuerungen mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
