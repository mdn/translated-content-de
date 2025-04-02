---
title: WebAssembly Importierte Globale Zeichenkettenkonstanten
slug: WebAssembly/Guides/Imported_string_constants
l10n:
  sourceCommit: 5d93ed6aeae01238cb44b1a9b5f092d8c8194530
---

WebAssembly importierte globale Zeichenkettenkonstanten erleichtern die Arbeit mit JavaScript-Zeichenketten innerhalb von Wasm-Modulen, indem sie den Bedarf an viel Boilerplate-Code im Zusammenhang mit traditionellen Zeichenkettenimporten reduzieren.

Dieser Artikel erklärt, wie importierte globale Zeichenkettenkonstanten funktionieren.

## Das Problem mit traditionellen Zeichenkettenimporten

Beginnen wir mit der Untersuchung, wie Zeichenkettenimporte traditionell in WebAssembly funktioniert haben. In einem Wasm-Modul könnten Sie ein paar Zeichenketten aus einem Namensraum namens `"string_constants"` mit dem folgenden Ausschnitt importieren:

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

Bevor Sie das Modul kompilieren/instantiieren, um seine Funktionen zu nutzen:

```js
WebAssembly.instantiateStreaming(fetch("my-module.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Dies ist aus mehreren Gründen suboptimal:

1. Die Downloadgröße erhöht sich für jede neue Zeichenkette, die importiert wird, und diese Erhöhung ist mehr als nur die Zeichenketten selbst — für jede Zeichenkette benötigen Sie die Definition der importierten globalen Variable im Wasm-Modul und die Definition des Wertes auf der JavaScript-Seite. Bei einem Wasm-Modul mit Tausenden von importierten Zeichenketten kann dies wirklich ins Gewicht fallen.
2. All diese Bytes benötigen Zeit zum Parsen, bevor das Wasm-Modul instanziiert werden kann.
3. Für die Optimierung des Wasm-Moduls ist es ein zusätzlicher Aufwand, eine begleitende JavaScript-Datei zusammen mit dem Wasm-Modul ändern zu müssen, beispielsweise beim Entfernen nicht verwendeter Zeichenkettenkonstanten zur Kompilierzeit.

Importnamen können beliebige Unicode-Zeichenfolgen sein, die Sie möchten, sodass Entwickler oft die gesamte Zeichenkette als Importnamen für die Bequemlichkeit festlegen (zum Beispiel beim Debuggen). Das würde dazu führen, dass unser obiger Wasm-Ausschnitt folgendermaßen umgeschrieben wird:

```wasm
(global (import "string_constants" "hello ") externref)
(global (import "string_constants" "world!") externref)
```

Und das begleitende `importObject` sieht dann so aus:

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

Wenn man sich den obigen Code ansieht, macht es Sinn, einige dieser Boilerplate-Aufgaben dem Browser zu überlassen, und genau das macht die Funktion der importierten globalen Zeichenkettenkonstanten.

## Verwendung von importierten globalen Zeichenkettenkonstanten

Schauen wir uns nun an, wie importierte globale Zeichenkettenkonstanten verwendet werden.

### JavaScript-API

Importierte globale Zeichenkettenkonstanten werden aktiviert, indem die Eigenschaft `compileOptions.importedStringConstants` beim Aufruf von Methoden zur Kompilierung und/oder Instanziierung eines Moduls eingeschlossen wird. Ihr Wert ist ein Import-Namensraum für importierte globale Zeichenkettenkonstanten, den die Wasm-Engine automatisch auffüllen wird:

```js
WebAssembly.compile(bytes, {
  importedStringConstants: "string_constants",
});
```

Das war's! Es sind keine Listen von Zeichenketten im Import-Objekt erforderlich.

Das `compileOptions`-Objekt steht für die folgenden Funktionen zur Verfügung:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module) Konstruktor

### WebAssembly-Modul-Funktionen

In Ihrem WebAssembly-Modul können Sie nun Zeichenkettenliterale importieren, indem Sie denselben Namensraum angeben, den Sie in `importedStringConstants` im JavaScript spezifiziert haben:

```wasm
(global $h (import "string_constants" "hello ") externref)
(global $w (import "string_constants" "world!") externref)
```

Die Wasm-Engine betrachtet dann alle importierten Globalen im Namensraum `string_constants` und erstellt eine Zeichenkette, die jedem angegebenen Importnamen entspricht.

### Eine Anmerkung zur Wahl des Namensraums

Das obige Beispiel verwendet `"string_constants"` als den importierten globalen Zeichenketten-Namensraum zu Illustrationszwecken. In der Produktion ist es jedoch am besten, die leere Zeichenfolge (`""`) zu verwenden, um die Moduldateigröße zu sparen. Der Namensraum wird für jedes Zeichenkettenliteral wiederholt, und echte Welt-Module können Tausende davon haben, sodass die Einsparung signifikant sein kann.

Wenn Sie den `""`-Namensraum bereits für einen anderen Zweck verwenden, sollten Sie in Betracht ziehen, einen ein Zeichen langen Namensraum für Ihre Zeichenfolgen zu verwenden, wie `"s"`, `"'"` oder `"#"`.

Die Wahl des Namensraums wird im Allgemeinen von den Autoren der Toolchain getroffen, die die Wasm-Module generieren wird. Sobald Sie eine `.wasm`-Datei haben und diese in Ihr JavaScript einbetten möchten, können Sie diesen Namensraum nicht mehr frei wählen; Sie müssen verwenden, was die `.wasm`-Datei erwartet.

## Beispiel für importierte globale Zeichenketten

Sie können ein Beispiel sehen, das importierte globale Zeichenketten [live ausgeführt](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Ausgabe des Beispiels zu sehen. Dieses Beispiel definiert eine Funktion innerhalb eines Wasm-Moduls, die zwei importierte Zeichenketten zusammenfügt und das Ergebnis in die Konsole druckt, es exportiert und dann die exportierte Funktion aus JavaScript aufruft.

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

Die Textdarstellung unseres WebAssembly-Modulcodes sieht so aus — beachten Sie, wie es zwei Zeichenketten im angegebenen Namensraum importiert, die später in der `$concat`-Funktion verwendet werden:

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
> Dieses Beispiel verwendet auch ein JavaScript String-Builtin. Weitere Informationen zu diesen und eine vollständige Anleitung zu dem obigen Beispiel finden Sie unter [WebAssembly JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins).
