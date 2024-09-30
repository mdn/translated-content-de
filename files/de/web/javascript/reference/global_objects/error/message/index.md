---
title: "Error: message"
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`message`**-Eigenschaft eines {{jsxref("Error")}}-Instanzobjekts ist eine für Menschen lesbare Beschreibung des Fehlers.

## Wert

Ein Zeichenfolgenwert, der dem Wert entspricht, der als erstes Argument an den [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor übergeben wird.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Diese Eigenschaft enthält eine kurze Beschreibung des Fehlers, falls eine verfügbar ist oder festgelegt wurde. Die `message`-Eigenschaft kombiniert mit der {{jsxref("Error/name", "name")}}-Eigenschaft wird von der Methode {{jsxref("Error.prototype.toString()")}} verwendet, um eine Zeichenfolgen-Darstellung des Fehlers zu erstellen.

Standardmäßig ist die `message`-Eigenschaft eine leere Zeichenfolge, aber dieses Verhalten kann für eine Instanz überschrieben werden, indem eine Nachricht als erstes Argument an den {{jsxref("Error/Error", "Error")}}-Konstruktor übergeben wird.

## Beispiele

### Werfen eines benutzerdefinierten Fehlers

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
