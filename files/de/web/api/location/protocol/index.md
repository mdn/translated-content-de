---
title: "Location: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/Location/protocol
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`protocol`**-Eigenschaft des {{domxref("Location")}}
Interfaces ist ein String, der das Protokollschema der URL repräsentiert,
einschließlich des abschließenden `':'`.

## Wert

Ein String.

## Beispiele

```js
// Angenommen, ein <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location.protocol"> Element befindet sich im Dokument
const anchor = document.getElementById("myAnchor");
const result = anchor.protocol; // Gibt zurück: 'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
