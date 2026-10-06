---
title: "HTMLButtonElement: Methode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: 77255c9651ee56d559b577c74cec1c3f4178d2bf
---

{{APIRef("HTML DOM")}}

Die Methode **`checkValidity()`** der Schnittstelle [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) gibt einen booleschen Wert zurück, der angibt, ob das Element die für es geltenden Regeln der [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt. Ist der Rückgabewert `false`, löst die Methode außerdem ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus. Da es für `checkValidity()` kein Standardverhalten des Browsers gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung. Die Methode gibt immer `true` zurück, wenn das {{HTMLElement("button")}}-Element nicht für die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) infrage kommt (wenn sein [`willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) `false` ist).

> [!NOTE]
> Ein HTML-{{htmlelement("button")}}-Element vom Typ `"submit"` mit einer [`validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage), die nicht `null` ist, gilt als ungültig, entspricht der CSS-Pseudoklasse {{cssxref(":invalid")}} und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die Methode [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity), um die [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) auf eine leere Zeichenfolge zu setzen und damit den Zustand [`validity`](/de/docs/Web/API/HTMLButtonElement/validity) auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist oder das Element nicht für die Constraint Validation infrage kommt; andernfalls `false`.

## Beispiele

Im folgenden Beispiel gibt ein Aufruf von `checkValidity()` entweder `true` oder `false` zurück.

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
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}}
