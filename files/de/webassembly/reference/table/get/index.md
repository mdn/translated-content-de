---
title: "get: Wasm table Anweisung"
short-title: get
slug: WebAssembly/Reference/Table/get
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Die **`table.get`** [Tabellenanweisung](/de/docs/WebAssembly/Reference/Table) ruft die Referenz ab, die an einem bestimmten Tabellenindex gespeichert ist.

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
  - : Der `table.get` Anweisungstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, aus der Sie eine Referenz abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein festgelegter Name [für die Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#name), der beim Erstellen der Tabelle zugewiesen wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite, usw.

    Wenn der `identifier` weggelassen wird, ist der Standardwert `0`.

### Typ

```plain
[index] -> [value]
```

- `index`
  - : Der Index in der Tabelle, dessen Wert abgerufen werden soll. Dies muss ein `i32` Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der in der Tabelle am Index gespeicherte Wert. Dies wird der Elementtyp der Tabelle sein.

### Traps

`table.get` löst eine Unterbrechung aus, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Anweisung   | Binär-Opcode                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `table.get` | `𝟶𝚡𝟸𝟶` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beschreibung

Die `table.get` Anweisung ruft einen Wert ab, der an einem bestimmten Index einer bestehenden Tabelle gespeichert ist.

Wenn die Tabelle zur Speicherung von [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)s initialisiert wurde, werden die abgerufenen Werte Referenzen auf Funktionen sein, die innerhalb von Wasm definiert sind. Wenn die Tabelle zur Speicherung von [`externref`](/de/docs/WebAssembly/Reference/Types/externref)s initialisiert wurde, können die abgerufenen Werte nahezu jeden in JavaScript definierten Werttyp darstellen.

Wasm-Tabellenwerte können von JavaScript mittels der [`table.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) Methode abgerufen werden.

## Beispiele

### Abrufen von Zeichenfolgen aus einer Tabelle

Dieses Beispiel zeigt, wie eine Wasm-Tabelle in JavaScript erstellt wird, Zeichenfolgen in ihr gespeichert werden und anschließend diese Zeichenfolgen von innerhalb von Wasm mit `table.get` abgerufen und mit einer importierten Funktion ausgegeben werden.

#### JavaScript

In unserem Skript beginnen wir mit dem Abrufen einer Referenz auf ein {{htmlelement("p")}}-Element, in das wir die Ergebnisse ausgeben werden. Wir erstellen dann eine Wasm-Tabelle aus JavaScript mit dem [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table) Konstruktor, geben ihr eine Anfangsgröße von `0` und legen sie so fest, dass sie `externref` Werte enthält.

Anschließend vergrößern wir die Tabelle mithilfe der [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) Methode auf zwei Elemente und verwenden die [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) Methode, um in jedem Tabellenelement eine unterschiedliche Zeichenfolge zu speichern.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

An diesem Punkt definieren wir ein `imports`-Objekt, das zwei Elemente enthält, die in Wasm importiert werden sollen:

- Eine Funktion namens `output()`, die einen gegebenen Wert zum `textContent` eines angegebenen Elements hinzufügt.
- Die zuvor erstellte Tabelle.

Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das `imports`-Objekt im Prozess importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

- Die JavaScript-`output()`-Funktion, die wir mit zwei [`externref`](/de/docs/WebAssembly/Reference/Types/externref) Parametern deklarieren.
- Die Zeichenfolgentabelle, die wir `$string_table` nennen.

Dann exportieren wir die `run()`-Funktion, die ein `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper führen wir unsere importierte `output()`-Funktion zweimal aus. Wir geben in beiden Fällen denselben `$elem`-Verweis für den ersten Parameter an und verwenden dann `table.get`, um eine andere Zeichenfolge aus der importierten Tabelle als zweiten Parameter in jedem Fall abzurufen.

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

Die Ausgabe lautet wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion von innerhalb des Wasm-Moduls ausgeführt wird, der Wert, der als zweiter Parameter an sie übergeben wird, in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist eine der in der Tabelle gespeicherten Zeichenfolgen — `hello` und `world` beziehungsweise.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
