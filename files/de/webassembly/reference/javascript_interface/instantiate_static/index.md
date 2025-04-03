---
title: WebAssembly.instantiate()
slug: WebAssembly/Reference/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: 36f90b7e285c1694e6cd1e549e37740ffb68f533
---

Die Funktion **`WebAssembly.instantiate()`** ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu instanziieren. Diese Funktion hat zwei Überladungen:

- Die primäre Überladung nimmt den WebAssembly-Binärcode in Form eines [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder eines {{jsxref("ArrayBuffer")}} und führt sowohl die Kompilierung als auch die Instanziierung in einem Schritt durch. Das zurückgegebene `Promise` wird auf ein kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) und seine erste [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) aufgelöst.
- Die sekundäre Überladung nimmt ein bereits kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) und gibt ein `Promise` zurück, das auf eine `Instance` dieses `Module` aufgelöst wird. Diese Überladung ist nützlich, wenn das `Module` bereits kompiliert wurde.

> [!WARNING]
> Diese Methode ist nicht die effizienteste Möglichkeit, um Wasm-Module abzurufen und zu instanziieren. Wenn möglich, sollten Sie stattdessen die neuere Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden, die ein Modul in einem Schritt direkt aus dem Roh-Bytecode abruft, kompiliert und instanziiert und daher keine Konvertierung in einen {{jsxref("ArrayBuffer")}} erfordert.

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
  - : Ein [Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}} mit dem Binärcode des zu kompilierenden Wasm-Moduls oder ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module).
- `module`
  - : Das zu instanziierende [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie zum Beispiel Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte. Es muss für jeden deklarierten Import des kompilierten Moduls eine übereinstimmende Eigenschaft vorhanden sein, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt mit Kompilierungsoptionen. Die Eigenschaften können Folgendes enthalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die zu aktivierenden Builtins. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Stringkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Stringkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Wenn ein `bufferSource` übergeben wird, gibt er ein `Promise` zurück, das auf ein `ResultObject` aufgelöst wird, das zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul darstellt. Dieses `Module` kann erneut instanziiert, über [`postMessage()`](/de/docs/Web/API/Worker/postMessage) geteilt oder [gecached](/de/docs/Web/Progressive_web_apps/Guides/Caching) werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt, das alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

Wenn ein `module` übergeben wird, gibt er ein `Promise` zurück, das auf ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt aufgelöst wird.

### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Operation fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

## Beispiele

> [!NOTE]
> In den meisten Fällen werden Sie wahrscheinlich [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden wollen, da es effizienter ist als `instantiate()`.

### Beispiel für die erste Überladung

Nachdem wir einige WebAssembly-Bytecode mithilfe von fetch abgerufen haben, kompilieren und instanziieren wir das Modul mithilfe der `WebAssembly.instantiate()`-Funktion, indem wir eine JavaScript-Funktion in das WebAssembly-Modul importieren. Dann rufen wir eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions) auf, die vom `Instance` exportiert wird.

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

Das folgende Beispiel (sehen Sie unsere [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)) kompiliert den geladenen simple.wasm-Bytecode mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet ihn dann an einen [Worker](/de/docs/Web/API/Web_Workers_API) mittels [`postMessage()`](/de/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js))
definieren wir ein Importobjekt für das zu verwendende Modul und richten einen Ereignis-Handler ein, um das Modul vom Haupt-Thread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mithilfe der `WebAssembly.instantiate()`-Methode und rufen eine exportierte Funktion von innen auf.

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

### Aktivieren von JavaScript-Builtins und globale String-Importe

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale Stringkonstanten beim Kompilieren und Instanziieren des Wasm-Moduls mit `instantiate()`, bevor die exportierte `main()`-Funktion ausgeführt wird (die `"hello world!"` in die Konsole ausgibt). [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
