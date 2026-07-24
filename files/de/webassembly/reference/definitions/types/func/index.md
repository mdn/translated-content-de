---
title: "func: Wasm-Typdefinition"
short-title: func
slug: WebAssembly/Reference/Definitions/types/func
l10n:
  sourceCommit: a2c0927ed7c35b9f110c19eea4a369162e8e1bf5
---

Die **`func`**-Typdefinition deklariert eine Funktionssignatur: eine Liste von Parametertypen und eine Liste von Ergebnistypen.

## Syntax

```wat
;; Declare a named function type
(type $bin_op (func (param i32) (param i32) (result i32)))

;; A function inheriting that signature
(func $add (type $bin_op) (param $a i32) (param $b i32) (result i32)
  local.get $a
  local.get $b
  i32.add)

;; A call_indirect site using the same type
(call_indirect (type $bin_op))
```

## Beschreibung

Ein Funktionstyp ordnet eine Sequenz von Parameter-[Wertetypen](/de/docs/WebAssembly/Reference/Value_types) einer Sequenz von Ergebnis-Wertetypen zu. Beide Listen können leer sein.

Funktionstypen erscheinen an drei Stellen:

- **Funktionsdeklarationen**: Jede [`func`](/de/docs/WebAssembly/Guides/Understanding_the_text_format) hat einen Typ. Sie können entweder `param`- und `result`-Klauseln einfügen oder auf einen benannten Typ mit `(type $name)` verweisen. Wenn beide vorhanden sind, müssen sie übereinstimmen. Das Inlinieren eines Funktionstyps in einer Deklaration ist gleichbedeutend mit dem Schreiben eines separaten Funktionstyps und dem Referenzieren desselben.
- **Indirekte Aufrufe**: [`call_indirect`](/de/docs/WebAssembly/Reference/Control_flow) nimmt einen Funktionstyp und leitet durch eine [`table`](/de/docs/WebAssembly/Reference/Definitions/table) von [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)-Werten um. Die Engine prüft zur Laufzeit, ob der typisierte Index des aufgerufenen Funktions entspricht, und löst andernfalls eine Ausnahme aus.
- **Importe**: Funktionsimporte deklarieren einen Typ, der für eine Funktion bereitgestellt werden muss.

Funktionstypen verwenden [strukturelle Gleichheit](https://de.wikipedia.org/wiki/Struktureller_Typ): Zwei Funktionstypen sind identisch, wenn und nur wenn ihre Parameter- und Ergebnis-Typsequenzen elementweise übereinstimmen. Die Identität des Typindexes oder des Moduls, aus dem er stammt, spielt keine Rolle. Ein `call_indirect` wird daher bei einem Aufruf erfolgreich sein, wenn der Typ des Aufgerufenen unabhängig in einem anderen Modul deklariert wurde, solange die Parameter- und Ergebnissequenzen dieselben sind.

## Beispiele

### Teilen eines Funktionstyps zwischen zwei Funktionen und einem Dispatcher

Das folgende Modul deklariert einen einzelnen `$bin_op`-Typ und verwendet ihn für zwei Funktionen und eine `call_indirect`-Stelle:

```wat
(module
  (type $bin_op (func (param i32) (param i32) (result i32)))

  (func $add (type $bin_op) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add)

  (func $mul (type $bin_op) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.mul)

  (table 2 funcref)
  (elem (i32.const 0) $add $mul)

  (func (export "dispatch") (param $op i32) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    local.get $op
    call_indirect (type $bin_op)))
```

Der Aufruf von `dispatch(0, 3, 4)` ruft `$add` auf und gibt `7` zurück; der Aufruf von `dispatch(1, 3, 4)` ruft `$mul` auf und gibt `12` zurück. Das Übergeben eines Indexes, der auf eine Funktion mit einer anderen Signatur zeigt, löst eine Ausnahme aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)-Wertetyp
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Definition
