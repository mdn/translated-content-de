---
title: "SyntaxError: missing } nach Funktionskörper"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "missing } after function body" tritt auf, wenn beim Erstellen einer Funktion irgendwo ein Syntaxfehler vorliegt. Überprüfen Sie, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind.

## Nachricht

```plain
SyntaxError: missing } after function body (Firefox)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt einen Syntaxfehler beim Erstellen einer Funktion. Überprüfen Sie auch, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind. Eine etwas schönere Einrückung oder Formatierung des Codes kann Ihnen ebenfalls helfen, den Überblick zu behalten.

## Beispiele

### Vergessene schließende geschweifte Klammer

Oft fehlt eine geschweifte Klammer in Ihrem Funktionscode:

```js-nolint example-bad
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
}
```

Richtig wäre:

```js example-good
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
}
```

Es kann subtiler sein, wenn {{Glossary("IIFE", "IIFEs")}} oder andere Konstrukte verwendet werden, die viele verschiedene Klammern und geschweifte Klammern verwenden, zum Beispiel.

```js-nolint example-bad
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
)();
```

Oft hilft es, anders einzurücken oder die Einrückung doppelt zu überprüfen, um diese Fehler zu erkennen.

```js example-good
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
})();
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
