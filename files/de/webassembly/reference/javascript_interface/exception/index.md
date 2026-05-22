---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt stellt eine Laufzeitausnahme dar, die in einem Wasm-Modul ausgelöst wird.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt eine neue Instanz des `WebAssembly.Exception`-Objekts.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)
  - : Prüft, ob die Ausnahme mit einem bestimmten Tag übereinstimmt.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die mit einem angegebenen Tag übereinstimmt.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt die Stack-Trace der Ausnahme zurück.

## Beschreibung

Beim Umgang mit Wasm-Ausnahmen aus dem JavaScript-Host haben gefangene Ausnahmen den Objekttyp `WebAssembly.Exception`.

Zum Beispiel könnten Sie beginnen, einen Fehlertagtyp mit dem [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)-Konstruktor zu erstellen, wie folgt:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Sie können ihn dann in ein Wasm-Modul wie folgt importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then( ... )
```

Anschließend könnten Sie versuchen, eine exportierte Wasm-Funktion in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion eine Ausnahme auslöst, wird der Fehler, der an den `catch`-Block weitergegeben wird, eine Instanz des [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts sein.

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

Sie können prüfen, ob sie denselben Ausnahmetyp hat, den wir zuvor definiert haben (`myErrorTag`), indem Sie [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) verwenden und dann die Nutzlast der Ausnahme mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) abrufen.

JavaScript und anderer Client-Code können nur auf WebAssembly-Ausnahmewerte und umgekehrt zugreifen, wenn der zugehörige Tag geteilt wird (Sie können nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert).
Ohne das passende Tag können Ausnahmen gefangen und erneut ausgelöst werden, aber sie können nicht inspiziert werden.

Um das Auslösen von Ausnahmen zu beschleunigen, enthalten Ausnahmen, die von WebAssembly geworfen werden, in der Regel keine Stack-Trace.
WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, indem der Parameter `options.traceStack=true` im Konstruktor übergeben wird.
Der Konstruktor kann dann eine Ausnahme zurückgeben, die mit einer an die [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft angehängten Stack-Trace versehen ist.

## Beispiele

Dieses Beispiel zeigt, wie ein Tag definiert und in ein Modul importiert wird und wie es verwendet wird, um eine Ausnahme auszulösen, die in JavaScript gefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der in eine Datei **example.wasm** kompiliert werden soll.

- Das Modul importiert einen Tag, das intern als `$tagname` bezeichnet wird und einen einzigen `i32`-Parameter hat.
  Das Tag erwartet, dass das Tag unter Verwendung des Moduls `extmod` und des Tags `exttag` übergeben wird.
- Die Funktion `$throwException` löst eine Ausnahme mit der `throw`-Anweisung aus, bei der das `$tagname` und das Parameter-Argument verwendet werden.
- Das Modul exportiert die Funktion `run()`, die eine Ausnahme mit dem Wert "42" auslöst.

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

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei **example.wasm** zu importieren, wobei ein "Import-Objekt" (`importObject`) übergeben wird, das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) mit dem Namen `tagToImport` enthält.
Das Import-Objekt definiert ein Objekt mit Eigenschaften, die der `import`-Anweisung im WebAssembly-Code entsprechen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly `run()`-Methode auf, die sofort eine Ausnahme auslöst.

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

Die Ausnahme wird in JavaScript mit dem `catch`-Block gefangen.
Wir können sehen, dass sie vom Typ `WebAssembly.Exception` ist, aber ohne den richtigen Tag könnten wir nicht viel mehr tun.

Da wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), um zu prüfen, ob es der richtige ist, und da er korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf, um den Wert "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)-Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
