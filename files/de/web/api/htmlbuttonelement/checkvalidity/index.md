---
title: "HTMLButtonElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Element den darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) entspricht. Wenn der Wert `false` ist, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Wirkung. Es gibt immer `true` zurück, wenn der [`type`](/de/docs/Web/API/HTMLButtonElement/type) des {{HTMLElement("button")}}-Elements `"button"` oder `"reset"` ist, da solche Schaltflächen nie Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

> [!NOTE]
> Ein HTML-{{htmlelement("button")}}-Element vom Typ `"submit"` mit einer nicht-nullen [`validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) gilt als ungültig, wird die CSS-{{cssxref(":invalid")}}-Pseudo-Klasse erfüllen und `checkValidity()` wird `false` zurückgeben. Verwenden Sie die [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity)-Methode, um die [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) auf einen leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLButtonElement/validity)-Zustand als gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme aufweist; andernfalls wird `false` zurückgegeben.

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
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
