---
title: "set: Wasm-Tabelleninstruktion"
short-title: set
slug: WebAssembly/Reference/Table/set
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`table.set`** [Tabelleninstruktion](/de/docs/WebAssembly/Reference/Table) ändert den in einem bestimmten Tabellenelement gespeicherten Wert.

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
  - : Der `table.set` Instruktionstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, in der Sie eine Referenz speichern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name, [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index, value] -> []
```

- `index`
  - : Der Elementindex, in dem der Wert gespeichert werden soll. Dieser muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der Wert, der in der Tabelle gespeichert werden soll. Dieser muss dem Elementtyp entsprechen, mit dem die Tabelle definiert wurde.

### Auslöser

`table.set` löst aus, wenn:

- `index` größer als [`table.size`](/de/docs/WebAssembly/Reference/Table/size) ist.

### Opcodes

| Instruktion | Binärformat        | Beispielt => binär           |
| ----------- | ------------------ | ---------------------------- |
| `table.set` | `0x26 𝑥:table_idx` | `table.set 0` => `0x26 0x01` |

## Beschreibung

Die `table.set` Instruktion wird verwendet, um eine bestimmte Funktion in einem bestimmten Element einer vorhandenen Tabelle zu speichern. Konkret ermöglicht sie es Wasm-Modulen, Referenzen, die während der Laufzeit in Tabellen enthalten sind, zu mutieren.

Dies ist nützlich, wenn später im Lebenszyklus eines Programms andere Referenzen benötigt werden als die, mit denen die Tabelle initialisiert wurde. Zum Beispiel könnten Sie eine Tabelle mit einem Element erstellen, zwei Funktionen definieren und dann das Tabellenelement mit einer Referenz auf eine dieser Funktionen mit der `elem` Modusdefinition initialisieren:

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

Wenn Sie Instruktionen wie `table.set` verwenden, müssen Sie die Funktionen auch mit `(elem declare ...)` vorab deklarieren, damit sie später referenziert werden können:

```wat
  ...

  (elem declare func $f1 $f2)

  ...
```

Später können Sie dann dynamisch die in dem Tabellenelement gespeicherte Funktionsreferenz mit `table.set` ändern:

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

Eine Wasm-Tabelle kann von JavaScript aus mit der [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) Methode erweitert werden.

## Beispiele

### Erstellen, Erweitern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe erweitert, die darin gespeicherten Funktionen dynamisch ändert und dann die in der Tabelle gespeicherte Funktion zu jedem Zeitpunkt aufruft.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erstellen, in dem wir die Ergebnisse ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen bestimmten Wert zum `textContent` eines bestimmten Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das `obj`-Objekt im Prozess importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()` Funktion auf, die auf dem WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben das `outputElem` Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()`-Funktion, wobei wir sicherstellen, dass diese zwei Parameter hat, einen [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als nächstes definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei Funktionen, die auf diesem Typ basieren, `$f1` und `$f2`, die die darin definierten Werte zurückgeben, und deklarieren sie vorab mit `(elem declare func $f1 $f2)`, damit sie später referenziert werden können. Anschließend definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher `funcref` angegeben) und zu Anfang leer ist.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter nimmt. Innerhalb des Funktionskörpers:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem initialen `ref.null` Wert, und prüfen, ob das Operationsergebnis `-1` ist, was einen Fehler anzeigen würde.
- Setzen wir unser Tabellenelement auf die Funktion `$f1` mit `table.set`, rufen dann die importierte `$output`-Funktion auf, und übergeben ihr als Parameter den `$elem` `externref`, der an die `output()` Funktion übergeben wird, und den von der `$f1`-Funktion zurückgegebenen Wert, der aus der Tabelle mit `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
- Setzen wir unser Tabellenelement auf die Funktion `$f2` mit `table.set` und rufen dann die `output()`-Funktion erneut auf.

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

Das ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion von innerhalb des Wasm-Moduls ausgeführt wird, der Wert, der als sein zweiter Parameter übergeben wird, in unser Ergebnis `<p>` im DOM gedruckt wird. Jeder Wert ist der Wert, der von den `$f1` und `$f2`-Funktionen zurückgegeben wird — `42` und `100` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
