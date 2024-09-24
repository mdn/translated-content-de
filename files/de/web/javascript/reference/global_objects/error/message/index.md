---
title: "Fehler: message"
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`message`** Daten-Eigenschaft einer {{jsxref("Error")}}-Instanz ist eine für Menschen lesbare Beschreibung des Fehlers.

## Wert

Ein String entsprechend dem Wert, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor als erstes Argument übergeben wurde.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Diese Eigenschaft enthält eine kurze Beschreibung des Fehlers, falls eine verfügbar ist oder gesetzt wurde. Die `message`-Eigenschaft wird in Verbindung mit der {{jsxref("Error/name", "name")}}-Eigenschaft verwendet, um durch die Methode {{jsxref("Error.prototype.toString()")}} eine String-Darstellung des Fehlers zu erstellen.

Standardmäßig ist die `message`-Eigenschaft ein leerer String, aber dieses Verhalten kann für eine Instanz überschrieben werden, indem eine Nachricht als erstes Argument an den {{jsxref("Error/Error", "Error")}}-Konstruktor übergeben wird.

## Beispiele

### Eine benutzerdefinierte Fehlermeldung auslösen

```js
const e = new Error("Could not parse input");
// e.message is 'Could not parse input'
throw e;
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
