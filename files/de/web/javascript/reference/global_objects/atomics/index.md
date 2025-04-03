---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Das **`Atomics`**-Namensraum-Objekt enthält statische Methoden für das Durchführen atomarer Operationen. Sie werden mit {{jsxref("SharedArrayBuffer")}} und {{jsxref("ArrayBuffer")}} Objekten verwendet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Atomics` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Atomics`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Atomics` sind statisch (genauso wie das {{jsxref("Math")}}-Objekt).

### Atomare Operationen

Wenn Speicher geteilt wird, können mehrere Threads dieselben Daten im Speicher lesen und schreiben. Atomare Operationen stellen sicher, dass vorhersehbare Werte geschrieben und gelesen werden, dass Operationen abgeschlossen sind, bevor die nächste Operation beginnt, und dass Operationen nicht unterbrochen werden.

### Warten und Benachrichtigen

Die `wait()` und `notify()` Methoden sind an Linux-Futexes ("fast user-space mutex") angelehnt und bieten Möglichkeiten, zu warten, bis eine bestimmte Bedingung zutrifft, und werden typischerweise als blockierende Konstrukte verwendet.

## Statische Eigenschaften

- `Atomics[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Atomics"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Atomics.add()")}}
  - : Addiert den angegebenen Wert zum vorhandenen Wert am angegebenen Index des Arrays. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.and()")}}
  - : Führt ein bitweises UND an dem Wert am angegebenen Index des Arrays mit dem angegebenen Wert durch. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.compareExchange()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays, wenn er einem Wert entspricht. Gibt den alten Wert zurück.
- {{jsxref("Atomics.exchange()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays. Gibt den alten Wert zurück.
- {{jsxref("Atomics.isLockFree()")}}
  - : Ein Optimierungs-Primitiv, das verwendet werden kann, um zu bestimmen, ob Sperren oder atomare Operationen verwendet werden sollen. Gibt `true` zurück, wenn eine atomare Operation auf Arrays der gegebenen Elementgröße mit einer Hardware-atoma-operation (anstatt einer Sperre) implementiert wird. Nur für Experten.
- {{jsxref("Atomics.load()")}}
  - : Gibt den Wert am angegebenen Index des Arrays zurück.
- {{jsxref("Atomics.notify()")}}
  - : Benachrichtigt Agenten, die am angegebenen Index des Arrays warten. Gibt die Anzahl der benachrichtigten Agenten zurück.
- {{jsxref("Atomics.or()")}}
  - : Führt ein bitweises ODER an dem Wert am angegebenen Index des Arrays mit dem angegebenen Wert durch. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.pause()")}}
  - : Bietet ein Mikro-Warte-Primitiv, das der CPU signalisiert, dass der Aufrufer während des Wartens auf den Zugriff auf eine gemeinsam genutzte Ressource rotiert. Dadurch kann das System die den Kern (wie Energie) oder Thread zugewiesenen Ressourcen reduzieren, ohne den aktuellen Thread freizugeben.
- {{jsxref("Atomics.store()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays. Gibt den Wert zurück.
- {{jsxref("Atomics.sub()")}}
  - : Subtrahiert einen Wert am angegebenen Index des Arrays. Gibt den alten Wert an diesem Index zurück.
- {{jsxref("Atomics.wait()")}}
  - : Verifiziert, dass der angegebene Index des Arrays weiterhin einen Wert enthält, und schläft erwartend oder läuft ab. Gibt entweder `"ok"`, `"not-equal"` oder `"timed-out"` zurück. Wenn das Warten im aufrufenden Agenten nicht erlaubt ist, wird eine Ausnahme ausgelöst. (Die meisten Browser erlauben kein `wait()` im Hauptthread des Browsers.)
- {{jsxref("Atomics.waitAsync()")}}
  - : Wartet asynchron (d.h. ohne Blockierung, im Gegensatz zu `Atomics.wait`) auf eine gemeinsam genutzte Speicherstelle und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
- {{jsxref("Atomics.xor()")}}
  - : Führt ein bitweises XOR an dem Wert am angegebenen Index des Arrays mit dem angegebenen Wert durch. Gibt den alten Wert an diesem Index zurück.

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

Angenommen, Sie haben ein gemeinsames `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet am Ort 0, weil der angegebene Wert mit dem im angegebenen Index gespeicherten übereinstimmt.
Der lesende Thread wird nicht fortfahren, bis der schreibende Thread `Atomics.notify()` an Position 0 des angegebenen getypten Arrays aufgerufen hat.
Beachten Sie, dass, wenn nach dem Aufwecken der Wert am Ort 0 vom schreibenden Thread nicht geändert wurde, der lesende Thread **nicht** wieder einschlafen wird, sondern weitermacht.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein schreibender Thread speichert einen neuen Wert und benachrichtigt den wartenden Thread, sobald er geschrieben hat:

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
- [Leitfaden zu JavaScript getypten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [Gemeinsamer Speicher – ein kurze Anleitung](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem Vorschlag
- [Ein Vorgeschmack auf JavaScripts neue parallele Primitive](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
