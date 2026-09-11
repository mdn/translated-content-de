---
title: "HTMLAnchorElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{ApiRef("HTML DOM")}}

Die **`protocol`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ist ein String, der das Protokoll oder Schema des `href`-Attributs des `<a>`-Elements einschließlich des abschließenden `":"` enthält.

Diese Eigenschaft kann festgelegt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den bereitgestellten String angehängt, falls er nicht vorhanden ist. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig zu gelten.

Weitere Informationen finden Sie unter [`URL.protocol`](/de/docs/Web/API/URL/protocol).

## Wert

Ein String.

## Beispiele

### Das Protokoll eines Anchor-Links abrufen

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

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle, zu der sie gehört.
