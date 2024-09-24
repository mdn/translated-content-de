---
title: "HTMLTextAreaElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLTextAreaElement/checkValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des {{domxref("HTMLTextAreaElement")}}-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das Element alle [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt, die auf es angewendet wurden. Wenn der Wert `false` ist, löst die Methode außerdem ein {{domxref("HTMLElement/invalid_event", "invalid")}}-Ereignis auf dem Element aus. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Auswirkung.

> [!NOTE]
> Ein HTML {{htmlelement("textarea")}}-Element mit einer nicht-null {{domxref("HTMLTextAreaElement.validationMessage", "validationMessage")}} gilt als ungültig, entspricht der CSS-{{cssxref(":invalid")}}-Pseudoklasse und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die {{domxref("HTMLTextAreaElement.setCustomValidity()")}}-Methode, um die {{domxref("HTMLTextAreaElement.validationMessage")}} auf einen leeren String zu setzen, um den {{domxref("HTMLTextAreaElement.validity", "validity")}}-Status auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls gibt er `false` zurück.

## Beispiele

Im folgenden Beispiel gibt der Aufruf von `checkValidity()` entweder `true` oder `false` zurück.

```js
const element = document.getElementById("myTextArea");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
