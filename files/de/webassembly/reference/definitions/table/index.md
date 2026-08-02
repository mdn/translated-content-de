---
title: "table: Wasm-Definition"
short-title: table
slug: WebAssembly/Reference/Definitions/table
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`table`** [Definition](/de/docs/WebAssembly/Reference/Definitions) erstellt eine neue Tabelle.

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
  - : Der `table`-Definitionstyp. Muss immer zuerst enthalten sein.
- `name` {{optional_inline}}
  - : Ein optionaler identifizierender Name für die Tabelle. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`. Wenn dieser weggelassen wird, kann die Tabelle durch ihren Index identifiziert werden, zum Beispiel `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite usw.

- `index_type` {{optional_inline}}
  - : Ein Integer-Wertetyp, der angibt, welchen Indextyp die Tabelle haben wird. Mögliche Werte sind:
    - [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
      - : Referenzen werden an 32-Bit-Indizes gespeichert. Zeiger, die verwendet werden, um Tabelleneinträge zu identifizieren (zum Beispiel bei Verwendung von [`init`](/de/docs/WebAssembly/Reference/Table/init)), sind `i32`-Werte.
    - [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
      - : Referenzen werden an 64-Bit-Indizes gespeichert. Zeiger, die verwendet werden, um Tabelleneinträge zu identifizieren (zum Beispiel bei Verwendung von `init`), sind `i64`-Werte.

    Wenn `index_type` weggelassen wird, ist der Standardwert `i32`.

- `initial_size`
  - : Ein Integer, der die anfängliche Größe der Tabelle repräsentiert.
- `max_size` {{optional_inline}}
  - : Ein Integer, der die maximale Größe darstellt, auf die die Tabelle wachsen darf. Wenn dies nicht enthalten ist, hat die Tabelle keine maximale Größe und ihr Wachstum ist nur durch Systembeschränkungen wie verfügbaren Speicher begrenzt.
- `type`
  - : Der Name des zu speichernden Funktionstyps. Siehe [`elem` > `value_type`](/de/docs/WebAssembly/Reference/Definitions/elem#value_type).

## Beschreibung

WebAssembly-Tabellen ermöglichen die Speicherung von Referenzwerten getrennt von byte-orientiertem WebAssembly-Speicher. Der Hauptanwendungsfall besteht darin, Funktionsreferenzen zu speichern, die mit `call_indirect` verwendet werden können, um indirekte Funktionsaufrufe für Sprachen zu unterstützen, die diese haben. Allerdings kann fast jede Art von Referenz gespeichert werden.

Die `table`-Definition erstellt eine neue Tabelle.

Einer Tabelle muss eine anfängliche Größe und ein Speichertyp zugewiesen werden. Dieses Beispiel erstellt eine Tabelle mit zwei Speicherplätzen, die nur Referenzen auf innerhalb von Wasm erstellte Funktionen speichert (angegeben durch [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)):

```wat
(table 2 funcref)
```

Optional können Sie auch einen Bezeichner angeben, der zur Identifizierung der Tabelle an anderer Stelle verwendet werden kann, sowie eine maximale Wachstumsgröße. Zum Beispiel:

```wat
(table $my_table 2 10 funcref)
```

Das folgende definiert einen Funktionstyp, definiert eine grundlegende Funktion mit diesem Typ, die einen `i32` zurückgibt, und deklariert sie voraus mit `(elem declare func $f1)`, damit sie später referenziert werden kann.

```wat
(type $ret_i32 (func (result i32)))

(func $f1 (type $ret_i32)
  (i32.const 42)
)

(elem declare func $f1)
```

Um eine in einer Tabelle referenzierte Funktion aufzurufen, müssen Sie die Tabelle und den Indexwert referenzieren, an dem die Funktionsreferenz gespeichert ist. Das folgende Beispiel verwendet `call_indirect`:

```wat
(call_indirect (type $ret_i32) (local.get $index))
```

Es ist möglich, Tabellen zur Laufzeit mit Anweisungen wie [`table.set`](/de/docs/WebAssembly/Reference/Table/set) und [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill) zu verändern und Werte mit [`table.get`](/de/docs/WebAssembly/Reference/Table/get) abzurufen.

### Externe Referenzen

Sie können auch externe Referenzen, die in JavaScript definiert sind, in einer Wasm-Tabelle speichern, indem Sie das Schlüsselwort [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) angeben. Zum Beispiel:

```wat
(table $my_table 2 10 externref)
```

### Mehrere Tabellen

Sie können mehrere Tabellen im gleichen Wasm-Modul erstellen, zum Beispiel:

```wat
(table $table_1 1 2 funcref)

(table $table_2 1 2 funcref)
```

Sie könnten eine Funktion wie diese verwenden, um jede Tabelle mit einer anderen Funktion zu füllen:

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

Sie könnten dann die `$populate`-Funktion aufrufen und `call_indirect` verwenden, um die in jeder Tabelle referenzierten Funktionen aufzurufen. Der folgende Ausschnitt referenziert die Tabellen über ihren [identifizierenden Namen](#name):

```wat
(func (export "accessTable")
  (call $populate)
  (call_indirect $table_1 (type $ret_i32) (i32.const 0))
  (call_indirect $table_2 (type $ret_i32) (i32.const 0))

  ...
)
```

Aber Sie könnten stattdessen die Tabellen über ihre Indexwerte referenzieren (`0` spezifiziert die erste Tabelle im Modul, `1` die zweite Tabelle usw.):

```wat
(call_indirect 0 (type $ret_i32) (i32.const 0))
(call_indirect 1 (type $ret_i32) (i32.const 0))
```

Wenn Sie keinen identifizierenden Namen _oder_ einen Index angeben, wird der Index `0` angenommen:

```wat
;; Accesses the table with index 0
(call_indirect (type $ret_i32) (i32.const 0))
```

## Beispiele

### Erstellen einer einfachen Tabelle

Dieses Beispiel zeigt, wie man eine einfache Tabelle erstellt, ein paar Funktionen darin speichert und dann eine Funktion aus der Tabelle aufruft.

#### JavaScript

In unserem Skript beginnen wir, indem wir eine Referenz zu einem {{htmlelement("p")}}-Element erfassen, zu dem wir die Ergebnisse ausgeben werden. Dann kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`accessTable()`-Funktion auf, die auf dem WebAssembly-Objekt [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) verfügbar ist, und übergeben ihr die Zahl `0` als Parameter. Schließlich setzen wir den Rückgabewert der `accessTable()`-Funktion auf den `textContent` des `<p>`-Elements, damit wir ihn inspizieren können.

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

In unserem Wasm-Modul definieren wir zuerst einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die darin definierten Werte zurückgeben. Als Nächstes definieren wir eine `table` namens `$return_values` mit zwei Slots, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und initialisieren sie, indem wir die beiden Slots mit Referenzen zu den Funktionen `$f1` und `$f2` füllen.

Schließlich exportieren wir die `accessTable()`-Funktion, die einen `i32`-Wert namens `$index` als Parameter nimmt und einen `i32` zurückgibt. Innerhalb des Funktionskörpers verwenden wir `call_indirect`, um die Funktion aufzurufen, die in der Tabelle am Indexwert `$index` referenziert wird.

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

Dies macht Sinn, da die exportierte `accessTable()`-Funktion einen Indexwert übergeben bekommt. Innerhalb des Wasm-Moduls rufen wir die Funktion auf, die an diesem Index in der definierten Tabelle verfügbar ist, die den Wert zurückgibt, den wir ausgegeben sehen.

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
