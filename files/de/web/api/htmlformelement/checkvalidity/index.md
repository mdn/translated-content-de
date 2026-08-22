---
title: "HTMLFormElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob alle zugehörigen Steuerungen alle auf sie angewendeten [Einschränkungsvalidierungs](/de/docs/Web/HTML/Guides/Constraint_validation)-Regeln erfüllen. Die Methode löst auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis für jedes ungültige Element aus, jedoch nicht für das Formularelement selbst. Da es kein vordefiniertes Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Wirkung.

> [!NOTE]
> Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden auf `<form>`-Elemente angewendet, basierend auf der Gültigkeit der ihnen zugeordneten Formularsteuerungen, nicht auf der Gültigkeit des `<form>`-Elements selbst.

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

- [`HTMLFormElement.reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
