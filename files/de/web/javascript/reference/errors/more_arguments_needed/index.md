---
title: "TypeError: Es werden mehr Argumente benötigt"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "es werden mehr Argumente benötigt" tritt auf, wenn es ein Problem mit dem Aufruf einer Funktion gibt. Es müssen mehr Argumente bereitgestellt werden.

## Nachricht

```plain
TypeError: Object prototype may only be an Object or null: undefined (V8-based)
TypeError: Object.create requires at least 1 argument, but only 0 were passed (Firefox)
TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed (Firefox)
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed (Firefox)
TypeError: Object prototype may only be an Object or null. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Es gibt ein Problem mit dem Aufruf einer Funktion. Es müssen mehr Argumente bereitgestellt werden.

## Beispiele

### Erforderliche Argumente nicht bereitgestellt

Die Methode {{jsxref("Object.create()")}} erfordert mindestens ein Argument und die Methode {{jsxref("Object.setPrototypeOf()")}} erfordert mindestens zwei Argumente:

```js example-bad
const obj = Object.create();
// TypeError: Object.create requires at least 1 argument, but only 0 were passed

const obj2 = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

Sie können dies beheben, indem Sie zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) als Prototyp festlegen:

```js example-good
const obj = Object.create(null);

const obj2 = Object.setPrototypeOf({}, null);
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
