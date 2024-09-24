---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Das **`SharedArrayBuffer`**-Objekt wird verwendet, um einen generischen rohen Binärdatenpuffer darzustellen, ähnlich dem {{jsxref("ArrayBuffer")}}-Objekt, jedoch so, dass Ansichten auf gemeinsam genutztem Speicher erstellt werden können. Ein `SharedArrayBuffer` ist kein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects), im Gegensatz zu einem `ArrayBuffer`, der übertragbar ist.

## Beschreibung

Um Speicher mit `SharedArrayBuffer`-Objekten von einem Agenten im Cluster zu einem anderen zu teilen (ein Agent ist entweder das Hauptprogramm der Webseite oder einer seiner Web-Worker), wird [`postMessage`](/de/docs/Web/API/Worker/postMessage) und [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet.

Der strukturierte Klonalgorithmus akzeptiert `SharedArrayBuffer`-Objekte und typisierte Arrays, die auf `SharedArrayBuffer`-Objekten abgebildet sind. In beiden Fällen wird das `SharedArrayBuffer`-Objekt an den Empfänger übertragen, was zu einem neuen, privaten `SharedArrayBuffer`-Objekt im empfangenden Agenten führt (genau wie bei {{jsxref("ArrayBuffer")}}). Der gemeinsam genutzte Datenblock, auf den die beiden `SharedArrayBuffer`-Objekte verweisen, ist jedoch derselbe Datenblock, und eine Nebenwirkung auf den Block in einem Agenten wird schließlich im anderen Agenten sichtbar.

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

Gemeinsam genutzter Speicher kann gleichzeitig in Arbeitern oder dem Haupt-Thread erstellt und aktualisiert werden. Abhängig vom System (der CPU, dem Betriebssystem, dem Browser) kann es eine Weile dauern, bis die Änderung in allen Kontexten propagiert wird. Um die Synchronisation zu gewährleisten, sind {{jsxref("Atomics", "Atomics", "", 1)}}-Operationen erforderlich.

`SharedArrayBuffer`-Objekte werden von einigen Web-APIs verwendet, wie zum Beispiel:

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Sicherheitsanforderungen

Gemeinsam genutzter Speicher und hochauflösende Timer wurden Anfang 2018 [deaktiviert](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) im Lichte von [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>). Im Jahr 2020 wurde ein neuer, sicherer Ansatz standardisiert, um gemeinsam genutzten Speicher wieder zu aktivieren.

Als grundlegende Anforderung muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) sein.

Für Top-Level-Dokumente müssen zwei Header gesetzt werden, um Ihre Website cross-origin zu isolieren:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit `same-origin` als Wert (schützt Ihre Herkunft vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit `require-corp` oder `credentialless` als Wert (schützt Opfer von Ihrer Herkunft)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolierung erfolgreich war, können Sie die {{domxref("Window.crossOriginIsolated")}}-Eigenschaft oder die {{domxref("WorkerGlobalScope.crossOriginIsolated")}}-Eigenschaft in Fenster- und Worker-Kontexten testen:

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

Mit diesen beiden gesetzten Headern wirft `postMessage()` keine Ausnahme mehr bei `SharedArrayBuffer`-Objekten und gemeinsam genutzter Speicher über Threads ist somit verfügbar.

Eingebettete Dokumente und dedizierte Worker müssen ebenfalls den [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)-Header mit demselben Wert setzen. Für gleiche Ursprungs-Dokumente und Subressourcen sind keine weiteren Änderungen erforderlich. Eingebettete Dokumente und Subressourcen derselben Website (aber unterschiedlichen Ursprungs) müssen den [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)-Header mit `same-site` als Wert setzen. Und ihre counterpart Dokumente und Subressourcen, die sowohl unterschiedlichen Ursprungs als auch von anderen Websites sind, müssen denselben Header mit `cross-origin` als Wert setzen. Beachten Sie, dass das Setzen des [`Cross-Origin-Resource-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)-Headers auf einen anderen Wert als `same-origin` die Ressource für potenzielle Angriffe, wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), öffnet.

Beachten Sie, dass der [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)-Header Ihre Fähigkeit einschränkt, eine Referenz auf Popups zu behalten. Direkter Zugriff zwischen zwei Top-Level-Fensterkontexten funktioniert grundsätzlich nur, wenn sie denselben Ursprung haben und dieselben zwei Header mit denselben zwei Werten tragen.

### API-Verfügbarkeit

Abhängig davon, ob die oben genannten Sicherheitsmaßnahmen getroffen werden, haben die verschiedenen speicherfreigebenden APIs unterschiedliche Verfügbarkeiten:

- Das `Atomics`-Objekt ist immer verfügbar.
- `SharedArrayBuffer`-Objekte sind grundsätzlich immer verfügbar, aber leider ist der Konstruktor im globalen Objekt versteckt, es sei denn, die oben genannten zwei Header sind gesetzt, um mit Webinhalten kompatibel zu sein. Es besteht die Hoffnung, dass diese Einschränkung in Zukunft aufgehoben werden kann. [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) kann weiterhin verwendet werden, um eine Instanz zu erhalten.
- Sofern die oben genannten zwei Header nicht gesetzt sind, werfen die verschiedenen `postMessage()`-APIs für `SharedArrayBuffer`-Objekte eine Ausnahme. Wenn sie gesetzt sind, funktionieren `postMessage()` auf `Window`-Objekten und dedizierten Workern und erlauben die Speicherfreigabe.

### WebAssembly gemeinsam genutzter Speicher

[`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte können mit dem [`shared`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory#shared)-Konstruktor-Flag erstellt werden. Wenn dieses Flag auf `true` gesetzt ist, kann das konstruierte `Memory`-Objekt wie `SharedArrayBuffer` zwischen Arbeitern über `postMessage()` geteilt werden, und der unterstützende [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) des `Memory`-Objekts ist ein `SharedArrayBuffer`. Daher gelten die oben genannten Anforderungen für das Teilen eines `SharedArrayBuffer` zwischen Arbeitern auch für das Teilen eines `WebAssembly.Memory`.

Der WebAssembly-Threads-Vorschlag definiert auch eine neue Reihe von [atomaren](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses) Anweisungen. Genau wie `SharedArrayBuffer` und seine Methoden sind bedingungslos aktiviert (und nur das Teilen zwischen Threads ist durch die neuen Header bedingt), sind auch die WebAssembly-atomaren Anweisungen bedingungslos erlaubt.

### Wachstum von SharedArrayBuffers

`SharedArrayBuffer`-Objekte können vergrößerbar gemacht werden, indem die `maxByteLength`-Option beim Aufruf des {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}-Konstruktors einbezogen wird. Sie können abfragen, ob ein `SharedArrayBuffer` vergrößerbar ist und wie seine maximale Größe ist, indem Sie auf seine {{jsxref("SharedArrayBuffer/growable", "growable")}}- und {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaften zugreifen. Sie können einem vergrößerbaren `SharedArrayBuffer` mit einem {{jsxref("SharedArrayBuffer/grow", "grow()")}}-Aufruf eine neue Größe zuweisen. Neue Bytes werden auf 0 initialisiert.

Diese Merkmale machen das Wachstum von `SharedArrayBuffer`s effizienter — andernfalls müssten Sie eine Kopie des Puffers mit einer neuen Größe erstellen. Es gibt JavaScript auch Parität mit WebAssembly in dieser Hinsicht (Wasm linearer Speicher kann mit [`WebAssembly.Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) vergrößert werden).

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
  - : Die Größe des Arrays in Bytes. Diese wird bei der Konstruktion des Arrays festgelegt und kann nur geändert werden, wenn der `SharedArrayBuffer` vergrößerbar ist, mit der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode.
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `SharedArrayBuffer`-Instanzen ist der Anfangswert der {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}-Konstruktor.
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : Schreibgeschützt. Gibt `true` zurück, wenn der `SharedArrayBuffer` vergrößert werden kann, oder `false`, wenn nicht.
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : Die schreibgeschützte maximale Länge, in Bytes, auf die der `SharedArrayBuffer` vergrößert werden kann. Dies wird bei der Konstruktion des Arrays festgelegt und kann nicht geändert werden.
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"SharedArrayBuffer"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : Vergrößert den `SharedArrayBuffer` auf die angegebene Größe in Bytes.
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : Gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `begin`, inklusive, bis `end`, exklusiv, ist. Wenn `begin` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.

## Beispiele

### Erstellen eines neuen SharedArrayBuffer

```js
const sab = new SharedArrayBuffer(1024);
```

### Slicen des SharedArrayBuffer

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Anleitung
- [Web-Worker](/de/docs/Web/API/Web_Workers_API)
- [Gemeinsam genutzter Speicher – ein kurzes Tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) im TC39 ecmascript-sharedmem Vorschlag
- [Ein Vorgeschmack auf JavaScripts neue parallele Primitive](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) auf hacks.mozilla.org (2016)
- [COOP und COEP erklärt](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) vom Chrome-Team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} und {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [SharedArrayBuffer-Updates in Android Chrome 88 und Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) auf developer.chrome.com (2021)
