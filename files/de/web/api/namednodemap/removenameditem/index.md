---
title: "NamedNodeMap: removeNamedItem()-Methode"
short-title: removeNamedItem()
slug: Web/API/NamedNodeMap/removeNamedItem
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("DOM")}}

Die **`removeNamedItem()`**-Methode der {{domxref("NamedNodeMap")}}-Schnittstelle entfernt das dem angegebenen Namen entsprechende {{domxref("Attr")}} aus der Map.

## Syntax

```js-nolint
removeNamedItem(attrName)
```

### Parameter

- `attrName`
  - : Der Name des Attributs, das aus der Map entfernt werden soll.

### Rückgabewert

Das entfernte {{domxref("Attr")}}.

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn kein Attribut mit dem angegebenen Namen vorhanden ist.

## Beispiel

```html
<pre test="testValue"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;

let result = `Das 'test'-Attribut enthält zunächst '${attrMap["test"].value}'.\n`;

result += "Wir entfernen es.\n\n";
attrMap.removeNamedItem("test");

result += attrMap.getNamedItem("test")
  ? "Und 'test' existiert weiterhin."
  : "Und 'test' ist nicht mehr zu finden.";

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
