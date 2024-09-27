---
title: Verwendung der WebAssembly JavaScript API
slug: WebAssembly/Using_the_JavaScript_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{WebAssemblySidebar}}

Wenn Sie bereits [ein Modul mit Tools wie Emscripten aus einer anderen Sprache kompiliert](/de/docs/WebAssembly/C_to_Wasm) oder [den Code selbst geladen und ausgeführt](/de/docs/WebAssembly/Loading_and_running) haben, ist der nächste Schritt, mehr über die anderen Funktionen der WebAssembly JavaScript API zu lernen. Dieser Artikel vermittelt Ihnen die notwendigen Kenntnisse.

> [!NOTE]
> Wenn Sie mit den in diesem Artikel genannten Grundkonzepten nicht vertraut sind und weitere Erklärungen benötigen, lesen Sie zuerst [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts) und kommen Sie dann zurück.

## Einfache Beispiele

Lassen Sie uns ein paar Beispiele durchgehen, die erklären, wie man die WebAssembly JavaScript API verwendet und wie man damit ein Wasm-Modul in eine Webseite lädt.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repository.

### Vorbereitung des Beispiels

1. Zuerst benötigen wir ein Wasm-Modul! Laden Sie unsere [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm)-Datei herunter und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Erstellen Sie als nächstes eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, wenn Sie keine leicht verfügbare haben).
3. Jetzt, um zu verstehen, was hier vor sich geht, schauen wir uns die Textdarstellung unseres Wasm-Moduls an (die wir auch in [Konvertierung von WebAssembly-Format zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm#a_first_look_at_the_text_format) sehen):

   ```wasm
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namespace hat — die interne Funktion `$i` wird aus `my_namespace.imported_func` importiert. Wir müssen diesen zweistufigen Namespace in JavaScript widerspiegeln, wenn wir das zu importierende Objekt in das Wasm-Modul schreiben. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie den folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Fähigkeit, WebAssembly-Module direkt aus zugrunde liegenden Quellen zu kompilieren und zu instantiieren. Dies wird mit den Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht-streaming Gegenstücke, weil sie den Bytecode direkt in `Module`/`Instance`-Instanzen umwandeln können, was die Notwendigkeit eliminiert, die [`Response`](/de/docs/Web/API/Response) separat in einen {{jsxref("ArrayBuffer")}} zu verwandeln.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) zeigt, wie man `instantiateStreaming()` verwendet, um ein Wasm-Modul abzurufen, eine JavaScript-Funktion darin zu importieren, es zu kompilieren und zu instantiieren und auf seine exportierte Funktion zuzugreifen — alles in einem Schritt.

Fügen Sie das folgende zu Ihrem Skript unter dem ersten Block hinzu:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Nettoergebnis davon ist, dass wir unsere exportierte WebAssembly-Funktion `exported_func` aufrufen, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, die den innerhalb der WebAssembly-Instanz bereitgestellten Wert (42) in die Konsole protokolliert. Wenn Sie Ihren Beispielcode jetzt speichern und ihn in einem Browser laden, der WebAssembly unterstützt, sehen Sie dies in Aktion!

> [!NOTE]
> Dies ist ein umständliches, ausführliches Beispiel, das sehr wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist — die Verwendung von WebAssembly-Code neben JavaScript in Ihren Webanwendungen. Wie wir an anderer Stelle gesagt haben, zielt WebAssembly nicht darauf ab, JavaScript zu ersetzen; die beiden können stattdessen zusammenarbeiten und sich gegenseitig stärken.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die beschriebenen Streaming-Methoden nicht verwenden können oder möchten, können Sie stattdessen die nicht-streaming Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Byte-Code zu, daher ist ein zusätzlicher Schritt erforderlich, um die Antwort vor der Kompilierung/Instanziierung des Wasm-Moduls in einen {{jsxref("ArrayBuffer")}} zu verwandeln.

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

In Firefox 54+ verfügt das Debugger-Panel der Entwicklertools über die Funktionalität, die Textdarstellung von in einer Webseite enthaltenem Wasm-Code anzuzeigen. Um es anzuzeigen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Entwicklerwerkzeuge Debugger-Panel, das ein Modul hervorhebt.](wasm-debug.png)

Zusätzlich zur Anzeige von WebAssembly als Text können Entwickler WebAssembly mit dem Textformat debuggen (Haltepunkte setzen, den Aufrufstapel inspizieren, einzelschrittweise vorgehen usw.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird der Speicher als zusammenhängender Bereich von untypisierten Bytes dargestellt, der [Linearer Speicher](https://webassembly.github.io/spec/core/exec/index.html) genannt wird, und der von [Lade- und Speicheranweisungen](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und beschrieben wird. In diesem Speichermodell kann jede Lade- oder Speichernoperation auf jedes Byte im gesamten linearen Speicher zugreifen, was notwendig ist, um C/C++-Konzepte wie Zeiger getreu darzustellen.

Im Gegensatz zu einem nativen C/C++-Programm, wo der verfügbare Speicherbereich den gesamten Prozess umfasst, ist der Speicher, der durch eine bestimmte WebAssembly-Instanz zugänglich ist, auf einen bestimmten — potenziell sehr kleinen — Bereich beschränkt, der von einem WebAssembly Memory-Objekt enthalten wird. Dadurch kann eine einzige Webanwendung mehrere unabhängige Bibliotheken verwenden — von denen jede intern WebAssembly verwendet — und über separate Speicher verfügen, die vollständig voneinander isoliert sind. Zudem können neuere Implementierungen auch [gemeinsame Speicher](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) erstellen, die zwischen Window- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Stellen verwendet werden können.

In JavaScript kann eine Speicherinstanz als ein anpassbarer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) im Falle gemeinsamer Speicher) angesehen werden und, genau wie bei `ArrayBuffers`, kann eine einzige Webanwendung viele unabhängige Speicherobjekte erstellen. Sie können eines mit dem [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory) Konstruktor erstellen, der als Argumente eine anfängliche Größe und (optional) eine maximale Größe sowie eine `shared`-Eigenschaft übernimmt, die angibt, ob es sich um einen gemeinsamen Speicher handelt oder nicht.

Beginnen wir, dies zu erkunden, indem wir uns ein kurzes Beispiel ansehen.

1. Erstellen Sie eine weitere einfache HTML-Seite (kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie ein `<script></script>`-Element zur Seite hinzu.
2. Fügen Sie nun die folgende Zeile oben in Ihr Skript ein, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` sind WebAssembly-Seiten — diese sind auf eine Größe von 64KB festgelegt. Das bedeutet, dass die obige Speicherinstanz eine Anfangsgröße von 640KB hat und eine maximale Größe von 6,4MB.

   WebAssembly-Speicher stellt seine Bytes zur Verfügung, indem ein Puffer-Getter/Setter zur Verfügung gestellt wird, der ein ArrayBuffer zurückgibt. Zum Beispiel, um 42 direkt in das erste Wort des linearen Speichers zu schreiben:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, das das little-endian Lesen und Schreiben erzwingt, da WebAssembly-Speicher immer little-endian ist. Sie können dann denselben Wert zurückgeben, indem Sie:

   ```js
   data.getUint32(0, true);
   ```

3. Probieren Sie dies jetzt in Ihrem Demo aus — speichern Sie, was Sie bisher hinzugefügt haben, laden Sie es in Ihren Browser und versuchen Sie dann, die obigen beiden Zeilen in Ihrer JavaScript-Konsole einzugeben.

### Speichererweiterung

Eine Speicherinstanz kann durch Aufrufe von [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) erweitert werden, wobei das Argument wiederum in Einheiten von WebAssembly-Seiten angegeben wird:

```js
memory.grow(1);
```

Wenn ein maximaler Wert bei der Erstellung der Speicherinstanz angegeben wurde, werden Versuche, über dieses Maximum hinaus zu wachsen, eine {{jsxref("RangeError")}}-Ausnahme werfen. Die Engine nutzt diesen angegebenen oberen Grenzwert, um Speicher im Voraus zu reservieren, was das Anpassen der Größe effizienter machen kann.

Hinweis: Da die byteLength eines {{jsxref("ArrayBuffer")}} unveränderlich ist, wird der Puffer-Getter nach einem erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)-Vorgang ein neues ArrayBuffer-Objekt (mit der neuen byteLength) zurückgeben und alle vorherigen ArrayBuffer-Objekte werden "abgetrennt" oder von dem zugrunde liegenden Speicher, auf den sie vorher gezeigt haben, getrennt.

Genau wie Funktionen können lineare Speicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul optional auch seinen Speicher exportieren. Das bedeutet, dass JavaScript Zugriff auf den Speicher einer WebAssembly-Instanz entweder durch Erstellen eines neuen `WebAssembly.Memory` und Übergeben als Import oder durch Erhalten eines Speicher-Exportes (über [`Instance.prototype.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)) bekommen kann.

### Ein umfangreicheres Speicherbeispiel

Machen wir die obigen Behauptungen klarer, indem wir uns ein umfangreicheres Speicherbeispiel ansehen — ein WebAssembly-Modul, das die von uns zuvor definierte Speicherinstanz importiert, sie mit einem Array von Ganzzahlen befüllt und sie dann summiert. Sie finden dies bei [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm)

1. Machen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Gehen Sie zurück zu Ihrer `memory.html`-Beispieldatei und holen Sie, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das folgende am Ende Ihres Skripts hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, können wir mit einer Instanz dieses Moduls namens Instance eine exportierte Funktion `accumulate()` verwenden, um ein Eingangsarray direkt im linearen Speicher (`mem`) der Modulinstanz zu erstellen und zu befüllen. Fügen Sie das folgende in Ihren Code an der angegebenen Stelle ein:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir die {{jsxref("DataView")}}-Ansicht auf dem Puffer des Speicherobjekts ([`Memory.prototype.buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)) erstellen, nicht auf dem Speicher selbst.

Speicherimporte funktionieren genau wie Funktionsimporte, nur dass Speicherobjekte als Werte und nicht als JavaScript-Funktionen übergeben werden. Speicherimporte sind aus zwei Gründen nützlich:

- Sie ermöglichen es JavaScript, die anfänglichen Speicherinhalte vor oder gleichzeitig mit der Modulkompilierung abzurufen und zu erstellen.
- Sie ermöglichen es, dass ein einzelnes Speicherobjekt von mehreren Modulinstanzen importiert wird, was ein kritischer Baustein für die Implementierung von dynamischem Linking in WebAssembly ist.

> [!NOTE]
> Sie können unser komplettes Demo unter [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) finden.

## Tabellen

Eine WebAssembly-Tabelle ist ein anpassbarer typisierter Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) auf den sowohl JavaScript- als auch WebAssembly-Code zugreifen können. Während Speicher ein anpassbarer typisierter Array von Rohbytes ist, ist es unsicher Referenzen in einem Speicher zu speichern, da eine Referenz ein vom Motor vertrauener Wert ist, dessen Bytes aus Sicherheits-, Portabilitäts- und Stabilitätsgründen nicht direkt vom Inhalt gelesen oder beschrieben werden dürfen.

Tabellen haben einen Elementtyp, der die Referenztypen begrenzt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur einen Referenztyp, den WebAssembly-Code benötigt — Funktionen — und daher nur einen gültigen Elementtyp. In zukünftigen Iterationen werden weitere Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen C/C++-Implementierung wird ein Funktionszeiger durch die Rohadresse des Funktionscodes im virtuellen Adressraum des Prozesses dargestellt und kann daher aus den angegebenen Sicherheitsgründen nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die ganze Zahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen herumgereicht.

Wenn es Zeit ist, einen Funktionszeiger aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann sicher auf Grenzwerte geprüft werden kann, bevor die indizierte Funktionsreferenz angesprochen und aufgerufen wird. Somit sind Tabellen derzeit ein eher low-level Primitiv, das verwendet wird, um low-level Programmierfeatures sicher und portabel zu kompilieren.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set) mutiert werden, das einen der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), das die Anzahl der Werte erhöht, die in einer Tabelle gespeichert werden können. Dies ermöglicht es, dass die indirekt aufrufbare Funktionengruppe im Laufe der Zeit verändert werden kann, was für [dynamische Linking-Techniken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Mutationen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) in JavaScript und für Wasm-Module zugänglich.

### Ein Tabellenbeispiel

Lassen Sie uns ein einfaches Tabellenbeispiel ansehen — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie finden dies bei [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Machen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie sie `table.html`.
3. Abrufen, kompilieren und instanziieren Sie wie zuvor Ihr Wasm-Modul — fügen Sie das folgende in ein {{htmlelement("script")}}-Element am Ende Ihres HTML-Körpers ein:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Greifen Sie nun auf die Daten in den Tabellen zu — fügen Sie die folgenden Zeilen in Ihren Code an die angegebenen Stelle ein:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift auf jede gespeicherte Funktionsreferenz in der Tabelle nacheinander zu und instanziiert sie, um die von ihnen gehaltenen Werte auf die Konsole zu drucken — beachten Sie, wie jede Funktionsreferenz mit einem [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) Aufruf abgerufen wird, dann fügen wir eine zusätzliche Klammer am Ende hinzu, um die Funktion tatsächlich aufzurufen.

> [!NOTE]
> Sie können unser komplettes Demo unter [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) finden.

## Globals

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl aus JavaScript zugänglich als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importierbar/exportierbar sind. Dies ist sehr nützlich, da es dynamische Verkettung mehrerer Module ermöglicht.

Um eine globale WebAssembly-Instanz aus Ihrem JavaScript zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global) Konstruktor, der wie folgt aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie sehen, dass dies zwei Parameter nimmt:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: sein Datentyp, der jeder innerhalb von WebAssembly-Modulen akzeptierte Datentyp sein kann — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein Boolean, der definiert, ob der Wert veränderbar ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ dem angegebenen Datentyp entspricht.

Wie verwenden wir dies? Im folgenden Beispiel definieren wir eine globale Variante als einen veränderbaren `i32`-Typ, mit einem Wert von 0.

Der Wert der globalen Variante wird dann zuerst auf `42` mit der `Global.value`-Eigenschaft geändert und anschließend auf 43 unter Verwendung der `incGlobal()`-Funktion exportiert aus dem `global.wasm` Modul (dies addiert 1 zu jedem Wert, der ihm gegeben wird und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub ausführen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicity

Nachdem wir nun die Verwendung der wichtigsten WebAssembly-Bausteine demonstriert haben, ist dies eine gute Gelegenheit, das Konzept der Multiplicität zu erwähnen. Dies bietet WebAssembly zahlreiche Fortschritte hinsichtlich der architektonischen Effizienz:

- Ein Modul kann N Instanzen haben, so wie eine Funktionsliteral N Abschlusswerte produzieren kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen verwenden, die den "Adressraum" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz zulassen (siehe [Multiple Memories](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen verwenden — dies ist der "Funktionsadressraum" der Instanz, der zur Implementierung von C-Funktionszeigern verwendet wird. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz zulassen.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen sich alle den gleichen Adressraum, was [dynamisches Linking](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können Multiplicität in Aktion in unserem Artikel über das Verständnis des Textformats sehen — siehe den Abschnitt [Mutierende Tabellen und dynamisches Linking](/de/docs/WebAssembly/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Sie durch die Grundlagen der Verwendung der WebAssembly JavaScript API zur Einbindung eines WebAssembly-Moduls in einen JavaScript-Kontext und zur Nutzung seiner Funktionen geführt und wie Sie WebAssembly-Speicher und -Tabellen in JavaScript verwenden. Wir haben auch das Konzept der Multiplicität angesprochen.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
