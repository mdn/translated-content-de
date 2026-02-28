---
title: "size: Wasm table Anweisung"
short-title: size
slug: WebAssembly/Reference/Table/size
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Die **`table.size`** [Tabelle Anweisung](/de/docs/WebAssembly/Reference/Table) gibt die aktuelle Größe der Tabelle zurück.

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
  - : Der `table.size` Anweisungstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, deren Größe Sie abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein Identifizierungsname [festgelegt für die Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#name) bei ihrer Erstellung. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[] -> [length]
```

- length
  - : Ein `i32`, das der aktuellen Anzahl von Elementen in der Tabelle entspricht.

### Opcodes

| Anweisung    | Binärer Opcode                                                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `table.size` | `𝟶𝚡𝙵𝙲 16:𝚞𝟹𝟸` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beschreibung

`table.size` wird verwendet, um die Größe einer Tabelle zurückzugeben.

Die Größe einer Wasm-Tabelle kann über JavaScript mit der Eigenschaft [`table.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) abgerufen werden.

## Beispiele

### Beobachtung von Zunahmen der Tabellengröße

Dieses Beispiel zeigt, wie man eine Tabelle erstellt und deren Größe beobachtet, während die Tabelle mittels `table.size` wächst.

#### JavaScript

In unserem Skript beginnen wir mit dem Abrufen einer Referenz auf ein {{htmlelement("p")}}-Element, an das wir Ergebnisse ausgeben werden. Wir definieren dann ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Anschließend kompilieren und instanziieren wir unser Wasm-Modul mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren das `obj`-Objekt bei diesem Vorgang.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die im WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie zwei Parameter hat, einen [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und einen `i32`.

Als Nächstes definieren wir eine `table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und leer ist.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` mit dem Namen `$elem` als Parameter übernimmt. Innerhalb des Funktionskörpers:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem anfänglichen `ref.null`-Wert.
- Rufen wir die importierte `$output`-Funktion auf, indem wir ihr als Parameter den übergebenen `$elem` `externref` in die `output()`-Funktion und den Rückgabewert der `table.size`-Anweisung übergeben. Dadurch wird die Tabellengröße im DOM ausgegeben.
- Wiederholen die letzten beiden Schritte erneut, wodurch die Tabelle um ein weiteres Element wächst und die Größe erneut im DOM ausgegeben wird.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul heraus aufgerufen wird, der Wert, der ihr als zweiter Parameter übergeben wird, in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist die Tabellengröße zu jedem Zeitpunkt — `1` und `2` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
