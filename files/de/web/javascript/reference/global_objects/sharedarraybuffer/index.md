---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`SharedArrayBuffer`**-Objekt wird verwendet, um einen generischen Rohdatenpuffer darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}}-Objekt, jedoch auf eine Weise, dass darauf Ansichten des gemeinsamen Speichers erstellt werden können. Ein `SharedArrayBuffer` ist kein [Transferable Object](/de/docs/Web/API/Web_Workers_API/Transferable_objects), im Gegensatz zu einem `ArrayBuffer`, das übertragbar ist.

## Beschreibung

Um Speicher mittels `SharedArrayBuffer`-Objekten von einem Agenten im Cluster zum anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer ihrer Web Worker), werden [`postMessage`](/de/docs/Web/API/Worker/postMessage) und das [strukturierte Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der Algorithmus für strukturiertes Klonen akzeptiert `SharedArrayBuffer`-Objekte und typisierte Arrays, die auf `SharedArrayBuffer`-Objekte abgebildet sind. In beiden Fällen wird das `SharedArrayBuffer`-Objekt an den Empfänger übertragen, was zu einem neuen, privaten `SharedArrayBuffer`-Objekt im empfangenden Agenten führt (genauso wie beim {{jsxref("ArrayBuffer")}}). Der gemeinsam genutzte Datenblock, auf den sich die beiden `SharedArrayBuffer`-Objekte beziehen, ist jedoch derselbe Datenblock, und eine Auswirkung auf den Block bei einem Agenten wird schließlich im anderen Agenten sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsamer Speicher kann gleichzeitig in Workern oder im Haupt-Thread erstellt und aktualisiert werden. Abhängig vom System (der CPU, dem Betriebssystem, dem Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten propagiert wird. Zur Synchronisierung sind {{jsxref("Atomics", "atomare", "", 1)}} Operationen erforderlich.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, wie z.B.:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsamer Speicher und hochauflösende Timer wurden Anfang 2018 [wirksam deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Lichte von [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>). Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um den gemeinsamen Speicher wieder zu aktivieren.

Um gemeinsamen Speicher zu verwenden, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) und [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein. Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument cross-origin isoliert ist:

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

Wenn es cross-origin isoliert ist, wirft `postMessage()` nicht mehr für `SharedArrayBuffer`-Objekte, und gemeinsamer Speicher über Threads hinweg ist daher verfügbar.

### API-Verfügbarkeit

Je nachdem, ob die oben genannten Sicherheitsmaßnahmen ergriffen werden, sind die verschiedenen APIs zur Speicherfreigabe unterschiedlich verfügbar:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind prinzipiell immer verfügbar, aber leider ist der Konstruktor im globalen Objekt verborgen, es sei denn, die beiden oben genannten Header sind gesetzt, um die Kompatibilität mit Webinhalten zu gewährleisten. Es besteht Hoffnung, dass diese Einschränkung in Zukunft entfernt werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) kann weiterhin verwendet werden, um eine Instanz zu erhalten.
- Wenn die oben genannten beiden Header nicht gesetzt sind, werfen die verschiedenen `postMessage()`-APIs für `SharedArrayBuffer`-Objekte einen Fehler. Wenn sie gesetzt sind, funktioniert `postMessage()` auf `Window`-Objekten und dedizierten Workern und erlaubt die Speicherfreigabe.

### WebAssembly gemeinsamer Speicher

[`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte können mit dem [`shared`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared)-Konstruktor-Flag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das konstruierte `Memory`-Objekt zwischen Workern über `postMessage()` geteilt werden, ähnlich wie `SharedArrayBuffer`, und der unterstützende [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist ein `SharedArrayBuffer`. Daher gelten die oben genannten Anforderungen für das Teilen eines `SharedArrayBuffer` zwischen Workern auch für das Teilen eines `WebAssembly.Memory`.

Der WebAssembly Threads-Vorschlag definiert auch eine neue Reihe von [atomaren](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Genau wie `SharedArrayBuffer` und seine Methoden bedingungslos aktiviert sind (und nur das Teilen zwischen Threads auf den neuen Headers basiert), sind die WebAssembly atomaren Anweisungen ebenfalls bedingungslos erlaubt.

### Wachstum von SharedArrayBuffers

`SharedArrayBuffer`-Objekte können durch die Angabe der `maxByteLength`-Option beim Aufruf des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors erweiterbar gemacht werden. Sie können abfragen, ob ein `SharedArrayBuffer` erweiterbar ist und wie groß seine maximale Größe ist, indem Sie seine {{jsxref("SharedArrayBuffer/growable", "growable")}}- und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften abfragen. Sie können einem erweiterbaren `SharedArrayBuffer` mit einem Aufruf von {{jsxref("SharedArrayBuffer/grow", "grow()")}} eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Wachstum von `SharedArrayBuffer`s effizienter — andernfalls müssen Sie eine Kopie des Puffers mit neuer Größe erstellen. Es gleicht auch JavaScript in diesem Punkt mit WebAssembly an (Wasm-Linear-Speicher kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden).

Aus Sicherheitsgründen können `SharedArrayBuffer`s nicht verkleinert werden, sondern nur wachsen.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erstellt ein neues `SharedArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von `SharedArrayBuffer`-Methoden zu konstruieren.

## Instanzeigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer`-Instanzen geteilt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe in Bytes des Arrays. Dies wird beim Erstellen des Arrays festgelegt und kann nur geändert werden, wenn das `SharedArrayBuffer` erweiterbar ist, mittels der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `SharedArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}-Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn das `SharedArrayBuffer` vergrößert werden kann, oder `false`, wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge in Bytes, auf die das `SharedArrayBuffer` vergrößert werden kann. Dies wird beim Erstellen des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Vergrößert das `SharedArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt ein neues `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` ist, von `begin` (einschließlich) bis `end` (ausschließlich). Wenn `begin` oder `end` negativ sind, beziehen sie sich auf einen Index vom Ende des Arrays, anstatt vom Anfang.

## Beispiele

### Erstellen eines neuen SharedArrayBuffer

```js
const sab = new SharedArrayBuffer(1024);
```

### Schneiden des SharedArrayBuffer

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
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [Gemeinsamer Speicher – ein kurzes Tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem-Vorschlag
- [Ein Vorgeschmack auf JavaScripts neue parallele Primitive](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [SharedArrayBuffer-Updates in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
