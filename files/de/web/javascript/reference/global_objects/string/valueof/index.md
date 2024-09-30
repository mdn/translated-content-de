---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String-Wert zurück.

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den primitiven Wert eines gegebenen {{jsxref("String")}}-Objekts darstellt.

## Beschreibung

Die `valueOf()`-Methode von {{jsxref("String")}} gibt den primitiven Wert eines {{jsxref("String")}}-Objekts als String-Datentyp zurück. Dieser Wert ist äquivalent zu {{jsxref("String.prototype.toString()")}}.

Diese Methode wird normalerweise intern von JavaScript aufgerufen und nicht explizit im Code.

## Beispiele

### Verwendung von `valueOf()`

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
