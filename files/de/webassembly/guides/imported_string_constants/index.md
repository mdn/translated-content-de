---
title: WebAssembly Importierte globale Zeichenkettenkonstanten
slug: WebAssembly/Guides/Imported_string_constants
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

WebAssembly importierte globale Zeichenkettenkonstanten erleichtern die Arbeit mit JavaScript-Zeichenketten in Wasm-Modulen, indem sie die Notwendigkeit für einen Großteil der Boilerplate beseitigen, die mit herkömmlichen Zeichenkettenimporten verbunden ist.

Dieser Artikel erklärt, wie importierte globale Zeichenkettenkonstanten funktionieren.

## Das Problem mit herkömmlichen Zeichenkettenimporten

Lassen Sie uns zunächst untersuchen, wie Zeichenkettenimporte traditionell in WebAssembly funktioniert haben. In einem Wasm-Modul könnten Sie ein paar Zeichenketten aus einem Namensraum namens `"string_constants"` mit dem folgenden Code-Snippet importieren:

```wasm
(global (import "string_constants" "string_constant_1") externref)
(global (import "string_constants" "string_constant_2") externref)
```

In Ihrem JavaScript würden Sie dann die zu importierenden Zeichenketten in einem `importObject` bereitstellen:

```js
importObject = {
  ...,
  string_constants: {
    string_constant_1: "hello ",
    string_constant_2: "world!",
    ...
  },
};
```

Bevor Sie das Modul kompilieren/instanziieren würden, um seine Funktionen zu nutzen:

```js
WebAssembly.instantiateStreaming(fetch("my-module.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Dies ist aus mehreren Gründen suboptimal:

1. Die Downloadgröße wird mit jedem neuen importierten Zeichenkette erhöht, und diese Erhöhung betrifft nicht nur die Zeichenketten selbst — für jede Zeichenkette benötigen Sie die Definition der importierten Globalen im Wasm-Modul und die Definition des Wertes auf der JavaScript-Seite. Bei einem Wasm-Modul mit Tausenden von importierten Zeichenketten kann dies wirklich erheblich sein.
2. All diese Bytes benötigen auch Zeit zum Parsen, bevor das Wasm-Modul instanziiert werden kann.
3. Für die Optimierung von Wasm-Modulen ist es eine zusätzliche Unannehmlichkeit, eine begleitende JavaScript-Datei zusammen mit dem Wasm-Modul ändern zu müssen, z.B. wenn ungenutzte Zeichenkettenkonstanten zur Kompilierungszeit entfernt werden.

Importnamen können beliebige Unicode-Zeichenketten sein, die Sie wünschen, daher setzen Entwickler oft die gesamte Zeichenkette als Importnamen aus Bequemlichkeitsgründen (zum Beispiel beim Debuggen). Dies würde dazu führen, dass unser obiges Wasm-Snippet wie folgt umgeschrieben wird:

```wasm
(global (import "string_constants" "hello ") externref)
(global (import "string_constants" "world!") externref)
```

Und das begleitende `importObject` so:

```js
importObject = {
  ...,
  string_constants: {
    "hello ": "hello ",
    "world!": "world!",
    ...
  },
};
```

Beim Anblick des obigen Codes macht es Sinn, den Browser einen Teil dieser Boilerplate automatisieren zu lassen, und genau das macht die Funktion der importierten globalen Zeichenkettenkonstanten.

## Verwendung von importierten globalen Zeichenkettenkonstanten

Schauen wir uns nun an, wie importierte globale Zeichenkettenkonstanten verwendet werden.

### JavaScript-API

Importierte globale Zeichenkettenkonstanten werden aktiviert, indem die Eigenschaft `compileOptions.importedStringConstants` angegeben wird, wenn Methoden zum Kompilieren und/oder Instanziieren eines Moduls aufgerufen werden. Sein Wert ist ein Import-Namensraum für importierte globale Zeichenkettenkonstanten, den die Wasm-Engine automatisch füllen wird:

```js
WebAssembly.compile(bytes, {
  importedStringConstants: "string_constants",
});
```

Das war's! Keine Listen von Zeichenketten im Importobjekt erforderlich.

Das `compileOptions`-Objekt steht den folgenden Funktionen zur Verfügung:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module) Konstruktor

### WebAssembly-Modulmerkmale

In Ihrem WebAssembly-Modul können Sie jetzt Zeichenkettenliterale importieren, indem Sie denselben Namensraum angeben, den Sie in `importedStringConstants` in JavaScript angegeben haben:

```wasm
(global $h (import "string_constants" "hello ") externref)
(global $w (import "string_constants" "world!") externref)
```

Die Wasm-Engine durchsucht dann alle importierten Globalen im `string_constants`-Namensraum und erstellt eine Zeichenkette, die jedem spezifizierten Importnamen entspricht.

### Eine Anmerkung zu Namensraum-Auswahl

Das obige Beispiel verwendet `"string_constants"` als importierten globalen Zeichenketten-Namensraum zu Demonstrationszwecken. In der Produktion ist es jedoch am besten, den leeren String (`""`) zu verwenden, um die Modulgröße zu sparen. Der Namensraum wird für jedes Zeichenkettenliteral wiederholt, und reale Module können Tausende davon haben, sodass die Ersparnis erheblich sein kann.

Wenn Sie den `""`-Namensraum bereits für andere Zwecke verwenden, sollten Sie in Erwägung ziehen, einen einstelligen Namensraum für Ihre Zeichenketten zu verwenden, z.B. `"s"`, `"'"` oder `"#"`.

Die Auswahl des Namensraums wird in der Regel von den Autoren der Toolchain getroffen, die die Wasm-Module generieren wird. Sobald Sie eine `.wasm`-Datei haben und diese in Ihr JavaScript einbetten möchten, können Sie diesen Namensraum nicht mehr frei wählen; Sie müssen verwenden, was die `.wasm`-Datei erwartet.

## Beispiel für importierte globale Zeichenketten

Sie können ein Beispiel sehen, das importierte globale Zeichenketten verwendet, [live ausgeführt](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Ausgabe des Beispiels zu sehen. Dieses Beispiel definiert eine Funktion innerhalb eines Wasm-Moduls, die zwei importierte Zeichenketten zusammenfügt und das Ergebnis auf die Konsole druckt, es exportiert und dann die exportierte Funktion aus JavaScript aufruft.

Das JavaScript für das Beispiel wird unten gezeigt. Sie können sehen, wie wir `importedStringConstants` verwendet haben, um importierte globale Zeichenketten zu aktivieren:

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

Die Textdarstellung unseres WebAssembly-Modulcodes sieht so aus — beachten Sie, wie es zwei Zeichenketten in dem angegebenen Namensraum importiert, die später in der `$concat`-Funktion verwendet werden:

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

> [!NOTE]
> Dieses Beispiel verwendet auch ein JavaScript String-builtin. Siehe [WebAssembly JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) für weitere Informationen dazu und eine vollständige Anleitung zum obigen Beispiel.
