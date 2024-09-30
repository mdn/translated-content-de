---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die Methode **`register()`** von {{jsxref("FinalizationRegistry")}}-Instanzen registriert einen Wert mit diesem `FinalizationRegistry`, sodass, wenn der Wert durch den Garbage Collector entfernt wird, der Callback des Registriers möglicherweise aufgerufen wird.

## Syntax

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameter

- `target`
  - : Der zu registrierende Zielwert.
- `heldValue`
  - : Der Wert, der dem Finalizer für dieses `target` übergeben werden soll. Dies kann nicht das `target` selbst sein, kann aber alles andere sein, einschließlich Funktionen und Primitives.
- `unregisterToken` {{optional_inline}}
  - : Ein Token, das später mit der `unregister`-Methode verwendet werden kann, um den Zielwert abzumelden. Wenn angegeben (und nicht `undefined`), muss dies ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Wird es nicht angegeben, kann das Ziel nicht abgemeldet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `target` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (Objekt im Gegensatz zu Primitives; Funktionen sind ebenfalls Objekte)
    - `target` ist dasselbe wie `heldValue` (`target === heldValue`)
    - `unregisterToken` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)

## Beschreibung

Siehe die Abschnitte [Wenn möglich vermeiden](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible)
und [Hinweise zu Bereinigungs-Callbacks](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks)
auf der {{jsxref("FinalizationRegistry")}}-Seite für wichtige Vorbehalte.

## Beispiele

### Verwendung von register

Das folgende registriert den durch `target` referenzierten Wert,
übergibt den gehaltenen Wert `"some value"` und übergibt das Ziel selbst
als Abmeldungstoken:

```js
registry.register(target, "some value", target);
```

Das folgende registriert den durch `target` referenzierten Wert,
übergibt ein anderes Objekt als gehaltenen Wert und übergibt keinen Abmeldungstoken
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
