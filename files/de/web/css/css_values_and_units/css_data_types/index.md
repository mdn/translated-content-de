---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörtern und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponententyptypen](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die komplexere Typen oder eine Verarbeitung ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Unten finden Sie eine Referenz zu den Typen, auf die Sie höchstwahrscheinlich stoßen werden, jedoch ist dies keine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort angegeben, das zwischen den spitzen Klammern `<` und `>` steht. Sie entsprechen keiner greifbaren CSS-Code-Entität.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Identifikatoren sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit vordefinierter Bedeutung, beispielsweise der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft auf dem Element-Elternteil.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Identifikator, beispielsweise der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, z.B. bei [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine gequotete Zeichenfolge, wie sie beispielsweise für einen Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, beispielsweise als Wert der {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit davon ist im Modul "CSS-Werte und -Einheiten" definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wo sie spezifisch für eben diese Spezifikation sind – zum Beispiel die `fr`-Einheit im [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul.

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, beispielsweise 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, beispielsweise 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentsymbol, beispielsweise 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der `fr`-Einheit und verwendet für das Grid-Track-Sizing.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind eine `<dimension>` und beziehen sich auf Distanzen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind eine `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind eine `<dimension>` mit einer `s` oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind eine `<dimension>` mit einer `Hz` oder `kHz`-Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist eine `<dimension>` mit einem Einheitenkennzeichen von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können eine Dimension oder einen Prozentwert annehmen. In diesem Fall wird der Prozentwert zu einer Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die neben einer Dimension auch einen Prozentwert akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentwert als Wert akzeptieren kann.

## Farbe

Das [CSS Colors](/de/docs/Web/CSS/CSS_colors)-Modul definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farben in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` mit einer Einheitskennzeichnung von `deg`, `grad`, `rad` oder `turn`, oder ein einheitsloses `<number>`, das als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbrads")}} spezifisch für die `<absolute-color-functions>`, deren Bestandteil es ist, an.

## Bilder

Das [CSS Images](/de/docs/Web/CSS/CSS_images)-Modul definiert die Datentypen, die sich mit Bildern, einschließlich Verläufen, befassen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbstopp für diesen Teil des Verlaufs anzugeben.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzugeben, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für radiale Verläufe verwendet; kann einen Schlüsselwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder einen `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Math-Funktions](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions)-Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Abfolge von Berechnungswerten beinhaltet, die mit Addition (`+`) und Subtraktion (`-`) Operatoren durchsetzt werden. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Abfolge von Berechnungswerten beinhaltet, die mit Multiplikation (`*`) und Division (`/`) Operatoren durchsetzt werden. Beim Multiplizieren muss ein Wert einheitenlos sein. Beim Dividieren muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder geschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` repräsentieren und in CSS-Math-Funktionen verwendet werden können.

## Formdatentypen

Die [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) und [CSS Borders and Box Decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations)-Module definieren Formdatentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Container-Ecke. Es wird von der Kurzschreibweise {{cssxref("corner-shape")}} und deren [Bestandteileigenschaften](/de/docs/Web/CSS/corner-shape#constituent_properties) verwendet, um die Form anzugeben, die auf betroffene Container-Ecken angewendet wird.

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
