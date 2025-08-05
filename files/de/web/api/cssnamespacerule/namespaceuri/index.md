---
title: "CSSNamespaceRule: namespaceURI-Eigenschaft"
short-title: namespaceURI
slug: Web/API/CSSNamespaceRule/namespaceURI
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`namespaceURI`**-Eigenschaft der [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) gibt einen String zurück, der den Text des URI des angegebenen Namensraums enthält.

## Wert

Ein String, der einen URI enthält.

## Beispiele

Das Stylesheet enthält einen Namensraum als einzige Regel. Daher wird die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) eine `CSSNamespaceRule` sein. Der Wert der `namespaceURI`-Eigenschaft wird `http://www.w3.org/1999/xhtml` sein.

```css
@namespace url("http://www.w3.org/1999/xhtml");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // 'http://www.w3.org/1999/xhtml'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
