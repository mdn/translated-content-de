---
title: CSS at-rule-Funktionen
slug: Web/CSS/CSS_syntax/At-rule_functions
l10n:
  sourceCommit: 96a940e0c683885f3e13293f0f1641541415ff1d
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule)-Funktionen** sind at-rule-Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitungen oder Berechnungen auslösen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Zeichen `@` und einem at-rule-Bezeichner, wie z.B. `import`. Darauf folgt der **Name der at-rule-Funktion**, wie z.B. `url`, gefolgt von einem Paar öffnender und schließender Klammern. Innerhalb der Klammern werden ein oder mehrere Argumente angegeben.

Einige at-rule-Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import-Funktionen

Die {{CSSxRef("@import")}} at-rule wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browser-Unterstützung.
- [`@import layer()`](/de/docs/Web/CSS/@import/layer_function)
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die {{CSSxRef("@supports")}} at-rule prüft die Unterstützung eines Browsers für das angegebene CSS-Feature und wendet dann die CSS-Stile an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektorsyntax geprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie geprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat geprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}} at-rule wird verwendet, um XML-Namensräume anzugeben, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert XML-Namespace von der angegebenen URL.

## @container-Funktionen

Die {{CSSxRef("@container")}} at-rule wird verwendet, um Stile für einen Containment-Kontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Containment-Kontext-Stil.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
