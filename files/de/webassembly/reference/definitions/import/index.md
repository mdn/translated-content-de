---
title: "import: Wasm-Definition"
short-title: import
slug: WebAssembly/Reference/Definitions/import
l10n:
  sourceCommit: ec9b3dc8149f74755e35871e178861f9546bbc5d
---

Die **`import`**-[Definition](/de/docs/WebAssembly/Reference/Definitions) deklariert ein oder mehrere **Imports**. Jeder verweist auf einen Wert, der vom Host importiert wird (wie eine Funktion oder [Memory](/de/docs/WebAssembly/Reference/Definitions/memory)) und macht ihn für die Verwendung im Wasm-Modul verfügbar.

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

In diesem Beispiel definieren wir ein Importobjekt namens `importNums` in JavaScript. Es enthält drei Funktionen, von denen jede eine Ganzzahl zurückgibt. Wenn wir das Wasm-Modul über [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) instanziieren, importieren wir `importNums` und das eingebaute [`console`](/de/docs/Web/API/console)-Objekt.

Im Wasm-Modul importieren wir die `log()`-Funktion des `console`-Objekts mit der "vollständigen" Syntax und die Funktionen `num1()`, `num3()` und `num5()` des `importNums`-Objekts mit der [kompakten Import-Syntax](#kompakte_import-bereiche). Wir führen eine Funktion namens `main()` aus, die `num1()` und `num3()` ausführt und dann die zurückgegebenen Werte addiert. Anschließend multipliziert sie das Ergebnis mit dem Wert, der von `num5()` zurückgegeben wird. Wir loggen dann das Endergebnis in die Konsole.

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
  - : Das `item`-Schlüsselwort. Wird zu Beginn jeder Wertdefinition verwendet, wenn die [kompakte Import-Syntax](#kompakte_import-bereiche) genutzt wird.
- `namespace`
  - : Der Name des Objekts im Host, das den Wert enthält, der importiert wird.
- `value`
  - : Der Name des Wertes, der importiert wird. Dies ist eine Eigenschaft innerhalb des Objekts, das durch die `namespace` identifiziert wird.
- `type`
  - : Der Typ des importierten Wertes, der optional einen Bezeichner enthalten kann, der verwendet werden kann, um den importierten Wert im Rest des Wasm-Moduls zu referenzieren. Der `type` kann einer der folgenden externen Typen sein:
    - [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func)
      - : Deklariert eine Funktionssignatur.
    - [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
      - : Deklariert eine Wasm-Global.
    - [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory)
      - : Deklariert eine Wasm-Memory.
    - [`table`](/de/docs/WebAssembly/Reference/Definitions/table)
      - : Deklariert eine Wasm-Tabelle.
    - [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)
      - : Deklariert ein Wasm-Tag.

## Beschreibung

Wenn Sie Werte, die im Host definiert sind, in einem Wasm-Modul verwenden möchten, können Sie diese über `import`-Definitionen verfügbar machen.

Zum Beispiel zeigt das folgende Snippet, wie wir eine Funktion und eine [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) in JavaScript definieren und sie auswählen, um importiert zu werden, wenn ein Wasm-Modul instanziiert wird:

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

Im Wasm-Modul würden wir die Imports so definieren:

```wat
(import "importObj" "myFunc" (func (result i32)))
(import "importObj" "myGlobal" (global $myglobal (mut i32)))
```

Sie können so viele `import`-Anweisungen in einem Modul enthalten, wie erforderlich. Die importierten Werte können dann genauso verwendet werden wie Werte, die direkt im Modul definiert sind. Zum Beispiel:

```wat
...

global.get $myglobal
call 0

...
```

Wenn der importierte Wert einen Namensbezeichner hat (wie im Beispiel mit dem `global`-Wert), kann er mit seinem Namen oder Indexwert referenziert werden. Wenn er keinen Namensbezeichner hat (wie im Beispiel mit dem `func`-Wert), kann er nur mit seinem Indexwert referenziert werden. Beachten Sie, dass Namensbezeichner syntaktischer Zucker für das Textformat sind. Sobald das Modul kompiliert ist, werden hinter den Kulissen die Indexwerte verwendet.

Importierte und definierte Elemente verwenden denselben Indexraum. Im nächsten Snippet zeigen wir eine importierte Tabelle gefolgt von einer definierten Tabelle:

```wat
(import "importObj" "myTable" (table $table1 1 10 funcref))
(table $table2 2 8 externref)
```

In diesem Fall erscheint die importierte Tabelle zuerst, daher ist sie bei Index 0 verfügbar. Die definierte Tabelle erscheint als zweite, daher ist sie bei Index 1 verfügbar.

### Importtypen

Sie können die folgenden externen Typen in ein Wasm-Modul importieren.

#### Funktion

Beim Importieren einer Funktion ist das `type`-Feld eine [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func):

```wat
(import "importObj" "myFunc" (func $myfunc (param i32) (result i32)))
```

oder

```wat
(type $myfuncType (func (param i32) (result i32)))
(import "importObj" "myFunc" (func $myfunc (type $myfuncType)))
```

Dies umfasst:

- Einen optionalen Funktionsbezeichner
- Eine Liste von Parametertypen
- Eine Liste von Ergebnistypen

#### Global

Beim Importieren einer Global ist das `type`-Feld eine [`global`](/de/docs/WebAssembly/Reference/Definitions/global):

```wat
(import "importObj" "myGlobal" (global $myglobal i32))
```

oder

```wat
(import "importObj" "myGlobal" (global $myglobal (mut i32)))
```

Dies umfasst:

- Einen optionalen Global-Bezeichner
- Den [Datentyp](/de/docs/WebAssembly/Reference/Definitions/global#data_type) des Globals, vorangestellt mit dem `mut`-Flag, wenn das Global veränderlich ist.

#### Speicher

Beim Importieren eines Speichers ist das `type`-Feld eine [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory):

```wat
(import "importObj" "mem" (memory $mymem 1 10 shared))
```

Dies umfasst:

- Einen optionalen Speicherbezeichner
- Eine anfängliche Größe in Einheiten von 64KiB-Seiten
- Eine maximale Größe, erforderlich, wenn Sie `shared` angeben
- Das Schlüsselwort `shared`, das auf einen gemeinsamen Speicher hinweist

#### Tabelle

Beim Importieren einer Tabelle ist das `type`-Feld eine [`table`](/de/docs/WebAssembly/Reference/Definitions/table):

```wat
(import "importObj" "myTable" (table $mytable 1 10 funcref))
```

Dies umfasst:

- Einen optionalen Tabellenbezeichner
- Eine anfängliche Größe
- Eine optionale maximale Größe
- Den [Wertetyp](/de/docs/WebAssembly/Reference/Definitions/elem#value_type), der von der Tabelle gespeichert wird

#### Tag

Beim Importieren eines Tags ist das `type`-Feld eine [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag):

```wat
(import "importObj" "tag" (tag $mytag (param i32)))
```

Dies umfasst:

- Einen optionalen Tag-Bezeichner
- Einen oder mehrere Werte, die die Parameter des dargestellten Ausnahmetyps und deren Typen angeben (jede wird mit dem Schlüsselwort `param` gefolgt von einem beliebigen [Wasm-Typ](/de/docs/WebAssembly/Reference/Value_types) geschrieben)

### Kompakte Import-Bereiche

Ein Problem mit der "vollständigen" `import`-Syntax ist, dass Sie den Namespace und den Wert für jeden Import angeben müssen. Dies ist bei trivialen Beispielen kein großes Problem; für größere Wasm-Module haben Sie jedoch normalerweise eine kleine Anzahl von Namespaces und eine größere Anzahl von zu importierenden Werten.

Zum Beispiel:

```wat
(import "importObj" "func1" (func $f1 (result i32)))
(import "importObj" "func2" (func $f2 (result i32)))
(import "importObj" "func3" (func $f3 (result i32)))
(import "importObj" "func4" (func $f4 (result i32)))
...
```

In solchen Beispielen führt das Wiederholen des Namespaces und möglicherweise auch des Typs zu einer verschwenderischen Redundanz in der binären Kodierung des Moduls (und auch im Textformat).

Um diese Redundanz zu verringern und die Größe der Binärdatei zu reduzieren, können Sie die kompakte Import-Syntax verwenden. Es gibt zwei Formen, eine, die den Namespace dedupliziert, und eine, die sowohl den Namespace als auch den Typ dedupliziert. Betrachten wir das folgende Beispiel:

```wat
(import "importNums" "num1" (func $n1 (result i32)))
(import "importNums" "num3" (func $n3 (result i32)))
(import "importNums" "num5" (func $n5 (result i32)))
```

Die folgenden Abschnitte zeigen, wie Sie diese Importe mit den kompakten Formen umschreiben.

> [!NOTE]
> Das kompakte Import-Textformat bietet einen Hinweis für Wasm-Tools, eine gegebene kompakte Import-binäre Kodierung zu verwenden. Es gibt nichts, was die Tools daran hindert, eines der kompakten Textformate zu parsen und das nicht-kompakte Binärformat auszugeben.

#### Kompakte Form 1: Namespace deduplizieren

In der ersten Form wird der Namespace einmal nach dem `import`-Schlüsselwort geschrieben. Sie schreiben dann jeden Wert innerhalb dieses Namespace in einer eigenen Zeile, gefolgt vom Werttyp wie zuvor. Das Textformat enthält das Schlüsselwort `item` am Anfang jeder Wertzeile.

```wat
(import "importNums"
  (item "num1" (func $n1 (result i32)))
  (item "num3" (func $n3 (result i32)))
  (item "num5" (func $n5 (result i32)))
)
```

#### Kompakte Form 2: Namespace und Typ deduplizieren

Da jede importierte Funktion in diesem Beispiel denselben `type` hat, können wir diesen auch deduplizieren. In der zweiten Form ist jeder Wert wie zuvor nach dem `item`-Schlüsselwort enthalten, aber wir geben den `type` nur einmal an, in einer eigenen Zeile am Ende der `item`-Zeilen.

```wat
(import "importNums"
  (item "num1")
  (item "num3")
  (item "num5")
  (func (result i32))
)
```

Wichtig ist, dass Sie in der zweiten Form keine Namensbezeichner für die verschiedenen Werte im Textformat angeben können, daher müssen Sie Indexwerte verwenden, wenn Sie sich auf sie beziehen:

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
