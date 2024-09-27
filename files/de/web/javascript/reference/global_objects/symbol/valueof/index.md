---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`valueOf()`** Methode von {{jsxref("Symbol")}}-Werten gibt diesen Symbolwert zurück.

{{EmbedInteractiveExample("pages/js/symbol-prototype-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der primitive Wert des angegebenen {{jsxref("Symbol")}}-Objekts.

## Beschreibung

Die `valueOf()`-Methode von {{jsxref("Symbol")}} gibt den primitiven Wert eines Symbolobjekts als Symbol-Datentyp zurück.

JavaScript ruft die `valueOf()`-Methode auf, um ein Objekt in einen primitiven Wert umzuwandeln. Es ist selten notwendig, die `valueOf()`-Methode selbst aufzurufen; JavaScript ruft sie automatisch auf, wenn ein Objekt auftritt, bei dem ein primitiver Wert erwartet wird.

## Beispiele

### Verwendung von valueOf()

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
