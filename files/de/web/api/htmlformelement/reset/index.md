---
title: "HTMLFormElement: reset() Methode"
short-title: reset()
slug: Web/API/HTMLFormElement/reset
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.reset()`**-Methode stellt die Standardwerte eines Formularelements wieder her. Diese Methode tut dasselbe wie das Klicken auf die [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset)-Steuerung des Formulars.

Wenn eine Formularkontrolle (wie ein Zurücksetzen-Button) einen Namen oder eine ID von _reset_ hat, wird die `reset`-Methode des Formulars maskiert. Sie setzt keine anderen Attribute im Eingabefeld zurück, wie zum Beispiel `disabled`.

Beachten Sie, dass wenn [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) aufgerufen wird, um den Wert eines bestimmten Attributs festzulegen, ein nachfolgender Aufruf von `reset()` das Attribut nicht auf seinen Standardwert zurücksetzt, sondern stattdessen das Attribut bei dem von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) gesetzten Wert belässt.

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
document.getElementById("myform").reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
