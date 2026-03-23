---
title: "get: Wasm Table-Befehl"
short-title: get
slug: WebAssembly/Reference/Table/get
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Der **`table.get`** [Table-Befehl](/de/docs/WebAssembly/Reference/Table) ruft die Referenz ab, die an einem bestimmten Tabellenindex gespeichert ist.

{{InteractiveExample("Wat Demo: table.get", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import console.log() function and table containing strings
  (func $console_log (import "console" "log") (param externref))
  (table $string_table (import "strings" "table") 0 externref)

  ;; Export run() function
  (func (export "run")
    ;; Call console.log() to log value stored in
    ;; table element
    (call $console_log
      (table.get $string_table (i32.const 0))
    )
  )
)
```

```js interactive-example
// Create a wasm table that stores external references
let table = new WebAssembly.Table({ element: "externref", initial: 0 });

// Initialize the string_table
table.grow(1);
table.set(0, "hello world!");

let imports = {
  console,
  strings: {
    table,
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), imports).then(
  (result) => {
    result.instance.exports.run();
  },
);
```

## Syntax

```plain
table.get identifier
```

- `table.get`
  - : Der Typ des `table.get` Befehls. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Identifikator für die Tabelle, aus der Sie eine Referenz abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein eindeutiger Name [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird standardmäßig `0` verwendet.

### Typ

```plain
[index] -> [value]
```

- `index`
  - : Der Index in der Tabelle, um den Wert abzurufen. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der in der Tabelle am Index gespeicherte Wert. Dies entspricht dem Elementtyp der Tabelle.

### Traps

`table.get` löst eine Fehlerbehandlung aus, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Befehl      | Binärformat       | Beispieltext => Binär        |
| ----------- | ----------------- | ---------------------------- |
| `table.get` | `0x25 𝑥:tableidx` | `table.get 0` => `0x25 0x01` |

## Beschreibung

Der `table.get` Befehl ruft einen Wert ab, der an einem bestimmten Index einer bestehenden Tabelle gespeichert ist.

Wenn die Tabelle zum Speichern von [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)s initialisiert wurde, sind die abgerufenen Werte Referenzen auf in Wasm definierte Funktionen. Wenn die Tabelle zum Speichern von [`externref`](/de/docs/WebAssembly/Reference/Types/externref)s initialisiert wurde, können die abgerufenen Werte nahezu jeden Werttyp umfassen, der in JavaScript definiert ist.

Werte von Wasm-Tabellen können aus JavaScript mit der Methode [`table.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) abgerufen werden.

## Beispiele

### Abrufen von Zeichenfolgen aus einer Tabelle

Dieses Beispiel zeigt, wie Sie eine Wasm-Tabelle in JavaScript erstellen und Zeichenfolgen darin speichern, um diese dann innerhalb von Wasm mit `table.get` abzurufen und mit einer importierten Funktion auszugeben.

#### JavaScript

In unserem Skript beginnen wir, indem wir eine Referenz zu einem {{htmlelement("p")}} Element erhalten, in dem wir Ergebnisse ausgeben werden. Wir erstellen dann eine Wasm-Tabelle aus JavaScript mithilfe des Konstruktors [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table), geben ihr eine anfängliche Größe von `0` und setzen sie so, dass sie `externref` Werte enthält.

Anschließend vergrößern wir die Tabelle auf zwei Elemente mithilfe der Methode [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) und verwenden die Methode [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set), um in jedem Tabellenelement eine unterschiedliche Zeichenfolge zu speichern.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

An diesem Punkt definieren wir ein `imports` Objekt, das zwei Elemente enthält, die in Wasm importiert werden sollen:

- Eine Funktion namens `output()`, die einen gegebenen Wert dem `textContent` eines gegebenen Elements hinzufügt.
- Die Tabelle, die wir zuvor erstellt haben.

Wir kompilieren und instanziieren unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das `imports` Objekt importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-Funktion `run()` auf, die im [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt der WebAssembly verfügbar ist. Wir übergeben das Element `outputElem` als Parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
let imports = {
  funcs: {
    output(elem, val) {
      elem.textContent += `${val} `;
    },
  },
  strings: {
    table,
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), imports).then(
  (result) => {
    result.instance.exports.run(outputElem);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst unsere beiden importierten Elemente:

- Die JavaScript-Funktion `output()`, die wir mit zwei [`externref`](/de/docs/WebAssembly/Reference/Types/externref) Parametern deklarieren.
- Die Tabelle mit Zeichenfolgen, die wir `$string_table` nennen.

Wir exportieren dann die `run()` Funktion, die ein `externref` namens `$elem` als Parameter erhält. Innerhalb des Funktionskörpers führen wir unsere importierte `output()` Funktion zweimal aus. Wir geben für den ersten Parameter in beiden Fällen dieselbe `$elem` Referenz an und verwenden dann `table.get`, um eine unterschiedliche Zeichenfolge aus der importierten Tabelle abzurufen und als zweiten Parameter in jedem Fall zu verwenden.

```wat live-sample___basic-usage
(module
  (func $output (import "funcs" "output") (param externref) (param externref))
  (table $string_table (import "strings" "table") 0 externref)

  (func (export "run") (param $elem externref)
    (call $output
      (local.get $elem)
      (table.get $string_table (i32.const 0))
    )

    (call $output
      (local.get $elem)
      (table.get $string_table (i32.const 1))
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies ergibt Sinn, da jedes Mal, wenn die `output()` Funktion aus dem wasm-Modul ausgeführt wird, der ihr als zweiter Parameter übergebene Wert in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist eine der in der Tabelle gespeicherten Zeichenfolgen — `hello` und `world`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
