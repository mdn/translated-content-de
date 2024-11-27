---
title: CSS-at-rule-Funktionen
slug: Web/CSS/At-rule-functions
l10n:
  sourceCommit: 6fbfac8960ba76c1dc5aea34d35a5c11f8487ba7
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) Funktionen** sind at-rule-Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitung oder Berechnungen aufrufen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Symbol `@` und einem at-rule-Identifikator, wie etwa `import`. Darauf folgt der **Name der at-rule-Funktion**, wie `url`, gefolgt von einem Paar öffnender und schließender Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige at-rule-Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Werte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import-Funktionen

Die at-rule {{CSSxRef("@import")}} wird verwendet, um Stilvorlagen von anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browserunterstützung.
- {{CSSxRef("@import", "@import layer()")}}
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die at-rule {{CSSxRef("@supports")}} prüft die Unterstützung eines Browsers für das angegebene CSS-Feature und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektorsyntax geprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schriftarttechnologie geprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftartformat geprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}} at-rule wird verwendet, um XML-Namensräume anzugeben, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert den XML-Namespace von der angegebenen URL.

## @container-Funktionen

Die {{CSSxRef("@container")}} at-rule wird verwendet, um Stilvorlagen für einen Containment-Kontext festzulegen.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Containment-Kontexts.
