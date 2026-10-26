---
title: DisposableStack
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`DisposableStack`**-Objekt repräsentiert einen Stapel von [Disposer-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/using), die ausgeführt werden, wenn der Stapel selbst freigegeben wird. Die Disposer-Funktionen werden in umgekehrter Reihenfolge ihrer Registrierung ausgeführt. Dabei ist eine zuverlässige Fehlerbehandlung gewährleistet. Ein Aufruf der Methode `move()` überträgt die Verantwortung für den Aufruf der aktuell registrierten Disposer-Funktionen auf einen neuen `DisposableStack` und verhindert, dass weitere Disposer-Funktionen registriert werden.

## Beschreibung

Ein `DisposableStack` ist hinsichtlich seiner Schnittstelle nicht genau genommen ein „Stapel“. Er bietet mehrere Methoden, um Disposer-Funktionen hinzuzufügen, aber keine Möglichkeit, eine einzelne Disposer-Funktion zu entfernen. Stattdessen werden _alle_ Disposer-Funktionen nacheinander entfernt und ausgeführt, wenn der Stapel freigegeben wird.

Sie registrieren [freizugebende Ressourcen](/de/docs/Web/JavaScript/Guide/Resource_management) beim `DisposableStack` mithilfe seiner Methoden {{jsxref("DisposableStack/use", "use()")}}, {{jsxref("DisposableStack/adopt", "adopt()")}} oder {{jsxref("DisposableStack/defer", "defer()")}}.

```js
using disposer = new DisposableStack();
const reader = disposer.use(stream.getReader());
```

Wenn `disposer` anschließend seinen Gültigkeitsbereich verlässt, werden alle bei ihm registrierten Ressourcen in umgekehrter Reihenfolge ihrer Registrierung freigegeben, sofern sie nicht mit `move()` übertragen wurden.

Es empfiehlt sich, den Ausdruck zum Erwerb der Ressource _nicht_ in eine separate Anweisung auszulagern, unabhängig davon, wie lang der Ausdruck ist. Sie sollten den Aufruf von `use()` oder `adopt()` immer um den Ausdruck zum Erwerb der Ressource legen, damit die Ressource sofort beim Stapel registriert wird.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

Funktional sind diese beiden Codeausschnitte gleichwertig. Der erste ist jedoch weniger fehleranfällig, da die Ressource in einer einzigen Zeile deklariert und registriert wird. Wenn jemand zwischen der zweiten und dritten Zeile des zweiten Codeausschnitts weiteren Code einfügt, könnte ein Fehler auftreten und die Ressource nicht freigegeben werden.

## Konstruktor

- {{jsxref("DisposableStack/DisposableStack", "DisposableStack()")}}
  - : Erstellt ein neues `DisposableStack`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `DisposableStack.prototype` definiert und werden von allen `DisposableStack`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "DisposableStack.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `DisposableStack`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("DisposableStack/DisposableStack", "DisposableStack")}}.
- {{jsxref("DisposableStack.prototype.disposed")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `DisposableStack` freigegeben wurde, andernfalls `false`.
- `DisposableStack.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"DisposableStack"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("DisposableStack.prototype.adopt()")}}
  - : Registriert einen Wert, der das Disposable-Protokoll nicht implementiert, mithilfe einer benutzerdefinierten Disposer-Funktion beim Stapel.
- {{jsxref("DisposableStack.prototype.defer()")}}
  - : Nimmt eine Callback-Funktion entgegen, die bei der Freigabe des Stapels aufgerufen wird.
- {{jsxref("DisposableStack.prototype.dispose()")}}
  - : Gibt diesen Stapel frei, indem alle bei ihm registrierten Disposer-Funktionen in umgekehrter Reihenfolge ihrer Registrierung aufgerufen werden.
- {{jsxref("DisposableStack.prototype.move()")}}
  - : Erstellt eine neue `DisposableStack`-Instanz mit denselben Disposer-Funktionen wie dieser Stapel und markiert anschließend diesen Stapel als freigegeben, ohne Disposer-Funktionen aufzurufen.
- {{jsxref("DisposableStack.prototype.use()")}}
  - : Registriert einen Wert, der das Disposable-Protokoll implementiert, beim Stapel.
- [`DisposableStack.prototype[Symbol.dispose]`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
  - : Ein Alias für die Methode `dispose()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `DisposableStack` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("AsyncDisposableStack")}}
