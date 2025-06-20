---
title: FinalizationRegistry.prototype.register()
short-title: register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`register()`** Methode von {{jsxref("FinalizationRegistry")}} Instanzen registriert einen Wert mit dieser `FinalizationRegistry`, sodass, falls der Wert vom Garbage Collector entfernt wird, der Rückruf der Registry möglicherweise aufgerufen wird.

## Syntax

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameter

- `target`
  - : Der Zielwert, der registriert werden soll.
- `heldValue`
  - : Der Wert, der an den Finalizer für dieses `target` übergeben wird. Dies kann nicht das `target` selbst sein, kann aber alles andere sein, einschließlich Funktionen und primitiver Werte.
- `unregisterToken` {{optional_inline}}
  - : Ein Token, das später mit der `unregister`-Methode verwendet werden kann, um den Zielwert abzumelden. Falls angegeben (und nicht `undefined`), muss dies ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Wird es nicht angegeben, kann das Ziel nicht abgemeldet werden.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `target` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (Objekt im Gegensatz zu primitiven Werten; Funktionen sind ebenfalls Objekte)
    - `target` ist identisch mit `heldValue` (`target === heldValue`)
    - `unregisterToken` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)

## Beschreibung

Siehe die Abschnitte [Wenn möglich vermeiden](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible)
und [Hinweise zu Bereinigungsrückrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks)
auf der {{jsxref("FinalizationRegistry")}} Seite für wichtige Hinweise.

## Beispiele

### Verwendung von register

Das folgende Beispiel registriert den Wert, der von `target` referenziert wird, und übergibt den gehaltenen Wert `"some value"` sowie das Ziel selbst als Abmelde-Token:

```js
registry.register(target, "some value", target);
```

Das folgende Beispiel registriert den Wert, der von `target` referenziert wird, übergibt ein anderes Objekt als gehaltenen Wert und gibt kein Abmelde-Token an (was bedeutet, dass `target` nicht abgemeldet werden kann):

```js
registry.register(target, { useful: "info about target" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("FinalizationRegistry")}}
