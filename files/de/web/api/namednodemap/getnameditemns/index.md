---
title: "NamedNodeMap: Methode getNamedItemNS()"
short-title: getNamedItemNS()
slug: Web/API/NamedNodeMap/getNamedItemNS
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("DOM")}}

Die **`getNamedItemNS()`**-Methode des {{domxref("NamedNodeMap")}}-Interfaces gibt das {{domxref("Attr")}} zurück, das dem angegebenen lokalen Namen im angegebenen Namensraum entspricht, oder `null`, wenn es kein entsprechendes Attribut gibt.

## Syntax

```js-nolint
getNamedItemNS(namespace, localName)
```

### Parameter

- `namespace`
  - : Ein String, der den URI des Namensraums des gewünschten Attributs enthält.
    > **Warning:** `namespace` ist der URI des Namensraums, nicht das Präfix.
- `localName`
  - : Ein String, der den localName des gewünschten Attributs enthält.

### Rückgabewert

Ein {{domxref("Attr")}}, das dem Namensraum und dem lokalen Namen entspricht, die in den Parametern angegeben sind, oder `null`, wenn keines gefunden wurde.

## Beispiel

```html hidden
<pre></pre>
```

```js
const parser = new DOMParser();
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const pre = document.querySelector("pre");
const warning = doc.querySelector("warning");

const value = warning.attributes.getNamedItemNS(
  "http://www.example.com/ob",
  "one",
).value;

pre.textContent = `The 'ob:one' attribute contains: ${value}.`;
```

{{EmbedLiveSample("Example", "100%", 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
