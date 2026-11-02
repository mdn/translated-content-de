---
title: In JavaScript integrierte Funktionen für WebAssembly
slug: WebAssembly/Guides/JavaScript_builtins
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

In JavaScript integrierte Funktionen für WebAssembly (JavaScript builtins) sind Wasm-Entsprechungen von JavaScript-Operationen. Mit ihnen lassen sich JavaScript-Funktionen innerhalb von Wasm-Modulen nutzen, ohne JavaScript-Verbindungscode importieren zu müssen, der Werte und Aufrufkonventionen zwischen JavaScript und WebAssembly überbrückt.

Dieser Artikel erklärt, wie builtins funktionieren und welche verfügbar sind. Anschließend zeigt er ein Anwendungsbeispiel.

## Probleme beim Importieren von JavaScript-Funktionen

Für viele JavaScript-Funktionen funktionieren reguläre Importe gut. Der Import von Verbindungscode für grundlegende Datentypen wie {{jsxref("String")}}, {{jsxref("ArrayBuffer")}} und {{jsxref("Map")}} verursacht jedoch einen erheblichen Performance-Overhead. In solchen Fällen erwarten WebAssembly und die meisten darauf ausgerichteten Sprachen eine kurze Folge direkt eingebetteter Operationen statt eines indirekten Funktionsaufrufs, wie ihn regulär importierte Funktionen verwenden.

Insbesondere verursacht der Import von Funktionen aus JavaScript in WebAssembly-Module aus folgenden Gründen Performance-Probleme:

- Bestehende APIs erfordern eine Umwandlung, um Unterschiede beim Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zu berücksichtigen. Bei `import`-Aufrufen von WebAssembly-Funktionen bleibt dieser Wert `undefined`.
- Einige grundlegende Datentypen verwenden JavaScript-Operatoren wie [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`<`](/de/docs/Web/JavaScript/Reference/Operators/Less_than), die nicht importiert werden können.
- Die meisten JavaScript-Funktionen akzeptieren Werte unterschiedlichster Typen. Es ist daher wünschenswert, das Typsystem von WebAssembly zu nutzen, um die entsprechenden Prüfungen und Typumwandlungen nach Möglichkeit zu vermeiden.

Angesichts dieser Probleme ist es einfacher und performanter, integrierte Definitionen zu erstellen, die bestehende JavaScript-Funktionalität wie {{jsxref("String")}}-Operationen an WebAssembly anpassen, statt sie zu importieren und auf indirekte Funktionsaufrufe zurückzugreifen.

## Verfügbare JavaScript builtins für WebAssembly

Die folgenden Abschnitte beschreiben die verfügbaren builtins. Künftig werden voraussichtlich weitere unterstützt.

### String-Operationen

Die folgenden builtins für {{jsxref("String")}} sind verfügbar:

- [`"wasm:js-string" "cast"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-cast)
  - : Löst einen Fehler aus, wenn der übergebene Wert kein String ist. Entspricht ungefähr:

    ```js
    if (typeof obj !== "string") throw new WebAssembly.RuntimeError();
    ```

- [`"wasm:js-string" "compare"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-compare)
  - : Vergleicht zwei String-Werte und bestimmt ihre Reihenfolge. Gibt `-1` zurück, wenn der erste String [kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) der zweite ist, `1`, wenn er [größer als](/de/docs/Web/JavaScript/Reference/Operators/Greater_than) der zweite ist, und `0`, wenn die Strings [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) sind.
- [`"wasm:js-string" "concat"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)
  - : Entspricht {{jsxref("String.prototype.concat()")}}.
- [`"wasm:js-string" "charCodeAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-charcodeat)
  - : Entspricht {{jsxref("String.prototype.charCodeAt()")}}.
- [`"wasm:js-string" "codePointAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-codepointat)
  - : Entspricht {{jsxref("String.prototype.codePointAt()")}}.
- [`"wasm:js-string" "equals"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-equals)
  - : Vergleicht zwei String-Werte auf [strenge Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und gibt `1` zurück, wenn sie gleich sind, andernfalls `0`.
    > [!NOTE]
    > Die Funktion `"equals"` ist das einzige String-builtin, das bei `null`-Eingaben keinen Fehler auslöst. Wasm-Module müssen daher vor ihrem Aufruf nicht auf `null` prüfen. Für alle anderen Funktionen gibt es keine sinnvolle Möglichkeit, `null`-Eingaben zu verarbeiten; sie lösen deshalb einen Fehler aus.
- [`"wasm:js-string" "fromCharCode"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcode)
  - : Entspricht {{jsxref("String.fromCharCode()")}}.
- [`"wasm:js-string" "fromCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcodearray)
  - : Erstellt einen String aus einem Wasm-Array mit `i16`-Werten.
- [`"wasm:js-string" "fromCodePoint"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcodepoint)
  - : Entspricht {{jsxref("String.fromCodePoint()")}}.
- [`"wasm:js-string" "intoCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-intocharcodearray)
  - : Schreibt die Zeichencodes eines Strings in ein Wasm-Array mit `i16`-Werten.
- [`"wasm:js-string" "length"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-length)
  - : Entspricht {{jsxref("String.prototype.length")}}.
- [`"wasm:js-string" "substring"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-substring)
  - : Entspricht {{jsxref("String.prototype.substring()")}}.
- [`"wasm:js-string" "test"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-test)
  - : Gibt `0` zurück, wenn der übergebene Wert kein String ist, und `1`, wenn er ein String ist. Entspricht ungefähr:

    ```js
    typeof obj === "string";
    ```

## Wie verwenden Sie builtins?

Builtins funktionieren ähnlich wie aus JavaScript importierte Funktionen. Sie verwenden jedoch standardisierte Wasm-Funktionsentsprechungen für JavaScript-Operationen, die in einem reservierten Namensraum (`wasm:`) definiert sind. Dadurch können Browser optimalen Code für sie vorhersagen und erzeugen. Dieser Abschnitt fasst ihre Verwendung zusammen.

### JavaScript-API

Builtins werden zur Kompilierzeit aktiviert: Übergeben Sie dazu beim Aufruf einer Methode zum Kompilieren und/oder Instanziieren eines Moduls die Eigenschaft `compileOptions.builtins` als Argument. Ihr Wert ist ein Array von Strings, die die zu aktivierenden Gruppen von builtins angeben:

```js
WebAssembly.compile(bytes, { builtins: ["js-string"] });
```

Das Objekt `compileOptions` ist für folgende Funktionen verfügbar:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- Den Konstruktor [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module)

### Funktionen des WebAssembly-Moduls

In Ihrem WebAssembly-Modul können Sie die im Objekt `compileOptions` angegebenen builtins nun aus dem Namensraum `wasm:` importieren (hier die Funktion [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat); siehe auch die [entsprechende builtin-Definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wat
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Unterstützung für builtins erkennen

Bei Verwendung von builtins gelten strengere Typprüfungen als ohne sie: Für builtin-Importe werden bestimmte Regeln vorgegeben.

Um die Unterstützung für builtins zu erkennen, können Sie daher ein Modul definieren, das _mit_ der Funktion _ungültig_ und _ohne_ sie _gültig_ ist. Schlägt die Validierung fehl, geben Sie `true` zurück, um die Unterstützung anzuzeigen. Ein einfaches Modul dafür sieht so aus:

```wat
(module
  (function (import "wasm:js-string" "cast")))
```

Ohne builtins ist das Modul gültig, da Sie jede Funktion mit einer beliebigen Signatur importieren können (hier: ohne Parameter und Rückgabewerte). Mit builtins ist das Modul ungültig, da die nun gesondert behandelte Funktion `"wasm:js-string" "cast"` eine bestimmte Signatur haben muss (einen `externref`-Parameter und einen nicht nullbaren `(ref extern)`-Rückgabewert).

Sie können dieses Modul dann mit der Methode [`validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static) validieren. Beachten Sie aber, dass das Ergebnis mit dem Operator `!` negiert wird: builtins werden unterstützt, wenn das Modul _ungültig_ ist.

```js
const compileOptions = {
  builtins: ["js-string"],
};

fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Builtins available: ${!result}`));
```

Der obige Modulcode ist so kurz, dass Sie statt eines heruntergeladenen Moduls direkt die Bytes validieren können. Eine Funktion zur Erkennung der Unterstützung könnte so aussehen:

```js
function JsStringBuiltinsSupported() {
  let bytes = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 2, 23, 1, 14, 119, 97, 115,
    109, 58, 106, 115, 45, 115, 116, 114, 105, 110, 103, 4, 99, 97, 115, 116, 0,
    0,
  ]);
  return !WebAssembly.validate(bytes, { builtins: ["js-string"] });
}
```

> [!NOTE]
> In vielen Fällen gibt es Alternativen zur Erkennung der Unterstützung für builtins. Sie könnten beispielsweise neben den builtins auch reguläre Importe bereitstellen; unterstützende Browser ignorieren dann einfach diese Ausweichlösung.

## Beispiel für builtins

Sehen wir uns ein einfaches, aber vollständiges Beispiel für die Verwendung von builtins an. Darin definieren und exportieren wir eine Funktion innerhalb eines Wasm-Moduls, die zwei Strings miteinander verknüpft und das Ergebnis in der Konsole ausgibt. Anschließend rufen wir die exportierte Funktion aus JavaScript auf.

Das Beispiel verwendet auf der Webseite die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) zum Kompilieren und Instanziieren. Dieses und weitere Beispiele finden Sie in unserem Repository `webassembly-examples` unter [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

Sie können das Beispiel anhand der folgenden Schritte selbst erstellen. Außerdem können Sie es [live ausführen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) – öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Ausgabe zu sehen.

### JavaScript

Der JavaScript-Code für das Beispiel ist unten dargestellt. Um ihn lokal zu testen, binden Sie ihn auf eine Weise Ihrer Wahl in eine HTML-Seite ein (beispielsweise innerhalb von {{htmlelement("script")}}-Tags oder in einer externen `.js`-Datei, auf die mit `<script src="">` verwiesen wird).

```js
const importObject = {
  // Regular import
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
};

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject, compileOptions))
  .then((result) => result.instance.exports.main());
```

Der JavaScript-Code:

- Definiert ein `importObject`, das eine Funktion `"log"` im Namensraum `"m"` angibt, die bei der Instanziierung in das Wasm-Modul importiert wird. Dabei handelt es sich um die Funktion [`console.log()`](/de/docs/Web/API/console/log_static).
- Definiert ein Objekt `compileOptions` mit:
  - der Eigenschaft `builtins`, um String-builtins zu aktivieren.
  - der Eigenschaft `importedStringConstants`, um [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) zu aktivieren.
- Ruft das Wasm-Modul (`log-concat.wasm`) mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, wandelt die Antwort mit [`Response.arrayBuffer`](/de/docs/Web/API/Response/arrayBuffer) in einen {{jsxref("ArrayBuffer")}} um und kompiliert und instanziiert das Wasm-Modul anschließend mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Ruft die aus dem Wasm-Modul exportierte Funktion `main()` auf.

### Wasm-Modul

Die Textdarstellung unseres WebAssembly-Modulcodes sieht so aus:

```wat
(module
  (global $h (import "string_constants" "hello ") externref)
  (global $w (import "string_constants" "world!") externref)
  (func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
  (func $log (import "m" "log") (param externref))
  (func (export "main")
    (call $log (call $concat (global.get $h) (global.get $w))))
)
```

Dieser Code:

- Importiert die beiden globalen String-Konstanten `"hello "` und `"world!"` aus dem in JavaScript angegebenen Namensraum `"string_constants"`. Sie erhalten die Namen `$h` und `$w`.
- Importiert das builtin [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat) aus dem Namensraum `wasm:`, gibt ihm den Namen `$concat` und legt fest, dass es zwei Parameter und einen Rückgabewert hat.
- Importiert die Funktion `"log"` aus dem Namensraum `"m"`, wie im JavaScript-Objekt `importObject` angegeben. Sie erhält den Namen `$log` und einen Parameter. Wir haben im Beispiel sowohl einen regulären Import als auch ein builtin verwendet, damit Sie die beiden Ansätze vergleichen können.
- Definiert eine Funktion, die unter dem Namen `"main"` exportiert wird. Diese Funktion ruft `$log` auf und übergibt ihm einen Aufruf von `$concat` als Parameter. Dem Aufruf von `$concat` werden wiederum die globalen String-Konstanten `$h` und `$w` als Parameter übergeben.

So bringen Sie Ihr lokales Beispiel zum Laufen:

1. Speichern Sie den oben gezeigten WebAssembly-Modulcode in einer Textdatei namens `log-concat.wat` im selben Verzeichnis wie Ihren HTML-/JavaScript-Code.
2. Kompilieren Sie ihn mit dem Tool `wasm-as`, das Teil der [Binaryen-Bibliothek](https://github.com/WebAssembly/binaryen) ist (siehe die [Build-Anleitung](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)), zu einem WebAssembly-Modul (`log-concat.wasm`). Damit diese Beispiele erfolgreich kompiliert werden, müssen Sie `wasm-as` mit aktivierten Referenztypen und aktivierter Garbage Collection (GC) ausführen:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Alternativ können Sie anstelle von `--enable-reference-types -–enable-gc` das Flag `-all` verwenden:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Laden Sie Ihre HTML-Beispielseite in einem [unterstützenden Browser](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#browser_compatibility) über einen [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_local_http_server).

Das Ergebnis sollte eine leere Webseite sein. In der JavaScript-Konsole wird `"hello world!"` ausgegeben, erzeugt durch eine exportierte Wasm-Funktion. Für die Ausgabe wurde eine aus JavaScript importierte Funktion verwendet, während die beiden ursprünglichen Strings durch ein builtin verknüpft wurden.
