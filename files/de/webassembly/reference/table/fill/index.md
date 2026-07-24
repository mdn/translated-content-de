---
title: "fill: Wasm table instruction"
short-title: fill
slug: WebAssembly/Reference/Table/fill
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`table.fill`** [Table-Instruktion](/de/docs/WebAssembly/Reference/Table) setzt einen Bereich von Tabellenelementen auf denselben Wert.

{{InteractiveExample("Wat Demo: table.fill", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define table with 3 function slots
  (table $my_table 3 funcref)

  ;; Define basic function that returns an i32
  (func $f1 (result i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func (export "run") (result i32)
    ;; Set the function referenced in every table element to $f1
    (table.fill $my_table
      (i32.const 0)
      (ref.func $f1)
      (i32.const 3)
    )

    ;; Call the function referenced in slot 2
    (call_indirect (type $ret_i32) (i32.const 2))
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
table.fill identifier
```

- `table.fill`
  - : Der Typ der `table.fill`-Instruktion. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Der Bezeichner der Tabelle, die Sie füllen möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein bei der ersten Erstellung der Tabelle [zugewiesener Name](/de/docs/WebAssembly/Reference/Definitions/table#name). Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index` {{optional_inline}}
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird standardmäßig `0` verwendet.

### Typ

```plain
[index, value, length] -> []
```

- `index`
  - : Der Index des ersten Elements, in das die Referenz gespeichert werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 0)`.
- `value`
  - : Die Referenz, die in der Tabelle gespeichert werden soll. Diese muss vom gleichen [Typ](/de/docs/WebAssembly/Reference/Definitions/table#type) sein, mit dem die Tabelle definiert ist.
- `length`
  - : Die Anzahl der Elemente, in die der Wert ab dem `index` gespeichert werden soll. Dies muss ein `i32`-Wert sein.

### Traps

`table.fill` löst eine Ausnahme aus, wenn:

- `index` + `length` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Binärcodierung

| Instruktion  | Binärformat   | Beispieltext => Binär                                                                                         |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------- |
| `table.fill` | `0xfc 17:u32` | `(table.fill 0 (i32.const 0) (ref.func $f1) (i32.const 3))` => `0xfc 0x11 0x00 0x41 0x00 0xd2 0x00 0x41 0x03` |

## Beispiele

### Demonstration des `table.fill`-Verhaltens

Dieses Beispiel zeigt, dass, wenn alle Elemente einer Tabelle in einer `table.fill`-Instruktion referenziert werden, all diese Elemente denselben Wert referenzieren werden.

#### JavaScript

In unserem Skript beginnen wir, indem wir eine Referenz zu einem {{htmlelement("p")}}-Element erhalten, in das wir Ergebnisse ausgeben werden. Dann definieren wir ein `obj` Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul unter Verwendung der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), indem wir das `obj` Objekt im Prozess importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die im `Instance` [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt von WebAssembly vorhanden ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat: einen [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und einen `i32`.

Als nächstes definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32` zurückgibt, und eine `table`, die Funktionsreferenzen speichert (daher wird `funcref` spezifiziert) und drei Elemente hat.

Dann definieren wir eine einfache Funktion, die einen `i32` zurückgibt, und deklarieren sie vorab mit `(elem declare func $f1)`, damit sie später referenziert werden kann.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter erhält. Im Funktionskörper:

- Verwenden wir `table.fill`, um eine Referenz zur `$f1`-Funktion in jedem Tabellenplatz zu speichern. Beachten Sie, wie wir den `starting_index` auf `0` und den `element_span` auf das Ergebnis der [`table.size`](/de/docs/WebAssembly/Reference/Table/size) Instruktion gesetzt haben, um sicherzustellen, dass wir _alle_ Tabellenelemente füllen.
- Rufen wir die importierte `$output`-Funktion auf und übergeben ihr als Parameter den in die `output()`-Funktion übernommenen `$elem` `externref` und den Rückgabewert der Funktion, die im ersten Tabellenplatz referenziert wird. Dadurch wird der Wert an das DOM ausgegeben.
- Wiederholen wir den letzten Schritt ein weiteres Mal, um die Rückgabewerte der Funktionen, die in den anderen Tabellenelementen gespeichert sind, an das DOM auszugeben.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define an initially empty table of funcrefs with three slots
  (table $func_table 3 funcref)

  ;; Define basic function that returns an i32
  (func $f1 (result i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func (export "run") (param $elem externref)
    ;; Set the function referenced in every table element to $f1
    (table.fill $func_table
      (i32.const 0) ;; starting index
      (ref.func $f1)
      (table.size $func_table) ;; Number of slots, not end index
    )

    ;; Call the output function, to output the return values of
    ;; the functions referenced in each table element to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )

    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 1))
    )

    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 2))
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies beweist, dass alle Tabellenelemente jetzt auf die `$f1`-Funktion verweisen, die `42` zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
