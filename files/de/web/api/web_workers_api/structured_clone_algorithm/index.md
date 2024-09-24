---
title: Der strukturierte Klonalgorithmus
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
l10n:
  sourceCommit: 7349ddd2035059d215d6bc92e0dd77ca22b45a4f
---

{{DefaultAPISidebar("Web Workers API") }}

Der **strukturierte Klonalgorithmus** kopiert komplexe JavaScript-Objekte. Er wird intern verwendet, wenn {{domxref("structuredClone()")}} aufgerufen wird, um Daten zwischen [Workers](/de/docs/Web/API/Worker) mittels {{domxref("Worker.postMessage()", "postMessage()")}} zu übertragen, Objekte mit [IndexedDB](/de/docs/Glossary/IndexedDB) zu speichern oder Objekte für [andere APIs](#siehe_auch) zu kopieren.

Er klont, indem er das Eingabeobjekt rekursiv durchläuft und dabei eine Karte von bereits besuchten Referenzen führt, um unendliches Durchlaufen von Zyklen zu vermeiden.

## Dinge, die nicht mit strukturiertem Klonen funktionieren

- {{jsxref("Function")}}-Objekte können nicht vom strukturierten Klonalgorithmus dupliziert werden; ein Versuch führt zu einer `DataCloneError`-Ausnahme.
- Das Klonen von DOM-Knoten wirft ebenfalls eine `DataCloneError`-Ausnahme.
- Bestimmte Objekteigenschaften werden nicht beibehalten:

  - Die `lastIndex`-Eigenschaft von {{jsxref("RegExp")}}-Objekten wird nicht beibehalten.
  - Eigenschaftsbeschreibungen, Setter, Getter und ähnliche Metadaten werden nicht dupliziert.
    Zum Beispiel wird ein Objekt, das mit einem [Eigenschaftsbeschreiber](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) als schreibgeschützt markiert ist, im Duplikat als schreib/lesbar markiert, da dies der Standard ist.
  - Die Prototypenkette wird nicht durchlaufen oder dupliziert.
  - [Klassen-private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) werden nicht dupliziert. (Obwohl private Eigenschaften eingebauter Typen es sein können.)

## Unterstützte Typen

### JavaScript-Typen

- {{jsxref("Array")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Boolean")}}
- {{jsxref("DataView")}}
- {{jsxref("Date")}}
- {{jsxref("Error")}}-Typen (aber siehe [Fehlertypen](#fehlertypen) unten).
- {{jsxref("Map")}}
- {{jsxref("Number")}}
- {{jsxref("Object")}}-Objekte: aber nur einfache Objekte (z.B. aus Objektliteralen).
- [Primitive Typen](/de/docs/Web/JavaScript/Data_structures#primitive_values), außer `symbol`.
- {{jsxref("RegExp")}}: aber beachten Sie, dass `lastIndex` nicht beibehalten wird.
- {{jsxref("Set")}}
- {{jsxref("String")}}
- {{jsxref("TypedArray")}}

#### Fehlertypen

Bei `Error`-Typen muss der Fehlername einer der folgenden sein: {{jsxref("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} (oder er wird auf "Error" gesetzt).

Browser müssen die Eigenschaften `name` und `message` serialisieren und sollen andere "interessante" Eigenschaften der Fehler wie `stack`, `cause`, etc. serialisieren.

Unterstützung für {{JSxRef("AggregateError")}} wird voraussichtlich in die Spezifikation aufgenommen werden unter [whatwg/html#5749](https://github.com/whatwg/html/pull/5749) (und wird bereits in einigen Browsern unterstützt).

### Web/API-Typen

- {{domxref("AudioData")}}
- {{domxref("Blob")}}
- {{domxref("CropTarget")}}
- {{domxref("CryptoKey")}}
- {{domxref("DOMException")}}: Browser müssen die Eigenschaften {{domxref("DOMException.name","name")}} und {{domxref("DOMException.message","message")}} serialisieren. Andere Attribute können ebenfalls serialisiert/geklont werden.
- {{domxref("DOMMatrix")}}
- {{domxref("DOMMatrixReadOnly")}}
- {{domxref("DOMPoint")}}
- {{domxref("DOMPointReadOnly")}}
- {{domxref("DOMQuad")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMRectReadOnly")}}
- {{domxref("File")}}
- {{domxref("FileList")}}
- {{domxref("FileSystemDirectoryHandle")}}
- {{domxref("FileSystemFileHandle")}}
- {{domxref("FileSystemHandle")}}
- {{domxref("GPUCompilationInfo")}}
- {{domxref("GPUCompilationMessage")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RTCCertificate")}}
- {{domxref("VideoFrame")}}

## Siehe auch

- [HTML-Spezifikation: Sichere Übergabe strukturierter Daten](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects)
- {{domxref("structuredClone()")}}
- {{domxref("window.postMessage()")}}
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
