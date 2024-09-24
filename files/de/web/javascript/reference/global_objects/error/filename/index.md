---
title: "Fehler: fileName"
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Non-standard_Header}}

Die **`fileName`** Daten-Eigenschaft einer {{jsxref("Error")}} Instanz enthält den Pfad zur Datei, die diesen Fehler ausgelöst hat.

## Wert

Ein String.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Diese nicht-standardisierte Eigenschaft enthält den Pfad zur Datei, die diesen Fehler ausgelöst hat. Wenn sie aus einem Debugger-Kontext heraus aufgerufen wird, zum Beispiel in den Firefox Entwickler-Tools, wird "debugger eval code" zurückgegeben.

## Beispiele

### Verwendung von fileName

```js
const e = new Error("Could not parse input");
throw e;
// e.fileName könnte aussehen wie "file:///C:/example.html"
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
