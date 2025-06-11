---
title: "NamedNodeMap: setNamedItem()-Methode"
short-title: setNamedItem()
slug: Web/API/NamedNodeMap/setNamedItem
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

Die **`setNamedItem()`**-Methode der [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Schnittstelle
fügt das durch seinen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) in die Liste ein.
Wenn bereits ein [`Attr`](/de/docs/Web/API/Attr) mit demselben Namen in der Liste vorhanden ist,
wird es _ersetzt_.

## Syntax

```js-nolint
setNamedItem(attr)
```

### Parameter

- `attr`
  - : das Attribut, das in die Liste eingefügt werden soll.

### Rückgabewert

Gibt das alte Attribut zurück, wenn es ersetzt wurde, oder `null`, wenn das Attribut neu ist.

### Ausnahmen

- `InUseAttributeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut noch Teil einer anderen Liste ist.

## Beispiel

```html
<span class="foo" id="bar"></span>
<pre contenteditable></pre>
```

```js
const span = document.querySelector("span");
const pre = document.querySelector("pre");

let result = `The \`<pre>\` element initially contains ${pre.attributes.length} attributes.\n\n`;

result += "We remove `class` from `<span>` and add it to `<pre>`.\n";
const classAttribute = span.attributes.removeNamedItem("class");
pre.attributes.setNamedItem(classAttribute);
result += `The \`<pre>\` element now contains ${pre.attributes.length} attributes.\n\n`;

result += "We get `id` from `<span>` and try to add it to `<pre>`.\n";
const id = span.attributes.getNamedItem("id");
try {
  pre.attributes.setNamedItem(id);
} catch (error) {
  result += `An exception has been raised: ${error.name}: ${error.message}.\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
