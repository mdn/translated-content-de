---
title: AsyncDisposableStack
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`AsyncDisposableStack`**-Objekt stellt einen Stapel von [asynchronen Disposern](/de/docs/Web/JavaScript/Reference/Statements/await_using) dar, die ausgeführt werden, wenn der Stapel selbst freigegeben wird. Disposer-Funktionen werden in umgekehrter Reihenfolge ihrer Registrierung ausgeführt, wobei eine zuverlässige Fehlerbehandlung gewährleistet ist. Ein Aufruf der Methode `move()` überträgt die Verantwortung für den Aufruf der aktuell registrierten Disposer auf einen neuen `AsyncDisposableStack` und verhindert die Registrierung weiterer Disposer.

Allgemeine Informationen zur Verwendung von Disposable Stacks finden Sie unter {{jsxref("DisposableStack")}}.

## Konstruktor

- {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack()")}}
  - : Erstellt ein neues `AsyncDisposableStack`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `AsyncDisposableStack.prototype` definiert und werden von allen `AsyncDisposableStack`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "AsyncDisposableStack.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncDisposableStack`-Instanzen ist der Anfangswert der {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack")}}-Konstruktor.
- {{jsxref("AsyncDisposableStack.prototype.disposed")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `AsyncDisposableStack` freigegeben wurde, andernfalls `false`.
- `AsyncDisposableStack.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"AsyncDisposableStack"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
  - : Registriert einen Wert, der das asynchrone Freigabeprotokoll nicht implementiert, mithilfe einer benutzerdefinierten Disposer-Funktion beim Stapel.
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
  - : Gibt diesen Stapel frei, indem alle bei ihm registrierten Disposer in umgekehrter Reihenfolge ihrer Registrierung aufgerufen werden.
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
  - : Nimmt eine Callback-Funktion entgegen, die aufgerufen wird, wenn der Stapel freigegeben wird.
- {{jsxref("AsyncDisposableStack.prototype.move()")}}
  - : Erstellt eine neue `AsyncDisposableStack`-Instanz, die dieselben Disposer wie dieser Stapel enthält, und markiert diesen Stapel anschließend als freigegeben, ohne Disposer aufzurufen.
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
  - : Registriert einen Wert beim Stapel, der das asynchrone Freigabeprotokoll implementiert.
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
  - : Ein Alias für die Methode `disposeAsync()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `AsyncDisposableStack` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
