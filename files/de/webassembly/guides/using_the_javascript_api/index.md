---
title: Verwendung der WebAssembly JavaScript API
slug: WebAssembly/Guides/Using_the_JavaScript_API
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Wenn Sie bereits [ein Modul aus einer anderen Sprache mit Tools wie Emscripten kompiliert](/de/docs/WebAssembly/Guides/C_to_Wasm) oder [den Code selbst geladen und ausgeführt haben](/de/docs/WebAssembly/Guides/Loading_and_running), besteht der nächste Schritt darin, mehr über die Verwendung der anderen Funktionen der WebAssembly JavaScript API zu lernen. Dieser Artikel erklärt Ihnen, was Sie wissen müssen.

> [!NOTE]
> Wenn Sie mit den in diesem Artikel erwähnten grundlegenden Konzepten nicht vertraut sind und weitere Erklärungen benötigen, lesen Sie zunächst [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts) und kehren Sie dann zurück.

## Einige Beispiele

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie die WebAssembly JavaScript API verwendet wird und wie Sie damit ein Wasm-Modul in einer Webseite laden können.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repository.

### Vorbereitung des Beispiels

1. Zuerst brauchen wir ein Wasm-Modul! Laden Sie unsere [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) Datei herunter und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Erstellen Sie als Nächstes eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, wenn Sie keine leicht verfügbare Vorlage haben).
3. Schauen wir uns zur besseren Verständnis an, was hier passiert, die Textdarstellung unseres Wasm-Moduls an (die wir auch im [Konvertieren des WebAssembly-Formats zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm#a_first_look_at_the_text_format) treffen):

   ```wat
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namensraum hat — die interne Funktion `$i` wird aus `my_namespace.imported_func` importiert. Wir müssen diesen zweistufigen Namensraum in JavaScript reflektieren, wenn das Objekt in das Wasm-Modul importiert wird. Erstellen Sie ein `<script></script>` Element in Ihrer HTML-Datei und fügen Sie den folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Möglichkeit, WebAssembly-Module direkt aus zugrunde liegenden Quellen zu kompilieren und zu instanziieren. Dies wird mit den Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht-streamenden Gegenstücke, da sie den Bytecode direkt in `Module`/`Instance` Instanzen umwandeln können, wodurch die Notwendigkeit entfällt, die [`Response`](/de/docs/Web/API/Response) separat in einen {{jsxref("ArrayBuffer")}} zu stecken.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) zeigt, wie man `instantiateStreaming()` verwendet, um ein Wasm-Modul abzurufen, eine JavaScript-Funktion darin zu importieren, zu kompilieren und zu instanzieren und auf die exportierte Funktion zuzugreifen — alles in einem Schritt.

Fügen Sie das Folgende zu Ihrem Skript hinzu, unter dem ersten Block:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Endergebnis ist, dass wir unsere exportierte WebAssembly-Funktion `exported_func` aufrufen, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, die den innerhalb der WebAssembly-Instanz bereitgestellten Wert (42) in die Konsole protokolliert. Wenn Sie Ihren Beispielcode jetzt speichern und in einem Browser laden, der WebAssembly unterstützt, sehen Sie dies in Aktion!

> [!NOTE]
> Dies ist ein kompliziertes, umständliches Beispiel, das sehr wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist — die Verwendung von WebAssembly-Code neben JavaScript in Ihren Webanwendungen. Wie wir an anderer Stelle gesagt haben, soll WebAssembly JavaScript nicht ersetzen; die beiden können stattdessen zusammenarbeiten und jeweils die Stärken des anderen nutzen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die oben beschriebenen Streaming-Methoden nicht verwenden können oder wollen, können Sie stattdessen die nicht-streaming Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Bytecode zu, daher ist ein zusätzlicher Schritt erforderlich, um die Antwort vor dem Kompilieren/Instanziieren des Wasm-Moduls in einen {{jsxref("ArrayBuffer")}} umzuwandeln.

Der entsprechende Code würde so aussehen:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Anzeigen von Wasm in Entwicklerwerkzeugen

In Firefox 54+ hat das Developer Tool Debugger Panel die Funktionalität, die Textdarstellung jedes Wasm-Codes, der in einer Webseite enthalten ist, offenzulegen. Um es anzuzeigen, können Sie zum Debugger Panel gehen und auf den Eintrag "wasm://" klicken.

![Entwicklerwerkzeug-Debugger-Panel mit Hervorhebung eines Moduls.](wasm-debug.png)

Zusätzlich zur Ansicht von WebAssembly als Text können Entwickler WebAssembly mithilfe des Textformats debuggen (Haltepunkte setzen, den Callstack inspizieren, einzelschrittweise ausführen usw.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird der Speicher als kontinuierlicher Bereich von ungetypten Bytes dargestellt, die [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) genannt werden und von [Lade- und Speicheranweisungen](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben werden. In diesem Speichermodell kann jede Lade- oder Speicherung jedes Byte im gesamten linearen Speicher zugreifen, was notwendig ist, um C/C++-Konzepte wie Zeiger getreu darzustellen.

Anders als bei einem nativen C/C++-Programm, bei dem sich der verfügbare Speicherbereich über den gesamten Prozess erstreckt, ist der Speicher, auf den von einer bestimmten WebAssembly-Instanz zugegriffen werden kann, auf einen bestimmten — potenziell sehr kleinen — Bereich beschränkt, der von einem WebAssembly-Speicherobjekt enthalten wird. Dies ermöglicht es einer einzigen Web-Anwendung, mehrere unabhängige Bibliotheken zu verwenden — von denen jede intern WebAssembly verwendet — um separate Speicher zu haben, die vollständig voneinander isoliert sind. Darüber hinaus können neuere Implementierungen auch [geteilte Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Orten verwendet werden können.

In JavaScript kann eine Speicherinstanz als ein erweiterbarer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Falle von geteiltem Speicher) betrachtet werden. Und genau wie bei `ArrayBuffers` kann eine einzelne Web-App viele unabhängige Speicherobjekte erstellen. Sie können eines erstellen, indem Sie den [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Konstruktor verwenden, der als Argumente eine anfängliche Größe und (optional) eine maximale Größe und eine `shared`-Eigenschaft, die angibt, ob es sich um einen geteilten Speicher handelt, annimmt.

Lassen Sie uns damit beginnen, dies durch ein kurzes Beispiel zu erkunden.

1. Erstellen Sie eine weitere neue einfache HTML-Seite (kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie der Seite ein `<script></script>` Element hinzu.
2. Fügen Sie nun die folgende Zeile oben in Ihrem Skript hinzu, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` sind WebAssembly-Seiten — diese sind fest auf 64KB Größe eingestellt. Dies bedeutet, dass die obige Speicherinstanz eine anfängliche Größe von 640KB und eine maximale Größe von 6,4MB hat.

   Der WebAssembly-Speicher gibt seine Bytes frei, indem er einen Puffer-Getter/Setter bereitstellt, der einen ArrayBuffer zurückgibt. Um zum Beispiel direkt 42 in das erste Wort des linearen Speichers zu schreiben, können Sie dies tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, das das Lesen und Schreiben im Little-Endian-Format erzwingt, da der WebAssembly-Speicher immer im Little-Endian-Format vorliegt. Sie können dann denselben Wert mit folgendem Befehl zurückgeben:

   ```js
   data.getUint32(0, true);
   ```

3. Probieren Sie das jetzt in Ihrem Demo aus — speichern Sie das, was Sie bisher hinzugefügt haben, laden Sie es in Ihrem Browser und versuchen Sie dann, die obigen beiden Zeilen in Ihrer JavaScript-Konsole einzugeben.

### Speicher erweitern

Eine Speicherinstanz kann durch Aufrufe von [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) erweitert werden, wobei das Argument wiederum in Einheiten von WebAssembly-Seiten angegeben ist:

```js
memory.grow(1);
```

Wenn bei der Erstellung der Speicherinstanz ein Maximalwert angegeben wurde, wird der Versuch, über dieses Maximum hinaus zu wachsen, eine {{jsxref("RangeError")}}-Ausnahme auslösen. Die Engine nutzt diese angegebene obere Grenze, um Speicher im Voraus zu reservieren, was das Resizing effizienter machen kann.

Hinweis: Da die ByteLength eines {{jsxref("ArrayBuffer")}}s unveränderlich ist, gibt der Puffer-Getter nach einem erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) Vorgang ein neues ArrayBuffer-Objekt (mit der neuen ByteLength) zurück und alle vorherigen ArrayBuffer-Objekte werden "getrennt" oder vom zugrunde liegenden Speicher, auf den sie zuvor verwiesen, getrennt.

Genau wie Funktionen können lineare Speicher in einem Modul definiert oder importiert werden. Ebenso kann ein Modul optional auch seinen Speicher exportieren. Dies bedeutet, dass JavaScript auf den Speicher einer WebAssembly-Instanz entweder durch Erstellen eines neuen `WebAssembly.Memory` und dessen Importierung oder durch Erhalt eines Speicherexports (über [`Instance.prototype.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)) zugreifen kann.

### Ein ausführlicheres Speicherbeispiel

Lassen Sie uns die obigen Behauptungen klarer machen, indem wir uns ein ausführlicheres Speicherbeispiel ansehen — ein WebAssembly-Modul, das die von uns vorher definierte Speicherinstanz importiert, sie mit einem Array von Ganzzahlen füllt und sie dann summiert. Sie finden dies unter [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm)

1. Machen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Gehen Sie zurück zu Ihrer `memory.html`-Beispieldatei und holen Sie Ihr Wasm-Modul ab, kompilieren und instanziieren Sie es wie zuvor — fügen Sie das Folgende am Ende Ihres Skripts hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, und eine Instanz dieses Moduls aufgerufen wird, können wir eine exportierte Funktion `accumulate()` verwenden, um ein Eingabearray direkt im linearen Speicher der Modulinstanz (`mem`) zu erstellen und zu füllen. Fügen Sie dies in Ihren Code ein, wo angegeben:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir den {{jsxref("DataView")}} auf dem Puffer des Speicherobjekts ([`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)), nicht auf dem Speicher selbst, erstellen.

Speicherimporte funktionieren genauso wie Funktionsimporte, nur dass Speicherobjekte als Werte anstelle von JavaScript-Funktionen übergeben werden. Speicherimporte sind aus zwei Gründen nützlich:

- Sie ermöglichen es JavaScript, die anfänglichen Speicherinhalte zu holen und zu erstellen, bevor oder gleichzeitig mit der Modulerstellung.
- Sie ermöglichen es, dass ein einzelnes Speicherobjekt von mehreren Instanzen importiert wird, was ein entscheidender Baustein für die Implementierung von dynamischem Linking in WebAssembly ist.

> [!NOTE]
> Sie finden unser vollständiges Demo unter [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)).

## Tabellen

Eine WebAssembly-Tabelle ist ein erweiterbares typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>), auf die sowohl von JavaScript als auch von WebAssembly-Code zugegriffen werden kann. Während der Speicher ein erweiterbares typisiertes Array von rohen Bytes bereitstellt, ist es unsicher, Referenzen in einem Speicher zu speichern, da eine Referenz ein engine-vertrauenswürdiger Wert ist, dessen Bytes aus Sicherheits-, Portabilitäts- und Stabilitätsgründen nicht direkt von Inhalten gelesen oder geschrieben werden dürfen.

Tabellen haben einen Elementtyp, der die Arten von Referenzen beschränkt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur einen Referenztyp, der von WebAssembly-Code benötigt wird — Funktionen — und somit nur einen gültigen Elementtyp. In zukünftigen Iterationen werden weitere Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen C/C++-Implementierung wird ein Funktionszeiger durch die rohe Adresse des Funktionscodes im virtuellen Adressraum des Prozesses dargestellt und kann daher aus den oben genannten Sicherheitsgründen nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die Ganzzahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen herumgereicht.

Wenn der Zeitpunkt kommt, einen Funktionszeiger aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann gegen die Tabelle sicherheitsmäßig abgegrenzt überprüft werden kann, bevor der Index aufgerufen und die indizierte Funktionsreferenz aufgerufen wird. Somit sind Tabellen derzeit ein eher niedrigstufiges Primitive, das verwendet wird, um niedrigstufige Programmiersprachen-Funktionalität sicher und portabel zu kompilieren.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set), das einen der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), das die Anzahl der Werte erhöht, die in einer Tabelle gespeichert werden können, verändert werden. Dies ermöglicht es dem indirekt-aufrufbaren Satz von Funktionen, sich im Laufe der Zeit zu ändern, was für [dynamische Verlinkungstechniken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Mutationen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) in JavaScript und in Wasm-Modulen zugänglich.

### Ein Tabellenbeispiel

Schauen wir uns ein einfaches Tabellenbeispiel an — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie finden dies unter [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Machen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie sie `table.html`.
3. Holen Sie wie zuvor Ihr Wasm-Modul ab, kompilieren und instanziieren Sie es — fügen Sie das Folgende in ein {{htmlelement("script")}} Element am Ende Ihres HTML-Körpers ein:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Lassen Sie uns nun auf die Daten in den Tabellen zugreifen — fügen Sie die folgenden Zeilen in den angegebenen Abschnitt Ihres Codes ein:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift nacheinander auf jede in der Tabelle gespeicherte Funktionsreferenz zu und instanziiert sie, um die Werte, die sie enthält, in die Konsole zu drucken — beachten Sie, wie jede Funktionsreferenz mit einem Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) abgerufen wird, gefolgt von einem zusätzlichen Satz von Klammern am Ende, um die Funktion tatsächlich aufzurufen.

> [!NOTE]
> Sie finden unser vollständiges Demo unter [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globals

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl von JavaScript zugänglich als auch über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Instanzen importierbar/exportierbar sind. Dies ist sehr nützlich, da es die dynamische Verlinkung mehrerer Module ermöglicht.

Um eine globale WebAssembly-Instanz von innerhalb Ihres JavaScripts zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor, der folgendermaßen aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie können sehen, dass dies zwei Parameter nimmt:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: seinen Datentyp, der jeder innerhalb von WebAssembly-Modulen akzeptierte Datentyp sein kann — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein boolescher Wert, der definiert, ob der Wert veränderbar ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ dem angegebenen Datentyp entspricht.

Wie verwenden wir dies nun? Im folgenden Beispiel definieren wir eine globale Variable als einen veränderbaren `i32`-Typ mit einem Wert von 0.

Der Wert der globalen Variable wird dann zuerst auf `42` mithilfe der `Global.value`-Eigenschaft geändert und dann auf `43` mithilfe der `incGlobal()` Funktion geändert, die aus dem `global.wasm` Modul exportiert wird (diese Fügt dem übergebenen Wert 1 hinzu und gibt dann den neuen Wert zurück).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}\n`
      : `FAIL!\nGot: ${got}\nExpected: ${expected}\n`;
  output.innerText += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> [!NOTE]
> Sie können das Beispiel [live auf GitHub sehen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicity

Da wir nun die Verwendung der wichtigsten WebAssembly-Bausteine demonstriert haben, ist dies ein guter Ort, um das Konzept der Vielheit zu erwähnen. Dies bietet WebAssembly eine Vielzahl von Fortschritten in Bezug auf architektonische Effizienz:

- Ein Modul kann N Instanzen haben, auf die gleiche Weise wie ein Funktionsliteral N Closure-Werte produzieren kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen verwenden, die den "Adressbereich" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz erlauben (siehe [Mehrere Speicher](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen verwenden — dies ist der "Funktionsadressbereich" der Instanz, der verwendet wird, um C-Funktionszeiger zu implementieren. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz erlauben.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen sich alle denselben Adressraum, was [dynamische Verlinkung](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können die Vielheit in Aktion in unserem Artikel über das Verstehen des Textformats sehen — siehe den Abschnitt [Mutierende Tabellen und dynamische Verlinkung](/de/docs/WebAssembly/Guides/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Sie durch die Grundlagen der Verwendung der WebAssembly JavaScript API geführt, um ein WebAssembly-Modul in einen JavaScript-Kontext einzubinden und dessen Funktionen zu nutzen, sowie wie man WebAssembly-Speicher und -Tabellen in JavaScript verwendet. Wir haben auch das Konzept der Vielheit gestreift.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
