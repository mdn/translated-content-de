---
title: Atomics.pause()
short-title: pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: 9d64ff6c5d0eee1800b0d3b4f9076de65f34f5ce
---

Die statische Methode **`Atomics.pause()`** stellt ein Primitiv für eine sehr kurze Wartezeit bereit. Sie signalisiert der CPU, dass der Aufrufer in einer Schleife auf den Zugriff auf eine gemeinsam genutzte Ressource wartet. Dadurch kann das System die dem Prozessorkern oder Thread zugewiesenen Ressourcen, etwa die Leistungsaufnahme, reduzieren, ohne die Ausführung des aktuellen Threads abzugeben.

`pause()` hat außer einer möglichen Auswirkung auf die zeitliche Ausführung kein beobachtbares Verhalten. Das genaue Verhalten hängt von der CPU-Architektur und dem Betriebssystem ab. Auf Intel x86 kann beispielsweise eine `pause`-Instruktion gemäß [Intels Optimierungshandbuch](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html) ausgeführt werden. Auf bestimmten Plattformen kann der Aufruf wirkungslos sein.

## Syntax

```js-nolint
Atomics.pause()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Diese Beispiele können nicht direkt in der Konsole oder auf einer beliebigen Webseite ausgeführt werden, da `SharedArrayBuffer` nur definiert ist, wenn seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) erfüllt sind.

### Atomics.pause() verwenden

Wenn {{jsxref("Atomics.wait()")}} oder {{jsxref("Atomics.waitAsync()")}} aufgerufen wird, um auf den Zugriff auf gemeinsam genutzten Speicher zu warten, wird die Ausführung des Threads auf dem Prozessorkern ausgesetzt und nach dem Warten wieder aufgenommen. Das ist bei hoher Zugriffskonkurrenz effizient, wenn der Zugriff auf den gemeinsam genutzten Speicher einige Zeit dauern kann. Bei geringer Zugriffskonkurrenz ist es dagegen oft effizienter, die Sperre wiederholt zu prüfen, ohne die Ausführung des Threads abzugeben. Dieser Ansatz wird als [Busy Waiting](https://en.wikipedia.org/wiki/Busy_waiting) oder [Spinlocking](https://en.wikipedia.org/wiki/Spinlock) bezeichnet. Die Methode `pause()` macht Spinlocking während des Wartens effizienter, indem sie der CPU signalisiert, was der Thread gerade tut und dass er daher nur wenige Ressourcen benötigt.

Um beide Situationen abzudecken, wird häufig zunächst per Spinlocking auf die Sperre gewartet, in der Annahme, dass die Zugriffskonkurrenz gering ist. Wird die Sperre nach kurzer Zeit nicht erlangt, geht der Thread in den Wartezustand über. Wurde die Sperre bereits durch Spinlocking erlangt, wird der Aufruf von `wait()` übersprungen.

Das folgende Beispiel zeigt, wie sich dieser Ansatz mit `Atomics.pause()` und `Atomics.wait()` umsetzen lässt.

> [!WARNING]
> Spinlocking im Hauptthread wird nicht empfohlen, da dadurch die gesamte Seite blockiert wird. Sofern sie nicht sehr sorgfältig konzipiert sind, bieten Spinlocks im Allgemeinen möglicherweise keinen Leistungsvorteil gegenüber einem regulären Wartevorgang.

```js
// Imagine another thread also has access to this shared memory
const sab = new SharedArrayBuffer(1024);
const i32 = new Int32Array(sab);

function lock() {
  while (true) {
    // Fast path: spin the CPU for a short while
    let spin = 0;
    do {
      if (Atomics.compareExchange(i32, 0, 0, 1) === 0) {
        return;
      }
      Atomics.pause();
      spin++;
    } while (spin < 10);

    // Slow path: wait for the lock
    // This can only be called in a worker thread,
    // because the main thread cannot be blocked
    Atomics.wait(i32, 0, 1);
  }
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
