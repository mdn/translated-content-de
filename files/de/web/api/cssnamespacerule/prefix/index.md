---
title: "CSSNamespaceRule: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/CSSNamespaceRule/prefix
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`prefix`**-Eigenschaft der [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) gibt einen String mit dem Namen des Präfixes zurück, das mit diesem Namespace verknüpft ist. Wenn es kein solches Präfix gibt, wird ein leerer String zurückgegeben.

## Wert

Ein String, der das mit diesem Namespace verknüpfte Präfix enthält. Wenn es kein Präfix gibt, wird ein leerer String zurückgegeben.

## Beispiele

Das Stylesheet enthält zwei Namespace-Regeln. Die erste hat kein Präfix, die zweite das Präfix `svg`. Zwei `CSSNamespaceRule`-Objekte werden zurückgegeben. Der Wert der `prefix`-Eigenschaft für das erste wird ein leerer String sein, für das zweite `svg`.

```css
@namespace url("http://www.w3.org/1999/xhtml");
@namespace svg url("http://www.w3.org/2000/svg");
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].prefix); // an empty string ""
console.log(myRules[1].prefix); // "svg"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
