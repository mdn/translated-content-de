---
title: "Error: lineNumber"
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Non-standard_Header}}

Die **`lineNumber`** Daten-Eigenschaft einer {{jsxref("Error")}}-Instanz enthält die Zeilennummer in der Datei, die diesen Fehler verursacht hat.

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

### Alternatives Beispiel mit dem Fehlerereignis

```js
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); // 5
});
const e = new Error("Could not parse input");
throw e;
```

Dies ist keine standardisierte Funktion und verfügt über keine breite Unterstützung. Siehe die Browser-Kompatibilitätstabelle unten.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
