---
title: AsyncDisposableStack
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Das **`AsyncDisposableStack`**-Objekt repräsentiert einen Stapel von [asynchronen Disposern](/de/docs/Web/JavaScript/Reference/Statements/await_using), die ausgeführt werden sollen, wenn der Stapel selbst verworfen wird. Disposer-Funktionen werden in umgekehrter Reihenfolge der Registrierung ausgeführt, mit starken Garantien für das Fehlerhandling. Wenn die `move()`-Methode aufgerufen wird, wird die Verantwortung für das Aufrufen der derzeit registrierten Disposer auf einen neuen `AsyncDisposableStack` übertragen und die Registrierung weiterer Disposer verhindert.

Siehe {{jsxref("DisposableStack")}} für allgemeine Informationen zur Verwendung von Disposable-Stacks.

## Konstruktor

- {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack()")}}
  - : Erstellt ein neues `AsyncDisposableStack`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `AsyncDisposableStack.prototype` definiert und werden von allen Instanzen von `AsyncDisposableStack` geteilt.

- {{jsxref("Object/constructor", "AsyncDisposableStack.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncDisposableStack`-Instanzen ist der Anfangswert der {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack")}}-Konstruktor.
- {{jsxref("AsyncDisposableStack.prototype.disposed")}}
  - : Schreibt nicht. Gibt `true` zurück, wenn das `AsyncDisposableStack` verworfen wurde, oder `false`, wenn nicht.
- `AsyncDisposableStack.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"AsyncDisposableStack"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
  - : Registriert einen Wert, der das asynchrone Disposable-Protokoll nicht implementiert, indem eine benutzerdefinierte Disposer-Funktion bereitgestellt wird.
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
  - : Verwirft diesen Stapel, indem alle ihm in umgekehrter Registrierungsreihenfolge zugeordneten Disposer aufgerufen werden.
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
  - : Nimmt eine Callback-Funktion an, die aufgerufen wird, wenn der Stapel verworfen wird.
- {{jsxref("AsyncDisposableStack.prototype.move()")}}
  - : Erstellt eine neue `AsyncDisposableStack`-Instanz, die dieselben Disposer wie dieser Stapel enthält, und markiert dann diesen Stapel als verworfen, ohne Disposer aufzurufen.
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
  - : Registriert einen Wert, der das asynchrone Disposable-Protokoll auf dem Stapel implementiert.
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
  - : Ein Alias für die `disposeAsync()`-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `AsyncDisposableStack` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
