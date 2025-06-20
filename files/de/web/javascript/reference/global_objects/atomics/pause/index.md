---
title: Atomics.pause()
short-title: pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Atomics.pause()`** statische Methode bietet eine Mikrowarteschnittstelle, die der CPU andeutet, dass der Aufrufer auf den Zugriff auf eine geteilte Ressource wartet. Dadurch kann das System die für den Kern (wie Strom) oder den Thread zugewiesenen Ressourcen reduzieren, ohne den aktuellen Thread aufzugeben.

`pause()` hat kein beobachtbares Verhalten außer dem Timing. Das genaue Verhalten hängt von der CPU-Architektur und dem Betriebssystem ab. Zum Beispiel könnte es auf Intel x86 eine `pause`-Anweisung gemäß [Intels Optimierungsmanual](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html) sein. Auf bestimmten Plattformen könnte es ein No-op sein.

## Syntax

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### Parameter

- `durationHint` {{optional_inline}}
  - : Ein Integer, den eine Implementierung verwenden kann, um zu bestimmen, wie lange gewartet wird. Für einen Wert `n + 1` wartet eine Implementierung mindestens so lange, wie es für einen gegebenen Wert `n` der Fall ist. Die genaue Zahl hat keine physikalische Bedeutung. Es kann eine interne Obergrenze für die maximale Wartezeit in der Größenordnung von Zehn- bis Hunderten von Nanosekunden geben. Dies kann verwendet werden, um eine [Backoff-Strategie](#backoff-strategien) zu implementieren, indem der übergebene `durationHint` erhöht wird. Es gibt keine Garantie, dass eine Implementierung diesen Hinweis verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `durationHint` kein Integer oder `undefined` ist.

## Beispiele

### Verwendung von Atomics.pause()

Ein Aufruf von {{jsxref("Atomics.wait()")}} oder {{jsxref("Atomics.waitAsync()")}}, um auf den Zugriff auf gemeinsamen Speicher zu warten, führt dazu, dass der Thread vom Kern heraus- und dann wieder hereingeplant wird, nachdem das Warten beendet ist. Dies ist effizient in Zeiten hoher Auslastung, wenn der Zugriff auf den gemeinsamen Speicher einige Zeit in Anspruch nehmen könnte. Wenn die Auslastung gering ist, ist es oft effizienter, die Sperre abzufragen, ohne den Thread aufzugeben: Dies wird als [Busy Waiting](https://en.wikipedia.org/wiki/Busy_waiting) oder [Spinlocking](https://en.wikipedia.org/wiki/Spinlock) bezeichnet. Die `pause()`-Methode ermöglicht es Ihnen, während des Wartens effizienter spinlocken, indem sie der CPU einen Hinweis darauf gibt, was der Thread tut, und damit seinen geringen Ressourcenbedarf.

Um beide Bedingungen zu berücksichtigen, ist ein gebräuchlicher Ansatz, zuerst zu spinlocken in der Hoffnung, dass die Auslastung gering ist, und dann zu warten, wenn die Sperre nach kurzer Zeit nicht erlangt wird. Wenn wir die Sperre bereits durch Spinlocking erworben haben, wird der `wait()`-Aufruf ein No-op sein.

Das untenstehende Beispiel zeigt, wie dieser Ansatz mit `Atomics.pause()` und `Atomics.wait()` verwendet werden kann.

> [!WARNING]
> Spinlocking auf dem Hauptthread wird nicht empfohlen, da es die gesamte Seite einfrieren lässt. Im Allgemeinen, es sei denn, sie wird sehr sorgfältig gestaltet, sind Spinlocks möglicherweise nicht tatsächlich leistungsfähiger als ein reguläres Warten.

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

Der `durationHint`-Parameter kann verwendet werden, um Backoff-Strategien zu implementieren. Beispielsweise kann ein Thread mit einem kleinen Hinweis beginnen und diesen bei jedem Durchlauf exponentiell erhöhen. Dies ist vorzuziehen, anstatt `pause()` viele Male aufzurufen, da in un-JITed Code die Funktionsaufrufe selbst einen hohen Overhead haben.

> [!NOTE]
> Implementierungen verwenden möglicherweise `durationHint` überhaupt nicht und warten immer für eine konstante Zeit.

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
