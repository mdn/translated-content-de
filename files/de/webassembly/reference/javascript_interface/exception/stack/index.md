---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/Reference/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{non-standard_header}}

Die schreibgeschützte **`stack`**-Eigenschaft einer Objektinstanz vom Typ [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) _kann_ einen Stack-Trace enthalten.

Ausnahmen aus WebAssembly-Code enthalten standardmäßig keinen Stack-Trace.

Wenn WebAssembly-Code einen Stack-Trace bereitstellen muss, muss er eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und den Parameter `options.traceStack=true` im [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) übergeben.
Die virtuelle Maschine kann dann einen Stack-Trace an das von dem Konstruktor zurückgegebene Ausnahmeobjekt anhängen.

> [!NOTE]
> Stack-Traces werden normalerweise nicht vom WebAssembly-Code gesendet, um die Leistung zu verbessern.
> Die Möglichkeit, Stack-Traces zu diesen Ausnahmen hinzuzufügen, wird für Entwickler-Tools bereitgestellt und wird im Allgemeinen nicht für den breiteren Gebrauch empfohlen.

## Wert

Ein String, der den Stack-Trace enthält, oder {{jsxref("undefined")}}, wenn kein Trace zugewiesen wurde.

Der Stack-Trace-String listet die Speicherorte jeder Operation auf dem Stack im WebAssembly-Format auf.
Dies ist ein menschenlesbarer String, der die URL, den Namen des aufgerufenen Funktionstyps, den Funktionsindex und seinen Offset im Modul-Binärformat angibt.
Er hat ungefähr folgendes Format (siehe [Stack-Trace-Konventionen](https://webassembly.github.io/spec/web-api/index.html#conventions) in der Spezifikation für weitere Informationen):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Beispiele

Dieses Beispiel demonstriert, wie man aus WebAssembly eine Ausnahme wirft, die einen Stack-Trace enthält.

Betrachten Sie den folgenden WebAssembly-Code, von dem angenommen wird, dass er in eine Datei namens **example.wasm** kompiliert wurde.
Er importiert ein Tag, das intern als `$tagname` bezeichnet wird, und importiert eine Funktion, die als `$throwExnWithStack` bezeichnet wird.
Er exportiert die Methode `run`, die von externem Code aufgerufen werden kann, um `$throwExnWithStack` (und somit die JavaScript-Funktion) zu rufen.

```wat
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

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme wirft.
Der Stack wird dann aus der `catch`-Anweisung protokolliert.

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

// Log output (something like):
// stack: throwExceptionWithStack@http://<url>/main.js:76:9
// @http://<url>/example.wasm:wasm-function[3]:0x73
// @http://<url>/main.js:82:38
```

Der "relevanteste" Teil dieses Codes ist die Zeile, in der die Ausnahme erstellt wird:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Das Übergeben von `{traceStack: true}` teilt der WebAssembly-virtuellen Maschine mit, dass sie einen Stack-Trace an die zurückgegebene `WebAssembly.Exception` anhängen soll.
Ohne dies wäre der Stack `undefined`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
