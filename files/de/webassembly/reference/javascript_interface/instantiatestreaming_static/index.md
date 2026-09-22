---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 1e333526315c95488d86013289a114f0f75f9f5f
---

Die statische Methode **`WebAssembly.instantiateStreaming()`** kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten Quelle. Dies ist die effizienteste und am besten optimierte Methode, Wasm-Code zu laden.

> [!NOTE]
> Webseiten mit einer strengen [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) können das Kompilieren und Ausführen von WebAssembly-Modulen blockieren.
> Weitere Informationen dazu, wie Sie das Kompilieren und Ausführen von WebAssembly zulassen, finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source)
WebAssembly.instantiateStreaming(source, importObject)
WebAssembly.instantiateStreaming(source, importObject, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das mit einem solchen Objekt erfüllt wird. Es stellt die Quelle eines Wasm-Moduls dar, das Sie streamen, kompilieren und instanziieren möchten.
- `importObject` {{optional_inline}}
  - : Ein Objekt mit den Werten, die in die neu erstellte `Instance` importiert werden sollen, beispielsweise Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte.
    Für jeden deklarierten Import des kompilierten Moduls muss eine passende Eigenschaft vorhanden sein, andernfalls wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt mit Kompilierungsoptionen. Es kann folgende Eigenschaften enthalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript-Built-ins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings legen fest, welche Built-ins Sie aktivieren möchten. Derzeit ist nur der Wert `"js-string"` verfügbar, der JavaScript-String-Built-ins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das mit einem `ResultObject` erfüllt wird, das zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul repräsentiert. Dieses `Module` kann erneut instanziiert oder über [postMessage()](/de/docs/Web/API/Worker/postMessage) geteilt werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt, das alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Antwort einen falschen MIME-Typ hat (statt `application/wasm`), wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Operation fehlschlägt, wird das Promise je nach Ursache des Fehlers mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) abgelehnt.

## Beispiele

### Instanziieren per Streaming

Das folgende Beispiel (siehe die [Demo „instantiate-streaming.html“](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) auf GitHub; Sie können sie auch [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) streamt ein Wasm-Modul direkt aus einer Quelle, kompiliert und instanziiert es anschließend. Das Promise wird dabei mit einem `ResultObject` erfüllt.
Da die Funktion `instantiateStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt einen Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben. Sobald das Promise erfüllt wird, wird die Antwort an die Funktion übergeben.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Anschließend wird auf die `instance`-Eigenschaft des `ResultObject` zugegriffen und die darin enthaltene exportierte Funktion aufgerufen.

> [!NOTE]
> Damit dies funktioniert, sollte der Server `.wasm`-Dateien mit dem MIME-Typ `application/wasm` zurückgeben.

### JavaScript-Built-ins und globale String-Importe aktivieren

Dieses Beispiel aktiviert JavaScript-String-Built-ins und importierte globale String-Konstanten beim Kompilieren und Instanziieren des Wasm-Moduls mit `instantiateStreaming()`. Anschließend wird die exportierte Funktion `main()` ausgeführt, die `"hello world!"` in der Konsole ausgibt. [Sehen Sie sich das Beispiel live an](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate-streaming/).

```js
const importObject = {
  // Regular import
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
};

WebAssembly.instantiateStreaming(
  fetch("log-concat.wasm"),
  importObject,
  compileOptions,
).then((result) => result.instance.exports.main());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
