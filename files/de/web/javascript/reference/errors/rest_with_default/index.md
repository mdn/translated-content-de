---
title: "SyntaxError: Rest-Parameter darf keinen Standardwert haben"
slug: Web/JavaScript/Reference/Errors/Rest_with_default
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "rest parameter may not have a default" tritt auf, wenn ein [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) einen [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) hat. Da der Rest-Parameter immer ein Array erstellt, würde der Standardwert niemals zutreffen.

## Nachricht

```plain
SyntaxError: Rest parameter may not have a default initializer (V8-based)
SyntaxError: rest parameter may not have a default (Firefox)
SyntaxError: Unexpected token '='. Expected a ')' or a ',' after a parameter declaration. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein [Standard-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) gibt einem Parameter einen Standardwert, wenn das Argument nicht übergeben oder als `undefined` übergeben wird. Ein [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) sammelt alle verbleibenden Argumente, die an die Funktion übergeben werden, und erstellt immer ein Array. Daher ergibt es keinen Sinn, einen Standardwert für einen Rest-Parameter zu haben.

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
- [Standard-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
