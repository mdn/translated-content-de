---
title: "StyleSheet: ownerNode-Eigenschaft"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSSOM")}}

Die **`ownerNode`**-Eigenschaft des [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt den Knoten zurück, der dieses Stylesheet mit dem Dokument verbindet.

Dies ist normalerweise ein HTML-[`<link>`](/de/docs/Web/HTML/Reference/Elements/link)- oder [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Element, kann aber im Falle von `<?xml-stylesheet ?>` auch einen [Verarbeitungsanweisungs-Knoten](/de/docs/Web/API/ProcessingInstruction) zurückgeben.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

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
// Displays "object HTMLLinkElement"
```

## Anmerkungen

Für Stylesheets, die von anderen Stylesheets eingebunden werden, beispielsweise mit [`@import`](/de/docs/Web/CSS/@import), ist der Wert dieser Eigenschaft `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
