---
title: "HTMLFormElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob alle zugehörigen Steuerelemente alle auf sie angewendeten [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) Regeln erfüllen. Die Methode löst auch ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event) Ereignis für jedes ungültige Element aus, jedoch nicht für das Formularelement selbst. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid` Ereignisses keinen Effekt.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<form>` Elemente basierend auf der Gültigkeit der dazugehörigen Formularelemente angewendet, nicht auf die Gültigkeit des `<form>` Elements selbst.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
