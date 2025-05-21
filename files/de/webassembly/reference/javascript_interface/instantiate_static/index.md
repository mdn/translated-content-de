---
title: WebAssembly.instantiate()
slug: WebAssembly/Reference/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: 1c0262ad5b8f30779c90fc8527785bd45748c331
---

Die statische Methode **`WebAssembly.instantiate()`** ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu instantiieren. Diese Funktion hat zwei Überladungen:

- Die primäre Überladung nimmt den WebAssembly-Binärcode in Form eines [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder eines {{jsxref("ArrayBuffer")}} und führt sowohl die Kompilierung als auch die Instantiierung in einem Schritt aus. Das zurückgegebene `Promise` wird auf ein kompilertes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) und dessen erstes [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) aufgelöst.
- Die sekundäre Überladung nimmt ein bereits kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) und gibt ein `Promise` zurück, das auf eine `Instance` dieses `Modules` aufgelöst wird. Diese Überladung ist nützlich, wenn das `Module` bereits kompiliert wurde.

> [!WARNING]
> Diese Methode ist nicht der effizienteste Weg, um Wasm-Module abzurufen und zu instantiieren. Wenn möglich, sollten Sie stattdessen die neuere Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden, die ein Modul in einem Schritt direkt aus dem Roh-Bytecode abruft, kompiliert und instanziiert, sodass keine Umwandlung in einen {{jsxref("ArrayBuffer")}} erforderlich ist.

## Syntax

```js-nolint
// Taking Wasm binary code
WebAssembly.instantiate(bufferSource)
WebAssembly.instantiate(bufferSource, importObject)
WebAssembly.instantiate(bufferSource, importObject, compileOptions)

// Taking a module object instance
WebAssembly.instantiate(module)
WebAssembly.instantiate(module, importObject)
WebAssembly.instantiate(module, importObject, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}}, das den Binärcode des zu kompilierenden Wasm-Moduls enthält.
- `module`
  - : Das zu instanziierende [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die in die neu erstellte `Instance` zu importierenden Werte enthält, wie z. B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekte. Für jeden deklarierten Import des kompilierten Moduls muss eine passende Eigenschaft vorhanden sein, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Die Eigenschaften können umfassen:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Nutzung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul aktiviert. Die Strings definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namespace für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Wenn ein `bufferSource` übergeben wird, wird ein `Promise` zurückgegeben, das auf ein `ResultObject` aufgelöst wird, das zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt, das das kompilierte WebAssembly-Modul darstellt. Dieses `Module` kann erneut instanziiert, über [`postMessage()`](/de/docs/Web/API/Worker/postMessage) geteilt oder [zwischengespeichert](/de/docs/Web/Progressive_web_apps/Guides/Caching) werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) Objekt, das alle [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

Wenn ein `module` übergeben wird, gibt es ein `Promise` zurück, das auf ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) Objekt aufgelöst wird.

### Ausnahmen

- Wenn einer der Parameter nicht vom richtigen Typ oder der richtigen Struktur ist, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Operation fehlschlägt, wird das Promise abhängig von der Ursache des Fehlers mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) abgelehnt.

## Beispiele

> [!NOTE]
> In den meisten Fällen möchten Sie wahrscheinlich [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden, da es effizienter ist als `instantiate()`.

### Beispiel der ersten Überladung

Nach dem Abrufen einiger WebAssembly-Bytecode mit fetch kompilieren und instantiieren wir das Modul mit der `WebAssembly.instantiate()` Funktion und importieren dabei eine JavaScript-Funktion in das WebAssembly-Modul. Dann rufen wir eine [Exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions) auf, die von der `Instance` exportiert wird.

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> [!NOTE]
> Sie können dieses Beispiel auch auf [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Beispiel der zweiten Überladung

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) auch) kompiliert den geladenen simple.wasm Bytecode mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet ihn dann an einen [Worker](/de/docs/Web/API/Web_Workers_API) unter Verwendung von [`postMessage()`](/de/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)) definieren wir ein Importobjekt für das Modul zur Verwendung und richten dann einen Ereignishandler ein, um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz davon mit der `WebAssembly.instantiate()` Methode und rufen eine darin exportierte Funktion auf.

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });
};
```

### Aktivieren von JavaScript-Builtins und globalen String-Importen

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale String-Konstanten beim Kompilieren und Instantiieren des Wasm-Moduls mit `instantiate()`, bevor es die exportierte `main()` Funktion ausführt (die `"hello world!"` in die Konsole schreibt). [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

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

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject, compileOptions))
  .then((result) => result.instance.exports.main());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
