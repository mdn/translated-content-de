---
title: "get: Wasm-Tabelle-Anweisung"
short-title: get
slug: WebAssembly/Reference/Table/get
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`table.get`** [Tabelle-Anweisung](/de/docs/WebAssembly/Reference/Table) ruft die Referenz ab, die an einem bestimmten Tabellenindex gespeichert ist.

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
  - : Der Anweisungstyp `table.get`. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, aus der Sie eine Referenz abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein bei der ersten Erstellung festgelegter [Identifizierungsname für die Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#name). Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index] -> [value]
```

- `index`
  - : Der Index in der Tabelle, um den Wert abzurufen. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der Wert, der an dem Index in der Tabelle gespeichert ist. Dies wird der Elementtyp der Tabelle sein.

### Fallen

`table.get` löst eine Ausnahme aus, wenn:

- `index` größer als [`table.size`](/de/docs/WebAssembly/Reference/Table/size) ist.

### Opcodes

| Anweisung   | Binärformat        | Beispieltext => Binär        |
| ----------- | ------------------ | ---------------------------- |
| `table.get` | `0x25 𝑥:table_idx` | `table.get 0` => `0x25 0x01` |

## Beschreibung

Die `table.get`-Anweisung ruft einen Wert ab, der an einem bestimmten Index einer vorhandenen Tabelle gespeichert ist.

Wenn die Tabelle zum Speichern von [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)s initialisiert wurde, werden die abgerufenen Werte Referenzen auf innerhalb von Wasm definierte Funktionen sein. Wenn die Tabelle zum Speichern von [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)s initialisiert wurde, können die abgerufenen Werte nahezu jeder in JavaScript definierte Werttyp sein.

Wasm-Tabellenwerte können aus JavaScript mit der [`table.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)-Methode abgerufen werden.

## Beispiele

### Abrufen von Zeichenfolgen aus einer Tabelle

Dieses Beispiel zeigt, wie man eine Wasm-Tabelle in JavaScript erstellt und Zeichenfolgen darin speichert, dann diese Zeichenfolgen innerhalb von Wasm mittels `table.get` abruft und sie mit einer importierten Funktion ausgibt.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erhalten, in das wir die Ergebnisse ausgeben. Wir erstellen dann eine Wasm-Tabelle aus JavaScript mithilfe des [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)-Konstruktors, indem wir ihr eine Anfangsgröße von `0` geben und sie so einstellen, dass sie `externref`-Werte enthält.

Anschließend erhöhen wir die Größe der Tabelle auf zwei Elemente mit der [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)-Methode und verwenden die [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set)-Methode, um in jedem Tabellenelement eine andere Zeichenfolge zu speichern.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

An diesem Punkt definieren wir ein `imports`-Objekt, das zwei zu importierende Elemente in Wasm enthält:

- Eine Funktion namens `output()`, die einen gegebenen Wert zum `textContent` eines bestimmten Elements hinzufügt.
- Die zuvor erstellte Tabelle.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode, indem wir das `imports`-Objekt importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-Funktion `run()` auf, die im `exports`-Objekt der WebAssembly-Instanz verfügbar ist, und übergeben den `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zunächst die beiden importierten Elemente:

- Die JavaScript-Funktion `output()`, die wir mit zwei [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)-Parametern deklarieren.
- Die Zeichenfolgentabelle, die wir `$string_table` nennen.

Dann exportieren wir die `run()`-Funktion, die ein `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper führen wir unsere importierte `output()`-Funktion zweimal aus. Wir geben in beiden Fällen dieselbe `$elem`-Referenz für den ersten Parameter an und verwenden dann `table.get`, um eine andere Zeichenfolge aus der importierten Tabelle als zweiten Parameter in jedem Fall abzurufen.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion innerhalb des Wasm-Moduls ausgeführt wird, der Wert, der als zweiter Parameter übergeben wird, in unser Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert ist eine der in der Tabelle gespeicherten Zeichenfolgen — `hello` und `world` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
