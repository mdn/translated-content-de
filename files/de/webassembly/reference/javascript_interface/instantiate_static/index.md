---
title: WebAssembly.instantiate()
slug: WebAssembly/Reference/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die statische Methode **`WebAssembly.instantiate()`** ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu instanziieren. Diese Funktion hat zwei Überladungen:

- Die primäre Überladung nimmt den WebAssembly-Binärcode in Form eines [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder eines {{jsxref("ArrayBuffer")}}, und führt sowohl die Kompilierung als auch die Instanzierung in einem Schritt durch. Das zurückgegebene `Promise` löst sich sowohl in ein kompilierbares [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) als auch in seine erste [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) auf.
- Die sekundäre Überladung nimmt ein bereits kompilierbares [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) entgegen und gibt ein `Promise` zurück, das sich in eine `Instance` dieses `Module` auflöst. Diese Überladung ist nützlich, wenn das `Module` bereits kompiliert wurde.

> [!WARNING]
> Diese Methode ist nicht der effizienteste Weg, um Wasm-Module abzurufen und zu instanziieren. Wenn möglich, sollten Sie die neuere Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden, die ein Modul in einem Schritt direkt aus dem Rohbytecode abruft, kompiliert und instanziiert und somit keine Umwandlung in einen {{jsxref("ArrayBuffer")}} erfordert.

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
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder ein {{jsxref("ArrayBuffer")}}, das den Binärcode des zu kompilierenden Wasm-Moduls enthält.
- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das instanziiert werden soll.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie z.B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte. Es muss für jeden deklarierten Import des kompilierten Moduls eine passende Eigenschaft geben, andernfalls wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript-Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Wird ein `bufferSource` übergeben, gibt es ein `Promise` zurück, das sich in ein `ResultObject` auflöst, das zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul repräsentiert. Dieses `Module` kann erneut instanziiert, über [`postMessage()`](/de/docs/Web/API/Worker/postMessage) geteilt oder [zwischengespeichert](/de/docs/Web/Progressive_web_apps/Guides/Caching) werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt, das alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

Wird ein `module` übergeben, gibt es ein `Promise` zurück, das sich in ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt auflöst.

### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur aufweist, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Operation fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

## Beispiele

> [!NOTE]
> In den meisten Fällen möchten Sie wahrscheinlich [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden, da es effizienter ist als `instantiate()`.

### Erstes Überladungsbeispiel

Nach dem Abrufen einiger WebAssembly-Bytes mit fetch, kompilieren und instanziieren wir das Modul mit der Funktion `WebAssembly.instantiate()`, indem wir eine JavaScript-Funktion im Prozess in das WebAssembly-Modul importieren. Danach rufen wir eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions) auf, die von der `Instance` exportiert wurde.

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
> Dieses Beispiel finden Sie auch unter [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html) auf GitHub ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Zweites Überladungsbeispiel

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) auch) kompiliert den geladenen simple.wasm-Bytecode mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet ihn dann an einen [Worker](/de/docs/Web/API/Web_Workers_API) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)) definieren wir ein Import-Objekt, das das Modul verwenden soll, und richten dann einen Ereignishandler ein, um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der Methode `WebAssembly.instantiate()` und rufen eine exportierte Funktion aus diesem auf.

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

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale String-Konstanten beim Kompilieren und Instanziieren des Wasm-Moduls mit `instantiate()`, bevor die exportierte `main()`-Funktion ausgeführt wird (die `"hello world!"` in die Konsole protokolliert). [Sehen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
