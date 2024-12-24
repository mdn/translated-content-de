---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
l10n:
  sourceCommit: 86aba12ebfdca9fb1de77afb08cc78a0c9e44d45
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Boolean")}}-Werten gibt den primitiven Wert eines
{{jsxref("Boolean")}}-Objekts zurück.

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der primitive Wert des angegebenen {{jsxref("Boolean")}}-Objekts.

## Beschreibung

Die `valueOf()`-Methode von {{jsxref("Boolean")}} gibt den primitiven Wert
eines `Boolean`-Objekts oder wörtlichen `Boolean` als Boolean-Datentyp zurück.

Diese Methode wird normalerweise intern von JavaScript aufgerufen und nicht explizit im Code.

## Beispiele

### Verwendung von `valueOf()`

```js
const x = new Boolean();
const myVar = x.valueOf(); // assigns false to myVar
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
