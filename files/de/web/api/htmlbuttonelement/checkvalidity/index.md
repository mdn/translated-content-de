---
title: "HTMLButtonElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Interfaces gibt einen boolean Wert zurück, der anzeigt, ob das Element die auf es angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt. Wenn `false`, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event) Ereignis auf dem Element aus. Da es kein standardmäßiges Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid` Ereignisses keine Wirkung. Es gibt immer `true` zurück, wenn der [`type`](/de/docs/Web/API/HTMLButtonElement/type) des {{HTMLElement("button")}} Elements `"button"` oder `"reset"` ist, da solche Buttons nie Kandidaten für [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

> [!NOTE]
> Ein HTML {{htmlelement("button")}} Element des Typs `"submit"` mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) gilt als ungültig, wird die CSS {{cssxref(":invalid")}} Pseudoklasse zugeordnet und wird dazu führen, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die Methode [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity), um die [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) auf den leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLButtonElement/validity) Zustand als gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls wird `false` zurückgegeben.

## Beispiele

Im folgenden Beispiel gibt der Aufruf von `checkValidity()` entweder `true` oder `false` zurück.

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
- [Learn: Client-side form validation](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
