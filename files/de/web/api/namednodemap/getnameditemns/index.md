---
title: "NamedNodeMap: getNamedItemNS() Methode"
short-title: getNamedItemNS()
slug: Web/API/NamedNodeMap/getNamedItemNS
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`getNamedItemNS()`**-Methode des [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Interfaces gibt das [`Attr`](/de/docs/Web/API/Attr) zurück, das dem gegebenen lokalen Namen im angegebenen Namensraum entspricht, oder `null`, wenn es kein entsprechendes Attribut gibt.

## Syntax

```js-nolint
getNamedItemNS(namespace, localName)
```

### Parameter

- `namespace`
  - : Ein String mit der Namensraum-URI des gewünschten Attributs.
    > [!WARNING] > `namespace` ist die URI des Namensraums, nicht das Präfix.
- `localName`
  - : Ein String mit dem `localName` des gewünschten Attributs.

### Rückgabewert

Ein [`Attr`](/de/docs/Web/API/Attr), das dem angegebenen Namensraum und dem lokalen Namen in den Parametern entspricht, oder `null`, wenn keins gefunden wurde.

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
