---
title: "HTMLLinkElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLLinkElement/sizes
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft des schreibgeschützten [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces definiert die Größen der Symbole für visuelle Medien, die in der Ressource enthalten sind. Sie spiegelt das `sizes`-Attribut des {{HTMLElement("link")}}-Elements wider, das eine Liste von durch Leerzeichen getrennten Größen im Format `<width in pixels>x<height in pixels>`, oder das Schlüsselwort `any` annimmt.

Es ist nur relevant, wenn der [`rel`](/de/docs/Web/API/HTMLLinkElement/rel) `icon` oder ein nicht standardmäßiger Typ wie `apple-touch-icon` ist.

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
- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut
