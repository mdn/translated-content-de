---
title: "HTMLButtonElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Element allen darauf angewendeten [Constraint-Validierungs](/de/docs/Web/HTML/Constraint_validation)-regeln entspricht. Falls `false`, löst die Methode außerdem ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis auf dem Element aus. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung. Es gibt immer `true` zurück, wenn der [`type`](/de/docs/Web/API/HTMLButtonElement/type) des {{HTMLElement("button")}}-Elements `"button"` oder `"reset"` ist, da solche Buttons nie für [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) in Frage kommen.

> [!NOTE]
> Ein HTML-{{htmlelement("button")}}-Element des Typs `"submit"` mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) wird als ungültig betrachtet, passt zur CSS-{{cssxref(":invalid")}}-Pseudoklasse und veranlasst `checkValidity()`, `false` zurückzugeben. Verwenden Sie die [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity)-Methode, um die [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) auf einen leeren String zu setzen und den [`validity`](/de/docs/Web/API/HTMLButtonElement/validity)-Status auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`.

## Beispiele

Im folgenden Beispiel liefert `checkValidity()` entweder `true` oder `false` zurück.

```js
const element = document.getElementById("myButton");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
- CSS-{{cssxref(":valid")}} und {{cssxref(":invalid")}}-Pseudoklassen
