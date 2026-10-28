---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 9d64ff6c5d0eee1800b0d3b4f9076de65f34f5ce
---

Das **`SharedArrayBuffer`**-Objekt stellt einen generischen Puffer für binäre Rohdaten dar, ähnlich dem {{jsxref("ArrayBuffer")}}-Objekt. Im Unterschied dazu können mit ihm jedoch Ansichten auf gemeinsam genutzten Speicher erstellt werden. Ein `SharedArrayBuffer` ist kein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects), anders als ein `ArrayBuffer`, der übertragen werden kann.

## Beschreibung

Um Speicher mithilfe von `SharedArrayBuffer`-Objekten zwischen Agents desselben Clusters gemeinsam zu nutzen, werden [`postMessage`](/de/docs/Web/API/Worker/postMessage) und [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet. Ein Agent ist entweder das Hauptprogramm der Webseite oder einer ihrer Web Worker.

Der Algorithmus für strukturiertes Klonen akzeptiert `SharedArrayBuffer`-Objekte sowie Typed Arrays, die auf `SharedArrayBuffer`-Objekte abgebildet sind. In beiden Fällen erhält der empfangende Agent ein neues, eigenes `SharedArrayBuffer`-Objekt – wie bei {{jsxref("ArrayBuffer")}}. Der gemeinsam genutzte Datenblock, auf den die beiden `SharedArrayBuffer`-Objekte verweisen, ist jedoch derselbe. Eine Änderung dieses Blocks durch einen Agent wird daher schließlich auch für den anderen Agent sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsam genutzter Speicher kann gleichzeitig in Workern und im Hauptthread erstellt und aktualisiert werden. Je nach System (CPU, Betriebssystem und Browser) kann es einige Zeit dauern, bis eine Änderung in allen Kontexten sichtbar wird. Zur Synchronisierung sind {{jsxref("Atomics", "atomic", "", 1)}}-Operationen erforderlich.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, darunter:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsam genutzter Speicher und hochauflösende Timer wurden angesichts von [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) [Anfang 2018 praktisch deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).
Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um gemeinsam genutzten Speicher wieder zu ermöglichen.

Um gemeinsam genutzten Speicher zu verwenden, muss sich Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) befinden und [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.
Mit den Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) können Sie prüfen, ob das Dokument Cross-Origin-isoliert ist:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

Bei Cross-Origin-Isolierung löst `postMessage()` für `SharedArrayBuffer`-Objekte keinen Fehler mehr aus. Damit steht gemeinsam genutzter Speicher über Threads hinweg zur Verfügung.

### Verfügbarkeit der APIs

Je nachdem, ob die oben genannten Sicherheitsmaßnahmen umgesetzt wurden, sind die verschiedenen APIs zur gemeinsamen Speichernutzung unterschiedlich verfügbar:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind grundsätzlich immer verfügbar. Aus Gründen der Kompatibilität mit Webinhalten ist der Konstruktor im globalen Objekt jedoch verborgen, sofern die beiden oben erwähnten Header nicht gesetzt sind. Möglicherweise kann diese Einschränkung künftig aufgehoben werden. Über [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) lässt sich dennoch eine Instanz erhalten.
- Solange die beiden oben erwähnten Header nicht gesetzt sind, lösen die verschiedenen `postMessage()`-APIs bei `SharedArrayBuffer`-Objekten einen Fehler aus. Sind sie gesetzt, funktioniert `postMessage()` bei `Window`-Objekten und Dedicated Workern und ermöglicht die gemeinsame Speichernutzung.

### Gemeinsam genutzter Speicher in WebAssembly

[`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte können mit dem Konstruktor-Flag [`shared`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared) erstellt werden. Ist dieses Flag auf `true` gesetzt, kann das erstellte `Memory`-Objekt wie ein `SharedArrayBuffer` über `postMessage()` zwischen Workern geteilt werden. Der zugrunde liegende [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist dabei ein `SharedArrayBuffer`. Die oben genannten Anforderungen für die gemeinsame Nutzung eines `SharedArrayBuffer` zwischen Workern gelten daher auch für die gemeinsame Nutzung eines `WebAssembly.Memory`-Objekts.

Der Vorschlag zu WebAssembly Threads definiert außerdem neue [atomare](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Ebenso wie `SharedArrayBuffer` und seine Methoden ohne Einschränkung verfügbar sind und nur die gemeinsame Nutzung zwischen Threads von den neuen Headern abhängt, sind auch die atomaren WebAssembly-Anweisungen ohne Einschränkung zulässig.

### Vergrößerbare SharedArrayBuffers

`SharedArrayBuffer`-Objekte können vergrößerbar gemacht werden, indem beim Aufruf des Konstruktors {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} die Option `maxByteLength` angegeben wird. Ob ein `SharedArrayBuffer` vergrößerbar ist und wie groß er maximal werden kann, können Sie über seine Eigenschaften {{jsxref("SharedArrayBuffer/growable", "growable")}} beziehungsweise {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} abfragen. Mit einem Aufruf von {{jsxref("SharedArrayBuffer/grow", "grow()")}} können Sie einem vergrößerbaren `SharedArrayBuffer` eine neue Größe zuweisen. Neue Bytes werden mit 0 initialisiert.

Diese Funktionen machen das Vergrößern von `SharedArrayBuffer`-Objekten effizienter – andernfalls müssten Sie eine Kopie des Puffers mit der neuen Größe erstellen. Außerdem erhält JavaScript damit in dieser Hinsicht dieselben Möglichkeiten wie WebAssembly (linearer Wasm-Speicher kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden).

Aus Sicherheitsgründen können `SharedArrayBuffer`-Objekte nur vergrößert, nicht verkleinert werden.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erstellt ein neues `SharedArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, mit dem Rückgabewerte von `SharedArrayBuffer`-Methoden erstellt werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer`-Instanzen gemeinsam genutzt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe des Arrays in Bytes. Sie wird beim Erstellen des Arrays festgelegt und kann nur mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} geändert werden, wenn der `SharedArrayBuffer` vergrößerbar ist.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SharedArrayBuffer`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `SharedArrayBuffer` vergrößert werden kann, andernfalls `false`.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge in Bytes, auf die der `SharedArrayBuffer` vergrößert werden kann. Sie wird beim Erstellen des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"SharedArrayBuffer"`. Diese Eigenschaft wird von {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `begin` (einschließlich) bis `end` (ausschließlich) ist. Ist `begin` oder `end` negativ, bezieht sich der Index auf das Ende statt auf den Anfang des Arrays.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt in der Konsole oder auf einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nur definiert ist, wenn seine [Sicherheitsanforderungen](#sicherheitsanforderungen) erfüllt sind.

### Einen neuen SharedArrayBuffer erstellen

```js
const sab = new SharedArrayBuffer(1024);
```

### Einen Ausschnitt aus dem SharedArrayBuffer erstellen

```js
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### Verwendung in einem WebGL-Puffer

```js
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zur [Kommunikation und Koordination zwischen Agents](/de/docs/Web/JavaScript/Guide/Agent_communication_and_coordination)
- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- Leitfaden zu [Typed Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [Gemeinsam genutzter Speicher – eine kurze Einführung](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39-Vorschlag ecmascript-sharedmem
- [Ein Einblick in die neuen Parallelisierungsprimitive von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Aktualisierungen für SharedArrayBuffer in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
