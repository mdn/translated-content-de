---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die statische Methode **`WebAssembly.instantiateStreaming()`** kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle. Dies ist die effizienteste und optimierte Art, Wasm-Code zu laden.

> [!NOTE]
> Webseiten mit einer strikten [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) könnten verhindern, dass WebAssembly Module kompiliert und ausgeführt werden. Weitere Informationen zum Erlauben der WebAssembly-Kompilierung und -Ausführung finden Sie im Abschnitt [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source)
WebAssembly.instantiateStreaming(source, importObject)
WebAssembly.instantiateStreaming(source, importObject, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Versprechen, das mit einem erfüllt wird und die zugrunde liegende Quelle eines Wasm-Moduls repräsentiert, das Sie streamen, kompilieren und instanziieren möchten.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte. Es muss für jeden deklarierten Import des kompilierten Moduls eine übereinstimmende Eigenschaft vorhanden sein, andernfalls wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können umfassen:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Nutzung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) spezifiziert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das sich in ein `ResultObject` auflöst, welches zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul repräsentiert. Dieses `Module` kann erneut instanziiert oder über [postMessage()](/de/docs/Web/API/Worker/postMessage) geteilt werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt, das alle [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

### Ausnahmen

- Falls einer der Parameter nicht den korrekten Typ oder die korrekte Struktur hat, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) zurückgewiesen, je nach Grund des Fehlers.

## Beispiele

### Streaming-Instanziierung

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) streamt ein Wasm-Modul direkt aus einer zugrunde liegenden Quelle, kompiliert und instanziiert es dann, wobei das Versprechen mit einem `ResultObject` erfüllt wird. Da die Funktion `instantiateStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn sie erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das `ResultObject`-Instanzmitglied wird dann aufgerufen, und die enthaltene exportierte Funktion aufgerufen.

> [!NOTE]
> Damit dies funktioniert, sollten `.wasm`-Dateien vom Server mit einem `application/wasm` MIME-Typ zurückgegeben werden.

### Aktivierung von JavaScript builtins und globalen String-Importen

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale String-Konstanten beim Kompilieren und Instanziieren des Wasm-Moduls mit `instantiateStreaming()`, bevor die exportierte `main()`-Funktion ausgeführt wird (die `"hello world!"` in die Konsole loggt). [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate-streaming/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
