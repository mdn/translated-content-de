---
title: "HTMLTextAreaElement: setCustomValidity() Methode"
short-title: setCustomValidity()
slug: Web/API/HTMLTextAreaElement/setCustomValidity
l10n:
  sourceCommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ APIRef("HTML DOM") }}

Die **`setCustomValidity()`**-Methode des {{DOMxRef("HTMLTextAreaElement")}}-Interfaces setzt die benutzerdefinierte Fehlermeldung für das {{htmlelement("textarea")}}-Element. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ benutzerdefinierten Validitätsfehler hat.

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

In diesem Beispiel geben wir benutzerdefinierte Fehler an, wenn das `<textarea>` die Validierungseinschränkungen nicht erfüllt, basierend auf der Einschränkung, die die Validierung nicht besteht. Wenn der Wert gültig ist, setzen wir den benutzerdefinierten Fehler auf einen leeren String:

```js
const comment = document.getElementById("comment");
if (comment.validity.valueMissing) {
  comment.setCustomValidity("Wir können einen leeren Kommentar nicht übermitteln!");
} else if (comment.validity.tooShort) {
  comment.setCustomValidity("Erzählen Sie uns mehr! Ihr Kommentar ist zu kurz.");
} else if (comment.validity.tooLong) {
  comment.setCustomValidity(
    "Redselig, was? Halten Sie sich unter 800 Zeichen!",
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
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.validity")}}
- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- [Formularvalidierung](/de/docs/Web/HTML/Constraint_validation).
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Validierungseinschränkungen](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen
