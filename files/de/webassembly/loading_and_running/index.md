---
title: Laden und Ausführen von WebAssembly-Code
slug: WebAssembly/Loading_and_running
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Um WebAssembly in JavaScript zu verwenden, müssen Sie zunächst Ihr Modul in den Speicher laden, bevor Sie es kompilieren bzw. instanziieren. Dieser Artikel bietet eine Referenz zu den verschiedenen Mechanismen, mit denen Sie WebAssembly-Bytecode abrufen sowie kompilieren/instanziieren und ausführen können.

## Welche Optionen gibt es?

WebAssembly ist noch nicht mit `<script type='module'>` oder `import`-Anweisungen integriert, daher gibt es keinen Weg, um dem Browser bei Verwendung von Imports das Abrufen von Modulen zu überlassen.

Die älteren Methoden [`WebAssembly.compile`](/de/docs/WebAssembly/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) erfordern, dass Sie einen {{jsxref("ArrayBuffer")}} erstellen, der Ihr WebAssembly-Modul-Binärdaten enthält, nachdem Sie die Rohbytes abgerufen haben, und dann kompilieren/instanziieren Sie es. Dies ist analog zu `new Function(string)`, außer dass wir eine Zeichenfolge von Zeichen (JavaScript-Quellcode) durch einen Array-Puffer von Bytes (WebAssembly-Quellcode) ersetzen.

Die neueren Methoden [`WebAssembly.compileStreaming`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) sind wesentlich effizienter — sie führen ihre Aktionen direkt auf dem Rohdatenstrom von Bytes aus, der aus dem Netzwerk kommt, und sparen sich den Schritt des {{jsxref("ArrayBuffer")}}.

Wie bekommen wir also diese Bytes in einen Array-Puffer und kompilieren sie? Die folgenden Abschnitte erklären es.

## Verwendung von Fetch

[Fetch](/de/docs/Web/API/Fetch_API) ist eine bequeme, moderne API zum Abrufen von Netzwerkrressourcen.

Der schnellste und effizienteste Weg, ein Wasm-Modul abzurufen, ist die Verwendung der neueren Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), die einen `fetch()`-Aufruf als erstes Argument annehmen kann und das Abrufen, Kompilieren und Instanziieren des Moduls in einem Schritt behandelt, indem der Rohbytecode direkt vom Server gestreamt wird:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

Wenn wir die ältere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) verwenden, die nicht mit dem direkten Stream arbeitet, müssten wir einen zusätzlichen Schritt machen, um den abgerufenen Bytecode in einen {{jsxref("ArrayBuffer")}} zu konvertieren, so wie folgt:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Ein Exkurs zu `instantiate()` Overloads

Die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) hat zwei Überladungsformen — die obige Form nimmt den zu kompilierenden Bytecode als Argument und gibt ein `Promise` zurück, das sich in ein Objekt auflöst, das sowohl das kompilierte Modulobjekt als auch eine instanziierte Instanz davon enthält. Das Objekt sieht folgendermaßen aus:

```js-nolint
{
  module: Module, // The newly compiled WebAssembly.Module object,
  instance: Instance, // A new WebAssembly.Instance of the module object
}
```

> [!NOTE]
> Gewöhnlich interessiert uns nur die Instanz, aber es ist nützlich, das Modul zu haben, falls wir es cachen, mit einem anderen Worker oder Fenster über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) teilen oder mehr Instanzen erstellen möchten.

> [!NOTE]
> Die zweite Überladungsform nimmt ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt als Argument und gibt direkt ein Promise zurück, das die Instanz als Ergebnis enthält. Sehen Sie sich das [Beispiel zur zweiten Überladung](/de/docs/WebAssembly/JavaScript_interface/instantiate_static#second_overload_example) an.

### Ausführen Ihres WebAssembly-Codes

Sobald Sie Ihre WebAssembly-Instanz in Ihrem JavaScript verfügbar haben, können Sie mit der Nutzung der Funktionen beginnen, die über die [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)-Eigenschaft exportiert wurden. Ihr Code könnte folgendermaßen aussehen:

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

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist etwas älter als Fetch, kann aber dennoch gut verwendet werden, um ein typisiertes Array zu erhalten. Angenommen, unser Modul heißt `simple.wasm`:

1. Erstellen Sie eine neue Instanz von [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest) und verwenden Sie ihre Methode [`open()`](/de/docs/Web/API/XMLHttpRequest/open), um eine Anforderung zu öffnen, setzen Sie die Anforderungsmethode auf `GET`, und deklarieren Sie den Pfad zur Datei, die wir abrufen möchten.
2. Der entscheidende Teil ist, den Antworttyp auf `'arraybuffer'` mit der Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) zu setzen.
3. Senden Sie als nächstes die Anfrage mit [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send).
4. Dann verwenden wir den [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignishandler, um eine Funktion aufzurufen, wenn der Download der Antwort abgeschlossen ist — in dieser Funktion erhalten wir den Array-Puffer aus der Eigenschaft [`response`](/de/docs/Web/API/XMLHttpRequest/response) und leiten ihn dann, wie bei Fetch, in unsere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) ein.

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
> Ein Beispiel hierzu finden Sie in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
