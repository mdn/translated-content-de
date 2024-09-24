---
title: "StyleSheet: ownerNode-Eigenschaft"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`ownerNode`**-Eigenschaft des {{domxref("StyleSheet")}}-Interfaces gibt das Node zurück, das dieses Stylesheet mit dem Dokument verknüpft.

Dies ist normalerweise ein HTML
[`<link>`](/de/docs/Web/HTML/Element/link)- oder
[`<style>`](/de/docs/Web/HTML/Element/style)-Element, kann aber auch ein [Processing-Instruction-Node](/de/docs/Web/API/ProcessingInstruction) im Fall von `<?xml-stylesheet ?>` zurückgeben.

## Wert

Ein {{domxref("Node")}}-Objekt.

## Beispiele

```html
<html lang="en">
  <head>
    <link rel="stylesheet" href="example.css" />
  </head>
  <body>
    <button onclick="alert(document.styleSheets[0].ownerNode)">
      Show example.css's ownerNode
    </button>
  </body>
</html>
// Zeigt "object HTMLLinkElement" an
```

## Anmerkungen

Bei Stylesheets, die von anderen Stylesheets eingeschlossen werden, beispielsweise mit
[`@import`](/de/docs/Web/CSS/@import), ist der Wert dieser
Eigenschaft `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
