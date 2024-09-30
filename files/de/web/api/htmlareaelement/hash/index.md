---
title: "HTMLAreaElement: hash-Eigenschaft"
short-title: hash
slug: Web/API/HTMLAreaElement/hash
l10n:
  sourceCommit: a2847ff3788f224ffb4cdf05cb0139e07fde7533
---

{{ APIRef("HTML DOM") }}

Die **`HTMLAreaElement.hash`**-Eigenschaft gibt eine Zeichenkette zurück, die ein `'#'` enthält, gefolgt vom Fragmentbezeichner der URL.

Das Fragment ist nicht [percent-codiert](/de/docs/Glossary/Percent-encoding). Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft eine leere Zeichenkette, `""`.

## Wert

Eine Zeichenkette.

## Beispiele

### Den Hash von einem Bereichslink abrufen

Gegeben ist dieses HTML

```html
<map name="infographic">
  <area
    id="mdn-circle"
    shape="circle"
    coords="130,136,60"
    href="https://developer.mozilla.org/#ExampleSection"
    alt="MDN" />
</map>

<img
  usemap="#infographic"
  src="/media/examples/mdn-info.png"
  alt="MDN infographic" />
```

können Sie den Hash des Bereichslinks so abrufen:

```js
const area = document.getElementById("mdn-circle");
area.hash; // '#ExampleSection'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface, zu dem es gehört.
