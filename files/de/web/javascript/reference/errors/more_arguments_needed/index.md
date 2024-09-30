---
title: "TypeError: Mehr Argumente benötigt"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "mehr Argumente benötigt" tritt auf, wenn ein Fehler bei der Art des Funktionsaufrufs vorliegt. Es müssen mehr Argumente bereitgestellt werden.

## Nachricht

```plain
TypeError: Object prototype may only be an Object or null: undefined (V8-based)
TypeError: Object.create requires at least 1 argument, but only 0 were passed (Firefox)
TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed (Firefox)
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed (Firefox)
TypeError: Object prototype may only be an Object or null. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Es liegt ein Fehler bei der Art des Funktionsaufrufs vor. Es müssen mehr Argumente bereitgestellt werden.

## Beispiele

### Erforderliche Argumente nicht bereitgestellt

Die Methode {{jsxref("Object.create()")}} erfordert mindestens ein Argument und die Methode {{jsxref("Object.setPrototypeOf()")}} erfordert mindestens zwei Argumente:

```js example-bad
const obj = Object.create();
// TypeError: Object.create requires at least 1 argument, but only 0 were passed

const obj2 = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

Sie können dies beheben, indem Sie zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) als Prototyp setzen:

```js example-good
const obj = Object.create(null);

const obj2 = Object.setPrototypeOf({}, null);
```

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
