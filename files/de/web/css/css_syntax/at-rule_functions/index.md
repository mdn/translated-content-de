---
title: CSS At-Regel-Funktionen
short-title: At-rule functions
slug: Web/CSS/CSS_syntax/At-rule_functions
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**[CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) Funktionen** sind At-Regel-Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitungen oder Berechnungen ausführen können.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Symbol `@` und einem At-Regel-Bezeichner, wie `import`. Dies wird gefolgt vom **Namen der At-Regel-Funktion**, wie `url`, gefolgt von einem Paar aus öffnenden und schließenden Klammern. Innerhalb der Klammern werden ein oder mehrere Argumente angegeben.

Einige At-Regel-Funktionen können mehrere Argumente aufnehmen, die ähnlich wie CSS-Eigenschaften-Werte formatiert sind. Leerzeichen sind zulässig, aber innerhalb der Klammern optional. Mehrere Argumente können mit einem Komma oder einem Leerzeichen getrennt werden.

## @import Funktionen

Die {{CSSxRef("@import")}} At-Regel wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Unterstützung durch den Browser.
- [`@import layer()`](/de/docs/Web/CSS/@import/layer_function)
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports Funktionen

Die {{CSSxRef("@supports")}} At-Regel überprüft die Unterstützung eines Browsers für das angegebene CSS-Feature und wendet anschließend das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektor-Syntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace Funktionen

Die {{CSSxRef("@namespace")}} At-Regel wird verwendet, um XML-Namensräume in einem CSS-Stylesheet zu spezifizieren.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert XML-Namensraum von der angegebenen URL.

## @container Funktionen

Die {{CSSxRef("@container")}} At-Regel wird verwendet, um Stile für einen Containment-Kontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Containment-Kontextstil.

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
