---
title: CSS-At-Regel-Funktionen
short-title: At-rule functions
slug: Web/CSS/CSS_syntax/At-rule_functions
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule)-Funktionen** sind At-Regel-Aussagen, die komplexe Regeln darstellen oder spezielle Datenverarbeitung oder Berechnungen auslösen können.

## Syntax

```plain
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Zeichen `@` und einem At-Regel-Identifikator, wie zum Beispiel `import`. Dies wird gefolgt vom **Namen der At-Regel-Funktion**, wie zum Beispiel `url`, gefolgt von einem Paar öffnender und schließender Klammern. Innerhalb der Klammern werden ein oder mehrere Argumente angegeben.

Einige At-Regel-Funktionen können mehrere Argumente aufnehmen, die ähnlich wie CSS-Property-Werte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import-Funktionen

Die {{CSSxRef("@import")}}-At-Regel wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browser-Unterstützung.
- [`@import layer()`](/de/docs/Web/CSS/@import/layer_function)
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die {{CSSxRef("@supports")}}-At-Regel überprüft die Unterstützung eines Browsers für die angegebene CSS-Eigenschaft und wendet dann die CSS-Stilregeln an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektorsyntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}}-At-Regel wird verwendet, um XML-Namespace zu definieren, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert den XML-Namespace von der angegebenen URL.

## @container-Funktionen

Die {{CSSxRef("@container")}}-At-Regel wird verwendet, um Stile für einen Inhaltskontext anzugeben.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Inhaltskontextes.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
