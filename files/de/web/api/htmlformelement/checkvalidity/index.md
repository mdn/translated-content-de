---
title: "HTMLFormElement: Methode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob alle zugehörigen Steuerelemente alle darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllen. Die Methode löst auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis bei jedem ungültigen Element aus, jedoch nicht beim Formular-Element selbst. Da es kein standardmäßiges Browser-Verhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkungen.

> [!NOTE]
> Die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Pseudoklassen werden auf `<form>`-Elemente basierend auf der Gültigkeit der zugehörigen Formularsteuerelemente angewendet, nicht auf die Gültigkeit des `<form>`-Elements selbst.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Werte der zugehörigen Steuerelemente keine Gültigkeitsprobleme aufweisen; andernfalls wird `false` zurückgegeben.

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

- [`HTMLFormElement.reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
