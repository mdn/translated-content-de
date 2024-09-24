---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}} {{non-standard_header}}

Die schreibgeschützte **`stack`**-Eigenschaft eines Objektinstanztyps [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) _kann_ einen Stack-Trace enthalten.

Exceptions aus WebAssembly-Code enthalten standardmäßig keinen Stack-Trace.

Wenn WebAssembly-Code einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufgerufen werden, um die Exception zu erstellen. Dabei wird der Parameter `options.traceStack=true` im [Konstruktor](/de/docs/WebAssembly/JavaScript_interface/Exception/Exception) übergeben.
Die virtuelle Maschine kann dann einen Stack-Trace an das vom Konstruktor zurückgegebene Exception-Objekt anhängen.

> [!NOTE]
> Stack-Traces werden normalerweise nicht vom WebAssembly-Code gesendet, um die Leistung zu verbessern.
> Die Möglichkeit, Stack-Traces zu diesen Exceptions hinzuzufügen, wird für Entwicklerwerkzeuge bereitgestellt und wird nicht allgemein zur breiten Verwendung empfohlen.

## Wert

Ein String, der den Stack-Trace enthält, oder {{jsxref("undefined")}}, wenn kein Trace zugewiesen wurde.

Der Stack-Trace-String listet die Positionen jeder Operation im Stack im WebAssembly-Format auf.
Dies ist ein menschenlesbarer String, der die URL, den Namen des aufgerufenen Funktionstyps, den Funktionsindex und seinen Offset im Modul-Binärformat angibt.
Es hat ungefähr dieses Format (siehe [Stack-Trace-Konventionen](https://webassembly.github.io/spec/web-api/index.html#conventions) in der Spezifikation für weitere Informationen):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Beispiele

Dieses Beispiel demonstriert, wie man eine Exception aus WebAssembly mit einem Stack-Trace wirft.

Betrachten Sie den folgenden WebAssembly-Code, der zu einer Datei mit dem Namen **example.wasm** kompiliert wird.
Dieser importiert ein Tag, welches intern als `$tagname` bezeichnet wird, und importiert eine Funktion, die als `$throwExnWithStack` bezeichnet wird.
Es exportiert die Methode `run`, die von externem Code aufgerufen werden kann, um `$throwExnWithStack` (und damit die JavaScript-Funktion) aufzurufen.

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; import function that will be referred to here as $throwExnWithStack
  (import "extmod" "throwExnWithStack" (func $throwExnWithStack (param i32)))

  ;; call $throwExnWithStack passing 42 as parameter
  (func (export "run")
    i32.const 42
    call $throwExnWithStack
  )
)
```

Der folgende JavaScript-Code definiert ein neues Tag `tag` und die Funktion `throwExceptionWithStack`.
Diese werden beim Instanziieren dem WebAssembly-Modul im `importObject` übergeben.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Exception wirft.
Der Stack wird dann in der `catch`-Anweisung protokolliert.

```js
const tag = new WebAssembly.Tag({ parameters: ["i32"] });

function throwExceptionWithStack(param) {
  // Note: We declare the exception with "{traceStack: true}"
  throw new WebAssembly.Exception(tag, [param], { traceStack: true });
}

// Note: importObject properties match the WebAssembly import statements.
const importObject = {
  extmod: {
    exttag: tag,
    throwExnWithStack: throwExceptionWithStack,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.log(`stack: ${e.stack}`);
  });

//Log output (something like):
// stack: throwExceptionWithStack@http://<url>/main.js:76:9
// @http://<url>/example.wasm:wasm-function[3]:0x73
// @http://<url>/main.js:82:38
```

Der "relevanteste" Teil dieses Codes ist die Zeile, in der die Exception erstellt wird:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Die Übergabe von `{traceStack: true}` teilt der WebAssembly-Virtualmaschine mit, dass sie einen Stack-Trace an die zurückgegebene `WebAssembly.Exception` anhängen soll.
Ohne dies wäre der Stack `undefined`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de-DE/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de-DE/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de-DE/docs/WebAssembly/Using_the_JavaScript_API)
