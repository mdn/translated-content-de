---
title: CSS-At-Regel-Funktionen
slug: Web/CSS/At-rule-functions
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule)-Funktionen** sind At-Regel-Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitung oder Berechnungen ausführen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Symbol `@` und einem At-Regel-Identifikator, wie `import`. Darauf folgt der **Name der At-Regel-Funktion**, wie `url`, gefolgt von einem Paar öffnender und schließender Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige At-Regel-Funktionen können mehrere Argumente akzeptieren, die ähnlich wie CSS-Property-Werte formatiert sind. Leerzeichen sind erlaubt, aber sie sind innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import-Funktionen

Die {{CSSxRef("@import")}}-At-Regel wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf Browser-Unterstützung.
- {{CSSxRef("@import", "@import layer()")}}
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die {{CSSxRef("@supports")}}-At-Regel überprüft die Unterstützung eines Browsers für die angegebene CSS-Funktion und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektorsyntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}}-At-Regel wird verwendet, um XML-Namespaces festzulegen, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert einen XML-Namespace von der angegebenen URL.

## @container-Funktionen

Die {{CSSxRef("@container")}}-At-Regel wird verwendet, um Stile für einen Containment-Kontext festzulegen.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Containment-Kontextstil.
