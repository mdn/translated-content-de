---
title: import.defer()
slug: Web/JavaScript/Reference/Operators/import/defer
l10n:
  sourceCommit: 865686a652cb8dc4e9522e23399896e6373bfc19
---

Die Syntax **`import.defer()`** verhält sich wie die reguläre Syntax [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), führt jedoch zu einem [deferred module namespace object](/de/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object). Das Modul und seine Abhängigkeiten werden im Voraus abgerufen und verknüpft, ihre synchrone Auswertung wird jedoch aufgeschoben, bis auf die Eigenschaften des Namespace zugegriffen wird.

Weitere Informationen zur aufgeschobenen Auswertung, einschließlich ihrer Interaktion mit `await` auf oberster Ebene, finden Sie in der Deklarationsform [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer).

## Syntax

```js-nolint
import.defer(moduleName)
import.defer(moduleName, options)
```

`import.defer()` ist eine spezielle Syntax (eine „Meta-Eigenschaft“) und keine Methode eines `import`-Objekts.

### Parameter

Siehe [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Rückgabewert

Gibt ein Promise zurück, das nach dem Laden und Verknüpfen des Modulgraphen sowie nach Abschluss der Auswertung aller früh ausgewerteten [Abhängigkeiten mit `await` auf oberster Ebene](/de/docs/Web/JavaScript/Reference/Statements/import/defer#top-level_await) mit einem [deferred module namespace object](/de/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object) erfüllt wird.

Wie bei regulärem [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#return_value) wird das Promise abgelehnt, wenn das Modul oder seine Abhängigkeiten nicht geladen, geparst oder verknüpft werden können. Es wird ebenfalls abgelehnt, wenn ein früh ausgewertetes Modul eine Ausnahme auslöst. Fehler aus einer Auswertung, die aufgeschoben bleibt, werden stattdessen synchron durch die Namespace-Operation ausgelöst, welche die Auswertung anstößt.

## Beispiele

### Verwendung von import.defer()

> [!NOTE]
> Es ist garantiert, dass das Abwarten des resultierenden Promise niemals versehentlich eine exportierte `then`-Methode aufruft – ein Fallstrick, der mit dem [regulären module namespace object](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) verbunden ist –, da das deferred module namespace object niemals eine Eigenschaft namens `then` verfügbar macht.

```js
const ts = await import.defer("typescript");

function compilePath(path) {
  // Evaluation of the typescript module subgraph starts here
  const program = ts.createProgram([path], {});
}
```

Destrukturieren Sie den zurückgegebenen Namespace niemals sofort, da dies die Auswertung auslöst:

```js example-bad
const { createProgram } = await import.defer("typescript");
// The typescript module has now been evaluated.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) – Leitfaden
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/defer", "import defer")}}
