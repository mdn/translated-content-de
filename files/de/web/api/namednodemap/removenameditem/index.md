---
title: "NamedNodeMap: removeNamedItem()-Methode"
short-title: removeNamedItem()
slug: Web/API/NamedNodeMap/removeNamedItem
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("DOM")}}

Die **`removeNamedItem()`**-Methode der Schnittstelle [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) entfernt das [`Attr`](/de/docs/Web/API/Attr), das dem angegebenen Namen entspricht, aus der Map.

## Syntax

```js-nolint
removeNamedItem(attrName)
```

### Parameter

- `attrName`
  - : Der Name des Attributs, das aus der Map entfernt werden soll.

### Rückgabewert

Das entfernte [`Attr`](/de/docs/Web/API/Attr).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Attribut mit dem gegebenen Namen vorhanden ist.

## Beispiel

```html
<pre test="testValue"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;

let result = `The 'test' attribute initially contains '${attrMap["test"].value}'.\n`;

result += "We remove it.\n\n";
attrMap.removeNamedItem("test");

result += attrMap.getNamedItem("test")
  ? "And 'test' still exists."
  : "And 'test' is no more to be found.";

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
