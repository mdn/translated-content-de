---
title: import.defer()
slug: Web/JavaScript/Reference/Operators/import/defer
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

{{SeeCompatTable}}

Die **`import.defer()`**-Syntax verhält sich wie die reguläre [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Syntax, gibt jedoch ein [verzögertes Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object) zurück. Das Modul und seine Abhängigkeiten werden vorab [geladen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) und [verknüpft](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules), ihre synchrone [Auswertung](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) wird jedoch aufgeschoben, bis auf Eigenschaften des Namespace zugegriffen wird.

Weitere Informationen zur verzögerten Auswertung, einschließlich ihres Zusammenspiels mit `await` auf oberster Ebene, finden Sie unter der Deklarationsform [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer).

## Syntax

```js-nolint
import.defer(moduleName)
import.defer(moduleName, options)
```

`import.defer()` ist eine spezielle Syntax (eine „Meta-Eigenschaft“) und keine Methode eines `import`-Objekts.

### Parameter

Siehe [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Rückgabewert

Gibt ein Promise zurück, das mit einem [verzögerten Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object) erfüllt wird, nachdem der Modulgraph [geladen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) und verknüpft wurde und alle sofort ausgewerteten [Abhängigkeiten mit `await` auf oberster Ebene](/de/docs/Web/JavaScript/Reference/Statements/import/defer#top-level_await) vollständig ausgewertet wurden.

Wie bei der regulären [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#return_value)-Syntax wird das Promise zurückgewiesen, wenn das Modul oder seine Abhängigkeiten nicht geladen, geparst oder verknüpft werden können. Es wird auch zurückgewiesen, wenn ein sofort ausgewertetes Modul eine Ausnahme auslöst. Fehler aus einer Auswertung, die aufgeschoben bleibt, werden stattdessen synchron durch die Operation auf dem Namespace ausgelöst, die die Auswertung anstößt.

## Beispiele

### import.defer() verwenden

> [!NOTE]
> Es ist garantiert, dass beim Abwarten des zurückgegebenen Promise niemals versehentlich eine exportierte `then`-Methode aufgerufen wird – ein Fallstrick beim [regulären Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) –, da das verzögerte Modul-Namespace-Objekt niemals eine Eigenschaft namens `then` bereitstellt.

```js
const ts = await import.defer("typescript");

function compilePath(path) {
  // Evaluation of the typescript module subgraph starts here
  const program = ts.createProgram([path], {});
}
```

Destrukturieren Sie den zurückgegebenen Namespace niemals unmittelbar, da dies die Auswertung auslöst:

```js example-bad
const { createProgram } = await import.defer("typescript");
// The typescript module has now been evaluated.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/defer", "import defer")}}
