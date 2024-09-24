---
title: "HTMLAnchorElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die
**`HTMLAnchorElement.protocol`**
Eigenschaft ist eine Zeichenkette, die das Protokollschema der URL darstellt, einschließlich des abschließenden `':'`.

## Wert

Eine Zeichenkette.

## Beispiele

### Abrufen des Protokolls eines Ankerlinks

```js
// Ein <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> Element ist im Dokument
const anchor = document.getElementById("myAnchor");
anchor.protocol; // gibt 'https:' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("HTMLAnchorElement")}}-Schnittstelle, zu der es gehört.
