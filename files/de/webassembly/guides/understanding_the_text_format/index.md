---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

Um WebAssembly für Menschen lesbar und bearbeitbar zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklertools von Browsern usw. dargestellt werden soll. Dieser Artikel erklärt, wie das Textformat funktioniert, in Bezug auf die rohe Syntax, und wie es mit dem zugrunde liegenden Bytecode zusammenhängt, den es darstellt — sowie die Wrapper-Objekte, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der einfach nur ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchte (siehe [Using the WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie zum Beispiel Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Ausdrücke

In beiden Formaten, binär und textuell, ist die grundlegende Codeeinheit in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein sehr altes und einfaches Textformat zur Darstellung von Bäumen, und so können wir uns ein Modul als einen Baum von Knoten vorstellen, der die Struktur des Moduls und seinen Code beschreibt. Im Gegensatz zum abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht hauptsächlich aus Anweisungslisten.

Zunächst sehen wir, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum steht innerhalb eines Klammerpaars — `( ... )`. Das erste Label innerhalb der Klammer gibt an, um welche Art von Knoten es sich handelt, und danach folgt eine durch Leerzeichen getrennte Liste von Attributen oder Kindknoten. Das bedeutet, dass der WebAssembly S-Ausdruck:

```wasm
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einen "memory"-Knoten mit dem Attribut "1" und einen "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber dennoch ein gültiges Modul.

Wenn wir unser Modul jetzt in binär umwandeln (siehe [Converting WebAssembly text format to Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [binären Format](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben wird:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Funktionalität zu Ihrem Modul hinzufügen

Ok, das ist nicht sehr interessant, lassen Sie uns etwas ausführbaren Code zu diesem Modul hinzufügen.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** deklariert, was die Funktion entgegennimmt (Parameter) und was sie zurückgibt (Rückgabewerte).
- Die **Locals** sind wie "vars" in JavaScript, aber mit explizit deklarierten Typen.
- Der **body** ist einfach eine lineare Liste von Low-Level-Instruktionen.

Das ist also ähnlich wie bei Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es ein S-Ausdruck ist.

## Signaturen und Parameter

Die Signatur ist eine Folge von Parameter-Typ-Deklarationen, gefolgt von einer Liste von Rückgabetyp-Deklarationen. Es ist hier erwähnenswert, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann höchstens ein Rückgabetyp vorhanden sein, aber [später wird dies auf eine beliebige Anzahl entspannt](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md).

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Number types](#zahlentypen), [Reference types](#referenztypen), [Vector types](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabetyp als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Ganzzahlen entgegennimmt und eine 64-Bit-Gleitkommazahl zurückgibt, folgendermaßen geschrieben werden:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden Locals mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Wesentlichen einfach Locals, die mit dem Wert des entsprechenden vom Aufrufer übergebenen Arguments initialisiert werden.

## Locals und Parameter holen und setzen

Locals/Parameter können vom Körper der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und beschrieben werden.

Die `local.get`/`local.set`-Befehle beziehen sich auf das Element, das geholt/gesetzt werden soll, über seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration gefolgt von den Locals in der Reihenfolge ihrer Deklaration aufgerufen. Angenommen, die folgende Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` würde den i32-Parameter holen, `local.get 1` würde den f32-Parameter holen und `local.get 2` würde das f64-Local holen.

Hier gibt es ein weiteres Problem - die Verwendung von numerischen Indizes zur Referenzierung von Elementen kann verwirrend und lästig sein, daher erlaubt das Textformat, Parameter, Locals und die meisten anderen Elemente zu benennen, indem ein Name vorangestellt von einem Dollarzeichen (`$`) direkt vor der Typdeklaration enthalten ist.

Daher könnten Sie unsere vorherige Signatur folgendermaßen umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` anstatt `local.get 0` schreiben usw. (Beachten Sie, dass beim Konvertieren dieses Textes in binär allerdings das Binärformat nur die Ganzzahl enthalten wird.)

## Stapelmaschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stapelmaschinen**. Obwohl der Browser es zu etwas Effizienterem kompiliert, wird die Wasm-Ausführung in Bezug auf eine Stapelmaschine definiert, bei der die grundlegende Idee ist, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf/nach einem Stapel schiebt/poppt.

Zum Beispiel wird `local.get` definiert, um den Wert des gelesenen Locals auf den Stapel zu schieben, und `i32.add` poppt zwei `i32`-Werte (es greift implizit die beiden vorher auf den Stapel geschobenen Werte), berechnet ihre Summe (Modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der allmählich gefüllt und entleert wird, während die Anweisungen des Körpers ausgeführt werden. Zum Beispiel, nachdem die folgende Funktion ausgeführt wurde:

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

enthält der Stapel genau einen `i32`-Wert - das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` behandelt wird. Der Rückgabewert einer Funktion ist der letzte verbleibende Wert auf dem Stapel.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stapel genau passt: Wenn Sie einen `(result f32)` deklarieren, muss der Stapel am Ende genau einen `f32` enthalten. Wenn kein Ergebnistyp vorhanden ist, muss der Stapel leer sein.

## Unser erster Funktionskörper

Wie zuvor erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die beim Aufrufen der Funktion verfolgt werden. Indem wir dies mit dem, was wir bereits gelernt haben, zusammenfügen, können wir endlich ein Modul mit unserer eigenen einfachen Funktion definieren:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt noch viele weitere Dinge, die in Funktionskörper eingefügt werden können, aber wir beginnen jetzt einfach und Sie werden auf Ihrem Weg noch viel mehr Beispiele sehen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [WebAssembly.org Semantikreferenz](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird nicht viel alleine tun - jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Locals werden Funktionen standardmäßig durch einen Index identifiziert, aber zur Bequemlichkeit können sie benannt werden. Lassen Sie uns beginnen, indem wir dies tun — zuerst fügen wir einen Namen vorangestellt von einem Dollarzeichen, direkt nach dem `func`-Schlüsselwort, hinzu:

```wasm
(func $add …)
```

Jetzt müssen wir eine Exportdeklaration hinzufügen - das sieht so aus:

```wasm
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` wählt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser endgültiges Modul (für jetzt) sieht so aus:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie dem Beispiel folgen möchten, speichern Sie das obenstehende Modul in einer Datei namens `add.wat`, konvertieren Sie es dann mit einem wabt in eine Binärdatei namens `add.wasm` (siehe [Converting WebAssembly text format to Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als nächstes werden wir unser Binärmodell asynchron instanziieren (siehe [Loading and running WebAssembly code](/de/docs/WebAssembly/Guides/Loading_and_running)) und unsere `add`-Funktion in JavaScript ausführen (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details über die Instanziierungsfunktion.

## Erforschung grundlegender Funktionen

Nachdem wir nun die grundlegenden Grundlagen behandelt haben, wollen wir uns einige fortgeschrittenere Funktionen ansehen.

### Aufruf von Funktionen aus anderen Funktionen im selben Modul

Die `call`-Anweisung ruft eine einzelne Funktion auf, gegeben durch ihren Index oder Namen. Zum Beispiel enthält das folgende Modul zwei Funktionen - eine gibt einfach den Wert 42 zurück, die andere das Ergebnis des Aufrufs der ersten plus eins:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Note:** `i32.const` definiert einfach einen 32-Bit-Integer und schiebt ihn auf den Stapel. Sie könnten das `i32` gegen jeden der anderen verfügbaren Typen austauschen und den Wert der Konstante auf beliebige Werte ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie eine `(export "getAnswerPlus1")`-Sektion bemerken, die direkt nach der `func`-Anweisung in der zweiten Funktion deklariert wird - dies ist eine Kurzform dessen, dass wir diese Funktion exportieren möchten und den Namen definieren, unter dem wir sie exportieren möchten.

Dies ist funktional äquivalent dazu, eine separate Exportanweisung außerhalb der Funktion, an anderer Stelle im Modul auf die gleiche Weise wie zuvor eingefügt, einzuschließen, z.B.:

```wasm
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code, um unser obiges Modul aufzurufen, sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Importieren von Funktionen aus JavaScript

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber wie ist es mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zweistufigen Namensraum, sodass die Importanweisung hier sagt, dass wir die `log`-Funktion aus dem `console`-Modul importieren möchten. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion unter Verwendung der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind genau wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben kein Begriffs-Signatur, sodass jede JavaScript-Funktion, unabhängig von der deklarierten Signatur des Imports, übergeben werden kann. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Import-Objekt übergeben, das die entsprechenden Eigenschaften hat.

Für das Obige benötigen wir ein Objekt (lassen Sie es uns `importObject` nennen), sodass `importObject.console.log` eine JavaScript-Funktion ist.

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
> Sie finden dieses Beispiel auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Deklarieren von Globals in WebAssembly

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl aus JavaScript zugänglich sind, als auch importierbar/exportierbar über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen. Das ist sehr nützlich, denn es ermöglicht das dynamische Verknüpfen mehrerer Module.

Im WebAssembly-Textformat sieht es so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

```wasm
(module
  (global $g (import "js" "global") (mut i32))
  (func (export "getGlobal") (result i32)
    (global.get $g))
  (func (export "incGlobal")
    (global.set $g
      (i32.add (global.get $g) (i32.const 1))))
)
```

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben und auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Werts angeben, wenn wir es änderbar machen möchten.

Um einen äquivalenten Wert unter Verwendung von JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assembler-Code arbeitet, sie in den [Stapel](#stapelmaschinen) zu übertragen, Operationen darauf durchzuführen und das Ergebnis durch Aufrufen einer Methode in JavaScript zu protokollieren.

Um mit Zeichenfolgen und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder in der WebAssembly oder in JavaScript erstellt werden kann und zwischen den Umgebungen geteilt wird (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` lediglich ein großer zusammenhängender, veränderbarer Bereich von Rohbytes, der im Laufe der Zeit wachsen kann (siehe [lineare Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store), um Bytes zwischen dem Stapel und einer beliebigen Stelle im Speicher zu lesen und zu schreiben.

Aus der Perspektive von JavaScript sieht es so aus, als ob sich der gesamte Speicher in einem großen wachsbaren {{jsxref("ArrayBuffer")}} befindet.
JavaScript kann WebAssembly-lineare Speicherinstanzen über das [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Interface erstellen und zu einer Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der ein `ArrayBuffer` zurückgibt, das auf den gesamten linearen Speicher verweist.

Speicherinstanzen können auch wachsen, zum Beispiel über die Methode [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) im WebAssembly.
Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, der auf den neueren, größeren Speicher verweist.

Beachten Sie, dass Sie beim Erstellen des Speichers die Anfangsgröße definieren müssen und Sie optional die maximale Größe angeben können, auf die der Speicher wachsen kann.
WebAssembly versucht, die maximale Größe (falls angegeben) zu reservieren, und wenn es in der Lage ist, dies zu tun, kann der Puffer in Zukunft effizienter wachsen. Selbst wenn es die maximale Größe jetzt nicht zuweisen kann, kann es möglicherweise in Zukunft doch noch wachsen.
Die Methode schlägt nur fehl, wenn die _anfängliche_ Größe nicht zugewiesen werden kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speichereinheiten](#mehrere_speicherobjekte) haben, wenn sie vom Browser unterstützt werden.
> Code, der keine mehreren Speicher verwendet, muss nicht geändert werden!

Um einige dieser Verhaltensweisen zu demonstrieren, lassen Sie uns den Fall betrachten, in dem wir mit einer Zeichenfolge in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenfolge ist einfach eine Folge von Bytes irgendwo innerhalb dieses linearen Speichers.
Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenfolge mit JavaScript teilen, indem wir den Speicher, den Offset der Zeichenfolge innerhalb des Speichers und einen Weg zur Angabe der Länge teilen.

Zuerst erstellen wir etwas Speicher und teilen ihn zwischen der WebAssembly und JavaScript.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen oder das WebAssembly-Modul den Speicher erstellen und an JavaScript exportieren lassen.

Für dieses Beispiel werden wir den Speicher in JavaScript erstellen und dann in WebAssembly importieren.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Dann instanziieren wir unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", unter Verwendung der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und Übergabe des Import-Objekts:

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

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Im WebAssembly-Textformat wird die `import`-Anweisung folgendermaßen geschrieben:

```wasm
(import "js" "mem" (memory 1))
```

Der Speicher muss unter Verwendung des gleichen zweistufigen Schlüssels importiert werden, der im `importObject` angegeben ist (`js.mem`).
Die `1` zeigt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste in das WebAssembly-Modul importierte Speicher ist, hat es einen Speicherindex von "0".
> Sie könnten auf diesen bestimmten Speicher unter Verwendung des Indexes in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verweisen, aber da 0 der Standardindex ist, müssen Sie den Index in Einzelspeicheranwendungen nicht angeben.

Da wir nun eine gemeinsame Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenfolge von Daten darin zu schreiben.
Wir werden dann Informationen darüber an JavaScript übergeben, wo sich die Zeichenfolge befindet und wie lang sie ist (wir könnten alternativ die Länge der Zeichenfolge in der Zeichenfolge selbst kodieren, aber das Übergeben einer Länge ist für uns einfacher zu implementieren).

Zuerst fügen wir eine Zeichenfolge von Daten in unseren Speicher ein, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir die Zeichenfolgeninhalte einfach in den globalen Speicher mit einem `data`-Bereich schreiben.
Datenbereiche ermöglichen das Schreiben einer Zeichenfolge von Bytes zu einem bestimmten Offset zur Instantiierungszeit und sind den `.data`-Bereichen in nativen ausführbaren Formaten ähnlich.
Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) bei Offset 0:

```wasm
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Syntax mit Doppelpunktkommentaren (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzuzeigen.
> In diesem Fall verwenden wir sie einfach, um Platzhalter für anderes nützliches Code anzuzeigen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um die Zeichenfolge in die Konsole zu loggen.
Diese muss auf `console.log` im `importObject` gemappt werden, das verwendet wird, um das WebAssembly-Modul zu instanziieren.
Die Funktion heißt `$log` im WebAssembly und nimmt `i32`-Parameter für den Zeichenfolgenoffset und die Länge im Speicher entgegen.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und Länge der Zeichenfolge im Speicher (`0` und `2`) auf.
Dies wird aus dem Modul exportiert, damit es von JavaScript aus aufgerufen werden kann.

Unser endgültiges WebAssembly-Modul (im Textformat) sieht folgendermaßen aus.

```wasm
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

Auf der JavaScript-Seite müssen wir die Anmeldefunktion definieren, sie an das WebAssembly weitergeben und dann die exportierte `writeHi()`-Methode aufrufen.
Der vollständige Code sieht folgendermaßen aus:

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

Beachten Sie, dass die Anmeldefunktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben wird und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht auf der Zeichenfolge im gemeinsamen Speicher unter Verwendung eines `Uint8Array` beim übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann von UTF-8 in eine Zeichenfolge mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) dekodiert (wir geben hier `utf8` an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenfolge wird dann mit `console.log()` protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Instanziierung des Objekts geschieht.
Wenn Sie den Code ausführen, wird die Konsole den Text "Hi" anzeigen.

> [!NOTE]
> Sie finden den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicherobjekte

Neuere Implementierungen ermöglichen die Verwendung mehrerer Speicherobjekte in Ihrem WebAssembly und JavaScript, auf eine Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur ein einzelnes Speicherobjekt unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden sollten als andere Anwendungsdaten, wie z.B. öffentliche vs. private Daten, Daten, die dauerhaft gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich sein für sehr große Anwendungen, die über den Wasm 32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine nullbasierte, sequentiell zugewiesene Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index zugreifen, so dass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, den Index des ersten Speichers, der der WebAssembly-Instanz hinzugefügt wird.
Infolgedessen, wenn Sie nur einen Speicher hinzufügen, muss Ihr Code den Index nicht angeben.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen in drei verschiedene Speicher zu schreiben und die Ergebnisse zu loggen.
Der folgende Code zeigt, wie wir zunächst zwei Speicherinstanzen importieren, indem wir die gleiche Methode wie im vorherigen Beispiel verwenden.
Um zu zeigen, wie man Speicher innerhalb des WebAssembly-Moduls erstellen kann, haben wir eine dritte Speicherinstanz namens `$mem2` im Modul erstellt und _exportiert_.

```wasm
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

Die drei Speicherinstanzen erhalten automatisch einen Index, basierend auf ihrer Erstellungsreihenfolge.
Der folgende Code zeigt, wie wir diesen Index spezifizieren können (z.B. `(memory 1)`) in den `data`-Anweisungen, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten (Sie können die gleiche Methode für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenfolge, die den Speichertyp angibt.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass `(memory 0)` der Standard ist und daher optional ist.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"`, ohne den Speicherindex anzugeben, und dies sollte nach `"Memory 0 data"` angehängt werden, wenn der Speicherinhalt geloggt wird.

Der WebAssembly-Logging-Code ist fast genau derselbe wie im vorherigen Beispiel, außer dass wir zusammen mit dem Zeichenfolgenoffset und der Länge auch den Index des Speichers übergeben müssen, der die Zeichenfolge enthält.
Wir loggen auch alle drei Speicherinstanzen.

Das vollständige Modul sieht folgendermaßen aus:

```wasm
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

Der JavaScript-Code ist ebenfalls sehr ähnlich dem vorherigen Beispiel, außer dass wir zwei Speicherinstanzen an die `importObject()` übergeben und auf die vom Modul instanziierte gespeicherte Speicherinstanz unter Verwendung der aufgelösten Promise (`obj.instance.exports`) zugreifen.
Der Code, um jede Zeichenfolge zu loggen, ist ebenfalls etwas komplizierter, weil wir die Speicherinstanznummer vom WebAssembly mit einem bestimmten `Memory`-Objekt abstimmen müssen.

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
    //Get exported memory
    memory2 = obj.instance.exports.memory2;
    //Log memory
    obj.instance.exports.logAllMemory();
  },
);
```

Die Ausgabe des Beispiels sollte ähnlich dem folgenden Text sein, außer dass "Memory 1 data" einige nachlaufende "Rauschzeichen" haben könnte, weil der Textdecoder mehr Bytes übergeben bekommt, als zur Kodierung der Zeichenfolge genutzt werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie finden den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory), um Informationen zur Browser-Kompatibilität für diese Funktion zu erhalten.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat abzuschließen, werfen wir einen Blick auf den komplexesten und oft verwirrendsten Teil von WebAssembly: **Tabellen**. Tabellen sind im Grunde genommen resizable Arrays von Referenzen, die vom WebAssembly-Code über einen Index abgerufen werden können.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zunächst beobachten, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Funktionsaufrufe von anderen Funktionen im selben Modul](#aufruf_von_funktionen_aus_anderen_funktionen_im_selben_modul)), einen statischen Funktionsindex nimmt und daher nur eine Funktion aufrufen kann - aber was ist, wenn der Aufrufer ein Laufzeitwert ist?

- In JavaScript sehen wir das die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir das mit Funktionszeigern.
- In C++ sehen wir das mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufanweisung, um dies zu verwirklichen, also gaben wir ihm `call_indirect`, das einen dynamischen Funktionsoperanden takes. Das Problem ist, dass die einzigen Typen, die wir bisher in WebAssembly für Operanden mitgeben können, (derzeit) `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen von beliebigen Signaturen enthalten könnte), aber leider konnte dieser `anyfunc`-Typ nicht zur Sicherheit in linearem Speicher gespeichert werden. Der lineare Speicher legt die rohen Inhalte der gespeicherten Werte in Byteform offen und das würde es dem Wasm-Inhalt ermöglichen, die rohen Funktionsadressen beliebig zu beobachten und zu verfälschen, was auf dem Web nicht erlaubt werden kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes zu verwenden, die einfach `i32`-Werte sind. `call_indirect`'s Operanden können daher ein `i32`-Indexwert sein.

#### Eine Tabelle in Wasm definieren

Wie platzieren wir nun Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Sektionen verwendet werden können, um Regionen von linearem Speicher mit Bytes zu initialisieren, können `elem`-Sektionen verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

```wasm
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

- In `(table 2 funcref)` ist die 2 die anfängliche Größe der Tabelle (was bedeutet, dass sie zwei Referenzen speichert) und `funcref` gibt an, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die Funktions (`func`) Sektionen sind genau wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, die wir in unserer Tabelle referenzieren werden (der Einfachheit halber gibt jede nur einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Sektionen hier deklariert werden, keine Rolle spielt - Sie können Ihre Funktionen überall deklarieren und sie immer noch in Ihrer `elem`-Sektion referenzieren.
- Die `elem`-Sektion kann jede Teilmenge der Funktionen in einem Modul in beliebiger Reihenfolge auflisten, und Duplikate erlauben. Dies ist eine Liste der Funktionen, die von der Tabelle referenziert werden sollen, in der Reihenfolge, in der sie referenziert werden sollen.
- Der `(i32.const 0)`-Wert innerhalb der `elem`-Sektion ist ein Offset - dieser muss am Anfang der Sektion deklariert werden und gibt an, bei welchem Index in der Tabelle die Funktionsreferenzen zu füllen beginnen. Hier haben wir `0` angegeben und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen an den Indizes 0 und 1 füllen können. Wenn wir damit beginnen wollten, unsere Referenzen bei Offset 1 zu schreiben, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste 3 betragen.

> [!NOTE]
> Uninitialisierte Elemente bekommen einen Standard-Wert für Aufruffehler.

In JavaScript würden die äquivalenten Aufrufe zur Erstellung einer solchen Tabelleninstanz ungefähr so aussehen:

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

Nun, da wir die Tabelle definiert haben, müssen wir sie irgendwie verwenden. Lassen Sie uns diesen Codeabschnitt verwenden, um dies zu tun:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))`-Block gibt einen Typ mit einem Referenznamen an. Dieser Typ wird bei der Typüberprüfung der Funktionsreferenzaufrufe der Tabelle später verwendet. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die einen `i32` als Ergebnis zurückgeben.
- Als Nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese nimmt einen `i32` als Parameter, der den Argumentnamen `$i` erhält.
- Innerhalb der Funktion fügen wir einen Wert auf den Stapel hinzu - was auch immer Wert als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen - sie poppt implizit den Wert von `$i` vom Stapel. Das Endergebnis davon ist, dass die Funktion `callByIndex` die `$i`-te Funktion in der Tabelle aufruft.

Sie könnten den `call_indirect`-Parameter auch explizit während des Befehlsaufrufs anstatt davor deklarieren, wie z.B. folgendermaßen:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherwertigen, ausdrucksreicheren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlich wahrscheinlicher einem Objekt) tun, das Funktionen enthält. Der Pseudocode würde ungefähr so aussehen wie `tbl[i]()`.

Zurück zur Typüberprüfung. Da WebAssembly typgeprüft ist und der `funcref` potenziell jede Funktionensignatur haben kann, müssen wir beim Aufruf den vermeintlichen Signaturpräfix des Anrufers angeben, daher inkludieren wir den `$return_i32`-Typ, um dem Programm zu mitteilen, dass eine Funktion erwartet wird, die einen `i32` zurückgibt. Wenn der Aufrufer keine passende Signatur hat (z.B. ein `f32` anstelle eines `i32` zurückgegeben wird), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Was verbindet also `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist es, was `call_indirect` implizit aufruft. In der Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennung auf irgendeine Art und Weise angeben, so etwas wie

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht alle Teile zusammen so aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat)-Beispieldatei gefunden werden:

```wasm
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

Wir laden es in eine Webseite unter Verwendung des folgenden JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([sehen Sie es live](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Speicher können auch Tabellen von JavaScript erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie zu/von einem anderen Wasm-Modul importiert.

### Tabellen mutieren und dynamisches Linken

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt von JavaScript aus über die Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) mutiert werden. Und WebAssembly-Code kann auch Tabellen mit Anweisungen, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`, manipulieren.

Da Tabellen veränderbar sind, können sie verwendet werden, um komplexe Laufzeit- und Ladezeitschemata für dynamisches Linken zu implementieren. Wenn ein Programm dynamisch verlinkt wird, teilen mehrere Instanzen den gleichen Memory und die gleiche Tabelle. Das ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s den Adressraum eines einzelnen Prozesses gemeinsam nutzen.

Um dies in der Praxis zu sehen, erstellen wir ein einziges Import-Objekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses Import-Objekt mehreren [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Aufrufen.

Unsere `.wat`-Beispiele sehen so aus:

`shared0.wat`:

```wasm
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

```wasm
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

Diese funktionieren folgendermaßen:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und ruft dann den Befehl `i32.load` auf, um den in dem angegebenen Speicherindex enthaltenen Wert zu laden. Der Index, der bereitgestellt wird, ist `0` — wiederum poppt es implizit den vorherigen Wert vom Stapel. Also lädt `shared0func` und gibt den im Speicherindex `0` gespeicherten Wert zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten, die die Werte `0` und `42` enthalten, und ruft dann `i32.store` auf, um einen bereitgestellten Wert in einem bereitgestellten Index des importierten Speichers zu speichern. Wiederum poppt er implizit diese Werte vom Stapel, sodass das Ergebnis darin besteht, dass der Wert 42 im Speicherindex `0` gespeichert wird,
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, dann rufen wir die Funktion im Tabellenindex 0 auf, was `shared0func` ist, das dort zuvor vom `elem`-Block in `shared0.wat` gespeichert wurde.
5. Wenn aufgerufen, lädt `shared0func` die `42`, die wir im Speicher mit dem `i32.store`-Befehl in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke poppen wieder alle Werte implizit vom Stapel, aber Sie könnten diese explizit innerhalb der Befehlsaufrufe anstelle von ihnen deklarieren, z.B.:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach dem Konvertieren in Assembly verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jede der zu kompilierenden Module kann dieselben Zeit- und Tabellenobjekte importieren und damit denselben linearen Speicher und Tabellen-"Adressraum" teilen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([see it live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk Memory Operationen

Bulk Memory Operationen sind eine neuere Ergänzung zur Sprache — sieben neue eingebaute Operationen werden für Massenwerksspeicheroperationen wie Kopieren und Initialisieren bereitgestellt, um es WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` auf effizientere, leistungsstärkere Weise zu modellieren.

> [!NOTE]
> See [`webassembly.bulk-memory-operations` on the home page](/de/docs/WebAssembly#webassembly.bulk-memory-operations) for browser compatibility information.

Die neuen Operationen sind:

- `data.drop`: Verwerfe die Daten in einem Datensegment.
- `elem.drop`: Verwerfe die Daten in einem Elementsegment.
- `memory.copy`: Kopiere von einer Region des linearen Speichers zu einer anderen.
- `memory.fill`: Fülle eine Region des linearen Speichers mit einem bestimmten Bytewert.
- `memory.init`: Kopiere eine Region aus einem Datensegment.
- `table.copy`: Kopiere von einer Region einer Tabelle zu einer anderen.
- `table.init`: Kopiere eine Region aus einem Elementsegment.

> [!NOTE]
> Sie finden weitere Informationen im [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md)-Vorschlag.

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

### Vektortypen

- `v128`: 128-Bit Vektor von gepackten Ganzzahldaten, Gleitkommadaten, oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Referenztypen-Vorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Einen neuen Typ, `externref`, der _jeden_ JavaScript-Wert halten kann, z.B. Zeichenfolgen, DOM-Referenzen, Objekte, usw. `externref` ist aus Sicht von WebAssembly intransparent — ein Wasm-Modul kann auf diese Werte nicht zugreifen und diese nicht manipulieren und kann stattdessen sie nur empfangen und zurückgeben. Aber das ist sehr nützlich, um es Wasm-Modulen zu ermöglichen, JavaScript-Funktionen, DOM-APIs usw. aufzurufen und generell den Weg für eine einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Reihe neuer Anweisungen, die es Wasm-Modulen erlauben, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält einige nützliche Informationen, wie man `externref` von Rust aus nutzbar macht.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multivalue WebAssembly

Eine weitere jüngere Ergänzung zur Sprache ist Multi-Value WebAssembly, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungsfolgen mehrere Stapelwerte konsumieren und erzeugen können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen multivalued Anweisungen, die verfügbar sind, sind Aufrufe an Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

```wasm
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

Aber dies wird den Weg für nützlichere Anweisungstypen ebnen und für andere Dinge nebenbei. Für eine nützliche Beschreibung des bisherigen Fortschritts und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly Threads

WebAssembly-Threads erlauben es, dass WebAssembly-Speicherobjekte über mehrere WebAssembly-Instanzen hinweg, die in separaten Web Workern laufen, auf die gleiche Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript, gemeinsam genutzt werden. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungssteigerungen in Web-Anwendungen.

Der Threads-Vorschlag hat zwei Teile, geteilter Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Geteilter Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly-[`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Window- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) übergeben werden können.

Auf der JavaScript-API-Seite verfügt der [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)-Konstruktor jetzt über ein `shared`-Eigenschaft, das, wenn auf `true` gesetzt, geteilten Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des Speichers wird jetzt einen `SharedArrayBuffer` zurückgeben, anstelle des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat kann ein geteiltes Speicher unter Verwendung des Schlüsselworts `shared` erstellt werden, wie folgt:

```wasm
(memory 1 2 shared)
```

Im Gegensatz zu ungeteilten Speichern müssen geteilte Speicher in sowohl dem JavaScript-API-Konstruktor als auch dem Wasm-Textformat eine "maximale" Größe angeben.

> [!NOTE]
> Sie finden viele weitere Details im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurde hinzugefügt, die verwendet werden können, um höhere Ebene Funktionen wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads-Unterstützungsseite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie Sie sich diese neuen Funktionalitäten von Emscripten zunutze machen können.

## Zusammenfassung

Damit schließen wir unsere Tour über die Hauptkomponenten des WebAssembly-Textformats und wie sie sich in der WebAssembly-JavaScript-API widerspiegeln, ab.

## Siehe auch

- Das Hauptthema, das nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für die Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Spezifikationsinterpreter implementiert wird.
