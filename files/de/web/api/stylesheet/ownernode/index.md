---
title: "StyleSheet: ownerNode-Eigenschaft"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSSOM")}}

Die **`ownerNode`**-Eigenschaft des
[`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt den Knoten zurück, der dieses Stylesheet mit dem Dokument verknüpft.

Dies ist normalerweise ein HTML-
[`<link>`](/de/docs/Web/HTML/Reference/Elements/link)- oder
[`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Element, kann aber auch einen [Processing Instruction Node](/de/docs/Web/API/ProcessingInstruction) im Fall von `<?xml-stylesheet ?>` zurückgeben.

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

Für Stylesheets, die von anderen Stylesheets eingebunden werden, wie beispielsweise mit
{{cssxref("@import")}}, ist der Wert dieser
Eigenschaft `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
