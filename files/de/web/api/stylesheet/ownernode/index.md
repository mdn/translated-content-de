---
title: "StyleSheet: ownerNode-Eigenschaft"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

Die **`ownerNode`**-Eigenschaft des [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt das Knoten-Element zurück, das dieses Stylesheet mit dem Dokument verknüpft.

Dabei handelt es sich in der Regel um ein HTML-Element wie [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) oder [`<style>`](/de/docs/Web/HTML/Reference/Elements/style), kann aber auch ein [Verarbeitungsanweisungsknoten](/de/docs/Web/API/ProcessingInstruction) im Fall von `<?xml-stylesheet ?>` sein.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

## Beispiele

Angenommen, der `<head>` enthält Folgendes:

```html
<link rel="stylesheet" href="example.css" />
```

Dann:

```js
console.log(document.styleSheets[0].ownerNode);
// Displays '<link rel="stylesheet" href="example.css">'
```

## Hinweise

Für Stylesheets, die von anderen Stylesheets eingebunden werden, zum Beispiel mittels [`@import`](/de/docs/Web/CSS/@import), ist der Wert dieser Eigenschaft `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
