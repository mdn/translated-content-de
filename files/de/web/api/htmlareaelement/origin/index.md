---
title: "HTMLAreaElement: origin Eigenschaft"
short-title: origin
slug: Web/API/HTMLAreaElement/origin
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLAreaElement.origin`** ist eine Zeichenkette, die die Unicode-Serialisierung des Ursprungs der dargestellten URL enthält.

Das bedeutet:

- Für URLs, die das `http` oder `https` verwenden, das Schema gefolgt von `'://'`, gefolgt von der Domain, gefolgt von `':'`, gefolgt von dem Port (der Standardport, `80` und `443` jeweils, falls explizit angegeben);
- Für URLs, die das `file:` Schema verwenden, ist der Wert browserabhängig;
- Für URLs, die das `blob:` Schema verwenden, der Ursprung der URL nach `blob:`. Z.B. `"blob:https://mozilla.org"` wird `"https://mozilla.org"` haben.

## Wert

Eine Zeichenkette.

## Beispiele

```js
// Ein <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> Element ist im Dokument
const area = document.getElementById("myArea");
area.origin; // gibt 'https://developer.mozilla.org' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}} Interface, zu dem es gehört.
