---
title: "HTMLAnchorElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`protocol`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der das Protokoll oder Schema des `href` des `<area>`-Elements enthält, einschließlich des abschließenden `":"`. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:`, und `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den bereitgestellten String angehängt, falls nicht vorhanden. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig angesehen zu werden.

Weitere Informationen finden Sie unter [`URL.protocol`](/de/docs/Web/API/URL/protocol).

## Wert

Ein String.

## Beispiele

### Abrufen des Protokolls eines Anker-Links

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.protocol; // returns 'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
