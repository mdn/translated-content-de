---
title: "NamedNodeMap: removeNamedItemNS()-Methode"
short-title: removeNamedItemNS()
slug: Web/API/NamedNodeMap/removeNamedItemNS
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`removeNamedItemNS()`**-Methode des [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Interfaces entfernt das [`Attr`](/de/docs/Web/API/Attr), das dem angegebenen Namespace und lokalen Namen entspricht, aus der Map.

## Syntax

```js-nolint
removeNamedItemNS(namespace, localName)
```

### Parameter

- `namespace`
  - : Der Namespace des Attributs, das aus der Map entfernt werden soll.
    > [!WARNING] > `namespace` ist der URI des Namespaces, nicht das Präfix.

- `localName`
  - : Der lokale Name des Attributs, das aus der Map entfernt werden soll.

### Rückgabewert

Das entfernte [`Attr`](/de/docs/Web/API/Attr).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Attribut mit dem angegebenen Namespace und lokalen Namen vorhanden ist.

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
