---
title: "SyntaxError: fehlende } nach Funktionskörper"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing } after function body" tritt auf, wenn irgendwo ein Syntaxfehler beim Erstellen einer Funktion vorliegt. Überprüfen Sie, ob alle geschlossenen geschweiften Klammern oder Klammern in der richtigen Reihenfolge stehen.

## Nachricht

```plain
SyntaxError: missing } after function body (Firefox)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Es gibt einen Syntaxfehler beim Erstellen einer Funktion irgendwo. Überprüfen Sie auch, ob alle geschlossenen geschweiften Klammern oder Klammern in der richtigen Reihenfolge stehen. Eine schönere Einrückung oder Formatierung des Codes kann Ihnen ebenfalls helfen, den Durchblick zu behalten.

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

Es kann weniger offensichtlich sein, wenn [IIFEs](/de/docs/Glossary/IIFE) oder andere Konstrukte verwendet werden, die viele verschiedene Klammern und geschweifte Klammern verwenden, zum Beispiel:

```js-nolint example-bad
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
)();
```

Häufig hilft es, anders einzurücken oder die Einrückung doppelt zu überprüfen, um diese Fehler zu erkennen.

```js example-good
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
})();
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
