---
title: "ElementInternals: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/ElementInternals/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die **`checkValidity()`** Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle überprüft, ob das Element alle darauf angewendeten [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) Regeln erfüllt.

Wenn `checkValidity` `false` zurückgibt, wird ein abbrechbares [ungültiges Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element ausgelöst.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true`, wenn das Element alle Validierungsbeschränkungen erfüllt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Im folgenden Beispiel wird [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity) verwendet, um anzuzeigen, dass das Element die Validierungsregeln nicht erfüllt. Beim Aufruf von `checkValidity()` wird `false` zurückgegeben. Nach einem erneuten Aufruf von `setValidity`, diesmal mit der Angabe, dass alle Regeln falsch markiert sind, gibt `checkValidity()` `true` zurück.

```js
let element = document.getElementById("join-checkbox");
element.internals_.setValidity({ valueMissing: true }, "my message");
console.log(element.internals_.checkValidity()); // false
element.internals_.setValidity({});
console.log(element.internals_.checkValidity()); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
