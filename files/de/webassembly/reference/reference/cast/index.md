---
title: "cast: Wasm-Referenzanweisung"
short-title: cast
slug: WebAssembly/Reference/Reference/cast
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Die [Referenzanweisung](/de/docs/WebAssembly/Reference/Reference) **`ref.cast`** wandelt eine Referenz in einen angegebenen Referenztyp um. Schlägt die Umwandlung fehl, wird ein Trap ausgelöst.

{{InteractiveExample("Wat Demo: ref.cast", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (type $point (struct (field $x i32) (field $y i32)))

  (func $main
    (local $value anyref)
    (local.set $value (struct.new $point (i32.const 3) (i32.const 4)))

    ;; An anyref doesn't give access to struct fields,
    ;; so cast it to (ref $point) first
    (call $log
      (struct.get $point $x
        (ref.cast (ref $point) (local.get $value))
      )
    ) ;; log 3
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## WAT-Syntax

```plain
ref.cast ref_type
```

- `ref.cast`
  - : Die Anweisung `ref.cast`.

### Unmittelbare Operanden

- `ref_type`
  - : Der Referenztyp, in den umgewandelt werden soll, beispielsweise `(ref $my_struct_type)`, `(ref null $my_struct_type)` oder `(ref i31)`.

### Operandenstapel

```plain
[input:input_type] -> [output:ref_type]
```

- `input`
  - : Die umzuwandelnde Referenz. Ihr Typ muss zur selben [Typhierarchie](https://webassembly.github.io/spec/core/bikeshed/#heap-types%E2%91%A0) wie `ref_type` gehören. Wasm-Referenztypen bilden getrennte Hierarchien: `anyref` (umfasst Structs, Arrays und `i31ref`), `funcref`, `externref` und `exnref`. Beispielsweise können Sie einen `anyref` in einen Struct-Typ umwandeln, einen `funcref` jedoch nicht.
- `output`
  - : Dieselbe Referenz, typisiert als `ref_type`.

### Traps

Wenn der Laufzeittyp des Operanden nicht mit dem Zielreferenztyp übereinstimmt, löst die Anweisung einen Trap aus. Auch ein Null-Operand löst einen Trap aus, sofern der Zieltyp keine Nullwerte zulässt.

### Binärkodierung

| Anweisung                | Binärformat                | Beispieltext => Binärformat                   |
| ------------------------ | -------------------------- | --------------------------------------------- |
| `ref.cast (ref ht)`      | `0xfb 22:u32 ht:heap_type` | `ref.cast (ref i31)` => `0xfb 0x16 0x6c`      |
| `ref.cast (ref null ht)` | `0xfb 23:u32 ht:heap_type` | `ref.cast (ref null i31)` => `0xfb 0x17 0x6c` |

## Beschreibung

Die Anweisung `ref.cast` prüft den Laufzeittyp einer Referenz und weist ihr, wenn dieser mit `ref_type` übereinstimmt, diesen spezifischeren statischen Typ zu. Dies ist erforderlich, um Anweisungen zu verwenden, die einen bestimmten Typ voraussetzen, beispielsweise um ein Struct-Feld aus einem Wert auszulesen, dessen statischer Typ `anyref` ist.

Wenn die Referenz nicht mit `ref_type` übereinstimmt, löst `ref.cast` einen Trap aus. Wird Wasm-Code aus JavaScript aufgerufen, wird ein Trap als [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)-Ausnahme gemeldet.

Wenn `ref_type` Nullwerte zulässt, beispielsweise `(ref null $point)`, besteht eine Nullreferenz die Typprüfung. Lässt `ref_type` keine Nullwerte zu, löst die Umwandlung einer Nullreferenz einen Trap aus.

Um ohne Auslösen eines Traps zu prüfen, ob eine Referenz einem Typ entspricht, verwenden Sie [`ref.test`](/de/docs/WebAssembly/Reference/Reference/test).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ref.test`](/de/docs/WebAssembly/Reference/Reference/test)
- [`ref.as_non_null`](/de/docs/WebAssembly/Reference/Reference/as_non_null)
