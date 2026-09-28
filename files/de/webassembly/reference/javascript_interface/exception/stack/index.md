---
title: WebAssembly.Exception.prototype.stack
slug: WebAssembly/Reference/JavaScript_interface/Exception/stack
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Die schreibgeschützte Eigenschaft **`stack`** des Objekts [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) _kann_ einen Stack-Trace enthalten.

## Wert

Ein String mit dem Stack-Trace oder {{jsxref("undefined")}}, wenn kein Trace zugewiesen wurde.

Der Stack-Trace-String führt die Positionen der einzelnen Operationen auf dem Stack im WebAssembly-Format auf.
Dieser menschenlesbare String enthält die URL, den Namen des aufgerufenen Funktionstyps, den Funktionsindex und den Offset im Modul-Binärformat.
Er hat ungefähr das folgende Format (weitere Informationen finden Sie in den [Konventionen für Stack-Traces](https://webassembly.github.io/spec/web-api/index.html#conventions) der Spezifikation):

```plain
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Beschreibung

Exceptions aus WebAssembly-Code enthalten standardmäßig keinen Stack-Trace.

Wenn WebAssembly-Code einen Stack-Trace bereitstellen soll, muss er eine JavaScript-Funktion aufrufen, um die Exception zu erzeugen, und dabei den Parameter `options.traceStack=true` an den [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) übergeben.
Die virtuelle Maschine kann dann dem vom Konstruktor zurückgegebenen Exception-Objekt einen Stack-Trace hinzufügen.

> [!NOTE]
> Aus Performancegründen werden Stack-Traces normalerweise nicht aus WebAssembly-Code übermittelt.
> Die Möglichkeit, diesen Exceptions Stack-Traces hinzuzufügen, ist für Entwicklungswerkzeuge vorgesehen und wird für den allgemeinen Einsatz nicht empfohlen.

## Beispiele

Dieses Beispiel zeigt, wie eine Exception aus WebAssembly ausgelöst wird, die einen Stack-Trace enthält.

Betrachten Sie den folgenden WebAssembly-Code, der sich nach der Kompilierung in einer Datei namens `example.wasm` befindet.
Er importiert ein Tag, das er intern als `$tagname` bezeichnet, und eine Funktion, die er als `$throwExnWithStack` bezeichnet.
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
Diese werden dem WebAssembly-Modul bei der Instanziierung über `importObject` übergeben.

Nach der Instanziierung des Moduls ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Exception auslöst.
Anschließend wird der Stack-Trace in der `catch`-Anweisung protokolliert.

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

Der wichtigste Teil dieses Codes ist die Zeile, in der die Exception erzeugt wird:

```js
new WebAssembly.Exception(tag, [param], { traceStack: true });
```

Durch die Übergabe von `{traceStack: true}` wird die virtuelle WebAssembly-Maschine angewiesen, dem zurückgegebenen `WebAssembly.Exception` einen Stack-Trace hinzuzufügen.
Andernfalls wäre `stack` gleich `undefined`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) – Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
