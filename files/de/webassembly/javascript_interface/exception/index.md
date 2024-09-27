---
title: WebAssembly.Exception
slug: WebAssembly/JavaScript_interface/Exception
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{WebAssemblySidebar}} {{AvailableInWorkers}}

Das **`WebAssembly.Exception`** Objekt stellt eine Laufzeitausnahme dar, die von WebAssembly nach JavaScript geworfen oder von JavaScript zu einem WebAssembly-Ausnahmehandler geworfen wird.

Der [Konstruktor](/de/docs/WebAssembly/JavaScript_interface/Exception/Exception) akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag), ein Array von Werten und ein `options` Objekt als Argumente. Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge ihrer Argumente und deren Datentypen. Der gleiche Tag, der zur Erstellung der `Exception` verwendet wurde, ist erforderlich, um auf die Argumente einer geworfenen Ausnahme zuzugreifen. Es werden Methoden bereitgestellt, um zu testen, ob eine Ausnahme zu einem bestimmten Tag passt, und auch um einen bestimmten Wert nach Index zu erhalten (wenn die Ausnahme dem angegebenen Tag entspricht).

JavaScript und anderer Client-Code können nur auf WebAssembly-Ausnahmewerte zugreifen und umgekehrt, wenn der zugehörige Tag gemeinsam genutzt wird (Sie können nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert). Ohne den passenden Tag können Ausnahmen abgefangen und erneut geworfen werden, aber sie können nicht inspiziert werden.

Um das Werfen von Ausnahmen schneller zu machen, beinhalten von WebAssembly geworfene Ausnahmen in der Regel keinen Stack-Trace. WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und dabei den Parameter `options.traceStack=true` im Konstruktor übergeben. Der Konstruktor kann dann eine Ausnahme mit einem angehängten Stack-Trace in der [`stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack) Eigenschaft zurückgeben.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/JavaScript_interface/Exception/Exception)
  - : Erstellt ein neues `WebAssembly.Exception` Objekt.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/JavaScript_interface/Exception/is)

  - : Testet, ob die Ausnahme zu einem bestimmten Tag passt.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die mit einem angegebenen Tag übereinstimmt.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt den Stack-Trace für die Ausnahme zurück, oder `undefined`.

## Beispiele

Dieses Beispiel zeigt, wie man einen Tag definiert und in ein Modul importiert, um ihn dann zu verwenden, um eine Ausnahme auszulösen, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, in eine Datei **example.wasm** kompiliert zu werden.

- Das Modul importiert einen Tag, das intern als `$tagname` bezeichnet wird und einen einzigen `i32` Parameter hat. Der Tag erwartet, dass der Tag mit dem Modul `extmod` und dem Tag `exttag` übergeben wird.
- Die `$throwException` Funktion wirft eine Ausnahme mithilfe der `throw` Anweisung, die `$tagname` und das Parameterargument entgegennimmt.
- Das Modul exportiert die Funktion `run()`, die eine Ausnahme mit dem Wert "42" wirft.

```wasm
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

Der unten stehende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) auf, um die **example.wasm** Datei zu importieren und ein "import object" (`importObject`) zu übergeben, das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag) namens `tagToImport` umfasst. Das Importobjekt definiert ein Objekt mit Eigenschaften, die zur `import` Anweisung im WebAssembly-Code passen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly `run()` Methode auf, die sofort eine Ausnahme wirft.

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

Die Ausnahme wird in JavaScript mit dem `catch` Block gefangen. Wir können sehen, dass es vom Typ `WebAssembly.Exception` ist, aber ohne den richtigen Tag könnten wir nicht viel mehr tun.

Weil wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/JavaScript_interface/Exception/is), um zu überprüfen, ob es der richtige ist, und da es korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg) auf, um den Wert "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
