---
title: "size: Wasm-Textanweisung"
short-title: size
slug: WebAssembly/Reference/Memory/Size
l10n:
  sourceCommit: d47940f987297e6d5202c55576afef1ddc8565e7
---

Die **`size`**-[Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) wird verwendet, um die aktuelle Anzahl der Seiten in einem Speicher abzurufen.

Die Anweisung addiert die Größe (in Seiten) an die Spitze des Stacks.
Derzeit ist jede Seite 64 KiB groß.

{{InteractiveExample("Wat Demo: size", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory 2)
  (func $main

    memory.size ;; get the memory size
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

Größe des Standardspeichers abrufen

```wat
;; Get the number of pages in the default memory
memory.size
;; The number of pages is now added at top of stack
```

Größe eines angegebenen Speichers abrufen (falls Multi-Memory unterstützt wird)

```wat
;; Size of memory with index 1
memory.size (memory 1)

;; Size of memory named $memory2
memory.size (memory $memory2)
```

### Anweisungen und Opcodes

| Anweisung     | Binäre Opcode |
| ------------- | ------------- |
| `memory.size` | `0x3f`        |

## Beispiele

### Größe des Standardspeichers abrufen

Der erste Speicher, der zu einem Wasm-Modul hinzugefügt wird, ist der Standardspeicher und hat den Index 0.
Wir können die Anzahl der Seiten in diesem Speicher durch Aufruf von `memory.size` abrufen.

Der folgende Code zeigt eine WAT-Datei, die dies demonstriert:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2) ;; default memory with one page and max of 2 pages

  (func $main
    ;; get size
    memory.size
    call $log ;; log the result (1)

    ;; grow default memory by 1 page
    i32.const 1
    memory.grow

    ;;get size again
    memory.size
    call $log ;; log the result (2)
  )
  (start $main) ;; call immediately on loading
)
```

Oben mussten wir den Speicherindex in der `memory.size`-Anweisung nicht spezifizieren, aber wir hätten dies mit dem Speicherindex (0) des Standardspeichers tun können:

```wat
memory.size (memory 0)
```

Der Vollständigkeit halber können wir die kompilierte Version der obigen Datei `size.wasm` mit einem Code verwenden, der ähnlich dem unten gezeigten ist (die Log-Funktion wird in das Modul importiert und vom Modul aufgerufen):

```js
start();
async function start() {
  const importObject = {
    console: {
      log(arg) {
        console.log(arg);
      },
    },
  };
  const result = await WebAssembly.instantiateStreaming(
    fetch("size.wasm"),
    importObject,
  );
}
start();
```

### Größe eines bestimmten Speichers abrufen

Da Speicher in einem Wasm-Modul definiert werden, wird ihnen nacheinander eine Indexnummer ab null zugewiesen.
Sie können die Größe eines bestimmten Speichers erhalten, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen (falls vorhanden) nach der `memory.size`-Anweisung angeben.
Wenn Sie keinen bestimmten Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das unten stehende Modul zeigt, wie Sie direkt auf einen Speicher mittels Index und Name verweisen könnten.

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2)  ;; Default memory with one page and max of 2 pages
  (memory $memory1 2 4)  ;; Memory with index 1, initial 2 page, max 4 pages
  (func $main
    ;; Get size for memory by index
    memory.size (memory 1)
    call $log ;; log the result (2)

    ;; Get size for memory by memory name
    memory.size (memory $memory1)
    call $log ;; log the result (2)
  )
  (start $main)
)
```

Die WAT-Dateien könnten mit demselben JavaScript-Code wie im ersten Beispiel geladen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die `multiMemory`-Kompatibilitätstabelle zeigt die Versionen an, in denen `size` mit einem angegebenen Speicher verwendet werden kann.
