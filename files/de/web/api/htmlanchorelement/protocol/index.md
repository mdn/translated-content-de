---
title: "HTMLAnchorElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: 82acf2a065dc00a1bd0cbf5e73de696e1bedee91
---

{{ApiRef("HTML DOM")}}

Die **`protocol`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der das Protokoll oder Schema des `href`-Attributs des `<area>`-Elements enthält, einschließlich des abschließenden `":"`.

Diese Eigenschaft kann festgelegt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den bereitgestellten String angehängt, wenn es nicht vorhanden ist. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig angesehen zu werden.

Siehe [`URL.protocol`](/de/docs/Web/API/URL/protocol) für weitere Informationen.

## Wert

Ein String.

## Beispiele

### Das Protokoll eines Anker-Links abrufen

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

- Das zugehörige [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface.
