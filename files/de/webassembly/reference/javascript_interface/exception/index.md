---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt stellt eine Laufzeitausnahme dar, die in einem Wasm-Modul ausgelöst wurde.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt eine neue Instanz des `WebAssembly.Exception`-Objekts.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)
  - : Prüft, ob die Ausnahme mit einem bestimmten Tag übereinstimmt.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die mit einem angegebenen Tag übereinstimmt.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)
  - : Gibt den Stack-Trace der Ausnahme zurück.

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

Danach können Sie versuchen, eine exportierte Wasm-Funktion innerhalb einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion eine Ausnahme auslöst, ist der an den `catch`-Block weitergegebene Fehler eine Instanz des `WebAssembly.Exception`-Objekts.

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

Mit [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) können Sie prüfen, ob die Ausnahme denselben Typ wie das zuvor definierte Tag (`myErrorTag`) hat. Anschließend können Sie mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf die Nutzdaten der Ausnahme zugreifen.

JavaScript und anderer Client-Code können nur dann auf WebAssembly-Ausnahmewerte zugreifen – und umgekehrt –, wenn das zugehörige Tag gemeinsam verwendet wird. Es reicht nicht aus, ein anderes Tag zu verwenden, das zufällig dieselben Datentypen definiert.
Ohne das passende Tag können Ausnahmen abgefangen und erneut ausgelöst, aber nicht untersucht werden.

Damit das Auslösen von Ausnahmen schneller ist, enthalten aus WebAssembly ausgelöste Ausnahmen in der Regel keinen Stack-Trace.
WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und dabei den Parameter `options.traceStack=true` an den Konstruktor übergeben.
Der Konstruktor kann dann eine Ausnahme zurückgeben, deren Eigenschaft [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) einen Stack-Trace enthält.

## Beispiele

Dieses Beispiel zeigt, wie Sie ein Tag definieren und in ein Modul importieren. Anschließend wird damit eine Ausnahme ausgelöst, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der in eine Datei namens **example.wasm** kompiliert wurde.

- Das Modul importiert ein Tag, das intern als `$tagname` bezeichnet wird und einen einzelnen `i32`-Parameter hat.
  Das Tag wird unter dem Modulnamen `extmod` und dem Tagnamen `exttag` übergeben.
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

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei **example.wasm** zu importieren. Dabei übergibt er ein „Importobjekt“ (`importObject`), das ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält.
Das Importobjekt enthält ein Objekt mit Eigenschaften, die zur `import`-Anweisung im WebAssembly-Code passen.

Nachdem die Datei instanziiert wurde, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme auslöst.

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
Sie hat den Typ `WebAssembly.Exception`. Ohne das passende Tag könnten wir jedoch kaum etwas Weiteres damit anfangen.

Da uns das Tag zur Verfügung steht, prüfen wir mit [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), ob es das richtige ist. Da dies der Fall ist, lesen wir mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) den Wert „42“ aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
