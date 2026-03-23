---
title: "set: Wasm-Tabellenanweisung"
short-title: set
slug: WebAssembly/Reference/Table/set
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`table.set`** [Tabellenanweisung](/de/docs/WebAssembly/Reference/Table) ändert den Wert, der in einem bestimmten Tabellenelement gespeichert ist.

{{InteractiveExample("Wat Demo: table.set", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; table with 0 function slots
  (table $return_funcs 0 funcref)

  ;; Define a function of the specified type
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func $populate
    (table.grow $return_funcs
      ref.null func
      (i32.const 1)
    )
    (drop)
    (table.set $return_funcs
      (i32.const 0)
      (ref.func $f1)
    )
  )

  (func (export "run") (result i32)
    (call $populate)
    (call_indirect (type $ret_i32) (i32.const 0))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.run();
  console.log(value);
});
```

## Syntax

```plain
table.set identifier
```

- `table.set`
  - : Der `table.set` Anweisungstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, in der Sie eine Referenz speichern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle festgesetzt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, z. B. `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, z. B. `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index, value] -> []
```

- `index`
  - : Der Elementindex, in dem der Wert gespeichert werden soll. Dies muss ein `i32` Wert sein, z. B. `(i32.const 1)`.
- `value`
  - : Der Wert, der in der Tabelle gespeichert werden soll. Dieser muss dem Elementtyp entsprechen, mit dem die Tabelle definiert wurde.

### Traps

`table.set` führt zu einem Fehler, wenn:

- `index` größer als [`table.size`](/de/docs/WebAssembly/Reference/Table/size) ist.

### Opcodes

| Anweisung   | Binärformat       | Beispieltext => binär        |
| ----------- | ----------------- | ---------------------------- |
| `table.set` | `0x26 𝑥:tableidx` | `table.set 0` => `0x26 0x01` |

## Beschreibung

Die `table.set`-Anweisung wird verwendet, um eine angegebene Funktion in einem bestimmten Element einer vorhandenen Tabelle zu speichern. Insbesondere ermöglicht es Wasm-Modulen, Referenzen in Tabellen zur Laufzeit zu ändern.

Dies ist praktisch, wenn später im Lebenszyklus eines Programms andere Referenzen benötigt werden als die, mit denen die Tabelle initialisiert wurde. Zum Beispiel könnten Sie eine Tabelle mit einem Element erstellen, zwei Funktionen definieren und dann das Tabellenelement mit einer Referenz auf eine dieser Funktionen mithilfe der `elem`-Moduldefinition initialisieren:

```wat
(module
  ;; Create table with 1 function slot
  (table $return_funcs 1 funcref)

  ;; Define basic functions that return i32s
  (func $f1 (result i32)
    (i32.const 42)
  )
  (func $f2 (result i32)
    (i32.const 100)
  )

  ;; initialize table slot
  (elem (i32.const 0) $f1)

  ...
```

Wenn Sie Anweisungen wie `table.set` verwenden, müssen Sie die Funktionen auch vorwärts deklarieren, indem Sie `(elem declare ...)` verwenden, damit sie später referenziert werden können:

```wat
  ...

  (elem declare func $f1 $f2)

  ...
```

Später können Sie dann die Funktionsreferenz, die im Tabellenelement gespeichert ist, dynamisch mit `table.set` ändern:

```wat
  ...

  (func $populate
    (table.set $return_funcs
      (i32.const 0)
      (ref.func $f2)
    )
  )

  ...
```

Eine Wasm-Tabelle kann über JavaScript mit der [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set)-Methode erweitert werden.

## Beispiele

### Erstellen, Erweitern und Festlegen einer Tabelle

Dieses Beispiel zeigt, wie Sie eine Tabelle erstellen, ihre Größe erweitern, die darin gespeicherten Funktionen dynamisch ändern und anschließend die zur jeweiligen Zeit in der Tabelle gespeicherte Funktion aufrufen.

#### JavaScript

In unserem Skript beginnen wir, indem wir eine Referenz auf ein {{htmlelement("p")}}-Element erfassen, in das wir Ergebnisse ausgeben werden. Danach definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das `obj`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion des [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekts auf und übergeben ihr das `outputElem`-Element als Parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

const obj = {
  output(elem, val) {
    elem.textContent += `${val} `;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  obj,
}).then((result) => {
  value = result.instance.exports.run(outputElem);
});
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion, wobei wir darauf achten, dass sie zwei Parameter hat: ein [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als Nächstes definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei Funktionen basierend auf diesem Typ, `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben. Diese deklarieren wir mit `(elem declare func $f1 $f2)` im Voraus, damit sie später referenziert werden können. Anschließend definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und anfangs leer ist.

Zuletzt exportieren wir die `run()`-Funktion, die ein `externref` mit dem Namen `$elem` als Parameter annimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erweitern, mit einem anfänglichen `ref.null`-Wert, und prüfen, ob das Ergebnis der Operation `-1` ist, was auf ein Scheitern hinweisen würde.
- Setzen wir unser Tabellenelement, um die `$f1`-Funktion mit `table.set` zu enthalten, rufen dann die importierte `$output`-Funktion auf und übergeben ihr als Parameter das `$elem`-`externref`, das in die `output()`-Funktion übergeben wurde, sowie den Wert, der von der `$f1`-Funktion zurückgegeben wird, die aus der Tabelle mit `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
- Setzen wir unser Tabellenelement, um die `$f2`-Funktion mit `table.set` zu enthalten und rufen dann erneut die `output()`-Funktion auf.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define basic functions that return i32s
  (func $f1 (result i32)
    (i32.const 42)
  )
  (func $f2 (result i32)
    (i32.const 100)
  )

  (elem declare func $f1 $f2)

  ;; Define an initially empty table of funcrefs
  (table $func_table 0 funcref)

  (func (export "run") (param $elem externref)
    ;; Grow the table by 1, setting the initial value to null.
    ;; Check the result for -1, which indicates failure.
    (if
      (i32.eq
        (table.grow $func_table
          ref.null func
          (i32.const 1)
        )
        i32.const -1
      )

      ;; Trap if we failed to grow the table
      (then unreachable)
    )

    ;; Set the first function in the table to f1
    (table.set $func_table
        (i32.const 0)
        (ref.func $f1)
    )

    ;; Call the output function, to output the table
    ;; function's return value to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )

    ;; Set the first function in the table to f2
    (table.set $func_table
        (i32.const 0)
        (ref.func $f2)
    )

    ;; Call the output function, to output the table
    ;; function's return value to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Das macht Sinn, da jedes Mal, wenn die `output()`-Funktion von innerhalb des Wasm-Moduls ausgeführt wird, der Wert, der ihr als zweiter Parameter übergeben wird, in unser Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert ist der Wert, der von den Funktionen `$f1` und `$f2` zurückgegeben wird — `42` und `100` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
