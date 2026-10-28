---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
l10n:
  sourceCommit: 9d64ff6c5d0eee1800b0d3b4f9076de65f34f5ce
---

Das Namespace-Objekt **`Atomics`** enthält statische Methoden zur Durchführung atomarer Operationen. Sie werden mit {{jsxref("SharedArrayBuffer")}}- und {{jsxref("ArrayBuffer")}}-Objekten verwendet.

## Beschreibung

Anders als die meisten globalen Objekte ist `Atomics` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Atomics`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Atomics` sind statisch (genau wie beim {{jsxref("Math")}}-Objekt).

## Statische Eigenschaften

- `Atomics[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Atomics"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Atomics.add()")}}
  - : Addiert den übergebenen Wert zum vorhandenen Wert am angegebenen Index des Arrays. Gibt den vorherigen Wert an diesem Index zurück.
- {{jsxref("Atomics.and()")}}
  - : Führt eine bitweise UND-Operation mit dem Wert am angegebenen Index des Arrays und dem übergebenen Wert durch. Gibt den vorherigen Wert an diesem Index zurück.
- {{jsxref("Atomics.compareExchange()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays, wenn der dort vorhandene Wert einem Vergleichswert entspricht. Gibt den vorherigen Wert zurück.
- {{jsxref("Atomics.exchange()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays. Gibt den vorherigen Wert zurück.
- {{jsxref("Atomics.isLockFree()")}}
  - : Ein Optimierungsprimitiv, mit dem sich bestimmen lässt, ob Sperren oder atomare Operationen verwendet werden sollen. Gibt `true` zurück, wenn eine atomare Operation auf Arrays mit der angegebenen Elementgröße durch eine atomare Hardwareoperation implementiert wird (und nicht mithilfe einer Sperre). Nur für Fachleute.
- {{jsxref("Atomics.load()")}}
  - : Gibt den Wert am angegebenen Index des Arrays zurück.
- {{jsxref("Atomics.notify()")}}
  - : Benachrichtigt Agents, die am angegebenen Index des Arrays warten. Gibt die Anzahl der benachrichtigten Agents zurück.
- {{jsxref("Atomics.or()")}}
  - : Führt eine bitweise ODER-Operation mit dem Wert am angegebenen Index des Arrays und dem übergebenen Wert durch. Gibt den vorherigen Wert an diesem Index zurück.
- {{jsxref("Atomics.pause()")}}
  - : Stellt ein Primitiv für sehr kurzes Warten bereit, das der CPU signalisiert, dass der Aufrufer in einer Warteschleife auf den Zugriff auf eine gemeinsam genutzte Ressource wartet. Dadurch kann das System die dem Prozessorkern zugewiesenen Ressourcen (etwa Energie) oder die dem Thread zugewiesenen Ressourcen reduzieren, ohne die Ausführung des aktuellen Threads abzugeben.
- {{jsxref("Atomics.store()")}}
  - : Speichert einen Wert am angegebenen Index des Arrays. Gibt diesen Wert zurück.
- {{jsxref("Atomics.sub()")}}
  - : Subtrahiert einen Wert vom Wert am angegebenen Index des Arrays. Gibt den vorherigen Wert an diesem Index zurück.
- {{jsxref("Atomics.wait()")}}
  - : Prüft, ob der angegebene Index des Arrays noch einen bestimmten Wert enthält, und wartet dann, bis eine Benachrichtigung eintrifft oder die Wartezeit abläuft. Gibt entweder `"ok"`, `"not-equal"` oder `"timed-out"` zurück. Wenn das Warten im aufrufenden Agent nicht erlaubt ist, wird eine Ausnahme ausgelöst. (Die meisten Browser erlauben `wait()` nicht im Hauptthread des Browsers.)
- {{jsxref("Atomics.waitAsync()")}}
  - : Wartet asynchron (also ohne zu blockieren, anders als `Atomics.wait`) auf eine gemeinsam genutzte Speicherstelle und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
- {{jsxref("Atomics.xor()")}}
  - : Führt eine bitweise XOR-Operation mit dem Wert am angegebenen Index des Arrays und dem übergebenen Wert durch. Gibt den vorherigen Wert an diesem Index zurück.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt in der Konsole oder auf einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nur definiert ist, wenn seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) erfüllt sind.

### Atomics verwenden

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

### Warten und benachrichtigen

Gegeben sei ein gemeinsam genutztes `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread wartet an Position 0, weil der übergebene Wert mit dem an diesem Index gespeicherten Wert übereinstimmt.
Der lesende Thread wird erst fortgesetzt, wenn der schreibende Thread `Atomics.notify()` für Position 0 des übergebenen typisierten Arrays aufgerufen hat.
Beachten Sie: Wenn der schreibende Thread den Wert an Position 0 bis zum Aufwecken nicht geändert hat, wartet der lesende Thread **nicht** erneut, sondern wird fortgesetzt.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein schreibender Thread speichert einen neuen Wert und benachrichtigt anschließend den wartenden Thread:

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

- Leitfaden zur [Kommunikation und Koordination von Agents](/de/docs/Web/JavaScript/Guide/Agent_communication_and_coordination)
- {{jsxref("ArrayBuffer")}}
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [Shared Memory – eine kurze Einführung](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39-Vorschlag ecmascript-sharedmem
- [Ein Vorgeschmack auf die neuen Parallelitätsprimitive von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
