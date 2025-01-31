---
title: WebAssembly.Exception
slug: WebAssembly/Reference/JavaScript_interface/Exception
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{AvailableInWorkers}}

Das **`WebAssembly.Exception`** Objekt repräsentiert eine Laufzeitausnahme, die von WebAssembly nach JavaScript geworfen wird, oder von JavaScript zu einem WebAssembly-Ausnahmehandler geworfen wird.

Der [Konstruktor](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception) akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente. Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge ihrer Argumente und deren Datentypen. Derselbe Tag, der zur Erstellung der `Exception` verwendet wurde, ist erforderlich, um die Argumente einer geworfenen Ausnahme zuzugreifen. Methoden werden bereitgestellt, um zu testen, ob eine Ausnahme zu einem bestimmten Tag passt, und um einen bestimmten Wert nach Index zu erhalten (wenn die Ausnahme dem angegebenen Tag entspricht).

JavaScript und anderer Client-Code können auf WebAssembly-Ausnahmewerte und umgekehrt nur zugreifen, wenn der zugehörige Tag geteilt wird (Sie können nicht einfach einen anderen Tag verwenden, der zufällig dieselben Datentypen definiert). Ohne den passenden Tag können Ausnahmen gefangen und erneut geworfen werden, aber sie können nicht inspiziert werden.

Um das Werfen von Ausnahmen schneller zu machen, schließen Ausnahmen, die von WebAssembly geworfen werden, im Allgemeinen keinen Stack-Trace ein. WebAssembly-Code, der einen Stack-Trace bereitstellen muss, muss eine JavaScript-Funktion aufrufen, um die Ausnahme zu erstellen, indem der Parameter `options.traceStack=true` im Konstruktor übergeben wird. Der Konstruktor kann dann eine Ausnahme mit einem an die [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft angehängten Stack-Trace zurückgeben.

## Konstruktor

- [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
  - : Erstellt ein neues `WebAssembly.Exception` Objekt.

## Instanzmethoden

- [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)

  - : Testet, ob die Ausnahme zu einem bestimmten Tag passt.

- [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
  - : Gibt die Datenfelder einer Ausnahme zurück, die einem angegebenen Tag entspricht.

## Instanzeigenschaften

- [`Exception.prototype.stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) {{non-standard_inline}}
  - : Gibt den Stack-Trace für die Ausnahme zurück, oder `undefined`.

## Beispiele

Dieses Beispiel zeigt, wie man einen Tag definiert und in ein Modul importiert, dann verwendet, um eine Ausnahme zu werfen, die in JavaScript gefangen wird.

Betrachten Sie den folgenden WebAssembly-Code, der in eine Datei **example.wasm** kompiliert wird.

- Das Modul importiert einen Tag, der intern als `$tagname` bezeichnet wird und einen einzelnen `i32`-Parameter hat. Der Tag erwartet, dass der Tag mit dem Modul `extmod` und dem Tag `exttag` übergeben wird.
- Die `$throwException`-Funktion wirft eine Ausnahme mit Hilfe der `throw`-Anweisung, indem sie den `$tagname` und das Parameter-Argument nimmt.
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

Der unten stehende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die **example.wasm**-Datei zu importieren, wobei ein "Import-Objekt" (`importObject`) übergeben wird, das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält. Das Import-Objekt definiert ein Objekt mit Eigenschaften, die der `import`-Anweisung im WebAssembly-Code entsprechen.

Sobald die Datei instanziiert wurde, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme wirft.

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

Die Ausnahme wird in JavaScript mit dem `catch`-Block gefangen. Wir können sehen, dass sie vom Typ `WebAssembly.Exception` ist, aber wenn wir nicht den richtigen Tag hätten, könnten wir nicht viel mehr tun.

Da wir jedoch einen Tag haben, verwenden wir [`Exception.prototype.is()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is), um zu überprüfen, ob es der richtige ist, und da er korrekt ist, rufen wir [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) auf, um den Wert "42" zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
