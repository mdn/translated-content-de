---
title: CSS at-rule Funktionen
slug: Web/CSS/At-rule-functions
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) Funktionen** sind at-rule Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitungen oder Berechnungen auslösen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem Symbol `@` und einem at-rule Bezeichner, wie z.B. `import`. Dies wird gefolgt vom **Namen der at-rule Funktion**, wie z.B. `url`, gefolgt von einem Paar von öffnenden und schließenden Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige at-rule Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import Funktionen

Die {{CSSxRef("@import")}} at-rule wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import src()")}}
  - : Importiert eine Stylesheet-Datei aus der angegebenen Quelle.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browser-Unterstützung.
- {{CSSxRef("@import", "@import layer()")}}
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports Funktionen

Die {{CSSxRef("@supports")}} at-rule prüft die Unterstützung eines Browsers für das angegebene CSS-Feature und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektorsyntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace Funktionen

Die {{CSSxRef("@namespace")}} at-rule wird verwendet, um XML-Namespaces zu definieren, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert einen XML-Namespace von der angegebenen URL.
- {{CSSxRef("@namespace", "@namespace src()")}}
  - : Definiert einen XML-Namespace aus der angegebenen Quelle.

## @container Funktionen

Die {{CSSxRef("@container")}} at-rule wird verwendet, um Stile für einen Containment-Kontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Containment-Kontexts.
