---
title: "trunc_f32_u: Wasm numerische Anweisung"
short-title: trunc_f32_u
slug: WebAssembly/Reference/Numeric/trunc_f32_u
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`trunc_f32_u`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) entfernt den Bruchteil eines `f32`-Werts und gibt ihn als unvorzeichenbehaftete Ganzzahl aus.

Dies ist eine separate Anweisung, [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc), die den Bruchteil einer Fließkommazahl entfernt und eine Fließkommazahl ausgibt.

Es gibt auch andere Anweisungen zur Kürzung von Ganzzahlumwandlungen:

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `trunc_f32_u`:
    - `i32`
    - `i64`
- `trunc_f32_u`
  - : Die `trunc_f32_u` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-Fließkommazahl.
- `output`
  - : Die Ausgabe-Ganzzahl.

### Binäre Kodierung

| Anweisung         | Binäres Format | Beispieltext => binär       |
| ----------------- | -------------- | --------------------------- |
| `i32.trunc_f32_u` | `0xa9`         | `i32.trunc_f32_u` => `0xa9` |
| `i64.trunc_f32_u` | `0xaf`         | `i64.trunc_f32_u` => `0xaf` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
