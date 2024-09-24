---
title: "HTMLAnchorElement: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/HTMLAnchorElement/hostname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.hostname`**-Eigenschaft ist eine
Zeichenkette, die die Domain der URL enthält.

## Wert

Eine Zeichenkette.

## Beispiele

```js
// Ein <a id="myAnchor" href="/de/docs/HTMLAnchorElement">-Element befindet sich im Dokument
const anchor = document.getElementById("myAnchor");
anchor.hostname; // gibt 'developer.mozilla.org' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAnchorElement")}}-Interface, zu dem es gehört.
