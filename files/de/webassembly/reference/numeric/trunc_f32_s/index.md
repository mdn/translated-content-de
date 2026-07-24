---
title: "trunc_f32_s: Wasm numerische Anweisung"
short-title: trunc_f32_s
slug: WebAssembly/Reference/Numeric/trunc_f32_s
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`trunc_f32_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) entfernt den Bruchteil eines `f32`-Wertes und gibt diesen als vorzeichenbehaftete Ganzzahl aus.

Dies ist eine separate Anweisung, [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc), die den Bruchteil einer Fließkommazahl entfernt und eine Fließkommazahl ausgibt.

Es gibt auch andere Anweisungen für die Ganzzahltrunkierungskonvertierung:

- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc_f32_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f32.const 40.9 ;; load a number onto the stack
    i32.trunc_f32_s ;; discard decimal part and return signed integer
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
value_type.trunc_f32_s
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `trunc_f32_s`:
    - `i32`
    - `i64`
- `trunc_f32_s`
  - : Die `trunc_f32_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-Fließkommazahl.
- `output`
  - : Die Ausgabe-Ganzzahl.

### Binärcodierung

| Anweisung         | Binärformat | Beispieltext => binär       |
| ----------------- | ----------- | --------------------------- |
| `i32.trunc_f32_s` | `0xa8`      | `i32.trunc_f32_s` => `0xa8` |
| `i64.trunc_f32_s` | `0xae`      | `i64.trunc_f32_s` => `0xae` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
