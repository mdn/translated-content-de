---
title: DisposableStack
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Das **`DisposableStack`**-Objekt repräsentiert einen Stapel von [Disposern](/de/docs/Web/JavaScript/Reference/Statements/using), die ausgeführt werden, wenn der Stapel selbst entsorgt wird. Disposer-Funktionen werden in umgekehrter Reihenfolge der Registrierung mit starken Fehlerbehandlungsgarantien ausgeführt. Wenn Sie die `move()`-Methode aufrufen, wird die Verantwortung für das Aufrufen der derzeit registrierten Disposer an einen neuen `DisposableStack` übertragen und die Registrierung weiterer Disposer verhindert.

## Beschreibung

Ein `DisposableStack` ist im Hinblick auf seine Schnittstelle nicht exakt ein "Stapel". Es gibt mehrere Methoden, um Disposer hinzuzufügen, aber es gibt keine Möglichkeit, einen einzelnen Disposer zu entfernen. Stattdessen werden _alle_ Disposer entnommen und nacheinander ausgeführt, wenn der Stapel entsorgt wird.

Sie registrieren [verfügbare Ressourcen](/de/docs/Web/JavaScript/Guide/Resource_management) beim `DisposableStack` mit dessen Methoden {{jsxref("DisposableStack/use", "use()")}}, {{jsxref("DisposableStack/adopt", "adopt()")}} oder {{jsxref("DisposableStack/defer", "defer()")}}.

```js
using disposer = new DisposableStack();
const reader = disposer.use(stream.getReader());
```

Wenn der `Disposer` dann aus dem Gültigkeitsbereich fällt, werden alle bei ihm registrierten Ressourcen in umgekehrter Reihenfolge der Registrierung entsorgt, es sei denn, sie wurden mit `move()` entfernt.

Es ist eine gute Praxis, den Ausdruck zur Ressourcenerfassung _nicht_ in eine separate Anweisung auszulagern, egal wie lang der Ausdruck ist. Sie sollten den `use()`- oder `adopt()`-Aufruf immer um den Ressourcenerfassungsausdruck wickeln, um sicherzustellen, dass die Ressource sofort beim Stapel registriert wird.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

Funktional sind diese beiden Code-Snippets gleichwertig. Das erste ist jedoch weniger fehleranfällig, da die Ressource in einer einzigen Zeile deklariert und registriert wird. Wenn jemand mehr Code zwischen die zweite und dritte Zeile des zweiten Snippets einfügt, könnte ein Fehler auftreten, der dazu führt, dass die Ressource austritt.

## Konstruktor

- {{jsxref("DisposableStack/DisposableStack", "DisposableStack()")}}
  - : Erzeugt ein neues `DisposableStack`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `DisposableStack.prototype` definiert und werden von allen `DisposableStack`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "DisposableStack.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `DisposableStack`-Instanzen ist der Anfangswert der {{jsxref("DisposableStack/DisposableStack", "DisposableStack")}}-Konstruktor.
- {{jsxref("DisposableStack.prototype.disposed")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn das `DisposableStack` entsorgt wurde, oder `false`, wenn nicht.
- `DisposableStack.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"DisposableStack"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("DisposableStack.prototype.adopt()")}}
  - : Registriert einen Wert, der das Disposable-Protokoll nicht implementiert, beim Stapel, indem eine benutzerdefinierte Disposer-Funktion bereitgestellt wird.
- {{jsxref("DisposableStack.prototype.defer()")}}
  - : Nimmt eine Callback-Funktion an, die aufgerufen wird, wenn der Stapel entsorgt wird.
- {{jsxref("DisposableStack.prototype.dispose()")}}
  - : Entsorgt diesen Stapel, indem alle bei ihm registrierten Disposer in umgekehrter Reihenfolge der Registrierung aufgerufen werden.
- {{jsxref("DisposableStack.prototype.move()")}}
  - : Erstellt eine neue `DisposableStack`-Instanz, die dieselben Disposer wie dieser Stapel enthält, und markiert dann diesen Stapel als entsorgt, ohne Disposer aufzurufen.
- {{jsxref("DisposableStack.prototype.use()")}}
  - : Registriert einen Wert, der das Disposable-Protokoll beim Stapel implementiert.
- [`DisposableStack.prototype[Symbol.dispose]`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
  - : Ein Alias für die `dispose()`-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `DisposableStack` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript Ressourcen-Management](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("AsyncDisposableStack")}}
