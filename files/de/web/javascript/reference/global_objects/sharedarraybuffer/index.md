---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`SharedArrayBuffer`** Objekt wird verwendet, um einen generischen, rohen binären Datenpuffer darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}} Objekt, jedoch so, dass Ansichten auf gemeinsam genutzten Speicher erstellt werden können. Ein `SharedArrayBuffer` ist kein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects), im Gegensatz zu einem `ArrayBuffer`, der übertragbar ist.

## Beschreibung

Um Speicher mit `SharedArrayBuffer` Objekten von einem Agenten im Cluster zu einem anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer seiner Web-Worker), werden [`postMessage`](/de/docs/Web/API/Worker/postMessage) und [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der strukturierte Klonalgorithmus akzeptiert `SharedArrayBuffer` Objekte und typisierte Arrays, die auf `SharedArrayBuffer` Objekte abgebildet sind. In beiden Fällen wird das `SharedArrayBuffer` Objekt an den Empfänger übertragen, was in einem neuen, privaten `SharedArrayBuffer` Objekt beim empfangenden Agenten resultiert (ähnlich wie bei {{jsxref("ArrayBuffer")}}). Jedoch referenziert der gemeinsam genutzte Datenblock, auf den die beiden `SharedArrayBuffer` Objekte verweisen, denselben Datenblock, und ein Nebeneffekt auf den Block in einem Agenten wird schließlich im anderen Agenten sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsam genutzter Speicher kann gleichzeitig in Workern oder im Hauptthread erstellt und aktualisiert werden. Abhängig vom System (der CPU, dem Betriebssystem, dem Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten verbreitet wird. Zur Synchronisation sind {{jsxref("Atomics", "atomare", "", 1)}} Operationen erforderlich.

`SharedArrayBuffer` Objekte werden von einigen Web-APIs verwendet, wie zum Beispiel:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsam genutzter Speicher und hochauflösende Timer wurden Anfang 2018 effektiv [deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Hinblick auf [Spectre](<https://de.wikipedia.org/wiki/Spectre_(Sicherheitsl%C3%BCcke)>). Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um gemeinsam genutzten Speicher wieder zu aktivieren.

Als Grundanforderung muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) vorliegen.

Für Top-Level-Dokumente müssen zwei Header gesetzt werden, um Ihre Seite cross-origin zu isolieren:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit `same-origin` als Wert (schützt Ihre Herkunft vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrer Herkunft)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolierung erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaft testen, die in Fenster- und Worker-Kontexten verfügbar ist:

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

Mit diesen beiden gesetzten Headern wirft `postMessage()` keine Fehler mehr für `SharedArrayBuffer` Objekte und gemeinsam genutzter Speicher über Threads hinweg ist daher verfügbar.

Eingebettete Dokumente und dedizierte Worker müssen ebenfalls den [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) Header mit demselben Wert setzen. Für eingebettete Dokumente und Subressourcen derselben Herkunft sind keine weiteren Änderungen erforderlich. Gleiches gilt für Cross-Origin-Dokumente und Subressourcen innerhalb derselben Site. Dokumente und Subressourcen, die von einer anderen Seite stammen, aber zur gleichen Site gehören, müssen den [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) Header mit `same-site` als Wert setzen. Ihre Cross-Origin- (und Cross-Site-) Gegenstücke müssen denselben Header mit `cross-origin` als Wert setzen. Beachten Sie, dass das Setzen des [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) Headers auf einen anderen Wert als `same-origin` die Ressource für potenzielle Angriffe wie [Spectre](<https://de.wikipedia.org/wiki/Spectre_(Sicherheitsl%C3%BCcke)>) öffnet.

Beachten Sie, dass der [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) Header Ihre Fähigkeit einschränkt, eine Referenz zu Pop-ups zu behalten. Der direkte Zugriff zwischen zwei Top-Level-Fensterkontexten funktioniert im Wesentlichen nur, wenn sie aus derselben Herkunft stammen und beide denselben Header mit denselben Werten tragen.

### API-Verfügbarkeit

Je nachdem, ob die oben genannten Sicherheitsmaßnahmen getroffen wurden, haben die verschiedenen speicherteilenden APIs unterschiedliche Verfügbarkeiten:

- Das `Atomics` Objekt ist immer verfügbar.
- `SharedArrayBuffer` Objekte sind prinzipiell immer verfügbar, jedoch ist der Konstruktor im globalen Objekt standardmäßig verborgen, es sei denn, die beiden oben genannten Header sind gesetzt, um die Web-Kompatibilität zu gewährleisten. Es besteht Hoffnung, dass diese Einschränkung in Zukunft aufgehoben werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) kann dennoch verwendet werden, um eine Instanz zu erhalten.
- Wenn die beiden oben genannten Header nicht gesetzt sind, werden die verschiedenen `postMessage()` APIs Exceptions für `SharedArrayBuffer` Objekte werfen. Wenn sie gesetzt sind, funktionieren `postMessage()` auf `Window` Objekten und dedizierten Workern und erlauben das Teilen von Speicher.

### WebAssembly geteilter Speicher

[`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekte können mit dem [`shared`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory#shared) Konstruktorflag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das erstellte `Memory` Objekt zwischen Workern über `postMessage()` geteilt werden, genau wie ein `SharedArrayBuffer`, und der unterstützende [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) des `Memory` Objekts ist ein `SharedArrayBuffer`. Daher gelten die oben aufgeführten Anforderungen für das Teilen eines `SharedArrayBuffer` zwischen Workern auch für das Teilen eines `WebAssembly.Memory`.

Der WebAssembly Threads Vorschlag definiert ebenfalls einen neuen Satz
von [atomaren](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Genau wie `SharedArrayBuffer` und seine Methoden bedingungslos aktiviert sind (und nur das Teilen zwischen Threads von den neuen Headern abhängt), sind die WebAssembly atomaren Anweisungen ebenfalls bedingungslos erlaubt.

### Erweitern von SharedArrayBuffers

`SharedArrayBuffer` Objekte können erweiterbar gemacht werden, indem die `maxByteLength` Option beim Aufruf des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} Konstruktors einbezogen wird. Sie können abfragen, ob ein `SharedArrayBuffer` erweiterbar ist und wie groß seine maximale Größe ist, indem Sie auf seine {{jsxref("SharedArrayBuffer/growable", "growable")}} und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} Eigenschaften zugreifen. Sie können einem erweiterbaren `SharedArrayBuffer` mit einem Aufruf von {{jsxref("SharedArrayBuffer/grow", "grow()")}} eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Features machen das Erweitern von `SharedArrayBuffer`s effizienter — andernfalls müssten Sie eine Kopie des Puffers mit neuer Größe erstellen. Es gibt JavaScript auch diesbezüglich Gleichheit mit WebAssembly (Wasm lineares Gedächtnis kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) angepasst werden).

Aus Sicherheitsgründen können `SharedArrayBuffer`s nicht verkleinert, sondern nur erweitert werden.

## Konstruktor

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : Erstellt ein neues `SharedArrayBuffer` Objekt.

## Statische Eigenschaften

- [`SharedArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus `SharedArrayBuffer` Methoden zu konstruieren.

## Instanzeigenschaften

Diese Eigenschaften sind auf `SharedArrayBuffer.prototype` definiert und werden von allen `SharedArrayBuffer` Instanzen gemeinsam genutzt.

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : Die Größe, in Bytes, des Arrays. Diese wird bei der Erstellung des Arrays festgelegt und kann nur geändert werden, wenn das `SharedArrayBuffer` erweiterbar ist, durch die {{jsxref("SharedArrayBuffer.prototype.grow()")}} Methode.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SharedArrayBuffer` Instanzen ist der initiale Wert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}} Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `SharedArrayBuffer` erweiterbar ist, oder `false`, wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge, in Bytes, auf die der `SharedArrayBuffer` erweitert werden kann. Diese wird bei der Erstellung des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Erweitert den `SharedArrayBuffer` auf die angegebene Größe, in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer`s von `begin` (einschließlich) bis `end` (ausschließlich) ist. Wenn entweder `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.

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

### Nutzung in einem WebGL-Puffer

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
- [Gemeinsam genutzter Speicher – ein kurzes Tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem Vorschlag
- [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [SharedArrayBuffer-Updates in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
