---
title: "TypeError: \"x\" ist kein nicht-null-Objekt"
slug: Web/JavaScript/Reference/Errors/No_non-null_object
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ist kein nicht-null-Objekt" tritt auf, wenn irgendwo ein Objekt erwartet wird und nicht bereitgestellt wurde. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist kein Objekt und wird nicht funktionieren.

## Meldung

```plain
TypeError: Property description must be an object: x (V8-based)
TypeError: Property descriptor must be an object, got "x" (Firefox)
TypeError: Property description must be an object. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Ein Objekt wird irgendwo erwartet, aber nicht bereitgestellt. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist kein Objekt und wird nicht funktionieren. Sie müssen in der gegebenen Situation ein korrektes Objekt bereitstellen.

## Beispiele

### Eigenschaftsbeschreibung erwartet

Wenn Methoden wie {{jsxref("Object.create()")}} oder
{{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}} verwendet werden, erwartet der optionale Deskriptor-Parameter ein Eigenschaftsdeskriptor-Objekt. Wird kein Objekt bereitgestellt (wie nur eine Zahl), wird ein Fehler ausgelöst:

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 ist kein nicht-null-Objekt

Object.defineProperty({}, "key", null);
// TypeError: null ist kein nicht-null-Objekt
```

Ein gültiges Eigenschaftsdeskriptor-Objekt könnte so aussehen:

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

## Siehe auch

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
