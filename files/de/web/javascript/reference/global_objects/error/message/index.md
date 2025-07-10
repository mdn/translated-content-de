---
title: "Fehler: message"
short-title: message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`message`** Dateneigenschaft einer {{jsxref("Error")}}-Instanz ist eine menschenlesbare Beschreibung des Fehlers.

## Wert

Ein String, der dem Wert entspricht, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor als erstes Argument übergeben wurde.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Diese Eigenschaft enthält eine kurze Beschreibung des Fehlers, falls eine verfügbar ist oder festgelegt wurde. Die `message`-Eigenschaft wird in Kombination mit der {{jsxref("Error/name", "name")}}-Eigenschaft von der {{jsxref("Error.prototype.toString()")}}-Methode verwendet, um eine Zeichenkettenrepräsentation des Errors zu erstellen.

Standardmäßig ist die `message`-Eigenschaft ein leerer String, aber dieses Verhalten kann für eine Instanz überschrieben werden, indem beim Konstruktor {{jsxref("Error/Error", "Error")}} eine Nachricht als erstes Argument angegeben wird.

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
