---
title: "HTMLFormElement: reset() Methode"
short-title: reset()
slug: Web/API/HTMLFormElement/reset
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.reset()`** Methode stellt die Standardwerte eines Formularelements wieder her. Diese Methode bewirkt dasselbe wie das Klicken auf das [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) Steuerelement des Formulars.

Wenn ein Formularsteuerelement (wie z.B. eine Reset-Schaltfläche) den Namen oder die ID _reset_ hat, wird es die Reset-Methode des Formulars überdecken. Es setzt nicht andere Attribute im Input zurück, wie z.B. `disabled`.

Beachten Sie, dass wenn {{domxref("Element.setAttribute", "setAttribute()")}} aufgerufen wird, um den Wert eines bestimmten Attributs festzulegen, ein nachfolgender Aufruf von `reset()` das Attribut nicht auf seinen Standardwert zurücksetzen wird, sondern stattdessen das Attribut auf dem Wert belässt, den der Aufruf von {{domxref("Element.setAttribute", "setAttribute()")}} festgelegt hat.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
document.getElementById("myform").reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
