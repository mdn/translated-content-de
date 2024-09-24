---
title: "CSSNamespaceRule: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/CSSNamespaceRule/prefix
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`prefix`**-Eigenschaft des {{domxref("CSSNamespaceRule")}}-Objekts gibt einen String zurück, der den Namen des mit diesem Namensraum verknüpften Präfixes enthält. Falls kein solches Präfix existiert, wird ein leerer String zurückgegeben.

## Wert

Ein String, der den mit diesem Namensraum verknüpften Präfix enthält. Wenn kein Präfix existiert, ein leerer String.

## Beispiele

Das Stylesheet enthält zwei Namespace-Regeln. Die erste hat kein Präfix, die zweite das Präfix `svg`. Es werden zwei `CSSNamespaceRule`-Objekte zurückgegeben. Der Wert der `prefix`-Eigenschaft für das erste wird ein leerer String sein, für das zweite `svg`.

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // ein leerer String ""
console.log(myRules[1].namespaceURI); // "svg"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
