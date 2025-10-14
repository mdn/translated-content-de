---
title: CSS-Datentypen
slug: Web/CSS/CSS_values_and_units/CSS_data_types
l10n:
  sourceCommit: e0354c7267abb4ee5d46eb09b7b4c9cb4cb6f690
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS Values and Units](/de/docs/Web/CSS/CSS_values_and_units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie anwendbar sind.

Nachfolgend finden Sie einen Verweis auf die Typen, denen Sie am ehesten begegnen werden. Dies ist jedoch kein umfassendes Nachschlagewerk für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort angegeben, das zwischen den spitzen Klammern `<` und `>` steht. Sie entsprechen keinem greifbaren CSS-Code-Element.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Identifikatoren sowie Zeichenfolgen und URLs.

- Vorgegebene Schlüsselwörter
  - : Schlüsselwörter mit einer vorgegebenen Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als anfänglicher Wert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft beim Elternelement.
    - {{CSSXref("revert")}}
      - : Setzt den Cascade zurück auf den Wert des früheren Ursprungs.
    - {{CSSXref("revert-layer")}}
      - : Setzt den Cascade auf den Wert der früheren [Cascade-Schicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Verhält sich wie `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Identifikator, zum Beispiel der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, wie sie zum Beispiel für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen ist im Modul CSS Values and Units definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wenn sie spezifisch für diese Spezifikation sind — zum Beispiel die Einheit `fr` im Modul [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9, optional mit `-` oder `+` vorangestellt.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Distanzen ({{cssxref("&lt;length&gt;")}}), Zeitdauern ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("&lt;resolution&gt;")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der angehängten Einheit `fr` und verwendet für die Größenbestimmung der Grid-Strecke.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}} Typen werden verwendet, um Distanzen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Distanzen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer Einheit `s` oder `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz` oder `kHz` Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Es handelt sich um ein `<dimension>` mit einer Einheit `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen {{cssxref("&lt;dimension&gt;")}} oder einen {{cssxref("&lt;percentage&gt;")}} Wert annehmen. In diesem Fall wird der Prozentwert zu einer Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der entweder eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der entweder eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der entweder einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der entweder eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

Das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) definiert den {{cssxref("&lt;color&gt;")}} Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Wird als Schlüsselwort oder numerischer Farbwert angegeben.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent ist und 1 vollständig undurchsichtig, oder ein `<percentage>`, wobei 0% vollständig transparent ist und 100% vollständig undurchsichtig.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheit `deg`, `grad`, `rad` oder `turn`, oder ein einheitenloses `<number>` interpretiert als `deg`, des {{Glossary("color_wheel", "Farbkreises")}}, der spezifisch für die `<absolute-color-functions>` ist, deren Bestandteil er ist.

## Bilder

Das [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul definiert die Datentypen, die mit Bildern umgehen, einschließlich Gradienten.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Eine `<color>` und ein `<length-percentage>`, um den Farbverlauf in diesem Teil des Gradienten anzuzeigen.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für radiale Gradienten verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform eines radialen Gradienten. Dies akzeptiert einen Wert eines Schlüsselwortes oder einer `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}} Datentyp wird wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten ist, durchsetzt mit Additions- (`+`) und Subtraktionsoperatoren (`-`). Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten ist, durchsetzt mit Multiplikations- (`*`) und Divisionsoperatoren (`/`). Beim Multiplizieren muss ein Wert einheitenlos sein. Beim Dividieren muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder geschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten repräsentieren, wie `e` und `π`, die in CSS-Mathematikfunktionen verwendet werden können.

## Formdatentypen

Die [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) und [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Module definieren Formdatentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Containerecke. Es wird von der Kurzform-Eigenschaft {{cssxref("corner-shape")}} und ihren [Bestandteileigenschaften](/de/docs/Web/CSS/corner-shape#constituent_properties) verwendet, um die Form anzugeben, die auf die betroffenen Containerecken angewendet wird.

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- Modul [CSS values and units](/de/docs/Web/CSS/CSS_values_and_units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-funktionale Notation](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
