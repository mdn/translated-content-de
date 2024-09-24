---
title: "Range: Methode toString()"
short-title: toString()
slug: Web/API/Range/toString
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.toString()`** Methode ist ein {{Glossary("stringifier")}}, der den Text des {{domxref("Range")}} zurückgibt.

Das Anzeigen des Inhalts eines {{domxref("Range")}} löst einen impliziten `toString()`-Aufruf aus, daher ist der Vergleich von Bereich und Text über einen Dialog nicht effektiv.

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
  Dieses Beispiel protokolliert <em>alles</em> zwischen den hervorgehobenen <em>Wörtern</em>.
  Schauen Sie sich die Ausgabe unten an.
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

- [Der DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
