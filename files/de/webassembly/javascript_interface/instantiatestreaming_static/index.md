---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`WebAssembly.instantiateStreaming()`**-Methode kompiliert und
instanziiert ein WebAssembly-Modul direkt aus einer gestreamten
Ressource. Dies ist die effizienteste und optimierteste Methode, um Wasm-Code zu laden.

> [!NOTE]
> Webseiten mit einer strengen [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) könnten das Kompilieren und Ausführen von WebAssembly-Modulen blockieren.
> Weitere Informationen zum Erlauben der WebAssembly-Kompilierung und -Ausführung finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das ein solches Objekt liefert und die Quelle eines Wasm-Moduls darstellt, das gestreamt, kompiliert und instanziiert werden soll.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die in die neu erstellte `Instance` zu importierenden Werte enthält, wie z.B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte.
    Es muss für jede deklarierte Import-Anweisung des kompilierten Moduls eine übereinstimmende Eigenschaft vorhanden sein, andernfalls wird ein
    [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.

### Rückgabewert

Ein `Promise`, das zu einem `ResultObject` aufgelöst wird, das zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul repräsentiert. Dieses `Module` kann erneut instanziiert oder über [postMessage()](/de/docs/Web/API/Worker/postMessage) geteilt werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekt, das alle [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions) enthält.

### Ausnahmen

- Wenn einer der Parameter nicht den korrekten Typ oder die korrekte Struktur aufweist, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) zurückgewiesen, abhängig von der Ursache des Fehlers.

## Beispiele

### Streaming-Instantzierung

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch)
streamt ein Wasm-Modul direkt aus einer Ressource, kompiliert und instanziiert es dann, wobei das Promise mit einem `ResultObject` erfüllt wird.
Da die Funktion `instantiateStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und sie wird die Antwort in die Funktion übergeben, wenn das Promise erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das `ResultObject`-Instanzmitglied wird dann aufgerufen, und die enthaltene exportierte Funktion wird aufgerufen.

> [!NOTE]
> Damit dies funktioniert, sollten `.wasm`-Dateien vom Server mit dem MIME-Typ `application/wasm` zurückgegeben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
