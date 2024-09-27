---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
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
eines `Boolean`-Objekts oder eines literalen `Boolean` als Boolean-Datentyp zurück.

Diese Methode wird normalerweise intern von JavaScript aufgerufen und nicht explizit im Code.

## Beispiele

### Verwendung von `valueOf()`

```js
x = new Boolean();
myVar = x.valueOf(); // assigns false to myVar
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
