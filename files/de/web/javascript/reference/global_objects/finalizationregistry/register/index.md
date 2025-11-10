---
title: FinalizationRegistry.prototype.register()
short-title: register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: 17c7ffbf1741f892054e4d210689388d787737ae
---

Die **`register()`**-Methode von {{jsxref("FinalizationRegistry")}} Instanzen registriert einen Wert bei diesem `FinalizationRegistry`, sodass, wenn der Wert durch die Müllabfuhr gesammelt wird, der Callback des Registriers möglicherweise aufgerufen wird.

## Syntax

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameter

- `target`
  - : Der zu registrierende Zielwert.
- `heldValue`
  - : Der Wert, der dem Finalizer für dieses `target` übergeben werden soll. Dies kann nicht das `target` selbst sein, kann jedoch alles andere sein, einschließlich Funktionen und primitiver Werte.
- `unregisterToken` {{optional_inline}}
  - : Ein Token, das später mit der `unregister`-Methode verwendet werden kann, um den Zielwert zu deregistrieren. Wenn angegeben (und nicht `undefined`), muss es sich um ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) handeln. Wenn nicht angegeben, kann das Ziel nicht deregistriert werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `target` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (Objekt im Gegensatz zu Primitiven; Funktionen sind ebenfalls Objekte)
    - `target` ist derselbe wie `heldValue` (`target === heldValue`)
    - `unregisterToken` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)

## Beschreibung

Sehen Sie sich die Abschnitte [Wo möglich vermeiden](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible)
und [Anmerkungen zu Aufräum-Callbacks](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks)
auf der {{jsxref("FinalizationRegistry")}}-Seite für wichtige Hinweise an.

## Beispiele

### Verwendung von register

Das folgende Beispiel registriert den Wert, auf den von `target` verwiesen wird,
übergibt den gehaltenen Wert `"some value"` und übergibt das Ziel selbst
als Deregistrierungs-Token:

```js
registry.register(target, "some value", target);
```

Das folgende Beispiel registriert den Wert, auf den von `target` verwiesen wird,
übergibt ein anderes Objekt als gehaltenen Wert und übergibt kein Deregistrierungs-Token
(was bedeutet, dass `target` nicht deregistriert werden kann):

```js
registry.register(target, { useful: "info about target" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("FinalizationRegistry")}}
