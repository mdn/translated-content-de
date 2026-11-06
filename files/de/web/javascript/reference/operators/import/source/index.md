---
title: import.source()
slug: Web/JavaScript/Reference/Operators/import/source
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

{{SeeCompatTable}}

Die Syntax **`import.source()`** verhält sich wie die reguläre [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Syntax, liefert jedoch ein Objekt zurück, das den kompilierten Quellcode des Moduls repräsentiert. Das Modul wird [abgerufen und kompiliert](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph), aber seine Abhängigkeiten werden nicht geladen. Es wird weder [verknüpft](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) noch [ausgewertet](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules). Es kann später explizit ausgewertet werden, beispielsweise mit einem [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) oder [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

Um `import.source()` zu verwenden, muss das Zielmodul Source-Phase-Importe unterstützen. Derzeit unterstützen nur WebAssembly-Module Source-Phase-Importe; sie liefern [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte zurück. Objekte für den Quellcode von JavaScript-Modulen sollen durch den Vorschlag [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) hinzugefügt werden.

Weitere Informationen zur Semantik von Source-Phase-Importen finden Sie bei der Deklarationsform [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source).

## Syntax

```js-nolint
import.source(moduleName)
import.source(moduleName, options)
```

`import.source()` ist eine spezielle Syntax (eine „Meta-Property“) und keine Methode eines `import`-Objekts.

### Parameter

Siehe [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Rückgabewert

Gibt ein Promise zurück, das mit einem {{jsxref("AbstractModuleSource")}}-Objekt erfüllt wird. Dieses repräsentiert den kompilierten Quellcode des Moduls, nachdem das Modul erfolgreich geladen und kompiliert wurde.

Wie bei der regulären [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#return_value)-Syntax wird das Promise zurückgewiesen, wenn das Modul nicht geladen oder geparst werden kann. Es wird außerdem mit einem {{jsxref("SyntaxError")}} zurückgewiesen, wenn der Modultyp keine Source-Phase-Importe unterstützt. Der Import lädt keine Abhängigkeiten und verknüpft oder wertet das Modul nicht aus. Fehler aus diesen späteren Schritten werden daher nicht gemeldet.

## Beispiele

### import.source() verwenden

```js
const myModuleSource = await import.source("./my-module.wasm");

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/source", "import source")}}
- {{jsxref("AbstractModuleSource")}}
