---
title: "eqz: Wasm-Text-Instruktion"
short-title: eqz
slug: WebAssembly/Reference/Numeric/eqz
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`eqz`**-Instruktion prüft, ob eine Zahl gleich null ist.

{{InteractiveExample("Wat Demo: eqz", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `0` onto the stack
    i32.const 0

    i32.eqz ;; check if the previous number on the stack is equal to 0
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.eqz
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `eqz`:
    - `i32`
    - `i64`
- `eqz`
  - : Die `eqz`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert. Wenn `input` gleich `0` ist, wird `1` auf den Stapel geschoben, ansonsten wird `0` auf den Stapel geschoben. Die Ausgabewerte sind Ganzzahlen.

### Binäre Kodierung

| Instruktion | Binärformat | Beispieltext => binär |
| ----------- | ----------- | --------------------- |
| `i32.eqz`   | `0x45`      | `i32.eqz` => `0x45`   |
| `i64.eqz`   | `0x50`      | `i64.eqz` => `0x50`   |

## Siehe auch

- [`eq`](/de/docs/WebAssembly/Reference/Numeric/eq)
