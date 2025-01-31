---
title: WebAssembly JavaScript builtins
slug: WebAssembly/Guides/JavaScript_builtins
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

WebAssembly-JavaScript-Builtins sind Wasm-Äquivalente von JavaScript-Operationen, die eine Möglichkeit bieten, JavaScript-Funktionen in Wasm-Modulen zu verwenden, ohne JavaScript-Zwischencode importieren zu müssen, um eine Brücke zwischen JavaScript- und WebAssembly-Werten sowie der Aufrufkonvention zu schaffen.

Dieser Artikel erläutert, wie Builtins funktionieren, welche verfügbar sind, und gibt anschließend ein Anwendungsbeispiel.

## Probleme beim Importieren von JavaScript-Funktionen

Für viele JavaScript-Funktionen funktionieren reguläre Importe gut. Der Import von Zwischencode für primitive Datenstrukturen wie {{jsxref("String")}}, {{jsxref("ArrayBuffer")}} und {{jsxref("Map")}} bringt jedoch erhebliche Performanceüberhänge mit sich. In solchen Fällen erwartet WebAssembly und die meisten darauf zielenden Sprachen eine enge Abfolge von Inline-Operationen statt eines indirekten Funktionsaufrufs, was der Modus operandi regulärer importierter Funktionen ist.

Speziell der Import von Funktionen aus JavaScript in WebAssembly-Module verursacht Leistungsprobleme aus den folgenden Gründen:

- Bestehende APIs erfordern eine Konvertierung, um Unterschiede im Umgang mit dem [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert zu handhaben, den WebAssembly-Funktionsimporte als `undefined` belassen.
- Bestimmte Primitive verwenden JavaScript-Operatoren wie [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`<`](/de/docs/Web/JavaScript/Reference/Operators/Less_than), die nicht importiert werden können.
- Die meisten JavaScript-Funktionen sind extrem tolerant gegenüber den Wertetypen, die sie akzeptieren. Es ist wünschenswert, das Typensystem von WebAssembly zu nutzen, um diese Überprüfungen und Überführungen soweit möglich zu entfernen.

Angesichts dieser Probleme ist es einfacher und leistungsfähiger, eingebaute Definitionen zu erstellen, die bestehende JavaScript-Funktionalität wie {{jsxref("String")}}-Primitiven an WebAssembly anpassen, statt sie zu importieren und sich auf indirekte Funktionsaufrufe zu verlassen.

## Verfügbare WebAssembly-JavaScript-Builtins

Die untenstehenden Abschnitte beschreiben die verfügbaren Builtins. Weitere Builtins werden voraussichtlich in Zukunft unterstützt.

### String-Operationen

Die verfügbaren {{jsxref("String")}}-Builtins sind:

- [`"wasm:js-string" "cast"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-cast)

  - : Wirft einen Fehler, wenn der bereitgestellte Wert keine Zeichenkette ist. In etwa gleichwertig zu:

    ```js
    if (typeof obj !== "string") throw new WebAssembly.RuntimeError();
    ```

- [`"wasm:js-string" "compare"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-compare)
  - : Vergleicht zwei Zeichenketten und bestimmt ihre Reihenfolge. Gibt `-1` zurück, wenn die erste Zeichenkette [kleiner ist](/de/docs/Web/JavaScript/Reference/Operators/Less_than) als die zweite, `1` wenn sie [größer ist](/de/docs/Web/JavaScript/Reference/Operators/Greater_than) und `0`, wenn die Zeichenketten [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) sind.
- [`"wasm:js-string" "concat"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)
  - : Entspricht {{jsxref("String.prototype.concat()")}}.
- [`"wasm:js-string" "charCodeAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-charcodeat)
  - : Entspricht {{jsxref("String.prototype.charCodeAt()")}}.
- [`"wasm:js-string" "codePointAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-codepointat)
  - : Entspricht {{jsxref("String.prototype.codePointAt()")}}.
- [`"wasm:js-string" "equals"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-equals)
  - : Vergleicht zwei Zeichenketten auf [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und gibt `1` zurück, wenn sie gleich sind, ansonsten `0`.
    > [!NOTE]
    > Die Funktion `"equals"` ist das einzige Zeichenketten-Builtin, das für `null`-Eingaben keine Fehler wirft, sodass Wasm-Module nicht auf `null`-Werte prüfen müssen, bevor sie es aufrufen. Alle anderen Funktionen haben keine vernünftige Möglichkeit, mit `null`-Eingaben umzugehen und werfen daher Fehler.
- [`"wasm:js-string" "fromCharCode"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcode)
  - : Entspricht {{jsxref("String.fromCharCode()")}}.
- [`"wasm:js-string" "fromCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcodearray)
  - : Erstellt eine Zeichenkette aus einem Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "fromCodePoint"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcodepoint)
  - : Entspricht {{jsxref("String.fromCodePoint()")}}.
- [`"wasm:js-string" "intoCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-intocharcodearray)
  - : Schreibt die Zeichencodes einer Zeichenkette in ein Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "length"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-length)
  - : Entspricht {{jsxref("String.prototype.length")}}.
- [`"wasm:js-string" "substring"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-substring)
  - : Entspricht {{jsxref("String.prototype.substring()")}}.
- [`"wasm:js-string" "test"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-test)

  - : Gibt `0` zurück, wenn der bereitgestellte Wert keine Zeichenkette ist, oder `1`, wenn er eine Zeichenkette ist. In etwa gleichwertig zu:

    ```js
    typeof obj === "string";
    ```

## Wie verwendet man Builtins?

Builtins funktionieren auf ähnliche Weise wie Funktionen, die aus JavaScript importiert werden, außer dass Sie standardmäßige Wasm-Funktionsäquivalente zur Ausführung von JavaScript-Operationen verwenden, die in einem reservierten Namespace (`wasm:`) definiert sind. In diesem Fall können Browser optimalen Code für sie vorhersagen und generieren. Dieser Abschnitt fasst zusammen, wie man sie verwendet.

### JavaScript-API

Builtins werden zur Compile-Zeit aktiviert, indem die Eigenschaft `compileOptions.builtins` als Argument beim Aufrufen von Methoden zum Kompilieren und/oder Instanziieren eines Moduls angegeben wird. Sein Wert ist ein Array von Zeichenfolgen, die die Sätze von Builtins identifizieren, die Sie aktivieren möchten:

```js
WebAssembly.compile(bytes, { builtins: ["js-string"] });
```

Das `compileOptions`-Objekt steht den folgenden Funktionen zur Verfügung:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module) Konstruktor

### WebAssembly-Modul-Funktionen

In Ihrem WebAssembly-Modul können Sie nun Builtins aus dem `wasm:`-Namespace importieren, wie im `compileOptions`-Objekt angegeben (in diesem Fall die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat)-Funktion; siehe auch die [entsprechende eingebaute Definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wasm
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Builtins erkennen

Beim Verwenden von Builtins werden Typüberprüfungen strenger sein als wenn sie nicht vorhanden sind — bestimmte Regeln werden für die Builtin-Importe auferlegt.

Um Code zur Erkennung von Builtins zu schreiben, können Sie ein Modul definieren, das bei Vorhandensein der Funktion _ungültig_ und ohne sie _gültig_ ist. Sie geben dann `true` zurück, wenn die Validierung fehlschlägt, um die Unterstützung anzuzeigen. Ein einfaches Modul, das dies erreicht, ist wie folgt:

```wasm
(module
  (function (import "wasm:js-string" "cast")))
```

Ohne Builtins ist das Modul gültig, da Sie jede Funktion mit jeder gewünschten Signatur importieren können (in diesem Fall: keine Parameter und keine Rückgabewerte). Mit Builtins ist das Modul ungültig, weil die jetzt speziell behandelte `"wasm:js-string" "cast"`-Funktion eine spezifische Signatur haben muss (ein `externref`-Parameter und ein nicht-nullbare `(ref extern)`-Rückgabe).

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

Der obige Modulkode ist so kurz, dass Sie die Literal-Bytes validieren könnten, anstatt das Modul herunterzuladen. Eine Funktion zur Erkennung von Möglichkeiten könnte folgendermaßen aussehen:

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
> In vielen Fällen gibt es Alternativen zur Erkennung von Builtins. Eine andere Option könnte sein, reguläre Importe neben den Builtins bereitzustellen, und unterstützende Browser ignorieren die Fallbacks einfach.

## Builtins-Beispiel

Arbeiten wir ein einfaches, aber vollständiges Beispiel durch, um zu zeigen, wie Builtins verwendet werden. Dieses Beispiel wird eine Funktion innerhalb eines Wasm-Moduls definieren, die zwei Zeichenketten zusammenführt und das Ergebnis in die Konsole ausgibt, und diese dann exportieren. Wir werden die exportierte Funktion dann von JavaScript aus aufrufen.

Das Beispiel, auf das wir uns beziehen werden, verwendet die [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Funktion auf der Webseite, um die Kompilierung und Instanziierung zu handhaben; Sie können dieses und andere Beispiele in unserem `webassembly-examples`-Repo finden — siehe [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

Sie können das Beispiel erstellen, indem Sie den unten stehenden Schritten folgen. Zusätzlich können Sie [es live sehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Beispielausgabe zu sehen.

### JavaScript

Das JavaScript für das Beispiel wird unten angezeigt. Um dies lokal zu testen, fügen Sie es auf einer HTML-Seite mit einer Methode Ihrer Wahl ein (zum Beispiel innerhalb von {{htmlelement("script")}}-Tags oder in einer externen `.js`-Datei, die über `<script src="">` referenziert wird).

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

- Definiert ein `importObject`, das eine Funktion `"log"` in einem Namespace `"m"` festlegt, die während der Instanziierung in das Wasm-Modul importiert wird. Es ist die [`console.log()`](/de/docs/Web/API/Console/log_static)-Funktion.
- Definiert ein `compileOptions`-Objekt, das enthält:
  - die `builtins`-Eigenschaft zur Aktivierung von Zeichenkettenbuiltin.
  - die `importedStringConstants`-Eigenschaft zur Aktivierung [importierter globaler Zeichenkettenkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants).
- Verwendet [`fetch()`](/de/docs/Web/API/Window/fetch) zum Abrufen des Wasm-Moduls (`log-concat.wasm`), konvertiert die Antwort mit [`Response.arrayBuffer`](/de/docs/Web/API/Response/arrayBuffer) in einen {{jsxref("ArrayBuffer")}}, und kompiliert und instanziiert dann das Wasm-Modul mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Ruft die vom Wasm-Modul exportierte `main()`-Funktion auf.

### Wasm-Modul

Die Textdarstellung unseres WebAssembly-Modulkodes sieht so aus:

```wasm
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

- Importiert zwei globale Zeichenkettenkonstanten, `"hello "` und `"world!"`, mit dem Namespace `"string_constants"`, wie im JavaScript angegeben. Sie erhalten die Namen `$h` und `$w`.
- Importiert das [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)-Builtin aus dem `wasm:`-Namespace, gibt ihm den Namen `$concat` und spezifiziert, dass es zwei Parameter und einen Rückgabewert hat.
- Importiert die importierte `"log"`-Funktion aus dem `"m"`-Namespace, wie im JavaScript-`importObject`-Objekt angegeben, gibt ihr den Namen `$log` und spezifiziert, dass sie einen Parameter hat. Wir haben uns entschieden, in dem Beispiel neben dem Builtin auch einen regulären Import zu verwenden, um zu zeigen, wie die beiden Ansätze verglichen werden können.
- Definiert eine Funktion, die mit dem Namen `"main"` exportiert wird. Diese Funktion ruft `$log` auf, wobei sie als Parameter einen `$concat`-Aufruf übergibt. Der `$concat`-Aufruf erhält die `$h`- und `$w`-globalen Zeichenkettenkonstanten als Parameter.

Um Ihr lokales Beispiel zum Laufen zu bringen:

1. Speichern Sie den oben gezeigten WebAssembly-Modulkode in einer Textdatei mit dem Namen `log-concat.wat` im gleichen Verzeichnis wie Ihr HTML/JavaScript.
2. Kompilieren Sie es mit dem `wasm-as`-Tool in ein WebAssembly-Modul (`log-concat.wasm`), das Teil der [Binaryen-Bibliothek](https://github.com/WebAssembly/binaryen) ist (siehe die [Bauanleitungen](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)). Sie müssen `wasm-as` mit aktivierten Referenztypen und Garbage Collection (GC) für diese Beispiele ausführen, um sie erfolgreich zu kompilieren:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Oder Sie können das `-all`-Flag anstelle von `--enable-reference-types -–enable-gc` verwenden:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Laden Sie Ihre Beispiel-HTML-Seite in einem [unterstützenden Browser](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#browser_compatibility) mithilfe eines [lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

Das Ergebnis sollte eine leere Webseite sein, mit `"hello world!"` im JavaScript-Konsolenprotokoll, generiert durch eine exportierte Wasm-Funktion. Das Logging wurde unter Verwendung einer aus JavaScript importierten Funktion durchgeführt, während das Zusammenfügen der beiden ursprünglichen Zeichenketten durch ein Builtin erfolgte.
