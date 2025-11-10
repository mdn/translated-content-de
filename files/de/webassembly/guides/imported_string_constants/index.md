---
title: WebAssembly importierte globale Zeichenfolgenkonstanten
slug: WebAssembly/Guides/Imported_string_constants
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

WebAssembly importierte globale Zeichenfolgenkonstanten erleichtern die Arbeit mit JavaScript-Strings innerhalb von Wasm-Modulen, indem sie den Bedarf an viel Boilerplate-Code, der mit traditionellen Zeichenfolgenimporten verbunden ist, beseitigen.

Dieser Artikel erklärt, wie importierte globale Zeichenfolgenkonstanten funktionieren.

## Das Problem mit traditionellen Zeichenfolgenimporten

Lassen Sie uns zunächst untersuchen, wie Zeichenfolgenimporte traditionell in WebAssembly funktionieren. In einem Wasm-Modul könnten Sie mit folgendem Code-Snippet ein paar Zeichenfolgen aus einem Namensraum namens `"string_constants"` importieren:

```wat
(global (import "string_constants" "string_constant_1") externref)
(global (import "string_constants" "string_constant_2") externref)
```

In Ihrem JavaScript würden Sie dann die zu importierenden Zeichenfolgen in einem `importObject` bereitstellen:

```js
importObject = {
  // …
  string_constants: {
    string_constant_1: "hello ",
    string_constant_2: "world!",
    // …
  },
};
```

Bevor das Modul kompiliert/instanziiert wird, um seine Funktionen zu nutzen:

```js
WebAssembly.instantiateStreaming(fetch("my-module.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Dies ist aus mehreren Gründen suboptimal:

1. Die Downloadgröße erhöht sich für jede neue importierte Zeichenfolge, und diese Erhöhung betrifft mehr als nur die Zeichenfolgen selbst — für jede Zeichenfolge benötigen Sie die Definition der importierten globalen Variablen im Wasm-Modul und die Definition des Wertes auf der JavaScript-Seite. Für ein Wasm-Modul mit tausenden importierten Zeichenfolgen kann sich dies wirklich summieren.
2. All diese Bytes benötigen auch Zeit zum Parsen, bevor das Wasm-Modul instanziiert werden kann.
3. Für die Optimierung von Wasm-Modulen ist es ein zusätzlicher Aufwand, eine begleitende JavaScript-Datei zusammen mit dem Wasm-Modul ändern zu müssen, beispielsweise wenn nicht genutzte Zeichenfolgenkonstanten zur Kompilierungszeit entfernt werden.

Importnamen können beliebige Unicode-Zeichenfolgen sein, daher setzen Entwickler oft die gesamte Zeichenfolge als Importnamen aus Bequemlichkeit (zum Beispiel bei der Fehlersuche). Dies würde dazu führen, dass unser oben stehendes Wasm-Snippet wie folgt umgeschrieben wird:

```wat
(global (import "string_constants" "hello ") externref)
(global (import "string_constants" "world!") externref)
```

Und das begleitende `importObject` so aussieht:

```js
importObject = {
  // …
  string_constants: {
    "hello ": "hello ",
    "world!": "world!",
    // …
  },
};
```

Angesichts des obigen Codes macht es Sinn, den Browser einen Teil dieser Boilerplate automatisieren zu lassen, und genau das macht die Funktion der importierten globalen Zeichenfolgenkonstanten.

## Verwendung von importierten globalen Zeichenfolgenkonstanten

Nun werden wir sehen, wie importierte globale Zeichenfolgenkonstanten verwendet werden.

### JavaScript-API

Importierte globale Zeichenfolgenkonstanten werden aktiviert, indem die Eigenschaft `compileOptions.importedStringConstants` hinzugefügt wird, wenn Methoden aufgerufen werden, um ein Modul zu kompilieren und/oder zu instanziieren. Ihr Wert ist ein Importnamensraum für importierte globale Zeichenfolgenkonstanten, der vom Wasm-Engine automatisch gefüllt wird:

```js
WebAssembly.compile(bytes, {
  importedStringConstants: "string_constants",
});
```

Das ist alles! Keine Listen von Zeichenfolgen mehr im Importobjekt erforderlich.

Das `compileOptions`-Objekt ist für die folgenden Funktionen verfügbar:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module) Konstruktor

### Funktionen des WebAssembly-Moduls

In Ihrem WebAssembly-Modul können Sie nun Zeichenfolgenliterale importieren und dabei denselben Namensraum angeben, den Sie in `importedStringConstants` im JavaScript angegeben haben:

```wat
(global $h (import "string_constants" "hello ") externref)
(global $w (import "string_constants" "world!") externref)
```

Der Wasm-Engine durchsucht dann alle importierten globalen Variablen im Namensraum `string_constants` und erstellt eine Zeichenfolge, die jedem angegebenen Importnamen entspricht.

### Ein Hinweis zu Namensraumwahl

Das obige Beispiel verwendet `"string_constants"` als importierten globalen Zeichenfolgen-Namensraum zu Illustrationszwecken. In der Produktion ist es jedoch bewährte Praxis, den leeren String (`""`) zu verwenden, um die Moduldateigröße zu sparen. Der Namensraum wird für jedes Zeichenfolgenliteral wiederholt, und reale Module können Tausende davon haben, sodass die Einsparung erheblich sein kann.

Wenn Sie den `""`-Namensraum bereits für einen anderen Zweck verwenden, sollten Sie in Erwägung ziehen, einen einstelligen Namensraum für Ihre Zeichenfolgen zu verwenden, wie `"s"`, `"'"` oder `"#"`.

Die Namensraumwahl wird in der Regel von den Autoren der Toolchain getroffen, die die Wasm-Module generieren wird. Sobald Sie eine `.wasm`-Datei haben und diese in Ihr JavaScript einbetten möchten, können Sie diesen Namensraum nicht mehr frei wählen; Sie müssen den verwenden, den die `.wasm`-Datei erwartet.

## Beispiel für importierte globale Zeichenfolgen

Sie können ein Beispiel, das importierte globale Zeichenfolgen verwendet, [live ansehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Beispielausgabe zu sehen. Dieses Beispiel definiert eine Funktion innerhalb eines Wasm-Moduls, die zwei importierte Zeichenfolgen zusammenfügt und das Ergebnis in der Konsole ausgibt, sie exportiert und dann die exportierte Funktion von JavaScript aus aufruft.

Das JavaScript für das Beispiel wird unten gezeigt. Sie können sehen, wie wir `importedStringConstants` verwendet haben, um importierte globale Zeichenfolgen zu aktivieren:

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

Die textuelle Darstellung unseres WebAssembly-Modulcodes sieht so aus — beachten Sie, wie es zwei Zeichenfolgen im angegebenen Namensraum importiert, die später in der `$concat`-Funktion verwendet werden:

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

> [!NOTE]
> Dieses Beispiel verwendet auch ein JavaScript String Builtin. Weitere Informationen dazu finden Sie unter [WebAssembly JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) und eine vollständige Anleitung zu dem obigen Beispiel.
