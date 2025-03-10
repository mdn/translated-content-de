---
title: Verständnis der WebAssembly-Textformatierung
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Um WebAssembly für Menschen lesbar und bearbeitbar zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen für Browser usw. sichtbar gemacht werden soll. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die rohe Syntax, und wie es mit dem zugrunde liegenden Bytecode zusammenhängt, den es repräsentiert – und den Wrapper-Objekten, die Wasm in JavaScript darstellen.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der einfach nur ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren, oder Ihren eigenen WebAssembly-Compiler erstellen möchten.

## S-Ausdrücke

In beiden Formaten, dem binären und dem textlichen, ist die grundlegende Code-Einheit in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein sehr altes und sehr einfaches textliches Format zur Darstellung von Bäumen, und daher können wir ein Modul als Baum von Knoten betrachten, die die Struktur des Moduls und dessen Code beschreiben. Im Unterschied zum Abstrakten Syntaxbaum einer Programmiersprache sind WebAssembly-Bäume jedoch ziemlich flach und bestehen größtenteils aus Listen von Anweisungen.

Sehen wir uns zunächst an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum geht in ein Paar Klammern — `( ... )`. Das erste Label innerhalb der Klammer gibt an, um welchen Knotentyp es sich handelt, und anschließend folgt eine durch Leerzeichen getrennte Liste von Attributen oder Kindknoten. Das bedeutet also, dass der WebAssembly S-Ausdruck:

```wasm
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einem "memory"-Knoten mit dem Attribut "1" und einem "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Fangen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul an.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber immer noch ein gültiges Modul.

Wenn wir unser Modul nun in Binärcode umwandeln (siehe [Konvertieren von WebAssembly-Textformat in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben wird:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionalität zu Ihrem Modul

Okay, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Der gesamte Code in einem WebAssembly-Modul ist in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** gibt an, welche Parameter die Funktion verwendet und welche Rückgabewerte sie liefert.
- Die **Locals** sind wie Variablen in JavaScript, jedoch mit explizit erklärten Typen.
- Der **Body** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Dies ist also ähnlich wie Funktionen in anderen Sprachen, auch wenn es anders aussieht, da es ein S-Ausdruck ist.

## Signaturen und Parameter

Die Signatur ist eine Folge von Parameter- und Rückgabetyp-Erklärungen. Hierbei ist zu beachten:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens einen Rückgabetyp geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md), sodass beliebig viele möglich sind.

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabewert als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Integer entgegennimmt und eine 64-Bit-Gleitkommazahl zurückgibt, wie folgt geschrieben werden:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die Lokalvariablen mit ihrem Typ aufgeführt, zum Beispiel `(local i32)`. Parameter sind im Grunde genommen nur lokale Variablen, die mit dem Wert des entsprechenden vom Aufrufer übergebenen Arguments initialisiert sind.

## Abrufen und Setzen von lokalen Variablen und Parametern

Lokale Variablen/Parameter können durch den Funktionskörper mit den Anweisungen `local.get` und `local.set` gelesen und beschrieben werden.

Die Befehle `local.get`/`local.set` beziehen sich auf das Element, das geholt/geändert werden soll, über seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration angegeben, gefolgt von lokalen Variablen in der Reihenfolge ihrer Deklaration. Angenommen, die folgende Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` würde den i32-Parameter abrufen, `local.get 1` würde den f32-Parameter abrufen und `local.get 2` würde den f64-lokalen Wert abrufen.

Hier gibt es ein weiteres Problem – die Verwendung numerischer Indizes zur Referenzierung von Elementen kann verwirrend und lästig sein, daher erlaubt das Textformat, Parameter, Lokale und die meisten anderen Elemente mit einem Namen zu versehen, indem dem Typdeklaration ein Dollarzeichen (`$`) vorangestellt wird.

So könnten wir unsere vorherige Signatur so umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` statt `local.get 0` schreiben, usw. (Hinweis: Wenn dieser Text in Binär konvertiert wird, enthält das Binärformat jedoch nur die ganze Zahl.)

## Stack-Maschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir noch eine Sache besprechen: **Stack-Maschinen**. Obwohl der Browser es in etwas Effizienteres kompiliert, ist die Wasm-Ausführung in Bezug auf eine Stack-Maschine definiert, wobei die grundlegende Idee darin besteht, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf einen Stack schiebt und/oder davon entfernt.

Beispielsweise ist `local.get` so definiert, dass der Wert der gelesenen lokalen Variablen auf den Stack geschoben wird, und `i32.add` entfernt zwei `i32`-Werte (es nimmt implizit die vorherigen zwei Werte, die auf den Stack geschoben wurden), berechnet deren Summe (modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stack, der sich allmählich auffüllt und leert, während die Anweisungen des Körpers ausgeführt werden. Zum Beispiel, nach der Ausführung der folgenden Funktion:

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

Enthält der Stack genau einen `i32`-Wert – das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` bearbeitet wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stack verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stack genau übereinstimmt: Wenn Sie ein `(result f32)` deklarieren, muss der Stack am Ende genau ein `f32` enthalten. Wenn kein Rückgabetyp angegeben ist, muss der Stack leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Indem wir dies mit dem bisher Gelernten kombinieren, können wir endlich ein Modul definieren, das unsere eigene einfache Funktion enthält:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie zusammen und gibt das Ergebnis zurück.

Es gibt noch viele weitere Dinge, die in Funktionskörper eingefügt werden können, aber wir fangen jetzt einfach an und Sie werden im Laufe der Zeit viele weitere Beispiele sehen. Eine vollständige Liste der verfügbaren Opcodes finden Sie in der [Semantikreferenz auf webassembly.org](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird selbst nicht viel tun – nun müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie bei lokalen Variablen werden Funktionen standardmäßig durch einen Index identifiziert, aber der Bequemlichkeit halber können sie benannt werden. Beginnen wir damit – zunächst fügen wir nach dem `func`-Schlüsselwort einen Namen hinzu, dem ein Dollarzeichen vorangestellt ist:

```wasm
(func $add …)
```

Nun müssen wir eine Exportdeklaration hinzufügen – das sieht so aus:

```wasm
(export "add" (func $add))
```

Hierbei ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` angibt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

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

Wenn Sie dem Beispiel folgen möchten, speichern Sie unser Modul oben in einer Datei namens `add.wat` und konvertieren Sie es mit wabt in eine Binärdatei namens `add.wasm` (siehe [Konvertieren von WebAssembly-Textformat in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als Nächstes werden wir unser Binärmodul asynchron instanziieren (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und unsere `add`-Funktion in JavaScript ausführen (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details zur Instanzfunktion.

## Erforschen der Grundlagen

Nachdem wir die wirklichen Grundlagen behandelt haben, wollen wir uns jetzt einige fortgeschrittenere Funktionen ansehen.

### Funktionen aus anderen Funktionen im selben Modul aufrufen

Die `call`-Anweisung ruft eine einzelne Funktion auf, gegeben ihren Index oder Namen. Beispielsweise enthält das folgende Modul zwei Funktionen – eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufs der ersten Funktion plus eins zurück:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach einen 32-Bit-Integer und schiebt ihn auf den Stack. Sie könnten das `i32` gegen einen der anderen verfügbaren Typen austauschen und den Wert der const in beliebigem Maße ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel bemerken Sie einen `(export "getAnswerPlus1")` Abschnitt, der direkt nach der `func`-Anweisung in der zweiten Funktion erklärt wird – dies ist eine Kurzform der Deklaration, dass wir diese Funktion exportieren möchten und den Namen definieren, unter dem wir sie exportieren möchten.

Dies ist funktional gleichwertig mit dem Einfügen einer separaten Funktionsanweisung außerhalb der Funktion, anderswo im Modul in der gleichen Art und Weise, wie wir es vorher gemacht haben, z.B.:

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

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber was ist mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen Zwei-Ebenen-Namensraum, daher sagt die Importanweisung hier, dass wir darum bitten, die `log`-Funktion aus dem `console`-Modul zu importieren. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mit der `call`-Anweisung aufruft, die wir oben eingeführt haben.

Importierte Funktionen sind genau wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und sie sind mit einem Index versehen und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keine Vorstellung von Signaturen, daher kann jede JavaScript-Funktion übergeben werden, unabhängig von der erklärten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Anrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Für das obige müssen wir ein Objekt (nennen wir es `importObject`) haben, sodass `importObject.console.log` eine JavaScript-Funktion ist.

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
> Sie können dieses Beispiel auf GitHub als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Deklarieren von Globalen in WebAssembly

WebAssembly bietet die Möglichkeit, Instanzen globaler Variablen zu erstellen, die sowohl von JavaScript zugänglich sind als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht das in etwa so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich wie das aus, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben, und wir spezifizieren auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes, wenn wir ihn veränderlich machen möchten.

Um einen äquivalenten Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assemblercode arbeitet, sie auf den [Stapel](#stack-maschinen) setzt, Operationen darauf durchführt und dann das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Um mit Zeichenketten und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder im WebAssembly oder JavaScript erstellt und zwischen den Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großer zusammenhängender, veränderlicher Abschnitt von Rohbytes, der im Laufe der Zeit wachsen kann (siehe [linearen Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stapel und einem beliebigen Speicherort im Speicher.

Aus Sicht von JavaScript scheint es, als ob der Speicher vollständig innerhalb eines großen, erweiterbaren {{jsxref("ArrayBuffer")}}s liegt.
JavaScript kann WebAssembly-lineare Speicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und sie zu einer Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der ein `ArrayBuffer` zurückgibt, das auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, z.B. über die Methode [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in WebAssembly.
Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, der auf den neueren, größeren Speicher zeigt.

Beachten Sie, dass beim Erstellen des Speichers die anfängliche Größe definiert werden muss und optional die maximale Größe, auf die der Speicher wachsen kann, angegeben werden kann.
WebAssembly wird versuchen, die maximale Größe (falls angegeben) zu reservieren, und wenn es gelingt, kann es den Puffer in Zukunft effizienter erweitern. Selbst wenn es jetzt die maximale Größe nicht reservieren kann, kann es möglicherweise später noch wachsen.
Die Methode schlägt nur fehl, wenn die _anfängliche_ Größe nicht zugewiesen werden kann.

> [!NOTE]
> Ursprünglich war in WebAssembly nur ein Speicher pro Modulinstanz zulässig.
> Sie können jetzt [mehrere Speicher](#mehrere_speicher) verwenden, wenn sie vom Browser unterstützt werden.
> Code, der keine mehrfachen Speicher verwendet, muss nicht geändert werden!

Um dieses Verhalten zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenkette in unserem WebAssembly-Code arbeiten möchten.
Eine Zeichenkette ist einfach eine Folge von Bytes irgendwo innerhalb dieses linearen Speichers.
Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenkette an JavaScript übergeben, indem wir den Speicher, den Versatz der Zeichenkette im Speicher und eine Art von Längenangabe freigeben.

Erstellen wir zunächst etwas Speicher und teilen wir ihn zwischen WebAssembly und JavaScript.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und den Speicher im WebAssembly-Modul importieren lassen oder das WebAssembly-Modul den Speicher erstellen und ihn an JavaScript exportieren lassen.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Dann instanziieren wir unser WebAssembly-Modul – in diesem Fall "the_wasm_to_import.wasm" – mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und übergeben das Importobjekt:

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

```wasm
(import "js" "mem" (memory 1))
```

Der Speicher muss mit dem gleichen Zwei-Ebenen-Schlüssel (`js.mem`) importiert werden, der im `importObject` angegeben ist.
Die `1` zeigt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste Speicher ist, der in das WebAssembly-Modul importiert wird, hat er einen Speicherindex von "0".
> Sie könnten auf diesen speziellen Speicher mithilfe des Indexes in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verweisen, aber da 0 der Standardindex ist, müssen Sie in Anwendungen mit einem einzigen Speicher den Index nicht angeben.

Da wir nun eine gemeinsame Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenkette von Daten hineinzuschreiben.
Wir geben dann Informationen darüber an JavaScript weiter, wo sich die Zeichenkette befindet und wie lang sie ist (wir könnten alternativ die Länge der Zeichenkette in der Zeichenfolge selbst codieren, aber das Übergeben einer Länge ist für uns einfacher zu implementieren).

Zuerst fügen wir eine Zeichenkette zu unserem Speicher hinzu, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir den Inhalt der Zeichenkette einfach mit einem `data`-Abschnitt in den globalen Speicher schreiben.
Datenabschnitte ermöglichen es, eine Zeichenfolge von Bytes zu einem bestimmten Zeitpunkt des Instanzierens zu schreiben und ähneln den `.data`-Abschnitten in nativen ausführbaren Formaten.
Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) bei Versatz 0:

```wasm
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Syntax mit doppeltem Semikolon (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzuzeigen.
> In diesem Fall verwenden wir sie einfach, um Platzhalter für anderen Code anzugeben.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um die Zeichenkette in die Konsole zu protokollieren.
Dies muss mit `console.log` im `importObject` abgebildet werden, das zur Instanziierung des WebAssembly-Moduls verwendet wird.
Die Funktion wird im WebAssembly `$log` genannt und benötigt `i32`-Parameter für den Zeichenkettenversatz und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenkette im Speicher (`0` und `2`) auf.
Diese wird aus dem Modul exportiert, damit sie von JavaScript aus aufgerufen werden kann.

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben wird und von dem WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht auf die Zeichenkette im geteilten Speicher mithilfe eines `Uint8Array` beim angegebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann mithilfe der [TextDecoder API](/de/docs/Web/API/TextDecoder) von UTF-8 in eine Zeichenkette dekodiert (wir geben hier `utf8` an, aber viele andere Kodierungen werden unterstützt).
Die Zeichenfolge wird dann mit `console.log()` in die Konsole protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Instanziierung des Objekts erfolgt.
Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi" an.

> [!NOTE]
> Die vollständige Quelle finden Sie auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen ermöglichen es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzigen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden sollten als andere Anwendungsdaten, wie z.B. öffentliche vs. private Daten, Daten, die persistent sein müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch nützlich für sehr große Anwendungen sein, die über den Wasm 32-Bit-Adressraum hinaus skalieren müssen, und zu anderen Zwecken.

Speicher, die dem WebAssembly-Code durch direkte Deklaration oder Import zur Verfügung gestellt werden, erhalten eine nullindizierte, sequenziell zugewiesene Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index verweisen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wird.
Infolgedessen, wenn Sie nur einen Speicher hinzufügen, muss Ihr Code den Index nicht angeben.

Um zu zeigen, wie das im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenketten an drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der folgende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, wobei wir den gleichen Ansatz wie im vorherigen Beispiel verwenden.
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

Die drei Speicherinstanzen werden automatisch basierend auf ihrer Erstellungsreihenfolge einem Index zugewiesen.
Der Code unten zeigt, wie wir diesen Index (z.B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenkette schreiben möchten (Sie können den gleichen Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenkette, die anzeigt, welchen Speichertyp es gibt.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass das `(memory 0)` standardmäßig ist und daher optional ist.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne Angabe des Speicherindexes, und das sollte nach `"Memory 0 data"` angefügt werden, wenn die Speicherinhalte protokolliert werden.

Der WebAssembly-Protokollierungscode ist fast derselbe wie im vorherigen Beispiel, außer dass zusätzlich zum Versatz und zur Länge der Zeichenkette der Index des Speichers, der die Zeichenkette enthält, übergeben werden muss.
Wir protokollieren auch alle drei Speicherinstanzen.

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

Der JavaScript-Code ist auch sehr ähnlich dem vorherigen Beispiel, außer dass wir zwei Speicherinstanzen an das `importObject()` übergeben und der vom Modul instanziierte Speicher über das gelöste Versprechen (`obj.instance.exports`) zugänglich ist.
Der Code zum Protokollieren jeder Zeichenfolge ist auch etwas komplizierter, da wir die Speicherindexnummer von WebAssembly mit einem bestimmten `Memory`-Objekt abgleichen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich dem untenstehenden Text sein, außer dass "Memory 1 data" einige abschließende "Rauscharaktere" enthalten kann, da der Textdecoder mehr Bytes erhält, als zur Kodierung der Zeichenfolge verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Die vollständige Quelle finden Sie auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([auch live sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html))

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität für diese Funktion.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat abzuschließen, schauen wir uns den komplexesten und oft verwirrendsten Teil von WebAssembly an: **Tabellen**. Tabellen sind im Wesentlichen erweiterbare Arrays von Referenzen, die von WebAssembly-Code aus per Index zugänglich sind.

Um zu verstehen, warum Tabellen benötigt werden, müssen wir zuerst feststellen, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Aufrufen von Funktionen aus anderen Funktionen im selben Modul](#funktionen_aus_anderen_funktionen_im_selben_modul_aufrufen)), einen statischen Funktionsindex nimmt und daher nur eine Funktion aufrufen kann – aber was, wenn der Aufgerufene ein Laufzeitwert ist?

- In JavaScript sehen wir das die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir das mit Funktionszeigern.
- In C++ sehen wir das mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufbefehl, um dies zu erreichen, und so wurde `call_indirect` hinzugefügt, das einen dynamischen Funktionsoperanden nimmt. Das Problem ist, dass die einzigen Typen, die wir in WebAssembly für Operanden haben, derzeit `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen („any“, weil der Typ Funktionen mit beliebigen Signaturen enthalten könnte), aber leider könnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Linearer Speicher legt den rohen Inhalt gespeicherter Werte als Bytes offen und das würde Wasm-Inhalt ermöglichen, rohe Funktionsadressen beliebig zu beobachten und zu manipulieren, was im Web nicht erlaubt werden kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes, die einfach i32-Werte sind, herumzureichen. Der Operand von `call_indirect` kann daher ein i32-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Wie platzieren wir also Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Abschnitte zum Initialisieren von Bereichen von linearem Speicher mit Bytes verwendet werden können, können `elem`-Abschnitte zum Initialisieren von Bereichen von Tabellen mit Funktionen verwendet werden:

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

- In `(table 2 funcref)` ist die 2 die anfängliche Größe der Tabelle (bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` erklärt, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die (`func`) Abschnitte sind genau wie andere deklarierte Wasm-Funktionen. Diese sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (zum Beispiel gibt jede von ihnen nur einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert werden, hier keine Rolle spielt – Sie können Ihre Funktionen überall deklarieren und dennoch in ihrem `elem`-Abschnitt referenzieren.
- Der `elem`-Abschnitt kann jedes Unterset von Funktionen in einem Modul auflisten, in beliebiger Reihenfolge, wodurch Duplikate ermöglicht werden. Dies ist eine Liste der Funktionen, auf die von der Tabelle verwiesen werden soll, in der Reihenfolge, in der auf sie verwiesen werden soll.
- Der `(i32.const 0)` Wert innerhalb des `elem`-Abschnitts ist ein Offset – dies muss am Anfang des Abschnitts deklariert werden und gibt das Tischindex an, wo Funktionsreferenzen zu beginnen sind, um bevölkert zu werden. Hier haben wir 0 angegeben, und eine Größe von 2 (siehe oben), so dass wir zwei Referenzen bei Indizes 0 und 1 ausfüllen können. Wenn wir beginnen wollten, unsere Referenzen bei einem Offset von 1 zu schreiben, müssten wir `(i32.const 1)` schreiben, und die Tischgröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standardwert, der beim Aufruf eine Ausnahme auslöst.

In JavaScript würden die entsprechenden Aufrufe zur Erstellung einer solchen Tabelleninstanz in etwa so aussehen:

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

#### Verwenden der Tabelle

Gehen wir weiter, jetzt, wo wir die Tabelle definiert haben, müssen wir sie auf irgendeine Weise verwenden. Lassen Sie uns diesen Codeabschnitt verwenden, um dies zu tun:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))`-Block spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird bei der Typüberprüfung der Funktionsaufrufe für Tabellenreferenzen verwendet. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese wird einen `i32` als Parameter annehmen, welcher den Argumentnamen `$i` erhält.
- Innerhalb der Funktion fügen wir einen Wert zum Stack hinzu – welchen auch immer als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen – sie entfernt implizit den Wert von `$i` vom Stack. Das Nettoergebnis ist, dass die Funktion `callByIndex` die `$i`'te Funktion in der Tabelle aufruft.

Sie könnten den `call_indirect`-Parameter auch explizit während des Befehlsaufrufs angeben, anstatt davor, so:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherstufigen, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich vorstellen, das Gleiche mit einem Array (oder wahrscheinlich eher, einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde in etwa wie `tbl[i]()` aussehen.

Also, zurück zur Typüberprüfung. Da WebAssembly eine typüberprüfte Sprache ist und die `funcref` potenziell jede Funktionssignatur haben kann, müssen wir die vermutete Signatur des Aufzurufenden an der Aufrufstelle bereitstellen, daher fügen wir den `$return_i32`-Typ hinzu, um dem Programm mitzuteilen, dass eine Funktion erwartet wird, die ein `i32` zurückgibt. Wenn der Aufzurufende keine übereinstimmende Signatur hat (sagen wir, es wird stattdessen ein `f32` zurückgegeben), wird eine [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Also, was verbindet die `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist, was `call_indirect` implizit aufruft. In Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennung in etwa so angeben

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht zusammengefasst so aus und kann in unserem Beispiel `wasm-table.wat` gefunden werden:

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

Wir laden es in einer Webseite mit dem folgenden JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genauso wie Speicher können auch Tabellen von JavaScript erstellt (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) und zu/von einem anderen Wasm-Modul importiert werden.

### Manipulieren von Tabellen und dynamisches Verlinken

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt von JavaScript aus mithilfe der Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) verändert werden. Und WebAssembly-Code kann Tabellen selbst mit Anweisungen manipulieren, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie z.B. `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um ausgeklügelte Ladezeit- und Laufzeit-[dynamische Linkschemata](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verlinkt wird, teilen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Das ist symmetrisch zu einer nativen Anwendung, bei der mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einzelnes Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses selbe Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Aufrufe.

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

1. Die Funktion `shared0func` ist in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante mit dem Wert `0` und verwendet dann den Befehl `i32.load`, um den in der bereitgestellten Speicherindex enthaltenen Wert zu laden. Der bereitgestellte Index ist `0` – wieder wird der vorherige Wert implizit vom Stack genommen. Also lädt `shared0func` und gibt den Wert zurück, der beim Speicherindex `0` gespeichert ist.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` – diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, dann ruft sie `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Wieder wird der vorherige Wert implizit vom Stapel genommen, sodass das Ergebnis darin besteht, dass der Wert `42` im Speicherindex `0` gespeichert wird,
4. Im letzten Teil der Funktion wird eine Konstante mit dem Wert `0` erstellt, dann wird die Funktion bei diesem Index 0 der Tabelle aufgerufen, was `shared0func` ist, das vorher durch den `elem`-Block in `shared0.wat` dort gespeichert wurde.
5. Wenn `shared0func` aufgerufen wird, lädt es die `42`, die wir im Speicher mithilfe des `i32.store`-Befehls in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die oben genannten Ausdrücke nehmen wieder implizit Werte vom Stapel, aber Sie könnten diese auch explizit innerhalb der Befehlsanrufe deklarieren, zum Beispiel:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nachdem wir in Assembly konvertiert haben, verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über den folgenden Code:

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

Jedes der Module, das kompiliert wird, kann denselben Speicher und dasselbe Table-Objekt importieren und somit denselben linearen Speicher- und Tabellenadressraum teilen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Massen-Speicheroperationen

Massen-Speicheroperationen sind eine neuere Ergänzung der Sprache – sieben neue eingebaute Operationen sind für Massen-Speicheroperationen wie Kopieren und Initialisieren vorgesehen, um WebAssembly die Möglichkeit zu geben, native Funktionen wie `memcpy` und `memmove` effizienter und leistungsfähiger zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Die Daten in einem Datenabschnitt verwerfen.
- `elem.drop`: Die Daten in einem Elementeabschnitt verwerfen.
- `memory.copy`: Von einer Region des linearen Speichers in eine andere kopieren.
- `memory.fill`: Eine Region des linearen Speichers mit einem bestimmten Bytewert füllen.
- `memory.init`: Einen Bereich von einem Datensegment kopieren.
- `table.copy`: Von einer Region einer Tabelle in eine andere kopieren.
- `table.init`: Einen Bereich von einem Elementsegment kopieren.

> [!NOTE]
> Weitere Informationen finden Sie im Vorschlag [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

### Vektortypen

- `v128`: 128-Bit-Vektor aus gepackten Ganzzahlen, Gleitkommadaten, oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Vorschlag zu Referenztypen](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Ein neuer Typ `externref`, der _jede_ JavaScript-Wertart halten kann, zum Beispiel Zeichenketten, DOM-Referenzen, Objekte usw. `externref` ist aus Sicht von WebAssembly undurchsichtig – ein Wasm-Modul kann diese Werte nicht zugreifen oder manipulieren, sondern kann sie nur empfangen und wieder ausgeben. Aber dies ist sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen zu lassen und im Allgemeinen den Weg für eine einfachere Interoperabilität mit der Hostumgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Anzahl neuer Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält nützliche Informationen darüber, wie `externref` von Rust aus verwendet werden kann.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multi-Value-WebAssembly

Ein weiteres jüngeres Feature der Sprache ist das Multi-Value-WebAssembly, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben und Anweisungssequenzen mehrere Stack-Werte konsumieren und produzieren können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) steht dies am Anfang, und die einzigen verfügbaren Multi-Value-Anweisungen sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Ein Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen und andere Dinge ebnen. Für einen nützlichen Bericht über den bisherigen Fortschritt und wie das funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es, WebAssembly Memory-Objekte über mehrere in separaten Web-Workern laufende WebAssembly-Instanzen zu teilen, auf dieselbe Weise wie [`SharedArrayBuffer`](/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)s in JavaScript. Das ermöglicht sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungsgewinne in Webanwendungen.

Das Thread-Modul hat zwei Teile, geteilte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Geteilte Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly-[`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Fenster- und Worker-Kontexten mithilfe von [`postMessage()`](/de/docs/Web/API/Window/postMessage) auf dieselbe Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) übertragen werden können.

Auf der JavaScript-API-Seite hat das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)-Konstruktors jetzt eine `shared`-Eigenschaft, die beim Setzen auf `true` einen geteilten Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des Speichers gibt jetzt einen `SharedArrayBuffer` zurück, anstelle des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Speicher mit dem Schlüsselwort `shared` erstellen, so:

```wasm
(memory 1 2 shared)
```

Im Gegensatz zu nicht freigegebenen Speichern müssen geteilte Speicher eine „maximale“ Größe angeben, sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat.

> [!NOTE]
> Mehr Details finden Sie im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md).

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurden hinzugefügt, die verwendet werden können, um höherstufige Funktionen wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [diese hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads Support-Seite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie Sie diese neue Funktionalität aus Emscripten nutzen können.

## Zusammenfassung

Damit beenden wir unsere umfassende Tour durch die Hauptkomponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API reflektiert werden.

## Siehe auch

- Das Hauptsächliche, das nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Sehen Sie auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax) die vom Spezifikationsinterpreter implementiert wird.
