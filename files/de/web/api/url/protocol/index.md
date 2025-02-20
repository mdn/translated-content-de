---
title: "URL: Protocol-Eigenschaft"
short-title: protocol
slug: Web/API/URL/protocol
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`protocol`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist eine Zeichenkette, die das Protokoll oder Schema der URL enthält, einschließlich des abschließenden `":"`. Wenn der Port der Standardwert für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:`, und `21` für `ftp:`), enthält diese Eigenschaft eine leere Zeichenkette, `""`.

Diese Eigenschaft kann gesetzt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an die angegebene Zeichenkette angehängt, falls es nicht angegeben ist. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig zu gelten.

## Wert

Eine Zeichenkette.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // Logs "https:"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
