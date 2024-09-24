---
title: "ElementInternals: Methode checkValidity()"
short-title: checkValidity()
slug: Web/API/ElementInternals/checkValidity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die **`checkValidity()`**-Methode der {{domxref("ElementInternals")}}-Schnittstelle überprüft, ob das Element alle darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt.

Wenn `checkValidity` `false` zurückgibt, wird ein abbrechbares [Invalid-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element ausgelöst.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true`, wenn das Element alle Validierungseinschränkungen erfüllt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element nicht seine `formAssociated`-Eigenschaft auf `true` gesetzt hat.

## Beispiele

Im folgenden Beispiel wird {{domxref("ElementInternals.setValidity()")}} verwendet, um anzuzeigen, dass das Element die Validierungsregeln nicht erfüllt. Der Aufruf von `checkValidity()` gibt `false` zurück. Nach einem erneuten Aufruf von `setValidity`, diesmal mit der Angabe, dass alle Regeln als false markiert sind, gibt `checkValidity()` `true` zurück.

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
