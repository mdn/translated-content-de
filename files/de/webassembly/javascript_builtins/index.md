---
title: WebAssembly JavaScript builtins
slug: WebAssembly/JavaScript_builtins
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{WebAssemblySidebar}}

WebAssembly JavaScript builtins sind Wasm-Äquivalente von JavaScript-Operationen, die eine Möglichkeit bieten, JavaScript-Funktionen innerhalb von Wasm-Modulen zu nutzen, ohne JavaScript-Zusatzcode importieren zu müssen, um eine Brücke zwischen JavaScript- und WebAssembly-Werten sowie Aufrufkonventionen bereitzustellen.

Dieser Artikel erklärt, wie builtins funktionieren und welche verfügbar sind, und bietet dann ein Verwendungsbeispiel.

## Probleme beim Importieren von JavaScript-Funktionen

Für viele JavaScript-Funktionen funktionieren reguläre Importe gut. Das Importieren von Zusatzcode für Primitive wie {{jsxref("String")}}, {{jsxref("ArrayBuffer")}} und {{jsxref("Map")}} bringt jedoch erhebliche Leistungseinbußen mit sich. In solchen Fällen erwarten WebAssembly und die meisten darauf zielenden Sprachen eine enge Abfolge von Inline-Operationen anstelle eines indirekten Funktionsaufrufs, wie es bei regulär importierten Funktionen der Fall ist.

Konkret führen Importe von Funktionen aus JavaScript in WebAssembly-Module zu Leistungsproblemen aus folgenden Gründen:

- Bestehende APIs erfordern eine Konvertierung zur Behandlung von Unterschieden im Wert [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), den WebAssembly-Funktionsimporte als `undefined` belassen.
- Bestimmte Primitive verwenden JavaScript-Operatoren wie [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`<`](/de/docs/Web/JavaScript/Reference/Operators/Less_than), die nicht importiert werden können.
- Die meisten JavaScript-Funktionen sind extrem großzügig bei den Arten von Werten, die sie akzeptieren. Es ist wünschenswert, das Typsystem von WebAssembly zu nutzen, um diese Überprüfungen und Umwandlungen wo immer möglich zu entfernen.

Angesichts dieser Probleme ist die Erstellung eingebauter Definitionen, die vorhandene JavaScript-Funktionen wie {{jsxref("String")}}-Primitive an WebAssembly anpassen, einfacher und leistungsfähiger als deren Import und das Verlassen auf indirekte Funktionsaufrufe.

## Verfügbare WebAssembly-JavaScript-builtins

Die folgenden Abschnitte erläutern die verfügbaren builtins. Weitere builtins werden wahrscheinlich in Zukunft unterstützt.

### String-Operationen

Die verfügbaren {{jsxref("String")}}-builtins sind:

- [`"wasm:js-string" "cast"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-cast)

  - : Wirft einen Fehler, wenn der bereitgestellte Wert kein String ist. Grob äquivalent zu:

    ```js
    if (typeof obj !== "string") throw new WebAssembly.RuntimeError();
    ```

- [`"wasm:js-string" "compare"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-compare)
  - : Vergleicht zwei Stringwerte und bestimmt deren Reihenfolge. Gibt `-1` zurück, wenn der erste String [kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) der zweite ist, `1`, wenn der erste String [größer als](/de/docs/Web/JavaScript/Reference/Operators/Greater_than) der zweite ist, und `0`, wenn die Strings [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) sind.
- [`"wasm:js-string" "concat"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)
  - : Entspricht {{jsxref("String.prototype.concat()")}}.
- [`"wasm:js-string" "charCodeAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-charcodeat)
  - : Entspricht {{jsxref("String.prototype.charCodeAt()")}}.
- [`"wasm:js-string" "codePointAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-codepointat)
  - : Entspricht {{jsxref("String.prototype.codePointAt()")}}.
- [`"wasm:js-string" "equals"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-equals)
  - : Vergleicht zwei Stringwerte auf [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und gibt `1` zurück, wenn sie gleich sind, und `0`, wenn nicht.
    > [!NOTE]
    > Die Funktion `"equals"` ist die einzige String-builtin, die bei `null`-Eingaben keinen Fehler wirft, sodass Wasm-Module keine `null`-Werte überprüfen müssen, bevor sie aufgerufen werden. Alle anderen Funktionen können mit `null`-Eingaben nicht vernünftig umgehen, deshalb werfen sie Fehler dafür.
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

  - : Gibt `0` zurück, wenn der bereitgestellte Wert kein String ist, oder `1`, wenn es ein String ist. Grob äquivalent zu:

    ```js
    typeof obj === "string";
    ```

## Wie verwendet man builtins?

Builtins funktionieren ähnlich wie aus JavaScript importierte Funktionen, mit dem Unterschied, dass Sie standardmäßige Wasm-Funktionsäquivalente zur Durchführung von JavaScript-Operationen nutzen, die in einem reservierten Namensraum (`wasm:`) definiert sind. In diesem Fall können Browser optimalen Code für sie vorhersagen und generieren. Dieser Abschnitt fasst zusammen, wie man sie benutzt.

### JavaScript-API

Builtins werden zur Kompilierungszeit aktiviert, indem die Eigenschaft `compileOptions.builtins` als Argument beim Aufruf von Methoden zur Kompilierung und/oder Instanziierung eines Moduls angegeben wird. Ihr Wert ist ein Array von Strings, das die Sätze von builtins identifiziert, die Sie aktivieren möchten:

```js
WebAssembly.compile(bytes, { builtins: ["js-string"] });
```

Das `compileOptions`-Objekt steht den folgenden Funktionen zur Verfügung:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module/Module) Konstruktor

### WebAssembly-Modul-Funktionen

In Ihrem WebAssembly-Modul können Sie nun builtins importieren, wie im `compileOptions`-Objekt aus dem `wasm:`-Namensraum angegeben (in diesem Fall die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat)-Funktion; siehe auch die [äquivalente eingebaute Definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wasm
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Feature-Detection von builtins

Beim Verwenden von builtins sind Typprüfungen strikter als ohne sie — es werden bestimmte Regeln auf die builtin-Importe angewendet.

Um Code zur Feature-Detection für builtins zu schreiben, können Sie ein Modul definieren, das _ungültig_ ist, wenn das Feature vorhanden ist, und _gültig_, wenn nicht. Sie geben dann `true` zurück, wenn die Validierung fehlschlägt, um die Unterstützung anzuzeigen. Ein einfaches Modul, das dies erreicht, sieht folgendermaßen aus:

```wasm
(module
  (function (import "wasm:js-string" "cast")))
```

Ohne builtins ist das Modul gültig, da Sie jede Funktion mit beliebiger Signatur importieren können (in diesem Fall: keine Parameter und keine Rückgabewerte). Mit builtins ist das Modul ungültig, da die inzwischen spezialisierten Funktionen `"wasm:js-string" "cast"` eine spezifische Signatur haben müssen (ein `externref`-Parameter und ein nicht-nullfähiger `(ref extern)` Rückgabewert).

Sie können dann versuchen, dieses Modul mit der [`validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)-Methode zu validieren, aber beachten Sie, wie das Ergebnis mit dem `!`-Operator negiert wird — denken Sie daran, dass builtins unterstützt werden, wenn das Modul _ungültig_ ist:

```js
const compileOptions = {
  builtins: ["js-string"],
};

fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Builtins available: ${!result}`));
```

Der obige Modulkode ist so kurz, dass Sie einfach die literalen Bytes validieren könnten, anstatt das Modul herunterzuladen. Eine Feature-Detection-Funktion könnte so aussehen:

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
> In vielen Fällen gibt es Alternativen zur Feature-Detection von builtins. Eine andere Option könnte sein, reguläre Importe zusammen mit den builtins bereitzustellen, wobei unterstützende Browser die Fallbacks einfach ignorieren.

## Builtins-Beispiel

Lassen Sie uns ein einfaches, aber vollständiges Beispiel durchgehen, um zu zeigen, wie builtins verwendet werden. Dieses Beispiel definiert eine Funktion innerhalb eines Wasm-Moduls, die zwei Strings zusammenfügt und das Ergebnis in der Konsole ausgibt, dann exportiert sie es. Wir werden dann die exportierte Funktion aus JavaScript aufrufen.

Das Beispiel, auf das wir Bezug nehmen werden, verwendet die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) auf der Webseite, um die Kompilierung und Instantiierung zu handhaben; Sie können dieses und andere Beispiele in unserem `webassembly-examples` Repository finden — siehe [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

Sie können das Beispiel durch die folgenden Schritte aufbauen. Zusätzlich können Sie es [live sehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Ausgabebeispiele zu sehen.

### JavaScript

Das JavaScript für das Beispiel wird unten gezeigt. Um dies lokal zu testen, fügen Sie es in eine HTML-Seite mit einer Methode Ihrer Wahl ein (zum Beispiel innerhalb von {{htmlelement("script")}}-Tags oder in einer externen `.js`-Datei, die über `<script src="">` referenziert wird).

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

- Definiert ein `importObject`, das eine Funktion `"log"` in einem Namensraum `"m"` spezifiziert, die während der Instanziierung in das Wasm-Modul importiert wird. Es handelt sich um die [`console.log()`](/de/docs/Web/API/Console/log_static) Funktion.
- Definiert ein `compileOptions`-Objekt, das umfasst:
  - die `builtins` Eigenschaft, um String-builtins zu aktivieren.
  - die `importedStringConstants` Eigenschaft, um [importierte globale String-Konstanten](/de/docs/WebAssembly/Imported_string_constants) zu aktivieren.
- Verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um das Wasm-Modul (`log-concat.wasm`) zu laden, konvertiert die Antwort in ein {{jsxref("ArrayBuffer")}} mit [`Response.arrayBuffer`](/de/docs/Web/API/Response/arrayBuffer) und kompiliert und instanziiert dann das Wasm-Modul mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static).
- Ruft die `main()`-Funktion auf, die aus dem Wasm-Modul exportiert wird.

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

- Importiert zwei globale String-Konstanten, `"hello "` und `"world!"`, mit dem Namensraum `"string_constants"`, wie im JavaScript angegeben. Sie erhalten die Namen `$h` und `$w`.
- Importiert das [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat) builtin aus dem `wasm:`-Namensraum, gibt ihm den Namen `$concat` und spezifiziert, dass es zwei Parameter und einen Rückgabewert hat.
- Importiert die importierte `"log"`-Funktion aus dem `"m"`-Namensraum, wie im JavaScript `importObject`-Objekt angegeben, gibt ihr den Namen `$log` und spezifiziert, dass sie einen Parameter hat. Wir haben beschlossen, in diesem Beispiel neben einem builtin auch einen regulären Import zu verwenden, um Ihnen zu zeigen, wie die beiden Ansätze vergleichbar sind.
- Definiert eine Funktion, die mit dem Namen `"main"` exportiert wird. Diese Funktion ruft `$log` auf und übergibt einen `$concat`-Aufruf als Parameter. Der `$concat`-Aufruf wird mit den `$h` und `$w` globalen String-Konstanten als Parameter aufgerufen.

Um Ihr lokales Beispiel zum Laufen zu bringen:

1. Speichern Sie den oben gezeigten WebAssembly-Modulcode in einer Textdatei mit dem Namen `log-concat.wat` im selben Verzeichnis wie Ihr HTML/JavaScript.
2. Kompilieren Sie es mit dem `wasm-as`-Tool in ein WebAssembly-Modul (`log-concat.wasm`), das Teil der [Binaryen-Bibliothek](https://github.com/WebAssembly/binaryen) ist (siehe die [Build-Anleitung](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)). Sie müssen `wasm-as` mit aktivierten Referenztypen und Garbage Collection (GC) für diese Beispiele ausführen, damit sie erfolgreich kompiliert werden:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Oder Sie können das `-all`-Flag anstelle von `--enable-reference-types -–enable-gc` verwenden:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Laden Sie Ihre Beispiel-HTML-Seite in einem [unterstützenden Browser](/de/docs/WebAssembly/JavaScript_interface/instantiate_static#browser_compatibility) mithilfe eines [lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

Das Ergebnis sollte eine leere Webseite sein, mit `"hello world!"`, das in die JavaScript-Konsole geloggt wird und von einer exportierten Wasm-Funktion erzeugt wird. Das Logging wurde mit einer aus JavaScript importierten Funktion durchgeführt, während das Zusammenfügen der beiden ursprünglichen Strings durch ein builtin erfolgte.
