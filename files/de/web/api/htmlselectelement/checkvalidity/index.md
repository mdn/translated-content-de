---
title: "HTMLSelectElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Element alle darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt. Wenn `false`, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus. Da es kein standardmäßiges Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung.

> [!NOTE]
> Ein HTML-{{htmlelement("select")}}-Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) wird als ungültig betrachtet, passt zur CSS-{{cssxref(":invalid")}}-Pseudoklasse und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)-Methode, um die [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) auf den leeren String zu setzen und den [`validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Zustand als gültig festzulegen.

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
const element = document.getElementById("mySelect");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement.reportValidity()`](/de/docs/Web/API/HTMLSelectElement/reportValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
