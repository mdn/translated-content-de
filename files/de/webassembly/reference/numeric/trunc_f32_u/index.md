---
title: "trunc_f32_u: Wasm-Textanweisung"
short-title: trunc_f32_u
slug: WebAssembly/Reference/Numeric/trunc_f32_u
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`trunc_f32_u`**-Anweisung entfernt den Bruchteil eines `f32`-Wertes und gibt ihn als unsigned Integer aus.

Dies ist eine separate Anweisung, [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc), die den Bruchteil eines Floats entfernt und ein Float ausgibt.

Es gibt auch andere Anweisungen zur Trunkierung und Umwandlung in Integer:

- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc_f32_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f32.const 2344.8 ;; load a number onto the stack
    i32.trunc_f32_u ;; discard decimal part and return unsigned integer
    call $log ;; log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.trunc_f32_u
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `trunc_f32_u`:
    - `i32`
    - `i64`
- `trunc_f32_u`
  - : Die `trunc_f32_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabefließkommazahl.
- `output`
  - : Die Ausgabezahl als Ganzzahl.

### Binäre Codierung

| Anweisung         | Binärformat | Beispieltext => binär       |
| ----------------- | ----------- | --------------------------- |
| `i32.trunc_f32_u` | `0xa9`      | `i32.trunc_f32_u` => `0xa9` |
| `i64.trunc_f32_u` | `0xaf`      | `i64.trunc_f32_u` => `0xaf` |

## Siehe auch

- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
