---
title: CSS at-rule Funktionen
slug: Web/CSS/At-rule-functions
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) Funktionen** sind At-Regel-Anweisungen, die komplexe Regeln repräsentieren oder spezielle Datenverarbeitungen oder Berechnungen ausführen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Zeichen `@` und einem At-Regel-Identifikator, wie `import`. Danach folgt der **Name der At-Regel-Funktion**, wie `url`, gefolgt von einem Paar von öffnenden und schließenden Klammern. Innerhalb der Klammern werden ein oder mehrere Argumente angegeben.

Einige At-Regel-Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Property-Werte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import Funktionen

Die {{CSSxRef("@import")}} At-Regel wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import src()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen Quelle.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf Browser-Unterstützung.
- {{CSSxRef("@import", "@import layer()")}}
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports Funktionen

Die {{CSSxRef("@supports")}} At-Regel überprüft die Unterstützung eines Browsers für das angegebene CSS-Feature und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektorsyntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schriftarttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftartformat überprüft wurde.

## @namespace Funktionen

Die {{CSSxRef("@namespace")}} At-Regel wird verwendet, um XML-Namensräume in einem CSS-Stylesheet anzugeben.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert XML-Namespace von der angegebenen URL.
- {{CSSxRef("@namespace", "@namespace src()")}}
  - : Definiert XML-Namespace von der angegebenen Quelle.

## @container Funktionen

Die {{CSSxRef("@container")}} At-Regel wird verwendet, um Stile für einen Einschlusskontext anzugeben.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Einschlusskontextes.
