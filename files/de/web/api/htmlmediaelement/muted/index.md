---
title: "HTMLMediaElement: muted-Eigenschaft"
short-title: stummgeschaltet
slug: Web/API/HTMLMediaElement/muted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.muted`**-Eigenschaft gibt an, ob das Media-Element stummgeschaltet ist.

## Wert

Ein boolescher Wert. `true` bedeutet stummgeschaltet und `false` bedeutet nicht stummgeschaltet.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.muted); // false
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle, die verwendet wird, um die `HTMLMediaElement.muted`-Eigenschaft zu definieren
- {{domxref("HTMLMediaElement.defaultMuted")}}
- {{domxref("HTMLMediaElement.volume")}}