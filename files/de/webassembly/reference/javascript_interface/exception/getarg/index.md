---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/Reference/JavaScript_interface/Exception/getArg
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

Die Methode **`getArg()`** des Objekts [`Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) kann verwendet werden, um den Wert eines angegebenen Elements in den Datenargumenten der Exception abzurufen.

## Syntax

```js-nolint
getArg(exceptionTag, index)
```

### Parameter

- `exceptionTag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), der mit dem dieser Exception zugeordneten Tag übereinstimmen muss.
- `index`
  - : Der Index des Werts in den Datenargumenten, der zurückgegeben werden soll.

### Rückgabewert

Der Wert des Arguments bei `index`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Tags stimmen nicht überein; die Exception wurde nicht mit dem an die Methode übergebenen Tag erstellt.
- {{jsxref("RangeError")}}
  - : Der Wert des Parameters `index` ist größer oder gleich der Anzahl der Felder in den Daten.

## Beschreibung

Die Methode `getArg()` akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) als Parameter und ist nur erfolgreich, wenn die ausgelöste `Exception` mit demselben Tag erstellt wurde. Andernfalls wird ein `TypeError` ausgelöst.
Dadurch wird sichergestellt, dass die Exception nur gelesen werden kann, wenn der aufrufende Code Zugriff auf das Tag hat.
Tags, die weder in den WebAssembly-Code importiert noch aus ihm exportiert werden, sind intern, und ihre zugeordneten Exceptions können mit dieser Methode nicht abgefragt werden.

> [!NOTE]
> Es reicht nicht aus, dass das Tag eine identische Sequenz von Datentypen hat — es muss dieselbe _Identität_ haben (dasselbe Tag sein), die zum Erstellen der Exception verwendet wurde.

## Beispiele

### Abrufen von Exception-Werten aus einem importierten Tag

Betrachten Sie den folgenden WebAssembly-Code, der vermutlich in eine Datei namens `example.wasm` kompiliert wird.
Dieser importiert ein Tag, auf das er intern als `$tagname` verweist, und exportiert eine Methode `run`, die von externem Code aufgerufen werden kann, um mit dem Tag eine Exception auszulösen.

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

Der folgende Code ruft [`WebAssembly.instantiateStreaming`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) auf, um die Datei `example.wasm` zu importieren. Dabei wird ein Importobjekt (`importObject`) übergeben, das einen neuen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) namens `tagToImport` enthält.
Das Importobjekt definiert ein Objekt mit Eigenschaften, die mit der `import`-Anweisung im WebAssembly-Code übereinstimmen.

Sobald die Datei instanziiert wurde, ruft der Code die exportierte WebAssembly-Methode `run()` auf, die sofort eine Exception auslöst.

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

Der Code fängt die Exception ab und verwendet `getArg()`, um den Wert am ersten Index auszugeben.
In diesem Fall ist der Wert `1`.

### Abrufen von Exception-Werten aus einem exportierten Tag

Der Prozess zur Verwendung eines exportierten Tags ist dem im vorherigen Abschnitt gezeigten sehr ähnlich.
Hier ist dasselbe WebAssembly-Modul, bei dem lediglich der Import durch einen Export ersetzt wurde.

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

Auch das JavaScript ist ähnlich. In diesem Fall gibt es keine Importe; stattdessen wird das exportierte Tag abgerufen und verwendet, um das Argument zu erhalten.
Außerdem wird mit der [`is()`-Methode](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) getestet, ob es das richtige Tag ist.

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

- [WebAssembly](/de/docs/WebAssembly)-Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwenden der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
