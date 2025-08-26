---
title: Laden und Ausführen von WebAssembly-Code
slug: WebAssembly/Guides/Loading_and_running
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

Um WebAssembly in JavaScript zu verwenden, müssen Sie zunächst Ihr Modul in den Speicher laden, bevor Sie es kompilieren/instanziieren. Dieser Artikel bietet eine Referenz für die verschiedenen Mechanismen, die verwendet werden können, um WebAssembly-Bytecode abzurufen, sowie dafür, wie er kompiliert/instanziiert und dann ausgeführt wird.

## Welche Optionen gibt es?

WebAssembly ist noch nicht in `<script type='module'>` oder `import`-Anweisungen integriert, daher gibt es keinen Weg, den Browser dazu zu bringen, Module für Sie über Imports abzurufen.

Die älteren Methoden [`WebAssembly.compile`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) erfordern, dass Sie einen {{jsxref("ArrayBuffer")}} erstellen, der Ihr WebAssembly-Modul-Binär nach dem Abrufen der rohen Bytes enthält, und ihn dann kompilieren/instanziieren. Dies ist analog zu `new Function(string)`, abgesehen davon, dass wir einen Zeichenfolgenpuffer (JavaScript-Quellcode) durch einen Array-Puffer von Bytes (WebAssembly-Quellcode) ersetzen.

Die neueren Methoden [`WebAssembly.compileStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) sind viel effizienter — sie führen ihre Aktionen direkt auf dem rohen Byte-Stream aus, der aus dem Netzwerk kommt, und umgehen den Bedarf für den {{jsxref("ArrayBuffer")}}-Schritt.

Wie bekommen wir also diese Bytes in einen Array-Puffer und kompilieren sie? Die folgenden Abschnitte erklären es.

## Verwendung von Fetch

[Fetch](/de/docs/Web/API/Fetch_API) ist eine bequeme, moderne API zum Abrufen von Netzwerkressourcen.

Der schnellste und effizienteste Weg, ein Wasm-Modul abzurufen, ist die Verwendung der neueren Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), die einen `fetch()`-Aufruf als erstes Argument annehmen kann und das Abrufen, Kompilieren und Instantiieren des Moduls in einem Schritt verarbeitet, indem sie den rohen Bytecode während des Streams vom Server abgreift:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

Wenn wir die ältere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwenden würden, die nicht auf dem direkten Stream arbeitet, müssten wir einen zusätzlichen Schritt durchführen, um die abgerufenen Bytecodes in einen {{jsxref("ArrayBuffer")}} zu konvertieren, so wie:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Nebenbemerkung zu instantiate()-Überladungen

Die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) hat zwei Überladungsformen — die oben gezeigte nimmt den zu kompilierenden Bytecode als Argument und gibt ein Promise zurück, das ein Objekt enthält, das sowohl das kompilierte Modulobjekt als auch eine instanziierte Instanz davon enthält. Das Objekt sieht folgendermaßen aus:

```js
({
  module: Module, // The newly compiled WebAssembly.Module object,
  instance: Instance, // A new WebAssembly.Instance of the module object
});
```

> [!NOTE]
> Üblicherweise interessieren wir uns nur für die Instanz, aber es ist nützlich, das Modul zu haben, falls wir es zwischenspeichern, mit einem anderen Worker oder Fenster über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) teilen oder weitere Instanzen erstellen möchten.

> [!NOTE]
> Die zweite Überladungsform nimmt ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt als Argument und gibt ein Promise zurück, das direkt das Instanzobjekt als Ergebnis enthält. Siehe das [Second overload example](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#second_overload_example).

### Ausführen Ihres WebAssembly-Codes

Sobald Sie Ihre WebAssembly-Instanz in Ihrem JavaScript verfügbar haben, können Sie beginnen, die Funktionen zu verwenden, die über die Eigenschaft [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) exportiert wurden. Ihr Code könnte wie folgt aussehen:

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
> Für weitere Informationen darüber, wie das Exportieren aus einem WebAssembly-Modul funktioniert, lesen Sie [Using the WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) und [Understanding WebAssembly text format](/de/docs/WebAssembly/Guides/Understanding_the_text_format).

## Verwendung von XMLHttpRequest

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist etwas älter als Fetch, kann aber immer noch problemlos verwendet werden, um ein typisiertes Array abzurufen. Angenommen, unser Modul heißt `simple.wasm`:

1. Erstellen Sie eine neue [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest)-Instanz und verwenden Sie deren [`open()`](/de/docs/Web/API/XMLHttpRequest/open)-Methode, um eine Anfrage zu öffnen, indem Sie die Anfragemethode auf `GET` setzen und den Pfad zu der Datei angeben, die wir abrufen möchten.
2. Der Schlüsselteil hierbei ist, den Antworttyp auf `'arraybuffer'` mit der Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) festzulegen.
3. Senden Sie als Nächstes die Anfrage mit [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send).
4. Wir verwenden dann den [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event)-Ereignishandler, um eine Funktion aufzurufen, wenn die Antwort fertig heruntergeladen wurde — in dieser Funktion erhalten wir den Array-Puffer von der Eigenschaft [`response`](/de/docs/Web/API/XMLHttpRequest/response) und führen diesen dann in unsere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein, wie wir es mit Fetch getan haben.

Der endgültige Code sieht folgendermaßen aus:

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
> Sie können ein Beispiel hierfür in Aktion sehen in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
