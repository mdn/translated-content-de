---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: ad9a2c6d7f94dd5fb7971b10677487a84c529e55
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt repräsentiert eine Laufzeitausnahme, die in einem Wasm-Modul ausgelöst wird.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt eine neue Instanz des `WebAssembly.Exception`-Objekts.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)
  - : Gibt den Stack-Trace der Ausnahme zurück.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)
  - : Prüft, ob die Ausnahme mit einem bestimmten Tag übereinstimmt.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die mit einem angegebenen Tag übereinstimmt.

## Beschreibung

Wenn Wasm-Ausnahmen im JavaScript-Host behandelt werden, haben abgefangene Ausnahmen den Objekttyp `WebAssembly.Exception`.

Sie können beispielsweise zunächst mit dem Konstruktor [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) einen Fehler-Tag-Typ erstellen:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Anschließend können Sie ihn wie folgt in ein Wasm-Modul importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(/* ... */);
```

Danach können Sie versuchen, eine exportierte Wasm-Funktion in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion eine Ausnahme auslöst, ist der an den `catch`-Block weitergegebene Fehler eine Instanz des `WebAssembly.Exception`-Objekts.

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(
  (result) => {
    try {
      // Cause function to throw
      result.instance.exports.throw(-1);
    } catch (e) {
      if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
        const errorCode = e.getArg(myErrorTag, 0); // 0 = first payload value
        console.log("Error code:", errorCode); // 42
      } else {
        throw e; // throw other errors
      }
    }
  },
);
```

Mit [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) können Sie prüfen, ob die Ausnahme denselben Typ wie der zuvor definierte Tag (`myErrorTag`) hat. Anschließend können Sie mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf die Nutzdaten der Ausnahme zugreifen.

JavaScript und anderer Client-Code können nur dann auf WebAssembly-Ausnahmewerte zugreifen – und umgekehrt –, wenn der zugehörige Tag gemeinsam verwendet wird. Sie können nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert.
Ohne den passenden Tag können Ausnahmen abgefangen und erneut ausgelöst, aber nicht untersucht werden.

Damit Ausnahmen schneller ausgelöst werden können, enthalten Ausnahmen aus WebAssembly im Allgemeinen keinen Stack-Trace.
WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss zum Erstellen der Ausnahme eine JavaScript-Funktion aufrufen und dabei im Konstruktor den Parameter `options.traceStack=true` übergeben.
Der Konstruktor kann dann eine Ausnahme zurückgeben, deren Eigenschaft [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) einen Stack-Trace enthält.

## Beispiele

Dieses Beispiel zeigt, wie Sie einen Tag definieren und in ein Modul importieren. Anschließend wird damit eine Ausnahme ausgelöst, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der in eine Datei namens **example.wasm** kompiliert wurde.

- Das Modul importiert einen Tag, der intern als `$tagname` bezeichnet wird und einen einzelnen `i32`-Parameter hat.
  Der Tag muss über das Modul `extmod` und den Tag `exttag` übergeben werden.
- Die Funktion `$throwException` löst mit der Anweisung `throw` eine Ausnahme aus und verwendet dabei `$tagname` und das Parameterargument.
- Das Modul exportiert die Funktion `run()`, die eine Ausnahme mit dem Wert „42“ auslöst.

```wat
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException function throws i32 param as a $tagname exception
  (func $throwException (param $errorValueArg i32)
    local.get $errorValueArg
    throw $tagname
  )

  ;; Exported function "run" that calls $throwException
  (func (export "run")
    i32.const 42
    call $throwException
  )
)
```

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei **example.wasm** zu importieren. Dabei übergibt er ein „Importobjekt“ (`importObject`), das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält.
Das Importobjekt definiert ein Objekt mit Eigenschaften, die der `import`-Anweisung im WebAssembly-Code entsprechen.

Sobald die Datei instanziiert wurde, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme auslöst.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// Note: import object properties match the WebAssembly import statement!
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // Check we have the right tag for the exception
    // If so, use getArg() to inspect it
    if (e.is(tagToImport)) {
      console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
    }
  });

/* Log output
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 42
*/
```

Die Ausnahme wird in JavaScript im `catch`-Block abgefangen.
Sie ist vom Typ `WebAssembly.Exception`. Ohne den richtigen Tag könnten wir jedoch kaum etwas Weiteres damit anfangen.

Da wir den Tag haben, prüfen wir mit [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), ob es der richtige ist. Da dies der Fall ist, lesen wir mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) den Wert „42“ aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
