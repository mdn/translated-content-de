---
title: "Error: columnNumber"
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Non-standard_Header}}

Die **`columnNumber`** Dateneigenschaft einer {{jsxref("Error")}}-Instanz enthält die Spaltennummer in der Zeile der Datei, die diesen Fehler ausgelöst hat.

## Wert

Eine positive ganze Zahl.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### Verwendung von columnNumber

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
