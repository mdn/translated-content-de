---
title: "HTMLElement: attachInternals() Methode"
short-title: attachInternals()
slug: Web/API/HTMLElement/attachInternals
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Web Components")}}

Die **`HTMLElement.attachInternals()`** Methode gibt ein {{domxref("ElementInternals")}}-Objekt zurück.
Diese Methode ermöglicht es einem [benutzerdefinierten Element](/de/docs/Web/API/Web_components/Using_custom_elements), an HTML-Formularen teilzunehmen. Das `ElementInternals`-Interface bietet Werkzeuge zum Arbeiten mit diesen Elementen, auf die gleiche Weise wie mit jedem standardmäßigen HTML-Formularelement, und stellt auch das [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) dem Element zur Verfügung.

## Syntax

```js-nolint
attachInternals()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("ElementInternals")}}-Objekt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element kein benutzerdefiniertes Element ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die "internals"-Funktionalität im Rahmen der Elementdefinition deaktiviert wurde.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn diese Methode zweimal am selben Element aufgerufen wird.

## Beispiele

Das folgende Beispiel zeigt, wie ein benutzerdefiniertes form-assoziiertes Element mit `HTMLElement.attachInternals` erstellt wird. Die {{domxref("ElementInternals.form")}}-Eigenschaft wird dann in die Konsole ausgegeben, um zu demonstrieren, dass wir ein {{domxref("ElementInternals")}}-Objekt haben.

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

- [Leistungsfähigere Formularelemente](https://web.dev/articles/more-capable-form-controls)
- [Erstellen benutzerdefinierter Formularelemente mit ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
