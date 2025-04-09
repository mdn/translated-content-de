---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt repräsentiert eine Laufzeitausnahme, die entweder von WebAssembly nach JavaScript oder von JavaScript zu einem WebAssembly-Ausnahmebehandler geworfen wird.

Der [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente. Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge ihrer Argumente und ihrer Datentypen. Der gleiche Tag, der verwendet wurde, um die `Exception` zu erstellen, ist erforderlich, um die Argumente einer geworfenen Ausnahme zuzugreifen. Es werden Methoden bereitgestellt, um zu testen, ob eine Ausnahme einem bestimmten Tag entspricht, und um einen bestimmten Wert nach Index zu erhalten (wenn die Ausnahme dem angegebenen Tag entspricht).

JavaScript und anderer Client-Code können auf WebAssembly-Ausnahmewerte und umgekehrt nur dann zugreifen, wenn der zugehörige Tag geteilt wird (man kann nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert). Ohne den passenden Tag können Ausnahmen gefangen und erneut geworfen, aber nicht inspiziert werden.

Um das Werfen von Ausnahmen schneller zu machen, enthalten von WebAssembly geworfene Ausnahmen im Allgemeinen keinen Stapelverfolgung (Stack Trace). WebAssembly-Code, der einen Stapelverfolgung liefern muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, wobei der Parameter `options.traceStack=true` im Konstruktor übergeben wird. Der Konstruktor kann dann eine Ausnahme mit einer dem [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft angehängten Stapelverfolgung zurückgeben.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt ein neues `WebAssembly.Exception`-Objekt.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)

  - : Testet, ob die Ausnahme einem bestimmten Tag entspricht.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die einem angegebenen Tag entspricht.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt die Stapelverfolgung für die Ausnahme oder `undefined` zurück.

## Beispiele

Dieses Beispiel zeigt, wie man einen Tag definiert und ihn in ein Modul importiert, um dann eine Ausnahme zu werfen, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der angeblich in eine Datei **example.wasm** kompiliert wird.

- Das Modul importiert einen Tag, der intern als `$tagname` bezeichnet wird und einen einzelnen `i32`-Parameter hat. Der Tag erwartet, dass der Tag unter Verwendung des Moduls `extmod` und des Tags `exttag` übergeben wird.
- Die Funktion `$throwException` wirft eine Ausnahme unter Verwendung der `throw`-Anweisung, wobei der `$tagname` und das Parameterargument verwendet werden.
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

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die **example.wasm**-Datei zu importieren und ein "Importobjekt" (`importObject`) bereitzustellen, das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) mit dem Namen `tagToImport` enthält. Das Importobjekt definiert ein Objekt mit Eigenschaften, die der `import`-Anweisung im WebAssembly-Code entsprechen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme werfen wird.

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

Die Ausnahme wird in JavaScript mit dem `catch`-Block abgefangen. Wir können sehen, dass es sich um den Typ `WebAssembly.Exception` handelt, aber wenn wir nicht den richtigen Tag hätten, könnten wir nicht viel mehr tun.

Da wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), um zu überprüfen, ob es der richtige ist, und weil er korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf, um den Wert "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
