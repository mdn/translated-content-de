---
title: "HTMLAnchorElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/HTMLAnchorElement/origin
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("HTML DOM")}}

Die lese-only-Eigenschaft
**`HTMLAnchorElement.origin`** ist ein String, der die Unicode-Serialisierung des Ursprungs der dargestellten URL enthält.

Das bedeutet:

- Für URLs, die `http` oder `https` verwenden, das Schema gefolgt von
  `'://'`, gefolgt vom Domainnamen, gefolgt von `':'`, gefolgt
  vom Port (der Standardport, `80` bzw. `443`, falls
  explizit angegeben);
- Für URLs, die das `file:` Schema verwenden, ist der Wert abhängig vom Browser;
- Für URLs, die das `blob:` Schema verwenden, der Ursprung der URL folgend
  auf `blob:`. Zum Beispiel wird `"blob:https://mozilla.org"`
  zu `"https://mozilla.org".`

## Wert

Ein String.

## Beispiele

```js
// Ein <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> Element ist im Dokument
const anchor = document.getElementById("myAnchor");
anchor.origin; // gibt 'https://developer.mozilla.org' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAnchorElement")}} Interface, zu dem es gehört.
