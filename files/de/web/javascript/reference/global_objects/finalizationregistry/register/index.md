---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`register()`**-Methode von {{jsxref("FinalizationRegistry")}}-Instanzen registriert einen Wert mit diesem `FinalizationRegistry`, sodass die Callback-Funktion des Registrars aufgerufen werden kann, wenn der Wert garbage-collected wird.

## Syntax

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameter

- `target`
  - : Der zu registrierende Zielwert.
- `heldValue`
  - : Der Wert, der an den Finalizer für diesen `target` übergeben wird. Dies kann nicht der `target` selbst sein, aber alles andere, einschließlich Funktionen und primitiver Datentypen.
- `unregisterToken` {{optional_inline}}
  - : Ein Token, das später mit der `unregister`-Methode verwendet werden kann, um den Zielwert abzuregistrieren. Wenn angegeben (und nicht `undefined`), muss es ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Wenn nicht angegeben, kann das Ziel nicht abregistriert werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `target` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (Objekte im Gegensatz zu Primitiven; Funktionen sind ebenfalls Objekte)
    - `target` ist identisch mit `heldValue` (`target === heldValue`)
    - `unregisterToken` ist kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)

## Beschreibung

Siehe die Abschnitte [Nach Möglichkeit vermeiden](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible)
und [Hinweise zu Bereinigungsrückrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks)
auf der {{jsxref("FinalizationRegistry")}}-Seite für wichtige Warnhinweise.

## Beispiele

### Verwendung von register

Das folgende Beispiel registriert den durch `target` referenzierten Wert,
übergibt den gehaltenen Wert `"some value"` und übergibt das Ziel selbst
als Deregistrierungstoken:

```js
registry.register(target, "some value", target);
```

Das folgende Beispiel registriert den durch `target` referenzierten Wert,
indem es ein anderes Objekt als gehaltenen Wert übergibt und kein Deregistrierungstoken übergibt
(was bedeutet, dass `target` nicht abregistriert werden kann):

```js
registry.register(target, { useful: "info about target" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("FinalizationRegistry")}}
