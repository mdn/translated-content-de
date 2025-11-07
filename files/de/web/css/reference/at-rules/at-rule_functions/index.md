---
title: CSS-At-Regel-Funktionen
short-title: At-rule functions
slug: Web/CSS/Reference/At-rules/At-rule_functions
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**[CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules)-Funktionen** sind At-Regel-Anweisungen, die komplexe Regeln darstellen oder spezielle Datenverarbeitungen oder Berechnungen aufrufen können.

## Syntax

```plain
@identifier function([argument]? [, argument]!) {
}
```

Die Syntax beginnt mit dem At-Zeichen `@` und einem At-Regel-Bezeichner, wie zum Beispiel `import`. Darauf folgt der **Name der At-Regel-Funktion**, wie `url`, gefolgt von einem Paar von öffnenden und schließenden Klammern. Ein oder mehrere Argumente werden innerhalb der Klammern angegeben.

Einige At-Regel-Funktionen können mehrere Argumente aufnehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. Mehrere Argumente können mit einem Komma oder einem Leerzeichen getrennt werden.

## @import-Funktionen

Die {{CSSxRef("@import")}}-At-Regel wird verwendet, um Stile aus anderen Stylesheets zu importieren.

- {{CSSxRef("@import", "@import url()")}}
  - : Importiert eine Stylesheet-Datei von der angegebenen URL.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importiert eine Stylesheet-Datei basierend auf der Browser-Unterstützung.
- [`@import layer()`](/de/docs/Web/CSS/Reference/At-rules/@import/layer_function)
  - : Importiert eine Stylesheet-Datei in die angegebene Kaskadenschicht.

## @supports-Funktionen

Die {{CSSxRef("@supports")}}-At-Regel überprüft die Unterstützung eines bestimmten CSS-Features durch den Browser und wendet dann das CSS-Styling an.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Selektor-Syntax überprüft wurde.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für die angegebene Schrifttechnologie überprüft wurde.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Wendet CSS-Regeln an, nachdem die Unterstützung des Browsers für das angegebene Schriftformat überprüft wurde.

## @namespace-Funktionen

Die {{CSSxRef("@namespace")}}-At-Regel wird verwendet, um XML-Namensräume zu spezifizieren, die in einem CSS-Stylesheet verwendet werden sollen.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Definiert den XML-Namespace von der angegebenen URL.

## @container-Funktionen

Die {{CSSxRef("@container")}}-At-Regel wird verwendet, um Stile für einen Containment-Kontext zu spezifizieren.

- {{CSSxRef("@container", "@container style()")}}
  - : Definiert den Stil des Containment-Kontextes.

## Siehe auch

- [CSS-At-Regeln](/de/docs/Web/CSS/Reference/At-rules)
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
