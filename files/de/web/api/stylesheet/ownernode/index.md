---
title: "StyleSheet: ownerNode-Eigenschaft"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Die **`ownerNode`**-Eigenschaft des [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces gibt das Knotenobjekt zurück, das dieses Stylesheet mit dem Dokument verknüpft.

Dies ist normalerweise ein HTML [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)- oder [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Element, kann aber auch einen [Verarbeitungshinweisknoten](/de/docs/Web/API/ProcessingInstruction) im Fall von `<?xml-stylesheet ?>` zurückgeben.

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

## Anmerkungen

Für Stylesheets, die durch andere Stylesheets eingebunden werden, z.B. durch [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import), ist der Wert dieser Eigenschaft `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
