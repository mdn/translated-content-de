---
title: CSS-Datentypen
slug: Web/CSS/CSS_values_and_units/CSS_data_types
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS Values and Units](/de/docs/Web/CSS/CSS_values_and_units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie anwendbar sind.

Nachfolgend finden Sie einen Verweis auf die Typen, mit denen Sie am wahrscheinlichsten konfrontiert werden, es handelt sich jedoch nicht um eine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

Im formalen CSS-Syntax werden Datentypen durch ein zwischen spitzen Klammern `<` und `>` platziertes Schlüsselwort bezeichnet. Sie entsprechen keinem greifbaren CSS-Code-Element.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenketten und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als anfänglicher Wert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft für das Elternelement.
    - {{CSSXref("revert")}}
      - : Setzt den Cascade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt den Cascade auf den Wert der früheren [Cascade-Ebene](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, z.B. der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, z.B. bei [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenkette, wie sie für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, z.B. als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen wird im Modul für CSS-Werte und -Einheiten definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wenn sie spezifisch für diese Spezifikation sind — zum Beispiel die Einheit `fr` im Modul [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimalzahlen von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, das mit der Syntax `<number> / <number>` geschrieben wird.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) eingeführt wurde, geschrieben als ein `<number>` mit der Einheit `fr` und verwendet für die Größenbestimmung von Gitternetzspuren.

## Größen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeitdauereinheiten sind ein `<dimension>` mit einer `s`- oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz`- oder `kHz`-Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheitenkennung von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Dimension- oder Prozentwert annehmen. In diesem Fall wird der Prozentwert auf eine mit der erlaubten Dimension übereinstimmende Menge aufgelöst. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

Das [CSS Color](/de/docs/Web/CSS/CSS_colors) Modul definiert den Datentyp {{cssxref("&lt;color&gt;")}}, und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder als numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, bei dem 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, bei dem 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheitenkennung von `deg`, `grad`, `rad` oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbrades")}}, das spezifisch für die `<absolute-color-functions>` ist, von denen es ein Bestandteil ist.

## Bilder

Das [CSS Images](/de/docs/Web/CSS/CSS_images) Modul definiert die Datentypen, die sich mit Bildern beschäftigen, einschließlich Verläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis zu einem Bild oder einem Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbstopp für diesen Teil des Verlaufs anzugeben.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzugeben, wie die Farbe interpoliert wird.
- `<ending-shape>`
  - : Wird für radiale Verläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Dies akzeptiert einen Wert eines Schlüsselwortes oder einer `<length>`, aber nicht eines Prozentsatzes.

## 2D-Positionierung

Der Datentyp {{cssxref("&lt;position&gt;")}} wird so interpretiert, wie er für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert ist.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder ein `<length-percentage>`.

## Berechnungs-Datentypen

Diese Datentypen werden in [CSS-Mathematische Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten ist, durchsetzt mit Addition (`+`) und Subtraktion (`-`) Operatoren. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten ist, durchsetzt mit Multiplikation (`*`) und Division (`/`) Operatoren. Beim Multiplizieren muss ein Wert einheitenlos sein. Beim Dividieren muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert die akzeptierten Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematische Funktionen verwendet werden können.

## Formen-Datentypen

Die [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) und [CSS Borders and Box Decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Module definieren Formen-Datentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}, und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Containerecke. Es wird durch den {{cssxref("corner-shape")}} Kurzform-Eigenschaft und deren [Bestandteileigenschaften](/de/docs/Web/CSS/corner-shape#constituent_properties) verwendet, um die Form zu spezifizieren, die auf betroffene Containerecken angewendet wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS Funktionale Notation](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
