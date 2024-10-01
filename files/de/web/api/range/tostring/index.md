---
title: "Range: toString()-Methode"
short-title: toString()
slug: Web/API/Range/toString
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.toString()`**-Methode ist ein {{Glossary("stringifier", "Stringifier")}}, der den Text des [`Range`](/de/docs/Web/API/Range) zurückgibt.

Das Anzeigen des Inhalts eines [`Range`](/de/docs/Web/API/Range) erzeugt einen impliziten
`toString()`-Aufruf. Daher ist der Vergleich von Bereich und Text über ein Dialogfeld unwirksam.

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

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
