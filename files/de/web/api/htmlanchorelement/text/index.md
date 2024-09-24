---
title: "HTMLAnchorElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLAnchorElement/text
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{ApiRef("HTML DOM")}}

Die **`text`**-Eigenschaft des {{domxref("HTMLAnchorElement")}} stellt den Text innerhalb des Elements dar.
Diese Eigenschaft repräsentiert die gleiche Information wie {{domxref("Node.textContent")}}.

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

- {{domxref("HTMLScriptElement.text")}}-Eigenschaft
- {{domxref("HTMLOptionElement.text")}}-Eigenschaft
