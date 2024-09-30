---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Understanding_the_text_format
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Um WebAssembly für Menschen lesbar und editierbar zu machen, gibt es eine textuelle Darstellung des Wasm-Binärformats. Dies ist eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen im Browser usw. sichtbar gemacht werden soll. Dieser Artikel erklärt, wie dieses Textformat funktioniert, in Bezug auf die rohe Syntax und wie es mit dem zugrunde liegenden Bytecode zusammenhängt, den es repräsentiert — sowie die Wrapper-Objekte, die Wasm in JavaScript repräsentieren.

> [!NOTE]
> Dies ist möglicherweise übertrieben, wenn Sie ein Webentwickler sind, der einfach ein Wasm-Modul in eine Seite laden und es in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie z.B. Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren, oder Ihren eigenen WebAssembly-Compiler erstellen möchten.

## S-Ausdrücke

In sowohl binären als auch textuellen Formaten ist die grundlegende Einheit von Code in WebAssembly ein Modul. Im Textformat wird ein Modul als ein großes S-Ausdruck dargestellt. S-Ausdrücke sind eine sehr alte und sehr einfache Textform zur Darstellung von Bäumen, und daher können wir ein Modul als einen Baum von Knoten betrachten, der die Struktur des Moduls und seinen Code beschreibt. Im Gegensatz zum abstrakten Syntaxbaum einer Programmiersprache ist der Baum von WebAssembly jedoch ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Beginnen wir damit, wie ein S-Ausdruck aussieht. Jeder Knoten im Baum geht in ein Paar von Klammern — `( ... )`. Das erste Label innerhalb der Klammern sagt Ihnen, welche Art von Knoten es ist, und danach gibt es eine durch Leerzeichen getrennte Liste von entweder Attributen oder Kindknoten. Das bedeutet also, dass der WebAssembly S-Ausdruck:

```wasm
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kindknoten darstellt, einen "memory"-Knoten mit dem Attribut "1" und einen "func"-Knoten. Wir werden gleich sehen, was diese Knoten tatsächlich bedeuten.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wasm
(module)
```

Dieses Modul ist völlig leer, aber dennoch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binärdateien umwandeln (siehe [Umwandlung von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [Binärformat](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben ist:

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionalität zu Ihrem Modul

Ok, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die die folgende Pseudocodestruktur haben:

```wasm
( func <signature> <locals> <body> )
```

- Die **Signatur** deklariert, was die Funktion nimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Lokalen** sind wie Variablen in JavaScript, jedoch mit explizit deklarierten Typen.
- Der **Körper** ist nur eine lineare Liste von Low-Level-Anweisungen.

Dies ist also ähnlich wie Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es ein S-Ausdruck ist.

## Signaturen und Parameter

Die Signatur ist eine Folge von Parametertypdeklarationen, gefolgt von einer Liste von Rückgabetypdeklarationen. Es ist hier erwähnenswert, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es maximal 1 Rückgabetyp geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/master/proposals/multi-value/Overview.md), sodass es beliebig viele geben kann.

Jeder Parameter hat einen explizit deklarierten Typ; Wasm [Zahlentypen](#zahlentypen), [Referenztypen](#referenztypen), [Vektortypen](#vektortypen).
Die Zahlentypen sind:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

Ein einzelner Parameter wird als `(param i32)` und der Rückgabetyp als `(result i32)` geschrieben. Eine binäre Funktion, die zwei 32-Bit-Ganzzahlen nimmt und eine 64-Bit-Gleitkommazahl zurückgibt, wäre wie folgt geschrieben:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die Lokalen mit ihrem Typ aufgelistet, z.B. `(local i32)`. Parameter sind im Grunde nur Lokale, die mit dem Wert des entsprechenden von dem Aufrufer übergebenen Arguments initialisiert werden.

## Abrufen und Setzen von Lokalen und Parametern

Lokale/Parameter können vom Körper der Funktion mit den Anweisungen `local.get` und `local.set` gelesen und geschrieben werden.

Die `local.get`/`local.set`-Befehle beziehen sich auf das abzurufende/zu setzende Element durch seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration referenziert, gefolgt von Lokalen in der Reihenfolge ihrer Deklaration. Angenommen die folgende Funktion:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Die Anweisung `local.get 0` würde den i32-Parameter abrufen, `local.get 1` würde den f32-Parameter abrufen und `local.get 2` würde das f64-Lokal abrufen.

Hier gibt es ein weiteres Problem — die Verwendung von nummerischen Indizes zur Referenzierung von Elementen kann verwirrend und ärgerlich sein, daher erlaubt es das Textformat, Parameter, Lokale und die meisten anderen Elemente zu benennen, indem ein Name mit einem Dollar-Symbol (`$`) direkt vor der Typdeklaration eingefügt wird.

Daher könnten Sie unsere vorherige Signatur so umschreiben:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und dann könnten Sie `local.get $p1` anstelle von `local.get 0` schreiben, etc. (Beachten Sie jedoch, dass beim Konvertieren dieses Textes ins Binäre nur die ganze Zahl gespeichert wird.)

## Stackmaschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine Sache sprechen: **Stackmaschinen**. Obwohl der Browser es zu etwas effizienterem kompiliert, wird die Ausführung von Wasm in Bezug auf eine Stackmaschine definiert, bei der die grundlegende Idee ist, dass jeder Anweisungstyp eine gewisse Anzahl von `i32`/`i64`/`f32`/`f64`-Werten zu/von einem Stack drückt und/oder ausstößt.

Zum Beispiel ist `local.get` so definiert, dass es den Wert des gelesenen Lokals auf den Stack schiebt, und `i32.add` stößt zwei `i32`-Werte aus (es greift implizit auf die vorherigen beiden Werte zu, die auf den Stack geschoben wurden), berechnet ihre Summe (modulo 2^32) und schiebt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stack, der allmählich gefüllt und geleert wird, während die Anweisungen des Körpers ausgeführt werden. So enthält der Stack nach Ausführung der folgenden Funktion beispielsweise genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` verarbeitet wird. Der Rückgabewert einer Funktion ist einfach der letzte Wert, der auf dem Stack verbleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stack exakt übereinstimmt: wenn Sie einen `(result f32)` deklarieren, muss am Ende des Funktionstyps genau ein `f32` vorhanden sein. Wenn es keinen Rückgabetyp gibt, muss der Stack leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Zusammengesetzt mit dem, was wir bereits gelernt haben, können wir schließlich ein Modul mit unserer eigenen einfachen Funktion definieren:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie zusammen und gibt das Ergebnis zurück.

Es gibt viele weitere Dinge, die in Funktionskörper eingefügt werden können, aber wir fangen jetzt einfach an, und Sie werden viele weitere Beispiele sehen, während Sie weitermachen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [Semantics-Referenz auf webassembly.org](https://webassembly.github.io/spec/core/exec/index.html).

### Aufrufen der Funktion

Unsere Funktion wird nicht viel alleine tun — jetzt müssen wir sie aufrufen. Wie machen wir das? Wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Lokale werden Funktionen standardmäßig durch einen Index identifiziert, können jedoch zur Bequemlichkeit benannt werden. Beginnen wir damit — zuerst fügen wir einen mit einem Dollarzeichen versehenen Namen unmittelbar nach dem `func`-Schlüsselwort hinzu:

```wasm
(func $add …)
```

Nun müssen wir eine Exportdeklaration hinzufügen — das sieht folgendermaßen aus:

```wasm
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` wählt, welche WebAssembly-Funktion innerhalb des Moduls exportiert wird.

Unser finales Modul (vorerst) sieht so aus:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie das Beispiel nachverfolgen möchten, speichern Sie unser Modul in einer Datei namens `add.wat`, und konvertieren Sie es dann mit wabt in eine Binärdatei namens `add.wasm` (siehe [Umwandlung von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm) für Details).

Als nächstes instanziieren wir unsere Binärdatei asynchron (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running)) und führen unsere `add`-Funktion in JavaScript aus (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) finden ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Sehen Sie auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) für weitere Details zur Instantiate-Funktion.

## Grundlagen erkunden

Jetzt, da wir die wirklichen Grundlagen abgedeckt haben, lassen Sie uns einige fortgeschrittenere Funktionen betrachten.

### Aufrufen von Funktionen aus anderen Funktionen im selben Modul

Die `call`-Anweisung ruft eine einzelne Funktion auf, die durch ihren Index oder Namen angegeben ist. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis zurück, wenn die erste Funktion aufgerufen wird, plus eins:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach eine 32-Bit-Ganzzahl und schiebt sie auf den Stack. Sie könnten das `i32` gegen jeden der anderen verfügbaren Typen austauschen und den Wert der Konstante nach Belieben ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel werden Sie einen `(export "getAnswerPlus1")`-Abschnitt bemerken, der direkt nach der `func`-Anweisung in der zweiten Funktion deklariert ist — dies ist eine abgekürzte Möglichkeit, anzugeben, dass wir diese Funktion exportieren möchten, und den Namen, unter dem wir sie exportieren möchten.

Dies ist funktional gleichwertig mit dem Einfügen einer separaten Funktionsanweisung außerhalb der Funktion an anderer Stelle im Modul in derselben Weise, wie wir es zuvor getan haben, z.B.:

```wasm
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code zum Aufrufen unseres obigen Moduls sieht folgendermaßen aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Importieren von Funktionen aus JavaScript

Wir haben bereits gesehen, wie JavaScript WebAssembly-Funktionen aufruft, aber was ist mit WebAssembly, das JavaScript-Funktionen aufruft? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat einen allgemeinen Weg, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zweistufigen Namensraum, sodass die Importanweisung hier besagt, dass wir fragen, ob wir die `log`-Funktion aus dem `console`-Modul importieren. Außerdem können Sie sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mit der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind wie normale Funktionen: sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und sie erhalten einen Index und können benannt und aufgerufen werden.

JavaScript-Funktionen haben keine Vorstellung von Signaturen, daher kann jede JavaScript-Funktion übergeben werden, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import erklärt, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Für das obige Beispiel benötigen wir ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Das sieht folgendermaßen aus:

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

### Deklarieren von Globalen in WebAssembly

WebAssembly hat die Fähigkeit, globale Instanzen zu erstellen, die sowohl von JavaScript aus zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar sind. Dies ist sehr nützlich, da es das dynamische Verlinken mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es so aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repo; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich zu dem aus, was wir zuvor gesehen haben, außer dass wir einen globalen Wert mit dem Schlüsselwort `global` spezifizieren und wir auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes spezifizieren, wenn wir es mutierbar machen wollen.

Um einen äquivalenten Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen in Assembly-Code arbeitet, sie an den [Stack](#stackmaschinen) hinzufügt, Operationen an ihnen durchführt und das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Um mit Zeichenketten und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder im WebAssembly oder JavaScript erstellt und zwischen Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` nur ein großer zusammenhängender, veränderbarer Bereich von Rohbytes, der im Laufe der Zeit wachsen kann (siehe [Linearer Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stack und jedem Ort in einem Speicher.

Aus Sicht von JavaScript ist es so, als ob der gesamte Speicher in einem großen wachstumsfähigen {{jsxref("ArrayBuffer")}} wäre. JavaScript kann WebAssembly-Linearspeicherinstanzen über das [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Interface erstellen und sie an eine Speicherinstanz exportieren oder auf eine innerhalb des WebAssembly-Codes erstellte und exportierte Speicherinstanz zugreifen. JavaScript-`Memory`-Instanzen haben einen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten Linearspeicher zeigt.

Speicherinstanzen können ebenfalls wachsen, zum Beispiel über die Methode [`Memory.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in WebAssembly. Da `ArrayBuffer`-Objekte ihre Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, der auf den neueren, größeren Speicher zeigt.

Beachten Sie, dass, wenn Sie den Speicher erstellen, Sie die Anfangsgröße definieren müssen und optional die maximale Größe angeben können, auf die der Speicher wachsen kann. WebAssembly wird versuchen, die maximale Größe (falls angegeben) zu reservieren, und wenn es dies tun kann, kann es den Puffer zukünftig effizienter wachsen lassen. Selbst wenn es die maximale Größe jetzt nicht reservieren kann, könnte es dennoch in der Lage sein, später zu wachsen. Die Methode schlägt nur fehl, wenn sie die _anfängliche_ Größe nicht reservieren kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstanz.
> Sie können jetzt [mehrere Memories](#mehrere_memories) verwenden, wenn der Browser dies unterstützt.
> Code, der keine mehreren Memories verwendet, muss sich nicht ändern!

Um einige dieser Verhaltensweisen zu demonstrieren, betrachten wir den Fall, in dem wir mit einer Zeichenkette in unserem WebAssembly-Code arbeiten möchten. Eine Zeichenkette ist nur eine Sequenz von Bytes irgendwo in diesem linearen Speicher. Angenommen, wir haben eine geeignete Zeichenkette von Bytes in den WebAssembly-Speicher geschrieben, können wir diese Zeichenkette an JavaScript übergeben, indem wir den Speicher, das Offset der Zeichenkette innerhalb des Speichers und eine Möglichkeit, die Länge anzugeben, teilen.

Erstens erstellen wir ein wenig Speicher und teilen ihn zwischen dem WebAssembly und JavaScript. WebAssembly gibt uns hier viel Flexibilität: wir können entweder ein [`Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und das WebAssembly-Modul es importieren lassen, oder wir können das WebAssembly-Modul den Speicher erstellen und an JavaScript exportieren lassen.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly. Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es zu unserem `importObject` unter dem Schlüssel `js.mem` hinzu. Dann instanziieren wir unser Web-Assembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) und übergeben das Importobjekt:

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

Innerhalb unserer WebAssembly-Datei importieren wir diesen Speicher. Im WebAssembly-Textformat sieht die `import`-Anweisung folgendermaßen aus:

```wasm
(import "js" "mem" (memory 1))
```

Der Speicher muss unter Verwendung desselben zweistufigen Schlüssels importiert werden, das in dem `importObject` angegeben ist (`js.mem`). Die `1` gibt an, dass der importierte Speicher mindestens 1 Seite haben muss (WebAssembly definiert derzeit eine Seite als 64 KB).

> [!NOTE]
> Da dies der erste Speicher ist, der in das WebAssembly-Modul importiert wird, hat er einen Speicherindex von "0".
> Sie könnten speziell auf diesen Speicher mit dem Index in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verweisen, jedoch da 0 der Standardindex ist, benötigen Sie das in Anwendungen mit nur einem Speicher nicht.

Nachdem wir eine geteilte Speicherinstanz haben, ist der nächste Schritt, eine Zeichenkette mit Daten darin zu schreiben. Dann übergeben wir Informationen darüber, wo sich die Zeichenkette befindet und deren Länge an JavaScript (wir könnten alternativ die Länge der Zeichenkette in die Zeichenkette selbst kodieren, aber die Übergabe einer Länge ist für uns einfacher zu implementieren).

Zuerst fügen wir eine Zeichenkette von Daten zu unserem Speicher hinzu, in diesem Fall "Hi". Da wir den gesamten Linearspeicher besitzen, können wir den Inhalt der Zeichenkette einfach mit einem `data`-Abschnitt in den globalen Speicher schreiben. Datenabschnitte erlauben das Schreiben einer Zeichenfolge von Bytes an einen bestimmten Offset zur Initialisierungszeit und sind ähnlich wie die `.data`-Abschnitte in nativen ausführbaren Formaten. Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) an Offset 0:

```wasm
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die Syntax mit Doppelstrichpunkten (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzugeben. In diesem Fall verwenden wir sie einfach, um Platzhalter für anderen Code anzuzeigen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen. Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden werden, um die Zeichenkette in der Konsole zu protokollieren. Diese muss mit `console.log` im `importObject` auf den Import des WebAssembly-Moduls abgebildet werden. Die Funktion wird `$log` im WebAssembly genannt und nimmt `i32` Parameter für das Offset der Zeichenkette und die Länge im Speicher.

Die zweite Funktion in WebAssembly, `writeHi()`, ruft die importierte `$log`-Funktion mit dem Offset und der Länge der Zeichenkette im Speicher (`0` und `2`) auf. Diese wird aus dem Modul exportiert, sodass sie von JavaScript aufgerufen werden kann.

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

Auf der JavaScript-Seite müssen wir die Protokollierungsfunktion definieren, sie an das WebAssembly übergeben und dann die exportierte `writeHi()`-Methode aufrufen. Der vollständige Code wird unten gezeigt:

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()`  an die Eigenschaft `console.log` im `importObject` übergeben wird und vom WebAssembly-Modul importiert wird. Die Funktion erstellt eine Ansicht auf der Zeichenkette im geteilten Speicher unter Verwendung eines `Uint8Array` am angegebenen Offset und mit der angegebenen Länge. Die Bytes werden dann von UTF-8 in eine Zeichenkette mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) dekodiert (wir geben hier `utf8` an, aber viele andere Kodierungen werden unterstützt). Die Zeichenkette wird dann mit `console.log()` in der Konsole protokolliert.

Der letzte Schritt ist das Aufrufen der exportierten `writeHi()`-Funktion, was nach der Instanziierung des Objekts erfolgt. Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi".

> [!NOTE]
> Die vollständigen Quellen finden Sie auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Memories

Neuere Implementierungen erlauben es Ihnen, mehrere Memory-Objekte in Ihrer WebAssembly und JavaScript zu verwenden, auf eine Art und Weise, die mit Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur eine einzelne Memory unterstützen. Mehrere Memories können nützlich sein, um Daten zu trennen, die anders behandelt werden sollten als andere Anwendungsdaten, wie öffentliche vs. private Daten, Daten, die persistent bleiben müssen, und Daten, die zwischen Threads geteilt werden müssen. Es kann auch nützlich sein für sehr große Anwendungen, die über den Wasm-32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Memories, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine nullbasierte sequenzielle Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können einen bestimmten Memory über seinen Index referenzieren, damit Sie steuern können, welcher Memory bearbeitet wird.

Die Speicheranweisungen haben einen Standard-Index von 0, den Index des ersten Speichers, der zur WebAssembly-Instanz hinzugefügt wurde. Als Ergebnis, wenn Sie nur einen Speicher hinzufügen, muss Ihr Code den Index nicht angeben.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen zu drei verschiedenen Memories zu schreiben und die Ergebnisse zu protokollieren. Der untenstehende Code zeigt, wie wir zuerst zwei Memory-Instanzen importieren, unter Verwendung derselben Methode wie im vorherigen Beispiel. Um zu zeigen, wie man einen Speicher innerhalb des WebAssembly-Moduls erstellt, haben wir hier instanziieren wir drei Memories: Zwei importieren wir und eines erstellen wir im Modul selbst.

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

Die drei Memories bekommen automatisch eine aufsteigende Nummer. Die folgende Code zeigt, wie wir diesen Index (z.B. `(memory 1)`) in der `data`-Anweisung angeben können, um festzulegen, in welchen Speicher wir eine Zeichenfolge schreiben wollen (sie können die gleiche Methode für alle anderen Speicheranweisungen verwenden, wie `load` und `grow`). Hier schreiben wir eine Zeichenfolge, die den Speichertyp angibt.

```wasm
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass die Angabe `(memory 0)` Standard ist und daher optional ist. Um dies zu demonstrieren, schreiben wir den Text `" (Default)"` ohne den Speicherindex anzugeben, und dieser sollte nach `"Memory 0 data"` angehängt werden, wenn die Inhalte des Speichers protokolliert werden.

Der WebAssembly-Protokollierungscode ist fast gleich wie im vorherigen Beispiel, mit der Ausnahme, dass zusammen mit dem Offset und der Länge der Zeichenkette, wir den Index des Speichers, der die Zeichenkette enthält, übergeben müssen. Wir protokollieren auch alle drei Speicherinstanzen.

Das vollständige Modul sieht wie folgt aus und kann in unserem Beispiel für [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) gefunden werden:

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

Der JavaScript-Code ist ebenfalls sehr ähnlich wie im vorherigen Beispiel, mit der Ausnahme, dass wir zwei Speicherinstanzen an `importObject()` übergeben und der vom Modul instanziierte und exportierte Speicher nach der Auflösung des Versprechens (`obj.instance.exports`) zugegriffen wird. Der Code zum Protokollieren jeder Zeichenfolge ist ebenfalls etwas komplizierter, da wir den Speicherinstanz-Nummer aus der WebAssembly an ein bestimmtes `Memory`-Objekt anpassen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich dem untenstehenden Text sein, außer dass "Memory 1 data" möglicherweise einige nachfolgende "verrauschte Zeichen" enthält, da der Textdecoder mehr Bytes übergeben bekommt, als zum Kodieren der Zeichenfolge verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Den vollständigen Code finden Sie auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)).

> [!NOTE]
> Siehe [`webassembly.multimemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität für dieses Feature.

### WebAssembly-Tabellen

Um diese Tour durch das WebAssembly-Textformat zu beenden, schauen wir uns den komplexesten und oft verwirrenden Teil von WebAssembly an: **Tabellen**. Tabellen sind im Wesentlichen veränderbare Arrays von Referenzen, die über den Index vom WebAssembly-Code zugegriffen werden können.

Um zu verstehen, warum Tabellen benötigt werden, müssen wir zuerst feststellen, dass die `call`-Anweisung, die wir bereits gesehen haben (siehe [Aufrufen von Funktionen aus anderen Funktionen im selben Modul](#aufrufen_von_funktionen_aus_anderen_funktionen_im_selben_modul)), einen statischen Funktionsindex nimmt und somit nur jemals eine Funktion aufrufen kann — aber was, wenn der Aufgerufene zur Laufzeit ein Wert ist?

- In JavaScript sehen wir das die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir das mit Funktionszeigern.
- In C++ sehen wir das mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufanweisung, um dies zu erreichen, also haben wir `call_indirect` hinzugefügt, das einen dynamischen Funktionsoperand nimmt. Das Problem ist, dass die einzigen Typen, die wir derzeit für Operanden in WebAssembly haben, `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ ("any", weil der Typ Funktionen mit beliebiger Signatur halten könnte) hinzufügen, aber leider könnte Dieser `anyfunc`-Typ nicht im Linearspeicher gespeichert werden, aus Sicherheitsgründen. Der Linearspeicher gibt den rohen Inhalt von gespeicherten Werten in Bytes wieder und müsste Wasm-Inhalte erlauben, beliebig auf rohe Funktionsadressen zuzugreifen und sie zu beschädigen, was nicht auf dem Web erlaubt werden kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und Tabell-indizes anstelle dieser als `i32`-Werte weiterzugeben. `call_indirect`'s Operand kann daher ein `i32`-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Wie platzieren wir dann Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Abschnitte verwendet werden können, um Regionen des Linearspeichers mit Bytes zu initialisieren, können `elem`-Abschnitte verwendet werden, um Regionen von Tabellen mit Funktionen zu initiieren:

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

- Bei `(table 2 funcref)` ist die 2 die anfängliche Größe der Tabelle (das bedeutet, dass sie zwei Referenzen speichert) und `funcref` deklariert, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die Funktionen (`func`) in den Abschnitten sind wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (beispielsweise gibt jede Konstante einen Wert zurück). Beachten Sie, dass es hier keine Rolle spielt, in welcher Reihenfolge die Abschnitte deklariert sind - Sie können Ihre Funktionen überall erklären und trotzdem in Ihrem `elem`-Abschnitt darauf verweisen.
- Der `elem`-Abschnitt kann jedes Teilset von Funktionen in einem Modul auflisten, in jeder gewünschten Reihenfolge, was Duplikate erlaubt. Dies ist eine Liste der Funktionen, die von der Tabelle referenziert werden sollen, und zwar in der Reihenfolge, in der sie referenziert werden sollen.
- Der `(i32.const 0)` Wert innerhalb des `elem` Abschnitts ist ein Offset — er muss zu Beginn des Abschnitts deklariert werden und gibt an, bei welchem Index in der Tabelle Funktionsreferenzen beginnen, aufgebaut zu werden. Hier haben wir 0 spezifiziert und eine Größe von 2, also können wir zwei Referenzen an den Indizes 0 und 1 füllen. Wenn wir unsere Referenzen beim Offset 1 beginnen wollten zu schreiben, müssten wir `(i32.const 1)` schreiben und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standard-Wert, der bei Aufruf eine Ausnahme wirft.

In JavaScript hätten die entsprechenden Aufrufe zur Erstellung einer solchen Tabelleninstanz folgendermaßen ausgesehen:

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

Nun, da wir unsere Tabelle definiert haben, müssen wir sie irgendwie verwenden. Verwenden wir diesen Abschnitt des Codes, um dies zu tun:

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der `(type $return_i32 (func (result i32)))` Block spezifiziert einen Typ, mit einem Referenznamen. Dieser Typ wird bei der Typüberprüfung von Funktionsreferenzaufrufen aus der Tabelle verwendet. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese nimmt einen `i32` als Parameter, der mit dem Argument `$i` angegeben wird.
- Innerhalb der Funktion fügen wir einen Wert zum Stack hinzu — jeden Wert, der als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion aus der Tabelle aufzurufen - sie poppt implizit den `$i`-Wert vom Stack. Das Gesamtergebnis dieser Operation ist, dass die `callByIndex`-Funktion die `$i`te Funktion in der Tabelle aufruft.

Sie könnten auch den `call_indirect`-Parameter explizit während des Befehlaufrufs anstatt davor deklarieren, so:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

In einer höher gestellten, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich vorstellen, dass die gleiche Sache mit einem Array (oder wahrscheinlich eher einem Objekt) durchgeführt wird, das Funktionen enthält, Das Pseudocode sähe in etwa so aus wie `tbl[i]()`.

Gehen wir über die Typprüfung. Da WebAssembly typgeprüft ist und das `funcref` potenziell jede Funktionssignatur sein kann, müssen wir die vermutete Signatur des Aufgerufenen am Aufrufsort angeben, daher fügen wir den `$return_i32`-Typ hinzu, um dem Programm mitzuteilen, dass eine Funktion erwartet wird, die ein `i32` zurückgibt. Wenn der Aufgerufene keine passende Signatur hat (wenn beispielsweise ein `f32` stattdessen zurückgegeben wird), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError) geworfen.

Wie verknüpft sich also der `call_indirect` mit der Tabelle, die wir anrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist, und das ist genau die, auf die `call_indirect` implizit aufruft. In der Zukunft, wenn mehrere Tabellen erlaubt sind, würden wir auch eine Art Tabellenbezeichner benötigen, in etwa so:

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht zusammengefasst folgendermaßen aus und kann in unserem [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) Beispielprogramm gefunden werden:

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

Wenden Sie es in einer Webseite mit dem folgenden JavaScript an:

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
> Genau wie Memory können auch Tabellen von JavaScript aus erstellt werden (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)) ebenso wie importiert oder aus einem anderen Wasm-Modul.

### Tabellen mutieren und dynamisches Linken

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt von JavaScript mit den Methoden [`grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set) verändert werden. Und der WebAssembly-Code selbst kann Tabellen mit Anweisungen manipulieren, die als Teil von [Referenztypen](#referenztypen) hinzugefügt wurden, wie `table.get` und `table.set`.

Da Tabellen mutierbar sind, können sie verwendet werden, um komplexe Ladeschemata zur Laufzeit und zur zeitgenauen [dynamischen Verlinkung](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verlinkt wird, teilen sich mehrere Instanzen denselben Memory und Tabelle. Dies entspricht einem nativen Anwendungsprogramm, bei dem mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einziges Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält und dieses Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) Aufrufe übergeben wird.

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

1. Die Funktion `shared0func` ist definiert in `shared0.wat` und wird in unsere importierte Tabelle gelegt.
2. Diese Funktion erstellt eine Konstant, die den Wert `0` enthält und verwendet dann den `i32.load` Befehl, um den in dem bereitgestellten Memory-Index gespeicherten Wert zu laden. Der bereitgestellte Index ist `0` — wiederum poppt es den vorherigen Wert implizit vom Stack. So lädt `shared0func` den in Memory-Index `0` gespeicherten Wert und gibt ihn zurück.
3. In `shared1.wat` exportieren wir eine Funktion namens `doIt` — diese Funktion erstellt zwei Konstanten, die die Werte `0` und `42` enthalten und ruft dann `i32.store` auf, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Memorys zu speichern. Wiederum poppt es diese Werte implizit vom Stack, sodass das Ergebnis ist, dass es den Wert `42` in Memory-Index `0` speichert.
4. Im letzten Teil der Funktion erstellen wir eine Konstant mit dem Wert `0`, dann rufen wir die Funktion an diesem Index 0 der Tabelle auf, welche `shared0func` ist und zuvor durch den `elem`-Block in `shared0.wat` dort gespeichert wurde.
5. Wenn aufgerufen, lädt `shared0func` den `42`, den wir in Memory mit dem `i32.store` Befehl in `shared1.wat` speicherten.

> [!NOTE]
> Die obigen Ausdrücke poppen Werte implizit vom Stack, aber Sie könnten diese auch explizit innerhalb der Befehlsaufrufe deklarieren, zum Beispiel:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Nachdem Sie in Assembly umgewandelt haben, verwenden wir dann `shared0.wasm` und `shared1.wasm` in JavaScript über folgenden Code:

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

Jede der zu kompilierenden Module kann dieselben Memory- und Table-Objekte importieren und sich so denselben Linearspeicher und Tabellen-"Addressraum" teilen.

> [!NOTE]
> Diesen Code finden Sie auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Massen-Speicheroperationen

Massen-Speicheroperationen sind eine neuere Ergänzung zur Sprache — sieben neue integrierte Operationen werden für Massen-Speicheroperationen wie das Kopieren und Initialisieren bereitgestellt, um WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` effizienter und leistungsfähiger zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Die Daten in einem Datenabschnitt verwerfen.
- `elem.drop`: Die Daten in einem Elementabschnitt verwerfen.
- `memory.copy`: Von einer Region des linearen Speichers in eine andere kopieren.
- `memory.fill`: Eine Region des linearen Speichers mit einem angegebenen Bytewert füllen.
- `memory.init`: Eine Region aus einem Datenabschnitt kopieren.
- `table.copy`: Von einer Region einer Tabelle in eine andere kopieren.
- `table.init`: Eine Region aus einem Elementabschnitt kopieren.

> [!NOTE]
> Weitere Informationen finden Sie in dem [Proposed Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

### Vektortypen

- `v128`: 128-Bit-Vektor von gepackten Ganzzahl-, Gleitkommadaten oder einem einzelnen 128-Bit-Typ.

### Referenztypen

Der [Referenztypvorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptfunktionen:

- Ein neuer Typ, `externref`, der _jedes_ JavaScript-Wertobjekt halten kann, z.B. Zeichenfolgen, DOM-Referenzen, Objekte usw. `externref` ist opak aus der Sicht von WebAssembly — ein Wasm-Modul kann diese Werte nicht aufrufen und manipulieren und kann stattdessen nur Empfangen und zurückgeben. Aber das ist sehr nützlich, um Wasm-Module JavaScript-Funktionen, DOM-APIs usw. aufrufen zu lassen und allgemein den Weg für einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Werttypen und Tabellenelemente verwendet werden.
- Eine Anzahl von neuen Anweisungen, die es Wasm-Modulen erlauben, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API zu müssen.

> [!NOTE]
> Die [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/)-Dokumentation enthält einige nützliche Informationen darüber, wie Sie `externref` von Rust aus nutzen können.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Multi-Wert WebAssembly

Eine weitere, kürzlich erfolgte Erweiterung der Sprache ist WebAssembly Multi-Wert, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungssequenzen mehrere Stackwerten konsumieren und produzieren können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) befindet sich dieser in einem frühen Stadium und die einzigen verfügbaren Multi-Wert-Anweisungen sind Aufrufe von Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen und andere Dinge ebnen. Für einen nützlichen Erfahrungsbericht über den Fortschritt bisher und wie dies funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly-Threads

WebAssembly-Threads ermöglichen WebAssembly-Memory-Objekten, über mehrere WebAssembly-Instanzen hinweg geteilt zu werden, die in separaten Web-Workern laufen, auf die gleiche Weise wie [`SharedArrayBuffer`s](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in JavaScript. Dies ermöglicht extrem schnelle Kommunikation zwischen Workern und erhebliche Leistungsgewinne in Webanwendungen.

Der Threads-Vorschlag hat zwei Teile, geteilte Memories und atomarer Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Geteilte Memories

Wie oben beschrieben, können Sie geteilte WebAssembly [`Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat der [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory)-Konstruktor jetzt ein `shared`-Eigenschaft, welche bei Setzen auf `true` ein geteiltes Memory erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft des Memorys gibt nun einen `SharedArrayBuffer` zurück, anstelle des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Memory mit dem Schlüsselwort `shared` erstellen, so:

```wasm
(memory 1 2 shared)
```

Im Gegensatz zu nicht geteilten Memories müssen geteilte Memories sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat eine "maximale" Größe angeben.

> [!NOTE]
> Sie können viele weitere Details im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md) finden.

### Atomare Speicherzugriffe

Eine Reihe neuer Wasm-Anweisungen wurden hinzugefügt, die zum Implementieren höherer Funktionen, wie Mutexen, Conditionsvariablen usw., verwendet werden können. Sie können [hier aufgelistet gefunden werden](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten Pthreads-Support-Seite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neuen Funktionen von Emscripten aus nutzen kann.

## Zusammenfassung

Damit endet unsere Tour durch die wesentlichen Komponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API widergespiegelt werden.

## Siehe auch

- Das Hauptthema, das nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern auftauchen können. Siehe dazu die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax), die durch den Spezifikationsinterpreter implementiert wird.
