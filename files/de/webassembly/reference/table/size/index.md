---
title: "size: Wasm Tabelleninstruktion"
short-title: size
slug: WebAssembly/Reference/Table/size
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Die **`table.size`** [Tabelleninstruktion](/de/docs/WebAssembly/Reference/Table) gibt die aktuelle Größe der Tabelle zurück.

{{InteractiveExample("Wat Demo: table.size", "tabbed-taller")}}

```wat interactive-example
(module
  ;; table with 0 function slots
  (table $my_table 0 funcref)

  (func (export "run") (result i32)
    ;; Grow the table by 1, setting the initial values to null.
    (table.grow $my_table
      ref.null func
      (i32.const 1)
    )
    (drop)

    (table.size $my_table)
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
table.size identifier
```

- `table.size`
  - : Der `table.size` Instruktionstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, deren Größe Sie abrufen möchten. Dies kann eine der folgenden sein:
    - `name`
      - : Ein identifizierender Name, [der der Tabelle zugewiesen wurde](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie erstmals erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird standardmäßig `0` verwendet.

### Typ

```plain
[] -> [length]
```

- length
  - : Ein `i32`, der der aktuellen Anzahl von Elementen innerhalb der Tabelle entspricht.

### Opcodes

| Instruktion  | Binärer Opcode                                                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `table.size` | `𝟶𝚡𝙵𝙲 16:𝚞𝟹𝟸` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beschreibung

`table.size` wird verwendet, um die Größe einer Tabelle zurückzugeben.

Die Größe einer wasm-Tabelle kann über JavaScript mittels der [`table.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) Eigenschaft abgerufen werden.

## Beispiele

### Beobachtung von Größenzunahmen der Tabelle

Dieses Beispiel zeigt, wie eine Tabelle erstellt und ihre Größe beobachtet wird, während die Tabelle mittels `table.size` wächst.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}} Element zu erhalten, an das wir Ergebnisse ausgeben werden. Wir definieren dann ein `obj` Objekt, das eine Funktion namens `output()` enthält, welche einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das `obj` Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()` Funktion auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem` Element als Parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

const obj = {
  output: function (elem, val) {
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion und stellen sicher, dass wir deklarieren, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als Nächstes definieren wir eine `table`, die Funktionsreferenzen speichert (daher `funcref` angegeben) und leer ist.

Schließlich exportieren wir die `run()` Funktion, die ein `externref` namens `$elem` als Parameter entgegennimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem initialen `ref.null` Wert.
- Rufen wir die importierte `$output` Funktion auf, indem wir ihr als Parameter das in die `output()` Funktion übergebene `$elem` `externref` und den Rückgabewert der `table.size` Instruktion übergeben. Dies führt dazu, dass die Tabellengröße im DOM ausgegeben wird.
- Wiederholen wir die letzten beiden Schritte erneut, was dazu führt, dass die Tabelle um ein weiteres Element wächst und die Größe erneut im DOM ausgegeben wird.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define an initially empty table of funcrefs
  (table 0 funcref)

  (func (export "run") (param $elem externref)
    ;; Grow the table by 1, setting the initial values to null.
    (table.grow
      ref.null func
      (i32.const 1)
    )
    (drop)

    ;; Call the output function, to output the table size to the DOM
    (call $output
      (local.get $elem)
      (table.size)
    )

    ;; Grow the table by 1, setting the initial values to null.
    (table.grow
      ref.null func
      (i32.const 1)
    )
    (drop)

    ;; Call the output function, to output the table size to the DOM
    (call $output
      (local.get $elem)
      (table.size)
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies ist sinnvoll, da jedes Mal, wenn die `output()` Funktion aus dem wasm-Modul heraus ausgeführt wird, der als zweites Parameter übergebene Wert in unserem Ergebnis `<p>` im DOM ausgegeben wird. Jeder Wert ist die Tabellengröße zu jedem Zeitpunkt — `1` und `2` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
