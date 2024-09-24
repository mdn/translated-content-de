---
title: "HTMLFormElement: Methode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des {{domxref("HTMLFormElement")}}-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob alle zugehörigen Steuerungen alle auf sie angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllen. Die Methode löst außerdem ein {{domxref("HTMLElement/invalid_event", "invalid")}}-Ereignis bei jedem ungültigen Element aus, jedoch nicht beim Formularelement selbst. Da es kein Standardbrowser-Verhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<form>`-Elemente basierend auf der Gültigkeit ihrer zugehörigen Formularsteuerungen angewendet, nicht auf die Gültigkeit des `<form>`-Elements selbst.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Werte der zugehörigen Steuerungen keine Gültigkeitsprobleme aufweisen; andernfalls wird `false` zurückgegeben.

## Beispiele

Im folgenden Beispiel würde der Aufruf von `checkValidity()` `true` oder `false` zurückgeben.

```js
const element = document.getElementById("myForm");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLFormElement.reportValidity()")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
