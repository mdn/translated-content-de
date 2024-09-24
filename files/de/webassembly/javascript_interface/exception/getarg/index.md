---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/JavaScript_interface/Exception/getArg
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`getArg()`**-Prototypmethode des [`Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception)-Objekts kann verwendet werden, um den Wert eines bestimmten Elements in den Datenargumenten der Ausnahme zu erhalten.

Die Methode übergibt ein [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag) und wird nur erfolgreich sein, wenn die ausgelöste `Exception` mit dem gleichen Tag erstellt wurde. Andernfalls wird ein `TypeError` ausgelöst. Dies stellt sicher, dass die Ausnahme nur gelesen werden kann, wenn der aufrufende Code Zugriff auf das Tag hat. Tags, die weder in den WebAssembly-Code importiert noch von ihm exportiert werden, sind intern, und ihre zugehörigen [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) können mit dieser Methode nicht abgefragt werden!

> [!NOTE]
> Es reicht nicht aus, dass das Tag eine identische Sequenz von Datentypen hat — es muss die gleiche _Identität_ (das gleiche Tag) besitzen, das zur Erstellung der Ausnahme verwendet wurde.

## Syntax

```js-nolint
getArg(exceptionTag, index)
```

### Parameter

- `exceptionTag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag), das mit dem Tag übereinstimmen muss, das dieser Ausnahme zugeordnet ist.
- `index`
  - : Der Index des Werts in den Datenargumenten, der zurückgegeben werden soll, beginnend bei 0.

### Rückgabewert

Der Wert des Arguments bei `index`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Tags stimmen nicht überein; die Ausnahme wurde nicht mit dem an die Methode übergebenen Tag erstellt.
- {{jsxref("RangeError")}}
  - : Der Wert des `index`-Parameters ist größer als oder gleich der Anzahl der Felder in den Daten.

## Beispiele

Um die Werte einer Ausnahme zu erhalten, muss das Tag dem aufrufenden Code "bekannt" sein; es kann entweder in den oder aus dem aufrufenden Code importiert werden.

### Ausnahmeauswertung aus importiertem Tag

Betrachten Sie den folgenden WebAssembly-Code, von dem angenommen wird, dass er in eine Datei "example.wasm" kompiliert wird. Dieser importiert ein Tag, das intern als `$tagname` bezeichnet wird, und exportiert eine Methode `run`, die von externem Code aufgerufen werden kann, um eine Ausnahme mit dem Tag auszulösen.

```wasm
(module
  ;; import tag that will be referred to here as $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException function throws i32 param as a $tagname exception
  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  ;; Exported function "run" that calls $throwException
  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) auf, um die Datei "example.wasm" zu importieren, wobei ein "Importobjekt" (`importObject`) übergeben wird, das ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag) namens `tagToImport` enthält. Das Importobjekt definiert ein Objekt mit Eigenschaften, die der `import`-Anweisung im WebAssembly-Code entsprechen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Ausnahme auslösen wird.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// Note: the import object properties match the import statement in WebAssembly code!
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
    console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
  });

/* Log output
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 1
*/
```

Der Code fängt die Ausnahme ab und verwendet `getArg()`, um den Wert am ersten Index zu drucken. In diesem Fall ist es einfach "1".

### Ausnahmeauswertung aus einem exportierten Tag

Der Prozess für die Verwendung eines exportierten Tags ist dem in der vorherigen Sektion gezeigten sehr ähnlich. Hier ist das gleiche WebAssembly-Modul, wobei der Import einfach durch einen Export ersetzt wird.

```wasm
(module
  ;; Export tag giving it external name: "exptag"
  (tag $tagname (export "exptag") (param i32))

  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

Das JavaScript ist ebenfalls ähnlich. In diesem Fall haben wir keine Importe, aber stattdessen erhalten wir das exportierte Tag und verwenden dies, um das Argument zu erhalten. Um es etwas "sicherer" zu machen, testen wir hier auch, ob wir das richtige Tag mit der [`is()` Methode](/de/docs/WebAssembly/JavaScript_interface/Exception/is) haben.

```js
let tagExportedFromWasm;

WebAssembly.instantiateStreaming(fetch("example.wasm"))
  .then((obj) => {
    // Import the tag using its name from the WebAssembly module
    tagExportedFromWasm = obj.instance.exports.exptag;
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // If the tag is correct, get the value
    if (e.is(tagExportedFromWasm)) {
      console.log(`getArg 0 : ${e.getArg(tagExportedFromWasm, 0)}`);
    }
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblicksseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
