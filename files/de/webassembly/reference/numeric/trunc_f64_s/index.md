---
title: "trunc_f64_s: Wasm-Textinstruktion"
short-title: trunc_f64_s
slug: WebAssembly/Reference/Numeric/trunc_f64_s
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`trunc_f64_s`**-Instruktion entfernt den Bruchteil eines `f64`-Wertes und gibt ihn als vorzeichenbehaftete Ganzzahl aus.

Dies ist eine separate Instruktion, [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc), die den Bruchteil einer Gleitkommazahl entfernt und eine Gleitkommazahl ausgibt.

Es gibt auch andere Instruktionen zur Konvertierung mit Trunkierung von Ganzzahlen:

- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc_f64_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f64.const 2300044.4 ;; load a number onto the stack
    i32.trunc_f64_s ;; discard decimal part and return signed integer
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
value_type.trunc_f64_s
```

- `value_type`
  - : Der Typ des Wertes, auf den die Instruktion angewendet wird. Die folgenden Typen unterstützen `trunc_f64_s`:
    - `i32`
    - `i64`
- `trunc_f64_s`
  - : Die `trunc_f64_s`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabegleitkommazahl.
- `output`
  - : Die Ausgabeganzzahl.

### Binärcodierung

| Instruktion       | Binärformat | Beispieltext => binär       |
| ----------------- | ----------- | --------------------------- |
| `i32.trunc_f64_s` | `0xaa`      | `i32.trunc_f64_s` => `0xaa` |
| `i64.trunc_f64_s` | `0xb0`      | `i64.trunc_f64_s` => `0xb0` |

## Siehe auch

- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
