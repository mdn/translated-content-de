---
title: "Location: Eigenschaft protocol"
short-title: protocol
slug: Web/API/Location/protocol
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`protocol`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der das Protokollschema der URL darstellt, einschließlich des abschließenden `':'`.

## Wert

Ein String.

## Beispiele

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location.protocol"> element be in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.protocol; // Returns:'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
