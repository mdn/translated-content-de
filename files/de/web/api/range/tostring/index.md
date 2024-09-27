---
title: "Range: toString()-Methode"
short-title: toString()
slug: Web/API/Range/toString
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.toString()`**-Methode ist ein [Stringifier](/de/docs/Glossary/stringifier), der den Text des [`Range`](/de/docs/Web/API/Range) zurückgibt.

Das Aufrufen des Inhalts eines [`Range`](/de/docs/Web/API/Range) durch eine Warnmeldung führt zu einem impliziten
`toString()`-Aufruf, daher ist der Vergleich von Range und Text über einen Warn-Dialog
ineffektiv.

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
