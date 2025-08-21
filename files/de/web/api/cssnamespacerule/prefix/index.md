---
title: "CSSNamespaceRule: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/CSSNamespaceRule/prefix
l10n:
  sourceCommit: d7ed76f4fc715a30d1f0a98dcc77b109cb7abde5
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`prefix`**-Eigenschaft der [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) gibt eine Zeichenkette zurück, die den Namen des Präfixes enthält, das mit diesem Namespace verknüpft ist. Wenn es kein solches Präfix gibt, wird eine leere Zeichenkette zurückgegeben.

## Wert

Eine Zeichenkette, die das Präfix enthält, das mit diesem Namespace verknüpft ist. Wenn es kein Präfix gibt, eine leere Zeichenkette.

## Beispiele

Das Stylesheet enthält zwei Namespace-Regeln. Die erste hat kein Präfix, die zweite das Präfix `svg`. Zwei `CSSNamespaceRule`-Objekte werden zurückgegeben. Der Wert der `prefix`-Eigenschaft für das erste wird eine leere Zeichenkette sein, für das zweite `svg`.

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
