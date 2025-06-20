---
title: "Fehler: lineNumber"
short-title: lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Non-standard_Header}}

Die **`lineNumber`** Eigenschaft eines {{jsxref("Error")}}-Instanz enthält die Zeilennummer in der Datei, die diesen Fehler verursacht hat.

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

Dies ist keine standardisierte Funktion und bietet daher keine weit verbreitete Unterstützung. Siehe die Browser-Kompatibilitätstabelle unten.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
