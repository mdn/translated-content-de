---
title: Atomics.pause()
short-title: pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: f3bcd518b873a2264b2ec9005060741e4def8b2c
---

Die statische Methode **`Atomics.pause()`** stellt eine Mikro-Warte-Primitiv zur Verfügung, die der CPU andeutet, dass der Aufrufer auf den Zugriff auf eine gemeinsam genutzte Ressource wartet. Dadurch kann das System die zugewiesenen Ressourcen für den Kern (wie Leistung) oder Thread reduzieren, ohne den aktuellen Thread abzugeben.

`pause()` hat kein beobachtbares Verhalten außer der zeitlichen Wirkung. Das genaue Verhalten hängt von der CPU-Architektur und dem Betriebssystem ab. Zum Beispiel kann es auf Intel x86 eine `pause`-Anweisung gemäß [Intels Optimierungs-Handbuch](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html) sein. Auf manchen Plattformen könnte es ein no-op sein.

## Syntax

```js-nolint
Atomics.pause()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt in der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.pause()

Der Aufruf von {{jsxref("Atomics.wait()")}} oder {{jsxref("Atomics.waitAsync()")}}, um auf den Zugriff auf geteilten Speicher zu warten, bewirkt, dass der Thread aus dem Kern herausgeplant wird und dann nach der Wartezeit wieder herein, was während Zeiten hoher Konkurrenz effizient ist, in denen der Zugriff auf den geteilten Speicher einige Zeit in Anspruch nehmen könnte. Wenn die Konkurrenz gering ist, ist es oft effizienter, die Sperre abzufragen, ohne den Thread abzugeben: Dieser Ansatz wird als [Busy Waiting](https://en.wikipedia.org/wiki/Busy_waiting) oder [Spinlocking](https://en.wikipedia.org/wiki/Spinlock) bezeichnet. Die Methode `pause()` ermöglicht es Ihnen, effizienter während des Wartens zu Spinlocken, indem sie der CPU einen Hinweis gibt, was der Thread tut, und dadurch sein geringes Ressourcenbedürfnis anzeigt.

Um beiden Bedingungen gerecht zu werden, besteht ein gängiger Ansatz darin, zuerst zu Spinlocken, in der Hoffnung, dass die Konkurrenz gering ist, und dann zu warten, wenn die Sperre nicht nach kurzer Zeit erlangt wird. Wenn wir die Sperre bereits durch Spinlocking erlangt haben, wird der `wait()`-Aufruf ein no-op sein.

Das folgende Beispiel zeigt, wie dieser Ansatz mit `Atomics.pause()` und `Atomics.wait()` verwendet werden kann.

> [!WARNING]
> Die Verwendung von Spinlocking auf dem Hauptthread wird nicht empfohlen, da dadurch die gesamte Seite einfriert. Allgemein gilt, dass Spinlocks, sofern sie nicht sehr sorgfältig entworfen werden, möglicherweise nicht tatsächlich leistungsfähiger sind als ein reguläres Warten.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}
