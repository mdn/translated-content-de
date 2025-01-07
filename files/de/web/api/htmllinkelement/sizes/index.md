---
title: "HTMLLinkElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLLinkElement/sizes
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sizes`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstellen definiert die Größen der Symbole für visuelle Medien, die in der Ressource enthalten sind. Sie spiegelt das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements wider, welches eine Liste von durch Leerzeichen getrennten Größen enthält. Jede Größe ist im Format `<Breite in Pixel>x<Höhe in Pixel>` oder als Schlüsselwort `any` angegeben.

Dies ist nur relevant, wenn der [`rel`](/de/docs/Web/API/HTMLLinkElement/rel) auf `icon` oder einen nicht standardmäßigen Typ wie `apple-touch-icon` gesetzt ist.

## Wert

Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)

## Beispiele

```html
<link rel="icon" sizes="72x72 114x114" href="smallish.png" />
```

```js
const link = document.querySelector("[rel=icon],[rel=apple-touch-icon]");
console.dir(link.sizes); /* output:
  DOMTokenList [ "72x72", "114x114" ]
    0: "72x72"
    1: "114x114"
    length: 2
    value: "72x72 114x114"
  */
console.log(link.sizes.value); // output: '72x72 114x114'
console.log(link.sizes.length); // output: 2'
console.log(link.sizes[0]); // output: '72x72'
console.log(link.sizes[1]); // output: '114x114'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type)
- [`HTMLLinkElement.href`](/de/docs/Web/API/HTMLLinkElement/href)
- {{HTMLElement("link")}}
- [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut
