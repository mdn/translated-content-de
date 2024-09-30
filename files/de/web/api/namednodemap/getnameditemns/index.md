---
title: "NamedNodeMap: getNamedItemNS()-Methode"
short-title: getNamedItemNS()
slug: Web/API/NamedNodeMap/getNamedItemNS
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("DOM")}}

Die **`getNamedItemNS()`**-Methode des [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Interfaces gibt das [`Attr`](/de/docs/Web/API/Attr) zurück, das dem angegebenen lokalen Namen im angegebenen Namensraum entspricht, oder `null`, wenn kein entsprechendes Attribut vorhanden ist.

## Syntax

```js-nolint
getNamedItemNS(namespace, localName)
```

### Parameter

- `namespace`
  - : Ein String mit dem Namensraum-URI des gewünschten Attributs.
    > **Warning:** `namespace` ist der URI des Namensraums, nicht das Präfix.
- `localName`
  - : Ein String mit dem localName des gewünschten Attributs.

### Rückgabewert

Ein [`Attr`](/de/docs/Web/API/Attr), das dem angegebenen Namensraum und lokalen Namen in den Parametern entspricht, oder `null`, wenn kein solches Attribut gefunden wurde.

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

{{EmbedLiveSample("Beispiel", "100%", 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
