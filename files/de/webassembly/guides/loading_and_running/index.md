---
title: Laden und Ausführen von WebAssembly-Code
slug: WebAssembly/Guides/Loading_and_running
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Um WebAssembly in JavaScript zu verwenden, müssen Sie zuerst Ihr Modul in den Speicher laden, bevor Sie es kompilieren/instanziieren. Dieser Artikel bietet eine Referenz für die verschiedenen Mechanismen, die verwendet werden können, um WebAssembly-Bytecode abzurufen, sowie die Schritte zum Kompilieren/Instanziieren und Ausführen.

## Was sind die Optionen?

WebAssembly ist noch nicht mit `<script type='module'>` oder `import`-Anweisungen integriert, daher gibt es keinen Weg, dass der Browser Module für Sie über Importe abruft.

Die älteren Methoden [`WebAssembly.compile`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) erfordern, dass Sie ein {{jsxref("ArrayBuffer")}} erstellen, welches Ihr WebAssembly-Modul-Binär nach dem Abrufen der Rohbytes enthält, und es dann kompilieren/instanziieren. Dies ist analog zu `new Function(string)`, außer dass wir eine Zeichenkette (JavaScript-Quellcode) durch einen Array-Buffer von Bytes (WebAssembly-Quellcode) ersetzen.

Die neueren Methoden [`WebAssembly.compileStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) sind viel effizienter — sie führen ihre Aktionen direkt auf dem Rohdatenstrom von Bytes aus, die aus dem Netzwerk kommen, und beseitigen die Notwendigkeit für den {{jsxref("ArrayBuffer")}}-Schritt.

Wie bekommen wir diese Bytes also in einen Array-Buffer und kompiliert? Die folgenden Abschnitte erklären es.

## Verwendung von Fetch

[Fetch](/de/docs/Web/API/Fetch_API) ist eine bequeme, moderne API zum Abrufen von Netzwerkressourcen.

Der schnellste und effizienteste Weg, ein Wasm-Modul abzurufen, ist die Verwendung der neueren Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), die einen `fetch()`-Aufruf als erstes Argument nehmen kann und das Abrufen, Kompilieren und Instanziieren des Moduls in einem Schritt übernimmt, wobei der Rohbyte-Code abgerufen wird, während er vom Server gestreamt wird:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

Wenn wir die ältere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwenden würden, die nicht auf dem direkten Stream funktioniert, bräuchten wir einen zusätzlichen Schritt, um den abgerufenen Byte-Code in ein {{jsxref("ArrayBuffer")}} zu konvertieren, wie folgt:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Nebenbemerkung zu Overloads von instantiate()

Die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) hat zwei Überladungsformen — die oben gezeigte nimmt den Byte-Code zum Kompilieren als Argument und gibt ein Promise zurück, das zu einem Objekt mit sowohl dem kompilierten Modulobjekt als auch einer instanziierten Instanz desselben aufgelöst wird. Das Objekt sieht so aus:

```js-nolint
{
  module: Module, // The newly compiled WebAssembly.Module object,
  instance: Instance, // A new WebAssembly.Instance of the module object
}
```

> [!NOTE]
> Normalerweise interessieren wir uns nur für die Instanz, aber es ist nützlich, das Modul zu haben, falls wir es zwischenspeichern, mit einem anderen Worker oder Fenster per [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) teilen oder mehr Instanzen erstellen wollen.

> [!NOTE]
> Die zweite Überladungsform nimmt ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt als Argument und gibt ein Promise zurück, das direkt das Instanzobjekt als Ergebnis enthält. Siehe das [Beispiel für die zweite Überladung](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#second_overload_example).

### Ausführen Ihres WebAssembly-Codes

Sobald Sie Ihre WebAssembly-Instanz in Ihrem JavaScript verfügbar haben, können Sie die Funktionen, die über die [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft exportiert wurden, nutzen. Ihr Code könnte etwa so aussehen:

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
> Für weitere Informationen darüber, wie das Exportieren aus einem WebAssembly-Modul funktioniert, lesen Sie [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) und [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Guides/Understanding_the_text_format).

## Verwendung von XMLHttpRequest

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist etwas älter als Fetch, kann aber immer noch problemlos verwendet werden, um ein typisiertes Array zu erhalten. Angenommen, unser Modul heißt `simple.wasm`:

1. Erstellen Sie eine neue Instanz von [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest) und verwenden Sie die [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode, um eine Anforderung zu öffnen, indem Sie die Anforderungsmethode auf `GET` setzen und den Pfad zur Datei angeben, die wir abrufen möchten.
2. Der wesentliche Teil hierbei ist es, den Antworttyp auf `'arraybuffer'` mit der Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) festzulegen.
3. Senden Sie anschließend die Anforderung mit [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send).
4. Verwenden Sie dann den [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignishandler, um eine Funktion aufzurufen, wenn die Antwort vollständig heruntergeladen wurde — in dieser Funktion erhalten wir den Array-Buffer aus der Eigenschaft [`response`](/de/docs/Web/API/XMLHttpRequest/response) und geben ihn dann in unsere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein, wie wir es mit Fetch getan haben.

Der endgültige Code sieht so aus:

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
> Sie können ein Beispiel dafür in Aktion in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html) sehen.
