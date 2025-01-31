---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Um WebAssembly lesbar und bearbeitbar für Menschen zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklungswerkzeugen von Browsern usw. sichtbar gemacht werden soll. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die rohe Syntax und wie es mit dem zugrunde liegenden Bytecode, den es darstellt, und den Wrapper-Objekten, die Wasm in JavaScript repräsentieren, zusammenhängt.

> [!NOTE]
> Dies könnte übertrieben sein, wenn Sie ein Webentwickler sind, der einfach nur ein Wasm-Modul auf einer Seite laden und es in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren, oder einen eigenen WebAssembly-Compiler erstellen wollen.

## S-Ausdrücke

In den binären und textuellen Formaten ist die grundlegende Codeeinheit in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen, und somit können wir uns ein Modul als einen Baum von Knoten vorstellen, die die Struktur des Moduls und seinen Code beschreiben. Anders als bei der abstrakten Syntax von Programmiersprachen ist der Baum von WebAssembly jedoch ziemlich flach, er besteht hauptsächlich aus Listen von Anweisungen.

Zuerst sehen wir uns an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum steht zwischen einem Paar Klammern — `( ... )`. Das erste Etikett in den Klammern gibt an, welcher Typ von Knoten es ist, und danach folgt eine durch ein Leerzeichen getrennte Liste von Attributen oder Kindknoten. Das bedeutet, dass der WebAssembly-S-Ausdruck:

```wasm
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten, einem "memory"-Knoten mit dem Attribut "1" und einem "func"-Knoten darstellt. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten und kürzesten Wasm-Modul.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber dennoch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärdaten konvertieren (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modulkopf, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Funktionalität zu Ihrem Modul hinzufügen

Okay, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Jeder Code in einem WebAssembly-Modul ist in Funktionen gruppiert, die die folgende Pseudocode-Struktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** deklariert, was die Funktion entgegennimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Locals** sind wie `var` in JavaScript, jedoch mit explizit deklarieren Typen.
- Der **Body** ist nur eine lineare Liste von Low-Level-Anweisungen.

Das ist also ähnlich wie Funktionen in anderen Sprachen, auch wenn es aufgrund des S-Ausdrucks anders aussieht.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parametertypdeklarationen gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist erwähnenswert:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens einen Rückgabetyp geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/master/proposals/multi-value/Overview.md) auf eine beliebige Anzahl.

Jeder Parameter hat einen ausdrücklich deklarierten Typ; Wasm [Nummerntypen](#nummerntypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Nummerntypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Fließkommazahl
- `f64`: 64-Bit-Fließkommazahl

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabetyp als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Ganzzahlen entgegennimmt und eine 64-Bit-Fließkommazahl zurückgibt, so aussehen:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden Locals mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Grunde nur Locals, die mit dem Wert des entsprechenden vom Anrufer übergebenen Arguments initialisiert werden.

## Abrufen und Setzen von Locals und Parametern

Locals/Parameter können vom Body der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die Anweisungen `local.get`/`local.set` beziehen sich auf das zu holende/zu setzende Element durch seinen numerischen Index: Parameter werden zuerst genannt, in der Reihenfolge ihrer Deklaration, gefolgt von Locals in der Reihenfolge ihrer Deklaration. Angenommen, wir betrachten die folgende Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` würde den i32-Parameter abrufen, `local.get 1` würde den f32-Parameter abrufen und `local.get 2` würde den f64-local abrufen.

Hier gibt es ein weiteres Problem — die Verwendung numerischer Indizes zur Referenzierung von Elementen kann verwirrend und lästig sein, daher ermöglicht das Textformat, Parameter, Locals und die meisten anderen Elemente zu benennen, indem man einen Namen, der durch ein Dollarzeichen (`$`) eingeführt wird, direkt vor der Typdeklaration einfügt.

So könnten Sie unsere vorherige Signatur folgendermaßen umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` anstelle von `local.get 0` schreiben, usw. (Beachten Sie, dass wenn dieser Text in Binärdaten konvertiert wird, die Binärdatei nur die Ganzzahlen enthält.)

## Stapelspeicher

Bevor wir einen Funktionskörper schreiben können, müssen wir noch über eine weitere Sache sprechen: **Stapelmaschinen**. Obwohl der Browser es in etwas Effizienteres kompiliert, ist die Ausführung von Wasm im Sinne einer Stapelmaschine definiert, wobei die Grundidee darin besteht, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf einen Stapel schiebt und/oder von diesem Stapel entfernt.

Zum Beispiel ist `local.get` definiert, um den Wert des gelesenen Locals auf den Stapel zu schieben, und `i32.add` entfernt zwei `i32`-Werte (es greift implizit auf die vorherigen beiden auf den Stapel geschobenen Werte zu), berechnet ihre Summe (modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der sich nach und nach füllt und leert, während die Anweisungen des Bodys ausgeführt werden. Zum Beispiel enthält der Stapel nach der Ausführung der folgenden Funktion genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` verarbeitet wird. Der Rückgabewert einer Funktion ist nur der letzte Wert, der auf dem Stapel verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stapel genau übereinstimmt: Wenn Sie ein `(result f32)` deklarieren, muss der Stapel am Ende genau einen `f32` enthalten. Wenn es keinen Ergebnistyp gibt, muss der Stapel leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Indem dies mit dem kombiniert wird, was wir bereits gelernt haben, können wir schließlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt viel mehr Dinge, die in Funktionskörper eingearbeitet werden können, aber wir werden erst einmal einfach anfangen, und Sie werden im Verlauf viele weitere Beispiele sehen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [webassembly.org Semantics-Referenz](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird allein nicht viel bewirken — jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Locals werden Funktionen standardmäßig durch einen Index identifiziert, aber der Bequemlichkeit halber können sie benannt werden. Lassen Sie uns damit beginnen — als erstes fügen wir einen Namen hinzu, der durch ein Dollarzeichen eingeleitet wird, direkt nach dem `func`-Schlüsselwort:

```wasm
(func $add …)
```

Nun müssen wir eine Exportdeklaration hinzufügen — dies sieht folgendermaßen aus:

```wasm
(export "add" (func $add))
```

Hierbei ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` die WebAssembly-Funktion im Inneren des Moduls bezeichnet, die exportiert wird.

Unser endgültiges Modul (vorerst) sieht folgendermaßen aus:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie dem Beispiel folgen möchten, speichern Sie das obige Modul in einer Datei namens `add.wat` und konvertieren Sie es dann mit wabt in eine Binärdatei namens `add.wasm` (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als Nächstes instanzieren wir unseren Binärcode asynchron (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und führen unsere `add`-Funktion in JavaScript aus (wir finden jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details zur Instanzierungsfunktion.

## Erforschung der Grundlagen

Nun, da wir die wirklichen Grundlagen abgedeckt haben, gehen wir zu einigen fortgeschritteneren Funktionen über.

### Funktionen aus anderen Funktionen im selben Modul aufrufen

Die `call`-Anweisung ruft eine einzelne Funktion auf, gegeben durch ihren Index oder Namen. Zum Beispiel enthält das folgende Modul zwei Funktionen — die eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis der ersten erhöht um eins zurück:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach eine 32-Bit-Ganzzahl und schiebt sie auf den Stapel. Sie könnten das `i32` durch einen der anderen verfügbaren Typen ersetzen und den Wert der Konstante ändern, wie Sie möchten (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel bemerken Sie einen `(export "getAnswerPlus1")`-Abschnitt, der direkt nach der `func`-Anweisung in der zweiten Funktion deklariert wird — dies ist eine Abkürzung, um anzugeben, dass wir diese Funktion exportieren möchten, und den Namen zu definieren, unter dem wir sie exportieren möchten.

Dies ist funktional äquivalent dazu, eine separate Funktionsanweisung außerhalb der Funktion an anderer Stelle im Modul auf die gleiche Weise wie zuvor einzuschließen, z. B.:

```wasm
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code zum Aufrufen unseres oben genannten Moduls sieht folgendermaßen aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Funktionen aus JavaScript importieren

Wir haben bereits gesehen, dass JavaScript WebAssembly-Funktionen aufruft, aber was ist mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zweistufigen Namensraum, sodass die Importanweisung hier besagt, dass wir darum bitten, die `log`-Funktion aus dem `console`-Modul zu importieren. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mit der `call`-Anweisung aufruft, die wir oben eingeführt haben.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die WebAssembly-Validierung überprüft sie statisch, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben kein Signaturkonzept, sodass jede JavaScript-Funktion übergeben werden kann, unabhängig von der erklärten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Anrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Für das Obige benötigen wir ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Das würde folgendermaßen aussehen:

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
> Dieses Beispiel finden Sie auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Globale Variablen in WebAssembly deklarieren

WebAssembly hat die Möglichkeit, Instanzen globaler Variablen zu erstellen, die sowohl von JavaScript als auch importierbar/exportierbar über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen zugänglich sind. Dies ist sehr praktisch, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es ungefähr so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht dem, was wir bereits gesehen haben, ähnlich, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben und wir auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Werts angeben, wenn wir ihn veränderbar machen möchten.

Um einen gleichwertigen Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen in Assembler-Code arbeitet, sie zum [Stapel](#stapelspeicher) hinzufügt, Operationen damit ausführt und dann das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Um mit Zeichenketten und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder in WebAssembly oder JavaScript erstellt und zwischen Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` nur ein großes zusammenhängendes, veränderbares Array von Rohbytes, das im Laufe der Zeit wachsen kann (siehe [linear memory](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stapel und jedem Ort in einem Speicher.

Aus der Sicht von JavaScript ist es, als ob der gesamte Speicher in einem großen, erweiterbaren {{jsxref("ArrayBuffer")}} enthalten wäre.
JavaScript kann WebAssembly-lineare Speicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und sie auf eine Speicherinstanz exportieren oder auf eine Speicherinstanz zugreifen, die im WebAssembly-Code erstellt und exportiert wurde. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, zum Beispiel über die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) im WebAssembly.
Da `ArrayBuffer`-Objekte nicht die Größe ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, um auf den neueren, größeren Speicher zu zeigen.

Beachten Sie, dass Sie beim Erstellen des Speichers die Anfangsgröße definieren müssen und optional die maximale Größe angeben können, auf die der Speicher wachsen kann.
WebAssembly versucht, die maximale Größe (falls angegeben) zu reservieren, und kann, wenn es gelingt, den Puffer effizienter in Zukunft wachsen lassen. Selbst wenn es die maximale Größe jetzt nicht allozieren kann, kann es möglicherweise später wachsen.
Methode wird nur fehlschlagen, wenn die _anfängliche_ Größe nicht allokiert werden kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speicher](#mehrere_speicher) verwenden, wenn der Browser dies unterstützt.
> Der Code, der keine mehrere Speicher verwendet, muss nicht geändert werden!

Um einen Teil dieses Verhaltens zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenkette in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenkette ist einfach eine Sequenz von Bytes an einem Ort innerhalb dieses linearen Speicher.
Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenkette an JavaScript übergeben, indem wir den Speicher, den Offset der Zeichenkette im Speicher und eine Möglichkeit angeben, die Länge zu bestimmen.

Zunächst erstellen wir etwas Speicher und teilen ihn zwischen WebAssembly und JavaScript.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir können das WebAssembly-Modul den Speicher erstellen und ihn auf JavaScript exportieren lassen.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Dann instanzieren wir unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", unter Verwendung der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und übergeben das Importobjekt:

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

```wasm
(import "js" "mem" (memory 1))
```

Der Speicher muss mit dem gleichen zweistufigen Schlüssel importiert werden, der im `importObject` angegeben wird (`js.mem`).
Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste Speicher ist, der in das WebAssembly-Modul importiert wird, hat er einen Speicherindex von "0".
> Sie könnten auf diesen speziellen Speicher mit dem Index in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verweisen, aber da 0 der Standardindex ist, müssen Sie den Index in Single-Speicher-Anwendungen nicht angeben.

Da wir jetzt eine gemeinsam genutzte Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenfolge von Daten in diese zu schreiben.
Wir übergeben dann Informationen darüber, wo sich die Zeichenkette befindet und welche Länge sie hat, an die JavaScript (wir könnten alternativ die Länge der Zeichenkette in der Zeichenfolge selbst kodieren, aber die Übergabe einer Länge ist einfacher für uns umzusetzen).

Fügen wir zuerst eine Zeichenfolge von Daten zu unserem Speicher hinzu, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir den Inhalt der Zeichenfolge einfach in den globalen Speicher mit einem `data`-Abschnitt schreiben.
Datenabschnitte ermöglichen das Schreiben einer Zeichenfolge von Bytes bei einer angegebenen Offset zur Instanziierungszeit und ähneln den `.data`-Abschnitten in nativen Ausführungsformaten.
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
> Die Doppelsemisyntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzugeben.
> In diesem Fall verwenden wir sie nur, um Platzhalter für anderen Code anzugeben.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um die Zeichenkette an die Konsole zu loggen.
Dies muss `console.log` im `importObject` zugeordnet werden, das zur Instanziierung des WebAssembly-Moduls verwendet wird.
Die Funktion ist in der WebAssembly als `$log` benannt und nimmt `i32`-Parameter für den Zeichenfolgenoffset und die Länge im Speicher an.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenkette im Speicher (`0` und `2`) auf.
Diese wird aus dem Modul exportiert, sodass sie aus JavaScript aufgerufen werden kann.

Unser endgültiges WebAssembly-Modul (im Textformat) sieht so aus.

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

Auf der JavaScript-Seite müssen wir die Logging-Funktion definieren, sie an die WebAssembly übergeben und dann die exportierte `writeHi()`-Methode aufrufen.
Der komplette Code ist unten gezeigt:

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

Beachten Sie, dass die Logging-Funktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben wird und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht auf die Zeichenkette im gemeinsamen Speicher unter Verwendung eines `Uint8Array`s beim übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann mit der [TextDecoder-API](/de/docs/Web/API/TextDecoder) aus UTF-8 in eine Zeichenkette dekodiert (wir geben `utf8` hier an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenkette wird dann mit `console.log()` protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Instanziierung des Objekts erfolgt.
Wenn Sie den Code ausführen, wird die Konsole den Text "Hi" anzeigen.

> [!NOTE]
> Sie können den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) finden ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen erlauben es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die kompatibel ist mit Code, der für Implementierungen geschrieben wurde, die nur ein einzelnes Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders als andere Anwendungsdaten behandelt werden sollten, wie z. B. öffentliche vs. private Daten, Daten, die gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich sein für sehr große Anwendungen, die über den Wasm 32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung stehen, entweder direkt deklariert oder importiert, erhalten eine null-basierte sequentielle Speicherindexnummer zugewiesen. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index verweisen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wird.
Daher muss Ihr Code den Index nicht angeben, wenn Sie nur einen Speicher hinzufügen.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der unten stehende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, mit dem gleichen Ansatz wie im vorherigen Beispiel.
Um zu zeigen, wie Sie Speicher innerhalb des WebAssembly-Moduls erstellen können, haben wir eine dritte Speicherinstanz namens `$mem2` im Modul erstellt und _exportiert_.

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

Die drei Speicherinstanzen werden basierend auf ihrer Erstellungsreihenfolge automatisch instanziert.
Der unten stehende Code zeigt, wie wir diesen Index (z.B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher zu wählen, in den wir eine Zeichenkette schreiben möchten (Sie können den gleichen Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenfolge, die jeden Speichertyp angibt.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass das `(memory 0)` der Standard ist und daher optional ist.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne Angabe des Speicherindex, und dies sollte nach `"Memory 0 data"` hinzugefügt werden, wenn die Speicherinhalte protokolliert werden.

Der WebAssembly-Logging-Code ist fast genau der gleiche wie im vorherigen Beispiel, außer dass wir zusammen mit dem Zeichenfolgenoffset und der Länge den Index des Speichers, der die Zeichenfolge enthält, übergeben müssen.
Wir protokollieren auch alle drei Speicherinstanzen.

Das vollständige Modul sieht so aus:

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

Der JavaScript-Code ist auch sehr ähnlich wie im vorherigen Beispiel, außer dass wir zwei Speicherinstanzen zum `importObject()` erstellen und übergeben und der Speicher, der von der Modulinstanz exportiert wird, nach der Instanziierung über das aufgelöste Versprechen (`obj.instance.exports`) zugegriffen wird.
Der Code, um jede Zeichenfolge zu protokollieren, ist auch ein wenig komplizierter, weil wir die Speicherinstanznummer von der WebAssembly mit einem bestimmten `Memory`-Objekt übereinstimmen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich wie der unten stehende Text sein, außer dass "Memory 1 data" möglicherweise einige nachfolgende "unsaubere Zeichen" hat, weil der Textdecoder mehr Bytes übergeben wird, als benötigt werden, um die Zeichenfolge zu kodieren.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) finden ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität dieser Funktion.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat zu beenden, betrachten wir den kompliziertesten und oft verwirrenden Teil von WebAssembly: **Tabellen**. Tabellen sind im Grunde änderbare Arrays von Referenzen, die vom WebAssembly-Code durch Indexierung zugänglich sind.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zuerst beobachten, dass die `call`-Anweisung, die wir früher gesehen haben (siehe [Funktionen aus anderen Funktionen im selben Modul aufrufen](#funktionen_aus_anderen_funktionen_im_selben_modul_aufrufen)), einen statischen Funktionsindex benötigt und daher nur eine Funktion aufrufen kann — aber was ist, wenn der Aufgerufene einen Laufzeitwert darstellt?

- In JavaScript sehen wir dies die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir dies mit Funktionszeigern.
- In C++ sehen wir dies mit virtuellen Funktionen.

WebAssembly benötigte einen Anweisungstyp, um dies zu erreichen, daher gaben wir ihm `call_indirect`, das einen dynamischen Funktionsoperanden verwendet. Das Problem ist, dass die einzigen Typen, die wir WebAssembly-Operanden geben können (derzeit) `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen (weil der Typ Funktionen mit beliebiger Signatur enthalten könnte), aber leider könnte dieser `anyfunc`-Typ aufgrund von Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Linearer Speicher offenbart den Rohinhalt von gespeicherten Werten als Bytes und dies würde es Wasm-Inhalten ermöglichen, rohe Funktionsadressen beliebig zu beobachten und zu beschädigen, was im Web nicht erlaubt sein kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und Tabellenindizes stattdessen zu übergeben, die einfach i32-Werte sind. `call_indirect`'s Operand kann daher ein i32-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Also, wie platzieren wir Wasm-Funktionen in unserer Tabelle? So wie `data`-Abschnitte verwendet werden können, um Regionen von linearem Speicher mit Bytes zu initialisieren, können `elem`-Abschnitte verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)` ist die 2 die Anfangsgröße der Tabelle (was bedeutet, dass sie zwei Referenzen speichert) und `funcref` erklärt, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die `func`-Abschnitte sind wie andere deklarierte Wasm-Funktionen. Dies sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (zum Beispiel gibt jede einfach einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte hier deklariert werden, keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und trotzdem in Ihrem `elem`-Abschnitt darauf verweisen.
- Der `elem`-Abschnitt kann eine Teilmenge der Funktionen in einem Modul in beliebiger Reihenfolge auflisten, was Duplikate ermöglicht. Dies ist eine Liste der Funktionen, auf die durch die Tabelle referenziert werden soll, in der Reihenfolge, in der auf sie referenziert werden soll.
- Der `(i32.const 0)`-Wert im Inneren des `elem`-Abschnitts ist ein Offset — dieser muss zu Beginn des Abschnitts deklariert werden und gibt an, an welchem Index die Funktionsreferenzen in der Tabelle zu setzen beginnen. Hier haben wir 0 angegeben und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen bei den Indizes 0 und 1 einfügen können. Wenn wir unsere Referenzen bei Offset 1 schreiben wollten, müssten wir `(i32.const 1)` schreiben und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standardwert, der beim Aufruf einen Fehler verursacht.

In JavaScript würden die entsprechenden Aufrufe zur Erstellung einer solchen Tabelleninstanz ungefähr so aussehen:

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

#### Verwendung der Tabelle

Kommen wir nun zur Verwendung der Tabelle. Benutzen wir diesen Abschnitt des Codes, um das zu tun:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))`-Block spezifiziert einen Typ, mit einem Referenznamen. Dieser Typ wird bei der Typprüfung der Tabellenfunktionsreferenzaufrufe später verwendet. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese wird ein `i32` als Parameter nehmen, der den Argumentnamen `$i` erhält.
- Innerhalb der Funktion fügen wir einen Wert dem Stapel hinzu — welchen Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — es entfernt implizit den Wert von `$i` vom Stapel. Das Endergebnis ist, dass die `callByIndex`-Funktion die `$i`. Funktionsreferenz in der Tabelle aufruft.

Sie könnten den `call_indirect`-Parameter auch explizit während des Aufrufs der Anweisung angeben, anstatt davor, so:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherstufigen, ausdrucksvolleren Sprache wie JavaScript könnten Sie sich wahrscheinlich vorstellen, dass dies mit einem Array (oder wahrscheinlich eher einem Objekt) geschieht, das Funktionen enthält. Der Pseudocode würde etwa wie `tbl[i]()` aussehen.

Zurück zur Typprüfung. Da WebAssembly typengeprüft ist und der `funcref` potentiell jede Funktionssignatur sein kann, müssen wir die vermutete Signatur des Aufgerufenen an der Aufrufstelle angeben, daher fügen wir den `$return_i32`-Typ hinzu, um das Programm anzuleiten, dass eine Funktion erwartet wird, die ein `i32` zurückgibt. Wenn der Aufgerufene keine passende Signatur hat (sagen wir, es wird stattdessen ein `f32` zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Was verbindet also den `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist und das ist, was `call_indirect` implizit aufruft. In Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennzeichnung angeben, so etwas wie

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht insgesamt so aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispieldatei gefunden werden:

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
> Sie können dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Speicher können Tabellen auch aus JavaScript erstellt (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) und von/zu einem anderen Wasm-Modul importiert werden.

### Veränderung von Tabellen und dynamisches Verknüpfen

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt von JavaScript mithilfe der Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) verändert werden. Und WebAssembly-Code selbst kann Tabellen mithilfe von Anweisungen, die im Rahmen von [Referenztypen](#referenztypen) hinzugefügt wurden, manipulieren, wie `table.get` und `table.set`.

Da Tabellen änderbar sind, können sie verwendet werden, um raffinierte Ladezeit- und Laufzeit-[dynamische Verknüpfungsschemata](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verknüpft wird, teilen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s den Adressraum eines einzigen Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einzelnes Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses gleiche Importobjekt an mehrere Aufrufe von [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

Unsere `.wat`-Beispiele sehen folgendermaßen aus:

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

Diese funktionieren wie folgt:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante mit dem Wert `0` und verwendet dann den `i32.load`-Befehl, um den Wert zu laden, der im angegebenen Speicherindex enthalten ist. Der angegebene Index ist `0` — wieder entfernt es den vorherigen Wert implizit vom Stapel. Daher lädt `shared0func` und gibt den Wert zurück, der im Speicherindex `0` gespeichert ist.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, dann ruft sie `i32.store` auf, um einen bereitgestellten Wert in einem bereitgestellten Index des importierten Speichers zu speichern. Wieder entfernt es diese Werte implizit vom Stapel, sodass das Ergebnis ist, dass es den Wert `42` im Speicherindex `0` speichert,
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, dann rufen wir die Funktion auf, die sich beim Index 0 der Tabelle befindet, was `shared0func` ist, das früher durch den `elem`-Block in `shared0.wat` dort gespeichert wurde.
5. Bei Aufruf lädt `shared0func` das `42`, das wir im Speicher mit dem `i32.store`-Befehl in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke entfernen wieder Werte implizit vom Stapel, aber Sie könnten diese auch explizit innerhalb der Befehlsaufrufe angeben, zum Beispiel:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach der Umwandlung in Assembler verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jedes der Module, die kompiliert werden, kann dieselben Memory- und Table-Objekte importieren und somit denselben linearen Speicher und denselben "Adressraum" der Tabelle teilen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Massenverwaltung von Speicheroperationen

Massenverwaltung von Speicheroperationen ist eine neuere Ergänzung zur Sprache — sieben neue eingebaute Operationen werden für Massenverwaltung von Speicheroperationen wie Kopieren und Initialisieren bereitgestellt, um WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` effizienter und performanter zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Verwurf der Daten in einem Datensegment.
- `elem.drop`: Verwurf der Daten in einem Elementsegment.
- `memory.copy`: Kopieren von einem Bereich des linearen Speichers in einen anderen.
- `memory.fill`: Füllen eines Bereichs des linearen Speichers mit einem bestimmten Bytewert.
- `memory.init`: Kopieren eines Bereichs aus einem Datensegment.
- `table.copy`: Kopieren von einem Bereich einer Tabelle in einen anderen.
- `table.init`: Kopieren eines Bereichs aus einem Elementsegment.

> [!NOTE]
> Weitere Informationen finden Sie im [Vorschlag für Massenverwaltung von Speicheroperationen und bedingte Segmentinitialisierung](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Typen

### Nummerntypen

WebAssembly hat derzeit vier verfügbare _Nummerntypen_:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Fließkommazahl
- `f64`: 64-Bit-Fließkommazahl

### Vektortypen

- `v128`: 128-Bit-Vektor von gepackten Ganzzahlen, Fließkommadaten oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Vorschlag für Referenztypen](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Ein neuer Typ, `externref`, der _jeden_ JavaScript-Wert enthalten kann, beispielsweise Zeichenketten, DOM-Referenzen, Objekte usw. `externref` ist aus Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und diese manipulieren, sondern kann sie nur empfangen und wieder herausgeben. Dies ist jedoch sehr nützlich, um Wasm-Module zu ermöglichen, JavaScript-Funktionen, DOM-APIs usw. aufzurufen und im Allgemeinen den Weg für leichtere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Reihe neuer Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält nützliche Informationen darüber, wie man `externref` aus Rust nutzen kann.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multi-Value WebAssembly

Eine weitere kürzlich hinzugefügte Funktion zur Sprache ist WebAssembly mit mehreren Werten, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungsfolgen mehrere Stapelwerte verbrauchen und erzeugen können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) ist dies in einem frühen Stadium, und die einzigen Mehrwertanweisungen, die verfügbar sind, sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen und andere Dinge nebenbei ebnen. Für eine nützliche Zusammenstellung des bisherigen Fortschritts und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es WebAssembly Memory-Objekten, über mehrere WebAssembly-Instanzen hinweg geteilt zu werden, die in separaten Web-Workern ausgeführt werden, in derselben Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungsgewinne in Webanwendungen.

Der Vorschlag für Threads hat zwei Teile, gemeinsame Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Gemeinsame Speicher

Wie oben beschrieben, können Sie WebAssembly-[`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte erstellen, die über die [Window](/de/docs/Web/API/Window)- und [Worker-Kontexte](/de/docs/Web/API/Web_Workers_API) mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, in derselben Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)-Konstruktors jetzt eine `shared`-Eigenschaft, die, wenn auf `true` gesetzt, einen gemeinsamen Speicher erstellen wird:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des Speichers gibt nun einen `SharedArrayBuffer` zurück, anstatt des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen gemeinsamen Speicher mit dem Schlüsselwort `shared` erstellen, so:

```wasm
(memory 1 2 shared)
```

Im Gegensatz zu nicht gemeinsamen Speichern müssen gemeinsame Speicher sowohl in der JavaScript-API als auch im Wasm-Textformat eine "maximale" Größe angeben.

> [!NOTE]
> Weitere Details finden Sie im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurden hinzugefügt, die verwendet werden können, um höhere Funktionen wie Mutexes, Bedingungsvariablen usw. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads-Support-Seite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie Sie diese neuen Funktionen von Emscripten aus nutzen können.

## Zusammenfassung

Dies beendet unsere umfassende Tour durch die Hauptkomponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API reflektiert werden.

## Siehe auch

- Der Hauptpunkt, der nicht enthalten war, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax), die vom Spec-Interpreter implementiert wurde.
