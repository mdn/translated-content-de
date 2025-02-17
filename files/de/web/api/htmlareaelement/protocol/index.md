---
title: "HTMLAreaElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAreaElement/protocol
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`protocol`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der das Protokoll oder Schema des `href`-Attributs des `<area>`-Elements enthält, einschließlich des abschließenden `":"`. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:` und `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den bereitgestellten String angehängt, falls es nicht angegeben wird. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig zu gelten.

Weitere Informationen finden Sie unter [`URL.protocol`](/de/docs/Web/API/URL/protocol).

## Wert

Ein String.

## Beispiele

### Den Protokollwert eines Bereich-Links erhalten

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
