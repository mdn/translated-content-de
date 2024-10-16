---
title: "NamedNodeMap: getNamedItem() Methode"
short-title: getNamedItem()
slug: Web/API/NamedNodeMap/getNamedItem
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("DOM")}}

Die **`getNamedItem()`** Methode der [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Schnittstelle gibt das [`Attr`](/de/docs/Web/API/Attr) zurück, das dem gegebenen Namen entspricht, oder `null`, wenn es kein entsprechendes Attribut gibt.

> [!NOTE]
> Diese Methode wird auch aufgerufen, wenn Sie die Syntax des Operators `[]` verwenden. Daher ist `myMap[str]` äquivalent zu `myMap.getNamedItem(str)`, wobei `str` eine Zeichenkette ist.

## Syntax

```js-nolint
getNamedItem(name)
[name]
```

### Parameter

- `name`
  - : Eine Zeichenkette mit dem Namen des gewünschten Attributs.

### Rückgabewert

Ein [`Attr`](/de/docs/Web/API/Attr), das dem im Parameter angegebenen `name` entspricht, oder `null`, wenn kein solches Attribut gefunden wurde.

## Beispiel

```html
<pre test="test"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;
const value = attrMap.getNamedItem("test").value;
pre.textContent = `The 'test' attribute contains ${value}.
And 'foo' has ${attrMap["foo"] ? "been" : "not been"} found.`;
```

{{EmbedLiveSample("Example", "100%", 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
