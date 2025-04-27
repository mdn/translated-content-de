---
title: Verstehen des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

Um WebAssembly für Menschen lesbar und bearbeitbar zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen von Browsern usw. angezeigt werden soll. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die rohe Syntax und wie es mit dem zugrundeliegenden Bytecode zusammenhängt, den es repräsentiert — und den Wrapper-Objekten, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der lediglich ein Wasm-Modul in eine Seite laden und es in Ihrem Code verwenden möchte (siehe [Using the WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie z. B. Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Expressions

In beiden Formaten, sowohl im Binär- als auch im Textformat, ist die grundlegende Codeeinheit in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Expression dargestellt. S-Expressions sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen, und daher können wir ein Modul als einen Baum von Knoten betrachten, der die Struktur des Moduls und seinen Code beschreibt. Anders als der Abstrakte Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Zuerst sehen wir uns an, wie eine S-Expression aussieht. Jeder Knoten im Baum wird in ein Paar von Klammern eingefügt — `( ... )`. Das erste Label innerhalb der Klammer gibt an, um welche Art von Knoten es sich handelt, und danach folgt eine durch Leerzeichen getrennte Liste von entweder Attributen oder Kindknoten. Das bedeutet also, dass die WebAssembly S-Expression:

```wat
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" darstellt und zwei Kindknoten, einen "memory"-Knoten mit dem Attribut "1" und einen "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzest möglichen Wasm-Modul.

```wat
(module)
```

Dieses Modul ist völlig leer, aber trotzdem ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärformat umwandeln (siehe [Converting WebAssembly text format to Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), werden wir nur den 8-Byte-Modul-Header sehen, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben wird:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Funktionalität zu Ihrem Modul hinzufügen

Okay, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Alles Code in einem WebAssembly-Modul ist in Funktionen gruppiert, die die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** gibt an, was die Funktion nimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Locals** sind wie Variablen in JavaScript, jedoch mit explizit deklarierten Typen.
- Der **Körper** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Dies ähnelt Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es sich um eine S-Expression handelt.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parametertypdeklarationen, gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist erwähnenswert, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens einen Rückgabetyp geben, aber [später wird dies gelockert werden](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md) auf eine beliebige Anzahl.

Jeder Parameter hat einen explizit festgelegten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-bit Ganze Zahl
- `i64`: 64-bit Ganze Zahl
- `f32`: 32-bit Gleitkommazahl
- `f64`: 64-bit Gleitkommazahl

Ein einzelner Parameter wird geschrieben als `(param i32)` und der Rückgabewert wird geschrieben als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Ganzzahlen nimmt und eine 64-Bit-Gleitkommazahl zurückgibt, so geschrieben werden:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die "Locals" mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Grunde nur lokale Variablen, die mit dem Wert des entsprechenden Arguments, das vom Aufrufer übergeben wird, initialisiert werden.

## Abrufen und Setzen von Locals und Parametern

Locals/Parameter können durch den Körper der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die Befehle `local.get`/`local.set` beziehen sich auf das zu holende/zu setzende Element über seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration betrachtet, gefolgt von Locals in der Reihenfolge ihrer Deklaration. So wird bei der folgenden Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` den i32-Parameter holen, `local.get 1` den f32-Parameter und `local.get 2` den f64-local.

Es gibt hier ein weiteres Problem — die Verwendung von numerischen Indizes zur Referenzierung von Elementen kann verwirrend und ärgerlich sein, daher erlaubt das Textformat Ihnen, Parameter, Locals und die meisten anderen Elemente zu benennen, indem Sie vor dem Typdeklaration einen Namen mit einem Dollarzeichen (`$`) voranstellen.

So könnten Sie unsere vorherige Signatur so umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` anstelle von `local.get 0` schreiben, usw. (Beachten Sie, dass beim Konvertieren dieses Textes in Binärformat das Binärformat nur die ganze Zahl enthalten wird.)

## Stapelmaschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stapelmaschinen**. Obwohl der Browser dies zu etwas Effizienterem kompiliert, ist die Ausführung von Wasm in Begriffen einer Stapelmaschine definiert, bei der die Grundidee ist, dass jede Art von Anweisung eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf bzw. von einem Stapel drückt.

Zum Beispiel ist `local.get` so definiert, dass es den Wert des Local, den es gelesen hat, auf den Stapel drückt, und `i32.add` poppt zwei `i32`-Werte (es greift implizit die vorhergehend auf den Stapel geschobenen Werte), berechnet deren Summe (modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der sich allmählich füllt und leert, während die Anweisungen des Körpers ausgeführt werden. Zum Beispiel, nachdem die folgende Funktion ausgeführt wurde:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

Der Stapel enthält genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), welches durch `i32.add` gehandhabt wird. Der Rückgabewert einer Funktion ist einfach der letzte verbleibende Wert auf dem Stapel.

Die Validierungsregeln von WebAssembly stellen sicher, dass der Stapel genau übereinstimmt: Wenn Sie `(result f32)` deklarieren, dann muss der Stapel am Ende genau ein `f32` enthalten. Wenn es keinen Ergebnistyp gibt, muss der Stapel leer sein.

## Unser erster Funktionskörper

Wie zuvor erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Zusammen mit dem, was wir bereits gelernt haben, können wir nun endlich ein Modul mit unserer eigenen einfachen Funktion definieren:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt noch viele andere Dinge, die innerhalb von Funktionskörpern platziert werden können, aber wir beginnen jetzt einfach, und Sie werden viele weitere Beispiele im Laufe der Zeit sehen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird alleine nicht viel tun — jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung im Modul exportiert werden.

Wie Locals sind auch Funktionen standardmäßig durch einen Index identifiziert, aber der Bequemlichkeit halber können sie benannt werden. Beginnen wir damit — zuerst fügen wir direkt nach dem Schlüsselwort `func` einen Namen, der mit einem Dollarzeichen beginnt, hinzu:

```wat
(func $add …)
```

Jetzt müssen wir eine Exportdeklaration hinzufügen — das sieht so aus:

```wat
(export "add" (func $add))
```

Hier wird `add` der Name sein, unter dem die Funktion in JavaScript identifiziert werden soll, während `$add` angibt, welche WebAssembly-Funktion im Modul exportiert wird.

Unser endgültiges Modul (vorerst) sieht also so aus:

```wat
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie dem Beispiel folgen möchten, speichern Sie unser Modul oben in einer Datei namens `add.wat` und konvertieren Sie es dann in eine Binärdatei mit dem Namen `add.wasm` mithilfe von wabt (siehe [Converting WebAssembly text format to Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als nächstes instanziieren wir asynchron unser Binärformat (siehe [Loading and running WebAssembly code](/de/docs/WebAssembly/Guides/Loading_and_running)) und führen unsere `add` Funktion in JavaScript aus (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([siehe es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Informieren Sie sich auch über [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für mehr Details über die Instanziierungsfunktion.

## Grundlagen erforschen

Nachdem wir nun die Grundlagen behandelt haben, gehen wir weiter zu einigen fortgeschritteneren Funktionen.

### Funktionen aus anderen Funktionen im selben Module aufrufen

Die `call`-Anweisung ruft eine einzelne Funktion auf, die durch ihren Index oder Namen gegeben ist. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufs der ersten plus eins zurück:

```wat
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach eine 32-Bit-Ganzzahl und drückt sie auf den Stapel. Sie könnten das `i32` durch jeden der anderen verfügbaren Typen ersetzen und den Wert der Konstante nach Belieben ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie im Abschnitt `(export "getAnswerPlus1")` bemerken, dass unmittelbar nach der `func`-Anweisung in der zweiten Funktion deklariert wird — dies ist eine Kurzform, um zu erklären, dass wir diese Funktion exportieren möchten und den Namen definieren, unter dem wir sie exportieren möchten.

Dies ist funktionell gleichwertig damit, eine separate Funktionsanweisung außerhalb der Funktion, an einer anderen Stelle im Modul auf die gleiche Weise einzuschließen, wie wir es zuvor getan haben, z. B.:

```wat
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code, um unser obiges Modul aufzurufen, sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Funktionen von JavaScript importieren

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber wie sieht es aus, wenn WebAssembly JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Lassen Sie uns ein Beispiel ansehen:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zwei Ebenen Namespace, sodass die Importanweisung hier besagt, dass wir die `log`-Funktion aus dem `console`-Modul importieren möchten. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mit der `call`-Anweisung aufruft, die wir oben eingeführt haben.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die wass Rundeaktuell von WebAssembly überprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Begriff von Signaturen, daher kann jede JavaScript-Funktion unabhängig von der Deklarierten Signatur des Imports übergeben werden. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Für das Obige benötigen wir ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Dies würde folgendermaßen aussehen:

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
> Dieses Beispiel finden Sie auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Globale Variablen in WebAssembly deklarieren

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl von JavaScript aus zugänglich sind als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es dynamisches Verknüpfen mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es ungefähr so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; sehen Sie sich auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel an):

```wat
(module
  (global $g (import "js" "global") (mut i32))
  (func (export "getGlobal") (result i32)
    (global.get $g))
  (func (export "incGlobal")
    (global.set $g
      (i32.add (global.get $g) (i32.const 1))))
)
```

Dies sieht ähnlich aus wie das, was wir vorher gesehen haben, abgesehen davon, dass wir einen globalen Wert mit dem Schlüsselwort `global` spezifizieren und wir auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes angeben, wenn wir möchten, dass er veränderlich ist.

Um einen gleichwertigen Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assembly-Code arbeitet, sie auf den [Stapel](#stapelmaschinen) hinzufügt, Operationen damit ausführt und das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Für den Umgang mit Zeichenfolgen und anderen komplexeren Datentypen verwenden wir `memory`, das sowohl in WebAssembly als auch in JavaScript erstellt und zwischen den Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großes zusammenhängendes, veränderbares Array von Rohdaten, das mit der Zeit wachsen kann (siehe [linear memory](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stapel und einem beliebigen Ort im Speicher.

Aus der Sicht von JavaScript scheint es, als wäre der gesamte Speicher innerhalb eines großen vergrößerbaren {{jsxref("ArrayBuffer")}}. JavaScript kann Instanzen des WebAssembly Linearmemories über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Schnittstelle erstellen und sie zu einem Speicherobjekt exportieren oder auf ein im WebAssembly-Code erstelltes Speicherobjekt zugreifen und es exportieren. JavaScript `Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Getter, der ein `ArrayBuffer` zurückgibt, das auf den gesamten Linearspeicher zeigt.

Speicherinstanzen können ebenfalls wachsen, zum Beispiel über die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) Methode in JavaScript, oder `memory.grow` im WebAssembly.
Da `ArrayBuffer` Objekte nicht die Größe ändern können, wird das aktuelle `ArrayBuffer` losgelöst und ein neues `ArrayBuffer` erstellt, das auf den neuen, größeren Speicher zeigt.

Beachten Sie, dass Sie beim Erstellen des Speichers die initiale Größe definieren müssen und optional die maximale Größe, auf die der Speicher wachsen kann, angeben können.
WebAssembly wird versuchen, die maximale Größe (falls angegeben) zu reservieren, und wenn es dazu in der Lage ist, kann es den Puffer in Zukunft effizienter wachsen lassen. Selbst wenn es jetzt nicht die maximale Größe zuweisen kann, kann es möglicherweise später noch wachsen.
Die Methode schlägt nur fehl, wenn sie nicht in der Lage ist, die _initiale_ Größe zuzuweisen.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speicher](#mehrere_speicher) haben, wenn diese vom Browser unterstützt werden.
> Code, der keine mehreren Speicher verwendet, muss nicht geändert werden!

Um dieses Verhalten zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenfolge in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenfolge ist einfach eine Folge von Bytes irgendwo in diesem linearen Speicher.
Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenfolge an JavaScript weitergeben, indem wir den Speicher, den Offset der Zeichenfolge innerhalb des Speichers und eine Möglichkeit zur Angabe der Länge teilen.

Zuerst erstellen wir etwas Speicher und teilen ihn zwischen WebAssembly und JavaScript.
WebAssembly gibt uns hier eine Menge Flexibilität: Wir können entweder ein `Memory`-Objekt in JavaScript erstellen und das WebAssembly-Modul importiert den Speicher, oder wir lassen das WebAssembly-Modul den Speicher erstellen und nach JavaScript exportieren.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Anschließend instanziieren wir unser Web-Assembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode und übergeben das Importobjekt:

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

In unserer WebAssembly-Datei importieren wir diesen Speicher. Im WebAssembly-Textformat wird die `import`-Anweisung folgendermaßen geschrieben:

```wat
(import "js" "mem" (memory 1))
```

Der Speicher muss mit dem gleichen zweistufigen Schlüssel, der im `importObject` (`js.mem`) angegeben ist, importiert werden.
Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste in das WebAssembly-Modul importierte Speicher ist, hat er einen Speicherindex von "0".
> Sie könnten diesen speziellen Speicher unter Verwendung des Indexes in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da 0 der Standardindex ist, müssen Sie den Index in Einzel-Speicher-Anwendungen nicht angeben.

Da wir nun eine gemeinsame Speicherinstanz haben, besteht der nächste Schritt darin, eine Datenfolge hineinzuschreiben.
Wir werden dann Informationen über die Verortung der Zeichenfolge und ihre Länge an JavaScript weitergeben (wir könnten alternativ die Länge der Zeichenfolge in der Zeichenfolge selbst codieren, aber das Weitergeben einer Länge ist für uns einfacher zu implementieren).

Zuerst fügen wir eine Zeichenfolge von Daten zu unserem Speicher hinzu, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir die Zeichenfolgeninhalte einfach global im Speicher über einen `data`-Abschnitt schreiben.
Datenabschnitte ermöglichen das Schreiben einer Folgen von Bytes an einen gegebenen Offset zur Instantiierungszeit und ähneln den `.data`-Abschnitten in nativen Ausführungsformaten.
Hier schreiben wir die Daten in den Standardspeicher (den wir nicht spezifizieren müssen) an Offset 0:

```wat
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Doppelsemikolon-Syntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzugeben.
> In diesem Fall verwenden wir sie einfach, um Platzhalter für anderen Code zu markieren.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um die Zeichenfolge auf der Konsole zu protokollieren.
Diese muss `console.log` im `importObject` zugeordnet werden, das verwendet wird, um das WebAssembly-Modul zu instanziieren.
Die Funktion heißt `$log` im WebAssembly und nimmt `i32`-Parameter für den Offset und die Länge der Zeichenfolge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenfolge im Speicher (`0` und `2`) auf.
Diese wird aus dem Modul exportiert, damit sie von JavaScript aus aufgerufen werden kann.

Unser endgültiges WebAssembly-Modul (im Textformat) sieht so aus.

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

Auf der JavaScript-Seite müssen wir die Protokollierungsfunktion definieren, sie an das WebAssembly übergeben und dann die exportierte `writeHi()`-Methode aufrufen.
Der vollständige Code wird unten angezeigt:

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben wird und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht auf die Zeichenfolge im gemeinsam genutzten Speicher unter Verwendung eines `Uint8Array` am angegebenen Offset und mit der gegebenen Länge.
Die Bytes werden dann mithilfe der [TextDecoder API](/de/docs/Web/API/TextDecoder) von UTF-8 in eine Zeichenfolge dekodiert (wir geben hier `utf8` an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenfolge wird dann mit `console.log()` auf die Konsole protokolliert.

Der letzte Schritt ist das Aufrufen der exportierten `writeHi()`-Funktion, die nach der Instanziierung des Objekts erfolgt.
Wenn Sie den Code ausführen, wird die Konsole den Text "Hi" anzeigen.

> [!NOTE]
> Sie können den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die kompatibel mit Code geschrieben ist, der nur eine einzige Speicherunterstützung benötigt.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden sollten als andere Anwendungsdaten, wie z. B. öffentliche vs. private Daten, Daten, die gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich sein für sehr große Anwendungen, die über den Wasm 32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine Null-beginnend sequenziell zugewiesene Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf beliebige Speicher über ihren Index referenzieren, sodass Sie kontrollieren können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, den Index des ersten zum WebAssembly-Instance hinzugefügten Speichers.
Daher muss Ihr Code den Index nicht angeben, wenn Sie nur einen Speicher hinzufügen.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der folgende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, mit dem gleichen Ansatz wie im vorhergehenden Beispiel.
Um zu zeigen, wie Sie Speicher innerhalb des WebAssembly-Moduls erstellen können, haben wir eine dritte Speicherinstanz namens `$mem2` im Modul erstellt und _exportiert_.

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

Die drei Speicherinstanzen werden automatisch basierend auf ihrer Erstellung in einer Reihenfolge zugewiesen.
Der folgende Code zeigt, wie wir diesen Index (z. B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten (Sie können diesen Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenfolge, die den Speicher geliebert.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass `(memory 0)` der Standard ist und daher optional.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"`, ohne den Speicherindex anzugeben, und dies sollte nach `"Memory 0 data"` hinzugefügt werden, wenn die Speicherinhalte protokolliert werden.

Der WebAssembly-Protokollierungscode ist fast genau der gleiche wie im vorherigen Beispiel, außer dass wir zusammen mit dem Zeichenfolgenoffset und der Länge den Index des Speichers angeben müssen, der die Zeichenfolge enthält.
Wir protokollieren auch alle drei Speicherinstanzen.

Das vollständige Modul wird unten angezeigt:

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
    i32.const 20  ;; string length 20
    call $logMemory

    ;; Log memory index 2, offset 0
    i32.const 2  ;; memory index 2
    i32.const 0  ;; memory offset 0
    i32.const 12  ;; string length 13
    call $logMemory
  )

)
```

Der JavaScript-Code ist ebenfalls sehr ähnlich zum vorherigen Beispiel, außer dass wir zwei Speicherinstanzen an das `importObject()` übergeben und der von der Modulinstanz exportierte Speicher nach der Instantiierung unter Verwendung des aufgelösten Versprechens (`obj.instance.exports`) zugegriffen wird.
Der Code zum Protokollieren jeder Zeichenfolge ist auch etwas komplizierter, da wir die Speichernummer von WebAssembly mit einem bestimmten `Memory`-Objekt abstimmen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich dem untenstehenden Text sein, außer dass "Memory 1 data" möglicherweise einige nachlaufende "Müllzeichen" aufweist, da dem Textdecoder mehr Bytes übergeben werden, als zur Kodierung der Zeichenfolge verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Siehe [`webassembly.multiMemory` on the home page](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität für dieses Feature.

### WebAssembly Tabellen

Um diese Tour durch das WebAssembly-Textformat zu beenden, schauen wir uns den komplexesten und oft verwirrendsten Teil von WebAssembly an: **Tabellen**. Tabellen sind im Wesentlichen skalierbare Arrays von Referenzen, die von WebAssembly-Code aus per Index zugegriffen werden können.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zuerst beobachten, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Funktionen von anderen Funktionen im selben Modul aufrufen](#funktionen_aus_anderen_funktionen_im_selben_module_aufrufen)), einen statischen Funktionsindex verwendet und daher nur jemals eine Funktion aufrufen kann — aber was, wenn der Aufgerufene ein Laufzeitwert ist?

- In JavaScript sehen wir das die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir dies mit Funktionszeigern.
- In C++ sehen wir dies mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Anweisung, um dies zu erreichen, also haben wir `call_indirect` hinzugefügt, das ein dynamisches Funktionsoperanden aufnimmt. Das Problem ist, dass die einzigen Typen, die wir Operanden in WebAssembly geben können, (derzeit) `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen mit beliebiger Signatur halten könnte), aber leider könnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Der lineare Speicher setzt die rohen Inhalte der gespeicherten Werte als Bytes frei und dies würde es Wasm-Inhalten ermöglichen, rohe Funktionsadressen willkürlich zu beobachten und zu korrumpieren, was auf dem Web nicht erlaubt werden kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes herumzureichen, die einfach i32-Werte sind. `call_indirect`'s Operand kann daher ein i32-Indexwert sein.

#### Eine Tabelle in Wasm definieren

Wie platzieren wir also Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Abschnitte verwendet werden können, um Regionen des Linearspeichers mit Bytes zu initialisieren, können `elem`-Abschnitte verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)` ist die 2 die Anfangsgröße der Tabelle (was bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` erklärt, dass der Elementtyp dieser Referenzen ein Funktionsreferenz ist.
- Die Funktionen (`func`) Abschnitte sind genau wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, auf die wir uns in unserer Tabelle beziehen werden (zum Beispiel gibt jede nur einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert werden, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und trotzdem in Ihrem `elem`-Abschnitt darauf verweisen.
- Der `elem` Abschnitt kann jedes beliebige Untermenge der Funktionen in einem Modul auflisten, in jeder Reihenfolge und mit doppelten Einträgen. Dies ist eine Liste der Funktionen, auf die die Tabelle referenzieren soll, in der Reihenfolge, in der sie referenzieren soll.
- Der `(i32.const 0)` Wert innerhalb des `elem` Abschnitts ist ein Offset — dies muss zu Beginn des Abschnitts deklariert werden und gibt an, an welchem Index in der Tabelle Funktionsreferenzen zu füllen beginnen. Hier haben wir 0 angegeben, und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen an den Indizes 0 und 1 ausfüllen können. Wenn wir beginnen wollen, unsere Referenzen bei Offset 1 zu schreiben, müssten wir `(i32.const 1)` schreiben und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten standardmäßig einen Wert, der bei einem Aufruf einen Fehler auslöst.

In JavaScript würden die entsprechenden Aufrufe zur Erstellung einer solchen Tabelleninstanz ungefähr so aussehen:

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

#### Verwendung der Tabelle

Nun, da wir die Tabelle definiert haben, müssen wir sie irgendwie verwenden. Lassen Sie uns diesen Abschnitt Code verwenden, um dies zu tun:

```wat
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der Block `(type $return_i32 (func (result i32)))` gibt einen Typ an, mit einem Referenznamen. Dieser Typ wird verwendet, wenn später die Typprüfung der Tabellenfunktionsreferenzanrufe durchgeführt wird. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die einen `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese wird ein `i32` als Parameter nehmen, die den Argumentnamen `$i` erhält.
- Innerhalb der Funktion fügen wir dem Stapel einen Wert hinzu — welchen Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — er popt implizit den Wert von `$i` vom Stapel. Das Endergebnis davon ist, dass die `callByIndex` Funktion die `$i`'te Funktion in der Tabelle aufruft.

Sie könnten auch den `call_indirect` Parameter explizit während des Befehlsaufrufs angeben, anstatt davor, so:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höheren Sprache wie JavaScript könnten Sie sich das gleiche mit einem Array (oder eher einem Objekt) vorstellen, das Funktionen enthält. Der Pseudocode würde etwa so aussehen wie `tbl[i]()`.

Zurück zur Typprüfung. Da WebAssembly typüberprüft ist und der `funcref` möglicherweise jede Funktionssignatur sein kann, müssen wir die vermutete Signatur des Aufgerufenen an der Aufrufstelle angeben, daher fügen wir den Typ `$return_i32` hinzu, um dem Programm mitzuteilen, dass eine Funktion, die einen `i32` zurückgibt, erwartet wird. Wenn der Aufgerufene keine übereinstimmende Signatur hat (z. B. wird ein `f32` zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Was verbindet also das `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist das, was `call_indirect` implizit aufruft. In Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennung in irgendeiner Form angeben, wie etwa

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul insgesamt sieht so aus und kann in unserem [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispiele gefunden werden:

```wat
(module
  (table 2 funcref)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  (elem (i32.const 0) $f1 $f2)
  (type $return_i32 (func (result i32)))
  (func (export "callByIndex") (param $i i32) (result i32)
    local.get $i
    call_indirect (type $return_i32))
)
```

Wir laden es mit folgendem JavaScript in eine Webseite:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Speicher können auch Tabellen von JavaScript erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie zu/von einem anderen Wasm-Modul importiert werden.

### Tabellen manipulieren und dynamisches Verknüpfen

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Tabellenobjekt von JavaScript aus mit den Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) manipuliert werden. Und der WebAssembly-Code selbst ist in der Lage, Tabellen mit Anweisungen, die als Teil der [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`, zu manipulieren.

Da Tabellen veränderlich sind, können sie verwendet werden, um komplizierte Ladezeit- und Laufzeit [dynamische Verknüpfungssysteme](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verknüpft wird, teilen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s den Adressraum eines einzelnen Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einziges Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und geben dieses gleiche Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) Aufrufe weiter.

Unsere `.wat`-Beispiele sehen so aus:

`shared0.wat`:

```wat
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (elem (i32.const 0) $shared0func)
  (func $shared0func (result i32)
   i32.const 0
   i32.load)
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
   call_indirect (type $void_to_i32))
)
```

Diese arbeiten wie folgt:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und verwendet dann den Befehl `i32.load`, um den Wert zu laden, der an dem bereitgestellten Speicherindex enthalten ist. Der bereitgestellte Index ist `0` — er popt wieder den vorhergehenden Wert vom Stapel. Daher lädt `shared0func` den Wert, der an Speicherindex `0` gespeichert ist, und gibt ihn zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten, die die Werte `0` und `42` enthalten, und ruft `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Wieder popt es diese Werte implizit vom Stapel, sodass das Ergebnis ist, dass es den Wert `42` an Speicherindex `0` speichert,
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0` und rufen dann die Funktion an diesem Index 0 der Tabelle auf, was `shared0func` ist, das zuvor durch den `elem` Block in `shared0.wat` dort gespeichert wurde.
5. Bei Aufruf lädt `shared0func` die `42`, die wir im Speicher mit dem Befehl `i32.store` in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke popt wieder Werte implizit vom Stapel, aber Sie könnten diese auch explizit in den Befehlsaufrufen angeben, zum Beispiel:
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nachdem wir zu Assembly konvertiert haben, verwenden wir `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jedes der Module, die kompiliert werden, kann die gleichen Memory- und Table-Objekte importieren und somit denselben linearen Speicher und das selbe Tabellen-"Adressraum" teilen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk-Speicheroperationen

Bulk-Speicheroperationen sind eine neuere Ergänzung zur Sprache — sieben neue eingebaute Operationen werden für Bulk-Speicheroperationen wie Kopieren und Initialisieren bereitgestellt, um es WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` auf möglichst effiziente und performante Weise zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` on the home page](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Verwerfen der Daten in einem Datensegment.
- `elem.drop`: Verwerfen der Daten in einem Elementsegment.
- `memory.copy`: Kopieren von einem Bereich des Linearspeichers in einen anderen.
- `memory.fill`: Füllen eines Bereichs des Linearspeichers mit einem gegebenen byte-Wert.
- `memory.init`: Kopieren eines Bereichs von einem Datensegment.
- `table.copy`: Kopieren von einer Region einer Tabelle in eine andere.
- `table.init`: Kopieren eines Bereichs von einem Elementsegment.

> [!NOTE]
> Weitere Informationen finden Sie im [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md) Vorschlag.

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-bit ganze Zahl
- `i64`: 64-bit ganze Zahl
- `f32`: 32-bit Gleitkomma
- `f64`: 64-bit Gleitkomma

### Vektortypen

- `v128`: 128 Bit Vektor von gepackten integer, Gleitpunktdaten oder ein einzelner 128-Bit-Typ.

### Referenztypen

Der [Referenztypenvorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Ein neuer Typ, `externref`, der _jedes_ JavaScript-Wert halten kann, beispielsweise Zeichenfolgen, DOM-Referenzen, Objekte usw. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und sie manipulieren und kann sie stattdessen nur empfangen und wieder herausgeben. Aber das ist sehr nützlich, um Wasm-Modulen das Aufrufen von JavaScript-Funktionen, DOM-APIs usw. zu ermöglichen und generell um den Weg zu ebnen für eine einfachere Interoperabilität mit der Host-Umgebung. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Reihe neuer Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly_tabellen) direkt zu manipulieren, anstatt es über die JavaScript-API zu tun.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) Dokumentation enthält einige nützliche Informationen darüber, wie man `externref` von Rust aus nutzen kann.

> [!NOTE]
> Siehe [`webassembly.reference-types` on the home page](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multi-value WebAssembly

Eine weitere neuere Ergänzung zur Sprache ist der WebAssembly multi-value, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können, und dass Anweisungssequenzen mehrere Stapelwerte konsumieren und produzieren können.

> [!NOTE]
> Siehe [`webassembly.multi-value` on the home page](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen verfügbaren Multi-Value-Anweisungen sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen ebnen und auch für andere Dinge. Für eine nützliche Übersicht über den Fortschritt bis jetzt und wie das funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly Threads

WebAssembly Threads ermöglichen es, dass WebAssembly-Memory-Objekte über mehrere in separaten Web-Workern laufende WebAssembly-Instanzen hinweg geteilt werden, in gleicher Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungsgewinne in Webanwendungen.

Der Thread-Vorschlag hat zwei Teile, geteilte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` on the home page](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Geteilte Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekte erstellen, die zwischen Fenster- und Worker-Kontexten unter Verwendung von [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory) -Konstruktors jetzt eine `shared`-Eigenschaft, die, wenn auf `true` gesetzt, einen geteilten Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft des Speichers wird jetzt einen `SharedArrayBuffer` zurückgeben, anstelle des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Speicher mit dem Schlüsselwort `shared` erstellen, wie folgt:

```wat
(memory 1 2 shared)
```

Anders als ungeteilte Speicher müssen geteilte Speicher eine "maximale" Größe sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat angeben.

> [!NOTE]
> Viele weitere Details finden Sie im [Threading proposal for WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurden hinzugefügt, die verwendet werden können, um höhere Funktionen wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads support page](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man von dieser neuen Funktionalität aus Emscripten profitiert.

## Zusammenfassung

Dies beendet unsere Tour zu den Hauptkomponenten des WebAssembly-Textformats und wie sie in der WebAssembly JS-API widergespiegelt werden.

## Siehe auch

- Die Hauptsache, die nicht eingeschlossen wurde, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Sehen Sie sich die [WebAssembly semantics](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung an.
- Siehe auch die [grammatik des text formats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Spezifikationsinterpreter implementiert wird.
