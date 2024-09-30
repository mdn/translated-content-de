---
title: "HTMLAreaElement: toString()-Methode"
short-title: toString()
slug: Web/API/HTMLAreaElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

Die **`HTMLAreaElement.toString()`**-Methode ([Stringifier](/de/docs/Glossary/stringifier)) gibt einen String zurück, der die gesamte URL enthält. Es ist eine schreibgeschützte Version von [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die vollständige URL des Elements enthält.

## Beispiele

### Aufruf von toString bei einem Bereichselement

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.toString(); // returns 'https://developer.mozilla.org/en-US/docs/HTMLAreaElement'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface, zu dem es gehört.
