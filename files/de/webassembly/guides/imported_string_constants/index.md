---
title: WebAssembly Importierte globale Zeichenfolgenkonstanten
slug: WebAssembly/Guides/Imported_string_constants
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

WebAssembly importierte globale Zeichenfolgenkonstanten erleichtern die Arbeit mit JavaScript-Zeichenfolgen in Wasm-Modulen, indem sie den Bedarf an viel Boilerplate-Code, der mit traditionellen Zeichenfolgenimporten verbunden ist, eliminieren.

Dieser Artikel erklärt, wie importierte globale Zeichenfolgenkonstanten funktionieren.

## Das Problem mit traditionellen Zeichenfolgenimporten

Beginnen wir damit, wie Zeichenfolgenimporte traditionell in WebAssembly funktionierten. In einem Wasm-Modul könnten Sie ein paar Zeichenfolgen aus einem Namespace namens `"string_constants"` mit folgendem Beispiel importieren:

```wasm
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

Bevor Sie das Modul kompilieren/instanziieren, um dessen Funktionen zu nutzen:

```js
WebAssembly.instantiateStreaming(fetch("my-module.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Dies ist aus mehreren Gründen suboptimal:

1. Die Downloadgröße wird für jede neu importierte Zeichenfolge vergrößert, und diese Erhöhung ist mehr als nur die Zeichenfolgen selbst — für jede Zeichenfolge benötigen Sie die Definition der importierten globalen im Wasm-Modul und die Definition des Werts auf der JavaScript-Seite. Bei einem Wasm-Modul mit tausenden importierten Zeichenfolgen kann dies erheblich sein.
2. All diese Bytes benötigen Zeit, um geparst zu werden, bevor das Wasm-Modul instanziiert werden kann.
3. Für die Optimierung von Wasm-Modulen ist es eine zusätzliche Unannehmlichkeit, eine begleitende JavaScript-Datei zusammen mit dem Wasm-Modul ändern zu müssen, beispielsweise wenn ungenutzte Zeichenfolgenkonstanten zur Kompilierzeit entfernt werden.

Importnamen können jede beliebige Unicode-Zeichenfolge sein, die Sie möchten, daher setzen Entwickler oft die gesamte Zeichenfolge als Importnamen aus Bequemlichkeit (zum Beispiel beim Debuggen). Dies würde dazu führen, dass unser obiger Wasm-Code wie folgt umgeschrieben wird:

```wasm
(global (import "string_constants" "hello ") externref)
(global (import "string_constants" "world!") externref)
```

Und das begleitende `importObject` so:

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

Bei Betrachtung des obigen Codes ergibt es Sinn, dem Browser zu erlauben, einen Teil dieses Boilerplates zu automatisieren, und genau das macht das Feature der importierten globalen Zeichenfolgenkonstanten.

## Verwendung von importierten globalen Zeichenfolgenkonstanten

Nun schauen wir uns an, wie importierte globale Zeichenfolgenkonstanten verwendet werden.

### JavaScript-API

Importierte globale Zeichenfolgenkonstanten werden aktiviert, indem die `compileOptions.importedStringConstants`-Eigenschaft eingeschlossen wird, wenn Methoden zum Kompilieren und/oder Instanziieren eines Moduls aufgerufen werden. Der Wert ist ein Importnamespace für importierte globale Zeichenfolgenkonstanten, die die Wasm-Engine automatisch befüllt:

```js
WebAssembly.compile(bytes, {
  importedStringConstants: "string_constants",
});
```

Das war's! Keine Listen von Zeichenfolgen im Importobjekt erforderlich.

Das `compileOptions`-Objekt steht den folgenden Funktionen zur Verfügung:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module) Konstruktor

### WebAssembly-Modul-Features

In Ihrem WebAssembly-Modul können Sie nun Zeichenfolgenliterale importieren, indem Sie denselben Namespace angeben, den Sie in `importedStringConstants` im JavaScript angegeben haben:

```wasm
(global $h (import "string_constants" "hello ") externref)
(global $w (import "string_constants" "world!") externref)
```

Die Wasm-Engine betrachtet dann alle importierten Globalen im `string_constants`-Namespace und erstellt eine Zeichenfolge, die jedem angegebenen Importnamen entspricht.

### Ein Hinweis zu Namespace-Wahlen

Das obige Beispiel verwendet `"string_constants"` als den importierten globalen Zeichenfolgen-Namespace zu Illustrationszwecken. In der Produktion ist es jedoch am besten, die leere Zeichenfolge (`""`) zu verwenden, um die Moduldaten-Größe zu reduzieren. Der Namespace wird für jedes Zeichenfolgenliteral wiederholt und reale Module können tausende davon haben, sodass die Einsparung signifikant sein kann.

Wenn Sie den `""`-Namespace bereits für einen anderen Zweck verwenden, sollten Sie erwägen, einen einstelligen Namespace für Ihre Zeichenfolgen wie `"s"`, `"'"` oder `"#"` zu verwenden.

Die Wahl des Namespaces erfolgt generell durch die Autoren des Toolchains, das die Wasm-Module generiert. Sobald Sie eine `.wasm`-Datei haben und diese in Ihr JavaScript einbetten wollen, können Sie diesen Namespace nicht mehr frei wählen; Sie müssen das verwenden, was die `.wasm`-Datei erwartet.

## Importiertes globales Zeichenfolgenbeispiel

Sie können ein Beispiel sehen, das importierte globale Zeichenfolgen [live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) verwendet — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Beispielausgabe zu sehen. Dieses Beispiel definiert eine Funktion innerhalb eines Wasm-Moduls, die zwei importierte Zeichenfolgen zusammenfügt und das Ergebnis in der Konsole ausgibt, diese exportiert und dann die exportierte Funktion aus JavaScript aufruft.

Das JavaScript für das Beispiel wird unten gezeigt. Sie sehen, wie wir `importedStringConstants` verwendet haben, um importierte globale Zeichenfolgen zu aktivieren:

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

Die Textdarstellung unseres WebAssembly-Modulcodes sieht so aus — beachten Sie, wie es zwei Zeichenfolgen im angegebenen Namespace importiert, die später in der `$concat`-Funktion verwendet werden:

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
> Dieses Beispiel verwendet auch eine JavaScript-String-Builtin. Siehe [WebAssembly JavaScript-Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) für weitere Informationen zu diesen und eine vollständige Anleitung zum obigen Beispiel.
