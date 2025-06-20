---
title: "Error: message"
short-title: message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`message`** Daten-Eigenschaft einer {{jsxref("Error")}} Instanz ist eine menschenlesbare Beschreibung des Fehlers.

## Wert

Ein String, der dem Wert entspricht, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor als erstes Argument übergeben wurde.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Diese Eigenschaft enthält eine kurze Beschreibung des Fehlers, falls eine verfügbar ist oder gesetzt wurde. Die `message`-Eigenschaft wird zusammen mit der {{jsxref("Error/name", "name")}}-Eigenschaft von der Methode {{jsxref("Error.prototype.toString()")}} verwendet, um eine String-Darstellung des Fehlers zu erstellen.

Standardmäßig ist die `message`-Eigenschaft ein leerer String, aber dieses Verhalten kann für eine Instanz überschrieben werden, indem eine Nachricht als erstes Argument des {{jsxref("Error/Error", "Error")}}-Konstruktors angegeben wird.

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
