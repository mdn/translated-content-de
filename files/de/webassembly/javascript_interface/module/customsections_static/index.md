---
title: WebAssembly.Module.customSections()
slug: WebAssembly/JavaScript_interface/Module/customSections_static
l10n:
  sourceCommit: 9685c54e1d67864ec7f95a4936a695d4d9c6e731
---

{{WebAssemblySidebar}}

Die **`WebAssembly.Module.customSections()`** statische Methode gibt eine Kopie
des Inhalts aller benutzerdefinierten Abschnitte im angegebenen Modul mit dem angegebenen String-Namen zurück.

## Syntax

```js-nolint
WebAssembly.Module.customSections(module, sectionName)
```

### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, dessen benutzerdefinierte Abschnitte betrachtet werden.
- `sectionName`
  - : Der String-Name des gewünschten benutzerdefinierten Abschnitts.

### Rückgabewert

Ein (möglicherweise leeres) Array, das {{jsxref("ArrayBuffer")}}-Kopien des Inhalts aller benutzerdefinierten Abschnitte enthält, die mit `sectionName` übereinstimmen.

### Ausnahmen

Wenn `module` keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekts ist, wird ein
{{jsxref("TypeError")}} ausgelöst.

## Beschreibung

Ein Wasm-Modul besteht aus einer Folge von **Abschnitten**. Die meisten dieser
Abschnitte sind durch die Wasm-Spezifikation vollständig spezifiziert und validiert, jedoch können Module auch
**benutzerdefinierte Abschnitte** enthalten, die während der
Validierung ignoriert und übersprungen werden. (Lesen Sie die [übergeordnete Struktur](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure) für Informationen zu Abschnittsstrukturen und wie normale Abschnitte
("bekannte Abschnitte") und benutzerdefinierte Abschnitte unterschieden werden.)

Dies ermöglicht es Entwicklern, benutzerdefinierte Daten für andere Zwecke in Wasm-Module zu integrieren,
zum Beispiel den [Namen-Benutzerabschnitt](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#name-section),
der es Entwicklern ermöglicht, Namen für alle Funktionen und
Lokalvariablen im Modul bereitzustellen (ähnlich wie "Symbole" in einem nativen Build).

Beachten Sie, dass das WebAssembly-Textformat derzeit keine Syntax für
das Hinzufügen neuer benutzerdefinierter Abschnitte spezifiziert; Sie können jedoch während
der Konvertierung vom Textformat zu Wasm einen Namensabschnitt hinzufügen. Der Befehl `wast2wasm`, der Teil des
[wabt-Tools](https://github.com/webassembly/wabt) ist, hat eine
`--debug-names` Option — spezifizieren Sie diese während der Konvertierung, um ein Wasm mit einem
Namen-Benutzerabschnitt zu erhalten, zum Beispiel:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Beispiele

### Verwendung von customSections

Das folgende Beispiel verwendet `WebAssembly.Module.customSections`, um zu prüfen,
ob eine geladene Modulinstanz einen "Namen"-Benutzerabschnitt enthält. Ein Modul enthält einen "Namen"-Benutzerabschnitt, wenn `WebAssembly.Module.customSections`
einen `ArrayBuffer` mit einer Länge größer als 0 zurückgibt.

Siehe custom-section.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/other-examples/custom-section.html)
und [Live-Beispiel](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
