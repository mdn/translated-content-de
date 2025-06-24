---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly nach JavaScript geworfen wird oder von JavaScript zu einem WebAssembly-Ausnahmebehandler.

Der [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente.
Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge seiner Argumente und ihrer Datentypen.
Der gleiche Tag, der zum Erstellen der `Exception` verwendet wurde, ist erforderlich, um die Argumente einer ausgelösten Ausnahme zuzugreifen.
Es werden Methoden bereitgestellt, um zu testen, ob eine Ausnahme mit einem bestimmten Tag übereinstimmt, und auch um einen bestimmten Wert nach Index zu erhalten (wenn die Ausnahme mit dem angegebenen Tag übereinstimmt).

JavaScript und anderer Clientcode können nur auf WebAssembly-Ausnahmewerte zugreifen, und umgekehrt, wenn der zugehörige Tag geteilt ist (Sie können nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert).
Ohne das übereinstimmende Tag können Ausnahmen abgefangen und erneut ausgelöst werden, aber sie können nicht inspiziert werden.

Um das Werfen von Ausnahmen schneller zu machen, enthalten aus WebAssembly geworfene Ausnahmen im Allgemeinen keinen Stack-Trace.
WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und den Parameter `options.traceStack=true` im Konstruktor übergeben.
Der Konstruktor kann dann eine Ausnahme zurückgeben, die einen Stack-Trace in der [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft angehängt hat.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt ein neues `WebAssembly.Exception`-Objekt.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)

  - : Prüft, ob die Ausnahme mit einem bestimmten Tag übereinstimmt.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die mit einem angegebenen Tag übereinstimmt.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt den Stack-Trace für die Ausnahme oder `undefined` zurück.

## Beispiele

Dieses Beispiel zeigt, wie man einen Tag definiert und ihn in ein Modul importiert, um dann eine Ausnahme zu werfen, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, dass er in eine Datei **example.wasm** kompiliert wurde.

- Das Modul importiert einen Tag, der intern als `$tagname` bezeichnet wird und einen einzigen `i32`-Parameter hat.
  Der Tag erwartet, dass der Tag unter Verwendung des Moduls `extmod` und des Tags `exttag` übergeben wird.
- Die `$throwException`-Funktion wirft eine Ausnahme unter Verwendung der `throw`-Anweisung, wobei das `$tagname` und das Parameterargument verwendet werden.
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

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei **example.wasm** zu importieren und ein "Importobjekt" (`importObject`) zu übergeben, das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) mit dem Namen `tagToImport` enthält.
Das Importobjekt definiert ein Objekt mit Eigenschaften, die zur `import`-Anweisung im WebAssembly-Code passen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die unmittelbar eine Ausnahme auslöst.

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
Wir können sehen, dass es vom Typ `WebAssembly.Exception` ist, aber wenn wir nicht den richtigen Tag hätten, könnten wir nicht viel mehr tun.

Da wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), um zu überprüfen, ob es der richtige ist, und da es richtig ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf, um den Wert von "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
