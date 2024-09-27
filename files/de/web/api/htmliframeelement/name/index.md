---
title: "HTMLIFrameElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLIFrameElement/name
l10n:
  sourceCommit: e2b1940639d7b81e1205884532acbd0ee5e7ec34
---

{{APIRef("HTML DOM")}}

Die **`name`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle ist ein Zeichenfolgenwert, der das `name`-Attribut des {{HTMLElement("iframe")}}-Elements widerspiegelt und den spezifischen Namen des `<iframe>`-Elements angibt.

## Wert

Eine Zeichenfolge.

## Beispiele

```html
<iframe id="el" name="example"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.name); // Output: "example"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
