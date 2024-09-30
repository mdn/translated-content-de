---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Atomics`** Namensraumobjekt enthält statische Methoden zur Durchführung atomarer Operationen. Sie werden mit {{jsxref("SharedArrayBuffer")}} und {{jsxref("ArrayBuffer")}} Objekten verwendet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Atomics` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Atomics` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Atomics` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

### Atomare Operationen

Wenn Speicher geteilt wird, können mehrere Threads dieselben Daten im Speicher lesen und schreiben. Atomare Operationen stellen sicher, dass vorhersehbare Werte geschrieben und gelesen werden, dass Operationen abgeschlossen sind, bevor die nächste Operation beginnt, und dass Operationen nicht unterbrochen werden.

### Warten und Benachrichtigen

Die Methoden `wait()` und `notify()` basieren auf Linux-Futexen ("fast user-space mutex") und bieten Möglichkeiten, zu warten, bis eine bestimmte Bedingung wahr wird, und werden typischerweise als blockierende Konstrukte verwendet.

## Statische Eigenschaften

- `Atomics[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Atomics"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Atomics.add()")}}
  - : Fügt den angegebenen Wert zum bestehenden Wert am angegebenen Index des Arrays hinzu. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.and()")}}
  - : Führt eine bitweise UND-Operation auf den Wert am angegebenen Index des Arrays mit dem angegebenen Wert durch. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.compareExchange()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays, wenn er einem Wert entspricht. Gibt den alten Wert zurück.
- {{jsxref("Atomics.exchange()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays. Gibt den alten Wert zurück.
- {{jsxref("Atomics.isLockFree()")}}
  - : Ein Optimierungsprimitive, das verwendet werden kann, um festzustellen, ob Sperren oder atomare Operationen verwendet werden sollen. Gibt `true` zurück, wenn eine atomare Operation auf Arrays der gegebenen Elementgröße mit einer Hardware-Atomoperation (anstelle einer Sperre) implementiert wird. Nur für Experten.
- {{jsxref("Atomics.load()")}}
  - : Gibt den Wert am angegebenen Index des Arrays zurück.
- {{jsxref("Atomics.notify()")}}
  - : Benachrichtigt Agenten, die am angegebenen Index des Arrays warten. Gibt die Anzahl der Benachrichtigten zurück.
- {{jsxref("Atomics.or()")}}
  - : Führt eine bitweise ODER-Operation auf den Wert am angegebenen Index des Arrays mit dem angegebenen Wert durch. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.store()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays. Gibt den Wert zurück.
- {{jsxref("Atomics.sub()")}}
  - : Subtrahiert einen Wert am angegebenen Index des Arrays. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.wait()")}}
  - : Überprüft, ob der angegebene Index des Arrays noch einen Wert enthält und schläft wartend ein oder läuft aus. Gibt entweder `"ok"`, `"not-equal"` oder `"timed-out"` zurück. Wenn das Warten im aufrufenden Agenten nicht erlaubt ist, wird eine Ausnahme ausgelöst. (Die meisten Browser erlauben `wait()` nicht im Hauptthread des Browsers.)
- {{jsxref("Atomics.waitAsync()")}}
  - : Wartet asynchron (d. h. ohne Blockierung, im Gegensatz zu `Atomics.wait`) an einer geteilten Speicherstelle und gibt ein {{jsxref("Promise")}} zurück.
- {{jsxref("Atomics.xor()")}}
  - : Führt eine bitweise XOR-Operation auf den Wert am angegebenen Index des Arrays mit dem angegebenen Wert durch. Gibt den alten Wert an diesem Index zurück.

## Beispiele

### Verwendung von Atomics

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

ta[0]; // 0
ta[0] = 5; // 5

Atomics.add(ta, 0, 12); // 5
Atomics.load(ta, 0); // 17

Atomics.and(ta, 0, 1); // 17
Atomics.load(ta, 0); // 1

Atomics.compareExchange(ta, 0, 5, 12); // 1
Atomics.load(ta, 0); // 1

Atomics.exchange(ta, 0, 12); // 1
Atomics.load(ta, 0); // 12

Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true

Atomics.or(ta, 0, 1); // 12
Atomics.load(ta, 0); // 13

Atomics.store(ta, 0, 12); // 12

Atomics.sub(ta, 0, 2); // 12
Atomics.load(ta, 0); // 10

Atomics.xor(ta, 0, 1); // 10
Atomics.load(ta, 0); // 11
```

### Warten und Benachrichtigen

Angenommen, es gibt ein freigegebenes `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein Lesethread schläft und wartet auf Position 0, die 0 sein soll. Solange das zutrifft, wird er nicht weitermachen. Sobald der Schreibthread einen neuen Wert gespeichert hat, wird er vom Schreibthread benachrichtigt und gibt den neuen Wert (123) zurück.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein Schreibthread speichert einen neuen Wert und benachrichtigt den wartenden Thread, sobald er geschrieben hat:

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- [Leitfaden zu JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [Shared Memory – ein kurzes Tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem Vorschlag
- [Ein Vorgeschmack auf JavaScripts neue parallele Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
