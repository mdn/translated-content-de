---
title: "ElementInternals: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/ElementInternals/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die **`reportValidity()`** Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle prüft, ob das Element alle darauf angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Guides/Constraint_validation) regeln erfüllt.

Wenn `reportValidity` `false` zurückgibt, wird ein abbrechbares [ungültiges Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element ausgelöst.

Diese Methode verhält sich ähnlich wie [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity), allerdings wird zusätzlich der Wert von [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) an den Benutzeragenten zur Anzeige gesendet.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true`, wenn das Element alle Validierungsbeschränkungen erfüllt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element seine `formAssociated` Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Im folgenden Beispiel wird [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity) verwendet, um anzuzeigen, dass das Element nicht den Validierungsregeln entspricht. Der Aufruf von `reportValidity()` gibt `false` zurück, und der Wert "my message" wird an den Benutzeragenten zur Anzeige gesendet.

Nach erneutem Aufruf von `setValidity`, diesmal mit der Angabe, dass alle Regeln auf false gesetzt sind, gibt `reportValidity()` `true` zurück.

```js
let element = document.getElementById("join-checkbox");
element.internals_.setValidity({ valueMissing: true }, "my message");
console.log(element.internals_.reportValidity()); // false
element.internals_.setValidity({});
console.log(element.internals_.reportValidity()); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
