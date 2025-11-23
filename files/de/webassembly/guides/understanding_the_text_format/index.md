---
title: Verstehen des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Um WebAssembly lesbar und editierbar für Menschen zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen in Browsern und ähnlichen Umgebungen angezeigt werden soll. Dieser Artikel erklärt, wie das Textformat hinsichtlich seiner Syntax funktioniert und wie es sich auf den zugrunde liegenden Bytecode bezieht, den es darstellt, sowie auf die Wrapper-Objekte, die WebAssembly in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)). Es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Ausdrücke

In beiden Formaten, dem binären und dem textuellen, ist die grundlegende Code-Einheit in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein altes, einfaches Textformat zur Darstellung von Bäumen; wir können daher ein Modul als Baum von Knoten betrachten, die die Struktur des Moduls und seinen Code beschreiben. Im Gegensatz zum abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht größtenteils aus Listen von Anweisungen.

Zuerst sehen wir uns an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum ist in ein Paar von Klammern gesetzt — `( ... )`. Das erste Label innerhalb der Klammern gibt an, welchen Typ von Knoten es ist, und danach folgt eine durch Leerzeichen getrennte Liste von entweder Attributen oder Kindknoten. Das bedeutet, der WebAssembly-S-Ausdruck:

```wat
(module (memory 1) (func))
```

repräsentiert einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten, einem "memory"-Knoten mit dem Attribut "1" und einem "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wat
(module)
```

Dieses Modul ist leer, aber es ist immer noch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärcode umwandeln (siehe [Konvertierung des WebAssembly-Textformats zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modulheader, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben wird:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionalität zu Ihrem Modul

Okay, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Jeder Code in einem WebAssembly-Modul ist in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** gibt an, was die Funktion aufnimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Locals** sind wie Variablen in JavaScript, aber mit explizit deklarierten Typen.
- Der **Körper** ist nur eine lineare Liste von niedrigen Anweisungen.

Dies ist ähnlich wie Funktionen in anderen Sprachen, obwohl es etwas anders aussieht.

## Signaturen und Parameter

Die Signatur ist eine Folge von Parameterdeklarationen nach Typ, gefolgt von einer Liste von Rückgabedeklarationen nach Typ. Es ist hier wichtig zu beachten, dass:

- Das Fehlen von `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es maximal 1 Rückgabetyp geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md) zu einer beliebigen Anzahl.

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit Integer
- `i64`: 64-Bit Integer
- `f32`: 32-Bit Fließkommazahl
- `f64`: 64-Bit Fließkommazahl

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabewert als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit Integer übernimmt und eine 64-Bit Fließkommazahl zurückgibt, wie folgt geschrieben werden:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die Locals mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Wesentlichen nur Locals, die mit dem Wert des entsprechenden, vom Aufrufer übergebenen Arguments initialisiert werden.

## Lesen und Setzen von Locals und Parametern

Locals/Parameter können vom Körper der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die `local.get`/`local.set` Befehle beziehen sich auf das Element, das geholt/gesetzt werden soll, durch seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration angesprochen, gefolgt von den Locals in der Reihenfolge ihrer Deklaration. Beispielsweise gibt die folgende Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2
)
```

Die Anweisung `local.get 0` würde den i32-Parameter holen, `local.get 1` würde den f32-Parameter holen und `local.get 2` würde den f64-Local holen.

Hier gibt es ein weiteres Problem – die Verwendung von numerischen Indizes zur Referenzierung von Elementen kann verwirrend und lästig sein. Um dies zu mindern, können Sie Parameter, Locals und die meisten anderen Elemente benennen, indem Sie der Typdeklaration einen mit einem Dollarzeichen (`$`) versehenen Namen hinzufügen.

So könnten Sie unsere vorherige Signatur so umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` anstelle von `local.get 0` schreiben, usw. (Beachten Sie, dass wenn dieser Text in Binärcode umgewandelt wird, die Binärdatei nur die Integer enthalten wird.)

## Stapelmaschinen

Bevor wir einen Funktionskörper schreiben, gibt es noch ein wichtiges Konzept zu besprechen: **Stapelmaschinen**. Obwohl der Browser es in etwas Effizienteres kompiliert, wird die Ausführung von Wasm im Begriff einer Stapelmaschine definiert, bei der die grundlegende Idee ist, dass jede Art von Anweisung eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64` Werten auf einen Stapel drückt und/oder von diesem holt.

Zum Beispiel wird `local.get` definiert, um den Wert des gelesenen Locals auf den Stapel zu schieben, und `i32.add` holt zwei `i32` Werte (es greift implizit auf die vorherigen zwei auf den Stapel geschobenen Werte zu), berechnet ihre Summe (modulo 2^32) und schiebt den resultierenden i32 Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der nach und nach gefüllt und geleert wird, während die Anweisungen des Körpers ausgeführt werden. So enthält zum Beispiel nach der Ausführung der folgenden Funktion:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add
)
```

der Stapel genau einen `i32` Wert – das Ergebnis des Ausdrucks (`$p + $p`), welches durch `i32.add` behandelt wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stapel verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stapel genau übereinstimmt: Wenn Sie einen `(result f32)` erklären, dann muss der Stapel am Ende genau ein `f32` enthalten. Wenn es keinen Ergebnis-Typ gibt, muss der Stapel leer sein.

## Unser erster Funktionskörper

Der Funktionskörper ist eine Liste von Anweisungen, die ausgeführt werden, wenn die Funktion aufgerufen wird. In Kombination mit dem, was wir bereits gelernt haben, können wir schließlich ein Modul definieren, das unsere eigene grundlegende Funktion enthält:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add
  )
)
```

Diese Funktion nimmt zwei Parameter auf, addiert sie und gibt das Ergebnis zurück.

Mehr Dinge können in Funktionskörper gesetzt werden, aber wir werden vorerst mit einer grundlegenden Funktion beginnen. Sie werden im Verlauf auf mehrere weitere Beispiele stoßen. Eine vollständige Liste der verfügbaren Opcodes finden Sie in der [webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird allein nicht viel tun – jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Locals werden Funktionen standardmäßig durch einen Index identifiziert, aber aus Bequemlichkeitsgründen können sie benannt werden. Fangen wir damit an – zuerst fügen wir einen Namen, dem ein Dollarzeichen vorausgeht, direkt nach dem `func`-Schlüsselwort hinzu:

```wat
(func $add …)
```

Nun müssen wir eine Exporterklärung hinzufügen – dies sieht folgendermaßen aus:

```wat
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, wohingegen `$add` auswählt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser endgültiges Modul sieht (vorerst) so aus:

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

Wenn Sie dem Beispiel folgen möchten, speichern Sie das obige Modul in einer Datei namens `add.wat` und konvertieren Sie es dann mit wabt in eine Binärdatei namens `add.wasm` (siehe [Konvertierung des WebAssembly-Textformats zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als Nächstes instanziieren wir unser Binärdatei asynchron (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und führen unsere `add`-Funktion in JavaScript aus (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie finden dieses Beispiel in GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details über die Instanziierfunktion.

## Grundlagen erkunden

Nachdem wir die Grundlagen behandelt haben, lassen Sie uns einige fortgeschrittenere Funktionen betrachten.

### Aufrufen von Funktionen aus anderen Funktionen im selben Modul

Die `call`-Anweisung ruft eine einzelne Funktion auf, die durch ihren Index oder Namen angegeben wird. Zum Beispiel enthält das folgende Modul zwei Funktionen – eine gibt den Wert `42` zurück, die andere gibt das Ergebnis des Aufrufs der ersten Funktion plus eins zurück:

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
> `i32.const` definiert eine 32-Bit-Integer und schiebt sie auf den Stapel. Sie können das `i32` durch jeden der anderen verfügbaren Typen austauschen und den Wert des Constants nach Belieben ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie einen `(export "getAnswerPlus1")`-Abschnitt bemerken, der direkt nach der `func`-Anweisung in der zweiten Funktion deklariert ist – dies ist eine abgekürzte Möglichkeit, zu erklären, dass wir diese Funktion exportieren möchten, und dabei den Namen zu definieren, unter dem wir sie exportieren möchten.

Dies ist funktional äquivalent zu dem Einfügen einer separaten Funktionsanweisung außerhalb der Funktion, anderswo im Modul, in der selben Weise, wie wir es zuvor getan haben, z.B.:

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

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber was ist mit dem Aufruf von JavaScript-Funktionen durch WebAssembly? WebAssembly hat kein eingebautes Wissen über JavaScript, aber es verfügt über eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log
  )
)
```

WebAssembly hat einen zweistufigen Namensraum, daher importiert die Importanweisung hier die `log`-Funktion aus dem `console`-Modul. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mithilfe der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch geprüft wird, sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keine Vorstellung von einer Signatur, daher kann jede JavaScript-Funktion übergeben werden, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import erklärt, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Der obige Import erfordert ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Dies sähe wie folgt in JavaScript aus:

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

### Deklarieren von Globalen in WebAssembly

WebAssembly kann globale Variableninstanzen erstellen, die sowohl von JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen hinweg importier- bzw. exportierbar sind. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es ungefähr so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repository; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, mit der Ausnahme, dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben, und wir auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes angeben, wenn wir möchten, dass er veränderbar ist.

Um einen äquivalenten Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assemblercode arbeitet, sie auf den [Stapel](#stapelmaschinen) legt, Operationen auf ihnen durchführt und das Ergebnis dann durch einen Methodenaufruf in JavaScript protokolliert.

Zum Arbeiten mit Zeichenfolgen und anderen komplexeren Datentypen verwenden wir `memory`, das entweder in WebAssembly oder JavaScript erstellt und zwischen den Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` nur ein großer zusammenhängender, veränderbarer Array von Rohbytes, das im Laufe der Zeit wachsen kann (siehe [lineare Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/store) zum Lesen und Schreiben von Bytes zwischen dem Stapel und einer beliebigen Position in einem Speicher.

Aus der Sicht von JavaScript ist es, als würde sich der gesamte Speicher in einem großen, erweiterbaren {{jsxref("ArrayBuffer")}} befinden.
JavaScript kann WebAssembly-Linearspeicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und in eine Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, z. B. über die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/grow) im WebAssembly.
Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, um auf den neueren, größeren Speicher zu verweisen.

Beachten Sie, dass beim Erstellen des Speichers die anfängliche Größe definiert werden muss und Sie optional die maximale Größe angeben können, auf die der Speicher wachsen kann.
WebAssembly wird versuchen, die maximale Größe (falls angegeben) zu reservieren, und wenn es dazu in der Lage ist, kann es den Puffer in Zukunft effizienter wachsen lassen. Selbst wenn es die maximale Größe jetzt nicht zuweisen kann, kann es später möglicherweise weiter wachsen.
Die Methode schlägt nur dann fehl, wenn sie die _anfängliche_ Größe nicht zuweisen kann.

> [!NOTE]
> Ursprünglich erlaubt WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speicher](#mehrere_speicher) verwenden, wenn sie vom Browser unterstützt werden.
> Code, der keine mehreren Speicher verwendet, muss nicht geändert werden!

Um einen Teil dieses Verhaltens zu demonstrieren, schauen wir uns den Fall an, in dem wir mit einer Zeichenfolge in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenfolge ist einfach eine Folge von Bytes irgendwo in diesem linearen Speicher.
Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenfolge an JavaScript übergeben, indem wir den Speicher, den Offset der Zeichenfolge innerhalb des Speichers und eine Angabe über deren Länge teilen.

Zuerst erstellen wir etwas Speicher und teilen ihn zwischen dem WebAssembly und JavaScript.
WebAssembly bietet uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir können das WebAssembly-Modul den Speicher erstellen lassen und ihn dann an JavaScript exportieren.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Page und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Dann instanziieren wir unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und übergeben das Importobjekt:

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

```wat
(import "js" "mem" (memory 1))
```

Der Speicher muss mit dem gleichen zweistufigen Schlüssel importiert werden, wie er im `importObject` angegeben ist (`js.mem`).
Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert zurzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste in das WebAssembly-Modul importierte Speicher ist, hat es einen Speicherindex von `0`.
> Sie könnten diesen speziellen Speicher durch den Index in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da `0` der Standardindex ist, müssen Sie das in Single-Memory-Anwendungen nicht tun.

Jetzt, da wir eine geteilte Speicherinstanz haben, ist der nächste Schritt, eine Zeichenfolge von Daten darin zu schreiben.
Wir übergeben dann Informationen darüber, wo sich die Zeichenfolge befindet und ihre Länge an JavaScript (wir könnten alternativ die Länge der Zeichenfolge in der Zeichenfolge selbst codieren, aber das Übergeben einer Länge ist für uns einfacher zu implementieren).

Zuerst fügen wir eine Zeichenfolge von Daten in unseren Speicher ein, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir einfach die Zeichenfolgeninhalte in den globalen Speicher mit einem `data`-Abschnitt schreiben.
Datenabschnitte erlauben das Schreiben einer Bytefolge an einen bestimmten Offset zur Instanziationszeit und sind ähnlich den `.data`-Abschnitten in nativen Ausführungsformaten.
Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) am Offset 0:

```wat
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die doppelte Semikolonsyntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzuzeigen.
> In diesem Fall verwenden wir sie nur, um Platzhalter für anderen Code anzuzeigen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus JavaScript, die wir verwenden, um die Zeichenfolge in der Konsole zu protokollieren.
Dies muss in das `importObject`, das zur Instanziierung des WebAssembly-Moduls verwendet wird, zu `console.log` abgebildet werden.
Die Funktion wird im WebAssembly mit `$log` benannt und akzeptiert `i32` Parameter für den Zeichenfolgenoffset und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenfolge im Speicher (`0` und `2`) auf.
Diese wird aus dem Modul exportiert, sodass sie von JavaScript aufgerufen werden kann.

Unser finales WebAssembly-Modul (im Textformat) sieht so aus.

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

Auf der JavaScript-Seite müssen wir die Protokollierungsfunktion definieren, sie an WebAssembly übergeben und dann die exportierte `writeHi()`-Methode aufrufen.
Der vollständige Code wird unten gezeigt:

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` über die Eigenschaft `console.log` an das `importObject` übergeben und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht auf die Zeichenfolge im geteilten Speicher unter Verwendung eines `Uint8Array` bei dem übergebenen Offset und mit der gegebenen Länge.
Die Bytes werden dann mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) von UTF-8 in eine Zeichenfolge dekodiert (wir geben `utf8` hier an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenfolge wird dann mit `console.log()` in der Konsole protokolliert.

Der letzte Schritt ist das Aufrufen der exportierten `writeHi()`-Funktion, was nach der Instanziierung des Objekts erfolgt.
Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi" an.

> [!NOTE]
> Sie finden den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzelnen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die unterschiedlich behandelt werden sollten als andere Anwendungsdaten, wie z.B. öffentliche vs. private Daten, Daten, die gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch für sehr große Anwendungen nützlich sein, die über den 32-Bit-Adressraum von Wasm hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine nullbasierte, sequentiell zugewiesene Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/store), können auf einen bestimmten Speicher über seinen Index verweisen, sodass Sie kontrollieren können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wird.
Daher muss Ihr Code, wenn Sie nur einen einzigen Speicher hinzufügen, den Index nicht angeben.

Um dies detaillierter zu erklären, erweitern wir das vorherige Beispiel, um Zeichenfolgen in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der unten stehende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, indem wir denselben Ansatz wie im vorherigen Beispiel verwenden.
Um zu zeigen, wie Sie Speicher innerhalb des WebAssembly-Moduls erstellen können, haben wir eine dritte Speicherinstanz namens `$mem2` im Modul erstellt und _exportiert_.

> [!NOTE]
> Wenn Sie [wabt](https://github.com/WebAssembly/wabt) (z.B. `wat2wasm`) verwenden, um das Textformat in Wasm zu konvertieren, müssen Sie möglicherweise `--enable-multi-memory` übergeben, da die Unterstützung von Mehr Speicher immer noch optional ist.

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

Die drei Speicherinstanzen erhalten automatisch einen Speicherindex basierend auf ihrer Erstellungsreihenfolge.
Der unten stehende Code zeigt, wie wir diesen Index (z.B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten (Sie können denselben Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenfolge, die den Speicherart angibt.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass das `(memory 0)` der Standard ist und daher optional.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne Angabe des Speicherindexes, und dies sollte nach `"Memory 0 data"` hinzugefügt werden, wenn die Speichereinhalte protokolliert werden.

Der WebAssembly-Protokollierungscode ist dem vorherigen Beispiel ähnlich, mit der Ausnahme, dass wir den Index des Speichers, der die Zeichenfolge enthält, zusammen mit dem Zeichenfolgenoffset und der Länge übergeben müssen.
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

Der JavaScript-Code ist ebenfalls dem vorherigen Beispiel sehr ähnlich, mit der Ausnahme, dass wir zwei Speicherinstanzen an das `importObject()` übergeben und der vom Modul exportierte Speicher nach seiner Instanziierung über die aufgelöste Promise (`obj.instance.exports`) zugegriffen wird.
Der Code, um jede Zeichenfolge zu protokollieren, ist ebenfalls etwas komplizierter, weil wir den Speicherindex aus dem WebAssembly mit einem bestimmten `Memory`-Objekt abgleichen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich dem unten stehenden Text sein, mit der Ausnahme, dass "Memory 1 data" möglicherweise einige nachfolgende "unerwünschte Zeichen" hat, weil der Textdecoder mehr Bytes als zur Kodierung der Zeichenfolge verwendet übergeben wird.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie finden den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Browser-Kompatibilitätsinformationen zu dieser Funktion.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat zu beenden, werfen wir einen Blick auf den komplexesten und oft verwirrenden Teil von WebAssembly: **Tabellen**. Tabellen sind im Wesentlichen anpassbare Arrays von Referenzen, die von WebAssembly-Code durch den Index zugegriffen werden können.

Um zu sehen, warum Tabellen benötigt werden, müssen wir beachten, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Aufrufen von Funktionen aus anderen Funktionen im selben Modul](#aufrufen_von_funktionen_aus_anderen_funktionen_im_selben_modul)), einen statischen Funktionsindex annimmt und daher nur eine Funktion aufrufen kann – aber was, wenn der Aufrufer ein Laufzeitwert ist?

- In JavaScript sehen wir dies die ganze Zeit: Funktionen sind Erster-Klasse-Werte.
- In C/C++ sehen wir dies mit Funktionszeigern.
- In C++ sehen wir dies mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufanweisung, um dies zu erreichen, also gaben wir ihr `call_indirect`, die einen dynamischen Funktionsoperand annimmt. Das Problem ist, dass die einzigen Typen, die wir für Operanden in WebAssembly angeben können (derzeit) `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("jede" Typ, weil der Typ Funktionen jeder Signatur halten könnte), aber leider konnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Linearspeicher legt die Rohinhalte gespeicherter Werte in Form von Bytes offen, daher könnte Wasm-Inhalt willkürlich rohe Funktionsadressen beobachten und zerstören, was im Web nicht erlaubt sein kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes zu übergeben, die nur i32-Werte sind. `call_indirect`'s Operand kann daher ein i32-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Also, wie platzieren wir Wasm-Funktionen in unsere Tabelle? Genau wie `data` Abschnitte verwendet werden können, um Regionen des Linearspeichers mit Bytes zu initialisieren, können `elem` Abschnitte verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)`, ist die `2` die anfängliche Größe der Tabelle (was bedeutet, dass sie zwei Verweise speichert) und `funcref` erklärt, dass der Elementtyp dieser Verweise Funktionsverweis ist.
- Die Funktion (`func`) Abschnitte sind wie jede anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, die wir in unserer Tabelle referenzieren werden (beispielshalber gibt jede einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert sind, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklariert haben und dennoch in Ihrem `elem` Abschnitt darauf verweisen.
- Der `elem` Abschnitt kann jeden Teil der Funktionen in einem Modul auflisten, in jeder Reihenfolge, dupliziert erlaubt. Dies ist eine Liste der Funktionen, auf die die Tabelle verweisen soll, in der Reihenfolge, in der sie referenziert werden sollen.
- Der Wert `(i32.const 0)` innerhalb des `elem` Abschnitts ist ein Offset — dieser muss zu Beginn des Abschnitts deklariert werden und gibt an, bei welchem Index in der Tabelle Funktionsreferenzen begonnen werden zu populieren. Hier haben wir 0 und eine Größe von 2 angegeben (siehe oben), sodass wir zwei Verweise an den Indizes 0 und 1 ausfüllen können. Wenn wir unsere Referenzen bei Offset 1 zu schreiben beginnen möchten, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standardwert zum Aufrufen.

In JavaScript würden die äquivalenten Aufrufe zur Erstellung einer solchen Tabelleninstanz etwas so aussehen:

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

Wir gehen weiter, jetzt, da wir die Tabelle definiert haben, müssen wir sie irgendwie nutzen. Lassen Sie uns diesen Abschnitt Code verwenden, um dies zu tun:

```wat
...
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32)
)
```

- Der `(type $return_i32 (func (result i32)))` Block spezifiziert einen Typ, mit einem Referenznamen. Dieser Typ wird verwendet, wenn das Typtesten der Tabellenfunktionsverweisaufrufe später durchgeführt wird. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Resultat zurückgeben.
- Als Nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese nimmt ein `i32` als Parameter, dem der Argumentname `$i` gegeben wird.
- Innerhalb der Funktion fügen wir einen Wert auf den Stapel — unabhängig von dem Wert, der als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion von der Tabelle aufzurufen — sie holt implizit den Wert von `$i` vom Stapel. Das Nettoergebnis davon ist, dass die Funktion `callByIndex` die `$i`'te Funktion von der Tabelle aufruft.

Sie könnten auch den `call_indirect` Parameter explizit während des Befehlsaufrufs deklarieren, anstatt davor, wie folgt:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherstufigen, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlich eher einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde so etwas wie `tbl[i]()` aussehen.

Zurück zum Typtesten: Da WebAssembly typtescharf ist und der `funcref` möglicherweise jede Funktionssignatur haben kann, müssen wir die vermutete Signatur des Angerufenen an der Rufstelle angeben. Daher fügen wir den `$return_i32` Typ hinzu, um anzugeben, dass eine Funktion, die ein `i32` zurückgibt, erwartet wird. Wenn der Angerufene keine übereinstimmende Signatur hat (z.B. wird stattdessen ein `f32` zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Also, was verbindet den `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist das, was `call_indirect` implizit aufruft. In Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenidentifikation auf irgendeine Weise spezifizieren, ähnlich wie

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht so aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispiel-Datei gefunden werden:

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

Wir laden es in eine Webseite mithilfe des folgenden JavaScripts:

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
> Genau wie Speicher können auch Tabellen von JavaScript aus erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie von einem anderen Wasm-Modul importiert oder exportiert werden.

### Tabellenmutationen und dynamische Verknüpfung

Da JavaScript vollständigen Zugriff auf Funktionsreferenzen hat, kann das Tabellenobjekt von JavaScript aus mit den [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) Methoden mutiert werden. Und WebAssembly-Code kann selbst Tabellen mit Anweisungen manipulieren, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um komplexe Lade- und Laufzeit-Dynamische Verknüpfungsschemata zu implementieren. Wenn ein Programm dynamisch verknüpft ist, teilen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist ähnlich wie bei einer nativen Anwendung, bei der mehrere kompilierte `.dlls` denselben Adressraum eines einzelnen Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einzelnes Importobjekt, das ein Memory-Objekt und ein Tabellenobjekt enthält, und geben dieses einzelne Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) Aufrufe weiter.

Unsere `.wat` Beispiele sehen wie folgt aus:

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

Diese funktionieren wie folgt:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und verwendet dann den Befehl `i32.load`, um den Wert zu laden, der im bereitgestellten Speicherindex gespeichert ist. Der bereitgestellte Index ist `0` – wiederum wird der vorherige Wert implizit vom Stapel entnommen. Also lädt und gibt `shared0func` den Wert zurück, der im Speicherindex `0` gespeichert ist.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` – diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, ruft dann `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Wieder wird dieser Wert implizit vom Stapel entnommen, sodass das Ergebnis ist, dass der Wert `42` im Speicherindex `0` gespeichert wird.
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, rufen dann die Funktion am Index 0 der Tabelle auf, die `shared0func` ist, die zuvor durch den `elem` Block in `shared0.wat` dort gespeichert wurde.
5. Wenn aufgerufen, lädt `shared0func` das zuvor durch den Befehl `i32.store` in `shared1.wat` gespeicherte `42` in das Gedächtnis.

> [!NOTE]
> Die obigen Ausdrücke des Stapels werden wieder implizit entnommen, aber Sie könnten diese statt implizit innerhalb der Befehlsaufrufe explizit deklarieren, beispielsweise:
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nachdem die Umwandlung in ein WebAssembly-Binärformat (Wasm) erfolgt ist, verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jede der zu kompilierenden Module kann die gleichen Speicher- und Tabellenobjekte importieren und somit denselben linearen Speicher und dieselbe Tabellen-Adressraum "teilen".

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Speichergesamtoperationen

Speichergesamtoperationen sind eine neuere Ergänzung zu der Sprache. Sieben neue eingebaute Operationen werden für die Gesamtoperationen bereitgestellt, wie Kopieren und Initialisieren, um WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` effizienter und performanter abzubilden.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Browser-Kompatibilitätsinformationen.

Die neuen Operationen sind:

- `data.drop`: Verwirft die Daten in einem Datensegment.
- `elem.drop`: Verwirft die Daten in einem Element-Segment.
- `memory.copy`: Kopiert von einer Region des Linearspeichers zu einer anderen.
- `memory.fill`: Füllt eine Region des Linearspeichers mit einem gegebenen Bytewert.
- `memory.init`: Kopiert eine Region aus einem Datensegment.
- `table.copy`: Kopiert von einer Region einer Tabelle zu einer anderen.
- `table.init`: Kopiert eine Region aus einem Element-Segment.

> [!NOTE]
> Sie können mehr Informationen im [Build-Memory-Operations und Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md) Vorschlag finden.

## Typen

### Zahlentypen

WebAssembly hat derzeit vier _Zahlentypen_:

- `i32`: 32-Bit Integer
- `i64`: 64-Bit Integer
- `f32`: 32-Bit Fließkommazahl
- `f64`: 64-Bit Fließkommazahl

### Vektortypen

- `v128`: 128-Bit Vektor von gepackten Ganzzahlen, Fließkommadaten oder einem einzelnen 128-Bit Typ.

### Referenztypen

Der [Referenztypen-Vorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Ein neuer Typ, `externref`, der _jeden_ JavaScript-Wert, z. B. Zeichenfolgen, DOM-Referenzen, Objekte usw. halten kann. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und sie manipulieren und kann sie stattdessen nur empfangen und wieder herausgeben. Dies ist trotzdem sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen zu lassen und generell den Weg für eine einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Mehrere neue Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API zu tun.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) Dokumentation enthält nützliche Informationen darüber, wie man `externref` von Rust ausnutzen kann.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Browser-Kompatibilitätsinformationen.

## Multi-Value WebAssembly

Eine weitere neuere Ergänzung zu der Sprache ist das WebAssembly-Mehrwert, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können, und Befehlfolgen können mehrere Stapelwerte konsumieren und produzieren.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Browser-Kompatibilitätsinformationen.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen Mehrwert-Anweisungen, die verfügbar sind, sind Aufrufe zu Funktionen, die sich selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Befehlsarten und andere Dinge ebnen. Für eine nützliche Zusammenfassung der bisherigen Fortschritte und wie es funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es, WebAssembly-Speicherobjekte über mehrere WebAssembly-Instanzen hinweg zu teilen, die in separaten Webarbeitern laufen, auf die gleiche Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine schnelle Kommunikation zwischen den Arbeitern und bedeutende Leistungssteigerungen in Webanwendungen.

Der Threads-Vorschlag hat zwei Teile: geteilte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Browser-Kompatibilitätsinformationen.

### Geteilte Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly-`Memory`-Objekte erstellen, die zwischen Window- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat das `WebAssembly.Memory()`-Konstruktor-Initialisierungsobjekt nun eine `shared`-Eigenschaft, die, wenn sie auf `true` gesetzt ist, einen geteilten Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft des Speichers wird jetzt einen `SharedArrayBuffer` anstelle des üblichen `ArrayBuffer` zurückgeben:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Speicher mit dem Schlüsselwort `shared` erstellen, wie folgt:

```wat
(memory 1 2 shared)
```

Im Gegensatz zu ungeteilten Speichern müssen geteilte Speicher eine „maximale“ Größe angeben, sowohl im Javascript-API-Konstruktor als auch im Wasm-Textformat.

> [!NOTE]
> Sie finden viele weitere Details im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Mehrere neue Wasm-Anweisungen wurden hinzugefügt, die verwendet werden können, um höherstufige Funktionen wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads-Support-Seite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neue Funktionalität von Emscripten ausnutzt.

## Zusammenfassung

Das beendet unsere hochlevelige Tour durch die Hauptkomponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API reflektiert werden.

## Siehe auch

- Das Hauptsächliche, das nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern auftreten können. Sehen Sie die [WebAssembly Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Sehen Sie sich auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax) an, die vom Spezifikations-Interpreter implementiert wird.
