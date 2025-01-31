---
title: Verwendung der WebAssembly-JavaScript-API
slug: WebAssembly/Guides/Using_the_JavaScript_API
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Wenn Sie bereits [ein Modul aus einer anderen Sprache mit Werkzeugen wie Emscripten kompiliert haben](/de/docs/WebAssembly/Guides/C_to_Wasm) oder [den Code selbst geladen und ausgeführt haben](/de/docs/WebAssembly/Guides/Loading_and_running), ist der nächste Schritt, mehr über die Verwendung der anderen Funktionen der WebAssembly-JavaScript-API zu erfahren. Dieser Artikel zeigt Ihnen, was Sie wissen müssen.

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten, die in diesem Artikel erwähnt werden, nicht vertraut sind und mehr Erklärung benötigen, lesen Sie zuerst [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts) und kommen Sie dann zurück.

## Einige Beispiele

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie man die WebAssembly-JavaScript-API verwendet und wie man ein Wasm-Modul in eine Webseite lädt.

> [!NOTE]
> Sie können den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repo finden.

### Vorbereitung des Beispiels

1. Zuerst brauchen wir ein Wasm-Modul! Laden Sie unsere [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) Datei herunter und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine einfache HTML-Datei namens `index.html` im selben Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfaches Template](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) nutzen, wenn Sie keines zur Hand haben).
3. Lassen Sie uns nun, um zu verstehen, was hier vor sich geht, die Textdarstellung unseres Wasm-Moduls ansehen (die wir auch unter [Konvertierung des WebAssembly-Formats zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm#a_first_look_at_the_text_format) treffen):

   ```wasm
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namensraum hat — die interne Funktion `$i` wird von `my_namespace.imported_func` importiert. Wir müssen diesen zweistufigen Namensraum in JavaScript widerspiegeln, wenn wir das Objekt schreiben, das in das Wasm-Modul importiert werden soll. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie den folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Fähigkeit, WebAssembly-Module direkt aus zugrunde liegenden Quellen zu kompilieren und zu instanziieren. Dies wird mit den Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht-streaming Entsprechungen, da sie den Bytecode direkt in `Module`-/`Instance`-Instanzen umwandeln können, wodurch die Notwendigkeit entfällt, die [`Response`](/de/docs/Web/API/Response) separat in einen {{jsxref("ArrayBuffer")}} zu legen.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) zeigt, wie man `instantiateStreaming()` verwendet, um ein Wasm-Modul abzurufen, eine JavaScript-Funktion darin zu importieren, es zu kompilieren und zu instanziieren, und auf seine exportierte Funktion zuzugreifen — alles in einem Schritt.

Fügen Sie das Folgende zu Ihrem Script hinzu, unterhalb des ersten Blocks:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Das Gesamtergebnis ist, dass wir unsere exportierte WebAssembly-Funktion `exported_func` aufrufen, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, die den im WebAssembly-Instance bereitgestellten Wert (42) in der Konsole protokolliert. Wenn Sie Ihren Beispielcode jetzt speichern und in einem Browser laden, der WebAssembly unterstützt, werden Sie dies in Aktion sehen!

> [!NOTE]
> Dies ist ein umständliches, langatmiges Beispiel, das nur wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist — die Verwendung von WebAssembly-Code neben JavaScript in Ihren Webanwendungen. Wie wir an anderer Stelle gesagt haben, zielt WebAssembly nicht darauf ab, JavaScript zu ersetzen; die beiden können stattdessen zusammenarbeiten und die Stärken des jeweils anderen nutzen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die Streaming-Methoden wie oben beschrieben nicht verwenden können oder möchten, können Sie stattdessen die nicht-streaming Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Bytecode zu und erfordern daher einen zusätzlichen Schritt, um die Antwort in einen {{jsxref("ArrayBuffer")}} umzuwandeln, bevor das Wasm-Modul kompiliert/instanziiert wird.

Der entsprechende Code würde folgendermaßen aussehen:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Anzeige von Wasm in Entwicklerwerkzeugen

In Firefox 54+ hat das Debugger-Panel des Entwicklerwerkzeugs eine Funktionalität, um die Textdarstellung eines jeden im Web eingeschlossenen Wasm-Codes anzuzeigen. Um es zu sehen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Debugger-Panel für Entwicklerwerkzeuge, das ein Modul hervorhebt.](wasm-debug.png)

Zusätzlich zur Anzeige von WebAssembly als Text können Entwickler WebAssembly im Textformat debuggen (Haltepunkte setzen, den Callstack inspizieren, Einzelschritte durchführen usw.).

## Speicher

Im niedrigstufigen Speicher-Modell von WebAssembly wird der Speicher als ein zusammenhängender Bereich untypisierter Bytes dargestellt, der [Linearer Speicher](https://webassembly.github.io/spec/core/exec/index.html) genannt wird und von [Lese- und Schreibanweisungen](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben wird. In diesem Speicher-Modell kann jede Lese- oder Schreiboperation auf jedes Byte im gesamten linearen Speicher zugreifen, was notwendig ist, um C/C++-Konzepte wie Zeiger originalgetreu darzustellen.

Anders als bei einem nativen C/C++-Programm, bei dem der verfügbare Speicherbereich den gesamten Prozess umfasst, ist der von einer bestimmten WebAssembly-Instanz zugängliche Speicher auf einen spezifischen — potenziell sehr kleinen — Bereich beschränkt, der von einem WebAssembly-Speicherobjekt umfasst wird. Dies ermöglicht es einer einzelnen Web-Anwendung, mehrere unabhängige Bibliotheken — von denen jede intern WebAssembly verwendet — zu nutzen, um getrennte Speicherbereiche zu haben, die vollständig voneinander isoliert sind. Außerdem können neuere Implementierungen auch [geteilte Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Orten verwendet werden können.

In JavaScript kann eine Speicherinstanz als ein größenveränderbares [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Fall von geteilten Speichern) angesehen werden und, ebenso wie bei `ArrayBuffers`, kann eine einzelne Web-Anwendung viele unabhängige Speicherobjekte erstellen. Sie können eines mit dem [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Konstruktor erstellen, der als Argumente eine anfängliche Größe und (optional) eine maximale Größe und eine `shared`-Eigenschaft nimmt, die angibt, ob es sich um einen geteilten Speicher handelt oder nicht.

Lassen Sie uns damit beginnen, dies durch ein kurzes Beispiel zu untersuchen.

1. Erstellen Sie eine weitere einfache HTML-Seite (kopieren Sie unser [einfaches Template](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie ein `<script></script>`-Element zur Seite hinzu.
2. Fügen Sie nun die folgende Zeile oben zu Ihrem Script hinzu, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` ist in WebAssembly-Seiten — diese sind auf 64KB Größe festgelegt. Das bedeutet, dass die obige Speicherinstanz eine anfängliche Größe von 640KB und eine maximale Größe von 6.4MB hat.

   WebAssembly-Speicher stellt seine Bytes zur Verfügung, indem es einen Buffer-Getter/Setter bereitstellt, der einen ArrayBuffer zurückgibt. Zum Beispiel, um 42 direkt in das erste Wort des linearen Speichers zu schreiben, können Sie dies tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, die ein Lese- und Schreibverfahren im Little-Endian-Format erzwingt, da WebAssembly-Speicher immer im Little-Endian-Format ist. Sie können denselben Wert dann zurückgeben, indem Sie:

   ```js
   data.getUint32(0, true);
   ```

3. Versuchen Sie dies jetzt in Ihrem Demo — speichern Sie das, was Sie bisher hinzugefügt haben, laden Sie es in Ihrem Browser und versuchen Sie, die obigen beiden Zeilen in Ihrer JavaScript-Konsole einzugeben.

### Speicher erweitern

Eine Speicherinstanz kann durch Aufrufe von [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) erweitert werden, wobei das Argument wieder in Einheiten von WebAssembly-Seiten angegeben wird:

```js
memory.grow(1);
```

Wenn bei der Erstellung der Speicherinstanz ein Maximalwert angegeben wurde, schlagen Versuche, über dieses Maximum hinauszugehen, mit einer {{jsxref("RangeError")}}-Ausnahme fehl. Die Engine nutzt diese angegebenen oberen Grenzen, um im Voraus Speicher zu reservieren, was das Größenänderungsverfahren effizienter machen kann.

Hinweis: Da die Länge (in Bytes) eines {{jsxref("ArrayBuffer")}} unveränderlich ist, wird nach einer erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) Operation der Buffer-Getter ein neues ArrayBuffer-Objekt (mit neuer Länge in Bytes) zurückgeben und alle vorherigen ArrayBuffer-Objekte werden "getrennt", oder von dem zugrunde liegenden Speicher, auf den sie zuvor verwiesen haben, getrennt.

Genauso wie Funktionen können lineare Speicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul seinen Speicher auch optional exportieren. Das bedeutet, dass JavaScript auf den Speicher einer WebAssembly-Instanz entweder durch das Erstellen eines neuen `WebAssembly.Memory` und dessen Importieren oder durch den Erhalt eines Speicherexports (über [`Instance.prototype.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)) Zugriff erhalten kann.

### Komplexeres Beispiel für Speicher

Lassen Sie uns die obigen Aussagen klarer machen, indem wir ein komplexeres Beispielfeld für Speicher betrachten — ein WebAssembly-Modul, das die zuvor definierte Speicherinstanz importiert, sie mit einem Array aus Ganzzahlen füllt und sie dann summiert. Sie finden dies bei [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm)

1. Machen Sie eine lokale Kopie von `memory.wasm` im selben Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Gehen Sie zurück zu Ihrer `memory.html`-Beispieldatei und holen, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das folgende an das Ende Ihres Scripts hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, können wir eine exportierte Funktion `accumulate()` verwenden, um ein Eingabe-Array direkt im linearen Speicher der Modulinstanz (`mem`) zu erstellen und zu füllen. Fügen Sie das Folgende in Ihren Code an der angegebenen Stelle ein:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir die {{jsxref("DataView")}} Ansicht auf dem Pufferobjekt der Speicherobjekte ([`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)) und nicht auf dem Speicher selbst erstellen.

Speicherimporte funktionieren ebenso wie Funktionsimporte, nur dass Speicherobjekte als Werte anstelle von JavaScript-Funktionen übergeben werden. Speicherimporte sind aus zwei Gründen nützlich:

- Sie ermöglichen es JavaScript, die anfänglichen Inhalte des Speichers zu holen und zu erstellen, bevor oder während der Kompilierung des Moduls.
- Sie ermöglichen es, dass ein einzelnes Speicherobjekt von mehreren Modulinstanzen importiert wird, was ein entscheidender Baustein zur Implementierung dynamischer Verbindungen in WebAssembly ist.

> [!NOTE]
> Sie können unsere vollständige Demo bei [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) finden ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)).

## Tabellen

Eine WebAssembly-Tabelle ist ein erweiterbares, typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>), das sowohl durch JavaScript als auch durch WebAssembly-Code zugänglich ist. Während Speicher ein erweiterbares typisiertes Array von Rohbytes bietet, ist es unsicher, Referenzen in einem Speicher zu speichern, da eine Referenz ein von der Engine vertrauter Wert ist, dessen Bytes aus Sicherheits-, Portabilitäts- und Stabilitätsgründen nicht direkt von Inhalten gelesen oder geschrieben werden dürfen.

Tabellen haben einen Elementtyp, was die Typen der Referenzen begrenzt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur einen Referenztyp, der von WebAssembly-Code benötigt wird — Funktionen — und daher nur einen gültigen Elementtyp. In zukünftigen Iterationen werden mehr Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen Implementierung von C/C++ wird ein Funktionszeiger durch die Rohadresse des Funktion-Codes im virtuellen Adressraum des Prozesses dargestellt und kann daher aus den oben erwähnten Sicherheitsgründen nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die Ganze Zahlen sind und im linearen Speicher gespeichert werden können, werden herumgereicht.

Wenn die Zeit gekommen ist, einen Funktionszeiger aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann sicherheitsgrenzenüberprüft gegen die Tabelle angelegt werden kann, bevor die indizierte Funktionsreferenz aufgerufen wird. Deshalb sind Tabellen derzeit ein ziemlich niedrigstufiges Primitive, das genutzt wird, um niedrigstufige Programmierfunktionen sicher und portabel zu kompilieren.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) verändert werden, welches eines der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), welches die Anzahl der Werte erhöht, die in einer Tabelle gespeichert werden können. Dies ermöglicht es, dass die indirekt aufrufbare Menge an Funktionen im Laufe der Zeit ändert, was für [techniken des dynamischen Bindens](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Veränderungen sind sofort in JavaScript über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) zugänglich und für Wasm-Module.

### Ein Tabellenbeispiel

Lassen Sie uns ein einfaches Tabellenbeispiel betrachten — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie können dies bei [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm) finden.

1. Machen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls bei [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unseres [HTML-Templates](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im selben Verzeichnis und nennen Sie es `table.html`.
3. Holen, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das folgende in ein {{htmlelement("script")}}-Element am Ende des HTML-Körpers hinzu:

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

Dieser Code greift nacheinander auf jede Funktionsreferenz zu, die in der Tabelle gespeichert ist, und instanziiert sie, um die Werte, die sie halten, in der Konsole auszugeben — beachten Sie, wie jede Funktionsreferenz mit einem Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) abgerufen wird, dann fügen wir ein weiteres Paar Klammern am Ende hinzu, um die Funktion tatsächlich aufzurufen.

> [!NOTE]
> Sie können unsere vollständige Demo bei [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) finden ([sehen Sie es live auch](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globals

WebAssembly hat die Fähigkeit, globale Variableninstanzen zu erstellen, die sowohl aus JavaScript zugänglich als auch über ein oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Instanzen importierbar/exportierbar sind. Dies ist sehr nützlich, da es dynamisches Verknüpfen mehrerer Module ermöglicht.

Um eine globale WebAssembly-Instanz von JavaScript aus zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor, der folgendermaßen aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie sehen, dass dies zwei Parameter annimmt:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: sein Datentyp, der jeder Datentyp sein kann, der in WebAssembly-Modulen akzeptiert wird — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein boolescher Wert, der definiert, ob der Wert veränderbar ist oder nicht.

- Einen Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ mit dem angegebenen Datentyp übereinstimmt.

Wie nutzen wir das also? Im folgenden Beispiel definieren wir eine globale Variable als veränderbaren `i32`-Typ mit einem Wert von 0.

Der Wert der globalen Variable wird dann geändert, zuerst auf `42` mit der `Global.value`-Eigenschaft, und dann auf 43 mit der Funktion `incGlobal()`, die aus dem `global.wasm`-Modul exportiert wird (dies fügt 1 zu irgendeinem Wert hinzu, den es erhält, und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub ausführen sehen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicität

Da wir nun die Nutzung der wichtigsten WebAssembly-Bausteine demonstriert haben, ist dies ein guter Ort, um das Konzept der Multiplicität zu erwähnen. Dies bietet WebAssembly eine Vielzahl von Fortschritten in Bezug auf architektonische Effizienz:

- Ein Modul kann N Instanzen haben, ebenso wie ein Funktionsliteral N Abschlusswerte produzieren kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen nutzen, die den "Adressraum" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly können 0–N Speicherinstanzen pro Modulinstanz erlauben (siehe [Mehrere Erinnerungen](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen nutzen — dies ist der "Funktionsadressraum" der Instanz, der verwendet wird, um C-Funktionszeiger zu implementieren. Zukünftige Versionen von WebAssembly können 0–N Tabelleninstanzen pro Modulinstanz erlauben.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen verwendet werden — diese Instanzen teilen alle denselben Adressraum, was [dynamisches Verknüpfen](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht.

Sie können Multiplicität in Aktion in unserem Artikel über das Verständnis des Textformats sehen — siehe den [Abschnitt über das Verändern von Tabellen und dynamisches Verknüpfen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Sie durch die Grundlagen der Verwendung der WebAssembly-JavaScript-API geführt, um ein WebAssembly-Modul in einen JavaScript-Kontext zu integrieren und seine Funktionen zu nutzen, sowie WebAssembly-Speicher und -Tabellen in JavaScript zu verwenden. Wir haben auch das Konzept der Multiplicität angesprochen.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
