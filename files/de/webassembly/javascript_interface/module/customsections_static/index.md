---
title: WebAssembly.Module.customSections()
slug: WebAssembly/JavaScript_interface/Module/customSections_static
l10n:
  sourceCommit: 9685c54e1d67864ec7f95a4936a695d4d9c6e731
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.Module.customSections()`** gibt eine Kopie
der Inhalte aller benutzerdefinierten Abschnitte im angegebenen Modul mit dem angegebenen Zeichenfolkennamen zurück.

## Syntax

```js-nolint
WebAssembly.Module.customSections(module, sectionName)
```

### Parameter

- `module`
  - : Das [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt, dessen benutzerdefinierte Abschnitte betrachtet werden.
- `sectionName`
  - : Der Zeichenfolgenname des gewünschten benutzerdefinierten Abschnitts.

### Rückgabewert

Ein (möglicherweise leeres) Array, das {{jsxref("ArrayBuffer")}}-Kopien der Inhalte aller benutzerdefinierten Abschnitte enthält, die `sectionName` entsprechen.

### Ausnahmen

Wenn `module` keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekts ist, wird ein
{{jsxref("TypeError")}} ausgelöst.

## Beschreibung

Ein Wasm-Modul besteht aus einer Sequenz von **Abschnitten**. Die meisten dieser
Abschnitte sind durch die Wasm-Spezifikation vollständig spezifiziert und validiert, aber Module können auch
**benutzerdefinierte Abschnitte** enthalten, die während
der Validierung ignoriert und übersprungen werden. (Lesen Sie [High level structure](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure)
für Informationen über Abschnittsstrukturen und wie normale Abschnitte
("bekannte Abschnitte") und benutzerdefinierte Abschnitte unterschieden werden.)

Dies bietet Entwicklern eine Möglichkeit, benutzerdefinierte Daten innerhalb von Wasm-Modulen für andere Zwecke einzubinden,
beispielsweise den [namenbenutzerdefinierten Abschnitt](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#name-section),
der es Entwicklern ermöglicht, Namen für alle Funktionen und
lokalen Variablen im Modul bereitzustellen (ähnlich wie "Symbole" in einem nativen Build).

Beachten Sie, dass das WebAssembly-Textformat derzeit keine spezifizierte Syntax für
das Hinzufügen neuer benutzerdefinierter Abschnitte hat; Sie können jedoch einen Namensabschnitt zu Ihrem Wasm beim
Überführen vom Textformat in Wasm hinzufügen. Der `wast2wasm`-Befehl, verfügbar als Teil des
[wabt-Tools](https://github.com/webassembly/wabt), hat eine
`--debug-names`-Option — geben Sie dies während der Umwandlung an, um ein Wasm mit einem
namenbenutzerdefinierten Abschnitt zu erhalten, beispielsweise:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Beispiele

### Verwendung von customSections

Das folgende Beispiel verwendet `WebAssembly.Module.customSections`, um zu überprüfen,
ob eine geladene Modulinstanz einen "namens" benutzerdefinierten Abschnitt enthält. Ein Modul enthält einen "namens" benutzerdefinierten Abschnitt, wenn `WebAssembly.Module.customSections`
einen `ArrayBuffer` mit einer Länge größer als 0 zurückgibt.

Siehe den Quellcode [source code](https://github.com/mdn/webassembly-examples/blob/main/other-examples/custom-section.html)
und [live example](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html).

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
