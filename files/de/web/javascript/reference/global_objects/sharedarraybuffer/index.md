---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Das **`SharedArrayBuffer`**-Objekt wird verwendet, um einen generischen Rohdatenpuffer darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}}-Objekt, jedoch so, dass sie zur Erstellung von Ansichten auf den gemeinsamen Speicher verwendet werden können. Ein `SharedArrayBuffer` ist kein [Transferable Object](/de/docs/Web/API/Web_Workers_API/Transferable_objects), im Gegensatz zu einem `ArrayBuffer`, der übertragbar ist.

## Beschreibung

Um Speicher mit `SharedArrayBuffer`-Objekten von einem Agenten im Cluster zu einem anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer ihrer Web-Worker), werden [`postMessage`](/de/docs/Web/API/Worker/postMessage) und [structured cloning](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der Structured Clone-Algorithmus akzeptiert `SharedArrayBuffer`-Objekte und typisierte Arrays, die auf `SharedArrayBuffer`-Objekte abgebildet sind. In beiden Fällen wird das `SharedArrayBuffer`-Objekt an den Empfänger übertragen, was zu einem neuen, privaten `SharedArrayBuffer`-Objekt im empfangenden Agenten führt (genau wie bei {{jsxref("ArrayBuffer")}}). Der gemeinsame Datenblock, auf den die beiden `SharedArrayBuffer`-Objekte verweisen, ist jedoch derselbe Datenblock, und eine Nebenwirkung auf den Block in einem Agenten wird schließlich im anderen Agenten sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsamer Speicher kann gleichzeitig in Workern oder dem Hauptthread erstellt und aktualisiert werden. Abhängig vom System (CPU, Betriebssystem, Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten propagiert wird. Um zu synchronisieren, sind {{jsxref("Atomics", "atomare", "", 1)}} Operationen erforderlich.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, wie z.B.:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsamer Speicher und hochauflösende Timer wurden effektiv [Anfang 2018 deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Lichte von [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>).
Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um gemeinsamen Speicher wieder zu aktivieren.

Um gemeinsamen Speicher zu nutzen, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) und [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.
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

Wenn cross-origin isoliert, wirft `postMessage()` nicht länger für `SharedArrayBuffer`-Objekte, und gemeinsamer Speicher über Threads hinweg ist somit verfügbar.

### API-Verfügbarkeit

Abhängig davon, ob die oben genannten Sicherheitsmaßnahmen ergriffen werden, haben die verschiedenen Speicherfreigabe-APIs unterschiedliche Verfügbarkeiten:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind prinzipiell immer verfügbar, aber leider ist der Konstruktor im globalen Objekt verborgen, sofern die beiden erwähnten Header nicht gesetzt sind, um die Kompatibilität mit Web-Inhalten zu gewährleisten. Es besteht die Hoffnung, dass diese Einschränkung in Zukunft entfernt werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) kann weiterhin verwendet werden, um eine Instanz zu erhalten.
- Sofern die beiden erwähnten Header nicht gesetzt sind, werfen die verschiedenen `postMessage()`-APIs für `SharedArrayBuffer`-Objekte eine Ausnahme. Sind sie gesetzt, funktionieren `postMessage()` bei `Window`-Objekten und dedizierten Workern und erlauben das Teilen von Speicher.

### WebAssembly Shared Memory

[`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte können mit dem [`shared`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared)-Konstruktor-Flag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das erzeugte `Memory`-Objekt zwischen Workern über `postMessage()` gemeinsam genutzt werden, genau wie `SharedArrayBuffer`, und der zugrunde liegende [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist ein `SharedArrayBuffer`. Daher gelten die oben aufgeführten Anforderungen für das Teilen eines `SharedArrayBuffer` zwischen Workern auch für das Teilen eines `WebAssembly.Memory`.

Der WebAssembly Threads-Vorschlag definiert auch eine neue Reihe von [atomaren](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Genau wie `SharedArrayBuffer` und seine Methoden bedingungslos aktiviert sind (und nur das Teilen zwischen Threads von den neuen Headern abhängt), sind die atomaren WebAssembly-Anweisungen ebenfalls bedingungslos erlaubt.

### Wachsende SharedArrayBuffers

`SharedArrayBuffer`-Objekte können durch Einschließen der `maxByteLength`-Option beim Aufruf des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors wachstumsfähig gemacht werden. Sie können abfragen, ob ein `SharedArrayBuffer` wachstumsfähig ist und wie groß es maximal sein kann, indem Sie auf seine {{jsxref("SharedArrayBuffer/growable", "growable")}} und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem wachstumsfähigen `SharedArrayBuffer` mit einem {{jsxref("SharedArrayBuffer/grow", "grow()")}}-Aufruf eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Wachsen von `SharedArrayBuffer`s effizienter — andernfalls müssten Sie eine Kopie des Puffers mit neuer Größe erstellen. Es bringt auch JavaScript auf Augenhöhe mit WebAssembly in dieser Hinsicht (Wasm-lineare Speicher können mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden).

Aus Sicherheitsgründen können `SharedArrayBuffer`s nicht verkleinert, sondern nur vergrößert werden.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erzeugt ein neues `SharedArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von `SharedArrayBuffer`-Methoden zu konstruieren.

## Instanzeigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer`-Instanzen geteilt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe des Arrays in Bytes. Diese wird festgelegt, wenn das Array erstellt wird und kann nur geändert werden, wenn der `SharedArrayBuffer` mit der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode wachstumsfähig ist.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SharedArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}-Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `SharedArrayBuffer` vergrößert werden kann, oder `false` wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge in Bytes, auf die der `SharedArrayBuffer` vergrößert werden kann. Diese wird festgelegt, wenn das Array erstellt wird und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Erhöht den `SharedArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `begin`, inklusive, bis `end`, exklusiv ist. Wenn `begin` oder `end` negativ sind, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.

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
- [Leitfaden für JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Web-Worker](/de/docs/Web/API/Web_Workers_API)
- [Shared Memory – ein kurzer Leitfaden](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem Vorschlag
- [Ein Vorgeschmack auf JavaScripts neue parallele Primitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [SharedArrayBuffer-Updates in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
