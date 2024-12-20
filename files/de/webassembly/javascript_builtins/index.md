---
title: WebAssembly JavaScript builtins
slug: WebAssembly/JavaScript_builtins
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

WebAssembly JavaScript Builtins sind Wasm-Äquivalente von JavaScript-Operationen, die eine Möglichkeit bieten, JavaScript-Features innerhalb von Wasm-Modulen zu nutzen, ohne JavaScript-Zwischencode importieren zu müssen, um eine Brücke zwischen JavaScript- und WebAssembly-Werten und Aufrufkonventionen zu schaffen.

Dieser Artikel erklärt, wie Builtins funktionieren und welche verfügbar sind, und bietet dann ein Anwendungsbeispiel.

## Probleme beim Importieren von JavaScript-Funktionen

Für viele JavaScript-Funktionen funktionieren reguläre Importe gut. Das Importieren von Zwischencode für Primitive wie {{jsxref("String")}}, {{jsxref("ArrayBuffer")}} und {{jsxref("Map")}} führt jedoch zu erheblichen Leistungseinbußen. In solchen Fällen erwarten WebAssembly und die meisten darauf zielenden Sprachen eine enge Abfolge von Inline-Operationen anstelle eines indirekten Funktionsaufrufs, wie es bei regulären importierten Funktionen der Fall ist.

Insbesondere verursacht der Import von Funktionen aus JavaScript in WebAssembly-Module Leistungsprobleme aus den folgenden Gründen:

- Bestehende APIs erfordern eine Umwandlung, um Unterschiede im Umgang mit dem [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert zu bewältigen, den WebAssembly-Funktions-`import`-Aufrufe als `undefined` lassen.
- Bestimmte Primitive verwenden JavaScript-Operatoren wie [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`<`](/de/docs/Web/JavaScript/Reference/Operators/Less_than), die nicht importiert werden können.
- Die meisten JavaScript-Funktionen sind extrem permissiv in Bezug auf die Typen von Werten, die sie akzeptieren, und es ist wünschenswert, WebAssemblys Typsystem zu nutzen, um diese Überprüfungen und Umwandlungen wo immer möglich zu entfernen.

Angesichts dieser Probleme ist es einfacher und besser für die Leistung, eingebaute Definitionen zu erstellen, die bestehende JavaScript-Funktionalitäten wie {{jsxref("String")}}-Primitive an WebAssembly anpassen, anstatt sie zu importieren und sich auf indirekte Funktionsaufrufe zu verlassen.

## Verfügbare WebAssembly JavaScript Builtins

Die folgenden Abschnitte beschreiben die verfügbaren Builtins. Weitere Builtins werden voraussichtlich in Zukunft unterstützt.

### String-Operationen

Die verfügbaren {{jsxref("String")}} Builtins sind:

- [`"wasm:js-string" "cast"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-cast)

  - : Wirft einen Fehler, wenn der bereitgestellte Wert kein String ist. Ungefähr gleichwertig zu:

    ```js
    if (typeof obj !== "string") throw new WebAssembly.RuntimeError();
    ```

- [`"wasm:js-string" "compare"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-compare)
  - : Vergleicht zwei String-Werte und bestimmt ihre Reihenfolge. Gibt `-1` zurück, wenn der erste String [kleiner](/de/docs/Web/JavaScript/Reference/Operators/Less_than) als der zweite ist, `1`, wenn der erste String [größer](/de/docs/Web/JavaScript/Reference/Operators/Greater_than) als der zweite ist, und `0`, wenn die Strings [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) sind.
- [`"wasm:js-string" "concat"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)
  - : Entspricht {{jsxref("String.prototype.concat()")}}.
- [`"wasm:js-string" "charCodeAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-charcodeat)
  - : Entspricht {{jsxref("String.prototype.charCodeAt()")}}.
- [`"wasm:js-string" "codePointAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-codepointat)
  - : Entspricht {{jsxref("String.prototype.codePointAt()")}}.
- [`"wasm:js-string" "equals"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-equals)
  - : Vergleicht zwei String-Werte auf [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und gibt `1` zurück, wenn sie gleich sind, und `0`, wenn nicht.
    > [!NOTE]
    > Die `"equals"`-Funktion ist die einzige String-Funktion, die bei `null`-Eingaben nicht wirft, sodass Wasm-Module nicht auf `null`-Werte prüfen müssen, bevor sie sie aufrufen. Alle anderen Funktionen haben keine vernünftige Möglichkeit, `null`-Eingaben zu verarbeiten, also werfen sie bei diesen Eingaben.
- [`"wasm:js-string" "fromCharCode"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcode)
  - : Entspricht {{jsxref("String.fromCharCode()")}}.
- [`"wasm:js-string" "fromCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcodearray)
  - : Erstellt einen String aus einem Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "fromCodePoint"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcodepoint)
  - : Entspricht {{jsxref("String.fromCodePoint()")}}.
- [`"wasm:js-string" "intoCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-intocharcodearray)
  - : Schreibt die Zeichencodes eines Strings in ein Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "length"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-length)
  - : Entspricht {{jsxref("String.prototype.length")}}.
- [`"wasm:js-string" "substring"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-substring)
  - : Entspricht {{jsxref("String.prototype.substring()")}}.
- [`"wasm:js-string" "test"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-test)

  - : Gibt `0` zurück, wenn der bereitgestellte Wert kein String ist, oder `1`, wenn er ein String ist. Ungefähr gleichwertig zu:

    ```js
    typeof obj === "string";
    ```

## Wie verwendet man Builtins?

Builtins funktionieren ähnlich wie aus JavaScript importierte Funktionen, mit dem Unterschied, dass standardmäßige Wasm-Funktionäquivalente zum Ausführen von JavaScript-Operationen verwendet werden, die in einem reservierten Namensraum (`wasm:`) definiert sind. Da dies der Fall ist, können Browser für sie vorhersehbaren und optimalen Code generieren. Dieser Abschnitt fasst zusammen, wie man sie verwendet.

### JavaScript-API

Builtins werden zur Kompilierzeit aktiviert, indem die `compileOptions.builtins`-Eigenschaft als Argument beim Aufruf von Methoden zur Kompilierung und/oder Instanziierung eines Moduls angegeben wird. Sein Wert ist ein Array aus Zeichenfolgen, die die Sätze von Builtins identifizieren, die Sie aktivieren möchten:

```js
WebAssembly.compile(bytes, { builtins: ["js-string"] });
```

Das `compileOptions`-Objekt steht den folgenden Funktionen zur Verfügung:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
- Der Konstruktor [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module/Module)

### WebAssembly-Modul-Features

In Ihrem WebAssembly-Modul können Sie nun Builtins wie im `compileOptions`-Objekt angegeben aus dem `wasm:`-Namensraum importieren (in diesem Fall die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat)-Funktion; siehe auch die [entsprechende eingebaute Definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wasm
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Feature-Erkennung von Builtins

Bei der Verwendung von Builtins sind die Typprüfungen strenger als ohne sie — bestimmte Regeln werden für die Builtin-Importe auferlegt.

Daher können Sie zur Erkennung von Builtins eine Moduldefinition angeben, die _ungültig_ ist, wenn das Feature vorhanden ist, und _gültig_, wenn nicht. Wenn die Validierung fehlschlägt, wird `true` zurückgegeben, um die Unterstützung anzuzeigen. Ein einfaches Modul, das dies erreicht, sieht wie folgt aus:

```wasm
(module
  (function (import "wasm:js-string" "cast")))
```

Ohne Builtins ist das Modul gültig, da Sie jede Funktion mit jeder Signatur importieren können, die Sie möchten (in diesem Fall: keine Parameter und keine Rückgabewerte). Mit Builtins ist das Modul ungültig, da die jetzt speziell behandelte `"wasm:js-string" "cast"`-Funktion eine spezifische Signatur haben muss (ein `externref`-Parameter und ein nicht-nullbarer `(ref extern)`-Rückgabewert).

Sie können dann versuchen, dieses Modul mit der [`validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)-Methode zu validieren, beachten Sie jedoch, dass das Ergebnis mit dem `!`-Operator negiert wird — denken Sie daran, dass Builtins unterstützt werden, wenn das Modul _ungültig_ ist:

```js
const compileOptions = {
  builtins: ["js-string"],
};

fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Builtins available: ${!result}`));
```

Der obige Modulcode ist so kurz, dass Sie die Literalzahlen validieren könnten, anstatt das Modul herunterzuladen. Eine Funktion zur Erkennung von Features könnte folgendermaßen aussehen:

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
> In vielen Fällen gibt es Alternativen zur Feature-Erkennung von Builtins. Eine andere Option könnte sein, reguläre Importe parallel zu den Builtins bereitzustellen, und unterstützende Browser werden die Alternativen einfach ignorieren.

## Builtins-Beispiel

Lassen Sie uns ein einfaches, aber vollständiges Beispiel durchgehen, um zu zeigen, wie Builtins verwendet werden. Dieses Beispiel wird eine Funktion innerhalb eines Wasm-Moduls definieren, die zwei Strings zusammenfügt und das Ergebnis in der Konsole ausgibt, dann exportiert. Wir werden dann die exportierte Funktion aus JavaScript aufrufen.

Das Beispiel, auf das wir uns beziehen werden, verwendet die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) auf der Webseite, um die Kompilierung und Instanziierung durchzuführen; Sie können dieses und andere Beispiele in unserem `webassembly-examples` Repo finden — siehe [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

Sie können das Beispiel aufbauen, indem Sie die unten aufgeführten Schritte folgen. Sie können es auch [live sehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Beispielausgabe zu sehen.

### JavaScript

Das JavaScript für das Beispiel wird unten gezeigt. Um dies lokal zu testen, fügen Sie es in eine HTML-Seite auf eine von Ihnen gewählte Methode ein (zum Beispiel innerhalb von {{htmlelement("script")}}-Tags oder in einer externen `.js`-Datei, die über `<script src="">`-Tags referenziert wird).

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

- Definiert ein `importObject`, das eine Funktion `"log"` in einem Namensraum `"m"` angibt, die während der Instanziierung in das Wasm-Modul importiert wird. Es handelt sich um die [`console.log()`](/de/docs/Web/API/Console/log_static)-Funktion.
- Definiert ein `compileOptions`-Objekt, das Folgendes enthält:
  - die `builtins`-Eigenschaft, um String-Builtins zu aktivieren.
  - die `importedStringConstants`-Eigenschaft, um [importierte globale String-Konstanten](/de/docs/WebAssembly/Imported_string_constants) zu aktivieren.
- Verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um das Wasm-Modul (`log-concat.wasm`) zu holen, wandelt die Antwort in ein {{jsxref("ArrayBuffer")}} um, indem [`Response.arrayBuffer`](/de/docs/Web/API/Response/arrayBuffer) verwendet wird, und kompiliert und instanziiert dann das Wasm-Modul mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static).
- Ruft die `main()`-Funktion auf, die aus dem Wasm-Modul exportiert wird.

### Wasm-Modul

Die textuelle Darstellung unseres WebAssembly-Modulcodes sieht folgendermaßen aus:

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

- Importiert zwei globale String-Konstanten, `"hello "` und `"world!"`, mit dem `"string_constants"`-Namensraum, wie im JavaScript angegeben. Sie erhalten die Namen `$h` und `$w`.
- Importiert das [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)-Builtin aus dem `wasm:`-Namensraum, gibt ihm den Namen `$concat` und spezifiziert, dass es zwei Parameter und einen Rückgabewert hat.
- Importiert die importierte `"log"`-Funktion aus dem `"m"`-Namensraum, wie im JavaScript-`importObject`-Objekt angegeben, gibt ihr den Namen `$log` und spezifiziert, dass sie einen Parameter hat. Wir haben uns entschieden, einen regulären Import sowie ein Builtin in das Beispiel einzuschließen, um Ihnen zu zeigen, wie die beiden Ansätze verglichen werden können.
- Definiert eine Funktion, die mit dem Namen `"main"` exportiert wird. Diese Funktion ruft `$log` auf und übergibt ihr einen `$concat`-Aufruf als Parameter. Dem `$concat`-Aufruf werden die `$h` und `$w`-globale String-Konstanten als Parameter übergeben.

Um Ihr lokales Beispiel zum Laufen zu bringen:

1. Speichern Sie den oben gezeigten WebAssembly-Modulcode in eine Textdatei namens `log-concat.wat` im selben Verzeichnis wie Ihr HTML/JavaScript.
2. Kompilieren Sie es in ein WebAssembly-Modul (`log-concat.wasm`) mit dem `wasm-as`-Tool, das Teil der [Binaryen-Bibliothek](https://github.com/WebAssembly/binaryen) ist (siehe die [Build-Anweisungen](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)). Sie müssen `wasm-as` mit aktivierten Referenztypen und Garbage Collection (GC) ausführen, damit diese Beispiele erfolgreich kompiliert werden:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Oder Sie können das `-all` Flag anstelle von `--enable-reference-types -–enable-gc` verwenden:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Laden Sie Ihre Beispiel-HTML-Seite in einem [unterstützenden Browser](/de/docs/WebAssembly/JavaScript_interface/instantiate_static#browser_compatibility) mithilfe eines [lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

Das Ergebnis sollte eine leere Webseite sein, mit `"hello world!"`, das in der JavaScript-Konsole protokolliert wird, generiert durch eine exportierte Wasm-Funktion. Das Protokollieren erfolgte mit einer aus JavaScript importierten Funktion, während das Zusammenfügen der beiden ursprünglichen Strings von einem Builtin durchgeführt wurde.
