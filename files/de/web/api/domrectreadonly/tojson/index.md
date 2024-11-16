---
title: "DOMRectReadOnly: Methode toJSON()"
short-title: toJSON()
slug: Web/API/DOMRectReadOnly/toJSON
l10n:
  sourceCommit: 9f09d944bca13b61293b4cc93cb52011c6134b0d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode `toJSON()` des [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) gibt eine {{Glossary("JSON", "JSON")}}-Darstellung des `DOMRectReadOnly`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften auf die Werte des `DOMRectReadOnly` gesetzt sind, auf dem die Methode aufgerufen wurde.

## Beispiele

Dieses Beispiel erstellt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das ein Rechteck an der Position `(10, 20)` mit einer Breite von `100` und einer Höhe von `50` darstellt. Dann wird `toJSON()` aufgerufen, um eine JSON-Darstellung des Rechtecks zu erhalten.

```js
const rect = new DOMRectReadOnly(10, 20, 100, 50);

const rectJSON = rect.toJSON();
console.log(rectJSON);
// Output: { x: 10, y: 20, width: 100, height: 50, top: 20, right: 110, bottom: 70, left: 10 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
