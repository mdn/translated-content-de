---
title: Atomics.pause()
short-title: pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Atomics.pause()`** statische Methode bietet eine Mikro-Warteschleifenprimitive, die der CPU signalisiert, dass der Aufrufer in einer Schleife wartet, während er auf den Zugriff auf eine gemeinsame Ressource wartet. Dies ermöglicht es dem System, die einem Kern (wie z.B. Strom) oder Thread zugewiesenen Ressourcen zu reduzieren, ohne den aktuellen Thread freizugeben.

`pause()` hat kein beobachtbares Verhalten außer der Zeitdauer. Das genaue Verhalten hängt von der CPU-Architektur und dem Betriebssystem ab. Beispielsweise könnte es in Intel x86 eine `pause`-Instruktion gemäß [Intels Optimierungshandbuch](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html) sein. Auf bestimmten Plattformen könnte es ein No-op sein.

## Syntax

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### Parameter

- `durationHint` {{optional_inline}}
  - : Ein Integer, den eine Implementierung verwenden kann, um zu bestimmen, wie lange gewartet werden soll. Für einen Wert von `n + 1` wartet eine Implementierung mindestens so lange, wie für einen gegebenen Wert `n`. Die genaue Zahl hat keine physikalische Bedeutung. Es könnte eine interne Obergrenze für die maximale Wartezeit im Bereich von Dutzenden bis Hunderten von Nanosekunden geben. Dies kann verwendet werden, um eine [Backoff-Strategie](#backoff-strategien) zu implementieren, indem man den übergebenen `durationHint` erhöht. Es gibt keine Garantie, dass eine Implementierung diesen Hinweis verwendet.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `durationHint` kein Integer oder `undefined` ist.

## Beispiele

### Verwendung von Atomics.pause()

Der Aufruf von {{jsxref("Atomics.wait()")}} oder {{jsxref("Atomics.waitAsync()")}}, um auf den Zugriff auf gemeinsamen Speicher zu warten, führt dazu, dass der Thread aus dem Kern ausgelagert und nach der Wartezeit wieder eingelagert wird. Dies ist effizient bei hoher Konkurrenz, wenn der Zugriff auf den gemeinsamen Speicher einige Zeit in Anspruch nehmen könnte. Bei niedriger Konkurrenz ist es oft effizienter, die Sperre abzufragen, ohne den Thread freizugeben: Dieser Ansatz ist bekannt als [Busy Waiting](https://en.wikipedia.org/wiki/Busy_waiting) oder [Spinlocking](https://en.wikipedia.org/wiki/Spinlock). Die Methode `pause()` ermöglicht es Ihnen, effizienter zu spinlocken, indem sie der CPU einen Hinweis darauf gibt, was der Thread tut und daher seinen geringen Ressourcenbedarf signalisiert.

Um beide Bedingungen abzudecken, ist ein gebräuchlicher Ansatz zuerst zu spinlocken in der Hoffnung, dass die Konkurrenz gering ist, und dann zu warten, wenn die Sperre nach kurzer Zeit nicht erlangt wird. Wenn die Sperre bereits durch Spinlocking erlangt wurde, wird der `wait()`-Aufruf eine No-op sein.

Das untenstehende Beispiel zeigt, wie dieser Ansatz mit `Atomics.pause()` und `Atomics.wait()` verwendet werden kann.

> [!WARNING]
> Spinlocking im Hauptthread wird nicht empfohlen, da es die gesamte Seite einfriert. Allgemein, es sei denn, es ist sehr sorgfältig gestaltet, könnten Spinlocks nicht tatsächlich leistungsfähiger sein als eine reguläre Wartezeit.

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

Der `durationHint` Parameter kann verwendet werden, um Backoff-Strategien zu implementieren. Beispielsweise kann ein Thread mit einem kleinen Hinweis beginnen und diesen bei jeder Iteration exponentiell erhöhen. Dies ist vorzuziehen, anstelle viele Male `pause()` aufzurufen, da in nicht-jitierten Code Funktionsaufrufe selbst einen hohen Overhead haben.

> [!NOTE]
> Implementierungen könnten `durationHint` tatsächlich überhaupt nicht verwenden und immer für eine konstante Zeit warten.

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
