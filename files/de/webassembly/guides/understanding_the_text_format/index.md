---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: 625175dd49e0bebaea69fe87e7b715dee3bf261d
---

Um WebAssembly für Menschen lesbar und editierbar zu machen, gibt es eine textuelle Darstellung des Binärformats von Wasm. Dies ist eine Zwischenform, die in Texteditoren, Browser-Entwicklertools und anderen ähnlichen Umgebungen angezeigt werden soll. Dieser Artikel erklärt, wie das Textformat in Bezug auf seinen Rohsyntax funktioniert und wie es sich auf den zugrunde liegenden Bytecode bezieht, den es repräsentiert, und die Wrapper-Objekte, die Wasm in JavaScript darstellen.

> [!NOTE]
> Das könnte übertrieben sein, wenn Sie ein Webentwickler sind, der ein Wasm-Modul in eine Seite laden und es in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)). Es ist nützlicher, wenn Sie zum Beispiel Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu erstellen.

## S-Ausdrücke

In beiden Formaten, dem binären und dem textuellen, ist die fundamentale Codeeinheit in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großer S-Ausdruck dargestellt. S-Ausdrücke sind ein altes, einfaches Textformat zur Darstellung von Bäumen; wir können uns daher ein Modul als einen Baum von Knoten vorstellen, die die Struktur und den Code des Moduls beschreiben. Im Gegensatz zu dem Abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch relativ flach und besteht hauptsächlich aus Listen von Anweisungen.

Lassen Sie uns zuerst sehen, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum befindet sich innerhalb eines Paares von Klammern — `( ... )`. Das erste Label innerhalb der Klammer gibt an, um welchen Knotentyp es sich handelt, und danach folgt eine durch Leerzeichen getrennte Liste von entweder Attributen oder Kindknoten. Das bedeutet, dass der WebAssembly S-Ausdruck:

```wat
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten repräsentiert: einen "memory"-Knoten mit dem Attribut "1" und einen "func"-Knoten. Wir werden bald sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wat
(module)
```

Dieses Modul ist leer, aber es ist dennoch ein gültiges Modul.

Wenn wir unser Modul jetzt in binär umwandeln (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [binären Format](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Funktionalität zu Ihrem Modul hinzufügen

Okay, das ist nicht sehr interessant, lassen Sie uns etwas ausführbaren Code zu diesem Modul hinzufügen.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** erklärt, was die Funktion nimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Lokalen** sind wie Variablen in JavaScript, aber mit explizit deklarierten Typen.
- Der **Körper** ist nur eine lineare Liste von niedrigstufigen Anweisungen.

Das ist ähnlich wie Funktionen in anderen Sprachen, sieht jedoch etwas anders aus.

## Signaturen und Parameter

Die Signatur ist eine Sequenz von Parametertypdeklarationen, gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist bemerkenswert, hier darauf hinzuweisen, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration darf es höchstens einen Rückgabetyp geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md) für beliebig viele.

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Integer
- `i64`: 64-Bit-Integer
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabetyp als `(result i32)`, daher würde eine binäre Funktion, die zwei 32-Bit-Integer nimmt und eine 64-Bit-Gleitkommazahl zurückgibt, wie folgt geschrieben werden:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden Lokale mit ihrem Typ aufgelistet, zum Beispiel `(local i32)`. Parameter sind im Grunde genommen nur lokale Variablen, die mit dem Wert des entsprechenden vom Aufrufer übergebenen Arguments initialisiert werden.

## Lokale und Parameter abrufen und setzen

Lokale/Parameter können durch den Körper der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die `local.get`/`local.set`-Befehle beziehen sich auf das Element, das geholt/gesetzt werden soll, durch ihren numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration und dann lokale Variablen in der Reihenfolge ihrer Deklaration referenziert. Also bei der folgenden Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2
)
```

Würde die Anweisung `local.get 0` den i32-Parameter abrufen, `local.get 1` den f32-Parameter und `local.get 2` das f64-Lokale.

Ein weiteres Problem hier ist, dass die Verwendung numerischer Indizes zur Referenzierung von Elementen verwirrend und ärgerlich sein kann. Um diesem entgegenzuwirken, können Sie Parameter, lokale Variablen und die meisten anderen Elemente benennen, indem Sie einen Namen mit einem Dollarzeichen (`$`) direkt vor der Typdeklaration einschließen.

Daher könnten Sie unsere vorherige Signatur wie folgt umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann `local.get $p1` anstelle von `local.get 0` schreiben usw. (Beachten Sie, dass, wenn dieser Text in binär umgewandelt wird, die Binärdatei nur die Ganzzahl enthalten wird.)

## Stackmaschinen

Bevor wir einen Funktionskörper schreiben, gibt es ein weiteres wichtiges Konzept zu diskutieren: **Stackmaschinen**. Obwohl der Browser es in etwas effizienteres kompiliert, wird die Ausführung von Wasm in Bezug auf eine Stackmaschine definiert, bei der die Grundidee ist, dass jeder Anweisungstyp eine gewisse Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf einen Stack schiebt und/oder aus diesem herausnimmt.

Zum Beispiel wird `local.get` definiert, um den Wert des lokalen Werts, den es liest, auf den Stack zu schieben, und `i32.add` nimmt zwei `i32`-Werte vom Stack (es greift implizit auf die vorherigen zwei Werte zu, die auf den Stack geschoben wurden), berechnet ihre Summe (Modulo 2^32) und schiebt den resultierenden i32-Wert zurück.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stack, der sich allmählich füllt und leert, während die Anweisungen des Körpers ausgeführt werden. Zum Beispiel enthält der Stack nach Ausführung der folgenden Funktion:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add
)
```

genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), der von `i32.add` behandelt wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stack verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stack genau übereinstimmt: Wenn Sie ein `(result f32)` deklarieren, muss der Stack am Ende genau ein `f32` enthalten. Gibt es keinen Rückgabewert, muss der Stack leer sein.

## Unser erster Funktionskörper

Der Funktionskörper ist eine Liste von Anweisungen, die ausgeführt werden, wenn die Funktion aufgerufen wird. Indem wir dies mit dem bisher Gelernten kombinieren, können wir endlich ein Modul definieren, das unsere eigene Basisfunktion enthält:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add
  )
)
```

Diese Funktion nimmt zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Weitere Dinge können in Funktionskörpern enthalten sein, aber wir beginnen zunächst mit einer Basisfunktion. Im Verlauf werden Sie mehrere weitere Beispiele sehen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird alleine nicht viel tun – jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Lokale werden Funktionen standardmäßig durch einen Index identifiziert, sie können aber auch zur Bequemlichkeit benannt werden. Fangen wir damit an – zuerst geben wir nach dem `func`-Schlüsselwort einen Namen an, der mit einem Dollarzeichen beginnt:

```wat
(func $add …)
```

Jetzt müssen wir eine Exportdeklaration hinzufügen – so sieht das aus:

```wat
(export "add" (func $add))
```

Hierbei ist `add` der Name, mit dem die Funktion in JavaScript identifiziert wird, während `$add` die WebAssembly-Funktion innerhalb des Moduls auswählt, die exportiert wird.

Unser finales Modul (vorerst) sieht also so aus:

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

Wenn Sie das Beispiel nachvollziehen möchten, speichern Sie das Modul in einer Datei namens `add.wat` und konvertieren Sie es dann mit wabt in eine Binärdatei namens `add.wasm` (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als Nächstes werden wir unsere Binärdatei asynchron instanziieren (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und unsere `add`-Funktion in JavaScript ausführen (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([siehe es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Weitere Details zur Instanziierungsfunktion finden Sie auch bei [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

## Grundlagen erkunden

Nun, da wir die Grundlagen behandelt haben, werfen wir einen Blick auf einige fortgeschrittene Funktionen.

### Funktionen aus anderen Funktionen im selben Modul aufrufen

Die `call`-Anweisung ruft eine einzige Funktion auf, gegeben durch ihren Index oder Namen. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt den Wert `42` zurück, die andere gibt das Ergebnis, der ersten plus eins, zurück:

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
> `i32.const` definiert eine 32-Bit-Ganzzahl und schiebt sie auf den Stack. Sie können das `i32` durch jeden anderen verfügbaren Typ ersetzen und den Wert der Konstanten auf beliebigen ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel sehen Sie einen `(export "getAnswerPlus1")`-Abschnitt, der direkt nach dem `func`-Statement in der zweiten Funktion deklariert ist — dies ist eine Kurzform, um anzugeben, dass wir diese Funktion exportieren möchten, und den Namen anzugeben, unter dem wir sie exportieren möchten.

Dies ist funktional äquivalent dazu, eine separate Funktionsanweisung außerhalb der Funktion an anderer Stelle im Modul in derselben Weise wie zuvor einzuschließen, zum Beispiel:

```wat
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code zum Aufrufen unseres oben genannten Moduls sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Importieren von Funktionen aus JavaScript

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber was ist mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Methode, um Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Lassen Sie uns ein Beispiel ansehen:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log
  )
)
```

WebAssembly hat einen zweistufigen Namensraum, daher importiert die import-Anweisung hier die `log`-Funktion aus dem `console`-Modul. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mit der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Begriff von Signaturen, daher kann jede JavaScript-Funktion übergeben werden, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Der obige Import erfordert ein Objekt (wir nennen es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Dieses würde im JavaScript so aussehen:

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
> Sie können dieses Beispiel auf GitHub finden als [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html) ([siehe es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Globale Variablen in WebAssembly deklarieren

WebAssembly kann globale Variableninstanzen erstellen, die sowohl von JavaScript zugänglich und importierbar/exportierbar über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen hinweg sind. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es in etwa so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich zu dem aus, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` angeben und auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes angeben, wenn wir ihn veränderbar machen möchten.

Um einen äquivalenten Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen in Assemblierungscode arbeitet, sie zum [Stack](#stackmaschinen) hinzufügt, Operationen darauf ausführt und dann das Ergebnis durch Aufruf einer Methode in JavaScript protokolliert.

Für die Arbeit mit Strings und anderen komplexeren Datentypen verwenden wir `memory`, das entweder in WebAssembly oder JavaScript erstellt werden kann und zwischen den Umgebungen geteilt wird (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großes zusammenhängendes, veränderbares Array von Rohbytes, das im Laufe der Zeit wachsen kann (siehe [lineare Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stack und einem beliebigen Ort in einem Speicher.

Aus Sicht von JavaScript sieht es so aus, als ob der ganze Speicher in einem großen wachsendem {{jsxref("ArrayBuffer")}} ist.
JavaScript kann WebAssembly-Linearspeicher-Instanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und sie einer Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der ein `ArrayBuffer` zurückgibt, das auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch wachsen, zum Beispiel über die [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Methode in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in der WebAssembly.
Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` abgetrennt und ein neuer `ArrayBuffer` wird erstellt, um auf den neueren, größeren Speicher zu zeigen.

Beachten Sie, dass Sie beim Erstellen des Speichers die anfängliche Größe definieren müssen und optional die maximale Größe angeben können, auf die der Speicher wachsen kann.
WebAssembly wird versuchen, die maximale Größe zu reservieren (falls angegeben), und wenn es in der Lage ist, dies zu tun, kann es den Buffer effizienter in der Zukunft wachsen lassen. Selbst wenn es jetzt nicht die maximale Größe allokieren kann, könnte es trotzdem später in der Lage sein, zu wachsen.
Die Methode wird nur fehlschlagen, falls die _anfängliche_ Größe nicht allokiert werden kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Speicher](#mehrere_speicher) verwenden, wenn der Browser dies unterstützt.
> Code, der keine mehreren Speicher verwendet, muss sich nicht ändern!

Um einige dieser Verhaltensweisen zu demonstrieren, betrachten wir den Fall, in dem wir mit einem String in unserem WebAssembly-Code arbeiten möchten.
Ein String ist einfach eine Folge von Bytes irgendwo innerhalb dieses linearen Speichers.
Angenommen, wir haben einen geeigneten String von Bytes in den WebAssembly-Speicher geschrieben, können wir diesen String an JavaScript übergeben, indem wir den Speicher, den Offset des Strings innerhalb des Speichers und eine Angabe über seine Länge teilen.

Lassen Sie uns zuerst etwas Speicher erstellen und ihn zwischen dem WebAssembly und JavaScript teilen.
WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und den WebAssembly-Modul den Speicher importieren lassen, oder wir können den WebAssembly-Modul den Speicher erstellen und an JavaScript exportieren lassen.

Für dieses Beispiel werden wir den Speicher in JavaScript erstellen und dann in WebAssembly importieren.
Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu.
Wir instanziieren dann unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und übergeben das Importobjekt:

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

Der Speicher muss mit demselben zweistufigen Schlüssel importiert werden, der im `importObject` (`js.mem`) angegeben ist.
Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste importierte Speicher in das WebAssembly-Modul ist, hat er einen Speicherindex von `0`.
> Sie könnten auf diesen bestimmten Speicher im [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verweisen, aber da `0` der Standardindex ist, müssen Sie in Anwendungen mit nur einem Speicher den Index nicht spezifizieren.

Jetzt, da wir eine gemeinsam genutzte Speicherinstanz haben, ist der nächste Schritt, einen String von Daten darin zu schreiben.
Wir geben dann Informationen darüber, wo der String sich befindet und seine Länge an das JavaScript weiter (wir könnten alternativ die Länge des Strings kodieren, aber das Übergeben einer Länge ist einfacher für uns zu implementieren).

Lassen Sie uns zuerst einen String von Daten in unseren Speicher hinzufügen, in diesem Fall "Hi".
Da wir den gesamten linearen Speicher besitzen, können wir die Stringinhalte einfach global in den Speicher mit einem `data`-Abschnitt schreiben.
Datenabschnitte erlauben es, eine Zeichenkette von Bytes zum Zeitpunkt der Instanziierung zu einem gegebenen Offset zu schreiben, ähnlich wie `.data`-Abschnitte in nativen Ausführungsformaten.
Hier schreiben wir die Daten in den Standardspeicher (den wir nicht spezifizieren müssen) bei Offset 0:

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
Zuerst importieren wir eine Funktion aus JavaScript, die wir verwenden, um den String an die Konsole zu protokollieren.
Dies muss der `console.log` im `importObject` zugeordnet werden, das zur Instanzierung des WebAssembly-Moduls verwendet wird.
Die Funktion ist im WebAssembly als `$log` benannt und nimmt `i32`-Parameter für den Offset des Strings und die Länge im Speicher.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge des Strings im Speicher (`0` und `2`) auf.
Dies wird aus dem Modul exportiert, damit es von JavaScript aufgerufen werden kann.

Unser abschließendes WebAssembly-Modul (im Textformat) sieht so aus.

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

Auf der JavaScript-Seite müssen wir die Protokollierfunktion definieren, sie an das WebAssembly übergeben und dann die exportierte `writeHi()`-Methode aufrufen.
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

Beachten Sie, dass die Protokollierfunktion `consoleLogString()` an das `importObject` in der Eigenschaft `console.log` übergeben wird und vom WebAssembly-Modul importiert wird.
Die Funktion erstellt eine Ansicht des Strings im gemeinsamen Speicher mit einem `Uint8Array` an dem übergebenen Offset und mit der angegebenen Länge.
Die Bytes werden dann vom UTF-8 in einen String mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) dekodiert (wir geben `utf8` an, aber viele andere Kodierungen werden unterstützt).
Der String wird dann mit `console.log()` ins Protokoll geschrieben.

Der letzte Schritt ist, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Objekterstellung erfolgt.
Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi".

> [!NOTE]
> Sie können den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([auch live zu sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)) finden.

#### Mehrere Speicher

Neuere Implementierungen erlauben die Verwendung mehrerer Speicherobjekte in Ihrem WebAssembly und JavaScript, in einer Weise, die kompatibel mit Code ist, der für Implementierungen geschrieben wurde, die nur einen einzigen Speicher unterstützen.
Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden sollten als andere Anwendungsdaten, z. B. öffentliche vs. private Daten, Daten, die persistiert werden müssen, und Daten, die zwischen Threads geteilt werden müssen.
Es könnte auch nützlich sein für sehr große Anwendungen, die über den 32-Bit-Adressraum von Wasm hinaus skalieren müssen und für andere Zwecke.

Speicher, die für den WebAssembly-Code verfügbar gemacht werden, entweder direkt deklariert oder importiert, erhalten eine nullbasierte, sequentiell zugewiesene Speicherindexnummer.
Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf jeden bestimmten Speicher über seinen Index verweisen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wird.
Infolge dessen, wenn Sie nur einen Speicher hinzufügen, muss Ihr Code den Index nicht spezifizieren.

Um dies detaillierter zu erklären, erweitern wir das vorhergehende Beispiel, um Strings in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren.
Der untenstehende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, mit demselben Ansatz wie im vorhergehenden Beispiel.
Um zu zeigen, wie Sie den Speicher innerhalb des WebAssembly-Moduls erstellen können, haben wir eine dritte Speicherinstanz, `mem2`, im Modul erstellt und _exportiert_.

> [!NOTE]
> Wenn Sie [wabt](https://github.com/WebAssembly/wabt) (z. B. `wat2wasm`) verwenden, um das Textformat in Wasm zu konvertieren, müssen Sie möglicherweise `--enable-multi-memory` übergeben, da die Unterstützung für mehrere Speicher noch optional ist.

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
Der folgende Code zeigt, wie wir diesen Index (z. B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir einen String schreiben möchten (Sie können denselben Ansatz für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`).
Hier schreiben wir einen String, der den jeweiligen Speichertyp angibt.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass das `(memory 0)` der Standard ist und daher optional.
Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne den Speicherindex anzugeben, und dies sollte nach `"Memory 0 data"` angefügt werden, wenn die Speicherinhalte protokolliert werden.

Der WebAssembly-Protokollierungscode ist ähnlich dem vorhergehenden Beispiel, außer dass wir den Index des Speichers, der den String enthält, zusammen mit dem String-Offset und der Länge übergeben müssen.
Wir protokollieren auch alle drei Speicherinstanzen.

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

Der JavaScript-Code ist auch sehr ähnlich zum vorhergehenden Beispiel, außer dass wir zwei Speicherinstanzen für das `importObject()` erstellen und übergeben und der vom Modul exportierte Speicher nach der Instanziierung mit dem aufgelösten Versprechen (`obj.instance.exports`) zugegriffen wird.
Der Code, um jeden String zu protokollieren, ist auch etwas komplizierter, da wir die Speicherinstanznummer von WebAssembly einer bestimmten `Memory`-Objekt zuordnen müssen.

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

Die Ausgabe des Beispiels sollte dem untenstehenden Text ähneln, außer dass "Memory 1 data" einige nachlaufende "Schrottzeichen" haben kann, da der Textdecoder mehr Bytes übergeben werden als für die Kodierung des Strings verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([auch live zu sehen](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)) finden

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität für dieses Feature.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat zu beenden, betrachten wir den kompliziertesten und oft verwirrendsten Teil von WebAssembly: **Tabellen**. Tabellen sind im Grunde änderbare Arrays von Referenzen, auf die vom WebAssembly-Code per Index zugegriffen werden kann.

Um zu sehen, warum Tabellen benötigt werden, müssen wir beobachten, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Funktionen aus anderen Funktionen im selben Modul aufrufen](#funktionen_aus_anderen_funktionen_im_selben_modul_aufrufen)), einen statischen Funktionsindex verwendet und daher immer nur eine einzige Funktion aufrufen kann — aber was, wenn der Aufgerufene ein Laufzeitwert ist?

- In JavaScript sehen wir dies die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir dies mit Funktionszeigern.
- In C++ sehen wir dies mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufanweisung, um dies zu erreichen, also gaben wir ihm `call_indirect`, das einen dynamischen Funktionsoperator nimmt. Das Problem ist, dass die einzigen Typen, die wir derzeit für Operanden in WebAssembly geben können, `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen mit beliebigen Signaturen halten könnte), aber leider konnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Linearer Speicher exponiert die Rohinhalte von gespeicherten Werten als Bytes, daher könnte Wasm-Inhalt beliebig rohe Funktionsadressen beobachten und beschädigen, was im Web nicht erlaubt werden kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes, die nur i32-Werte sind, weiterzugeben. `call_indirect`'s Operand kann daher ein i32-Indexwert sein.

#### Eine Tabelle in Wasm definieren

Also, wie platzieren wir Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Abschnitte verwendet werden können, um Bereiche des linearen Speichers mit Bytes zu initialisieren, können `elem`-Abschnitte verwendet werden, um Bereiche von Tabellen mit Funktionen zu initialisieren:

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

- In `(table 2 funcref)`, ist die `2` die anfängliche Größe der Tabelle (was bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` deklariert, dass der Elementtyp dieser Referenzen Funktionsreferenz ist.
- Die Funktionen (`func`)-Abschnitte sind wie alle anderen deklarierten Wasm-Funktionen. Diese sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (zum Beispiel gibt jede eine konstante Zahl zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert werden, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und dennoch auf sie in Ihrem `elem`-Abschnitt verweisen.
- Der `elem`-Abschnitt kann jedes beliebige Teilset von Funktionen in einem Modul auflisten, in beliebiger Reihenfolge, was Duplikate erlaubt. Dies ist eine Liste der Funktionen, auf die die Tabelle verweist, in der Reihenfolge, in der auf sie verwiesen werden soll.
- Der `(i32.const 0)`-Wert innerhalb des `elem`-Abschnitts ist ein Offset — dies muss am Beginn des Abschnitts deklariert werden und gibt an, bei welchem Index in der Tabelle Funktionsreferenzen zu befüllen beginnen. Hier haben wir 0 angegeben und eine Größe von 2 (siehe oben), daher können wir zwei Referenzen bei den Indizes 0 und 1 befüllen. Wenn wir anfangen wollten, unsere Referenzen bei Offset 1 zu schreiben, müssten wir `(i32.const 1)` schreiben, und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten standardmäßig einen Fehler bei Aufrufwert.

Im JavaScript würden die äquivalenten Aufrufe, um eine solche Tabelleninstanz zu erstellen, so aussehen:

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

Weiter geht's, nun haben wir die Tabelle definiert, wir müssen sie irgendwie verwenden. Verwenden wir diesen Codeabschnitt, um dies zu tun:

```wat
...
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32)
)
```

- Der `(type $return_i32 (func (result i32)))`-Block spezifiziert einen Typ, mit einem Referenznamen. Dieser Typ wird verwendet, wenn die Typüberprüfung der Tabellenfunktionsreferenzaufrufe später durchgeführt wird. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese nimmt einen `i32` als Parameter an, der den Argumentnamen `$i` erhält.
- Innerhalb der Funktion fügen wir einen Wert zum Stack hinzu — welcher Wert als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen — es nimmt implizit den Wert von `$i` aus dem Stack. Das Nettoergebnis davon ist, dass die `callByIndex`-Funktion die `$i`-te Funktion in der Tabelle aufruft.

Sie könnten auch den `call_indirect`-Parameter explizit während des Befehlsaufrufs anstelle von davor deklarieren, wie folgt:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherstufigen, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (oder wahrscheinlich eher einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde in etwa so aussehen wie `tbl[i]()`.

Also, zurück zum Typcheck. Da WebAssembly typgeprüft ist und `funcref` potenziell jede Funktionssignatur haben kann, müssen wir die vermutete Signatur des Aufgerufenen an der Anrufstelle angeben. Daher fügen wir den `$return_i32`-Typ hinzu, um anzugeben, dass eine Funktion erwartet wird, die ein `i32` zurückgibt. Wenn die aufgerufene Funktion keine passende Signatur hat (z. B. ein `f32` zurückgegeben wird), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Was verbindet also das `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist und diese von `call_indirect` implizit aufgerufen wird. In der Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennzeichnung in irgendeiner Form angeben, etwa so:

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht so aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat)-Beispieldatei gefunden werden:

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

Wir laden es in eine Webseite mit dem folgenden JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden als [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([siehe es auch live auch](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> [!NOTE]
> Genau wie Speicher können Tabellen auch von JavaScript erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) und in ein anderes Wasm-Modul importiert und exportiert werden.

### Tabellen modifizieren und dynamisches Verlinken

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt von JavaScript mit den Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) verändert werden. Und WebAssembly-Code ist selbst in der Lage, Tabellen mit den als Teil der [Referenztypen](#referenztypen) hinzugefügten Anweisungen wie `table.get` und `table.set` zu manipulieren.

Da Tabellen veränderlich sind, können sie verwendet werden, um raffinierte Lade- und Laufzeitschemata für [dynamisches Verlinken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verlinkt ist, teilen mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies ist ähnlich wie eine native Anwendung, bei der mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einziges Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dasselbe Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Aufrufe.

Unsere `.wat`-Beispiele sehen so aus:

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
2. Diese Funktion erstellt eine Konstante, die den Wert `0` enthält, und verwendet dann den `i32.load`-Befehl, um den Wert zu laden, der im bereitgestellten Speicherindex gespeichert ist. Der bereitgestellte Index ist `0` — es poppt wieder implizit den vorherigen Wert aus dem Stack. Also lädt `shared0func` und gibt den im Speicherindex `0` gespeicherten Wert zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten, die die Werte `0` und `42` enthalten, und ruft dann `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Wieder poppt sie diese Werte implizit aus dem Stack, sodass das Ergebnis ist, dass es den Wert `42` im Speicherindex `0` speichert,
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0` und rufen dann die Funktion am Index 0 der Tabelle auf, die `shared0func` ist, die zuvor durch den `elem`-Block in `shared0.wat` dort gespeichert wurde.
5. Wenn aufgerufen, lädt `shared0func` die `42`, die wir im Speicher mit dem `i32.store`-Befehl in `shared1.wat` gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke poppen die Werte aus dem Stack wieder implizit, aber Sie könnten sie explizit innerhalb der Befehlsaufrufe anstelle angeben, zum Beispiel:
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nach dem Umwandeln in ein WebAssembly-Binärformat (Wasm), verwenden wir `shared0.wasm` und `shared1.wasm` in JavaScript via den folgenden Code:

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

Jedes der Module, die kompiliert werden, kann dieselben Memory- und Table-Objekte importieren und damit den gleichen linearen Speicher und Tabellenspeicherort teilen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([siehe es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Massenoperationen im Speicher

Massenoperationen im Speicher sind eine neuere Ergänzung zur Sprache. Sieben neue eingebaute Operationen werden für Massen-Speicheroperationen wie Kopieren und Initialisieren bereitgestellt, um es WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` auf eine effizientere, performantere Weise zu modellieren.

> [!NOTE]
> Informationen zur Browserkompatibilität finden Sie unter [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations).

Die neuen Operationen sind:

- `data.drop`: Verwirft die Daten in einem Datensegment.
- `elem.drop`: Verwirft die Daten in einem Element-Segment.
- `memory.copy`: Kopiert von einem Bereich des linearen Speichers in einen anderen.
- `memory.fill`: Füllt einen Bereich des linearen Speichers mit einem gegebenen Bytewert.
- `memory.init`: Kopiert einen Bereich aus einem Datensegment.
- `table.copy`: Kopiert von einem Bereich einer Tabelle in einen anderen.
- `table.init`: Kopiert einen Bereich aus einem Elementsegment.

> [!NOTE]
> Weitere Informationen finden Sie im Vorschlag [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

### Vektortypen

- `v128`: 128-Bit-Vektor von gepackten Ganzzahlen, Gleitkommadaten oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Referenztypenvorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptfunktionen:

- Ein neuer Typ, `externref`, der _jede_ Art von JavaScript-Wert halten kann, z. B. Strings, DOM-Referenzen, Objekte etc. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann diese Werte nicht aufrufen oder manipulieren und kann sie stattdessen nur empfangen und ausgeben. Dies ist jedoch sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs etc. aufrufen zu lassen und generell den Weg für eine einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Wertetypen und Tabellenelemente verwendet werden.
- Mehrere neue Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält einige nützliche Informationen darüber, wie man `externref` in Rust verwenden kann.

> [!NOTE]
> Informationen zur Browserkompatibilität finden Sie unter [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types).

## Multi-Value WebAssembly

Eine weitere neuere Ergänzung zur Sprache ist WebAssembly Multi-Value, was bedeutet, dass WebAssembly-Funktionen nun mehrere Werte zurückgeben können und Anweisungssequenzen mehrere Stapelwerte konsumieren und erzeugen können.

> [!NOTE]
> Informationen zur Browserkompatibilität finden Sie unter [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value).

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dies in einem frühen Stadium, und die einzigen verfügbaren Multi-Value-Anweisungen sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Dies wird jedoch den Weg für nützlichere Anweisungstypen ebnen, und andere Dinge nebenbei. Für eine nützliche Zusammenfassung des bisherigen Fortschritts und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen es, WebAssembly-Speicherobjekte über mehrere WebAssembly-Instanzen, die in separaten Web-Workern laufen, gemeinsam zu nutzen, auf die gleiche Weise wie [`SharedArrayBuffer`]s(/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht schnelle Kommunikation zwischen Workern und erhebliche Leistungsgewinne in Webanwendungen.

Der Thread-Vorschlag hat zwei Teile: gemeinsam genutzte Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Informationen zur Browserkompatibilität finden Sie unter [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics).

### Gemeinsame Speicher

Wie oben beschrieben, können Sie gemeinsam genutzte WebAssembly-[`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite verfügt das Initialisierungsobjekt des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)-Konstruktors jetzt über eine `shared`-Eigenschaft, die, wenn sie auf `true` gesetzt wird, einen gemeinsamen Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des Speichers wird jetzt einen `SharedArrayBuffer` zurückgeben, anstelle des gewöhnlichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen gemeinsamen Speicher mit dem `shared`-Schlüsselwort erstellen, wie folgt:

```wat
(memory 1 2 shared)
```

Anders als nicht freigegebene Speicher müssen freigegebene Speicher eine "maximale" Größe sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat festlegen.

> [!NOTE]
> Sie können viele weitere Details im [Threading Proposal für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md) finden.

### Atomare Speicherzugriffe

Mehrere neue Wasm-Anweisungen wurden hinzugefügt, die verwendet werden können, um höherstufige Funktionen wie Mutexe, Bedingungsvariablen etc. zu implementieren. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads Support Seite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neue Funktionalität von Emscripten ausnutzt.

## Zusammenfassung

Damit endet unsere tour auf hohem Niveau durch die wesentlichen Elemente des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API reflektiert werden.

## Siehe auch

- Der Hauptpunkt, der nicht enthalten war, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern auftreten können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Spec-Interpreter implementiert wird.
