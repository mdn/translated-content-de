---
title: "HTMLObjectElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLObjectElement/setCustomValidity
l10n:
  sourceCommit: 2553e9a4d085760294dd6874c541ea488381c746
---

{{APIRef("HTML DOM")}}

Die **`setCustomValidity()`** Methode des
{{domxref("HTMLObjectElement")}} Interfaces setzt eine benutzerdefinierte Fehlermeldung für das
Element.

## Syntax

```js-nolint
setCustomValidity(errorMessage)
```

### Parameter

- `errorMessage`
  - : Die Nachricht, die für Gültigkeitsfehler verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

In diesem Beispiel übergeben wir die ID eines Eingabeelements und setzen unterschiedliche Fehlermeldungen, je nachdem, ob der Wert fehlt, zu niedrig oder zu hoch ist. Beachten Sie, dass die Nachricht nicht sofort angezeigt wird. Beim Versuch, das Formular abzusenden, wird die Nachricht angezeigt, oder Sie können die Methode [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity) auf dem Element aufrufen.

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Thats too high!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

Es ist wichtig, die Nachricht auf einen leeren String zu setzen, wenn keine Fehler vorliegen. Solange die Fehlermeldung nicht leer ist, wird das Formular die Validierung nicht bestehen und nicht übermittelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('validityState')}}
- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.valid')}}
- {{domxref('validityState.customError')}}
