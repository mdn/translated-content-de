---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Das **`SharedArrayBuffer`**-Objekt wird verwendet, um einen generischen rohen binären Datenpuffer darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}}-Objekt, jedoch so, dass es möglich ist, Ansichten auf gemeinsam genutzten Speicher zu erstellen. Ein `SharedArrayBuffer` ist kein [Transferable Object](/de/docs/Web/API/Web_Workers_API/Transferable_objects), im Gegensatz zu einem `ArrayBuffer`, der übertragbar ist.

## Beschreibung

Um Speicher mithilfe von `SharedArrayBuffer`-Objekten von einem Agent im Cluster zu einem anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer ihrer Webworker), wird [`postMessage`](/de/docs/Web/API/Worker/postMessage) und [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der Algorithmus für strukturiertes Klonen akzeptiert `SharedArrayBuffer`-Objekte und Typarrays, die auf `SharedArrayBuffer`-Objekte abgebildet sind. In beiden Fällen wird das `SharedArrayBuffer`-Objekt an den Empfänger übermittelt, was zu einem neuen, privaten `SharedArrayBuffer`-Objekt im empfangenden Agent führt (genau wie bei {{jsxref("ArrayBuffer")}}). Der gemeinsam genutzte Datenblock, auf den die beiden `SharedArrayBuffer`-Objekte verweisen, ist jedoch derselbe Datenblock, und ein Nebeneffekt auf den Block in einem Agent wird schließlich im anderen Agent sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsam genutzter Speicher kann gleichzeitig in Workern oder dem Hauptthread erstellt und aktualisiert werden. Je nach System (CPU, Betriebssystem, Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten propagiert wird. Um dies zu synchronisieren, sind {{jsxref("Atomics", "atomare", "", 1)}} Operationen erforderlich.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, wie zum Beispiel:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsam genutzter Speicher und hochauflösende Timer wurden Anfang 2018 [effektiv deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Lichte von [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>). Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um gemeinsamen Speicher wieder zu ermöglichen.

Um gemeinsam genutzten Speicher zu verwenden, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein und [über Ursprünge isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein. Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument über Ursprünge isoliert ist:

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

Wenn über Ursprünge isoliert, wirft `postMessage()` für `SharedArrayBuffer`-Objekte nicht länger Ausnahmen, und gemeinsam genutzter Speicher zwischen Threads ist daher verfügbar.

### Verfügbarkeit von APIs

Je nachdem, ob die oben genannten Sicherheitsmaßnahmen ergriffen werden, haben die verschiedenen Speicherfreigabe-APIs unterschiedliche Verfügbarkeiten:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind prinzipiell immer verfügbar, aber leider ist der Konstruktor im globalen Objekt verborgen, es sei denn, die beiden oben erwähnten Header sind gesetzt, für die Kompatibilität mit Web-Inhalten. Es besteht die Hoffnung, dass diese Einschränkung in Zukunft aufgehoben werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) kann dennoch verwendet werden, um eine Instanz zu erhalten.
- Sofern die beiden oben genannten Header nicht gesetzt sind, werfen die verschiedenen `postMessage()`-APIs für `SharedArrayBuffer`-Objekte Ausnahmen. Wenn sie jedoch gesetzt sind, funktionieren `postMessage()` auf `Window`-Objekten und dedizierten Workern und ermöglichen die Speicherfreigabe.

### WebAssembly gemeinsamer Speicher

[`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte können mit dem [`shared`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared) Konstruktor-Flag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das konstruierte `Memory`-Objekt zwischen Workern über `postMessage()` geteilt werden, genau wie `SharedArrayBuffer`, und der zugrunde liegende [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist ein `SharedArrayBuffer`. Daher gelten die oben aufgeführten Anforderungen für das Teilen eines `SharedArrayBuffer` zwischen Workern auch für das Teilen eines `WebAssembly.Memory`.

Der WebAssembly Threads-Vorschlag definiert auch einen neuen Satz von [atomaren](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses) Instruktionen. Genau wie `SharedArrayBuffer` und seine Methoden bedingungslos aktiviert sind (und nur das Teilen zwischen Threads durch die neuen Header gesteuert wird), sind die WebAssembly-atomaren Instruktionen ebenfalls bedingungslos erlaubt.

### Wachstum von SharedArrayBuffers

`SharedArrayBuffer`-Objekte können durch Einschließen der `maxByteLength`-Option beim Aufruf des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors wachstumsfähig gemacht werden. Sie können überprüfen, ob ein `SharedArrayBuffer` wachstumsfähig ist und wie groß es maximal sein kann, indem Sie auf seine {{jsxref("SharedArrayBuffer/growable", "growable")}}- und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem wachstumsfähigen `SharedArrayBuffer` mit einem {{jsxref("SharedArrayBuffer/grow", "grow()")}}-Aufruf eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Wachstum von `SharedArrayBuffer`s effizienter — andernfalls müssen Sie eine Kopie des Puffers mit einer neuen Größe erstellen. Es bringt auch die JavaScript-Parität mit WebAssembly in dieser Hinsicht (Wasm-Speicher kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) resized werden).

Aus Sicherheitsgründen können `SharedArrayBuffer`s nicht in der Größe reduziert werden, sondern nur wachsen.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erstellt ein neues `SharedArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, der zur Konstruktion von Rückgabewerten von `SharedArrayBuffer`-Methoden verwendet wird.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer`-Instanzen geteilt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe, in Bytes, des Arrays. Diese wird festgelegt, wenn das Array erstellt wird und kann nur geändert werden, wenn der `SharedArrayBuffer` wachstumsfähig ist, unter Verwendung der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SharedArrayBuffer`-Instanzen ist der Initialwert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}-Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `SharedArrayBuffer` wachsen kann, oder `false`, wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge, in Bytes, auf die der `SharedArrayBuffer` wachsen kann. Diese wird bei der Erstellung des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `begin` (einschließlich) bis `end` (ausschließlich) ist. Wenn entweder `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt aus der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](#sicherheitsanforderungen) sind erfüllt.

### Erstellen eines neuen SharedArrayBuffer

```js
const sab = new SharedArrayBuffer(1024);
```

### Slicing des SharedArrayBuffer

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

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- [Web Worker](/de/docs/Web/API/Web_Workers_API)
- [Gemeinsamer Speicher – ein kurzes Tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem Vorschlag
- [Ein Vorgeschmack auf JavaScripts neue parallele Primitive](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [SharedArrayBuffer-Updates in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
