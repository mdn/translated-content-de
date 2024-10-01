---
title: 'TypeError: "x" ist kein nicht-null-Objekt'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „ist kein nicht-null-Objekt“ tritt auf, wenn irgendwo ein Objekt erwartet wird und keines bereitgestellt wurde. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist kein Objekt und wird nicht funktionieren.

## Nachricht

```plain
TypeError: Property description must be an object: x (V8-based)
TypeError: Property descriptor must be an object, got "x" (Firefox)
TypeError: Property description must be an object. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Ein Objekt wird irgendwo erwartet und wurde nicht bereitgestellt. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist kein Objekt und wird nicht funktionieren. Sie müssen ein geeignetes Objekt in der gegebenen Situation bereitstellen.

## Beispiele

### Eigenschaftsdescriptor erwartet

Wenn Methoden wie {{jsxref("Object.create()")}}, {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}} verwendet werden, erwartet der optionale Descriptor-Parameter ein Eigenschaftsdescriptor-Objekt. Wenn kein Objekt bereitgestellt wird (wie zum Beispiel nur eine Zahl), wird ein Fehler ausgelöst:

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

Ein gültiges Eigenschaftsdescriptor-Objekt könnte so aussehen:

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

## Siehe auch

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
