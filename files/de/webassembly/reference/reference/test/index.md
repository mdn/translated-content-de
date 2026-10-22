---
title: "test: Wasm-Referenzanweisung"
short-title: test
slug: WebAssembly/Reference/Reference/test
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Die [Referenzanweisung](/de/docs/WebAssembly/Reference/Reference) **`ref.test`** prüft, ob eine Referenz einem bestimmten Referenztyp entspricht.

{{InteractiveExample("Wat Demo: ref.test", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (type $point (struct (field i32) (field i32)))

  (func $main
    (local $value anyref)
    (local.set $value (struct.new $point (i32.const 1) (i32.const 2)))

    (call $log (ref.test (ref $point) (local.get $value))) ;; log 1: it's a $point
    (call $log (ref.test (ref i31) (local.get $value))) ;; log 0: it isn't an i31

    (call $log (ref.test (ref $point) (ref.null any))) ;; log 0: null doesn't match (ref $point)
    (call $log (ref.test (ref null $point) (ref.null any))) ;; log 1: null matches (ref null $point)
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
ref.test ref_type
```

- `ref.test`
  - : Die Anweisung `ref.test`.

### Unmittelbare Operanden

- `ref_type`
  - : Der Referenztyp, gegen den geprüft wird, beispielsweise `(ref $my_struct_type)`, `(ref null $my_struct_type)` oder `(ref i31)`.

### Operandenstapel

```plain
[input:input_type] -> [output:i32]
```

- `input`
  - : Die zu prüfende Referenz. Ihr Typ muss zur selben [Typhierarchie](https://webassembly.github.io/spec/core/bikeshed/#heap-types%E2%91%A0) wie `ref_type` gehören. Wasm-Referenztypen bilden getrennte Hierarchien: `anyref` (umfasst Structs, Arrays und `i31ref`), `funcref`, `externref` und `exnref`. Beispielsweise können Sie ein `anyref` gegen einen Struct-Typ prüfen, ein `funcref` jedoch nicht.
- `output`
  - : Ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32), das `1` ist, wenn `input` mit `ref_type` übereinstimmt, andernfalls `0`.

### Binärkodierung

| Anweisung                | Binärformat                | Beispiel: Text => Binärformat                 |
| ------------------------ | -------------------------- | --------------------------------------------- |
| `ref.test (ref ht)`      | `0xfb 20:u32 ht:heap_type` | `ref.test (ref i31)` => `0xfb 0x14 0x6c`      |
| `ref.test (ref null ht)` | `0xfb 21:u32 ht:heap_type` | `ref.test (ref null i31)` => `0xfb 0x15 0x6c` |

## Beschreibung

Die Anweisung `ref.test` prüft den Laufzeittyp einer Referenz. Das ist nützlich, wenn ein Wert einen allgemeinen statischen Typ wie `anyref` hat, Sie aber vor der Arbeit damit wissen müssen, ob er einem bestimmten Typ entspricht.

Wenn `ref_type` null zulässt, beispielsweise `(ref null $point)`, stimmt eine Nullreferenz damit überein und `ref.test` gibt `1` zurück. Wenn `ref_type` null nicht zulässt, stimmt eine Nullreferenz nicht damit überein und `ref.test` gibt `0` zurück.

`ref.test` löst niemals eine Trap aus. Um eine Referenz in einen spezifischeren Typ umzuwandeln, sobald Sie wissen, dass sie diesem entspricht, verwenden Sie [`ref.cast`](/de/docs/WebAssembly/Reference/Reference/cast).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ref.cast`](/de/docs/WebAssembly/Reference/Reference/cast)
- [`ref.eq`](/de/docs/WebAssembly/Reference/Reference/eq)
- [`ref.is_null`](/de/docs/WebAssembly/Reference/Reference/is_null)
