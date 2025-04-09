---
title: Verständnis des WebAssembly-Textformats
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Um WebAssembly für den Menschen lesbar und bearbeitbar zu machen, gibt es eine textuelle Darstellung des binären Wasm-Formats. Dies ist eine Zwischenform, die entwickelt wurde, um in Texteditoren, Browser-Entwicklertools usw. dargestellt zu werden. Dieser Artikel erklärt, wie das Textformat funktioniert in Bezug auf die rohe Syntax und wie es mit dem darunterliegenden Bytecode in Beziehung steht, den es repräsentiert — und den Wrapper-Objekten, die Wasm in JavaScript darstellen.

> [!NOTE]
> Dies könnte übertrieben sein, wenn Sie ein Webentwickler sind, der einfach nur ein Wasm-Modul in eine Seite laden und in Ihrem Code verwenden möchte (siehe [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)), aber es ist nützlicher, wenn Sie beispielsweise Wasm-Module schreiben möchten, um die Leistung Ihrer JavaScript-Bibliothek zu optimieren oder Ihren eigenen WebAssembly-Compiler zu bauen.

## S-Expressionen

In den binären und textuellen Formaten ist die grundlegende Code-Einheit in WebAssembly ein Modul. Im Textformat wird ein Modul als eine große S-Expression dargestellt. S-Expressionen sind ein sehr altes und sehr einfaches Textformat zur Darstellung von Bäumen, sodass wir ein Modul als Baum von Knoten betrachten können, die die Struktur des Moduls und seinen Code beschreiben. Im Gegensatz zum abstrakten Syntaxbaum einer Programmiersprache ist der Baum in WebAssembly allerdings ziemlich flach und besteht hauptsächlich aus Listen von Anweisungen.

Zuerst sehen wir uns an, wie eine S-Expression aussieht. Jeder Knoten im Baum befindet sich innerhalb eines Paar Klammern — `( ... )`. Das erste Label innerhalb der Klammern gibt an, welcher Typ von Knoten es ist, und danach folgt eine durch Leerzeichen getrennte Liste von Attributen oder Kinderknoten. Das bedeutet, dass die WebAssembly S-Expression:

```wat
(module (memory 1) (func))
```

einen Baum mit dem Wurzelknoten "module" und zwei Kinderknoten darstellt, einen "memory"-Knoten mit dem Attribut "1" und einen "func"-Knoten. Was diese Knoten tatsächlich bedeuten, werden wir gleich sehen.

### Das einfachste Modul

Beginnen wir mit dem einfachsten, kürzesten möglichen Wasm-Modul.

```wat
(module)
```

Dieses Modul ist völlig leer, aber dennoch ein gültiges Modul.

Wenn wir unser Modul jetzt in Binär umwandeln (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm)), sehen wir nur den 8-Byte-Modul-Header, der im [binären Format](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) beschrieben wird:

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Hinzufügen von Funktionalität zu Ihrem Modul

Gut, das ist nicht sehr interessant, fügen wir diesem Modul etwas ausführbaren Code hinzu.

Alle Codes in einem WebAssembly-Modul sind in Funktionen gruppiert, die die folgende Pseudocode-Struktur haben:

```wat
( func <signature> <locals> <body> )
```

- Die **Signatur** erklärt, was die Funktion entgegennimmt (Parameter) und zurückgibt (Rückgabewerte).
- Die **Lokalvariablen** sind wie Variablen in JavaScript, aber mit explizit deklarierten Typen.
- Der **Körper** ist nur eine lineare Liste von Low-Level-Anweisungen.

Das ist also ähnlich zu Funktionen in anderen Sprachen, auch wenn es anders aussieht, weil es sich um eine S-Expression handelt.

## Signaturen und Parameter

Die Signatur ist eine Abfolge von Parametertyp-Deklarationen, gefolgt von einer Liste von Rückgabewerttypen. Es ist hier erwähnenswert, dass:

- Das Fehlen eines `(result)` bedeutet, dass die Funktion nichts zurückgibt.
- In der aktuellen Iteration kann es höchstens einen Rückgabewert geben, aber [später wird dies gelockert](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md) auf jede Anzahl.

Jeder Parameter hat explizit einen Typ deklariert; Wasm-Nummerntypen, Referenztypen, Vektortypen. Die Nummerntypen sind:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

Ein einzelner Parameter wird als `(param i32)` geschrieben und der Rückgabewert wird als `(result i32)` geschrieben, daher würde eine binäre Funktion, die zwei 32-Bit-Ganzzahlen annimmt und eine 64-Bit-Gleitkommazahl zurückgibt, wie folgt geschrieben:

```wat
(func (param i32) (param i32) (result f64) ...)
```

Nach der Signatur werden die Lokalen mit ihrem Typ aufgelistet, z. B. `(local i32)`. Parameter sind im Grunde genommen nur Lokale, die mit dem Wert des entsprechenden vom Aufrufer übergebenen Arguments initialisiert werden.

## Lokale und Parameter abrufen und setzen

Lokale/Parameter können vom Funktionskörper mit den Anweisungen `local.get` und `local.set` gelesen und beschrieben werden.

Die Anweisungen `local.get`/`local.set` beziehen sich auf das zu holende/gesetzte Element durch seinen numerischen Index: Parameter werden zuerst in der Reihenfolge ihrer Deklaration, gefolgt von Lokalen in der Reihenfolge ihrer Deklaration aufgerufen. Also bei gegebener Funktion:

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

Würde die Anweisung `local.get 0` den i32-Parameter holen, `local.get 1` den f32-Parameter und `local.get 2` das f64-Lokale.

Ein weiteres Problem besteht darin, dass die Verwendung numerischer Indizes zur Referenzierung von Elementen verwirrend und nervig sein kann, daher erlaubt es das Textformat, Parameter, Lokale und die meisten anderen Elemente zu benennen, indem ein Name mit einem Dollarzeichen (`$`) direkt vor der Typdeklaration eingefügt wird.

So könnten wir unsere vorherige Signatur umschreiben:

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

Und könnten dann `local.get $p1` statt `local.get 0` schreiben usw. (Beachten Sie, dass, wenn dieser Text in Binär umgewandelt wird, das Binär nur die ganze Zahl enthalten wird.)

## Stapelmaschinen

Bevor wir einen Funktionskörper schreiben können, müssen wir über eine weitere Sache sprechen: **Stapelmaschinen**. Obwohl der Browser es zu etwas Effizienterem kompiliert, wird die Wasm-Ausführung in Bezug auf eine Stapelmaschine definiert, bei der die Grundidee ist, dass jeder Anweisungstyp eine bestimmte Anzahl von `i32`/`i64`/`f32`/`f64`-Werten auf einen Stapel schiebt und/oder herausnimmt.

Zum Beispiel ist `local.get` definiert, um den Wert des Lokalen, das es gelesen hat, auf den Stapel zu schieben, und `i32.add` entnimmt zwei `i32`-Werte (es ergreift implizit die vorherigen beiden Werte, die auf den Stapel geschoben wurden), berechnet ihre Summe (Modulo 2^32) und drückt den resultierenden i32-Wert.

Wenn eine Funktion aufgerufen wird, beginnt sie mit einem leeren Stapel, der schrittweise gefüllt und geleert wird, während die Anweisungen des Körpers ausgeführt werden. Zum Beispiel, nach der Ausführung der folgenden Funktion:

```wat
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

Der Stapel enthält genau einen `i32`-Wert — das Ergebnis des Ausdrucks (`$p + $p`), das von `i32.add` gehandhabt wird. Der Rückgabewert einer Funktion ist nur der letzte Wert, der auf dem Stapel übrig bleibt.

Die WebAssembly-Validierungsregeln stellen sicher, dass der Stapel genau übereinstimmt: Wenn Sie ein `(result f32)` deklarieren, dann muss der Stapel am Ende genau ein `f32` enthalten. Wenn es keinen Ergebnistyp gibt, muss der Stapel leer sein.

## Unser erster Funktionskörper

Wie bereits erwähnt, ist der Funktionskörper eine Liste von Anweisungen, die befolgt werden, wenn die Funktion aufgerufen wird. Wenn wir dies mit dem, was wir bereits gelernt haben, kombinieren, können wir endlich ein Modul mit unserer eigenen einfachen Funktion definieren:

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Diese Funktion erhält zwei Parameter, addiert sie und gibt das Ergebnis zurück.

Es gibt viele weitere Dinge, die in Funktionskörper eingefügt werden können, aber wir beginnen jetzt einfach und Sie werden viele weitere Beispiele sehen, während Sie weitermachen. Für eine vollständige Liste der verfügbaren Opcodes konsultieren Sie die [Webassembly.org Semantikreferenz](https://webassembly.github.io/spec/core/exec/index.html).

### Die Funktion aufrufen

Unsere Funktion wird nicht viel alleine tun — jetzt müssen wir sie aufrufen. Wie machen wir das? Genau wie in einem ES-Modul müssen Wasm-Funktionen explizit durch eine `export`-Anweisung innerhalb des Moduls exportiert werden.

Wie Lokale werden Funktionen standardmäßig durch einen Index identifiziert, aber der Bequemlichkeit halber können sie benannt werden. Lassen Sie uns damit beginnen, dies zu tun — zuerst fügen wir direkt nach dem `func`-Schlüsselwort einen Namen hinzu, der mit einem Dollarzeichen beginnt:

```wat
(func $add …)
```

Jetzt müssen wir eine Exporterklärung hinzufügen — das sieht so aus:

```wat
(export "add" (func $add))
```

Hier ist `add` der Name, unter dem die Funktion in JavaScript identifiziert wird, während `$add` auswählt, welche WebAssembly-Funktion im Modul exportiert wird.

Unser endgültiges Modul sieht nun so aus:

```wat
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Wenn Sie das Beispiel mitverfolgen möchten, speichern Sie das oben genannte Modul in einer Datei namens `add.wat` und konvertieren Sie es in eine Binärdatei namens `add.wasm` mit wabt (siehe [Umwandlung des WebAssembly-Textformats in Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) für Details).

Als nächstes werden wir unseren Binärcode asynchron instanziieren (siehe [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running)) und unsere `add`-Funktion in JavaScript ausführen (wir können jetzt `add()` in der [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Eigenschaft der Instanz finden):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Siehe auch [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) für weitere Details über die Instanziierungsfunktion.

## Erkundung der Grundlagen

Nun, da wir die Grundlagen behandelt haben, schauen wir uns einige fortgeschrittenere Funktionen an.

### Aufrufen von Funktionen aus anderen Funktionen im gleichen Modul

Die `call`-Anweisung ruft eine einzelne Funktion mit ihrem Index oder Namen auf. Zum Beispiel enthält das folgende Modul zwei Funktionen — eine gibt einfach den Wert 42 zurück, die andere gibt das Ergebnis des Aufrufs der ersten Funktion plus eins zurück:

```wat
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Hinweis:** `i32.const` definiert einfach eine 32-Bit-Ganzzahl und schiebt sie auf den Stapel. Sie könnten das `i32` gegen einen der anderen verfügbaren Typen austauschen und den Wert der Konstanten nach Belieben ändern (hier haben wir den Wert auf `42` gesetzt).

In diesem Beispiel bemerken Sie einen `(export "getAnswerPlus1")`-Abschnitt, der direkt nach der `func`-Anweisung der zweiten Funktion deklariert wird — dies ist eine Kurzform zur Erklärung, dass wir diese Funktion exportieren möchten und den Namen für den Export bestimmen.

Dies ist funktional äquivalent zu einer separaten Funktionsanweisung außerhalb der Funktion, irgendwo anders im Modul auf die gleiche Weise, wie wir es zuvor getan haben, z. B.:

```wat
(export "getAnswerPlus1" (func $functionName))
```

Der JavaScript-Code zum Aufrufen unseres obigen Moduls sieht so aus:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Importieren von Funktionen aus JavaScript

Wir haben bereits gesehen, dass JavaScript WebAssembly-Funktionen aufruft, aber was ist mit WebAssembly-Funktionen, die JavaScript-Funktionen aufrufen? WebAssembly hat eigentlich kein eingebautes Wissen über JavaScript, aber es hat eine allgemeine Möglichkeit, Funktionen zu importieren, die entweder JavaScript- oder Wasm-Funktionen akzeptieren können. Schauen wir uns ein Beispiel an:

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly hat einen zweistufigen Namespace, sodass die Importanweisung hier sagt, dass wir die `log`-Funktion aus dem `console`-Modul importieren möchten. Sie können auch sehen, dass die exportierte `logIt`-Funktion die importierte Funktion mithilfe der oben eingeführten `call`-Anweisung aufruft.

Importierte Funktionen sind genau wie normale Funktionen: Sie haben eine Signatur, die von der WebAssembly-Validierung statisch überprüft wird, und sie erhalten einen Index, können benannt und aufgerufen werden.

JavaScript-Funktionen haben keinen Signaturbegriff, sodass jede JavaScript-Funktion übergeben werden kann, unabhängig von der deklarierten Signatur des Imports. Sobald ein Modul einen Import deklariert, muss der Aufrufer von [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) ein Importobjekt übergeben, das die entsprechenden Eigenschaften hat.

Dafür brauchen wir ein Objekt (nennen wir es `importObject`), sodass `importObject.console.log` eine JavaScript-Funktion ist.

Das sähe folgendermaßen aus:

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

WebAssembly hat die Möglichkeit, globale Variableninstanzen zu erstellen, die sowohl aus JavaScript zugänglich sind als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Im WebAssembly-Textformat sieht es folgendermaßen aus (siehe [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) in unserem GitHub-Repository; siehe auch [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) für ein Live-JavaScript-Beispiel):

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

Dies sieht ähnlich aus wie das, was wir zuvor gesehen haben, nur dass wir einen globalen Wert unter Verwendung des Schlüsselworts `global` angeben und wir auch das Schlüsselwort `mut` zusammen mit dem Datentyp des Wertes angeben, wenn wir ihn als veränderbar markieren wollen.

Um einen äquivalenten Wert mit JavaScript zu erstellen, würden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor verwenden:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly-Speicher

Die obigen Beispiele zeigen, wie man mit Zahlen im Assemblercode arbeitet, indem man sie auf dem [Stapel](#stapelmaschinen) hinzufügt, Operationen darauf durchführt und das Ergebnis durch Aufrufen einer Methode in JavaScript protokolliert.

Um mit Zeichenfolgen und anderen komplexeren Datentypen zu arbeiten, verwenden wir `memory`, das entweder in WebAssembly oder JavaScript erstellt und zwischen den Umgebungen geteilt werden kann (neuere Versionen von WebAssembly können auch [Referenztypen](#referenztypen) verwenden).

In WebAssembly ist `memory` einfach ein großes zusammenhängendes, veränderliches Array von Rohbytes, das mit der Zeit wachsen kann (siehe [lineare Speicher](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory) in der Spezifikation). WebAssembly enthält [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) wie [`i32.load`](/de/docs/WebAssembly/Reference/Memory/Load) und [`i32.store`](/de/docs/WebAssembly/Reference/Memory/Store) zum Lesen und Schreiben von Bytes zwischen dem Stapel und einem beliebigen Ort im Speicher.

Aus der Sicht von JavaScript ist es so, als ob der gesamte Speicher in einem großen wachsfähigen {{jsxref("ArrayBuffer")}} wäre. JavaScript kann WebAssembly-lineare Speicherinstanzen über die [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Schnittstelle erstellen und zu einer Speicherinstanz exportieren oder auf eine Speicherinstanz zugreifen, die innerhalb des WebAssembly-Codes erstellt und exportiert wird. JavaScript-`Memory`-Instanzen haben eine [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Getter, der einen `ArrayBuffer` zurückgibt, der auf den gesamten linearen Speicher zeigt.

Speicherinstanzen können auch über Methoden wie [`Memory.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) in JavaScript oder [`memory.grow`](/de/docs/WebAssembly/Reference/Memory/Grow) in WebAssembly wachsen. Da `ArrayBuffer`-Objekte die Größe nicht ändern können, wird der aktuelle `ArrayBuffer` getrennt und ein neuer `ArrayBuffer` erstellt, um auf den neueren, größeren Speicher zu zeigen.

Beachten Sie, dass Sie beim Erstellen des Speichers die Anfangsgröße definieren müssen und optional die maximale Größe angeben können, auf die der Speicher wachsen kann. WebAssembly wird versuchen, die maximale Größe zu reservieren (falls angegeben), und wenn es dazu in der Lage ist, kann der Puffer effizienter in der Zukunft wachsen. Selbst wenn es die maximale Größe jetzt nicht allokieren kann, könnte es später dennoch wachsen. Die Methode schlägt nur fehl, wenn es die _anfängliche_ Größe nicht allokieren kann.

> [!NOTE]
> Ursprünglich erlaubte WebAssembly nur einen Speicher pro Modulinstranz. Sie können nun [mehrere Speicher](#mehrere_speicher) verwenden, wenn der Browser dies unterstützt. Code, der keine mehrere Speicher verwendet, muss nicht geändert werden!

Um einige dieser Verhaltensweisen zu demonstrieren, möchten wir den Fall betrachten, in dem wir mit einem String in unserem WebAssembly-Code arbeiten wollen. Ein String ist einfach eine Sequenz von Bytes, die sich irgendwo in diesem linearen Speicher befindet. Angenommen, wir haben eine geeignete Zeichenfolge von Bytes in den WebAssembly-Speicher geschrieben, können wir diesen String in JavaScript übergeben, indem wir den Speicher, den Offset des Strings innerhalb des Speichers und eine Möglichkeit zur Angabe der Länge teilen.

Zuerst erstellen wir etwas Speicher und teilen ihn zwischen WebAssembly und JavaScript. WebAssembly gibt uns hier viel Flexibilität: Wir können entweder ein [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekt in JavaScript erstellen und lassen das WebAssembly-Modul den Speicher importieren, oder wir lassen das WebAssembly-Modul den Speicher erstellen und nach JavaScript exportieren.

Für dieses Beispiel erstellen wir den Speicher in JavaScript und importieren ihn dann in WebAssembly. Zuerst erstellen wir ein `Memory`-Objekt mit 1 Seite und fügen es unserem `importObject` unter dem Schlüssel `js.mem` hinzu. Wir instanziieren dann unser WebAssembly-Modul, in diesem Fall "the_wasm_to_import.wasm", mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und übergeben das Importobjekt:

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

Der Speicher muss unter Verwendung desselben zweistufigen Schlüssels importiert werden, der im `importObject` (`js.mem`) angegeben ist. Die `1` zeigt an, dass der importierte Speicher mindestens 1 Seite Speicher haben muss (WebAssembly definiert derzeit eine Seite als 64KB).

> [!NOTE]
> Da dies der erste in das WebAssembly-Modul importierte Speicher ist, hat er einen Speicherindex von "0". Sie könnten diesen speziellen Speicher mit dem Index in [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) referenzieren, aber da 0 der Standardindex ist, müssen Sie in Anwendungen mit einem einzigen Speicher den Index nicht angeben.

Jetzt haben wir eine gemeinsame Speicherinstanz, der nächste Schritt besteht darin, eine Zeichenfolge von Daten darin zu schreiben. Wir geben dann Informationen darüber, wo sich die Zeichenfolge befindet und ihre Länge an das JavaScript weiter (wir könnten alternativ die Länge der Zeichenfolge in der Zeichenfolge selbst kodieren, aber das Übertragen einer Länge ist für uns einfacher zu implementieren).

Zuerst fügen wir eine Zeichenfolge von Daten in unseren Speicher ein, in diesem Fall "Hi". Da wir den gesamten linearen Speicher besitzen, können wir die Inhalte des Strings einfach in den globalen Speicher schreiben, indem wir einen `data`-Abschnitt verwenden. Datenabschnitte erlauben das Schreiben einer Zeichenfolge von Bytes an einem bestimmten Offset zur Instanziierungszeit und sind ähnlich den `.data`-Abschnitten in nativen ausführbaren Formaten. Hier schreiben wir die Daten in den Standardspeicher (den wir nicht angeben müssen) am Offset 0:

```wat
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> Die doppelte Semikolon-Syntax (`;;`) oben wird verwendet, um Kommentare in WebAssembly-Dateien anzugeben. In diesem Fall verwenden wir sie nur, um Platzhalter für andere Codes zu verdeutlichen.

Um diese Daten mit JavaScript zu teilen, definieren wir zwei Funktionen. Zuerst importieren wir eine Funktion aus dem JavaScript, die wir verwenden, um die Zeichenfolge in die Konsole zu protokollieren. Diese muss auf `console.log` im `importObject` abgebildet werden, das zur Instanziierung des WebAssembly-Moduls verwendet wird. Die Funktion wird in WebAssembly `$log` genannt und nimmt `i32`-Parameter für den Zeichenfolgen-Offset und die Länge im Speicher an.

Die zweite WebAssembly-Funktion, `writeHi()`, ruft die importierte `$log`-Funktion mit Offset und Länge der Zeichenfolge im Speicher (`0` und `2`) auf. Diese wird aus dem Modul exportiert, sodass sie von JavaScript aufgerufen werden kann.

Unser finales WebAssembly-Modul (im Textformat) sieht folgendermaßen aus.

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

Auf der JavaScript-Seite müssen wir die Protokollierungsfunktion definieren, sie an das WebAssembly weitergeben und dann die exportierte `writeHi()`-Methode aufrufen. Der vollständige Code wird unten gezeigt:

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

Beachten Sie, dass die Protokollierungsfunktion `consoleLogString()` dem `importObject` in der Eigenschaft `console.log` übergeben wird und vom WebAssembly-Modul importiert wird. Die Funktion erstellt eine Ansicht auf der Zeichenfolge im gemeinsamen Speicher mit einem `Uint8Array` am übergebenen Offset und mit der angegebenen Länge. Die Bytes werden dann mit der [TextDecoder API](/de/docs/Web/API/TextDecoder) von UTF-8 in eine Zeichenfolge dekodiert (wir geben `utf8` hier an, aber viele andere Kodierungen werden unterstützt). Die Zeichenfolge wird dann mit `console.log()` in der Konsole protokolliert.

Der letzte Schritt besteht darin, die exportierte `writeHi()`-Funktion aufzurufen, was nach der Instanziierung des Objekts geschieht. Wenn Sie den Code ausführen, zeigt die Konsole den Text "Hi" an.

> [!NOTE]
> Sie finden den vollständigen Quellcode auf GitHub als [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

#### Mehrere Speicher

Neuere Implementierungen erlauben es Ihnen, mehrere Speicherobjekte in Ihrem WebAssembly und JavaScript zu verwenden, auf eine Weise, die mit dem Code kompatibel ist, der für Implementierungen geschrieben wurde, die nur einen einzigen Speicher unterstützen. Mehrere Speicher können nützlich sein, um Daten zu trennen, die anders behandelt werden müssen als andere Anwendungsdaten, z. B. öffentliche vs. private Daten, Daten, die erhalten bleiben müssen, und Daten, die zwischen Threads geteilt werden müssen. Es kann auch für sehr große Anwendungen nützlich sein, die über den Wasm-32-Bit-Adressraum hinaus skalieren müssen, und für andere Zwecke.

Speicher, die dem WebAssembly-Code zur Verfügung gestellt werden, entweder direkt deklariert oder importiert, erhalten eine nullbasierte, sequentiell zugeordnete Speicherindexnummer. Alle [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory), wie [`load`](/de/docs/WebAssembly/Reference/Memory/Load) oder [`store`](/de/docs/WebAssembly/Reference/Memory/Store), können auf einen bestimmten Speicher über seinen Index verweisen, sodass Sie steuern können, mit welchem Speicher Sie arbeiten.

Die Speicheranweisungen haben einen Standardindex von 0, dem Index des ersten dem WebAssembly-Instanz hinzugefügten Speichers. Folglich, wenn Sie nur einen Speicher hinzufügen, muss Ihr Code den Index nicht angeben.

Um zu zeigen, wie dies im Detail funktioniert, erweitern wir das vorherige Beispiel, um Zeichenfolgen in drei verschiedene Speicher zu schreiben und die Ergebnisse zu protokollieren. Der untenstehende Code zeigt, wie wir zuerst zwei Speicherinstanzen importieren, indem wir denselben Ansatz wie im vorherigen Beispiel verwenden. Um zu zeigen, wie man Speicher innerhalb des WebAssembly-Moduls erstellen kann, haben wir eine dritte Speicherinstanz namens `$mem2` im Modul erstellt und _exportiert_.

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

Die drei Speicherinstanzen erhalten automatisch eine Instanz basierend auf ihrer Erzeugungsreihenfolge. Der untenstehende Code zeigt, wie wir diesen Index (z. B. `(memory 1)`) in der `data`-Anweisung angeben können, um den Speicher auszuwählen, in den wir eine Zeichenfolge schreiben möchten (Sie können denselben Ansatz für alle anderen Speicheranweisungen wie `load` und `grow` verwenden). Hier schreiben wir eine Zeichenfolge, die den jeweiligen Speicher angibt.

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

Beachten Sie, dass `(memory 0)` der Standard ist und daher optional. Um dies zu demonstrieren, schreiben wir den Text `" (Standard)"` ohne Angabe des Speicherindexes, und dies sollte nach `"Speicher 0 Daten"` hinzugefügt werden, wenn die Inhalte des Speichers protokolliert werden.

Der WebAssembly-Protokollierungscode ist fast genau derselbe wie im vorherigen Beispiel, außer dass wir neben dem Offset und der Länge der Zeichenfolge den Index des Speichers übergeben müssen, der die Zeichenfolge enthält. Wir protokollieren auch alle drei Speicherinstanzen.

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

Der JavaScript-Code ist ebenfalls sehr ähnlich dem vorherigen Beispiel, außer dass wir zwei Speicherinstanzen an das `importObject()` übergeben und der vom Modul exportierte Speicher nach der Instanziierung über das gelöste Versprechen (`obj.instance.exports`) abgerufen wird. Der Code zum Protokollieren jeder Zeichenfolge ist ebenfalls etwas komplizierter, da wir den Speicherinstanznummer aus dem WebAssembly mit einem bestimmten `Memory`-Objekt abgleichen müssen.

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

Die Ausgabe des Beispiels sollte ähnlich zu dem untenstehenden Text sein, außer dass "Speicher 1 Daten" einige nachlaufende "unerwünschte Zeichen" haben kann, da der Textdecoder mehr Bytes übergeben bekommt, als zur Codierung der Zeichenfolge verwendet werden.

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

Sie können den vollständigen Quellcode auf GitHub als [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)) finden.

> [!NOTE]
> Siehe [`webassembly.multiMemory` auf der Startseite](/de/docs/WebAssembly#webassembly.multimemory) für Informationen zur Browser-Kompatibilität für dieses Feature.

### WebAssembly-Tabellen

Zum Abschluss dieser Tour durch das WebAssembly-Textformat schauen wir auf den kompliziertesten und oft verwirrenden Teil von WebAssembly: **Tabellen**. Tabellen sind im Grunde genommen dynamisch skalierbare Arrays von Referenzen, die vom WebAssembly-Code im Indexzugriff erreicht werden können.

Um zu sehen, warum Tabellen benötigt werden, müssen wir zuerst beachten, dass die `call`-Anweisung, die wir zuvor gesehen haben (siehe [Aufrufen von Funktionen aus anderen Funktionen im gleichen Modul](#aufrufen_von_funktionen_aus_anderen_funktionen_im_gleichen_modul)), einen statischen Funktionsindex verwendet und somit nur eine Funktion aufrufen kann — aber was, wenn der Aufgerufene einen Laufzeitwert darstellt?

- In JavaScript sehen wir das die ganze Zeit: Funktionen sind erstklassige Werte.
- In C/C++ sehen wir das mit Funktionszeigern.
- In C++ sehen wir das mit virtuellen Funktionen.

WebAssembly benötigte eine Art von Aufrufanweisung, um dies zu erreichen, also gaben wir ihm `call_indirect`, das ein dynamisches Funktionsoperand annimmt. Das Problem ist, dass die einzigen Typen, die wir WebAssembly-Operands angeben können, derzeit `i32`/`i64`/`f32`/`f64` sind.

WebAssembly könnte einen `anyfunc`-Typ hinzufügen ("any", weil der Typ Funktionen jeglicher Signatur enthalten könnte), aber leider konnte dieser `anyfunc`-Typ aus Sicherheitsgründen nicht im linearen Speicher gespeichert werden. Linearer Speicher legt die rohen Inhalte gespeicherter Werte als Bytes offen und das würde Wasm-Inhalte erlauben, arbiträre Rohfunktion-Adressen zu beobachten und zu beschädigen, was im Internet nicht erlaubt sein kann.

Die Lösung bestand darin, Funktionsreferenzen in einer Tabelle zu speichern und stattdessen Tabellenindizes zu übergeben, die lediglich i32-Werte sind. `call_indirect`'s Operand kann daher ein i32-Indexwert sein.

#### Definieren einer Tabelle in Wasm

Wie platzieren wir nun Wasm-Funktionen in unserer Tabelle? Genau wie `data`-Segmente verwendet werden können, um Regionen im linearen Speicher mit Bytes zu initialisieren, können `elem`-Segmente verwendet werden, um Regionen von Tabellen mit Funktionen zu initialisieren:

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

- Bei `(table 2 funcref)` ist die 2 die Anfangsgröße der Tabelle (was bedeutet, dass sie zwei Referenzen speichern wird) und `funcref` erklärt, dass der Elementtyp dieser Referenzen Funktionsreferenzen sind.
- Die Funktionen (`func`)-Abschnitte sind genau wie alle anderen deklarierten Wasm-Funktionen. Dies sind die Funktionen, auf die wir in unserer Tabelle verweisen werden (im Beispiel gibt jede einfach einen konstanten Wert zurück). Beachten Sie, dass die Reihenfolge, in der die Abschnitte deklariert werden, hier keine Rolle spielt — Sie können Ihre Funktionen überall deklarieren und trotzdem in Ihrem `elem`-Abschnitt darauf verweisen.
- Der `elem`-Abschnitt kann eine beliebige Teilmenge der Funktionen in einem Modul in beliebiger Reihenfolge aufführen, was es erlaubt, Duplikate zu haben. Dies ist eine Liste der Funktionen, die von der Tabelle referenziert werden sollen, in der Reihenfolge, in der sie referenziert werden sollen.
- Der `(i32.const 0)`-Wert innerhalb des `elem`-Abschnitts ist ein Offset — dieser muss am Anfang des Abschnitts deklariert werden und spezifiziert, an welchem Index in der Tabelle Funktionsreferenzen zu populieren beginnen. Hier haben wir 0 angegeben und eine Größe von 2 (siehe oben), sodass wir zwei Referenzen an den Indizes 0 und 1 füllen können. Wenn wir beginnen wollten, unsere Referenzen bei Offset 1 zu schreiben, müssten wir `(i32.const 1)` schreiben und die Tabellengröße müsste 3 sein.

> [!NOTE]
> Nicht initialisierte Elemente erhalten einen Standardwert, der bei einem Aufruf einen Fehler werfen würde.

In JavaScript würden die entsprechenden Aufrufe zur Erstellung einer solchen Tabelleninstanz etwa folgendermaßen aussehen:

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

Kommen wir nun dazu, die definierte Tabelle irgendwie zu verwenden. Verwenden wir diesen Codeabschnitt dafür:

```wat
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- Der Block `(type $return_i32 (func (result i32)))` spezifiziert einen Typ mit einem Referenznamen. Dieser Typ wird bei der Typprüfung der Tabellenfunktionsreferenzaufrufe später verwendet. Hier sagen wir, dass die Referenzen Funktionen sein müssen, die ein `i32` als Ergebnis zurückgeben.
- Als nächstes definieren wir eine Funktion, die mit dem Namen `callByIndex` exportiert wird. Diese wird ein `i32` als Parameter empfangen, der den Argumentnamen `$i` hat.
- Innerhalb der Funktion fügen wir einen Wert zum Stapel hinzu — welcher Wert als Parameter `$i` übergeben wird.
- Schließlich verwenden wir `call_indirect`, um eine Funktion von der Tabelle aufzurufen — es wird implizit der Wert `$i` vom Stapel entfernt. Das Endergebnis ist, dass die `callByIndex`-Funktion die `$i` te Funktion in der Tabelle aufruft.

Sie könnten den `call_indirect`-Parameter auch explizit während des Befehlsaufrufs statt vorher angeben, wie hier:

```wat
(call_indirect (type $return_i32) (local.get $i))
```

In einer höherstufigen, ausdrucksstärkeren Sprache wie JavaScript könnten Sie sich vorstellen, dasselbe mit einem Array (wahrscheinlich eher einem Objekt) zu tun, das Funktionen enthält. Der Pseudocode würde in etwa aussehen wie `tbl[i]()`.

Zurück zum Typ-Checking: Da WebAssembly eine Typprüfung hat und der `funcref` potenziell jede Funktionssignatur sein kann, müssen wir die vermutete Signatur des Angerufenen an der Aufrufstelle angeben, daher fügen wir den `$return_i32`-Typ ein, um dem Programm mitzuteilen, dass eine Funktion, die ein `i32` zurückgibt, erwartet wird. Wenn der Angerufene keine übereinstimmende Signatur hat (z. B. ein `f32` zurückgegeben wird), wird ein [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) ausgelöst.

Was also verbindet das `call_indirect` mit der Tabelle, die wir aufrufen? Die Antwort ist, dass derzeit nur eine Tabelle pro Modulinstanz erlaubt ist und das ist das, was `call_indirect` implizit aufruft. In der Zukunft, wenn mehrere Tabellen erlaubt sind, müssten wir auch eine Tabellenkennung auf irgendeine Weise angeben, ähnlich wie

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

Das vollständige Modul sieht folgendermaßen aus und kann in unserer [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat)-Beispieldatei gefunden werden:

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

Wir laden es in eine Webseite mit folgendem JavaScript:

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
> Genau wie Speicher können Tabellen auch aus JavaScript erstellt (siehe [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)) sowie in/aus einem anderen Wasm-Modul importiert/exportiert werden.

### Tabellen mutieren und dynamisches Verlinken

Da JavaScript vollen Zugriff auf Funktionsreferenzen hat, kann das Table-Objekt aus JavaScript mithilfe der Methoden [`grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und [`set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) geändert werden. Und der WebAssembly-Code selbst kann Tabellen mit Anweisungen manipulieren, die als Teil von [Referenztypen](#referenztypen) hinzugefügt werden, wie `table.get` und `table.set`.

Da Tabellen veränderbar sind, können sie verwendet werden, um ausgeklügelte Ladezeit- und Laufzeit-[Dynamiklink-Pläne](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) zu implementieren. Wenn ein Programm dynamisch verlinkt ist, teilen sich mehrere Instanzen denselben Speicher und dieselbe Tabelle. Dies entspricht einem nativen Programm, bei dem mehrere kompilierte `.dll`s denselben Adressraum eines Prozesses teilen.

Um dies in Aktion zu sehen, erstellen wir ein einziges Importobjekt, das ein Memory-Objekt und ein Table-Objekt enthält, und übergeben dieses gleiche Importobjekt an mehrere [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Aufrufe.

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

1. Die Funktion `shared0func` ist in `shared0.wat` definiert und wird in unserer importierten Tabelle gespeichert.
2. Diese Funktion erstellt eine Konstante mit dem Wert `0` und verwendet dann den `i32.load`-Befehl, um den Wert zu laden, der im angegebenen Speicherindex enthalten ist. Der angegebene Index ist `0` — auch hier wird implizit der vorherige Wert vom Stapel entfernt. Somit lädt und gibt `shared0func` den Wert zurück, der im Speicherindex `0` gespeichert ist.
3. In `shared1.wat` exportieren wir eine Funktion mit dem Namen `doIt` — diese Funktion erstellt zwei Konstanten mit den Werten `0` und `42`, dann wird `i32.store` aufgerufen, um einen bereitgestellten Wert an einem bereitgestellten Index des importierten Speichers zu speichern. Auch hier werden diese Werte implizit vom Stapel entfernt, sodass das Ergebnis der Speichervorgang des Werts `42` im Speicherindex `0` ist.
4. Im letzten Teil der Funktion erstellen wir eine Konstante mit dem Wert `0`, dann rufen wir die Funktion an diesem Index 0 der Tabelle auf, welche `shared0func` ist, die dort zuvor durch den `elem`-Block in `shared0.wat` gespeichert wurde.
5. Beim Aufruf lädt `shared0func` die `42` die wir mit dem `i32.store`-Befehl in `shared1.wat` im Speicher gespeichert haben.

> [!NOTE]
> Die obigen Ausdrücke entfernen wieder implizit Werte vom Stapel, aber Sie könnten diese explizit innerhalb der Befehlaufrufe stattdessen deklarieren, zum Beispiel:
>
> ```wat
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

Jedes der Module, die kompiliert werden, kann denselben Speicher und dieselben Table-Objekte importieren und teilt somit denselben linearen Speicher und den Tabellenspeicherplatz.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Operationen im Massenspeicher

Operationen im Massenspeicher sind eine neuere Ergänzung zur Sprache — sieben neue eingebaute Operationen werden für Operationen im Massenspeicher wie Kopieren und Initialisieren bereitgestellt, um WebAssembly zu ermöglichen, native Funktionen wie `memcpy` und `memmove` effizienter und leistungsfähiger zu modellieren.

> [!NOTE]
> Siehe [`webassembly.bulk-memory-operations` auf der Startseite](/de/docs/WebAssembly#webassembly.bulk-memory-operations) für Informationen zur Browser-Kompatibilität.

Die neuen Operationen sind:

- `data.drop`: Verwerfe die Daten in einem Datensegment.
- `elem.drop`: Verwerfe die Daten in einem Elemensegment.
- `memory.copy`: Kopiere von einer Speicherregion zu einer anderen.
- `memory.fill`: Fülle eine Speicherregion mit einem gegebenen Byte-Wert.
- `memory.init`: Kopiere eine Region aus einem Datensegment.
- `table.copy`: Kopiere von einer Region einer Tabelle zu einer anderen.
- `table.init`: Kopiere eine Region aus einem Elementsegment.

> [!NOTE]
> Sie können mehr Informationen im [Proposal für Massenoperationen im Speicher und bedingte Segmentinitialisierung](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md) finden.

## Typen

### Zahlentypen

WebAssembly hat derzeit vier verfügbare _Zahlentypen_:

- `i32`: 32-Bit-Ganzzahl
- `i64`: 64-Bit-Ganzzahl
- `f32`: 32-Bit-Gleitkommazahl
- `f64`: 64-Bit-Gleitkommazahl

### Vektortypen

- `v128`: 128 Bit Vektor von gepackten Ganzzahl-, Gleitkommadaten oder ein einziger 128 Bit Typ.

### Referenztypen

Der [Referenztypenvorschlag](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) bietet zwei Hauptfunktionen:

- Ein neuer Typ, `externref`, der _jeden_ JavaScript-Wert halten kann, zum Beispiel Zeichenstrings, DOM-Referenzen, Objekte usw. `externref` ist aus der Sicht von WebAssembly undurchsichtig — ein Wasm-Modul kann auf diese Werte nicht zugreifen und sie manipulieren und kann sie stattdessen nur empfangen und wieder ausgeben. Aber dies ist sehr nützlich, um es Wasm-Modulen zu ermöglichen, JavaScript-Funktionen, DOM-APIs usw. aufzurufen und im Allgemeinen den Weg für eine einfachere Interoperabilität mit der Host-Umgebung zu ebnen. `externref` kann für Werttypen und Tabelelemente verwendet werden.
- Eine Reihe neuer Anweisungen, die es Wasm-Modulen ermöglichen, [WebAssembly-Tabellen](#webassembly-tabellen) direkt zu manipulieren, anstatt dies über die JavaScript-API tun zu müssen.

> [!NOTE]
> Die [wasm-bindgen Dokumentation](https://rustwasm.github.io/docs/wasm-bindgen/) enthält einige nützliche Informationen darüber, wie man `externref` aus Rust verwenden kann.

> [!NOTE]
> Siehe [`webassembly.reference-types` auf der Startseite](/de/docs/WebAssembly#webassembly.reference-types) für Informationen zur Browser-Kompatibilität.

## Mehrwert in WebAssembly

Eine weitere neuere Ergänzung zur Sprache sind die Mehrfachwerte in WebAssembly, was bedeutet, dass WebAssembly-Funktionen jetzt mehrere Werte zurückgeben können und Anweisungssequenzen mehrere Stapelwerte konsumieren und produzieren können.

> [!NOTE]
> Siehe [`webassembly.multi-value` auf der Startseite](/de/docs/WebAssembly#webassembly.multi-value) für Informationen zur Browser-Kompatibilität.

Zum Zeitpunkt des Schreibens (Juni 2020) ist dies in einem frühen Stadium und die einzigen Mehrwert-Anweisungen, die verfügbar sind, sind Aufrufe zu Funktionen, die selbst mehrere Werte zurückgeben. Zum Beispiel:

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

Aber dies wird den Weg für nützlichere Anweisungstypen ebnen, und neben anderen Dingen. Für eine nützliche Zusammenstellung des bisherigen Fortschritts und wie das funktioniert, siehe [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) von Nick Fitzgerald.

## WebAssembly Threads

WebAssembly-Threads ermöglichen es, dass WebAssembly-Memory-Objekte über mehrere WebAssembly-Instanzen hinweg geteilt werden, die in separaten Web-Workern laufen, auf die gleiche Weise wie [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)s in JavaScript. Dies ermöglicht eine sehr schnelle Kommunikation zwischen Workern und erhebliche Leistungsverbesserungen in Webanwendungen.

Der Threads-Vorschlag hat zwei Teile, gemeinsame Speicher und atomare Speicherzugriffe.

> [!NOTE]
> Siehe [`webassembly.threads-and-atomics` auf der Startseite](/de/docs/WebAssembly#webassembly.threads-and-atomics) für Informationen zur Browser-Kompatibilität.

### Geteilte Speicher

Wie oben beschrieben, können Sie geteilte WebAssembly- [`Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden können, auf die gleiche Weise wie ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

Auf der JavaScript-API-Seite hat der Initialisierungsobject des [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)-Konstruktors jetzt eine `shared`-Eigenschaft, die, wenn sie auf `true` gesetzt wird, einen gemeinsamen Speicher erstellt:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

die `buffer`-Eigenschaft des Speichers wird nun eine `SharedArrayBuffer` zurückgeben, anstelle des üblichen `ArrayBuffer`:

```js
memory.buffer; // returns SharedArrayBuffer
```

Im Textformat können Sie einen geteilten Speicher mit dem Schlüsselwort `shared` erstellen, wie folgt:

```wat
(memory 1 2 shared)
```

Im Gegensatz zu ungeteilten Speichern müssen geteilte Speicher sowohl im JavaScript-API-Konstruktor als auch im Wasm-Textformat eine "maximale" Größe festlegen.

> [!NOTE]
> Sie können viel mehr Details im [Threads-Proposal für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md) finden.

### Atomare Speicherzugriffe

Eine Anzahl neuer Wasm-Anweisungen wurde hinzugefügt, die zum Implementieren höherer Funktionen wie Mutexe, Bedingungsvariablen usw. verwendet werden können. Sie können [sie hier aufgelistet finden](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses).

> [!NOTE]
> Die [Emscripten-Pthreads-Unterstützungsseite](https://emscripten.org/docs/porting/pthreads.html) zeigt, wie man diese neue Funktionalität aus Emscripten verwenden kann.

## Zusammenfassung

Damit schließen wir unsere hochrangige Tour der wichtigen Komponenten des WebAssembly-Textformats und wie sie in der WebAssembly-JS-API reflektiert werden.

## Siehe auch

- Das Hauptsache, die hier nicht enthalten ist, ist eine umfassende Liste aller Anweisungen, die in Funktionskörpern vorkommen können. Siehe die [WebAssembly-Semantik](https://webassembly.github.io/spec/core/exec/index.html) für eine Behandlung jeder Anweisung.
- Siehe auch die [Grammatik des Textformats](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax), die vom Spec-Interpreter implementiert wird.
