---
title: "CSSNamespaceRule: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/CSSNamespaceRule/prefix
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`prefix`**-Eigenschaft des [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) gibt einen String mit dem Namen des Präfixes zurück, das mit diesem Namespace verknüpft ist. Wenn es kein solches Präfix gibt, wird ein leerer String zurückgegeben.

## Wert

Ein String, der das Präfix enthält, das mit diesem Namespace verknüpft ist. Wenn kein Präfix vorhanden ist, ein leerer String.

## Beispiele

Das Stylesheet enthält zwei Namespace-Regeln. Die erste hat kein Präfix, die zweite hat das Präfix `svg`. Zwei `CSSNamespaceRule`-Objekte werden zurückgegeben. Der Wert der `prefix`-Eigenschaft für das erste wird ein leerer String sein, für das zweite `svg`.

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // an empty string ""
console.log(myRules[1].namespaceURI); // "svg"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
