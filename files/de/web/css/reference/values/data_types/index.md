---
title: CSS-Datentypen
short-title: Data types
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponenten-Werttypen](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Unten finden Sie eine Referenz der Typen, auf die Sie höchstwahrscheinlich stoßen werden, es ist jedoch keine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

In formaler CSS-Syntax werden Datentypen durch ein zwischen den spitzen Klammern `<` und `>` platziertes Schlüsselwort gekennzeichnet. Sie entsprechen keiner greifbaren CSS-Code-Entität.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenketten und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit vordefinierter Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weit verbreitete Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weit verbreiteten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der Wert, der als anfänglicher Wert der Eigenschaft angegeben wird.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft auf dem Elternelement.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurück.
    - {{CSSXref("revert-rule")}}
      - : Setzt die Kaskade auf den Wert einer früheren übereinstimmenden Stilregel zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, z. B. der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesene Name.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, zum Beispiel in [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenkette, wie sie für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrzahl dieser Typen ist im Modul für CSS-Werte und -Einheiten definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wo sie spezifisch für diese Spezifikation allein sind – zum Beispiel die `fr` Einheit im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul.

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9, optional vorangestellt mit `-` oder `+`.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine gebrochene Komponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit angehängt, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Entfernungen ({{cssxref("&lt;length&gt;")}}), Zeitdauern ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("resolution")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichen angehängt, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) eingeführt wurde, geschrieben als `<number>` mit der angehängten `fr`-Einheit und verwendet für Grid-Track-Größen.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}} Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("angle")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn` angehängt.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer `s` oder `ms` Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz` oder `kHz` Einheit angehängt.
- {{cssxref("resolution")}}
  - : Ist ein `<dimension>` mit einem Einheitenkennzeichen von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen {{cssxref("&lt;dimension&gt;")}} oder einen {{cssxref("&lt;percentage&gt;")}} Wert akzeptieren. In diesem Fall wird der Prozentwert zu einer Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, nutzen einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

Das Modul [CSS-Farbe](/de/docs/Web/CSS/Guides/Colors) definiert den {{cssxref("&lt;color&gt;")}} Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als ein Schlüsselwort oder ein numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig opak ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig opak ist.
- {{cssxref("hue")}}
  - : Gibt den `<angle>` an, mit einem Einheitenkennzeichen von `deg`, `grad`, `rad` oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbrads")}} spezifisch für die `<absolute-color-functions>`, deren Teil es ist.

## Bilder

Das [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) Modul definiert die Datentypen, die sich mit Bildern befassen, einschließlich Verläufen.

- {{cssxref("image")}}
  - : Eine URL-Referenz zu einem Bild oder zu einem Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhinweises.
- `<linear-color-stop>`
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbverlauf für diesen Teil des Gradienten anzugeben.
- `<linear-color-hint>`
  - : Eine `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Verwendet für radiale Verläufe; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Akzeptiert einen Wert eines Schlüsselwortes oder einer `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}} Datentyp wird wie für die Eigenschaft {{cssxref("background-position")}} definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwert wie `top` oder `left`, oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, die mit Additions- (`+`) und Subtraktions- (`-`) Operatoren unterbrochen werden. Dieser Datentyp erfordert, dass beide Werte Einheiten besitzen.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, die mit Multiplikations- (`*`) und Divisions- (`/`) Operatoren unterbrochen werden. Bei der Multiplikation muss ein Wert einheitenlos sein. Bei der Division muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Formdatentypen

Die Module [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) und [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) definieren Formdatentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Containerecke. Sie wird von der {{cssxref("corner-shape")}} Kurznotation-Eigenschaft und ihren [Bestandteileigenschaften](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) verwendet, um die Form zu spezifizieren, die auf betroffene Containerecken angewendet wird.

## Alphabetisches Verzeichnis von Datentypen

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
- {{cssxref("timeline-range-name")}}
- {{cssxref("time-percentage")}}
- {{cssxref("transform-function")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions)
