---
title: "Error: lineNumber"
short-title: lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

Die **`lineNumber`** Daten-Eigenschaft einer {{jsxref("Error")}} Instanz enthält die Zeilennummer in der Datei, die diesen Fehler ausgelöst hat.

## Wert

Eine positive Ganzzahl.

{{js_property_attributes(1, 0, 1)}}

## Beispiele

### Verwendung von lineNumber

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### Alternatives Beispiel mit error event

```js
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); // 5
});
const e = new Error("Could not parse input");
throw e;
```

Dies ist kein standardmäßiges Feature und wird nicht weit verbreitet unterstützt. Siehe die Browser-Kompatibilitätstabelle unten.

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
