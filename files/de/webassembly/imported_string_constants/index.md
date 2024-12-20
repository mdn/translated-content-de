---
title: WebAssembly Importierte globale Zeichenfolgenkonstanten
slug: WebAssembly/Imported_string_constants
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

WebAssembly importierte globale Zeichenfolgenkonstanten erleichtern die Arbeit mit JavaScript-Strings innerhalb von Wasm-Modulen, indem sie die Notwendigkeit für viel Boilerplate-Code beseitigen, der mit traditionellen Zeichenfolgenimporten einhergeht.

Dieser Artikel erklärt, wie importierte globale Zeichenfolgenkonstanten funktionieren.

## Das Problem mit traditionellen Zeichenfolgenimporten

Beginnen wir mit einem Blick darauf, wie Zeichenfolgenimporte traditionell in WebAssembly funktioniert haben. In einem Wasm-Modul könnten Sie ein paar Zeichenfolgen aus einem Namensraum namens `"string_constants"` mit folgendem Snippet importieren:

```wasm
(global (import "string_constants" "string_constant_1") externref)
(global (import "string_constants" "string_constant_2") externref)
```

In Ihrem JavaScript würden Sie dann die zu importierenden Zeichenfolgen in einem `importObject` bereitstellen:

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

Bevor das Modul kompiliert/instanziiert wird, um seine Funktionen zu nutzen:

```js
WebAssembly.instantiateStreaming(fetch("my-module.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Dies ist aus verschiedenen Gründen suboptimal:

1. Die Download-Größe erhöht sich für jede neue importierte Zeichenfolge, und diese Erhöhung ist mehr als nur die Zeichenfolgen selbst — für jede Zeichenfolge benötigen Sie die Definition des importierten Globals im Wasm-Modul und die Definition des Wertes auf der JavaScript-Seite. Für ein Wasm-Modul mit tausenden importierten Zeichenfolgen kann sich dies wirklich summieren.
2. All diese Bytes benötigen auch Zeit, um geparst zu werden, bevor das Wasm-Modul instanziiert werden kann.
3. Für die Optimierung des Wasm-Moduls ist es eine zusätzliche Unannehmlichkeit, eine begleitende JavaScript-Datei zusammen mit dem Wasm-Modul ändern zu müssen, zum Beispiel beim Entfernen nicht genutzter Zeichenfolgenkonstanten zur Kompilierzeit.

Importnamen können beliebige Unicode-Zeichenfolgen sein, die Sie möchten, daher setzen Entwickler oft aus Bequemlichkeit (z. B. beim Debuggen) die gesamte Zeichenfolge als Importnamen. Dies würde dazu führen, dass unser obiges Wasm-Snippet folgendermaßen umgeschrieben wird:

```wasm
(global (import "string_constants" "hello ") externref)
(global (import "string_constants" "world!") externref)
```

Und das begleitende `importObject` würde so aussehen:

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

Beim Betrachten des obigen Codes macht es Sinn, dem Browser zu ermöglichen, etwas von diesem Boilerplate-Code zu automatisieren, und genau das tut die Funktion der importierten globalen Zeichenfolgenkonstanten.

## Verwendung importierter globaler Zeichenfolgenkonstanten

Nun schauen wir uns an, wie importierte globale Zeichenfolgenkonstanten verwendet werden.

### JavaScript-API

Importierte globale Zeichenfolgenkonstanten werden aktiviert, indem die Eigenschaft `compileOptions.importedStringConstants` bei Methodenaufrufen zum Kompilieren und/oder Instanziieren eines Moduls eingeschlossen wird. Ihr Wert ist ein Import-Namensraum für importierte globale Zeichenfolgenkonstanten, den die Wasm-Engine automatisch ausfüllt:

```js
WebAssembly.compile(bytes, {
  importedStringConstants: "string_constants",
});
```

Das war's! Keine Liste von Zeichenfolgen ist im Importobjekt erforderlich.

Das `compileOptions`-Objekt ist für die folgenden Funktionen verfügbar:

- [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static)
- [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static)
- [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)
- [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)
- [`WebAssembly.validate()`](/de/docs/WebAssembly/JavaScript_interface/validate_static)
- Der [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module/Module) Konstruktor

### WebAssembly-Modul-Features

In Ihrem WebAssembly-Modul können Sie nun Zeichenfolgenliterale importieren und dabei denselben Namensraum angeben, den Sie in `importedStringConstants` im JavaScript angegeben haben:

```wasm
(global $h (import "string_constants" "hello ") externref)
(global $w (import "string_constants" "world!") externref)
```

Die Wasm-Engine betrachtet dann alle importierten Globals im Namensraum `string_constants` und erstellt eine Zeichenfolge, die jedem angegebenen Importnamen entspricht.

### Ein Hinweis zu Namensraum-Auswahlen

Das obige Beispiel verwendet `"string_constants"` als importierten globalen Zeichenfolgen-Namensraum zu Illustrationszwecken. In der Produktion ist es jedoch best practice, den leeren String (`""`) zu verwenden, um die Modul-Dateigröße zu reduzieren. Der Namensraum wird für jedes Zeichenfolgenliteral wiederholt, und reale Module können tausende davon haben, sodass die Einsparung erheblich sein kann.

Wenn Sie den `""`-Namensraum bereits für einen anderen Zweck nutzen, sollten Sie in Betracht ziehen, einen einzelnen Zeichen-Namensraum für Ihre Zeichenfolgen zu verwenden, wie `"s"`, `"'"` oder `"#"`.

Die Wahl des Namensraums wird im Allgemeinen von den Autoren der Toolchain getroffen, die die Wasm-Module generiert. Sobald Sie eine `.wasm`-Datei haben und diese in Ihr JavaScript einbetten möchten, können Sie diesen Namensraum nicht mehr frei wählen; Sie müssen das nutzen, was die `.wasm`-Datei erwartet.

## Beispiel für importierte globale Zeichenfolgen

Sie können ein Beispiel sehen, das importierte globale Zeichenfolgen verwendet [live ausgeführt](https://mdn.github.io/webassembly-examples/js-builtin-examples/instantiate/) — öffnen Sie die JavaScript-Konsole Ihres Browsers, um die Ausgabe des Beispiels zu sehen. Dieses Beispiel definiert eine Funktion innerhalb eines Wasm-Moduls, die zwei importierte Zeichenfolgen zusammenfügt und das Ergebnis in die Konsole ausgibt, es exportiert und dann die exportierte Funktion aus JavaScript aufruft.

Das JavaScript für das Beispiel ist unten gezeigt. Sie können sehen, wie wir `importedStringConstants` verwendet haben, um importierte globale Zeichenfolgen zu aktivieren:

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

Die Textdarstellung unseres WebAssembly-Modul-Codes sieht folgendermaßen aus — beachten Sie, wie es zwei Zeichenfolgen im angegebenen Namensraum importiert, die später in der `$concat`-Funktion verwendet werden:

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
> Dieses Beispiel verwendet auch ein JavaScript String builtin. Weitere Informationen zu diesen finden Sie unter [WebAssembly JavaScript builtins](/de/docs/WebAssembly/JavaScript_builtins) und eine vollständige Anleitung zu dem obigen Beispiel.
