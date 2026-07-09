---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt repräsentiert eine zur Laufzeit in einem Wasm-Modul ausgelöste Ausnahme.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt eine neue `WebAssembly.Exception`-Objektinstanz.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)
  - : Prüft, ob die Ausnahme mit einem bestimmten Tag übereinstimmt.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die mit einem angegebenen Tag übereinstimmen.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt den Stack-Trace für die Ausnahme zurück.

## Beschreibung

Beim Umgang mit Wasm-Ausnahmen aus dem JavaScript-Host haben gefangene Ausnahmen einen `WebAssembly.Exception`-Objekttyp.

Zum Beispiel könnten Sie beginnen, einen Fehlertag-Typ mit dem [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)-Konstruktor zu erstellen, wie folgt:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

Sie können es dann in ein Wasm-Modul wie folgt importieren:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(/* ... */);
```

Sie könnten dann versuchen, eine exportierte Wasm-Funktion in einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung auszuführen. Wenn die Funktion auslöst, wird der an den `catch`-Block propagierte Fehler eine `WebAssembly.Exception`-Objektinstanz sein.

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

Sie können prüfen, ob sie denselben von uns zuvor definierten Ausnahmetyp (`myErrorTag`) hat, indem Sie [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) verwenden und dann auf die Nutzdaten der Ausnahme mit [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) zugreifen.

JavaScript und anderer Clientcode können nur auf WebAssembly-Ausnahmewerte zugreifen und umgekehrt, wenn das zugehörige Tag geteilt wird (Sie können nicht einfach ein anderes Tag verwenden, das zufällig dieselben Datentypen definiert).
Ohne das übereinstimmende Tag können Ausnahmen gefangen und erneut ausgelöst werden, aber sie können nicht inspiziert werden.

Um das Auslösen von Ausnahmen schneller zu machen, enthalten Ausnahmen, die von WebAssembly ausgelöst werden, in der Regel keinen Stack-Trace.
WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und den Parameter `options.traceStack=true` im Konstruktor übergeben.
Der Konstruktor kann dann eine Ausnahme mit einem an die [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) Eigenschaft angehängten Stack-Trace zurückgeben.

## Beispiele

Dieses Beispiel zeigt, wie man einen Tag definiert und in ein Modul importiert, ihn dann verwendet, um eine Ausnahme zu werfen, die in JavaScript gefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der in eine Datei **example.wasm** kompiliert wird.

- Das Modul importiert ein Tag, das intern als `$tagname` bezeichnet wird und einen einzelnen `i32`-Parameter hat.
  Das Tag erwartet, dass das Tag mit dem Modul `extmod` und dem Tag `exttag` übergeben wird.
- Die Funktion `$throwException` wirft eine Ausnahme mit der `throw`-Anweisung unter Verwendung des `$tagname` und des Parameterarguments.
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

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die **example.wasm**-Datei zu importieren, und übergibt dabei ein "import object" (`importObject`), das ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält.
Das Importobjekt definiert ein Objekt mit Eigenschaften, die mit der `import`-Anweisung im WebAssembly-Code übereinstimmen.

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

Die Ausnahme wird in JavaScript mit dem `catch`-Block gefangen.
Wir können sehen, dass es sich um einen Typ von `WebAssembly.Exception` handelt, aber wenn wir nicht das richtige Tag hätten, könnten wir nicht viel mehr tun.

Da wir jedoch ein Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), um zu überprüfen, ob es das richtige ist, und da es korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf, um den Wert von "42" auszulesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
