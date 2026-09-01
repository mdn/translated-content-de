---
title: "import: Wasm-Definition"
short-title: import
slug: WebAssembly/Reference/Definitions/import
l10n:
  sourceCommit: 0471f8e12d10a6fb1f301185823c8262dd18e3c6
---

Die **`import`**-[Definition](/de/docs/WebAssembly/Reference/Definitions) deklariert einen oder mehrere **Importe**. Jeder verweist auf einen Wert, der vom Host importiert wird (wie eine Funktion oder ein [memory](/de/docs/WebAssembly/Reference/Definitions/memory)) und macht ihn im Wasm-Modul nutzbar.

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
  num1: () => {
    return 1;
  },
  num3: () => {
    return 3;
  },
  num5: () => {
    return 5;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  importNums,
  console,
});
```

In diesem Beispiel definieren wir ein Importobjekt namens `importNums` in JavaScript. Es enthält drei Funktionen, die jeweils einen Integer zurückgeben. Wenn wir das Wasm-Modul über [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) instanziieren, importieren wir `importNums` und das eingebaute [`console`](/de/docs/Web/API/console)-Objekt.

Im Wasm-Modul importieren wir die `log()`-Funktion des `console`-Objekts mit der "vollständigen" Syntax und die `num1()`, `num3()` und `num5()`-Funktionen des `importNums`-Objekts mit der [kompakten Importsyntax](#kompakte_importabschnitte). Wir führen eine Funktion namens `main()` aus, die `num1()` und `num3()` aufruft und dann die Werte, die sie zurückgeben, addiert. Anschließend multipliziert sie das Ergebnis mit dem Wert, den `num5()` zurückgibt. Wir protokollieren dann das Endergebnis in der Konsole.

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
  - : Das `import`-Schlüsselwort. Muss immer zuerst eingefügt werden.
- `item`
  - : Das `item`-Schlüsselwort. Wird zu Beginn jeder Wertdefinitionszeile verwendet, wenn die [kompakte Importsyntax](#kompakte_importabschnitte) verwendet wird.
- `namespace`
  - : Der Name des Objekts im Host, das den zu importierenden Wert enthält.
- `value`
  - : Der Name des zu importierenden Wertes. Dies ist eine Eigenschaft innerhalb des Objekts, das durch den `namespace` identifiziert wird.
- `type`
  - : Der Typ des importierten Wertes, der optional einen Bezeichner enthalten kann, der verwendet werden kann, um den importierten Wert im restlichen Wasm-Modul zu referenzieren. Der `type` kann einer der folgenden externen Typen sein:
    - [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func)
      - : Deklariert eine Funktionssignatur.
    - [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
      - : Deklariert eine Wasm-Globale.
    - [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory)
      - : Deklariert ein Wasm-Speicher.
    - [`table`](/de/docs/WebAssembly/Reference/Definitions/table)
      - : Deklariert eine Wasm-Tabelle.
    - [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)
      - : Deklariert ein Wasm-Tag.

## Beschreibung

Wenn Sie Werte, die im Host definiert sind, in einem Wasm-Modul verwenden möchten, können Sie sie über `import`-Definitionen verfügbar machen.

Zum Beispiel zeigt das folgende Snippet, wie wir eine Funktion und ein [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) in JavaScript definieren und sie auswählen, um importiert zu werden, wenn ein Wasm-Modul instanziiert wird:

```js
const importObj = {
  myFunc: () => {
    return 42;
  },
  myGlobal: new WebAssembly.Global({ value: "i32", mutable: true }, 0),
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), importObj)
  .then((obj) => { ... });
```

Im Wasm-Modul würden wir die Importe folgendermaßen definieren:

```wat
(import "importObj" "myFunc" (func (result i32)))
(import "importObj" "myGlobal" (global $myglobal (mut i32)))
```

Sie können so viele `import`-Anweisungen in ein Modul einfügen, wie benötigt. Die importierten Werte können dann auf die gleiche Weise verwendet werden wie direkt im Modul definierte Werte. Zum Beispiel:

```wat
...

global.get $myglobal
call 0

...
```

Wenn dem importierten Wert ein Namensbezeichner gegeben wird (wie bei dem `global`-Wert im vorherigen Beispiel), kann er mittels seines Namens oder Indexwertes referenziert werden. Wenn er keinen Namensbezeichner hat (wie der `func`-Wert im vorherigen Beispiel), kann er nur mittels seines Indexwertes referenziert werden. Beachten Sie, dass Namensbezeichner in der Textformat-Syntax lediglich syntaktischer Zucker sind. Sobald das Modul kompiliert ist, wird es die Indexwerte im Hintergrund verwenden.

Importierte und definierte Elemente verwenden den gleichen Indexraum. Im nächsten Snippet zeigen wir eine importierte Tabelle, gefolgt von einer definierten Tabelle:

```wat
(import "importObj" "myTable" (table $table1 1 10 funcref))
(table $table2 2 8 externref)
```

In diesem Fall erscheint die importierte Tabelle zuerst, sodass sie bei Index 0 verfügbar ist. Die definierte Tabelle erscheint als zweites, sodass sie bei Index 1 verfügbar ist.

### Importtypen

Sie können folgende externe Typen in ein Wasm-Modul importieren.

#### Funktion

Beim Importieren einer Funktion ist das `type`-Feld ein [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func):

```wat
(import "importObj" "myFunc" (func $myfunc (param i32) (result i32)))
```

oder

```wat
(type $myfuncType (func (param i32) (result i32)))
(import "importObj" "myFunc" (func $myfunc (type $myfuncType)))
```

Dies beinhaltet:

- Einen optionalen Funktionsbezeichner
- Eine Liste von Parametertypen
- Eine Liste von Ergebnisdatentypen

#### Global

Beim Importieren einer Globalen ist das `type`-Feld ein [`global`](/de/docs/WebAssembly/Reference/Definitions/global):

```wat
(import "importObj" "myGlobal" (global $myglobal i32))
```

oder

```wat
(import "importObj" "myGlobal" (global $myglobal (mut i32)))
```

Dies beinhaltet:

- Einen optionalen globalen Bezeichner
- Den [Datentyp](/de/docs/WebAssembly/Reference/Definitions/global#data_type) der Globalen, vorangestellt durch das `mut`-Flag, wenn die Global veränderlich ist.

#### Speicher

Beim Importieren eines Speichers ist das `type`-Feld ein [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory):

```wat
(import "importObj" "mem" (memory $mymem 1 10 shared))
```

Dies beinhaltet:

- Einen optionalen Speicherbezeichner
- Eine Anfangsgröße, in Einheiten von 64KiB-Seiten
- Eine maximale Größe, erforderlich, wenn Sie `shared` angeben
- Das `shared`-Schlüsselwort, das einen geteilten Speicher bezeichnet

#### Tabelle

Beim Importieren einer Tabelle ist das `type`-Feld eine [`table`](/de/docs/WebAssembly/Reference/Definitions/table):

```wat
(import "importObj" "myTable" (table $mytable 1 10 funcref))
```

Dies beinhaltet:

- Einen optionalen Tabellenbezeichner
- Eine Anfangsgröße
- Eine optionale maximale Größe
- Den [Werttyp](/de/docs/WebAssembly/Reference/Definitions/elem#value_type), der von der Tabelle gespeichert wird

#### Tag

Beim Importieren eines Tags ist das `type`-Feld ein [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag):

```wat
(import "importObj" "tag" (tag $mytag (param i32)))
```

Dies beinhaltet:

- Einen optionalen Tag-Bezeichner
- Einen oder mehrere Werte, die die Parameter des dargestellten Ausnahme-Typs und deren Typen spezifizieren (jeder wird mit dem Schlüsselwort `param` und jedem [Wasm-Typ](/de/docs/WebAssembly/Reference/Value_types) geschrieben)

### Kompakte Importabschnitte

Ein Problem bei der "vollständigen" `import`-Syntax ist, dass Sie den Namespace und den Wert für jeden Import spezifizieren müssen. Dies ist bei trivialen Beispielen nicht so problematisch, aber für größere Wasm-Module haben Sie normalerweise eine kleine Anzahl von Namespaces und eine größere Anzahl von Werten, die importiert werden sollen.

Zum Beispiel:

```wat
(import "importObj" "func1" (func $f1 (result i32)))
(import "importObj" "func2" (func $f2 (result i32)))
(import "importObj" "func3" (func $f3 (result i32)))
(import "importObj" "func4" (func $f4 (result i32)))
...
```

In solchen Beispielen erzeugt das Wiederholen des Namespace und möglicherweise auch des Typs eine unnötige Redundanz in der binären Kodierung des Moduls (und auch im Textformat).

Um diese Redundanz zu verringern und die Größe der Binärdatei zu reduzieren, können Sie die kompakte Importsyntax verwenden. Es gibt zwei Formen, eine, die den Namespace dedupliziert, und eine, die sowohl den Namespace als auch den Typ dedupliziert. Betrachten Sie das folgende Beispiel:

```wat
(import "importNums" "num1" (func $n1 (result i32)))
(import "importNums" "num3" (func $n3 (result i32)))
(import "importNums" "num5" (func $n5 (result i32)))
```

Die folgenden Abschnitte zeigen, wie diese Importe mit den kompakten Formen neu geschrieben werden.

> [!NOTE]
> Das kompakte Importtextformat bietet einen Hinweis für Wasm-Tools, eine bestimmte kompakte Importbinärkodierung zu verwenden. Es gibt nichts, was die Tools daran hindert, eines der kompakten Textformate zu parsen und das nicht-kompakte Binärformat zu erzeugen.

#### Kompakte Form 1: Namespace deduplizieren

In der ersten Form wird der Namespace einmal nach dem `import`-Schlüsselwort geschrieben. Danach schreiben Sie jeden Wert innerhalb dieses Namespace in eine eigene Zeile, gefolgt von dem Typ des Wertes wie zuvor. Das Textformat enthält das Schlüsselwort `item` am Anfang jeder Wertzeile.

```wat
(import "importNums"
  (item "num1" (func $n1 (result i32)))
  (item "num3" (func $n3 (result i32)))
  (item "num5" (func $n5 (result i32)))
)
```

#### Kompakte Form 2: Namespace und Typ deduplizieren

Da jede importierte Funktion in diesem Beispiel den gleichen `type` hat, können wir diesen ebenfalls deduplizieren. In der zweiten Form wird jeder Wert wie zuvor nach dem `item`-Schlüsselwort eingefügt, aber wir fügen den `type` nur einmal in einer eigenen Zeile am Ende der `item`-Zeilen ein.

```wat
(import "importNums"
  (item "num1")
  (item "num3")
  (item "num5")
  (func (result i32))
)
```

Es ist wichtig zu beachten, dass in der zweiten Form keine Namensbezeichner für die verschiedenen Werte im Textformat angegeben werden können, daher müssen Sie Indexwerte verwenden, wenn Sie auf sie verweisen:

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
