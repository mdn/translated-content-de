---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Understanding_the_text_format
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{WebAssemblySidebar}}

Damit WebAssembly von Menschen gelesen und bearbeitet werden kann, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklertools von Browsern usw. angezeigt werden soll. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die Rohsyntax und wie es mit dem zugrunde liegenden Bytecode zusammenhängt, den es darstellt – und die Wrapper-Objekte, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der nur ein Wasm-Modul in eine Seite laden und es in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)), es ist jedoch nützlicher, wenn Sie z.B. Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren, oder Ihren eigenen WebAssembly-Compiler entwickeln möchten.

## S-Ausdrücke

In beiden Formaten, sowohl im Binär- als auch im Textformat, ist die grundlegende Einheit des Codes in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen, und so können wir ein Modul als Baum von Knoten betrachten, die die Struktur des Moduls und seinen Code beschreiben. Im Gegensatz zum Abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Zuerst sehen wir uns an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum befindet sich innerhalb eines Klammerpaars — `( ... )`. Das erste Label innerhalb der Klammer gibt an, welcher Knotentyp es ist, und nach dem Label folgt eine durch Leerzeichen getrennte Liste von Attributen oder Kindknoten. Der WebAssembly S-Ausdruck:

```wasm
(module (memory 1) (func))
```

stellt also einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten dar: einem "memory"-Knoten mit dem Attribut "1" und einem "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Wir beginnen mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber trotzdem ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärcode umwandeln (siehe [Konvertieren von WebAssembly-Textformat in Wasm](/de/docs/WebAssembly/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Ihrem Modul Funktionalität hinzufügen

In Ordnung, das ist nicht sehr interessant, also fügen wir diesem Modul etwas ausführbaren Code hinzu.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die die folgende Pseudocode-Struktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** gibt an, was die Funktion nimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Locals** sind wie Variablen in JavaScript, aber mit explizit deklarierten Typen.
- Der **Körper** ist nur eine lineare Liste von Low-Level-Anweisungen.

Das ist also ähnlich wie Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es ein S-Ausdruck ist.

## Signaturen und Parameter

Die Signatur ist eine Folge von Parameter-Typdeklarationen, gefolgt von einer Liste von Rückgabewertdeklarationen. Es ist erwähnenswert:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens 1 Rückgabetyp geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/master/proposals/multi-value/Overview.md) auf eine beliebige Anzahl.

Jeder Parameter hat einen explizit deklarierten Typ; Wasm-[Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabetyp wird als `(result i32)` geschrieben, daher würde eine binäre Funktion, die zwei 32-Bit-Integer nimmt und ein 64-Bit-Float zurückgibt, so geschrieben werden:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die Locals mit ihrem Typ aufgeführt, zum Beispiel `(local i32)`. Parameter sind im Grunde genommen nur Locals, die mit dem Wert des entsprechenden übergebenen Arguments initialisiert werden.

## Locals und Parameter abrufen und setzen

Locals/Parameter können vom Körper der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die Befehle `local.get`/`local.set` beziehen sich auf das Element, das geholt/gesetzt werden soll, über seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration genannt, gefolgt von Locals in der Reihenfolge ihrer Deklaration. Angenommen, die folgende Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` würde den i32-Parameter abrufen, `local.get 1` würde den f32-Parameter abrufen, und `local.get 2` würde den f64-Local abrufen.

Es gibt hier ein weiteres Problem — die Verwendung von numerischen Indizes zur Bezugnahme auf Elemente kann verwirrend und mühsam sein, daher ermöglicht das Textformat, Parameter, Locals und die meisten anderen Elemente zu benennen, indem ein Name mit einem Dollarzeichen (`$`) direkt vor der Typdeklaration hinzugefügt wird.

Daher könnten Sie unsere vorherige Signatur so umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und könnten dann `local.get $p1` statt `local.get 0` schreiben, usw. (Beachten Sie, dass dieser Text beim Konvertieren in Binär tatsächlich nur das Integer enthält.)

## Stack-Maschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stack-Maschinen**. Obwohl der Browser es zu etwas Effizienterem kompiliert, ist die Ausführung von Wasm in Bezug auf eine Stack-Maschine definiert, bei der die Grundidee darin besteht, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf einen Stack schiebt und/oder von einem Stack entfernt.

Zum Beispiel ist `local.get` so definiert, dass es den Wert des gelesenen Locals auf den Stack schiebt, und `i32.add` entnimmt zwei `i32`-Werte (es greift implizit auf die vorherigen zwei Werte zu, die auf den Stack geschoben wurden), berechnet deren Summe (modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stack, der allmählich gefüllt und geleert wird, während die Anweisungen des Körpers ausgeführt werden. So enthält der Stack nach der Ausführung der folgenden Funktion:

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), der von `i32.add` verarbeitet wird. Der Rückgabewert einer Funktion ist einfach der Endwert, der auf dem Stack verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stack genau passt: Wenn Sie ein `(result f32)` deklarieren, muss der Stack am Ende genau ein `f32` enthalten. Wenn es keinen Ergebnistyp gibt, muss der Stack leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Wenn wir dies mit dem, was wir bereits gelernt haben, kombinieren, können wir endlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie zusammen und gibt das Ergebnis zurück.

Es gibt noch viele weitere Dinge, die in Funktionselemente eingefügt werden können, aber wir werden vorerst einfach anfangen, und Sie werden viele weitere Beispiele sehen, während Sie fortfahren. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [webassembly.org Semantikreferenz](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird nicht viel alleine tun — jetzt müssen wir sie aufrufen. Wie machen wir das? Genau wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Locals werden Funktionen standardmäßig durch einen Index identifiziert, aber aus Gründen der Bequemlichkeit können sie benannt werden. Fangen wir mit der Namensvergabe an — zuerst fügen wir der Funktion einen Namen hinzu, der durch ein Dollarzeichen eingeleitet wird, direkt nach dem `func`-Schlüsselwort:

```wasm
(func $add …)
```

Jetzt müssen wir eine Exporterklärung hinzufügen — das sieht so aus:

```wasm
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` auswählt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

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

Wenn Sie dem Beispiel folgen möchten, speichern Sie das obige Modul in einer Datei namens `add.wat`, und konvertieren Sie es dann mit wabt in eine Binärdatei namens `add.wasm` (siehe [Konvertieren von WebAssembly-Textformat in Wasm](/de/docs/WebAssembly/Text_format_to_Wasm) für Details).

Anschließend instanzieren wir binär asynchron (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running)) und führen unsere `add`-Funktion in JavaScript aus (wir können nun `add()` in der [`exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) für weitere Details über die Instanziierungsfunktion.

## Grundlagen erkunden

Nachdem wir nun die wirklichen Grundlagen behandelt haben, wollen wir uns einige fortgeschrittenere Funktionen ansehen.

### Funktionen aus demselben Modul aus anderen Funktionen aufrufen

Die `call`-Anweisung ruft eine einzelne Funktion unter Angabe ihres Indexes oder Namens auf. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufes der ersten plus eins zurück:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach einen 32-Bit-Integer und schiebt ihn auf den Stack. Sie könnten das `i32` gegen jeden der anderen verfügbaren Typen austauschen und den Wert des const auf beliebig ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel bemerken Sie einen `(export "getAnswerPlus1")`-Abschnitt, der unmittelbar nach der `func`-Anweisung in der zweiten Funktion deklariert ist — dies ist eine Kurzform, um zu erklären, dass wir diese Funktion exportieren wollen, und den Namen zu definieren, unter dem wir sie exportieren möchten.

Das ist funktional gleichwertig mit der Aufnahme einer separaten Funktionsanweisung außerhalb der Funktion, anderswo im Modul, wie wir es zuvor gemacht haben, z.B.:

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

Wir haben bereits gesehen, wie man WebAssembly-Funktionen aus JavaScript aufruft, aber was ist mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen Namensraum auf zwei Ebenen, daher besagt die Importanweisung hier, dass wir die Funktion `log` aus dem Modul `console` importieren möchten. Sie können auch sehen, dass die exportierte Funktion `logIt` die importierte Funktion mithilfe der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind genau wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und ihnen wird ein Index zugewiesen und sie können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Signaturbegriff, daher kann jede JavaScript-Funktion übergeben werden, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften enthält.

Für das obige benötigen wir ein Objekt (nennen wir es `importObject`), so dass `importObject.console.log` eine JavaScript-Funktion ist.

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
> Sie können dieses Beispiel auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) finden ([sehen Sie es live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Deklarieren von Globals in WebAssembly

WebAssembly hat die Fähigkeit, Instanzen globaler Variablen zu erstellen, die sowohl von JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen hinweg importiert/ exportiert werden können. Dies ist sehr nützlich, da es eine dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repository; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein JavaScript-Beispiel):

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

Dies sieht ähnlich wie das aus, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben, und wir geben auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes an, wenn wir möchten, dass er veränderbar ist.

Um einen gleichwertigen Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assembly-Code arbeitet, sie auf den [Stack](#stack-maschinen) stapelt, Operationen mit ihnen ausführt, und das Ergebnis durch den Aufruf einer Methode in JavaScript protokolliert.

Um mit Zeichenfolgen und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder im WebAssembly oder in JavaScript erstellt und zwischen den Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großes zusammenhängendes, veränderliches Bytefeld, das im Laufe der Zeit wachsen kann (siehe [linearer Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stack und einem beliebigen Ort im Speicher.

Aus der Sicht von JavaScript sieht es so aus, als ob der gesamte Speicher in einem großen wachstumsfähigen {{jsxref("ArrayBuffer")}} enthalten ist.
JavaScript kann WebAssembly Linearspeicher-Instanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Schnittstelle erstellen und sie an eine Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Getter, der ein `ArrayBuffer` zurückgibt, das auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, zum Beispiel über die [`Memory.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in WebAssembly.
Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird das aktuelle `ArrayBuffer` getrennt und ein neues `ArrayBuffer` erstellt, um auf den neuen, größeren Speicher zu verweisen.

Beachten Sie, dass Sie beim Erstellen des Speichers die Anfangsgröße definieren müssen, und Sie können optional die maximale Größe angeben, bis zu der der Speicher wachsen kann.
WebAssembly versucht, die maximale Größe zu reservieren (falls angegeben), und wenn es dies kann, kann es den Puffer in Zukunft effizienter vergrößern. Selbst wenn es jetzt nicht die maximale Größe zuordnen kann, kann es möglicherweise später noch wachsen.
Die Methode schlägt nur dann fehl, wenn es nicht die _anfängliche_ Größe zuordnen kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speicher](#mehrere_speicher) verwenden, wenn der Browser dies unterstützt.
> Code, der keine mehreren Speicher verwendet, muss nicht geändert werden!

Um einige dieser Verhaltensweisen zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenfolge in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenfolge ist einfach eine Folge von Bytes irgendwo innerhalb dieses linearen Speichers.
Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenfolge an JavaScript übergeben, indem wir den Speicher, den Offset der Zeichenfolge innerhalb des Speichers und eine Methode zur Anzeige der Länge teilen.

Zuerst erstellen wir einen Speicher und teilen ihn zwischen dem WebAssembly und JavaScript.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir können das WebAssembly-Modul den Speicher erstellen und an JavaScript exportieren lassen.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Wir instanziieren dann unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)-Methode und übergeben das Importobjekt:

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

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Mithilfe des WebAssembly-Textformats wird die `import`-Anweisung wie folgt geschrieben:

```wasm
(import "js" "mem" (memory 1))
```

Der Speicher muss mit demselben zweistufigen Schlüssel importiert werden, der im `importObject` (`js.mem`) angegeben ist.
Die `1` zeigt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste Speicher ist, der in das WebAssembly-Modul importiert wird, hat er einen Speicherindex von "0".
> Sie könnten diesen speziellen Speicher mithilfe des Indexes in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da 0 der Standardindex ist, müssen Sie dies in Einzelanwendungsspeichern nicht tun.

Nachdem wir nun eine gemeinsame Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenfolge von Daten hineinzuschreiben.
Wir übergeben dann Informationen darüber, wo sich die Zeichenfolge befindet und ihre Länge an das JavaScript (wir könnten alternativ die Länge der Zeichenfolge selbst in der Zeichenfolge codieren, aber die Übergabe einer Länge ist für uns einfacher umzusetzen).

Zuerst fügen wir eine Zeichenfolge von Daten zu unserem Speicher hinzu, in diesem Fall "Hi".
Da wir den gesamten linearer Speicher besitzen, können wir den Inhalt der Zeichenfolge einfach mit einem `data`-Abschnitt in den globalen Speicher schreiben.
Datenabschnitte ermöglichen das Schreiben einer Zeichenfolge von Bytes zu einem gegebenen Offset zur Instantiierungszeit und sind ähnlich den `.data`-Abschnitten in nativen ausführbaren Formaten.
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
> Die Doppelsemikolonsyntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzuzeigen.
> In diesem Fall verwenden wir sie nur, um Platzhalter für anderen Code zu kennzeichnen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um die Zeichenfolge in die Konsole zu protokollieren.
Diese muss auf `console.log` im `importObject` abgebildet werden, das zur Instanziierung des WebAssembly-Moduls verwendet wird.
Die Funktion ist im WebAssembly mit `$log` benannt und nimmt `i32`-Parameter für den Zeichenfolgen-Offset und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenfolge im Speicher (`0` und `2`) auf.
Diese wird aus dem Modul exportiert, damit sie aus JavaScript aufgerufen werden kann.

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

Auf der JavaScript-Seite müssen wir die Protokollierungsmethode definieren, sie an das WebAssembly übergeben und dann die exportierte `writeHi()`-Methode aufrufen.
Der vollständige Code sieht wie folgt aus:

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

Beachten Sie, dass die Protokollfunktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht der Zeichenfolge im gemeinsamen Speicher mithilfe eines `Uint8Array` beim übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) aus UTF-8 in eine Zeichenfolge dekodiert (wir geben `utf8` hier an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenfolge wird dann mit `console.log()` in die Konsole protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Instanziierung des Objekts geschieht.
Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi".

> [!NOTE]
> Sie können den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) finden ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen die Verwendung mehrerer Speicherobjekte in Ihrem WebAssembly und JavaScript in einer Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzelnen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders als andere Anwendungsdaten behandelt werden sollten, wie öffentliche vs. private Daten, Daten, die gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich sein für sehr große Anwendungen, die über den Wasm-32-Bit-Adressraum skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, werden entweder direkt deklariert oder importiert und erhalten nummerierte, sequentiell zugeordnete Speicherindexnummern. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf jeden bestimmten Speicher über seinen Index zugreifen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wird.
Infolgedessen, wenn Sie nur einen Speicher hinzufügen, muss Ihr Code den Index nicht angeben.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der unten stehende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, indem wir denselben Ansatz wie im vorherigen Beispiel verwenden.
Um zu zeigen, wie Sie einen Speicher innerhalb des WebAssembly-Moduls erstellen können, haben wir eine dritte Speicherinstanz namens `$mem2` im Modul erstellt und _exportiert_.

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

Die drei Speicherinstanzen erhalten basierend auf ihrer Erstellungsreihenfolge automatisch eine Instanz.
Der Code unten zeigt, wie wir diesen Index (z.B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten (Sie können denselben Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenfolge, die jeden Speichertyp angibt.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass `(memory 0)` der Standard ist und somit optional.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne Angabe des Speicherindex und dieser sollte nach `"Memory 0 data"` hinzugefügt werden, wenn der Speicherinhalt protokolliert wird.

Der WebAssembly-Protokollierungscode ist fast genau derselbe wie im vorherigen Beispiel, mit der Ausnahme, dass wir zusammen mit dem Offset und der Länge der Zeichenfolge den Index des Speichers übergeben müssen, der die Zeichenfolge enthält.
Wir protokollieren auch alle drei Speicherinstanzen.

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

Der JavaScript-Code ist ebenfalls dem vorherigen Beispiel sehr ähnlich, außer dass wir zwei Speicherinstanzen an das `importObject()` übergeben und der vom Modulinstanz exportierte Speicher nach der Instanziierung mithilfe des erfüllten Versprechens (`obj.instance.exports`) zugegriffen wird.
Der Code zum Protokollieren jeder Zeichenfolge ist auch etwas komplizierter, da wir die Speicherinstanznummer vom WebAssembly einem bestimmten `Memory`-Objekt zuordnen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich dem unten stehenden Text sein, außer dass "Memory 1 data" einige nachgezogene "Müllzeichen" haben kann, da der Textdecoder mit mehr Bytes versorgt wird, als zur Kodierung der Zeichenfolge verwendet wurden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) finden ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Weitere Informationen zur Browser-Kompatibilität dieser Funktion finden Sie unter [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory).

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat zu beenden, schauen wir uns den komplexesten und oft verwirrendsten Teil von WebAssembly an: **Tabellen**. Tabellen sind im Wesentlichen Arrays von Referenzen mit variabler Größe, auf die vom WebAssembly-Code über Index zugegriffen werden kann.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zuerst feststellen, dass die `call`-Anweisung, die wir früher gesehen haben (siehe [Funktionen aus demselben Modul aus anderen Funktionen aufrufen](#funktionen_aus_demselben_modul_aus_anderen_funktionen_aufrufen)), einen statischen Funktionsindex benötigt und daher nur eine Funktion aufrufen kann – aber was, wenn der aufzurufende Wert ein Laufzeitwert ist?

- In JavaScript sehen wir dies die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir dies bei Funktionszeigern.
- In C++ sehen wir dies bei virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufanweisung, um dies zu erreichen, daher haben wir `call_indirect` eingeführt, das einen dynamischen Funktionsoperanden benötigt. Das Problem ist, dass die einzigen Typen, die wir für Operanden in WebAssembly haben, jetzt (derzeit) `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen beliebiger Signaturen halten könnte), aber leider könnte dieser `anyfunc`-Typ nicht im linearen Speicher gespeichert werden aus Sicherheitsgründen. Linearer Speicher legt den rohen Inhalt gespeicherter Werte als Bytes frei, und dies würde es Wasm-Inhalten ermöglichen, rohe Funktionsadressen willkürlich zu beobachten und zu beschädigen, was im Web nicht erlaubt werden kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes herumzureichen, die nur i32-Werte sind. `call_indirect`'s Operand kann somit ein i32-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Wie platzieren wir also Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Abschnitte verwendet werden können, um Regionen des linearen Speichers mit Bytes zu initialisieren, können `elem`-Abschnitte verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)` ist die 2 die Anfangsgröße der Tabelle (damit es zwei Referenzen speichert), und `funcref` erklärt, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die Funktionsabschnitte (`func`) sind wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, auf die in Ihrer Tabelle referenziert werden soll (zum Zweck des Beispiels gibt jeder einfach einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert werden, hier keine Rolle spielt – Sie können Ihre Funktionen überall deklarieren und trotzdem auf sie in Ihrem `elem`-Abschnitt referenzieren.
- Der `elem`-Abschnitt kann jede Untermenge der Funktionen in einem Modul in beliebiger Reihenfolge auflisten, wobei Duplikate zulässig sind. Dies ist eine Liste der Funktionen, auf die von der Tabelle referenziert werden soll, in der Reihenfolge, in der auf sie referenziert werden soll.
- Der `(i32.const 0)` Wert innerhalb des `elem`-Abschnitts ist ein Offset – dieser muss zu Beginn des Abschnitts deklariert werden und gibt an, bei welchem Index in der Tabelle mit dem Füllen der Funktionsreferenzen begonnen werden soll. Hier haben wir 0 angegeben, und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen bei den Indizes 0 und 1 ausfüllen können. Wenn wir bei Offset 1 beginnen wollten, unsere Referenzen zu schreiben, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standard-Wert, der beim Aufruf eine Ausnahme auslöst.

In JavaScript würden die entsprechenden Aufrufe zur Erstellung einer solchen Tabelleneinheit im etwa so aussehen:

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

Gehen wir weiter, jetzt, da wir die Tabelle definiert haben, müssen wir sie irgendwie verwenden. Nutzen wir diesen Abschnitt von Code dafür:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der Block `(type $return_i32 (func (result i32)))` spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird beim Überprüfen der Tabellensignaturverweise in den Aufrufen verwendet. Hier sagen wir, dass die Verweise Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese nimmt ein `i32` als Parameter, dem der Argumentname `$i` gegeben wird.
- Innerhalb der Funktion fügen wir einen Wert zum Stack hinzu – welchen Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich nutzen wir `call_indirect`, um eine Funktion von der Tabelle aufzurufen – es entfernt implizit den Wert von `$i` vom Stack. Das Endergebnis hiervon ist, dass die `callByIndex`-Funktion die `$i`-te Funktion in der Tabelle aufruft.

Sie könnten auch den `call_indirect`-Parameter explizit während des Befehlaufrufs anstelle davor angeben, wie folgt:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In einer höheren, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlich wahrscheinlicher, einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde in etwa `tbl[i]()` lauten.

Kommen wir also zurück zur Typenprüfung. Da WebAssembly typgeprüft ist und die `funcref` theoretisch jede Funktionssignatur haben kann, müssen wir die angenommene Signatur des Angerufenen am Aufrufstandort angeben, daher schließen wir den `$return_i32`-Typ ein, um dem Programm mitzuteilen, dass eine Funktion erwartet wird, die ein `i32` zurückliefern. Wenn der Aufgerufene keine entsprechende Signatur hat (z.B. wird ein `f32` anstelle zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) ausgelöst.

Was also verknüpft den `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass zurzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und `call_indirect` ruft diese implizit auf. In der Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Art Tabellen-Kennung angeben, so ähnlich wie

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht zusammengefasst so aus, und kann in unserem [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispieldatei gefunden werden:

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

Wir laden es auf eine Webseite mit folgendem JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) finden ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Memory, können Tabellen auch von JavaScript erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)) sowie in ein anderes Wasm-Modul importiert oder exportiert werden.

### Tabellen mutieren und dynamische Verknüpfung

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Tabellenobjekt aus JavaScript heraus mithilfe der Methoden [`grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set) geändert werden. Und WebAssembly-Code kann selbst in Tabellen mit Anweisungen manipulieren, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um ausgeklügelte Schemata zur Ladezeit- und Laufzeit-Dynamikladung zu implementieren [dynamische Verbindungsplanung](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md). Wenn ein Programm dynamisch verknüpft ist, teilen mehrere Instanzen denselben Speicher und dieselben Tabellen. Dies ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einzelnes Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses gleiche Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) Aufrufen.

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

Diese funktionieren wie folgt:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und verwendet dann den Befehl `i32.load`, um den Wert in dem bereitgestellten Speicherindex zu laden. Der angegebene Index ist `0` – wieder wird er implizit vom Stack entfernt. So lädt und gibt `shared0func` den gespeicherten Wert im Speicherindex `0` zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` – diese Funktion erstellt zwei Konstanten, die die Werte `0` und `42` enthalten, und ruft dann `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Wieder entfernt sie diese Werte implizit vom Stack, also ist das Ergebnis, dass sie den Wert `42` im Speicherindex `0` speichert,
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, und dann wird die Funktion an diesem Index 0 der Tabelle aufgerufen, die `shared0func` ist, die früher im `elem`-Block von `shared0.wat` dort gespeichert wurde.
5. Beim Aufruf lädt `shared0func` die `42`, die wir im Speicher mit dem Befehl `i32.store` in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke entfernen wieder implizit Werte vom Stack, aber Sie könnten dies auch explizit innerhalb der Befehlsaufrufe deklarieren, zum Beispiel:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nachdem wir den Code in Assembly umgewandelt haben, verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript mit folgendem Code:

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

Jedes der Module, das kompiliert wird, kann denselben Speicher- und Tabellenobjekten importieren und somit denselben linearen Speicher- und Tabellenspeicher "Adressraum" teilen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) finden ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk-Speicheroperationen

Bulk-Speicheroperationen sind eine neuere Ergänzung zur Sprache – sieben neue integrierte Operationen sind für die Bulk-Speicheroperationen wie Kopieren und Initialisierung vorgesehen, um WebAssembly in die Lage zu versetzen, native Funktionen wie `memcpy` und `memmove` auf eine effizientere und leistungsfähigere Weise zu modellieren.

> [!NOTE]
> Weitere Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations).

Die neuen Operationen sind:

- `data.drop`: Verwirft die Daten in einem Datenabschnitt.
- `elem.drop`: Verwirft die Daten in einem Elementabschnitt.
- `memory.copy`: Kopiert von einer Region des linearen Speichers in eine andere.
- `memory.fill`: Füllt eine Region des linearen Speichers mit einem bestimmten Bytewert.
- `memory.init`: Kopiert eine Region aus einem Datenabschnitt.
- `table.copy`: Kopiert von einer Region einer Tabelle in eine andere.
- `table.init`: Kopiert eine Region aus einem Elementabschnitt.

> [!NOTE]
> Weitere Informationen finden Sie im [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md)-Vorschlag.

## Typen

### Zahlentypen

WebAssembly verfügt derzeit über vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

### Vektortypen

- `v128`: 128 Bit Vektor aus gepackten Integer-, Fließkommadaten oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Referenztyp-Vorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Ein neuer Typ, `externref`, der _jede_ JavaScript-Wertart enthalten kann, z.B. Zeichenfolgen, DOM-Referenzen, Objekte usw. `externref` ist aus Sicht von WebAssembly undurchsichtig – ein Wasm-Modul kann diese Werte nicht zugreifen und manipulieren und kann sie statt nur empfangen und wieder ausgeben. Aber das ist sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen zu lassen und im Allgemeinen zu einem einfacherem Umgang mit dem Host-Umfeld zu führen. `externref` kann für Wertetypen und Tabellenelemente verwendet werden.
- Eine Anzahl neuer Anweisungen, die Wasm-Module direkt manipulieren lässt [WebAssembly-Tabellen](#webassembly-tabellen), anstelle dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält einige nützliche Informationen darüber, wie man von `externref` aus Rust profitieren kann.

> [!NOTE]
> Weitere Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types).

## Multi-Value WebAssembly

Eine weitere neuere Ergänzung zur Sprache ist WebAssembly Multi-Value, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben, und Anweisungssequenzen mehrere Stapelwerte verbrauchen und produzieren können.

> [!NOTE]
> Weitere Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value).

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen verfügbaren Multi-Value-Anweisungen sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen ebnen und vieles mehr. Für einen nützlichen Überblick über den bisherigen Fortschritt und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es, dass WebAssembly-Speicherobjekte über mehrere WebAssembly-Instanzen hinweg in separaten Web Workern gemeinsam genutzt werden, in der gleichen Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungssteigerungen in Webanwendungen.

Der Threads-Vorschlag hat zwei Teile, gemeinsam genutzte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Weitere Informationen zur Browser-Kompatibilität finden Sie unter [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics).

### Gemeinsame Speicher

Wie oben beschrieben, können Sie gemeinsame WebAssembly [`Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Fenster- und Worker-Kontexten über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, ähnlich wie bei einem [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-AP-Seite verfügt der Konstruktor [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory) jetzt über ein `shared`-Eigenschaft, das beim Aufsicht auf `true` ein gemeinsames Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft des Speichers gibt jetzt ein `SharedArrayBuffer` zurück, anstatt des normalen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen gemeinsamen Speicher mit dem Schlüsselwort `shared` erstellen, wie folgt:

```wasm
(memory 1 2 shared)
```

Im Gegensatz zu ungeteilten Speichern müssen gemeinsame Speicher sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat eine "Maximalgröße" angeben.

> [!NOTE]
> Weitere Details finden Sie im [Threading proposal for WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurde hinzugefügt, die verwendet werden können, um Funktionen höherer Ebene wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [die hier gelistet finden](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads support page](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neue Funktionalität aus Emscripten nutzt.

## Zusammenfassung

Damit beenden wir unsere umfassende Tour durch die wichtigsten Komponenten des WebAssembly-Textformats und wie sie in der WebAssembly JS-API widergespiegelt werden.

## Siehe auch

- Das Hauptsächliche, das nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern auftreten können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Beschreibung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax), die von der Spezifikationsinterpreter implementiert wird.
