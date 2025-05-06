---
title: WebAssembly.instantiate()
slug: WebAssembly/Reference/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: c51a62ab42cd27f23c2bde769d716c37873e1b24
---

Die Funktion **`WebAssembly.instantiate()`** ermöglicht es, WebAssembly-Code zu kompilieren und zu instanziieren. Diese Funktion hat zwei Überladungen:

- Die primäre Überladung nimmt den WebAssembly-Binärcode, in Form eines [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder einem {{jsxref("ArrayBuffer")}}, und führt sowohl Kompilierung als auch Instanziierung in einem Schritt aus. Das zurückgegebene `Promise` wird sowohl zu einem kompilierten [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) als auch zu seiner ersten [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) aufgelöst.
- Die sekundäre Überladung nimmt ein bereits kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) und gibt ein `Promise` zurück, das zu einer `Instance` dieses `Module` aufgelöst wird. Diese Überladung ist nützlich, wenn das `Module` bereits kompiliert wurde.

> [!WARNING]
> Diese Methode ist nicht die effizienteste Art, Wasm-Module zu laden und zu instanziieren. Wenn möglich, sollten Sie stattdessen die neuere Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden, die ein Modul in einem Schritt direkt aus dem Raw-Bytecode lädt, kompiliert und instanziiert und daher keine Konvertierung in ein {{jsxref("ArrayBuffer")}} benötigt.

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
  - : Ein [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder
    {{jsxref("ArrayBuffer")}}, das den Binärcode des Wasm-Moduls enthält, den Sie kompilieren möchten.
- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das instanziiert werden soll.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte. Es muss eine übereinstimmende Eigenschaft für jeden deklarierten Import des kompilierten Moduls geben, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Zu den Eigenschaften können gehören:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) spezifiziert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Wenn ein `bufferSource` übergeben wird, gibt es ein `Promise` zurück, das sich zu einem `ResultObject` auflöst, welches zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul darstellt. Dieses `Module` kann erneut instanziiert, über [`postMessage()`](/de/docs/Web/API/Worker/postMessage) geteilt oder [zwischengespeichert](/de/docs/Web/Progressive_web_apps/Guides/Caching) werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt, das alle [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

Wenn ein `module` übergeben wird, gibt es ein `Promise` zurück, das sich zu einem [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt auflöst.

### Ausnahmen

- Wenn einer der Parameter nicht vom richtigen Typ oder der richtigen Struktur ist, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Operation fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

## Beispiele

> [!NOTE]
> In den meisten Fällen werden Sie wahrscheinlich [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden wollen, da es effizienter ist als `instantiate()`.

### Beispiel für die erste Überladung

Nachdem wir einige WebAssembly-Bytecode mit fetch geladen haben, kompilieren und instanziieren wir das Modul mit der Funktion `WebAssembly.instantiate()`. Dabei wird eine JavaScript-Funktion in das WebAssembly-Modul importiert. Wir rufen dann eine [Exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions) auf, die von der `Instance` exportiert wird.

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
> Sie können dieses Beispiel auch unter [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Beispiel für die zweite Überladung

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) Demo auf GitHub und [sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)) kompiliert den geladenen simple.wasm-Bytecode mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet ihn dann mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)) definieren wir ein Importobjekt für das Modul zur Nutzung und richten einen Event-Handler ein, um das Modul vom Haupt-Thread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz davon mit der Methode `WebAssembly.instantiate()` und rufen eine exportierte Funktion darin auf.

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

### Aktivierung von JavaScript builtins und globalen String-Imports

Dieses Beispiel ermöglicht JavaScript-String-builtins und importierte globale String-Konstanten, bei der Kompilierung und Instanziierung des Wasm-Moduls mit `instantiate()`, bevor die exportierte Funktion `main()` ausgeführt wird (die `"hello world!"` in die Konsole protokolliert). [Siehe es live ausführen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

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
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
