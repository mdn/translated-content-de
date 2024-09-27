---
title: "HTMLAreaElement: toString() Methode"
short-title: toString()
slug: Web/API/HTMLAreaElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

Die **`HTMLAreaElement.toString()`** [Stringifier](/de/docs/Glossary/stringifier)
Methode gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es ist eine schreibgeschützte Version von [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die die vollständige URL des Elements enthält.

## Beispiele

### Aufrufen von toString bei einem Area-Element

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

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Interface, zu dem es gehört.
