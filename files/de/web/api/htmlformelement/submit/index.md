---
title: "HTMLFormElement: submit() Methode"
short-title: submit()
slug: Web/API/HTMLFormElement/submit
l10n:
  sourceCommit: 5fac53260a89952ac6679314e0f1c4692ca956e2
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.submit()`** Methode sendet ein gegebenes
{{HtmlElement("form")}}.

Diese Methode ist ähnlich, aber nicht identisch mit der Aktivierung eines Absende-{{HtmlElement("button")}} eines Formulars. Wenn diese Methode direkt aufgerufen wird:

- Kein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis wird ausgelöst. Insbesondere wird der `onsubmit`-Ereignishandler des Formulars nicht ausgeführt.
- Die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) wird nicht ausgelöst.

Die [`HTMLFormElement.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) Methode ist identisch mit der Aktivierung eines
Absende-{{HtmlElement("button")}} eines Formulars und hat diese Unterschiede nicht.

Ein Formularsteuerlement (wie ein Absende-Button) mit einem `name` oder `id` von `submit` wird die `submit` Methode des Formulars verdecken. Der Versuch, `myForm.submit();` aufzurufen, wirft einen Fehler "submit is not a function", da in diesem Fall `submit` auf das Formularsteuerlement verweist, welches einen `name` oder `id` von `submit` hat.

{{HtmlElement("input")}} mit dem Attribut type="submit" wird nicht mit dem Formular gesendet, wenn **`HTMLFormElement.submit()`** verwendet wird, aber es würde gesendet, wenn man das ursprüngliche HTML-Formular-Submit verwendet.

## Syntax

```js-nolint
submit()
```

### Parameter

Keine.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
document.forms["myform"].submit();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
