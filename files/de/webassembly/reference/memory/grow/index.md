---
title: "grow: Wasm-Textanweisung"
short-title: grow
slug: WebAssembly/Reference/Memory/grow
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Die **`memory.grow`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) vergrößert die Größe der Speicherinstanz um eine angegebene Anzahl von Seiten.

Die Anweisung fügt die vorherige Größe des Speichers (in Seiten) an die Spitze des Stacks hinzu, wenn der Vorgang erfolgreich war, oder `-1`, wenn der Vorgang fehlgeschlagen ist. Derzeit hat jede Seite 64KiB.

{{InteractiveExample("Wat Demo: grow", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2) ;; start with one memory page, and max of 2 pages
  (func $main

    ;; grow memory by 1 page
    ;; grow returns in 1 for success and -1 for failure
    ;; will fail if you change to more more than 1 page
    (memory.grow (i32.const 1))
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

Standard-Speicher erweitern

```wat
;; Grow default memory by a number of pages indicated by the top value on the stack
i32.const 3  ;; Number of pages to grow the memory (3)
memory.grow  ;; Grow the memory (by 3 pages)
;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)

;; grow default memory by two pages using an S-function
(memory.grow (i32.const 2))
```

Bestimmten Speicher erweitern (wenn Multi-Memory unterstützt wird)

```wat
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

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.grow` | `0x40`         |

## Beispiele

### Standard-Speicher erweitern

Der erste Speicher, der zu einem Wasm-Modul hinzugefügt wird, ist der Standard-Speicher und hat den Index 0. Wir können diesen Speicher erweitern, indem wir zunächst eine Variable hinzufügen, die die Menge angibt, um die der Speicher erweitert werden soll, und dann `grow` aufrufen.

Der folgende Code zeigt eine WAT-Datei, die dies demonstriert:

```wat
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

Oben mussten wir den Speicherindex in der `grow`-Anweisung nicht spezifizieren, hätten dies aber mit entweder dem Namen oder Index (0) des Standard-Speichers tun können. Das wird im folgenden Beispiel gezeigt.

Der Vollständigkeit halber können wir die kompilierte Version der obigen Datei `grow.wasm` mit einem Code verwenden, der dem unten gezeigten ähnelt (die Log-Funktion wird in das Modul importiert und vom Modul aufgerufen):

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

### Bestimmten Speicher erweitern

Da Speicher in einem Wasm-Modul definiert sind, werden ihnen nacheinander eine Indexnummer ab null zugewiesen. Sie können einen bestimmten Speicher erweitern, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen (falls vorhanden) nach der `grow`-Anweisung angeben. Wenn Sie keinen bestimmten Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das folgende Modul zeigt, wie Sie möglicherweise direkt auf einen Speicher über den Index zugreifen können.

```wat
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

Der Körper der `$main`-Funktion hätte auch mit einer der folgenden Optionen geschrieben werden können:

```wat
i32.const 1
memory.grow (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(memory.grow (memory 1) (i32.const 1))  ;; reference memory by index
(memory.grow (memory $memory1) (i32.const 1)) ;; reference memory by name
```

Im Beispiel haben wir den Standardspeicher nicht verwendet. Sie können diesen Index jedoch auch angeben, wenn Sie möchten:

```wat
i32.const 1
memory.grow (memory 0)  ;; referencing memory by index

;; Using S-functions
(memory.grow (memory 0) (i32.const 1))  ;; reference default memory by index
;; We can't reference this particular default memory by name, because it doesn't have one!
```

Die WAT-Dateien könnten mit demselben JavaScript-Code geladen werden wie im ersten Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die `multiMemory`-Kompatibilitätstabelle gibt an, in welchen Versionen `grow` mit einem angegebenen Speicher verwendet werden kann.
