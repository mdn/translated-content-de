---
title: CSS at-rule Funktionen
short-title: At-rule Funktionen
slug: Web/CSS/CSS_syntax/At-rule_functions
l10n:
  sourceCommit: a7ab7b8116f8dbb0561acd79bb0b4da2b6be3db9
---

**[CSS](/de/docs/Web/CSS) [At-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) Funktionen** sind At-rule Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitung oder Berechnungen aufrufen können.

## Syntax

```plain
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Zeichen `@` und einem At-rule Identifikator, wie `import`. Dies wird gefolgt vom **Namen der At-rule Funktion**, wie `url`, gefolgt von einem Paar von öffnenden und schließenden Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige At-rule Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import Funktionen

Die {{CSSxRef("@import")}} At-rule wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browser-Unterstützung.
- [`@import layer()`](/de/docs/Web/CSS/@import/layer_function)
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports Funktionen

Die {{CSSxRef("@supports")}} At-rule prüft die Unterstützung eines Browsers für das angegebene CSS-Feature und wendet dann die CSS-Stilregeln an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektor-Syntax geprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie geprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat geprüft wurde.

## @namespace Funktionen

Die {{CSSxRef("@namespace")}} At-rule wird verwendet, um XML-Namensräume zu spezifizieren, die in einem CSS Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert den XML-Namespace von der angegebenen URL.

## @container Funktionen

Die {{CSSxRef("@container")}} At-rule wird verwendet, um Stile für einen Eindämmungskontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Eindämmungskontexts.

## Siehe auch

- [CSS At-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
