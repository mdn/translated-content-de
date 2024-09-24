---
title: "TypeError: WeakSet-Schlüssel/WeakMap-Wert 'x' muss ein Objekt oder ein nicht registriertes Symbol sein"
slug: Web/JavaScript/Reference/Errors/Key_not_weakly_held
l10n:
  sourceCommit: dad86d790d59b0f594c7bb03a948bf8e8beea378
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler „WeakSet-Schlüssel (oder WeakMap-Wert) 'x' muss ein Objekt oder ein nicht registriertes Symbol sein“ tritt auf, wenn ein Wert eines ungültigen Typs als Schlüssel in einem {{jsxref("WeakSet")}} oder als Wert in einem {{jsxref("WeakMap")}} verwendet wird.

## Meldung

```plain
TypeError: Invalid value used as weak map key (V8-based)
TypeError: WeakMap key 1 must be an object or an unregistered symbol (Firefox)
TypeError: WeakMap keys must be objects or non-registered symbols (Safari)

TypeError: Invalid value used in weak set (V8-based)
TypeError: WeakSet value 1 must be an object or an unregistered symbol (Firefox)
TypeError: WeakSet values must be objects or non-registered symbols (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was schiefgelaufen ist

{{jsxref("WeakSet")}} und {{jsxref("WeakMap")}} erfordern, dass die Schlüssel _müllsammlungsfähig_ sind. Nur Objekte und nicht registrierte Symbole (das heißt, [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die nicht von {{jsxref("Symbol.for()")}} zurückgegeben werden) sind gültig. Weitere Informationen finden Sie unter [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management#weakmaps_and_weaksets). Wenn Sie Schlüssel hinzufügen möchten, die Zeichenketten, Zahlen oder andere primitive Werte sind, sollten Sie diese stattdessen in einem regulären `Set` oder `Map` speichern.

## Beispiele

### Ungültige Fälle

```js example-bad
new WeakSet().add(1); // TypeError
new WeakMap().set(1, {}); // TypeError
new WeakSet([1]); // TypeError
new WeakMap([[1, {}]]); // TypeError
```

### Gültige Fälle

```js example-good
new WeakSet().add({}); // OK
new WeakMap().set({}, 1); // OK

new Set([1]); // OK
new Map([[1, {}]]); // OK
```

## Siehe auch

- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
- {{jsxref("Set")}}
- {{jsxref("Map")}}
