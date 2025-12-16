---
title: CSS-Datentypen
short-title: Data types
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörtern und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine besondere Art von [Komponententyp](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS Values and Units](/de/docs/Web/CSS/Guides/Values_and_units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Weitere Typen sind in den Spezifikationen definiert, auf die sie angewendet werden.

Nachfolgend finden Sie eine Referenz zu den Typen, die Ihnen am häufigsten begegnen werden. Es handelt sich jedoch nicht um eine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort gekennzeichnet, das zwischen den spitzen Klammern `<` und `>` platziert ist. Sie entsprechen keiner greifbaren CSS-Code-Einheit.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vorgegebene Schlüsselwörter
  - : Schlüsselwörter mit einer vorab definierten Bedeutung, beispielsweise der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weit gültige Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weit gültigen Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der Wert, der als Anfangswert der Eigenschaft angegeben ist.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft am Elternelement.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, beispielsweise der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine zitierte Zeichenfolge, die beispielsweise als Wert für die Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Zeiger auf eine Ressource, beispielsweise als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die meisten dieser Typen sind im Modul CSS-Werte und Einheiten definiert. Weitere Typen werden in anderen Modulen beschrieben, wo sie spezifisch für diese Spezifikation sind, zum Beispiel die `fr`-Einheit im Modul [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere dezimale Einheiten von 0 bis 9, optional mit `-` oder `+` vorangestellt.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer daran angehängten Einheit, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Distanzen ({{cssxref("&lt;length&gt;")}}), Zeitdauern ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("resolution")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout), geschrieben als ein `<number>` mit der `fr`-Einheit und verwendet für die Größenanpassung von Raster-Spuren.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}}-Typen werden verwendet, um Distanzen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind eine `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("angle")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind eine `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind eine `<dimension>` mit einer `s` oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind eine `<dimension>` mit einer `Hz` oder `kHz`-Einheit.
- {{cssxref("resolution")}}
  - : Ist eine `<dimension>` mit einer Einheit des `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen {{cssxref("&lt;dimension&gt;")}} oder einen {{cssxref("&lt;percentage&gt;")}}-Wert annehmen. In diesem Fall wird der Prozentwert zu einer Menge aufgelöst, die mit der zulässigen Dimension übereinstimmt. Eigenschaften, die ein Prozentwert zusätzlich zu einer Dimension akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder ein Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder ein Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder ein Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder ein Prozentwert als Wert akzeptieren kann.

## Farbe

Das [CSS-Farb](/de/docs/Web/CSS/Guides/Colors)-Modul definiert den Datentyp {{cssxref("&lt;color&gt;")}} und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als ein Schlüsselwort oder ein numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("hue")}}
  - : Gibt den `<angle>`, mit einer Einheitsbezeichnung von `deg`, `grad`, `rad` oder `turn`, oder ein einheitsloses `<number>`, das als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}} an, spezifisch für die `<absolute-color-functions>`, von denen es ein Bestandteil ist.

## Bilder

Das [CSS-Bilder](/de/docs/Web/CSS/Guides/Images)-Modul definiert die Datentypen, die sich mit Bildern befassen, einschließlich Verläufen.

- {{cssxref("image")}}
  - : Eine URL-Referenz auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbverläufen mit optionalen Übergangsinformationen unter Verwendung eines Farbhinweises.
- `<linear-color-stop>`
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbverlauf für diesen Teil des Gradienten anzuzeigen.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für radiale Verläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Gradienten. Diese akzeptiert einen Wert eines Schlüsselworts oder eines `<length>`, aber nicht eines Prozentwerts.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird so interpretiert wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktion](/de/docs/Web/CSS/Reference/Values/Functions#math_functions)-Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten enthält, die mit Addition (`+`) und Subtraktion (`-`) Operators durchsetzt sind. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten enthält, die mit Multiplikation (`*`) und Division (`/`) Operators durchsetzt sind. Beim Multiplizieren muss ein Wert einheitslos sein. Bei der Division muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder geschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen und in CSS-Mathematikfunktionen verwendet werden können.

## Form-Datentypen

Die [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) und [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Module definieren Form-Datentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Behälterecke. Es wird von der Kurznotationseigenschaft {{cssxref("corner-shape")}} und ihren [komponentenbildenden Eigenschaften](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) verwendet, um die Form zu spezifizieren, die auf betroffene Behälterecken angewendet wird.

## Alphabetisches Verzeichnis der Datentypen

- {{cssxref("absolute-size")}}
- {{cssxref("alpha-value")}}
- {{cssxref("angle")}}
- {{cssxref("angle-percentage")}}
- {{cssxref("axis")}}
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

- [CSS values and units](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions)
