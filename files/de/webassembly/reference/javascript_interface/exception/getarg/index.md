---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/Reference/JavaScript_interface/Exception/getArg
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die **`getArg()`** Prototyp-Methode des [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts kann verwendet werden, um den Wert eines bestimmten Elements in den Datenargumenten der Ausnahme abzurufen.

Die Methode übergibt ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) und wird nur erfolgreich sein, wenn die geworfene `Exception` mit demselben Tag erstellt wurde. Andernfalls wird ein `TypeError` ausgelöst. Dies stellt sicher, dass die Ausnahme nur gelesen werden kann, wenn der aufrufende Code Zugriff auf das Tag hat. Tags, die weder in den noch aus dem WebAssembly-Code importiert oder exportiert werden, sind intern, und ihre zugehörige [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) kann mit dieser Methode nicht abgefragt werden!

> [!NOTE]
> Es reicht nicht aus, dass das Tag eine identische Folge von Datentypen hat – es muss die gleiche _Identität_ (das gleiche Tag) sein, das zur Erstellung der Ausnahme verwendet wurde.

## Syntax

```js-nolint
getArg(exceptionTag, index)
```

### Parameter

- `exceptionTag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), das mit dem Tag übereinstimmen muss, das mit dieser Ausnahme verknüpft ist.
- `index`
  - : Der Index des Werts in den Datenargumenten, der zurückgegeben werden soll, 0-indiziert.

### Rückgabewert

Der Wert des Arguments an `index`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Tags stimmen nicht überein; die Ausnahme wurde nicht mit dem Tag erstellt, das an die Methode übergeben wurde.
- {{jsxref("RangeError")}}
  - : Der Wert des `index`-Parameters ist größer oder gleich der Anzahl der Felder in den Daten.

## Beispiele

Damit die Werte einer Ausnahme abgerufen werden können, muss das Tag dem aufrufenden Code "bekannt" sein; es kann entweder in den aufrufenden Code importiert oder aus ihm exportiert werden.

### Ausnahmewert von importiertem Tag abrufen

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, dass er in eine Datei "example.wasm" kompiliert ist. Dieser importiert ein Tag, das intern als `$tagname` bezeichnet wird, und exportiert eine Methode `run`, die von externem Code aufgerufen werden kann, um unter Verwendung des Tags eine Ausnahme auszulösen.

```wat
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

Der untenstehende Code verwendet [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), um die Datei "example.wasm" zu importieren, wobei ein "Importobjekt" (`importObject`) übergeben wird, das ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält. Das Importobjekt definiert ein Objekt mit Eigenschaften, die mit der `import`-Anweisung im WebAssembly-Code übereinstimmen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly `run()`-Methode auf, die sofort eine Ausnahme auslösen wird.

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

Der Code fängt die Ausnahme ab und verwendet `getArg()`, um den Wert am ersten Index zu drucken. In diesem Fall ist es nur "1".

### Ausnahmewert von exportiertem Tag abrufen

Der Prozess zur Verwendung eines exportierten Tags ist dem im vorherigen Abschnitt gezeigten sehr ähnlich. Hier ist dasselbe WebAssembly-Modul, wobei einfach der Import durch einen Export ersetzt wird.

```wat
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

Das JavaScript ist ebenfalls ähnlich. In diesem Fall haben wir keine Importe, aber wir erhalten das exportierte Tag und verwenden dieses, um das Argument zu bekommen. Um es ein wenig "sicherer" zu machen, testen wir hier auch, ob wir das richtige Tag haben, indem wir die [`is()`-Methode](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) verwenden.

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
