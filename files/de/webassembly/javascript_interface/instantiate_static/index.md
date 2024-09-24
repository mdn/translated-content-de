---
title: WebAssembly.instantiate()
slug: WebAssembly/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die Funktion **`WebAssembly.instantiate()`** ermöglicht es Ihnen,
WebAssembly-Code zu kompilieren und zu instanziieren. Diese Funktion hat zwei Überladungen:

- Die primäre Überladung nimmt den WebAssembly-Binärcode in Form eines [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder
  {{jsxref("ArrayBuffer")}} und führt sowohl die Kompilierung als auch die Instanziierung in einem Schritt aus. Das zurückgegebene `Promise` löst sich sowohl in ein kompiliertes
  [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) als auch in seine erste [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) auf.
- Die sekundäre Überladung nimmt ein bereits kompiliertes [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module),
  und gibt ein `Promise` zurück, das sich in eine `Instance` dieses
  `Module` auflöst. Diese Überladung ist nützlich, wenn das `Module` bereits kompiliert wurde.

> [!WARNING]
> Diese Methode ist nicht die effizienteste Möglichkeit, Wasm-Module abzurufen und zu instanziieren. Falls möglich, sollten Sie stattdessen die neuere
> Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) verwenden, die ein Modul in einem Schritt aus dem Roh-Bytecode abruft, kompiliert und instanziiert,
> sodass keine Umwandlung in ein {{jsxref("ArrayBuffer")}} erforderlich ist.

## Syntax

### Primäre Überladung — Annahme von Wasm-Binärcode

```js
WebAssembly.instantiate(bufferSource, importObject);
```

#### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder
    {{jsxref("ArrayBuffer")}}, das den Binärcode des zu kompilierenden Wasm-Moduls enthält, oder ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module).
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die in die neu erstellte `Instance` zu importierenden Werte enthält, wie z.B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte.
    Es muss eine passende Eigenschaft für jeden deklarierten Import des kompilierten Moduls vorhanden sein, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.

#### Rückgabewert

Ein `Promise`, das sich in ein `ResultObject` auflöst, welches zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul repräsentiert. Dieses `Module` kann erneut instanziiert, über {{domxref("Worker.postMessage", "postMessage()")}} geteilt oder [zwischengespeichert](/de/docs/WebAssembly/Caching_modules) werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekt, das alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions) enthält.

#### Ausnahmen

- Wenn einer der Parameter nicht vom richtigen Typ oder in der richtigen Struktur ist,
  wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Falls die Operation fehlschlägt, wird das Promise mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

### Sekundäre Überladung — Annahme einer Modulobjekt-Instanz

```js
WebAssembly.instantiate(module, importObject);
```

#### Parameter

- `module`
  - : Das zu instanziierende [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die in die neu erstellte `Instance` zu importierenden Werte enthält, wie z.B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte.
    Es muss eine passende Eigenschaft für jeden deklarierten Import von `module` vorhanden sein, sonst wird ein [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.

#### Rückgabewert

Ein `Promise`, das sich in ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekt auflöst.

#### Ausnahmen

- Wenn einer der Parameter nicht vom richtigen Typ oder in der richtigen Struktur ist, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Falls die Operation fehlschlägt, wird das Promise mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

## Beispiele

> [!NOTE]
> In den meisten Fällen werden Sie wahrscheinlich [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) verwenden wollen, da es effizienter ist als `instantiate()`.

### Beispiel für die erste Überladung

Nachdem einige WebAssembly-Bytecodes mit fetch abgerufen wurden, kompilieren und instanziieren wir das
Modul mit der Funktion `WebAssembly.instantiate()`, indem wir eine
JavaScript-Funktion in das WebAssembly-Modul importieren. Wir rufen dann eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions)
auf, die von der `Instance` exportiert wird.

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
> auf GitHub ([Live-Demo](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Beispiel für die zweite Überladung

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html)
Demo auf GitHub und [Live-Demo](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) )
kompiliert den geladenen simple.wasm-Bytecode mit der
Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und sendet ihn dann an einen [Worker](/de/docs/Web/API/Web_Workers_API) mit
{{domxref("Worker.postMessage", "postMessage()")}}.

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js))
definieren wir ein Importobjekt für das Modul und richten dann einen Ereignishandler ein,
um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine
Instanz davon mit der Methode `WebAssembly.instantiate()` und rufen eine
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

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
