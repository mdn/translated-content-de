---
title: import.source()
slug: Web/JavaScript/Reference/Operators/import/source
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Die Syntax **`import.source()`** verhält sich wie die reguläre Syntax [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), führt jedoch zu einem Objekt, das den kompilierten Quellcode des Moduls repräsentiert. Das Modul wird abgerufen und kompiliert, aber seine Abhängigkeiten werden nicht geladen und es wird nicht verknüpft oder ausgewertet. Es kann später imperativ ausgewertet werden, beispielsweise mithilfe von [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) oder [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

Um `import.source()` zu verwenden, muss das Zielmodul eine Art sein, die Source-Phase-Importe unterstützt. Derzeit unterstützen nur WebAssembly-Module Source-Phase-Importe und führen zu [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekten. JavaScript-Modulquellobjekte werden durch den Vorschlag [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) hinzugefügt.

Weitere Informationen über die Semantik von Source-Phase-Importen finden Sie in der Deklarationsform [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source).

## Syntax

```js-nolint
import.source(moduleName)
import.source(moduleName, options)
```

`import.source()` ist eine spezielle Syntax (eine „Meta-Eigenschaft“) und keine Methode eines `import`-Objekts.

### Parameter

Siehe [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Rückgabewert

Gibt ein Promise zurück, das nach dem erfolgreichen Laden und Kompilieren des Moduls mit einem {{jsxref("AbstractModuleSource")}}-Objekt erfüllt wird, das den kompilierten Quellcode des Moduls repräsentiert.

Wie bei regulärem [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#return_value) wird das Promise abgelehnt, wenn das Modul nicht geladen oder geparst werden kann. Es wird außerdem mit einem {{jsxref("SyntaxError")}} abgelehnt, wenn der Modultyp Source-Phase-Importe nicht unterstützt. Der Import lädt keine Abhängigkeiten, verknüpft oder wertet das Modul nicht aus, sodass Fehler aus diesen späteren Schritten nicht gemeldet werden.

## Beispiele

### Verwenden von import.source()

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

- Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/source", "import source")}}
- {{jsxref("AbstractModuleSource")}}
