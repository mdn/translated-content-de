---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt repräsentiert eine Laufzeitausnahme, die in einem Wasm-Modul ausgelöst wird.

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

Beim Umgang mit Wasm-Ausnahmen aus dem JavaScript-Host haben abgefangene Ausnahmen den Objekttyp `WebAssembly.Exception`.

Zum Beispiel könnten Sie beginnen, einen Fehlertagtyp mit dem [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)-Konstruktor zu erstellen, wie folgt:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Sie können diesen dann in ein Wasm-Modul importieren, wie folgt:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(/* ... */);
```

Sie könnten dann versuchen, eine exportierte Wasm-Funktion in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion eine Ausnahme auslöst, wird der Fehler, der an den `catch`-Block weitergeleitet wird, eine Instanz des Objekts `WebAssembly.Exception` sein.

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

Sie können überprüfen, ob sie denselben Ausnahmetyp hat, den wir zuvor definiert haben (`myErrorTag`), indem Sie [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) verwenden und dann die Nutzdaten der Ausnahme mithilfe von [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) abrufen.

JavaScript und anderer Client-Code können WebAssembly-Ausnahmewerte nur dann erreichen, und umgekehrt, wenn der zugehörige Tag geteilt ist (man kann nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert).
Ohne das passende Tag können Ausnahmen abgefangen und erneut ausgelöst werden, aber sie können nicht untersucht werden.

Um das Auslösen von Ausnahmen schneller zu machen, enthalten aus WebAssembly ausgelöste Ausnahmen im Allgemeinen keinen Stack-Trace.
WebAssembly-Code, der einen Stack-Trace bereitstellen muss, sollte eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und dabei den Parameter `options.traceStack=true` im Konstruktor übergeben.
Der Konstruktor kann dann eine Ausnahme mit einem angehängten Stack-Trace an die Eigenschaft [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) zurückgeben.

## Beispiele

Dieses Beispiel zeigt, wie man einen Tag definiert und in ein Modul importiert und es dann verwendet, um eine Ausnahme auszulösen, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, in eine Datei **example.wasm** kompiliert zu werden.

- Das Modul importiert einen Tag, das intern als `$tagname` bezeichnet wird und einen einzelnen `i32`-Parameter hat.
  Das Tag erwartet, dass es über das Modul `extmod` und das Tag `exttag` übergeben wird.
- Die Funktion `$throwException` löst eine Ausnahme mit der `throw`-Anweisung aus, indem sie den `$tagname` und das Parameterargument verwendet.
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

Der untenstehende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei **example.wasm** zu importieren, und übergibt ein "Import-Objekt" (`importObject`), das ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält.
Das Import-Objekt definiert ein Objekt mit Eigenschaften, die zur `import`-Anweisung im WebAssembly-Code passen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme auslöst.

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

Die Ausnahme wird in JavaScript mit dem `catch`-Block abgefangen.
Wir sehen, dass es sich um eine Ausnahme vom Typ `WebAssembly.Exception` handelt, aber wenn wir nicht den richtigen Tag hätten, könnten wir nicht viel mehr tun.

Weil wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), um zu überprüfen, ob es der richtige ist, und weil es korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf, um den Wert von "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
