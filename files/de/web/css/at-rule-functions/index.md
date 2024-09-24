---
title: CSS-At-Regelfunktionen
slug: Web/CSS/At-rule-functions
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [at-Regel](/de/docs/Web/CSS/At-rule) Funktionen** sind At-Regel-Aussagen, die komplexe Regeln darstellen oder spezielle Datenverarbeitung oder Berechnungen auslösen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Symbol `@` und einem At-Regel-Identifikator, wie `import`. Dies wird gefolgt vom **Namen der At-Regel-Funktion**, wie `url`, gefolgt von einem Paar von öffnenden und schließenden Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige At-Regel-Funktionen können mehrere Argumente aufnehmen, die ähnlich wie CSS-Property-Werte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können durch ein Komma oder ein Leerzeichen getrennt werden.

## @import-Funktionen

Die {{CSSxRef("@import")}}-Regel wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import src()")}}
  - : Importiert eine Stylesheet-Datei aus der angegebenen Quelle.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browserunterstützung.
- {{CSSxRef("@import", "@import layer()")}}
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die {{CSSxRef("@supports")}}-Regel überprüft die Unterstützung einer bestimmten CSS-Funktion durch einen Browser und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektorsyntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}}-Regel wird verwendet, um XML-Namensräume in einem CSS-Stylesheet zu spezifizieren.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert den XML-Namensraum von der angegebenen URL.
- {{CSSxRef("@namespace", "@namespace src()")}}
  - : Definiert den XML-Namensraum aus der angegebenen Quelle.

## @container-Funktionen

Die {{CSSxRef("@container")}}-Regel wird verwendet, um Stile für einen Einhaltungskontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Einhaltungskontexts.
