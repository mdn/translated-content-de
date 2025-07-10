---
title: FinalizationRegistry.prototype.register()
short-title: register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`register()`** Methode von {{jsxref("FinalizationRegistry")}} Instanzen registriert einen Wert bei diesem `FinalizationRegistry`, sodass, wenn der Wert dem Speicherbereiniger zum Opfer fällt, der Rückruf der Registry aufgerufen werden kann.

## Syntax

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameter

- `target`
  - : Der Zielwert, der registriert werden soll.
- `heldValue`
  - : Der Wert, der dem Finalisierer für dieses `target` übergeben werden soll. Dies kann nicht das `target` selbst sein, kann jedoch alles andere beinhalten, einschließlich Funktionen und primitiver Werte.
- `unregisterToken` {{optional_inline}}
  - : Ein Token, das später mit der `unregister` Methode verwendet werden kann, um den Zielwert abzumelden. Wenn angegeben (und nicht `undefined`), muss dies ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Wird es nicht angegeben, kann das Ziel nicht abgemeldet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `target` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (Objekte im Gegensatz zu primitiven Werten; Funktionen sind ebenfalls Objekte)
    - `target` ist gleich `heldValue` (`target === heldValue`)
    - `unregisterToken` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)

## Beschreibung

Siehe die Abschnitte [Vermeiden, wo möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible) und [Hinweise zu Bereinigungsrückrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks) der {{jsxref("FinalizationRegistry")}} Seite für wichtige Hinweise.

## Beispiele

### Verwendung von register

Das folgende Beispiel registriert den durch `target` referenzierten Wert,
indem der gehaltene Wert `"some value"` übergeben wird, und übergibt das Ziel selbst
als Abmeldungstoken:

```js
registry.register(target, "some value", target);
```

Das folgende Beispiel registriert den durch `target` referenzierten Wert,
übergibt ein anderes Objekt als den gehaltenen Wert und übergibt kein Abmeldungstoken
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
