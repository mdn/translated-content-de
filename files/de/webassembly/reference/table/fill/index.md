---
title: "fill: Wasm table instruction"
short-title: fill
slug: WebAssembly/Reference/Table/fill
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`table.fill`** [Table instruction](/de/docs/WebAssembly/Reference/Table) setzt einen Bereich von Tabellenelementen auf denselben Wert.

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
  - : Der `table.fill` Instruktionstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, die Sie füllen möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein eindeutiger Name [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name) als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index` {{optional_inline}}
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite, etc.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index, value, length] -> []
```

- `index`
  - : Der Index des ersten Elements, um die Referenz zu speichern. Dies muss ein `i32` Wert sein, zum Beispiel `(i32.const 0)`.
- `value`
  - : Die Referenz, die in der Tabelle gespeichert werden soll. Diese muss von demselben [Typ](/de/docs/WebAssembly/Reference/Definitions/table#type) sein, mit dem die Tabelle definiert ist.
- `length`
  - : Die Anzahl der Elemente, die mit dem Wert gespeichert werden sollen, beginnend bei `index`. Dies muss ein `i32` Wert sein.

### Traps

`table.fill` löst eine Ausnahme aus, wenn:

- `index` + `length` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Binärkodierung

| Instruction  | Binärformat   | Beispieltext => binär                                                                                         |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------- |
| `table.fill` | `0xfc 17:u32` | `(table.fill 0 (i32.const 0) (ref.func $f1) (i32.const 3))` => `0xfc 0x11 0x00 0x41 0x00 0xd2 0x00 0x41 0x03` |

## Beispiele

### Demonstration des `table.fill` Verhaltens

Dieses Beispiel zeigt, dass wenn alle Elemente einer Tabelle in einer `table.fill`-Instruktion referenziert werden, alle diese Elemente denselben Wert referenzieren.

#### JavaScript

In unserem Skript beginnen wir mit dem Erfassen einer Referenz zu einem {{htmlelement("p")}} Element, in das wir Ergebnisse ausgeben werden. Wir definieren dann ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul unter Verwendung der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das `obj`-Objekt.

Wenn das Resultat zurückgegeben wird, rufen wir die exportierte Wasm `run()` Funktion auf, die auf dem WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und ein `i32`.

Als nächstes definieren wir einen Funktionstyp namens `$ret_i32`, der ein `i32` zurückgibt, und eine `table`, die Funktionsreferenzen speichert (daher `funcref` angegeben) und drei Elemente hat.

Wir definieren nun eine einfache Funktion, die ein `i32` zurückgibt, und deklarieren sie im Voraus mit `(elem declare func $f1)`, damit sie später referenziert werden kann.

Schließlich exportieren wir die `run()` Funktion, die ein `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.fill`, um eine Referenz zur `$f1` Funktion in jedem Tabellenplatz zu speichern. Beachten Sie, wie wir den `starting_index` auf `0` gesetzt haben und den `element_span` auf das Ergebnis der [`table.size`](/de/docs/WebAssembly/Reference/Table/size) Instruktion, um sicherzustellen, dass wir _alle_ Tabellenelemente füllen.
- Rufen wir die importierte `$output` Funktion auf, wobei wir als Parameter das `$elem` `externref`, welches in der `output()` Funktion übergeben wurde, sowie den Rückgabewert der im ersten Tabellenplatz referenzierten Funktion übergeben. Dies führt dazu, dass der Wert im DOM ausgegeben wird.
- Wiederholen wir den letzten Schritt noch ein paar Mal, um die Rückgabewerte der in den anderen Tabellenelementen gespeicherten Funktionen im DOM auszugeben.

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

Dies beweist, dass alle Tabellenelemente jetzt die `$f1` Funktion referenzieren, die `42` zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
