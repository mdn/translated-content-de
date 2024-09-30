---
title: "NamedNodeMap: Methode setNamedItem()"
short-title: setNamedItem()
slug: Web/API/NamedNodeMap/setNamedItem
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("DOM")}}

Die **`setNamedItem()`**-Methode der [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Schnittstelle fügt das durch seinen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) in die Map ein. Wenn bereits ein [`Attr`](/de/docs/Web/API/Attr) mit demselben Namen in der Map vorhanden ist, wird es _ersetzt_.

## Syntax

```js-nolint
setNamedItem(attr)
```

### Parameter

- `attr`
  - : das Attribut, das in die Map eingefügt werden soll.

### Rückgabewert

Gibt das alte Attribut zurück, wenn es ersetzt wurde, oder `null`, wenn das Attribut neu ist.

### Ausnahmen

- `InUseAttributeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut noch Teil einer anderen Map ist.

## Beispiel

```html
<span one="one" two="two"></span>
<pre test="testValue"></pre>
```

```js
const span = document.querySelector("span");
const pre = document.querySelector("pre");
const attrMap = pre.attributes;

let result = `The '<pre>' element initially contains ${attrMap.length} attributes.\n\n`;

result += "We remove `one` from `<span>` and adds it to `<pre>`.\n";
const one = span.attributes.removeNamedItem("one");
attrMap.setNamedItem(one);
result += `The '<pre>' element now contains ${pre.attributes.length} attributes.\n\n`;

result += "We get 'two' from '<span>' and try to adds it to '<pre>'.\n";
const two = span.attributes.getNamedItem("two");
try {
  attrMap.setNamedItem(two);
} catch (error) {
  result += `An exception has been raised: ${error.name}.\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Beispiel", "100%", 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
