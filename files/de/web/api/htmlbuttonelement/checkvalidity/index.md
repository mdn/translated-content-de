---
title: "HTMLButtonElement: Methode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des Interfaces {{domxref("HTMLButtonElement")}} gibt einen booleschen Wert zurück, der angibt, ob das Element die angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt. Wenn false, löst die Methode auch ein {{domxref("HTMLElement/invalid_event", "invalid")}}-Ereignis auf dem Element aus. Da es kein Standardbrowserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Wirkung. Es wird immer true zurückgegeben, wenn der {{HTMLElement("button")}}-Elementtyp des Elements {{domxref("HTMLButtonElement/type", "type")}} `"button"` oder `"reset"` ist, da solche Schaltflächen niemals Kandidaten für [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

> [!NOTE]
> Ein HTML {{htmlelement("button")}}-Element vom Typ `"submit"` mit einer nicht-null {{domxref("HTMLButtonElement.validationMessage", "validationMessage")}} wird als ungültig betrachtet, entspricht der CSS {{cssxref(":invalid")}}-Pseudoklasse und führt dazu, dass `checkValidity()` false zurückgibt. Verwenden Sie die Methode {{domxref("HTMLButtonElement.setCustomValidity()")}}, um die {{domxref("HTMLButtonElement.validationMessage")}} auf einen leeren String zu setzen, um den {{domxref("HTMLButtonElement.validity", "validity")}}-Zustand als gültig festzulegen.

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

- {{domxref("HTMLButtonElement.reportValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
