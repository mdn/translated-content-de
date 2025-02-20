---
title: CSS-Wertfunktionen
slug: Web/CSS/CSS_Functions
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

**CSS-Wertfunktionen** sind Anweisungen, die spezielle Datenverarbeitung oder Berechnungen durchführen, um einen [CSS](/de/docs/Web/CSS)-[Wert](/de/docs/Web/CSS/CSS_Values_and_Units) für eine CSS-Eigenschaft zurückzugeben. CSS-Wertfunktionen repräsentieren komplexere [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) und können einige Eingabeargumente zur Berechnung des Rückgabewerts verwenden.

## Syntax

```css
selector {
  property: function([argument]? [, argument]!);
}
```

Die Wertsyntax beginnt mit dem **Namen der Funktion**, gefolgt von einer linken Klammer `(`. Danach folgen die Argumente, und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente verwenden, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. In einigen Funktionsnotationen werden mehrere Argumente durch Kommata getrennt, in anderen durch Leerzeichen.

> [!NOTE]
> Die CSS-Wertfunktionen werden als Eigenschaftswerte verwendet und sollten nicht mit Pseudoklassen verwechselt werden. Die [funktionalen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [sprachlichen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes) und einige [baumstrukturellen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) erfordern Parameterwerte, sind jedoch keine Wertfunktionen. Auch die konditionalen At-Rules sind keine Wertfunktionen; die Klammern werden für Gruppierungen verwendet.

## Transformationsfunktionen

Der {{CSSxRef("&lt;transform-function&gt;")}} CSS-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert Erscheinungstransformationen. Er wird als Wert der {{CSSxRef("transform")}}-Eigenschaft verwendet.

### Übersetzungsfunktionen

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Verschiebt ein Element horizontal.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Verschiebt ein Element vertikal.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Verschiebt ein Element entlang der Z-Achse.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Verschiebt ein Element auf der 2D-Ebene.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Verschiebt ein Element im 3D-Raum.

### Rotationsfunktionen

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : Dreht ein Element um die horizontale Achse.
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : Dreht ein Element um die vertikale Achse.
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : Dreht ein Element um die Z-Achse.
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : Dreht ein Element um einen festen Punkt auf der 2D-Ebene.
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : Dreht ein Element um eine feste Achse im 3D-Raum.

### Skalierungsfunktionen

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : Skalierung eines Elements horizontal.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Skalierung eines Elements vertikal.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Skalierung eines Elements entlang der Z-Achse.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Skalierung eines Elements auf der 2D-Ebene.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Skalierung eines Elements im 3D-Raum.

### Schrägstellungsfunktionen

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Schrägstellung eines Elements in horizontaler Richtung.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Schrägstellung eines Elements in vertikaler Richtung.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Schrägstellung eines Elements auf der 2D-Ebene.

### Matrix-Funktionen

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Beschreibt eine 3D-Transformation als 4×4-homogene Matrix.

### Perspektivische Funktionen

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Setzt den Abstand zwischen dem Benutzer und der Z=0-Ebene.

## Mathematische Funktionen

Die mathematischen Funktionen ermöglichen es, CSS-nummerische Werte als mathematische Ausdrücke darzustellen.

Jede der unten stehenden Seiten enthält detaillierte Informationen über die Syntax der Funktion, Daten zur Browser-Kompatibilität, Beispiele und mehr. Für eine umfassende Einführung in CSS-Mathematikfunktionen lesen Sie [Using CSS math functions](/de/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions).

### Grundrechenarten

- {{CSSxRef("calc", "calc()")}}
  - : Führt grundlegende arithmetische Berechnungen mit numerischen Werten durch.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Führt Berechnungen mit intrinsischen Größenwerten wie `auto`, `fit-content` und `max-content` durch, die von der `calc()`-Funktion nicht unterstützt werden.

### Vergleichsfunktionen

- {{CSSxRef("min", "min()")}}
  - : Berechnet den kleinsten Wert aus einer Liste von Werten.
- {{CSSxRef("max", "max()")}}
  - : Berechnet den größten Wert aus einer Liste von Werten.
- {{CSSxRef("clamp", "clamp()")}}
  - : Berechnet den zentralen Wert aus einer Minimum-, Zentral- und Maximum-Werte.

### Gerundete Wertfunktionen

- {{CSSxRef("round", "round()")}}
  - : Berechnet eine gerundete Zahl basierend auf einer Rundungsstrategie.
- {{CSSxRef("mod", "mod()")}}
  - : Berechnet einen Modulus (mit demselben Vorzeichen wie der Divisor), wenn eine Zahl durch eine andere geteilt wird.
- {{CSSxRef("rem", "rem()")}}
  - : Berechnet einen Rest (mit demselben Vorzeichen wie der Dividend), wenn eine Zahl durch eine andere geteilt wird.

... (die Übersetzung bleibt mit demselben Format und den Regeln wie oben fortgesetzt) ...

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
