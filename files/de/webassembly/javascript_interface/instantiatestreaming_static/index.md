---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`WebAssembly.instantiateStreaming()`** statische Methode kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer gestreamten zugrunde liegenden Quelle. Dies ist die effizienteste und optimierteste Möglichkeit, Wasm-Code zu laden.

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren.
> Weitere Informationen zum Zulassen der Kompilierung und Ausführung von WebAssembly finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Versprechen, das mit einem solchen erfüllt wird und die zugrunde liegende Quelle eines Wasm-Moduls darstellt, das Sie streamen, kompilieren und instanziieren möchten.
- `importObject` {{optional_inline}}
  - : Ein Objekt, das die Werte enthält, die in das neu erstellte `Instance` importiert werden sollen, wie z.B. Funktionen oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte. Es muss eine passende Eigenschaft für jeden deklarierten Import des kompilierten Moduls geben, ansonsten wird ein
    [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) geworfen.

### Rückgabewert

Ein `Promise`, das auf ein `ResultObject` auflöst, welches zwei Felder enthält:

- `module`: Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, das das kompilierte WebAssembly-Modul repräsentiert. Dieses `Module` kann erneut instanziiert oder über [postMessage()](/de/docs/Web/API/Worker/postMessage) geteilt werden.
- `instance`: Ein [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekt, das alle [Exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions) enthält.

### Ausnahmen

- Wenn einer der Parameter nicht den korrekten Typ oder die korrekte Struktur aufweist, wird ein {{jsxref("TypeError")}} geworfen.
- Wenn der Vorgang fehlschlägt, wird das Versprechen mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/de/docs/WebAssembly/JavaScript_interface/LinkError) oder
  [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) abgelehnt, abhängig von der Ursache des Fehlers.

## Beispiele

### Streaming instanziieren

Im folgenden Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)-Demo auf GitHub, und [sehen Sie es sich live an](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) wird ein Wasm-Modul direkt aus einer zugrunde liegenden Quelle gestreamt, dann kompiliert und instanziiert. Das Versprechen wird mit einem `ResultObject` erfüllt. Da die Funktion `instantiateStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, und sie wird die Antwort in die Funktion übergeben, wenn sie erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das `ResultObject`-Instanzmitglied wird dann aufgerufen und die darin enthaltene exportierte Funktion ausgeführt.

> [!NOTE]
> Damit dies funktioniert, sollten `.wasm`-Dateien vom Server mit einem `application/wasm` MIME-Typ zurückgegeben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
