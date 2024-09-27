---
title: "HTMLAnchorElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLAnchorElement/type
l10n:
  sourceCommit: 10346c8cf5dfe6e030bd1cdc32f04461afaa8c64
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ist ein String, der den MIME-Typ der verlinkten Ressource angibt.

Sie spiegelt das `type`-Attribut des {{HTMLElement("a")}}-Elements wider.

## Wert

Ein String.

## Beispiel

```html
<a id="exampleLink" href="https://example.com" type="text/html">Example Link</a>
<p class="type"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".type");
console.log(anchorElement.type); // Output: "text/html"
pTag.textContent = anchorElement.type;
```

{{EmbedLiveSample("Example",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.type`](/de/docs/Web/API/HTMLLinkElement/type) Eigenschaft
- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type) Eigenschaft
- [`HTMLEmbedElement.type`](/de/docs/Web/API/HTMLEmbedElement/type) Eigenschaft
