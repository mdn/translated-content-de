---
title: "Speicherort: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/Location/protocol
l10n:
  sourceCommit: 82acf2a065dc00a1bd0cbf5e73de696e1bedee91
---

{{ApiRef("Location")}}

Die **`protocol`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der das Protokoll oder Schema der URL des Speicherorts enthält, einschließlich des abschließenden `":"`.

Diese Eigenschaft kann gesetzt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den bereitgestellten String angehängt, wenn es nicht bereitgestellt wird. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig zu gelten.

Siehe [`URL.protocol`](/de/docs/Web/API/URL/protocol) für weitere Informationen.

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
