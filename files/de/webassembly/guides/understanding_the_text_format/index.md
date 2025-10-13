---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: a26c067d037e7a984383b2501c8315f3131e939a
---

Um sicherzustellen, dass WebAssembly von Menschen gelesen und bearbeitet werden kann, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die darauf ausgelegt ist, in Texteditoren, Browser-Entwicklertools und ähnlichen Umgebungen angezeigt zu werden. Dieser Artikel erklärt, wie das Textformat hinsichtlich seiner rohen Syntax funktioniert und wie es sich auf den zugrunde liegenden Bytecode bezieht, den es darstellt, sowie auf die Wrapper-Objekte, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der ein Wasm-Modul in eine Seite laden und im Code verwenden möchte (siehe [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)). Es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Ausdrücke

In sowohl binären als auch textuellen Formaten ist die grundlegende Einheit des Codes in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein altes, einfaches Textformat zur Darstellung von Bäumen; wir können daher ein Modul als einen Baum von Knoten betrachten, die die Struktur des Moduls und seinen Code beschreiben. Anders als der Abstract Syntax Tree einer Programmiersprache ist der WebAssembly-Baum jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Sehen wir uns zunächst an, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum befindet sich in einem Paar von Klammern — `( ... )`. Das erste Label innerhalb der Klammern gibt an, um welche Art von Knoten es sich handelt, und danach gibt es eine durch Leerzeichen getrennte Liste von Attributen oder Kindknoten. Das bedeutet, dass der WebAssembly-S-Ausdruck:

```wat
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einem "memory"-Knoten mit dem Attribut "1" und einem "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Lassen Sie uns mit dem einfachsten, kürzesten möglichen Wasm-Modul beginnen.

```wat
(module)
```

Dieses Modul ist leer, aber es ist immer noch ein gültiges Modul.

Wenn wir unser Modul jetzt in binär umwandeln (siehe [Konvertierung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionen zu Ihrem Modul

Ok, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** erklärt, was die Funktion entgegennimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Lokalen** sind wie Variablen in JavaScript, aber mit explizit deklarierten Typen.
- Der **Körper** ist einfach eine lineare Liste von Low-Level-Anweisungen.

Dies ähnelt Funktionen in anderen Sprachen, obwohl es etwas anders aussieht.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parameter-Typdeklarationen, gefolgt von einer Liste von Rückgabetyp-Deklarationen. Es ist hier zu beachten:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens 1 Rückgabetyp geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md) auf eine beliebige Anzahl.

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Float
- `f64`: 64-Bit-Float

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabetyp als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Ganzzahlen entgegennimmt und eine 64-Bit-Float zurückgibt, so geschrieben werden:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur sind die Lokalen mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Wesentlichen einfach nur Lokale, die mit dem Wert des entsprechenden Arguments, das der Aufrufer übergibt, initialisiert werden.

## Lesen und Setzen von Lokalen und Parametern

Lokale/Parameter können vom Körper der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die `local.get`/`local.set` Befehle beziehen sich auf das zu holende/zu setzende Element über seinen numerischen Index: Zuerst werden Parameter bezogen, in der Reihenfolge ihrer Deklaration, gefolgt von Lokalen in der Reihenfolge ihrer Deklaration. Also in der folgenden Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Würde die Anweisung `local.get 0` den i32-Parameter holen, `local.get 1` den f32-Parameter holen, und `local.get 2` das f64-Lokal holen.

Hier gibt es ein weiteres Problem — die Verwendung numerischer Indizes zur Referenzierung von Elementen kann verwirrend und lästig sein. Um dem entgegenzuwirken, können Sie Parameter, Lokale und die meisten anderen Elemente benennen, indem Sie ein vorangestelltes Dollar-Zeichen (`$`) direkt vor der Typdeklaration verwenden.

Demnach könnten Sie unsere vorherige Signatur wie folgt umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann `local.get $p1` anstelle von `local.get 0` schreiben, usw. (Beachten Sie, dass, wenn dieser Text in binär umgewandelt wird, das Binärformat nur die Ganzzahl enthält.)

## Stackmaschinen

Bevor wir einen Funktionskörper schreiben, gibt es noch ein weiteres wichtiges Konzept zu diskutieren: **Stackmaschinen**. Obwohl der Browser es in etwas Effizienteres kompiliert, wird die Wasm-Ausführung im Sinne einer Stackmaschine definiert, bei der die Grundidee ist, dass jede Art von Anweisung eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf/aus einem Stapel schiebt.

Zum Beispiel ist `local.get` so definiert, dass der Wert des gelesenen Lokals auf den Stapel geschoben wird, und `i32.add` zwei `i32`-Werte abruft (es greift implizit die vorherigen zwei Werte, die auf den Stapel geschoben wurden), ihre Summe berechnet (modulo 2^32), und den resultierenden i32-Wert schiebt.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der sich langsam füllt und leert, während die Anweisungen des Körpers ausgeführt werden. Nach der Ausführung der folgenden Funktion zum Beispiel:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

Enthält der Stapel genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), der von `i32.add` verarbeitet wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stapel bleibt.

Die Validierungsregeln von WebAssembly sorgen dafür, dass der Stapel genau passt: Wenn Sie ein `(result f32)` deklarieren, dann muss der Stapel am Ende genau einen `f32` enthalten. Wenn es keinen Ergebnistyp gibt, muss der Stapel leer sein.

## Unser erster Funktionskörper

Der Funktionskörper ist eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Indem wir das, was wir bisher gelernt haben, zusammenfügen, können wir endlich ein Modul definieren, das unsere eigene grundlegende Funktion enthält:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion nimmt zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Weitere Dinge können in Funktionskörper eingefügt werden, aber wir werden vorerst mit einer grundlegenden Funktion beginnen. Sie werden im weiteren Verlauf mehrere weitere Beispiele sehen. Für eine vollständige Liste der verfügbaren Opcodes, konsultieren Sie das [WebAssembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird nicht viel alleine tun — jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Lokale werden Funktionen standardmäßig durch einen Index identifiziert, können aber zur Bequemlichkeit benannt werden. Lassen Sie uns damit beginnen — zuerst fügen wir einen Namen voran einem Dollar-Zeichen, direkt nach dem `func`-Schlüsselwort, hinzu:

```wat
(func $add …)
```

Nun müssen wir eine Exportdeklaration hinzufügen — das sieht so aus:

```wat
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` angibt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

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

Wenn Sie das Beispiel nachvollziehen möchten, speichern Sie das obige Modul in einer Datei namens `add.wat`, und konvertieren Sie es dann in eine Binärdatei namens `add.wasm` mithilfe von wabt (siehe [Konvertierung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als nächstes werden wir unser Binärasynchron (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) instanziieren und unsere `add`-Funktion in JavaScript ausführen (wir können `add()` jetzt im [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Property der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Weitere Details zur Funktion finden Sie auch unter [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

## Erkunden von Grundlegenden

Jetzt, da wir die Grundlagen behandelt haben, schauen wir uns einige fortgeschrittene Funktionen an.

### Aufrufen von Funktionen aus anderen Funktionen im gleichen Modul

Die `call`-Anweisung ruft eine einzelne Funktion auf, indem sie ihren Index oder Namen angibt. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt den Wert `42` zurück, die andere gibt das Ergebnis des ersten Aufrufs plus eins zurück:

```wat
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> [!NOTE]
> `i32.const` definiert einen 32-Bit-Ganzzahl und schiebt ihn auf den Stapel. Sie können das `i32` durch einen der anderen verfügbaren Typen austauschen und den Wert der Konstanten beliebig ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie eine `(export "getAnswerPlus1")` Sektion bemerken, die direkt nach der `func`-Anweisung in der zweiten Funktion deklariert ist — dies ist eine Abkürzung, um anzugeben, dass wir diese Funktion exportieren möchten, und den Namen zu definieren, unter dem wir sie exportieren möchten.

Dies entspricht funktional der Einbeziehung eines separaten Funktionsstatements außerhalb der Funktion, irgendwo anders im Modul auf die gleiche Weise wie wir es vorher gemacht haben, z.B.:

```wat
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code, um unser oben genanntes Modul aufzurufen, sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Funktionen aus JavaScript importieren

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber was ist, wenn WebAssembly JavaScript-Funktionen aufruft? WebAssembly hat kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zweistufigen Namensraum, daher importiert die Importanweisung hier die `log`-Funktion aus dem `console`-Modul. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion unter Verwendung der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Platz für Signaturen, daher kann jede JavaScript-Funktion übergeben werden, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften enthält.

Der obige Import erfordert ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Dies würde in JavaScript wie folgt aussehen:

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

WebAssembly kann globale Variableninstanzen erstellen, die sowohl von JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importierbar/exportierbar sind. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es ungefähr so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich zu dem aus, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben und auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Werts angeben, wenn wir ihn veränderbar machen möchten.

Um einen gleichwertigen Wert unter Verwendung von JavaScript zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly Memory

Die obigen Beispiele zeigen, wie man mit Zahlen im Assembler-Code arbeitet, sie dem [Stack](#stackmaschinen) hinzufügt, Operationen darauf ausführt und dann das Ergebnis durch den Aufruf einer Methode in JavaScript protokolliert.

Für die Arbeit mit Zeichenketten und anderen komplexeren Datentypen verwenden wir `memory`, das entweder in WebAssembly oder JavaScript erstellt und zwischen Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können ebenfalls [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großes, zusammenhängendes, veränderbares Array von rohen Bytes, das im Laufe der Zeit wachsen kann (siehe [lineares Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store), um Bytes zwischen dem Stack und einem beliebigen Speicherort in einem Speicher zu lesen und zu schreiben.

Aus JavaScripts Sicht ist es, als ob der gesamte Speicher in einem großen wachstumsfähigen {{jsxref("ArrayBuffer")}} enthalten ist.
JavaScript kann WebAssembly-lineare Speicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Schnittstelle erstellen und an eine Speicherninstanz exportieren oder auf eine im WebAssembly-Code erstellte und exportierte Speicherninstanz zugreifen. JavaScript-`Memory` Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, beispielsweise über die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in WebAssembly.
Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` gelöst und ein neuer `ArrayBuffer` erstellt, um auf den neueren, größeren Speicher zu verweisen.

Beachten Sie, dass, wenn Sie den Speicher erstellen, Sie die anfängliche Größe definieren müssen, und Sie können optional die maximale Größe angeben, auf die der Speicher wachsen kann.
WebAssembly wird versuchen, die maximale Größe zu reservieren (wenn festgelegt), und wenn es möglich ist, es zu tun, kann es effizienter in der Zukunft wachsen. Auch wenn es die maximale Größe jetzt nicht zuweisen kann, kann es später möglicherweise noch wachsen.
Die Methode schlägt nur fehl, wenn sie nicht die _initiale_ Größe zuweisen kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speichern](/de/docs/WebAssembly#multiple_memories) haben, wenn dies vom Browser unterstützt wird.
> Code, der keine mehreren Speichern verwendet, muss sich nicht ändern!

Um einige dieser Verhaltensweisen zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenkette in unserem WebAssembly-Code arbeiten möchten.
Eine Zeile ist einfach eine Folge von Bytes irgendwo im linearen Speicher.
Angenommen, wir haben eine geeignete Zeichenkette von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenkette nach JavaScript übergeben, indem wir den Speicher, den Offset der Zeichenkette im Speicher und eine Angabe ihrer Länge teilen.

Erstens erstellen wir etwas Speicher und teilen diesen zwischen dem WebAssembly und JavaScript.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekt in JavaScript erstellen und das WebAssembly-Modul den Speicher importieren lassen, oder wir können das WebAssembly-Modul den Speicher erstellen und an JavaScript exportieren lassen.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es zu unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Dann instanziieren wir unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", unter Verwendung der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode und übergeben das Importobjekt:

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

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Unter Verwendung des WebAssembly-Textformats wird die `import`-Anweisung wie folgt geschrieben:

```wat
(import "js" "mem" (memory 1))
```

Der Speicher muss mit demselben zweistufigen Schlüssel importiert werden, der im `importObject` (`js.mem`) festgelegt wurde.
Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64 KB).

> [!NOTE]
> Da dies der erste in das WebAssembly-Modul importierte Speicher ist, hat er einen Speicherindex von `0`.
> Sie könnten diesen speziellen Speicher mit dem Index in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da `0` der Standardindex ist, brauchen Sie dies in Einzelmemory-Anwendungen nicht zu tun.

Da wir nun eine geteilte Speicherinstanz haben, besteht der nächste Schritt darin, eine Zeichenkette von Daten darin zu schreiben.
Wir geben dann Informationen darüber, wo sich die Zeichenkette befindet, und über ihre Länge an das JavaScript zurück (wir könnten alternativ die Länge der Zeichenkette in der Zeichenkette selbst kodieren, aber das Übergeben einer Länge ist für uns einfacher zu implementieren).

Lassen Sie uns zuerst eine Zeichenkette von Daten zu unserem Speicher hinzufügen, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir die Zeicheninhalte einfach in einen globalen Speicher mit einer `data`-Sektion schreiben.
Datensektionen ermöglichen das Schreiben einer Byte-Zeichenkette an einem gegebenen Offset zur Instanziierungszeit und sind ähnlich zu den `.data`-Sektionen in nativen Ausführungsformaten.
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
> Die doppelte Semikolon-Syntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien zu kennzeichnen.
> In diesem Fall verwenden wir sie einfach, um Platzhalter für anderen Code zu kennzeichnen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen.
Zuerst importieren wir eine Funktion aus JavaScript, die wir verwenden werden, um die Zeichenkette auf der Konsole zu protokollieren.
Diese muss mit `console.log` im `importObject` verknüpft werden, das zur Instanzierung des WebAssembly-Moduls verwendet wird.
Die Funktion wird in WebAssembly `$log` genannt und nimmt `i32`-Parameter für den Zeichenkettenoffset und die Länge im Speicher an.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenkette im Speicher (`0` und `2`) auf.
Diese wird aus dem Modul exportiert, sodass sie vom JavaScript aufgerufen werden kann.

Unser endgültiges WebAssembly-Modul (im Textformat) sieht also so aus:

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht auf der Zeichenkette im geteilten Speicher unter Verwendung eines `Uint8Array` an dem übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann mit Hilfe der [TextDecoder-API](/de/docs/Web/API/TextDecoder) (wir geben hier `utf8` an, aber viele andere Kodierungen werden unterstützt) von UTF-8 in eine Zeichenkette dekodiert.
Die Zeichenkette wird dann mit `console.log()` auf die Konsole protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Instanziierung des Objekts erfolgt.
Wenn Sie den Code ausführen, wird auf der Konsole der Text "Hi" angezeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen erlauben es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzigen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden sollen als andere Anwendungsdaten, wie z.B. öffentliche vs. private Daten, Daten, die persistent gespeichert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es kann auch für sehr große Anwendungen nützlich sein, die über den 32-Bit-Adressraum von Wasm hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code entweder direkt deklariert oder importiert zur Verfügung gestellt werden, erhalten eine nullindizierte, sequentiell zugewiesene Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index zugreifen, sodass Sie kontrollieren können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, der Index des ersten zur WebAssembly-Instanz hinzugefügten Speichers.
Wenn Sie also nur einen Speicher hinzufügen, muss Ihr Code den Index nicht angeben.

Um dies genauer zu erklären, erweitern wir das vorherige Beispiel, um Zeichenketten in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der untenstehende Code zeigt, wie wir zuerst zwei Speicherninstanzen importieren, nach dem gleichen Ansatz wie im vorherigen Beispiel.
Um zu zeigen, wie Sie Speicher innerhalb des WebAssembly-Moduls erstellen können, haben wir eine dritte Speicherninstanz namens `$mem2` erstellt und _exportiert_.

> [!NOTE]
> Wenn Sie [wabt](https://github.com/WebAssembly/wabt) (z.B. `wat2wasm`) verwenden, um das Textformat in Wasm zu konvertieren, müssen Sie möglicherweise `--enable-multi-memory` übergeben, da die Unterstützung von mehreren Speichern noch optional ist.

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

Die drei Speicherninstanzen erhalten automatisch einen Speichernindex, basierend auf der Reihenfolge der Erstellung.
Der untenstehende Code zeigt, wie wir diesen Index (z.B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenkette schreiben wollen (Sie können denselben Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir eine Zeichenkette, die den jeweiligen Speichertyp anzeigt.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass das `(memory 0)` der Standard ist und daher optional.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne den Speicherindex anzugeben, und dieser sollte, wenn der Speicherinhalt protokolliert wird, nach `"Memory 0 data"` angehängt werden.

Der WebAssembly-Protokollierungscode ist ähnlich wie im vorherigen Beispiel, außer dass wir den Index des Speichers, der die Zeichenkette enthält, zusammen mit dem Zeichenkettenoff und der Länge übergeben müssen.
Wir protokollieren auch alle drei Speicherninstanzen.

Das vollständige Modul wird unten gezeigt:

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

Der JavaScript-Code ist auch sehr ähnlich zum vorherigen Beispiel, außer dass wir zwei Speicherninstanzen zum `importObject()` erstellen und übergeben und der Speicher, der vom Modulinstanz exportiert wird, nach der Instanziierung unter Verwendung des aufgelösten Promise-Zugriffs zugänglich ist (`obj.instance.exports`).
Der Code, um jede Zeichenkette zu protokollieren, ist ebenfalls ein wenig komplizierter, da wir die Speicherninstanznummer vom WebAssembly mit einem bestimmten `Memory`-Objekt abgleichen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich dem Text unten sein, außer dass "Memory 1 data" möglicherweise einige Anhängsel "Müllzeichen" hat, weil der Textencoder mehr Bytes übergeben bekommt, als zur Kodierung der Zeichenfolge verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie finden den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)).

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität für diese Funktion.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat abzuschließen, werfen wir einen Blick auf den kompliziertesten und oft verwirrenden Bereich von WebAssembly: **Tabellen**. Tabellen sind im Grunde neuadressierbare Arrays von Referenzen, die von WebAssembly-Code über einen Index abgerufen werden können.

Um zu sehen, warum Tabellen benötigt werden, müssen wir beobachten, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Aufrufen von Funktionen aus anderen Funktionen im gleichen Modul](#aufrufen_von_funktionen_aus_anderen_funktionen_im_gleichen_modul)) einen statischen Funktionsindex übernimmt und dadurch nur eine Funktion aufrufen kann — aber was ist, wenn der Aufrufer zur Laufzeit erstellt wird?

- In JavaScript sehen wir dies die ganze Zeit: Funktionen sind Erstklassige Werte.
- In C/C++ sehen wir dies bei Funktionszeigern.
- In C++ sehen wir dies bei virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufanweisung, um dies zu erreichen, also gaben wir ihr `call_indirect`, was ein dynamisches Funktionsoperand annimmt. Das Problem ist, dass die einzigen Typen, denen wir Operanden in WebAssembly geben können, derzeit `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen mit beliebigen Signaturen halten könnte), aber leider konnte dieser `anyfunc`-Typ nicht im linearen Speicher gespeichert werden aus Sicherheitsgründen. Linearer Speicher gibt den rohen Inhalt der gespeicherten Werte als Bytes frei, daher könnte Wasm-Inhalt willkürlich rohe Funktionsadressen beobachten und manipulieren, was im Internet nicht erlaubt sein kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes weiterzugeben, die einfach i32-Werte sind. Das `call_indirect`-Operand kann somit ein i32-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Also, wie platzieren wir Wasm-Funktionen in unserer Tabelle? Genauso wie `data`-Sektionen verwendet werden können, um Regionen des linearen Speichers mit Bytes zu initialisieren, können `elem`-Sektionen verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)` ist die `2` die anfängliche Größe der Tabelle (Sie bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` deklariert, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die Funktionen (`func`) Abschnitte sind wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (zur Veranschaulichung gibt jede einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert sind, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und weiterhin in Ihrem `elem`-Abschnitt darauf verweisen.
- Der `elem`-Abschnitt kann jede beliebige Untermenge der Funktionen in einem Modul auflisten, in beliebiger Reihenfolge, Duplikate einschließen. Dies ist eine Liste der Funktionen, auf die die Tabelle in der festgelegten Reihenfolge verweisen soll.
- Der `i32.const 0`-Wert innerhalb des `elem`-Abschnitts ist ein Offset — dieser muss am Anfang des Abschnitts deklariert werden und legt fest, an welchem Index in der Tabelle Funktionsreferenzen initialisiert werden. Hier haben wir 0 als Startoffset und eine Größe von 2 angegeben (siehe oben), sodass wir zwei Referenzen an den Indizes 0 und 1 einfügen können. Wenn wir beginnen möchten, unsere Referenzen ab Offset 1 zu schreiben, müssten wir `i32.const 1` schreiben, und die Tabellenlänge müsste 3 sein.

> [!NOTE]
> Nichtinitialisierte Elemente erhalten standardmäßig einen Fehlwurf-on-call-Wert.

In JavaScript würden die äquivalenten Aufrufe, um eine solche Tabelleninstanz zu erstellen, in etwa wie folgt aussehen:

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

Weiter im Text, wir müssen die definierte Tabelle irgendwie verwenden. Verwenden wir diesen Abschnitt Code, um dies zu implementieren:

```wat
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))` Block spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird verwendet, um die Typprüfung der Tabellenfunktionsreferenzaufrufe später zu prüfen. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die unter dem Namen `callByIndex` exportiert wird. Diese wird einen `i32` als Parameter annehmen, der das Argumentnamens `$i` erhält.
- Innerhalb der Funktion fügen wir einen Wert zum Stack hinzu — welcher Wert im Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle zu rufen — dabei wird der Wert von `$i` implizit vom Stack genommen. Das Endergebnis ist, dass die `callByIndex`-Funktion die `$i`'te Funktion in der Tabelle aufruft.

Sie könnten auch den `call_indirect`-Parameter explizit während des Befehlaufrufs deklarieren, statt davor, wie folgt:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höheren, ausdrucksvolleren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlicher einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde ungefähr so aussehen wie `tbl[i]()`.

Also, zurück zur Typprüfung. Da WebAssembly typgeprüft ist und das `funcref` potenziell jede Funktionssignatur haben kann, müssen wir die angenommene Signatur des Aufgerufenen an der Aufrufstelle angeben. Wir inkludieren daher den `$return_i32`-Typ, um anzugeben, dass wir erwarten, dass eine Funktion ein `i32` zurückgibt. Wenn der Aufgerufene keine passende Signatur hat (zum Beispiel wird ein `f32` zurückgegeben), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) geworfen.

Was also verknüpft die `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist, was `call_indirect` implizit aufruft. In Zukunft, wenn mehrere Tabellen erlaubt sind, würden wir auch eine Tabellenkennung angeben müssen, nach dem Muster von

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht so aus und kann in unserem [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispieldatei gefunden werden:

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
> Sie können dieses Beispiel auf GitHub als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) finden ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Speichern können Tabellen auch von JavaScript erstellt (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) und von/zu einem anderen Wasm-Modul importiert werden.

### Mutieren von Tabellen und dynamisches Verknüpfen

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt von JavaScript aus mit den Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) verändert werden. Und WebAssembly-Code kann selbst Tabellen mit Anweisungen manipulieren, die als Teil der [Referenztypen](/de/docs/WebAssembly#reference_types) hinzugefügt werden, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um ausgeklügelte Ladezeit- und Laufzeit [dynamische Verknüpfungsschemata](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verknüpft wird, teilen sich mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist ähnlich wie eine native Anwendung, bei der mehrere kompilierte `.dll`s denselben Adressraum eines einzelnen Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einziges Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und geben dasselbe Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) Aufrufe weiter.

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

Diese arbeiten wie folgt:

1. Die Funktion `shared0func` wird in `shared0.wat` definiert und in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante mit dem Wert `0` und verwendet dann den `i32.load`-Befehl, um den Wert des angegebenen Speicherindex zu laden. Der angegebene Index ist `0` — wieder wird der vorherige Wert implizit vom Stack genommen. Also lädt `shared0func` und gibt den Wert zurück, der beim Speicherindex `0` gespeichert ist.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, ruft dann `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Wieder wird diese Werte implizit vom Stack genommen, sodass das Ergebnis ist, dass sie den Wert `42` an Speicherindex `0` speichert.
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, rufen dann die Funktion bei diesem Tabellenindex 0 auf, der `shared0func` ist, der zuvor durch den `elem`-Block in `shared0.wat` dort gespeichert wurde.
5. Werden sie aufgerufen, lädt `shared0func` die `42`, die wir im Speicher mittels des `i32.store`-Befehls in `shared1.wat` speicherten.

> [!NOTE]
> Die oben genannten Ausdrücke nehmen wieder Werte implizit von den Stack, aber Sie könnten diese explizit innerhalb der Befehlsaufrufe deklarieren, z.B.:
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach dem Konvertieren in ein WebAssembly-Binär (Wasm) verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript durch den folgenden Code:

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

Jedes der zu kompilierenden Module kann denselben Speicher und Table-Objekte importieren und somit denselben linearen Speicher und Tabellen-"Adressraum" teilen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Bulk-Memory-Betriebe

Bulk-Memory-Betriebe sind eine neuere Ergänzung zur Sprache. Sieben neue eingebaute Operationen für Bulk-Memory-Betriebe, wie z.B. Kopieren und Initialisieren, werden bereitgestellt, um WebAssembly die Modellierung nativer Funktionen wie `memcpy` und `memmove` auf effizientere und leistungsfähigere Weise zu ermöglichen.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Verwerfen der Daten in einem Datensegment.
- `elem.drop`: Verwerfen der Daten in einem Elementsegment.
- `memory.copy`: Von einer Region des linearen Speichers in eine andere kopieren.
- `memory.fill`: Eine Region des linearen Speichers mit einem gegeben Byte-Wert füllen.
- `memory.init`: Eine Region eines Datensegments kopieren.
- `table.copy`: Von einer Region einer Tabelle in eine andere kopieren.
- `table.init`: Eine Region eines Elementsegments kopieren.

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

- `v128`: 128-Bit-Vektor von gepackten Integer-, Fließkommazahlendaten oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Referenztypenvorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptmerkmale:

- Ein neuer Typ, `externref`, der _jegliche_ JavaScript-Werte halten kann, zum Beispiel Zeichenketten, DOM-Referenzen, Objekte, etc. `externref` ist aus Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann nicht auf diese Werte zugreifen und sie manipulieren, sondern kann sie nur empfangen und wieder ausgeben. Dies ist jedoch sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen zu lassen und generell die Interoperabilität mit der Hostumgebung zu erleichtern ermöglichen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Mehrere neue Anweisungen, die es den Wasm-Modulen erlauben, direkt [WebAssembly-Tabellen](#webassembly-tabellen) zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) Dokumentation enthält einige nützliche Informationen darüber, wie man `externref` aus Rust verwenden kann.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multi-Value WebAssembly

Ein weiteres neu hinzugefügtes Merkmal zur Sprache ist WebAssembly Multi-Value, die bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können, und Instruktionssequenzen können mehrere Stackwerte konsumieren und produzieren.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies im frühen Stadium, und die einzigen Multi-Value-Instruktionen, die verfügbar sind, sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Instruktionstypen und andere Dinge ebnen. Für eine nützliche Übersicht über den bisherigen Fortschritt und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es, dass WebAssembly-Memory-Objekte zwischen mehreren WebAssembly-Instanzen, die in separaten Web-Workern laufen, geteilt werden, auf die gleiche Weise wie [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht eine schnelle Kommunikation zwischen Workern und erhebliche Leistungsgewinne in Webanwendungen.

Der Threadvorschlag hat zwei Teile: geteilte Memories und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Geteilte Memories

Wie oben beschrieben, können Sie geteilte WebAssembly [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekte erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) übertragen werden kann.

Auf der Seite der JavaScript-API hat das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory) Konstruktors jetzt eine `shared`-Eigenschaft, die, wenn sie auf `true` gesetzt ist, ein geteiltes Memory erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des Speichers gibt jetzt einen `SharedArrayBuffer` zurück, anstatt des normalen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Speicher mithilfe des `shared` Schlüsselworts erstellen, wie folgt:

```wat
(memory 1 2 shared)
```

Im Gegensatz zu ungeteilten Speichern müssen geteilte Memories sowohl in der JavaScript-API als auch im Wasm-Textformat eine Maximalgröße angeben.

> [!NOTE]
> Sie können viele weitere Details im [Threading Proposal for WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md) finden.

### Atomare Speicherzugriffe

Es wurden mehrere neue Wasm-Anweisungen hinzugefügt, die verwendet werden können, um höherstufige Merkmale wie Mutexe, Bedingungsvariablen usw. zu implementieren. Sie können [sie hier aufgeführt finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads Support Page](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie Sie diese neue Funktionalität von Emscripten verwenden können.

## Zusammenfassung

Damit beenden wir unsere Überblickstour der Hauptkomponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API reflektiert werden.

## Siehe auch

- Das Hauptthema, das nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern auftreten können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine ausführliche Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die von dem Spezifikationsinterpreter implementiert wird.
