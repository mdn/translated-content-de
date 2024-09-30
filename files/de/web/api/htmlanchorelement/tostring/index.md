---
title: "HTMLAnchorElement: toString() Methode"
short-title: toString()
slug: Web/API/HTMLAnchorElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

Die **`HTMLAnchorElement.toString()`** [Stringifier](/de/docs/Glossary/stringifier)-Methode gibt einen String zurück, der die gesamte URL enthält. Es ist eine schreibgeschützte Version von [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href).

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die vollständige URL des Elements enthält.

## Beispiele

### Aufruf von toString bei einem Ankerelement

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

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Schnittstelle, zu der es gehört.
