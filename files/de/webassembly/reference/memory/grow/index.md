---
title: "grow: Wasm Text-Instruktion"
short-title: grow
slug: WebAssembly/Reference/Memory/Grow
l10n:
  sourceCommit: e7314460d3614ad8cd4cb971f5f685ece2b31d28
---

{{WebAssemblySidebar}}

Die **`grow`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) erhöht die Größe einer Speicherinstanz um eine angegebene Anzahl von Seiten.

Die Instruktion fügt die vorherige Speichergröße (in Seiten) oben auf den Stack hinzu, wenn die Operation erfolgreich war, oder `-1`, wenn die Operation fehlgeschlagen ist. Derzeit hat jede Seite 64KiB.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

Standardmemory erweitern

```wasm
;; Erweitern Sie den Standardmemory um eine Anzahl von Seiten, die durch den obersten Wert auf dem Stack angegeben wird
i32.const 3  ;; Anzahl der Seiten, um den Memory zu erweitern (3)
memory.grow  ;; Erweitern des Memorys (um 3 Seiten)
;; das oberste Element auf dem Stack ist jetzt entweder die vorherige Anzahl von Seiten (Erfolg) oder `-1` (Fehlschlag)

;; erweitern Standardmemory um zwei Seiten mit einer S-Funktion
(memory.grow (i32.const 2))
```

Spezifizierten Memory erweitern (wenn Multi-Memory unterstützt wird)

```wasm
;; Memory mit Index 1 erweitern
i32.const 1 ;; Anzahl der Seiten, um den spezifizierten Memory zu erweitern (1)
memory.grow (memory 1) ;; Memory-Index 1 erweitern

;; Memory mit Name $memory1 erweitern
i32.const 1  ;; Anzahl der Seiten, um den spezifizierten Memory zu erweitern (1)
memory.grow (memory $memory1) ;; $memory1 um 1 Seite erweitern

;; Memory mit Name $memory1 um drei Seiten mit einer S-Funktion erweitern
(memory.grow (memory $memory1) (i32.const 3))
;; Wird -1 zurückgeben, da Maximalwert 4 ist!
```

### Instruktionen und Opcodes

| Instruktion   | Binärcode (Opcode) |
| ------------- | ------------------ |
| `memory.grow` | `0x40`             |

## Beispiele

### Standardmemory erweitern

Der erste Memory, der zu einem Wasm-Modul hinzugefügt wird, ist der Standardmemory und hat den Index 0. Wir können diesen Memory erweitern, indem wir zuerst eine Variable hinzufügen, die die Menge angibt, um die der Memory erweitert werden soll, und dann `grow` aufrufen.

Der folgende Code zeigt eine WAT-Datei, die dies demonstriert:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2) ;; Standardmemory mit einer Seite und maximal 2 Seiten

  (func $main
    ;; Standardmemory um 1 Seite erweitern
    i32.const 1
    memory.grow
    call $log ;; das Ergebnis loggen (vorherige Anzahl Seiten = 1)

    ;; Standardmemory mit einer S-Funktion erweitern
    (memory.grow (i32.const 1))
    call $log ;; das Ergebnis loggen (-1: Maximal sind 2 Seiten für den oben deklarierten Standardmemory!)
  )
  (start $main) ;; sofortiges Aufrufen beim Laden
)
```

Oben mussten wir den Memory-Index in der `grow`-Instruktion nicht spezifisieren, aber wir hätten dies entweder mit dem Namen oder dem Index (0) des Standardmemory tun können. Dies wird im folgenden Beispiel gezeigt.

Der Vollständigkeit halber können wir die kompilierte Version der oben genannten Datei `grow.wasm` mit einem ähnlichen Code wie unten gezeigt verwenden (die Logfunktion wird in das Modul importiert und vom Modul aufgerufen):

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

### Spezifizierten Memory erweitern

Da Memories in einem Wasm-Modul definiert sind, werden sie nacheinander ab Null durchnummeriert zugewiesen. Sie können einen bestimmten Memory erweitern, indem Sie die `memory`-Instruktion und den gewünschten Index oder Namen (falls vorhanden) nach der `grow`-Instruktion angeben. Wenn Sie keinen bestimmten Memory spezifizieren, wird der Standardmemory mit Index 0 verwendet.

Das Modul unten zeigt, wie Sie direkt auf einen Memory mit Index verweisen können.

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2)  ;; Standardmemory mit einer Seite und maximal 2 Seiten
  (memory $memory1 1 4)  ;; Memory mit Index 1, initial 1 Seite, maximal 4 Seiten
  (func $main
    ;; Memory mit Index 1 um 1 Seite erweitern
    i32.const 1
    memory.grow (memory 1)
    call $log ;; das Ergebnis loggen (vorherige Anzahl Seiten = 1)
  )
  (start $main)
)
```

Der Körper der `$main`-Funktion könnte auch mit einer der folgenden Optionen geschrieben werden:

```wasm
i32.const 1
memory.grow (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(memory.grow (memory 1) (i32.const 1))  ;; Referenz auf Memory durch Index
(memory.grow (memory $memory1) (i32.const 1)) ;; Referenz auf Memory durch Name
```

Wir haben im Beispiel den Standardmemory nicht benutzt. Aber Sie können auch diesen Index spezifizieren, wenn Sie möchten:

```wasm
i32.const 1
memory.grow (memory 0)  ;; Referenz auf Memory durch Index

;; Using S-functions
(memory.grow (memory 0) (i32.const 1))  ;; Referenz auf Standardmemory durch Index
;; Wir können nicht auf diesen bestimmten Standardmemory durch Namen verweisen, weil er keinen hat!
```

Die WAT-Dateien könnten mit demselben JavaScript-Code wie im ersten Beispiel geladen werden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

> **Note:** Die Unterstützung von `grow` in Wasm-Modulen entspricht der Unterstützung von `grow` in der JavaScript-API [`Memory.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow).
> Der [multiMemory](#webassembly.multimemory) Schlüssel zeigt Versionen an, in denen `grow` mit einem spezifizierten Memory verwendet werden kann.

{{Compat}}
