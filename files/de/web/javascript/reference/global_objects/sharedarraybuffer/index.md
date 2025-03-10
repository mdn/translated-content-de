---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{JSRef}}

Das **`SharedArrayBuffer`**-Objekt wird verwendet, um einen generischen, rohen Binärdatenpuffer darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}}-Objekt. Der Unterschied liegt darin, dass es ermöglicht, Ansichten auf gemeinsamen Speicher zu erstellen. Ein `SharedArrayBuffer` ist kein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im Gegensatz zu einem `ArrayBuffer`, das übertragbar ist.

## Beschreibung

Um Speicher zwischen einem Agenten im Cluster und einem anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer ihrer Web-Worker), werden [`postMessage`](/de/docs/Web/API/Worker/postMessage) und [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der Algorithmus zum strukturierten Klonen akzeptiert `SharedArrayBuffer`-Objekte und getypte Arrays, die auf `SharedArrayBuffer`-Objekte abgebildet sind. In beiden Fällen wird das `SharedArrayBuffer`-Objekt an den Empfänger übertragen, was in einem neuen, privaten `SharedArrayBuffer`-Objekt im empfangenden Agenten resultiert (ähnlich wie bei {{jsxref("ArrayBuffer")}}). Allerdings bezieht sich der gemeinsame Datenblock, auf den die beiden `SharedArrayBuffer`-Objekte verweisen, auf denselben Datenblock, und eine Nebenwirkung auf den Block in einem Agent wird schließlich im anderen Agent sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsamer Speicher kann gleichzeitig in Workern oder im Haupt-Thread erstellt und aktualisiert werden. Abhängig vom System (der CPU, dem Betriebssystem, dem Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten sichtbar wird. Zur Synchronisation sind {{jsxref("Atomics", "Atomics", "", 1)}}-Operationen erforderlich.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, wie zum Beispiel:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsamer Speicher und hochauflösende Timer wurden Anfang 2018 [effektiv deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Hinblick auf [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>).
Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um gemeinsamen Speicher wieder zu aktivieren.

Um gemeinsamen Speicher zu nutzen, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) und [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.
Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument cross-origin isoliert ist:

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

Wenn cross-origin isoliert, wirft `postMessage()` nicht mehr für `SharedArrayBuffer`-Objekte, und gemeinsamer Speicher über Threads ist daher verfügbar.

### Verfügbarkeit der API

Je nachdem, ob die oben genannten Sicherheitsmaßnahmen getroffen werden, sind die verschiedenen Speicherfreigabe-APIs unterschiedlich verfügbar:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind grundsätzlich immer verfügbar, aber leider ist der Konstruktor im globalen Objekt verborgen, es sei denn, die beiden oben genannten Header sind gesetzt, um die Kompatibilität mit Webinhalten zu gewährleisten. Es besteht die Hoffnung, dass diese Einschränkung in Zukunft aufgehoben werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) kann weiterhin verwendet werden, um eine Instanz zu erhalten.
- Sofern die beiden oben genannten Header nicht gesetzt sind, werfen die verschiedenen `postMessage()`-APIs bei `SharedArrayBuffer`-Objekten. Wenn sie gesetzt sind, funktionieren `postMessage()` auf `Window`-Objekten und dedizierten Workern und ermöglichen das Teilen von Speicher.

### Gemeinsamer WebAssembly-Speicher

[`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte können mit dem [`shared`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared)-Konstruktor-Flag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das konstruierte `Memory`-Objekt zwischen Workern über `postMessage()` geteilt werden, genau wie `SharedArrayBuffer`, und der zugrunde liegende [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist ein `SharedArrayBuffer`. Daher gelten die oben aufgeführten Anforderungen für das Teilen eines `SharedArrayBuffer` zwischen Workern auch für das Teilen eines `WebAssembly.Memory`.

Der WebAssembly Threads Vorschlag definiert auch einen neuen Satz von [atomaren](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Genau wie `SharedArrayBuffer` und seine Methoden bedingungslos aktiviert sind (und nur das Teilen zwischen Threads durch die neuen Header gesteuert wird), sind die WebAssembly-atomaren Anweisungen ebenfalls ohne Bedingungen erlaubt.

### Wachstum von SharedArrayBuffers

`SharedArrayBuffer`-Objekte können durch Einbeziehung der `maxByteLength`-Option beim Aufruf des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors wachstumsfähig gemacht werden. Sie können abfragen, ob ein `SharedArrayBuffer` wachstumsfähig ist und wie groß seine maximale Größe ist, indem Sie auf seine {{jsxref("SharedArrayBuffer/growable", "growable")}}- und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem wachstumsfähigen `SharedArrayBuffer` eine neue Größe zuweisen, indem Sie einen {{jsxref("SharedArrayBuffer/grow", "grow()")}}-Aufruf machen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Wachstum von `SharedArrayBuffer`s effizienter – andernfalls müssten Sie eine Kopie des Buffers mit einer neuen Größe erstellen. Sie geben JavaScript auch Parität mit WebAssembly in dieser Hinsicht (Wasm-Linearspeicher kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) neugestaltet werden).

Aus Sicherheitsgründen können `SharedArrayBuffer`s nicht verkleinert, sondern nur vergrößert werden.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erstellt ein neues `SharedArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von `SharedArrayBuffer`-Methoden zu konstruieren.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer` Instanzen geteilt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe, in Bytes, des Arrays. Diese wird festgelegt, wenn das Array konstruiert wird und kann nur geändert werden, indem die {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode aufgerufen wird, wenn das `SharedArrayBuffer` wachstumsfähig ist.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `SharedArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}-Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Schreibtgeschützt. Gibt `true` zurück, wenn das `SharedArrayBuffer` vergrößert werden kann, oder `false`, wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge, in Bytes, auf die das `SharedArrayBuffer` vergrößert werden kann. Diese wird beim Konstruieren des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Vergrößert das `SharedArrayBuffer` auf die angegebene Größe, in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt ein neues `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `begin`, inklusive, bis `end`, exklusiv ist. Wenn entweder `begin` oder `end` negativ sind, bezieht es sich auf einen Index vom Ende des Arrays, anstatt von Anfang.

## Beispiele

### Erstellen eines neuen SharedArrayBuffer

```js
const sab = new SharedArrayBuffer(1024);
```

### Ausschneiden des SharedArrayBuffer

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- [Web Worker](/de/docs/Web/API/Web_Workers_API)
- [Shared Memory – eine kurze Anleitung](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem-Vorschlag
- [Ein Einblick in JavaScripts neue parallele Primitive](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [SharedArrayBuffer-Updates in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
