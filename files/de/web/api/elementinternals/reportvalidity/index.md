---
title: "ElementInternals: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/ElementInternals/reportValidity
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die **`reportValidity()`**-Methode der {{domxref("ElementInternals")}}-Schnittstelle überprüft, ob das Element alle darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt.

Wenn `reportValidity` `false` zurückgibt, wird ein abbrechbares [ungültiges Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) für das Element ausgelöst.

Diese Methode verhält sich ähnlich wie {{domxref("ElementInternals.checkValidity()")}}, zusätzlich wird jedoch der Wert von {{domxref("ElementInternals.validationMessage")}} an den Benutzeragenten zur Anzeige gesendet.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true`, wenn das Element alle Validierungsbeschränkungen erfüllt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `formAssociated`-Eigenschaft des Elements nicht auf `true` gesetzt ist.

## Beispiele

Im folgenden Beispiel wird {{domxref("ElementInternals.setValidity()")}} verwendet, um anzuzeigen, dass das Element die Validierungsregeln nicht erfüllt. Das Aufrufen von `reportValidity()` gibt `false` zurück und der Wert "my message" wird zur Anzeige an den Benutzeragenten gesendet.

Nachdem `setValidity` erneut aufgerufen wurde und diesmal angegeben wurde, dass alle Regeln falsch markiert sind, gibt `reportValidity()` `true` zurück.

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
