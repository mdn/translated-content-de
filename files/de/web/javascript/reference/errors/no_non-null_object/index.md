---
title: 'TypeError: "x" ist kein nicht-null-Objekt'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "ist kein nicht-null-Objekt" tritt auf, wenn an einer Stelle ein Objekt erwartet wird und nicht bereitgestellt wurde. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist kein Objekt und funktioniert nicht.

## Meldung

```plain
TypeError: Property description must be an object: x (V8-based)
TypeError: Property descriptor must be an object, got "x" (Firefox)
TypeError: Property description must be an object. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

An einer Stelle wird ein Objekt erwartet und es wurde nicht bereitgestellt. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist kein
Objekt und funktioniert nicht. Sie müssen in der gegebenen Situation ein korrektes Objekt bereitstellen.

## Beispiele

### Erwartet wird ein Property-Descriptor

Wenn Methoden wie {{jsxref("Object.create()")}}, {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}} verwendet werden, erwartet der optionale Deskriptor-Parameter ein Property-Descriptor-Objekt. Wenn kein Objekt bereitgestellt wird (wie nur eine Zahl), wird ein Fehler ausgelöst:

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

Ein gültiges Property-Descriptor-Objekt könnte so aussehen:

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

## Siehe auch

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
