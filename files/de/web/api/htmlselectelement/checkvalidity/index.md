---
title: "HTMLSelectElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 879db96bee7cd8301bbc38d326d9b905ae4493d1
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob das Element irgendwelchen [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) entspricht, die darauf angewendet wurden. Ist der Wert falsch, löst die Methode außerdem ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keinen Effekt.

> [!NOTE]
> Ein HTML-{{htmlelement("select")}}-Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) wird als ungültig betrachtet, wird die CSS-{{cssxref(":invalid")}}-Pseudo-Klasse erfüllen und führt dazu, dass `checkValidity()` false zurückgibt. Verwenden Sie die Methode [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity), um die [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) auf den leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Zustand auf gültig zu setzen.

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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS-{{cssxref(":valid")}} und {{cssxref(":invalid")}}-Pseudo-Klassen
