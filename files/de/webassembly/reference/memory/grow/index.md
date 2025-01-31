---
title: "grow: Wasm Textanweisung"
short-title: grow
slug: WebAssembly/Reference/Memory/Grow
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`grow`**-Anweisung zur [Speicherverwaltung](/de/docs/WebAssembly/Reference/Memory) vergrößert die Größe der Speicherinstanz um eine angegebene Anzahl von Seiten.

Die Anweisung fügt die vorherige Speichergröße (in Seiten) oben auf den Stapel, wenn die Operation erfolgreich war, oder `-1`, wenn die Operation fehlgeschlagen ist. Aktuell ist jede Seite 64KiB groß.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

Standard-Speicher erweitern

```wasm
;; Grow default memory by a number of pages indicated by the top value on the stack
i32.const 3  ;; Number of pages to grow the memory (3)
memory.grow  ;; Grow the memory (by 3 pages)
;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)

;; grow default memory by two pages using an S-function
(memory.grow (i32.const 2))
```

Spezifischen Speicher erweitern (wenn mehrere Speicher unterstützt werden)

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

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.grow` | `0x40`         |

## Beispiele

### Erweitern des Standard-Speichers

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standard-Speicher und hat den Index 0. Wir können diesen Speicher erweitern, indem wir zuerst eine Variable hinzufügen, die die Menge angibt, um die der Speicher erweitert werden soll, und dann `grow` aufrufen.

Der unten gezeigte Code zeigt eine WAT-Datei, die dies demonstriert:

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

Oben war es nicht notwendig, den Speicherindex in der `grow`-Anweisung anzugeben, aber wir hätten dies mit dem Namen oder Index (0) des Standard-Speichers tun können. Dies wird im folgenden Beispiel gezeigt.

Vollständig können wir die kompilierte Version der obigen Datei `grow.wasm` mit einem Code verwenden, der dem unten gezeigten ähnelt (die Logfunktion wird in das Modul importiert und vom Modul aufgerufen):

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

### Erweitern eines spezifischen Speichers

Da Speicher in einem Wasm-Modul definiert sind, wird ihnen nacheinander eine Indexnummer ab null zugewiesen. Sie können einen spezifischen Speicher erweitern, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen (falls vorhanden) nach der `grow`-Anweisung angeben. Wenn Sie keinen speziellen Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das unten dargestellte Modul zeigt, wie Sie einen Speicher direkt über den Index referenzieren können.

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

Der Körper der `$main`-Funktion hätte auch mit einer der folgenden Optionen geschrieben werden können:

```wasm
i32.const 1
memory.grow (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(memory.grow (memory 1) (i32.const 1))  ;; reference memory by index
(memory.grow (memory $memory1) (i32.const 1)) ;; reference memory by name
```

In dem Beispiel haben wir nicht den Standard-Speicher verwendet. Aber Sie können auch diesen Index angeben, wenn Sie möchten:

```wasm
i32.const 1
memory.grow (memory 0)  ;; referencing memory by index

;; Using S-functions
(memory.grow (memory 0) (i32.const 1))  ;; reference default memory by index
;; We can't reference this particular default memory by name, because it doesn't have one!
```

Die WAT-Dateien könnten mit dem gleichen JavaScript-Code wie im ersten Beispiel geladen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> **Note:** Die Unterstützung von `grow` in Wasm-Modulen entspricht der Unterstützung von `grow` in der JavaScript-API [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow).
> Der Schlüssel [multiMemory](#webassembly.multimemory) gibt Versionen an, in denen `grow` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
