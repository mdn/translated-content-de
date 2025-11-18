---
title: WebAssembly JavaScript Builtins
slug: WebAssembly/Guides/JavaScript_builtins
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

WebAssembly JavaScript Builtins sind die Wasm-Äquivalente von JavaScript-Operationen und bieten eine Möglichkeit, JavaScript-Funktionen innerhalb von Wasm-Modulen zu verwenden, ohne JavaScript-Zwischencode zu importieren, um eine Brücke zwischen JavaScript- und WebAssembly-Werten und Rufkonventionen bereitzustellen.

Dieser Artikel erklärt, wie Builtins funktionieren und welche verfügbar sind, und bietet dann ein Anwendungsbeispiel.

## Probleme beim Importieren von JavaScript-Funktionen

Für viele JavaScript-Funktionen funktionieren reguläre Importe gut. Das Importieren von Zwischencode für Primitive wie {{jsxref("String")}}, {{jsxref("ArrayBuffer")}} und {{jsxref("Map")}} bringt jedoch erhebliche Leistungseinbußen mit sich. In solchen Fällen erwarten WebAssembly und die meisten darauf zielenden Sprachen eine enge Abfolge von Inline-Operationen anstelle eines indirekten Funktionsaufrufs, wie es bei regulären importierten Funktionen der Fall ist.

Insbesondere das Importieren von Funktionen aus JavaScript in WebAssembly-Module erzeugt Leistungsprobleme aus folgenden Gründen:

- Bestehende APIs erfordern eine Konvertierung, um Unterschiede im Umgang mit dem [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert zu bewältigen, den WebAssembly-Funktions`import`-Aufrufe als `undefined` belassen.
- Bestimmte Primitive verwenden JavaScript-Operatoren wie [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`<`](/de/docs/Web/JavaScript/Reference/Operators/Less_than), die nicht importiert werden können.
- Die meisten JavaScript-Funktionen sind extrem großzügig in Bezug auf die Arten von Werten, die sie akzeptieren, und es ist wünschenswert, das Typsystem von WebAssembly zu nutzen, um diese Überprüfungen und Umwandlungen so weit wie möglich zu eliminieren.

Angesichts dieser Probleme ist es einfacher und besser für die Leistung, eingebaute Definitionen zu erstellen, die bestehende JavaScript-Funktionalitäten wie {{jsxref("String")}}-Primitive an WebAssembly anpassen, anstatt sie zu importieren und sich auf indirekte Funktionsaufrufe zu verlassen.

## Verfügbare WebAssembly JavaScript Builtins

Die folgenden Abschnitte beschreiben die verfügbaren Builtins. Andere Builtins werden voraussichtlich in Zukunft unterstützt.

### String-Operationen

Die verfügbaren {{jsxref("String")}} Builtins sind:

- [`"wasm:js-string" "cast"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-cast)
  - : Wirft einen Fehler, wenn der bereitgestellte Wert kein String ist. Grob äquivalent zu:

    ```js
    if (typeof obj !== "string") throw new WebAssembly.RuntimeError();
    ```

- [`"wasm:js-string" "compare"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-compare)
  - : Vergleicht zwei String-Werte und bestimmt ihre Reihenfolge. Gibt `-1` zurück, wenn der erste String [kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) der zweite ist, `1`, wenn der erste String [größer als](/de/docs/Web/JavaScript/Reference/Operators/Greater_than) der zweite ist, und `0`, wenn die Strings [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) sind.
- [`"wasm:js-string" "concat"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)
  - : Entspricht {{jsxref("String.prototype.concat()")}}.
- [`"wasm:js-string" "charCodeAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-charcodeat)
  - : Entspricht {{jsxref("String.prototype.charCodeAt()")}}.
- [`"wasm:js-string" "codePointAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-codepointat)
  - : Entspricht {{jsxref("String.prototype.codePointAt()")}}.
- [`"wasm:js-string" "equals"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-equals)
  - : Vergleicht zwei String-Werte auf [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality), gibt `1` zurück, wenn sie gleich sind, und `0`, wenn nicht.
    > [!NOTE]
    > Die `"equals"`-Funktion ist das einzige String-Builtin, das bei `null`-Eingaben keinen Fehler auslöst, sodass Wasm-Module nicht auf `null`-Werte prüfen müssen, bevor sie es aufrufen. Alle anderen Funktionen haben keine sinnvolle Möglichkeit, `null`-Eingaben zu verarbeiten und werfen daher bei ihnen einen Fehler.
- [`"wasm:js-string" "fromCharCode"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcode)
  - : Entspricht {{jsxref("String.fromCharCode()")}}.
- [`"wasm:js-string" "fromCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcodearray)
  - : Erzeugt einen String aus einem Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "fromCodePoint"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcodepoint)
  - : Entspricht {{jsxref("String.fromCodePoint()")}}.
- [`"wasm:js-string" "intoCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-intocharcodearray)
  - : Schreibt die Zeichen-Codes eines Strings in ein Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "length"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-length)
  - : Entspricht {{jsxref("String.prototype.length")}}.
- [`"wasm:js-string" "substring"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-substring)
  - : Entspricht {{jsxref("String.prototype.substring()")}}.
- [`"wasm:js-string" "test"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-test)
  - : Gibt `0` zurück, wenn der bereitgestellte Wert kein String ist, oder `1`, wenn er ein String ist. Grob äquivalent zu:

    ```js
    typeof obj === "string";
    ```

## Wie benutzt man Builtins?

Builtins funktionieren ähnlich wie aus JavaScript importierte Funktionen, außer dass Sie Standard-Wasm-Funktionsäquivalente verwenden, um JavaScript-Operationen auszuführen, die in einem reservierten Namensraum (`wasm:`) definiert sind. Da dies der Fall ist, können Browser optimalen Code für sie vorhersagen und generieren. In diesem Abschnitt wird zusammengefasst, wie man sie verwendet.

### JavaScript API

Builtins werden zur Kompilierzeit aktiviert, indem die Eigenschaft `compileOptions.builtins` als Argument angegeben wird, wenn Methoden zum Kompilieren und/oder Instanziieren eines Moduls aufgerufen werden. Ihr Wert ist ein Array von Strings, das die Sets von Builtins identifiziert, die Sie aktivieren möchten:

```js
WebAssembly.compile(bytes, { builtins: ["js-string"] });
```

Das `compileOptions`-Objekt steht den folgenden Funktionen zur Verfügung:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module)-Konstruktor

### WebAssembly-Modul-Features

In Ihrem WebAssembly-Modul können Sie jetzt Builtins wie im `compileOptions`-Objekt aus dem `wasm:`-Namensraum spezifiziert importieren (in diesem Fall die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat)-Funktion; siehe auch die [äquivalente eingebaute Definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wat
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Featureerkennung von Builtins

Beim Verwenden von Builtins sind Typüberprüfungen strenger als ohne — bestimmte Regeln werden für die Builtin-Importe auferlegt.

Daher können Sie zur Featureerkennung von Builtins ein Modul definieren, das _ungültig_ mit vorhandenem Feature und _gültig_ ohne es ist. Sie geben dann `true` zurück, wenn die Validierung fehlschlägt, um die Unterstützung anzuzeigen. Ein einfaches Modul, das dies erreicht, sieht wie folgt aus:

```wat
(module
  (function (import "wasm:js-string" "cast")))
```

Ohne Builtins ist das Modul gültig, da Sie jede Funktion mit beliebiger Signatur importieren können (in diesem Fall: keine Parameter und keine Rückgabewerte). Mit Builtins ist das Modul ungültig, da die jetzt speziell behandelte `"wasm:js-string" "cast"`-Funktion eine bestimmte Signatur haben muss (ein `externref`-Parameter und ein nicht-nullbarer `(ref extern)`-Rückgabewert).

Sie können dann versuchen, dieses Modul mit der [`validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)-Methode zu validieren, beachten Sie jedoch, wie das Ergebnis mit dem `!`-Operator negiert wird — denken Sie daran, dass Builtins unterstützt werden, wenn das Modul _ungültig_ ist:

```js
const compileOptions = {
  builtins: ["js-string"],
};

fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Builtins available: ${!result}`));
```

Der obige Modulcode ist so kurz, dass Sie einfach die Literalbytes validieren können, anstatt das Modul herunterzuladen. Eine Featureerkennungsfunktion könnte folgendermaßen aussehen:

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
> In vielen Fällen gibt es Alternativen zur Featureerkennung von Builtins. Eine andere Option könnte sein, reguläre Importe neben den Builtins bereitzustellen, und unterstützende Browser ignorieren einfach die Rückfallebenen.

## Builtins-Beispiel

Gehen wir ein einfaches, aber vollständiges Beispiel durch, um zu zeigen, wie Builtins verwendet werden. Dieses Beispiel definiert eine Funktion in einem Wasm-Modul, die zwei Strings zusammenfügt und das Ergebnis in der Konsole ausgibt, dann exportiert. Wir werden dann die exportierte Funktion aus JavaScript aufrufen.

Das Beispiel, auf das wir uns beziehen, verwendet die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) auf der Webseite, um die Kompilierung und Instanziierung zu handhaben; Sie finden dieses und andere Beispiele in unserem `webassembly-examples`-Repo — siehe [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

Sie können das Beispiel aufbauen, indem Sie die folgenden Schritte befolgen. Zusätzlich können Sie [es live laufen sehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Beispielausgabe zu sehen.

### JavaScript

Das JavaScript für das Beispiel ist unten gezeigt. Um dies lokal zu testen, fügen Sie es in eine HTML-Seite mit einer Methode Ihrer Wahl ein (zum Beispiel innerhalb von {{htmlelement("script")}}-Tags oder in einer externen `.js`-Datei, die über `<script src="">` referenziert wird).

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

Das JavaScript:

- Definiert ein `importObject`, das eine Funktion `"log"` in einem Namespace `"m"` spezifiziert, die während der Instanziierung in das Wasm-Modul importiert wird. Es ist die [`console.log()`](/de/docs/Web/API/console/log_static) Funktion.
- Definiert ein `compileOptions`-Objekt, das Folgendes umfasst:
  - die `builtins`-Eigenschaft, um string-Builtins zu aktivieren.
  - die `importedStringConstants`-Eigenschaft, um [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) zu aktivieren.
- Verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um das Wasm-Modul (`log-concat.wasm`) abzurufen, konvertiert die Antwort zu einem {{jsxref("ArrayBuffer")}} mit [`Response.arrayBuffer`](/de/docs/Web/API/Response/arrayBuffer), und kompiliert und instanziiert dann das Wasm-Modul mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Ruft die `main()`-Funktion auf, die aus dem Wasm-Modul exportiert wird.

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

- Importiert zwei globale String-Konstanten, `"hello "` und `"world!"`, mit dem Namensraum `"string_constants"` wie im JavaScript angegeben. Sie erhalten die Namen `$h` und `$w`.
- Importiert das [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat) Builtin aus dem `wasm:` Namensraum, gibt ihm den Namen `$concat` und legt fest, dass es zwei Parameter und einen Rückgabewert hat.
- Importiert die importierte `"log"` Funktion aus dem `"m"` Namensraum, wie im JavaScript `importObject` Objekt angegeben, gibt ihr den Namen `$log` und legt fest, dass sie ein Parameter hat. Wir entschieden uns, ein reguläres Import sowie ein Builtin im Beispiel einzuschließen, um Ihnen zu zeigen, wie die beiden Ansätze sich vergleichen.
- Definiert eine Funktion, die unter dem Namen `"main"` exportiert wird. Diese Funktion ruft `$log` auf, wobei sie einen `$concat`-Aufruf als Parameter übergibt. Der `$concat`-Aufruf wird mit den `$h` und `$w` globalen Zeichenfolgenkonstanten als Parameter übergeben.

Um Ihr lokales Beispiel zum Laufen zu bringen:

1. Speichern Sie den oben gezeigten WebAssembly-Modulcode in einer Textdatei mit dem Namen `log-concat.wat` im selben Verzeichnis wie Ihr HTML/JavaScript.
2. Kompilieren Sie ihn in ein WebAssembly-Modul (`log-concat.wasm`) mit dem `wasm-as`-Werkzeug, das Teil der [Binaryen-Bibliothek](https://github.com/WebAssembly/binaryen) ist (siehe die [Bauanleitungen](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)). Sie müssen `wasm-as` mit aktivierten Referenztypen und Speicherbereinigung (GC) ausführen, damit diese Beispiele erfolgreich kompiliert werden:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Oder Sie können das `-all`-Flag anstelle von `--enable-reference-types -–enable-gc` verwenden:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Laden Sie Ihre Beispiel-HTML-Seite in einem [unterstützenden Browser](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#browser_compatibility) mit einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

Das Ergebnis sollte eine leere Webseite sein, mit `"hello world!"`, das in der JavaScript-Konsole ausgegeben wird, generiert durch eine exportierte Wasm-Funktion. Das Protokollieren wurde mit einer aus JavaScript importierten Funktion durchgeführt, während das Zusammenfügen der zwei ursprünglichen Strings durch ein Builtin erfolgte.
