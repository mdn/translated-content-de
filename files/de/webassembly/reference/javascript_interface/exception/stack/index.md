---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/Reference/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

{{non-standard_header}}

Die **`stack`**-Eigenschaft, die schreibgeschützt ist, des [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts _kann_ einen Stack-Trace enthalten.

## Wert

Ein String, der den Stack-Trace enthält, oder {{jsxref("undefined")}}, wenn kein Trace zugewiesen wurde.

Der Stack-Trace-String listet die Positionen jeder Operation auf dem Stack im WebAssembly-Format auf.
Dies ist ein menschenlesbarer String, der die URL, den Namen des aufgerufenen Funktionstyps, den Funktionsindex und dessen Offset im Modul-Binärformat angibt.
Er hat ungefähr folgendes Format (siehe [Konventionen für Stack-Traces](https://webassembly.github.io/spec/web-api/index.html#conventions) in der Spezifikation für weitere Informationen):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Beschreibung

Ausnahmen vom WebAssembly-Code enthalten standardmäßig keinen Stack-Trace.

Wenn WebAssembly-Code einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufgerufen werden, um die Ausnahme zu erstellen, und der Parameter `options.traceStack=true` muss im [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) übergeben werden.
Die virtuelle Maschine kann dann der vom Konstruktor zurückgegebenen Ausnahme ein Stack-Trace anhängen.

> [!NOTE]
> Stack-Traces werden normalerweise nicht vom WebAssembly-Code gesendet, um die Leistung zu verbessern.
> Die Möglichkeit, diesen Ausnahmen Stack-Traces hinzuzufügen, ist für Entwickler-Tools gedacht und wird im Allgemeinen nicht zur breiten Verwendung empfohlen.

## Beispiele

Dieses Beispiel zeigt, wie man eine Ausnahme von WebAssembly aus wirft, die einen Stack-Trace enthält.

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, dass er in eine Datei namens `example.wasm` kompiliert wird.
Dieser importiert ein Tag, das intern als `$tagname` bezeichnet wird, und importiert eine Funktion, die intern als `$throwExnWithStack` bezeichnet wird.
Er exportiert die Methode `run`, die von externem Code aufgerufen werden kann, um `$throwExnWithStack` aufzurufen.

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
Diese werden dem WebAssembly-Modul im `importObject` übergeben, wenn es instanziiert wird.

Sobald das Modul instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme auslöst.
Der Stack wird dann aus dem `catch`-Statement geloggt.

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

Der bedeutendste Teil dieses Codes ist die Zeile, in der die Ausnahme erstellt wird:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Das Übergeben von `{traceStack: true}` weist die WebAssembly-Virtual-Maschine an, dass sie einen Stack-Trace an die zurückgegebene `WebAssembly.Exception` anhängen soll.
Ohne dies wäre der Stack `undefined`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
