---
title: Verwendung der WebAssembly JavaScript API
slug: WebAssembly/Using_the_JavaScript_API
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{WebAssemblySidebar}}

Wenn Sie bereits [ein Modul aus einer anderen Sprache mit Tools wie Emscripten kompiliert haben](/de/docs/WebAssembly/C_to_Wasm) oder [den Code selbst geladen und ausgeführt haben](/de/docs/WebAssembly/Loading_and_running), ist der nächste Schritt, mehr über die Nutzung der anderen Funktionen der WebAssembly JavaScript API zu lernen. Dieser Artikel vermittelt Ihnen das notwendige Wissen.

> [!NOTE]
> Wenn Sie mit den in diesem Artikel erwähnten grundlegenden Konzepten nicht vertraut sind und weitere Erklärungen benötigen, lesen Sie zuerst [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts) und kehren Sie dann zurück.

## Einige Beispiele

Lassen Sie uns einige Beispiele durchgehen, die erklären, wie Sie die WebAssembly JavaScript API verwenden und wie Sie damit ein Wasm-Modul in einer Webseite laden.

> [!NOTE]
> Sie finden den Beispielcode in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub-Repository.

### Vorbereitung des Beispiels

1. Zuerst benötigen wir ein Wasm-Modul! Laden Sie unsere Datei [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) herunter und speichern Sie eine Kopie in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Als nächstes erstellen wir eine einfache HTML-Datei namens `index.html` im gleichen Verzeichnis wie Ihre Wasm-Datei (Sie können unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) verwenden, falls Sie keine leicht verfügbare haben).
3. Um besser zu verstehen, was hier passiert, schauen wir uns die Textdarstellung unseres Wasm-Moduls an (die wir auch im Abschnitt [Konvertieren des WebAssembly-Formats in Wasm](/de/docs/WebAssembly/Text_format_to_Wasm#a_first_look_at_the_text_format) kennenlernen):

   ```wasm
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. In der zweiten Zeile sehen Sie, dass der Import einen zweistufigen Namensraum hat — die interne Funktion `$i` wird aus `my_namespace.imported_func` importiert. Diesen zweistufigen Namensraum müssen wir in JavaScript widerspiegeln, wenn wir das Objekt schreiben, das in das Wasm-Modul importiert werden soll. Erstellen Sie ein `<script></script>`-Element in Ihrer HTML-Datei und fügen Sie den folgenden Code hinzu:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Streaming des WebAssembly-Moduls

Neu in Firefox 58 ist die Möglichkeit, WebAssembly-Module direkt aus zugrunde liegenden Quellen zu kompilieren und zu instanziieren. Dies wird mithilfe der Methoden [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) erreicht. Diese Methoden sind einfacher als ihre nicht-streaming-Pendants, da sie den Bytecode direkt in `Module`/`Instance` Instanzen verwandeln können, wodurch das separate Umwandeln der [`Response`](/de/docs/Web/API/Response) in einen {{jsxref("ArrayBuffer")}} entfällt.

Dieses Beispiel (siehe unser [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)-Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) auch) zeigt, wie man `instantiateStreaming()` verwendet, um ein Wasm-Modul abzurufen, eine JavaScript-Funktion darin zu importieren, zu kompilieren und zu instanziieren und auf seine exportierte Funktion zuzugreifen — alles in einem Schritt.

Fügen Sie den folgenden Code Ihrem Skript unterhalb des ersten Blocks hinzu:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Im Endergebnis rufen wir unsere exportierte WebAssembly-Funktion `exported_func` auf, die wiederum unsere importierte JavaScript-Funktion `imported_func` aufruft, die den innerhalb der WebAssembly-Instanz übergebenen Wert (42) in die Konsole protokolliert. Wenn Sie Ihren Beispielcode jetzt speichern und in einem Browser laden, der WebAssembly unterstützt, sehen Sie dies in Aktion!

> [!NOTE]
> Dies ist ein umständliches, langes Beispiel, das wenig erreicht, aber es dient dazu, zu veranschaulichen, was möglich ist — die Verwendung von WebAssembly-Code neben JavaScript in Ihren Webanwendungen. Wie wir anderswo gesagt haben, zielt WebAssembly nicht darauf ab, JavaScript zu ersetzen; beide können stattdessen zusammenarbeiten und die Stärken des jeweils anderen nutzen.

### Laden unseres Wasm-Moduls ohne Streaming

Wenn Sie die oben beschriebenen Streaming-Methoden nicht verwenden können oder wollen, können Sie stattdessen die nicht-streaming-Methoden [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) verwenden.

Diese Methoden greifen nicht direkt auf den Bytecode zu, daher ist ein zusätzlicher Schritt erforderlich, um die Antwort in einen {{jsxref("ArrayBuffer")}} umzuwandeln, bevor das Wasm-Modul kompiliert/instanziiert wird.

Der entsprechende Code würde so aussehen:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Anzeige von Wasm in den Entwicklerwerkzeugen

In Firefox 54+ hat das Debugger-Panel der Entwicklerwerkzeuge die Funktion, die Textdarstellung von in einer Webseite enthaltenem Wasm-Code anzuzeigen. Um dies anzuzeigen, können Sie zum Debugger-Panel gehen und auf den Eintrag "wasm://" klicken.

![Developer tools debugger panel highlighting a module.](wasm-debug.png)

Zusätzlich zur Ansicht von WebAssembly als Text können Entwickler WebAssembly im Textformat debuggen (Haltepunkte setzen, den Callstack inspizieren, einzeln durchgehen usw.).

## Speicher

Im Low-Level-Speichermodell von WebAssembly wird Speicher als ein zusammenhängender Bereich von ungetypten Bytes dargestellt, der [Linearspeicher](https://webassembly.github.io/spec/core/exec/index.html) genannt wird und von [Lade- und Speicherbefehlen](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) innerhalb des Moduls gelesen und geschrieben wird. In diesem Speichermodell kann jeder Lade- oder Speicherbefehl auf jedes Byte im gesamten Linearspeicher zugreifen, was notwendig ist, um C/C++-Konzepte wie Zeiger korrekt darzustellen.

Im Gegensatz zu einem nativen C/C++-Programm, bei dem sich der verfügbare Speicherbereich über den gesamten Prozess erstreckt, beschränkt sich der Speicher, der von einer bestimmten WebAssembly-Instanz zugänglich ist, auf einen bestimmten — potenziell sehr kleinen — Bereich, der von einem WebAssembly-Speicherobjekt umfasst wird. Dies ermöglicht es einer einzigen Webanwendung, mehrere unabhängige Bibliotheken zu verwenden — jede davon verwendet intern WebAssembly —, um separate Speicher, die vollständig voneinander isoliert sind, zu haben. Darüber hinaus können neuere Implementierungen auch [geteilte Speicher](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) erstellen, die zwischen Fenster- und Worker-Kontexten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen und an mehreren Orten verwendet werden können.

In JavaScript kann eine Speicherinstanz als ein skalierbarer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), im Falle geteilter Speicher) angesehen werden, und genau wie `ArrayBuffers` kann eine einzelne Webanwendung viele unabhängige Speicherobjekte erstellen. Sie können eins mit dem [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory) Konstruktor erstellen, der als Argumente eine Anfangsgröße und (optional) eine Maximalgröße sowie eine `shared`-Eigenschaft, die angibt, ob es sich um einen geteilten Speicher handelt, entgegennimmt.

Beginnen wir dies zu erforschen, indem wir uns ein schnelles Beispiel ansehen.

1. Erstellen Sie eine weitere einfache HTML-Seite (kopieren Sie unsere [einfache Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) und nennen Sie sie `memory.html`. Fügen Sie ein `<script></script>`-Element zur Seite hinzu.
2. Fügen Sie jetzt die folgende Zeile oben in Ihr Skript ein, um eine Speicherinstanz zu erstellen:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   Die Einheit von `initial` und `maximum` sind WebAssembly-Seiten — diese sind auf eine Größe von 64KB festgelegt. Dies bedeutet, dass die obige Speicherinstanz eine anfängliche Größe von 640KB und eine maximale Größe von 6,4MB hat.

   WebAssembly-Speicher legt seine Bytes über einen Puffergetter/-setter frei, der ein ArrayBuffer zurückgibt. Zum Beispiel, um 42 direkt in das erste Wort des Linearspeichers zu schreiben, können Sie dies tun:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Beachten Sie die Verwendung von `true`, was das Lesen und Schreiben im Little-Endian-Format erzwingt, da WebAssembly-Speicher immer im Little-Endian-Format vorliegt. Den gleichen Wert können Sie dann mit dem folgenden zurückgeben:

   ```js
   data.getUint32(0, true);
   ```

3. Versuchen Sie dies jetzt in Ihrem Demo – speichern Sie, was Sie bisher hinzugefügt haben, laden Sie es in Ihrem Browser und versuchen Sie dann, die oben genannten zwei Zeilen in Ihrer JavaScript-Konsole einzugeben.

### Speicher erweitern

Eine Speicherinstanz kann durch Aufrufe an [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow) vergrößert werden, wobei das Argument wiederum in Einheiten von WebAssembly-Seiten angegeben wird:

```js
memory.grow(1);
```

Wenn ein Maximalwert bei der Erstellung der Speicherinstanz angegeben wurde, führen Versuche, diesen Maximalwert zu überschreiten, zu einer {{jsxref("RangeError")}}-Ausnahme. Die Engine nutzt diesen angegebenen oberen Schranken, um Speicher im Voraus zu reservieren, was das Resizing effizienter machen kann.

Hinweis: Da die byteLength eines {{jsxref("ArrayBuffer")}} unveränderlich ist, gibt nach einer erfolgreichen [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)-Operation der Buffer-Getter ein neues ArrayBuffer-Objekt (mit der neuen byteLength) zurück und alle vorherigen ArrayBuffer-Objekte werden "gelöst" oder von dem zugrunde liegenden Speicher, auf den sie zuvor zeigten, getrennt.

Genau wie Funktionen können lineare Speicher innerhalb eines Moduls definiert oder importiert werden. Ebenso kann ein Modul optional auch seinen Speicher exportieren. Das bedeutet, dass JavaScript Zugriff auf den Speicher einer WebAssembly-Instanz entweder durch Erstellung eines neuen `WebAssembly.Memory` und dessen Import oder durch Erhalt eines Memory-Exports (via [`Instance.prototype.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)) erhalten kann.

### Aufwändigeres Speicherbeispiel

Lassen Sie uns die obigen Aussagen durch einen genaueren Blick auf ein aufwändigeres Speicherbeispiel klarer machen — ein WebAssembly-Modul, das die von uns zuvor definierte Speicherinstanz importiert, sie mit einem Array von ganzen Zahlen befüllt und dann die Summe dieser Zahlen berechnet. Sie können dieses Beispiel unter [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm) finden.

1. Machen Sie eine lokale Kopie von `memory.wasm` im gleichen Verzeichnis wie zuvor.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls unter [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) sehen.

2. Kehren Sie zu Ihrer `memory.html`-Beispieldatei zurück und holen, kompilieren und instanziieren Sie Ihr Wasm-Modul wie zuvor — fügen Sie das folgende am Ende Ihres Skriptes hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // add code here
   });
   ```

3. Da dieses Modul seinen Speicher exportiert, können wir, gegeben eine Instanz dieses Moduls namens Instance, eine exportierte Funktion `accumulate()` verwenden, um ein Eingabearray direkt im linearen Speicher der Modulinstanz (`mem`) zu erstellen und zu füllen. Fügen Sie das folgende in Ihren Code ein, wo angegeben:

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Beachten Sie, wie wir die {{jsxref("DataView")}}-Ansicht auf dem Buffer-Objekt des Memory-Objekts ([`Memory.prototype.buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)), nicht auf dem Memory selbst, erstellen.

Speicherimporte funktionieren ähnlich wie Funktionsimporte, nur dass Speicherobjekte als Werte anstelle von JavaScript-Funktionen übergeben werden. Speicherimporte sind aus zwei Gründen nützlich:

- Sie erlauben JavaScript, die anfänglichen Speicherinhalte vor oder gleichzeitig mit der Modulerstellung abzurufen und zu erstellen.
- Sie erlauben es, dass ein einzelnes Speicherobjekt von mehreren Modulinstanzen importiert wird, was ein kritisches Bauteil zur Implementierung der dynamischen Verknüpfung in WebAssembly ist.

> [!NOTE]
> Unser vollständiges Demo finden Sie unter [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)).

## Tabellen

Eine WebAssembly-Tabelle ist ein skalierbares typisiertes Array von [Referenzen](<https://en.wikipedia.org/wiki/Reference_(computer_science)>), auf die sowohl von JavaScript als auch von WebAssembly-Code zugegriffen werden kann. Während Memory ein skalierbares typisiertes Array von Rohbytes bereitstellt, ist es unsicher, dass Referenzen in einem Memory gespeichert werden, da eine Referenz ein vom Engine vertrauenswürdiger Wert ist, dessen Bytes nicht direkt vom Inhalt gelesen oder geschrieben werden sollten, um Sicherheit, Portabilität und Stabilität zu gewährleisten.

Tabellen haben einen Elementtyp, der die Art der Referenzen einschränkt, die in der Tabelle gespeichert werden können. In der aktuellen Iteration von WebAssembly gibt es nur einen Referenztyp, den WebAssembly-Code benötigt — Funktionen — und somit nur einen gültigen Elementtyp. In zukünftigen Iterationen werden mehr Elementtypen hinzugefügt.

Funktionsreferenzen sind notwendig, um Sprachen wie C/C++ zu kompilieren, die Funktionszeiger haben. In einer nativen Implementierung von C/C++ wird ein Funktionszeiger durch die Rohadresse des Funktionscodes im virtuellen Adressraum des Prozesses dargestellt und kann daher aus den oben genannten Sicherheitsgründen nicht direkt im linearen Speicher gespeichert werden. Stattdessen werden Funktionsreferenzen in einer Tabelle gespeichert und ihre Indizes, die Ganzzahlen sind und im linearen Speicher gespeichert werden können, werden stattdessen herumgereicht.

Wenn es an der Zeit ist, einen Funktionspointer aufzurufen, liefert der WebAssembly-Aufrufer den Index, der dann vor dem Indizieren und Aufrufen der benannten Funktionsreferenz sicher auf seine Grenze geprüft werden kann. Tabellen sind daher derzeit ein eher Low-Level-Primitiv, das verwendet wird, um Low-Level-Programmierungssprachemerkmale sicher und portabel zu kompilieren.

Tabellen können über [`Table.prototype.set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set), das einen der Werte in einer Tabelle aktualisiert, und [`Table.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow), das die Anzahl der Werte, die in einer Tabelle gespeichert werden können, erhöht, mutiert werden. Dies erlaubt es der indirekt aufrufbaren Menge von Funktionen, sich im Laufe der Zeit zu verändern, was für [dynamischen Verknüpfungstechniken](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) notwendig ist. Die Mutationen sind sofort über [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) in JavaScript und für Wasm-Module zugänglich.

### Ein Tabellenbeispiel

Schauen wir uns ein einfaches Tabellenbeispiel an — ein WebAssembly-Modul, das eine Tabelle mit zwei Elementen erstellt und exportiert: Element 0 gibt 13 zurück und Element 1 gibt 42 zurück. Sie finden dies unter [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Machen Sie eine lokale Kopie von `table.wasm` in einem neuen Verzeichnis.

   > [!NOTE]
   > Sie können die Textdarstellung des Moduls unter [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) sehen.

2. Erstellen Sie eine neue Kopie unserer [HTML-Vorlage](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) im gleichen Verzeichnis und nennen Sie sie `table.html`.
3. Wie zuvor, holen, kompilieren und instanziieren Sie Ihr Wasm-Modul — fügen Sie das folgende in ein {{htmlelement("script")}} Element am Ende Ihres HTML-Körpers hinzu:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // add code here
   });
   ```

4. Greifen wir nun auf die in den Tabellen enthaltenen Daten zu — fügen Sie die folgenden Zeilen in Ihren Code an der angegebenen Stelle hinzu:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Dieser Code greift nacheinander auf jede in der Tabelle gespeicherte Funktionsreferenz zu und instanziiert sie, um die von ihnen gehaltenen Werte in die Konsole zu drucken — beachten Sie, wie jede Funktionsreferenz mit einem [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) Aufruf abgerufen wird, dann fügen wir ein zusätzliches Satz von Klammern am Ende hinzu, um die Funktion tatsächlich auszuführen.

> [!NOTE]
> Unser vollständiges Demo finden Sie unter [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) ([sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globalen

WebAssembly hat die Fähigkeit, Instanzen von globalen Variablen zu erstellen, die sowohl von JavaScript aus zugänglich sind als auch über eine oder mehrere [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Instanzen importiert/exportiert werden können. Dies ist sehr nützlich, da es das dynamische Verknüpfen mehrerer Module ermöglicht.

Um eine WebAssembly-Globale-Instanz aus Ihrem JavaScript zu erstellen, verwenden Sie den [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global) Konstruktor, der so aussieht:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Sie sehen, dass dies zwei Parameter nimmt:

- Ein Objekt, das zwei Eigenschaften enthält, die die globale Variable beschreiben:

  - `value`: ihr Datentyp, der jeder Datentyp sein kann, der innerhalb von WebAssembly-Modulen akzeptiert wird — `i32`, `i64`, `f32` oder `f64`.
  - `mutable`: ein Boolescher Wert, der angibt, ob der Wert veränderbar ist oder nicht.

- Ein Wert, der den tatsächlichen Wert der Variablen enthält. Dies kann jeder Wert sein, solange sein Typ dem angegebenen Datentyp entspricht.

Wie verwenden wir dies also? Im folgenden Beispiel definieren wir eine globale Variable als einen veränderbaren `i32`-Typ mit einem Wert von 0.

Der Wert der globalen Variable wird dann geändert, zuerst auf `42` mit der `Global.value`-Eigenschaft und dann auf 43 mit der `incGlobal()`-Funktion, die aus dem `global.wasm` Modul exportiert wurde (dies addiert 1 zu jedem übergebenen Wert und gibt dann den neuen Wert zurück).

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
> Sie können das Beispiel [live auf GitHub laufen sehen](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); siehe auch den [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicität

Da wir nun die Verwendung der Hauptbestandteile von WebAssembly demonstriert haben, ist dies ein guter Moment, um das Konzept der Multiplicität zu erwähnen. Dies bietet WebAssembly eine Vielzahl von Vorteilen in Bezug auf die architektonische Effizienz:

- Ein Modul kann N Instanzen haben, in gleicher Weise, wie ein Funktionsliteral N Closure-Werte erzeugen kann.
- Eine Modulinstanz kann 0–1 Speicherinstanzen nutzen, die den "Adressraum" der Instanz bereitstellen. Zukünftige Versionen von WebAssembly könnten es erlauben, 0–N Speicherinstanzen pro Modulinstanz zu haben (siehe [Multiple Memories](https://webassembly.org/features/)).
- Eine Modulinstanz kann 0–1 Tabelleninstanzen nutzen — dies ist der "Funktionsadressraum" der Instanz, der zur Implementierung von C-Funktionszeigern verwendet wird. Zukünftige Versionen von WebAssembly könnten es erlauben, 0–N Tabelleninstanzen pro Modulinstanz zu haben.
- Eine Speicher- oder Tabelleninstanz kann von 0–N Modulinstanzen genutzt werden — diese Instanzen teilen sich alle den gleichen Adressraum, wodurch [dynamic linking](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md) ermöglicht wird.

Sie können Multiplicität in Aktion in unserem Artikel über das Verständnis des Textformats sehen — siehe den Abschnitt [Mutierende Tabellen und dynamische Verknüpfung](/de/docs/WebAssembly/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Zusammenfassung

Dieser Artikel hat Sie durch die Grundlagen der Nutzung der WebAssembly JavaScript API geführt, um ein WebAssembly-Modul in einem JavaScript-Kontext einzuschließen und seine Funktionen zu nutzen, sowie wie Sie WebAssembly-Speicher und -Tabellen in JavaScript verwenden können. Wir haben auch das Konzept der Multiplicität behandelt.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
