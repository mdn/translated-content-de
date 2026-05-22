---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/Reference/JavaScript_interface/Exception/getArg
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Die **`getArg()`** Methode des [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) Objekts kann verwendet werden, um den Wert eines bestimmten Elements in den Datenargumenten der Ausnahme zu erhalten.

## Syntax

```js-nolint
getArg(exceptionTag, index)
```

### Parameter

- `exceptionTag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), das mit dem Tag übereinstimmen muss, das mit dieser Ausnahme verbunden ist.
- `index`
  - : Der Index des Wertes in den Datenargumenten, der zurückgegeben werden soll.

### Rückgabewert

Der Wert des Arguments bei `index`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Tags stimmen nicht überein; die Ausnahme wurde nicht mit dem an die Methode übergebenen Tag erstellt.
- {{jsxref("RangeError")}}
  - : Der Wert des `index`-Parameters ist größer oder gleich der Anzahl der Felder in den Daten.

## Beschreibung

Die `getArg()` Methode akzeptiert ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) als Parameter und wird nur erfolgreich sein, wenn die geworfene `Exception` mit demselben Tag erstellt wurde, andernfalls wird ein `TypeError` ausgelöst. Dies stellt sicher, dass die Ausnahme nur gelesen werden kann, wenn der aufrufende Code Zugriff auf das Tag hat. Tags, die weder in den WebAssembly-Code importiert noch aus diesem exportiert werden, sind intern, und ihre zugehörigen Ausnahmen können mit dieser Methode nicht abgefragt werden.

> [!NOTE]
> Es reicht nicht aus, dass das Tag eine identische Sequenz von Datentypen hat – es muss dieselbe _Identität_ (dasselbe Tag) haben, das zur Erstellung der Ausnahme verwendet wurde.

## Beispiele

### Abrufen von Ausnahme-Werten von einem importierten Tag

Betrachten Sie den folgenden WebAssembly-Code, der angenommen wird, in eine Datei namens `example.wasm` kompiliert zu sein. Dieser importiert ein Tag, das intern als `$tagname` bezeichnet wird, und exportiert eine Methode `run`, die von externem Code aufgerufen werden kann, um eine Ausnahme mit dem Tag zu werfen.

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

Der untenstehende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei `example.wasm` zu importieren, wobei ein Import-Objekt (`importObject`) übergeben wird, das ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält. Das Import-Objekt definiert ein Objekt mit Eigenschaften, die der `import`-Anweisung im WebAssembly-Code entsprechen.

Sobald die Datei instanziiert ist, ruft der Code die exportierte WebAssembly `run()` Methode auf, die sofort eine Ausnahme werfen wird.

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

Der Code fängt die Ausnahme ab und verwendet `getArg()`, um den Wert beim ersten Index zu drucken. In diesem Fall ist der Wert `1`.

### Abrufen von Ausnahme-Werten von einem exportierten Tag

Der Prozess zur Verwendung eines exportierten Tags ist dem im vorherigen Abschnitt gezeigten sehr ähnlich. Hier ist dasselbe WebAssembly-Modul, welches einfach den Import durch einen Export ersetzt.

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

Auch das JavaScript ist ähnlich. In diesem Fall haben wir keine Importe; stattdessen erhalten wir das exportierte Tag und verwenden dieses, um das Argument zu erhalten. Wir testen auch, ob wir das richtige Tag haben, indem wir die [`is()` Methode](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) verwenden.

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
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
