---
title: "Error: message"
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`message`** Dateneigenschaft einer {{jsxref("Error")}}-Instanz ist eine menschenlesbare Beschreibung des Fehlers.

## Wert

Ein String, der dem Wert entspricht, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor als erstes Argument übergeben wurde.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Diese Eigenschaft enthält eine kurze Beschreibung des Fehlers, falls eine verfügbar ist oder festgelegt wurde. Die `message`-Eigenschaft in Kombination mit der {{jsxref("Error/name", "name")}}-Eigenschaft wird von der {{jsxref("Error.prototype.toString()")}}-Methode verwendet, um eine String-Darstellung des Fehlers zu erstellen.

Standardmäßig ist die `message`-Eigenschaft ein leerer String, aber dieses Verhalten kann für eine Instanz überschrieben werden, indem eine Nachricht als erstes Argument an den {{jsxref("Error/Error", "Error")}}-Konstruktor übergeben wird.

## Beispiele

### Einen benutzerdefinierten Fehler werfen

```js
const e = new Error("Could not parse input");
// e.message is 'Could not parse input'
throw e;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
