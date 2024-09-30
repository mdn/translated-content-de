---
title: "HTMLObjectElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLObjectElement/setCustomValidity
l10n:
  sourceCommit: 2553e9a4d085760294dd6874c541ea488381c746
---

{{APIRef("HTML DOM")}}

Die **`setCustomValidity()`** Methode des
[`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Interface setzt eine benutzerdefinierte Fehlermeldung für das
Element.

## Syntax

```js-nolint
setCustomValidity(errorMessage)
```

### Parameter

- `errorMessage`
  - : Die Nachricht, die für Validitätsfehler verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

In diesem Beispiel übergeben wir die ID eines Eingabeelements und setzen je nach fehlendem, zu niedrigem oder zu hohem Wert unterschiedliche Fehlermeldungen. Beachten Sie, dass die Nachricht nicht sofort angezeigt wird. Ein Versuch, das Formular abzusenden, zeigt die Nachricht an, oder Sie können die
[`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity) Methode auf dem Element aufrufen.

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

Es ist wichtig, die Nachricht auf eine leere Zeichenkette zu setzen, wenn keine Fehler vorliegen. Solange die Fehlermeldung nicht leer ist, wird das Formular die Validierung nicht bestehen und nicht gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`validityState`](/de/docs/Web/API/ValidityState)
- [`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)
- [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)
- [`validityState.patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)
- [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)
- [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- [`validityState.valid`](/de/docs/Web/API/ValidityState/valid)
- [`validityState.customError`](/de/docs/Web/API/ValidityState/customError)
