---
title: Verwendung der WebAssembly JavaScript API
slug: WebAssembly/Guides/Using_the_JavaScript_API
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Dieser Artikel lehrt Sie, wie Sie die wichtigsten Funktionen der WebAssembly JavaScript API nutzen, einschließlich des Ladens von Wasm-Modulen und der Manipulation von WebAssembly-Speichern, -Tabellen und -Globalen.

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten, die in diesem Artikel erwähnt werden, nicht vertraut sind und eine ausführlichere Erklärung benötigen, lesen Sie zunächst [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts) und kehren Sie dann zurück.

## Laden von Wasm-Modulen in JavaScript

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie die WebAssembly JavaScript API verwendet wird und wie damit ein Wasm-Modul in eine Webseite geladen wird.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repo.

### Vorbereitung des Beispiels

1. Zuerst benötigen wir ein Wasm-Modul! Holen Sie sich unsere [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm)-Datei und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als nächstes eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, wenn Sie keine leicht verfügbare haben).
3. Um zu verstehen, was hier vor sich geht, schauen wir uns die textuelle Darstellung unseres Wasm-Moduls an (die wir auch in [Konvertierung des WebAssembly-Formats zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm#a_first_look_at_the_text_format) kennenlernen):

   ```wat
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namespace hat — die interne Funktion `$i` wird von `my_namespace.imported_func` importiert. Wir müssen diesen zweistufigen Namespace in JavaScript widerspiegeln, wenn wir das Objekt schreiben, das in das Wasm-Modul importiert werden soll. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie den folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Fähigkeit, WebAssembly-Module direkt aus zugrunde liegenden Quellen zu kompilieren und zu instanziieren. Dies wird mit den Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht streamenden Gegenstücke, da sie den Bytecode direkt in `Module`-/`Instance`-Instanzen umwandeln können, ohne den [`Response`](/de/docs/Web/API/Response) separat in einen {{jsxref("ArrayBuffer")}} umwandeln zu müssen.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)-Demo auf GitHub und [ansehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) zeigt, wie `instantiateStreaming()` verwendet wird, um ein Wasm-Modul abzurufen, eine JavaScript-Funktion darin zu importieren, es zu kompilieren und zu instanziieren und auf seine exportierte Funktion zuzugreifen — alles in einem Schritt.

Fügen Sie das Folgende zu Ihrem Skript unter dem ersten Block hinzu:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Endergebnis ist, dass wir unsere exportierte WebAssembly-Funktion `exported_func` aufrufen, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, welche den im WebAssembly-Instanz bereitgestellten Wert (42) in die Konsole protokolliert. Wenn Sie Ihren Beispielcode jetzt speichern und in einem Browser laden, der WebAssembly unterstützt, sehen Sie dies in Aktion!

> [!NOTE]
> Dies ist ein verworrenes, langatmiges Beispiel, das sehr wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist — die Verwendung von WebAssembly-Code zusammen mit JavaScript in Ihren Webanwendungen. Wie wir anderswo gesagt haben, beabsichtigt WebAssembly nicht, JavaScript zu ersetzen; die beiden können stattdessen zusammenarbeiten und aufeinander aufbauen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die oben beschriebenen Streaming-Methoden nicht verwenden können oder wollen, können Sie stattdessen die nicht-Streaming-Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Bytecode zu, daher ist ein zusätzlicher Schritt erforderlich, um die Antwort vor dem Kompilieren/Instanziieren des Wasm-Moduls in einen {{jsxref("ArrayBuffer")}} umzuwandeln.

Der entsprechende Code würde folgendermaßen aussehen:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Anzeigen von Wasm in den Entwickler-Tools

In Firefox 54+ hat das Developer Tool Debugger Panel die Funktion, die textuelle Darstellung eines beliebigen Wasm-Codes, der in eine Webseite eingeschlossen ist, offenzulegen. Um es anzuzeigen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Entwickler-Tools Debugger-Panel, das ein Modul hervorhebt.](wasm-debug.png)

Zusätzlich zur Ansicht von WebAssembly als Text können Entwickler WebAssembly mit dem Textformat debuggen (Haltepunkte setzen, den Callstack inspizieren, Schritt-für-Schritt-Durchführung usw.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird der Speicher als ein zusammenhängender Bereich von ungetypten Bytes bezeichnet, der als [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) bezeichnet wird und durch [Lade- und Speicherbefehle](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben wird. In diesem Speichermodell kann jeder Ladevorgang oder Speicherzugriff auf jedes Byte im gesamten linearen Speicher zugreifen, was notwendig ist, um C/C++-Konzepte wie Zeiger treu zu repräsentieren.

Im Gegensatz zu einem nativen C/C++-Programm, bei dem der verfügbare Speicherbereich den gesamten Prozess umfasst, ist der Speicher, auf den eine bestimmte WebAssembly-Instanz zugreifen kann, auf einen spezifischen — möglicherweise sehr kleinen — Bereich beschränkt, der von einem WebAssembly-Memory-Objekt enthalten ist. Dies ermöglicht es einer einzelnen Web-App, mehrere unabhängige Bibliotheken zu verwenden — von denen jede intern WebAssembly verwendet —, um separate Speicher zu haben, die vollständig voneinander isoliert sind. Darüber hinaus können neuere Implementierungen auch [geteilte Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) erstellen, die zwischen Window- und Worker-Kontexten über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Stellen verwendet werden können.

In JavaScript kann eine Memory-Instanz als ein skalierbarer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Fall von geteilten Speichern) angesehen werden, und genauso wie mit `ArrayBuffers` kann eine einzelne Web-App viele unabhängige Memory-Objekte erstellen. Sie können eines mit dem [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Konstruktor erstellen, der als Argumente eine Anfangsgröße und (optional) eine maximale Größe und eine `shared`-Eigenschaft benötigt, die angibt, ob es sich um einen geteilten Speicher handelt oder nicht.

Lassen Sie uns dies anhand eines kurzen Beispiels erkunden.

1. Erstellen Sie eine weitere neue, einfache HTML-Seite (Kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie der Seite ein `<script></script>`-Element hinzu.
2. Fügen Sie nun die folgende Zeile am Anfang Ihres Skripts ein, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` sind WebAssembly-Seiten — diese sind auf eine Größe von 64 KB festgelegt. Dies bedeutet, dass die oben genannte Speicherinstanz eine Anfangsgröße von 640 KB und eine maximale Größe von 6,4 MB hat.

   WebAssembly-Speicher gibt seine Bytes frei, indem es einen Buffer-Getter/Setter bereitstellt, der einen ArrayBuffer zurückgibt. Zum Beispiel, um 42 direkt in das erste Wort des linearen Speichers zu schreiben, können Sie dies tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, was das Lesen und Schreiben im Little-Endian-Format erzwingt, da WebAssembly-Speicher immer Little-Endian ist. Sie können dann den gleichen Wert zurückgeben mittels:

   ```js
   data.getUint32(0, true);
   ```

3. Probieren Sie dies jetzt in Ihrem Demo aus — speichern Sie, was Sie bisher hinzugefügt haben, laden Sie es in Ihrem Browser und versuchen Sie dann, die obigen zwei Zeilen in Ihre JavaScript-Konsole einzugeben.

### Speicher vergrößern

Eine Speicherinstanz kann durch Aufrufe an [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) vergrößert werden, wobei das Argument wieder in Einheiten von WebAssembly-Seiten angegeben ist:

```js
memory.grow(1);
```

Wenn beim Erstellen der Speicherinstanz ein Maximalwert angegeben wurde, führen Versuche, diesen Maximalwert zu überschreiten, zu einer {{jsxref("RangeError")}}-Ausnahme. Die Engine nutzt diesen angegebenen Obergrenzen, um den Speicher im Voraus zu reservieren, was die Größenanpassung effizienter machen kann.

> Hinweis: Da die byteLength eines {{jsxref("ArrayBuffer")}} unveränderlich ist, gibt der Buffer-Getter nach einem erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Vorgang ein neues ArrayBuffer-Objekt (mit der neuen byteLength) zurück, und alle vorherigen ArrayBuffer-Objekte werden "detached", oder von dem zugrundeliegenden Speicher, auf den sie zuvor verwiesen, getrennt.

Genau wie Funktionen können lineare Speicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul optional auch seinen Speicher exportieren. Dies bedeutet, dass JavaScript Zugriff auf den Speicher einer WebAssembly-Instanz erhalten kann, entweder indem es ein neues `WebAssembly.Memory` erstellt und es als Import übergibt, oder indem es einen Memory-Export erhält (über [`Instance.prototype.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)).

### Ein umfassenderes Speicherbeispiel

Lassen Sie uns die obigen Aussagen verdeutlichen, indem wir uns ein ausführlicheres Speicherbeispiel ansehen — ein WebAssembly-Modul, das die von uns zuvor definierte Speicherinstanz importiert, sie mit einem Array von Ganzzahlen befüllt und dann deren Summe berechnet. Sie finden dies unter [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm)

1. Erstellen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die textuelle Darstellung des Moduls unter [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Gehen Sie zurück zu Ihrer `memory.html`-Beispieldatei und rufen Sie Ihr Wasm-Modul ab, kompilieren Sie es und instanziieren Sie es wie zuvor — fügen Sie das folgende an das Ende Ihres Skripts hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, können wir bei einer Instanz dieses Moduls namens instance eine exportierte Funktion `accumulate()` verwenden, um ein Eingabearray direkt im linearen Speicher (`mem`) des Modul-Instances zu erstellen und zu füllen. Fügen Sie den folgenden Code an der angegebenen Stelle ein:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir das {{jsxref("DataView")}}-Objekt auf dem Speicherpuffer des Memory-Objekts ([`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)), nicht auf dem Memory selbst, erstellen.

Memory-Imports funktionieren genauso wie Funktions-Imports, nur dass Memory-Objekte als Werte und nicht als JavaScript-Funktionen übergeben werden. Memory-Imports sind aus zwei Gründen nützlich:

- Sie ermöglichen es JavaScript, die anfänglichen Speicherinhalte vor oder gleichzeitig mit der Modulerstellung abzurufen und zu erstellen.
- Sie ermöglichen es mehreren Modulinstanzen, ein einziges Memory-Objekt zu importieren, was ein entscheidender Baustein für die Implementierung dynamischer Verlinkung in WebAssembly ist.

> [!NOTE]
> Sie können unser komplettes Demo unter [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) finden.

## Tabellen

Eine WebAssembly-Tabelle ist ein skalierbares typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) auf das sowohl JavaScript als auch WebAssembly-Code zugreifen kann. Während Memory ein skalierbares typisiertes Array von Rohbytes bereitstellt, ist es unsicher, wenn Referenzen in einem Memory gespeichert werden, da eine Referenz ein von der Engine vertrauter Wert ist, dessen Bytes nicht direkt von Inhalten gelesen oder geschrieben werden dürfen, aus Sicherheits-, Portabilitäts- und Stabilitätsgründen.

Tabellen haben einen Elementtyp, der die Arten von Referenzen begrenzt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur einen Typ von Referenzen, den WebAssembly-Code benötigt — Funktionen — und daher nur einen gültigen Elementtyp. In zukünftigen Iterationen werden weitere Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen Implementierung von C/C++ wird ein Funktionszeiger durch die Rohadresse des Funktionscodes im virtuellen Adressraum des Prozesses dargestellt, und daher kann er aus den oben genannten Sicherheitsgründen nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert, und ihre Indizes, die Ganzzahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen herumgereicht.

Wenn die Zeit kommt, einen Funktionszeiger zu rufen, liefert der WebAssembly-Aufrufer den Index, der dann gegen die Tabelle abgegrenzt überprüft werden kann, bevor sie indiziert und die indizierte Funktionsreferenz aufgerufen wird. So gesehen, sind Tabellen derzeit ein recht primitives Mittel, um Features von Low-Level-Programmiersprachen sicher und portabel zu kompilieren.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) mutiert werden, das einen der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), das die Anzahl der in einer Tabelle speicherbaren Werte erhöht. Dies ermöglicht es, dass sich die indirekt aufrufbare Menge von Funktionen im Laufe der Zeit ändert, was notwendig für [Techniken der dynamischen Verlinkung](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ist. Die Mutationen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) in JavaScript zugänglich und für Wasm-Module.

### Ein Tabellenbeispiel

Lassen Sie uns ein einfaches Tabellenbeispiel betrachten — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück, und Element 1 gibt 42 zurück. Sie finden dies unter [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Erstellen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die textuelle Darstellung des Moduls unter [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie sie `table.html`.
3. Wie zuvor, rufen Sie Ihr Wasm-Modul ab, kompilieren Sie es und instanziieren Sie es — fügen Sie das Folgende in ein {{htmlelement("script")}}-Element am Ende Ihres HTML-Körpers ein:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Lassen Sie uns nun die Daten in den Tabellen zugreifen — fügen Sie die folgenden Zeilen an der angegebenen Stelle in Ihren Code ein:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift auf jede Funktionsreferenz zu, die in der Tabelle gespeichert ist, und instanziiert sie, um die Werte, die sie enthalten, in die Konsole auszugeben — beachten Sie, wie jede Funktionsreferenz mit einem [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)-Aufruf abgerufen wird, dann fügen wir ein zusätzliches Paar Klammern am Ende hinzu, um die Funktion tatsächlich aufzurufen.

> [!NOTE]
> Sie können unser komplettes Demo unter [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) finden.

## Globalen

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl aus JavaScript heraus zugänglich sind als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importierbar/exportierbar sind. Dies ist sehr nützlich, da es das dynamische Verlinken mehrerer Module ermöglicht.

Um eine globale WebAssembly-Instanz von innerhalb Ihres JavaScripts zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor, der folgendermaßen aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie sehen, dass dies zwei Parameter annimmt:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:
  - `value`: seinen Datentyp, der jeder innerhalb von WebAssembly-Modulen akzeptierte Datentyp sein kann — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein Boolean, der definiert, ob der Wert veränderbar ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ mit dem spezifizierten Datentyp übereinstimmt.

Wie verwenden wir dies? Im folgenden Beispiel definieren wir eine globale Variable als veränderbaren `i32`-Typ mit einem Wert von 0.

Der Wert der globalen Variable wird dann geändert, zuerst auf `42` mithilfe der `Global.value`-Eigenschaft und dann auf 43 mithilfe der `incGlobal()`-Funktion, die aus dem `global.wasm`-Modul exportiert wird (dies fügt 1 zu jedem Wert hinzu, der ihr gegeben wird, und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub ausführen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); sehen Sie auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplizität

Nachdem wir nun die Verwendung der wichtigsten WebAssembly-Bausteine demonstriert haben, ist dies ein guter Ort, um das Konzept der Multiplizität zu erwähnen. Dies bietet WebAssembly eine Vielzahl von Fortschritten in Bezug auf architektonische Effizienz:

- Ein Modul kann N Instanzen haben, genauso wie ein Funktionsliteral N Abschlusswerte erzeugen kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen verwenden, die den "Adressraum" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz zulassen (siehe [Mehrere Speicher](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen verwenden — dies ist der "Funktionsadressraum" der Instanz, der zum Implementieren von C-Funktionszeigern verwendet wird. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz zulassen.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen sich alle denselben Adressraum, was [dynamische Verlinkung](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können die Multiplizität in Aktion in unserem Artikel über das Verstehen des Textformats sehen — siehe den Abschnitt [Mutierende Tabellen und dynamische Verlinkung](/de/docs/WebAssembly/Guides/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel führte Sie durch die Grundlagen der Verwendung der WebAssembly JavaScript API zur Einbindung eines WebAssembly-Moduls in einen JavaScript-Kontext und die Nutzung seiner Funktionen sowie der Verwendung von WebAssembly-Speicher und -Tabellen in JavaScript. Wir haben auch das Konzept der Multiplizität angesprochen.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
