---
title: "SyntaxError: import declarations may only appear at top level of a module"
slug: Web/JavaScript/Reference/Errors/import_decl_module_top_level
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "import declarations may only appear at top level of a module" tritt auf, wenn eine `import`-Deklaration nicht auf der obersten Ebene eines Moduls steht. Dies könnte daran liegen, dass die `import`-Deklaration in andere Konstrukte (Funktionen, Blöcke usw.) verschachtelt ist oder häufiger, weil die aktuelle Datei nicht als Modul behandelt wird.

## Meldung

```plain
SyntaxError: Cannot use import statement outside a module (V8-based)
SyntaxError: import declarations may only appear at top level of a module (Firefox)
SyntaxError: Unexpected identifier 'x'. import call expects one or two arguments. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Möglicherweise haben Sie eine `import`-Deklaration, die in ein anderes Konstrukt verschachtelt ist, wie z.B. eine Funktion oder einen Block. Die `import`-Deklaration muss auf der obersten Ebene des Moduls stehen. Wenn Sie ein Modul bedingt importieren oder nach Bedarf lazy importieren möchten, verwenden Sie stattdessen [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import).

Wenn das `import` bereits auf der obersten Ebene des Codes steht, könnte es daran liegen, dass die Datei nicht als Modul interpretiert wird. Laufzeiten benötigen externe Hinweise, um zu bestimmen, ob eine Datei ein Modul ist oder nicht, und hier sind mehrere Möglichkeiten, solche Hinweise zu geben:

- Wenn die Datei direkt aus HTML geladen wird, stellen Sie sicher, dass das [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Tag das `type="module"`-Attribut hat.
- Wenn die Datei in Node ausgeführt wird, stellen Sie sicher, dass entweder die Datei die `.mjs`-Erweiterung hat oder die nächste `package.json`-Datei das `"type": "module"`-Feld enthält.
- Wenn die Datei als [worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird, stellen Sie sicher, dass Sie den `Worker()`-Konstruktor mit der Option `type: "module"` aufrufen.
- Importieren Sie diese Datei aus einem anderen Modul.

Ein weiterer Grund könnte sein, wenn Sie `import` mit einem Compiler (wie TypeScript) schreiben und versehentlich die Quelldatei ausgeführt haben. Da `import`-Deklarationen normalerweise zu Beginn des Programms erscheinen, sind sie das Erste, was der Parser sieht, was zu Beschwerden führt. Stellen Sie sicher, dass Sie die Quelldatei kompilieren und die kompilierte Datei ausführen.

## Beispiele

### Bedingte Importe

Sie können `import` nicht innerhalb anderer Konstrukte verwenden, wie Sie es möglicherweise in Python tun würden.

```js example-bad
if (writeOutput) {
  import fs from "fs"; // SyntaxError
}
```

Entweder verschieben Sie das `import` auf die oberste Ebene oder verwenden den dynamischen Import.

```js example-good
if (writeOutput) {
  import("fs").then((fs) => {
    // use fs
  });
}
```

### Importieren in einem Nicht-Modul-Skript

Wenn Sie das Skript aus HTML laden, stellen Sie sicher, dass Sie das `type="module"`-Attribut dem `<script>`-Tag hinzufügen.

```html
<script type="module" src="main.js"></script>
```

Wenn Sie aus irgendeinem Grund das Skript nicht in ein Modul migrieren können, können Sie den dynamischen Import verwenden.

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
