---
title: "HTMLAnchorElement: Methode toString()"
short-title: toString()
slug: Web/API/HTMLAnchorElement/toString
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{ApiRef("URL API")}}

Die {{Glossary("stringifier", "Stringifier")}}-Methode **`HTMLAnchorElement.toString()`** gibt einen String zurück, der die vollständige URL enthält. Dieser entspricht dem Wert von [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href).

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die vollständige URL des Elements enthält.

## Beispiele

### toString für ein Ankerelement aufrufen

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.toString(); // returns 'https://developer.mozilla.org/en-US/docs/HTMLAnchorElement'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige Interface [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement).
