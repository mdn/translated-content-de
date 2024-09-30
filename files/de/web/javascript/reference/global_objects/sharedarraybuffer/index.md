---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`SharedArrayBuffer`**-Objekt wird verwendet, um einen generischen, rohen binären Datenpuffer darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}}-Objekt, jedoch so, dass sie zur Erstellung von Ansichten auf den geteilten Speicher genutzt werden können. Ein `SharedArrayBuffer` ist kein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects), im Gegensatz zu einem `ArrayBuffer`, der transferierbar ist.

## Beschreibung

Um Speicher mithilfe von `SharedArrayBuffer`-Objekten von einem Agenten im Cluster zu einem anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer ihrer Web-Worker), wird [`postMessage`](/de/docs/Web/API/Worker/postMessage) und das [strukturierte Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der Strukturierte Klon-Algorithmus akzeptiert `SharedArrayBuffer`-Objekte und mit `SharedArrayBuffer`-Objekten abgebildete typisierte Arrays. In beiden Fällen wird das `SharedArrayBuffer`-Objekt zum Empfänger übertragen, was zu einem neuen, privaten `SharedArrayBuffer`-Objekt im empfangenden Agenten führt (wie bei {{jsxref("ArrayBuffer")}}). Jedoch ist der mit den beiden `SharedArrayBuffer`-Objekten referenzierte gemeinsame Datenblock derselbe Datenblock, und eine Nebenwirkung auf den Block in einem Agenten wird schließlich im anderen Agenten sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Geteilter Speicher kann gleichzeitig in Workern oder dem Haupt-Thread erstellt und aktualisiert werden. Je nach System (CPU, Betriebssystem, Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten propagiert wird. Zur Synchronisation sind {{jsxref("Atomics", "atomare", "", 1)}} Operationen nötig.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, wie zum Beispiel:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Geteilter Speicher und Hochauflösungs-Timer wurden Anfang 2018 [effektiv deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Hinblick auf [Spectre](<https://de.wikipedia.org/wiki/Spectre_(Sicherheitslücke)>). 2020 wurde ein neuer, sicherer Ansatz standardisiert, um geteilten Speicher wieder zu aktivieren.

Als grundlegende Anforderung muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) sein.

Für Top-Level-Dokumente müssen zwei Header gesetzt werden, um Ihre Website zu Cross-Origin-Isolieren:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit dem Wert `same-origin` (schützt Ihren Ursprung vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit dem Wert `require-corp` oder `credentialless` (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolierung erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)-Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)-Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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

Mit diesen beiden gesetzten Headern wirft `postMessage()` nicht länger für `SharedArrayBuffer`-Objekte und damit ist geteilter Speicher über Threads hinweg verfügbar.

Eingebettete Dokumente und dedizierte Worker müssen ebenfalls den [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)-Header mit demselben Wert setzen. Keine weiteren Änderungen sind für gleichherkömmliche eingebettete Dokumente und Subressourcen nötig. Gleichseitige (aber Cross-Origin) eingebettete Dokumente und Subressourcen müssen den [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)-Header mit dem Wert `same-site` setzen. Und ihre Cross-Origin (und Cross-Site) Gegenstücke müssen denselben Header mit dem Wert `cross-origin` setzen. Beachten Sie, dass das Setzen des [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)-Headers auf einen anderen Wert als `same-origin` die Ressource für potenzielle Angriffe wie [Spectre](<https://de.wikipedia.org/wiki/Spectre_(Sicherheitslücke)>) öffnet.

Beachten Sie, dass der [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)-Header Ihre Fähigkeit einschränkt, eine Referenz zu Popups zu behalten. Direkter Zugriff zwischen zwei Top-Level-Fenster-Kontexten funktioniert im Wesentlichen nur, wenn sie gleichherkömmlich sind und dieselben zwei Header mit denselben zwei Werten tragen.

### API-Verfügbarkeit

Abhängig von den oben genannten Sicherheitsmaßnahmen haben die verschiedenen Speicherfreigabe-APIs unterschiedliche Verfügbarkeiten:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind grundsätzlich immer verfügbar, aber leider ist der Konstruktor am globalen Objekt versteckt, es sei denn, die oben genannten zwei Header sind gesetzt, um die Kompatibilität mit Webinhalten zu gewährleisten. Es besteht Hoffnung, dass diese Einschränkung in der Zukunft entfernt werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) kann immer noch verwendet werden, um eine Instanz zu erhalten.
- Sofern die oben genannten zwei Header nicht gesetzt sind, werfen die verschiedenen `postMessage()`-APIs für `SharedArrayBuffer`-Objekte. Sind sie gesetzt, funktionieren `postMessage()` auf `Window`-Objekten und dedizierten Workern und erlauben das Teilen von Speicher.

### WebAssembly-geteilter Speicher

[`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte können mit dem [`shared`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory#shared)-Konstruktor-Flag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das erstellte `Memory`-Objekt zwischen Workern über `postMessage()` geteilt werden, genau wie `SharedArrayBuffer`, und der zugrunde liegende [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist ein `SharedArrayBuffer`. Daher gelten die oben aufgelisteten Anforderungen für das Teilen eines `SharedArrayBuffer` zwischen Workern auch für das Teilen eines `WebAssembly.Memory`.

Der WebAssembly Threads-Vorschlag definiert auch eine neue Reihe von [atomaren](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Genau wie `SharedArrayBuffer` und seine Methoden unconditionally enabled sind (und nur das Teilen zwischen Threads auf die neuen Header beschränkt ist), sind die WebAssembly atomaren Anweisungen auch bedingungslos erlaubt.

### Wachsende SharedArrayBuffers

`SharedArrayBuffer`-Objekte können wachstumsfähig gemacht werden, indem die Option `maxByteLength` beim Aufruf des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors einbezogen wird. Sie können ermitteln, ob ein `SharedArrayBuffer` wachstumsfähig ist und welches seine maximale Größe ist, indem Sie jeweils auf seine {{jsxref("SharedArrayBuffer/growable", "growable")}}- und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem wachstumsfähigen `SharedArrayBuffer` eine neue Größe zuweisen, indem Sie einen {{jsxref("SharedArrayBuffer/grow", "grow()")}}-Aufruf durchführen. Neue Bytes werden mit 0 initialisiert.

Diese Features machen das Wachsen von `SharedArrayBuffer`s effizienter – ansonsten müssten Sie eine Kopie des Puffers mit einer neuen Größe anfertigen. Es gibt auch eine Parität mit WebAssembly in dieser Hinsicht (Wasm lineare Speicher kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)) verändert werden.

Aus Sicherheitsgründen können `SharedArrayBuffer`s nicht verkleinert, sondern nur vergrößert werden.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erstellt ein neues `SharedArrayBuffer`-Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von `SharedArrayBuffer`-Methoden zu konstruieren.

## Instanzeigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer`-Instanzen geteilt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe in Bytes des Arrays. Diese wird bei der Konstruktion des Arrays festgelegt und kann nur mit der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode geändert werden, wenn der `SharedArrayBuffer` wachstumsfähig ist.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanz-Objekt erstellt hat. Für `SharedArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}-Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Nur-Lese-Attribut. Gibt `true` zurück, wenn der `SharedArrayBuffer` wachsen kann, oder `false`, wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die maximal mögliche Länge in Bytes, auf die der `SharedArrayBuffer` wachsen kann. Diese wird bei der Konstruktion des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `begin`, einschließlich bis `end`, ausschließlich ist. Wenn `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.

## Beispiele

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
- [Shared Memory – ein kurzes Tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 Ecmascript-Sharedmem-Vorschlag
- [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [Updates zu SharedArrayBuffer in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
