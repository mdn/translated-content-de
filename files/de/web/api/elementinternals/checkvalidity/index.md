---
title: "ElementInternals: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/ElementInternals/checkValidity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die **`checkValidity()`**-Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle überprüft, ob das Element die auf es angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt.

Gibt `checkValidity` `false` zurück, wird ein stornierbares [ungültiges Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element ausgelöst.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true` wenn das Element alle Validierungsbeschränkungen erfüllt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Im folgenden Beispiel wird [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity) verwendet, um anzuzeigen, dass das Element die Validierungsregeln nicht erfüllt. Ein Aufruf von `checkValidity()` gibt `false` zurück. Nach erneutem Aufruf von `setValidity`, diesmal um anzuzeigen, dass alle Regeln auf `false` gesetzt sind, gibt `checkValidity()` `true` zurück.

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
