---
title: "Fehler: columnNumber"
short-title: columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

Die **`columnNumber`** Daten-Eigenschaft einer {{jsxref("Error")}}-Instanz enthält die Spaltennummer in der Zeile der Datei, die diesen Fehler verursacht hat.

## Wert

Eine positive Ganzzahl.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
