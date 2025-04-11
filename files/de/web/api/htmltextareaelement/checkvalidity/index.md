---
title: "HTMLTextAreaElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLTextAreaElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob das Element alle ihm zugewiesenen [Einschränkungsvalidierungsregeln](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt. Wenn der Wert `false` ist, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis auf dem Element aus. Da es kein Standardverhalten für `checkValidity()` bei Browsern gibt, hat das Abbrechen dieses `invalid` Ereignisses keine Auswirkung.

> [!NOTE]
> Ein HTML {{htmlelement("textarea")}} Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) gilt als ungültig, wird der CSS {{cssxref(":invalid")}} Pseudo-Klasse entsprechen und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die Methode [`HTMLTextAreaElement.setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity), um die [`HTMLTextAreaElement.validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) auf den leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) Zustand als gültig zu setzen.

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
const element = document.getElementById("myTextArea");
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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
