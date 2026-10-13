---
title: "console: Statische Methode context()"
short-title: context()
slug: Web/API/console/context_static
l10n:
  sourceCommit: 6c8fe847cba7ba4c85b003a21eb7e6d4005054e3
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.context()`** erstellt einen neuen Konsolenkontext: ein Objekt mit weitgehend denselben Methoden wie das `console`-Objekt, dessen Meldungen einem optionalen Label zugeordnet sind. So können Sie Meldungen aus verschiedenen Teilen Ihres Codes gruppieren und filtern.

## Syntax

```js-nolint
console.context()
console.context(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Eine Zeichenfolge, mit der der Kontext benannt wird. Meldungen, die über das zurückgegebene Objekt ausgegeben werden, sind diesem Namen zugeordnet. Der Standardwert ist `"anonymous"`.

### Rückgabewert

Ein neues Objekt, das die meisten Methoden des `console`-Objekts besitzt, darunter [`log()`](/de/docs/Web/API/console/log_static), [`warn()`](/de/docs/Web/API/console/warn_static), [`count()`](/de/docs/Web/API/console/count_static) und [`time()`](/de/docs/Web/API/console/time_static). Es besitzt selbst keine `context()`-Methode.

## Beschreibung

Jeder Aufruf von `console.context()` gibt einen neuen, unabhängigen Konsolenkontext zurück. Meldungen, die über einen Kontext ausgegeben werden, tragen dessen Label. Entwicklertools können damit erkennen, woher eine Meldung stammt. In den Chrome DevTools können Sie beispielsweise `context:myLogger` in das Filterfeld eingeben, um nur Meldungen anzuzeigen, die über einen Kontext mit dem Label `myLogger` ausgegeben wurden.

Jeder Kontext verwaltet seine Zähler und Timer unabhängig. Das bedeutet, dass Labels für [`count()`](/de/docs/Web/API/console/count_static) und [`time()`](/de/docs/Web/API/console/time_static), die in einem Kontext verwendet werden, gleichnamige Labels im globalen `console`-Objekt oder in einem anderen Kontext nicht beeinflussen. Ein Aufruf von [`clear()`](/de/docs/Web/API/console/clear_static) auf einem Kontext leert dennoch die gesamte Konsole.

Wie die Methoden von `console` verwenden auch die Methoden eines Konsolenkontexts den Wert von `this` nicht. Sie können sie daher als ungebundene Funktionen weitergeben.

## Beispiele

### Einen benannten Logger erstellen

```js
const logger = console.context("myLogger");
logger.log("Hello");
logger.info("World");
```

Beide Meldungen erscheinen in der Konsole wie Meldungen, die mit `console.log()` und `console.info()` ausgegeben wurden. Wenn Sie in den Chrome DevTools `context:myLogger` in das Filterfeld der Konsole eingeben, werden nur diese beiden Meldungen angezeigt.

### Zähler sind für jeden Kontext getrennt

```js
const a = console.context("A");
const b = console.context("B");

console.count("hits"); // hits: 1
a.count("hits"); // hits: 1
a.count("hits"); // hits: 2
b.count("hits"); // hits: 1
console.count("hits"); // hits: 2
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.count()`](/de/docs/Web/API/console/count_static)
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [Vorschlag zur Spezifikation von `console.context()`](https://github.com/whatwg/console/pull/244) im Console Standard
