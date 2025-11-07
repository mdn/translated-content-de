---
title: CSS-Datentypen
short-title: Data types
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im [CSS Values and Units](/de/docs/Web/CSS/Guides/Values_and_units)-Modul definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Nachfolgend finden Sie eine Referenz zu den Typen, denen Sie am ehesten begegnen werden. Dies ist jedoch keine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort gekennzeichnet, das zwischen den spitzen Klammern `<` und `>` steht. Sie entsprechen keiner greifbaren CSS-Code-Einheit.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit vordefinierter Bedeutung, zum Beispiel der Wert `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Startwert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des übergeordneten Elements.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der {{cssxref("grid-area")}}-Eigenschaft zugewiesen wurde.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, z.B. bei [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, wie sie z.B. als Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen ist im CSS-Values-and-Units-Modul definiert. Weitere Typen werden in anderen Modulen beschrieben, bei denen sie spezifisch für die jeweilige Spezifikation sind — zum Beispiel die `fr`-Einheit im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul.

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9, optional mit `-` oder `+` vorangestellt.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Distanzen ({{cssxref("&lt;length&gt;")}}), Dauerzeiten ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("&lt;resolution&gt;")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout), geschrieben als `<number>` mit der `fr`-Einheit angehängt und verwendet für die Größenanpassung der Grid-Spuren.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}}-Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einem der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind ein `<dimension>` mit einer `s`- oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz`- oder `kHz`-Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheit von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können sowohl einen {{cssxref("&lt;dimension&gt;")}}- als auch einen {{cssxref("&lt;percentage&gt;")}}-Wert annehmen. In diesem Fall wird der Prozentwert in eine Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert annehmen kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert annehmen kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert annehmen kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert annehmen kann.

## Farbe

Das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich in CSS auf Farbe beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheit von `deg`, `grad`, `rad` oder `turn`, oder ein einheitenloses `<number>`, das als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, der spezifisch für die `<absolute-color-functions>` ist, von denen es ein Bestandteil ist.

## Bilder

Das [CSS-Bilder-Modul](/de/docs/Web/CSS/Guides/Images) definiert die Datentypen, die mit Bildern einschließlich Gradienten arbeiten.

- {{cssxref("&lt;image&gt;")}}
  - : Eine URL-Referenz zu einem Bild oder einem Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen mittels eines Farbhints.
- `<linear-color-stop>`
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbverlauf für diesen Teil des Gradienten anzuzeigen.
- `<linear-color-hint>`
  - : Eine `<length-percentage>`, um anzugeben, wie die Farbe interpoliert wird.
- `<ending-shape>`
  - : Verwendet für radiale Gradienten; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Gradienten. Dies akzeptiert einen Wert eines Schlüsselworts oder eines `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird so interpretiert, wie er für die {{cssxref("&lt;background-position&gt;")}}-Eigenschaft definiert ist.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions)-Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Addition (`+`) und Subtraktion (`-`) Operatoren. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Multiplikations (`*`) und Divisionsoperatoren (`/`). Beim Multiplizieren muss ein Wert einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Formen-Datentypen

Die [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) und [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Module definieren Formen-Datentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}, und {{cssxref("offset-path")}}-Eigenschaften verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Containerecke. Es wird von der {{cssxref("corner-shape")}} Kurzschreibweise und ihren [Bestandteileigenschaften](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) verwendet, um die Form anzugeben, die auf die betroffenen Containerecken angewendet wird.

## Alphabetisches Verzeichnis der Datentypen

- {{cssxref("absolute-size")}}
- {{cssxref("alpha-value")}}
- {{cssxref("angle")}}
- {{cssxref("angle-percentage")}}
- {{cssxref("baseline-position")}}
- {{cssxref("basic-shape")}}
- {{cssxref("blend-mode")}}
- {{cssxref("box-edge")}}
- {{cssxref("calc-keyword")}}
- {{cssxref("calc-sum")}}
- {{cssxref("color_value", "&lt;color&gt;")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("content-distribution")}}
- {{cssxref("content-position")}}
- {{cssxref("corner-shape-value")}} {{experimental_inline}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-function")}} {{experimental_inline}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("display-box")}}
- {{cssxref("display-inside")}}
- {{cssxref("display-internal")}}
- {{cssxref("display-legacy")}}
- {{cssxref("display-listitem")}}
- {{cssxref("display-outside")}}
- {{cssxref("easing-function")}}
- {{cssxref("filter-function")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("frequency")}}
- {{cssxref("frequency-percentage")}}
- {{cssxref("generic-family")}}
- {{cssxref("gradient")}}
- {{cssxref("hex-color")}}
- {{cssxref("hue")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("ident")}}
- {{cssxref("image")}}
- {{cssxref("integer")}}
- {{cssxref("length")}}
- {{cssxref("length-percentage")}}
- {{cssxref("line-style")}}
- {{cssxref("named-color")}}
- {{cssxref("number")}}
- {{cssxref("overflow_value", "&lt;overflow&gt;")}}
- {{cssxref("overflow-position")}}
- {{cssxref("percentage")}}
- {{cssxref("position_value", "&lt;position&gt;")}}
- {{cssxref("position-area_value", "&lt;position-area&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("relative-size")}}
- {{cssxref("resolution")}}
- {{cssxref("self-position")}}
- {{cssxref("shape")}} {{deprecated_inline}}
- {{cssxref("string")}}
- {{cssxref("system-color")}}
- {{cssxref("text-edge")}}
- {{cssxref("time")}}
- {{cssxref("time-percentage")}}
- {{cssxref("transform-function")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionsnotation](/de/docs/Web/CSS/Reference/Values/Functions)
