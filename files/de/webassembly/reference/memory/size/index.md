---
title: "size: Wasm-Speicheranweisung"
short-title: size
slug: WebAssembly/Reference/Memory/size
l10n:
  sourceCommit: 6e99dbce48ff569afb34ad36a5aa4129a945af31
---

Die **`memory.size`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) wird verwendet, um die aktuelle Anzahl der Seiten in einem Speicher abzurufen.

Die Anweisung fügt die Größe (in Seiten) oben auf den Stapel hinzu. Derzeit ist jede Seite 64 KiB groß.

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

Größe eines angegebenen Speichers abrufen (falls mehrere Speicher unterstützt werden)

```wat
;; Size of memory with index 1
memory.size (memory 1)

;; Size of memory named $memory2
memory.size (memory $memory2)
```

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.size` | `0x3f`         |

## Beispiele

### Größe des Standardspeichers abrufen

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standardspeicher und hat den Index 0. Wir können die Anzahl der Seiten in diesem Speicher abrufen, indem wir `memory.size` aufrufen.

Der unten stehende Code zeigt eine WAT-Datei, die dies demonstriert:

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

Oben mussten wir den Speicherindex in der `memory.size`-Anweisung nicht angeben, aber wir hätten dies mit dem Speicherindex (0) des Standardspeichers tun können:

```wat
memory.size (memory 0)
```

Der Vollständigkeit halber können wir die kompilierte Version der obigen Datei `size.wasm` mit einem ähnlichen Code wie unten gezeigt verwenden (die Logfunktion wird in das Modul importiert und vom Modul aufgerufen):

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

Da Speicher in einem Wasm-Modul definiert werden, erhalten sie sequentiell eine Indexnummer ab null. Sie können die Größe eines bestimmten Speichers ermitteln, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen (falls vorhanden) nach der `memory.size`-Anweisung angeben. Wenn Sie keinen bestimmten Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das unten stehende Modul zeigt, wie Sie direkt auf einen Speicher per Index und per Name verweisen können.

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
