---
title: "HTMLSelectElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Element alle darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt. Wenn dies nicht der Fall ist, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis für das Element aus. Da es kein standardmäßiges Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung.

> [!NOTE]
> Ein HTML {{htmlelement("select")}}-Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) wird als ungültig betrachtet, entspricht der CSS-{{cssxref(":invalid")}}-Pseudo-Klasse und führt dazu, dass `checkValidity()` false zurückgibt. Verwenden Sie die [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)-Methode, um die [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) auf den leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Zustand auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Beispiele

Im folgenden Beispiel gibt das Aufrufen von `checkValidity()` entweder `true` oder `false` zurück.

```js
const element = document.getElementById("mySelect");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
