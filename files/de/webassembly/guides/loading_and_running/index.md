---
title: Laden und Ausführen von WebAssembly-Code
slug: WebAssembly/Guides/Loading_and_running
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

Um WebAssembly in JavaScript zu verwenden, müssen Sie zunächst Ihr Modul in den Speicher laden, bevor Sie es kompilieren/instanziieren. Dieser Artikel bietet eine Referenz zu den verschiedenen Mechanismen, die verwendet werden können, um WebAssembly-Bytecode abzurufen, sowie zur Kompilierung/Instanziierung und Ausführung.

## Welche Optionen gibt es?

WebAssembly ist noch nicht mit `<script type='module'>` oder `import`-Anweisungen integriert, daher gibt es keinen Weg, den Browser Module automatisch mit Imports abrufen zu lassen.

Die älteren Methoden [`WebAssembly.compile`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) erfordern, dass Sie einen {{jsxref("ArrayBuffer")}} erstellen, der Ihr WebAssembly-Modul-Binärformat enthält, nachdem Sie die rohen Bytes abgerufen haben, und es dann kompilieren/instanziieren. Dies ist analog zu `new Function(string)`, außer dass wir einen String von Zeichen (JavaScript-Quellcode) mit einem Array-Puffer von Bytes (WebAssembly-Quellcode) ersetzen.

Die neueren Methoden [`WebAssembly.compileStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) sind deutlich effizienter — sie führen ihre Aktionen direkt auf dem rohen Byte-Stream aus, der aus dem Netzwerk kommt, und eliminieren so den Bedarf für den {{jsxref("ArrayBuffer")}}-Schritt.

Wie bekommen wir also diese Bytes in einen Array-Puffer und kompilieren sie? Die folgenden Abschnitte erklären es.

## Verwendung von Fetch

[Fetch](/de/docs/Web/API/Fetch_API) ist eine komfortable, moderne API für das Abrufen von Netzwerkressourcen.

Der schnellste und effizienteste Weg, ein Wasm-Modul abzurufen, ist die Verwendung der neueren [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode, die einen `fetch()`-Aufruf als erstes Argument verwenden kann und das Abrufen, Kompilieren und Instanziieren des Moduls in einem Schritt handhabt, indem es den rohen Bytecode als Stream vom Server abruft:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

Wenn wir die ältere [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Methode verwenden würden, die nicht auf dem direkten Stream funktioniert, müssten wir einen zusätzlichen Schritt durchführen, um den abgerufenen Bytecode in einen {{jsxref("ArrayBuffer")}} umzuwandeln, so:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Nebenbemerkung zu den `instantiate()`-Überladungen

Die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) hat zwei Überladungsformen — die oben gezeigte Form nimmt den zu kompilierenden Bytecode als Argument und gibt ein Promise zurück, das zu einem Objekt führt, das sowohl das kompilierte Modulobjekt als auch eine instanziierte Instanz davon enthält. Das Objekt sieht so aus:

```js
({
  module: Module, // The newly compiled WebAssembly.Module object,
  instance: Instance, // A new WebAssembly.Instance of the module object
});
```

> [!NOTE]
> Normalerweise interessiert uns nur die Instanz, aber es ist nützlich, das Modul zu haben, falls wir es zwischenspeichern, mit einem anderen Worker oder Fenster über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) teilen oder weitere Instanzen erstellen wollen.

> [!NOTE]
> Die zweite Überladungsform nimmt ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt als Argument und gibt direkt ein Promise zurück, das das Instanzobjekt als Ergebnis enthält. Siehe das [Beispiel zur zweiten Überladung](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#second_overload_example).

### Ausführen Ihres WebAssembly-Codes

Sobald Ihre WebAssembly-Instanz in Ihrem JavaScript verfügbar ist, können Sie beginnen, die Funktionen zu verwenden, die über die [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft exportiert wurden. Ihr Code könnte etwa so aussehen:

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

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist etwas älter als Fetch, kann aber dennoch verwendet werden, um ein typisiertes Array zu erhalten. Angenommen, unser Modul heißt `simple.wasm`:

1. Erstellen Sie eine neue Instanz von [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest), und verwenden Sie die Methode [`open()`](/de/docs/Web/API/XMLHttpRequest/open), um eine Anforderung zu öffnen. Setzen Sie die Anforderungsmethode auf `GET` und deklarieren Sie den Pfad zur Datei, die Sie abrufen möchten.
2. Der Schlüsselteil hierbei ist, den Antworttyp auf `'arraybuffer'` mittels der Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) zu setzen.
3. Senden Sie dann die Anforderung mit [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send).
4. Verwenden Sie den [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignishandler, um eine Funktion aufzurufen, wenn die Antwort heruntergeladen wurde — in dieser Funktion erhalten Sie den Array-Puffer aus der Eigenschaft [`response`](/de/docs/Web/API/XMLHttpRequest/response) und übergeben diesen dann unserer Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static), wie wir es mit Fetch getan haben.

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
> Ein Beispiel hierfür in Aktion sehen Sie in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
