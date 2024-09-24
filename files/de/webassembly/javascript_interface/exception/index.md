---
title: WebAssembly.Exception
slug: WebAssembly/JavaScript_interface/Exception
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{WebAssemblySidebar}} {{AvailableInWorkers}}

Das **`WebAssembly.Exception`**-Objekt repräsentiert eine Laufzeitausnahme, die von WebAssembly zu JavaScript oder von JavaScript zu einem WebAssembly-Ausnahmehandler geworfen wird.

Der [Konstruktor](/de/docs/WebAssembly/JavaScript_interface/Exception/Exception) akzeptiert ein [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente. Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge seiner Argumente und ihrer Datentypen. Derselbe Tag, der zur Erstellung der `Exception` verwendet wurde, ist erforderlich, um die Argumente einer geworfenen Ausnahme zuzugreifen. Es werden Methoden bereitgestellt, um zu testen, ob eine Ausnahme einem bestimmten Tag entspricht, und um einen bestimmten Wert nach Index zu erhalten (wenn die Ausnahme einem angegebenen Tag entspricht).

JavaScript und anderer Client-Code können nur auf WebAssembly-Ausnahmewerte zugreifen, und umgekehrt, wenn der zugehörige Tag geteilt wird (man kann nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert). Ohne den passenden Tag können Ausnahmen abgefangen und erneut geworfen werden, aber sie können nicht inspiziert werden.

Um das Werfen von Ausnahmen schneller zu machen, beinhalten von WebAssembly geworfene Ausnahmen im Allgemeinen keinen Stack-Trace. WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, und den Parameter `options.traceStack=true` im Konstruktor übergeben. Der Konstruktor kann dann eine Ausnahme mit einem an die [`stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack)-Eigenschaft angehängten Stack-Trace zurückgeben.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/JavaScript_interface/Exception/Exception)
  - : Erstellt ein neues `WebAssembly.Exception`-Objekt.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/JavaScript_interface/Exception/is)

  - : Testet, ob die Ausnahme einem bestimmten Tag entspricht.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die einem angegebenen Tag entspricht.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt den Stack-Trace für die Ausnahme oder `undefined` zurück.

## Beispiele

Dieses Beispiel zeigt, wie man einen Tag definiert und ihn in ein Modul importiert, um dann eine Ausnahme zu werfen, die in JavaScript abgefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, in eine Datei **example.wasm** kompiliert zu werden.

- Das Modul importiert einen Tag, der intern als `$tagname` bezeichnet wird und einen einzelnen `i32`-Parameter hat. Der Tag erwartet, dass der Tag mit dem Modul `extmod` und dem Tag `exttag` übergeben wird.
- Die Funktion `$throwException` wirft eine Ausnahme mit der `throw`-Anweisung, indem sie den `$tagname` und das Parameterargument nimmt.
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

Der untenstehende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) auf, um die Datei **example.wasm** zu importieren und ein "Importobjekt" (`importObject`) zu übergeben, das ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag) namens `tagToImport` enthält. Das Importobjekt definiert ein Objekt mit Eigenschaften, die der `import`-Anweisung im WebAssembly-Code entsprechen.

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

Die Ausnahme wird in JavaScript mit dem `catch`-Block abgefangen. Wir können sehen, dass sie vom Typ `WebAssembly.Exception` ist, aber ohne den richtigen Tag könnten wir nicht viel mehr tun.

Da wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/JavaScript_interface/Exception/is), um zu überprüfen, ob es der richtige ist, und weil es korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg) auf, um den Wert von "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
