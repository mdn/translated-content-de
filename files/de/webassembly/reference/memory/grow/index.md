---
title: "grow: Wasm Text-Instruktion"
short-title: grow
slug: WebAssembly/Reference/Memory/Grow
l10n:
  sourceCommit: e7314460d3614ad8cd4cb971f5f685ece2b31d28
---

{{WebAssemblySidebar}}

Die **`grow`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von Seiten.

Die Instruktion fügt die vorherige Größe des Speichers (in Seiten) an die Spitze des Stacks hinzu, wenn die Operation erfolgreich war, oder `-1`, wenn die Operation fehlgeschlagen ist. Derzeit ist jede Seite 64KiB groß.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

Standardmäßig Speicher vergrößern

```wasm
;; Grow default memory by a number of pages indicated by the top value on the stack
i32.const 3  ;; Number of pages to grow the memory (3)
memory.grow  ;; Grow the memory (by 3 pages)
;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)

;; grow default memory by two pages using an S-function
(memory.grow (i32.const 2))
```

Spezifizierten Speicher vergrößern (wenn Multi-Speicher unterstützt wird)

```wasm
;; Grow memory with index 1
i32.const 1 ;; Number of pages to grow specified memory (1)
memory.grow (memory 1) ;; Grow memory index 1

;; Grow memory with name $memory1
i32.const 1  ;; Number of pages to grow specified memory (1)
memory.grow (memory $memory1) ;; Grow $memory1 by 1 page

;; Grow memory with name $memory1 by three pages using an S-function
(memory.grow (memory $memory1) (i32.const 3))
;; Will return -1 as max value is 4!
```

### Instruktionen und Opcodes

| Instruktion   | Binärer Opcode |
| ------------- | -------------- |
| `memory.grow` | `0x40`         |

## Beispiele

### Standardmäßig Speicher vergrößern

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standardspeicher und hat den Index 0. Wir können diesen Speicher vergrößern, indem wir zunächst eine Variable hinzufügen, die die Menge angibt, um die der Speicher vergrößert werden soll, und dann `grow` aufrufen.

Der unten stehende Code zeigt eine WAT-Datei, die dies demonstriert:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2) ;; default memory with one page and max of 2 pages

  (func $main
    ;; grow default memory by 1 page
    i32.const 1
    memory.grow
    call $log ;; log the result (previous no. pages = 1)

    ;; grow default memory, using an S-function
    (memory.grow (i32.const 1))
    call $log ;; log the result (-1: max is 2 pages for default memory declared above!)
  )
  (start $main) ;; call immediately on loading
)
```

Oben mussten wir den Speicherindex in der `grow`-Instruktion nicht angeben, es wäre jedoch möglich, dies mit dem Namen oder Index (0) des Standardspeichers zu tun. Das wird im folgenden Beispiel gezeigt.

Der Vollständigkeit halber können wir die kompilierte Version der obigen Datei `grow.wasm` mit einem Code verwenden, der dem unten gezeigten ähnlich ist (die Log-Funktion wird in das Modul importiert und vom Modul aufgerufen):

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
    fetch("grow.wasm"),
    importObject,
  );
}
start();
```

### Einen spezifizierten Speicher vergrößern

Da Speicher in einem Wasm-Modul definiert werden, wird ihnen nacheinander eine Indexnummer ab Null zugewiesen. Sie können einen spezifischen Speicher vergrößern, indem Sie die `memory`-Instruktion und den gewünschten Index oder Namen (falls vorhanden) nach der `grow`-Instruktion angeben. Wenn kein bestimmter Speicher angegeben wird, wird der Standardspeicher mit Index 0 verwendet.

Das folgende Modul zeigt, wie Sie einen Speicher direkt über den Index referenzieren können.

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2)  ;; Default memory with one page and max of 2 pages
  (memory $memory1 1 4)  ;; Memory with index 1, initial 1 page, max 4 pages
  (func $main
    ;; grow memory with index 1 by 1 page
    i32.const 1
    memory.grow (memory 1)
    call $log ;; log the result (previous no. pages = 1)
  )
  (start $main)
)
```

Der Körper der `$main`-Funktion könnte auch mit einer der folgenden Optionen geschrieben werden:

```wasm
i32.const 1
memory.grow (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(memory.grow (memory 1) (i32.const 1))  ;; reference memory by index
(memory.grow (memory $memory1) (i32.const 1)) ;; reference memory by name
```

Im Beispiel haben wir den Standardspeicher nicht verwendet. Aber Sie können auch diesen Index angeben, wenn Sie möchten:

```wasm
i32.const 1
memory.grow (memory 0)  ;; referencing memory by index

;; Using S-functions
(memory.grow (memory 0) (i32.const 1))  ;; reference default memory by index
;; We can't reference this particular default memory by name, because it doesn't have one!
```

Die WAT-Dateien könnten mit demselben JavaScript-Code wie im ersten Beispiel geladen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> **Hinweis:** Die Unterstützung für `grow` in Wasm-Modulen entspricht der Unterstützung für `grow` in der JavaScript-API [`Memory.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow).
> Der Schlüssel [multiMemory](#webassembly.multimemory) zeigt die Versionen an, in denen `grow` mit einem spezifizierten Speicher verwendet werden kann.

{{Compat}}
