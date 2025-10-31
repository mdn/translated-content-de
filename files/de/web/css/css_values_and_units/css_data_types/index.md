---
title: CSS-Datentypen
slug: Web/CSS/CSS_values_and_units/CSS_data_types
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponenten-Werttyp](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS Values and Units](/de/docs/Web/CSS/CSS_values_and_units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie sich beziehen.

Nachfolgend finden Sie eine Referenz zu den Typen, mit denen Sie am ehesten in Berührung kommen, jedoch ist dies keine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort zwischen den spitzen Klammern `<` und `>` angegeben. Sie entsprechen keiner greifbaren CSS-Codeeinheit.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenketten und URLs.

- Vorgegebene Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als initialer Wert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft im Elternelement des Elements.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenebene](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wurde.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenkette, wie sie zum Beispiel für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Zeiger auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen ist im Modul „CSS-Werte und -Einheiten“ definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wo sie spezifisch nur für diese Spezifikation sind — zum Beispiel die `fr` Einheit im Modul [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimalstellen von 0 bis 9, optional vorangestellt von `-` oder `+`.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Entfernungen ({{cssxref("&lt;length&gt;")}}), Zeiträume ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("&lt;resolution&gt;")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem dazugehörigen Prozentzeichen, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge eingeführt für das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als ein `<number>` mit der `fr` Einheit und verwendet zur Größenbestimmung von Gitterspalten.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}} Typen werden zur Angabe von Entfernungen und anderen Größen verwendet.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer angehängten Einheit von `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeitdauereinheiten sind ein `<dimension>` mit einer `s` oder `ms` Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer angehängten Einheit von `Hz` oder `kHz`.
- {{cssxref("&lt;resolution&gt;")}}
  - : Eine `<dimension>` mit einem Einheitenkennzeichen von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können sowohl einen {{cssxref("&lt;dimension&gt;")}} als auch einen {{cssxref("&lt;percentage&gt;")}} Wert annehmen. In diesem Fall wird der Prozentwert in eine Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die neben einer Dimension auch einen Prozentwert akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert den {{cssxref("&lt;color&gt;")}} Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Als Schlüsselwort oder numerischer Farbwert angegeben.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent ist und 1 vollständig undurchsichtig, oder ein `<percentage>`, wobei 0 % vollständig transparent und 100 % vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einem Einheitenkennzeichen von `deg`, `grad`, `rad` oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, der für die `<absolute-color-functions>`, deren Teil er ist, spezifisch ist.

## Bilder

Das [CSS-Bildermodul](/de/docs/Web/CSS/CSS_images) definiert die Datentypen, die mit Bildern umgehen, einschließlich Gradienten.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstops mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Eine `<color>` und ein `<length-percentage>`, um den Farbstop für diesen Teil des Gradienten anzugeben.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzugeben, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für radiale Verläufe verwendet und kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Form, die das Ende des radialen Verlaufs bildet. Dies akzeptiert einen Wert eines Schlüsselwortes oder eine `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}} Datentyp wird wie für die {{cssxref("&lt;background-position&gt;")}} Eigenschaft definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten mit Addition (`+`) und Subtraktion (`-`) Operatoren enthält. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten mit Multiplikation (`*`) und Division (`/`) Operatoren enthält. Beim Multiplizieren muss ein Wert einheitenlos sein. Beim Dividieren muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen und in CSS-Mathematikfunktionen verwendet werden können.

## Formdatentypen

Die Module [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) und [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) definieren Formdatentypen:

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value&gt;")}}
  - : Beschreibt die Form einer Containerecke. Diese wird von der Kurzschreibweise {{cssxref("corner-shape")}} und ihren [Bestandteilen](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) verwendet, um die auf die betroffenen Containerecken angewendete Form anzugeben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionale Notation](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
