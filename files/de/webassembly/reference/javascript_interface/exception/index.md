---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: e842ea87b1bbc692ae61395fa0d01d81c95ebb11
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`** Objekt repräsentiert eine zur Laufzeit geworfene Ausnahme, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahmehandler geworfen wird.

Der [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente.
Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge ihrer Argumente und ihrer Datentypen.
Der gleiche Tag, der verwendet wurde, um die `Exception` zu erstellen, ist erforderlich, um auf die Argumente einer geworfenen Ausnahme zuzugreifen.
Es gibt Methoden, um zu testen, ob eine Ausnahme einem bestimmten Tag entspricht, und um einen bestimmten Wert nach Index zu erhalten (wenn die Ausnahme dem angegebenen Tag entspricht).

JavaScript und andere Client-Code können nur auf WebAssembly-Ausnahme-Werte zugreifen und umgekehrt, wenn der zugehörige Tag geteilt wird (Sie können nicht einfach einen anderen Tag verwenden, der zufällig die gleichen Datentypen definiert).
Ohne den passenden Tag können Ausnahmen abgefangen und erneut geworfen werden, aber sie können nicht inspiziert werden.

Um das Werfen von Ausnahmen schneller zu machen, beinhalten Ausnahmen, die von WebAssembly geworfen werden, im Allgemeinen keine Stack-Traces.
WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, wobei der Parameter `options.traceStack=true` im Konstruktor übergeben wird.
Der Konstruktor kann dann eine Ausnahme mit einem angehängten Stack-Trace an der [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) Eigenschaft zurückgeben.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt ein neues `WebAssembly.Exception` Objekt.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)

  - : Testet, ob die Ausnahme einem bestimmten Tag entspricht.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die einem angegebenen Tag entspricht.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt den Stack-Trace für die Ausnahme oder `undefined` zurück.

## Beispiele

Dieses Beispiel zeigt, wie ein Tag definiert und in ein Modul importiert wird, um es dann zu verwenden, um eine Ausnahme zu werfen, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, als Datei **example.wasm** kompiliert zu sein.

- Das Modul importiert ein Tag, das intern als `$tagname` bezeichnet wird und das einen einzelnen `i32` Parameter hat.
  Das Tag erwartet, dass das Tag mit Modul `extmod` und Tag `exttag` übergeben wird.
- Die `$throwException` Funktion wirft eine Ausnahme mithilfe der `throw` Anweisung, wobei `$tagname` und das Parameterargument verwendet werden.
- Das Modul exportiert die Funktion `run()`, die eine Ausnahme mit dem Wert "42" wirft.

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

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei **example.wasm** zu importieren, und übergibt ein "Import-Objekt" (`importObject`), das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) mit dem Namen `tagToImport` enthält.
Das Import-Objekt definiert ein Objekt mit Eigenschaften, die dem `import`-Statement im WebAssembly-Code entsprechen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly `run()` Methode auf, die sofort eine Ausnahme werfen wird.

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

Die Ausnahme wird in JavaScript mit dem `catch` Block abgefangen.
Wir sehen, dass es sich um eine `WebAssembly.Exception` handelt, aber ohne den richtigen Tag könnten wir nicht viel mehr machen.

Da wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), um zu überprüfen, ob es der richtige ist, und weil er korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf, um den Wert "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
