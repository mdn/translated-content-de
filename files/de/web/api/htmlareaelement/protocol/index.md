---
title: "HTMLAreaElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAreaElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.protocol`**-Eigenschaft ist ein String, der das Protokollschema der URL repräsentiert, einschließlich des abschließenden `':'`.

## Wert

Ein String.

## Beispiele

### Abrufen des Protokolls eines Bereichs-Links

```js
// Ein <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement">-Element ist im Dokument
const area = document.getElementById("myArea");
area.protocol; // gibt 'https:' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}}-Interface, zu dem es gehört.
