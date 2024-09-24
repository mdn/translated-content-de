---
title: "ReadableStreamBYOBReader: read() Methode"
short-title: read()
slug: Web/API/ReadableStreamBYOBReader/read
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`read()`** Methode der {{domxref("ReadableStreamBYOBReader")}} Schnittstelle wird verwendet, um Daten in eine Ansicht auf einem vom Benutzer bereitgestellten Puffer aus einem zugehörigen [lesbaren Bytestream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) zu lesen. Ein Antrag auf Daten wird erfüllt aus den internen Warteschlangen des Streams, falls dort Daten vorhanden sind. Wenn die Stream-Warteschlangen leer sind, kann die Anfrage als zero-copy Transfer von der zugrunde liegenden Bytequelle bereitgestellt werden.

Die Methode nimmt als Argument eine Ansicht auf einen Puffer entgegen, in den Daten gelesen werden sollen, und gibt ein {{jsxref("Promise")}} zurück. Das Versprechen wird mit einem Objekt erfüllt, das die Eigenschaften `value` und `done` hat, wenn Daten verfügbar werden oder wenn der Stream abgebrochen wird. Wenn der Stream fehlerhaft ist, wird das Versprechen mit dem relevanten Fehlerobjekt abgelehnt.

Wird ein Datenstück bereitgestellt, enthält die Eigenschaft `value` eine neue Ansicht. Dies wird eine Ansicht über denselben Puffer/Rücksicherungsspeicher (und vom gleichen Typ) sein wie die ursprüngliche `view`, die an die `read()` Methode übergeben wurde, jetzt gefüllt mit dem neuen Datenstück. Beachten Sie, dass die ursprüngliche `view`, die an die Methode übergeben wurde, nach der Erfüllung des Versprechens getrennt und nicht mehr nutzbar sein wird. Das Versprechen wird mit `value: undefined` erfüllt, wenn der Stream abgebrochen wurde. In diesem Fall wird der Rückspeicherbereich von `view` verworfen und nicht an den Aufrufer zurückgegeben (alle zuvor gelesenen Daten im Puffer der Ansicht gehen verloren).

Die Eigenschaft `done` zeigt an, ob weitere Daten zu erwarten sind. Der Wert wird auf `true` gesetzt, wenn der Stream geschlossen oder abgebrochen wird, und `false` andernfalls.

## Syntax

```js-nolint
read(view)
```

### Parameter

- `view`
  - : Die Ansicht, in die Daten gelesen werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich je nach Zustand des Streams mit einem Ergebnis erfüllt/ablehnt.

Folgende Möglichkeiten bestehen:

- Wenn ein Chunk verfügbar ist und der Stream noch aktiv ist, erfüllt sich das Versprechen mit einem Objekt der Form:

  ```js
  { value: theChunk, done: false }
  ```

  `theChunk` ist eine Ansicht, die die neuen Daten enthält. Dies ist eine Ansicht desselben Typs und über denselben Rückspeicher wie die `view`, die an die `read()` Methode übergeben wurde. Die ursprüngliche `view` wird getrennt und ist nicht mehr nutzbar.

- Wenn der Stream geschlossen ist, erfüllt sich das Versprechen mit einem Objekt der Form (wobei `theChunk` dieselben Eigenschaften wie oben hat):

  ```js
  { value: theChunk, done: true }
  ```

- Wenn der Stream abgebrochen wird, erfüllt sich das Versprechen mit einem Objekt der Form:

  ```js
  { value: undefined, done: true }
  ```

  In diesem Fall wird der Rückspeicher verworfen.

- Wenn der Stream einen Fehler wirft, wird das Versprechen mit dem relevanten Fehler abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamBYOBReader`, der Stream hat keinen Besitzer, die Ansicht ist kein Objekt oder wurde getrennt, die Länge der Ansicht ist 0, oder {{domxref("ReadableStreamBYOBReader.releaseLock()")}} wird aufgerufen (wenn es eine ausstehende Leseanfrage gibt).

## Beispiele

Der Beispielcode hier stammt aus den Live-Beispielen in [Lesbare Bytestreams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Zuerst erstellen wir den Reader mit {{domxref("ReadableStream.getReader()")}} am Stream, wobei wir `mode: "byob"` im Optionsparameter angeben. Wir müssen auch ein `ArrayBuffer` erstellen, welches der "Rücksicherungsspeicher" der Ansichten ist, in die wir schreiben werden.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
```

Eine Funktion, die den Reader verwendet, wird unten gezeigt. Diese ruft die `read()` Methode rekursiv auf, um Daten in den Puffer zu lesen. Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) an, das eine Ansicht über den Teil des ursprünglichen Array Puffers ist, der noch nicht beschrieben wurde. Die Parameter der Ansicht werden von den Daten berechnet, die in früheren Aufrufen empfangen wurden, die einen Offset in das ursprüngliche Array Puffer definieren.

```js
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() gibt ein Versprechen zurück, das sich erfüllt, wenn ein Wert empfangen wurde
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(function processBytes({ done, value }) {
        // Ergebnisobjekte enthalten zwei Eigenschaften:
        // done  - true, wenn der Stream bereits alle seine Daten geliefert hat.
        // value - einige Daten. 'undefined', wenn der Reader abgebrochen wird.

        if (done) {
          // Es gibt keine Daten mehr im Stream
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // Lesen Sie etwas mehr und rufen Sie diese Funktion erneut auf
        // Beachten Sie, dass hier eine neue Ansicht über den ursprünglichen Puffer erstellt wird.
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processBytes);
      });
  }
}
```

Wenn keine Daten mehr im Stream sind, wird die `read()` Methode mit einem Objekt erfüllt, das die Eigenschaft `done` auf `true` gesetzt hat, und die Funktion gibt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} Konstruktor
- [Lesbare Bytestreams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
