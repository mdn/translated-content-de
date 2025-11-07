---
title: CSS At-Regel-Funktionen
short-title: At-rule functions
slug: Web/CSS/Reference/At-rules/At-rule_functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**[CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) Funktionen** sind At-Regel-Aussagen, die komplexe Regeln darstellen oder spezielle Datenverarbeitungen oder Berechnungen aufrufen können.

## Syntax

```plain
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem Symbol `@` und einem At-Regel-Identifikator, wie z.B. `import`. Darauf folgt der **Name der At-Regel-Funktion**, wie z.B. `url`, gefolgt von einem Paar von öffnenden und schließenden Klammern. Ein oder mehrere Argumente sind innerhalb der Klammern spezifiziert.

Einige At-Regel-Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import Funktionen

Die {{CSSxRef("@import")}} At-Regel wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Unterstützung durch den Browser.
- [`@import layer()`](/de/docs/Web/CSS/Reference/At-rules/@import/layer_function)
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports Funktionen

Die {{CSSxRef("@supports")}} At-Regel überprüft die Unterstützung eines Browsers für die angegebene CSS-Funktion und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektor-Syntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace Funktionen

Die {{CSSxRef("@namespace")}} At-Regel wird verwendet, um XML-Namensräume anzugeben, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert XML-Namensraum von der angegebenen URL.

## @container Funktionen

Die {{CSSxRef("@container")}} At-Regel wird verwendet, um Stile für einen Containment-Kontext anzugeben.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Containment-Kontext-Stil.

## Siehe auch

- [CSS At-Regeln](/de/docs/Web/CSS/Reference/At-rules)
- [CSS Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
