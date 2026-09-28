---
title: Das WebAssembly-Textformat verstehen
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Damit Menschen WebAssembly lesen und bearbeiten können, gibt es eine textuelle Darstellung des binären Wasm-Formats. Sie ist eine Zwischenform, die für die Anzeige in Texteditoren, Browser-Entwicklertools und ähnlichen Umgebungen gedacht ist. Dieser Artikel erklärt die Syntax des Textformats und seinen Zusammenhang mit dem zugrunde liegenden Bytecode sowie den Wrapper-Objekten, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Wenn Sie als Webentwickler lediglich ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchten, benötigen Sie diese Details möglicherweise nicht (siehe [Die WebAssembly-JavaScript-API verwenden](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)). Sie sind eher hilfreich, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren, oder einen eigenen WebAssembly-Compiler entwickeln.

## S-Ausdrücke

Sowohl im binären als auch im textuellen Format ist ein Modul die grundlegende Codeeinheit von WebAssembly. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein altes, einfaches Textformat zur Darstellung von Bäumen. Ein Modul lässt sich daher als Baum von Knoten auffassen, die seine Struktur und seinen Code beschreiben. Anders als der abstrakte Syntaxbaum einer Programmiersprache ist der WebAssembly-Baum jedoch recht flach und besteht überwiegend aus Listen von Anweisungen.

Sehen wir uns zunächst an, wie ein S-Ausdruck aussieht. Jeder Knoten des Baums steht in einem Klammerpaar — `( ... )`. Die erste Bezeichnung innerhalb der Klammern gibt den Knotentyp an. Darauf folgt eine durch Leerzeichen getrennte Liste von Attributen oder untergeordneten Knoten. Der WebAssembly-S-Ausdruck

```wat
(module (memory 1) (func))
```

stellt also einen Baum mit dem Wurzelknoten „module“ und zwei untergeordneten Knoten dar: einem „memory“-Knoten mit dem Attribut „1“ und einem „func“-Knoten. Was diese Knoten bedeuten, sehen wir gleich.

### Das einfachste Modul

Beginnen wir mit dem kürzestmöglichen Wasm-Modul.

```wat
(module)
```

Dieses Modul ist leer, aber dennoch gültig.

Wenn wir das Modul nun in das Binärformat umwandeln (siehe [WebAssembly-Textformat in Wasm umwandeln](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir lediglich den 8 Byte großen Modul-Header, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Ihrem Modul Funktionalität hinzufügen

Das ist noch nicht besonders interessant. Fügen wir dem Modul ausführbaren Code hinzu.

Der gesamte Code eines WebAssembly-Moduls ist in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** legt fest, welche Eingaben die Funktion annimmt (Parameter) und welche Ausgaben sie liefert (Rückgabewerte).
- Die **lokalen Variablen** ähneln Variablen in JavaScript, ihre Typen werden jedoch ausdrücklich deklariert.
- Der **Funktionskörper** ist eine lineare Liste von Low-Level-Anweisungen.

Das ähnelt Funktionen in anderen Sprachen, auch wenn es etwas anders aussieht.

## Signaturen und Parameter

Die Signatur besteht aus einer Folge von Parametertyp-Deklarationen und anschließenden Rückgabetyp-Deklarationen. Dabei ist Folgendes zu beachten:

- Fehlt ein `(result)`, gibt die Funktion nichts zurück.
- In der hier beschriebenen Version kann es höchstens einen Rückgabetyp geben. [Künftig soll diese Beschränkung entfallen](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md).

Der Typ jedes Parameters wird ausdrücklich deklariert. Wasm kennt [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen) und [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

Ein einzelner Parameter wird als `(param i32)` und ein Rückgabetyp als `(result i32)` geschrieben. Eine binäre Funktion, die zwei 32-Bit-Ganzzahlen annimmt und eine 64-Bit-Gleitkommazahl zurückgibt, sähe also so aus:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die lokalen Variablen mit ihrem Typ aufgeführt, beispielsweise `(local i32)`. Parameter sind im Grunde lokale Variablen, die mit dem Wert des entsprechenden Arguments initialisiert werden, das der Aufrufer übergibt.

## Lokale Variablen und Parameter lesen und setzen

Der Funktionskörper kann lokale Variablen und Parameter mit den Anweisungen `local.get` und `local.set` lesen und setzen.

Die Befehle `local.get` und `local.set` bezeichnen den betreffenden Eintrag über seinen numerischen Index: Zuerst kommen die Parameter in der Reihenfolge ihrer Deklaration, danach die lokalen Variablen in der Reihenfolge ihrer Deklaration. Gegeben sei folgende Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2
)
```

Die Anweisung `local.get 0` würde den i32-Parameter lesen, `local.get 1` den f32-Parameter und `local.get 2` die lokale f64-Variable.

Numerische Indizes zur Bezeichnung von Einträgen können allerdings verwirrend und umständlich sein. Deshalb können Sie Parameter, lokale Variablen und die meisten anderen Einträge benennen, indem Sie unmittelbar vor der Typdeklaration einen Namen mit vorangestelltem Dollarzeichen (`$`) angeben.

Unsere vorherige Signatur ließe sich also so umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Anschließend könnten Sie `local.get $p1` statt `local.get 0` schreiben und so weiter. (Bei der Umwandlung dieses Textes in das Binärformat enthält dieses allerdings nur die Ganzzahl.)

## Stackmaschinen

Bevor wir einen Funktionskörper schreiben, müssen wir noch ein wichtiges Konzept besprechen: **Stackmaschinen**. Obwohl der Browser Wasm in eine effizientere Form kompiliert, wird seine Ausführung anhand einer Stackmaschine definiert. Die Grundidee ist, dass jede Art von Anweisung eine bestimmte Anzahl von `i32`-, `i64`-, `f32`- oder `f64`-Werten auf einen Stack legt und/oder von ihm entfernt.

Beispielsweise legt `local.get` den Wert der gelesenen lokalen Variable auf den Stack. `i32.add` entfernt zwei `i32`-Werte vom Stack (es verwendet implizit die beiden zuletzt darauf abgelegten Werte), berechnet ihre Summe (modulo 2^32) und legt den resultierenden i32-Wert auf den Stack.

Beim Aufruf einer Funktion ist der Stack zunächst leer. Während die Anweisungen des Funktionskörpers ausgeführt werden, wird er nach und nach gefüllt und wieder geleert. Nach der Ausführung der folgenden Funktion beispielsweise:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add
)
```

enthält der Stack genau einen `i32`-Wert: das Ergebnis des Ausdrucks (`$p + $p`), den `i32.add` verarbeitet. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stack verbleibt.

Die Validierungsregeln von WebAssembly stellen sicher, dass der Stack genau zur Deklaration passt: Wenn Sie `(result f32)` deklarieren, muss der Stack am Ende genau einen `f32`-Wert enthalten. Ist kein Rückgabetyp angegeben, muss der Stack leer sein.

## Unser erster Funktionskörper

Der Funktionskörper ist eine Liste von Anweisungen, die beim Aufruf der Funktion ausgeführt werden. Mit dem bisher Gelernten können wir nun endlich ein Modul mit einer eigenen einfachen Funktion definieren:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add
  )
)
```

Diese Funktion nimmt zwei Parameter entgegen, addiert sie und gibt das Ergebnis zurück.

Funktionskörper können noch weitere Dinge enthalten; vorerst beginnen wir jedoch mit einer einfachen Funktion. Im weiteren Verlauf werden Sie weitere Beispiele sehen. Eine vollständige Liste der verfügbaren Opcodes finden Sie in der [Semantik-Referenz von webassembly.org](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Allein kann unsere Funktion noch nicht viel bewirken — wir müssen sie aufrufen. Wie geht das? Wie bei einem ES-Modul müssen Wasm-Funktionen durch eine `export`-Anweisung innerhalb des Moduls ausdrücklich exportiert werden.

Wie lokale Variablen werden Funktionen standardmäßig über einen Index identifiziert, können aber der Einfachheit halber benannt werden. Beginnen wir damit: Direkt nach dem Schlüsselwort `func` fügen wir einen Namen mit vorangestelltem Dollarzeichen hinzu:

```wat
(func $add …)
```

Nun brauchen wir eine Exportdeklaration. Sie sieht so aus:

```wat
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript verfügbar ist. `$add` bezeichnet dagegen die WebAssembly-Funktion innerhalb des Moduls, die exportiert wird.

Unser fertiges Modul sieht damit vorerst so aus:

```wat
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add
  )
  (export "add" (func $add))
)
```

Wenn Sie das Beispiel nachvollziehen möchten, speichern Sie das obige Modul in einer Datei namens `add.wat` und wandeln Sie diese mit wabt in eine Binärdatei namens `add.wasm` um (Einzelheiten finden Sie unter [WebAssembly-Textformat in Wasm umwandeln](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)).

Als Nächstes instanziieren wir die Binärdatei asynchron (siehe [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Guides/Loading_and_running)) und führen unsere Funktion `add` in JavaScript aus. `add()` ist nun über die Eigenschaft [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) der Instanz zugänglich:

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Dieses Beispiel finden Sie auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Weitere Informationen zur Instanziierungsfunktion finden Sie unter [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

## Grundlagen vertiefen

Nachdem wir die Grundlagen behandelt haben, sehen wir uns einige fortgeschrittenere Funktionen an.

### Funktionen aus anderen Funktionen desselben Moduls aufrufen

Die Anweisung `call` ruft eine einzelne Funktion anhand ihres Index oder Namens auf. Das folgende Modul enthält beispielsweise zwei Funktionen: Eine gibt den Wert `42` zurück, die andere das Ergebnis des Aufrufs der ersten Funktion plus eins:

```wat
(module
  (func $getAnswer (result i32)
    i32.const 42
  )
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add
  )
)
```

> [!NOTE]
> `i32.const` definiert eine 32-Bit-Ganzzahl und legt sie auf den Stack. Sie können `i32` durch einen anderen verfügbaren Typ ersetzen und den Wert der Konstante nach Belieben ändern (hier haben wir ihn auf `42` gesetzt).

In diesem Beispiel sehen Sie unmittelbar nach der `func`-Anweisung der zweiten Funktion einen Abschnitt `(export "getAnswerPlus1")`. Dies ist eine Kurzform, um die Funktion zu exportieren und gleichzeitig den Namen festzulegen, unter dem sie exportiert wird.

Funktional entspricht dies einer separaten Exportdeklaration außerhalb der Funktion an anderer Stelle im Modul, wie wir sie zuvor verwendet haben, beispielsweise:

```wat
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code zum Aufruf unseres Moduls sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Funktionen aus JavaScript importieren

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft. Aber wie ruft WebAssembly JavaScript-Funktionen auf? WebAssembly hat keine integrierten Kenntnisse über JavaScript, bietet aber einen allgemeinen Mechanismus zum Importieren von Funktionen, der sowohl JavaScript- als auch Wasm-Funktionen unterstützt. Sehen wir uns ein Beispiel an:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log
  )
)
```

WebAssembly verwendet einen zweistufigen Namensraum. Die Importanweisung importiert hier also die Funktion `log` aus dem Modul `console`. Außerdem sehen Sie, dass die exportierte Funktion `logIt` die importierte Funktion mithilfe der zuvor vorgestellten Anweisung `call` aufruft.

Importierte Funktionen verhalten sich wie normale Funktionen: Sie haben eine Signatur, die bei der WebAssembly-Validierung statisch geprüft wird, erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben kein Konzept einer Signatur. Daher kann jede JavaScript-Funktion übergeben werden, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt mit den entsprechenden Eigenschaften übergeben.

Der obige Import erfordert ein Objekt — nennen wir es `importObject` — bei dem `importObject.console.log` eine JavaScript-Funktion ist.

In JavaScript sähe das so aus:

```js
const importObject = {
  console: {
    log(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("logger.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.logIt();
  },
);
```

> [!NOTE]
> Dieses Beispiel finden Sie auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Globale Variablen in WebAssembly deklarieren

WebAssembly kann Instanzen globaler Variablen erstellen. Sie sind sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen hinweg importier- und exportierbar. Das ist sehr nützlich, weil dadurch mehrere Module dynamisch verknüpft werden können.

Im WebAssembly-Textformat sieht das etwa so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repository sowie [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein interaktives JavaScript-Beispiel):

```wat
(module
  (global $g (import "js" "global") (mut i32))
  (func (export "getGlobal") (result i32)
    (global.get $g)
  )
  (func (export "incGlobal")
    (global.set $g (i32.add (global.get $g) (i32.const 1)))
  )
)
```

Das ähnelt den bisherigen Beispielen. Allerdings geben wir einen globalen Wert mit dem Schlüsselwort `global` an. Soll der Wert veränderbar sein, geben wir zusätzlich zum Datentyp das Schlüsselwort `mut` an.

Um einen entsprechenden Wert in JavaScript zu erstellen, verwenden Sie den Konstruktor [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global):

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die bisherigen Beispiele zeigen, wie Zahlen in Assembly-Code verarbeitet werden: Sie werden auf den [Stack](#stackmaschinen) gelegt, für Berechnungen verwendet, und anschließend wird das Ergebnis durch den Aufruf einer JavaScript-Methode protokolliert.

Für Zeichenfolgen und andere komplexere Datentypen verwenden wir `memory`. Dieser Speicher kann sowohl in WebAssembly als auch in JavaScript erstellt und zwischen beiden Umgebungen geteilt werden. Neuere WebAssembly-Versionen können außerdem [Referenztypen](#referenztypen) verwenden.

In WebAssembly ist `memory` ein großer, zusammenhängender und veränderbarer Bereich von Rohdaten-Bytes, der mit der Zeit wachsen kann (siehe [linear memory](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly bietet [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/store), um Bytes zwischen dem Stack und einer beliebigen Stelle im Speicher zu lesen und zu schreiben.

Aus JavaScript-Sicht verhält sich der Speicher so, als läge er in einem einzigen großen, vergrößerbaren {{jsxref("ArrayBuffer")}}.
JavaScript kann über die Schnittstelle [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Instanzen linearen WebAssembly-Speichers erstellen und sie an eine Speicherinstanz exportieren. Es kann auch auf eine Speicherinstanz zugreifen, die im WebAssembly-Code erstellt und exportiert wurde. JavaScript-`Memory`-Instanzen besitzen einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher verweist.

Speicherinstanzen können außerdem wachsen, beispielsweise über die JavaScript-Methode [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) oder über [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/grow) in WebAssembly.
Da sich die Größe von `ArrayBuffer`-Objekten nicht ändern lässt, wird der bisherige `ArrayBuffer` abgekoppelt und ein neuer `ArrayBuffer` erstellt, der auf den größeren Speicher verweist.

Beim Erstellen des Speichers müssen Sie eine Anfangsgröße festlegen. Optional können Sie auch eine maximale Größe angeben, bis zu der der Speicher wachsen darf.
WebAssembly versucht, die maximale Größe zu reservieren, sofern sie angegeben wurde. Gelingt dies, kann der Buffer später effizienter wachsen. Selbst wenn die maximale Größe zunächst nicht reserviert werden kann, ist ein späteres Wachstum möglicherweise dennoch möglich.
Die Methode schlägt nur dann fehl, wenn sie die _Anfangsgröße_ nicht zuweisen kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Wenn der Browser dies unterstützt, können Sie inzwischen [mehrere Speicher](#mehrere_speicher) verwenden.
> Code, der nicht mehrere Speicher verwendet, muss nicht geändert werden!

Um dieses Verhalten zu veranschaulichen, betrachten wir eine Zeichenfolge, die wir in unserem WebAssembly-Code verarbeiten möchten.
Eine Zeichenfolge ist lediglich eine Folge von Bytes an einer Stelle im linearen Speicher.
Angenommen, wir haben eine geeignete Bytefolge in den WebAssembly-Speicher geschrieben. Dann können wir die Zeichenfolge an JavaScript übergeben, indem wir den Speicher, den Offset der Zeichenfolge innerhalb des Speichers und ihre Länge bereitstellen.

Zunächst erstellen wir einen Speicher und teilen ihn zwischen WebAssembly und JavaScript.
WebAssembly bietet dabei viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und vom WebAssembly-Modul importieren lassen oder den Speicher im WebAssembly-Modul erstellen und nach JavaScript exportieren.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn anschließend in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit einer Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Anschließend instanziieren wir unser WebAssembly-Modul, hier „the_wasm_to_import.wasm“, mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und übergeben das Importobjekt:

```js
const memory = new WebAssembly.Memory({ initial: 1 });

const importObject = {
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(
  fetch("the_wasm_to_import.wasm"),
  importObject,
).then((obj) => {
  // Call exported functions ...
});
```

In unserer WebAssembly-Datei importieren wir diesen Speicher. Im WebAssembly-Textformat wird die `import`-Anweisung wie folgt geschrieben:

```wat
(import "js" "mem" (memory 1))
```

Der Speicher muss mit demselben zweistufigen Schlüssel importiert werden, der im `importObject` angegeben ist (`js.mem`).
Die `1` gibt an, dass der importierte Speicher mindestens eine Speicherseite umfassen muss (WebAssembly definiert eine Seite derzeit als 64 KB).

> [!NOTE]
> Da dies der erste in das WebAssembly-Modul importierte Speicher ist, hat er den Speicherindex `0`.
> Sie könnten diesen Speicher über seinen Index in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren. Da `0` jedoch der Standardindex ist, ist dies in Anwendungen mit nur einem Speicher nicht nötig.

Da wir nun eine gemeinsame Speicherinstanz haben, schreiben wir als Nächstes eine Zeichenfolge hinein.
Anschließend übergeben wir JavaScript Informationen über die Position und Länge der Zeichenfolge. Alternativ könnten wir ihre Länge in der Zeichenfolge selbst kodieren, aber die Übergabe der Länge ist einfacher umzusetzen.

Zuerst fügen wir unserem Speicher eine Zeichenfolge hinzu, in diesem Fall „Hi“.
Da uns der gesamte lineare Speicher zur Verfügung steht, können wir den Inhalt der Zeichenfolge mit einem `data`-Abschnitt direkt in den globalen Speicher schreiben.
Mit `data`-Abschnitten lässt sich beim Instanziieren eine Bytefolge an einem bestimmten Offset schreiben. Sie ähneln den `.data`-Abschnitten nativer ausführbarer Formate.
Hier schreiben wir die Daten bei Offset 0 in den Standardspeicher, den wir nicht ausdrücklich angeben müssen:

```wat
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Syntax mit doppeltem Semikolon (`;;`) kennzeichnet Kommentare in WebAssembly-Dateien.
> Hier verwenden wir sie lediglich als Platzhalter für weiteren Code.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus JavaScript, mit der wir die Zeichenfolge in der Konsole ausgeben.
Sie muss im `importObject`, das zur Instanziierung des WebAssembly-Moduls verwendet wird, `console.log` zugeordnet sein.
Die Funktion heißt in WebAssembly `$log` und nimmt `i32`-Parameter für den Offset und die Länge der Zeichenfolge im Speicher entgegen.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte Funktion `$log` mit dem Offset und der Länge der Zeichenfolge im Speicher auf (`0` und `2`).
Sie wird aus dem Modul exportiert, damit JavaScript sie aufrufen kann.

Unser vollständiges WebAssembly-Modul sieht im Textformat so aus:

```wat
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; pass offset 0 to log
    i32.const 2  ;; pass length 2 to log
    call $log
  )
)
```

Auf der JavaScript-Seite müssen wir die Funktion zur Konsolenausgabe definieren, sie an WebAssembly übergeben und anschließend die exportierte Methode `writeHi()` aufrufen.
Der vollständige Code ist unten dargestellt:

```js
const memory = new WebAssembly.Memory({ initial: 1 });

// Logging function ($log) called from WebAssembly
function consoleLogString(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder("utf8").decode(bytes);
  console.log(string);
}

const importObject = {
  console: { log: consoleLogString },
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(fetch("logger2.wasm"), importObject).then(
  (obj) => {
    // Call the function exported from logger2.wasm
    obj.instance.exports.writeHi();
  },
);
```

Beachten Sie, dass die Funktion `consoleLogString()` dem `importObject` über die Eigenschaft `console.log` übergeben und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt mit einem `Uint8Array` eine Ansicht auf die Zeichenfolge im gemeinsamen Speicher, beginnend beim übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden anschließend mithilfe der [TextDecoder-API](/de/docs/Web/API/TextDecoder) aus UTF-8 zu einer Zeichenfolge dekodiert. Hier geben wir `utf8` an, es werden aber auch viele andere Kodierungen unterstützt.
Anschließend wird die Zeichenfolge mit `console.log()` in der Konsole ausgegeben.

Zuletzt rufen wir die exportierte Funktion `writeHi()` auf, nachdem das Objekt instanziiert wurde.
Wenn Sie den Code ausführen, erscheint in der Konsole der Text „Hi“.

> [!NOTE]
> Den vollständigen Quellcode finden Sie auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen die Verwendung mehrerer Speicherobjekte in WebAssembly und JavaScript. Dies ist mit Code kompatibel, der für Implementierungen mit nur einem Speicher geschrieben wurde.
Mehrere Speicher können hilfreich sein, um Daten zu trennen, die anders behandelt werden sollen als übrige Anwendungsdaten — beispielsweise öffentliche und private Daten, dauerhaft zu speichernde Daten oder Daten, die zwischen Threads geteilt werden müssen.
Sie können auch für sehr große Anwendungen nützlich sein, die über den 32-Bit-Adressraum von Wasm hinauswachsen müssen, sowie für weitere Zwecke.

Speicher, die WebAssembly-Code zur Verfügung stehen — unabhängig davon, ob sie direkt deklariert oder importiert wurden — erhalten fortlaufend vergebene Speicherindizes, beginnend bei null. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), etwa [`load`](/de/docs/WebAssembly/Reference/Memory/load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/store), können einen bestimmten Speicher über seinen Index referenzieren. So können Sie steuern, mit welchem Speicher Sie arbeiten.

Speicheranweisungen verwenden standardmäßig den Index 0, also den Index des ersten zur WebAssembly-Instanz hinzugefügten Speichers.
Wenn Sie nur einen Speicher hinzufügen, muss Ihr Code folglich keinen Index angeben.

Um dies genauer zu erklären, erweitern wir das vorherige Beispiel: Wir schreiben Zeichenfolgen in drei verschiedene Speicher und geben die Ergebnisse aus.
Der folgende Code zeigt, wie wir zunächst zwei Speicherinstanzen nach demselben Verfahren wie im vorherigen Beispiel importieren.
Um zu zeigen, wie Sie Speicher innerhalb eines WebAssembly-Moduls erstellen können, erzeugen wir außerdem im Modul eine dritte Speicherinstanz namens `$mem2` und _exportieren_ sie.

> [!NOTE]
> Wenn Sie [wabt](https://github.com/WebAssembly/wabt) (z. B. `wat2wasm`) verwenden, um das Textformat in Wasm umzuwandeln, müssen Sie möglicherweise `--enable-multi-memory` übergeben, da die Unterstützung für mehrere Speicher noch optional ist.

```wat
(module
  ;; ...

  (import "js" "mem0" (memory 1))
  (import "js" "mem1" (memory 1))

  ;; Create and export a third memory
  (memory $mem2 1)
  (export "memory2" (memory $mem2))

  ;; ...
)
```

Den drei Speicherinstanzen wird anhand ihrer Erstellungsreihenfolge automatisch ein Speicherindex zugewiesen.
Der folgende Code zeigt, wie wir diesen Index (z. B. `(memory 1)`) in der `data`-Anweisung angeben, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten. Dasselbe Verfahren können Sie für alle anderen Speicheranweisungen wie `load` und `grow` verwenden.
Hier schreiben wir jeweils eine Zeichenfolge, die den betreffenden Speicher kennzeichnet.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass `(memory 0)` der Standardwert und daher optional ist.
Um dies zu zeigen, schreiben wir den Text `" (Default)"` ohne Angabe eines Speicherindex. Bei der Ausgabe des Speicherinhalts sollte er hinter `"Memory 0 data"` angehängt sein.

Der WebAssembly-Code für die Ausgabe ähnelt dem vorherigen Beispiel. Allerdings müssen wir zusätzlich zu Offset und Länge der Zeichenfolge auch den Index des Speichers übergeben, in dem sie liegt.
Außerdem geben wir den Inhalt aller drei Speicherinstanzen aus.

Das vollständige Modul ist unten dargestellt:

```wat
(module
  (import "console" "log" (func $log (param i32 i32 i32)))

  (import "js" "mem0" (memory 1))
  (import "js" "mem1" (memory 1))

  ;; Create and export a third memory
  (memory $mem2 1)
  (export "memory2" (memory $mem2))

  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")

  (func $logMemory (param $memIndex i32) (param $memOffSet i32) (param $stringLength i32)
    local.get $memIndex
    local.get $memOffSet
    local.get $stringLength
    call $log
  )

  (func (export "logAllMemory")
    ;; Log memory index 0, offset 0
    (i32.const 0)  ;; memory index 0
    (i32.const 0)  ;; memory offset 0
    (i32.const 23)  ;; string length 23
    (call $logMemory)

    ;; Log memory index 1, offset 0
    i32.const 1  ;; memory index 1
    i32.const 0  ;; memory offset 0
    i32.const 20  ;; string length 20 - overruns the length of the data for illustration
    call $logMemory

    ;; Log memory index 2, offset 0
    i32.const 2  ;; memory index 2
    i32.const 0  ;; memory offset 0
    i32.const 13  ;; string length 13
    call $logMemory
  )
)
```

Auch der JavaScript-Code ähnelt dem vorherigen Beispiel. Allerdings erstellen wir zwei Speicherinstanzen und übergeben sie an `importObject()`. Auf den vom Modul exportierten Speicher greifen wir nach der Instanziierung über das erfüllte Promise zu (`obj.instance.exports`).
Der Code zur Ausgabe der einzelnen Zeichenfolgen ist ebenfalls etwas aufwendiger, da wir die Speicherindexnummer aus WebAssembly einem bestimmten `Memory`-Objekt zuordnen müssen.

```js
const memory0 = new WebAssembly.Memory({ initial: 1 });
const memory1 = new WebAssembly.Memory({ initial: 1 });
let memory2; // Created by module

function consoleLogString(memoryInstance, offset, length) {
  let memory;
  switch (memoryInstance) {
    case 0:
      memory = memory0;
      break;
    case 1:
      memory = memory1;
      break;
    case 2:
      memory = memory2;
      break;
    // code block
  }
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder("utf8").decode(bytes);
  log(string); // implementation not shown - could call console.log()
}

const importObject = {
  console: { log: consoleLogString },
  js: { mem0: memory0, mem1: memory1 },
};

WebAssembly.instantiateStreaming(fetch("multi-memory.wasm"), importObject).then(
  (obj) => {
    // Get exported memory
    memory2 = obj.instance.exports.memory2;
    // Log memory
    obj.instance.exports.logAllMemory();
  },
);
```

Die Ausgabe des Beispiels sollte dem folgenden Text ähneln. Auf „Memory 1 data“ können allerdings einige zusätzliche, unleserliche Zeichen folgen, da dem Textdecoder mehr Bytes übergeben werden, als zur Kodierung der Zeichenfolge verwendet wurden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Den vollständigen Quellcode finden Sie auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)).

> [!NOTE]
> Informationen zur Browser-Kompatibilität dieser Funktion finden Sie unter [`webassembly.multiMemory`](#webassembly.multiMemory).

### WebAssembly-Tabellen

Zum Abschluss unseres Überblicks über das WebAssembly-Textformat betrachten wir den komplexesten und oft verwirrendsten Teil von WebAssembly: **Tabellen**. Tabellen sind im Wesentlichen Arrays von Referenzen, deren Größe verändert werden kann und auf die WebAssembly-Code über einen Index zugreifen kann.

Um zu verstehen, warum Tabellen nötig sind, betrachten wir die zuvor vorgestellte Anweisung `call` (siehe [Funktionen aus anderen Funktionen desselben Moduls aufrufen](#funktionen_aus_anderen_funktionen_desselben_moduls_aufrufen)). Sie verwendet einen statischen Funktionsindex und kann daher immer nur eine bestimmte Funktion aufrufen. Was aber, wenn die aufzurufende Funktion erst zur Laufzeit feststeht?

- In JavaScript begegnet uns das ständig: Funktionen sind Werte erster Klasse.
- In C/C++ gibt es dafür Funktionszeiger.
- In C++ gibt es dafür virtuelle Funktionen.

WebAssembly benötigte eine entsprechende Art von Aufrufanweisung. Dafür gibt es `call_indirect`, das einen dynamischen Funktionsoperanden verwendet. Das Problem ist, dass Operanden in WebAssembly (derzeit) nur die Typen `i32`, `i64`, `f32` und `f64` haben können.

WebAssembly hätte einen Typ `anyfunc` hinzufügen können („any“, weil der Typ Funktionen mit beliebiger Signatur enthalten könnte). Aus Sicherheitsgründen ließe sich dieser Typ jedoch nicht im linearen Speicher ablegen. Der lineare Speicher macht den Rohinhalt gespeicherter Werte als Bytes sichtbar. Wasm-Code könnte dadurch rohe Funktionsadressen beliebig auslesen und verändern, was im Web nicht zulässig ist.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes weiterzugeben. Diese sind einfache i32-Werte. Der Operand von `call_indirect` kann somit ein i32-Indexwert sein.

#### Eine Tabelle in Wasm definieren

Wie legen wir Wasm-Funktionen in unserer Tabelle ab? So wie `data`-Abschnitte Bereiche des linearen Speichers mit Bytes initialisieren können, lassen sich mit `elem`-Abschnitten Bereiche von Tabellen mit Funktionen initialisieren:

```wat
(module
  (table 2 funcref)
  (elem (i32.const 0) $f1 $f2)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  ...
)
```

- In `(table 2 funcref)` ist `2` die Anfangsgröße der Tabelle (sie kann also zwei Referenzen speichern). `funcref` legt fest, dass es sich bei den Elementen um Funktionsreferenzen handelt.
- Die `func`-Abschnitte sind gewöhnliche deklarierte Wasm-Funktionen. Auf diese Funktionen verweisen wir in unserer Tabelle; für dieses Beispiel gibt jede einen konstanten Wert zurück. Die Reihenfolge, in der die Abschnitte deklariert werden, spielt dabei keine Rolle: Sie können die Funktionen an beliebiger Stelle deklarieren und dennoch im `elem`-Abschnitt auf sie verweisen.
- Der `elem`-Abschnitt kann eine beliebige Teilmenge der Funktionen eines Moduls in beliebiger Reihenfolge aufführen, auch mehrfach. Die Liste gibt an, auf welche Funktionen die Tabelle in welcher Reihenfolge verweisen soll.
- Der Wert `(i32.const 0)` innerhalb des `elem`-Abschnitts ist ein Offset. Er muss am Anfang des Abschnitts deklariert werden und gibt an, ab welchem Tabellenindex die Funktionsreferenzen eingetragen werden. Hier haben wir 0 angegeben und eine Tabellengröße von 2 festgelegt (siehe oben). Somit können wir zwei Referenzen an den Indizes 0 und 1 eintragen. Wenn wir erst bei Offset 1 beginnen wollten, müssten wir `(i32.const 1)` schreiben und die Tabelle müsste die Größe 3 haben.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standardwert, der beim Aufruf einen Fehler auslöst.

Die entsprechenden Aufrufe zum Erstellen einer solchen Tabelleninstanz sähen in JavaScript ungefähr so aus:

```js
function module() {
  // table section
  const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });

  // function sections:
  const f1 = () => 42; /* some imported WebAssembly function */
  const f2 = () => 13; /* some imported WebAssembly function */

  // elem section
  tbl.set(0, f1);
  tbl.set(1, f2);
}
```

#### Die Tabelle verwenden

Nachdem wir die Tabelle definiert haben, müssen wir sie verwenden. Dazu dient der folgende Codeabschnitt:

```wat
...
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32)
)
```

- Der Block `(type $return_i32 (func (result i32)))` legt einen Typ mit einem Referenznamen fest. Dieser Typ wird später verwendet, um die Aufrufe der Funktionsreferenzen in der Tabelle zu prüfen. Hier legen wir fest, dass die Referenzen auf Funktionen verweisen müssen, die ein `i32` zurückgeben.
- Anschließend definieren wir eine Funktion, die unter dem Namen `callByIndex` exportiert wird. Sie nimmt einen `i32`-Parameter mit dem Argumentnamen `$i` entgegen.
- Innerhalb der Funktion legen wir einen Wert auf den Stack: den als Parameter `$i` übergebenen Wert.
- Schließlich rufen wir mit `call_indirect` eine Funktion aus der Tabelle auf. Dabei wird der Wert von `$i` implizit vom Stack entfernt. Das Ergebnis ist, dass `callByIndex` die Funktion am Tabellenindex `$i` aufruft.

Sie könnten den Parameter für `call_indirect` auch direkt beim Befehlsaufruf statt davor angeben:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höheren, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich eine entsprechende Umsetzung mit einem Array (oder wahrscheinlicher einem Objekt) vorstellen, das Funktionen enthält. Der Pseudocode sähe etwa so aus: `tbl[i]()`.

Zurück zur Typprüfung: Da WebAssembly Typen prüft und `funcref` potenziell auf eine Funktion mit beliebiger Signatur verweisen kann, müssen wir an der Aufrufstelle die erwartete Signatur der aufzurufenden Funktion angeben. Dazu verwenden wir den Typ `$return_i32`, der festlegt, dass eine Funktion erwartet wird, die ein `i32` zurückgibt. Hat die aufgerufene Funktion keine passende Signatur (gibt sie beispielsweise stattdessen ein `f32` zurück), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Wie wird `call_indirect` mit der Tabelle verknüpft, aus der die Funktion aufgerufen wird? Derzeit ist pro Modulinstanz nur eine Tabelle zulässig, und `call_indirect` greift implizit auf diese zu. Wenn künftig mehrere Tabellen zulässig sind, müssten wir zusätzlich eine Art Tabellenkennung angeben, etwa so:

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht wie folgt aus. Sie finden es in unserer Beispieldatei [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat):

```wat
(module
  (table 2 funcref)
  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 13
  )
  (elem (i32.const 0) $f1 $f2)
  (type $return_i32 (func (result i32)))
  (func (export "callByIndex") (param $i i32) (result i32)
    local.get $i
    call_indirect (type $return_i32)
  )
)
```

Mit dem folgenden JavaScript laden wir es in eine Webseite:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Dieses Beispiel finden Sie auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Wie Memory-Objekte können auch Tabellen in JavaScript erstellt (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie von einem anderen Wasm-Modul importiert oder dorthin exportiert werden.

### Tabellen verändern und dynamisch verknüpfen

Da JavaScript uneingeschränkten Zugriff auf Funktionsreferenzen hat, lässt sich das Table-Objekt aus JavaScript mit den Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) verändern. WebAssembly-Code kann Tabellen ebenfalls direkt bearbeiten, und zwar mit Anweisungen wie `table.get` und `table.set`, die im Rahmen der [Referenztypen](#referenztypen) hinzugefügt wurden.

Weil Tabellen veränderbar sind, lassen sich mit ihnen ausgefeilte Verfahren zur [dynamischen Verknüpfung](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) beim Laden und zur Laufzeit umsetzen. Bei einem dynamisch verknüpften Programm nutzen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Das ähnelt einer nativen Anwendung, bei der mehrere kompilierte `.dll`-Dateien den Adressraum eines Prozesses gemeinsam nutzen.

Um das zu demonstrieren, erstellen wir ein einzelnes Importobjekt mit einem Memory- und einem Table-Objekt und übergeben dasselbe Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Aufrufe.

Unsere `.wat`-Beispiele sehen so aus:

`shared0.wat`:

```wat
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (elem (i32.const 0) $shared0func)
  (func $shared0func (result i32)
    i32.const 0
    i32.load
  )
)
```

`shared1.wat`:

```wat
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (type $void_to_i32 (func (result i32)))
  (func (export "doIt") (result i32)
   i32.const 0
   i32.const 42
   i32.store  ;; store 42 at address 0
   i32.const 0
   call_indirect (type $void_to_i32)
  )
)
```

Sie funktionieren folgendermaßen:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante mit dem Wert `0` und verwendet anschließend den Befehl `i32.load`, um den Wert an der angegebenen Speicheradresse zu laden. Der angegebene Index ist `0`; auch hier wird der zuvor auf den Stack gelegte Wert implizit entfernt. `shared0func` lädt also den an Speicherindex `0` gespeicherten Wert und gibt ihn zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt`. Sie erstellt zwei Konstanten mit den Werten `0` und `42` und ruft dann `i32.store` auf, um einen Wert an einem angegebenen Index des importierten Speichers abzulegen. Die Werte werden dabei wiederum implizit vom Stack entfernt. Somit wird der Wert `42` an Speicherindex `0` gespeichert.
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0` und rufen anschließend die Funktion an diesem Tabellenindex auf: `shared0func`, die zuvor durch den `elem`-Block in `shared0.wat` dort gespeichert wurde.
5. Beim Aufruf lädt `shared0func` den Wert `42`, den wir mit dem Befehl `i32.store` in `shared1.wat` im Speicher abgelegt haben.

> [!NOTE]
> Die obigen Ausdrücke entfernen Werte wiederum implizit vom Stack. Sie könnten diese Werte stattdessen direkt innerhalb der Befehlsaufrufe angeben, beispielsweise:
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach der Umwandlung in WebAssembly-Binärdateien (Wasm) verwenden wir `shared0.wasm` und `shared1.wasm` mit folgendem JavaScript-Code:

```js
const importObj = {
  js: {
    memory: new WebAssembly.Memory({ initial: 1 }),
    table: new WebAssembly.Table({ initial: 1, element: "anyfunc" }),
  },
};

Promise.all([
  WebAssembly.instantiateStreaming(fetch("shared0.wasm"), importObj),
  WebAssembly.instantiateStreaming(fetch("shared1.wasm"), importObj),
]).then((results) => {
  console.log(results[1].instance.exports.doIt()); // prints 42
});
```

Beide kompilierten Module können dieselben Speicher- und Tabellenobjekte importieren und nutzen dadurch denselben linearen Speicher und denselben „Adressraum“ der Tabelle.

> [!NOTE]
> Dieses Beispiel finden Sie auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Speicheroperationen für größere Datenbereiche

Operationen für größere Datenbereiche sind eine neuere Ergänzung der Sprache. Sieben neue integrierte Operationen ermöglichen beispielsweise das Kopieren und Initialisieren größerer Speicherbereiche. Dadurch kann WebAssembly native Funktionen wie `memcpy` und `memmove` effizienter abbilden.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.bulk-memory-operations`](#webassembly.bulk-memory-operations).

Die neuen Operationen sind:

- `data.drop`: Die Daten in einem Datensegment verwerfen.
- `elem.drop`: Die Daten in einem Elementsegment verwerfen.
- `memory.copy`: Daten von einem Bereich des linearen Speichers in einen anderen kopieren.
- `memory.fill`: Einen Bereich des linearen Speichers mit einem bestimmten Bytewert füllen.
- `memory.init`: Einen Bereich aus einem Datensegment kopieren.
- `table.copy`: Einträge von einem Bereich einer Tabelle in einen anderen kopieren.
- `table.init`: Einen Bereich aus einem Elementsegment kopieren.

> [!NOTE]
> Weitere Informationen finden Sie im Vorschlag [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Typen

### Zahlentypen

WebAssembly bietet derzeit vier _Zahlentypen_:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

### Vektortypen

- `v128`: 128-Bit-Vektor mit gepackten Ganzzahl- oder Gleitkommadaten oder einem einzelnen 128-Bit-Wert.

### Referenztypen

Der [Vorschlag für Referenztypen](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei wesentliche Funktionen:

- Einen neuen Typ namens `externref`, der _jeden_ JavaScript-Wert enthalten kann, beispielsweise Zeichenfolgen, DOM-Referenzen oder Objekte. Aus WebAssembly-Sicht ist `externref` undurchsichtig: Ein Wasm-Modul kann nicht auf diese Werte zugreifen oder sie bearbeiten, sondern sie lediglich entgegennehmen und wieder weitergeben. Das ist dennoch sehr nützlich, weil Wasm-Module so JavaScript-Funktionen, DOM-APIs und Ähnliches aufrufen können. Allgemein erleichtert es die Interoperabilität mit der Hostumgebung. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Mehrere neue Anweisungen, mit denen Wasm-Module [WebAssembly-Tabellen](#webassembly-tabellen) direkt bearbeiten können, statt dafür die JavaScript-API verwenden zu müssen.

> [!NOTE]
> Die Dokumentation zu [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) enthält hilfreiche Informationen dazu, wie Sie `externref` in Rust nutzen können.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.reference-types`](#webassembly.reference-types).

## WebAssembly mit mehreren Rückgabewerten

Eine weitere neuere Ergänzung der Sprache ist die Unterstützung mehrerer Werte. WebAssembly-Funktionen können nun mehrere Werte zurückgeben, und Anweisungsfolgen können mehrere Stackwerte verarbeiten und erzeugen.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.multi-value`](#webassembly.multi-value).

Zum Zeitpunkt der Erstellung dieses Textes (Juni 2020) befand sich diese Funktion noch in einem frühen Stadium. Die einzigen verfügbaren Anweisungen für mehrere Werte waren Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Beispielsweise:

```wat
(module
  (func $get_two_numbers (result i32 i32)
    i32.const 1
    i32.const 2
  )
  (func (export "add_two_numbers") (result i32)
    call $get_two_numbers
    i32.add
  )
)
```

Dies schafft jedoch die Grundlage für weitere nützliche Anweisungstypen und andere Möglichkeiten. Eine hilfreiche Darstellung des damaligen Entwicklungsstands und der Funktionsweise finden Sie in [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

Mit WebAssembly-Threads können WebAssembly-Memory-Objekte zwischen mehreren WebAssembly-Instanzen geteilt werden, die in separaten Web Workers laufen — ähnlich wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine schnelle Kommunikation zwischen Workern und erhebliche Leistungssteigerungen in Webanwendungen.

Der Vorschlag für Threads besteht aus zwei Teilen: gemeinsam genutztem Speicher und atomaren Speicherzugriffen.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.threads-and-atomics` auf der Startseite](#webassembly.threads-and-atomics).

### Gemeinsam genutzter Speicher

Wie oben beschrieben, können Sie gemeinsam genutzte WebAssembly-[`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte erstellen. Diese können mithilfe von [`postMessage()`](/de/docs/Web/API/Window/postMessage) zwischen Window- und Worker-Kontexten übertragen werden, ähnlich wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

In der JavaScript-API besitzt das Initialisierungsobjekt des Konstruktors [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory) nun eine Eigenschaft `shared`. Wird sie auf `true` gesetzt, entsteht ein gemeinsam genutzter Speicher:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die Eigenschaft [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) des Speichers gibt dann statt des üblichen `ArrayBuffer` einen `SharedArrayBuffer` zurück:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie mit dem Schlüsselwort `shared` einen gemeinsam genutzten Speicher erstellen:

```wat
(memory 1 2 shared)
```

Anders als bei nicht gemeinsam genutztem Speicher muss für gemeinsam genutzten Speicher eine maximale Größe angegeben werden — sowohl im Konstruktor der JavaScript-API als auch im Wasm-Textformat.

> [!NOTE]
> Ausführlichere Informationen finden Sie im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Es wurden mehrere neue Wasm-Anweisungen hinzugefügt, mit denen sich höherstufige Funktionen wie Mutexe und Bedingungsvariablen implementieren lassen. Eine [Liste dieser Anweisungen finden Sie hier](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die Seite zur [Pthreads-Unterstützung in Emscripten](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie Sie diese neue Funktionalität mit Emscripten nutzen können.

## Zusammenfassung

Damit endet unser Überblick über die wichtigsten Bestandteile des WebAssembly-Textformats und darüber, wie sie sich in der WebAssembly-JavaScript-API widerspiegeln.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Was in diesem Artikel fehlt, ist eine vollständige Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Eine Erläuterung der einzelnen Anweisungen finden Sie in der [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html).
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Referenzinterpreter der Spezifikation implementiert wird.
