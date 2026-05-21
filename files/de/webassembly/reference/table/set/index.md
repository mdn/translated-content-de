---
title: "set: Wasm table instruktion"
short-title: set
slug: WebAssembly/Reference/Table/set
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`table.set`** [Tabelle-Instruktion](/de/docs/WebAssembly/Reference/Table) ändert den in einem bestimmten Tabellenelement gespeicherten Wert.

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
  - : Der `table.set` Instruktionstyp. Muss immer zuerst eingeschlossen werden.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, in der Sie einen Verweis speichern möchten. Dies kann Folgendes sein:
    - `name`
      - : Ein identifizierender Name, der [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name) wurde, als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, ist der Standardwert `0`.

### Type

```plain
[index, value] -> []
```

- `index`
  - : Der Elementindex, unter dem der Wert gespeichert werden soll. Dies muss ein `i32`-Wert sein, beispielsweise `(i32.const 1)`.
- `value`
  - : Der Wert, der in der Tabelle gespeichert werden soll. Dieser muss mit dem Elementtyp übereinstimmen, mit dem die Tabelle definiert wurde.

### Traps

`table.set` löst einen Fehler aus, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Instruktion | Binärformat        | Beispieltext => binär        |
| ----------- | ------------------ | ---------------------------- |
| `table.set` | `0x26 𝑥:table_idx` | `table.set 0` => `0x26 0x01` |

## Beschreibung

Die `table.set` Instruktion wird verwendet, um eine spezifische Funktion in einem bestimmten Element einer bestehenden Tabelle zu speichern. Insbesondere erlaubt sie wasm-Modulen, Referenzen zu mutieren, die zur Laufzeit in Tabellen enthalten sind.

Dies ist praktisch, wenn in späteren Phasen des Lebenszyklus eines Programms andere Referenzen erforderlich sind als die, mit denen die Tabelle initialisiert wurde. Zum Beispiel könnten Sie eine Tabelle mit einem Element erstellen, zwei Funktionen definieren und dann das Tabellenelement mit einem Verweis auf eine dieser Funktionen unter Verwendung der `elem` Moduldefinition initialisieren:

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

Beim Verwenden von Instruktionen wie `table.set` müssen Sie auch die Funktionen mithilfe von `(elem declare ...)` vordeklarieren, sodass sie später referenziert werden können:

```wat
  ...

  (elem declare func $f1 $f2)

  ...
```

Später können Sie dann dynamisch den Funktionsverweis, der im Tabellenelement gespeichert ist, mithilfe von `table.set` ändern:

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

Eine wasm-Tabelle kann mit JavaScript mithilfe der [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) Methode erweitert werden.

## Beispiele

### Erstellen, Erweitern und Einstellen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe erweitert, die darin gespeicherten Funktionen dynamisch ändert und dann die gespeicherte Funktion in der Tabelle zu jedem Zeitpunkt aufruft.

#### JavaScript

In unserem Skript beginnen wir, indem wir einen Verweis auf ein {{htmlelement("p")}} Element erhalten, zu dem wir Ergebnisse ausgeben möchten. Dann definieren wir ein `obj`-Objekt, das eine `output()` Funktion enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul unter Verwendung der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das `obj` Objekt im Prozess importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()` Funktion auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, indem wir ihm das `outputElem`-Element als Parameter übergeben.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion, wobei wir sicherstellen, dass sie zwei Parameter hat, eine [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und eine `i32`.

Als nächstes definieren wir einen Funktionstyp `type` namens `$ret_i32`, der einen `i32` Wert zurückgibt. Dann definieren wir zwei Funktionen basierend auf diesem Typ, genannt `$f1` und `$f2`, die die darin definierten Werte zurückgeben, und deklarieren sie mit `(elem declare func $f1 $f2)` vor, sodass sie später referenziert werden können. Dann definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher `funcref` angegeben) und zunächst leer ist.

Schließlich exportieren wir die `run()` Funktion, die eine `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu vergrößern, mit einem anfänglichen `ref.null` Wert, prüfen, ob das Ergebnis der Operation `-1` ist, was einen Fehler anzeigen würde.
- Setzen unser Tabellenelement, um die `$f1` Funktion mit `table.set` zu enthalten, und rufen dann die importierte `$output` Funktion auf, indem wir ihr als Parameter die `$elem` `externref`, die in die `output()` Funktion übergeben wurde, und den Wert, der von der `$f1` Funktion zurückgegeben wird, übergeben, die von der Tabelle mit `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
- Setzen unser Tabellenelement, um die `$f2` Funktion mit `table.set` zu enthalten, und rufen erneut die `output()` Funktion auf.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()` Funktion innerhalb des wasm-Moduls ausgeführt wird, der als zweiter Parameter übergebene Wert im Ergebnis-`<p>` unseres DOMs ausgegeben wird. Jeder Wert ist der Wert, der von den `$f1` und `$f2` Funktionen zurückgegeben wird — `42` und `100` entsprechend.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
