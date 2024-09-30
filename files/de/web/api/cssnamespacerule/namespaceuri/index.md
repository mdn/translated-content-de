---
title: "CSSNamespaceRule: namespaceURI-Eigenschaft"
short-title: namespaceURI
slug: Web/API/CSSNamespaceRule/namespaceURI
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`namespaceURI`**-Eigenschaft des [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) gibt einen String zurück, der den Text der URI des gegebenen Namespace enthält.

## Wert

Ein String, der eine URI enthält.

## Beispiele

Das Stylesheet enthält einen Namespace als einzige Regel. Daher wird die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) ein `CSSNamespaceRule` sein. Der Wert der `namespaceURI`-Eigenschaft wird `http://www.w3.org/1999/xhtml` sein.

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); //http://www.w3.org/1999/xhtml
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
