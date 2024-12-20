---
title: WebAssembly.instantiate()
slug: WebAssembly/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

Die **`WebAssembly.instantiate()`** Funktion ermöglicht es Ihnen, WebAssembly-Code zu kompilieren und zu instanziieren. Diese Funktion hat zwei Überladungen:

- Die primäre Überladung nimmt den WebAssembly-Binärcode in Form eines [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder eines {{jsxref("ArrayBuffer")}} und führt sowohl die Kompilierung als auch die Instanziierung in einem Schritt durch. Das zurückgegebene `Promise` löst sich sowohl in ein kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) als auch in seine erste [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) auf.
- Die sekundäre Überladung nimmt ein bereits kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) und gibt ein `Promise` zurück, das in eine `Instance` dieses `Module` aufgelöst wird. Diese Überladung ist nützlich, wenn das `Module` bereits kompiliert wurde.

> [!WARNING]
> Diese Methode ist nicht der effizienteste Weg, um Wasm-Module abzurufen und zu instanziieren. Wenn möglich, sollten Sie stattdessen die neuere Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) verwenden, die ein Modul direkt aus dem Rohbytecode in einem Schritt abruft, kompiliert und instanziiert, sodass keine Konvertierung in einen {{jsxref("ArrayBuffer")}} erforderlich ist.

## Syntax

### Primäre Überladung — übergibt Wasm-Binärcode

```js
WebAssembly.instantiate(bufferSource);
WebAssembly.instantiate(bufferSource, importObject);
WebAssembly.instantiate(bufferSource, importObject, compileOptions);
```

#### Parameter

- `bufferSource`
  - : Ein [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder ein {{jsxref("ArrayBuffer")}}, das den Binärcode des zu kompilierenden Wasm-Moduls oder ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) enthält.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie z. B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekte. Es muss eine passende Eigenschaft für jeden deklarierten Import des kompilierten Moduls vorhanden sein, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die zu aktivierenden Builtins. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Imported_string_constants) spezifiziert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

#### Rückgabewert

Ein `Promise`, das sich in ein `ResultObject` auflöst, das zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt, das das kompilierte WebAssembly-Modul repräsentiert. Dieses `Module` kann erneut instanziiert, über [`postMessage()`](/de/docs/Web/API/Worker/postMessage) geteilt oder [zwischengespeichert](/de/docs/Web/Progressive_web_apps/Guides/Caching) werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) Objekt, das alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions) enthält.

#### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Operation fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

### Sekundäre Überladung — übergibt ein Modulobjektexemplar

```js
WebAssembly.instantiate(module);
WebAssembly.instantiate(module, importObject);
WebAssembly.instantiate(module, importObject, compileOptions);
```

#### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt, das instanziiert werden soll.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte `Instance` importiert werden sollen, wie z. B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekte. Es muss eine passende Eigenschaft für jeden deklarierten Import von `module` vorhanden sein, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die zu aktivierenden Builtins. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Imported_string_constants) spezifiziert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

#### Rückgabewert

Ein `Promise`, das sich in ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) Objekt auflöst.

#### Ausnahmen

- Wenn einer der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

## Beispiele

> [!NOTE]
> In den meisten Fällen werden Sie wahrscheinlich [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) verwenden wollen, da es effizienter ist als `instantiate()`.

### Erstes Überladung-Beispiel

Nachdem Sie mit fetch etwas WebAssembly-Bytecode abgerufen haben, kompilieren und instanziieren wir das Modul mit der `WebAssembly.instantiate()` Funktion und importieren eine JavaScript-Funktion in das WebAssembly-Modul im Prozess. Wir rufen dann eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions) auf, die von der `Instance` exportiert wird.

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
> Dieses Beispiel finden Sie auch unter [index.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html) auf GitHub ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Zweites Überladung-Beispiel

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) Demo auf GitHub und [sehen Sie es sich live an](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)) kompiliert den geladenen simple.wasm Bytecode mit der [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) Methode und sendet ihn dann mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)) definieren wir ein Importobjekt für das Modul, dann richten wir einen Ereignishandler ein, um das Modul vom Haupt-Thread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der `WebAssembly.instantiate()` Methode und rufen eine darin exportierte Funktion auf.

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

### Aktivieren von JavaScript builtins und globalen Zeichenfolgenimporten

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale Zeichenfolgenkonstanten, wenn das Wasm-Modul mit `instantiate()` kompiliert und instanziiert wird, bevor die exportierte `main()` Funktion (die `"hello world!"` in die Konsole protokolliert) ausgeführt wird. [Sehen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/).

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
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
