---
title: "HTMLTextAreaElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLTextAreaElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interface setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("textarea")}} Element. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keine_ benutzerdefinierte Validitätsfehlermeldung hat.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, der die Fehlermeldung enthält. Der leere String entfernt alle benutzerdefinierten Validitätsfehler.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel, wenn das `<textarea>` die Einschränkungsvalidierung nicht besteht, liefern wir benutzerdefinierte Fehler basierend auf der Einschränkung, die die Validierung nicht besteht. Wenn der Wert gültig ist, setzen wir den benutzerdefinierten Fehler auf einen leeren String:

```js
const comment = document.getElementById("comment");
if (comment.validity.valueMissing) {
  comment.setCustomValidity("We can't submit a blank comment!");
} else if (comment.validity.tooShort) {
  comment.setCustomValidity("Tell us more! Your comment is too short.");
} else if (comment.validity.tooLong) {
  comment.setCustomValidity(
    "Loquacious much? Keep it to under 800 characters!",
  );
} else {
  comment.setCustomValidity("");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("textarea")}}
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTextAreaElement.validity`](/de/docs/Web/API/HTMLTextAreaElement/validity)
- [`HTMLTextAreaElement.checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
- [`HTMLTextAreaElement.reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
- [Formular-Validierung](/de/docs/Web/HTML/Constraint_validation).
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
