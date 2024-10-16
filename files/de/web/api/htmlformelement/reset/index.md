---
title: "HTMLFormElement: reset() Methode"
short-title: reset()
slug: Web/API/HTMLFormElement/reset
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.reset()`** Methode stellt die Standardwerte eines Formularelements wieder her. Diese Methode funktioniert ebenso wie das Klicken auf das [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) Kontroll-Element des Formulars.

Wenn ein Formularelement (wie ein Zurücksetz-Button) einen Namen oder eine ID _reset_ hat, wird es die `reset`-Methode des Formulars überdecken. Es setzt keine anderen Attribute im Eingabeelement zurück, wie zum Beispiel `disabled`.

Beachten Sie, dass wenn [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) aufgerufen wird, um den Wert eines bestimmten Attributs zu setzen, ein anschließender Aufruf von `reset()` das Attribut nicht auf seinen Standardwert zurücksetzt, sondern es bei dem Wert belässt, den der Aufruf von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) gesetzt hat.

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
document.getElementById("my-form").reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
