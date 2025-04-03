---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Um sicherzustellen, dass WebAssembly von Menschen gelesen und bearbeitet werden kann, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklertools von Browsern usw. angezeigt wird. Dieser Artikel erklärt, wie dieses Textformat funktioniert, hinsichtlich der rohen Syntax und wie es mit dem zugrunde liegenden Bytecode, den es darstellt, sowie den Wrapper-Objekten, die Wasm in JavaScript repräsentieren, zusammenhängt.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der lediglich ein Wasm-Modul in eine Seite laden und es in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Ausdrücke

In beiden Formaten, dem Binär- und dem Textformat, ist das fundamentale Code-Element in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen. Daher können wir ein Modul als einen Baum von Knoten betrachten, der die Struktur des Moduls und seinen Code beschreibt. Im Gegensatz zum abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Lassen Sie uns zunächst sehen, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum befindet sich innerhalb eines Klammernpaares — `( ... )`. Das erste Label innerhalb der Klammer gibt an, um welche Art von Knoten es sich handelt, gefolgt von einer durch Leerzeichen getrennten Liste von Attributen oder untergeordneten Knoten. Der WebAssembly S-Ausdruck:

```wasm
(module (memory 1) (func))
```

stellt also einen Baum mit dem Wurzelknoten "module" und zwei untergeordneten Knoten dar, einem "memory"-Knoten mit dem Attribut "1" und einem "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber immer noch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binär konvertieren (siehe [Konvertierung von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), werden wir nur den 8-Byte-Modul-Header sehen, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben wird:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Funktionalität zu Ihrem Modul hinzufügen

Okay, das ist nicht sehr interessant, lassen Sie uns diesem Modul etwas ausführbaren Code hinzufügen.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die die folgende Pseudocode-Struktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** deklariert, was die Funktion annimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Locals** sind wie Vars in JavaScript, werden jedoch mit explizit deklarierten Typen versehen.
- Der **Body** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Dies ist ähnlich wie Funktionen in anderen Sprachen, auch wenn es aufgrund des S-Ausdrucks anders aussieht.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parametertypdeklarationen, gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist erwähnenswert:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens einen Rückgabetyp geben, aber [später wird dies entspannt](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md), um eine beliebige Anzahl von Rückgabetypen zuzulassen.

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Number types](#zahlentypen), [Reference types](#referenztypen), [Vector types](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabetyp als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Integer annimmt und einen 64-Bit-Float zurückgibt, so geschrieben:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die Locals mit ihrem Typ aufgelistet, z.B. `(local i32)`. Parameter sind im Wesentlichen nur Locals, die mit dem Wert des entsprechenden vom Aufrufer übergebenen Arguments initialisiert werden.

## Abrufen und Setzen von Locals und Parametern

Locals/Parameter können vom Body der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die Befehle `local.get`/`local.set` beziehen sich auf das Element, das abgerufen/gesetzt werden soll, über seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration referenziert, gefolgt von den Locals in der Reihenfolge ihrer Deklaration. Angenommen, die folgende Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` würde den i32-Parameter erhalten, `local.get 1` würde den f32-Parameter erhalten und `local.get 2` würde den f64-Local erhalten.

Ein weiteres Problem besteht darin, dass es verwirrend und ärgerlich sein kann, numerische Indizes zu verwenden, um sich auf Elemente zu beziehen, daher ermöglicht das Textformat, Parameter, Locals und die meisten anderen Elemente durch Hinzufügen eines Namens mit einem Dollarzeichen (`$`) direkt vor der Typdeklaration zu benennen.

Daher könnten Sie unsere vorherige Signatur folgendermaßen umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann `local.get $p1` anstelle von `local.get 0` schreiben usw. (Beachten Sie, dass beim Konvertieren dieses Textes in Binär die Binärdatei jedoch nur die Ganzzahlen enthält).

## Stack-Maschinen

Bevor wir den Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stack-Maschinen**. Auch wenn der Browser sie zu etwas Effizienterem kompiliert, ist die Ausführung von Wasm in Bezug auf eine Stack-Maschine definiert, bei der die Grundidee darin besteht, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf einen Stack drückt und/oder davon abruft.

Zum Beispiel ist `local.get` so definiert, dass der Wert des gelesenen Locals auf den Stack gedrückt wird, und `i32.add` hebt zwei `i32`-Werte vom Stack ab (es greift implizit auf die vorherigen zwei Werte zu, die auf den Stack gedrückt wurden), berechnet ihre Summe (modulo 2^32) und drückt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stack, der allmählich gefüllt und geleert wird, während die Anweisungen des Bodys ausgeführt werden. Wenn also die folgende Funktion ausgeführt wird:

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

enthält der Stack genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` bearbeitet wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stack verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stack genau passt: Wenn Sie ein `(result f32)` deklarieren, muss der Stack am Ende genau einen `f32` enthalten. Wenn es keinen Ergebnistyp gibt, muss der Stack leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, denen gefolgt wird, wenn die Funktion aufgerufen wird. Zusammen mit dem, was wir bereits gelernt haben, können wir endlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt noch viel mehr, was in Funktionskörper eingebaut werden kann, aber wir beginnen vorerst einfach und Sie werden im Laufe der Beispiele viel mehr sehen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie das [webassembly.org-Semantikreference](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird alleine nicht viel tun — wir müssen sie jetzt aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Locals werden Funktionen standardmäßig durch einen Index identifiziert, können der Bequemlichkeit halber jedoch benannt werden. Lassen Sie uns damit beginnen — zunächst fügen wir einen Namen hinzu, der mit einem Dollarzeichen beginnt, direkt nach dem `func`-Schlüsselwort:

```wasm
(func $add …)
```

Jetzt müssen wir eine Exportdeklaration hinzufügen — das sieht so aus:

```wasm
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` angibt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser endgültiges Modul sieht also derzeit so aus:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie dem Beispiel folgen möchten, speichern Sie unser Modul oben in einer Datei namens `add.wat`, und konvertieren Sie es dann mit wabt in eine Binärdatei namens `add.wasm` (siehe [Konvertierung von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Einzelheiten).

Als nächstes werden wir unser Binärformat asynchron instanziieren (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und unsere `add`-Funktion in JavaScript ausführen (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Sehen Sie auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details zur Instanziierfunktion.

## Grundlagen erkunden

Jetzt haben wir die wirklichen Grundlagen behandelt, schauen wir uns einige fortgeschrittenere Funktionen an.

### Funktionen aus anderen Funktionen im selben Modul aufrufen

Die `call`-Anweisung ruft eine einzelne Funktion auf, wenn ihr Index oder Name angegeben wird. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufs der ersten Funktion plus eins zurück:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach einen 32-Bit-Integer und drückt ihn auf den Stack. Sie könnten das `i32` durch jeden der anderen verfügbaren Typen austauschen und den Wert der Konstante nach Belieben ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie eine `(export "getAnswerPlus1")`-Sektion bemerken, die direkt nach der `func`-Anweisung in der zweiten Funktion deklariert ist — dies ist eine verkürzte Methode, um zu deklarieren, dass wir diese Funktion exportieren möchten und den Namen definieren, unter dem wir sie exportieren möchten.

Dies ist funktional gleichwertig damit, eine separate Funktionserklärung außerhalb der Funktion an anderer Stelle im Modul in der gleichen Weise einzuschließen, z.B.:

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

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber wie sieht es mit dem Aufruf von JavaScript-Funktionen aus WebAssembly heraus aus? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, es bietet jedoch einen allgemeinen Weg, um Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Sehen wir uns ein Beispiel an:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zweistufigen Namensraum, sodass in der import-Anweisung hier gesagt wird, dass wir die Funktion `log` aus dem Modul `console` importieren. Sie können auch sehen, dass die exportierte Funktion `logIt` die importierte Funktion mit Hilfe der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben kein Signaturkonzept, sodass jede JavaScript-Funktion unabhängig von der deklarierten Signatur des Imports übergeben werden kann. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Import-Objekt mit den entsprechenden Eigenschaften übergeben.

Für das obige Beispiel benötigen wir ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

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
> Sie können dieses Beispiel auf GitHub finden als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Deklarieren von globalen Variablen in WebAssembly

WebAssembly bietet die Möglichkeit, globale Variableninstanzen zu erstellen, die sowohl von JavaScript zugänglich sind als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es etwa so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben und das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes, wenn wir ihn veränderbar haben wollen.

Um einen äquivalenten Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assemblercode arbeitet, sie auf den [Stack](#stack-maschinen) stapelt, Operationen an ihnen durchführt und dann das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Um mit Zeichenfolgen und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder in der WebAssembly oder in JavaScript erstellt und zwischen Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großer zusammenhängender, veränderbarer Array von Rohbytes, der im Laufe der Zeit wachsen kann (siehe [linear memory](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Memory-Befehle](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stack und einem beliebigen Standort in einem Speicher.

Aus Sicht von JavaScript ist es, als befände sich der gesamte Speicher in einem großen wachstumsfähigen {{jsxref("ArrayBuffer")}}.
JavaScript kann WebAssembly-lineare Speicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und diese an eine Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, beispielsweise über die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in der WebAssembly. Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, der auf den neueren, größeren Speicher zeigt.

Beachten Sie, dass Sie beim Erstellen des Speichers die anfängliche Größe definieren müssen und optional die maximale Größe angeben können, bis zu der der Speicher wachsen kann. WebAssembly versucht, die maximale Größe (falls angegeben) zu reservieren, und wenn es dazu in der Lage ist, kann es den Puffer in Zukunft effizienter vergrößern. Selbst wenn es die maximale Größe jetzt nicht allokieren kann, kann es möglicherweise später noch wachsen. Die Methode schlägt nur fehl, wenn sie die _anfängliche_ Größe nicht allokieren kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz. Sie können jetzt [mehrere Speicher](#mehrere_speicher) haben, wenn dies vom Browser unterstützt wird. Code, der keine Mehrfachspeicher verwendet, muss nicht geändert werden!

Um einige dieser Verhaltensweisen zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenfolge in unserem WebAssembly-Code arbeiten möchten. Eine Zeichenfolge ist einfach eine Sequenz von Bytes irgendwo in diesem linearen Speicher. Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir JavaScript diese Zeichenfolge zur Verfügung stellen, indem wir den Speicher, den Offset der Zeichenfolge im Speicher und eine Methode zur Angabe der Länge teilen.

Erstens erstellen wir etwas Speicher und teilen ihn zwischen der WebAssembly und JavaScript. WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir lassen das WebAssembly-Modul den Speicher erstellen und nach JavaScript exportieren.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly. Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` mit dem Schlüssel `js.mem` hinzu. Dann instanziieren wir unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und übergeben das Importobjekt:

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

Der Speicher muss mit demselben zweistufigen Schlüssel importiert werden, der im `importObject` definiert wurde (`js.mem`). Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64 KB).

> [!NOTE]
> Da dies der erste Speicherelement importiert in das WebAssembly-Modul ist, hat er einen Speicherindex von "0". Sie könnten diesen bestimmten Speicher mit dem Index in [Memory-Anweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da 0 der Standardindex ist, müssen Sie dies in Single-Memory-Anwendungen nicht tun.

Nachdem wir eine geteilte Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenfolge von Daten hineinzuschreiben. Dann übergeben wir Informationen darüber, wo sich die Zeichenfolge befindet und ihre Länge an das JavaScript (wir könnten alternativ die Länge der Zeichenfolge in die Zeichenfolge selbst kodieren, aber das Übergeben einer Länge ist für uns einfacher zu implementieren).

Zuerst fügen wir eine Zeichenfolge von Daten in unseren Speicher ein, in diesem Fall "Hi". Da wir den gesamten linearen Speicher besitzen, können wir einfach den Inhalt der Zeichenfolge in den globalen Speicher mit einem `data`-Abschnitt schreiben. Datenabschnitte ermöglichen das Schreiben einer Bytefolge an einem gegebenen Offset zur Instanzierungszeit und sind ähnlich den`.data`-Abschnitten in nativen ausführbaren Formaten. Hier schreiben wir die Daten in den Standardspeicher (den wir nicht spezifizieren müssen) an Offset 0:

```wasm
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Doppelsemikolonsyntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzugeben. In diesem Fall verwenden wir sie nur, um Platzhalter für anderen Code zu kennzeichnen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen. Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um die Zeichenfolge in die Konsole zu protokollieren. Diese muss `console.log` im `importObject` zugeordnet werden, das verwendet wird, um das WebAssembly-Modul zu instanziieren. Die Funktion heißt `$log` in der WebAssembly und benötigt `i32`-Parameter für den Zeichenfolgenoffset und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenfolge im Speicher (`0` und `2`) auf. Diese wird aus dem Modul exportiert, damit sie von JavaScript aufgerufen werden kann.

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

Auf der JavaScript-Seite müssen wir die Protokollierungsfunktion definieren, sie an die WebAssembly übergeben und dann die exportierte `writeHi()`-Methode aufrufen. Der vollständige Code wird unten gezeigt:

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben und vom WebAssembly-Modul importiert wird. Die Funktion erstellt eine Ansicht der Zeichenfolge im geteilten Speicher unter Verwendung eines `Uint8Array` am übergebenen Offset und mit der gegebenen Länge. Die Bytes werden dann mit Hilfe der [TextDecoder API](/de/docs/Web/API/TextDecoder) von UTF-8 in eine Zeichenfolge decodiert (wir geben hier `utf8` an, aber viele andere Codierungen werden unterstützt). Die Zeichenfolge wird dann mit `console.log()` in die Konsole protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Objektinstanziierung erfolgt. Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi".

> [!NOTE]
> Sie können den vollständigen Quellcode auf GitHub finden als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen es, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzelnen Speicher unterstützen. Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders als andere Anwendungsdaten behandelt werden sollten, wie z.B. öffentliche vs. private Daten, Daten, die beibehalten werden müssen, und Daten, die zwischen Threads geteilt werden müssen. Es kann auch nützlich für sehr große Anwendungen sein, die über den Wasm-32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine nullbasierte sequenziell vergebene Speicherindexnummer. Alle [Memory-Anweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index verweisen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Memory-Anweisungen haben einen Standardindex von 0, den Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wurde. Daher muss Ihr Code, wenn Sie nur einen Speicher hinzufügen, den Index nicht spezifizieren.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen in drei verschiedene Speichermedien zu schreiben und die Ergebnisse zu protokollieren. Der folgende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren und die gleiche Methode wie im vorherigen Beispiel verwenden. Um zu zeigen, wie man innerhalb des WebAssembly-Moduls Speicher erstellt, haben wir eine dritte Speicherinstanz namens `$mem2` im Modul erstellt und _exportiert_.

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

Die drei Speicherinstanzen erhalten automatisch eine Instanz basierend auf ihrer Erstellungsreihenfolge. Der folgende Code zeigt, wie wir diesen Index (z. B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten (Sie können den gleichen Ansatz für alle anderen Memory-Anweisungen verwenden, wie `load` und `grow`). Hier schreiben wir eine Zeichenfolge, die jeden Speichertyp identifiziert.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass die `(memory 0)` der Standard ist und daher optional. Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne Angabe des Speicherindex, und dies sollte nach `Memory 0 data` hinzugefügt werden, wenn der Speicherinhalt protokolliert wird.

Der WebAssembly-Protokollierungscode ist fast genau derselbe wie im vorherigen Beispiel, mit der Ausnahme, dass wir zusammen mit dem Zeichenfolgenoffset und der Länge den Index des Speichers übergeben müssen, der die Zeichenfolge enthält. Wir protokollieren auch alle drei Speichermedien.

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

Der JavaScript-Code ist auch dem vorherigen Beispiel sehr ähnlich, mit der Ausnahme, dass wir zwei Speicherinstanzen zum `importObject()` erstellen und übergeben und der vom Modul instanziierte exportierte Speicher nach seiner Instanziierung mithilfe des aufgelösten Versprechens (`obj.instance.exports`) geöffnet wird. Der Code zum Protokollieren jeder Zeichenfolge ist auch etwas komplizierter, da wir die Speicherinstanznummer aus dem WebAssembly einem bestimmten `Memory`-Objekt zuordnen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich dem untenstehenden Text sein, mit der Ausnahme, dass `Memory 1 data` möglicherweise einige abschließende "Müllzeichen" enthält, da der Textdecoder mehr Bytes als zur Kodierung der Zeichenfolge verwendet wurden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Quellcode auf GitHub finden als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)).

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Homepage](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität dieser Funktion.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat abzuschließen, werfen wir einen Blick auf den komplexesten und oft verwirrenden Teil von WebAssembly: **Tabellen**. Tabellen sind im Grunde dynamisch veränderbare Felder von Referenzen, die aus dem WebAssembly-Code über Indexe angesprochen werden können.

Um zu verstehen, warum Tabellen benötigt werden, müssen wir zunächst feststellen, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Aufruf von Funktionen aus anderen Funktionen im selben Modul](#funktionen_aus_anderen_funktionen_im_selben_modul_aufrufen)), einen statischen Funktionsindex benötigt und somit immer nur eine Funktion aufrufen kann — aber was, wenn der Aufzurufende einen Laufzeitwert darstellt?

- In JavaScript sehen wir dies ständig: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir dies mit Funktionszeigern.
- In C++ sehen wir dies mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Call-Instruktion, um dies zu erreichen, also gaben wir ihm `call_indirect`, das einen Funktionsoperanden zur Laufzeit annimmt. Das Problem ist, dass die einzigen Typen, die wir aktuell haben, um Operanden in WebAssembly zu übergeben, `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen von beliebigen Signaturen halten könnte), aber leider könnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher abgelegt werden. Linearer Speicher legt den rohen Inhalt von gespeicherten Werten als Bytes offen, und dies würde es Wasm-Inhalten ermöglichen, rohe Funktionsadressen willkürlich zu beobachten und zu beschädigen, was im Web nicht erlaubt werden kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabelleneindizes zu übergeben, die einfach `i32`-Werte sind. `call_indirect``s Operand kann daher ein `i32`-Indexwert sein.

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

- In `(table 2 funcref)`, die `2` ist die anfängliche Größe der Tabelle (was bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` erklärt, dass der Elementtyp dieser Referenzen Funktion seien.
- Die Funktionen (`func`) Abschnitte sind wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, auf die wir in unserer Tabelle referenzieren werden (zum Beispiel gibt jede von ihnen einfach einen Konstantwert zurück). Beachten Sie, dass die Reihenfolge der Deklarationen hier keine Rolle spielt – Sie können Ihre Funktionen überall deklarieren und trotzdem auf sie in Ihrem `elem`-Abschnitt verweisen.
- Der `elem`-Abschnitt kann einen beliebigen Teil der Funktionen in einem Modul in beliebiger Reihenfolge auflisten, was Duplikate erlaubt. Dies ist eine Liste der Funktionen, die von der Tabelle verwiesen werden sollen, in der Reihenfolge, in der sie verwiesen werden sollen.
- Der `(i32.const 0)`-Wert im `elem`-Abschnitt ist ein Offset — dies muss zu Beginn des Abschnitts deklariert werden und gibt den Index in der Tabelle an, bei dem die Funktionsreferenzen zugeordnet werden sollen. Hier haben wir `0` angegeben und eine Größe von `2` (siehe oben), sodass wir zwei Referenzen an den Indizes `0` und `1` füllen können. Wenn wir beginnen wollten, unsere Referenzen an Offset `1` zu schreiben, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste `3` betragen.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standardwert, der bei Aufrufen eine Ausnahme auslöst.

In JavaScript würde der äquivalente Aufruf zur Erstellung einer solchen Tabelleninstanz in etwa so aussehen:

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

Nun, da wir die Tabelle definiert haben, müssen wir sie irgendwie verwenden. Verwenden Sie diesen Abschnitt Code, um dies zu tun:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))`-Block spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird verwendet, wenn die Typüberprüfung der Tabellen-Funktionsreferenzaufrufe später durchgeführt wird. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die unter dem Namen `callByIndex` exportiert wird. Diese wird ein `i32` als Parameter annehmen, der den Argumentnamen `$i` erhält.
- Innerhalb der Funktion fügen wir einen Wert zum Stack hinzu — welchen Wert auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — dabei wird implizit der Wert von `$i` vom Stack abgehoben. Das Gesamtergebnis dieses Vorgangs besteht darin, dass die Funktion `callByIndex` die `i`-te Funktion in der Tabelle aufruft.

Sie könnten auch den `call_indirect`-Parameter explizit während des Aufrufs der Anweisung statt zuvor angeben, so:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In einer höheren, ausdrucksvolleren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlicher, einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde in etwa `tbl[i]()` lauten.

Zurück zur Typüberprüfung. Da WebAssembly typgeprüft ist und die `funcref` potenziell jede Funktionssignatur haben kann, müssen wir die vermutete Signatur des Aufzurufenden beim Aufruf angeben, daher schließen wir den `$return_i32`-Typ ein, um dem Programm mitzuteilen, dass eine Funktion erwartet wird, die `i32` zurückgibt. Wenn die aufgerufene Funktion keine übereinstimmende Signatur hat (sagen wir, es wird stattdessen ein `f32` zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Was verbindet also den `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort lautet, dass aktuell nur eine Tabelle pro Modulinstanz erlaubt ist und die `call_indirect` implizit aufruft. In Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir entlang der Linien auch eine Tabellenkennung angeben

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht insgesamt so aus, und Sie finden es in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat)-Beispieldatei:

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
> Sie können dieses Beispiel auf GitHub finden als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Memory können Tabellen auch aus JavaScript erstellt (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie zu/von einem anderen Wasm-Modul importiert werden.

### Mutieren von Tabellen und dynamische Verknüpfung

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt aus JavaScript mit den Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) verändert werden. Und WebAssembly-Code selbst kann Tabellen manipulieren, indem es Anweisungen verwendet, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um raffinierte Ladezeit- und Laufzeit-[dynamische Verknüpfungsschemata](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verlinkt ist, teilen sich mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies entspricht einer nativen Anwendung, bei der mehrere kompilierte `.dll`s den Adressraum eines einzelnen Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einzelnes Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses gleiche Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Aufrufe.

Unsere `.wat`-Beispiele sehen wie folgt aus:

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
2. Diese Funktion erstellt eine Konstante mit dem Wert `0` und verwendet dann den `i32.load`-Befehl, um den in dem bereitgestellten Speicherindex enthaltenen Wert zu laden. Der bereitgestellte Index ist `0` — wieder wird implizit der vorherige Wert vom Stack abgehoben. Daher lädt `shared0func` den in Speicherindex `0` gespeicherten Wert und gibt ihn zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, und ruft dann `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Wieder wird implizit diese Werte vom Stack abgehoben, sodass das Ergebnis darin besteht, dass der Wert `42` in Speicherindex `0` gespeichert wird,
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit Wert `0` und rufen dann die Funktion am Index `0` der Tabelle auf, was `shared0func` ist, das durch den `elem`-Block in `shared0.wat` dort früher gespeichert wurde.
5. Wenn sie aufgerufen wird, lädt `shared0func` das `42`, das wir im Speicher durch den `i32.store`-Befehl in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke heben Werte erneut implizit vom Stack ab, aber Sie könnten diese innerhalb der Befehl-Aufrufe stattdessen deklarieren, zum Beispiel:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach der Assemblierung verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jede der Module, die kompiliert werden, kann denselben Speicher- und Tabellenobjekte importieren und dadurch denselben auch linearen Speicher und Tabellen-"Adressraum" teilen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk-Memory-Operationen

Bulk-Memory-Operationen sind eine neuere Ergänzung zur Sprache — sieben neue integrierte Operationen werden für Bulk-Memory-Operationen wie Kopieren und Initialisieren bereitgestellt, um WebAssembly effizientere und leistungsfähigere native Funktionen wie `memcpy` und `memmove` zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Homepage](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Verwerfen der Daten in einem Datensegment.
- `elem.drop`: Verwerfen der Daten in einem Elementsegment.
- `memory.copy`: Kopieren von einem Bereich des linearen Speichers in einen anderen.
- `memory.fill`: Füllen eines Bereichs des linearen Speichers mit einem gegebenen Byte-Wert.
- `memory.init`: Kopieren eines Bereichs aus einem Datensegment.
- `table.copy`: Kopieren von einem Bereich einer Tabelle in eine andere.
- `table.init`: Kopieren eines Bereichs aus einem Elementsegment.

> [!NOTE]
> Weitere Informationen finden Sie im [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md)-Vorschlag.

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

### Vektortypen

- `v128`: 128-Bit-Vektor gepackter Ganzzahlen, Fließkommadaten oder ein einzelner 128-Bit-Typ.

### Referenztypen

Der [Referenztypen-Vorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptfunktionen:

- Ein neuer Typ, `externref`, der _jeden_ JavaScript-Wert beinhalten kann, zum Beispiel Strings, DOM-Referenzen, Objekte usw. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und sie manipulieren, sondern kann sie nur empfangen und wieder ausgeben. Aber dies ist sehr nützlich, um es Wasm-Modulen zu ermöglichen, JavaScript-Funktionen, DOM-APIs usw. aufzurufen und generell den Weg für eine einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Anzahl neuer Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) Dokumentation enthält einige nützliche Informationen darüber, wie man `externref` aus Rust verwendet.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Homepage](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multi-value WebAssembly

Eine weitere neuere Ergänzung zur Sprache ist WebAssembly Multi-Value, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungssequenzen mehrere Stapelwerte konsumieren und produzieren können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Homepage](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen Multi-Value-Anweisungen sind Funktionsaufrufe, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen und andere Dinge nebenbei ebnen. Für einen nützlichen Bericht über den bisherigen Fortschritt und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es WebAssembly-Speicherobjekten, über mehrere in separaten Web-Workern ausgeführte WebAssembly-Instanzen hinweg geteilt zu werden, auf die gleiche Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungssteigerungen in Webanwendungen.

Der Threads-Vorschlag besteht aus zwei Teilen: geteilte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Homepage](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Geteilte Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly-`Memory`-Objekte erstellen, die zwischen Fenster- und Worker-Kontexten mithilfe von [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, auf dieselbe Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)-Konstruktors jetzt eine `shared`-Eigenschaft, bei der, wenn auf `true` gesetzt, ein geteilter Speicher erstellt wird:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des Speichers gibt jetzt einen `SharedArrayBuffer` statt des üblichen `ArrayBuffer` zurück:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Speicher erstellen, indem Sie das Schlüsselwort `shared` verwenden, so:

```wasm
(memory 1 2 shared)
```

Anders als ungeteilte Speicher, müssen geteilte Speicher sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat eine "maximale" Größe spezifizieren.

> [!NOTE]
> Sie können viel mehr Details im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md) finden.

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Befehle wurde hinzugefügt, die verwendet werden können, um höhere Funktionen wie Sperren, Bedingungsvariablen usw. zu implementieren. Sie können [sie aufgelistet hier](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses) finden.

> [!NOTE]
> Die [Emscripten Pthreads support page](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neue Funktionalität aus Emscripten verwenden kann.

## Zusammenfassung

Damit endet unsere Tour durch die wichtigsten Komponenten des WebAssembly-Textformats und wie sie sich in der WebAssembly-JavaScript-API widerspiegeln.

## Siehe auch

- Das Hauptsächliche, was nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) bietet eine Behandlung jeder Anweisung.
- Sehen Sie auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Spezifikationsinterpreter implementiert wird.
