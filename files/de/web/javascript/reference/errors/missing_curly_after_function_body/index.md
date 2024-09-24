---
title: "SyntaxError: fehlende } nach Funktionskörper"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "fehlende } nach Funktionskörper" tritt auf, wenn es irgendwo einen Syntaxfehler beim Erstellen einer Funktion gibt. Überprüfen Sie, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind.

## Nachricht

```plain
SyntaxError: missing } after function body (Firefox)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt einen Syntaxfehler beim Erstellen einer Funktion. Überprüfen Sie auch, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind. Eine etwas bessere Einrückung oder Formatierung des Codes kann ebenfalls helfen, den Überblick im „Syntax-Dschungel“ zu behalten.

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

Korrekt wäre:

```js example-good
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
}
```

Es kann weniger offensichtlich sein, wenn Sie [IIFEs](/de/docs/Glossary/IIFE) oder andere Konstrukte verwenden, die viele verschiedene Klammern und geschweifte Klammern verwenden, zum Beispiel.

```js-nolint example-bad
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
)();
```

Oft hilft es, unterschiedlich einzurücken oder die Einrückung doppelt zu überprüfen, um diese Fehler zu erkennen.

```js example-good
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
})();
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
