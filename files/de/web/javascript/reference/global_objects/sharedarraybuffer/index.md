---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{JSRef}}

Das **`SharedArrayBuffer`**-Objekt wird verwendet, um einen generischen Rohdatenpuffer im Binärformat darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}}, jedoch so, dass sie zur Erstellung von Ansichten auf gemeinsamen Speicher verwendet werden können. Ein `SharedArrayBuffer` ist kein [Transferables Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects), im Gegensatz zu einem `ArrayBuffer`, das übertragbar ist.

## Beschreibung

Um Speicher zwischen `SharedArrayBuffer`-Objekten von einem Agenten im Cluster zu einem anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer ihrer Web Worker), werden [`postMessage`](/de/docs/Web/API/Worker/postMessage) und das [strukturierte Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der Algorithmus zum strukturierten Klonen akzeptiert `SharedArrayBuffer`-Objekte und typisierte Arrays, die auf `SharedArrayBuffer`-Objekte abgebildet sind. In beiden Fällen wird das `SharedArrayBuffer`-Objekt an den Empfänger übertragen, was zu einem neuen, privaten `SharedArrayBuffer`-Objekt im empfangenden Agenten führt (genauso wie bei {{jsxref("ArrayBuffer")}}). Der gemeinsame Datenblock, auf den von den beiden `SharedArrayBuffer`-Objekten verwiesen wird, ist jedoch derselbe Datenblock, und eine Nebenwirkung auf den Block in einem Agenten wird schließlich im anderen Agenten sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsamer Speicher kann gleichzeitig in Arbeitern oder dem Haupt-Thread erstellt und aktualisiert werden. Je nach System (der CPU, dem Betriebssystem, dem Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten propagiert wird. Um zu synchronisieren, sind {{jsxref("Atomics", "atomare", "", 1)}} Operationen erforderlich.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, wie zum Beispiel:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsamer Speicher und hochauflösende Timer wurden Anfang 2018 [effektiv deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Hinblick auf [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>).
Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um gemeinsamen Speicher wieder zu aktivieren.

Um gemeinsamen Speicher zu nutzen, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) sein und [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.
Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu prüfen, ob das Dokument cross-origin isoliert ist:

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

Wenn cross-origin isoliert, wirft `postMessage()` für `SharedArrayBuffer`-Objekte nicht mehr und gemeinsamer Speicher über Threads ist daher verfügbar.

### Verfügbarkeit der API

Je nachdem, ob die oben genannten Sicherheitsmaßnahmen ergriffen wurden, haben die verschiedenen Speicherfreigabe-APIs unterschiedliche Verfügbarkeiten:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind prinzipiell immer verfügbar, aber leider ist der Konstruktor im globalen Objekt ausgeblendet, es sei denn, die beiden oben genannten Header sind gesetzt, um Kompatibilität mit Webinhalten zu gewährleisten. Es besteht die Hoffnung, dass diese Einschränkung in Zukunft aufgehoben werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) kann weiterhin verwendet werden, um eine Instanz zu erhalten.
- Wenn die beiden oben genannten Header nicht gesetzt sind, werfen die verschiedenen `postMessage()`-APIs für `SharedArrayBuffer`-Objekte. Wenn sie gesetzt sind, funktionieren `postMessage()` auf `Window`-Objekten und dedizierten Arbeitern und erlauben die Speicherfreigabe.

### WebAssembly geteilter Speicher

[`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte können mit dem [`shared`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory#shared) Konstruktor-Flag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das konstruierte `Memory`-Objekt zwischen Arbeitern über `postMessage()` geteilt werden, genau wie `SharedArrayBuffer`, und der zugrunde liegende [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist ein `SharedArrayBuffer.` Daher gelten die oben genannten Anforderungen für die Freigabe eines `SharedArrayBuffer` zwischen Arbeitern auch für die Freigabe eines `WebAssembly.Memory`.

Der WebAssembly Thread-Vorschlag definiert auch eine neue Reihe von [atomaren](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Genau wie `SharedArrayBuffer` und seine Methoden uneingeschränkt aktiviert sind (und nur die Freigabe zwischen Threads durch die neuen Header begrenzt ist), sind auch die WebAssembly atomaren Anweisungen uneingeschränkt erlaubt.

### Wachstum von SharedArrayBuffers

`SharedArrayBuffer`-Objekte können wachstumsfähig gemacht werden, indem die Option `maxByteLength` beim Aufrufen des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors eingeschlossen wird. Sie können abfragen, ob ein `SharedArrayBuffer` wachstumsfähig ist und wie groß seine maximale Größe ist, indem Sie auf seine Eigenschaften {{jsxref("SharedArrayBuffer/growable", "growable")}} und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} zugreifen. Sie können einem wachstumsfähigen `SharedArrayBuffer` mit einem Aufruf von {{jsxref("SharedArrayBuffer/grow", "grow()")}} eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Funktionen machen das Wachstum von `SharedArrayBuffer`s effizienter – andernfalls müssten Sie eine Kopie des Puffers mit einer neuen Größe erstellen. Es gibt JavaScript auch in diesem Zusammenhang Gleichheit mit WebAssembly (Wasm lineares Gedächtnis kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) vergrößert werden).

Aus Sicherheitsgründen kann die Größe von `SharedArrayBuffer`s nicht verkleinert, sondern nur vergrößert werden.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erstellt ein neues `SharedArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von `SharedArrayBuffer`-Methoden zu erstellen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer` Instanzen geteilt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe in Bytes des Arrays. Diese wird beim Erstellen des Arrays festgelegt und kann nur geändert werden, wenn das `SharedArrayBuffer` wachstumsfähig ist und die {{jsxref("SharedArrayBuffer.prototype.grow()")}} Methode verwendet wird.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `SharedArrayBuffer` Instanzen ist der Anfangswert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}} Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Nur lesbar. Gibt `true` zurück, wenn das `SharedArrayBuffer` wachsen kann, oder `false`, wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die nur lesbare maximale Länge in Bytes, zu der das `SharedArrayBuffer` wachsen kann. Dies wird bei der Erstellung des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `begin`, inklusiv, bis `end`, exklusiv ist. Wenn `begin` oder `end` negativ sind, bezieht es sich auf einen Index vom Ende des Arrays aus, im Gegensatz zum Anfang.

## Beispiele

### Einen neuen SharedArrayBuffer erstellen

```js
const sab = new SharedArrayBuffer(1024);
```

### Den SharedArrayBuffer aufteilen

```js
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### In einem WebGL-Puffer verwenden

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
- [Shared Memory – ein kurzes Tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) in dem TC39 ecmascript-sharedmem Vorschlag
- [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [SharedArrayBuffer-Aktualisierungen in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
