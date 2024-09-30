---
title: "SyntaxError: Restparameter darf keinen Standardwert haben"
slug: Web/JavaScript/Reference/Errors/Rest_with_default
l10n:
  sourceCommit: 38bd4d88564b9a1539fb4d1b4ba6fa04b0a10063
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "rest parameter may not have a default" tritt auf, wenn ein [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) einen [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) hat. Da der Restparameter immer ein Array erstellt, würde der Standardwert niemals angewendet.

## Nachricht

```plain
SyntaxError: Rest parameter may not have a default initializer (V8-based)
SyntaxError: rest parameter may not have a default (Firefox)
SyntaxError: Unexpected token '='. Expected a ')' or a ',' after a parameter declaration. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) gibt einem Parameter einen Standardwert, wenn das Argument nicht übergeben wird oder als `undefined` übergeben wird. Ein [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) sammelt alle restlichen Argumente, die an die Funktion übergeben werden, und erstellt immer ein Array. Daher ergibt es keinen Sinn, einen Standardwert für einen Restparameter zu haben.

## Beispiele

### Ungültige Fälle

```js-nolint example-bad
function doSomething(...args = []) {}
```

### Gültige Fälle

```js example-good
function doSomething(...args) {
  // args is always an array
}
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
