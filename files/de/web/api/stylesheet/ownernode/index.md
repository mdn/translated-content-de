---
title: "StyleSheet: ownerNode-Eigenschaft"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`ownerNode`**-Eigenschaft des
[`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt den Knoten zurück, der dieses Stylesheet
mit dem Dokument verknüpft.

Dies ist in der Regel ein HTML-
[`<link>`](/de/docs/Web/HTML/Element/link)- oder
[`<style>`](/de/docs/Web/HTML/Element/style)-Element, kann jedoch auch einen [Verarbeitungshinweis-Knoten](/de/docs/Web/API/ProcessingInstruction) im Fall von `<?xml-stylesheet ?>` zurückgeben.

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

## Hinweise

Für Stylesheets, die durch andere Stylesheets inkludiert werden, wie z.B. mit
[`@import`](/de/docs/Web/CSS/@import), ist der Wert dieser
Eigenschaft `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
