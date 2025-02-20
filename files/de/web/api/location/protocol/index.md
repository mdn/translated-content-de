---
title: "Location: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/Location/protocol
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("Location")}}

Die **`protocol`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der das Protokoll oder Schema der URL des Standorts enthält, einschließlich des abschließenden `":"`. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:` sowie `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den bereitgestellten String angehängt, falls es nicht angegeben wurde. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig angesehen zu werden.

Sehen Sie sich [`URL.protocol`](/de/docs/Web/API/URL/protocol) für weitere Informationen an.

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
