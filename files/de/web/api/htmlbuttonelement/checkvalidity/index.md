---
title: "HTMLButtonElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode der Schnittstelle [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) gibt einen booleschen Wert zurück, der anzeigt, ob das Element alle darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt. Wenn der Wert `false` ist, wird außerdem ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element ausgelöst. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung. Es gibt immer `true` zurück, wenn der [`type`](/de/docs/Web/API/HTMLButtonElement/type) des {{HTMLElement("button")}}-Elements `"button"` oder `"reset"` ist, da solche Schaltflächen nie Kandidaten für [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

> [!NOTE]
> Ein HTML-{{htmlelement("button")}}-Element des Typs `"submit"` mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) gilt als ungültig, wird mit der CSS-{{cssxref(":invalid")}}-Pseudoklasse übereinstimmen und `checkValidity()` wird `false` zurückgeben. Verwenden Sie die Methode [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity), um die [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) auf einen leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLButtonElement/validity)-Zustand auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme hat; andernfalls `false`.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
