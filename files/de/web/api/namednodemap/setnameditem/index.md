---
title: "NamedNodeMap: Methode setNamedItem()"
short-title: setNamedItem()
slug: Web/API/NamedNodeMap/setNamedItem
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("DOM")}}

Die **`setNamedItem()`**-Methode der {{domxref("NamedNodeMap")}}-Schnittstelle fügt das durch seinen Namen identifizierte {{domxref("Attr")}} der Map hinzu. Wenn bereits ein {{domxref("Attr")}} mit demselben Namen in der Map vorhanden ist, wird es _ersetzt_.

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

- `InUseAttributeError` {{domxref("DOMException")}}
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

let result = `Das '<pre>'-Element enthält anfänglich ${attrMap.length} Attribute.\n\n`;

result += "Wir entfernen `one` aus `<span>` und fügen es zu `<pre>` hinzu.\n";
const one = span.attributes.removeNamedItem("one");
attrMap.setNamedItem(one);
result += `Das '<pre>'-Element enthält jetzt ${pre.attributes.length} Attribute.\n\n`;

result += "Wir holen 'two' von '<span>' und versuchen, es zu `<pre>` hinzuzufügen.\n";
const two = span.attributes.getNamedItem("two");
try {
  attrMap.setNamedItem(two);
} catch (error) {
  result += `Eine Ausnahme wurde ausgelöst: ${error.name}.\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
