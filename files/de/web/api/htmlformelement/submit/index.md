---
title: "HTMLFormElement: submit() Methode"
short-title: submit()
slug: Web/API/HTMLFormElement/submit
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.submit()`** Methode sendet ein gegebenes {{HtmlElement("form")}} ab.

Diese Methode ist ähnlich, aber nicht identisch mit dem Aktivieren eines Absende-{{HtmlElement("button")}} eines Formulars. Bei direkter Anwendung dieser Methode jedoch:

- Wird kein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis ausgelöst. Insbesondere wird der `onsubmit` Ereignishandler des Formulars nicht ausgeführt.
- Die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) wird nicht ausgelöst.

Die [`HTMLFormElement.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) Methode ist identisch mit dem Aktivieren eines Absende-{{HtmlElement("button")}} eines Formulars und weist diese Unterschiede nicht auf.

Ein Formularelement (wie ein Absende-Button) mit einem `name` oder `id` von `submit` wird die `submit` Methode des Formulars verdecken. Der Versuch, `myForm.submit();` aufzurufen, führt zu einem Fehler "submit is not a function", da in diesem Fall `submit` auf das Formularelement verweist, das einen `name` oder `id` von `submit` hat.

{{HtmlElement("input")}} mit dem Attribut type="submit" wird nicht mit dem Formular gesendet, wenn man **`HTMLFormElement.submit()`** verwendet, aber es würde gesendet werden, wenn Sie das originäre HTML-Formular-Submit verwenden.

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
