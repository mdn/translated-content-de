---
title: "NamedNodeMap: setNamedItemNS() Methode"
short-title: setNamedItemNS()
slug: Web/API/NamedNodeMap/setNamedItemNS
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die **`setNamedItemNS()`** Methode der [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Schnittstelle
fügt das durch seinen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) in die Map ein.
Wenn sich bereits ein [`Attr`](/de/docs/Web/API/Attr) mit demselben Namen in der Map befindet,
wird es _ersetzt_.

> [!NOTE]
> Diese Methode ist ein Alias von `setNamedItem()`, Sie können sie
> austauschbar verwenden.

## Syntax

```js-nolint
setNamedItemNS(attr)
```

### Parameter

- `attr`
  - : Das Attribut, das in die Map eingefügt werden soll.

### Rückgabewert

Gibt das alte Attribut zurück, wenn es ersetzt wurde, oder `null`, wenn das Attribut neu ist.

### Ausnahmen

- `InUseAttributeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut noch Teil einer anderen Map ist.

## Beispiel

```html
<span ob:one="one"></span>
<pre></pre>
```

```js
const parser = new DOMParser();
// ob:one in <span> is not in a namespace, while ob:one in <warning>, is.
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const span = document.querySelector("span");
const pre = document.querySelector("pre");
const warning = doc.querySelector("warning");
const attrMap = span.attributes;

let result = `The '<span>' element initially contains ${attrMap.length} attribute.\n\n`;

result += "We remove `one` from '<span>' and adds it to '<pre>'.\n";
const one = warning.attributes.removeNamedItemNS(
  "http://www.example.com/ob",
  "one",
);
attrMap.setNamedItemNS(one);
result += `The '<span>' element now contains ${span.attributes.length} attributes:\n\n`;
result += "Prefix\tLocal name\tQualified name\n";
result += "=========================================\n";

for (const attr of attrMap) {
  result += `${attr.prefix}\t${attr.localName}\t\t${attr.name}\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Beispiel", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
