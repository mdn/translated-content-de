---
title: Verwenden der WebAssembly-JavaScript-API
slug: WebAssembly/Using_the_JavaScript_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{WebAssemblySidebar}}

Wenn Sie bereits [ein Modul aus einer anderen Sprache mit Tools wie Emscripten kompiliert](/de/docs/WebAssembly/C_to_Wasm) oder [den Code selbst geladen und ausgeführt haben](/de/docs/WebAssembly/Loading_and_running), besteht der nächste Schritt darin, mehr über die anderen Funktionen der WebAssembly-JavaScript-API zu erfahren. Dieser Artikel bringt Ihnen bei, was Sie wissen müssen.

> [!NOTE]
> Wenn Sie mit den in diesem Artikel erwähnten grundlegenden Konzepten nicht vertraut sind und weitere Erklärungen benötigen, lesen Sie zuerst [Konzepte von WebAssembly](/de/docs/WebAssembly/Concepts) und kehren Sie dann zurück.

## Einige einfache Beispiele

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie Sie die WebAssembly-JavaScript-API verwenden und wie Sie damit ein Wasm-Modul in einer Webseite laden können.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repository.

### Vorbereitung des Beispiels

1. Zuerst benötigen wir ein Wasm-Modul! Holen Sie sich unsere Datei [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Erstellen Sie als nächstes eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, falls Sie keine griffbereit haben).
3. Um zu verstehen, was hier passiert, werfen wir einen Blick auf die Textdarstellung unseres Wasm-Moduls (die wir auch in [Umwandlung des WebAssembly-Formats in Wasm](/de/docs/WebAssembly/Text_format_to_Wasm#a_first_look_at_the_text_format) kennenlernen):

   ```wasm
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namensraum hat – die interne Funktion `$i` wird aus `my_namespace.imported_func` importiert. Wir müssen diesen zweistufigen Namensraum in JavaScript widerspiegeln, wenn wir das Objekt schreiben, das in das Wasm-Modul importiert werden soll. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie den folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Fähigkeit, WebAssembly-Module direkt aus den zugrunde liegenden Quellen zu kompilieren und zu instanzieren. Dies wird durch die Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht-streaming-Äquivalente, da sie den Bytecode direkt in `Module`/`Instance`-Instanzen umwandeln können, wodurch die Notwendigkeit entfällt, die {{domxref("Response")}} separat in ein {{jsxref("ArrayBuffer")}} zu packen.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) ebenfalls) zeigt, wie `instantiateStreaming()` verwendet wird, um ein Wasm-Modul abzurufen, eine JavaScript-Funktion zu importieren, es zu kompilieren und zu instanzieren und auf seine exportierte Funktion zuzugreifen – alles in einem Schritt.

Fügen Sie das Folgende zu Ihrem Skript hinzu, unterhalb des ersten Blocks:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Endergebnis davon ist, dass wir unsere exportierte WebAssembly-Funktion `exported_func` aufrufen, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, die den innerhalb der WebAssembly-Instanz bereitgestellten Wert (42) in die Konsole protokolliert. Wenn Sie Ihren Beispielcode jetzt speichern und in einem Browser laden, der WebAssembly unterstützt, sehen Sie dies in Aktion!

> [!NOTE]
> Dies ist ein komplexes, weitschweifiges Beispiel, das sehr wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist – WebAssembly-Code zusammen mit JavaScript in Ihren Webanwendungen zu verwenden. Wie wir an anderer Stelle gesagt haben, zielt WebAssembly nicht darauf ab, JavaScript zu ersetzen; beide können vielmehr zusammenarbeiten und auf die Stärken des jeweils anderen zurückgreifen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die beschriebenen Streaming-Methoden nicht verwenden können oder wollen, können Sie stattdessen die nicht-streaming Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) nutzen.

Diese Methoden greifen nicht direkt auf den Bytecode zu, sodass ein zusätzlicher Schritt erforderlich ist, um die Antwort in ein {{jsxref("ArrayBuffer")}} zu verwandeln, bevor das Wasm-Modul kompiliert/instanziiert wird.

Der entsprechende Code würde so aussehen:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Anzeige von Wasm in Entwicklerwerkzeugen

In Firefox 54+ bietet das Entwicklerwerkzeug-Debugger-Panel die Möglichkeit, die Textdarstellung jedes auf einer Webseite enthaltenen Wasm-Codes freizulegen. Um es anzuzeigen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Debugger-Panel der Entwicklerwerkzeuge hebt ein Modul hervor.](wasm-debug.png)

Zusätzlich zur Anzeige von WebAssembly als Text können Entwickler WebAssembly mit dem Textformat debuggen (Haltepunkte setzen, den Aufrufstapel überprüfen, Einzelschritte ausführen etc.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird der Speicher als ein zusammenhängender Bereich von typlosen Bytes dargestellt, der als [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) bezeichnet wird und der durch [Lese- und Speicherbefehle](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben wird. In diesem Speichermodell kann jeder Lese- oder Speicherbefehl jedes Byte im gesamten linearen Speicherzugang haben, was erforderlich ist, um Konzepte aus C/C++ wie Zeiger genau darzustellen.

Im Gegensatz zu einem nativen C/C++-Programm, bei dem der verfügbare Speicherbereich den gesamten Prozess umfasst, ist der Speicher, der durch eine bestimmte WebAssembly-Instanz zugänglich ist, auf einen spezifischen — potenziell sehr kleinen — Bereich beschränkt, der durch ein WebAssembly-Speicherobjekt bereitgestellt wird. Dies ermöglicht es einer einzigen Webanwendung, mehrere unabhängige Bibliotheken zu verwenden — von denen jede intern WebAssembly verwendet —, um separate Speicher zu haben, die vollständig voneinander isoliert sind. Darüber hinaus können neuere Implementierungen auch [Shared Memory](https://webassembly.github.io/spec/core/syntax/types.html#syntax-shared) erstellen, der zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Stellen verwendet werden kann.

In JavaScript kann eine Speicherinstanz als ein verstellbares [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Fall von Shared Memory) betrachtet werden und, ebenso wie bei `ArrayBuffers`, kann eine einzelne Webanwendung viele unabhängige Speicherobjekte erstellen. Sie können eines mit dem [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Konstruktor erstellen, der als Argumente eine anfängliche Größe und (optional) eine maximale Größe sowie eine `shared`-Eigenschaft, die angibt, ob es sich um einen Shared Memory handelt oder nicht.

Lassen Sie uns das erkunden, indem wir uns ein schnelles Beispiel ansehen.

1. Erstellen Sie eine weitere neue einfache HTML-Seite (kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und benennen Sie sie `memory.html`. Fügen Sie ein `<script></script>`-Element zur Seite hinzu.
2. Fügen Sie jetzt die folgende Zeile oben in Ihrem Skript hinzu, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` ist WebAssembly-Seiten — diese sind auf eine Größe von 64KB festgelegt. Das bedeutet, dass die obige Speicherinstanz eine anfängliche Größe von 640KB und eine maximale Größe von 6.4MB hat.

   WebAssembly-Speicher gibt seine Bytes frei, indem er einen Getter/Setter für den Puffer bereitstellt, der ein ArrayBuffer zurückgibt. Um zum Beispiel 42 direkt in das erste Wort des linearen Speichers zu schreiben, können Sie dies tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, das eine little-endian Lese- und Schreibweise durchsetzt, da WebAssembly-Speicher immer little-endian ist. Sie können dann denselben Wert zurückgeben, indem Sie:

   ```js
   data.getUint32(0, true);
   ```

3. Versuchen Sie dies jetzt in Ihrem Demo — speichern Sie, was Sie bisher hinzugefügt haben, laden Sie es in Ihrem Browser und versuchen Sie dann, die obigen zwei Zeilen in Ihrer JavaScript-Konsole einzugeben.

### Speicher erweitern

Eine Speicherinstanz kann durch Aufrufe an [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) erweitert werden, wobei das Argument erneut in WebAssembly-Seiteneinheiten angegeben wird:

```js
memory.grow(1);
```

Wenn beim Erstellen der Speicherinstanz ein Maximalwert angegeben wurde, führen Versuche, über dieses Maximum hinaus zu wachsen, zu einer {{jsxref("RangeError")}}-Ausnahme. Die Engine nutzt diese angegebenen oberen Grenzen, um Speicher im Voraus zu reservieren, was die Größenänderung effizienter machen kann.

Hinweis: Da die byteLength eines {{jsxref("ArrayBuffer")}} unveränderlich ist, gibt der Puffer-Getter nach einer erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)-Operation ein neues ArrayBuffer-Objekt (mit der neuen byteLength) zurück und alle vorherigen ArrayBuffer-Objekte werden "getrennt" oder vom zugrunde liegenden Speicher, auf den sie zuvor verwiesen haben, getrennt.

Ähnlich wie Funktionen können lineare Speicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul optional auch seinen Speicher exportieren. Dies bedeutet, dass JavaScript Zugriff auf den Speicher einer WebAssembly-Instanz erhalten kann, entweder indem es ein neues `WebAssembly.Memory` erstellt und als Import übergibt oder indem es einen Memory-Export erhält (via [`Instance.prototype.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)).

### Aufwendigeres Speicherbeispiel

Lassen Sie uns die obigen Behauptungen verdeutlichen, indem wir uns ein aufwendigeres Speicherbeispiel ansehen — ein WebAssembly-Modul, das die zuvor definierte Speicherinstanz importiert, sie mit einem Array von Ganzzahlen füllt und dann summiert. Sie finden dies unter [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm)

1. machen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls unter [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Kehren Sie zu Ihrer Beispieldatei `memory.html` zurück und holen Sie sich, kompilieren Sie und instanzieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das Folgende am Ende Ihres Skripts hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // fügen Sie hier Code hinzu
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, können wir angesichts einer Instanz dieses Moduls, die 'instance' genannt wird, eine exportierte Funktion `accumulate()` verwenden, um ein Eingabearray direkt im linearen Speicher (`mem`) der Modulinstanz zu erstellen und zu füllen. Fügen Sie das Folgende in Ihren Code ein, wo es angegeben ist:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir die {{jsxref("DataView")}}-Ansicht auf dem Puffer des Speicherobjekts ([`Memory.prototype.buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)), nicht auf dem Speicher selbst, erstellen.

Speicherimporte funktionieren genauso wie Funktionsimporte, nur dass Speicherobjekte als Werte anstelle von JavaScript-Funktionen übergeben werden. Speicherimporte sind aus zwei Gründen nützlich:

- Sie ermöglichen es JavaScript, den Speicherinhalt vor oder gleichzeitig mit der Modulkompilierung abzurufen und zu erstellen.
- Sie ermöglichen es, dass ein einzelnes Speicherobjekt von mehreren Modulsinstanzen importiert wird, was ein entscheidendes Konstrukt für die Implementierung dynamischer Verknüpfungstechniken in WebAssembly ist.

> [!NOTE]
> Sie können unser vollständiges Demo unter [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([siehe es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) finden.

## Tabellen

Eine WebAssembly-Tabelle ist ein verstellbares typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) das sowohl von JavaScript als auch von WebAssembly-Code zugegriffen werden kann. Während der Speicher ein verstellbares typisiertes Array von rohen Bytes bereitstellt, ist es unsicher, Referenzen in einem Speicher zu speichern, da eine Referenz ein von der Engine vertrauter Wert ist, dessen Bytes aus Sicherheits-, Portabilitäts- und Stabilitätsgründen nicht direkt von Inhalten gelesen oder geschrieben werden dürfen.

Tabellen haben einen Elementtyp, der die Arten von Referenzen beschränkt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur eine Art von Referenz, die von WebAssembly-Code benötigt wird – Funktionen – und somit nur einen gültigen Elementtyp. In zukünftigen Iterationen werden weitere Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen Implementierung von C/C++ wird ein Funktionszeiger durch die rohe Adresse des Funktionscodes im virtuellen Adressraum des Prozesses dargestellt und kann daher aus den oben genannten Sicherheitsgründen nicht direkt in linearem Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die Ganzzahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen herumgereicht.

Wenn es an der Zeit ist, einen Funktionszeiger aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann sicher zeichengeprüft werden kann, bevor die Tabelle indiziert wird und der funktionale Referenzaufruf erfolgt. Tabellen sind derzeit ein ziemlich primitives Mittel mit niedrigem Level, um Low-Level-Programmiersprache sicher und portabel zu kompilieren.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set) mutiert werden, das einen der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), das die Anzahl der Werte erhöht, die in einer Tabelle gespeichert werden können. Dies ermöglicht es dem indirekt-aufrufbare Set von Funktionen, sich im Laufe der Zeit zu ändern, was für [dynamische Verknüpfungstechniken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Mutationen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) in JavaScript, und für Wasm-Module zugänglich.

### Ein Tabellenbeispiel

Schauen wir uns ein einfaches Tabellenbeispiel an – ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie finden dies unter [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Machen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls unter [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie sie `table.html`.
3. Wie zuvor, holen, kompilieren und instanzieren Sie Ihr Wasm-Modul — fügen Sie das Folgende in ein {{htmlelement("script")}}-Element am Ende Ihres HTML-Körpers ein:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // fügen Sie hier Code hinzu
   });
   ```

4. Lassen Sie uns nun auf die Daten in den Tabellen zugreifen — fügen Sie die folgenden Zeilen an der angegebenen Stelle zu Ihrem Code hinzu:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift der Reihe nach auf jede in der Tabelle gespeicherte Funktionsreferenz zu und instanziiert sie, um die Werte, die sie halten, in die Konsole auszugeben — beachten Sie, wie jede Funktionsreferenz mit einem Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) abgerufen wird, dann fügen wir ein zusätzliches Klammerpaar am Ende hinzu, um die Funktion tatsächlich aufzurufen.

> [!NOTE]
> Sie können unser vollständiges Demo unter [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([siehe es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) finden.

## Globale Variablen

WebAssembly kann globale Variableninstanzen erstellen, die sowohl von JavaScript zugänglich sind als auch über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es die dynamische Verknüpfung mehrerer Module ermöglicht.

Um eine WebAssembly-Globale Variable von innerhalb Ihres JavaScripts zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)-Konstruktor, der so aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie sehen, dass dies zwei Parameter benötigt:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: sein Datentyp, der jeder Datentyp sein kann, der innerhalb von WebAssembly-Modulen akzeptiert wird — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein Boolean, der definiert, ob der Wert veränderbar ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ mit dem angegebenen Datentyp übereinstimmt.

Wie verwenden wir das? Im folgenden Beispiel definieren wir eine globale Variable als mutierbare `i32`-Typ mit einem Wert von 0.

Der Wert der globalen Variablen wird dann zuerst auf `42` mit der `Global.value`-Eigenschaft und dann auf 43 mit der `incGlobal()`-Funktion geändert, die aus dem `global.wasm`-Modul exportiert wird (dies addiert 1 zu jedem Wert, der ihm gegeben wird, und gibt dann den neuen Wert zurück).

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

## Multiplikation

Nachdem wir die Anwendung der wichtigsten WebAssembly-Bausteine demonstriert haben, ist dies ein guter Ort, um das Konzept der Multiplikation zu erwähnen. Dies bietet WebAssembly eine Vielzahl von Fortschritten in Bezug auf architektonische Effizienz:

- Ein Modul kann N Instanzen haben, genauso wie ein Funktionsliteral N Abschlusswerte erzeugen kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen verwenden, die den "Adressraum" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz erlauben (siehe [Multiple Memories](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen verwenden — das ist der "Funktionsadressraum" der Instanz, der zur Implementierung von C-Funktionszeigern verwendet wird. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz zulassen.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen alle denselben Adressraum, was das [dynamische Verknüpfen](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können die Multiplikation in unserer "Understanding text format"-Artikel in Aktion sehen — siehe den Abschnitt [Mutating tables and dynamic linking section](/de/docs/WebAssembly/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Sie durch die Grundlagen der Verwendung der WebAssembly-JavaScript-API geführt, um ein WebAssembly-Modul in einem JavaScript-Kontext einzubinden und seine Funktionen zu nutzen, und wie man WebAssembly-Speicher und -Tabellen in JavaScript verwendet. Wir haben auch das Konzept der Multiplikation angeschnitten.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [Konzepte von WebAssembly](/de/docs/WebAssembly/Concepts)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
