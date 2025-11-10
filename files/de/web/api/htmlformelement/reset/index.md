---
title: "HTMLFormElement: reset() Methode"
short-title: reset()
slug: Web/API/HTMLFormElement/reset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.reset()`** Methode stellt die Standardwerte eines Formularfeldes wieder her. Diese Methode hat die gleiche Funktion wie das Klicken auf das [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset)-Steuerelement des Formulars.

Wenn ein Formularelement (wie ein Reset-Button) einen Namen oder eine ID von _reset_ hat, wird die Reset-Methode des Formulars maskiert. Es werden keine anderen Attribute im Eingabeelement, wie z. B. `disabled`, zurückgesetzt.

Beachten Sie, dass wenn [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) aufgerufen wird, um den Wert eines bestimmten Attributs festzulegen, ein späterer Aufruf von `reset()` das Attribut nicht auf seinen Standardwert zurücksetzen wird, sondern der Wert beibehalten wird, den der Aufruf von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) festgelegt hat.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
document.getElementById("my-form").reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
