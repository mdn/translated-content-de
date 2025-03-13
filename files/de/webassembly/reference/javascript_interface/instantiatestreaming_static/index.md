---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Die statische Methode **`WebAssembly.instantiateStreaming()`** kompiliert
und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten Quelle. Dies
ist die effizienteste und optimierte Methode, um Wasm-Code zu laden.

> [!NOTE]
> Webseiten, die eine strenge [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren.
> Für weitere Informationen darüber, wie Sie die Kompilierung und Ausführung von WebAssembly erlauben, sehen Sie sich die [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) an.

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source)
WebAssembly.instantiateStreaming(source, importObject)
WebAssembly.instantiateStreaming(source, importObject, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Versprechen, das mit einem solchen erfüllt wird und die zugrunde liegende Quelle eines Wasm-Moduls darstellt, das Sie streamen, kompilieren und instanziieren möchten.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte.
    Es muss eine passende Eigenschaft für jeden deklarierten Import des kompilierten Moduls vorhanden sein, ansonsten wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das die Kompilierungsoptionen enthält. Die Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die zu aktivierenden builtins. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namespace für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das zu einem `ResultObject` auflöst, welches zwei
Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das das
  kompilierte WebAssembly-Modul darstellt. Dieses `Module` kann erneut instanziiert oder
  über [postMessage()](/de/docs/Web/API/Worker/postMessage) geteilt werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt, das alle
  [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, wird das Promise mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

## Beispiele

### Stream-Instantierung

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html))
streamt direkt ein Wasm-Modul aus einer zugrunde liegenden Quelle, kompiliert es und instanziiert es, wobei das Promise mit einem `ResultObject` erfüllt wird.
Da die Funktion `instantiateStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, sobald sie erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das `ResultObject`-Instance-Member wird dann aufgerufen, und die enthaltene
exportierte Funktion wird aufgerufen.

> [!NOTE]
> Damit dies funktioniert, sollten `.wasm`-Dateien mit einem
> `application/wasm` MIME-Typ vom Server zurückgegeben werden.

### Aktivierung von JavaScript-Builtins und globalen String-Importen

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale String-Konstanten bei der Kompilierung und Instanziierung des Wasm-Moduls mit `instantiateStreaming()`, bevor die exportierte `main()`-Funktion ausgeführt wird (die `"hello world!"` in die Konsole schreibt). [Sehen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate-streaming/).

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
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
