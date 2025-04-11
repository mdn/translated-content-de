---
title: "HTMLInputElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLInputElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.setCustomValidity()`**-Methode setzt eine benutzerdefinierte Fehlermeldung für das Element.

## Syntax

```js-nolint
setCustomValidity(message)
```

### Parameter

- `message`
  - : Die Nachricht, die für Gültigkeitsfehler verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

In diesem Beispiel übergeben wir die ID eines Eingabeelements und setzen verschiedene Fehlermeldungen je nachdem, ob der Wert fehlt, zu niedrig oder zu hoch ist. Beachten Sie, dass die Nachricht nicht sofort angezeigt wird. Ein Versuch, das Formular abzuschicken, wird die Nachricht anzeigen, oder Sie können die Methode [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity) auf dem Element aufrufen.

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

Es ist wichtig, die Nachricht auf einen leeren String zu setzen, wenn keine Fehler vorliegen. Solange die Fehlermeldung nicht leer ist, wird das Formular die Überprüfung nicht bestehen und nicht abgeschickt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [`ValidityState`](/de/docs/Web/API/ValidityState)
