---
title: "Range: toString()-Methode"
short-title: toString()
slug: Web/API/Range/toString
l10n:
  sourceCommit: 06702973c5284e08d70196d1cda9a05b7aed152a
---

{{ApiRef("DOM")}}

Die **`Range.toString()`**-Methode ist ein {{Glossary("stringifier", "Stringifier")}}, der den Text des [`Range`](/de/docs/Web/API/Range) zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String.

## Beispiele

### HTML

```html
<p>
  This example logs <em>everything</em> between the emphasized <em>words</em>.
  Look at the output below.
</p>
<p id="log"></p>
```

### JavaScript

```js
const range = document.createRange();

range.setStartBefore(document.getElementsByTagName("em").item(0), 0);
range.setEndAfter(document.getElementsByTagName("em").item(1), 0);
document.getElementById("log").textContent = range.toString();
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
