---
title: Der Structured Clone Algorithm
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{DefaultAPISidebar("Web Workers API") }}

Der **Structured Clone Algorithm** kopiert komplexe JavaScript-Objekte. Er wird intern verwendet, wenn [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) aufgerufen wird, um Daten zwischen [Workers](/de/docs/Web/API/Worker) via [`postMessage()`](/de/docs/Web/API/Worker/postMessage) zu übertragen, Objekte mit [IndexedDB](/de/docs/Glossary/IndexedDB) zu speichern oder Objekte für [andere APIs](#siehe_auch) zu kopieren.

Er klont, indem er durch das Eingabeobjekt rekursiv durchläuft und dabei eine Karte zuvor besuchter Referenzen beibehält, um endlos kreisende Zyklen zu vermeiden.

## Dinge, die mit Structured Clone nicht funktionieren

- {{jsxref("Function")}}-Objekte können vom Structured Clone Algorithm nicht dupliziert werden; ein Versuch führt zu einer `DataCloneError`-Ausnahme.
- Das Klonen von DOM-Knoten wirft ebenfalls eine `DataCloneError`-Ausnahme.
- Bestimmte Objekteigenschaften werden nicht beibehalten:

  - Die `lastIndex`-Eigenschaft von {{jsxref("RegExp")}}-Objekten wird nicht beibehalten.
  - Eigenschaftsbeschreibungen, Setter, Getter und ähnliche metadatenartige Merkmale werden nicht dupliziert.
    Wenn ein Objekt beispielsweise mit einem [Eigenschaftsbeschreiber](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) als schreibgeschützt markiert ist, wird es im Duplikat als schreib/lesbar sein, da dies der Standard ist.
  - Die Prototypkette wird nicht durchlaufen oder dupliziert.
  - [Klasseneigene private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) werden nicht dupliziert. (Obwohl private Eigenschaften von eingebauten Typen dupliziert werden können.)

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
- {{jsxref("Object")}}-Objekte: aber nur einfache Objekte (z.B. aus Objektliteralen).
- [Primitive Typen](/de/docs/Web/JavaScript/Data_structures#primitive_values), außer `symbol`.
- {{jsxref("RegExp")}}: aber beachten Sie, dass `lastIndex` nicht beibehalten wird.
- {{jsxref("Set")}}
- {{jsxref("String")}}
- {{jsxref("TypedArray")}}

#### Fehlertypen

Für `Error`-Typen muss der Fehlertyp einer der folgenden sein: {{jsxref("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} (oder wird auf "Error" gesetzt).

Browser müssen die Eigenschaften `name` und `message` serialisieren und sollen auch andere "interessante" Eigenschaften der Fehler wie `stack`, `cause` usw. serialisieren.

Die Unterstützung für {{JSxRef("AggregateError")}} wird voraussichtlich zur Spezifikation in [whatwg/html#5749](https://github.com/whatwg/html/pull/5749) hinzugefügt (und ist bereits in einigen Browsern unterstützt).

### Web/API-Typen

- [`AudioData`](/de/docs/Web/API/AudioData)
- [`Blob`](/de/docs/Web/API/Blob)
- [`CropTarget`](/de/docs/Web/API/CropTarget)
- [`CryptoKey`](/de/docs/Web/API/CryptoKey)
- [`DOMException`](/de/docs/Web/API/DOMException): Browser müssen die Eigenschaften [`name`](/de/docs/Web/API/DOMException/name) und [`message`](/de/docs/Web/API/DOMException/message) serialisieren. Andere Attribute können ebenfalls serialisiert/gekloont werden.
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)
- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
- [`DOMQuad`](/de/docs/Web/API/DOMQuad)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)
- [`File`](/de/docs/Web/API/File)
- [`FileList`](/de/docs/Web/API/FileList)
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)

## Siehe auch

- [HTML-Spezifikation: Sichere Übergabe strukturierter Daten](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- [Transferable Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects)
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
- [`window.postMessage()`](/de/docs/Web/API/Window/postMessage)
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
