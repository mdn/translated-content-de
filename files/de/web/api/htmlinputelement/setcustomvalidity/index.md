---
title: "HTMLInputElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLInputElement/setCustomValidity
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLInputElement.setCustomValidity()`** setzt eine benutzerdefinierte Fehlermeldung für das Element.

## Syntax

```js-nolint
setCustomValidity(message)
```

### Parameter

- `message`
  - : Die Nachricht, die für Validierungsfehler verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

In diesem Beispiel übergeben wir die ID eines Eingabeelements und setzen verschiedene Fehlermeldungen abhängig davon, ob der Wert fehlt, zu niedrig oder zu hoch ist. Beachten Sie, dass die Nachricht nicht sofort angezeigt wird. Der Versuch, das Formular abzuschicken, wird die Nachricht anzeigen, oder Sie können die Methode [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity) auf dem Element aufrufen.

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("That's too high!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

Es ist wichtig, die Nachricht auf einen leeren String zu setzen, wenn keine Fehler vorliegen. Solange die Fehlermeldung nicht leer ist, wird das Formular die Validierung nicht bestehen und nicht abgesendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Client-seitige Formular-Validierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Eingeschränkte Validierung](/de/docs/Web/HTML/Constraint_validation)
- [`ValidityState`](/de/docs/Web/API/ValidityState)
