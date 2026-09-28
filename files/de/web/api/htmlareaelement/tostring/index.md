---
title: "HTMLAreaElement: Methode toString()"
short-title: toString()
slug: Web/API/HTMLAreaElement/toString
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{ApiRef("URL API")}}

Die {{Glossary("stringifier", "Stringifier-Methode")}} **`HTMLAreaElement.toString()`** gibt einen String zurück, der die vollständige URL enthält. Dies ist derselbe Wert wie [`HTMLAreaElement.href`](/de/docs/Web/API/HTMLAreaElement/href).

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die vollständige URL des Elements enthält.

## Beispiele

### toString für ein area-Element aufrufen

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

- Die Schnittstelle [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement), zu der die Methode gehört.
