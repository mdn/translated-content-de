---
title: "NamedNodeMap: removeNamedItemNS() Methode"
short-title: removeNamedItemNS()
slug: Web/API/NamedNodeMap/removeNamedItemNS
l10n:
  sourceCommit: d95bc516ac619d2cdaa9b2c3c0040bcc1681e76f
---

{{APIRef("DOM")}}

Die **`removeNamedItemNS()`**-Methode der [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Schnittstelle entfernt das [`Attr`](/de/docs/Web/API/Attr), das dem angegebenen Namensraum und lokalen Namen im Map entspricht.

## Syntax

```js-nolint
removeNamedItem(namespace, localName)
```

### Parameter

- `namespace`

  - : Der Namensraum des Attributs, das aus der Map entfernt werden soll
    > **Warning:** `namespace` ist der URI des Namensraums, nicht das Präfix.

- `localName`
  - : Der lokale Name des Attributs, das aus der Map entfernt werden soll.

### Rückgabewert

Das entfernte [`Attr`](/de/docs/Web/API/Attr).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Attribut mit dem angegebenen Namensraum und lokalen Namen vorhanden ist.

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
const attrMap = warning.attributes;

let result = `The 'ob:one' attribute initially contains '${attrMap["ob:one"].value}'.\n`;

result += "We remove it.\n\n";
attrMap.removeNamedItemNS("http://www.example.com/ob", "one");

result += attrMap["ob:one"]
  ? "And 'ob:one' still exists."
  : "And 'ob:one' is no more to be found.";

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
