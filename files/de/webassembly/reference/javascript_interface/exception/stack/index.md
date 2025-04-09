---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/Reference/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

{{non-standard_header}}

Die schreibgeschützte **`stack`**-Eigenschaft eines Objektinstanz vom Typ [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) _kann_ einen Stack-Trace enthalten.

Ausnahmen aus WebAssembly-Code enthalten standardmäßig keinen Stack-Trace.

Wenn WebAssembly-Code einen Stack-Trace bereitstellen muss, muss er eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und dabei den `options.traceStack=true`-Parameter im [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) übergeben.
Die virtuelle Maschine kann dann dem vom Konstruktor zurückgegebenen Ausnahmeobjekt einen Stack-Trace anhängen.

> [!NOTE]
> Stack-Traces werden normalerweise nicht aus WebAssembly-Code gesendet, um die Leistung zu verbessern.
> Die Möglichkeit, diese Ausnahmen mit Stack-Traces zu versehen, wird für Entwickler-Tools bereitgestellt und wird nicht allgemein zur breiteren Verwendung empfohlen.

## Wert

Ein String, der den Stack-Trace enthält, oder {{jsxref("undefined")}}, wenn kein Trace zugewiesen wurde.

Der Stack-Trace-String listet die Positionen jeder Operation auf dem Stack im WebAssembly-Format auf.
Dies ist ein menschenlesbarer String, der die URL, den Namen des aufgerufenen Funktionstyps, den Funktionsindex und dessen Offset im Modul-Binärformat anzeigt.
Er hat ungefähr dieses Format (siehe [Konventionen für Stack-Traces](https://webassembly.github.io/spec/web-api/index.html#conventions) in der Spezifikation für weitere Informationen):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Beispiele

Dieses Beispiel zeigt, wie man eine Ausnahme aus WebAssembly wirft, die einen Stack-Trace enthält.

Betrachten Sie den folgenden WebAssembly-Code, von dem angenommen wird, dass er in eine Datei namens **example.wasm** kompiliert wurde.
Dieser importiert einen Tag, auf den er intern als `$tagname` verweist, und importiert eine Funktion, auf die er als `$throwExnWithStack` verweist.
Er exportiert die Methode `run`, die von externem Code aufgerufen werden kann, um `$throwExnWithStack` (und damit die JavaScript-Funktion) zu rufen.

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

Der untenstehende JavaScript-Code definiert ein neues Tag `tag` und die Funktion `throwExceptionWithStack`.
Diese werden dem WebAssembly-Modul im `importObject` übergeben, wenn es instanziiert wird.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme auslöst.
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

//Log output (something like):
// stack: throwExceptionWithStack@http://<url>/main.js:76:9
// @http://<url>/example.wasm:wasm-function[3]:0x73
// @http://<url>/main.js:82:38
```

Der "relevanteste" Teil dieses Codes ist die Zeile, in der die Ausnahme erstellt wird:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Das Übergeben von `{traceStack: true}` teilen der WebAssembly-VM mit, dass sie einen Stack-Trace an die zurückgegebene `WebAssembly.Exception` anhängen soll.
Ohne dies wäre der Stack `undefined`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
