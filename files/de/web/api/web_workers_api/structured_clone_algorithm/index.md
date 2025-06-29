---
title: Der strukturierte Klon-Algorithmus
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{DefaultAPISidebar("Web Workers API") }}

Der **strukturierte Klon-Algorithmus** kopiert komplexe JavaScript-Objekte. Er wird intern verwendet, wenn [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) aufgerufen wird, um Daten zwischen [Workers](/de/docs/Web/API/Worker) über [`postMessage()`](/de/docs/Web/API/Worker/postMessage) zu übertragen, Objekte mit {{Glossary("IndexedDB", "IndexedDB")}} zu speichern oder Objekte für [andere APIs](#siehe_auch) zu kopieren.

Es wird durch Rekursion durch das Eingabeobjekt geklont, während eine Karte der bereits besuchten Referenzen erstellt wird, um das endlose Durchlaufen von Zyklen zu vermeiden.

## Dinge, die mit dem strukturierten Klon nicht funktionieren

- {{jsxref("Function")}}-Objekte können vom strukturierten Klon-Algorithmus nicht dupliziert werden; bei einem Versuch wird eine `DataCloneError`-Ausnahme ausgelöst.
- Das Klonen von DOM-Knoten führt ebenso zu einer `DataCloneError`-Ausnahme.
- Bestimmte Objekteigenschaften werden nicht beibehalten:
  - Die `lastIndex`-Eigenschaft von {{jsxref("RegExp")}}-Objekten wird nicht beibehalten.
  - Eigenschafts-Deskriptoren, Setter, Getter und ähnliche meta-datenähnliche Merkmale werden nicht dupliziert. Zum Beispiel, wenn ein Objekt mit einem [Eigenschafts-Deskriptor](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) als schreibgeschützt markiert ist, wird es in der Kopie schreibbar sein, da dies der Standard ist.
  - Die Prototypenkette wird nicht durchlaufen oder dupliziert.
  - [Private Klassenelemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) werden nicht dupliziert. (Obwohl interne Felder von eingebauten Typen möglicherweise doch.)

## Unterstützte Typen

### JavaScript-Typen

- {{jsxref("Array")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Boolean")}}
- {{jsxref("DataView")}}
- {{jsxref("Date")}}
- {{jsxref("Error")}}-Typen (siehe jedoch [Fehlertypen](#fehlertypen) unten).
- {{jsxref("Map")}}
- {{jsxref("Number")}}
- {{jsxref("Object")}}-Objekte: aber nur einfache Objekte (z. B. aus Objektliteralen).
- [Primitive Typen](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values), außer `symbol`.
- {{jsxref("RegExp")}}: Beachten Sie jedoch, dass `lastIndex` nicht beibehalten wird.
- {{jsxref("Set")}}
- {{jsxref("String")}}
- {{jsxref("TypedArray")}}

#### Fehlertypen

Für `Error`-Typen muss der Fehlername einer der folgenden sein: {{jsxref("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} (oder er wird auf "Error" gesetzt).

Browser müssen die Eigenschaften `name` und `message` serialisieren und sind angehalten, andere "interessante" Eigenschaften der Fehler wie `stack`, `cause`, usw. zu serialisieren.

{{JSxRef("AggregateError")}}-Unterstützung soll zur Spezifikation in [whatwg/html#5749](https://github.com/whatwg/html/pull/5749) hinzugefügt werden (und wird bereits in einigen Browsern unterstützt).

### Web/API-Typen

- [`AudioData`](/de/docs/Web/API/AudioData)
- [`Blob`](/de/docs/Web/API/Blob)
- [`CropTarget`](/de/docs/Web/API/CropTarget)
- [`CryptoKey`](/de/docs/Web/API/CryptoKey)
- [`DOMException`](/de/docs/Web/API/DOMException): Browser müssen die Eigenschaften [`name`](/de/docs/Web/API/DOMException/name) und [`message`](/de/docs/Web/API/DOMException/message) serialisieren. Andere Attribute können ebenfalls serialisiert/geklont werden.
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)
- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
- [`DOMQuad`](/de/docs/Web/API/DOMQuad)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
- [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)
- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)
- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
- [`File`](/de/docs/Web/API/File)
- [`FileList`](/de/docs/Web/API/FileList)
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)

> [!NOTE]
> Serialisierbare Objekte sind in [Web IDL-Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Serializable]` markiert.

## Siehe auch

- [HTML-Spezifikation: Sicheres Übergeben von strukturierten Daten](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects)
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
- [`window.postMessage()`](/de/docs/Web/API/Window/postMessage)
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
