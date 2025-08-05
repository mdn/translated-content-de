---
title: "CSSNamespaceRule: prefix Eigenschaft"
short-title: prefix
slug: Web/API/CSSNamespaceRule/prefix
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`prefix`**-Eigenschaft der [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) gibt einen Zeichenfolgenwert mit dem Namen des Präfixes zurück, das mit diesem Namespace verknüpft ist. Wenn kein solches Präfix vorhanden ist, wird ein leerer String zurückgegeben.

## Wert

Ein String, der das Präfix enthält, das diesem Namespace zugeordnet ist. Wenn kein Präfix vorhanden ist, ein leerer String.

## Beispiele

Das Stylesheet enthält zwei Namespace-Regeln. Die erste hat kein Präfix, die zweite das Präfix `svg`. Zwei `CSSNamespaceRule`-Objekte werden zurückgegeben. Der Wert der `prefix`-Eigenschaft für die erste ist ein leerer String, für die zweite `svg`.

```css
@namespace url("http://www.w3.org/1999/xhtml");
@namespace svg url("http://www.w3.org/2000/svg");
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
