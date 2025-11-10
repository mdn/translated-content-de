---
title: WebAssembly.Module.customSections()
slug: WebAssembly/Reference/JavaScript_interface/Module/customSections_static
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die statische Methode **`WebAssembly.Module.customSections()`** gibt eine Kopie
des Inhalts aller benutzerdefinierten Abschnitte im gegebenen Modul mit dem angegebenen String-Namen zurück.

## Syntax

```js-nolint
WebAssembly.Module.customSections(module, sectionName)
```

### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt, dessen benutzerdefinierte Abschnitte in Betracht gezogen werden.
- `sectionName`
  - : Der String-Name des gewünschten benutzerdefinierten Abschnitts.

### Rückgabewert

Ein (möglicherweise leeres) Array, das {{jsxref("ArrayBuffer")}}-Kopien der Inhalte aller benutzerdefinierten Abschnitte enthält, die mit `sectionName` übereinstimmen.

### Ausnahmen

Wenn `module` keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekts ist, wird ein
{{jsxref("TypeError")}} ausgelöst.

## Beschreibung

Ein Wasm-Modul besteht aus einer Sequenz von **Abschnitten**. Die meisten dieser Abschnitte sind vollständig durch die Wasm-Spezifikation definiert und validiert, aber Module können auch **benutzerdefinierte Abschnitte** enthalten, die während der Validierung ignoriert und übersprungen werden. (Lesen Sie [High level structure](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure)
für Informationen über die Abschnittsstrukturen und wie normale Abschnitte ("bekannte Abschnitte") und benutzerdefinierte Abschnitte unterschieden werden.)

Dies bietet Entwicklern eine Möglichkeit, benutzerdefinierte Daten in Wasm-Modulen für andere Zwecke einzuschließen, zum Beispiel den [name custom section](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#name-section), der es Entwicklern ermöglicht, Namen für alle Funktionen und lokalen Variablen im Modul bereitzustellen (ähnlich wie "Symbole" in einem nativen Build).

Beachten Sie, dass das WebAssembly-Textformat derzeit keine definierte Syntax zum Hinzufügen neuer benutzerdefinierter Abschnitte hat; Sie können jedoch während der Konvertierung vom Textformat nach Wasm einen Namensabschnitt zu Ihrem Wasm hinzufügen. Der Befehl `wast2wasm`, der Teil des [wabt-Tools](https://github.com/webassembly/wabt) ist, hat eine `--debug-names` Option — geben Sie diese während der Konvertierung an, um ein Wasm mit einem benannten benutzerdefinierten Abschnitt zu erhalten, zum Beispiel:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Beispiele

### Verwendung von customSections

Das folgende Beispiel verwendet `WebAssembly.Module.customSections`, um zu überprüfen, ob eine geladene Modulinstanz einen "name" benutzerdefinierten Abschnitt enthält. Ein Modul enthält einen "name" benutzerdefinierten Abschnitt, wenn `WebAssembly.Module.customSections` einen `ArrayBuffer` mit einer Länge größer als 0 zurückgibt.

Siehe den Quellcode von custom-section.html [source code](https://github.com/mdn/webassembly-examples/blob/main/other-examples/custom-section.html)
und das [live example](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html).

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
