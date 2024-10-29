---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{JSRef}}

Die **`register()`**-Methode von {{jsxref("FinalizationRegistry")}}-Instanzen registriert einen Wert bei diesem `FinalizationRegistry`, sodass, wenn der Wert vom Garbage Collector gesammelt wird, der Rückruf des Registrierers möglicherweise aufgerufen wird.

## Syntax

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameter

- `target`
  - : Der Zielwert, der registriert werden soll.
- `heldValue`
  - : Der Wert, der an den Finalizer für dieses `target` übergeben werden soll. Dies kann nicht das `target` selbst sein, kann aber alles andere sein, einschließlich Funktionen und Primitiven.
- `unregisterToken` {{optional_inline}}
  - : Ein Token, das später mit der `unregister`-Methode verwendet werden kann, um den Zielwert abzumelden. Wenn angegeben (und nicht `undefined`), muss dies ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Wenn nicht angegeben, kann das Ziel nicht abgemeldet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `target` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (Objekte im Gegensatz zu Primitiven; Funktionen sind ebenfalls Objekte)
    - `target` ist das gleiche wie `heldValue` (`target === heldValue`)
    - `unregisterToken` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)

## Beschreibung

Siehe die Abschnitte [Nach Möglichkeit vermeiden](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible)
und [Hinweise zu Bereinigung-Rückrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks)
auf der {{jsxref("FinalizationRegistry")}}-Seite für wichtige Hinweise.

## Beispiele

### Verwendung von register

Das Folgende registriert den Wert, auf den `target` verweist,
und übergibt den gehaltenen Wert `"some value"` sowie das Ziel selbst
als Abmeldungstoken:

```js
registry.register(target, "some value", target);
```

Das Folgende registriert den Wert, auf den `target` verweist,
übergibt ein anderes Objekt als gehaltenen Wert und übergibt kein Abmeldungstoken
(was bedeutet, dass `target` nicht abgemeldet werden kann):

```js
registry.register(target, { useful: "info about target" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("FinalizationRegistry")}}
