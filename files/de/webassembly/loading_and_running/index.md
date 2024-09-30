---
title: Laden und Ausführen von WebAssembly-Code
slug: WebAssembly/Loading_and_running
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Um WebAssembly in JavaScript zu verwenden, müssen Sie zunächst Ihr Modul in den Speicher laden, bevor es kompiliert/instanziiert wird. Dieser Artikel bietet eine Referenz für die verschiedenen Mechanismen, die verwendet werden können, um WebAssembly-Bytecode abzurufen, sowie Anweisungen, wie man ihn kompilieren/instanziieren und dann ausführen kann.

## Welche Optionen gibt es?

WebAssembly ist noch nicht in `<script type='module'>` oder `import`-Anweisungen integriert, daher gibt es keinen Weg, dass der Browser Module für Sie über Importe abruft.

Die älteren Methoden [`WebAssembly.compile`](/de/docs/WebAssembly/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) erfordern, dass Sie einen {{jsxref("ArrayBuffer")}} erstellen, der Ihr WebAssembly-Modul-Binär nach dem Abrufen der Rohbytes enthält, und diesen dann kompilieren/instanziieren. Dies ist analog zu `new Function(string)`, außer dass wir eine Zeichenfolge (JavaScript-Quellcode) durch ein Array-Buffer von Bytes (WebAssembly-Quellcode) ersetzen.

Die neueren Methoden [`WebAssembly.compileStreaming`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) sind wesentlich effizienter – sie führen ihre Aktionen direkt auf dem Rohdatenstrom von Bytes aus, der aus dem Netzwerk kommt, und sparen den Schritt mit dem {{jsxref("ArrayBuffer")}} ein.

Wie bekommen wir also diese Bytes in einen Array-Buffer und kompiliert? Die folgenden Abschnitte erklären dies.

## Verwendung von Fetch

[Fetch](/de/docs/Web/API/Fetch_API) ist eine bequeme, moderne API zum Abrufen von Netzwerkressourcen.

Der schnellste und effizienteste Weg, ein Wasm-Modul abzurufen, ist die Verwendung der neueren Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), die einen `fetch()`-Aufruf als erstes Argument entgegennehmen kann und das Abrufen, Kompilieren und Instanziieren des Moduls in einem Schritt handhabt, während der Bytecode direkt vom Server gestreamt wird:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

Wenn wir die ältere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) verwenden, die nicht direkt auf den Stream arbeitet, müssten wir einen zusätzlichen Schritt durchführen, um den abgerufenen Bytecode in einen {{jsxref("ArrayBuffer")}} umzuwandeln, etwa so:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Nebenbemerkung zu instantiate()-Überladungen

Die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) hat zwei Überladungsvarianten – die oben gezeigte nimmt den zu kompilierenden Bytecode als Argument und gibt ein Promise zurück, das zu einem Objekt aufgelöst wird, das sowohl das kompilierte Modulobjekt als auch eine instanzierte Instanz davon enthält. Das Objekt sieht in etwa so aus:

```js-nolint
{
  module: Module, // The newly compiled WebAssembly.Module object,
  instance: Instance, // A new WebAssembly.Instance of the module object
}
```

> [!NOTE]
> In der Regel interessieren wir uns nur für die Instanz, aber es ist nützlich, das Modul zu haben, falls wir es cachen, mit einem anderen Worker oder Fenster via [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) teilen oder weitere Instanzen erstellen möchten.

> [!NOTE]
> Die zweite Überladungsform nimmt ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt als Argument und gibt ein Promise zurück, das direkt das Instanzobjekt als Ergebnis enthält. Siehe das [Beispiel für die zweite Überladung](/de/docs/WebAssembly/JavaScript_interface/instantiate_static#second_overload_example).

### Ausführen Ihres WebAssembly-Codes

Sobald Sie Ihre WebAssembly-Instanz in Ihrem JavaScript verfügbar haben, können Sie mit der Nutzung der über die Eigenschaft [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports) exportierten Funktionen beginnen. Ihr Code könnte etwa so aussehen:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Call an exported function:
    obj.instance.exports.exported_func();

    // or access the buffer contents of an exported memory:
    const dv = new DataView(obj.instance.exports.memory.buffer);

    // or access the elements of an exported table:
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> [!NOTE]
> Für weitere Informationen darüber, wie das Exportieren aus einem WebAssembly-Modul funktioniert, lesen Sie [Using the WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API) und [Understanding WebAssembly text format](/de/docs/WebAssembly/Understanding_the_text_format).

## Verwendung von XMLHttpRequest

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist etwas älter als Fetch, kann aber dennoch recht gut verwendet werden, um ein typisiertes Array zu erhalten. Wiederum, vorausgesetzt unser Modul heißt `simple.wasm`:

1. Erstellen Sie eine neue Instanz von [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest) und verwenden Sie deren Methode [`open()`](/de/docs/Web/API/XMLHttpRequest/open), um eine Anfrage zu öffnen, wobei Sie die Anfragemethode auf `GET` setzen und den Pfad zur Datei angeben, die wir abrufen möchten.
2. Der Schlüsselpunkt hierbei ist, den Antworttyp mittels der Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) auf `'arraybuffer'` zu setzen.
3. Senden Sie anschließend die Anfrage mit [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send).
4. Wir verwenden dann den [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignishandler, um eine Funktion aufzurufen, wenn der Download der Antwort abgeschlossen ist – in dieser Funktion erhalten wir den Array-Buffer aus der Eigenschaft [`response`](/de/docs/Web/API/XMLHttpRequest/response) und leiten diesen wie bei Fetch in unsere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) weiter.

Der finale Code sieht etwa so aus:

```js
const request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = () => {
  const bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> [!NOTE]
> Sie können ein Beispiel dafür in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html) sehen.
