---
title: "StyleSheet: Eigenschaft ownerNode"
short-title: ownerNode
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`ownerNode`** der [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Schnittstelle gibt den Knoten zurück, der dieses Stylesheet mit dem Dokument verknüpft.

Dies ist normalerweise ein HTML-Element wie [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) oder [`<style>`](/de/docs/Web/HTML/Reference/Elements/style), kann im Fall von `<?xml-stylesheet ?>` aber auch ein [Verarbeitungsanweisungsknoten](/de/docs/Web/API/ProcessingInstruction) sein.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

## Beispiele

Angenommen, `<head>` enthält Folgendes:

```html
<link rel="stylesheet" href="example.css" />
```

Dann:

```js
console.log(document.styleSheets[0].ownerNode);
// Displays '<link rel="stylesheet" href="example.css">'
```

## Hinweise

Bei Stylesheets, die durch andere Stylesheets eingebunden werden, etwa mit {{cssxref("@import")}}, ist der Wert dieser Eigenschaft `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
