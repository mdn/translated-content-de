---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.instantiateStreaming()`** kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrundeliegenden Quelle. Dies ist die effizienteste und optimierteste Methode, um Wasm-Code zu laden.

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verwenden, könnten verhindern, dass WebAssembly-Module kompiliert und ausgeführt werden. Weitere Informationen zur Erlaubnis der Kompilierung und Ausführung von WebAssembly finden Sie in den [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source)
WebAssembly.instantiateStreaming(source, importObject)
WebAssembly.instantiateStreaming(source, importObject, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Versprechen, das mit einem solchen erfüllt wird, das die zugrundeliegende Quelle eines Wasm-Moduls darstellt, das Sie streamen, kompilieren und instanziieren möchten.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie z.B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte. Es muss eine passende Eigenschaft für jeden deklarierten Import des kompilierten Moduls vorhanden sein, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das die Kompilierungsoptionen enthält. Eigenschaften können umfassen:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript Built-ins](/de/docs/WebAssembly/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die Built-ins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Built-ins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Imported_string_constants) spezifiziert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das mit einem `ResultObject` erfüllt wird, das zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul darstellt. Dieses `Module` kann erneut instanziiert oder über [postMessage()](/de/docs/Web/API/Worker/postMessage) geteilt werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekt, das alle [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions) enthält.

### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, schlägt das Versprechen mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) fehl, je nach Ursache des Fehlers.

## Beispiele

### Streaming instanziieren

Das folgende Beispiel (sehen Sie sich unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub an, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) an)
streamt direkt ein Wasm-Modul aus einer zugrundeliegenden Quelle, kompiliert es und instanziiert es, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die Funktion `instantiateStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben, und es wird die Antwort in die Funktion eingeben, wenn es erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das `ResultObject`-Instanzmitglied wird dann aufgerufen, und die enthaltene exportierte Funktion wird ausgeführt.

> [!NOTE]
> Damit dies funktioniert, sollten `.wasm`-Dateien vom Server mit einem `application/wasm` MIME-Typ zurückgegeben werden.

### JavaScript Built-ins und globale Zeichenfolgenimporte aktivieren

Dieses Beispiel aktiviert JavaScript-String-Built-ins und importierte globale Zeichenfolgenkonstanten, wenn das Wasm-Modul mit `instantiateStreaming()` kompiliert und instanziiert wird, bevor die exportierte `main()` Funktion ausgeführt wird (die `"hello world!"` in die Konsole schreibt). [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate-streaming/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
