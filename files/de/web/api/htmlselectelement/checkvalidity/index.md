---
title: "HTMLSelectElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des {{domxref("HTMLSelectElement")}}-Interfaces gibt einen boolean-Wert zurück, der angibt, ob das Element die darauf angewendeten [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt. Falls false, löst die Methode auch ein {{domxref("HTMLElement/invalid_event", "invalid")}}-Ereignis auf dem Element aus. Da es kein standardmäßiges Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkungen.

> [!NOTE]
> Ein HTML-{{htmlelement("select")}}-Element mit einer nicht-null {{domxref("HTMLSelectElement.validationMessage", "validationMessage")}} wird als ungültig betrachtet, passt auf die CSS-{{cssxref(":invalid")}}-Pseudoklasse und führt dazu, dass `checkValidity()` false zurückgibt. Verwenden Sie die {{domxref("HTMLSelectElement.setCustomValidity()")}}-Methode, um die {{domxref("HTMLSelectElement.validationMessage")}} auf den leeren String zu setzen, um den {{domxref("HTMLSelectElement.validity", "validity")}}-Status auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`.

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

- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Learn: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Guide: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}}-Pseudoklassen
