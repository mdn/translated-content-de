---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Um WebAssembly für Menschen lesbar und editierbar zu machen, gibt es eine textliche Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Browser-Entwicklerwerkzeugen usw. angezeigt werden soll. Dieser Artikel erklärt, wie dieses Textformat funktioniert, hinsichtlich der Rohsyntax und wie es sich auf den zugrunde liegenden Bytecode bezieht, den es darstellt – und die Wrapper-Objekte, die Wasm in JavaScript darstellen.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der einfach nur ein Wasm-Modul in eine Seite laden und es in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren, oder Ihren eigenen WebAssembly-Compiler erstellen möchten.

## S-Ausdrücke

Sowohl im Binär- als auch im Textformat ist die grundlegende Einheit des Codes in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen, und wir können somit ein Modul als einen Baum von Knoten betrachten, die die Struktur des Moduls und seinen Code beschreiben. Im Gegensatz zum Abstrakten Syntaxbaum einer Programmiersprache ist der WebAssembly-Baum jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Sehen wir uns zunächst an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum befindet sich innerhalb eines Klammerpaares — `( ... )`. Das erste Label innerhalb der Klammer gibt an, um welche Art von Knoten es sich handelt, und danach folgt eine durch Leerzeichen getrennte Liste von entweder Attributen oder Kindknoten. Das bedeutet, dass der WebAssembly S-Ausdruck:

```wat
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einen "memory"-Knoten mit dem Attribut "1" und einen "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wat
(module)
```

Dieses Modul ist völlig leer, ist aber dennoch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärformat umwandeln (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modulheader, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionalität zu Ihrem Modul

Okay, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Der gesamte Code in einem WebAssembly-Modul ist in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** gibt an, was die Funktion annimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Lokalen** sind wie Variablen in JavaScript, jedoch mit explizit deklarierten Typen.
- Der **Body** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Das ähnelt Funktionen in anderen Sprachen, auch wenn es anders aussieht, da es ein S-Ausdruck ist.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parametertypdeklarationen, gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist bemerkenswert, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens einen Rückgabetyp geben, aber [später wird dies auf eine beliebige Anzahl entspannt](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md).

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit Integer
- `i64`: 64-Bit Integer
- `f32`: 32-Bit Float
- `f64`: 64-Bit Float

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabewert wird als `(result i32)` geschrieben, sodass eine binäre Funktion, die zwei 32-Bit-Integers annimmt und einen 64-Bit-Float zurückgibt, so geschrieben wird:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden Lokale mit ihrem Typ aufgeführt, zum Beispiel `(local i32)`. Parameter sind im Grunde genommen nur Lokale, die mit dem Wert des entsprechenden, vom Aufrufer übergebenen Arguments initialisiert werden.

## Abrufen und Setzen von Lokalen und Parametern

Lokale/Parameter können vom Body der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und beschrieben werden.

Die Befehle `local.get`/`local.set` beziehen sich auf das abzurufende/zu setzende Element anhand seines numerischen Indexes: Parameter werden zuerst in der Reihenfolge ihrer Deklaration referenziert, gefolgt von den Lokalen in der Reihenfolge ihrer Deklaration. Angesichts der folgenden Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` würde den i32-Parameter erhalten, `local.get 1` würde den f32-Parameter erhalten, und `local.get 2` würde den f64-Lokal erhalten.

Ein weiteres Problem hierbei ist, dass die Verwendung von numerischen Indizes zur Referenzierung von Elementen verwirrend und lästig sein kann. Daher erlaubt das Textformat, Parameter, Lokale und die meisten anderen Elemente zu benennen, indem man ihnen einen Namen mit einem vorangestellten Dollarsymbol (`$`) vor dem Typdeklaration gibt.

So könnten wir unsere vorherige Signatur umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` anstelle von `local.get 0` schreiben, usw. (Beachten Sie, dass wenn dieser Text in Binär konvertiert wird, das Binärformat nur den Integer enthalten wird.)

## Stackmaschinen

Bevor wir einen Funktionsbody schreiben können, müssen wir über eines sprechen: **Stackmaschinen**. Obwohl der Browser es in etwas Effizienteres kompiliert, ist die Wasm-Ausführung in Bezug auf eine Stackmaschine definiert, wobei die grundlegende Idee darin besteht, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf einen Stack verschiebt und/oder davon entfernt.

Zum Beispiel ist `local.get` so definiert, dass der Wert des gelesenen Lokals auf den Stack geschoben wird, und `i32.add` entfernt zwei `i32`-Werte (es greift implizit auf die beiden zuletzt auf den Stack geschobenen Werte zurück), berechnet ihre Summe (Modulo 2^32) und verschiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stack, der sich allmählich füllt und leert, während die Body-Anweisungen ausgeführt werden. So zum Beispiel, nach Ausführung der folgenden Funktion:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

Der Stack enthält genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das durch `i32.add` behandelt wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stack verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stack genau übereinstimmt: Wenn Sie ein `(result f32)` deklarieren, muss der Stack am Ende genau ein `f32` enthalten. Wenn kein Rückgabetyp vorhanden ist, muss der Stack leer sein.

## Unser erster Funktionsbody

Wie bereits erwähnt, ist der Funktionsbody eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Wenn wir dies mit dem kombinieren, was wir bereits gelernt haben, können wir schließlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion nimmt zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt viele weitere Dinge, die in Funktionsbodys eingefügt werden können, aber wir fangen zunächst einfach an, und Sie werden im Laufe der Zeit viele weitere Beispiele sehen. Eine vollständige Liste der verfügbaren Opcodes finden Sie im [Webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Aufrufen der Funktion

Unsere Funktion wird nicht viel alleine tun – jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung im Modul exportiert werden.

Wie Lokale werden Funktionen standardmäßig durch einen Index identifiziert, aber der Einfachheit halber können sie benannt werden. Lassen Sie uns damit beginnen — zuerst fügen wir nach dem `func`-Schlüsselwort einen Namen mit einem Dollarzeichen hinzu:

```wat
(func $add …)
```

Jetzt müssen wir eine Exportdeklaration hinzufügen — das sieht so aus:

```wat
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` angibt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser endgültiges Modul (zumindest vorerst) sieht so aus:

```wat
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie diesem Beispiel folgen möchten, speichern Sie das oben genannte Modul in einer Datei namens `add.wat`, dann konvertieren Sie es in eine Binärdatei namens `add.wasm` mit wabt (siehe [Converting WebAssembly text format to Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als Nächstes instanziieren wir unser Binärmodul asynchron (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und führen unsere `add`-Funktion in JavaScript aus (wir können `add()` jetzt in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([siehe es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details über die Instanziierungsfunktion.

## Erforschung der Grundlagen

Jetzt, da wir die Grundlagen behandelt haben, lassen Sie uns einige fortgeschrittenere Funktionen betrachten.

### Aufrufen von Funktionen aus anderen Funktionen im selben Modul

Die `call`-Anweisung ruft eine einzelne Funktion auf, die durch ihren Index oder Namen angegeben wird. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des ersten Aufrufs plus eins zurück:

```wat
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> [!NOTE] > `i32.const` definiert einfach einen 32-Bit-Integer und schiebt ihn auf den Stack. Sie könnten das `i32` durch einen der anderen verfügbaren Typen ersetzen und den Wert der Konstante nach Belieben ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel sehen Sie einen `(export "getAnswerPlus1")`-Abschnitt, der direkt nach der `func`-Anweisung in der zweiten Funktion deklariert ist — dies ist eine Abkürzung, um zu erklären, dass wir diese Funktion exportieren möchten, und den Namen zu definieren, unter dem wir sie exportieren möchten.

Dies entspricht funktional dem Einschließen einer separaten Funktionsanweisung außerhalb der Funktion, anderswo im Modul in derselben Weise, wie wir es zuvor getan haben, z. B.:

```wat
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code, um unser obiges Modul aufzurufen, sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Importieren von Funktionen aus JavaScript

Wir haben bereits gesehen, dass JavaScript WebAssembly-Funktionen aufruft, aber wie sieht es mit WebAssembly aus, das JavaScript-Funktionen aufruft? WebAssembly hat tatsächlich kein eingebautes Wissen über JavaScript, aber es gibt eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Werfen wir einen Blick auf ein Beispiel:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen Namespace auf zwei Ebenen, sodass die Importanweisung hier besagt, dass wir die Funktion `log` aus dem Modul `console` importieren möchten. Sie können auch sehen, dass die exportierte Funktion `logIt` die importierte Funktion mit der oben eingeführten Anweisung `call` aufruft.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die die WebAssembly-Validierung statisch überprüft, und ihnen wird ein Index zugewiesen. Sie können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Signaturbegriff, sodass jede JavaScript-Funktion übergeben werden kann, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften enthält.

Für das Obige benötigen wir ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Das würde wie folgt aussehen:

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
> Sie können dieses Beispiel auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) finden ([siehe es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Deklaration von globalen Variablen in WebAssembly

WebAssembly hat die Möglichkeit, globale Variableninstanzen zu erstellen, die sowohl von JavaScript aus zugänglich sind als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es das dynamische Linken mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben, und wir geben auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes an, wenn wir möchten, dass er veränderlich ist.

Um einen gleichwertigen Wert mit JavaScript zu erstellen, würden Sie den Konstruktor [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly Memory

Die obigen Beispiele zeigen, wie man mit Zahlen in Assemblercode arbeitet, sie dem [Stack](#stackmaschinen) hinzufügt, Operationen an ihnen ausführt und dann das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Um mit Zeichenketten und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder im WebAssembly oder in JavaScript erstellt und zwischen den Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großer, zusammenhängender, veränderlicher Array von Rohbytes, der im Laufe der Zeit wachsen kann (siehe [lineares Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store), um Bytes zwischen dem Stack und einer beliebigen Position im Speicher zu lesen und zu schreiben.

Aus JavaScript-Sicht ist es, als ob der gesamte Speicher innerhalb eines großen sich vergrößerbaren {{jsxref("ArrayBuffer")}} wäre.
JavaScript kann WebAssembly lineare Speicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und in eine Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, zum Beispiel über die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in WebAssembly.
Da `ArrayBuffer`-Objekte die Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, um auf den neueren, größeren Speicher zu zeigen.

Beachten Sie, dass bei der Erstellung des Speichers die Anfangsgröße definiert werden muss, und optional die maximale Größe, auf die der Speicher wachsen kann.
WebAssembly wird versuchen, die maximale Größe (falls angegeben) zu reservieren, und wenn es dazu in der Lage ist, kann es den Puffer effizienter vergrößern. Selbst wenn es die maximale Größe jetzt nicht zuordnen kann, kann es möglicherweise später noch wachsen.
Die Methode schlägt nur fehl, wenn sie die _Anfangsgröße_ nicht zuordnen kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [multiple_memories](#mehrere_speicher) verwenden, wenn der Browser dies unterstützt.
> Code, der keine mehreren Speicher verwendet, muss nicht geändert werden!

Um einige dieser Verhaltensweisen zu demonstrieren, lassen Sie uns den Fall betrachten, in dem wir mit einem String in unserem WebAssembly-Code arbeiten möchten.
Ein String ist nur eine Sequenz von Bytes irgendwo in diesem linearen Speicher.
Angenommen, wir haben eine geeignete Byte-Zeichenfolge in den WebAssembly-Speicher geschrieben, können wir diesen String nach JavaScript übergeben, indem wir den Speicher, die Offsets des Strings im Speicher und eine Möglichkeit zur Angabe der Länge teilen.

Erstens, lassen Sie uns etwas Speicher erstellen und zwischen dem WebAssembly und JavaScript teilen.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir können das WebAssembly-Modul den Speicher erstellen und nach JavaScript exportieren lassen.

Für dieses Beispiel werden wir den Speicher in JavaScript erstellen und dann in WebAssembly importieren.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Dann instanziieren wir unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und übergeben das Importobjekt:

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

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Unter Verwendung des WebAssembly-Textformats wird die Importanweisung wie folgt geschrieben:

```wat
(import "js" "mem" (memory 1))
```

Der Speicher muss mit dem gleichen zweistufigen Schlüssel importiert werden, der im `importObject` angegeben ist (`js.mem`).
Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite mit 64 KB).

> [!NOTE]
> Da dies der erste Speicher ist, der in das WebAssembly-Modul importiert wird, hat es einen Speicherindex von "0".
> Sie können diesen bestimmten Speicher unter Verwendung des Indexes in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da 0 der Standardindex ist, müssen Sie diesen in Anwendungen mit einem einzigen Speicher nicht angeben.

Jetzt, da wir eine gemeinsame Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenkette von Daten hinein zu schreiben.
Wir werden dann Informationen über den Standort und die Länge der Zeichenkette an das JavaScript weitergeben (wir könnten alternativ auch die Länge der Zeichenfolge selbst kodieren, aber das Weitergeben einer Länge ist einfacher für uns zu implementieren).

Zunächst fügen wir unserem Speicher eine Zeichenkette von Daten hinzu, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir den Inhalt der Stringdaten mithilfe eines `data`-Abschnitts global in den Speicher schreiben.
Datensektionen ermöglichen es, eine Zeichenfolge von Bytes zu einer gegebenen Offsetzeit zu schreiben. Instanziationszeit entspricht den `.data`-Abschnitten in nativen Ausführungsformaten. Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) bei Offset 0:

```wat
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Doppelsemikolon-Syntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzuzeigen.
> In diesem Fall verwenden wir sie nur, um Platzhalte für anderen Code anzuzeigen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um den String auf der Konsole zu protokollieren.
Dies muss auf `console.log` im `importObject` abgebildet werden, das zur Instanziierung des WebAssembly-Moduls verwendet wird.
Die Funktion ist im WebAssembly als `$log` benannt und nimmt `i32`-Parameter für den String-Offset und die Länge im Speicher an.

Die zweite WebAssembly-Funktion `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenkette im Speicher (`0` und `2`) auf.
Diese wird aus dem Modul exportiert, sodass sie von JavaScript aus aufgerufen werden kann.

Unser endgültiges WebAssembly-Modul (im Textformat) sieht folgendermaßen aus.

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
Die Funktion erstellt eine Ansicht auf dem String im gemeinsamen Speicher unter Verwendung eines `Uint8Array` am übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann aus UTF-8 in eine Zeichenkette dekodiert mit dem [TextDecoder API](/de/docs/Web/API/TextDecoder) (wir geben hier `utf8` an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenfolge wird dann mit `console.log()` in der Konsole protokolliert.

Der letzte Schritt ist, die exportierte `writeHi()`-Funktion aufzurufen, die erfolgt, nachdem das Objekt instanziiert wurde.
Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi".

> [!NOTE]
> Sie können den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen die Verwendung mehrerer Speicherobjekte in Ihrem WebAssembly und JavaScript, in einer Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzigen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden sollten als andere Anwendungsdaten, z. B. öffentliche vs. private Daten, Daten, die beibehalten werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich sein für sehr große Anwendungen, die über den Wasm 32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine null-indexierte, sequentiell zugewiesene Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index referenzieren, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, den Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wird.
Daher muss, wenn Sie nur einen Speicher hinzufügen, Ihr Code den Index nicht angeben.

Um zu zeigen, wie das im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenketten in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der folgende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, wie im vorherigen Beispiel beschrieben.
Um zu zeigen, wie Sie Speicher innerhalb des WebAssembly-Moduls erstellen können, haben wir eine dritte Speicherinstanz mit dem Namen `$mem2` im Modul erstellt und _exportiert_.

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

Die drei Speicherinstanzen werden automatisch basierend auf ihrer Erstellung zugewiesen.
Der unten stehende Code zeigt, wie wir diesen Index (z. B. `(memory 1)`) in der `data`-Anweisung angeben können, um den gewünschten Speicher auszuwählen, in den wir eine Zeichenkette schreiben möchten (Sie können den gleichen Ansatz für alle anderen Speicheranweisungen verwenden, wenn sie `load` oder `grow` sind).
Hier schreiben wir eine Zeichenkette, die jeden Speichertyp anzeigt.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass `(memory 0)` der Standard ist und daher optional.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"`, ohne den Speicherindex anzugeben, und dies sollte nach `"Memory 0 data"` angehängt werden, wenn der Speicherinhalt protokolliert wird.

Der WebAssembly-Protokollierungscode ist fast genau dasselbe wie das vorherige Beispiel, mit der Ausnahme, dass zusammen mit dem String-Offset und der Länge auch der Index des Speichers übergeben werden muss, der die Zeichenkette enthält.
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

Der JavaScript-Code ist auch sehr ähnlich dem vorherigen Beispiel, mit der Ausnahme, dass wir zwei Speicherinstanzen zu `importObject()` hinzufügen und der vom Modul exportierte Speicher nach der Instanziierung unter Verwendung des aufgelösten Versprechens (`obj.instance.exports`) zugegriffen wird.
Der Code zum Protokollieren jeder Zeichenkette ist auch etwas komplizierter, weil wir den Speichertypindex aus dem WebAssembly mit einem bestimmten `Memory`-Objekt abgleichen müssen.

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

Das Ergebnis des Beispiels sollte ähnlich wie der unten stehende Text sein, mit der Ausnahme, dass "Memory 1 data" möglicherweise einige nachfolgende "nutzlos Zeichen" hat, da der Text-Decoder mehr Bytes als zur Codierung des Strings verwendet werden, übergeben worden sind.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Informationen zur Browser-Kompatibilität für dieses Feature finden Sie unter [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory).

### WebAssembly Tables

Um diese Tour durch das WebAssembly-Textformat abzuschließen, schauen wir uns den vielleicht komplexsten und oft verwirrenden Teil von WebAssembly an: **Tables**. Tabellen sind im Grunde genommen veränderbare Arrays von Referenzen, die vom WebAssembly-Code über Indexe zugegriffen werden können.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zuerst feststellen, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Aufrufen von Funktionen aus anderen Funktionen im selben Modul](#aufrufen_von_funktionen_aus_anderen_funktionen_im_selben_modul)), einen statischen Funktionsindex benötigt und somit immer nur eine Funktion aufrufen kann — aber was passiert, wenn der aufgerufene Wert ein Laufzeitwert ist?

- In JavaScript sehen wir dies die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir dies mit Funktionszeigern.
- In C++ sehen wir dies mit virtuellen Funktionen.

WebAssembly benötigte dafür eine Anweisungstyp, also gaben wir ihm `call_indirect`, welches ein dynamischer Funktionsoperand nimmt. Das Problem ist, dass die einzigen Typen, die wir in WebAssembly bereitstellen können, (derzeit) `i32`/`i64`/`f32`/`f64`-Werte sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen von jeder Signatur halten könnte), aber leider könnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Linearer Speicher gibt den rohen Inhalt von gespeicherten Werten als Bytes aus und ermöglicht es Wasm-Inhalten daher, rohe Funktionsadressen beliebig zu beobachten und zu beeinträchtigen, was im Web nicht erlaubt sein kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und Tabellenindizes anstelle von i32-Werten zu verwenden. `call_indirect`-Operand kann daher ein i32-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Wie also platzieren wir Wasm-Funktionen in unsere Tabelle? Genau wie `data`-Abschnitte verwendet werden können, um Regionen von linearem Speicher mit Bytes zu initialisieren, können `elem`-Abschnitte verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)` ist die 2 die anfängliche Größe der Tabelle (was bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` deklariert, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die (`func`)-Abschnitte sind wie alle anderen deklarierten Wasm-Funktionsabschnitte. Dies sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (zum Zweck des Beispiels gibt jede nur einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert sind, hier nicht von Bedeutung ist — Sie können Ihre Funktionen überall deklarieren und trotzdem in Ihrem `elem`-Abschnitt darauf verweisen.
- Der `elem`-Abschnitt kann jede Untermenge der Funktionen in einem Modul auflisten, in beliebiger Reihenfolge, einschließlich Duplikate. Dies ist eine Liste der Funktionen, auf die von der Tabelle aus verwiesen werden soll, in der Reihenfolge, in der auf sie verwiesen werden soll.
- Der Wert `(i32.const 0)` innerhalb des `elem`-Abschnitts ist ein Offset — dies muss zu Beginn des Abschnitts deklariert werden und spezifiziert, an welchem Index in der Tabelle Funktionsreferenzen zu speichern sind. Hier haben wir 0 spezifiziert, und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen unter den Indizes 0 und 1 auffüllen können. Wenn wir unsere Referenzen bei Offset 1 starten lassen wollten, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standard-Throw-on-Call-Wert.

In JavaScript würden die entsprechenden Aufrufe, um eine solche Tabelleninstanz zu erstellen, etwa so aussehen:

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

#### Verwenden der Tabelle

Gehen wir weiter, nun, da wir die Tabelle definiert haben, müssen wir sie irgendwie verwenden. Lassen Sie uns diesen Codeabschnitt verwenden, um dies zu tun:

```wat
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))` Block spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird bei der Typprüfung der Tabellenfunktionsreferenzaufrufe weiter unten verwendet. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als Nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese wird ein `i32` als Parameter akzeptieren, der den Argumentnamen `$i` trägt.
- Innerhalb der Funktion fügen wir dem Stapel einen Wert hinzu — welchen Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — es poppt implizit den Wert von `$i` vom Stapel. Das Endergebnis ist, dass die `callByIndex`-Funktion die `$i`-te Funktion in der Tabelle aufruft.

Sie könnten auch den `call_indirect`-Parameter explizit während des Befehlaufrufs anstelle davon vorher deklarieren, so etwas wie dieses:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höheren Sprache, die ausdrucksstärker ist wie JavaScript, könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlich wahrscheinlicher einem Objekt) zu machen, das Funktionen enthält. Der Pseudocode würde etwas wie `tbl[i]()` aussehen.

Also, zurück zur Typprüfung. Da WebAssembly typgeprüft ist und der `funcref` potenziell jede Funktionssignatur sein kann, müssen wir die angenommene Signatur des Angerufenen an der Anrufstelle angeben, daher schließen wir den `$return_i32`-Typ ein, um dem Programm mitzuteilen, dass eine Funktion, die ein `i32` zurückgibt, erwartet wird. Wenn der Angerufene keine übereinstimmende Signatur hat (z.B. wird ein `f32` zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Also, was verbindet das `call_indirect` mit der Tabelle, die wir aufrufen wollen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modul erlaubt ist, und das ist das, was `call_indirect` implizit aufruft. In Zukunft, wenn mehrere Tabellen erlaubt sind, würden wir auch eine Tabellenkennung angeben müssen, die in etwa so aussieht:

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das gesamte Modul zusammen sieht so aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat)-Beispieldatei gefunden werden:

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

Wir laden es in eine Webseite mit dem folgenden JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Speicher können Tabellen auch von JavaScript erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie importiert/geladen von einem anderen Wasm-Modul.

### Mutieren von Tabellen und dynamisches Linken

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Tabellenobjekt von JavaScript aus mit den Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) mutiert werden. Und der WebAssembly-Code ist in der Lage, Tabellen mit Anweisungen zu manipulieren, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`.

Da Tabellen veränderlich sind, können sie verwendet werden, um anspruchsvolle Ladevorgänge und zur Laufzeit [dynamische Linkschemata](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verlinkt ist, teilen sich mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einzelnes Importobjekt, das ein Speicherobjekt und ein Tabellenobjekt enthält, und geben dieses gleiche Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Aufrufe weiter.

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

Diese Arbeiten funktionieren wie folgt:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unsere importierte Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und verwendet dann den `i32.load`-Befehl, um den in dem bereitgestellten Speicherindex enthaltenen Wert zu laden. Der bereitgestellte Index ist `0` — wieder, es poppt den vorhergehenden Wert implizit vom Stapel. Also lädt `shared0func` den im Speicherindex `0` gespeicherten Wert und gibt ihn zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, dann ruft sie `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Im letzten Teil der Funktion, schaffen wir eine Konstante mit dem Wert `0`, dann rufen wir die Funktion an dieser Index 0 der Tabelle auf, was `shared0func` ist, das dort früher durch den `elem`-Block in `shared0.wat` gespeichert wurde.
4. Wenn aufgerufen, lädt `shared0func` die `42` die wir im Speicher mit dem `i32.store`-Befehl in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke poppen wieder Werte implizit vom Stapel, aber Sie könnten diese explizit innerhalb der Befehlaufrufe stattdessen deklarieren, zum Beispiel:
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nachdem es in Assembler konvertiert wurde, verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jedes der Module, die kompiliert werden, kann dieselben Speicher- und Tabellenobjekte importieren und damit denselben linearen Speicher und Tabellenspeicher "adressieren".

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk Memory Operations

Bulk-Memory-Operationen sind eine neuere Ergänzung zur Sprache — sieben neue eingebaute Operationen werden für Bulk-Memory-Operationen wie das Kopieren und Initialisieren bereitgestellt, um es WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` auf eine effizientere Weise abzubilden.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations).

Die neuen Operationen sind:

- `data.drop`: Verwerfen der Daten in einem Datensegment.
- `elem.drop`: Verwerfen der Daten in einem Elementsegment.
- `memory.copy`: Kopieren von einem Bereich des linearen Speichers zu einem anderen.
- `memory.fill`: Auffüllen eines Bereichs des linearen Speichers mit einem gegebenen Byte-Wert.
- `memory.init`: Kopieren eines Bereichs von einem Datensegment.
- `table.copy`: Kopieren von einem Bereich einer Tabelle zu einem anderen.
- `table.init`: Kopieren eines Bereichs von einem Elementsegment.

> [!NOTE]
> Weitere Informationen finden Sie im [Bulk memory operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md) Vorschlag.

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit Integer
- `i64`: 64-Bit Integer
- `f32`: 32-Bit Float
- `f64`: 64-Bit Float

### Vektortypen

- `v128`: 128-Bit Vektor von gepackten Ganzzahlen, Gleitkommadaten oder einer einzelnen 128-Bit Typ.

### Referenztypen

Der [Referenztypen Vorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptfunktionen:

- Ein neuer Typ, `externref`, welcher _jeden_ JavaScript-Wert halten kann, zum Beispiel Strings, DOM-Referenzen, Objekte usw. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann diese Werte nicht zugreifen oder manipulieren, sondern kann sie nur empfangen und wieder herausgeben. Dies ist jedoch sehr nützlich, damit Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen können, und im Allgemeinen, um den Weg für eine einfachere Interoperabilität mit der Hostumgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Anzahl neuer Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly_tables) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) Dokumentation enthält einige nützliche Informationen, wie man `externref` aus Rust verwendet.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types).

## Multi-Value WebAssembly

Eine weitere neuere Ergänzung zur Sprache ist das Multi-Value-WebAssembly, das bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungssequenzen mehrere Stack-Werte konsumieren und produzieren können.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value).

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

Aber das wird den Weg für nützlichere Anweisungstypen und andere Dinge ebnen. Für einen nützlichen Überblick über den bisherigen Fortschritt und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly Threads

WebAssembly Threads ermöglichen es WebAssembly Speicherobjekten, über mehrere in separaten Webarbeitern ausgeführte WebAssembly-Instanzen geteilt zu werden, in der gleichen Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht sehr schnelle Kommunikation zwischen Arbeitern und erhebliche Leistungsgewinne in Webanwendungen.

Der Threads-Vorschlag hat zwei Teile, geteilte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics).

### Geteilter Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekte erstellen, die zwischen Fenster- und Arbeiterkontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage), auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) übertragen werden.

Auf der JavaScript-API-Seite hat das [Konstuktionsobjekt von `WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory) jetzt eine `shared`-Eigenschaft, die, wenn sie auf `true` gesetzt wird, einen gemeinsamen Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft des Speichers gibt jetzt einen `SharedArrayBuffer` zurück, anstelle des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen gemeinsamen Speicher mit dem Schlüsselwort `shared` erstellen, so etwas wie dieses:

```wat
(memory 1 2 shared)
```

Im Gegensatz zu ungeteilten Speichern muss ein "maximum" Größe angegeben werden, sowohl im Konstruktor der JavaScript-API als auch im Wasm-Textformat.

> [!NOTE]
> Sie finden viele Details im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md).

### Atomarer Speicherzugriff

Eine Reihe neuer Wasm-Anweisungen wurde hinzugefügt, die verwendet werden können, um höherstufige Funktionen wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads Unterstützungseite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neuen Funktionalitäten aus Emscripten heraus nutzt.

## Zusammenfassung

Dies beendet unsere Übersicht über die Hauptkomponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API widergespiegelt werden.

## Siehe auch

- Der Hauptpunkt, der nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern auftreten können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Spezifikations-Interpreter implementiert wird.
