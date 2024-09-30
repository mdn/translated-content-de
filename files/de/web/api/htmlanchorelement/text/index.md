---
title: "HTMLAnchorElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLAnchorElement/text
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{ApiRef("HTML DOM")}}

Die **`text`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert den Text innerhalb des Elements.
Diese Eigenschaft stellt die gleiche Information wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) dar.

## Wert

Ein String.

## Beispiel

```html
<a id="exampleLink" href="https://example.com">Example Link</a>
<p class="text"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".text");
pTag.textContent = `Text property: ${anchorElement.text}`;
```

### Ergebnis

{{EmbedLiveSample("Example",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text) Eigenschaft
- [`HTMLOptionElement.text`](/de/docs/Web/API/HTMLOptionElement/text) Eigenschaft
