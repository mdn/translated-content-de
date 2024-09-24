---
title: "HTMLInputElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLInputElement/setCustomValidity
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.setCustomValidity()`** Methode legt eine benutzerdefinierte Fehlermeldung für das Element fest.

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

In diesem Beispiel übergeben wir die ID eines Eingabeelements und setzen verschiedene Fehlermeldungen abhängig davon, ob der Wert fehlt, zu niedrig oder zu hoch ist. Beachten Sie, dass die Nachricht nicht sofort angezeigt wird. Ein Versuch, das Formular abzuschicken, wird die Nachricht anzeigen, oder Sie können die Methode [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity) des Elements aufrufen.

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("Sie müssen dieses Feld ausfüllen!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("Bitte geben Sie eine höhere Zahl ein!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Das ist zu hoch!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

Es ist entscheidend, die Nachricht auf einen leeren String zu setzen, wenn keine Fehler vorliegen. Solange die Fehlermeldung nicht leer ist, wird die Formularvalidierung nicht bestehen und das Formular wird nicht abgeschickt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Handbuch: Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- {{domxref('ValidityState')}}
