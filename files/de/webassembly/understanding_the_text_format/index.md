---
title: Verstehen des WebAssembly-Textformats
slug: WebAssembly/Understanding_the_text_format
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Um zu ermöglichen, dass WebAssembly von Menschen gelesen und bearbeitet werden kann, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, im Entwicklertools des Browsers, usw. angezeigt werden kann. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die rohe Syntax, und wie es mit dem zugrunde liegenden Bytecode, den es darstellt, in Beziehung steht — sowie die Wrapper-Objekte, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise nicht erforderlich, wenn Sie ein Webentwickler sind, der einfach nur ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Expressions

In beiden, den binären und textuellen Formaten, ist die grundlegende Einheit des Codes in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Expressions sind ein sehr altes und sehr einfaches textuelles Format zur Darstellung von Bäumen, daher kann man sich ein Modul als einen Baum von Knoten vorstellen, der die Struktur und den Code des Moduls beschreibt. Anders als der Abstrakte Syntaxbaum einer Programmiersprache ist der WebAssembly-Baum jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Schauen wir uns zuerst an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum befindet sich innerhalb eines Klammernpaares — `( ... )`. Das erste Label innerhalb der Klammer gibt an, um welche Art von Knoten es sich handelt, und danach folgt eine durch Leerzeichen getrennte Liste von Attributen oder Kindknoten. Das bedeutet, dass die WebAssembly S-Expression:

```wasm
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einen "memory"-Knoten mit dem Attribut "1" und einen "func"-Knoten. Wir werden bald sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber immer noch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärcode umwandeln (siehe [Umwandlung von WebAssembly-Textformat in Wasm](/de/docs/WebAssembly/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionalität zu Ihrem Modul

Ok, das ist nicht sehr interessant, also fügen wir diesem Modul ausführbaren Code hinzu.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** gibt an, was die Funktion nimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Locals** sind wie Vars in JavaScript, jedoch mit explizit deklarierten Typen.
- Der **Body** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Dies ist also ähnlich zu Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es ein S-Ausdruck ist.

## Signaturen und Parameter

Die Signatur ist eine Abfolge von Parametertypdeklarationen, gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist erwähnenswert, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens 1 Rückgabetyp geben, aber [später wird dies auf beliebige Anzahl entspannt](https://github.com/WebAssembly/spec/blob/master/proposals/multi-value/Overview.md).

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen). Die Zahlentypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

Ein einzelner Parameter wird `(param i32)` geschrieben und der Rückgabetyp wird `(result i32)` geschrieben, daher würde eine binäre Funktion, die zwei 32-Bit-Integer nimmt und einen 64-Bit-Float zurückgibt, so geschrieben:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden Locals mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Grunde nur Locals, die mit dem Wert des entsprechenden vom Aufrufer übergebenen Arguments initialisiert werden.

## Lokale und Parameter abrufen und setzen

Locals/Parameter können vom Body der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die `local.get`/`local.set` Befehle beziehen sich auf das Element, das geholt/gesetzt werden soll, über seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration angegeben, gefolgt von den Locals in der Reihenfolge ihrer Deklaration. Angenommen, wir hätten die folgende Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Der Befehl `local.get 0` würde den i32-Parameter erhalten, `local.get 1` den f32-Parameter, und `local.get 2` den f64-Local.

Ein weiteres Problem hier ist, dass die Verwendung von numerischen Indices zur Referenzierung von Elementen verwirrend und lästig sein kann. Das Textformat erlaubt es Ihnen, Parameter, Locals und die meisten anderen Elemente zu benennen, indem ein Name eingefügt wird, der einem Dollarzeichen (`$`) direkt vor der Typdeklaration folgt.

Daher könnten Sie unsere frühere Signatur folgendermaßen umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` anstelle von `local.get 0` schreiben, usw. (Beachten Sie, dass, wenn dieser Text in Binärcode umgewandelt wird, das Binäre nur die Ganzzahlen enthält.)

## Stapelmaschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stapelmaschinen**. Obwohl der Browser es in etwas Effizienteres kompiliert, ist die Ausführung von Wasm in Bezug auf eine Stapelmaschine definiert, bei der die Grundidee besteht, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten in/aus einem Stapel schiebt.

Zum Beispiel ist `local.get` so definiert, dass der Wert des gelesenen Locals in den Stapel geschoben wird, und `i32.add` nimmt zwei `i32` Werte vom Stapel (es greift implizit auf die vorherigen zwei in den Stapel geschobenen Werte zu), berechnet deren Summe (Modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der nach und nach gefüllt und geleert wird, während die Anweisungen des Körpers ausgeführt werden. Nehmen wir zum Beispiel nach der Ausführung der folgenden Funktion:

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

Der Stapel enthält genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` verarbeitet wird. Der Rückgabewert einer Funktion ist einfach der letzte im Stapel verbleibende Wert.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stapel genau übereinstimmt: Wenn Sie ein `(result f32)` deklarieren, muss der Stapel am Ende genau ein `f32` enthalten. Wenn kein Rückgabewerttyp vorhanden ist, muss der Stapel leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die gefolgt werden, sobald die Funktion aufgerufen wird. Zusammen mit dem, was wir bereits gelernt haben, können wir schließlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion nimmt zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt noch viele weitere Dinge, die in Funktionskörper eingefügt werden können, aber wir fangen einfach an und Sie werden im Laufe der Zeit viele weitere Beispiele sehen. Eine vollständige Liste der verfügbaren Opcodes finden Sie in der [WebAssembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird alleine nicht viel tun — nun müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie bei den Locals werden auch Funktionen standardmäßig durch einen Index identifiziert, aber der Einfachheit halber können sie benannt werden. Beginnen wir damit — zunächst fügen wir einen Namen, gefolgt von einem Dollarzeichen, direkt nach dem `func` Schlüsselwort hinzu:

```wasm
(func $add …)
```

Jetzt müssen wir eine Exportdeklaration hinzufügen — das sieht folgendermaßen aus:

```wasm
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` angibt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser fertiges Modul sieht jetzt so aus:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie dem Beispiel folgen möchten, speichern Sie das obige Modul in einer Datei namens `add.wat`, dann wandeln Sie es mit wabt in eine Binärdatei namens `add.wasm` um (siehe [Umwandlung von WebAssembly-Textformat in Wasm](/de/docs/WebAssembly/Text_format_to_Wasm) für Details).

Als Nächstes instanziieren wir unser Binärdaten asynchron (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running)) und führen unsere `add`-Funktion in JavaScript aus (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports) Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub unter [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) für weitere Details zur Instanziierungsfunktion.

## Grundlagen erkunden

Nun, da wir die realen Grundlagen behandelt haben, schauen wir uns einige weiterentwickelte Funktionen an.

### Funktionen aus anderen Funktionen im selben Modul aufrufen

Die `call` Anweisung ruft eine einzelne Funktion auf, die durch ihren Index oder Namen angegeben ist. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufs der ersten um eins erhöht zurück:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach einen 32-Bit-Integer und schiebt ihn auf den Stapel. Sie könnten das `i32` gegen einen der anderen verfügbaren Typen austauschen und den Wert der Konstante auf beliebige Werte ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel sehen Sie einen `(export "getAnswerPlus1")` Abschnitt, der direkt nach der `func`-Anweisung in der zweiten Funktion deklariert wird — dies ist eine Abkürzung, mit der wir erklären, dass wir diese Funktion exportieren möchten, und den Namen definieren, unter dem wir sie exportieren möchten.

Dies entspricht funktional dem Einbeziehen einer separaten Funktionsanweisung außerhalb der Funktion, an anderer Stelle im Modul auf dieselbe Weise wie zuvor, z.B.:

```wasm
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code, um unser obiges Modul aufzurufen, sieht folgendermaßen aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Funktionen aus JavaScript importieren

Wir haben bereits gesehen, dass JavaScript WebAssembly-Funktionen aufrufen kann, aber wie wäre es mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat tatsächlich kein eigenes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen Zwei-Ebenen-Namensraum, sodass die Importanweisung hier besagt, dass wir die `log` Funktion aus dem `console`-Modul importieren möchten. Außerdem sehen Sie, dass die exportierte `logIt`-Funktion die importierte Funktion mit der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Begriff von Signaturen, sodass jede JavaScript-Funktion übergeben werden kann, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Für das oben Genannte brauchen wir ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Dies würde wie folgt aussehen:

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
> Sie können dieses Beispiel auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Globale Variablen in WebAssembly deklarieren

WebAssembly hat die Möglichkeit, globale Variableninstanzen zu erstellen, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importier- und exportierbar sind. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es ungefähr so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repository; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben und auch das Schlüsselwort `mut` zusammen mit dem Datentyp angeben, wenn wir ihn veränderlich haben wollen.

Um einen äquivalenten Wert unter Verwendung von JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assemblycode arbeitet, sie auf den [Stapel](#stapelmaschinen) stellt, Operationen auf ihnen ausführt und dann das Ergebnis protokolliert, indem eine Methode in JavaScript aufgerufen wird.

Um mit Zeichenfolgen und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder im WebAssembly oder JavaScript erstellt und zwischen Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großer zusammenhängender, veränderbarer Byte-Array, das im Laufe der Zeit wachsen kann (siehe [linearen Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stapel und einem beliebigen Ort in einem Speicher.

Aus Sicht von JavaScript ist es, als ob der gesamte Speicher in einem großen erweiterten {{jsxref("ArrayBuffer")}} wäre.
JavaScript kann WebAssembly-Linearspeicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Schnittstelle erstellen und zu einer Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory` Instanzen haben eine [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, z.B. über die [`Memory.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in der WebAssembly.
Da `ArrayBuffer` Objekte die Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, um auf den neueren, größeren Speicher zu verweisen.

Beachten Sie, dass Sie beim Erstellen des Speichers die anfängliche Größe definieren müssen, und Sie können optional die maximale Größe angeben, auf die der Speicher wachsen kann.
WebAssembly wird versuchen, die maximale Größe zu reservieren (falls angegeben), und wenn es dazu in der Lage ist, kann es den Puffer zukünftig effizienter wachsen lassen. Selbst wenn es die maximale Größe jetzt nicht reservieren kann, könnte es später immer noch wachsen.
Die Methode schlägt nur dann fehl, wenn sie die _anfängliche_ Größe nicht zuweisen kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speicher](#mehrere_speicher) verwenden, wenn dies vom Browser unterstützt wird.
> Code, der keine mehrfachen Speicher verwendet, muss sich nicht ändern!

Um ein bisschen von diesem Verhalten zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenfolge in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenfolge ist einfach eine Sequenz von Bytes, die sich irgendwo innerhalb dieses linearen Speichers befindet.
Angenommen, wir haben eine geeignete Bytefolge in den WebAssembly-Speicher geschrieben, können wir diese Zeichenfolge an JavaScript weitergeben, indem wir den Speicher, den Offset der Zeichenfolge innerhalb des Speichers und eine Möglichkeit zur Angabe der Länge teilen.

Erstellen wir zunächst etwas Speicher und teilen ihn zwischen dem WebAssembly und JavaScript.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir können das WebAssembly-Modul den Speicher erstellen und nach JavaScript exportieren lassen.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Dann instanziieren wir unser WebAssembly-Modul, in diesem Fall „the_wasm_to_import.wasm“, mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) Methode und übergeben das Importobjekt:

```js
const memory = new WebAssembly.Memory({ initial: 1 });

const importObject = {
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(
  fetch("the_wasm_to_import.wasm"),
  importObject,
).then((obj) => {
  // Exportierte Funktionen aufrufen ...
});
```

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Im WebAssembly-Textformat wird die `import`-Anweisung wie folgt geschrieben:

```wasm
(import "js" "mem" (memory 1))
```

Der Speicher muss mit dem gleichen Zwei-Ebenen-Schlüssel importiert werden, der im `importObject` angegeben ist (`js.mem`).
Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste Speicher ist, der in das WebAssembly-Modul importiert wird, hat er einen Speicherindex von "0".
> Sie könnten in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) mit diesem Index auf diesen speziellen Speicher verweisen, aber da 0 der Standardindex ist, müssen Sie dies in Anwendungen mit einem einzigen Speicher nicht tun.

Jetzt, wo wir eine gemeinsame Speicherinstanz haben, ist der nächste Schritt, eine Zeichenfolge von Daten hineinzuschreiben.
Wir geben dann Informationen über den Speicherort der Zeichenfolge und ihre Länge an das JavaScript weiter (wir könnten alternativ die Länge der Zeichenfolge in der Zeichenfolge selbst codieren, aber es ist einfacher für uns, die Länge zu übergeben).

Fügen wir zunächst unserer Erinnerung eine Datenzeichenfolge hinzu, in diesem Fall „Hi“.
Da wir den gesamten linearen Speicher besitzen, können wir den Inhalt der Zeichenfolge mit einem `data` Abschnitt in den globalen Speicher schreiben.
Datenabschnitte ermöglichen es, eine Zeichenfolge von Bytes bei der Instanziierung an einem bestimmten Offset zu schreiben, und sind ähnlich wie die `.data` Abschnitte in nativen ausführbaren Formaten.
Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) am Offset 0:

```wasm
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Doppelpunktsyntax (`;;`), die wir hier verwenden, wird verwendet, um Kommentare in WebAssembly-Dateien anzuzeigen.
> In diesem Fall verwenden wir sie nur, um Platzhalter für anderen Code anzuzeigen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden, um die Zeichenfolge in die Konsole zu protokollieren.
Diese muss in `console.log` im `importObject` gemappt werden, das zur Instanziierung des WebAssembly-Moduls verwendet wird.
Die Funktion wird im WebAssembly `$log` genannt und nimmt `i32` Parameter für den Zeichenfolgenoffset und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log` Funktion mit dem Offset und der Länge der Zeichenfolge im Speicher auf (`0` und `2`).
Diese wird aus dem Modul exportiert, damit sie von JavaScript aus aufgerufen werden kann.

Unser finales WebAssembly-Modul (im Textformat) sieht folgendermaßen aus.

```wasm
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; Offset 0 an Log übergeben
    i32.const 2  ;; Länge 2 an Log übergeben
    call $log
  )
)
```

Auf der JavaScript-Seite müssen wir die Protokollierungsfunktion definieren, sie an den WebAssembly übergeben und dann die exportierte `writeHi()` Methode aufrufen.
Der vollständige Code wird unten angezeigt:

```js
const memory = new WebAssembly.Memory({ initial: 1 });

// Protokollierungsfunktion ($log), die von WebAssembly aufgerufen wird
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
    // Die Funktion, die aus logger2.wasm exportiert wird, aufrufen
    obj.instance.exports.writeHi();
  },
);
```

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` in der Eigenschaft `console.log` an das `importObject` übergeben und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht der Zeichenfolge im gemeinsam genutzten Speicher mithilfe eines `Uint8Array` am angegebenen Offset und mit der gegebenen Länge.
Die Bytes werden dann mit der [TextDecoder-API](/de/docs/Web/API/TextDecoder) von UTF-8 in eine Zeichenfolge dekodiert (wir geben hier `utf8` an, aber es werden viele andere Codierungen unterstützt).
Die Zeichenfolge wird dann mit `console.log()` protokolliert.

Der letzte Schritt ist, die exportierte `writeHi()` Funktion aufzurufen, die durchgeführt wird, nachdem das Objekt instanziiert wurde.
Wenn Sie den Code ausführen, wird die Konsole den Text „Hi“ anzeigen.

> [!NOTE]
> Sie können den vollständigen Sourcecode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) finden ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, und zwar in einer Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzelnen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders als andere Anwendungsdaten behandelt werden sollten, z.B. öffentliche vs. private Daten, Daten, die beibehalten werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich sein für sehr große Anwendungen, die über den Wasm-32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine Null-Indizierungs-nummer, die sequentiell zugewiesen wird. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie z.B. [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index verweisen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, den Index des ersten hinzugefügten Speichers zur WebAssembly-Instanz.
Daher muss Ihr Code, wenn Sie nur einen Speicher hinzufügen, den Index nicht angeben.

Um genauer zu zeigen, wie dies funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen an drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der folgende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, indem wir denselben Ansatz wie im vorherigen Beispiel verwenden.
Um zu zeigen, wie man Speicher innerhalb des WebAssembly-Moduls erstellt, haben wir im Modul eine dritte Speicherinstanz namens `$mem2` erstellt und sie _exportiert_.

```wasm
(module
  ;; ...

  (import "js" "mem0" (memory 1))
  (import "js" "mem1" (memory 1))

  ;; Erstellen und exportieren Sie einen dritten Speicher
  (memory $mem2 1)
  (export "memory2" (memory $mem2))

  ;; ...
)
```

Die drei Speicherinstanzen erhalten automatisch eine Instanz basierend auf ihrer Erstellungsreihenfolge.
Der nächste Code zeigt, wie dieser Index (z.B. `(memory 1)`) in der `data` Anweisung angegeben werden kann, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten (Sie können denselben Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenfolge, die den jeweiligen Speichertyp angibt.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Text zum Standardspeicher (0-Index) hinzufügen
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass das `(memory 0)` der Standardwert ist und daher optional ist.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne Angabe eines Speicherindexes, und dieser sollte nach `"Memory 0 data"` angefügt werden, wenn der Speicherinhalt protokolliert wird.

Der WebAssembly-Protokollierungscode ist fast genau derselbe wie im vorherigen Beispiel, außer dass wir zusammen mit dem Zeichenfolgenoffset und der Länge den Index des Speichers übergeben müssen, der die Zeichenfolge enthält.
Wir protokollieren auch alle drei Speicherinstanzen.

Das vollständige Modul wird unten angezeigt:

```wasm
(module
  (import "console" "log" (func $log (param i32 i32 i32)))

  (import "js" "mem0" (memory 1))
  (import "js" "mem1" (memory 1))

  ;; Erstellen und exportieren Sie einen dritten Speicher
  (memory $mem2 1)
  (export "memory2" (memory $mem2))

  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Text zum Standardspeicher (0-Index) hinzufügen
  (data (i32.const 13) " (Default)")

  (func $logMemory (param $memIndex i32) (param $memOffSet i32) (param $stringLength i32)
    local.get $memIndex
    local.get $memOffSet
    local.get $stringLength
    call $log
  )

  (func (export "logAllMemory")
    ;; Speicherindex 0, Offset 0 protokollieren
    (i32.const 0)  ;; Speicherindex 0
    (i32.const 0)  ;; Speicheroffset 0
    (i32.const 23)  ;; Zeichenfolgenlänge 23
    (call $logMemory)

    ;; Speicherindex 1, Offset 0 protokollieren
    i32.const 1  ;; Speicherindex 1
    i32.const 0  ;; Speicheroffset 0
    i32.const 20  ;; Zeichenfolgenlänge 20
    call $logMemory

    ;; Speicherindex 2, Offset 0 protokollieren
    i32.const 2  ;; Speicherindex 2
    i32.const 0  ;; Speicheroffset 0
    i32.const 12  ;; Zeichenfolgenlänge 13
    call $logMemory
  )

)
```

Der JavaScript-Code ist auch sehr ähnlich wie im vorherigen Beispiel, außer dass wir zwei Speicherinstanzen an das `importObject()` weitergeben und der Speicher, der vom Modulinstanz exportiert wurde, nach seiner Instanziierung über das aufgelöste Versprechen (`obj.instance.exports`) zugegriffen wird.
Der Code zum Protokollieren jeder Zeichenfolge ist auch etwas komplizierter, da wir die Speicherinstanznummer vom WebAssembly mit einem bestimmten `Memory`-Objekt abgleichen müssen.

```js
const memory0 = new WebAssembly.Memory({ initial: 1 });
const memory1 = new WebAssembly.Memory({ initial: 1 });
let memory2; // Vom Modul erstellt

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
  log(string); // Implementierung nicht angezeigt - könnte console.log() aufrufen
}

const importObject = {
  console: { log: consoleLogString },
  js: { mem0: memory0, mem1: memory1 },
};

WebAssembly.instantiateStreaming(fetch("multi-memory.wasm"), importObject).then(
  (obj) => {
    // Exportierten Speicher abrufen
    memory2 = obj.instance.exports.memory2;
    // Speicher protokollieren
    obj.instance.exports.logAllMemory();
  },
);
```

Das Ergebnis des Beispiels sollte dem unten stehenden Text ähnlich sein, mit Ausnahme von "Memory 1 data", das einige nachfolgenden „Müllzeichen“ enthalten kann, da der Textdecoder mehr Bytes übergeben wird, als zur Codierung der Zeichenfolge verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Sourcecode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) finden ([auch live ansehen](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)).

> [!NOTE]
> Siehe [`webassembly.multimemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browserkompatibilität für dieses Feature.

### WebAssembly-Tabellen

Um diesen Überblick über das WebAssembly-Textformat abzuschließen, schauen wir uns den vielleicht komplexesten und oft verwirrenden Teil von WebAssembly an: **Tabellen**. Tabellen sind im Wesentlichen skalierbare Arrays von Referenzen, auf die von WebAssembly-Code aus über einen Index zugegriffen werden kann.

Um zu verstehen, warum Tabellen benötigt werden, sollten wir zuerst bemerken, dass die `call` Anweisung, die wir zuvor gesehen haben (siehe [Funktionen aus anderen Funktionen im gleichen Modul aufrufen](#funktionen_aus_anderen_funktionen_im_selben_modul_aufrufen)), einen statischen Funktionsindex nimmt und daher nur eine Funktion aufrufen kann — aber was, wenn der aufgerufene Wert zur Laufzeit ein Wert ist?

- In JavaScript sehen wir das die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir das mit Funktionszeigern.
- In C++ sehen wir das mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Anweisungen, um dies zu erreichen, sodass wir `call_indirect` hinzufügten, das einen dynamischen Funktionsoperanden nimmt. Das Problem ist, dass die einzigen Typen, die wir derzeit als Operanden in WebAssembly haben, `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc` Typ hinzufügen („any“, weil der Typ Funktionen mit beliebiger Signatur halten könnte), aber leider konnte dieser `anyfunc` Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Der lineare Speicher legt den rohen Inhalt der gespeicherten Werte als Bytes offen, und das würde es Wasm-Inhalten erlauben, willkürlich auf rohe Funktionsadressen zuzugreifen und sie zu beschädigen, was auf dem Web nicht erlaubt sein kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes zu übergeben, die einfach i32-Werte sind. Der Operanden von `call_indirect` kann daher ein i32-Indexwert sein.

#### Eine Tabelle in Wasm definieren

Wie platzieren wir also Wasm-Funktionen in unserer Tabelle? Genau wie `data` Abschnitte zum Initialisieren von Regionen im linearen Speicher mit Bytes verwendet werden können, können `elem` Abschnitte zum Initialisieren von Regionen in Tabellen mit Funktionen verwendet werden:

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

- In `(table 2 funcref)` gibt die 2 die anfängliche Größe der Tabelle an (was bedeutet, dass zwei Referenzen gespeichert werden) und `funcref` deklariert, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die `func` Abschnitte sind wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (zur Veranschaulichung gibt jede einfach einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert werden, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und trotzdem im `elem` Abschnitt darauf verweisen.
- Der `elem` Abschnitt kann jede Untermenge der Funktionen in einem Modul in beliebiger Reihenfolge auflisten, doppelte Einträge sind ebenfalls möglich. Dies ist eine Liste der Funktionen, auf die durch die Tabelle verwiesen wird, in der Reihenfolge, in der auf sie verwiesen wird.
- Der `(i32.const 0)` Wert im `elem` Abschnitt ist ein Offset — dieser muss zu Beginn des Abschnitts deklariert werden und gibt an, bei welchem Index in der Tabelle Funktionsreferenzen zu schreiben beginnt. Hier haben wir 0 angegeben und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen an den Indizes 0 und 1 füllen können. Wenn wir anfangen wollten, unsere Referenzen bei Offset 1 zu schreiben, hätten wir `(i32.const 1)` schreiben müssen, und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Uninitialisierte Elemente erhalten einen Standardwert, der beim Aufruf eine Ausnahme auslöst.

In JavaScript würden die entsprechenden Aufrufe zum Erstellen einer solchen Tabelleninstanz so aussehen:

```js
function () {
  // Tabellenabschnitt
  const tbl = new WebAssembly.Table({initial: 2, element: "anyfunc"});

  // Funktionsabschnitte:
  const f1 = ... /* eine importierte WebAssembly-Funktion */
  const f2 = ... /* eine importierte WebAssembly-Funktion */

  // elem Abschnitt
  tbl.set(0, f1);
  tbl.set(1, f2);
};
```

#### Die Tabelle verwenden

Gehen wir weiter, jetzt, da wir die Tabelle definiert haben, müssen wir sie irgendwie verwenden. Verwenden wir diesen Abschnitt des Codes, um dies zu tun:

```wasm
(type $return_i32 (func (result i32))) ;; wenn dies f32 wäre, würde die Typprüfung fehlschlagen
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))` Block spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird verwendet, wenn später die Typprüfung der Tabellenfunktion durchgeführt wird. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als Nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese wird einen `i32` Parameter nehmen, der den Argumentnamen `$i` zugewiesen bekommt.
- Innerhalb der Funktion fügen wir einen Wert dem Stapel hinzu — welcher Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — es poppt implizit den Wert von `$i` aus dem Stapel. Das Nettoergebnis davon ist, dass die `callByIndex` Funktion die `$i`'te Funktion in der Tabelle aufruft.

Sie könnten den `call_indirect` Parameter auch explizit während des Befehlsaufrufs anstelle vorher deklarieren, wie folgt:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherstufigen, expressiveren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlich eher einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode könnte in etwa so aussehen wie `tbl[i]()`.

Zurück zur Typprüfung: Da WebAssembly typgeprüft ist und der `funcref` potenziell jede beliebige Funktionssignatur haben kann, müssen wir die vermutete Signatur des angerufenen Standorts bereitstellen, daher geben wir den Typ `$return_i32` an, um dem Programm mitzuteilen, dass eine Funktion, die ein `i32` zurückgibt, erwartet wird. Wenn der Angerufene keine übereinstimmende Signatur hat (zum Beispiel ein `f32` stattdessen zurückgegeben wird), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) ausgelöst.

Was verbindet also das `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist, was `call_indirect` implizit aufruft. In der Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Art Tabellenidentifikator angeben, etwa:

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht insgesamt wie folgt aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispieldatei gefunden werden:

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

Wir laden es in eine Webseite mit folgendem JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // gibt 42 zurück
  console.log(obj.instance.exports.callByIndex(1)); // gibt 13 zurück
  console.log(obj.instance.exports.callByIndex(2)); // gibt einen Fehler zurück, da es keine Indexposition 2 in der Tabelle gibt
});
```

> [!NOTE]
> Diese Beispiel finden Sie auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genauso wie bei Memory können Tabellen auch von JavaScript erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)) und auch von einem anderen Wasm-Modul importiert/eksportiert werden.

### Tabellen mutieren und dynamisches Verknüpfen

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Tabellenobjekt von JavaScript aus mit den Methoden [`grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set) verändert werden. Und WebAssembly-Code ist selbst in der Lage, Tabellen zu manipulieren, indem Anweisungen, die Teil der [Referenztypen](#referenztypen) sind, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um ausgeklügelte Ladezeit- und Laufzeit-[dynamische Verknüpfungspläne](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verknüpft wird, teilen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einziges Importobjekt, das eine Memory-Instanz und eine Tabelleninstanz enthält, und übergeben dieses gleiche Importobjekt mehreren [`instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) Aufrufen.

Unsere `.wat` Beispiele sehen so aus:

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
   i32.store  ;; speichert 42 an Adresse 0
   i32.const 0
   call_indirect (type $void_to_i32))
)
```

Diese funktionieren wie folgt:

1. Die Funktion `shared0func` ist in `shared0.wat` definiert und wird in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und verwendet dann den `i32.load` Befehl, um den Wert im bereitgestellten Speicherindex zu laden. Der bereitgestellte Index ist `0` — wieder poppt er implizit den vorherigen Wert aus dem Stapel. `shared0func` lädt und gibt den im Speicherindex `0` gespeicherten Wert zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten, die die Werte `0` und `42` enthalten, und ruft `i32.store` auf, um einen angegebenen Wert an einem angegebenen Index des importierten Speichers zu speichern. Wieder poppt er implizit diese Werte aus dem Stapel, sodass das Ergebnis ist, dass es den Wert `42` im Speicherindex `0` speichert.
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, und rufen dann die Funktion bei diesem Index 0 der Tabelle auf, die `shared0func` ist, die zuvor durch den `elem` Block in `shared0.wat` dort gespeichert wurde.
5. Wenn aufgerufen, lädt `shared0func` die `42`, die wir mit dem `i32.store` Befehl in `shared1.wat` gespeichert haben, in den Speicher.

> [!NOTE]
> Die obigen Ausdrücke poppen erneut Werte implizit aus dem Stapel, aber Sie könnten diese explizit innerhalb der Befehlsaufrufe deklarieren, zum Beispiel:
>
> ```wasm
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
  console.log(results[1].instance.exports.doIt()); // gibt 42 zurück
});
```

Jedes der Module, die kompiliert werden, kann dieselben Memory- und Table-Objekte importieren und somit denselben linearen Speicher und Tabellen-„Adressraum“ teilen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Umfangreiche Speicheroperationen

Umfangreiche Speicheroperationen sind eine neuere Erweiterung der Sprache — es werden sieben neue integrierte Operationen für umfangreiche Speicheroperationen wie Kopieren und Initialisieren bereitgestellt, um WebAssembly in die Lage zu versetzen, native Funktionen wie `memcpy` und `memmove` effizienter und leistungsfähiger zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browserkompatibilität.

Die neuen Operationen sind:

- `data.drop`: Verwerfen der Daten in einem Datensegment.
- `elem.drop`: Verwerfen der Daten in einem Elementsegment.
- `memory.copy`: Kopieren von einer Region des linearen Speichers in eine andere.
- `memory.fill`: Auffüllen einer Region des linearen Speichers mit einem bestimmten Bytewert.
- `memory.init`: Kopieren einer Region aus einem Datensegment.
- `table.copy`: Kopieren von einer Region der Tabelle in eine andere.
- `table.init`: Kopieren einer Region aus einem Elementsegment.

> [!NOTE]
> Weitere Informationen finden Sie im [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md) Vorschlag.

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

### Vektortypen

- `v128`: 128 Bit Vektor aus gepackten Ganzzahlen, Gleitkommadaten oder einem einzelnen 128 Bit Typ.

### Referenztypen

Der [Referenztypen-Vorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Einen neuen Typ, `externref`, der _jeden_ JavaScript-Wert halten kann, z.B. Zeichenfolgen, DOM-Referenzen, Objekte, etc. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und sie manipulieren, sondern kann sie nur empfangen und zurückgeben. Aber das ist sehr nützlich, um es Wasm-Modulen zu ermöglichen, JavaScript-Funktionen, DOM-APIs, etc. aufzurufen und allgemein den Weg zu einfacherer Interoperabilität mit der Hostumgebung zu ebnen. `externref` kann für Werttypen und Tableau-Elemente verwendet werden.
- Eine Anzahl neuer Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API machen zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) Dokumentation enthält einige nützliche Informationen darüber, wie man `externref` von Rust aus verwendet.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browserkompatibilität.

## Multi-Value WebAssembly

Eine weitere kürzlich erfolgte Erweiterung der Sprache ist Multi-Value-WebAssembly, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungssequenzen mehrere Stapelwerte konsumieren und produzieren können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browserkompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen verfügbaren Multi-Value-Anweisungen sind Aufrufe zu Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen ebnen, und andere Dinge darüber hinaus. Für eine nützliche Beschreibung des bisherigen Fortschritts und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es, WebAssembly-Speicherobjekte über mehrere WebAssembly-Instanzen hinweg zu teilen, die in separaten Web-Workern laufen, in derselben Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungssteigerungen in Webanwendungen.

Der Threads-Vorschlag hat zwei Teile, gemeinsam genutzte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browserkompatibilität.

### Gemeinsame Speicher

Wie oben beschrieben, können Sie gemeinsam genutzte WebAssembly [`Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory) Konstruktors jetzt eine `shared` Eigenschaft, die, wenn auf `true` gesetzt, einen gemeinsamen Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

die [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) Eigenschaft des Speichers gibt jetzt einen `SharedArrayBuffer` anstelle des üblichen `ArrayBuffer` zurück:

```js
memory.buffer; // gibt SharedArrayBuffer zurück
```

Im Textformat können Sie einen gemeinsamen Speicher mit dem `shared`-Schlüsselwort erstellen, wie folgt:

```wasm
(memory 1 2 shared)
```

Anders als bei nicht geteilten Speichermedien muss bei geteilten Speichern ein „maximaler“ Größe sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat angegeben werden.

> [!NOTE]
> Weitere Details finden Sie im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Es wurden eine Anzahl neuer Wasm-Befehle hinzugefügt, die verwendet werden können, um höherstufige Funktionen wie Mutexes, Bedingnungsvariablen usw. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads-Supportseite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neuen Funktionen von Emscripten aus nutzt.

## Zusammenfassung

Damit ist unserer Überblick tour über die wichtigsten Komponenten des WebAssembly-Textformats abgeschlossen und wie sie in der WebAssembly-JS-API wiedergespiegelt werden.

## Siehe auch

- Die Hauptsache, die nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax), die vom Spezifikationsinterpreter implementiert wird.
