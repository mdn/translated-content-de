---
title: "NamedNodeMap: getNamedItem()-Methode"
short-title: getNamedItem()
slug: Web/API/NamedNodeMap/getNamedItem
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("DOM")}}

Die **`getNamedItem()`**-Methode der Schnittstelle [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) gibt das [`Attr`](/de/docs/Web/API/Attr) zurück, das dem angegebenen Namen entspricht, oder `null`, wenn kein entsprechendes Attribut vorhanden ist.

> [!NOTE]
> Diese Methode wird auch aufgerufen, wenn Sie die Operator-`[]`-Syntax verwenden.
> Somit ist `myMap[str]` äquivalent zu `myMap.getNamedItem(str)`, wobei `str` ein String ist.

## Syntax

```js-nolint
getNamedItem(name)
[name]
```

### Parameter

- `name`
  - : Ein String mit dem Namen des gewünschten Attributs.

### Rückgabewert

Ein [`Attr`](/de/docs/Web/API/Attr), das dem im Parameter angegebenen `name` entspricht, oder `null`, wenn kein entsprechendes Attribut gefunden wurde.

## Beispiel

```html
<pre test="test"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;
const value = attrMap.getNamedItem("test").value;
pre.textContent = `The 'test' attribute contains ${value}.
And 'boum' has ${attrMap["boum"] ? "been" : "not been"} found.`;
```

{{EmbedLiveSample("Example", "100%", 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
