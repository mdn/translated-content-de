---
title: CSS-At-Regel-Funktionen
slug: Web/CSS/CSS_syntax/At-rule_functions
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule)-Funktionen** sind At-Regel-Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitung oder Berechnungen auslösen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Symbol `@` und einem At-Regel-Identifikator, wie z.B. `import`. Dies wird gefolgt vom **Namen der At-Regel-Funktion**, wie z.B. `url`, gefolgt von einem Paar von öffnenden und schließenden Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige At-Regel-Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Property-Werte formatiert sind. Weißraum ist erlaubt, aber in den Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import-Funktionen

Die {{CSSxRef("@import")}} At-Regel wird benutzt, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browser-Unterstützung.
- {{CSSxRef("@import", "@import layer()")}}
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die {{CSSxRef("@supports")}} At-Regel prüft die Unterstützung eines Browsers für das angegebene CSS-Feature und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektor-Syntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}} At-Regel wird verwendet, um XML-Namespace festzulegen, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert den XML-Namespace von der angegebenen URL.

## @container-Funktionen

Die {{CSSxRef("@container")}} At-Regel wird verwendet, um Stile für einen Containment-Kontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Containment-Kontexts.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
