---
title: WebAssembly.Module.customSections()
slug: WebAssembly/JavaScript_interface/Module/customSections_static
l10n:
  sourceCommit: 9685c54e1d67864ec7f95a4936a695d4d9c6e731
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.Module.customSections()`** gibt eine Kopie des Inhalts aller benutzerdefinierten Abschnitte im gegebenen Modul mit dem angegebenen Stringnamen zurück.

## Syntax

```js-nolint
WebAssembly.Module.customSections(module, sectionName)
```

### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt, dessen benutzerdefinierte Abschnitte betrachtet werden.
- `sectionName`
  - : Der Stringname des gewünschten benutzerdefinierten Abschnitts.

### Rückgabewert

Ein (möglicherweise leeres) Array, das {{jsxref("ArrayBuffer")}}-Kopien der Inhalte aller benutzerdefinierten Abschnitte, die `sectionName` entsprechen, enthält.

### Ausnahmen

Wenn `module` keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekts ist, wird ein
{{jsxref("TypeError")}} ausgelöst.

## Beschreibung

Ein Wasm-Modul besteht aus einer Sequenz von **Abschnitten**. Die meisten dieser Abschnitte sind vollständig durch die Wasm-Spezifikation spezifiziert und validiert, aber Module können auch **benutzerdefinierte Abschnitte** enthalten, die während der Validierung ignoriert und übersprungen werden. (Lesen Sie die [High level structure](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure) für Informationen zur Struktur der Abschnitte und wie normale Abschnitte
("bekannte Abschnitte") und benutzerdefinierte Abschnitte unterschieden werden.)

Dies bietet Entwicklern eine Möglichkeit, benutzerdefinierte Daten in Wasm-Modulen für andere Zwecke einzubinden, zum Beispiel den [name custom section](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#name-section), der es Entwicklern ermöglicht, Namen für alle Funktionen und lokalen Variablen im Modul bereitzustellen (ähnlich wie "Symbole" in einem nativen Build).

Beachten Sie, dass das WebAssembly-Textformat derzeit keine festgelegte Syntax für das Hinzufügen neuer benutzerdefinierter Abschnitte hat; Sie können jedoch einen Namenabschnitt zu Ihrem Wasm hinzufügen, während Sie von Textformat nach Wasm konvertieren. Der `wast2wasm` Befehl, verfügbar als Teil des [wabt tool](https://github.com/webassembly/wabt), hat eine
`--debug-names` Option – geben Sie diese bei der Konvertierung an, um ein Wasm mit einem benutzerdefinierten Namensabschnitt zu erhalten, zum Beispiel:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Beispiele

### Verwendung von customSections

Im folgenden Beispiel wird `WebAssembly.Module.customSections` verwendet, um zu prüfen, ob eine geladene Modulinstanz einen benutzerdefinierten "name" Abschnitt enthält. Ein Modul enthält einen benutzerdefinierten "name" Abschnitt, wenn `WebAssembly.Module.customSections` einen `ArrayBuffer` mit einer Länge größer als 0 zurückgibt.

Siehe custom-section.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/other-examples/custom-section.html) und [Live-Beispiel](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html).

```js
WebAssembly.compileStreaming(fetch("simple-name-section.wasm")).then((mod) => {
  const nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length !== 0) {
    console.log("Module enthält einen Namensabschnitt");
    console.log(nameSections[0]);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
