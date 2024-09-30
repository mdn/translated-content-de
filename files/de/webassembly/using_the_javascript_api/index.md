---
title: Verwendung der WebAssembly JavaScript-API
slug: WebAssembly/Using_the_JavaScript_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{WebAssemblySidebar}}

Wenn Sie bereits [ein Modul aus einer anderen Sprache mit Tools wie Emscripten kompiliert](/de/docs/WebAssembly/C_to_Wasm) oder [den Code selbst geladen und ausgeführt haben](/de/docs/WebAssembly/Loading_and_running), ist der nächste Schritt, mehr über die Verwendung der anderen Funktionen der WebAssembly JavaScript-API zu erfahren. Dieser Artikel vermittelt Ihnen das notwendige Wissen.

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten, die in diesem Artikel erwähnt werden, nicht vertraut sind und weitere Erklärungen benötigen, lesen Sie zuerst [WebAssembly-Konzepten](/de/docs/WebAssembly/Concepts) und kehren Sie dann zurück.

## Einige einfache Beispiele

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie die WebAssembly JavaScript-API verwendet wird und wie sie verwendet werden kann, um ein Wasm-Modul in eine Webseite zu laden.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repo.

### Vorbereitung des Beispiels

1. Zuerst benötigen wir ein Wasm-Modul! Holen Sie sich unsere [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm)-Datei und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als nächstes eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, wenn Sie noch keine bereit haben).
3. Um zu verstehen, was hier passiert, lassen Sie uns die Textdarstellung unseres Wasm-Moduls ansehen (die wir auch in [Konvertieren von WebAssembly-Format zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm#a_first_look_at_the_text_format) begegnen):

   ```wasm
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namespace hat — die interne Funktion `$i` wird von `my_namespace.imported_func` importiert. Diesen zweistufigen Namespace müssen wir in JavaScript widerspiegeln, wenn wir das Objekt schreiben, das in das Wasm-Modul importiert werden soll. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Fähigkeit, WebAssembly-Module direkt aus den zugrundeliegenden Quellen zu kompilieren und zu instanziieren. Dies wird mithilfe der Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre Nicht-Streaming-Gegenstücke, da sie den Bytecode direkt in `Module`-/`Instance`-Instanzen umwandeln können, ohne die Notwendigkeit, die [`Response`](/de/docs/Web/API/Response) separat in einen {{jsxref("ArrayBuffer")}} zu übertragen.

Dieses Beispiel (sehen Sie unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) zeigt, wie `instantiateStreaming()` verwendet wird, um ein Wasm-Modul zu holen, eine JavaScript-Funktion darin zu importieren, es zu kompilieren und zu instanziieren und seine exportierte Funktion zuzugreifen — alles in einem Schritt.

Fügen Sie den folgenden Code zu Ihrem Script unterhalb des ersten Blocks hinzu:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Endergebnis ist, dass unsere exportierte WebAssembly-Funktion `exported_func` aufgerufen wird, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, welche den innerhalb der WebAssembly-Instanz bereitgestellten Wert (42) in der Konsole protokolliert. Wenn Sie Ihren Beispielcode jetzt speichern und in einem Browser laden, der WebAssembly unterstützt, werden Sie dies in Aktion sehen!

> [!NOTE]
> Dies ist ein umständliches, weitschweifiges Beispiel, das sehr wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist — WebAssembly-Code neben JavaScript in Ihren Webanwendungen zu verwenden. Wie wir bereits anderswo gesagt haben, zielt WebAssembly nicht darauf ab, JavaScript zu ersetzen; die beiden können stattdessen zusammenarbeiten und dabei jeweils die Stärken des anderen nutzen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die oben beschriebenen Streaming-Methoden nicht verwenden können oder möchten, können Sie stattdessen die Nicht-Streaming-Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Bytecode zu, daher ist ein zusätzlicher Schritt erforderlich, um die Antwort in einen {{jsxref("ArrayBuffer")}} umzuwandeln, bevor Sie das Wasm-Modul kompilieren/instanziieren.

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

Ab Firefox 54+ hat das Debugger-Panel des Entwicklerwerkzeugs die Funktionalität, die Textdarstellung jedes in einer Webseite enthaltenen Wasm-Codes offenzulegen. Um es anzuzeigen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Debugger-Panel der Entwicklerwerkzeuge, das ein Modul hervorhebt.](wasm-debug.png)

Neben der Möglichkeit, WebAssembly als Text anzuzeigen, können Entwickler WebAssembly im Textformat debuggen (Haltepunkte setzen, den Aufrufstapel inspizieren, Einzelschritte durchführen usw.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird Speicher als zusammenhängender Bereich von untypisierten Bytes dargestellt, der [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) genannt wird und von [Lade- und Speicheranweisungen](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben wird. In diesem Speichermodell kann jede Lade- oder Speicheroperation auf jedes Byte im gesamten linearen Speicher zugreifen, was notwendig ist, um C/C++-Konzepte wie Zeiger originalgetreu darzustellen.

Anders als bei einem nativen C/C++-Programm, wo der verfügbare Speicherbereich den gesamten Prozess überspannt, ist der Speicher, auf den eine bestimmte WebAssembly-Instanz zugreifen kann, auf einen spezifischen — möglicherweise sehr kleinen — Bereich beschränkt, der von einem WebAssembly Memory-Objekt enthalten wird. Dies ermöglicht einer einzelnen Webanwendung, mehrere unabhängige Bibliotheken zu verwenden — jede davon verwendet intern WebAssembly — um separate Speicher zu haben, die vollständig voneinander isoliert sind. Darüber hinaus können neuere Implementierungen auch [Shared Memories](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) erstellen, die über [`postMessage()`](/de/docs/Web/API/Window/postMessage) zwischen Fenster- und Worker-Kontexten übertragen und an mehreren Stellen verwendet werden können.

In JavaScript kann eine Memory-Instanz als veränderbarer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Falle von Shared Memories) betrachtet werden und, ebenso wie bei `ArrayBuffers`, kann eine einzelne Webanwendung viele unabhängige Memory-Objekte erstellen. Sie können eines mit dem Konstruktor [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory) erstellen, der als Argumente eine initiale Größe und (optional) eine maximale Größe sowie eine `shared>`-Eigenschaft nimmt, die festlegt, ob es sich um einen Shared Memory handelt oder nicht.

Lassen Sie uns dies anhand eines kurzen Beispiels erkunden.

1. Erstellen Sie eine weitere neue einfache HTML-Seite (kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie der Seite ein `<script></script>`-Element hinzu.
2. Fügen Sie nun die folgende Zeile am Anfang Ihres Scripts hinzu, um eine Memory-Instanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` ist WebAssembly-Seiten — diese sind fest auf 64 KB Größe eingestellt. Dies bedeutet, dass die obige Memory-Instanz eine Anfangsgröße von 640 KB und eine maximale Größe von 6,4 MB hat.

   WebAssembly-Memory stellt seine Bytes durch einen Buffer-Getter/-Setter bereit, der einen ArrayBuffer zurückgibt. Um zum Beispiel 42 direkt in das erste Wort des linearen Speichers zu schreiben, können Sie dies tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, um einen Little-Endian-Lese- und Schreibmodus zu erzwingen, da WebAssembly-Speicher immer Little-Endian ist. Den gleichen Wert können Sie dann zurückgeben mit:

   ```js
   data.getUint32(0, true);
   ```

3. Versuchen Sie dies jetzt in Ihrem Demo — speichern Sie bisheriges und laden Sie es in Ihrem Browser, probieren Sie dann die obigen zwei Zeilen in Ihrer JavaScript-Konsole aus.

### Speicher vergrößern

Eine Speicherinstanz kann durch Aufrufe von [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) vergrößert werden, wobei das Argument erneut in Einheiten von WebAssembly-Seiten angegeben wird:

```js
memory.grow(1);
```

Wenn beim Erstellen der Speicherinstanz ein maximaler Wert angegeben wurde, werden Versuche, über dieses Maximum hinaus zu wachsen, eine {{jsxref("RangeError")}}-Exception auslösen. Die Engine nutzt diese angegebenen Obergrenzen, um im Voraus Speicher zu reservieren, was das Resizing effizienter machen kann.

Hinweis: Da die byteLength eines {{jsxref("ArrayBuffer")}} unveränderlich ist, gibt der Buffer-Getter nach einer erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)-Operation ein neues ArrayBuffer-Objekt mit der neuen byteLength zurück und alle vorherigen ArrayBuffer-Objekte werden "abgetrennt" oder von dem darunterliegenden Speicher, auf den sie zuvor zeigten, getrennt.

Genau wie Funktionen können Linearspeicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul optional seinen Speicher exportieren. Dies bedeutet, dass JavaScript auf den Speicher einer WebAssembly-Instanz zugreifen kann, entweder durch Erstellen eines neuen `WebAssembly.Memory` und Übergeben als Import oder durch Empfangen eines Memory-Exports (über [`Instance.prototype.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)).

### Aufwendigeres Speicherbeispiel

Lassen Sie uns die obigen Anforderungen klarer machen, indem wir uns ein aufwendigeres Speicherbeispiel ansehen — ein WebAssembly-Modul, das die von uns zuvor definierte Memory-Instanz importiert, sie mit einem Array von Ganzzahlen füllt und dann summiert. Sie finden dies bei [memory.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm).

1. Erstellen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) ansehen.

2. Gehen Sie zurück zu Ihrer `memory.html`-Beispieldatei und holen, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das folgende ans Ende Ihres Scripts hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, können wir eine exportierte Funktion `accumulate()` verwenden, um ein Eingangsarray direkt im linearen Speicher (`mem`) der Modulinstanz zu erstellen und zu füllen. Fügen Sie den folgenden Code in Ihr Script ein, an der angegebenen Stelle:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir die {{jsxref("DataView")}}-Ansicht auf dem Buffer-Objekt der Memory anlegen ([`Memory.prototype.buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)), nicht auf dem Memory selbst.

Memory-Importe funktionieren ähnlich wie Funktionsimporte, nur dass Memory-Objekte als Werte und nicht als JavaScript-Funktionen übergeben werden. Memory-Importe sind aus zwei Gründen nützlich:

- Sie ermöglichen JavaScript, den initialen Inhalt des Speichers vor oder gleichzeitig mit der Modulerstellung abzurufen und zu erstellen.
- Sie ermöglichen, dass ein einzelnes Memory-Objekt von mehreren Modulinstanzen importiert wird, was ein kritischer Baustein für die Implementierung von dynamischem Linking in WebAssembly ist.

> [!NOTE]
> Sie finden unser vollständiges Demo unter [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)).

## Tabellen

Eine WebAssembly-Tabelle ist ein veränderbares typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>), auf das sowohl JavaScript als auch WebAssembly-Code zugreifen können. Während Memory eine veränderbare, typisierte Anzeige roher Bytes bietet, ist es unsicher, Referenzen in einem Memory zu speichern, da eine Referenz ein von der Engine vertrauenswürdiger Wert ist, dessen Bytes zum Schutz, zur Portabilität und aus Stabilitätsgründen nicht direkt von Inhalt gelesen oder geschrieben werden dürfen.

Tabellen haben einen Elementtyp, der die Arten von Referenzen einschränkt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur einen Typ von Referenz, der von WebAssembly-Code benötigt wird — Funktionen — und damit nur einen gültigen Elementtyp. In zukünftigen Iterationen werden mehr Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen Implementierung von C/C++ wird ein Funktionszeiger durch die rohe Adresse des Funktionscode im virtuellen Adressraum des Prozesses dargestellt und kann daher aus den oben genannten Sicherheitsgründen nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die ganze Zahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen herumgereicht.

Wenn es an der Zeit ist, einen Funktionszeiger aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann sicher gegen die Tabelle geprüft werden kann, bevor die indexierte Funktionsreferenz aufgerufen wird. Daher sind Tabellen derzeit eher ein Low-Level-Primitiv zur sicheren und portablen Kompilierung von Low-Level-Programmiersprachen-Features.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set) verändert werden, welches einen der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), welches die Anzahl der Werte erhöht, die in einer Tabelle gespeichert werden können. Dies erlaubt der indirekt aufrufbaren Menge an Funktionen, sich im Laufe der Zeit zu ändern, was für [dynamische Linktechniken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Mutationen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) in JavaScript und für Wasm-Module zugänglich.

### Ein Tabellenbeispiel

Sehen wir uns ein einfaches Tabellenbeispiel an — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie finden dies bei [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Erstellen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie sie `table.html`.
3. Wie zuvor, holen, kompilieren und instanziieren Sie Ihr Wasm-Modul — fügen Sie das folgende in ein {{htmlelement("script")}}-Element am Ende Ihres HTML-Körpers hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Lassen Sie uns nun die Daten in den Tabellen lesen — fügen Sie die folgenden Zeilen an der angegebenen Stelle in Ihr Script ein:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift nacheinander auf jede Funktionsreferenz zu, die in der Tabelle gespeichert ist, und instanziiert sie, um die Werte, die sie enthalten, in der Konsole auszugeben — beachten Sie, wie jede Funktionsreferenz mit einem Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) abgerufen wird, und dann fügen wir eine weitere Klammer dazu, um die Funktion tatsächlich aufzurufen.

> [!NOTE]
> Sie finden unser vollständiges Demo unter [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globals

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl vom JavaScript zugänglich als auch importierbar/exportierbar über einen oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen sind. Dies ist sehr nützlich, da es das dynamische Linking mehrerer Module erlaubt.

Um eine WebAssembly-Globaleinstanz innerhalb Ihres JavaScripts zu erstellen, verwenden Sie den Konstruktor [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global), der so aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie können sehen, dass dies zwei Parameter nimmt:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: der Datentyp, der jede Art von Datentyp sein kann, der innerhalb von WebAssembly-Modulen akzeptiert wird — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein Boolean, der definiert, ob der Wert änderbar ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ mit dem angegebenen Datentyp übereinstimmt.

Wie verwenden wir das? Im folgenden Beispiel definieren wir eine globale Variable als eine veränderbare `i32`-Type mit einem Wert von 0.

Der Wert der globalen Variablen wird dann zuerst auf `42` geändert, indem die `Global.value` Eigenschaft verwendet wird, und dann auf 43 mit der Funktion `incGlobal()`, die aus dem `global.wasm`-Modul exportiert wird (dies fügt zu jedem Wert, der an sie übergeben wird, 1 hinzu und gibt dann den neuen Wert zurück).

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

## Multiplicität

Jetzt, da wir die Verwendung der wichtigsten WebAssembly-Bausteine demonstriert haben, ist dies ein guter Punkt, um das Konzept der Multiplicität zu erwähnen. Dies bietet WebAssembly eine Vielzahl von Fortschritten in Bezug auf architektonische Effizienz:

- Ein Modul kann N Instanzen haben, genauso wie ein Funktionsliteral N Abschlusswerte produzieren kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen verwenden, die den "Adressraum" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz zulassen (siehe [Mehrere Speicher](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen verwenden — dies ist der "Funktionsadressraum" der Instanz, der für die Implementierung von C-Funktionszeigern verwendet wird. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz zulassen.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen sich alle den gleichen Adressraum, was [dynamisches Linking](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können die Multiplicität in unserem Artikel über das Verständnis des Textformats in Aktion sehen — siehe den Abschnitt [Mutieren von Tabellen und dynamisches Linking](/de/docs/WebAssembly/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundlagen der Verwendung der WebAssembly JavaScript-API vermittelt, um ein WebAssembly-Modul in einem JavaScript-Kontext einzuschließen und dessen Funktionen zu nutzen, sowie wie man WebAssembly-Speicher und -Tabellen in JavaScript verwendet. Wir haben auch das Konzept der Multiplicität berührt.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
