---
title: "TypeError: WeakSet key/WeakMap value 'x' muss ein Objekt oder ein nicht registriertes Symbol sein"
slug: Web/JavaScript/Reference/Errors/Key_not_weakly_held
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "WeakSet key (oder WeakMap-Wert) 'x' muss ein Objekt oder ein nicht registriertes Symbol sein" tritt auf, wenn ein Wert vom ungültigen Typ als Schlüssel in einem {{jsxref("WeakSet")}} oder als Wert in einem {{jsxref("WeakMap")}} verwendet wird.

## Nachricht

```plain
TypeError: Invalid value used as weak map key (V8-based)
TypeError: WeakMap key 1 must be an object or an unregistered symbol (Firefox)
TypeError: WeakMap keys must be objects or non-registered symbols (Safari)

TypeError: Invalid value used in weak set (V8-based)
TypeError: WeakSet value 1 must be an object or an unregistered symbol (Firefox)
TypeError: WeakSet values must be objects or non-registered symbols (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was schiefgelaufen ist

{{jsxref("WeakSet")}} und {{jsxref("WeakMap")}} erfordern, dass die Schlüssel _garbage collectable_ sind. Nur Objekte und nicht registrierte Symbole (das heißt, [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die nicht von {{jsxref("Symbol.for()")}} zurückgegeben werden) sind gültig. Für weiterführende Informationen siehe [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management#weakmaps_and_weaksets). Wenn Sie Schlüssel hinzufügen möchten, die Zeichenfolgen, Zahlen oder andere primitive Werte sind, sollten Sie diese stattdessen in einem regulären `Set` oder `Map` speichern.

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

- [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
- {{jsxref("Set")}}
- {{jsxref("Map")}}
