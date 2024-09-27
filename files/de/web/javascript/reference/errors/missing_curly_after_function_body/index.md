---
title: "SyntaxError: Missing } nach Funktionskörper"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing } nach Funktionskörper" tritt auf, wenn beim Erstellen einer Funktion irgendwo ein Syntaxfehler auftritt. Überprüfen Sie, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge stehen.

## Nachricht

```plain
SyntaxError: missing } after function body (Firefox)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt einen Syntaxfehler beim Erstellen einer Funktion. Überprüfen Sie auch, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge stehen. Eine bessere Einrückung oder Formatierung des Codes kann ebenfalls helfen, den Überblick zu behalten.

## Beispiele

### Vergessene schließende geschweifte Klammer

Häufig fehlt eine geschweifte Klammer in Ihrem Funktionscode:

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

Es kann weniger offensichtlich sein, wenn Sie [IIFEs](/de/docs/Glossary/IIFE) oder andere Konstrukte verwenden, die viele verschiedene Klammern und geschweifte Klammern nutzen.

```js-nolint example-bad
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
)();
```

Oft hilft es, die Einrückung anders vorzunehmen oder die Einrückung doppelt zu überprüfen, um diese Fehler zu erkennen.

```js example-good
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
})();
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
