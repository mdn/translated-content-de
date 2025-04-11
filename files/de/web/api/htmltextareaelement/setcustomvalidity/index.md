---
title: "HTMLTextAreaElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLTextAreaElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Schnittstelle setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("textarea")}} Element. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ benutzerdefinierten Validierungsfehler hat.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameter

- `string`
  - : Der String, der die Fehlermeldung enthält. Der leere String entfernt alle benutzerdefinierten Validierungsfehler.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel, wenn das `<textarea>` die Eingabevalidierung nicht besteht, geben wir benutzerdefinierte Fehlermeldungen basierend auf dem fehlerhaften Einschränkungsbedingung aus. Wenn der Wert gültig ist, setzen wir den benutzerdefinierten Fehler auf einen leeren String:

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
- [Formularvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation).
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Eingabebeschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen
