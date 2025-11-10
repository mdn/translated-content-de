---
title: "HTMLStyleElement: media Eigenschaft"
short-title: media
slug: Web/API/HTMLStyleElement/media
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement.media`**-Eigenschaft spezifiziert das beabsichtigte Zielmedium für Stilinformationen.

## Wert

Ein String, der ein einzelnes Medium oder eine durch Kommas getrennte Liste beschreibt.

## Beispiele

Angenommen, der `<head>` enthält Folgendes:

```html
<style id="inline-style" media="screen, print">
  p {
    color: blue;
  }
</style>
```

Dann:

```js
const style = document.getElementById("inline-style");

console.log(style.media); // 'screen, print'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
