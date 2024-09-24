---
title: "HTMLAreaElement: hash-Eigenschaft"
short-title: hash
slug: Web/API/HTMLAreaElement/hash
l10n:
  sourceCommit: a2847ff3788f224ffb4cdf05cb0139e07fde7533
---

{{ APIRef("HTML DOM") }}

Die Eigenschaft **`HTMLAreaElement.hash`** gibt eine Zeichenfolge zurück, die ein `'#'` gefolgt von dem Fragmentbezeichner der URL enthält.

Das Fragment ist nicht {{Glossary("Percent-encoding", "percent-codiert")}}. Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

## Wert

Eine Zeichenfolge.

## Beispiele

### Den Hash eines Bereiche-Links abrufen

Gegebenes HTML

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

Sie können den Hash des Bereiche-Links wie folgt abrufen:

```js
const area = document.getElementById("mdn-circle");
area.hash; // '#ExampleSection'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface {{domxref("HTMLAreaElement")}}, zu dem es gehört.
