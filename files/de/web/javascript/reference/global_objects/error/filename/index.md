---
title: "Error: fileName"
short-title: fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Non-standard_Header}}

Die **`fileName`** Daten-Eigenschaft einer {{jsxref("Error")}}-Instanz enthält den Pfad zu der Datei, die diesen Fehler ausgelöst hat.

## Wert

Ein String.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Diese nicht standardisierte Eigenschaft enthält den Pfad zu der Datei, die diesen Fehler ausgelöst hat. Wenn sie aus einem Debugger-Kontext aufgerufen wird, beispielsweise den Firefox Developer Tools, wird "debugger eval code" zurückgegeben.

## Beispiele

### Verwendung von fileName

```js
const e = new Error("Could not parse input");
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## Spezifikationen

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
