---
title: "size: Wasm table instruction"
short-title: size
slug: WebAssembly/Reference/Table/size
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
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
  - : Der Bezeichner für die Tabelle, deren Größe Sie abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, z.B. `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, z.B. `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite, usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[] -> [length]
```

- Länge
  - : Ein `i32`, der der aktuellen Anzahl der in der Tabelle enthaltenen Elemente entspricht.

### Opcodes

| Instruktion  | Binärformat              | Beispieltext => binär              |
| ------------ | ------------------------ | ---------------------------------- |
| `table.size` | `0xFC 16:u32 𝑥:tableidx` | `table.size 0` => `0xfc 0x10 0x00` |

## Beschreibung

`table.size` wird verwendet, um die Größe einer Tabelle zurückzugeben.

Die Größe einer Wasm-Tabelle kann über JavaScript mit der [`table.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) Eigenschaft abgerufen werden.

## Beispiele

### Beobachtung von Zunahmen der Tabellengröße

Dieses Beispiel zeigt, wie man eine Tabelle erstellt und deren Größe beobachtet, während die Tabelle über `table.size` wächst.

#### JavaScript

In unserem Skript beginnen wir mit dem Abrufen einer Referenz auf ein {{htmlelement("p")}}-Element, an das wir Ergebnisse ausgeben werden. Anschließend definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das `obj`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf dem WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt auf und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat: ein [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Dann definieren wir eine `table`, die Funktionsreferenzen speichert (daher `funcref` angegeben) und leer ist.

Schließlich exportieren wir die `run()`-Funktion, die ein `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem anfänglichen `ref.null` Wert.
- Rufen wir die importierte `$output`-Funktion auf und übergeben ihr als Parameter das `$elem` `externref`, das in die `output()`-Funktion übergeben wurde, und den Rückgabewert der `table.size` Instruktion. Dadurch wird die Tabellengröße im DOM ausgegeben.
- Wiederholen wir die letzten beiden Schritte erneut, wodurch die Tabelle um ein weiteres Element wächst und die Größe erneut im DOM ausgegeben wird.

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

Die Ausgabe sieht folgendermaßen aus:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ergibt Sinn, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul aufgerufen wird, der als zweiter Parameter übergebene Wert in unserem Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert entspricht der Tabellengröße zu jedem Zeitpunkt — `1` und `2` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
