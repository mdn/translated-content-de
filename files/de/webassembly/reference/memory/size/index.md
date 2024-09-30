---
title: "size: Wasm Textoperation"
short-title: size
slug: WebAssembly/Reference/Memory/Size
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`size`** [Speicheroperation](/de/docs/WebAssembly/Reference/Memory) wird verwendet, um die aktuelle Anzahl der Seiten in einem Speicher zu ermitteln.

Die Anweisung fügt die Größe (in Seiten) oben auf dem Stapel hinzu.
Derzeit ist jede Seite 64KiB groß.

{{EmbedInteractiveExample("pages/wat/size.html", "tabbed-standard")}}

## Syntax

Größe des Standardspeichers ermitteln

```wasm
;; Get the number of pages in the default memory
memory.size
;; The number of pages is now added at top of stack
```

Größe eines bestimmten Speichers ermitteln (wenn Multi-Speicher unterstützt wird)

```wasm
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

### Größe des Standardspeichers ermitteln

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standardspeicher und hat den Index 0.
Wir können die Anzahl der Seiten in diesem Speicher durch Aufruf von `memory.size` erhalten.

Der folgende Code zeigt eine WAT-Datei, die dies demonstriert:

```wasm
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

Oben mussten wir den Speicherindex in der `memory.size`-Anweisung nicht angeben. Wir hätten dies jedoch tun können, indem wir den Speicherindex (0) des Standardspeichers verwenden:

```wasm
memory.size (memory 0)
```

Der Vollständigkeit halber können wir die kompilierte Version der obigen Datei `size.wasm` mit einem Code verwenden, der dem unten gezeigten ähnlich ist (die Log-Funktion wird in das Modul importiert und vom Modul aufgerufen):

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

### Größe eines bestimmten Speichers ermitteln

Da Speicher in einem Wasm-Modul definiert sind, wird ihnen fortlaufend eine Indexnummer ab Null zugewiesen.
Sie können die Größe eines bestimmten Speichers ermitteln, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen (falls vorhanden) nach der `memory.size`-Anweisung angeben.
Wenn Sie keinen bestimmten Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das untenstehende Modul zeigt, wie Sie direkt auf einen Speicher per Index und Namen verweisen können.

```wasm
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

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) JavaScript-API.
> Der [multiMemory](#webassembly.multimemory) Schlüssel gibt die Versionen an, in denen `size` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
