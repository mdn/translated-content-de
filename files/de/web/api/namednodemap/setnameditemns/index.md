---
title: "NamedNodeMap: Methode setNamedItemNS()"
short-title: setNamedItemNS()
slug: Web/API/NamedNodeMap/setNamedItemNS
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die Methode **`setNamedItemNS()`** des {{domxref("NamedNodeMap")}}-Interfaces
fügt das durch seinen Namen identifizierte {{domxref("Attr")}} in die Map ein.
Falls bereits ein {{domxref("Attr")}} mit demselben Namen in der Map vorhanden war,
wird es _ersetzt_.

> [!NOTE]
> Diese Methode ist ein Alias von `setNamedItem()`. Sie können sie
> austauschbar verwenden.

## Syntax

```js-nolint
setNamedItemNS(attr)
```

### Parameter

- `attr`
  - : Das Attribut, das in die Map eingefügt werden soll.

### Rückgabewert

Gibt das alte Attribut zurück, falls es ersetzt wurde, oder `null`, wenn das Attribut neu ist.

### Ausnahmen

- `InUseAttributeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Attribut noch Teil einer anderen Map ist.

## Beispiel

```html
<span ob:one="one"></span>
<pre></pre>
```

```js
const parser = new DOMParser();
// ob:one in <span> ist nicht in einem Namensraum, während ob:one in <warning> ist.
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Vorsicht!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const span = document.querySelector("span");
const pre = document.querySelector("pre");
const warning = doc.querySelector("warning");
const attrMap = span.attributes;

let result = `Das '<span>'-Element enthält anfänglich ${attrMap.length} Attribut.\n\n`;

result += "Wir entfernen `one` aus '<span>' und fügen es in '<pre>' ein.\n";
const one = warning.attributes.removeNamedItemNS(
  "http://www.example.com/ob",
  "one",
);
attrMap.setNamedItemNS(one);
result += `Das '<span>'-Element enthält jetzt ${span.attributes.length} Attribute:\n\n`;
result += "Präfix\tLokaler Name\tQualifizierter Name\n";
result += "=========================================\n";

for (const attr of attrMap) {
  result += `${attr.prefix}\t${attr.localName}\t\t${attr.name}\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
