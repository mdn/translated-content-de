---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Um WebAssembly von Menschen lesbar und editierbar zu machen, gibt es eine textuelle Darstellung des Binärformats von Wasm. Dies ist eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen des Browsers usw. angezeigt werden soll. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die rohe Syntax und wie es mit dem zugrunde liegenden Bytecode, den es repräsentiert, und den Wrapper-Objekten, die Wasm in JavaScript darstellen, in Beziehung steht.

> [!NOTE]
> Dies könnte übermäßig aufwendig sein, wenn Sie ein Webentwickler sind, der einfach nur ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie z.B. Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Ausdrücke

In beiden Formaten, dem Binär- und dem Textformat, ist das grundlegende Code-Element in WebAssembly ein Modul. Im Textformat wird ein Modul als großer S-Ausdruck dargestellt. S-Ausdrücke sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen, und wir können somit ein Modul als einen Baum von Knoten betrachten, die die Struktur des Moduls und seinen Code beschreiben. Im Gegensatz zum abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Zuerst sehen wir uns an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum befindet sich zwischen einem Paar von Klammern — `( ... )`. Das erste Label innerhalb der Klammern gibt an, um welche Art von Knoten es sich handelt, und danach folgt eine durch Leerzeichen getrennte Liste von entweder Attributen oder Kindknoten. Das bedeutet, dass der WebAssembly-S-Ausdruck:

```wat
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einem "memory"-Knoten mit dem Attribut "1" und einem "func"-Knoten. Wir werden bald sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Lassen Sie uns mit dem einfachsten und kürzesten möglichen Wasm-Modul beginnen.

```wat
(module)
```

Dieses Modul ist völlig leer, aber trotzdem ein gültiges Modul.

Wenn wir unser Modul jetzt in Binär konvertieren (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur die 8-Byte-Modulüberschrift, die im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionalität zu Ihrem Modul

Okay, das ist nicht sehr interessant, lassen Sie uns etwas ausführbaren Code zu diesem Modul hinzufügen.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** erklärt, was die Funktion aufnimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **locals** sind wie Variablen in JavaScript, aber es werden explizite Typen erklärt.
- Der **body** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Das ist ähnlich wie bei Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es ein S-Ausdruck ist.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parametertypdeklarationen, gefolgt von einer Liste von Rückgabewertetypdeklarationen. Es ist hier erwähnenswert, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens 1 Rückgabetyp geben, aber [später wird dies auf mehrere Typen erweitert](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md) werden.

Jeder Parameter hat einen ausdrücklich erklärten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabetyp als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Ganzzahlen aufnimmt und eine 64-Bit-Gleitkommazahl zurückgibt, so geschrieben:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die lokalen Variablen mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Grunde nur lokale Variablen, die mit dem Wert des entsprechenden vom Aufrufer übergebenen Arguments initialisiert werden.

## Abrufen und Festlegen von Locals und Parametern

Locals/Parameter können vom Funktionskörper mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die Befehle `local.get`/`local.set` beziehen sich auf das zu holende/setzende Element durch seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration genannt, gefolgt von Locals in der Reihenfolge ihrer Deklaration. In Anbetracht der folgenden Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Würde die Anweisung `local.get 0` den i32-Parameter abrufen, `local.get 1` den f32-Parameter und `local.get 2` das f64-Lokal.

Hier gibt es ein weiteres Problem — die Verwendung numerischer Indizes zur Benennung von Elementen kann verwirrend und lästig sein, daher erlaubt das Textformat, Parameter, Locals und die meisten anderen Elemente zu benennen, indem man einen mit einem Dollar-Symbol (`$`) versehenen Namen direkt vor der Typdeklaration angibt.

Sie könnten unsere vorherige Signatur also folgendermaßen umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann `local.get $p1` anstatt `local.get 0` schreiben, usw. (Beachten Sie, dass, wenn dieser Text in Binär konvertiert wird, das Binär nur die ganze Zahl enthält.)

## Stapelmaschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stapelmaschinen**. Obwohl der Browser ihn in etwas Effizienteres kompiliert, wird die Wasm-Ausführung in Bezug auf eine Stapelmaschine definiert, bei der die Grundidee ist, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten in einen Stapel schiebt und/oder daraus entfernt.

Zum Beispiel ist `local.get` definiert, den Wert der gelesenen lokalen Variable auf den Stapel zu schieben, und `i32.add` entfernt zwei `i32`-Werte aus dem Stapel (es ergreift implizit die vorherigen zwei Werte, die in den Stapel geschoben wurden), berechnet ihre Summe (Modulo 2^32) und schiebt den resultierenden `i32`-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der sich allmählich füllt und leert, während die Anweisungen des Körpers ausgeführt werden. Zum Beispiel enthält der Stapel nach Ausführung der folgenden Funktion:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` behandelt wird. Der Rückgabewert einer Funktion ist einfach der letzte verbleibende Wert auf dem Stapel.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stapel genau passt: Wenn Sie ein `(result f32)` deklarieren, muss der Stapel am Ende genau einen `f32` enthalten. Wenn es keinen Rückgabewerttyp gibt, muss der Stapel leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die ausgeführt werden, wenn die Funktion aufgerufen wird. In Kombination mit dem, was wir bereits gelernt haben, können wir nun endlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt noch viele weitere Dinge, die in Funktionskörper eingefügt werden können, aber wir starten jetzt erst einmal einfach und Sie werden unterwegs viele weitere Beispiele sehen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [webassembly.org-Seiten über Semantik](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird allein nicht viel tun — jetzt müssen wir sie aufrufen. Wie machen wir das? Ähnlich wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie bei Locals werden Funktionen standardmäßig durch Indizes identifiziert, können jedoch der Bequemlichkeit halber benannt werden. Beginnen wir damit, indem wir einen Namen hinzufügen, vorangestellt mit einem Dollarzeichen, direkt nach dem `func`-Schlüsselwort:

```wat
(func $add …)
```

Nun müssen wir eine Exportdeklaration hinzufügen — diese sieht so aus:

```wat
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert werden soll, während `$add` auswählt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser endgültiges Modul (vorerst) sieht so aus:

```wat
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie dem Beispiel folgen möchten, speichern Sie das oben stehende Modul in einer Datei namens `add.wat` und konvertieren Sie es dann mithilfe von wabt in eine Binärdatei namens `add.wasm` (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als Nächstes werden wir unser Binärformat asynchron instanziieren (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und unsere `add`-Funktion in JavaScript ausführen (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details über die Instanzierungsfunktion.

## Erkundung der Grundlagen

Da wir nun die Grundlagen behandelt haben, lassen Sie uns nun einige fortgeschrittenere Funktionen betrachten.

### Funktionen von anderen Funktionen im selben Modul aufrufen

Die `call`-Anweisung ruft eine einzelne Funktion anhand ihres Indexes oder Namens auf. Zum Beispiel enthält das folgende Modul zwei Funktionen: eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufs der ersten plus eins zurück:

```wat
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach eine 32-Bit-Ganzzahl und schiebt sie in den Stapel. Sie könnten das `i32` durch einen der anderen verfügbaren Typen austauschen und den Konstantewert auf einen beliebigen Wert ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie ein `(export "getAnswerPlus1")`-Abschnitt bemerken, direkt nach der `func`-Anweisung in der zweiten Funktion deklariert — dies ist eine Kurzschreibweise, um zu erklären, dass wir diese Funktion exportieren möchten und den Namen, unter dem wir sie exportieren wollen, zu definieren.

Dies ist funktional äquivalent dazu, eine separate Funktionsanweisung außerhalb der Funktion an anderer Stelle im Modul in der gleichen Art und Weise zu inkludieren, wie wir es zuvor getan haben, z.B.:

```wat
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code, um unser obiges Modul aufzurufen, sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Funktionen aus JavaScript importieren

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber wie sieht es damit aus, dass WebAssembly JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Lassen Sie uns ein Beispiel ansehen:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zweistufigen Namespace, sodass die Importanweisung hier sagt, dass wir die `log`-Funktion aus dem `console`-Modul importieren. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mit der `call`-Anweisung aufruft, die wir oben eingeführt haben.

Importierte Funktionen sind genau wie normale Funktionen: Sie haben eine Signatur, die durch die WebAssembly-Validierung statisch überprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben kein Konzept von Signaturen, sodass jede JavaScript-Funktion übergeben werden kann, unabhängig von der erklärten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt mit den entsprechenden Eigenschaften übergeben.

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
> Sie finden dieses Beispiel auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Globale Variablen in WebAssembly deklarieren

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl von JavaScript als auch über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es das dynamische Verknüpfen mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es etwa so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, außer dass wir mit dem Schlüsselwort `global` einen globalen Wert angeben und wir auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes angeben, wenn wir es veränderbar machen möchten.

Um einen äquivalenten Wert mit JavaScript zu erstellen, verwendet man den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assembler-Code arbeitet, sie dem [Stapel](#stapelmaschinen) hinzufügt, Operationen darauf ausführt und dann das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Für die Arbeit mit Zeichenketten und anderen komplexeren Datentypen verwenden wir `memory`, das entweder in WebAssembly oder JavaScript erstellt und zwischen beiden Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` nur ein großer, zusammenhängender, veränderbarer Bereich von Roh-Bytes, der im Laufe der Zeit wachsen kann (siehe [lineare Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stapel und einer beliebigen Position in einem Speicher.

Aus Sicht von JavaScript ist es, als ob sich der ganze Speicher innerhalb eines großen wachstumsfähigen {{jsxref("ArrayBuffer")}} befindet.
JavaScript kann WebAssembly-lineare Speicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und zu einer Speicherinstanz exportieren oder auf eine Speicherinstanz zugreifen, die innerhalb des WebAssembly-Codes erstellt und exportiert wurde. JavaScript-`Memory`-Instanzen verfügen über einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der ein `ArrayBuffer` zurückgibt, das auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, z.B. durch die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in WebAssembly.
Da sich `ArrayBuffer`-Objekte nicht in der Größe ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, um auf den neueren, größeren Speicher zu verweisen.

Beachten Sie, dass Sie bei der Erstellung des Speichers die anfängliche Größe definieren müssen, und Sie können optional die maximale Größe angeben, bis zu der der Speicher wachsen kann.
WebAssembly wird versuchen, die maximale Größe (falls angegeben) zu reservieren, und wenn es dies tun kann, kann es den Puffer in Zukunft effizienter vergrößern. Selbst wenn es die maximale Größe jetzt nicht zuweisen kann, könnte es später immer noch in der Lage sein zu wachsen.
Die Methode schlägt nur fehl, wenn sie die _anfängliche_ Größe nicht zuweisen kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können nun [mehrere Speicher](#mehrere_speicher) verwenden, wenn dies vom Browser unterstützt wird.
> Code, der keine mehreren Speicher verwendet, muss sich nicht ändern!

Um etwas von diesem Verhalten zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenkette in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenkette ist nur eine Sequenz von Bytes irgendwo innerhalb dieses linearen Speichers.
Angenommen, wir haben eine geeignete Zeichenkette von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenkette an JavaScript übergeben, indem wir den Speicher, den Offset der Zeichenkette im Speicher und eine Methode zum Anzeigen der Länge teilen.

Erstens lassen Sie uns etwas Speicher erstellen und ihn zwischen WebAssembly und JavaScript teilen.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul importiert den Speicher, oder wir können das WebAssembly-Modul den Speicher erstellen lassen und ihn an JavaScript exportieren.

In diesem Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unter dem Schlüssel `js.mem` zu unserem `importObject` hinzu.
Wir instanziieren dann unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und übergeben das Importobjekt:

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

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Im WebAssembly-Textformat wird die `import`-Anweisung wie folgt geschrieben:

```wat
(import "js" "mem" (memory 1))
```

Der Speicher muss mit demselben zweistufigen Schlüssel importiert werden, der im `importObject` angegeben ist (`js.mem`).
Die `1` zeigt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite mit 64KB).

> [!NOTE]
> Da dies der erste Speicher ist, der in das WebAssembly-Modul importiert wird, hat er einen Speicherindex von "0".
> Sie könnten auf diesen speziellen Speicher mit dem Index in den [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verweisen, aber da 0 der Standardindex ist, brauchen Sie in einheitlichen Speicheranwendungen nicht.

Jetzt, da wir eine gemeinsam genutzte Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenkette von Daten hinein zu schreiben.
Wir geben dann Informationen über den Ort der Zeichenkette und ihre Länge an das JavaScript weiter (wir könnten alternativ die Länge der Zeichenkette in die Zeichenkette selbst codieren, aber das Übergeben einer Länge ist einfacher für uns zu implementieren).

Zuerst lassen Sie uns eine Zeichenkette von Daten in unserem Speicher hinzufügen, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir die Inhalt der Zeichenkette einfach in den globalen Speicher mit einem `data`-Abschnitt schreiben.
Datensegmente ermöglichen es, dass eine Zeichenkette von Bytes zu einem gegebenen Offset zur Instanziierungszeit geschrieben wird, und sind ähnlich den `.data`-Sektionen in nativen ausführbaren Formaten.
Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) bei Offset 0:

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
> In diesem Fall verwenden wir sie nur, um Platzhalter für anderen Code anzuzeigen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, das wir verwenden werden, um die Zeichenkette in der Konsole zu protokollieren.
Dies muss der `console.log` im `importObject` zugeordnet werden, das zur Instanzierung des WebAssembly-Moduls verwendet wird.
Die Funktion ist im WebAssembly als `$log` benannt und nimmt `i32`-Parameter für den Zeichenketten-Offset und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenkette im Speicher (`0` und `2`) auf.
Dies wird aus dem Modul exportiert, sodass es von JavaScript aufgerufen werden kann.

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
Der vollständige Code ist unten gezeigt:

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
Die Funktion erstellt eine Ansicht auf der Zeichenkette im gemeinsam genutzten Speicher mit einer `Uint8Array` bei dem übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann von UTF-8 in eine Zeichenkette mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) dekodiert (wir geben `utf8` hier an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenkette wird dann mit `console.log()` protokolliert.

Der letzte Schritt ist das Aufrufen der exportierten `writeHi()`-Funktion, die nach der Instanziierung des Objekts durchgeführt wird.
Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi".

> [!NOTE]
> Sie finden den vollständigen Sourcecode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen erlauben es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden sollen als andere Anwendungsdaten, wie z.B. öffentliche vs. private Daten, Daten, die gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich für sehr große Anwendungen sein, die über den 32-Bit-Adressraum von Wasm hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung stehen, entweder direkt deklariert oder importiert, erhalten eine null-indexierte sequentiell zugewiesene Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie z.B. [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index verweisen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten Speicher, der der WebAssembly-Instanz hinzugefügt wurde.
Daher, wenn Sie nur einen Speicher hinzufügen, muss Ihr Code den Index nicht angeben.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenketten in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der unten stehende Code zeigt, wie wir zunächst zwei Speicherinstanzen importieren, indem wir denselben Ansatz wie im vorherigen Beispiel verwenden.
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

Die drei Speicherinstanzen werden automatisch basierend auf der Reihenfolge ihrer Erstellung zugewiesen.
Der Code unten zeigt, wie wir diesen Index (z.B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenkette schreiben möchten (Sie können denselben Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenkette, die den jeweiligen Speichertyp angibt.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass `(memory 0)` der Standard ist und daher optional.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"`, ohne den Speicherindex anzugeben, und dies sollte nach `"Memory 0 data"` angehängt werden, wenn der Speicherinhalt protokolliert wird.

Der WebAssembly-Protokollierungscode ist fast genau derselbe wie im vorherigen Beispiel, mit der Ausnahme, dass wir neben dem Zeichenkettenoffset und der Länge den Index des Speichers übergeben müssen, der die Zeichenkette enthält.
Wir protokollieren auch alle drei Speicherinstanzen.

Das vollständige Modul ist unten gezeigt:

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

Der JavaScript-Code ist auch sehr ähnlich zum vorherigen Beispiel, mit der Ausnahme, dass wir zwei Speicherinstanzen zum `importObject()` hinzufügen und der vom Modul-Instanz exportierte Speicher nach seiner Instanziierung mithilfe des aufgelösten Versprechens (`obj.instance.exports`) zugegriffen wird.
Der Code zum Protokollieren jeder Zeichenkette ist ebenfalls etwas komplizierter, da wir die Speicherindexnummer vom WebAssembly mit einem bestimmten `Memory`-Objekt abgleichen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich wie der unten stehende Text sein, außer dass "Memory 1 data" einige nachlaufende "rubbish characters" haben kann, da der Textdecoder mehr Bytes übergeben bekommt als für die Kodierung der Zeichenkette verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Sourcecode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Informationen zur Browser-Kompatibilität für diese Funktion finden Sie unter [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory).

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat zu beenden, schauen wir uns den kompliziertesten und oft verwirrenden Teil von WebAssembly an: **Tabellen**. Tabellen sind im Grunde vergrößerbare Arrays von Referenzen, die vom WebAssembly-Code durch Index zugänglich sind.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zunächst beobachten, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Funktionen von anderen Funktionen im selben Modul aufrufen](#funktionen_von_anderen_funktionen_im_selben_modul_aufrufen)), einen statischen Funktionsindex nimmt und daher nur eine Funktion aufrufen kann — aber was, wenn die aufgerufene Funktion ein Laufzeitwert ist?

- In JavaScript sehen wir dies die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir dies mit Funktionszeigern.
- In C++ sehen wir dies mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Anweisung, um dies zu erreichen, also gaben wir ihm `call_indirect`, das einen dynamischen Funktionsoperand nimmt. Das Problem ist, dass die einzigen Typen, die wir in WebAssembly für Operanden geben können, (derzeit) `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen jeder Signatur aufnehmen könnte), aber leider konnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Der lineare Speicher zeigt den rohen Inhalt der gespeicherten Werte als Bytes an, und dies würde es Wasm-Inhalten ermöglichen, willkürlich auf rohe Funktionsadressen zuzugreifen und sie zu beschädigen, was im Web nicht erlaubt sein kann.

Die Lösung war, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes, die nur i32-Werte sind, weiterzugeben. Der Operand von `call_indirect` kann daher ein i32-Indexwert sein.

#### Eine Tabelle in Wasm definieren

Also, wie platzieren wir Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Sektionen verwendet werden können, um Regionen des linearen Speichers mit Bytes zu initialisieren, können `elem`-Sektionen verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)` ist `2` die Anfangsgröße der Tabelle (was bedeutet, dass sie zwei Referenzen speichert) und `funcref` erklärt, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die `func`-Sektionen sind wie jede andere deklarierte Wasm-Funktion. Dies sind die Funktionen, die wir in unserer Tabelle referenzieren werden (zum Verständnis des Beispiels gibt jede nur einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Sektionen deklariert werden, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und sie trotzdem in Ihrer `elem`-Sektion referenzieren.
- Die `elem`-Sektion kann jede Untermenge der Funktionen in einem Modul in beliebiger Reihenfolge auflisten, was Duplikate erlaubt. Dies ist eine Liste der Funktionen, die von der Tabelle referenziert werden sollen, in der Reihenfolge, in der sie referenziert werden sollen.
- Der `(i32.const 0)`-Wert innerhalb der `elem`-Sektion ist ein Offset — dieser muss zu Beginn der Sektion deklariert werden und gibt an, bei welchem Index in der Tabelle die Funktionsreferenzen populiert werden sollen. Hier haben wir 0 angegeben und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen bei den Indizes 0 und 1 einfügen können. Wenn wir mit unseren Referenzen bei Offset 1 zu schreiben beginnen wollten, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten standardmäßig einen throw-on-call-Wert.

In JavaScript würden die äquivalenten Aufrufe zur Erstellung einer solchen Tabelleninstanz so aussehen:

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

Weiterführend müssen wir, da wir nun die Tabelle definiert haben, sie irgendwie verwenden. Verwenden wir diesen Abschnitt des Codes, um dies zu tun:

```wat
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))`-Block spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird verwendet, wenn eine Typprüfung der Tabellenfunktionsreferenzaufrufe später erfolgt. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als Nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese nimmt einen `i32` als Parameter, dem der Argumentname `$i` gegeben wird.
- Innerhalb der Funktion fügen wir einen Wert zum Stapel hinzu — welchen Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — es entfernt implizit den Wert von `$i` aus dem Stapel. Das Gesamtergebnis davon ist, dass die `callByIndex`-Funktion die `$i`'ste Funktion in der Tabelle aufruft.

Sie könnten den `call_indirect`-Parameter auch explizit während des Anrufbefehls deklarieren, anstatt davor, so:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherstufigen, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlich eher Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde in etwa so aussehen wie `tbl[i]()`.

Zurück zur Typprüfung: Da WebAssembly typgeprüft ist und der `funcref` potenziell jede Funktionensignatur sein kann, müssen wir die vermutete Signatur des Aufgerufenen an der Anrufstelle angeben, daher fügen wir den `$return_i32`-Typ hinzu, um dem Programm mitzuteilen, dass eine Funktion erwartet wird, die ein `i32` zurückgibt. Wenn der Aufgerufene keine übereinstimmende Signatur hat (z.B. ein `f32` zurückgegeben wird), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) geworfen.

Also, was verbindet `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist, was `call_indirect` implizit aufruft. In der Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennung auf irgendeine Weise angeben, etwa so:

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht insgesamt so aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispieldatei gefunden werden:

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

Wir laden es auf eine Webseite mit dem folgenden JavaScript:

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
> Genau wie Speicher können Tabellen auch aus JavaScript erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie in ein anderes Wasm-Modul importiert und aus ihm exportiert werden.

### Mutierende Tabellen und dynamische Verknüpfung

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt aus JavaScript mithilfe der Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) mutiert werden. Außerdem kann der WebAssembly-Code Tabellen selbst mithilfe von Anweisungen manipulieren, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um ausgeklügelte Ladezeit- und Laufzeit-[dynamische Verknüpfungsschemata](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verknüpft ist, teilen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s den Adressraum eines einzigen Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einzelnes Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses gleiche Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Anrufe.

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

Diese funktionieren wie folgt:

1. Die Funktion `shared0func` ist in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und verwendet dann den `i32.load`-Befehl, um den Wert zu laden, der im bereitgestellten Speicherindex enthalten ist. Der bereitgestellte Index ist `0` — erneut entfernt er implizit den vorherigen Wert aus dem Stapel. Also lädt `shared0func` und gibt den Wert zurück, der am Speicherindex `0` gespeichert ist.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42` und ruft `i32.store` auf, um einen bereitgestellten Wert bei einem bereitgestellten Index des importierten Speichers zu speichern. Auch hier werden diese Werte implizit aus dem Stapel entfernt, sodass das Ergebnis darin besteht, dass der Wert `42` im Speicherindex `0` gespeichert wird,
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0` und rufen dann die Funktion an diesem Index 0 der Tabelle auf, bei dem es sich um `shared0func` handelt, die in `shared0.wat` zuvor durch den `elem`-Block gespeichert wurde.
5. Wenn `shared0func` aufgerufen wird, lädt es das `42`, das wir im Speicher mithilfe des `i32.store`-Befehls in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke entfernen erneut Werte implizit aus dem Stapel, aber Sie könnten sie auch explizit innerhalb der Befehlaufrufe deklarieren, zum Beispiel:
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach der Umwandlung in Assembly verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jede der Module, die kompiliert wird, kann denselben Speicher und Tabellenobjekten importieren und so den gleichen linearen Speicher und Tabellenadressraum teilen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk-Memory-Operationen

Bulk-Memory-Operationen sind eine neuere Ergänzung zur Sprache — es werden sieben neue eingebautte Operationen für Bulk-Memory-Operationen wie Kopieren und Initialisieren bereitgestellt, um WebAssembly eine effizientere, leistungsfähigere Abbildung von nativen Funktionen wie `memcpy` und `memmove` zu ermöglichen.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations).

Die neuen Operationen sind:

- `data.drop`: Verworfene Daten in einem Datenabschnitt.
- `elem.drop`: Verworfene Daten in einem Elementeabschnitt.
- `memory.copy`: Kopieren von einer Region des linearen Speichers in eine andere.
- `memory.fill`: Füllen einer Region des linearen Speichers mit einem gegebenen Byte-Wert.
- `memory.init`: Kopieren einer Region aus einem Datenabschnitt.
- `table.copy`: Kopieren von einer Region einer Tabelle in eine andere.
- `table.init`: Kopieren einer Region aus einem Elementeabschnitt.

> [!NOTE]
> Mehr Informationen finden Sie im [Vorschlag zu Bulk-Memory-Operationen und bedingter Segmentinitialisierung](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Typen

### Zahlentypen

Derzeit hat WebAssembly vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

### Vektortypen

- `v128`: 128-Bit-Vektor von gepackten Ganzzahlen, Gleitkommazahlen oder einem einzigen 128-Bit-Typ.

### Referenztypen

Der [Vorschlag zu Referenztypen](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptfunktionen:

- Ein neuer Typ, `externref`, der _jeden_ JavaScript-Wert aufnehmen kann, z.B. Zeichenketten, DOM-Referenzen, Objekte, etc. `externref` ist aus Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und sie manipulieren, sondern kann sie nur empfangen und wieder ausgeben. Aber dies ist sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen zu lassen. und allgemein den Weg für eine einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Reihe von neuen Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält nützliche Informationen darüber, wie man `externref` von Rust aus nutzen kann.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types).

## Multi-value WebAssembly

Eine weitere neuere Ergänzung zur Sprache ist WebAssembly Multi-value, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Instruktionssequenzen mehrere Stapelwerte verbrauchen und produzieren können.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value).

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen Mehrwertanweisungen sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Instruktionstypen und anderes ebnen. Für eine nützliche Zusammenfassung des bisherigen Fortschritts und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es, dass WebAssembly-Memory-Objekte über mehrere WebAssembly-Instanzen hinweg geteilt werden, die in separaten Web-Workern laufen, in der gleichen Art und Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungssteigerungen in Webanwendungen.

Der Thread-Vorschlag besteht aus zwei Teilen, geteilte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics).

### Geteilte Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly-[`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Window- und Worker-Kontexten mithilfe von [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, in der gleichen Art und Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)-Konstruktors jetzt eine `shared`-Eigenschaft, die, wenn sie auf `true` gesetzt ist, einen geteilten Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des Speichers wird jetzt einen `SharedArrayBuffer` zurückgeben, anstatt des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Speicher mit dem Schlüsselwort `shared` erstellen, wie folgt:

```wat
(memory 1 2 shared)
```

Anders als nicht geteilte Speicher müssen geteilte Speicher sowohl in der JavaScript-API-Konstruktor als auch im Wasm-Textformat eine "maximale" Größe angeben.

> [!NOTE]
> Sie finden viele weitere Details im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurde hinzugefügt, die verwendet werden können, um höhere Funktionen wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten-Pthreads-Support-Seite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neue Funktionalität von Emscripten aus nutzt.

## Zusammenfassung

Damit endet unsere umfassende Tour durch die Hauptkomponenten des WebAssembly-Textformats und deren Wiedergabe in der WebAssembly-JS-API.

## Siehe auch

- Der Hauptpunkt, der nicht enthalten war, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Spezifikationsinterpreter implementiert wird.
