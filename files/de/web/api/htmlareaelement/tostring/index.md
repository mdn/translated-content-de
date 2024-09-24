---
title: "HTMLAreaElement: toString()-Methode"
short-title: toString()
slug: Web/API/HTMLAreaElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

Die **`HTMLAreaElement.toString()`** {{Glossary("stringifier")}}-Methode gibt eine Zeichenfolge zurück, die die gesamte URL enthält. Es ist eine schreibgeschützte Version von {{domxref("HTMLAreaElement.href")}}.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die die vollständige URL des Elements enthält.

## Beispiele

### Aufruf von toString auf einem area-Element

```js
// Ein <area id="myArea" href="/de/docs/HTMLAreaElement"> Element befindet sich im Dokument
const area = document.getElementById("myArea");
area.toString(); // gibt 'https://developer.mozilla.org/de/docs/HTMLAreaElement' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}}-Interface, zu dem es gehört.
