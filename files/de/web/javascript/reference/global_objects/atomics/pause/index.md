---
title: Atomics.pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: 6e262347fe986e8cb6b217e91e7a48d092e37bb3
---

{{JSRef}}

Die statische Methode **`Atomics.pause()`** bietet eine Mikro-Wartungsprimitive, die der CPU signalisiert, dass der Aufrufer wartet, während er auf den Zugriff auf eine gemeinsam genutzte Ressource wartet. Dies ermöglicht es dem System, die dem Kern (wie z. B. Stromversorgung) oder Thread zugewiesenen Ressourcen zu reduzieren, ohne den aktuellen Thread abzugeben.

`pause()` hat kein beobachtbares Verhalten außer der Zeitmessung. Das genaue Verhalten hängt von der CPU-Architektur und dem Betriebssystem ab. Zum Beispiel könnte es bei Intel x86 ein `pause`-Befehl gemäß [Intels Optimierungshandbuch](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html) sein. Auf bestimmten Plattformen könnte es eine No-Op sein.

## Syntax

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### Parameter

- `durationHint` {{optional_inline}}
  - : Eine Ganzzahl, die eine Implementierung verwenden kann, um zu bestimmen, wie lange gewartet werden soll. Bei einem Wert von `n + 1` wartet eine Implementierung mindestens so lange wie bei einem gegebenen Wert `n`. Die genaue Zahl hat keine physikalische Bedeutung. Es kann eine interne Obergrenze für die maximale Pausendauer in der Größenordnung von Dutzenden bis Hunderten von Nanosekunden geben. Dies kann verwendet werden, um eine [Backoff-Strategie](#backoff-strategien) durch Erhöhen des übergebenen `durationHint` zu implementieren. Es gibt keine Garantie, dass eine Implementierung diesen Hinweis verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `durationHint` keine Ganzzahl oder `undefined` ist.

## Beispiele

### Verwendung von Atomics.pause()

Der Aufruf von {{jsxref("Atomics.wait()")}} oder {{jsxref("Atomics.waitAsync()")}}, um auf den Zugriff auf den gemeinsam genutzten Speicher zu warten, führt dazu, dass der Thread aus dem Kern heraus- und nach der Wartezeit wieder eingeplant wird. Dies ist effizient bei hoher Konkurrenz, wenn der Zugang zum gemeinsamen Speicher einige Zeit dauern könnte. Bei geringer Konkurrenz ist es oft effizienter, die Sperre zu überwachen, ohne den Thread abzugeben: dieser Ansatz wird als [Busy Waiting](https://en.wikipedia.org/wiki/Busy_waiting) oder [Spinlocking](https://en.wikipedia.org/wiki/Spinlock) bezeichnet. Die Methode `pause()` ermöglicht es Ihnen, effizienter zu spinlocken, indem sie der CPU einen Hinweis darauf gibt, was der Thread tut, und daher einen geringen Ressourcenbedarf hat.

Um beiden Bedingungen gerecht zu werden, besteht ein häufiger Ansatz darin, zuerst zu spinlocken, in der Hoffnung, dass die Konkurrenz gering ist, und dann zu warten, wenn die Sperre nach kurzer Zeit nicht erlangt wird. Wenn wir die Sperre bereits durch Spinlocking erlangt haben, ist der `wait()`-Aufruf eine No-Op.

Das folgende Beispiel zeigt, wie dieser Ansatz mit `Atomics.pause()` und `Atomics.wait()` verwendet werden kann.

> [!WARNING]
> Die Verwendung von Spinlocking im Hauptthread wird nicht empfohlen, da dies die gesamte Seite einfrieren würde. Im Allgemeinen, sofern nicht sehr sorgfältig entworfen, sind Spinlocks möglicherweise nicht tatsächlich performanter als ein reguläres Warten.

```js
// Imagine another thread also has access to this shared memory
const sab = new SharedArrayBuffer(1024);
const i32 = new Int32Array(sab);

// Fast path: spin the CPU for a short while
let spin = 0;
do {
  if (Atomics.compareExchange(i32, 0, 0, 1) === 0) {
    break;
  }
  Atomics.pause();
  spin++;
} while (spin < 10);

// Slow path: wait for the lock
// This can only be called in a worker thread,
// because the main thread cannot be blocked
Atomics.wait(i32, 0, 1);
```

### Backoff-Strategien

Der Parameter `durationHint` kann verwendet werden, um Backoff-Strategien zu implementieren. Zum Beispiel kann ein Thread mit einem kleinen Hinweis beginnen und ihn bei jeder Iteration exponentiell erhöhen. Dies ist bevorzugt gegenüber dem mehrmaligen Aufruf von `pause()`, da in nicht-JITed Code Funktionaufrufe selbst einen hohen Overhead haben.

> [!NOTE]
> Implementierungen könnten `durationHint` möglicherweise überhaupt nicht verwenden und immer für eine konstante Zeit warten.

```js
// Exponential backoff
for (let hint = 1; hint < 1000; hint *= 2) {
  Atomics.pause(hint);
}

// Linear backoff
for (let hint = 1; hint < 100; hint++) {
  Atomics.pause(hint);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}
