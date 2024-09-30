---
title: "HTMLAnchorElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/HTMLAnchorElement/origin
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLAnchorElement.origin`** ist ein String, der die Unicode-Serialisierung des Ursprungs der repräsentierten URL enthält.

Das bedeutet:

- Für URLs, die `http` oder `https` verwenden, das Schema gefolgt von `'://'`, gefolgt von der Domain, gefolgt von `':'`, gefolgt vom Port (der Standardport, `80` bzw. `443`, wenn ausdrücklich angegeben);
- Für URLs, die das `file:`-Schema verwenden, ist der Wert browserabhängig;
- Für URLs, die das `blob:`-Schema verwenden, der Ursprung der URL nach `blob:`. Zum Beispiel wird `"blob:https://mozilla.org"` den Ursprung `"https://mozilla.org"` haben.

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.origin; // returns 'https://developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Interface, zu dem es gehört.
