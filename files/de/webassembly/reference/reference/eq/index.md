---
title: "eq: Wasm-Referenzanweisung"
short-title: eq
slug: WebAssembly/Reference/Reference/eq
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Die [Referenzanweisung](/de/docs/WebAssembly/Reference/Reference) **`ref.eq`** prüft, ob zwei Referenzen gleich sind.

{{InteractiveExample("Wat Demo: ref.eq", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (type $point (struct (field i32) (field i32)))

  (func $main
    (local $a (ref $point))
    (local $b (ref $point))
    (local.set $a (struct.new $point (i32.const 1) (i32.const 2)))
    (local.set $b (struct.new $point (i32.const 1) (i32.const 2)))

    (call $log (ref.eq (local.get $a) (local.get $a))) ;; log 1: same struct instance
    (call $log (ref.eq (local.get $a) (local.get $b))) ;; log 0: different struct instances
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
ref.eq
```

- `ref.eq`
  - : Die Anweisung `ref.eq`.

### Unmittelbare Operanden

Keine.

### Operandenstapel

```plain
[input1:eqref input2:eqref] -> [output:i32]
```

- `input1`
  - : Die erste zu vergleichende Referenz. Sie muss ein `eqref` (`(ref null eq)`) oder ein Untertyp davon sein, beispielsweise eine Referenz auf einen Struct- oder Array-Typ oder ein `i31ref`.
- `input2`
  - : Die zweite zu vergleichende Referenz. Für sie gelten dieselben Typanforderungen wie für `input1`.
- `output`
  - : Ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32), das `1` ist, wenn beide Referenzen gleich sind, andernfalls `0`.

### Binäre Kodierung

| Anweisung | Binärformat | Beispiel: Text => Binärdarstellung |
| --------- | ----------- | ---------------------------------- |
| `ref.eq`  | `0xd3`      | `ref.eq` => `0xd3`                 |

## Beschreibung

Struct- und Array-Referenzen werden anhand ihrer Identität verglichen, nicht anhand ihrer Feldwerte. Im obigen Beispiel sind `$a` und `$b` getrennte Struct-Instanzen mit denselben Feldwerten. Ein Vergleich der beiden ergibt daher `0`, während ein Vergleich von `$a` mit sich selbst `1` ergibt.

Zwei Nullreferenzen sind gleich. Zwei `i31ref`-Werte sind gleich, wenn sie dieselbe Ganzzahl enthalten.

`ref.eq` kann nur Referenzen vergleichen, die [Untertypen von `eqref`](https://webassembly.github.io/spec/core/bikeshed/#heap-types%E2%91%A0) sind. `eqref` umfasst Referenzen, die auf Gleichheit verglichen werden können: `i31ref`, `structref`, `arrayref`, Referenzen auf im Modul definierte Struct- und Array-Typen sowie Nullreferenzen dieser Typen. Mit `ref.eq` können Sie keine [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)- oder [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)-Werte vergleichen. Ein Modul, das dies versucht, besteht die Validierung nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ref.is_null`](/de/docs/WebAssembly/Reference/Reference/is_null)
- [`ref.test`](/de/docs/WebAssembly/Reference/Reference/test)
