---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.instantiateStreaming()`** kompiliert
und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle. Dies
ist der effizienteste und optimierteste Weg, um Wasm-Code zu laden.

> [!NOTE]
> Webseiten, die eine strenge [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten verhindern, dass WebAssembly-Module kompiliert und ausgeführt werden.
> Für weitere Informationen, wie Sie die Kompilierung und Ausführung von WebAssembly erlauben, siehe die [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das mit einem solchen erfüllt wird und die zugrunde liegende Quelle eines
    Wasm-Moduls darstellt, das Sie streamen, kompilieren und instanziieren möchten.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in die neu erstellte
    `Instance` importiert werden sollen, wie z. B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte.
    Es muss eine entsprechende Eigenschaft für jeden deklarierten Import des kompilierten Moduls vorhanden sein, ansonsten wird ein
    [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) ausgelöst.

### Rückgabewert

Ein `Promise`, das zu einem `ResultObject` aufgelöst wird, welches zwei
Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, das das
  kompilierte WebAssembly-Modul darstellt. Dieses `Module` kann erneut instanziiert oder
  über [postMessage()](/de/docs/Web/API/Worker/postMessage) geteilt werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekt, das alle
  [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions) enthält.

### Ausnahmen

- Wenn einer der Parameter nicht den korrekten Typ oder die korrekte Struktur hat, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Wenn die Operation fehlschlägt, lehnt das Promise mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) ab, abhängig von der Ursache des Fehlers.

## Beispiele

### Streaming instanziieren

Das folgende Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch)
streamt direkt ein Wasm-Modul aus einer zugrunde liegenden Quelle, kompiliert und instanziiert es, wobei das Promise mit einem `ResultObject` erfüllt wird.
Da die Funktion `instantiateStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)
Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)
Aufruf übergeben, und es wird die Antwort in die Funktion übergeben, wenn es erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das `ResultObject`-Instanzmitglied wird dann aufgerufen, und die enthaltene
exportierte Funktion aufgerufen.

> [!NOTE]
> Damit dies funktioniert, sollten `.wasm`-Dateien mit einem
> `application/wasm` MIME-Typ vom Server zurückgegeben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
