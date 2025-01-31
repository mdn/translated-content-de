---
title: WebAssembly.Module.customSections()
slug: WebAssembly/Reference/JavaScript_interface/Module/customSections_static
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die statische Methode **`WebAssembly.Module.customSections()`** gibt eine Kopie des Inhalts aller benutzerdefinierten Abschnitte in dem angegebenen Modul mit dem angegebenen Stringnamen zurück.

## Syntax

```js-nolint
WebAssembly.Module.customSections(module, sectionName)
```

### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt, dessen benutzerdefinierte Abschnitte betrachtet werden.
- `sectionName`
  - : Der Stringname des gewünschten benutzerdefinierten Abschnitts.

### Rückgabewert

Ein (möglicherweise leeres) Array, das {{jsxref("ArrayBuffer")}}-Kopien des Inhalts aller benutzerdefinierten Abschnitte enthält, die mit `sectionName` übereinstimmen.

### Ausnahmen

Wenn `module` keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekts ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beschreibung

Ein Wasm-Modul besteht aus einer Folge von **Abschnitten**. Die meisten dieser Abschnitte sind vollständig durch die Wasm-Spezifikation spezifiziert und validiert, aber Module können auch **benutzerdefinierte Abschnitte** enthalten, die während der Validierung ignoriert und übersprungen werden. (Lesen Sie [Struktur auf hoher Ebene](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure) für Informationen über Abschnittsstrukturen und wie normale Abschnitte ("bekannte Abschnitte") und benutzerdefinierte Abschnitte unterschieden werden.)

Dies bietet Entwicklern eine Möglichkeit, benutzerdefinierte Daten innerhalb von Wasm-Modulen zu anderen Zwecken einzubinden, beispielsweise der [name custom section](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#name-section), die es Entwicklern ermöglicht, Namen für alle Funktionen und lokalen Variablen im Modul bereitzustellen (ähnlich wie "Symbole" in einem nativen Build).

Beachten Sie, dass das WebAssembly-Textformat derzeit keine Syntax für das Hinzufügen neuer benutzerdefinierter Abschnitte spezifiziert hat; Sie können jedoch während der Umwandlung vom Textformat nach Wasm einen Namensabschnitt hinzufügen. Der Befehl `wast2wasm`, der als Teil des [wabt-Tools](https://github.com/webassembly/wabt) verfügbar ist, hat eine `--debug-names`-Option — geben Sie diese während der Umwandlung an, um ein Wasm mit einem benutzerdefinierten Namenabschnitt zu erhalten, zum Beispiel:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Beispiele

### Verwendung von customSections

Das folgende Beispiel verwendet `WebAssembly.Module.customSections`, um zu prüfen, ob eine geladene Modulsinstanz einen "name" benutzerdefinierten Abschnitt enthält. Ein Modul enthält einen "name" benutzerdefinierten Abschnitt, wenn `WebAssembly.Module.customSections` einen `ArrayBuffer` mit einer Länge größer als 0 zurückgibt.

Siehe den Quellcode von custom-section.html [source code](https://github.com/mdn/webassembly-examples/blob/main/other-examples/custom-section.html) und das [live example](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html).

```js
WebAssembly.compileStreaming(fetch("simple-name-section.wasm")).then((mod) => {
  const nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length !== 0) {
    console.log("Module contains a name section");
    console.log(nameSections[0]);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
