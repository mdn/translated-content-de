---
title: "ElementInternals: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/ElementInternals/reportValidity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die **`reportValidity()`**-Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle überprüft, ob das Element alle [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt, die darauf angewendet werden.

Wenn `reportValidity` `false` zurückgibt, wird ein abbrechbares [ungültiges Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element ausgelöst.

Diese Methode verhält sich ähnlich wie [`ElementInternals.checkValidity()`](/de/docs/Web/API/ElementInternals/checkValidity), allerdings übermittelt sie zusätzlich den Wert von [`ElementInternals.validationMessage`](/de/docs/Web/API/ElementInternals/validationMessage) an den Benutzeragenten zur Anzeige.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true`, wenn das Element alle Validierungsanforderungen erfüllt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `formAssociated`-Eigenschaft des Elements nicht auf `true` gesetzt ist.

## Beispiele

Im folgenden Beispiel wird [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity) verwendet, um anzuzeigen, dass das Element die Validierungsregeln nicht erfüllt. Der Aufruf von `reportValidity()` gibt `false` zurück und der Wert "my message" wird an den Benutzeragenten zur Anzeige übermittelt.

Nach einem erneuten Aufruf von `setValidity`, diesmal unter Angabe, dass alle Regeln falsch markiert sind, gibt `reportValidity()` `true` zurück.

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
