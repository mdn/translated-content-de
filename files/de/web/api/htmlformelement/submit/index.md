---
title: "HTMLFormElement: submit() Methode"
short-title: submit()
slug: Web/API/HTMLFormElement/submit
l10n:
  sourceCommit: 5fac53260a89952ac6679314e0f1c4692ca956e2
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.submit()`** Methode übermittelt ein gegebenes {{HtmlElement("form")}}.

Diese Methode ist ähnlich, aber nicht identisch mit der Aktivierung eines Submit-{{HtmlElement("button")}} eines Formulars. Beim direkten Aufruf dieser Methode gilt jedoch:

- Es wird kein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst. Insbesondere wird der `onsubmit`-Ereignishandler des Formulars nicht ausgeführt.
- Die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) wird nicht ausgelöst.

Die Methode [`HTMLFormElement.requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit) ist identisch mit der Aktivierung eines Submit-{{HtmlElement("button")}} eines Formulars und weist diese Unterschiede nicht auf.

Ein Formularelement (wie eine Schaltfläche zum Absenden) mit einem `name` oder `id` von `submit` wird die `submit`-Methode des Formulars maskieren. Der Versuch, `myForm.submit();` aufzurufen, führt zu einem Fehler "submit is not a function", da in diesem Fall `submit` auf das Formularelement verweist, das einen `name` oder `id` von `submit` hat.

Ein {{HtmlElement("input")}} mit dem Attribut type="submit" wird nicht mit dem Formular übermittelt, wenn Sie **`HTMLFormElement.submit()`** verwenden, aber es würde übermittelt werden, wenn Sie es mit dem ursprünglichen HTML-Formular-Submit tun.

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

## Browser-Kompatibilität

{{Compat}}
