---
title: "HTMLAnchorElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.href`**-Eigenschaft ist ein
{{Glossary("stringifier", "Stringifier")}}, der eine Zeichenkette mit der gesamten URL zurückgibt und es ermöglicht, die `href` zu aktualisieren.

## Wert

Eine Zeichenkette.

## Beispiele

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.href; // returns 'https://developer.mozilla.org/en-US/HTMLAnchorElement'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle, zu der sie gehört.
