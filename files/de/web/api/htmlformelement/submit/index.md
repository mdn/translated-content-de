---
title: "HTMLFormElement: submit() Methode"
short-title: submit()
slug: Web/API/HTMLFormElement/submit
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.submit()`**-Methode sendet ein angegebenes
{{HtmlElement("form")}} ab.

Diese Methode ähnelt dem Aktivieren eines `submit`-{{HtmlElement("button")}} eines Formulars, ist jedoch nicht identisch. Beim direkten Aufrufen dieser Methode:

- Wird kein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst. Insbesondere wird der `onsubmit`-Ereignishandler des Formulars nicht ausgeführt.
- Wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht ausgelöst.

Die [`HTMLFormElement.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)-Methode ist identisch mit der Aktivierung eines `submit`-{{HtmlElement("button")}} und hat diese Unterschiede nicht.

Ein Steuerelement des Formulars (wie ein Submit-Button) mit einem `name`- oder `id`-Attribut von `submit` wird die `submit`-Methode des Formulars maskieren. Der Versuch, `myForm.submit();` aufzurufen, führt zu einem Fehler "submit is not a function", da in diesem Fall `submit` sich auf das Steuerelement des Formulars bezieht, das einen `name` oder `id` von `submit` hat.

Ein {{HtmlElement("input")}} mit dem Attribut `type="submit"` wird nicht mit dem Formular gesendet, wenn Sie **`HTMLFormElement.submit()`** verwenden, aber es würde gesendet werden, wenn Sie es mit der ursprünglichen HTML-Formularübermittlung tun.

## Syntax

```js-nolint
submit()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
document.forms["my-form"].submit();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
