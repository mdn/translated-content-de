---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/Reference/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: 37bed723e98859723a86c8d8772f7d8448aa2e84
---

{{non-standard_header}}

Die **`stack`**-Eigenschaft im Nur-Lesen-Modus des [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts _kann_ einen Stack-Trace enthalten.

## Wert

Ein String, der den Stack-Trace enthält, oder {{jsxref("undefined")}}, wenn kein Trace zugewiesen wurde.

Der Stack-Trace-String listet die Standorte jeder Operation auf dem Stack im WebAssembly-Format auf.
Dies ist ein menschenlesbarer String, der die URL, den Namen des aufgerufenen Funktionstyps, den Funktionsindex und dessen Offset im Modul-Binärformat angibt.
Er hat ungefähr dieses Format (siehe [Stack-Trace-Konventionen](https://webassembly.github.io/spec/web-api/index.html#conventions) in der Spezifikation für weitere Informationen):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Beschreibung

Ausnahmen von WebAssembly-Code beinhalten standardmäßig keinen Stack-Trace.

Wenn WebAssembly-Code einen Stack-Trace bereitstellen muss, muss er eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und dabei den Parameter `options.traceStack=true` im [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) übergeben.
Die virtuelle Maschine kann dann einen Stack-Trace an das vom Konstruktor zurückgegebene Ausnahmeobjekt anhängen.

> [!NOTE]
> Stack-Traces werden normalerweise nicht von WebAssembly-Code gesendet, um die Leistung zu verbessern.
> Die Möglichkeit, Stack-Traces zu diesen Ausnahmen hinzuzufügen, wird für Entwickler-Tools bereitgestellt und ist allgemein nicht für eine breitere Verwendung empfohlen.

## Beispiele

Dieses Beispiel zeigt, wie man eine Ausnahme von WebAssembly wirft, die einen Stack-Trace enthält.

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, in eine Datei namens `example.wasm` kompiliert zu werden.
Dies importiert ein Tag, das intern als `$tagname` bezeichnet wird, und importiert eine Funktion, die intern als `$throwExnWithStack` bezeichnet wird.
Es exportiert die Methode `run`, die von externem Code aufgerufen werden kann, um `$throwExnWithStack` aufzurufen.

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

Der folgende JavaScript-Code definiert ein neues Tag `tag` und die Funktion `throwExceptionWithStack()`.
Diese werden an das WebAssembly-Modul im `importObject` übergeben, wenn es instanziiert wird.

Sobald das Modul instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme wirft.
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

Der wichtigste Teil dieses Codes ist die Zeile, in der die Ausnahme erstellt wird:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Die Angabe von `{traceStack: true}` teilt der WebAssembly-virtuellen Maschine mit, dass sie einen Stack-Trace an die zurückgegebene `WebAssembly.Exception` anhängen soll.
Ohne dies wäre der Stack `undefined`.

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
