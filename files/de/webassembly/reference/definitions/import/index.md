---
title: "import: Wasm-Definition"
short-title: import
slug: WebAssembly/Reference/Definitions/import
l10n:
  sourceCommit: 8a13259a44523cd17b4fe347088b62c6d7a35265
---

Die **`import`**-[Definition](/de/docs/WebAssembly/Reference/Definitions) deklariert ein oder mehrere **Importe**. Jeder verweist auf einen Wert, der vom Host importiert wurde (wie eine Funktion oder [Speicher](/de/docs/WebAssembly/Reference/Definitions/memory)) und macht ihn für die Verwendung im Wasm-Modul verfügbar.

{{InteractiveExample("Wat Demo: import", "tabbed-taller")}}

```wat interactive-example
(module
  ;; full syntax
  (import "console" "log" (func $log (param i32)))
  ;; compact syntax
  (import "importNums"
    (item "num1")
    (item "num3")
    (item "num5")
    (func (result i32))
  )

  (func $main
    call 1 ;; num1
    call 2 ;; num3
    i32.add
    call 3 ;; num5
    i32.mul

    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const importNums = {
  num1() {
    return 1;
  },
  num3() {
    return 3;
  },
  num5() {
    return 5;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  importNums,
  console,
});
```

In diesem Beispiel definieren wir ein Importobjekt namens `importNums` in JavaScript. Es enthält drei Funktionen, die jeweils eine Ganzzahl zurückgeben. Wenn wir das Wasm-Modul über [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) instanziieren, importieren wir `importNums` und das eingebaute [`console`](/de/docs/Web/API/console)-Objekt.

Im Wasm-Modul importieren wir die `log()`-Funktion des `console`-Objekts mit der "vollen" Syntax und die Funktionen `num1()`, `num3()` und `num5()` des `importNums`-Objekts mithilfe der [kompakten Importsyntax](#kompakte_importabschnitte). Wir führen eine Funktion namens `main()` aus, die `num1()` und `num3()` ausführt und dann die zurückgegebenen Werte zusammenaddiert. Es multipliziert dann das Ergebnis mit dem Wert, der von `num5()` zurückgegeben wird. Anschließend protokollieren wir das Endergebnis auf der Konsole.

## WAT-Syntax

```plain
;; full syntax
import namespace value type

;; compact form 1
import namespace
  item value type
  item value type
  ...

;; compact form 2
import namespace
  item value
  item value
  ...
  type
```

- `import`
  - : Das `import`-Schlüsselwort. Muss immer zuerst enthalten sein.
- `item`
  - : Das `item`-Schlüsselwort. Wird zu Beginn jeder Wertdefinitionszeile verwendet, wenn die [kompakte Importsyntax](#kompakte_importabschnitte) verwendet wird.
- `namespace`
  - : Der Name des Objekts im Host, das den importierten Wert enthält.
- `value`
  - : Der Name des importierten Wertes. Dies ist eine Eigenschaft innerhalb des Objekts, das durch den `namespace` identifiziert wird.
- `type`
  - : Der Typ des importierten Wertes, der optional einen Bezeichner enthalten kann, der verwendet werden kann, um den importierten Wert im restlichen Wasm-Modul zu referenzieren. Der `type` kann einer der folgenden externen Typen sein:
    - [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func)
      - : Deklariert eine Funktionssignatur.
    - [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
      - : Deklariert eine Wasm-Globale.
    - [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory)
      - : Deklariert einen Wasm-Speicher.
    - [`table`](/de/docs/WebAssembly/Reference/Definitions/table)
      - : Deklariert eine Wasm-Tabelle.
    - [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)
      - : Deklariert einen Wasm-Tag.

## Beschreibung

Wenn Sie in einem Wasm-Modul Werte verwenden möchten, die im Host definiert sind, können Sie diese über `import`-Definitionen verfügbar machen.

Zum Beispiel zeigt das folgende Snippet, wie wir eine Funktion und einen [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) in JavaScript definieren und sie auswählen könnten, um sie zu importieren, wenn ein Wasm-Modul instanziiert wird:

```js
const importObj = {
  myFunc() {
    return 42;
  },
  myGlobal: new WebAssembly.Global({ value: "i32", mutable: true }, 0),
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), importObj).then(
  (obj) => {
    // ...
  },
);
```

Im Wasm-Modul würden wir die Importe so definieren:

```wat
(import "importObj" "myFunc" (func (result i32)))
(import "importObj" "myGlobal" (global $my_global (mut i32)))
```

Sie können so viele `import`-Anweisungen in ein Modul einfügen, wie erforderlich. Die importierten Werte können dann auf die gleiche Weise verwendet werden wie direkt im Modul definierte Werte. Zum Beispiel:

```wat
...

global.get $my_global
call 0

...
```

Wenn dem importierten Wert ein Namensbezeichner zugewiesen wird (wie beim `global`-Wert im vorherigen Beispiel), kann er mit seinem Namen oder Indexwert referenziert werden. Wenn er keinen Namensbezeichner hat (wie beim `func`-Wert im vorherigen Beispiel), kann er nur durch seinen Indexwert referenziert werden. Bedenken Sie, dass Namensbezeichner syntaktischer Zucker im Textformat sind. Einmal kompiliert, verwendet das Modul die Indexwerte im Hintergrund.

Importierte und definierte Elemente verwenden denselben Indexbereich. Im nächsten Snippet zeigen wir eine importierte Tabelle, gefolgt von einer definierten Tabelle:

```wat
(import "importObj" "myTable" (table $table1 1 10 funcref))
(table $table2 2 8 externref)
```

In diesem Fall erscheint die importierte Tabelle zuerst, so dass sie auf Index 0 verfügbar ist. Die definierte Tabelle erscheint als zweite und ist daher auf Index 1 verfügbar.

### Importtypen

Sie können die folgenden externen Typen in ein Wasm-Modul importieren.

#### Funktion

Beim Import einer Funktion ist das `type`-Feld ein [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func):

```wat
(import "importObj" "myFunc" (func $my_func (param i32) (result i32)))
```

oder

```wat
(type $my_func_type (func (param i32) (result i32)))
(import "importObj" "myFunc" (func $my_func (type $my_func_type)))
```

Dies beinhaltet:

- Einen optionalen Funktionsbezeichner
- Eine Liste von Parametertypen
- Eine Liste von Ergebnisstypen

#### Global

Beim Import einer globalen Variable ist das `type`-Feld ein [`global`](/de/docs/WebAssembly/Reference/Definitions/global):

```wat
(import "importObj" "myGlobal" (global $my_global i32))
```

oder

```wat
(import "importObj" "myGlobal" (global $my_global (mut i32)))
```

Dies beinhaltet:

- Einen optionalen globalen Bezeichner
- Den [Datentyp](/de/docs/WebAssembly/Reference/Definitions/global#data_type) der globalen Variable, vorangestellt mit dem `mut`-Flag, wenn die globale Variable veränderlich ist.

#### Speicher

Beim Import eines Speichers ist das `type`-Feld ein [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory):

```wat
(import "importObj" "mem" (memory $my_mem 1 10 shared))
```

Dies beinhaltet:

- Einen optionalen Speicherbezeichner
- Eine Anfangsgröße, in Einheiten von 64KiB-Seiten
- Eine Maximalgröße, erforderlich, wenn Sie `shared` angeben
- Das `shared`-Schlüsselwort, das einen geteilten Speicher kennzeichnet

#### Tabelle

Beim Import einer Tabelle ist das `type`-Feld ein [`table`](/de/docs/WebAssembly/Reference/Definitions/table):

```wat
(import "importObj" "myTable" (table $my_table 1 10 funcref))
```

Dies beinhaltet:

- Einen optionalen Tabellenbezeichner
- Eine Anfangsgröße
- Eine optionale Maximalgröße
- Den [Wertetyp](/de/docs/WebAssembly/Reference/Definitions/elem#value_type), der von der Tabelle gespeichert wird

#### Tag

Beim Import eines Tags ist das `type`-Feld ein [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag):

```wat
(import "importObj" "tag" (tag $my_tag (param i32)))
```

Dies beinhaltet:

- Einen optionalen Tag-Bezeichner
- Einen oder mehrere Werte, die die Parameter und deren Typen des dargestellten Ausnahmetyps angeben (jeder wird mit dem Schlüsselwort `param` gefolgt von einem [Wasm-Typ](/de/docs/WebAssembly/Reference/Value_types) geschrieben)

### Kompakte Importabschnitte

Ein Problem mit der "vollen" `import`-Syntax ist, dass Sie den Namespace und den Wert für jeden Import angeben müssen. Dies ist für triviale Beispiele nicht so sehr ein Problem; bei größeren Wasm-Modulen haben Sie jedoch normalerweise eine geringe Anzahl von Namespaces und eine größere Anzahl von Werten, die importiert werden müssen.

Zum Beispiel:

```wat
(import "importObj" "func1" (func $f1 (result i32)))
(import "importObj" "func2" (func $f2 (result i32)))
(import "importObj" "func3" (func $f3 (result i32)))
(import "importObj" "func4" (func $f4 (result i32)))
...
```

In solchen Beispielen führt das Wiederholen des Namespace und möglicherweise auch des Typs zu überflüssiger Redundanz in der binären Kodierung des Moduls (und auch im Textformat).

Um diese Redundanz zu reduzieren und die Größe der Binärdatei zu verringern, können Sie die kompakte Importsyntax verwenden. Es gibt zwei Formen, eine, die den Namespace dedupliziert, und eine, die sowohl den Namespace als auch den Typ dedupliziert. Betrachten wir das folgende Beispiel:

```wat
(import "importNums" "num1" (func $n1 (result i32)))
(import "importNums" "num3" (func $n3 (result i32)))
(import "importNums" "num5" (func $n5 (result i32)))
```

Die folgenden Abschnitte zeigen, wie Sie diese Importe mit den kompakten Formen umschreiben können.

> [!NOTE]
> Das kompakte Importtextformat liefert einen Hinweis an Wasm-Werkzeuge, eine bestimmte kompakte Import-Binärkodierung zu verwenden. Es gibt nichts, das die Werkzeuge daran hindert, eines der kompakten Textformate zu parsen und das nicht-kompakte Binärformat zu emittieren.

#### Kompakte Form 1: Namespace deduplizieren

In der ersten Form wird der Namespace einmal nach dem `import`-Schlüsselwort geschrieben. Dann schreiben Sie jeden Wert innerhalb dieses Namespace in eine eigene Zeile, gefolgt vom Typ des Wertes wie zuvor. Das Textformat enthält das Schlüsselwort `item` am Anfang jeder Wertzeile.

```wat
(import "importNums"
  (item "num1" (func $n1 (result i32)))
  (item "num3" (func $n3 (result i32)))
  (item "num5" (func $n5 (result i32)))
)
```

#### Kompakte Form 2: Namespace und Typ deduplizieren

Da jede importierte Funktion in diesem Beispiel den gleichen `type` hat, können wir auch diesen deduplizieren. In der zweiten Form wird jeder Wert wie zuvor nach dem `item`-Schlüsselwort aufgenommen, aber wir geben den `type` nur einmal an, in einer eigenen Zeile am Ende der `item`-Zeilen.

```wat
(import "importNums"
  (item "num1")
  (item "num3")
  (item "num5")
  (func (result i32))
)
```

Es ist wichtig zu beachten, dass Sie in der zweiten Form keine Namensbezeichner für die verschiedenen Werte im Textformat angeben können, daher müssen Sie Indexwerte verwenden, wenn Sie auf sie verweisen:

```wat
...

call 0
call 1
call 2

...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly-Definitionen](/de/docs/WebAssembly/Reference/Definitions)
- [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)
- [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)
- [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
