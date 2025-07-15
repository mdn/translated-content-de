---
title: CSS at-rule-Funktionen
short-title: At-rule functions
slug: Web/CSS/CSS_syntax/At-rule_functions
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**[CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule)-Funktionen** sind At-rule-Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitung oder Berechnungen ausführen können.

## Syntax

```plain
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Zeichen `@` und einem At-rule-Identifikator, wie z.B. `import`. Dies wird gefolgt vom **Namen der At-rule-Funktion**, wie z.B. `url`, und einem Paar von öffnenden und schließenden Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige At-rule-Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Property-Werte formatiert sind. Leerzeichen sind erlaubt, aber optional innerhalb der Klammern. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import-Funktionen

Die {{CSSxRef("@import")}} At-rule wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browser-Unterstützung.
- [`@import layer()`](/de/docs/Web/CSS/@import/layer_function)
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die {{CSSxRef("@supports")}} At-rule überprüft die Unterstützung des Browsers für die spezifizierte CSS-Funktion und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektor-Syntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}} At-rule wird verwendet, um XML-Namensräume zu spezifizieren, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert einen XML-Namensraum von der angegebenen URL.

## @container-Funktionen

Die {{CSSxRef("@container")}} At-rule wird verwendet, um Stile für einen Containment-Kontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Containment-Kontextes.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
