---
title: Verwendung der WebAssembly JavaScript-API
slug: WebAssembly/Guides/Using_the_JavaScript_API
l10n:
  sourceCommit: 5d93ed6aeae01238cb44b1a9b5f092d8c8194530
---

Wenn Sie bereits [ein Modul aus einer anderen Sprache mit Werkzeugen wie Emscripten kompiliert haben](/de/docs/WebAssembly/Guides/C_to_Wasm) oder [den Code selbst geladen und ausgeführt haben](/de/docs/WebAssembly/Guides/Loading_and_running), ist der nächste Schritt, mehr über die Verwendung der anderen Funktionen der WebAssembly JavaScript-API zu erfahren. Dieser Artikel vermittelt Ihnen das notwendige Wissen.

> [!NOTE]
> Wenn Ihnen die in diesem Artikel erwähnten Grundkonzepte nicht vertraut sind und Sie weitere Erklärungen benötigen, lesen Sie zuerst [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts) und kehren Sie dann zurück.

## Einige Beispiele

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie Sie die WebAssembly JavaScript-API verwenden und wie Sie damit ein Wasm-Modul in eine Webseite laden.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repository.

### Vorbereitung des Beispiels

1. Zuerst benötigen wir ein Wasm-Modul! Laden Sie unsere Datei [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) herunter und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Als Nächstes erstellen wir eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, falls keine leicht verfügbare vorhanden ist).
3. Um zu verstehen, was hier passiert, betrachten wir die Textdarstellung unseres Wasm-Moduls (die wir auch in [Konvertieren von WebAssembly-Format zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm#a_first_look_at_the_text_format) treffen):

   ```wasm
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namensraum hat — die interne Funktion `$i` wird von `my_namespace.imported_func` importiert. Wir müssen diesen zweistufigen Namensraum in JavaScript widerspiegeln, wenn wir das Objekt schreiben, das in das Wasm-Modul importiert wird. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie den folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Fähigkeit, WebAssembly-Module direkt aus den zugrundeliegenden Quellen zu kompilieren und zu instanziieren. Dies wird mit den Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht-streamenden Gegenstücke, da sie den Bytecode direkt in `Module`/`Instance`-Instanzen umwandeln können, wodurch die Notwendigkeit entfällt, die [`Response`](/de/docs/Web/API/Response) separat in einen {{jsxref("ArrayBuffer")}} zu stecken.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) zeigt, wie man `instantiateStreaming()` verwendet, um ein Wasm-Modul zu holen, eine JavaScript-Funktion in es zu importieren, es zu kompilieren und zu instanziieren und auf seine exportierte Funktion in einem Schritt zuzugreifen.

Fügen Sie Ihrem Skript unterhalb des ersten Blocks Folgendes hinzu:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Endergebnis ist, dass wir unsere exportierte WebAssembly-Funktion `exported_func` aufrufen, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, die den im WebAssembly-Instanz bereitgestellten Wert (42) in die Konsole protokolliert. Wenn Sie jetzt Ihren Beispielcode speichern und in einem Browser laden, der WebAssembly unterstützt, werden Sie dies in Aktion sehen!

> [!NOTE]
> Dies ist ein umständliches, langatmiges Beispiel, das sehr wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist — die Verwendung von WebAssembly-Code neben JavaScript in Ihren Webanwendungen. Wie wir an anderer Stelle gesagt haben, zielt WebAssembly nicht darauf ab, JavaScript zu ersetzen; die beiden können stattdessen zusammenarbeiten, indem sie sich gegenseitig ergänzen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die oben beschriebenen Streaming-Methoden nicht verwenden können oder wollen, können Sie stattdessen die nicht-streamenden Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Bytecode zu, sodass ein zusätzlicher Schritt erforderlich ist, um die Antwort in einen {{jsxref("ArrayBuffer")}} umzuwandeln, bevor das Wasm-Modul kompiliert/instanziiert wird.

Der entsprechende Code würde so aussehen:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Anzeige von Wasm in Entwicklertools

In Firefox 54+ verfügt das Debugger-Panel des Entwicklertools über die Funktionalität, die Textdarstellung eines beliebigen Wasm-Codes, der in eine Webseite eingebunden ist, anzuzeigen. Um ihn anzusehen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Debugging-Panel des Entwicklertools, das ein Modul hervorhebt.](wasm-debug.png)

Zusätzlich zur Anzeige von WebAssembly als Text können Entwickler WebAssembly im Textformat debuggen (Haltepunkte setzen, den Callstack inspizieren, einzelne Schritte ausführen usw.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird der Speicher als ein zusammenhängender Bereich von ungetypten Bytes dargestellt, der als [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) bezeichnet wird und durch [Lade- und Speicheranweisungen](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben wird. In diesem Speichermodell kann jede Lade- oder Speicheranweisung auf jedes Byte im gesamten linearen Speicher zugreifen, was notwendig ist, um Konzepte wie Zeiger aus C/C++ korrekt darzustellen.

Im Gegensatz zu einem nativen C/C++-Programm, bei dem der verfügbare Speicherbereich den gesamten Prozess umspannt, ist der von einer bestimmten WebAssembly-Instanz zugängliche Speicher auf einen spezifischen — potenziell sehr kleinen — Bereich beschränkt, der durch ein WebAssembly-Speicherobjekt enthalten ist. Dies ermöglicht es einer einzelnen Webanwendung, mehrere unabhängige Bibliotheken zu verwenden — jede verwendet intern WebAssembly —, die getrennte Speicherbereiche haben, die vollständig voneinander isoliert sind. Darüber hinaus können neuere Implementierungen auch [gemeinsamen Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) erstellen, der zwischen Fenster- und Worker-Kontexten mittels [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Stellen verwendet werden kann.

In JavaScript kann eine Speicherinstanz als ein größenveränderbares [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Fall von gemeinsam genutzten Speichern) angesehen werden und, wie bei `ArrayBuffers`, kann eine einzelne Webanwendung viele unabhängige Speicherobjekte erstellen. Sie können einen Speicher mit dem [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Konstruktor erstellen, der als Argumente eine Startgröße und (optional) eine Maximalgröße und eine `shared`-Eigenschaft, die angibt, ob es sich um einen gemeinsamen Speicher handelt, annimmt.

Lassen Sie uns dies schnell an einem Beispiel erkunden.

1. Erstellen Sie eine weitere einfache HTML-Seite (kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie ein `<script></script>`-Element zur Seite hinzu.
2. Fügen Sie nun die folgende Zeile oben in Ihr Skript ein, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` sind WebAssembly-Seiten — diese sind fest auf 64KB Größe eingestellt. Das bedeutet, dass die obige Speicherinstanz eine Anfangsgröße von 640KB und eine maximale Größe von 6.4MB hat.

   WebAssembly-Speicher stellt seine Bytes durch das Anbieten eines Puffer-Getter/Setter bereit, das ein ArrayBuffer zurückgibt. Um zum Beispiel direkt 42 in das erste Wort des linearen Speichers zu schreiben, können Sie dies so tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, das ein kleines endianes Lesen und Schreiben erzwingt, da WebAssembly-Speicher immer im kleinen Endian ist. Sie können den gleichen Wert dann mit folgender Zeile zurückgeben:

   ```js
   data.getUint32(0, true);
   ```

3. Probieren Sie dies nun in Ihrem Demo aus — speichern Sie das bisher Hinzugefügte, laden Sie es in Ihren Browser und versuchen Sie, die obigen zwei Zeilen in Ihre JavaScript-Konsole einzugeben.

### Speicher erweitern

Eine Speicherinstanz kann durch Aufrufe von [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) erweitert werden, wobei das Argument wieder in Einheiten von WebAssembly-Seiten angegeben wird:

```js
memory.grow(1);
```

Wenn bei der Erstellung der Speicherinstanz ein Maximalwert angegeben wurde, werden Versuche, diesen Maximalwert zu überschreiten, eine {{jsxref("RangeError")}}-Ausnahme auslösen. Die Engine nutzt diesen angegebenen oberen Grenzwert, um Speicher im Voraus zu reservieren, was das Resizing effizienter machen kann.

Hinweis: Da die byteLength eines {{jsxref("ArrayBuffer")}} unveränderlich ist, gibt der Puffer-Getter nach einem erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)-Vorgang ein neues ArrayBuffer-Objekt (mit der neuen byteLength) zurück, und alle vorherigen ArrayBuffer-Objekte werden "abgetrennt" oder von dem zugrundeliegenden Speicher, auf den sie zuvor zeigten, getrennt.

Genau wie Funktionen können lineare Speicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul optional auch seinen Speicher exportieren. Das bedeutet, dass JavaScript entweder durch Erstellen eines neuen `WebAssembly.Memory` und Übergabe als Import oder durch Empfang eines Memory-Exports (über [`Instance.prototype.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)) Zugriff auf den Speicher einer WebAssembly-Instanz erhalten kann.

### Ein anspruchsvolleres Speicherbeispiel

Lassen Sie uns die oben genannten Aussagen durch ein anspruchsvolleres Speicherbeispiel verdeutlichen — ein WebAssembly-Modul, das die zuvor definierte Speicherinstanz importiert, sie mit einem Array von ganzen Zahlen füllt und dann summiert. Sie können dies unter [memory.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm) finden.

1. Erstellen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls unter [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Gehen Sie zurück zu Ihrer `memory.html` Beispiel-Datei und holen, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie folgendes am Ende Ihres Skripts hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, können wir mit einer Instanz dieses Moduls namens `instance` eine exportierte Funktion `accumulate()` verwenden, um ein Eingabearray direkt im linearen Speicher (`mem`) der Modulinstanz zu erstellen und zu füllen. Fügen Sie dies in Ihren Code ein, wo angegeben:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir die {{jsxref("DataView")}}-Ansicht auf dem Puffer des Memory-Objekts ([`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)) und nicht auf dem Speicher selbst erstellen.

Speicherimporte funktionieren genauso wie Funktionsimporte, nur dass Memory-Objekte als Werte anstelle von JavaScript-Funktionen übergeben werden. Speicherimporte sind aus zwei Gründen nützlich:

- Sie ermöglichen es JavaScript, die anfänglichen Inhalte des Speichers abzurufen und zu erstellen, bevor oder gleichzeitig mit der Modulkompilierung.
- Sie ermöglichen es, dass ein einzelnes Memory-Objekt von mehreren Modulinstanzen importiert wird, was ein kritisches Baustein für die Implementierung von dynamischem Linking in WebAssembly ist.

> [!NOTE]
> Unser vollständiges Demo finden Sie unter [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)).

## Tabellen

Eine WebAssembly-Tabelle ist ein größenveränderbares, typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>), das sowohl von JavaScript als auch von WebAssembly-Code zugegriffen werden kann. Während Speicher ein größenveränderbares, typisiertes Array von Rohbytes bereitstellt, ist es unsicher, dass Referenzen in einem Speicher gespeichert werden, da eine Referenz ein von der Engine vertrauter Wert ist, dessen Bytes aus Sicherheits-, Portabilitäts- und Stabilitätsgründen nicht direkt von Inhalten gelesen oder geschrieben werden dürfen.

Tabellen haben einen Elementtyp, der die Arten von Referenzen begrenzt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur eine Art von Referenz, die von WebAssembly-Code benötigt wird — Funktionen — und somit nur einen gültigen Elementtyp. In zukünftigen Iterationen werden weitere Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen Implementierung von C/C++ wird ein Funktionszeiger durch die Rohadresse des Funktionscodes im virtuellen Adressraum des Prozesses dargestellt und kann daher aus den oben genannten Sicherheitsgründen nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die Ganzzahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen weitergegeben.

Wenn der Zeitpunkt kommt, einen Funktionszeiger aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann gegen die Tabelle sicher geprüft werden kann, bevor der indexierte Funktionsreferenz aufgerufen wird. So sind Tabellen derzeit ein ziemlich primitives Werkzeug, das verwendet wird, um low-level-Programmiersprachenfeatures sicher und portabel zu kompilieren.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) geändert werden, das einen der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), das die Anzahl der Werte, die in einer Tabelle gespeichert werden können, erhöht. Dies ermöglicht es dem indirekt aufrufbaren Satz von Funktionen, sich im Laufe der Zeit zu ändern, was für [dynamische Linking-Techniken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Änderungen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) in JavaScript und für Wasm-Module zugänglich.

### Ein Tabellenbeispiel

Lassen Sie uns ein einfaches Tabellenbeispiel betrachten — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie können dies unter [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm) finden.

1. Erstellen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls unter [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie sie `table.html`.
3. Holen, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das folgende in einem {{htmlelement("script")}}-Element am Ende Ihres HTML-Körpers hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Jetzt lassen Sie uns auf die Daten in den Tabellen zugreifen — fügen Sie die folgenden Zeilen zu Ihrem Code an der angegebenen Stelle hinzu:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift nacheinander auf jede in der Tabelle gespeicherte Funktionsreferenz zu und instanziiert sie, um die Werte, die sie halten, in die Konsole zu drucken — beachten Sie, wie jede Funktionsreferenz mit einem [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)-Aufruf abgerufen wird, und dann fügen wir eine weitere Klammer auf das Ende hinzu, um die Funktion tatsächlich auszuführen.

> [!NOTE]
> Unser vollständiges Demo finden Sie unter [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globals

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl aus JavaScript zugänglich als auch importierbar/exportierbar über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen sind. Dies ist sehr nützlich, da es das dynamische Linking mehrerer Module ermöglicht.

Um eine WebAssembly-Globale-Instanz von JavaScript aus zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor, der so aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie sehen, dass dies zwei Parameter akzeptiert:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: seinen Datentyp, der jede im WebAssembly-Modul akzeptierte Datentyp sein kann — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein Boolean, der definiert, ob der Wert veränderlich ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variable enthält. Dies kann jeder Wert sein, solange sein Typ dem angegebenen Datentyp entspricht.

Wie verwenden wir das? Im folgenden Beispiel definieren wir eine globale Variable als veränderlichen `i32`-Typ mit einem Wert von 0.

Der Wert des Globalen wird dann verändert, zuerst auf `42` unter Verwendung der Eigenschaft `Global.value` und dann auf 43 unter Verwendung der Funktion `incGlobal()`, die aus dem `global.wasm` Modul exportiert wird (dies fügt 1 zu welchem Wert auch immer hinzu, der ihm gegeben wird, und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub sehen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); sehen Sie auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicity

Nun, da wir die Haupt-Werkzeuge von WebAssembly demonstriert haben, ist dies ein guter Ort, um das Konzept der Vielfältigkeit zu erwähnen. Dies bietet WebAssembly eine Vielzahl an Fortschritten hinsichtlich der Effizienz im Bereich Architektur:

- Ein Modul kann N Instanzen haben, ebenso wie ein Funktionsliteral N Abschlusswerte erzeugen kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen verwenden, die den „Adressraum“ der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz ermöglichen (siehe [Multiple Memories](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen verwenden — das ist der „Funktionsadressraum“ der Instanz, der zur Implementierung von C-Funktionszeigern verwendet wird. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz ermöglichen.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen alle denselben Adressraum, was [dynamisches Linking](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können die Vielfältigkeit in Aktion in unserem Artikel zur Textformatierung verstehen — siehe den Abschnitt [Mutating tables and dynamic linking](/de/docs/WebAssembly/Guides/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Sie durch die Grundlagen der Verwendung der WebAssembly JavaScript-API geführt, um ein WebAssembly-Modul in einem JavaScript-Kontext zu inkludieren und seine Funktionen zu nutzen sowie WebAssembly-Speicher und -Tabellen in JavaScript zu verwenden. Wir haben auch das Konzept der Vielfältigkeit angesprochen.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
