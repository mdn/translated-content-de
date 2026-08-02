---
title: "elem: Wasm-Definition"
short-title: elem
slug: WebAssembly/Reference/Definitions/elem
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`elem`** [Definition](/de/docs/WebAssembly/Reference/Definitions) deklariert ein **Element-Segment**, das eine Reihe von Referenzen darstellt, die in eine Wasm-`table` kopiert werden können. Sie bieten eine Möglichkeit, eine Tabelle bei der Instanziierung zu initialisieren, analog zu [Datensegmenten](/de/docs/WebAssembly/Reference/Definitions/data) für Wasm-[Speicher](/de/docs/WebAssembly/Reference/Definitions/memory).

{{InteractiveExample("Wat Demo: elem", "tabbed-taller")}}

```wat interactive-example
(module
  ;; table with 2 slots
  (table $return_values 2 funcref)

  ;; Define functions
  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  ;; initialize table slots actively
  (elem (table $return_values) (offset i32.const 0) func $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (local.get $index)
    (call_indirect (result i32))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(1);
  console.log(value);
});
```

Im obigen Beispiel definieren wir eine Tabelle mit zwei Slots, definieren zwei Funktionen und initialisieren dann die Tabelle sofort mit einer `elem`-Definition in aktiver Form, wobei wir den Indexwert der `table` angeben. Wir deklarieren und exportieren dann eine Funktion namens `accessTable()`, die eine der in unserer Tabelle referenzierten Funktionen aufruft und die Elementnummer als Parameter angibt. Wir rufen diese Funktion in JavaScript auf und protokollieren dann den zurückgegebenen Wert in der Konsole.

## Syntax

```plain
;; Active form, table initialized on instantiation
elem name table_identifier offset value_type element_list

;; Passive form, initialized later via table.init
elem name value_type element_list

;; Declarative form, declares already existing reference(s)
elem name declare value_type element_list
```

- `elem`
  - : Der `elem`-Definitionstyp. Muss immer zuerst enthalten sein.
- `name` {{optional_inline}}
  - : Ein optionaler identifizierender Name für das Elem. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`. Wenn dies weggelassen wird, kann das `elem` (zum Beispiel beim Aufruf von `elem.drop`) durch seinen Index identifiziert werden, zum Beispiel `0` für das erste `elem` im Wasm-Modul, `1` für das zweite usw.
- `table_identifier` {{optional_inline}}
  - : Ein Bezeichner, der die `table`-Instanz darstellt, in die die Tabellenelemente eingefügt werden sollen, und der mit dem `table`-Schlüsselwort versehen sein muss, um als `table_identifier` interpretiert zu werden. Dies kann einer der folgenden sein:
    - `name`
      - : Ein identifizierender Name, der [für die `table`](/de/docs/WebAssembly/Reference/Definitions/table#name) festgelegt wurde, als sie erstmals definiert wurde. Dieser muss mit einem `$`-Symbol beginnen und von einem `table`-Schlüsselwort gefolgt werden, zum Beispiel `(table $my_table)`.
    - `index`
      - : Ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) Wert, der die Indexnummer der Tabelle darstellt, zum Beispiel `(table 0)` für die erste Tabelle im Modul, `(table 1)` für die zweite usw.

    > [!NOTE]
    > Bei einer `elem`-Definition in aktiver Form muss der `offset` enthalten sein, aber der `table_identifier` kann weggelassen werden. In diesem Fall wird standardmäßig `(table 0)` verwendet.

- `offset` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Versatz darstellt, an dem die Elemente in die `table` platziert werden sollen. Dieser Wert kann jeder [konstanten Ausdruck](https://webassembly.github.io/spec/core/valid/instructions.html#valid-constant) sein, was bedeutet, dass er Strukturen wie arithmetische Ausdrücke sowie numerische Werte enthalten kann.

    Die vollständige Syntax enthält das `offset`-Schlüsselwort vor dem Wert, zum Beispiel `(offset i32.const 0)`, obwohl das Schlüsselwort in der abgekürzten Form weggelassen werden kann, zum Beispiel `(i32.const 0)`.

- `declare` {{optional_inline}}
  - : Ein Schlüsselwort, das die `elem`-Definition als in deklarativer Form identifiziert. Das bedeutet, dass es Referenzen deklariert, die zur Laufzeit verwendet werden (zum Beispiel von `ref.func`), ohne dass sie in eine Tabelle eingefügt werden.
- `value_type`
  - : Ein Wertetyp, der definiert, welcher Referenztyp in dieser Tabelle gespeichert wird. Alle Referenzen in der `element_list` müssen diesem Typ entsprechen. Der Wert kann jeder Referenztyp sein, wie zum Beispiel:
    - `func`
      - : Eine Abkürzung, die eine Liste von nicht-nullbaren Funktionsreferenzen kürzer deklariert. Zum Beispiel ist `func $my_func` gleichwertig mit `(ref func) (ref.func $my_func)`.
    - [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
      - : Funktionsreferenzen, zum Beispiel `(ref.func $my_func)`, `(ref null func)`, `(ref func)`.
    - [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
      - : Externe Wertreferenzen, zum Beispiel `(ref.null extern)`, `(ref null extern)`.
    - [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)
      - : Ausnahmereferenzen, zum Beispiel `(ref.null extern)`.
    - `eqref`, `structref`, `arrayref`, `anyref`
      - : Referenzen auf Werte der Speicherbereinigung (GC).
    - `nullref`, `nullfuncref`, `nullexternref`
      - : Nullreferenzen.
- `element_list`
  - : Eine durch Leerzeichen getrennte Liste von Referenzen, die in der `table` gespeichert werden sollen.

## Beschreibung

Wasm-`elem`-Definitionen definieren eine Reihe von Referenzen. Es gibt drei Formen von `elem`-Definitionen:

- [Aktive Form](#aktive_form)
- [Passive Form](#passive_form)
- [Deklarative Form](#deklarative_form)

### Aktive Form

Eine aktive Elementdefinition wird verwendet, um ein Elementsegment zu definieren, das unmittelbar bei der Instanziierung in eine zuvor definierte [`table`](/de/docs/WebAssembly/Reference/Definitions/table) geschrieben und dann verworfen wird. In aktiver Form muss zuerst eine Tabelle definiert werden:

```wat
(table $return_values 2 funcref)
```

Sie deklarieren dann eine `elem`-Definition, die die zu speichernden Referenzen enthält. In diesem Fall speichern wir Funktionsreferenzen in der `table`:

```wat
(func $f1 (result i32)
  i32.const 42
)
(func $f2 (result i32)
  i32.const 100
)

(elem (table $return_values) (i32.const 0) func $f1 $f2)
```

Diese `elem`-Definition enthält den zu speichernden `value_type` (`func`) und die `element_list`, die in der Tabelle gespeichert werden soll (`$f1 $f2`). Am bedeutendsten ist, dass sie eine Zahl enthält, die den Versatz angibt, an dem die Referenzen geschrieben werden sollen — `(i32.const 0)`, was den ersten Slot der Tabelle angibt.

Wir haben auch einen `table_identifier` — `(table $return_values)` — hinzugefügt, um die Tabelle anzugeben, in die die Referenzen geschrieben werden sollen, obwohl in diesem einfachen Beispiel nur eine Tabelle vorhanden ist, sodass dies nicht erforderlich ist.

> [!NOTE]
> Aktive `elem`-Segmente werden während der Modulerstellung automatisch entfernt und sind daher nicht via [`elem.drop`](/de/docs/WebAssembly/Reference/Elem/drop) zum Löschen verfügbar.

### Passive Form

In der passiven Form deklariert die `elem`-Definition die Referenzen, die in der Tabelle in gleicher Weise wie in der aktiven Form gespeichert werden sollen. Der Hauptunterschied besteht darin, dass Sie in der passiven Form den `table_identifier` oder den `offset`-Wert nicht angeben. Das bedeutet, dass die Referenzen nicht sofort in der `table` gespeichert werden. Stattdessen wird dieser Teil des Prozesses manuell mit einer [`table.init`](/de/docs/WebAssembly/Reference/Table/init)-Anweisung behandelt.

Sehen wir uns an, wie dies im Code aussieht. Wir fügen die `elem`-Definition auf ähnliche Weise wie im Beispiel der aktiven Form ein, außer dass wir diesmal den `table_identifier` nicht einschließen. Stattdessen fügen wir einen `name`-Wert (`$funcs`) hinzu, um das `elem` später zu identifizieren.

```wat
(elem $funcs funcref (ref.func $f1) (ref.func $f2))
```

Wir können dann `table.init` aufrufen und sich auf den `name` des `elem` beziehen, um die Referenzen in die angegebene Tabelle zu kopieren:

```wat
(func (export "init")
  i32.const 0    ;; destination table index
  i32.const 0    ;; offset into elem segment
  i32.const 2    ;; number of elements to copy
  table.init $funcs
)
```

Nachdem `table.init` aufgerufen wurde, wird das `elem`-Segment nicht mehr benötigt, sodass [`elem.drop`](/de/docs/WebAssembly/Reference/Elem/drop) aufgerufen werden kann, um den von ihm verwendeten Speicher freizugeben:

```wat
elem.drop $funcs
```

> [!NOTE]
> Sie können ein vollständiges Arbeitsbeispiel unter [Passives `elem`-Beispiel](#passive_elem_example) sehen.

### Deklarative Form

Die deklarative Form von `elem` wird verwendet, wenn Sie eine Referenz in Ihrem Code verwenden möchten, ohne sie in eine Tabelle zu setzen. Sie ermöglicht es Ihnen, eine Referenz zu erstellen, die über `ref.func` referenziert werden kann:

```wat
(module
  ;; Create a reference to the $add function
  (elem declare func $add)

  (func $add (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add
  )

  (func (export "getRef") (result funcref)
    ;; only valid because of the declarative elem above
    ref.func $add
  )
)
```

Dies wurde zur Sprache hinzugefügt, da Sie normalerweise nur mit `ref.func` auf Funktionen verweisen können, die referenzierbar gemacht wurden, zum Beispiel in einer [`global`](/de/docs/WebAssembly/Reference/Definitions/global)-Definition oder durch Importieren vom JavaScript-Host. Deklarative `elem`-Definitionen existieren, um einige Funktionen referenzierbar zu machen, die es sonst nicht wären.

## Beispiele

### Passives `elem`-Beispiel

Dieses Beispiel zeigt, wie Sie die passive Form von `elem` verwenden können, um das Kopieren der angegebenen Referenzen in die Tabelle bei der Instanziierung zu verschieben und sie später mit der [`table.init`](/de/docs/WebAssembly/Reference/Table/init)-Anweisung hinzuzufügen.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu erhalten, zu dem wir Ergebnisse ausgeben werden. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode. Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`init()`-Funktion auf (die, wie Sie später sehen werden, `table.init` ausführt) und führen dann die exportierte `accessTable()`-Funktion aus, wobei wir ihr die Nummer `0` als Parameter übergeben. Schließlich setzen wir den Rückgabewert der `accessTable()`-Funktion als `textContent`-Wert des `<p>`-Elements, damit wir ihn überprüfen können.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const value = result.instance.exports.accessTable(1);
  output.textContent = value;
});
```

#### Wasm

In unserem Wasm-Modul definieren wir zuerst eine `table` mit zwei Slots, dann definieren wir zwei Funktionen, die `$f1` und `$f2` genannt werden, die die darin definierten Werte zurückgeben. Anschließend fügen wir eine `elem`-Definition mit dem Namen `$funcs` hinzu, die auf die Funktionen `$f1` und `$f2` verweist.

Schließlich exportieren wir zwei Funktionen:

- `init()`: Führt eine `table.init`-Anweisung aus, um die in den `$funcs` `elem`-referenzierten Funktionen in der `table` zu speichern.
- `accessTable()`: Nimmt einen `i32`-Parameter namens `$index` und gibt einen `i32` zurück. Innerhalb des Funktionskörpers verwenden wir `call_indirect`, um die in der Tabelle bei dem Indexwert `$index` referenzierte Funktion aufzurufen.

```wat live-sample___basic-usage
(module
  (table $return_values 2 funcref)

  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  (elem $funcs funcref (ref.func $f1) (ref.func $f2))

  (func (export "init")
    i32.const 0    ;; destination table index
    i32.const 0    ;; offset into elem segment
    i32.const 2    ;; number of elements to copy
    table.init $funcs
  )

  (func (export "accessTable") (param $index i32) (result i32)
    local.get $index
    call_indirect (result i32)
  )
)
```

#### Ergebnis

Der ausgegebene Wert ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies ergibt Sinn, da die exportierte `accessTable()`-Funktion einen Indexwert übergeben bekommt. Innerhalb des Wasm-Moduls rufen wir die bei diesem Index verfügbare Funktion in der definierten Tabelle auf, die den Wert zurückgibt, den wir sehen, der ausgegeben wird.

Es ist zu beachten, dass wir `init()` aufrufen müssen, bevor wir `accessTable()` aufrufen, um die Tabelle mit Referenzen zu initialisieren. Wenn wir das nicht tun, würde das Programm einen Fehler erzeugen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`elem.drop`](/de/docs/WebAssembly/Reference/Elem/drop)-Anweisung
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Definition
- [WebAssembly-Tabellenanweisungen](/de/docs/WebAssembly/Reference/Table)
