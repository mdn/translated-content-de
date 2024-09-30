---
title: "grow: Wasm-Textinstruktion"
short-title: grow
slug: WebAssembly/Reference/Memory/Grow
l10n:
  sourceCommit: e7314460d3614ad8cd4cb971f5f685ece2b31d28
---

{{WebAssemblySidebar}}

Die **`grow`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von Seiten.

Die Instruktion fügt die vorherige Speichergröße (in Seiten) an die Spitze des Stacks hinzu, wenn der Vorgang erfolgreich war, oder `-1`, wenn der Vorgang fehlgeschlagen ist.
Derzeit ist jede Seite 64KiB groß.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

Standard-Speicher vergrößern

```wasm
;; Grow default memory by a number of pages indicated by the top value on the stack
i32.const 3  ;; Number of pages to grow the memory (3)
memory.grow  ;; Grow the memory (by 3 pages)
;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)

;; grow default memory by two pages using an S-function
(memory.grow (i32.const 2))
```

Angegebenen Speicher vergrößern (falls Multi-Memory unterstützt wird)

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

### Standard-Speicher vergrößern

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standardspeicher und hat den Index 0.
Wir können diesen Speicher vergrößern, indem wir zuerst eine Variable hinzufügen, die angibt, um wie viel der Speicher vergrößert werden soll, und dann `grow` aufrufen.

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

Oben mussten wir den Speicherindex in der `grow`-Instruktion nicht angeben, aber wir hätten dies tun können, indem wir entweder den Namen oder den Index (0) des Standardspeichers verwenden.
Das ist im folgenden Beispiel gezeigt.

Vollständigkeitshalber können wir die kompilierte Version der oben genannten Datei `grow.wasm` mit Code verwenden, der ähnlich wie unten gezeigt ist (die Log-Funktion wird in das Modul importiert und vom Modul aufgerufen):

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

### Einen angegebenen Speicher vergrößern

Da Speicher in einem Wasm-Modul definiert werden, erhalten sie nacheinander eine Indexnummer ab null.
Sie können einen bestimmten Speicher vergrößern, indem Sie die `memory`-Instruktion und den gewünschten Index oder Namen (falls vorhanden) nach der `grow`-Instruktion angeben.
Wenn Sie keinen bestimmten Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das folgende Modul zeigt, wie Sie einen Speicher direkt durch seinen Index referenzieren könnten.

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

Der Rumpf der `$main`-Funktion könnte auch mit einer der folgenden Optionen geschrieben worden sein:

```wasm
i32.const 1
memory.grow (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(memory.grow (memory 1) (i32.const 1))  ;; reference memory by index
(memory.grow (memory $memory1) (i32.const 1)) ;; reference memory by name
```

Wir haben im Beispiel den Standardspeicher nicht verwendet.
Aber Sie können auch wählen, diesen Index anzugeben, wenn Sie möchten:

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

> **Hinweis:** Die Unterstützung von `grow` in Wasm-Modulen entspricht der Unterstützung von grow in der JavaScript-API [`Memory.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow).
> Der [multiMemory](#webassembly.multimemory)-Schlüssel gibt die Versionen an, in denen `grow` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
