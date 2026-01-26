---
title: "HTMLLinkElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLLinkElement/sizes
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sizes`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle definiert die Größen der Symbole für visuelle Medien, die in der Ressource enthalten sind. Sie spiegelt das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements wider, das eine Liste von durch Leerzeichen getrennten Größen im Format `<Breite in Pixeln>x<Höhe in Pixeln>` oder das Schlüsselwort `any` annimmt.

Es ist nur relevant, wenn der [`rel`](/de/docs/Web/API/HTMLLinkElement/rel)-Wert `icon` oder ein nicht standardmäßiger Typ wie `apple-touch-icon` ist.

## Wert

Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `sizes`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie trotzdem direkt der `sizes`-Eigenschaft einen Wert zuweisen, was dem Zuweisen zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können auch das `DOMTokenList`-Objekt mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

```html
<link rel="icon" sizes="72x72 114x114" href="smallish.ico" />
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
