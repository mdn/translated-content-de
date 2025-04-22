---
title: WebAssembly.instantiate()
slug: WebAssembly/Reference/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die Funktion **`WebAssembly.instantiate()`** ermöglicht es Ihnen,
WebAssembly-Code zu kompilieren und zu instanziieren. Diese Funktion verfügt über zwei Überladungen:

- Die primäre Überladung nimmt den WebAssembly-Binärcode in Form eines [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder
  eines {{jsxref("ArrayBuffer")}} und führt sowohl die Kompilierung als auch die Instanziierung in einem Schritt durch. Das zurückgegebene `Promise` löst sich zu einem kompilierten
  [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) und seiner ersten [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) auf.
- Die sekundäre Überladung nimmt ein bereits kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
  und gibt ein `Promise` zurück, das sich zu einer `Instance` dieses
  `Moduls` auflöst. Diese Überladung ist nützlich, wenn das `Modul` bereits kompiliert wurde.

> [!WARNING]
> Diese Methode ist nicht die effizienteste Art, Wasm-Module abzurufen und zu instanziieren. Wenn möglich, sollten Sie stattdessen die neuere
> Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden, die ein Modul in einem Schritt direkt aus dem Rohbytecode abruft, kompiliert und instanziiert, und daher keine Konvertierung in einen {{jsxref("ArrayBuffer")}} erfordert.

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
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder
    {{jsxref("ArrayBuffer")}}, das den Binärcode des Wasm-Moduls enthält, das Sie kompilieren möchten, oder ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module).
- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das instanziiert werden soll.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie etwa Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte.
    Es muss eine übereinstimmende Eigenschaft für jeden deklarierten Import des kompilierten Moduls vorhanden sein, andernfalls wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können Folgendes umfassen:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenketten, das die Verwendung von [JavaScript-Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenketten definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenkette, die einen Namespace für [importierte globale Zeichenkettenkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenkettenkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Wenn ein `bufferSource` übergeben wird, gibt es ein `Promise` zurück, das sich zu einem `ResultObject` mit zwei
Feldern auflöst:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul darstellt. Dieses `Modul` kann erneut instanziiert, über [`postMessage()`](/de/docs/Web/API/Worker/postMessage) geteilt oder [gecached](/de/docs/Web/Progressive_web_apps/Guides/Caching) werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt, das alle [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions) enthält.

Wenn ein `module` übergeben wird, gibt es ein `Promise` zurück, das sich zu einem [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objekt auflöst.

### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur hat,
  wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Operation fehlschlägt, wird das Promise mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) abgelehnt, je nach Ursache des Fehlers.

## Beispiele

> [!NOTE]
> In den meisten Fällen werden Sie wahrscheinlich [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwenden wollen, da es effizienter ist als `instantiate()`.

### Beispiel für die erste Überladung

Nach dem Abrufen einiger WebAssembly-Bytecodes mit fetch kompilieren und instanziieren wir das
Modul mithilfe der Funktion `WebAssembly.instantiate()`, wobei wir eine
JavaScript-Funktion in das WebAssembly-Modul importieren. Dann rufen wir eine [Exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions) auf,
die von der `Instance` exportiert wird.

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
> Dieses Beispiel finden Sie auch unter [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html)
> auf GitHub ([auch live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Beispiel für die zweite Überladung

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html)
Demo auf GitHub und [auch live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html))
kompiliert den geladenen simple.wasm-Bytecode mit der
Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet ihn dann an einen [Worker](/de/docs/Web/API/Web_Workers_API) mithilfe von
[`postMessage()`](/de/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js))
definieren wir ein Importobjekt für das Modul zur Verwendung, richten dann einen Ereignishandler ein,
um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine
Instanz daraus mithilfe der Methode `WebAssembly.instantiate()` und rufen eine
exportierte Funktion von innen auf.

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

### Aktivieren von JavaScript-Builtins und globalen Zeichenkettenimporten

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale Zeichenkettenkonstanten beim Kompilieren und Instanziieren des Wasm-Moduls mit `instantiate()`, bevor die exportierte `main()` Funktion ausgeführt wird (die `"hello world!"` in die Konsole protokolliert). [Hier live sehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

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
- [Verwenden der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
