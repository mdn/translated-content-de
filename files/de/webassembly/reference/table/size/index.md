---
title: "size: Wasm-Tabellenbefehl"
short-title: size
slug: WebAssembly/Reference/Table/size
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`table.size`** [Tabellenbefehl](/de/docs/WebAssembly/Reference/Table) gibt die aktuelle Größe der Tabelle zurück.

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
  - : Der `table.size`-Befehlstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Der Identifikator der Tabelle, deren Größe Sie abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein Identifikationsname, [bei der Erstellung der Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name). Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, beispielsweise `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` ausgelassen wird, wird standardmäßig `0` verwendet.

### Typ

```plain
[] -> [length]
```

- length
  - : Ein `i32`, der der aktuellen Anzahl von Elementen in der Tabelle entspricht.

### Opcodes

| Anweisung    | Binärformat               | Beispieltext => binär              |
| ------------ | ------------------------- | ---------------------------------- |
| `table.size` | `0xFC 16:u32 𝑥:table_idx` | `table.size 0` => `0xfc 0x10 0x00` |

## Beschreibung

`table.size` wird verwendet, um die Größe einer Tabelle zurückzugeben.

Die Größe einer Wasm-Tabelle kann über JavaScript mit der [`table.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length)-Eigenschaft abgerufen werden.

## Beispiele

### Beobachten von Größenzunahmen bei der Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt und ihre Größe beobachtet, wenn die Tabelle mit `table.size` wächst.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu greifen, an das wir Ergebnisse ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen angegebenen Wert zur `textContent` eines angegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das `obj`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die auf dem WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und ein `i32`.

Als Nächstes definieren wir eine `table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und leer ist.

Schließlich exportieren wir die `run()`-Funktion, die ein `externref` namens `$elem` als Parameter nimmt. Innerhalb des Funktionskörpers:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem anfänglichen `ref.null`-Wert.
- Rufen wir die importierte `$output`-Funktion auf und übergeben ihr als Parameter das an die `output()`-Funktion übergebene `$elem`-`externref` und den Rückgabewert der `table.size`-Anweisung. Dies führt dazu, dass die Tabellengröße in das DOM ausgegeben wird.
- Wiederholen wir die letzten beiden Schritte, wodurch die Tabelle um ein weiteres Element vergrößert wird und die Größe erneut in das DOM ausgegeben wird.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul ausgeführt wird, der ihr als zweiter Parameter übergebene Wert in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert stellt die Tabellengröße zu jedem Zeitpunkt dar — `1` und `2` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
