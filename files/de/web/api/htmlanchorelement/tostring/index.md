---
title: "HTMLAnchorElement: toString()-Methode"
short-title: toString()
slug: Web/API/HTMLAnchorElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

Die **`HTMLAnchorElement.toString()`** {{Glossary("stringifier")}}
Methode gibt einen String zurück, der die ganze URL enthält. Es ist eine schreibgeschützte Version von {{domxref("HTMLAnchorElement.href")}}.

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
// Ein <a id="myAnchor" href="/de/docs/HTMLAnchorElement">-Element befindet sich im Dokument
const anchor = document.getElementById("myAnchor");
anchor.toString(); // gibt 'https://developer.mozilla.org/de/docs/HTMLAnchorElement' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAnchorElement")}} Interface, zu dem es gehört.
