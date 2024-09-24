---
title: "HTMLFormElement: submit()-Methode"
short-title: submit()
slug: Web/API/HTMLFormElement/submit
l10n:
  sourceCommit: 5fac53260a89952ac6679314e0f1c4692ca956e2
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.submit()`**-Methode sendet ein gegebenes
{{HtmlElement("form")}}.

Diese Methode ist ähnlich, aber nicht identisch mit der Aktivierung eines Absende-{{HtmlElement("button")}} eines Formulars. Beim direkten Aufruf dieser Methode:

- Wird kein {{domxref("HTMLFormElement/submit_event", "submit")}}-Ereignis ausgelöst. Insbesondere wird der `onsubmit`-Ereignishandler des Formulars nicht ausgeführt.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) wird nicht ausgelöst.

Die {{domxref("HTMLFormElement.requestSubmit()")}}-Methode ist identisch mit der Aktivierung eines Absende-{{HtmlElement("button")}} eines Formulars und hat diese Unterschiede nicht.

Ein Formularelement (wie ein Absende-Button) mit einem `name` oder `id` von `submit` wird die `submit`-Methode des Formulars überdecken. Der Versuch `myForm.submit();` aufzurufen, führt zu einem Fehler "submit is not a function", da in diesem Fall `submit` auf das Formularelement verweist, welches einen `name` oder `id` von `submit` hat.

{{HtmlElement("input")}} mit dem Attribut `type="submit"` wird nicht mit dem Formular übermittelt, wenn **`HTMLFormElement.submit()`** verwendet wird, aber es würde übermittelt, wenn Sie das ursprüngliche HTML-Formular absenden.

## Syntax

```js-nolint
submit()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
document.forms["myform"].submit();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
