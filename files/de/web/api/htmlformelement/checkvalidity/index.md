---
title: "HTMLFormElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob alle zugehörigen Steuerelemente die auf sie angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Guides/Constraint_validation)-Regeln erfüllen. Die Methode löst auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis bei jedem ungültigen Element aus, aber nicht beim Formularelement selbst. Da es kein Standard-Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkungen.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<form>`-Elemente basierend auf der Gültigkeit ihrer zugehörigen Formularelemente angewendet, nicht auf die Gültigkeit des `<form>`-Elements selbst.

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
- [Lernen: Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Guides/Constraint_validation)
