---
title: "HTMLMediaElement: Eigenschaft controls"
short-title: controls
slug: Web/API/HTMLMediaElement/controls
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.controls`**-Eigenschaft spiegelt das
[`controls`](/de/docs/Web/HTML/Element/video#controls) HTML-Attribut wider, das steuert, ob Benutzeroberflächensteuerungen zur Wiedergabe des Medienelements angezeigt werden.

## Wert

Ein boolescher Wert. Ein Wert von `true` bedeutet, dass Steuerungen angezeigt werden.

## Beispiele

```js
const obj = document.createElement("video");
obj.controls = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle, die verwendet wird, um die `HTMLMediaElement.controls`-Eigenschaft zu definieren
