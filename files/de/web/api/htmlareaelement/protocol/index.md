---
title: "HTMLAreaElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAreaElement/protocol
l10n:
  sourceCommit: 82acf2a065dc00a1bd0cbf5e73de696e1bedee91
---

{{ApiRef("HTML DOM")}}

Die **`protocol`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der das Protokoll oder Schema des `href`-Attributs des `<area>`-Elements enthält, einschließlich des abschließenden `":"`.

Diese Eigenschaft kann gesetzt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den bereitgestellten String angehängt, wenn nicht vorhanden. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig angesehen zu werden.

Siehe [`URL.protocol`](/de/docs/Web/API/URL/protocol) für weitere Informationen.

## Wert

Ein String.

## Beispiele

### Das Protokoll eines Area-Links abrufen

```js
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.protocol; // returns 'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der es gehört.
