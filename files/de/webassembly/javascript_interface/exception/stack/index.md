---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}} {{non-standard_header}}

Die schreibgeschützte **`stack`**-Eigenschaft eines Objekts vom Typ [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) _kann_ einen Stapeltrace enthalten.

Ausnahmen im WebAssembly-Code enthalten standardmäßig keinen Stapeltrace.

Wenn WebAssembly-Code einen Stapeltrace bereitstellen muss, muss eine JavaScript-Funktion aufgerufen werden, um die Ausnahme zu erzeugen, wobei der Parameter `options.traceStack=true` im [Konstruktor](/de/docs/WebAssembly/JavaScript_interface/Exception/Exception) übergeben wird.
Die virtuelle Maschine kann dann einen Stapeltrace an das vom Konstruktor zurückgegebene Ausnahmeobjekt anhängen.

> [!NOTE]
> Stapeltraces werden normalerweise nicht vom WebAssembly-Code gesendet, um die Leistung zu verbessern.
> Die Möglichkeit, Stapeltraces zu diesen Ausnahmen hinzuzufügen, wird für Entwickler-Tools bereitgestellt und ist nicht allgemein für eine breitere Verwendung empfohlen.

## Wert

Ein String, der den Stapeltrace enthält, oder {{jsxref("undefined")}}, wenn kein Trace zugewiesen wurde.

Der Stapeltrace-String listet die Positionen jeder Operation auf dem Stapel im WebAssembly-Format auf.
Dies ist ein menschenlesbarer String, der die URL, den Namen des aufgerufenen Funktionstyps, den Funktionsindex und dessen Offset im Modul-Binary angibt.
Er hat ungefähr dieses Format (siehe [Stapeltrace-Konventionen](https://webassembly.github.io/spec/web-api/index.html#conventions) in der Spezifikation für weitere Informationen):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Beispiele

Dieses Beispiel zeigt, wie man eine Ausnahme aus WebAssembly wirft, die einen Stapeltrace enthält.

Betrachten Sie den folgenden WebAssembly-Code, von dem angenommen wird, dass er in eine Datei namens **example.wasm** kompiliert wurde.
Dieser importiert ein Tag, das intern als `$tagname` bezeichnet wird, und importiert eine Funktion, die intern als `$throwExnWithStack` bezeichnet wird.
Er exportiert die Methode `run`, die durch externen Code aufgerufen werden kann, um `$throwExnWithStack` (und damit die JavaScript-Funktion) aufzurufen.

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

Der unten stehende JavaScript-Code definiert ein neues Tag `tag` und die Funktion `throwExceptionWithStack`.
Diese werden dem WebAssembly-Modul im `importObject` übergeben, wenn es instanziiert wird.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme auslöst.
Der Stapel wird dann aus der `catch`-Anweisung protokolliert.

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

Der "relevanteste" Teil dieses Codes ist die Zeile, in der die Ausnahme erstellt wird:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Das Übergeben von `{traceStack: true}` teilt der WebAssembly-VM mit, dass ein Stapeltrace an den zurückgegebenen `WebAssembly.Exception` angehängt werden soll.
Ohne dies wäre der Stapel `undefined`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
