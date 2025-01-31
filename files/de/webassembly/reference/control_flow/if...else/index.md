---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`if`**-Anweisung führt eine Anweisung aus, wenn das letzte Element im Stapel wahr (ungleich Null) ist. Wenn die Bedingung falsch (0) ist, kann eine andere Anweisung ausgeführt werden.

{{EmbedInteractiveExample("pages/wat/if...else.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 0
(if
  (then
    ;; do something
  )
  (else
    ;; do something else
  )
)
```

Um Rückgabewerte auf dem Stapel zu belassen, fügen Sie die `result`-Anweisung hinzu.

```wasm
i32.const 0
(if (result i32)
  (then
    ;; do something
    (i32.const 1)
  )
  (else
    ;; do something else
    (i32.const 2)
  )
)
(drop)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `if`      | `0x04`         |
| `else`    | `0x05`         |
