---
title: "SyntaxError: import declarations may only appear at top level of a module"
slug: Web/JavaScript/Reference/Errors/import_decl_module_top_level
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "import declarations may only appear at top level of a module" tritt auf, wenn eine `import`-Deklaration nicht auf der obersten Ebene eines Moduls steht. Dies kann passieren, weil die `import`-Deklaration innerhalb anderer Konstrukte verschachtelt ist (z.B. in Funktionen oder Blöcken), oder häufiger, weil die aktuelle Datei nicht als Modul behandelt wird.

## Nachricht

```plain
SyntaxError: Cannot use import statement outside a module (V8-based)
SyntaxError: import declarations may only appear at top level of a module (Firefox)
SyntaxError: Unexpected identifier 'x'. import call expects one or two arguments. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Möglicherweise haben Sie eine `import`-Deklaration, die in einem anderen Konstrukt, wie z.B. einer Funktion oder einem Block, verschachtelt ist. Die `import`-Deklaration muss auf der obersten Ebene des Moduls stehen. Wenn Sie ein Modul bedingt importieren möchten oder es bei Bedarf lazy importieren wollen, sollten Sie stattdessen das [dynamische Importieren](/de/docs/Web/JavaScript/Reference/Operators/import) verwenden.

Wenn sich die `import`-Deklaration bereits auf der obersten Ebene des Codes befindet, könnte es daran liegen, dass die Datei nicht als Modul interpretiert wird. Laufzeitumgebungen erfordern externe Hinweise, um zu bestimmen, ob eine Datei ein Modul ist oder nicht, und hier sind einige Möglichkeiten, solche Hinweise zu geben:

- Wenn die Datei direkt aus HTML geladen wird, stellen Sie sicher, dass das [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Tag das Attribut `type="module"` hat.
- Wenn die Datei in Node ausgeführt wird, stellen Sie sicher, dass entweder die Datei die `.mjs`-Erweiterung hat oder die nächstgelegene `package.json`-Datei das Feld `"type": "module"` enthält.
- Wenn die Datei als [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird, stellen Sie sicher, dass der `Worker()`-Konstruktor mit der Option `type: "module"` aufgerufen wird.
- Importieren Sie diese Datei aus einem anderen Modul.

Ein weiterer Grund kann sein, dass Sie `import` mit einem Compiler (wie TypeScript) schreiben und versehentlich die Quelldatei ausgeführt haben. Da `import`-Deklarationen normalerweise am Anfang des Programms stehen, sind sie das Erste, was der Parser sieht und worüber er sich beschwert. Stellen Sie sicher, die Quelldatei zu kompilieren und die kompilierte Datei auszuführen.

## Beispiele

### Bedingte Importe

Sie können `import` nicht innerhalb anderer Konstrukte verwenden, wie man es möglicherweise in Python tun würde.

```js example-bad
if (writeOutput) {
  import fs from "fs"; // SyntaxError
}
```

Entweder verschieben Sie das `import` auf die oberste Ebene oder verwenden Sie dynamisches Importieren.

```js example-good
if (writeOutput) {
  import("fs").then((fs) => {
    // use fs
  });
}
```

### Import in einem Nicht-Modul-Skript

Wenn Sie das Skript aus HTML laden, fügen Sie dem `<script>`-Tag das `type="module"` Attribut hinzu.

```html
<script type="module" src="main.js"></script>
```

Wenn Sie aus irgendeinem Grund das Skript nicht in ein Modul migrieren können, können Sie dynamisches Importieren verwenden.

```js example-good
async function main() {
  const myModule = await import("./my-module.js");
  // use myModule
}

main();
```

## Siehe auch

- [Verwendung von Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import", "import()")}}
