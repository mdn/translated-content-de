---
title: Atomics.pause()
short-title: pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die **`Atomics.pause()`** statische Methode bietet eine Mikro-Warte-Primitiv, die der CPU andeutet, dass der aufrufende Prozess in einer Warteschleife ist, während er auf den Zugriff auf eine gemeinsame Ressource wartet. Dadurch kann das System die dem Kern oder Thread zugewiesenen Ressourcen (wie Energie) reduzieren, ohne den aktuellen Thread abzugeben.

`pause()` hat außer dem Timing kein beobachtbares Verhalten. Das genaue Verhalten hängt von der CPU-Architektur und dem Betriebssystem ab. Zum Beispiel kann es bei Intel x86 eine `pause`-Anweisung sein, gemäß [Intels Optimierungshandbuch](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html). Es könnte auf bestimmten Plattformen ein No-Operation sein.

## Syntax

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### Parameter

- `durationHint` {{optional_inline}}
  - : Ein Integer, den eine Implementierung verwenden kann, um zu bestimmen, wie lange gewartet wird. Bei einem Wert von `n + 1` wartet eine Implementierung mindestens so lange wie bei einem gegebenen Wert `n`. Die genaue Zahl hat keine physikalische Bedeutung. Es kann eine interne obere Grenze für die maximale Pausenzeit im Bereich von Dutzenden bis Hunderten von Nanosekunden geben. Dies kann verwendet werden, um eine [Backoff-Strategie](#backoff-strategien) zu implementieren, indem der `durationHint` erhöht wird. Es gibt keine Garantie, dass eine Implementierung diesen Hinweis verwenden wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `durationHint` weder ein Integer noch `undefined` ist.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt aus der Konsole oder von einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.pause()

Das Aufrufen von {{jsxref("Atomics.wait()")}} oder {{jsxref("Atomics.waitAsync()")}}, um auf den Zugriff auf gemeinsamen Speicher zu warten, führt dazu, dass der Thread aus dem Kern heraus- und nach der Wartezeit wieder eingeplant wird. Dies ist effizient bei hoher Konkurrenz, wenn der Zugriff auf den gemeinsamen Speicher länger dauern könnte. Bei niedriger Konkurrenz ist es oft effizienter, die Sperre abzufragen, ohne den Thread abzugeben: Dieser Ansatz ist bekannt als [busy waiting](https://en.wikipedia.org/wiki/Busy_waiting) oder [spinlocking](https://en.wikipedia.org/wiki/Spinlock). Die `pause()`-Methode ermöglicht es Ihnen, effizienter auf eine Sperre zu warten, indem sie der CPU Hinweise gibt, was der Thread gerade tut, und daher einen geringen Ressourcenbedarf hat.

Um beiden Bedingungen gerecht zu werden, ist es ein häufiger Ansatz, zunächst zu warten in der Hoffnung, dass die Konkurrenz niedrig ist, und dann zu warten, wenn die Sperre nicht nach kurzer Zeit erlangt wird. Wenn wir die Sperre bereits durch Spinlocking erworben haben, wird der `wait()`-Aufruf ein No-Operation sein.

Das folgende Beispiel zeigt, wie dieser Ansatz mit `Atomics.pause()` und `Atomics.wait()` verwendet werden kann.

> [!WARNING]
> Es wird nicht empfohlen, Spinlocks im Hauptthread zu verwenden, da dies die gesamte Seite einfrieren lässt. Im Allgemeinen sind Spinlocks, wenn sie nicht sehr sorgfältig entworfen werden, möglicherweise nicht leistungsfähiger als ein reguläres Warten.

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

Der `durationHint`-Parameter kann verwendet werden, um Backoff-Strategien zu implementieren. Beispielsweise kann ein Thread mit einem kleinen Hinweis beginnen und ihn exponentiell bei jeder Iteration erhöhen. Dies ist vorteilhafter als `pause()` viele Male aufzurufen, da bei nicht-JITed Code Funktionsaufrufe selbst einen hohen Overhead haben.

> [!NOTE]
> Es kann sein, dass Implementierungen `durationHint` überhaupt nicht verwenden und immer eine konstante Zeit warten.

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
