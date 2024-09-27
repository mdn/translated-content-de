---
title: WebAssembly-Textformat verstehen
slug: WebAssembly/Understanding_the_text_format
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Um WebAssembly menschenlesbar und bearbeitbar zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklertools von Browsern etc. verwendet werden kann. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die rohe Syntax, und wie es sich auf den zugrunde liegenden Bytecode bezieht, den es darstellt — sowie die Wrapper-Objekte, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der nur ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren, oder Ihren eigenen WebAssembly-Compiler erstellen.

## S-Expressions

In sowohl binären als auch textuellen Formaten ist die grundlegende Einheit des Codes in WebAssembly ein Modul. Im Textformat wird ein Modul als eine große S-Expression dargestellt. S-Expressions sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen, und somit können wir uns ein Modul als einen Baum von Knoten vorstellen, die die Struktur des Moduls und seinen Code beschreiben. Im Gegensatz zum abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Erstens, schauen wir uns an, wie eine S-Expression aussieht. Jeder Knoten im Baum geht in ein Paar von Klammern — `( ... )`. Das erste Label innerhalb der Klammern sagt Ihnen, welcher Knotentyp es ist, und danach folgt eine durch Leerzeichen getrennte Liste von entweder Attributen oder Kindknoten. Das bedeutet, dass die WebAssembly S-Expression:

```wasm
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einem "memory" Knoten mit dem Attribut "1" und einem "func" Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber immer noch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärformat umwandeln (siehe [Konvertieren des WebAssembly-Textformats zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm)), sehen wir nur den 8-Byte Modulkopf, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben wird:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Funktionalität zu Ihrem Modul hinzufügen

Ok, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die die folgende Pseudocode-Struktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** erklärt, was die Funktion nimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Locals** sind wie Variablen in JavaScript, aber mit explizit deklarierten Typen.
- Der **Body** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Dies ist also ähnlich wie Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es eine S-Expression ist.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parameter-Typdeklarationen, gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist hier wichtig zu beachten:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es maximal einen Rückgabetyp geben, aber [später wird dies gelockert werden](https://github.com/WebAssembly/spec/blob/master/proposals/multi-value/Overview.md) auf eine beliebige Anzahl.

Jeder Parameter hat einen Typ, der explizit deklariert ist; Wasm [Number types](#zahlentypen), [Reference types](#referenztypen), [Vector types](#vektortypen). Die Zahlentypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

Ein einzelner Parameter wird als `(param i32)` und der Rückgabetyp als `(result i32)` geschrieben, daher würde eine binäre Funktion, die zwei 32-Bit-Integer nimmt und einen 64-Bit-Float zurückgibt, so geschrieben werden:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden Locals mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Grunde nur Locals, die mit dem Wert des entsprechenden vom Anrufer übergebenen Arguments initialisiert sind.

## Lokale und Parameter lesen und setzen

Locals/Parameter können vom Body der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die Befehle `local.get`/`local.set` beziehen sich auf das zu holende/zu setzende Element durch seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration angesprochen, gefolgt von Locals in der Reihenfolge ihrer Deklaration. Bei der folgenden Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Würde die Anweisung `local.get 0` den i32-Parameter holen, `local.get 1` den f32-Parameter und `local.get 2` den f64-Local.

Es gibt hier ein weiteres Problem — die Verwendung numerischer Indizes zur Referenzierung von Elementen kann verwirrend und lästig sein, daher ermöglicht das Textformat, Parameter, Locals und die meisten anderen Elemente zu benennen, indem vor der Typdeklaration ein durch ein Dollarzeichen (`$`) vorangestellter Name eingefügt wird.

Somit könnte man unsere vorherige Signatur wie folgt umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann `local.get $p1` anstelle von `local.get 0` schreiben, usw. (Beachten Sie, dass, wenn dieser Text in Binär umgewandelt wird, das Binär nur die Ganzzahl enthält.)

## Stack-Maschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stack-Maschinen**. Obwohl der Browser es in etwas Effizienteres kompiliert, ist die Ausführung von Wasm in einer Stack-Maschine definiert, bei der die Grundidee ist, dass jeder Instruktionstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf den Stack schiebt und/oder von diesem nimmt.

Zum Beispiel ist `local.get` so definiert, dass es den Wert des lokalen Elements, das es liest, auf den Stack schiebt, und `i32.add` nimmt zwei `i32`-Werte (es greift implizit auf die vorherigen zwei auf den Stack geschobenen Werte zurück), berechnet deren Summe (modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stack, der allmählich gefüllt und geleert wird, während die Anweisungen des Bodys ausgeführt werden. Zum Beispiel enthält der Stack nach Ausführung der folgenden Funktion genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` behandelt wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert auf dem Stack.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stack genau übereinstimmt: Wenn Sie einen `(result f32)` deklarieren, muss am Ende des Stacks genau ein `f32` enthalten sein. Wenn kein Rückgabewerttyp vorhanden ist, muss der Stack leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. In Kombination mit dem, was wir bereits gelernt haben, können wir schließlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt viele weitere Sachen, die in Funktionskörper eingefügt werden können, aber wir beginnen zunächst einfach, und Sie werden im Laufe der Zeit viel mehr Beispiele sehen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie das [Webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird alleine nicht viel tun — jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Locals werden Funktionen standardmäßig durch einen Index identifiziert, können aber zur Bequemlichkeit benannt werden. Beginnen wir damit — zuerst fügen wir einen Namen, gefolgt von einem Dollarzeichen, direkt nach dem `func`-Schlüsselwort hinzu:

```wasm
(func $add …)
```

Nun müssen wir eine Exportdeklaration hinzufügen — das sieht so aus:

```wasm
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` auswählt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser endgültiges Modul (vorerst) sieht so aus:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie den Beispielen folgen möchten, speichern Sie das obenstehende Modul in einer Datei namens `add.wat` und konvertieren Sie es dann in eine Binärdatei namens `add.wasm` mit wabt (siehe [Konvertieren des WebAssembly-Textformats zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm) für Details).

Als Nächstes werden wir unser Binärformat asynchron instanziieren (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running)) und unsere `add`-Funktion in JavaScript ausführen (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) für weitere Details zur Instanziierungsfunktion.

## Grundlagen erkunden

Jetzt, da wir die wirklichen Grundlagen behandelt haben, schauen wir uns einige fortgeschrittenere Funktionen an.

### Funktionen aus anderen Funktionen im selben Modul aufrufen

Die `call`-Anweisung ruft eine einzelne Funktion auf, gegeben ihr Index oder Name. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt nur den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufs der ersten plus eins zurück:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach eine 32-Bit-Ganzzahl und schiebt sie auf den Stack. Sie könnten das `i32` gegen einen der anderen verfügbaren Typen austauschen und den Wert der Konstanten auf beliebige Werte ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie eine `(export "getAnswerPlus1")`-Sektion bemerken, die direkt nach der `func`-Anweisung in der zweiten Funktion deklariert wird — dies ist eine Kurzform, um zu deklarieren, dass wir diese Funktion exportieren möchten, und den Namen zu definieren, unter dem wir sie exportieren möchten.

Dies ist funktional gleichwertig dazu, eine separate Funktionsdeklaration außerhalb der Funktion einzuschließen, an anderer Stelle im Modul auf die gleiche Weise wie zuvor:

```wasm
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code, um unser obiges Modul aufzurufen, sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Funktionen aus JavaScript importieren

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber was ist mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Werfen wir einen Blick auf ein Beispiel:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat ein zweigliedriges Namensraum, daher sagt die Importanweisung hier, dass wir bitten, die `log`-Funktion aus dem `console`-Modul zu importieren. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mit der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch geprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Begriff von Signatur, sodass jede JavaScript-Funktion übergeben werden kann, unabhängig von der in der Importanweisung deklarierten Signatur. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften aufweist.

Für das oben Genannte benötigen wir ein Objekt (wir nennen es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Dies sähe folgendermaßen aus:

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

### Globale Variablen in WebAssembly deklarieren

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl aus JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar sind. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein JavaScript-Live-Beispiel):

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

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben und wir auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Werts angeben, wenn wir möchten, dass er veränderlich ist.

Um einen gleichwertigen Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen in Assembly-Code arbeitet, sie auf den [Stack](#stack-maschinen) legt, Operationen an ihnen ausführt und das Ergebnis durch Aufruf einer Methode in JavaScript protokolliert.

Zum Arbeiten mit Zeichenfolgen und anderen komplexeren Datentypen verwenden wir `memory`, das entweder in der WebAssembly oder im JavaScript erstellt und zwischen Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Reference types](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großes zusammenhängendes, veränderbares Array aus Rohbytes, das im Laufe der Zeit wachsen kann (siehe [linear memory](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicherbefehle](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store), um Bytes zwischen dem Stack und einem beliebigen Ort im Speicher zu lesen und zu schreiben.

Aus Sicht von JavaScript ist es, als ob sich der gesamte Speicher in einem großen wachstumsfähigen {{jsxref("ArrayBuffer")}} befindet. JavaScript kann WebAssembly lineare Speicherinstanzanzen über die Schnittstelle [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory) erstellen und sie in eine Speicherinstanz exportieren oder eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript `Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können ebenfalls wachsen, zum Beispiel über die [`Memory.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in der WebAssembly. Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` wird erstellt, um auf den neueren, größeren Speicher zu zeigen.

Beachten Sie, dass Sie bei der Erstellung des Speichers die anfängliche Größe definieren müssen und Sie optional die maximale Größe angeben können, auf die der Speicher wachsen darf. WebAssembly wird versuchen, die maximale Größe (falls angegeben) zu reservieren, und wenn es dazu in der Lage ist, kann es den Puffer in Zukunft effizienter wachsen lassen. Selbst wenn es jetzt die maximale Größe nicht allozieren kann, kann es möglicherweise später noch wachsen. Die Methode schlägt nur fehl, wenn sie die _anfängliche_ Größe nicht allozieren kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz. Sie können jetzt [multiple_memories](#mehrere_erinnerungen) haben, wenn dies vom Browser unterstützt wird. Code, der keine mehreren Erinnerungen verwendet, muss nicht geändert werden!

Um einen Teil dieses Verhaltens zu demonstrieren, betrachten wir den Fall, in dem wir mit einem String in unserem WebAssembly-Code arbeiten möchten. Ein String ist einfach eine Sequenz von Bytes irgendwo innerhalb dieses linearen Speichers. Angenommen, wir haben ein geeignete Zeichenkette von Bytes in den WebAssembly-Speicher geschrieben, können wir diesen String an JavaScript übergeben, indem wir den Speicher, den Offset des Strings innerhalb des Speichers und eine Möglichkeit, die Länge anzugeben, teilen.

Erstens erstellen wir etwas Speicher und teilen ihn zwischen der WebAssembly und JavaScript. WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir lassen das WebAssembly-Modul den Speicher erstellen und an JavaScript exportieren.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly. Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unter dem Schlüssel `js.mem` zu unserem `importObject` hinzu. Dann instanziieren wir unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", unter Verwendung der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) und übergeben das Import-Objekt:

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

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Mit dem WebAssembly-Textformat wird die `import`-Anweisung wie folgt geschrieben:

```wasm
(import "js" "mem" (memory 1))
```

Der Speicher muss mit denselben zwei in `importObject` angegebenen Schlüsseln (`js.mem`) importiert werden. Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste in das WebAssembly-Modul importierte Speicher ist, hat es einen Speicherindex von "0". Sie könnten diesen speziellen Speicher mit dem Index in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da 0 der Standardindex ist, müssen in Anwendungen mit einem einzigen Speicher keine speziellen Indexe angegeben werden.

Da wir nun eine gemeinsame Speicherinstanz haben, besteht der nächste Schritt darin, einen String von Daten in den Speicher zu schreiben. Wir übergeben dann Informationen darüber, wo sich der String befindet und seine Länge an das JavaScript (wir könnten alternativ die Länge des Strings im String selbst codieren, aber eine Länge zu übergeben ist für uns einfacher zu implementieren).

Zuerst fügen wir einen String von Daten zu unserem Speicher hinzu, in diesem Fall "Hi". Da wir den gesamten linearen Speicher besitzen, können wir die Stringinhalte einfach mit einem `data`-Abschnitt in den globalen Speicher schreiben. Datenabschnitte ermöglichen das Schreiben einer Zeichenkette von Bytes an einem bestimmten Offset während der Instanziierungszeit und sind ähnlich wie die `.data`-Abschnitte in nativen ausführbaren Formaten. Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) bei Offset 0:

```wasm
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Doppelsemikolon-Syntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzuzeigen. In diesem Fall verwenden wir sie nur, um Platzhalter für anderen Code anzuzeigen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen. Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um den String in die Konsole zu protokollieren. Diese muss der `console.log` Mapping zu dem `importObject` zugeordnet sein, das zur Instanziierung des WebAssembly-Moduls verwendet wird. Die Funktion heißt `$log` in der WebAssembly und nimmt `i32` Parameter für den Stringoffset und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge des Strings im Speicher auf (`0` und `2`). Diese wird aus dem Modul exportiert, sodass sie von JavaScript aufgerufen werden kann.

Unser endgültiges WebAssembly-Modul (im Textformat) sieht folgendermaßen aus:

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

Auf der JavaScript-Seite müssen wir die Protokollierungsfunktion definieren, sie an das WebAssembly weitergeben und dann die exportierte `writeHi()`-Methode aufrufen. Der vollständige Code wird unten gezeigt:

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` an die Eigenschaft `console.log` des `importObject` übergeben wird und vom WebAssembly-Modul importiert wird. Die Funktion erstellt eine Ansicht des Strings im gemeinsamen Speicher, unter Verwendung eines `Uint8Array` bei dem übergebenen Offset und der angegebenen Länge. Die Bytes werden dann mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) von UTF-8 in einen String dekodiert (wir geben hier `utf8` an, aber viele andere Encodings werden unterstützt). Der String wird dann mit `console.log()` protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Objektinstanziierung geschieht. Wenn Sie den Code ausführen, wird die Konsole den Text "Hi" anzeigen.

> [!NOTE]
> Sie finden den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Erinnerungen

Neuere Implementierungen erlauben Ihnen, mehrere Speicherobjekte in Ihrer WebAssembly und JavaScript zu verwenden, auf eine Weise, die kompatibel mit Code ist, der für Implementierungen geschrieben wurde, die nur einen einzigen Speicher unterstützen. Mehrere Erinnerungen können nützlich sein, um Daten zu trennen, die anders behandelt werden sollten als andere Anwendungsdaten, wie öffentliche vs. private Daten, Daten, die dauerhaft gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen. Dies kann auch nützlich für sehr große Anwendungen sein, die über den Wasm 32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Erinnerungen, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine null-indizierte, nacheinander zugewiesene Speichernummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können über ihren Index auf einen bestimmten Speicher verweisen, sodass Sie kontrollieren können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten der WebAssembly-Instanz hinzugefügten Speichers. Infolgedessen müssen Sie, wenn Sie nur einen Speicher hinzufügen, in Ihrem Code keinen Index angeben.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Strings an drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren. Der unten gezeigte Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, und dabei den gleichen Ansatz wie im vorherigen Beispiel verwenden. Um zu zeigen, wie Sie innerhalb des WebAssembly-Moduls Speicher erstellen können, haben wir eine dritte Speicherinstanz namens `$mem2` erstellt und sie _exportiert_.

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

Die drei Speicherinstanzen werden basierend auf ihrer Erstellungsreihenfolge automatisch einem Index zugewiesen. Der Code unten zeigt, wie wir diesen Index angeben können (z.B. `(memory 1)`) in dem `data` Befehl, um den Speicher auszuwählen, in den wir einen String schreiben möchten (der gleiche Ansatz kann bei allen anderen Speicheranweisungen verwendet werden, wie `load` und `grow`). Hier schreiben wir einen String, der jeden Speichertyp angibt.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass das `(memory 0)` der Standardwert ist und daher optional ist. Dies zeigen wir, indem wir den Text `" (Default)"` ohne Angabe des Speicherindex schreiben, und dies sollte nach `"Memory 0 data"` hinzugefügt werden, wenn der Speicherinhalt protokolliert wird.

Der WebAssembly-Protokollierungscode ist fast genau der gleiche wie im vorherigen Beispiel, mit der Ausnahme, dass wir zusätzlich zum Stringoffset und zur -länge den Index des Speichers übergeben müssen, der den String enthält. Wir protokollieren auch alle drei Speicherinstanzen.

Das vollständige Modul wird unten gezeigt:

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

Der JavaScript-Code ist ebenfalls dem früheren Beispiel sehr ähnlich, außer dass wir zwei Speicherinstanzen für das `importObject()` erstellen und übergeben, und der vom Modul-Instanz exportierte Speicher wird nach der Instanziierung unter Verwendung des aufgelösten Versprechens (`obj.instance.exports`) zugegriffen. Der Code zum Protokollieren jedes Strings ist auch ein wenig komplizierter, da wir die Speichernummer von der WebAssembly mit einem bestimmten `Memory`-Objekt zuordnen müssen.

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

Der Ausgabebeispiel sollte dem folgenden Text ähneln, mit der Ausnahme, dass "Memory 1 data" einige "Müllzeichen" haben könnte, da der Textdecoder mehr Bytes übergeben bekommt, als zum Kodieren des Strings benötigt werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie finden den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Siehe [`webassembly.multimemory` auf der Hauptseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität für dieses Feature.

### WebAssembly-Tabellen

Abschließend zu dieser Tour durch das WebAssembly-Textformat, schauen wir auf den komplexesten und oft verwirrendsten Teil von WebAssembly: **Tabellen**. Tabellen sind im Grunde anpassbare Arrays von Referenzen, die von WebAssembly-Code durch ihren Index zugegriffen werden können.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zuerst beobachten, dass die oben gesehene `call`-Anweisung (siehe [Funktionen aus anderen Funktionen im selben Modul aufrufen](#funktionen_aus_anderen_funktionen_im_selben_modul_aufrufen)) einen statischen Funktionsindex annimmt und daher nur eine Funktion aufrufen kann — aber was, wenn der Aufzurufende ein Laufzeitwert ist?

- In JavaScript sehen wir das die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir das mit Funktionszeigern.
- In C++ sehen wir das mit virtuellen Funktionen.

WebAssembly benötigt einen Anweisungsaufruf, um dies zu erreichen, sodass wir `call_indirect` hinzugefügt haben, das einen dynamischen Funktionsoperanden annimmt. Das Problem ist, dass die einzigen Typen, die wir im Moment geben können, um Operanden in WebAssembly zu geben (derzeit) `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen mit einer beliebigen Signatur halten könnte), aber leider konnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Linearer Speicher gibt die Rohinhalte gespeicherter Werte als Bytes an, und dies würde es Wasm-Inhalten ermöglichen, nach Belieben rohen Funktionsadressen zu beobachten und zu beschädigen, was im Web nicht erlaubt werden kann.

Die Lösung war, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes zu übergeben, die einfach nur `i32`-Werte sind. `call_indirect`'s Operand kann daher ein `i32`-Indexwert sein.

#### Eine Tabelle in Wasm definieren

Wie legen wir also Wasm-Funktionen in unsere Tabelle? Ähnlich wie `data`-Abschnitte verwendet werden können, um Regionen des linearen Speichers mit Bytes initialisieren, können `elem`-Abschnitte verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)` ist die `2` die anfängliche Größe der Tabelle (was bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` erklärt, dass der Elementtyp dieser Referenzen eine Funktionsreferenz ist.
- Die (`func`)-Abschnitte sind wie andere deklarierte Wasm-Funktionen. Dies sind die Funktionen, auf die wir in unserer Tabelle referieren werden (zur Veranschaulichung returniert jede nur einen Konstantwert). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert werden, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und sie trotzdem in Ihrem `elem`-Abschnitt referenzieren.
- Der `elem`-Abschnitt kann eine beliebige Teilmenge der Funktionen in einem Modul in beliebiger Reihenfolge und mit beliebigen Duplikaten auflisten. Dies ist eine Liste der Funktionen, auf die von der Tabelle verwiesen werden soll, in der Reihenfolge, in der sie referenziert werden sollen.
- Der `(i32.const 0)`-Wert im `elem`-Abschnitt ist ein Offset — dieser muss zu Beginn des Abschnitts deklariert werden und spezifiziert, an welchem Index in der Tabelle Funktionsreferenzen zu beginnen, initialisiert zu werden. Hier haben wir 0 spezifiziert, und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen an den Indizes 0 und 1 auffüllen können. Wenn wir anfangen wollten, unsere Referenzen bei Offset 1 zu schreiben, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste 3 betragen.

> [!NOTE]
> Nicht initialisierte Elemente erhalten standardmäßig einen "zum Aufrufen werfenden" Wert.

Im JavaScript können die äquivalenten Aufrufe zum Erstellen einer solchen Tabelleninstanz ungefähr so aussehen:

```js
function () {
  // table section
  const tbl = new WebAssembly.Table({initial: 2, element: "anyfunc"});

  // function sections:
  const f1 = ... /* some imported WebAssembly function */
  const f2 = ... /* some imported WebAssembly function */

  // elem section
  tbl.set(0, f1);
  tbl.set(1, f2);
};
```

#### Die Tabelle verwenden

Fortfahren, nun, da wir die Tabelle definiert haben, müssen wir sie irgendwie verwenden. Verwenden wir diesen Abschnitt Code, um dies zu tun:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Das `(type $return_i32 (func (result i32)))`-Block spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird beim Durchführen von Typprüfungen der Tabellen-Funktionsreferenzaufrufe später verwendet. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als Nächstes definieren wir eine Funktion, die unter dem Namen `callByIndex` exportiert wird. Diese nimmt einen `i32` als Parameter an, der den Argumentnamen `$i` erhält.
- Innerhalb der Funktion fügen wir einen Wert zum Stack hinzu — welchen Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — sie entnimmt implizit den Wert von `$i` vom Stack. Das Nettoergebnis davon ist, dass die `callByIndex`-Funktion die `$i`'te Funktion in der Tabelle aufruft.

Sie könnten den `call_indirect`-Parameter auch explizit während des Befehlsaufrufs, anstatt vorher, deklarieren, so:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

Auf einer höheren Ebene, einer ausdrucksstärkeren Sprache wie JavaScript, könnten Sie sich vorstellen, das Gleiche mit einem Array (oder wahrscheinlich eher einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde ungefähr so aussehen: `tbl[i]()`.

Zurück zu den Typprüfungen. Da WebAssembly typgeprüft ist und das `funcref` potenziell jede Funktionssignatur sein kann, müssen wir die erwartete Signatur des Aufgerufenen an der Aufrufstelle bereitstellen, weshalb wir den `$return_i32`-Typ einschließen, um dem Programm zu sagen, dass eine Funktion erwartet wird, die ein `i32` zurückgibt. Wenn der Aufgerufene keine passende Signatur hat (z.B. ein `f32` wird stattdessen zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) geworfen.

Was verbindet also den `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass momentan nur eine Tabelle pro Modulinstanz erlaubt ist, und dies ist, was `call_indirect` implizit aufruft. In der Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennung angeben, in etwa so:

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das gesamte Modul sieht zusammen gefasst so aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispieldatei gefunden werden:

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

Wir laden es in eine Webseite mit dem folgenden JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Memory können auch Tables von JavaScript aus erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)) sowie von/zu einem anderen Wasm-Modul importiert werden.

### Tabellen mutieren und dynamisches Verlinken

Da JavaScript vollständigen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt von JavaScript aus mit den Methoden [`grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set) verändert werden. Und WebAssembly-Code kann selbst Tabellen mit Anweisungen, die als Teil der [Reference types](#referenztypen) hinzugefügt wurden, manipulieren, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um anspruchsvolle Ladezeit- und Laufzeit [dynamische Verknüpfungsschemata](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verknüpft ist, teilen mehrere Instanzen den gleichen Speicher und die gleiche Tabelle. Dies ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einziges Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) Aufrufe.

Unsere `.wat` Beispiellook like looks:

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
2. Diese Funktion erstellt eine Konstante mit dem Wert `0` und verwendet dann den Befehl `i32.load`, um den in dem bereitgestellten Speicherindex enthaltenen Wert zu laden. Der bereitgestellte Index ist `0` — wieder entnimmt dieser implizit den vorherigen Wert vom Stack. Also lädt `shared0func` und gibt den in Speicherindex `0` gespeicherten Wert zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, und ruft dann `i32.store` auf, um einen bereitgestellten Wert in einen bereitgestellten Index des importierten Speichers zu speichern. Wieder entnimmt dieser implizit diese Werte vom Stack, sodass das Ergebnis darin besteht, dass er den Wert `42` in Speicherindex `0` speichert.
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, und rufen dann die Funktion an diesem Index 0 von der Tabelle auf, die `shared0func` ist, die früher durch den `elem`-Block in `shared0.wat` gespeichert wurde.
5. Beim Aufruf ruft `shared0func` den `42` ab, den wir mit dem `i32.store`-Befehl in `shared1.wat` im Speicher gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke nehmen wieder implizit Werte vom Stack, aber Sie könnten diese alternativ explizit innerhalb der Befehlsaufrufen deklarieren, beispielsweise:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach dem Zusammenstellen zu Assembly verwenden wir `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jedes der Module, das kompiliert wird, kann denselben Speicher und Tabellenobjekte importieren und somit denselben linearen Speicher und Tabellenspeicheradresse teilen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Speicheroperationen in großen Mengen

Memory-Operationen in großen Mengen sind eine neuere Ergänzung zur Sprache — sieben neue integrierte Operationen werden für Speicheroperationen in großen Mengen wie Kopieren und Initialisieren angeboten, um es WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` effizienter und effektiver zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Hauptseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Verwerfen der Daten in einem Datensegment.
- `elem.drop`: Verwerfen der Daten in einem Elementsegment.
- `memory.copy`: Kopieren von einem linearen Speicherbereich in einen anderen.
- `memory.fill`: Füllen eines linearen Speicherbereichs mit einem gegebenen Bytewert.
- `memory.init`: Kopieren eines Bereichs aus einem Datensegment.
- `table.copy`: Kopieren von einem Tabellenbereich in einen anderen.
- `table.init`: Kopieren eines Bereichs aus einem Elementsegment.

> [!NOTE]
> Weitere Informationen finden Sie im Vorschlag [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Typen

### Zahlentypen

WebAssembly verfügt derzeit über vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

### Vektortypen

- `v128`: 128-Bit-Vektor aus gepackten Ganzzahlen, Gleitkomma-Daten oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Vorschlag zu Referenztypen](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptfunktionen:

- Ein neuer Typ, `externref`, der jeden beliebigen JavaScript-Wert halten kann, zum Beispiel Strings, DOM-Referenzen, Objekte, etc. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und sie manipulieren, sondern kann sie nur empfangen und wieder ausgeben. Dies ist jedoch sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen zu lassen und im Allgemeinen den Weg für eine einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Wertetypen und Tabellenelemente verwendet werden.
- Eine Reihe neuer Instruktionen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält einige nützliche Informationen, wie `externref` aus Rust genutzt werden kann.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Hauptseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multi-Value WebAssembly

Eine weitere neuere Ergänzung zur Sprache ist WebAssembly mit mehreren Werten, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungsfolgen mehrere Stapelwerte verbrauchen und erzeugen können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Hauptseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen verfügbaren Mehrwertinstruktionen sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen und andere Dinge ebnen. Für eine nützliche Darstellung des bisherigen Fortschritts und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es WebAssembly-Speicherobjekten, zwischen mehreren WebAssembly-Instanzen, die in separaten Webarbeitern laufen, geteilt zu werden, auf die gleiche Weise wie [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Arbeitern und erhebliche Leistungsgewinne in Webanwendungen.

Der Vorschlag zu Threads besteht aus zwei Teilen, gemeinsamen Speichern und atomaren Speicherzugriffen.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Hauptseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Gemeinsame Speicher

Wie oben beschrieben, können Sie gemeinsame WebAssembly-Speicherobjekte erstellen, die zwischen Fenster- und Arbeiterkontexten über [`postMessage()`](/de/docs/Web/API/Window/postMessage) auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) übertragen werden können.

Auf der JavaScript-Schnittstelle hat das Initialisierungsobjekt des Konstruktors [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory) jetzt eine `shared`-Eigenschaft, die bei Setzen auf `true` einen gemeinsamen Speicher erzeugt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

die Buffer-Eigenschaft des Speichers [buffer](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) gibt jetzt einen `SharedArrayBuffer` zurück, anstelle des normalen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat von WebAssembly können Sie einen gemeinsamen Speicher mit dem Schlüsselwort `shared` erstellen, wie folgt:

```wasm
(memory 1 2 shared)
```

Im Gegensatz zu nicht-geteiltem Speicher muss gemeinsam genutzter Speicher in sowohl dem JavaScript-API-Konstruktor als auch dem Wasm-Textformat eine "maximale" Größe angeben.

> [!NOTE]
> Sie finden viel mehr Details im [Vorschlag zu Threads für WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurde hinzugefügt, die zum Implementieren von Funktionen wie Mutexen, Bedingungsvariablen usw. verwendet werden können. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads-Support-Seite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie Sie diese neuen Funktionalitäten aus Emscripten nutzen können.

## Zusammenfassung

Damit beenden wir unsere Übersicht über die Hauptkomponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API reflektiert werden.

## Siehe auch

- Das Hauptsächliche, das nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Darstellung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax), die vom Spezifikationsinterpreter implementiert wird.
