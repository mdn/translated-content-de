---
title: Verwendung der WebAssembly-JavaScript-API
slug: WebAssembly/Guides/Using_the_JavaScript_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Wenn Sie bereits [ein Modul aus einer anderen Sprache mit Tools wie Emscripten kompiliert](/de/docs/WebAssembly/Guides/C_to_Wasm) oder [den Code selbst geladen und ausgeführt](/de/docs/WebAssembly/Guides/Loading_and_running) haben, besteht der nächste Schritt darin, mehr über die Verwendung der anderen Funktionen der WebAssembly-JavaScript-API zu erfahren. Dieser Artikel vermittelt Ihnen das benötigte Wissen.

> [!NOTE]
> Wenn Ihnen die in diesem Artikel erwähnten Grundkonzepte nicht vertraut sind und Sie mehr Erklärung benötigen, lesen Sie zuerst [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts) und kommen Sie dann zurück.

## Einige Beispiele

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie Sie die WebAssembly-JavaScript-API verwenden und wie Sie sie nutzen können, um ein Wasm-Modul auf einer Webseite zu laden.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repository.

### Vorbereitung des Beispiels

1. Zuerst benötigen wir ein Wasm-Modul! Holen Sie sich unsere [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm)-Datei und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Erstellen Sie als nächstes eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, wenn Sie keine leicht verfügbare haben).
3. Um uns zu helfen zu verstehen, was hier vor sich geht, schauen wir uns die Textdarstellung unseres Wasm-Moduls an (die wir auch im [Konvertieren des WebAssembly-Formats zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm#a_first_look_at_the_text_format) kennenlernen):

   ```wat
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namensraum hat — die interne Funktion `$i` wird aus `my_namespace.imported_func` importiert. Wir müssen diesen zweistufigen Namensraum in JavaScript widerspiegeln, wenn wir das zu importierende Objekt in das Wasm-Modul schreiben. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie den folgenden Code ein:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Fähigkeit, WebAssembly-Module direkt aus den zugrunde liegenden Quellen zu kompilieren und zu instanziieren. Dies wird durch die Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht-streaming Gegenstücke, weil sie den Bytecode direkt in `Module`/`Instance`-Instanzen umwandeln können, wodurch die Notwendigkeit entfällt, die [`Response`](/de/docs/Web/API/Response) separat in einen {{jsxref("ArrayBuffer")}} zu stecken.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) zeigt, wie `instantiateStreaming()` verwendet wird, um ein Wasm-Modul abzurufen, eine JavaScript-Funktion darin zu importieren, es zu kompilieren und zu instanziieren und auf seine exportierte Funktion zuzugreifen — alles in einem Schritt.

Fügen Sie das folgende Ihrem Skript, unter dem ersten Block, hinzu:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Endergebnis hiervon ist, dass wir unsere exportierte WebAssembly-Funktion `exported_func` aufrufen, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, die den innerhalb der WebAssembly-Instanz bereitgestellten Wert (42) in die Konsole schreibt. Wenn Sie Ihren Beispielcode jetzt speichern und in einem Browser laden, der WebAssembly unterstützt, sehen Sie dies in Aktion!

> [!NOTE]
> Dies ist ein umständliches, langatmiges Beispiel, das sehr wenig bewirkt, aber es dient dazu zu veranschaulichen, was möglich ist — die Verwendung von WebAssembly-Code neben JavaScript in Ihren Webanwendungen. Wie wir anderswo gesagt haben, zielt WebAssembly nicht darauf ab, JavaScript zu ersetzen; vielmehr können die beiden zusammenarbeiten und auf die Stärken des jeweils anderen bauen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die oben beschriebenen Streaming-Methoden nicht verwenden können oder möchten, können Sie stattdessen die nicht-streaming Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Bytecode zu, daher ist ein zusätzlicher Schritt erforderlich, um die Antwort in einen {{jsxref("ArrayBuffer")}} zu verwandeln, bevor das Wasm-Modul kompiliert/instanziiert wird.

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

In Firefox 54+ verfügt das Entwicklerwerkzeug-Debugger-Panel über eine Funktionalität, um die Textdarstellung von jeglichem Wasm-Code, der in einer Webseite enthalten ist, freizulegen. Um sie anzuzeigen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Entwicklerwerkzeuge-Debugger-Panel hebt ein Modul hervor.](wasm-debug.png)

Zusätzlich zur Betrachtung von WebAssembly als Text sind Entwickler in der Lage, WebAssembly mit Hilfe des Textformats zu debuggen (Haltepunkte setzen, den Aufrufstapel inspizieren, Einzelschritte durchführen usw.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird Speicher als ein zusammenhängender Bereich von untypisierten Bytes dargestellt, der als [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) bezeichnet wird und durch [Lade- und Speicheranweisungen](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben wird. In diesem Speichermodell kann jeder Ladevorgang oder jede Speicherung auf jedes Byte im gesamten linearen Speicher zugreifen, was notwendig ist, um C/C++-Konzepte wie Zeiger genau darzustellen.

Im Gegensatz zu einem nativen C/C++-Programm, bei dem sich der verfügbare Speicherbereich über den gesamten Prozess erstreckt, ist der Speicher, der von einer bestimmten WebAssembly-Instanz zugänglich ist, auf einen bestimmten — möglicherweise sehr kleinen — Bereich beschränkt, der von einem WebAssembly-Speicherobjekt umfasst wird. Dies ermöglicht es einer einzelnen Web-App, mehrere unabhängige Bibliotheken zu verwenden — jede von ihnen verwendet intern WebAssembly —, um separate Speicher zu besitzen, die vollständig voneinander isoliert sind. Darüber hinaus können neuere Implementierungen auch [gemeinsame Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) erstellen, die zwischen Fenster- und Worker-Kontexten über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Stellen verwendet werden können.

In JavaScript kann eine Speicherinstanz als ein anpassbarer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Fall von gemeinsamen Speichern) betrachtet werden und, ebenso wie `ArrayBuffers`, kann eine einzelne Web-App viele unabhängige Speicherobjekte erstellen. Sie können eines mit dem [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Konstruktor erstellen, der als Argumente eine anfängliche Größe und (optional) eine maximale Größe und eine `shared`-Eigenschaft, die angibt, ob es sich um einen gemeinsamen Speicher handelt, akzeptiert.

Lassen Sie uns dies durch ein schnelles Beispiel erkunden.

1. Erstellen Sie eine weitere neue einfache HTML-Seite (kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie der Seite ein `<script></script>`-Element hinzu.
2. Fügen Sie jetzt die folgende Zeile am Anfang Ihres Skripts hinzu, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` sind WebAssembly-Seiten — diese sind fest auf 64KB Größe eingestellt. Das bedeutet, dass die obige Speicherinstanz eine Anfangsgröße von 640KB und eine maximale Größe von 6,4MB hat.

   WebAssembly-Speicher legt seine Bytes frei, indem es einen Puffer-Getter/Setter bereitstellt, der einen ArrayBuffer zurückgibt. Zum Beispiel, um 42 direkt in das erste Wort des linearen Speichers zu schreiben, können Sie dies tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, das einen little-endian Lese- und Schreibvorgang erzwingt, da der WebAssembly-Speicher immer little-endian ist. Sie können dann denselben Wert mit folgendem Befehl zurückgeben:

   ```js
   data.getUint32(0, true);
   ```

3. Probieren Sie dies jetzt in Ihrem Demo aus — speichern Sie, was Sie bisher hinzugefügt haben, laden Sie es in Ihrem Browser und versuchen Sie dann, die oben stehenden zwei Zeilen in Ihre JavaScript-Konsole einzugeben.

### Wachstum des Speichers

Eine Speicherinstanz kann durch Aufrufe an [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden, wobei das Argument wieder in Einheiten von WebAssembly-Seiten angegeben wird:

```js
memory.grow(1);
```

Wenn bei der Erstellung der Speicherinstanz ein maximaler Wert angegeben wurde, führen die Versuche, das maximale Maß zu überschreiten, zu einer {{jsxref("RangeError")}}-Ausnahme. Die Engine nutzt diese angegebenen oberen Grenzen aus, um Speicher im Voraus zu reservieren, was die Effizienz des Resizings verbessern kann.

Hinweis: Da die byteLength eines {{jsxref("ArrayBuffer")}} unveränderlich ist, gibt der Puffer-Getter nach einem erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Vorgang ein neues ArrayBuffer-Objekt zurück (mit der neuen Byte-Länge), und alle vorherigen ArrayBuffer-Objekte werden "getrennt" oder von dem zugrunde liegenden Speicher, auf den sie zuvor verwiesen haben, getrennt.

Genau wie Funktionen können lineare Speicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul optional auch seinen Speicher exportieren. Das bedeutet, dass JavaScript auf den Speicher einer WebAssembly-Instanz entweder durch Erstellen eines neuen `WebAssembly.Memory` und dessen Einfügen als Import oder durch Empfang eines Memory-Exports (via [`Instance.prototype.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)) zugreifen kann.

### Aufwändigeres Speicherbeispiel

Lassen Sie uns die obigen Aussagen durch ein detaillierteres Speicherbeispiel verdeutlichen — ein WebAssembly-Modul, das die zuvor definierten Speicherinstanz importiert, sie mit einem Array von Ganzzahlen füllt und sie dann summiert. Sie können dies bei [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm) finden.

1. Erstellen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Gehen Sie zurück zu Ihrer `memory.html`-Beispieldatei und holen, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das Folgende unten in Ihr Skript ein:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert hat, können wir, gegeben ein Instanz dieses Moduls namens instance, eine exportierte Funktion `accumulate()` verwenden, um ein Eingabearray direkt in den linearen Speicher der Modul-Instanz (`mem`) zu erstellen und zu füllen. Fügen Sie das Folgende in Ihren Code ein, wo angegeben:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir die {{jsxref("DataView")}}-Ansicht auf dem Puffer des Speicherobjekts ([`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)), nicht auf dem Speicher selbst, erstellen.

Speicherimporte funktionieren genauso wie Funktionsimporte, nur dass Speicherobjekte anstatt von JavaScript-Funktionen als Werte übergeben werden. Speicherimporte sind aus zwei Gründen nützlich:

- Sie erlauben es JavaScript, die anfänglichen Inhalte des Speichers vor oder zeitgleich mit der Modulerstellung abzurufen und zu erstellen.
- Sie erlauben einem einzelnen Speicherobjekt, von mehreren Modulinstanzen importiert zu werden, was ein kritisches Bauelement für die Umsetzung von dynamischem Linken in WebAssembly ist.

> [!NOTE]
> Sie können unser komplettes Demo bei [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) finden.

## Tabellen

Eine WebAssembly-Tabelle ist ein anpassbares, typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>), das von sowohl JavaScript als auch WebAssembly-Code zugegriffen werden kann. Während der Speicher ein anpassbares, typisiertes Array von Rohbytes bietet, ist es unsicher, Referenzen in einem Speicher zu speichern, da eine Referenz ein von der Engine vertrauter Wert ist, dessen Bytes aus Sicherheits-, Portabilitäts- und Stabilitätsgründen nicht direkt von Inhalten gelesen oder geschrieben werden dürfen.

Tabellen haben einen Elementtyp, der die Arten von Referenzen einschränkt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur einen Referenztyp, den WebAssembly-Code benötigt — Funktionen — und somit nur einen gültigen Elementtyp. In zukünftigen Iterationen werden weitere Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++, die Funktionszeiger verwenden, zu kompilieren. In einer nativen Implementierung von C/C++ wird ein Funktionszeiger durch die Rohadresse des Codes der Funktion im virtuellen Adressraum des Prozesses dargestellt und kann daher, aus den oben genannten Sicherheitsgründen, nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die Ganzzahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen herumgereicht.

Wenn es an der Zeit ist, einen Funktionszeiger aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann sicher gegen die Tabelle überprüft werden kann, bevor er den indizierten Funktionsverweis aufruft. Somit sind Tabellen derzeit ein recht primitives Maß zur sicheren und portablen Übersetzung von Sprachmerkmalen auf niedriger Ebene.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set), das einen der im Table gespeicherten Werte aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), das die Anzahl der Werte erhöht, die in einem Table gespeichert werden können, verändert werden. Dies erlaubt es dem indirekt aufrufbaren Set von Funktionen, sich im Laufe der Zeit zu ändern, was für [dynamische Linktechniken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Änderungen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) in JavaScript und in Wasm-Modulen zugänglich.

### Ein Beispiel für eine Tabelle

Schauen wir uns ein einfaches Beispiel für eine Tabelle an — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie können dies bei [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm) finden.

1. Erstellen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie sie `table.html`.
3. Wie zuvor, holen, kompilieren und instanziieren Sie Ihr Wasm-Modul — fügen Sie das Folgende in ein {{htmlelement("script")}}-Element am Ende Ihres HTML-Bodys ein:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Greifen wir nun auf die Daten in den Tabellen zu — fügen Sie die folgenden Zeilen an der angegebenen Stelle in Ihren Code ein:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift der Reihe nach auf jeden in der Tabelle gespeicherten Funktionsverweis zu und instanziiert sie, um die von ihnen gehaltenen Werte in die Konsole zu drucken — beachten Sie, wie jeder Funktionsverweis mit einem [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)-Aufruf abgerufen wird, und dann fügen wir ein zusätzliches Paar Klammern am Ende hinzu, um die Funktion tatsächlich aufzurufen.

> [!NOTE]
> Sie können unsere vollständige Demo bei [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) finden.

## Globals

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl von JavaScript aus zugänglich sind als auch über einen oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es das dynamische Verbinden mehrerer Module ermöglicht.

Um eine WebAssembly-Globale-Instanz aus Ihrem JavaScript zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor, der wie folgt aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie sehen, dass dies zwei Parameter akzeptiert:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: sein Datentyp, der jeder Datentyp sein kann, der innerhalb von WebAssembly-Modulen akzeptiert wird — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein Boolean-Wert, der definiert, ob der Wert veränderlich ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ mit dem angegebenen Datentyp übereinstimmt.

Wie verwenden wir dies? Im folgenden Beispiel definieren wir eine globale Variable als einen veränderlichen `i32`-Typ mit einem Wert von 0.

Der Wert der globalen Variablen wird dann geändert, zunächst auf `42` mit Hilfe der `Global.value`-Eigenschaft und dann auf 43 mit Hilfe der `incGlobal()`-Funktion, die aus dem `global.wasm`-Modul exportiert wurde (dies addiert 1 zu welchem Wert auch immer ihm gegeben wird und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicität

Da wir nun die Verwendung der wichtigsten WebAssembly-Bausteine demonstriert haben, ist dies ein guter Ort, um das Konzept der Multiplicität zu erwähnen. Dies verschafft WebAssembly eine Vielzahl von Fortschritten in Bezug auf architektonische Effizienz:

- Ein Modul kann N Instanzen haben, ebenso wie ein Funktionsliteral N Closure-Werte erzeugen kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen verwenden, die den "Adressraum" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz erlauben (siehe [Multiple Memories](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen verwenden — dies ist der "Funktionsadressraum" der Instanz, der verwendet wird, um C-Funktionszeiger zu implementieren. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz erlauben.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen alle denselben Adressraum, was [dynamische Verlinkung](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können Multiplicität in Aktion in unserem Artikel über das Verständnis des Textformats sehen — siehe den Abschnitt [Mutierende Tabellen und dynamische Verlinkung](/de/docs/WebAssembly/Guides/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Sie durch die Grundlagen der Verwendung der WebAssembly-JavaScript-API geführt, um ein WebAssembly-Modul in einen JavaScript-Kontext einzubinden und dessen Funktionen zu nutzen, sowie wie man WebAssembly-Speicher und -Tabellen in JavaScript verwendet. Außerdem haben wir das Konzept der Multiplicität angesprochen.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
