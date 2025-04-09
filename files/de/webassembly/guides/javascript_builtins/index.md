---
title: Eingebaute WebAssembly-JavaScript-Funktionen
slug: WebAssembly/Guides/JavaScript_builtins
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Eingebaute WebAssembly-JavaScript-Funktionen sind Wasm-Äquivalente von JavaScript-Operationen, die es ermöglichen, JavaScript-Funktionen in Wasm-Modulen zu verwenden, ohne JavaScript-Hilfscode importieren zu müssen, um eine Brücke zwischen JavaScript- und WebAssembly-Werten sowie Aufrufkonventionen zu schaffen.

Dieser Artikel erklärt, wie eingebaute Funktionen funktionieren, welche verfügbar sind, und gibt ein Anwendungsbeispiel.

## Probleme bei der Einbindung von JavaScript-Funktionen

Für viele JavaScript-Funktionen funktionieren reguläre Importe gut. Das Importieren von Hilfscode für Primitive wie {{jsxref("String")}}, {{jsxref("ArrayBuffer")}} und {{jsxref("Map")}} bringt jedoch erhebliche Performance-Einbußen mit sich. In solchen Fällen erwarten WebAssembly und die meisten darauf ausgerichteten Sprachen eine Abfolge von Inline-Operationen anstelle eines indirekten Funktionsaufrufs, wie er bei regulären importierten Funktionen üblich ist.

Insbesondere das Importieren von Funktionen aus JavaScript in WebAssembly-Module führt aus folgenden Gründen zu Performance-Problemen:

- Bestehende APIs erfordern eine Konvertierung, um Unterschiede beim [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert zu handhaben, der bei WebAssembly-Funktionsimports als `undefined` bleibt.
- Bestimmte Primitive verwenden JavaScript-Operatoren wie [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`<`](/de/docs/Web/JavaScript/Reference/Operators/Less_than), die nicht importiert werden können.
- Die meisten JavaScript-Funktionen sind äußerst tolerant gegenüber den Typen der Werte, die sie akzeptieren, und es ist wünschenswert, das Typsystem von WebAssembly zu nutzen, um diese Prüfungen und Umwandlungen soweit wie möglich zu vermeiden.

Angesichts dieser Probleme ist es einfacher und besser für die Leistung, eingebaute Definitionen zu erstellen, die bestehende JavaScript-Funktionalitäten wie {{jsxref("String")}}-Primitive an WebAssembly anpassen, anstatt sie zu importieren und auf indirekte Funktionsaufrufe zu setzen.

## Verfügbare eingebaut WebAssembly-JavaScript-Funktionen

Die folgenden Abschnitte beschreiben die verfügbaren eingebauten Funktionen. Weitere eingebaute Funktionen werden wahrscheinlich in Zukunft unterstützt.

### String-Operationen

Die verfügbaren {{jsxref("String")}}-eingebauten Funktionen sind:

- [`"wasm:js-string" "cast"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-cast)

  - : Wirft einen Fehler, wenn der bereitgestellte Wert kein String ist. Ungefähr gleichwertig zu:

    ```js
    if (typeof obj !== "string") throw new WebAssembly.RuntimeError();
    ```

- [`"wasm:js-string" "compare"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-compare)
  - : Vergleicht zwei String-Werte und bestimmt ihre Reihenfolge. Gibt `-1` zurück, wenn der erste String [kleiner](/de/docs/Web/JavaScript/Reference/Operators/Less_than) als der zweite ist, `1`, wenn der erste String [größer](/de/docs/Web/JavaScript/Reference/Operators/Greater_than) als der zweite ist, und `0`, wenn die Strings [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) sind.
- [`"wasm:js-string" "concat"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)
  - : Äquivalent zu {{jsxref("String.prototype.concat()")}}.
- [`"wasm:js-string" "charCodeAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-charcodeat)
  - : Äquivalent zu {{jsxref("String.prototype.charCodeAt()")}}.
- [`"wasm:js-string" "codePointAt"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-codepointat)
  - : Äquivalent zu {{jsxref("String.prototype.codePointAt()")}}.
- [`"wasm:js-string" "equals"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-equals)
  - : Vergleicht zwei String-Werte auf [strenge Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und gibt `1` zurück, wenn sie gleich sind, und `0`, wenn nicht.
    > [!NOTE]
    > Die Funktion `"equals"` ist die einzige String-eingebaute Funktion, die bei `null`-Eingaben keinen Fehler wirft, sodass Wasm-Module nicht auf `null`-Werte prüfen müssen, bevor sie aufgerufen wird. Alle anderen Funktionen haben keine vernünftige Möglichkeit, `null`-Eingaben zu verarbeiten, und werfen daher bei solchen Eingaben Fehler.
- [`"wasm:js-string" "fromCharCode"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcode)
  - : Äquivalent zu {{jsxref("String.fromCharCode()")}}.
- [`"wasm:js-string" "fromCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcharcodearray)
  - : Erzeugt einen String aus einem Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "fromCodePoint"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-fromcodepoint)
  - : Äquivalent zu {{jsxref("String.fromCodePoint()")}}.
- [`"wasm:js-string" "intoCharCodeArray"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-intocharcodearray)
  - : Schreibt die Zeichencodes eines Strings in ein Wasm-Array von `i16`-Werten.
- [`"wasm:js-string" "length"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-length)
  - : Äquivalent zu {{jsxref("String.prototype.length")}}.
- [`"wasm:js-string" "substring"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-substring)
  - : Äquivalent zu {{jsxref("String.prototype.substring()")}}.
- [`"wasm:js-string" "test"`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-test)

  - : Gibt `0` zurück, wenn der bereitgestellte Wert kein String ist, oder `1`, wenn es ein String ist. Ungefähr gleichwertig zu:

    ```js
    typeof obj === "string";
    ```

## Wie verwendet man eingebaute Funktionen?

Eingebaute Funktionen funktionieren ähnlich wie aus JavaScript importierte Funktionen, außer dass Sie standardmäßige Wasm-Funktionsäquivalente für die Durchführung von JavaScript-Operationen verwenden, die in einem reservierten Namensbereich (`wasm:`) definiert sind. Dadurch können Browser optimalen Code für sie vorhersagen und generieren. Dieser Abschnitt fasst zusammen, wie man sie verwendet.

### JavaScript-API

Eingebaute Funktionen werden zur Kompilierzeit durch Spezifikation der Eigenschaft `compileOptions.builtins` als Argument beim Aufruf von Methoden zur Kompilierung und/oder Instanziierung eines Moduls aktiviert. Sein Wert ist ein Array von Strings, die die Menge der zu aktivierenden eingebauten Funktionen identifizieren:

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

In Ihrem WebAssembly-Modul können Sie nun, wie im `compileOptions`-Objekt angegeben, eingebaute Funktionen aus dem `wasm:`-Namensbereich importieren (in diesem Fall die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat) Funktion; siehe auch die [entsprechende eingebaute Definition](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat)):

```wat
(func $concat (import "wasm:js-string" "concat")
    (param externref externref) (result (ref extern)))
```

## Erkennung von eingebauten Funktionen

Bei der Verwendung eingebauter Funktionen werden die Typprüfungen strenger sein als ohne sie — bestimmte Regeln werden bei den eingebauten Importen auferlegt.

Daher können Sie zur Erkennung der Funktionalität von eingebauten Funktionen ein Modul definieren, das _ungültig_ mit der vorhandenen Funktion und _gültig_ ohne sie ist. Sie kehren dann `true` zurück, wenn die Validierung fehlschlägt, um Unterstützung anzuzeigen. Ein einfaches Modul, das dies erreicht, sieht folgendermaßen aus:

```wat
(module
  (function (import "wasm:js-string" "cast")))
```

Ohne eingebaute Funktionen ist das Modul gültig, da Sie jede Funktion mit beliebiger Signatur importieren können (in diesem Fall: keine Parameter und keine Rückgabewerte). Mit eingebauten Funktionen ist das Modul ungültig, da die nun speziell behandelte Funktion `"wasm:js-string" "cast"` eine spezifische Signatur haben muss (ein `externref`-Parameter und ein nicht-nullbarer `(ref extern)`-Rückgabewert).

Sie können dann versuchen, dieses Modul mit der [`validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)-Methode zu validieren, aber beachten Sie, wie das Ergebnis mit dem `!`-Operator negiert wird — beachten Sie, dass eingebaute Funktionen unterstützt werden, wenn das Modul _ungültig_ ist:

```js
const compileOptions = {
  builtins: ["js-string"],
};

fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Builtins available: ${!result}`));
```

Der oben angegebene Modulkode ist so kurz, dass Sie einfach die wörtlichen Bytes validieren könnten, anstatt das Modul herunterzuladen. Eine Funktion zur Funktionserkennung könnte wie folgt aussehen:

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
> In vielen Fällen gibt es Alternativen zur Funktionserkennung eingebauter Funktionen. Eine andere Möglichkeit könnte sein, reguläre Importe zusammen mit den eingebauten Funktionen bereitzustellen, und unterstützende Browser ignorieren die Fallbacks einfach.

## Beispiel für eingebaute Funktionen

Lassen Sie uns ein einfaches, aber vollständiges Beispiel durchgehen, um zu zeigen, wie eingebaute Funktionen verwendet werden. Dieses Beispiel wird eine Funktion innerhalb eines Wasm-Moduls definieren, die zwei Strings zusammenfügt und das Ergebnis in der Konsole ausgibt, und sie dann exportieren. Wir werden die exportierte Funktion dann aus JavaScript aufrufen.

Das Beispiel, auf das wir uns beziehen, verwendet die [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)-Funktion auf der Webseite, um die Kompilierung und Instanziierung zu handhaben; Sie finden dieses und andere Beispiele in unserem `webassembly-examples`-Repo — siehe [`js-builtin-examples`](https://github.com/mdn/webassembly-examples/tree/main/js-builtin-examples).

Sie können das Beispiel anhand der folgenden Schritte aufbauen. Darüber hinaus können Sie es [live laufen sehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Beispielausgabe zu sehen.

### JavaScript

Das JavaScript für das Beispiel wird unten gezeigt. Um dies lokal zu testen, fügen Sie es in einer HTML-Seite mit einer Methode Ihrer Wahl ein (zum Beispiel innerhalb von {{htmlelement("script")}}-Tags oder in einer externen `.js`-Datei, die über `<script src="">` referenziert wird).

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

- Definiert ein `importObject`, das eine Funktion `"log"` in einem Namensbereich `"m"` spezifiziert, um sie während der Instanziierung in das Wasm-Modul zu importieren. Es ist die [`console.log()`](/de/docs/Web/API/console/log_static)-Funktion.
- Definiert ein `compileOptions`-Objekt, das Folgendes umfasst:
  - die `builtins`-Eigenschaft, um String-eingebaute Funktionen zu aktivieren.
  - die `importedStringConstants`-Eigenschaft, um [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) zu aktivieren.
- Verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um das Wasm-Modul (`log-concat.wasm`) abzurufen, konvertiert die Antwort in einen {{jsxref("ArrayBuffer")}} mit [`Response.arrayBuffer`](/de/docs/Web/API/Response/arrayBuffer), um dann das Wasm-Modul mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) zu kompilieren und zu instanziieren.
- Ruft die `main()`-Funktion auf, die aus dem Wasm-Modul exportiert wird.

### Wasm-Modul

Die Textdarstellung unseres WebAssembly-Modulkodes sieht so aus:

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

- Importiert zwei globale String-Konstanten, `"hello "` und `"world!"`, mit dem `"string_constants"`-Namensbereich, wie im JavaScript angegeben. Sie erhalten die Namen `$h` und `$w`.
- Importiert den [`concat`](https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md#wasmjs-string-concat) eingebauten Funktionsäquivalent aus dem `wasm:`-Namensbereich, gibt ihm den Namen `$concat` und spezifiziert, dass er zwei Parameter und einen Rückgabewert hat.
- Importiert die importierte `"log"`-Funktion aus dem `"m"`-Namensbereich, wie im JavaScript-`importObject`-Objekt angegeben, gibt ihr den Namen `$log` und spezifiziert, dass sie einen Parameter hat. Wir haben beschlossen, in diesem Beispiel sowohl einen regulären Import als auch eine eingebaute Funktion zu verwenden, um Ihnen zu zeigen, wie die beiden Ansätze im Vergleich stehen.
- Definiert eine Funktion, die mit dem Namen `"main"` exportiert wird. Diese Funktion ruft `$log` auf und übergibt ihr einen `$concat`-Aufruf als Parameter. Der `$concat`-Aufruf erhält die `$h`- und `$w`-globalen String-Konstanten als Parameter.

Um Ihr lokales Beispiel zum Laufen zu bringen:

1. Speichern Sie den oben gezeigten WebAssembly-Modulkode in einer Textdatei namens `log-concat.wat` im gleichen Verzeichnis wie Ihr HTML/JavaScript.
2. Kompilieren Sie es in ein WebAssembly-Modul (`log-concat.wasm`) unter Verwendung des `wasm-as`-Werkzeugs, das Teil der [Binaryen-Bibliothek](https://github.com/WebAssembly/binaryen) ist (siehe die [Build-Anleitung](https://github.com/WebAssembly/binaryen?tab=readme-ov-file#building)). Sie müssen `wasm-as` mit aktivierten Referenztypen und der Speicherbereinigung (GC) ausführen, damit diese Beispiele erfolgreich kompiliert werden:

   ```sh
   wasm-as --enable-reference-types -–enable-gc log-concat.wat
   ```

   Oder Sie können das `-all`-Flag anstelle von `--enable-reference-types -–enable-gc` verwenden:

   ```sh
   wasm-as -all log-concat.wat
   ```

3. Laden Sie Ihre Beispiel-HTML-Seite in einem [unterstützenden Browser](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#browser_compatibility) über einen [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

Das Ergebnis sollte eine leere Webseite sein, mit `"hello world!"` im JavaScript-Konsolenlog, generiert durch eine exportierte Wasm-Funktion. Das Logging wurde mit einer Funktion durchgeführt, die aus JavaScript importiert wurde, während das Zusammenfügen der beiden Ursprungsstrings durch eine eingebaute Funktion erfolgte.
