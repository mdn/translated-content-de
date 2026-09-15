---
title: import.defer()
slug: Web/JavaScript/Reference/Operators/import/defer
l10n:
  sourceCommit: f693fdeb65be430fdf3b7fc5cdf44a10a13f2bbf
---

Die Syntax **`import.defer()`** verhält sich wie die reguläre Syntax [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), führt jedoch zu einem [verzögerten Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object). Das Modul und seine Abhängigkeiten werden im Voraus abgerufen und verknüpft, ihre synchrone Auswertung wird jedoch verzögert, bis auf die Eigenschaften des Namespace zugegriffen wird.

Weitere Informationen über die verzögerte Auswertung, einschließlich ihrer Interaktion mit `await` auf oberster Ebene, finden Sie in der Deklarationsform [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer).

## Syntax

```js-nolint
import.defer(moduleName)
import.defer(moduleName, options)
```

`import.defer()` ist eine spezielle Syntax (eine „Meta-Eigenschaft“) und keine Methode eines `import`-Objekts.

### Parameter

Siehe [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Rückgabewert

Gibt ein Promise zurück, das nach dem Laden und Verknüpfen des Modulgraphen sowie nach Abschluss der Auswertung aller vorzeitig ausgewerteten [Abhängigkeiten mit `await` auf oberster Ebene](/de/docs/Web/JavaScript/Reference/Statements/import/defer#top-level_await) mit einem [verzögerten Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object) erfüllt wird.

Wie bei regulärem [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#return_value) wird das Promise abgelehnt, wenn das Modul oder seine Abhängigkeiten nicht geladen, geparst oder verknüpft werden können. Es wird auch abgelehnt, wenn ein vorzeitig ausgewertetes Modul einen Fehler auslöst. Fehler aus einer Auswertung, die weiterhin verzögert bleibt, werden stattdessen synchron durch die Namespace-Operation ausgelöst, die die Auswertung anstößt.

## Beispiele

### Verwendung von import.defer()

> [!NOTE]
> Es ist garantiert, dass das Abwarten des resultierenden Promise niemals versehentlich eine exportierte `then`-Methode aufruft – eine Fallstrickeigenschaft des [regulären Modul-Namespace-Objekts](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) –, da das verzögerte Modul-Namespace-Objekt niemals eine Eigenschaft namens `then` bereitstellt.

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

- Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/defer", "import defer")}}
