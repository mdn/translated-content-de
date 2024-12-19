---
title: "HTMLTextAreaElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLTextAreaElement/checkValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das Element die darauf angewendeten [Einschränkungen der Validierung](/de/docs/Web/HTML/Constraint_validation) erfüllt. Wenn `false`, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event) Ereignis auf dem Element aus. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Aufheben dieses `invalid`-Ereignisses keine Wirkung.

> [!NOTE]
> Ein HTML {{htmlelement("textarea")}} Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) wird als ungültig betrachtet, entspricht der CSS-Klasse {{cssxref(":invalid")}} und führt dazu, dass `checkValidity()` `false` zurückgibt. Nutzen Sie die Methode [`HTMLTextAreaElement.setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity), um die [`HTMLTextAreaElement.validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) auf einen leeren String zu setzen und den [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) Status auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; ansonsten `false`.

## Beispiele

Im folgenden Beispiel liefert `checkValidity()` entweder `true` oder `false` zurück.

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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
