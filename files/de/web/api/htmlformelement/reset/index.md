---
title: "HTMLFormElement: reset() Methode"
short-title: reset()
slug: Web/API/HTMLFormElement/reset
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.reset()`** Methode stellt die Standardwerte eines Formularelements wieder her. Diese Methode führt denselben Vorgang aus wie das Klicken auf das [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset)-Steuerelement des Formulars.

Wenn ein Formularsteuerelement (wie eine Reset-Schaltfläche) einen Namen oder eine ID `reset` hat, wird die `reset` Methode des Formulars verdeckt. Sie setzt keine anderen Attribute, wie `disabled`, zurück.

Beachten Sie, dass wenn [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) aufgerufen wird, um den Wert eines bestimmten Attributs festzulegen, ein nachfolgender Aufruf von `reset()` das Attribut nicht auf seinen Standardwert zurücksetzt, sondern den Wert beibehält, den der Aufruf von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) ihm gegeben hat.

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
