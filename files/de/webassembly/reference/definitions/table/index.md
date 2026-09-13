---
title: "table: Wasm-Definition"
short-title: table
slug: WebAssembly/Reference/Definitions/table
l10n:
  sourceCommit: 0471f8e12d10a6fb1f301185823c8262dd18e3c6
---

Die **`table`**- [Definition](/de/docs/WebAssembly/Reference/Definitions) erstellt eine neue Tabelle.

{{InteractiveExample("Wat Demo: table", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; table with 2 function slots
  (table $return_values 2 funcref)

  ;; Define functions of that type
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )
  (func $f2 (type $ret_i32)
    (i32.const 100)
  )

  ;; Actively initialize table slots
  (elem (i32.const 0) $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (local.get $index)
    (call_indirect (type $ret_i32))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(1);
  console.log(value);
});
```

## Syntax

```plain
table name index_type initial_size max_size type
```

- `table`
  - : Der `table`-Definitionstyp. Muss immer zuerst angegeben werden.
- `name` {{optional_inline}}
  - : Ein optionaler identifizierender Name für die Tabelle. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`. Wenn dieser weggelassen wird, kann die Tabelle durch ihren Index identifiziert werden, zum Beispiel `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite usw.

- `index_type` {{optional_inline}}
  - : Ein Ganzzahl-Werttyp, der angibt, welchen Index-Typ die Tabelle haben wird. Mögliche Werte sind:
    - [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
      - : Referenzen werden an 32-Bit-Indizes gespeichert. Zeiger, die zur Identifizierung von Tabellenindizes verwendet werden (zum Beispiel beim Verwenden von [`init`](/de/docs/WebAssembly/Reference/Table/init)), werden `i32`-Werte sein.
    - [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
      - : Referenzen werden an 64-Bit-Indizes gespeichert. Zeiger, die zur Identifizierung von Tabellenindizes verwendet werden (zum Beispiel beim Verwenden von `init`), werden `i64`-Werte sein.

    Wenn weggelassen, wird `index_type` standardmäßig auf `i32` gesetzt.

- `initial_size`
  - : Ein Ganzzahlwert, der die anfängliche Größe der Tabelle darstellt.
- `max_size` {{optional_inline}}
  - : Ein Ganzzahlwert, der die maximale Größe darstellt, zu der die Tabelle wachsen darf. Wenn dies nicht angegeben ist, hat die Tabelle keine maximale Größe, und ihr Wachstum ist nur durch Systembeschränkungen, wie den verfügbaren Speicher, begrenzt.
- `type`
  - : Der Name des zu speichernden Werttyps. Siehe [`elem` > `value_type`](/de/docs/WebAssembly/Reference/Definitions/elem#value_type).

## Beschreibung

WebAssembly-Tabellen ermöglichen die Speicherung von Referenzwerten getrennt von byte-orientierten WebAssembly-Speichern. Der Hauptanwendungsfall ist die Speicherung von Funktionsreferenzen, die mit `call_indirect` verwendet werden können, um indirekte Funktionsaufrufe für Sprachen zu unterstützen, die solche haben. Dennoch kann nahezu jede Art von Referenz gespeichert werden.

Die `table`-Definition erstellt eine neue Tabelle.

Einer Tabelle muss eine anfängliche Größe und ein Speichertyp zugewiesen werden. Dieses Beispiel erstellt eine Tabelle mit zwei Speicherplätzen, die nur Referenzen auf Funktionen speichern wird, die innerhalb von Wasm erstellt wurden (angezeigt durch [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)):

```wat
(table 2 funcref)
```

Optional können Sie auch einen Bezeichner angeben, der verwendet werden kann, um die Tabelle an anderer Stelle zu identifizieren, sowie eine maximale Wachstumsgröße. Zum Beispiel:

```wat
(table $my_table 2 10 funcref)
```

Das Folgende definiert einen Funktionstyp, definiert eine einfache Funktion mit diesem Typ, die ein `i32` zurückgibt, und erklärt sie vorzeitig mit `(elem declare func $f1)`, damit sie später referenziert werden kann.

```wat
(type $ret_i32 (func (result i32)))

(func $f1 (type $ret_i32)
  (i32.const 42)
)

(elem declare func $f1)
```

Um eine Funktion aufzurufen, die in einer Tabelle referenziert wird, müssen Sie die Tabelle sowie den Indexwert referenzieren, an dem die Funktionsreferenz gespeichert ist. Das folgende Beispiel verwendet `call_indirect`:

```wat
(call_indirect (type $ret_i32) (local.get $index))
```

Es ist möglich, Tabellen zur Laufzeit mittels Anweisungen wie [`table.set`](/de/docs/WebAssembly/Reference/Table/set) und [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill) zu verändern und mittels [`table.get`](/de/docs/WebAssembly/Reference/Table/get) Werte abzurufen.

### Externe Referenzen

Sie können auch externe Referenzen, die in JavaScript definiert sind, in einer Wasm-Tabelle speichern, indem Sie das Schlüsselwort [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) angeben. Zum Beispiel:

```wat
(table $my_table 2 10 externref)
```

### Mehrere Tabellen

Sie können mehrere Tabellen im selben Wasm-Modul erstellen, zum Beispiel:

```wat
(table $table_1 1 2 funcref)

(table $table_2 1 2 funcref)
```

Eine Funktion wie diese könnte verwendet werden, um jede Tabelle mit einer anderen Funktion zu befüllen:

```wat
(func $populate
  (table.set $table_1
    (i32.const 0)
    (ref.func $f1)
  )
  (table.set $table_2
    (i32.const 0)
    (ref.func $f2)
  )
)
```

Dann könnten Sie die `$populate`-Funktion aufrufen und `call_indirect` verwenden, um die Funktionen aufzurufen, die in jeder Tabelle referenziert werden. Der folgende Abschnitt referenziert die Tabellen anhand ihres [identifizierenden Namens](#name):

```wat
(func (export "accessTable")
  (call $populate)
  (call_indirect $table_1 (type $ret_i32) (i32.const 0))
  (call_indirect $table_2 (type $ret_i32) (i32.const 0))

  ...
)
```

Alternativ könnten Sie die Tabellen anhand ihrer Indexwerte referenzieren (`0` bezeichnet die erste Tabelle im Modul, `1` die zweite Tabelle usw.):

```wat
(call_indirect 0 (type $ret_i32) (i32.const 0))
(call_indirect 1 (type $ret_i32) (i32.const 0))
```

Wenn Sie weder einen identifizierenden Namen noch einen Index angeben, wird der Index `0` angenommen:

```wat
;; Accesses the table with index 0
(call_indirect (type $ret_i32) (i32.const 0))
```

## Beispiele

### Eine einfache Tabelle erstellen

Dieses Beispiel zeigt, wie man eine einfache Tabelle erstellt, ein paar Funktionen darin speichert und dann eine Funktion aus der Tabelle aufruft.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu holen, in das wir Ergebnisse ausgeben werden. Dann kompilieren und instanziieren wir unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode. Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`accessTable()`-Funktion auf, die im WebAssembly- [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr die Zahl `0` als Parameter. Schließlich setzen wir den Rückgabewert der `accessTable()`-Funktion als `textContent`-Wert des `<p>`-Elements, damit wir ihn inspizieren können.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(0);
  output.textContent = value;
});
```

#### Wasm

In unserem Wasm-Modul definieren wir zuerst einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben. Anschließend definieren wir eine `table` namens `$return_values` mit zwei Slots, die Funktionsreferenzen speichert (daher die Festlegung von `funcref`), und initialisieren sie, indem wir die beiden Slots mit Referenzen auf die `$f1`- und `$f2`-Funktionen füllen.

Schließlich exportieren wir die `accessTable()`-Funktion, die einen `i32`-Namen `$index` als Parameter nimmt und einen `i32` zurückgibt. Innerhalb des Funktionskörpers verwenden wir `call_indirect`, um die Referenzfunktion in der Tabelle am Indexwert `$index` aufzurufen.

```wat live-sample___basic-usage
(module
  (type $ret_i32 (func (result i32)))
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )
  (func $f2 (type $ret_i32)
    (i32.const 100)
  )

  (table $return_values 2 funcref)
  (elem (i32.const 0) $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (call_indirect (type $ret_i32) (local.get $index))
  )
)
```

#### Ergebnis

Der ausgegebene Wert ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Das macht Sinn, da der exportierte `accessTable()` Funktion ein Indexwert übergeben wird. Innerhalb des Wasm-Moduls rufen wir die Funktion am festgelegten Index in der definierten Tabelle auf, die den Wert zurückgibt, den wir ausgegeben sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill)
- [`table.get`](/de/docs/WebAssembly/Reference/Table/get)
- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
