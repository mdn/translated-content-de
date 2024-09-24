---
title: Laden und Ausführen von WebAssembly-Code
slug: WebAssembly/Loading_and_running
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Um WebAssembly in JavaScript zu verwenden, müssen Sie zuerst Ihr Modul in den Speicher laden, bevor es kompiliert/instanziiert wird. Dieser Artikel bietet eine Referenz für die verschiedenen Mechanismen, die zum Abrufen von WebAssembly-Bytecode verwendet werden können, sowie dafür, wie man es dann kompiliert/instanziiert und ausführt.

## Welche Optionen gibt es?

WebAssembly ist noch nicht mit `<script type='module'>` oder `import`-Anweisungen integriert, daher gibt es keinen Weg, wie der Browser Module für Sie mittels Imports abruft.

Die älteren Methoden [`WebAssembly.compile`](/de/docs/WebAssembly/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) erfordern, dass Sie einen {{jsxref("ArrayBuffer")}} erstellen, der Ihr WebAssembly-Modul-Binär nach dem Abrufen der Rohbytes enthält, und dann kompilieren/instanziieren. Dies ist analog zu `new Function(string)`, außer dass wir eine Zeichenkette (JavaScript-Quellcode) durch einen Arrayspeicher von Bytes (WebAssembly-Quellcode) ersetzen.

Die neueren Methoden [`WebAssembly.compileStreaming`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) sind wesentlich effizienter — sie führen ihre Aktionen direkt auf dem Rohdatenstrom von Bytes aus, der aus dem Netzwerk kommt, und sparen so den Schritt des {{jsxref("ArrayBuffer")}}.

Wie bringen wir also diese Bytes in einen Array-Buffer und kompilieren sie? Die folgenden Abschnitte erklären dies.

## Verwendung von Fetch

[Fetch](/de/docs/Web/API/Fetch_API) ist eine bequeme, moderne API zum Abrufen von Netzwerkressourcen.

Der schnellste und effizienteste Weg, ein Wasm-Modul abzurufen, ist die Verwendung der neueren Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), die einen `fetch()`-Aufruf als erstes Argument nutzen kann und das Abrufen, Kompilieren und Instanziieren des Moduls in einem Schritt erledigt, während sie den Rohbytecode streamt:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

Wenn wir die ältere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) verwenden würden, die nicht direkt auf dem Stream funktioniert, bräuchten wir einen zusätzlichen Schritt, um den abgerufenen Bytecode in einen {{jsxref("ArrayBuffer")}} zu konvertieren, wie unten gezeigt:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Hinweis zu Überladungen von instantiate()

Die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) hat zwei Überladungsformen: die oben gezeigte nimmt den zu kompilierenden Bytecode als Argument und gibt ein Promise zurück, das zu einem Objekt aufgelöst wird, das sowohl das kompilierte Modulobjekt als auch eine instanziierte Instanz davon enthält. Das Objekt sieht so aus:

```js-nolint
{
  module: Module, // Das neu kompilierte WebAssembly.Module-Objekt,
  instance: Instance, // Eine neue WebAssembly.Instance des Modulobjekts
}
```

> [!NOTE]
> Normalerweise interessieren wir uns nur für die Instanz, aber es ist nützlich, das Modul zu haben, falls wir es zwischenspeichern, mit einem anderen Worker oder Fenster über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) teilen oder mehr Instanzen erstellen möchten.

> [!NOTE]
> Die zweite Überladungsform nimmt ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt als Argument und gibt ein Promise zurück, das direkt das Instanzobjekt als Ergebnis enthält. Siehe das [Beispiel zur zweiten Überladung](/de/docs/WebAssembly/JavaScript_interface/instantiate_static#second_overload_example).

### Ausführen Ihres WebAssembly-Codes

Sobald Sie Ihre WebAssembly-Instanz in Ihrem JavaScript verfügbar haben, können Sie beginnen, Funktionen zu nutzen, die über die Eigenschaft [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports) exportiert wurden. Ihr Code könnte folgendermaßen aussehen:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Eine exportierte Funktion aufrufen:
    obj.instance.exports.exported_func();

    // oder die Pufferinhalte eines exportierten Speichers zugreifen:
    const dv = new DataView(obj.instance.exports.memory.buffer);

    // oder die Elemente einer exportierten Tabelle zugreifen:
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> [!NOTE]
> Für mehr Informationen darüber, wie das Exportieren eines WebAssembly-Moduls funktioniert, lesen Sie bitte [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API) und [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Understanding_the_text_format).

## Verwendung von XMLHttpRequest

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist etwas älter als Fetch, kann aber immer noch gut verwendet werden, um ein typisiertes Array zu erhalten. Wiederum vorausgesetzt, unser Modul heißt `simple.wasm`:

1. Erstellen Sie eine neue {{domxref("XMLHttpRequest()")}}-Instanz und verwenden Sie deren Methode {{domxref("XMLHttpRequest.open","open()")}}, um eine Anfrage zu öffnen, indem Sie die Anfragemethode auf `GET` setzen und den Pfad zur Datei angeben, die Sie abrufen möchten.
2. Der Schlüsselschritt ist, den Antworttyp auf `'arraybuffer'` mit der Eigenschaft {{domxref("XMLHttpRequest.responseType","responseType")}} festzulegen.
3. Senden Sie anschließend die Anfrage mittels {{domxref("XMLHttpRequest.send()")}}.
4. Verwenden Sie den Ereignishandler {{domxref("XMLHttpRequest.load_event", "load")}}, um eine Funktion aufzurufen, wenn das Herunterladen der Antwort abgeschlossen ist — in dieser Funktion holen wir den Arraypuffer aus der Eigenschaft {{domxref("XMLHttpRequest.response", "response")}}, und geben diesen in unsere Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) ein, wie wir es mit Fetch getan haben.

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
> Sie können ein Beispiel hierfür in Aktion sehen in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
